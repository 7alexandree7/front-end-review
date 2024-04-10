import './Header.css';

const Header = () => {

    <div className='header-box'>
        <div className="banner">
            <h1>My Frist poject Json Server</h1>
        </div>

        <form>
            <div className="label-box">
                <label>
                    Nome:
                    <input type="text" name="nome" id="nome" />
                </label>


                <label>
                    SobreNome:
                    <input type="text" name="SobreNome" id="SobreNome" />
                </label>
            </div>

            <input type="submit" value="Enviar" />
        </form>

    </div>
}

export default Header;