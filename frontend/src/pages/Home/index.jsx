import React from 'react';

import Animation from '../../components/Animation';
import CardCourse from '../../components/CardCourse';

import './styles.css';

import yoda from '../../assets/images/characters/yoda.png';
import separator from '../../assets/images/separator.svg';
import courseReactRedux from '../../assets/images/courses/react-redux.jpg';
import coursePHP from '../../assets/images/courses/php.jpg';
import courseFlutter from '../../assets/images/courses/flutter.jpg';
import CardCategory from '../../components/CardCategory';



const Home = () => {
    return (
        <>
            {/* <Animation/> */}
            <div className="section-1">
                <div className="container">
                    <header className="header">
                        <h2>Luke Code</h2>
                        <nav>
                            <button>
                                FAZER LOGIN
                            </button>
                            <button>
                                INSCREVA-SE
                            </button>
                            <button className="btn-menu"> 
                                <i className="fas fa-bars"></i>
                            </button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre <br/> da programação!</h1>
                            <img src={separator} alt="Separator" />
                            <p>
                                De o próximo passo para o seu futuro, <br />
                                que a força esteja com você.
                            </p>
                        </section>
                        <section>
                            <img src={yoda} alt="Yoda - Star Wars" />
                        </section>
                    </main>
                </div>
            </div>
            <div className="section-2">
                <div className="container">
                    <h2>+3 Cursos Completo</h2>
                    <p>Na Luke code, você tem acesso a 3 cursos gratuitos, basta se cadastrar na plataforma.</p>
                    <section className="card-container">
                        <CardCourse image={courseReactRedux}> 
                            Desenvolvimento front-end <br/> React e Redux
                        </CardCourse>
                            
                        <CardCourse image={coursePHP} description={"PHP 7"}>
                            Desenvolvimento em PHP
                        </CardCourse> 
                        <CardCourse image={courseFlutter} description={"Flutter"}>
                            Desenvolvimento em Flutter
                        </CardCourse>                      
                    </section>
                    <button>
                            INSCREVA-SE
                    </button>
                    <button className="btn-menu">
                            MENU
                    </button>
                </div>

                    
            </div>
            {/* <div className="section-3">
                <div className="container">
                    <h2>O que oferecemos para você</h2>
                        

                         <section className="categories-container">  
                            <CardCategory image="https://www.flaticon.com/svg/static/icons/svg/622/622397.svg" title="BACK-END" courses="22 cursos" color="red"/>
                            <CardCategory image="https://www.flaticon.com/svg/static/icons/svg/689/689401.svg" title="BANCO DE DADOS" courses="8 cursos" color="yellow"/>
                            <CardCategory image="https://www.flaticon.com/svg/static/icons/svg/388/388531.svg" title="SEGURANÇA" courses="12 cursos" color="green"/>                   
                            <CardCategory image="https://www.flaticon.com/svg/static/icons/svg/545/545245.svg"  title="MOBILE" courses="16 cursos" color="blue"/>
                            <CardCategory image="https://www.flaticon.com/svg/static/icons/svg/781/781683.svg" title="FRONT-END" courses="18 cursos" color="#c3c3c3c3"/>
                            <CardCategory image="https://www.flaticon.com/svg/static/icons/svg/622/622340.svg" title="CLOUDING COMPUTING" courses="14 cursos" color="orange"/>

                           
                         </section>

                         
                         
                </div>
            </div> */}
        </>
    );
}

export default Home;