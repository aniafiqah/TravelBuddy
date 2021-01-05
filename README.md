# TravelBuddy:airplane:-----:warning:UNDER CONSTRUCTION, SILA EDIT:warning:

TravelBuddy is bla bla.

:globe_with_meridians:[TravelBuddy](https://meran0.github.io/TravelBuddy/) .


Group Members:
* MUHAMMAD IKRAM BIN IQBAL FITHRI   
  * 1912071 | 
* MMUHAMMAD IMRAN BIN MOHAMAD
  * 1912837 | 
* NURULAIMI HANNANI BINTI MOHAMMAD
  * 1912728 | 
* ANI AFIQAH BINTI ZAMRUD
  * 1912406 | 
* NUR QHAISARA BINTI MOHD ZAKZAM
  * 1913074 | 

## Header

HTML
```html
<body>
    <header>
    <div class="tab">
      <nav>
        <li><a href="homepage.html">Homepage</a></li>
        <li><a href="login.html"> Login</a></li>
        <li><a href="registration.html"> Register </a></li>
      </nav>
    </div>

    <div class="nav_bar">
      <ul>
        <li><a href="event.html">Event</a></li>
        <li><a href="registration.html">Registration</a></li>
        <li><a href="booking.html">Booking</a></li>
        <li><a href="Contact.html" id="onlink">Contact</a></li>
      </ul>
    </div>
  </header>
  </body>
```

CSS
```css
@import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap');

      * {
        font-family: 'Jost', sans-serif;
        list-style: none;
        text-decoration: none;
        margin: 0px;
        padding: 0px;
      }

      body {
        width: auto;
        margin: 0 auto;
        background: #f7f6f6;
        box-sizing: border-box;
        overflow: auto;
      }

      header {
  background-color: #ebded4;
  background-size: cover;
  background-position: center;
  height: 15vh;
  margin: 0;
  padding: 0;
}



.nav_bar {
  margin: 0 auto;
  width: 860px;
  padding: 0px 20px 0px 20px;
  height: 64px;
  margin-left: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.nav_bar ul {
  padding: 0;
  list-style: none;
}

.nav_bar ul li {
  margin-top: 8.8vh;
  float: left;
  font-size: 16px;
  font-weight: bold;
}

.nav_bar ul li a {
  text-decoration: none;
  color: black;
  background: #fff;
  border-bottom: none;
  padding: 22px 20px 20px 20px;
  -webkit-border-top-right-radius: 10px;
  -webkit-border-top-left-radius: 10px;
  -moz-border-radius-topLeft: 10px;
  -moz-border-radius-topRight: 10px;
  width: 100px;
  display: block;
  text-align: center;
  border-style: solid;
  border-color: black;
  border-bottom: none;
  height: 2px;
}

.nav_bar ul li a:hover {
  text-decoration: none;
  color: #fff;
  background: #add4d4;
  -moz-transition: background-color 200ms ease-in;
  -webkit-transition: background-color 200ms ease-in;
  -ms-transition: background-color 200ms;
}

.nav_bar ul li a#onlink {
  background: #add4d4;
  color: #fff;
  border-bottom: none;
}

.nav_bar ul li a#onlink:hover {
  color: #000000;
}

nav {
  float: right;
  list-style-type: none;
  margin-top: 25px;
}

nav li {
  display: inline-block;
}

nav li a {
  text-decoration: none;
  color: #000000;
  padding: 5px 20px;
  transition: 0.5s;
  margin-top: 5px;
  margin-right: 10px;
}
```

## Title

HTML
```html
<div class="title"><br>

    <div class="logo">
      <img src="travel1.png" alt="travelbuddy" width="100px" height="100px">
      <h1 id="proname">TRAVELBUDDY</h1>
    </div><br>

    <p id="con">C O N T A C T</p>
    <br><br><br><br><br>

  </div><br>
```

CSS
```css
.title {
  float: above;
  text-align: center;
  line-height: 0.5;
  padding-top: 30px;
}

.title p {
  letter-spacing: 5px;
}

.title .logo {
  margin-top: 20px;
  width: 100%;
  display: flex;
  /* margin: 0 auto; */
  /* padding-left: 25%; */
  justify-content: center;
  align-items: center;
}

#proname {
  font-family: 'Schoolbell', cursive;
  font-size: 5em;
  letter-spacing: 10px;
}

#prename {
  font-size: 3em;
}
```


## Footer
