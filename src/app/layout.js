import './globals.css'
import styles from './layout.module.css'

export const metadata = {
  title: 'Grão de Café',
}

function Logo({x, y}){
  return(
    <p style={{left: x, top: y}} className={styles.logo}>Bean Scene</p>
  )}

function ItemMenu({nome}){

  return(
    <p className={styles.itemMenu}>{nome}</p>
  );
}

function Menu({children, x, y}){
  return(
    <ul style={{left: x, top: y}} className={styles.menu}>
      {children.map((itemMenu) => (<li key={itemMenu.nome}>{itemMenu}</li>))}
    </ul>
  );
}

function Login({x, y}){
  return(
    <div style={{left: x, top: y}} className={styles.caixaLogin}>
      <a className={styles.login}>Login</a>
      <button className={styles.botaoCadastro}>Cadastrar</button>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header>
          <Logo x={135} y={46}/>
          <Menu x={435} y={60}>
            <ItemMenu nome="Pagina inicial"/>
            <ItemMenu nome='Menu' />
            <ItemMenu nome="Sobre"/>
            <ItemMenu nome="Contato"/>
          </Menu>
          <Login x={1093} y={20}/>
      </header>
      <main>
          <footer>
          </footer>
        </main>
        {children}
      </body>
    </html>
  )
}
