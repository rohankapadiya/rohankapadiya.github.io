import React from "react";
import './Projects.css';
import VanillaTilt from './vanilla';

function Projects(){

      
    return(
        
        <div className="Projects" id="Projects">

            <h1 id="heading">Projects</h1>


            <div className="list-projects">
            <div className="Project1">
                            <article class="card">
                <img
                    class="card__background"
                    src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/61c22ea8204d60108c42a8f3_full-portfolio-course.png"
                    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                    width="1920"
                    height="2193"
                />
                <div class="card__content | flow">
                    <div class="card__content--container | flow">
                    <h2 class="card__title">PORTFOLIO</h2>
                    <p class="card__description">
                    a web application with MongoDB integration and dynamic modules resulting in increased productivity and faster data retrieval time.                    </p>
                    </div><a href="https://rohankapadiya.github.io/" target="_blank" rel="noreferrer">
                    <button class="card__button" >Live Demo</button> </a>
                </div>
                </article>
            </div>

            <div className="Project1">
                            <article class="card">
                <img
                    class="card__background"
                    src="https://www.sitejet.io/images/1024/3344712/image2.png"
                    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                    width="1920"
                    height="2193"
                />
                <div class="card__content | flow">
                    <div class="card__content--container | flow">
                    <h2 class="card__title">CLIMATE CHAMP</h2>
                    <p class="card__description">
                     a React web app that display real-time weather details for different cities, providing users with up-to-date information at their fingertips.                   </p>
                    </div><a href="https://climate-champion.netlify.app/" target="_blank" rel="noreferrer">
                    <button class="card__button" >Live Demo</button> </a>
                </div>
                </article>
            </div>



            
            <div className="Project1">
                            <article class="card">
                <img
                    class="card__background"
                    src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1690218017~exp=1690218617~hmac=0fc7017ad27eabfa64221e00aa975357acf6afcf23d9e63bbb5e34fa75446560"
                    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                    width="1920"
                    height="2193"
                />
                <div class="card__content | flow">
                    <div class="card__content--container | flow">
                    <h2 class="card__title">GIFTIFY</h2>
                    <p class="card__description">
                    a dynamic web app representing a gift shop, where all items are dynamically showcased and categorized.  </p>
                    </div><a href="https://giftify-jdnr.onrender.com/" target="_blank" rel="noreferrer">
                    <button class="card__button" >Live Demo</button> </a>
                </div>
                </article>
            </div>
           



           
        </div>
        
        
        
        <div className="list-projects">
        <div className="Project1">
                            <article class="card">
                <img
                    class="card__background"
                    src="https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg"
                    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                    width="1920"
                    height="2193"
                />
                <div class="card__content | flow">
                    <div class="card__content--container | flow">
                    <h2 class="card__title">EMPLOYEEVUE</h2>
                    <p class="card__description">
                    a web application with MongoDB integration and dynamic modules resulting in increased productivity and faster data retrieval time.                    </p>
                    </div><a href="https://github.com/rohankapadiya/EMPLOYEEVUE" target="_blank" rel="noreferrer">
                    <button class="card__button" >Github</button> </a>
                </div>
                </article>
            </div>

            <div className="Project1">
                            <article class="card">
                <img
                    class="card__background"
                    src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?w=996&t=st=1690218055~exp=1690218655~hmac=1cd9c6f98134a79bd55798897413fe72789cb9d3159db9cb53a331b794fa14a9"
                    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                    width="1920"
                    height="2193"
                />
                <div class="card__content | flow">
                    <div class="card__content--container | flow">
                    <h2 class="card__title">Maze Generation</h2>
                    <p class="card__description">
                    a Python-based Minheap data structure and implemented graph algorithms, including minimum spanning tree.                   </p>
                    </div><a href="https://github.com/rohankapadiya/MinHeap--Minimum-Spanning-Tree--Maze-Generation" target="_blank" rel="noreferrer">
                    <button class="card__button" >Github</button> </a>
                </div>
                </article>
            </div>
           
        </div>
        
        
        
        
        
        
        </div>
    )
}
export default Projects;