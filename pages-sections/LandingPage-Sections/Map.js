import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>アクセス・地図</h2>
          <h4 className={classes.description}>
		  住所　東京都練馬区東大泉3-16- 5 妙延寺ゆうわ会館<br />
		・西武池袋線　大泉学園駅　北口より徒歩5分<br />
			  <a href="https://maps.google.co.jp/maps?f=q&source=embed&hl=ja&geocode=&q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%B7%B4%E9%A6%AC%E5%8C%BA%E6%9D%B1%E5%A4%A7%E6%B3%893-16-+5%C2%A0&aq=&sll=36.5626,136.362305&sspn=57.25329,107.226562&brcurrent=3,0x6018eec7f733a6f3:0x98e4d3554fee64d2,0,0x6018eec7fa9a2ce3:0x56aef37f4522798d&ie=UTF8&hq=&hnear=%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%B7%B4%E9%A6%AC%E5%8C%BA%E6%9D%B1%E5%A4%A7%E6%B3%89%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%96%E2%88%92%EF%BC%95&t=m&ll=35.751597,139.588852&spn=0.02431,0.056648&z=14&iwloc=A">Google Mapで確認する</a>
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
