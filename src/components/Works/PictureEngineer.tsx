
import Logo from "../../assets/includes/pictureEngineer.png"
export default function PictureEngineer() {

    const viewProject = () => {
        window.open("https://pengineer.azurewebsites.net/", "_blank")
    }

    return (
        <div className="project__item" onClick={viewProject}>
            <div className="project__bg" style={{background: `#F6C700`}}></div>
            <span className="view_project">View project</span>
            <div className="text-block black">
                <div className="project__header">
                    <span className="project__header-name">Picture Engineer</span>
                </div>
                <div className="project__case-logo">
                    <img src={Logo} alt="Logo PictureEngineer" />
                </div>
                <p className="project__descript">
                    Recognition scanner image of document and pdf processing
                </p>
            </div>
        </div>
    )
}