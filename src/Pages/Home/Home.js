import TopPost from '../../Components/TopPost-Data/API-DATA/TopPost'
import LatestArticle from './LatestArticle';
import ArticleContent from '../../Components/ArticleContent/ArticleContent'
import BlogPost from '../../Components/BlogPost/BlogPost'
import Ads from '../../Common/Ads'
import Pic from '../../Components/Pic'
const Home = () => {
    return (
        <div>
            <div id="mediaTop">
                <ArticleContent />
            </div>
            <div id="latest">
                <BlogPost Title="Latest" />
            </div>
            <div id="center">
                <LatestArticle Title="Latest-Article" />
                <Pic />
                <div id="Right-Main">
                    <Ads />
                    <TopPost />
                </div>
                <br/><br/>
                <div id="end" style={{paddingBottom:"30px"}}>
                    <BlogPost Title="Latest-Stories" />
                </div>
            </div>
        </div>
    )
}
export default Home;