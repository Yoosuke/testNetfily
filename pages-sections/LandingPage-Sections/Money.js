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
          <h2 className={classes.title}>レッスン料金</h2>
          <h4 className={classes.description}>
          </h4>
		  <p className={classes.description}>
		  入会金　：　2,000円<br /><br />

			月謝　 （週一回）5,500円<br />
			　　　 （週二回）9,500円<br />
			　　　 （週三回）12,500円　<br />
			　　　 （週四回）14,500円　<br />
			（シニア、大人初心者クラスのみ、週一回は6,000円）<br /><br />

			☆大人初心者クラスにはチケットあり<br />
			チケット(四回) 8,000円(有効期限は2ヶ月)<br /><br />

			※やさしいバレエ (一回1500円 都度払い)<br /><br />

			休会維持費　　2,500円（月額）<br /><br /><br />


			後援会費　500円（月額）<br />
			（大人クラスはありません）<br />
		</p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
