<script>
export default {}
</script>

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
      <span>© Todos os direitos reservados</span>
      <img src="src/assets/images/logos/LogoHorizontal.svg" alt="" />
    </div>
  </footer>
</template>


<style scoped>
hr {
  width: 75%;
}


h4 {
  text-transform: uppercase;
  color: var(--type-links-footer);
}

footer {
  width: 100%;
  height: 57vh;
  padding: 56px 0;
  background-color: var(--background-color-footer);
  color: var(--color-links-footer);
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
  color: var(--color-links-footer);
}
footer .links ul li a:hover {
  text-decoration: underline;
}
footer img {
  width: 200px;
}
</style>
