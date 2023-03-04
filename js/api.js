const loadFeatures = async() => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
const res = await fetch(url);
const data = await res.json();
disPlay(data.data.tools);
}



const disPlay= features =>{
    const featuresContainer = document.getElementById('feature-container');
    features.forEach(f => {
        const featureDiv = document.createElement('div');
        featureDiv.classList.add('col');
        featureDiv.innerHTML = `
            <div class="card h-100 p-3 "> 
            
            <img src="${f.image}" class="card-img-top" alt="...">
          
                <div class="card-body"> 
                  <h5 class="card-title">Features</h5>
                  <p class="card-text text-secondary-emphasis">1. ${f.features[0]}</p>
                  <p class="card-text text-secondary-emphasis">2. ${f.features[1]}</p>
                  <p class="card-text text-secondary-emphasis">3. ${f.features[2]}</p>
                </div>
                <div class="card-footer">
                    <h5 class="card-title">${f.name}</h5>
                    <div class="d-flex justify-content-between"> 
                    <div>
                    
                    <img src="./images/Frame.png" class="" alt="...">
                    <small class="">${f.published_in}</small>
                    </div>
                    <button type="image" class="btn btn-primary bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./images/frame2.png"  alt="..."> </button>
                    </div>

                </div>
            </div>
              `;
        featuresContainer.appendChild(featureDiv);

        
    });

}

//Adding modals


loadFeatures();


