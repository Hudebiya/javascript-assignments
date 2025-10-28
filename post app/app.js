              //    POST APP

var firebaseConfig;
        var app;
        var db;
        var auth;
        var userId;
        var appId;
        var goalsCollectionPath;

        // Firestore ke logs on karne ke liye (Debugging mein madad)
        firebase.firestore.setLogLevel('debug');

        // --- Utility/Helper Functions (Ch 11-20: Functions, Ch 21-30: Conditions) ---

        var showModal = function(title, content) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-content').innerText = content;
            document.getElementById('message-modal').classList.add('show');
        };

        var hideModal = function(modalId) {
            document.getElementById(modalId).classList.remove('show');
        }

        // Event listeners for closing generic message modal
        document.getElementById('modal-close-button').addEventListener('click', function() {
            hideModal('message-modal');
        });
        document.getElementById('modal-close-button-x').addEventListener('click', function() {
            hideModal('message-modal');
        });

        var setStatus = function(message, isError) {
            var statusDiv = document.getElementById('status-message');
            statusDiv.innerHTML = '<p class="mb-0 fw-bold">' + (isError ? 'Ghalti (Error): ' : 'Status: ') + message + '</p>';
            statusDiv.classList.remove('d-none', 'alert-info', 'alert-danger', 'border-info', 'border-danger');
            statusDiv.classList.add(isError ? 'alert-danger' : 'alert-info', isError ? 'border-danger' : 'border-info');
        };

        // --- Core Application Logic (Ch 40-52: Objects aur Advanced Functions) ---

        var initFirebase = function() {
            // async/await use karna zaroori hai promises ko handle karne ke liye
            (async function() {
                try {
                    setStatus("Firebase shuru ho raha hai aur user authenticate ho raha hai...", false);
                    
                    // Ch 1-10: Variable assignment
                    appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
                    firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');

                    if (Object.keys(firebaseConfig).length === 0) {
                        showModal("Configuration Ghalti (Error)", "Firebase config nahi mila. Data save nahi ho sakta.");
                        return;
                    }

                    // Global Firebase functions ka istemal
                    app = firebase.initializeApp(firebaseConfig);
                    auth = app.auth();
                    db = firebase.firestore();

                    // Authentication
                    var initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
                    
                    if (initialAuthToken) {
                        // Ch 40-50: Promises ko handle karna
                        await auth.signInWithCustomToken(initialAuthToken);
                    } else {
                        await auth.signInAnonymously();
                    }

                    userId = auth.currentUser ? auth.currentUser.uid : crypto.randomUUID();
                    
                    // Collection Path (Public data ke liye)
                    goalsCollectionPath = "/artifacts/" + appId + "/public/data/goals";

                    setStatus("Authentication kamyab (successful). Maqsad Tracker tayyar hai!", false);
                    document.getElementById('submit-button').disabled = false; 
                    document.getElementById('user-id-display').innerText = userId.substring(0, 10) + '...';

                    listenForGoals();

                } catch (error) {
                    console.error("Firebase Shuru Hone Mein Ghalti:", error);
                    setStatus("Shuruaati Ghalti: " + error.message, true);
                }
            })(); // Turant (immediately) chalne wala function
        };

        // --- READ Operation (Maqsad Dikhana) ---

        var listenForGoals = function() {
            if (!db) return;

            // Query: Saare goals lein, naye goals pehle dikhayein
            var goalsQuery = db.collection(goalsCollectionPath).orderBy("timestamp", "desc");
            
            // onSnapshot real-time listener set karta hai (Ch 50-52: Event Handlers)
            goalsQuery.onSnapshot(function(snapshot) {
                var container = document.getElementById('goals-container');
                var noGoalsMessage = document.getElementById('no-goals-message');
                container.innerHTML = ''; // Purane goals saaf karein
                
                if (snapshot.empty) {
                    noGoalsMessage.classList.remove('d-none');
                    container.appendChild(noGoalsMessage);
                    return;
                }

                noGoalsMessage.classList.add('d-none');

                // Ch 26-30: Arrays/Data par loop karna (forEach)
                snapshot.forEach(function(doc) {
                    var goalData = doc.data();
                    var docId = doc.id;
                    
                    var goalElement = document.createElement('div');
                    var isCompleted = goalData.progress === 100;
                    
                    // Ch 31-39: DOM Manipulation aur Bootstrap Styling
                    goalElement.className = "card shadow-sm border-0 transition-300 " + (isCompleted ? 'completed' : '');
                    
                    // Progress Bar Styling
                    var progressBarClass = isCompleted ? 'bg-success' : 'btn-purple';
                    var progressTextClass = isCompleted ? 'text-success' : 'text-primary';
                    
                    // Goal Card HTML (Bootstrap classes ke saath)
                    goalElement.innerHTML = `
                        <div class="card-body d-flex justify-content-between align-items-start">
                            <div class="flex-grow-1">
                                <h3 class="h5 fw-bold ${progressTextClass} mb-1">${goalData.title}</h3>
                                <p class="text-secondary mb-2">${goalData.progress}% Poora ${isCompleted ? '🎉' : ''}</p>
                                
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar ${progressBarClass}" role="progressbar" style="width: ${goalData.progress}%;" aria-valuenow="${goalData.progress}" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div class="text-muted small mt-3 pt-2 border-top">
                                    <p class="mb-0">Banaya gaya: ${new Date(goalData.timestamp ? goalData.timestamp.toDate() : Date.now()).toLocaleDateString('en-US')} by ${goalData.authorId.substring(0, 8)}...</p>
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-2 ms-4">
                                <!-- Edit Button -->
                                <button class="edit-button btn btn-sm btn-warning rounded-circle shadow-sm" 
                                    data-id="${docId}" data-title="${goalData.title}" data-progress="${goalData.progress}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                                </button>
                                <!-- Delete Button -->
                                <button class="delete-button btn btn-sm btn-danger rounded-circle shadow-sm" 
                                    data-id="${docId}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                </button>
                            </div>
                        </div>
                    `;
                    
                    container.appendChild(goalElement);
                });
                
                // Render hone ke baad Edit aur Delete buttons par event listeners lagayein
                attachGoalEventListeners();
                
            }, function(error) {
                console.error("Goals load karne mein ghalti: ", error);
                setStatus("Goals load karne mein nakam: " + error.message, true);
            });
        };

        // --- CREATE Operation (Form Submission) ---

        document.getElementById('goal-form').addEventListener('submit', function(event) {
            event.preventDefault(); 
            // Promises ko handle karne ke liye function ko async mein lapet liya gaya hai
            (async function() {
                var titleInput = document.getElementById('goal-title');
                var progressInput = document.getElementById('goal-progress');
                
                var title = titleInput.value.trim();
                var progress = parseInt(progressInput.value, 10);
                var submitButton = document.getElementById('submit-button');
                
                // Ch 21-25: Buniyadi Validation
                if (title === "" || isNaN(progress) || progress < 0 || progress > 100) {
                    showModal("Validation Ghalti", "Baraye meharbani sahi Maqsad ka Naam aur Progress (0-100) daalein.");
                    return;
                }

                submitButton.disabled = true;
                submitButton.innerText = "Save ho raha hai...";

                try {
                    // Prepare the goal object
                    var newGoal = {
                        title: title,
                        progress: progress,
                        authorId: userId,
                        // Global Firebase Function ka istemal
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    };

                    // Ch 40-50: Asynchronous operation
                    await db.collection(goalsCollectionPath).add(newGoal);
                    
                    setStatus("Maqsad kamyabi se shamil kar liya gaya!", false);
                    
                    // Form fields saaf karein
                    titleInput.value = '';
                    progressInput.value = '0';

                } catch (e) {
                    console.error("Document shamil karne mein ghalti: ", e);
                    showModal("Save Ghalti", "Maqsad save karne mein nakam: " + e.message);

                } finally {
                    submitButton.disabled = false;
                    submitButton.innerText = "Maqsad Shamil Karein";
                }
            })(); // Turant (immediately) chalne wala function
        });

        // --- UPDATE aur DELETE Event Listeners lagana ---

        var attachGoalEventListeners = function() {
            // DELETE listener
            var deleteButtons = document.querySelectorAll('.delete-button');
            // Ch 26-30: Multiple elements par loop karna
            deleteButtons.forEach(function(button) {
                // Ch 50-52: Event Handling
                button.addEventListener('click', function() {
                    var docIdToDelete = this.getAttribute('data-id');
                    // Promises ko handle karne ke liye function ko call kiya
                    (async function() { await deleteGoal(docIdToDelete); })();
                });
            });

            // EDIT listener (Modal kholne ke liye)
            var editButtons = document.querySelectorAll('.edit-button');
            editButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    var docId = this.getAttribute('data-id');
                    var title = this.getAttribute('data-title');
                    var progress = this.getAttribute('data-progress');
                    
                    // Modal form mein data bharein (Ch 31-39: DOM Manipulation)
                    document.getElementById('edit-doc-id').value = docId;
                    document.getElementById('edit-goal-title').value = title;
                    document.getElementById('edit-goal-progress').value = progress;
                    
                    document.getElementById('edit-modal').classList.add('show');
                });
            });
        };

        // --- DELETE Operation ---
        var deleteGoal = async function(docId) {
            // Ch 40-50: try...catch se Errors ko handle karna
            try {
                // Global Firebase Function ka istemal
                var goalRef = db.collection(goalsCollectionPath).doc(docId);
                await goalRef.delete();
                setStatus("Maqsad kamyabi se mita diya gaya!", false);
            } catch (e) {
                console.error("Document mitane mein ghalti: ", e);
                showModal("Mitane Ki Ghalti", "Maqsad mitaya nahi ja saka: " + e.message);
            }
        };

        // --- UPDATE Operation (Modal Form Submission) ---
        document.getElementById('edit-form').addEventListener('submit', function(event) {
            event.preventDefault();
            (async function() {
                var docIdToUpdate = document.getElementById('edit-doc-id').value;
                var newTitle = document.getElementById('edit-goal-title').value.trim();
                var newProgress = parseInt(document.getElementById('edit-goal-progress').value, 10);

                // Ch 21-25: Validation
                if (newTitle === "" || isNaN(newProgress) || newProgress < 0 || newProgress > 100) {
                    showModal("Validation Ghalti", "Baraye meharbani sahi Maqsad ka Naam aur Progress (0-100) daalein.");
                    return;
                }

                try {
                    // Global Firebase Function ka istemal
                    var goalRef = db.collection(goalsCollectionPath).doc(docIdToUpdate);
                    
                    // Ch 40-50: Asynchronous update operation
                    await goalRef.update({
                        title: newTitle,
                        progress: newProgress,
                    });
                    
                    hideModal('edit-modal');
                    setStatus("Maqsad kamyabi se update ho gaya!", false);

                } catch (e) {
                    console.error("Document update karne mein ghalti: ", e);
                    showModal("Update Ghalti", "Maqsad update nahi ho saka: " + e.message);
                }
            })(); // Turant (immediately) chalne wala function
        });

        // Edit Modal ke Cancel buttons par hideModal function call karna
        document.getElementById('cancel-edit-button').addEventListener('click', function() {
            hideModal('edit-modal');
        });
        document.getElementById('cancel-edit-button-x').addEventListener('click', function() {
            hideModal('edit-modal');
        });

        // Application ko shuru karna (Ch 50-52: Shuruaati function call)
        initFirebase();