import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 21,
        category: 'general',  
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

//   articles = [
//     {
//       source: { id: "cnn", name: "CNN" },
//       author:
//         'By <a href="/profiles/rhea-mogul">Rhea Mogul</a>, <a href="/profiles/jessie-yeung">Jessie Yeung</a>, Amy Woodyatt, Matias Grez, Ed Upright and Maureen Chowdhury, CNN',
//       title: "May 16, 2022 Russia-Ukraine news - CNN",
//       description:
//         "As fighting continues in the eastern regions of Luhansk and Donetsk, Ukrainian forces say they are making headway in the northeastern Kharkiv region. Meanwhile, Sweden and Finland may soon be applying to join NATO. Follow here for live news updates.",
//       url: "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-05-16-22/index.html",
//       urlToImage:
//         "https://cdn.cnn.com/cnnnext/dam/assets/220513195435-ukraine-super-tease.jpg",
//       publishedAt: "2022-05-17T03:58:00Z",
//       content:
//         "It is early morning in Kyiv and a Ukrainian military base not far from the Poland border was targeted in a Russian missile attack.\r\nIf you're just reading in, here's what you need to know about the l… [+3815 chars]",
//     },
//     {
//       source: { id: null, name: "NDTV News" },
//       author: null,
//       title:
//         'Elon Musk Says Twitter Deal At Lower Price "Not Out Of The Question": Report - NDTV',
//       description:
//         'Elon Musk stoked speculation that he could seek to renegotiate his takeover of Twitter Inc., saying a viable deal at a lower price wouldn\'t be "out of the question."',
//       url: "https://www.ndtv.com/world-news/elon-musk-says-twitter-deal-at-lower-price-not-out-of-the-question-2982177",
//       urlToImage:
//         "https://c.ndtvimg.com/2022-05/7fja90s8_elon-musk-afp_625x300_12_May_22.jpg",
//       publishedAt: "2022-05-17T03:35:36Z",
//       content:
//         'Elon Musk last week said his bid to buy Twitter was "temporarily on hold"\r\nMiami: Elon Musk stoked speculation that he could seek to renegotiate his takeover of Twitter Inc., saying a viable deal at … [+3000 chars]',
//     },
//     {
//       source: { id: null, name: "ESPN" },
//       author: null,
//       title:
//         "Woman granted emergency protective order against Rajon Rondo, alleges Cleveland Cavaliers point guard threatened her with gun - ESPN",
//       description:
//         "Rajon Rondo allegedly threatened a woman with a gun at her home last week. The woman was given an emergency protective order against the veteran point guard. The NBA said it's gathering more information on what allegedly happened.",
//       url: "https://www.espn.com/nba/story/_/id/33930061/woman-granted-emergency-protective-order-rajon-rondo-alleges-cleveland-cavaliers-point-guard-threatened-gun",
//       urlToImage:
//         "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0111%2Fr960479_3_1296x729_16%2D9.jpg",
//       publishedAt: "2022-05-17T03:20:55Z",
//       content:
//         "The NBA on Monday said it's in the process of gathering more information after veteran point guard Rajon Rondo allegedly threatened a woman with a gun at her house last week.\r\nThe woman filed for an … [+2587 chars]",
//     },
//     {
//       source: { id: null, name: "Mavs Moneyball" },
//       author: "Kirk Henderson",
//       title:
//         "The Dallas Mavericks beat the Phoenix Suns so badly in Game 7 it resulted in an apology from the team - Mavs Moneyball ",
//       description: "This is new",
//       url: "https://www.mavsmoneyball.com/2022/5/16/23079797/dallas-mavericks-phoenix-suns-game-7-team-apology-luka-very-mean-lol",
//       urlToImage:
//         "https://cdn.vox-cdn.com/thumbor/VOjRzqoBd8ESKZBlu6hggGZShRY=/0x0:3424x1793/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23491429/1397454346.jpg",
//       publishedAt: "2022-05-17T02:00:00Z",
//       content:
//         "Earlier today while talking with some neighbors, I explained that Id watched the NBA regularly since the mid 90s and really started watching as many Maverick games as I could during the 2003 season. … [+1084 chars]",
//     },
//     {
//       source: { id: "reuters", name: "Reuters" },
//       author: null,
//       title:
//         "Suspect in Buffalo supermarket massacre visited city in March, police say - Reuters.com",
//       description:
//         "The 18-year-old man accused of the deadly mass shooting in Buffalo, New York, visited the city in March and the day before the rampage, police said on Monday, as public figures decried the suspect's racist ideology and the spread of white supremacy.",
//       url: "https://www.reuters.com/world/us/new-york-supermarket-shooting-probe-weigh-if-warning-signs-were-missed-2022-05-16/",
//       urlToImage:
//         "https://www.reuters.com/resizer/0cGskM5Hg6Rnf9_kM5dVxfpYaxw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q6TPPOODIBPJHDGCQRNTZYKXQM.jpg",
//       publishedAt: "2022-05-17T01:20:00Z",
//       content:
//         "BUFFALO, N.Y., May 16 (Reuters) - The 18-year-old man accused of the deadly mass shooting in Buffalo, New York, visited the city in March and the day before the rampage, police said on Monday, as pub… [+5717 chars]",
//     },
//     {
//       source: { id: "google-news", name: "Google News" },
//       author: null,
//       title:
//         "Air Force says it successfully tested hypersonic weapon - The Hill",
//       description: null,
//       url: "https://www.google.com/search?q=air+force+&tbm=isch&ved=2ahUKEwiIq5uUleb3AhWxhNgFHfDTDGUQ2-cCegQIABAA&oq=air+force+&gs_lcp=CgNpbWcQAzIECCMQJzIECAAQQzIKCAAQsQMQgwEQQzIECAAQQzIKCAAQsQMQgwEQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQ1DoBFjoBGCJB2gAcAB4AIABdIgB0wGSAQMxLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=VmODYoioH7GJ4t4P8KezqAY&bih=754&biw=1536&rlz=1C1GCEU_enIN968IN968#imgrc=nfvkxZjHuWdZnM",
//       urlToImage: null,
//       publishedAt: "2022-05-17T01:01:00Z",
//       content: null,
//     },
//     {
//       source: { id: null, name: "Daily Beast" },
//       author: "Donald Kirk",
//       title:
//         "There's One Reason Kim Jong Un Is Loving North Korea's COVID Outbreak - The Daily Beast",
//       description: "But it could cost him control of North Korea.",
//       url: "https://www.thedailybeast.com/theres-one-reason-kim-jong-un-is-loving-north-koreas-covid-outbreak",
//       urlToImage:
//         "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1652737716/220516-kim-jong-covid19-tease-01_copy_ye86am",
//       publishedAt: "2022-05-17T00:59:22Z",
//       content:
//         "SEOULThe spread of COVID-19 in North Korea is not all bad news for leader Kim Jong Un. By locking down the entire country, he can assert the power of his regime as never before. He has the authority … [+8682 chars]",
//     },
//     {
//       source: { id: "google-news", name: "Google News" },
//       author: null,
//       title:
//         "Futures: Rally Attempt Continues; Twitter Deal Still Happening? - Investor's Business Daily",
//       description: null,
//       url: "https://news.google.com/__i/rss/rd/articles/CBMijgFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtc3RvY2stbWFya2V0LXJhbGx5LWF0dGVtcHQtY29udGludWVzLXR3aXR0ZXItZGVhbC1zdGlsbC1oYXBwZW5pbmcv0gEA?oc=5",
//       urlToImage: null,
//       publishedAt: "2022-05-17T00:47:00Z",
//       content: null,
//     },
//     {
//       source: { id: null, name: "BBC News" },
//       author: "https://www.facebook.com/bbcnews",
//       title:
//         "Perseverance: Nasa rover begins key drive to find life on Mars - BBC",
//       description:
//         "The Perseverance robot climbs a slope that could record evidence of ancient Martian biology.",
//       url: "https://www.bbc.com/news/science-environment-61470537",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/17A28/production/_124780869_pia24836_perseverance_selfie_at_rochette_figure_3_croppedcloseup.jpg",
//       publishedAt: "2022-05-17T00:40:51Z",
//       content:
//         "Jonathan AmosScience correspondent@BBCAmoson Twitter\r\nImage source, NASA/JPL-Caltech/MSSS\r\nImage caption, Perseverance is drilling rocks and storing samples for later return to Earth laboratories\r\nNa… [+5877 chars]",
//     },
//     {
//       source: { id: "the-verge", name: "The Verge" },
//       author: "Mitchell Clark",
//       title:
//         "Apple will let your subscription apps charge you more money without asking - The Verge",
//       description:
//         "Apple has announced new App Store rules that will make it so developers can increase their subscription prices without you having to opt-into the change when it comes time to auto-renew.",
//       url: "https://www.theverge.com/2022/5/16/23078313/apple-app-store-subscription-price-increase-permission-rules",
//       urlToImage:
//         "https://cdn.vox-cdn.com/thumbor/4AksjaM_7Q3H_IuoLv3MNC0vcHg=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22817753/acastro_210831_1777_0002.jpg",
//       publishedAt: "2022-05-17T00:31:46Z",
//       content:
//         "As long as theyre following a very specific set of rules\r\nIllustration by Alex Castro / The Verge\r\nApple has updated its App Store rules to make it so subscriptions can auto-renew without your explic… [+5673 chars]",
//     },
//     {
//       source: { id: "cnn", name: "CNN" },
//       author: "Chloe Melas",
//       title: "Kourtney Kardashian and Travis Barker are married - CNN",
//       description:
//         "Kourtney Kardashian and Travis Barker are married, for real this time.",
//       url: "https://www.cnn.com/2022/05/16/entertainment/kourtney-kardashian-travis-barker-married/index.html",
//       urlToImage:
//         "https://cdn.cnn.com/cnnnext/dam/assets/220516150623-travis-barker-and-kourtney-kardashian-super-tease.jpg",
//       publishedAt: "2022-05-17T00:30:00Z",
//       content: null,
//     },
//     {
//       source: { id: "associated-press", name: "Associated Press" },
//       author: "Javier Córdoba",
//       title:
//         "Ransomware gang threatens to overthrow Costa Rica government - The Associated Press",
//       description:
//         "SAN JOSE, Costa Rica (AP) — A ransomware gang that infiltrated some Costa Rican government computer systems has upped its threat, saying its goal is now to overthrow the government. Perhaps seizing on the fact that President Rodrigo Chaves had only been in of…",
//       url: "https://apnews.com/article/technology-government-and-politics-caribbean-gangs-381efc2320abb5356dee7f356e55e608",
//       urlToImage:
//         "https://storage.googleapis.com/afs-prod/media/4b6c947d386f4d3fa58b10c06f6acefd/2664.jpeg",
//       publishedAt: "2022-05-17T00:29:26Z",
//       content:
//         "SAN JOSE, Costa Rica (AP) A ransomware gang that infiltrated some Costa Rican government computer systems has upped its threat, saying its goal is now to overthrow the government.\r\nPerhaps seizing on… [+3039 chars]",
//     },
//     {
//       source: { id: "the-washington-post", name: "The Washington Post" },
//       author: "Missy Ryan",
//       title:
//         "Sweden joins Finland in seeking NATO membership, drawing muted response from Putin - The Washington Post",
//       description:
//         "Putin said Finland and Sweden’s entry into NATO did not represent an imminent danger to Russia, but he warned the same would not be true if NATO staged a military buildup in the two countries.",
//       url: "https://www.washingtonpost.com/national-security/2022/05/16/finaland-nato-russia-ukraine-sweden/",
//       urlToImage:
//         "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O5L6CIWTIMI6ZCDL353BQPJDH4.jpg&w=1440",
//       publishedAt: "2022-05-17T00:24:43Z",
//       content:
//         "Placeholder while article actions load\r\nRussia may have a muted response to Finland and Swedens decision to seek NATO membership despite earlier threats of retaliation, President Vladimir Putin sugge… [+8155 chars]",
//     },
//     {
//       source: { id: null, name: "New York Post" },
//       author: "Selim Algar",
//       title:
//         "Gov. Ron DeSantis outlaws protests outside private homes in Florida - New York Post ",
//       description:
//         "Florida Gov. Ron DeSantis signed legislation Monday that makes it illegal to protest outside of private homes in the Sunshine State.",
//       url: "https://nypost.com/2022/05/16/gov-ron-desantis-bans-protests-in-front-of-private-homes-in-florida/",
//       urlToImage:
//         "https://nypost.com/wp-content/uploads/sites/2/2022/05/desantis-outlaws-protesting-index.jpg?quality=75&strip=all&w=1024",
//       publishedAt: "2022-05-17T00:23:00Z",
//       content:
//         "Florida Gov. Ron DeSantis signed legislation Monday that makes it illegal to protest outside of private homes in the Sunshine State.\r\nViolators would be given one chance to disperse after an official… [+1334 chars]",
//     },
//     {
//       source: { id: "cnn", name: "CNN" },
//       author: "From Simon Bouvier, CNN",
//       title: "France names first female Prime Minister in 30 years - CNN",
//       description:
//         "Elisabeth Borne has been named the new Prime Minister of France, the first time in 30 years that a woman has held the position.",
//       url: "https://www.cnn.com/2022/05/16/europe/france-female-prime-minister-intl/index.html",
//       urlToImage:
//         "https://cdn.cnn.com/cnnnext/dam/assets/220516141351-02-elisabeth-borne-0516-super-tease.jpg",
//       publishedAt: "2022-05-17T00:15:00Z",
//       content: null,
//     },
//     {
//       source: { id: "politico", name: "Politico" },
//       author: null,
//       title:
//         "Trump works overtime to push Dr. Oz over the finish line - POLITICO",
//       description:
//         'Republican Kathy Barnette said  she has "no intentions" of supporting her rivals if they defeat her in Pennsylvania\'s tight GOP Senate primary.',
//       url: "https://www.politico.com/news/2022/05/16/trump-oz-pennsylvania-senate-00032900",
//       urlToImage:
//         "https://static.politico.com/85/3c/9fad683842f499ec3711808de138/https-delivery.gettyimages.com/downloads/1240497856",
//       publishedAt: "2022-05-17T00:11:38Z",
//       content:
//         "Virtually every poll in recent weeks has shown Oz clinging to a tiny advantage within the margin of error. And an internal survey from the pro-McCormick super PAC Honor Pennsylvania shows that Barnet… [+6520 chars]",
//     },
//     {
//       source: { id: null, name: "Hollywood Reporter" },
//       author: "Winston Cho",
//       title:
//         "Amber Heard Cross-Examination Begins, Confronted With Recordings and Photos at Defamation Trial - Hollywood Reporter",
//       description:
//         "Logo text Lawyers for Johnny Depp aimed on Monday to undercut Amber Heard’s credibility, placing front-and-center in their opening salvo on cross-examination an audio recording of Heard saying that people would never believe that she was the abuser in their r…",
//       url: "https://www.hollywoodreporter.com/business/business-news/amber-heard-cross-examination-begins-defamation-trial-1235148075/",
//       urlToImage:
//         "https://www.hollywoodreporter.com/wp-content/uploads/2022/05/Amber-Heard-Defamation-Trial-Exiting-GettyImages-1240645709-H-2022.jpg?w=1024",
//       publishedAt: "2022-05-16T23:55:52Z",
//       content:
//         "Lawyers for Johnny Depp aimed on Monday to undercut Amber Heard’s credibility, placing front-and-center in their opening salvo on cross-examination an audio recording of Heard saying that people woul… [+4456 chars]",
//     },
//     {
//       source: { id: "usa-today", name: "USA Today" },
//       author:
//         "Ryan W. Miller, Christal Hayes, Celina Tebor and Cady Stanton, USA TODAY",
//       title:
//         "Hate against Taiwanese led to California church shooting: Authorities - USA TODAY",
//       description:
//         'Authorities said a deadly shooting at a Southern California church was a "politically motivated hate incident" against the Taiwanese community.',
//       url: "https://www.usatoday.com/story/news/nation/2022/05/16/california-church-shooting-gunman-hogtied-what-we-know/9790398002/",
//       urlToImage:
//         "https://www.gannett-cdn.com/presto/2022/05/16/USAT/982edc29-03ee-4874-8232-f554f862fc3e-AFP_AFP_32A97M6.jpg?auto=webp&crop=3200,1800,x263,y645&format=pjpg&width=1200",
//       publishedAt: "2022-05-16T23:48:45Z",
//       content:
//         'LOS ANGELES – Authorities said Monday that a deadly shooting at a Southern California church was a "politically motivated hate incident" against the Taiwanese community.\r\nAt least one person was kill… [+7659 chars]',
//     },
//     {
//       source: { id: null, name: "CNBC" },
//       author: "Eustance Huang",
//       title:
//         "Hong Kong's Hang Seng index jumps more than 2%, leading gains as Asia-Pacific stocks rise - CNBC",
//       description:
//         "Hong Kong's Hang Seng index was more than 2% higher by Tuesday afternoon in the city.",
//       url: "https://www.cnbc.com/2022/05/17/asia-markets-reserve-bank-of-australia-meeting-minutes-currencies-oil.html",
//       urlToImage:
//         "https://image.cnbcfm.com/api/v1/image/107037983-1648521569380-gettyimages-1239204935-HK_STOCKS.jpeg?v=1652752371&w=1920&h=1080",
//       publishedAt: "2022-05-16T23:44:46Z",
//       content:
//         "SINGAPORE Shares in Asia-Pacific were higher in Tuesday trade as Hong Kong stocks led gains regionally.\r\nThe Hang Seng index surged 2.23% by Tuesday afternoon in the city as Chinese tech stocks jumpe… [+2746 chars]",
//     },
//     {
//       source: { id: null, name: "Page Six" },
//       author: "Carlos Greer",
//       title:
//         "Megan Fox and Machine Gun Kelly fuel pregnancy rumors at Diddy party - Page Six",
//       description:
//         "The couple sparked rumors earlier in the evening MGK took the stage at the Billboard Music Awards and dedicated the song to their “unborn child.”",
//       url: "https://pagesix.com/2022/05/16/megan-fox-and-machine-gun-kelly-spark-baby-buzz-at-diddy-party/",
//       urlToImage:
//         "https://pagesix.com/wp-content/uploads/sites/3/2022/05/megan-fox-pregnancy-rumors-billboard.jpg?quality=75&strip=all&w=1200",
//       publishedAt: "2022-05-16T23:34:00Z",
//       content:
//         "What happens in Vegas may not stay in Vegas.\r\nAfter sparking wedding and pregnancy rumors at the Billboard Music Awards on Sunday, Machine Gun Kelly and Megan Fox also had partygoers guessing at Didd… [+2107 chars]",
//     },
//   ];
  constructor(props) {
    super(props);
    // console.log("Hello from constructor from News.js");
    this.state = {
    //   articles: this.articles,
      articles: [],
      loading: false,
      page: 1
    };
    document.title =  `${this.capitalizeFirstLetter(this.props.category)}- NewsMonkey`
  }

  async updateNews() {
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c202c36a025402daa8432f44c0782fb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
     })
  }

   //runs after the render functions execution
  async componentDidMount() {
    //  console.log("cdm");
    //  let url =
    //    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c202c36a025402daa8432f44c0782fb&page=1&pageSize=${this.props.pageSize}`;
    //    this.setState({loading: true});
    //    let data = await fetch(url);
    //    let parsedData = await data.json();
    //    console.log(parsedData);
    //    this.setState({articles: parsedData.articles,
    //      totalResults: parsedData.totalResults,
    //      loading: false
    //     })
    this.updateNews();
  }

  handlePrevCLick = async () => {
        // console.log("previous click");
        // let url =
        // `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c202c36a025402daa8432f44c0782fb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({page: this.state.page - 1})
        this.updateNews();

  }

   handleNextClick = async () => {
    console.log("next click");
    // if ( !(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        
    //     let url =
    // `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c202c36a025402daa8432f44c0782fb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //  this.setState({loading: true});
   
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    // })

    // } 
    this.setState({page: this.state.page + 1})
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-6">
        <h1 className="text-center">NewsMonkey - Top Headlines on <strong>{this.capitalizeFirstLetter(this.props.category)}</strong></h1>
       {this.state.loading && <Spinner />}
        <div className="row" >
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem  
                  title={element.title?element.title.slice(0,38):""}
                  description={element.description?element.description.slice(0,50):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevCLick}> &laquo; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    );
  }
}

export default News;
