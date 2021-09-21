

import Maintent from "../../assets/includes/animeab.png"
import LogoAnimeAB from "../../assets/includes/lgAnimeAB.png"

export default function AnimeAB() {

    const viewProject = () => {
        window.open("https://animeab.co", "_blank")
    }

    return (
        <div className="project__item" onClick={viewProject}>
            <div className="project__bg hidden_bg" style={{backgroundImage: `url(${Maintent})`}}>
            </div>
            <span className="view_project" style={{background: `#3d3e44`}}>View project</span>
            <div className="text-block">
                <div className="project__header">
                    <span className="project__header-name">AnimeAB</span>
                </div>
                <div className="project__case-logo">
                    <img src={LogoAnimeAB} alt="Logo AnimeAB" />
                </div>
                <p className="project__descript">
                    Watch anime Free VietSub Anime online with No Account and Daily update.
                </p>
            </div>
        </div>
    )
}