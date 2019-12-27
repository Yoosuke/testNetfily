import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>お知らせ情報</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}>
          11月 4日(月)：秋の入会キャンペーン実施中
          </h4>
          <h5 className={classes.description}>
          只今、秋の入会キャンペーン実施中です。バレエを通して心も豊かなになりませんか？体験レッスンが無料で受けられます。
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}>
          7月 2日(火)：やさしいバレエクラスの休講のお知らせ
          </h4>
          <h5 className={classes.description}>
          ７月より、担当クラスの講師が産休に入るため、しばらくクラスを休講致します。クラス再開につきましては、改めてご連絡させて頂きます          
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
