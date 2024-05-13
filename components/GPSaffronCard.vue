<template>
  <div class="card">
    <div class="border"></div>
    <div class="content">
      <div class="logo">
        <div class="logo1">
          GP
        </div>
        <div class="logo2">
          Saffron
        </div>
        <span class="trail"></span>
      </div>
      <a href="https://gpsaffron.com" class="logo-bottom-text">gpsaffron.com</a>
    </div>
    <span class="bottom-text">GP Saffron</span>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 200px;
  background: #FDE3DE;
  position: relative;
  display: grid;
  place-content: center;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

#logo-main, #logo-second {
  height: 100%;
}

#logo-main {
  fill: #bd9f67;
}

#logo-second {
  padding-bottom: 10px;
  fill: none;
  stroke: #bd9f67;
  stroke-width: 1px;
}

.border {
  position: absolute;
  inset: 0px;
  border: 2px solid #F04623;
  opacity: 0;
  transform: rotate(10deg);
  transition: all 0.5s ease-in-out;
}

.bottom-text {
  position: absolute;
  left: 50%;
  bottom: 13px;
  transform: translateX(-50%);
  font-size: 6px;
  text-transform: uppercase;
  padding: 0px 5px 0px 8px;
  color: #F04623;
  background: #FDE3DE;
  opacity: 0;
  letter-spacing: 7px;
  transition: all 0.5s ease-in-out;
}

.content {
  transition: all 0.5s ease-in-out;
}

.content .logo {
  height: 35px;
  position: relative;
  width: 33px;
  overflow: hidden;
  transition: all 1s ease-in-out;
}

.content .logo .logo1 {
  height: 33px;
  position: absolute;
  left: 0;
  font-size:1.3rem;
  font-weight:bolder;
  color:#F04623;
}

.content .logo .logo2 {
  height: 33px;
  position: absolute;
  left: 40px;
  font-size:1.3rem;
  font-weight:bold;
  color:#F04623;
}

.content .logo .trail {
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.content .logo-bottom-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
  color: #F04623;
  padding-left: 8px;
  font-size: 11px;
  opacity: 0;
  letter-spacing: none;
  transition: all 0.5s ease-in-out 0.5s;
  text-decoration:none;
}

.card:hover {
  /*border-radius: 0;*/
  transform: scale(1.1);
}

.card:hover .logo {
  width: 125px;
  animation: opacity 1s ease-in-out;
}

.card:hover .border {
  inset: 15px;
  opacity: 1;
  transform: rotate(0);
  border-radius: 10px;
}

.card:hover .bottom-text {
  letter-spacing: 3px;
  opacity: 1;
  transform: translateX(-50%);
}

.card:hover .content .logo-bottom-text {
  opacity: 1;
  letter-spacing: 5.5px;
}

.card:hover .trail {
  animation: trail 1s ease-in-out;
}

@keyframes opacity {
  0% {
    border-right: 1px solid transparent;
  }

  10% {
    border-right: 1px solid #bd9f67;
  }

  80% {
    border-right: 1px solid #bd9f67;
  }

  100% {
    border-right: 1px solid transparent;
  }
}

@keyframes trail {
  0% {
    background: linear-gradient(90deg, rgba(240, 70, 35, 0) 90%, rgb(240, 70, 35) 100%);
    opacity: 0;
  }

  30% {
    background: linear-gradient(90deg, rgba(240, 70, 35, 0) 70%, rgb(240, 70, 35) 100%);
    opacity: 1;
  }

  70% {
    background: linear-gradient(90deg, rgba(240, 70, 35, 0) 70%, rgb(240, 70, 35) 100%);
    opacity: 1;
  }

  95% {
    background: linear-gradient(90deg, rgba(240, 70, 35, 0) 90%, rgb(240, 70, 35) 100%);
    opacity: 0;
  }
}
</style>