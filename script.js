const activities = [                        
            { title: "Clock", file: "AppAssets/Game_Clock/Clock.html" },            
            { title: "KBC", file: "AppAssets/Game_KBC/KBC.html" },
            { title: "Jumble", file: "AppAssets/Game_Jumble/Jumble.html" },
            { title: "Multichoice", file: "AppAssets/Game_MultipleChoice/MultiChoice.html" },
            { title: "Performance Tracker", file: "AppAssets/Games_PerformanceTracker/PerformanceTracker.html" },
            { title: "Grammer", file: "AppAssets/Games_Grammer/Grammer.html" }
                
                      
        ];

        function loadActivities() {
            const container = document.getElementById("container");
            container.innerHTML = ""; // Clear previous tiles

            activities.forEach(activity => {
                let tile = document.createElement("div");
                tile.classList.add("tile");

                let title = document.createElement("h2");
                title.innerText = activity.title;
                tile.appendChild(title);

                let button = document.createElement("button");
                button.innerText = "Play";
                button.onclick = () => window.open(activity.file, "_blank"); // Opens in new tab
                tile.appendChild(button);

                container.appendChild(tile);
            });
        }

        loadActivities();