<template>
  <footer>
    <div class="links">
      <div>
        <h4>LINKS RÁPIDOS</h4>
        <ul>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
        </ul>
      </div>
      <div>
        <h4>bla</h4>
        <ul>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
        </ul>
      </div>
      <div>
        <h4>bla</h4>
        <ul>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
          <li>
            <a href=""> Lorem ipsum </a>
          </li>
        </ul>
      </div>
      <div>
        <h4>contato</h4>
        <ul>
          <li>BR-280 - Colégio Agrícola, Araquari - SC, 89245-000</li>
          <li>fabrica@ifc.edu.br</li>
          <li>(47) 3803-7200</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="container">
      <img src="src/assets/images/logos/logo_ifc.png" alt="" />
      <h5>© Todos os direitos reservados</h5>
      <img src="src/assets/images/logos/LogoHorizontal.svg" alt="" />
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
hr {
  width: 75%;
}

h5 {
  color: var(--background-color);
}

h4 {
  text-transform: uppercase;
  color: var(--primary-color);
}

footer {
  width: 100%;
  height: 57vh;
  padding: 56px 0;
  background-color: var(--black);
  color: var(--background-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

footer .links,
.container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

footer .container {
  align-items: center;
}

footer .links ul li {
  list-style-type: none;
  margin: 5px 0;
}
footer .links ul li a {
  text-decoration: none;
  color: var(--white);
}
footer .links ul li a:hover {
  text-decoration: underline;
}
footer img {
  width: 200px;
}
</style>
