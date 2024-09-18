import './App.css'
import myImage from './images/correct.png';
import bannerName from './images/wy300.webp';
import weatherIcon from './images/icon.png';
import Header from './components/Header';
import { Title } from './components/Title';
import Widget from './components/Widget';
import { List } from './components/List';
import { Currency } from './components/Currency';
import { HeadlinePersonal } from './components/HeadlinePersonal';
import { Menu } from './components/Menu';
import { SearchBlock } from './components/SearchBlock';
import { Banner } from './components/Banner';
import { Weather } from './components/Weather';

function App() {

  const titleInfo = {
    title: "Сейчас в СМИ",
    links: [
      {
      linksTitle: "Рекомендуем",
      href: "/",
      },
      {
        linksTitle: "Популярное",
        href: "/",
      }
    ],
    date: "18.09.2024",
  };

  const newsInfo = [
      {
        imgLink: myImage,
        title: "Некая горячая новость",
        href: "/",
      },
      {
        imgLink: myImage,
        title: "И еще одна некая горячая новость",
        href: "/",
      },
      {
        imgLink: myImage,
        title: "Горячих новостей мало не бывает",
        href: "/",
      },
      {
        imgLink: myImage,
        title: "Горячая, как пирожок, новость",
        href: "/",
      },
    ];

    const currencyInfo = ["USD 91,43", "USD 91,43", "USD 91,43"];

    const personalInfo = {
      title: "Card Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: myImage,
      href: "/",
    };

    const memuInfo = [
      {
      title: "Видео",
      href: "/",
      },
      {
        title: "Картинки",
        href: "/",
      },
      {
        title: "Новости",
        href: "/",
      },
      {
        title: "Карты",
        href: "/",
      },
      {
        title: "Видео",
        href: "/",
        },
        {
          title: "Картинки",
          href: "/",
        },
        {
          title: "Новости",
          href: "/",
        },
        {
          title: "Карты",
          href: "/",
        },
    ];

    const searchlInfo = {
      logo: myImage,
      btnText: "Найти",
      text: "фаза луны сегодня",
    };

    const bannerUrl = {
      url: bannerName,
    };

    const visited = [{
      title: "Недвижимость",
      href: "/",
      description: "О недвижимости",
    },
    {
      title: "Движимость",
      href: "/",
      description: "О движимости",
    },
    {
      title: "Передвижимость",
      href: "/",
      description: "О передвижимости",
    }];

    const maps = [{
      title: "Расписания",
      href: "/",
    },
    ];

    const tvProgram = [{
      time: "00:00",
      title: "Спокойной ночи, малыши",
      href: "/",
      description: "Первый",
    },
    {
      time: "00:01",
      title: "Спокойной ночи, взрослые",
      href: "/",
      description: "Первый",
    },
    {
      time: "00:02",
      title: "Спите уже!",
      href: "/",
      description: "Первый",
    }];

    const onAir = [{
      imgLink: myImage,
      title: "День и ночь",
      href: "/",
      description: "про сутки",
    },
    {
      imgLink: myImage,
      title: "Инь и янь",
      href: "/",
      description: "про суть",
    },
    {
      imgLink: myImage,
      title: "Зима и лето",
      href: "/",
      description: "про времена года",
    }];

    const weatherInfo = {
      icon: weatherIcon,
      currentTemperature: "+ 17",
      morningTemperature: "- 25",
      nihgtTemperature: " 0",
    }


    return ( 
        <>
        <Header>
          <Widget  type='header'>
            <Title {...titleInfo}/>
            <Widget  type='links'>
              <List data={newsInfo}/>
            </Widget>
            <Currency array={currencyInfo}/>
          </Widget>
          <HeadlinePersonal {...personalInfo}/>
        </Header>
        <Menu array={memuInfo}/>
        <SearchBlock {...searchlInfo}/> 
        <Banner {...bannerUrl}/>
        <div className='widget-container'>
          <Widget title="Погода" type='links'>
              <Weather {... weatherInfo}/>
          </Widget>
          <Widget title="Посещаемое" type='links'>
              <List data={visited}/>
          </Widget>
          <Widget title="Карта" type='links'>
              <List data={maps}/>
          </Widget>
          <Widget title="TV" type='links'>
              <List data={tvProgram}/>
          </Widget>
          <Widget title="В эфире" type='links'>
              <List data={onAir}/>
          </Widget>
        </div>
        </>

    )
}

export default App
