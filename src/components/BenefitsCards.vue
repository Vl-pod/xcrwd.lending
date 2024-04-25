<template>
    <div class="container">
        <h2 class="team-header">xcrwd.io benefits to web3:</h2>

        <div class="grid">
            <!-- Vevn Exchange -->
            <div class="card">
                <p>
                    Motivated beta testers community would help with increasing web3 products quality and stability
                </p>
            </div>

            <div class="card">
                <p> Internal projects teams would get useful and detailed feedback from beta-testers and
        experts about product issues</p> 
        <!-- - structured reports with steps, screenshots/casts, logs and
        other usefull additional information -->
            </div>

            <div class="card">
                <p>Stable releases with minimum issues and boost for delivering complex features to users -
        by beta and crowd testing flow for releases </p>
            </div>


            <!-- Vevn Academy -->
            <div class="card">
                <p>Crowd testing around the world: user-stories testing, corner cases testing, A/B testing,
        special tasks for beta testers, and much more...</p>
        <!-- to check necessary for project cases at time, testing on a
        plenty number of devices, conditions, regions and environments, collecting feedback about
        features and other cases from community of beta testers, etc… -->
            </div>

            <!-- Trade like a Pro -->
            <!-- <div class="card card-black">

            </div> -->

            <!-- Become a creator -->
            <div class="card">
                <p>Internal QA teams would be more focused on autotests, business features testing, products
        stability and growth</p>
            </div>

            <div class="card">
                <p>Hiring QA (Dev, etc.) engineers from platform in future</p>
            </div>

        </div>
    </div>
</template>

<style>
.container {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 3rem;
}

.team-header {
    font-family: "Kode Mono", monospace;
}


.container p {
    font-size: 1.125rem;
    /* 18px */
    margin-bottom: 48px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 24px;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

.card {
    background-color: white;
    border-radius: 0.5rem;
    padding: 24px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0px 0px 20px 0px rgba(238, 0, 255, 0.5);
}


.card-black {
    background-color: black;
    color: white;
}

.card h2 {
    font-size: 1.125rem;
    /* 18px */
    font-weight: 600;
    margin-bottom: 12px;
}

.card p {
    margin-bottom: 24px;
}

.card a {
    color: #4299e1;
    font-weight: 600;
}

.card a:hover {
    color: #2b6cb0;
}

.card-black a {
    color: #63b3ed;
}

.card-black a:hover {
    color: #3182ce;
}

.card img {
    margin-top: 16px;
}

@media screen and (width < 1024px) { 
    .container p {
        font-size: 14px;
    }
    .container h2 {
        font-size: 26px;
    }
}
</style>