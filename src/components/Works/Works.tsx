import PictureEngineer from "./PictureEngineer";
import AnimeAB from "./AnimeAB";
import { WorksWrapper } from "./WorksStyled";

export default function Works() {
  return (
    <WorksWrapper id="work" className="section section--work">
      <div className="container-fluid">
        <div className="w-100">
          <div className="col-xs-12" style={{ zIndex: 5 }}>
            <div className="sheading">
              <h1 className="heading__title">Works</h1>
              <h6 className="heading__descript" style={{ marginLeft: `10px` }}>
                Some personal projects
              </h6>
            </div>
          </div>
          <div className="section--work__content">
            <div className="show-project">
              <PictureEngineer />
              <AnimeAB />
            </div>
          </div>
        </div>
      </div>
    </WorksWrapper>
  );
}
