import style from "./App.module.css"
import product from "./img/product.png"
import telegram from "./img/telegram.png"
import mail from "./img/mail.png"
import phone from "./img/phone.png"
import firstpic from "./img/firstpic.png"
import wooter from "./img/wooter.png"
import SmartBAR from "./img/SmartBAR.png"
import cabify from "./img/cabify.png"
import kari from "./img/kari.png"
import ural from "./img/Ural.png"
import interview from "./img/interview.png"
import plan from "./img/plan.png"
import team from "./img/team.png"
import create from "./img/create.png"
import upgrade from "./img/upgrade.png"
import greet from "./img/greet.png"
import kabifaytel from "./img/kabifaytel.png"
import uralplan from "./img/uralplan.png"
import opengift from "./img/opengift.png"
import plandi from "./img/Plandi.png"
import collection from "./img/collection.png"
import Rubetek from "./img/Rubetek.png"
import computer from "./img/computer.png"
import up from "./img/up.png"
import down from "./img/down.png"
import Ecommerce from "./img/Ecommerce.png"
import saas from "./img/saas.png"
import application from "./img/application.png"
import iot from "./img/IOT.png"
import mancomp from "./img/man-comp.png"
import Vr from "./img/VR.png"
import mvp from "./img/MVP.png"
import crm from "./img/CRM.png"
import blockchain from "./img/Blockchain.png"
import message from "./img/Message.png"
import active from "./img/active.png"
import passive from "./img/passive.png"

function App() {
  return (
    <div>
      <div className="container1">
        <div className={style["navbar"]}>
          <div className={style["left"]}>
            <img src={product} alt="logo" />
          </div>
          <div className={style["right"]}>
              <div className="photos-right">

                <img src={telegram} alt="telega" className={style["nice"]}/>
                <img src={mail} alt="mail" className={style["nice"]} />
                <img src={phone} alt="phone" className={style["nice"]} />
              </div>
              <div className = {style["number"]}>
                <p>+7 800 301-79-27</p>
              </div>
              <div className={style["red"]}>
                  <button className={style["red-button"]}>НАЧАТЬ ПРОЕКТ</button>
              </div>
          </div>
        </div>
        <div className={style["it-made"]}>
          <div className={style["left-it"]}>
            <h1 className={style["headR"]}>Разработка IT‑продуктов</h1>
            <p className={style["pR"]}>Разработаем проект с нуля,
                  доработаем текущий проект или усилим вашуИТ-команду лучшими разработчиками на рынке
            </p>
            <button className={style["red-button-new"]}>НАЧАТЬ NEW ПРОЕКТ</button>

          </div>
          <div className="right-it">
              <img src={firstpic} alt="pic" />
          </div>
        </div>
        <div className={style["companies"]}>
            
            <img src={wooter} alt="wot"  className={style["comp"]}/>
            <img src={SmartBAR} alt="smart" className={style["comp"]}/>
            <img src={cabify} alt="cabi" className={style["comp"]}/>
            <img src={kari} alt="kari" className={style["comp"]}/>
            <img src={ural} alt="ural" className={style["ural"]}/>
        </div>
      </div>
      <div className="container2">
        <div  className = {style["bill-board"]}>
          <div className = {style["interview"]}>
              <img src={interview} alt="inter" />
              <p>Проведём интервью</p>
          </div>
          <div className = {style["plan"]}>
              <img src={plan} alt="plan" />
              <p>Составим план</p>
          </div>
          <div className = {style["team"]}>
              <img src={team} alt="team" />
              <p className={style["text-t"]}>Соберём команду</p>
          </div>
          <div className = {style["create"]}>
                <img src={create} alt="create" />
                <p>Разработаем продукт</p>
          </div>
          <div className = {style["upgrade"]}>
              <img src={upgrade} alt="upgrade" />
              <p>Улучшим метрики</p>
          </div>
        </div>
        <div className={style["greet"]}>
          <div className={style["left-greet"]}>
            <img src={greet} alt="greet" />
          </div>
          <div className={style["right-greet"]}>
              <h1 className={style["rightGreetH"]}>Проведём интервью и подготовим проект к разработке</h1>
              <p >Проведём продуктовое интервью онлайн и дадим рекомендации по подготовке проекта к разработке. Это бесплатно.</p>
              <button className={style["record"]}>Записаться на интервью</button>
          </div>
        </div>
      </div>
      <div className="container3">
        <h1 className={style["productfit"]}>ПРОЕКТЫ командЫ PRODUCTFIT</h1>
        <div className={style["devices"]}>
          <div className={style["firstD"]}>
            <img src={kabifaytel} alt="kab" />
            <h2>Cabify</h2>
            <p>Кроссплатформенное приложение под Android и iOS разработано на React Native(Python)</p>
          </div>
          <div className={style["secondD"]}>
            <img src={uralplan} alt="kab" />
            <h2>Ural Airlines</h2>
            <p>Все сервисы для пассажиров «Уральских авиалиний» в одном приложении на Swift и Java</p>
          </div>
          <div className={style["thirdD"]}>
            <img src={opengift} alt="kab" />
            <h2>OpenGift</h2>
            <p>Система монетизации OpenSource-проектов на основе блокчейна hyperledger fabric</p>
          </div>
          <div className={style["fourthD"]}>
            <img src={plandi} alt="kab" />
            <h2>PlanDi</h2>
            <p>Сервис поиска актуальной работы проектировщикам и компаниям</p>
          </div>
          <div className={style["fivethD"]}>
            <img src={collection} alt="kab" />
            <h2>Коалиция</h2>
            <p>Проект для ведущего в России Центра образования, который осуществляет подготовку школьников к сдаче ЕГЭ.</p>
          </div>
          <div className={style["sixthD"]}>
            <img src={Rubetek} alt="kab" />
            <h2>Rubetek</h2>
            <p>Управление домом IoT и микрофреймворк на языке Python совместно с Java и Swift</p>
          </div>
        </div>
        <div className={style["all"]}>

        <button className={style["allpr"]}>Все проекты</button>
        </div>
      </div>
      <div className={style["container4"]}>
          <img src = {down} alt="down" className={style["down"]}/>
          <div className={style["lor"]}>
              <p>09 Августа 2021</p>
              <h1 className={style["rightGreetH"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
          </div>
          <div className={style["computer"]}>
            <img src={computer} alt="computer" />
          <img src = {up} alt="up" className={style["up"]}/>
          </div>

      </div>
      <div className = {style["container5"]}>
        <div className = {style["fr-row"]} id = {style["appear"]}>
          <div className={style["fr-all"]} id = {style["appear"]}>
              <div className={style["photo-E"]}>
                <img src={Ecommerce} alt="eco" className = {style["eco"]}/>
              </div>
              <h1 id={style["eco1"]}>Ecommerce</h1>
              <button className = {style["order"]}>ЗАКАЗАТЬ</button>
          </div>
          <div className = {style["fr-all"]}>
              <div className = {style["photo-E"]}>
                <img src={saas} alt="sas" />
              </div>
              <h1>SaaS-платформы</h1>
              <button className = {style["order"]}>ЗАКАЗАТЬ</button>
          </div>
          <div className={style["fr-all"]}>
              <div className = {style["photo-E"]}>
                <img src={application} alt="app" />
              </div>
              <h1  className={style["line"]}>Мобильное приложение</h1>
              <button className = {style["order"]}>ЗАКАЗАТЬ</button>
          </div>
          <div className = {style["fr-all"]}>
              <div className={style["photo-E"]}>
                <img src={iot} alt="iot" />
              </div>
              <h1>IoT приложения</h1>
              <button className = {style["order"]}>ЗАКАЗАТЬ</button>
          </div>
        </div>
        <div className = {style["fr-row"]}>
          <div className={style["fr-all"]}>
              <div className={style["photo-E"]}>
                <img src={Vr} alt="eco" className = {style["eco"]}/>
              </div>
              <h1>AR/VR</h1>
              <button className = {style["order"]}>ЗАКАЗАТЬ</button>
          </div>
          <div className = {style["fr-all"]}>
              <div className = {style["photo-E"]}>
                <img src={mvp} alt="sas" />
              </div>
              <h1>MVP</h1>
              <button className = {style["order"]}>ЗАКАЗАТЬ</button>
          </div>
          <div className={style["fr-all"]}>
              <div className = {style["photo-E"]}>
                <img src={crm} alt="app" />
              </div>
              <h1  className={style["line"]}>CRM/ERP</h1>
              <button className = {style["order"]}>ЗАКАЗАТЬ</button>
          </div>
          <div className = {style["fr-all"]}>
              <div className={style["photo-E"]}>
                <img src={blockchain} alt="iot" />
              </div>
              <h1>Blockchain</h1>
              <button className = {style["order"]}>ЗАКАЗАТЬ</button>
          </div>
        </div>
      </div>
      <div className={style["container6"]}>
        <div className={style["left-man"]}>
            <img src = {mancomp} alt="comp"/>
        </div>

        <button className={style["pOrder"]}>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>    
      <div className={style["container7"]}>
          <div className={style["fit"]}>
            <img src={product} alt="pr"/>
          </div>
          <div className={style["twoS"]}>
            <p>Мобильные приложения</p>
            <p>Главная страница</p>
          </div>
          <div className={style["thirdS"]}>
            <div className={style["connect"]}>
              <p>Связаться с нами</p>
              <div className={style["phoneNum"]}>
              <div className="phone1">
                <img src={phone} alt="" />
              </div>
              <div className="number1">
                <p className={style["nm"]}>+7 800 301-79-27</p>
              </div>
              </div>
            </div>
            
            <div>
              <img src={telegram} alt="" />
              <img className={style["mail"]} src={mail} alt="" />
            </div>
          </div> 
          <div className={style["message"]}>
            <div className={style["iconMessage"]}>
              <img src={message} alt="" />
            </div>
            <div className={style["text-message"]}>
              <p>Индивидуальный предприниматель Степанов Георгий Константинович Адрес: г. Обнинск, ул. Белкинская. 19, 136 ОГРНИП 318402700019269 ИНН 402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК" БИК 044525092 К/c 30101810645250000092 Счет 40802810970010085488</p>
            </div>
          </div>
      </div>
      <p className={style["copy"]}>Copyright © 2021 ProductFit</p>
    </div>
  );
}
export default App;
