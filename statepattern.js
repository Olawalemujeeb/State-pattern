const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };
  this.change = function (state) {
    currentState = state;
  };
};
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
       
        <div class="container headd mt-5">
      <h1>MacTech Nigeria</h1> <br>
      <p>
        Website Development, Mobile App Solutions, SEO and Digital Marketing
        Company .We Develop Business Website, Ecommerce Website , Android and
        IOS App at an Affordable Price
      </p>
    
        <button class="btn">Get Started</button>
        <button class="btn">Learn More</button>
      </div>
    </div>`;
};
// About State
const aboutState = function (page) {
  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = `
    <div class="aboutt">
    <div class="abt-img">
        <img src="./myimg/team/team-1.jpg" alt="">
    </div>
    <div class="abt-txt">
       <h2>About Us </h2>
       <h4>Developer <span>& Designer </span> </h4>
       <p> I am a front end web Developer , I can provide clean code and pixel perfect design. I also make the website more and more interactive with web animations.  I can provide clean code and pixel perfect design . I also make the website more and more interactive with web animations. A responsive design makes your website accesible  to all users, regardless of their device</p>
       <button>Let's Talk</button>
    </div>
</div>
  `;
};
const servicesState = function (page) {
  document.querySelector("#heading").textContent = "Our Services";
  document.querySelector("#content").innerHTML = `
  <div class="container serve">
  <div class="services">
  <div class="row">
      <div class="col-md-3">
        <div class="one">
          <span class="fa fa-camera"></span>
          <h3>Photography</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            corrupti atque maxime aliquid, ab labore quo cumque doloremque,
            minus eius ea obcaecati dicta quis. Soluta? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button>Read More</button>
          </p>
        </div>
      </div>
      <div class="col-md-1"></div>
   
    <div class="col-md-3">
      <div class="one">
        <span class="fa fa-video-camera"></span>
        <h3>Video Making</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          corrupti atque maxime aliquid, ab labore quo cumque doloremque,
          minus eius ea obcaecati dicta quis. Soluta? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>Read More</button>
        </p>
      </div>
    </div>
    <div class="col-md-1"></div>
  <div class="col-md-3">
    <div class="one">
      <span class="fa fa-desktop"></span>
      <h3>Web Design</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        corrupti atque maxime aliquid, ab labore quo cumque doloremque,
        minus eius ea obcaecati dicta quis. Soluta? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Read More</button>
      </p>
    </div>
  </div>
</div>
</div>
</div>
  `;
};
const contactState = function (page) {
  document.querySelector("#heading").textContent = "Contact us";
  document.querySelector("#content").innerHTML = `
<section class="contact mt-5">



  <div class="contact-box">
           <div class="box-001" >
                    <i class="fa fa-home" ></i>
                  <h3>Visit Us</h3> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
                     <p>A108 Adam Street New York NY 535022</p>
            </div>


             <div class="box-00" >
                        <i class="fa fa-envelope" ></i>
                     <h3>Contact us</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                       <p >info@mujavibez.com</p>
               </div>


          <div class="box-00">
                   <i class="fa fa-phone""></i>

               <h3>Call Us</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <p>+234 9070026747</p>
        </div>
</div>
  `;
};
const page = new PageState();

// Init the first state
page.init();
// UI Vars
const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");

// Home
home.addEventListener("click", (e) => {
  page.change(new homeState());

  e.preventDefault();
});
// About
about.addEventListener("click", (e) => {
  page.change(new aboutState());

  e.preventDefault();
});
// services
services.addEventListener("click", (e) => {
  page.change(new servicesState());

  e.preventDefault();
});
// Contact
contact.addEventListener("click", (e) => {
  page.change(new contactState());

  e.preventDefault();
});
