<script>
export default {}
</script>

<template>
  <footer>
    <div class="links">
      <div>
        <img src="/src/assets/images/logos/LogoFabricaVerticalCor.svg" alt="" />
      </div>

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
        <h4>contato</h4>
        <ul>
          <li>BR-280 - Colégio Agrícola, Araquari - SC, 89245-000</li>
          <li>fabrica@ifc.edu.br</li>
          <li>(47) 3803-7200</li>
        </ul>
      </div>
    </div>
    <div class="container">
      <span>© Todos os direitos reservados</span>
    </div>
  </footer>
</template>

<style scoped>
h4 {
  text-transform: uppercase;
  color: var(--primary-color);
}

footer {
  width: 100%;
  height: 48vh;
  padding: 56px 145px;
  background-color: var(--bg-black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
footer .links {
  justify-content: space-between;
  display: flex;
}
footer .links,
.container {
  width: 100%;
}

footer .container {
  display: flex;
  justify-content: center;
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
