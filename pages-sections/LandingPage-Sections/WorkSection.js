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
          <h2 className={classes.title}>クラスについて</h2>
          <h4 className={classes.description}>
          チャイルドクラス：2歳から3歳　 親子で受講可<br/>
          ジュニアCクラス：３歳から５歳<br/>
          ジュニアＢクラス：６歳から8歳<br/>
          ジュニアAクラス：9歳から12歳<br/>

          シニアクラス：中学生以上から大人<br/>

          大人初心者：バレエ初心者の方向きクラス<br/>

          やさしいバレエ : ストレッチとバーレッスンを中心にします。お子様連れでの参加も大丈夫です。<br/>

          発表会は一年半ごとにあります。<br/>
          　(大人クラスは自由参加）
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
          <table cellspacing="3" className={classes.description}>
          <tbody>
          <tr>
				    <td align="center" bgcolor="#FFF2EC">&nbsp;</td>
				    <td align="center" bgcolor="#FFF2EC">月曜日</td>
				    <td align="center" bgcolor="#FFF2EC">水曜日</td>
				    <td align="center" bgcolor="#FFF2EC">木曜日</td>
				    <td align="center" bgcolor="#FFF2EC">金曜日</td>
		      </tr>
					<tr>
				    <td align="center" bgcolor="#FFE8F4">11：00～12：00</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#FFFFE8">やさしいバレエ</td>
			      </tr>
				  <tr>
				    <td align="center" bgcolor="#FFE8F4">12：30～14：00</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#FFFFE8">大人初心者クラス</td>
			      </tr>
				  <tr>
				    <td align="center" bgcolor="#FFF0F8">14：30～15：15</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#FFF5EC">チャイルドクラス</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
		      </tr>
				  <tr>
				    <td align="center" bgcolor="#FFE8F4">15：30～16：20</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#FFF4F4">ジュニアＣクラス</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
			      </tr>
				  <tr>
				    <td align="center" bgcolor="#FFF0F8">16：30～17：30</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F2FBF4">ジュニアＢクラス</td>
				    <td align="center" bgcolor="#F2FBF4">ジュニアＢクラス</td>
				    <td align="center" bgcolor="#F2FBF4">ジュニアＢクラス</td>
			      </tr>
				  <tr>
				    <td align="center" bgcolor="#FFE8F4">17：00～18：15</td>
				    <td align="center" bgcolor="#E8FFFF">ジュニアＡクラス</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
			      </tr>
				  <tr>
				    <td align="center" bgcolor="#FFF0F8">17：30～18：45</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#E8FFFF">ジュニアＡクラス</td>
				    <td align="center" bgcolor="#E8FFFF">ジュニアＡクラス</td>
				    <td align="center" bgcolor="#E8FFFF">ジュニアＡクラス</td>
			      </tr>
				  <tr>
				    <td align="center" bgcolor="#FFE8F4">18：15～19：30</td>
				    <td align="center" bgcolor="#F2F2F2">シニアクラス</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
			      </tr>
				  <tr>
				    <td align="center" bgcolor="#FFF0F8">19：15～20：30</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F2F2F2">シニアクラス</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F2F2F2">シニアクラス</td>
			      </tr>
				  <tr>
				    <td align="center" bgcolor="#FFE8F4">19：30～20：45</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
				    <td align="center" bgcolor="#FFFFE8">大人初心者クラス</td>
				    <td align="center" bgcolor="#F9F9F9">&nbsp;</td>
			      </tr>
		    </tbody></table>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
