<template>
  <footer>
    <div>
      <h3 class="main-title">Company _____</h3>
      <button>> About Us</button>
      <button>> Contact Us</button>
      <button>> Reservatuin</button>
      <button>> Privacy Policy</button>
      <button>> Terms & Condition</button>
    </div>
    <div>
      <h3 class="main-title">Contact _____</h3>
      <p>
        <font-awesome-icon icon="fa-solid fa-location-dot" /> 123 Street, New
        York, USA
      </p>
      <p><font-awesome-icon icon="fa-solid fa-phone" /> +012 345 67890</p>
      <p><font-awesome-icon icon="fa-solid fa-envelope" /> info@example.com</p>
    </div>
    <div>
      <h3 class="main-title">Opening _____</h3>
      <p>Monday - Saturday</p>
      <p>09AM - 09PM</p>
      <p>Sunday</p>
      <p>10AM - 08PM</p>
    </div>
    <div>
      <h3 class="main-title">Newsletter _____</h3>
      <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
      <div class="sign-up">
        <input type="text" placeholder="Your email" />
        <button>SIGN UP</button>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #0f172b;
  padding-bottom: 64px;
}
footer > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 220px;
}
footer > div > p {
  margin-top: 10px;
  color: white;
}
footer button {
  background: none;
  font-weight: 900;
  border: none;
  margin-top: 8px; 
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
footer button:hover {
  letter-spacing: 1px;
}
.sign-up input{
  width: 100% ;
  height: 48px;
  padding: 8px;
}
.sign-up{
  position: relative;
  margin-top: 24px;
}
.sign-up button {
  position: absolute;
  right: 8px;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
  background: #fea116;
  font-weight: 600;
}
</style>
