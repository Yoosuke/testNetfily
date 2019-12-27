import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.webp";
import team2 from "assets/img/faces/christian.webp";
import team3 from "assets/img/faces/kendall.webp";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>講師の紹介</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                山口嘉子
                <br />
                <small className={classes.smallTitle}>ルナバレエスタジオ代表</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                [　出会い　]<br/>
                バレエを通して、ひとりでも多く皆さんに喜びを感じて頂けるクラスを目指してます。
                バレエに出会った事で、またひとつ幸せを増やしてみませんか？<br/><br/>

                [　学ぶ　]<br/>
                バレエから、技術だけではなく、皆と一緒に学ぶ楽しさや思いやりの心、礼儀正しいマナーを身につける事も目標です。<br/><br/>

                [　舞う　]<br/>
                スタジオでは、ひとりひとりが主役です。
                体を全部使って、音楽に合わせてのびのびと踊ってみませんか？
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                野沢　結
                <br />
                <small className={classes.smallTitle}>
                ジュニアクラス　アシスタント<br />
                木曜日大人初心者クラス担
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                クラシックバレエを通じて
                皆様に夢や喜び、憧れや希望を
                もって頂き、バレエって楽しい！
                バレエをやってて良かったと
                思っていただけるような
                幸せいっぱいの
                クラス作りを目指しています。
                バレエ技術だけではなく
                踊ることの楽しさを知って
                頂ければ‥と願っています。
                レッスン場にある鏡は
                皆さんの輝きを映しています。
                そこに１人１人の姿が映れば
                もっと楽しく笑顔が広がる
                素敵な空間になります。
                仲間同士で支えあう素敵な
                スタジオに是非いらしてみてください。
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                工藤雅子
                <br />
                <small className={classes.smallTitle}>ジュニアクラスアシスタント</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                バレエが大好き!一緒に踊る仲間が大好き！ いつもその気持ちを持って、４歳からスタジオで頑張ってきました。

                これからも汗と涙と笑顔をこぼしながら皆さんと共に成長していきたいと思います。
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
