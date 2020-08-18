function tickersToFundNames(ticker, region) {
  var data = {
    "#AREIT": {
      Description: "S&P Australia REIT Index",
    },
    "#ASX300": {
      Description: "S&P/ASX 300 Index",
    },
    "#ASXSmallOrds": {
      Description: "S&P/ASX Small Ordinaries Index",
    },
    "#AusBondBankBill OR Cash": {
      Description: "Bloomberg AusBond Bank Bill Index",
    },
    "#AusBondComposite": {
      Description: "Bloomberg AusBond Composite 0+ Index",
    },
    "#BarGlbAgg": {
      Description: "Bloomberg Barclays Global Aggregate Bond Index",
    },
    "#BarGlbAggCredit": {
      Description: "Bloomberg Barclays Global Aggregate Credit Bond Index",
    },
    "#CASH": {
      Description: "Cash or cash equivalents",
    },
    "#DevREIT": {
      Description: "S&P Developed REIT Index",
    },
    "#FTSEWGBI1-5": {
      Description: "FTSE WGBI 1-5 Index",
    },
    "#MSCIEM": {
      Description: "MSCI Emerging Markets",
    },
    "#MSCIWorld": {
      Description: "MSCI World Index",
    },
    "#MSCIWorldAUDHgd": {
      Description: "MSCI World Index hedged to AUD",
    },
    "#MSCIWorldNZDHgd": {
      Description: "MSCI World Index hedged to NZD",
    },
    "#NZX50": {
      Description: "S&P/NZX 50 Index",
    },
    AAA0001AU: {
      Description: "Quay Global Real Estate Fund",
    },
    AAA0003AU: {
      Description: "Fiducian Diversified Social Aspirations",
    },
    AAP0001AU: {
      Description: "Candriam Sustainable Global Equity",
    },
    AAP0002AU: {
      Description: "Ausbil Australian Geared Equity",
    },
    AAP0003AU: {
      Description: "Ausbil 130/30 Focus - Institutional",
    },
    AAP0007AU: {
      Description: "Ausbil MicroCap",
    },
    AAP0008AU: {
      Description: "Ausbil 130/30 Focus - Wholesale",
    },
    AAP0020AU: {
      Description: "MacKay Shields Unconstrained Bond",
    },
    AAP0101AU: {
      Description: "Ausbil Balanced",
    },
    AAP0103AU: {
      Description: "Ausbil Australian Active Equity",
    },
    AAP0104AU: {
      Description: "Ausbil Australian Emerging Leaders",
    },
    AAP3254AU: {
      Description: "Ausbil Global Essential Infras Wholsl",
    },
    AAP3656AU: {
      Description: "Ausbil Active Dividend Income",
    },
    AAP3940AU: {
      Description: "Ausbil Active Sustainable Equity",
    },
    AAP5529AU: {
      Description: "Ausbil Australian SmallCap Wholesale",
    },
    AAP5928AU: {
      Description: "Ausbil Global Resources Wholesale",
    },
    AAP8285AU: {
      Description: "Ausbil Global SmallCap",
    },
    AAP9227AU: {
      Description: "Ausbil Australian Concentrated Equity",
    },
    ACM0001AU: {
      Description: "AB Dynamic Global Fixed Income",
    },
    ACM0005AU: {
      Description: "AB Concentrated Australian Equities Fund",
    },
    ACM0006AU: {
      Description: "AB Managed Volatility Equities",
    },
    ACM0009AU: {
      Description: "AB Global Equities",
    },
    ACM3950AU: {
      Description: "AB Managed Volatility Equities - Green",
    },
    ACU0008AU: {
      Description: "The Property Income Plus Fund",
    },
    ACU0011AU: {
      Description: "TPS Cash Management",
    },
    ADV0008AU: {
      Description: "Maple-Brown Abbott Aus Shr NEF",
    },
    ADV0012AU: {
      Description: "Maple-Brown Abbott Sharemarket",
    },
    ADV0013AU: {
      Description: "Maple-Brown Abbott Aus Shr Retail",
    },
    ADV0022AU: {
      Description: "Advance Defensive Multi-Blend",
    },
    ADV0023AU: {
      Description: "Advance Balanced Multi-Blend",
    },
    ADV0024AU: {
      Description: "Advance Growth Multi-Blend",
    },
    ADV0025AU: {
      Description: "Advance Australia Shr Multi-Blend",
    },
    ADV0028AU: {
      Description: "Advance International Shr Multi-Blend",
    },
    ADV0029AU: {
      Description: "Advance Aus Fixed Intr Multi-Blend",
    },
    ADV0045AU: {
      Description: "Advance Australia Shr Multi-Blend W",
    },
    ADV0046AU: {
      Description: "Maple-Brown Abbott Aus Shr Wholesale",
    },
    ADV0049AU: {
      Description: "Advance Defensive Multi-Blend W",
    },
    ADV0050AU: {
      Description: "Advance Balanced Multi-Blend W",
    },
    ADV0053AU: {
      Description: "Advance International Shr Multi-Blend W",
    },
    ADV0056AU: {
      Description: "BT International Shares Index W",
    },
    ADV0058AU: {
      Description: "BT International Fixed Interest Index W",
    },
    ADV0060AU: {
      Description: "BT Property Securities Index W",
    },
    ADV0062AU: {
      Description: "BT Australian Shares Index W",
    },
    ADV0064AU: {
      Description: "BT Australian Fixed Interest Index",
    },
    ADV0066AU: {
      Description: "Maple-Brown Abbott Sharemarket W",
    },
    ADV0067AU: {
      Description: "Advance Int Fix Intr Multi-Blend W",
    },
    ADV0069AU: {
      Description: "Advance Cash Multi-Blend",
    },
    ADV0077AU: {
      Description: "Maple-Brown Abbott Aus Geared Eq",
    },
    ADV0078AU: {
      Description: "Maple-Brown Abbott Aus Geared Eq W",
    },
    ADV0084AU: {
      Description: "Advance Aus Fixed Intr Multi-Blend W",
    },
    ADV0085AU: {
      Description: "Advance Growth Multi-Blend W",
    },
    ADV0086AU: {
      Description: "Advance High Growth Multi-Blend",
    },
    ADV0087AU: {
      Description: "Advance High Growth Multi-Blend W",
    },
    ADV0088AU: {
      Description: "Advance Int Fix Intr Multi-Blend",
    },
    ADV0090AU: {
      Description: "Advance Moderate Multi-Blend",
    },
    ADV0091AU: {
      Description: "Advance Moderate Multi-Blend W",
    },
    ADV0094AU: {
      Description: "Advance Property Sec Multi-Blend",
    },
    ADV0095AU: {
      Description: "Advance Property Sec Multi-Blend W",
    },
    ADV0118AU: {
      Description: "Advance Australian Shares ARS",
    },
    ADV0119AU: {
      Description: "Advance Australian Shares ARS NEF",
    },
    ADV0120AU: {
      Description: "Adv Balanced Multi-Blend ARS",
    },
    ADV0121AU: {
      Description: "Adv Balanced Multi-Blend ARS NEF",
    },
    ADV0122AU: {
      Description: "Advance Cash Multi-Blend ARS",
    },
    ADV0123AU: {
      Description: "Adv Defensive Multi-Blend ARS",
    },
    ADV0124AU: {
      Description: "Adv Defensv Multi-Blend ARS NEF",
    },
    ADV0125AU: {
      Description: "Adv International Shrs Multi-Blend ARS",
    },
    ADV0126AU: {
      Description: "Adv Int Shares Multi-Blend ARS NEF",
    },
    ADV0173AU: {
      Description: "Advance Defensive Yield Multi-Blend",
    },
    AFM0005AU: {
      Description: "Aurora Fortitude Absolute Return",
    },
    AFM0010AU: {
      Description: "Aurora Dividend Income Trust",
    },
    AFX0001AU: {
      Description: "Affluence Investment Fund",
    },
    AFX0240AU: {
      Description: "Affluence Small Company Ordinary",
    },
    AFX6930AU: {
      Description: "Affluence LIC Fund",
    },
    AIM0001AU: {
      Description: "Atrium Global Equities Mandate No. 1",
    },
    AIM0002AU: {
      Description: "Atrium Alternatives Fund",
    },
    AIM0003AU: {
      Description: "Atrium Enhanced Fixed Income Fund",
    },
    AIM0334AU: {
      Description: "Crown Diversified Trend Access",
    },
    AIM3023AU: {
      Description: "Man Alternative Style Risk Premia Accs",
    },
    AIM4380AU: {
      Description: "Zebedee L-S Equity Access",
    },
    AIM5557AU: {
      Description: "Global Listed Infra Mndt No.1",
    },
    AIT3081AU: {
      Description: "Aim Global High Conviction",
    },
    AJF0001AU: {
      Description: "OnePath OA IP-ING AJ Mortgage",
    },
    AJF0003AU: {
      Description: "OnePath OA IP-OP Tax Effective Inc EF",
    },
    AJF0802AU: {
      Description: "OnePath WS-Balanced Trust",
    },
    AJF0803AU: {
      Description: "OnePath WS-Property Securities Trust",
    },
    AJF0804AU: {
      Description: "OnePath WS-Australian Share Trust",
    },
    ALC9203AU: {
      Description: "Alceon High Conviction Absolute Rt Plfm",
    },
    ALC9900AU: {
      Description: "Alceon High Conviction Absolute Rt A",
    },
    ALR2783AU: {
      Description: "Australian Eagle Trust",
    },
    ALU9386AU: {
      Description: "Alluvium Global Fund",
    },
    AMF0100AU: {
      Description: "Adelaide Cash Management Trust",
    },
    AMP0012AU: {
      Description: "AMP FLI-AMP Conservative",
    },
    AMP0013AU: {
      Description: "AMP FLI-AMP Balanced Growth",
    },
    AMP0014AU: {
      Description: "AMP FLI-AMP Property Securities",
    },
    AMP0015AU: {
      Description: "AMP FLI-FD Australian Shr Original",
    },
    AMP0017AU: {
      Description: "AMP FLI-FD International Shr Original",
    },
    AMP0018AU: {
      Description: "AMP FLI- AMP Capital Equity",
    },
    AMP0019AU: {
      Description: "AMP FLI-UBS Aus Small Companies",
    },
    AMP0141AU: {
      Description: "AMP FLI-AMP High Growth",
    },
    AMP0249AU: {
      Description: "AMP Capital Managed Treasury",
    },
    AMP0254AU: {
      Description: "AMP Capital International Bond A",
    },
    AMP0255AU: {
      Description: "AMP Capital Listed Property Trusts A",
    },
    AMP0257AU: {
      Description: "AMP Capital Enhanced Index Share A",
    },
    AMP0263AU: {
      Description: "AMP Capital Corporate Bond",
    },
    AMP0268AU: {
      Description: "AMP Capital International Bond",
    },
    AMP0269AU: {
      Description: "AMP Capital Listed Property Trusts",
    },
    AMP0271AU: {
      Description: "AMP Capital Enhanced Index Share",
    },
    AMP0275AU: {
      Description: "AMP Capital Enhanced Index Intl Share",
    },
    AMP0282AU: {
      Description: "AMP Capital Global Gr Opportunities",
    },
    AMP0370AU: {
      Description: "AMP Capital Equity A",
    },
    AMP0441AU: {
      Description: "AMP Capital Balanced Growth A",
    },
    AMP0442AU: {
      Description: "AMP Capital Balanced Growth",
    },
    AMP0443AU: {
      Description: "AMP Capital Conservative A",
    },
    AMP0444AU: {
      Description: "AMP Capital Conservative",
    },
    AMP0445AU: {
      Description: "AMP Capital Equity",
    },
    AMP0446AU: {
      Description: "AMP Capital Australian Small Companies A",
    },
    AMP0447AU: {
      Description: "AMP Capital Future Directions Balanced",
    },
    AMP0448AU: {
      Description: "AMP FLI-AMP Sustainable Future Aus Shr",
    },
    AMP0449AU: {
      Description: "AMP Capital Sustainable Share A",
    },
    AMP0450AU: {
      Description: "AMP Capital Sustainable Share",
    },
    AMP0452AU: {
      Description: "AMP Capital Res Inv Leaders Bal A",
    },
    AMP0453AU: {
      Description: "AMP Capital Ethical Leaders Bal",
    },
    AMP0455AU: {
      Description: "AMP Capital Ethical Leaders Intl Shr A",
    },
    AMP0456AU: {
      Description: "AMP Capital Ethical Leaders Intl Shr O",
    },
    AMP0546AU: {
      Description: "AMP Capital Future Directions Balanced A",
    },
    AMP0557AU: {
      Description: "AMP Capital Corporate Bond A",
    },
    AMP0558AU: {
      Description: "AMP Capital Future Directions Growth",
    },
    AMP0559AU: {
      Description: "AMP Capital Future Directions Growth A",
    },
    AMP0574AU: {
      Description: "AMP Capital High Growth",
    },
    AMP0577AU: {
      Description: "AMP Capital Australian Small Companies",
    },
    AMP0670AU: {
      Description: "AMP Capital Future Directions Aus Bd",
    },
    AMP0672AU: {
      Description: "AMP Capital Future Directions Cnsrv",
    },
    AMP0674AU: {
      Description: "AMP Capital Future Directions High Gr",
    },
    AMP0676AU: {
      Description: "AMP Capital Future Directions Intl Bd",
    },
    AMP0677AU: {
      Description: "AMP Capital FD Intl Bond A",
    },
    AMP0678AU: {
      Description: "AMP Capital Future Directions Mod Cnsrv",
    },
    AMP0679AU: {
      Description: "AMP Capital Future Directions Mod Cons A",
    },
    AMP0681AU: {
      Description: "AMP Specialist Australian Share WT",
    },
    AMP0682AU: {
      Description: "AMP Capital FD Intl Shr A",
    },
    AMP0683AU: {
      Description: "AMP Capital Future Directions Intl Shr",
    },
    AMP0686AU: {
      Description: "AMP Capital Global Property Securities",
    },
    AMP0688AU: {
      Description: "AMP FLI-FD Conservative",
    },
    AMP0689AU: {
      Description: "AMP FLI-FD Moderately Conservative",
    },
    AMP0690AU: {
      Description: "AMP FLI-Future Directions Balanced",
    },
    AMP0691AU: {
      Description: "AMP FLI-FD Growth",
    },
    AMP0692AU: {
      Description: "AMP FLI-FD High Growth",
    },
    AMP0693AU: {
      Description: "AMP FLI-FD Australian Bond",
    },
    AMP0694AU: {
      Description: "AMP FLI-FD International Bond",
    },
    AMP0697AU: {
      Description: "AMP Capital Property Securities",
    },
    AMP0824AU: {
      Description: "AMP Specialist International Share A",
    },
    AMP0825AU: {
      Description: "AMP Specialist International Shr (Hdg) A",
    },
    AMP0828AU: {
      Description: "AMP FLI-AMP Aus Share Enhanced Index",
    },
    AMP0832AU: {
      Description: "AMP FLI-Ironbark Karara Australian Share",
    },
    AMP0833AU: {
      Description: "AMP FLI- Yarra Cap Mngmt Aust Eq",
    },
    AMP0834AU: {
      Description: "AMP FLI-Alphinity Australian Share",
    },
    AMP0835AU: {
      Description: "AMP FLI-BT Australian Share",
    },
    AMP0839AU: {
      Description: "AMP FLI-BlackRock Sci Hgd Int Alpha Tilt",
    },
    AMP0841AU: {
      Description: "AMP FLI-BlackRock Sci Int Alpha Tilts",
    },
    AMP0842AU: {
      Description: "AMP FLI-UBS Property Securities",
    },
    AMP0843AU: {
      Description: "AMP FLI-Perennial Value Aust Share",
    },
    AMP0844AU: {
      Description: "AMP FLI-Schroder Global Active Value",
    },
    AMP0846AU: {
      Description: "AMP FLI-Fidelity Global Equities",
    },
    AMP0850AU: {
      Description: "AMP FLI-Specialist Geared Aus Share",
    },
    AMP0853AU: {
      Description: "AMP FLI-Perpetual Industrial Share",
    },
    AMP0854AU: {
      Description: "AMP FLI-Specialist Australian Shares",
    },
    AMP0855AU: {
      Description: "AMP FLI-Specialist International Shares",
    },
    AMP0968AU: {
      Description: "AMP Capital Specialist Geared Aus Shr",
    },
    AMP0969AU: {
      Description: "AMP Specialist Geared Australian Share A",
    },
    AMP0973AU: {
      Description: "AMP Specialist Australian Small Coms A",
    },
    AMP0974AU: {
      Description: "AMP Capital Global Property Securities A",
    },
    AMP0981AU: {
      Description: "AMP Capital WS Australian Bd",
    },
    AMP0994AU: {
      Description: "AMP FLI-AMP Intl Share Enhanced Index",
    },
    AMP0995AU: {
      Description: "AMP FLI-Schroder Australian Equity",
    },
    AMP1005AU: {
      Description: "AMP FLI-Specialist Aus Small Companies",
    },
    AMP1006AU: {
      Description: "AMP FLI-Specialist Hedged Int Shares",
    },
    AMP1007AU: {
      Description: "AMP FLI-Specialist Property & Infras",
    },
    AMP1015AU: {
      Description: "AMP Capital Core Property A",
    },
    AMP1048AU: {
      Description: "AMP FLI-AMP Australian Bond",
    },
    AMP1049AU: {
      Description: "AMP FLI-AMP Capital Aus Prpty Secs",
    },
    AMP1050AU: {
      Description: "AMP FLI-AMP Balanced Index",
    },
    AMP1051AU: {
      Description: "AMP FLI-AMP Conservative Index",
    },
    AMP1054AU: {
      Description: "AMP FLI-Zurich American Cent Glbl Gr",
    },
    AMP1055AU: {
      Description: "AMP FLI-Res Inv Leaders Aus Share",
    },
    AMP1056AU: {
      Description: "AMP FLI-Res Inv Leaders Balanced",
    },
    AMP1057AU: {
      Description: "AMP FLI-Res Inv Leaders Conservative",
    },
    AMP1058AU: {
      Description: "AMP FLI-Res Inv Leaders Growth",
    },
    AMP1059AU: {
      Description: "AMP FLI-Res Inv Leaders Intl Share",
    },
    AMP1073AU: {
      Description: "AMP Capital Global Property Securities H",
    },
    AMP1074AU: {
      Description: "AMP Capital Core Property H",
    },
    AMP1075AU: {
      Description: "AMP Capital Specialist Intl Shr",
    },
    AMP1076AU: {
      Description: "AMP Capital Specialist Intl (Hdg) Shr",
    },
    AMP1077AU: {
      Description: "AMP Capital Australian Small Companies H",
    },
    AMP1100AU: {
      Description: "AMP Capital Sustainable Share H",
    },
    AMP1116AU: {
      Description: "AMP FLI-BlackRock Global Bond",
    },
    AMP1117AU: {
      Description: "AMP FLI-FD Emerging Markets",
    },
    AMP1151AU: {
      Description: "AMP Capital Res Inv Leaders Aus Shr A",
    },
    AMP1152AU: {
      Description: "AMP Capital Res Inv Leaders Aus Shr",
    },
    AMP1179AU: {
      Description: "AMP Capital Core Infrastructure A",
    },
    AMP1180AU: {
      Description: "AMP Capital Core Infrastructure H",
    },
    AMP1205AU: {
      Description: "AMP FLI-FD Asian Share",
    },
    AMP1207AU: {
      Description: "AMP FLI-DNR High Conviction Aus Share",
    },
    AMP1285AU: {
      Description: "AMP Capital Corporate Bond H",
    },
    AMP1388AU: {
      Description: "AMP FLI S2-AMP Australian Bond",
    },
    AMP1390AU: {
      Description: "AMP FLI S2-AMP Balanced Index",
    },
    AMP1391AU: {
      Description: "AMP FLI S2-AMP Balanced Growth",
    },
    AMP1392AU: {
      Description: "AMP FLI S2-AMP Conservative",
    },
    AMP1393AU: {
      Description: "AMP FLI S2-AMP Conservative Index",
    },
    AMP1394AU: {
      Description: "AMP FLI S2-AMP Capital Equity",
    },
    AMP1395AU: {
      Description: "AMP FLI S2-AMP High Growth",
    },
    AMP1396AU: {
      Description: "AMP FLI S2-AMP Intl Shr Enh Index",
    },
    AMP1397AU: {
      Description: "AMP FLI S2-AMP Capital Aus Prpty Secs",
    },
    AMP1398AU: {
      Description: "AMP FLI S2-UBS Aus Small Companies",
    },
    AMP1400AU: {
      Description: "AMP FLIS2-BlckRock Sci Hgd Int Alph Tilt",
    },
    AMP1401AU: {
      Description: "AMP FLI S2-BlackRock Sci Int Alpha Tilt",
    },
    AMP1402AU: {
      Description: "AMP FLI S2-Schroder Global Active Value",
    },
    AMP1403AU: {
      Description: "AMP FLI S2-BlackRock Global Bond",
    },
    AMP1405AU: {
      Description: "AMP FLI S2-BT Australian Share",
    },
    AMP1406AU: {
      Description: "AMP FLI S2- Yarra Cap Mngmt Aust Eq",
    },
    AMP1407AU: {
      Description: "AMP FLI S2-Ironbark Karara Aus Shr",
    },
    AMP1408AU: {
      Description: "AMP FLI S2-FD Asian Share",
    },
    AMP1409AU: {
      Description: "AMP FLI S2-FD Australian Bond",
    },
    AMP1410AU: {
      Description: "AMP FLI S2-Specialist Australian Shares",
    },
    AMP1411AU: {
      Description: "AMP FLI S2-Specialist Aus Small Co",
    },
    AMP1412AU: {
      Description: "AMP FLI S2-FD Balanced",
    },
    AMP1413AU: {
      Description: "AMP FLI S2-FD Conservative",
    },
    AMP1414AU: {
      Description: "AMP FLI S2-FD Emerging Markets",
    },
    AMP1416AU: {
      Description: "AMP FLI S2-Specialist Geared Aus Share",
    },
    AMP1417AU: {
      Description: "AMP FLI S2-FD Growth",
    },
    AMP1418AU: {
      Description: "AMP FLI S2-Specialist Hedged Int Shares",
    },
    AMP1419AU: {
      Description: "AMP FLI S2-FD High Growth",
    },
    AMP1420AU: {
      Description: "AMP FLI S2-FD International Bond",
    },
    AMP1421AU: {
      Description: "AMP FLI S2-Specialist International Shr",
    },
    AMP1422AU: {
      Description: "AMP FLI S2-FD Moderately Conservative",
    },
    AMP1423AU: {
      Description: "AMP FLI S2-Specialist Property & Infras",
    },
    AMP1427AU: {
      Description: "AMP FLI S2-Zurich American Cent Glbl Gr",
    },
    AMP1430AU: {
      Description: "AMP FLI S2-Perennial Value Aus Shr",
    },
    AMP1431AU: {
      Description: "AMP FLI S2-Perpetual Industrial Share",
    },
    AMP1432AU: {
      Description: "AMP FLI S2-Fidelity Global Equities",
    },
    AMP1433AU: {
      Description: "AMP FLI S2-Res Inv Leaders Aus Shr",
    },
    AMP1434AU: {
      Description: "AMP FLI S2-Res Inv Leaders Balanced",
    },
    AMP1435AU: {
      Description: "AMP FLI S2-Res Inv Leaders Conservative",
    },
    AMP1436AU: {
      Description: "AMP FLI S2-Res Inv Leaders Growth",
    },
    AMP1437AU: {
      Description: "AMP FLI S2-Res Inv Leaders Intl Shr",
    },
    AMP1438AU: {
      Description: "AMP FLI S2-Schroder Australian Equities",
    },
    AMP1439AU: {
      Description: "AMP FLI S2-UBS Property Securities",
    },
    AMP1441AU: {
      Description: "AMP FLI S2-DNR High Conviction Aus Share",
    },
    AMP1442AU: {
      Description: "AMP FLI S2-AMP Monthly Income Fund No.1",
    },
    AMP1443AU: {
      Description: "AMP FLI S2-AMP Monthly Income Fund No.2",
    },
    AMP1444AU: {
      Description: "AMP FLI S2-AMP Monthly Income Fund No.3",
    },
    AMP1445AU: {
      Description: "AMP FLI S2-AMP Aus Shr Enh Indx",
    },
    AMP1592AU: {
      Description: "AMP Capital Global Infr Secs Fd Unhgd H",
    },
    AMP1593AU: {
      Description: "AMP Capital Global Infr Secs Fd Unhgd A",
    },
    AMP1594AU: {
      Description: "AMP Capital Global Infr Secs Fd Hgd H",
    },
    AMP1595AU: {
      Description: "AMP Capital Global Infr Secs Fd Hgd A",
    },
    AMP1639AU: {
      Description: "AMP FLI S2-Alphinity Australian Share",
    },
    AMP1685AU: {
      Description: "AMP Capital Multi-Asset A",
    },
    AMP1686AU: {
      Description: "AMP Capital Multi-Asset H",
    },
    AMP1905AU: {
      Description: "AMP Capital Equity Income Generator",
    },
    AMP1931AU: {
      Description: "AMP Capital Australian Equity Income H",
    },
    AMP1932AU: {
      Description: "AMP Capital Australian Dynamic Markets A",
    },
    AMP1946AU: {
      Description: "AMP Capital Australian Dynamic Markets H",
    },
    AMP1979AU: {
      Description: "AMP FLI S2-Professional Conservative",
    },
    AMP1980AU: {
      Description: "AMP FLI S2-Professional Balanced",
    },
    AMP1981AU: {
      Description: "AMP FLI S2-Professional Growth",
    },
    AMP1982AU: {
      Description: "AMP FLI S2-Professional High Growth",
    },
    AMP1983AU: {
      Description: "AMP FLI S2-Professional Moderately Cons",
    },
    AMP1990AU: {
      Description: "AMP Specialist Property and Infras",
    },
    AMP1991AU: {
      Description: "AMP FLI S2-Specialist Divers FixedIncome",
    },
    AMP1992AU: {
      Description: "AMP Specialist Diversified Fixed Income",
    },
    AMP2030AU: {
      Description: "AMP FLI S2-AMP Capital Glbl Infra (Hgd)",
    },
    AMP2031AU: {
      Description: "AMP FLI S2-Aberdeen Emerg Opps",
    },
    AMP2032AU: {
      Description: "AMP FLI S2-Bentham Global Income",
    },
    AMP2033AU: {
      Description: "AMP FLI S2-Grant Samuel Epoch GESY UH",
    },
    AMP2035AU: {
      Description: "AMP FLI S2-UBS Clarion Glbl Property Sec",
    },
    AMP2036AU: {
      Description: "AMP FLI S2-AB Dynamic Global Fixed Inc",
    },
    AMP2037AU: {
      Description: "AMP FLI S2-AMP Capital Corporate Bond",
    },
    AMP2038AU: {
      Description: "AMP FLI S2-Macquarie Income Opps",
    },
    AMP2039AU: {
      Description: "AMP FLI S2-PIMCO Div Fixed Interest",
    },
    AMP2040AU: {
      Description: "AMP FLI S2-Schroder Fixed Income",
    },
    AMP2041AU: {
      Description: "AMP FLI S2-Magellan Global",
    },
    AMP2042AU: {
      Description: "AMP FLI S2-Rare Infrastructure Value",
    },
    AMP2043AU: {
      Description: "AMP FLI S2-AMP Capital Glbl Property Sec",
    },
    AMP2044AU: {
      Description: "AMP FLI S2-AMP Capital Equity Income Gen",
    },
    AMP2045AU: {
      Description: "AMP FLI S2-Ausbil Aus Active Equity",
    },
    AMP2066AU: {
      Description: "AB Advantage Dynamic Global Fixed Income",
    },
    AMP2068AU: {
      Description: "Bentham Advantage Global Income",
    },
    AMP2070AU: {
      Description: "RARE Advantage Infrastructure Value Hdg",
    },
    AMP2072AU: {
      Description: "Alphinity Advantage Australian Share",
    },
    AMP2074AU: {
      Description: "Ironbark Karara Advantage AUS Share",
    },
    AMP2076AU: {
      Description: "DNR Capital Advantage AUS Eqs Hi Convct",
    },
    AMP2078AU: {
      Description: "Grant Samuel Epch Advtg GlbEq ShldYldUnH",
    },
    AMP2080AU: {
      Description: "Magellan Advantage Global",
    },
    AMP2082AU: {
      Description: "PIMCO Advantage Diversified Fixed Intst",
    },
    AMP2084AU: {
      Description: "Perennial Value Advantage Inc Wlth Dfndr",
    },
    AMP2086AU: {
      Description: "MyNorth Dynamic Balanced",
    },
    AMP2087AU: {
      Description: "MyNorth Retirement",
    },
    AMP2088AU: {
      Description: "AMP Capital Future Cash Flow 6 Series 1",
    },
    AMP2089AU: {
      Description: "AMP Capital Future Cash Flow 9 Series 1",
    },
    AMP2090AU: {
      Description: "AMP Capital Future Cash Flow 12 Series 1",
    },
    AMP2091AU: {
      Description: "AMP Dynamic Balanced",
    },
    AMP2113AU: {
      Description: "Legg Mason Martin Currie Advtg Eq Inc Tr",
    },
    AMP3087AU: {
      Description: "Legg Mason Martin Currie Advtg Real Inc",
    },
    AMP3254AU: {
      Description: "AMP Capital Core Retirement Fund",
    },
    AMP3259AU: {
      Description: "AMP Capital Advantage Glb Prprty Secs Fd",
    },
    AMP3561AU: {
      Description: "AMP Australian Property Index",
    },
    AMP4020AU: {
      Description: "AMP Australian Fixed Interest Index",
    },
    AMP4344AU: {
      Description: "AMP International Property Index Hdg",
    },
    AMP5018AU: {
      Description: "Lazard Advantage Global Infras Fd",
    },
    AMP5356AU: {
      Description: "Walter Scott Advantage Global Equity Fd",
    },
    AMP5581AU: {
      Description: "Invesco Advtg Wholsl Glb Trgtd Rets Fd",
    },
    AMP5683AU: {
      Description: "Schroder Advantage Australian Equity Fd",
    },
    AMP5813AU: {
      Description: "Zurich Investment Advtg Glb Gr Shr Fd",
    },
    AMP6202AU: {
      Description: "NAM Advantage Australian Share Income",
    },
    AMP6265AU: {
      Description: "AMP Capital Australian Em Coms On-plfm A",
    },
    AMP6702AU: {
      Description: "Fidelity Advantage Australian Eqs Fd",
    },
    AMP7078AU: {
      Description: "AMP International Equity Index",
    },
    AMP7497AU: {
      Description: "AMP Capital Global Coms On-platform A",
    },
    AMP7626AU: {
      Description: "AMP International Fixed Intst Idx Hdg",
    },
    AMP7635AU: {
      Description: "Schroder Advantage Fixed Income Fund",
    },
    AMP7750AU: {
      Description: "AMP Capital Advantage Corporate Bond Fd",
    },
    AMP8287AU: {
      Description: "Janus Henderson Advtg Tact Inc Fd",
    },
    AMP8292AU: {
      Description: "AMP Capital Advantage Core Infras Fd",
    },
    AMP8506AU: {
      Description: "AMP Capital Global Coms Off-platform H",
    },
    AMP8634AU: {
      Description: "Kapstream Advantage Absolute Ret Inc Fd",
    },
    AMP8663AU: {
      Description: "Arrowstreet Advantage Global Eq Fd",
    },
    AMP8760AU: {
      Description: "Merlon Advantage Australian Share Inc Fd",
    },
    AMP9024AU: {
      Description: "AMP Capital Corporate Bond R",
    },
    AMP9025AU: {
      Description: "AMP Capital Australian Equity Income",
    },
    AMP9026AU: {
      Description: "AMP Capital Global Property Securities R",
    },
    AMP9027AU: {
      Description: "AMP Capital Global Infr Sec (Unh)",
    },
    AMP9028AU: {
      Description: "AMP Capital Multi-Asset",
    },
    AMP9144AU: {
      Description: "Aberdeen Advantage Emerging Opps Fd",
    },
    AMP9163AU: {
      Description: "Bennelong Advantage ex-20 Aus Eqs Fd",
    },
    AMP9555AU: {
      Description: "AMP Australian Equity Index",
    },
    AMP9620AU: {
      Description: "Ausbil Advantage 130/30 Focus Fund",
    },
    AMP9989AU: {
      Description: "Antipodes Advantage Global Share Fund",
    },
    AMR0006AU: {
      Description: "Regal Long Short Australian Equity",
    },
    AMT3151AU: {
      Description: "Realm Strategic Wholesale Income A",
    },
    AMT9221AU: {
      Description: "Longreach Direct Lending",
    },
    ANT0002AU: {
      Description: "Fairview Equity Partners Emerging Co",
    },
    ANT0005AU: {
      Description: "Altrinsic Global Equities Trust",
    },
    ANZ0011AU: {
      Description: "ANZ OA IP-OP Australian Shares",
    },
    ANZ0013AU: {
      Description: "ANZ OA IP-OP Blue Chip Imputation",
    },
    ANZ0023AU: {
      Description: "ANZ Fixed Interest Trust",
    },
    ANZ0027AU: {
      Description: "ANZ Equity Imputation",
    },
    ANZ0028AU: {
      Description: "ANZ Equity Trust No 1",
    },
    ANZ0030AU: {
      Description: "ANZ Property Securities",
    },
    ANZ0035AU: {
      Description: "ANZ OA IP-OP Income",
    },
    ANZ0036AU: {
      Description: "ANZ OA IP-OP Conservative",
    },
    ANZ0037AU: {
      Description: "ANZ OA IP-OP Balanced",
    },
    ANZ0038AU: {
      Description: "ANZ OA IP-OP Managed Growth",
    },
    ANZ0079AU: {
      Description: "ANZ Mortgage Series 2",
    },
    ANZ0117AU: {
      Description: "ANZ V2 Plus",
    },
    ANZ0129AU: {
      Description: "ANZ Mortgage",
    },
    ANZ0150AU: {
      Description: "ANZ Cash Plus",
    },
    ANZ0204AU: {
      Description: "ANZ Wholesale-Australian Imputation",
    },
    ANZ0212AU: {
      Description: "OnePath WS-Diversified Fixed Interest",
    },
    ANZ0215AU: {
      Description: "ANZ Wholesale-Property Securities",
    },
    ANZ0216AU: {
      Description: "OnePath WS-Select Leaders",
    },
    ANZ0233AU: {
      Description: "ANZ OA IP-OP Diversified Fixed Interest",
    },
    ANZ0235AU: {
      Description: "ANZ OA IP-OP Select Leaders NE",
    },
    ANZ0328AU: {
      Description: "ANZ OA IP-BlackRock Sci Aus Equity EF",
    },
    ANZ0329AU: {
      Description: "ANZ OA IP-BlackRock Sci Aus Equity NE",
    },
    ANZ0330AU: {
      Description: "ANZ OA Inv-Arrowstreet Global Eq Hdg EF",
    },
    ANZ0331AU: {
      Description: "ANZ OA Inv-Arrowstreet Global Eq Hdg NEF",
    },
    ANZ0332AU: {
      Description: "ANZ OA IP-BlackRock Sci Intl Equity EF",
    },
    ANZ0333AU: {
      Description: "ANZ OA IP-BlackRock Sci Intl Equity NE",
    },
    ANZ0334AU: {
      Description: "ANZ OA IP-CFS Imputation EF",
    },
    ANZ0335AU: {
      Description: "ANZ OA IP-CFS Imputation NE",
    },
    ANZ0336AU: {
      Description: "ANZ OA Inv-Pendal Cor H Glb EF/Sel",
    },
    ANZ0337AU: {
      Description: "ANZ OA Inv-Pendal Cor H Glb NEF",
    },
    ANZ0338AU: {
      Description: "ANZ OA IP-SG Hiscock Property EF",
    },
    ANZ0339AU: {
      Description: "ANZ OA IP-SG Hiscock Property NEF",
    },
    ANZ0340AU: {
      Description: "ANZ OA Inv-Magellan Global EF",
    },
    ANZ0341AU: {
      Description: "ANZ OA Inv-Magellan Global NEF",
    },
    ANZ0342AU: {
      Description: "ANZ OA IP-OP Active Growth EF",
    },
    ANZ0343AU: {
      Description: "ANZ OA IP-OP Active Growth NE",
    },
    ANZ0344AU: {
      Description: "ANZ OA IP-OP Australian Shares NE",
    },
    ANZ0345AU: {
      Description: "ANZ OA IP-OP Balanced NE",
    },
    ANZ0346AU: {
      Description: "ANZ OA IP-OP Blue Chip Imputation NE",
    },
    ANZ0347AU: {
      Description: "ANZ OA IP-OP Cash EF",
    },
    ANZ0348AU: {
      Description: "ANZ OA IP-OP Cash NE",
    },
    ANZ0349AU: {
      Description: "ANZ OA IP-OP Conservative NE",
    },
    ANZ0350AU: {
      Description: "ANZ OA IP-OP Diversified Fixed Int NE",
    },
    ANZ0352AU: {
      Description: "ANZ OA IP-OP High Growth EF",
    },
    ANZ0353AU: {
      Description: "ANZ OA IP-OP High Growth NE",
    },
    ANZ0354AU: {
      Description: "ANZ OA IP-OP Income NE",
    },
    ANZ0355AU: {
      Description: "ANZ OA IP-OP Income Plus EF",
    },
    ANZ0356AU: {
      Description: "ANZ OA IP-OP Income Plus NE",
    },
    ANZ0357AU: {
      Description: "ANZ OA IP-OP Managed Growth NE",
    },
    ANZ0358AU: {
      Description: "ANZ OA IP-OnePath Mortgage EF",
    },
    ANZ0359AU: {
      Description: "ANZ OA IP-OnePath Mortgage NE",
    },
    ANZ0360AU: {
      Description: "ANZ OA IP-OP Global Emerging Markets EF",
    },
    ANZ0361AU: {
      Description: "ANZ OA IP-OP Global Emerging Markets NE",
    },
    ANZ0362AU: {
      Description: "ANZ OA IP-OP Property Securities EF",
    },
    ANZ0363AU: {
      Description: "ANZ OA IP-OP Property Securities NE",
    },
    ANZ0364AU: {
      Description: "ANZ OA IP-OP Sustainable Inv Aus EF",
    },
    ANZ0365AU: {
      Description: "ANZ OA IP-OP Sustainable Inv Aus NE",
    },
    ANZ0366AU: {
      Description: "ANZ OA IP-OP Tax Effective Income EF",
    },
    ANZ0367AU: {
      Description: "ANZ OA IP-OP Tax Effective Income NE",
    },
    ANZ0368AU: {
      Description: "ANZ OA IP-Investors Mutual Aus Shares EF",
    },
    ANZ0369AU: {
      Description: "ANZ OA IP-Investors Mutual Aus Shares NE",
    },
    ANZ0370AU: {
      Description: "ANZ OA IP-Optimix Aus Fixed Interest EF",
    },
    ANZ0371AU: {
      Description: "ANZ OA IP-Optimix Aus Fixed Interest NE",
    },
    ANZ0372AU: {
      Description: "ANZ OA IP-Optimix Property Securities EF",
    },
    ANZ0373AU: {
      Description: "ANZ OA IP-Optimix Property Securities NE",
    },
    ANZ0374AU: {
      Description: "ANZ OA IP-Optimix Australian Shares EF",
    },
    ANZ0375AU: {
      Description: "ANZ OA IP-Optimix Australian Shares NE",
    },
    ANZ0376AU: {
      Description: "ANZ OA IP-Optimix Conservative EF",
    },
    ANZ0377AU: {
      Description: "ANZ OA IP-Optimix Conservative NE",
    },
    ANZ0380AU: {
      Description: "ANZ OA IP-Optimix Global Shares EF",
    },
    ANZ0381AU: {
      Description: "ANZ OA IP-Optimix Global Shares NE",
    },
    ANZ0382AU: {
      Description: "ANZ OA IP-Optimix Gbl Small Companies EF",
    },
    ANZ0383AU: {
      Description: "ANZ OA IP-Optimix Gbl Small Companies NE",
    },
    ANZ0384AU: {
      Description: "ANZ OA IP-Optimix Growth EF",
    },
    ANZ0385AU: {
      Description: "ANZ OA IP-Optimix Growth NE",
    },
    ANZ0386AU: {
      Description: "ANZ OA IP-Optimix High Growth EF",
    },
    ANZ0387AU: {
      Description: "ANZ OA IP-Optimix High Growth NE",
    },
    ANZ0388AU: {
      Description: "ANZ OA IP-Optimix Moderate EF",
    },
    ANZ0389AU: {
      Description: "ANZ OA IP-Optimix Moderate NE",
    },
    ANZ0390AU: {
      Description: "ANZ OA IP-Perpetual Australian Shares EF",
    },
    ANZ0391AU: {
      Description: "ANZ OA IP-Perpetual Australian Shares NE",
    },
    ANZ0392AU: {
      Description: "ANZ OA IP-Schroder Australian Equity EF",
    },
    ANZ0393AU: {
      Description: "ANZ OA IP-Schroder Australian Equity NE",
    },
    ANZ0394AU: {
      Description: "ANZ OA IP-Vanguard Aus Shares Index EF",
    },
    ANZ0395AU: {
      Description: "ANZ OA IP-Vanguard Aus Shares Index NE",
    },
    ANZ0396AU: {
      Description: "ANZ OA IP-Vanguard Intl Shr Index H EF",
    },
    ANZ0397AU: {
      Description: "ANZ OA IP-Vanguard Intl Shr Index H NE",
    },
    ANZ0398AU: {
      Description: "ANZ OA IP-UBS Diversified Fixed Inc EF",
    },
    ANZ0399AU: {
      Description: "ANZ OA IP-UBS Diversified Fixed Inc NE",
    },
    ANZ0624AU: {
      Description: "ANZ OA IP-OP Dvrs Crdt EF",
    },
    ANZ0625AU: {
      Description: "ANZ OA IP-OP Dvrs Crdt NE",
    },
    ANZ0628AU: {
      Description: "ANZ OA IP-Pendal Smlr Coms EF",
    },
    ANZ0629AU: {
      Description: "ANZ OA IP-Pendal Smlr Coms NE",
    },
    ANZ0632AU: {
      Description: "ANZ OA IP-Optimix Balanced EF",
    },
    ANZ0633AU: {
      Description: "ANZ OA IP-Optimix Balanced NE",
    },
    ANZ0758AU: {
      Description: "ANZ OA IP-OP Select Leaders EF",
    },
    ANZ0818AU: {
      Description: "ANZ OA IP-Ausbil Aus Emerging Leaders EF",
    },
    ANZ0819AU: {
      Description: "ANZ OA IP-Ausbil Aus Emerging Leaders NE",
    },
    ANZ0822AU: {
      Description: "ANZ OA IP-BlackRock Sci Div Growth EF",
    },
    ANZ0823AU: {
      Description: "ANZ OA IP-BlackRock Sci Div Growth NE",
    },
    ANZ0824AU: {
      Description: "ANZ OA Inv-Schroder Real Return Trust EF",
    },
    ANZ0825AU: {
      Description: "ANZ OA Inv-Schroder Real Return Tr NEF",
    },
    ANZ0826AU: {
      Description: "ANZ OA IP-CFS Global Credit Income EF",
    },
    ANZ0827AU: {
      Description: "ANZ OA IP-CFS Global Credit Income NE",
    },
    ANZ0828AU: {
      Description: "ANZ OA IP-Bentham Global Income EF",
    },
    ANZ0829AU: {
      Description: "ANZ OA IP-Bentham Global Income NE",
    },
    ANZ0833AU: {
      Description: "ANZ OA IP-OP Global Share EF",
    },
    ANZ0834AU: {
      Description: "ANZ OA IP-OP Global Share NE",
    },
    ANZ0835AU: {
      Description: "ANZ OA IP-IOOF/Perennial Value Share EF",
    },
    ANZ0836AU: {
      Description: "ANZ OA IP-IOOF/Perennial Value Share NE",
    },
    ANZ0837AU: {
      Description: "ANZ OA IP-Kapstream Abs Ret Income EF",
    },
    ANZ0838AU: {
      Description: "ANZ OA IP-Kapstream Abs Ret Income NE",
    },
    ANZ0839AU: {
      Description: "ANZ OA IP-MFS Global Equity EF",
    },
    ANZ0840AU: {
      Description: "ANZ OA IP-MFS Global Equity NE",
    },
    ANZ0841AU: {
      Description: "ANZ OA IP-Perpetual Balanced Growth EF",
    },
    ANZ0842AU: {
      Description: "ANZ OA IP-Perpetual Balanced Growth NE",
    },
    ANZ0843AU: {
      Description: "ANZ OA IP-Perpetual Conservative Gr EF",
    },
    ANZ0844AU: {
      Description: "ANZ OA IP-Perpetual Conservative Gr NE",
    },
    ANZ0845AU: {
      Description: "ANZ OA IP-Platinum International EF",
    },
    ANZ0846AU: {
      Description: "ANZ OA IP-Platinum International NE",
    },
    ANZ0847AU: {
      Description: "ANZ OA IP-Schroder Balanced EF",
    },
    ANZ0848AU: {
      Description: "ANZ OA IP-Schroder Balanced NE",
    },
    ANZ0849AU: {
      Description: "ANZ OA IP-UBS Balanced EF",
    },
    ANZ0850AU: {
      Description: "ANZ OA IP-UBS Balanced NE",
    },
    ANZ0851AU: {
      Description: "ANZ OA IP-UBS Defensive EF",
    },
    ANZ0852AU: {
      Description: "ANZ OA IP-UBS Defensive NE",
    },
    ANZ0853AU: {
      Description: "ANZ OA IP-Vanguard Intl Shares Index EF",
    },
    ANZ0854AU: {
      Description: "ANZ OA IP-Vanguard Intl Shares Index NE",
    },
    ANZ0855AU: {
      Description: "ANZ OA IP-Vanguard Property Sec Index EF",
    },
    ANZ0856AU: {
      Description: "ANZ OA IP-Vanguard Property Sec Index NE",
    },
    ANZ0857AU: {
      Description: "ANZ OA Inv-Antipodes Glbl(Lg only)EF/Sel",
    },
    ANZ0858AU: {
      Description: "ANZ OA Inv-Antipodes Global (Lg only)NEF",
    },
    APN0001AU: {
      Description: "APN Property for Income",
    },
    APN0004AU: {
      Description: "APN Property for Income No. 2",
    },
    APN0008AU: {
      Description: "APN AREIT",
    },
    APN0023AU: {
      Description: "APN Asian REIT",
    },
    AQU3695AU: {
      Description: "Aquasia Private Investment",
    },
    AQU8075AU: {
      Description: "Aquasia Enhanced Credit",
    },
    ARO0006AU: {
      Description: "C WorldWide Global Equity Trust",
    },
    ASC0001AU: {
      Description: "Smallco Investment",
    },
    ASC0003AU: {
      Description: "Smallco Broadcap",
    },
    ASK1198AU: {
      Description: "Morningstar High Growth Fund - Class A",
    },
    ASK1211AU: {
      Description: "Morningstar Multi-Asset All Growth Z",
    },
    ASK1214AU: {
      Description: "Morningstar Multi-Asset Defensive Z",
    },
    ASX0001AU: {
      Description: "Auscap Long Short Australian Equities",
    },
    ASX6124AU: {
      Description: "Auscap Long Short Aus Equs- Daily Plfm",
    },
    ASX6486AU: {
      Description: "Auscap Global Equities",
    },
    ASX8411AU: {
      Description: "Auscap Long Short Aus Equs-Platform",
    },
    AUG0001AU: {
      Description: "Australian Ethical Balanced",
    },
    AUG0002AU: {
      Description: "Australian Ethical Australian Shr",
    },
    AUG0003AU: {
      Description: "Australian Ethical Income",
    },
    AUG0004AU: {
      Description: "Australian Ethical Diversified Shr",
    },
    AUG0006AU: {
      Description: "Australian Ethical Intl Shr",
    },
    AUG0008AU: {
      Description: "Australian Ethical Advocacy",
    },
    AUG0017AU: {
      Description: "Australian Ethical Balanced WS",
    },
    AUG0018AU: {
      Description: "Australian Ethical Australian Shr WS",
    },
    AUG0019AU: {
      Description: "Australian Ethical Diversified Shr WS",
    },
    AUG0020AU: {
      Description: "Australian Ethical Advocacy WS",
    },
    AUG0021AU: {
      Description: "Australian Ethical Fixed Interest",
    },
    AUG0023AU: {
      Description: "Australian Ethical Fixed Interest WS",
    },
    AUG0024AU: {
      Description: "Australian Ethical Income WS",
    },
    AUG0025AU: {
      Description: "Australian Ethical Intl Shr WS",
    },
    AUG0026AU: {
      Description: "Australian Ethical Emerging Companies",
    },
    AUG0027AU: {
      Description: "Australian Ethical Emerging Companies WS",
    },
    AUS0004AU: {
      Description: "AUI Wholesale Cash Fund",
    },
    AUS0030AU: {
      Description: "Platypus Australian Equities - Wholesale",
    },
    AUS0035AU: {
      Description: "Talaria Global Equity",
    },
    AUS0036AU: {
      Description: "Platypus Systematic Growth",
    },
    AUS0037AU: {
      Description: "AUI Healthcare Property Trust A",
    },
    AUS0055AU: {
      Description: "Australian Unity A-REIT Fund",
    },
    AUS0064AU: {
      Description: "Pro-D High Growth",
    },
    AUS0066AU: {
      Description: "Pro-D Balanced",
    },
    AUS0068AU: {
      Description: "Pro-D Growth",
    },
    AUS0071AU: {
      Description: "Altius Sustainable Bond Fund",
    },
    AUS0084AU: {
      Description: "Australian Unity Green Bond",
    },
    AUS0100AU: {
      Description: "AUI Balanced Growth Portfolio",
    },
    AUS0102AU: {
      Description: "AUI Healthcare Property Trust R",
    },
    AUS0112AU: {
      Description: "Aus Unity Healthcare Property Wholesale",
    },
    AUS8992AU: {
      Description: "Platypus Absolute Return Aus Eqs Ord",
    },
    AUS9185AU: {
      Description: "Australian Unity Real Estate Securities",
    },
    AUX0001AU: {
      Description: "AET Cash Deposit",
    },
    AUX0007AU: {
      Description: "IOOF Capital Secure Trust",
    },
    AUX0021AU: {
      Description: "IOOF Cash Management Trust D",
    },
    BAR0001AU: {
      Description: "Barwon Global Listed Private Equity Fund",
    },
    BAR0811AU: {
      Description: "BlackRock Diversified ESG Stable Fund",
    },
    BAR0813AU: {
      Description: "BlackRock Diversified ESG Growth Fund",
    },
    BAR0814AU: {
      Description: "BlackRock Advantage Australian Equity",
    },
    BAR0817AU: {
      Description: "BlackRock Advantage Intl Equity Fund",
    },
    BAR5403AU: {
      Description: "Barwon Healthcare Property Fund",
    },
    BCM0001AU: {
      Description: "Bronte Capital Amalthea",
    },
    BCM0006AU: {
      Description: "Bronte Capital Amalthea Fund Platform",
    },
    BCM1657AU: {
      Description: "Bronte Capital Amalthea Fund Platform B",
    },
    BEG0006AU: {
      Description: "Australian Equities Extension Fund",
    },
    BEG1275AU: {
      Description: "Fixed Income Strategy 2 (FIS2)",
    },
    BEG1488AU: {
      Description: "Global Systematic Equities Fund",
    },
    BEG4601AU: {
      Description: "Australian Small and Mid-Cap Fund",
    },
    BEG6218AU: {
      Description: "Multi Asset Class A Moderate",
    },
    BEG7053AU: {
      Description: "Multi Asset Class C Growth",
    },
    BEG8635AU: {
      Description: "Multi Strategy Alternative",
    },
    BEG8738AU: {
      Description: "Multi Asset Class B Balanced",
    },
    BFL0001AU: {
      Description: "Bennelong Australian Equities",
    },
    BFL0002AU: {
      Description: "Bennelong Concentrated Australian Eq",
    },
    BFL0004AU: {
      Description: "Bennelong ex-20 Australian Equities",
    },
    BFL0005AU: {
      Description: "Bennelong Long Short Equity",
    },
    BFL0010AU: {
      Description: "Bennelong Kardinia Absolute Return",
    },
    BFL0016AU: {
      Description: "Bennelong Market Neutral Fund",
    },
    BFL0017AU: {
      Description: "Bennelong Twenty20 Australian Equities",
    },
    BFL0019AU: {
      Description: "4D Global Infrastructure",
    },
    BFL0020AU: {
      Description: "Quay Global Real Estate-Daily Series",
    },
    BFL0021AU: {
      Description: "Touchstone Index Unaware",
    },
    BFL3446AU: {
      Description: "Wheelhouse Global Equity Income",
    },
    BFL3779AU: {
      Description: "Bennelong Emerging Companies Fund",
    },
    BFL7394AU: {
      Description: "4D Emerging Markets Infrastructure",
    },
    BGL0002AU: {
      Description: "BlackRock Scientific Whls Divers Stable",
    },
    BGL0003AU: {
      Description: "BlackRock Scientific Wholesale Divers Gr",
    },
    BGL0008AU: {
      Description: "iShares Global Bond Index",
    },
    BGL0009AU: {
      Description: "BlackRock Cash Fund",
    },
    BGL0010AU: {
      Description: "iShares Wholesale Indexed Aust Bd Z",
    },
    BGL0034AU: {
      Description: "iShares Australian Equity Index",
    },
    BGL0044AU: {
      Description: "iShares Hedged International Equity Idx",
    },
    BGL0051AU: {
      Description: "BlackRock Fission Indexed Intl Eq D",
    },
    BGL0060AU: {
      Description: "BlackRock Enhanced Australian Bond D",
    },
    BGL0079AU: {
      Description: "iShares All-Country Equity Index D",
    },
    BGL0083AU: {
      Description: "iShares Emerging Markets IMI Equity Idx",
    },
    BGL0105AU: {
      Description: "iShares Australian Bond Index",
    },
    BGL0106AU: {
      Description: "iShares International Equity Index",
    },
    BGL0108AU: {
      Description: "iShares Australian Listed Property Index",
    },
    BGL0109AU: {
      Description: "BlackRock Advantage Hedged Intl Equity",
    },
    BIM8414AU: {
      Description: "Bombora Special Investments Growth",
    },
    BLK0001AU: {
      Description: "BlackRock Multi Opportunity Absolute Ret",
    },
    BLK0003AU: {
      Description: "BlackRock Fixed Income Global Opps Cl D",
    },
    BLK0009AU: {
      Description: "BlackRock Glbl Multi Asset Inc AUS Cl D",
    },
    BLK0010AU: {
      Description: "BlackRock Fixed Inc Glb Oppos (Aust) E",
    },
    BLK0012AU: {
      Description: "BlackRock Concentrated Industrial",
    },
    BLK0018AU: {
      Description: "BlackRock Style Advantage Fund Aust Cl D",
    },
    BLK0022AU: {
      Description: "BlackRock Concentrated Total Return E2",
    },
    BLK1918AU: {
      Description: "BlackRock Balanced Multi-Index D",
    },
    BLK2127AU: {
      Description: "iShares ESG Australian Bond Index D",
    },
    BLK2204AU: {
      Description: "BlackRock Core Alternatives E",
    },
    BLK3651AU: {
      Description: "BlackRock Moderate Multi-Index D",
    },
    BLK4380AU: {
      Description: "iShares Screened WS Intl Eq Idx E",
    },
    BLK4636AU: {
      Description: "iShares ESG Global Bond Index D",
    },
    BLK5937AU: {
      Description: "BlackRock Global Equity Signals Fund D",
    },
    BLK6723AU: {
      Description: "BlackRock Australian Alpha Tilts S",
    },
    BLK7698AU: {
      Description: "BlackRock Appreciation Strategy (AUS) S",
    },
    BLK9560AU: {
      Description: "BlackRock Growth Multi-Index D",
    },
    BNT0003AU: {
      Description: "Hyperion Australian Growth Companies",
    },
    BNT0101AU: {
      Description: "Hyperion Small Growth Companies",
    },
    BOW0001AU: {
      Description: "BWA Cash Management Account",
    },
    BPF0002AU: {
      Description: "Global All Weather A Class",
    },
    BPF0003AU: {
      Description: "Global All Weather B Class",
    },
    BPF0005AU: {
      Description: "Global Pure Alpha A Class",
    },
    BPF0006AU: {
      Description: "Global Pure Alpha B Class",
    },
    BPF0014AU: {
      Description: "Bell Global Equities",
    },
    BPF0016AU: {
      Description: "Bell Global Equities Platform Class",
    },
    BPF0029AU: {
      Description: "Bell Global Emerging Companies",
    },
    BQC3979AU: {
      Description: "Cloudbreak Bitcoin Investment Trust A",
    },
    BQC8924AU: {
      Description: "Cloudbreak Digital Opportunities A",
    },
    BSC0004AU: {
      Description: "BetaShares CPS - Global Growth Fund",
    },
    BSP0005AU: {
      Description: "Argyle Water Fund",
    },
    BSP0006AU: {
      Description: "Blue Sky VC2012 LP",
    },
    BSP0010AU: {
      Description: "Blue Sky Wild Breads",
    },
    BSP0011AU: {
      Description: "Blue Sky Agriculture",
    },
    BSP0013AU: {
      Description: "Blue Sky Residential Developments",
    },
    BSP0015AU: {
      Description: "Blue Sky VC2014 LP",
    },
    BSP0016AU: {
      Description: "Blue Sky Darra Industrial Income",
    },
    BSP0017AU: {
      Description: "Blue Sky Student Accomodation No.1",
    },
    BSP0019AU: {
      Description: "Blue Sky Residential Developments 2",
    },
    BSP0020AU: {
      Description: "Blue Sky Student Accomodation II",
    },
    BSP0021AU: {
      Description: "Blue Sky Private Equity Origo Education",
    },
    BSP0022AU: {
      Description: "Blue Sky Hotel",
    },
    BSP0023AU: {
      Description: "Blue Sky Agriculture II",
    },
    BSP0025AU: {
      Description: "Blue Sky Student Accomodation III",
    },
    BSP0026AU: {
      Description: "Blue Sky Residential Developments 3",
    },
    BSP0027AU: {
      Description: "Blue Sky Private Equity Conventus",
    },
    BSP0028AU: {
      Description: "Blue Sky Private Equity Shoes of Prey",
    },
    BSP0030AU: {
      Description: "Blue Sky Student Accomodation IV",
    },
    BSP0031AU: {
      Description: "Blue Sky Private Equity Vinomofo",
    },
    BSP0032AU: {
      Description: "Blue Sky Private Equity Aquila",
    },
    BSP0033AU: {
      Description: "Blue Sky Digital Outdoor Advertising",
    },
    BSP0034AU: {
      Description: "Blue Sky Student Accomodation 5",
    },
    BSP0035AU: {
      Description: "Cove Property Group 2 Rector StreetTrust",
    },
    BSP0036AU: {
      Description: "Blue Sky Agriculture Fund III",
    },
    BSP0037AU: {
      Description: "Blue Sky Student Accomodation 6",
    },
    BSP0038AU: {
      Description: "Blue Sky Retirement Living Corinda",
    },
    BSP0040AU: {
      Description: "Blue Sky VC2017 ESVCLP LP",
    },
    BSP0694AU: {
      Description: "Blue Sky Student Accommodation 7",
    },
    BSP1035AU: {
      Description: "Blue Sky aCommerce 4",
    },
    BSP1505AU: {
      Description: "Student Quarters Property Trust 2",
    },
    BSP1735AU: {
      Description: "Blue Sky Private Equity Birch & Waite",
    },
    BSP1873AU: {
      Description: "Student Quarters Property Trust",
    },
    BSP2597AU: {
      Description: "Blue Sky Agriculture Fund IV",
    },
    BSP2970AU: {
      Description: "Blue Sky Energy Infrastructure Fund",
    },
    BSP3716AU: {
      Description: "Student Quarters Yield Trust 2",
    },
    BSP4713AU: {
      Description: "Cove Property Group 441 Ninth Avenue",
    },
    BSP4761AU: {
      Description: "Blue Sky SMG Fund",
    },
    BSP5235AU: {
      Description: "Blue Sky US Brewery Fund",
    },
    BSP6783AU: {
      Description: "Blue Sky SMG Fund II",
    },
    BSP7071AU: {
      Description: "Blue Sky Private Equity QFS",
    },
    BSP7524AU: {
      Description: "Blue Sky Private Equity aCommerce Fund 3",
    },
    BSP7926AU: {
      Description: "Student Quarters Yield Trust",
    },
    BSP7976AU: {
      Description: "Blue Sky Private Equity Sunfresh Fund",
    },
    BSP8486AU: {
      Description: "Blue Sky Private Eq Better Medical Fd",
    },
    BSP8729AU: {
      Description: "Blue Sky Lexer Fund",
    },
    BTA0002AU: {
      Description: "BT Cash Management",
    },
    BTA0011AU: {
      Description: "BT Class Inv Split Income",
    },
    BTA0012AU: {
      Description: "BT Class Inv Split Growth",
    },
    BTA0021AU: {
      Description: "BT Aus Share Retail",
    },
    BTA0023AU: {
      Description: "BT American Share Retail",
    },
    BTA0024AU: {
      Description: "BT International Share Retail",
    },
    BTA0025AU: {
      Description: "BT European Share Retail",
    },
    BTA0026AU: {
      Description: "BT Asian Share Retail",
    },
    BTA0041AU: {
      Description: "BT Class Inv Monthly Income",
    },
    BTA0042AU: {
      Description: "BT Income Plus Retail",
    },
    BTA0043AU: {
      Description: "BT Class Inv Balanced Returns",
    },
    BTA0044AU: {
      Description: "BT Future Goals Retail",
    },
    BTA0051AU: {
      Description: "BT Property Secs Retail",
    },
    BTA0054AU: {
      Description: "Pendal Asian Share",
    },
    BTA0055AU: {
      Description: "Pendal Australian Equity",
    },
    BTA0056AU: {
      Description: "Pendal Concentrated Global Share No.3",
    },
    BTA0061AU: {
      Description: "Pendal Property Securities",
    },
    BTA0073AU: {
      Description: "BT Ptnr Aus Share Gr 1 Retail",
    },
    BTA0077AU: {
      Description: "BT Multi-Manager Bal Retail",
    },
    BTA0078AU: {
      Description: "BT Multi-Manager Cons Retail",
    },
    BTA0079AU: {
      Description: "BT Multi-Manager High Gr Retail",
    },
    BTA0080AU: {
      Description: "BT Multi-Manager Gr Retail",
    },
    BTA0100AU: {
      Description: "Pendal American Share",
    },
    BTA0111AU: {
      Description: "Pendal Government Bond",
    },
    BTA0122AU: {
      Description: "Pendal Sustainable Balanced",
    },
    BTA0124AU: {
      Description: "Pendal European Share",
    },
    BTA0125AU: {
      Description: "Pendal Active Growth",
    },
    BTA0127AU: {
      Description: "BT Technology Retail",
    },
    BTA0129AU: {
      Description: "BT Premium Cash Retail",
    },
    BTA0130AU: {
      Description: "Pendal Japanese Share",
    },
    BTA0131AU: {
      Description: "BT Japanese Share Retail",
    },
    BTA0173AU: {
      Description: "BT Premium Cash",
    },
    BTA0221AU: {
      Description: "BT Multi-Manager Bal WS",
    },
    BTA0222AU: {
      Description: "BT Multi-Manager Cons WS",
    },
    BTA0223AU: {
      Description: "BT Multi-Manager Gr W",
    },
    BTA0242AU: {
      Description: "BT Ptnr Aus Share Gr 1 WS",
    },
    BTA0246AU: {
      Description: "BT Multi-Manager High Gr WS",
    },
    BTA0248AU: {
      Description: "BT Ptnr Intl Shares Core 1 WS",
    },
    BTA0249AU: {
      Description: "BT Ptnr Intl Shares Core 1 Retail",
    },
    BTA0259AU: {
      Description: "BT Multi-Manager Aus Shr WS",
    },
    BTA0260AU: {
      Description: "BT Multi-Manager Fixed Interest W",
    },
    BTA0261AU: {
      Description: "BT Wholesale Multi Manager Intl Share",
    },
    BTA0310AU: {
      Description: "BT WE BT Multi-Manager Aus Share",
    },
    BTA0311AU: {
      Description: "BT WE BT Multi-Manager Fixed Interest",
    },
    BTA0313AU: {
      Description: "Pendal MidCap",
    },
    BTA0318AU: {
      Description: "Pendal Monthly Income Plus",
    },
    BTA0321AU: {
      Description: "Pendal Dynamic Global Equity",
    },
    BTA0413AU: {
      Description: "BT Capital Protection - Bond Class 2020",
    },
    BTA0414AU: {
      Description: "BT Capital Protection - Bond Class 2021",
    },
    BTA0415AU: {
      Description: "BT Capital Protection - Bond Class 2022",
    },
    BTA0419AU: {
      Description: "Pendal Global Emerging Mkts Oppes – WS",
    },
    BTA0431AU: {
      Description: "BT Capital Protection - Cash Class 2022",
    },
    BTA0435AU: {
      Description: "BT Capital Protection - Cash Class 2020",
    },
    BTA0436AU: {
      Description: "BT Capital Protection - Cash Class 2021",
    },
    BTA0441AU: {
      Description: "Pendal Pure Alpha Fixed Income",
    },
    BTA0450AU: {
      Description: "BT Capital Protection - Cash Class 2023",
    },
    BTA0451AU: {
      Description: "BT Capital Protection - Bond Class 2023",
    },
    BTA0452AU: {
      Description: "1940's Lifestage Fund - A",
    },
    BTA0453AU: {
      Description: "1950's Lifestage Fund - A",
    },
    BTA0454AU: {
      Description: "1960's Lifestage Fund - A",
    },
    BTA0455AU: {
      Description: "1970's Lifestage Fund - A",
    },
    BTA0456AU: {
      Description: "1980's Lifestage Fund - A",
    },
    BTA0457AU: {
      Description: "1990's Lifestage Fund - A",
    },
    BTA0458AU: {
      Description: "2000's Lifestage Fund - A",
    },
    BTA0459AU: {
      Description: "Pendal Stable Cash Plus",
    },
    BTA0462AU: {
      Description: "BT Capital Protection - Bond Class 2024",
    },
    BTA0463AU: {
      Description: "BT Capital Protection - Cash Class 2024",
    },
    BTA0474AU: {
      Description: "AMP Capital WS Plus Corporate Bond",
    },
    BTA0475AU: {
      Description: "APN WS Plus AREIT",
    },
    BTA0476AU: {
      Description: "Pendal Wholesale Plus Australian Share",
    },
    BTA0477AU: {
      Description: "Ironbark Karara WS Plus Aust Small Co",
    },
    BTA0478AU: {
      Description: "UBS WS Plus Australian Bond",
    },
    BTA0479AU: {
      Description: "Aberdeen WS Plus Actively Hdg Intl Eq",
    },
    BTA0480AU: {
      Description: "Bennelong WS Plus ex-20 Aus Equities",
    },
    BTA0481AU: {
      Description: "Fidelity WS Plus Australian Equities",
    },
    BTA0482AU: {
      Description: "Perpetual WS Plus Australian",
    },
    BTA0483AU: {
      Description: "Schroder WS Plus Australian Equity",
    },
    BTA0485AU: {
      Description: "BT Capital Protection - Bond Class 2025",
    },
    BTA0486AU: {
      Description: "BT Capital Protection - Cash Class 2025",
    },
    BTA0487AU: {
      Description: "Pendal Active Moderate",
    },
    BTA0488AU: {
      Description: "Pendal Active High Growth",
    },
    BTA0494AU: {
      Description: "BT Capital Protection Bond 2026",
    },
    BTA0498AU: {
      Description: "PIMCO WS Plus Global Bond",
    },
    BTA0499AU: {
      Description: "PIMCO WS Plus Diversified Fixed Interest",
    },
    BTA0500AU: {
      Description: "BT Capital Protection Cash 2026",
    },
    BTA0503AU: {
      Description: "Pendal Concentrated Global Share",
    },
    BTA0505AU: {
      Description: "Pendal High Alpha Fixed Income",
    },
    BTA0507AU: {
      Description: "Pendal Sustainable Aust Fixed Interest",
    },
    BTA0536AU: {
      Description: "Pendal Wholesale Plus Core Global Share",
    },
    BTA0537AU: {
      Description: "Nikko AM WS Plus Australian Share Fund",
    },
    BTA0538AU: {
      Description: "T. Rowe Price WS Plus Global Equity",
    },
    BTA0539AU: {
      Description: "Kapstream WS Plus Absolute Return Income",
    },
    BTA0540AU: {
      Description: "Pendal Wholesale Plus Property Secs",
    },
    BTA0541AU: {
      Description: "Pendal Wholesale Plus Global Prpty Secs",
    },
    BTA0542AU: {
      Description: "Walter Scott WS Plus Global Equity",
    },
    BTA0543AU: {
      Description: "RARE Infrastructure WS Plus Value Hedged",
    },
    BTA0544AU: {
      Description: "Macquarie WS Plus Income Opportunities",
    },
    BTA0545AU: {
      Description: "Schroder WS Plus Fixed income",
    },
    BTA0546AU: {
      Description: "RARE Infrastructure WS Plus Value Unhdgd",
    },
    BTA0547AU: {
      Description: "Pendal Wholesale Plus Fixed Interest",
    },
    BTA0550AU: {
      Description: "Pendal Wholesale Plus Global EmMkts Opps",
    },
    BTA0551AU: {
      Description: "Fidelity WS Plus Global Equities",
    },
    BTA0552AU: {
      Description: "Franklin Templeton WS Plus MultiSec Bond",
    },
    BTA0555AU: {
      Description: "Lazard WS Plus Emerging Markets Equity",
    },
    BTA0556AU: {
      Description: "Perpetual WS Plus Diversified Income",
    },
    BTA0563AU: {
      Description: "Talaria WS Plus Global Equity",
    },
    BTA0565AU: {
      Description: "Magellan WS Plus Global",
    },
    BTA0567AU: {
      Description: "Man AHL WS Plus Alpha (AUD)",
    },
    BTA0805AU: {
      Description: "Pendal Active Conservative",
    },
    BTA0806AU: {
      Description: "Pendal Balanced Returns",
    },
    BTA3816AU: {
      Description: "Pendal Dynamic Income Trust",
    },
    BTA7229AU: {
      Description: "Pendal Active Long Volatility",
    },
    BTA8657AU: {
      Description: "Pendal Dynamic Income",
    },
    BTA9159AU: {
      Description: "BT Wholesale Multi-manager Moderate",
    },
    CFC1366AU: {
      Description: "Chiodo Diversified Property Dev Cl",
    },
    CFL0002AU: {
      Description: "Crescent Australian Equity",
    },
    CFL0003AU: {
      Description: "Crescent Islamic Cash Management",
    },
    CFL0006AU: {
      Description: "Crescent Diversified Property",
    },
    CFL0008AU: {
      Description: "Crescent International Equity",
    },
    CFM0404AU: {
      Description: "CFS FC - T. Rowe Price W Aus Eq",
    },
    CFM0405AU: {
      Description: "CFS Wholesale Indexed Global Share",
    },
    CFM0406AU: {
      Description: "CFS Wholesale Indexed Global Bond",
    },
    CHN0001AU: {
      Description: "CC Marsico Global Fund - Instl Class",
    },
    CHN0002AU: {
      Description: "CC Marsico Global Fund - Retail Class",
    },
    CHN0005AU: {
      Description: "CC JCB Active Bond",
    },
    CHN1425AU: {
      Description: "CC JCB Global Bond B Unhedged",
    },
    CHN2868AU: {
      Description: "Revolution Wholesale Private Debt II B",
    },
    CHN3749AU: {
      Description: "CC JCB Active Bond B",
    },
    CHN3796AU: {
      Description: "Revolution Private Debt II",
    },
    CHN4711AU: {
      Description: "CC JCB Global Bond A Hedged",
    },
    CHN5070AU: {
      Description: "Revolution Wholesale Private Debt II A",
    },
    CHN5843AU: {
      Description: "CC Sage Capital Absolute Return",
    },
    CHN7934AU: {
      Description: "Revolution Private Debt I",
    },
    CHN8607AU: {
      Description: "CC JCB Dynamic Alpha A",
    },
    CHN8850AU: {
      Description: "CC RWC Global Emerging Markets",
    },
    CHN8862AU: {
      Description: "CC Sage Capital Equity Plus",
    },
    CIM0001AU: {
      Description: "Cyan C3G",
    },
    CIM0002AU: {
      Description: "Capital Group World Div Growers (AU)",
    },
    CIM0006AU: {
      Description: "Capital Group New Perspective (AU)",
    },
    CIM0008AU: {
      Description: "Capital Group New Perspective Hdg (AU)",
    },
    CIM0161AU: {
      Description: "Capital Group Global Corp Bond Hedged",
    },
    CIM1898AU: {
      Description: "Capital Group New World Hedged (AU)",
    },
    CIM3839AU: {
      Description: "Capital Group Global High Inc Opps H",
    },
    CIM8680AU: {
      Description: "Capital Group New World (AU)",
    },
    CIP0001AU: {
      Description: "Cooper Investors Global Eqs Fd (Hdg)",
    },
    CIP0002AU: {
      Description: "CI Brunswick",
    },
    CIP0003AU: {
      Description: "Cooper Investors Global Eqs Fd (Unhdg)",
    },
    CIP0004AU: {
      Description: "CI Asian Equities Fund",
    },
    CIP0005AU: {
      Description: "CI Australian Equities Fund",
    },
    CIP4943AU: {
      Description: "Cooper Investors Family and Founder",
    },
    CLA0001AU: {
      Description: "Clime International Fund",
    },
    CLA0002AU: {
      Description: "Clime Australian Income",
    },
    CLA0724AU: {
      Description: "Clime Fixed Interest Wholesale",
    },
    CLA1557AU: {
      Description: "Clime Smaller Companies",
    },
    CMI0102AU: {
      Description: "CFS Wholesale Indexed Australian Bond",
    },
    CMI0103AU: {
      Description: "CFS Wholesale Indexed Australian Share",
    },
    CMI0105AU: {
      Description: "CFS Wholesale Indexed Property Sec",
    },
    CMI0111AU: {
      Description: "CFS Wholesale Aus Small Companies",
    },
    CNA0805AU: {
      Description: "Invesco WS Senior Secured Income",
    },
    CNA0806AU: {
      Description: "Invesco WS Diversified Growth-Class A",
    },
    CNA0811AU: {
      Description: "Invesco WS Aus Share",
    },
    CNA0812AU: {
      Description: "Invesco WS Aus Smaller Companies-Class A",
    },
    CNT0016AU: {
      Description: "Centuria 8 Central Avenue Fund No.2",
    },
    CNT0026AU: {
      Description: "Centuria 203 Pacific Highway Fund",
    },
    CNT0028AU: {
      Description: "Centuria ATP Fund",
    },
    CNT0032AU: {
      Description: "Centuria Diversified Property Fund",
    },
    CNT1072AU: {
      Description: "Centuria Scarborough House Fund",
    },
    CNT6829AU: {
      Description: "Centuria Sandgate Road Fund",
    },
    CNT9608AU: {
      Description: "Centuria SOP Fund",
    },
    COL0001AU: {
      Description: "Charter Hall Maxim Property Securities",
    },
    COL0029AU: {
      Description: "Atrium Evolution Series Divers - AEF 5",
    },
    COL0030AU: {
      Description: "Atrium Evolution Series Divers - AEF 7",
    },
    COL0031AU: {
      Description: "Atrium Evolution Series Divers - AEF 9",
    },
    COM0011AU: {
      Description: "CBA Bond",
    },
    COM0012AU: {
      Description: "CBA Share Income",
    },
    COM0013AU: {
      Description: "CBA Balanced",
    },
    COM0018AU: {
      Description: "CBA Growth",
    },
    COM0019AU: {
      Description: "CBA International Share",
    },
    COM0020AU: {
      Description: "CBA Income",
    },
    COM0022AU: {
      Description: "CBA Australian Share",
    },
    COM0024AU: {
      Description: "CFS Wholesale Premium Cash",
    },
    COM0029AU: {
      Description: "CFS Wholesale Premium Cash Enhanced",
    },
    COM0033AU: {
      Description: "CBA Property Securities",
    },
    COR0001AU: {
      Description: "Cor Capital Fund",
    },
    CPL0001AU: {
      Description: "Pacific First Mortgage Fund",
    },
    CRE0001AU: {
      Description: "Clime Australian Value",
    },
    CRE0005AU: {
      Description: "Clime Australian Value WS",
    },
    CRE0014AU: {
      Description: "Smarter Money Platform Investor",
    },
    CRE0015AU: {
      Description: "Smarter Money Institutional Investor",
    },
    CRM0008AU: {
      Description: "Cromwell Phoenix Property Securities",
    },
    CRM0009AU: {
      Description: "Cromwell Riverpark Trust",
    },
    CRM0015AU: {
      Description: "Cromwell Ipswich City Heart Trust",
    },
    CRM0018AU: {
      Description: "Cromwell Direct Property",
    },
    CRM0023AU: {
      Description: "Cromwell Property Trust 12",
    },
    CRM0028AU: {
      Description: "Cromwell Phoenix Opportunities Fund",
    },
    CRS0001AU: {
      Description: "Aberdeen Std Multi-Asset Inc Fd",
    },
    CRS0002AU: {
      Description: "Aberdeen Std Multi-Asset Real Return Fd",
    },
    CRS0003AU: {
      Description: "Aberdeen Std Ex-20 Australian Eqs Fd",
    },
    CRS0004AU: {
      Description: "Aberdeen Std Australian Fixed Inc Fd",
    },
    CRS0005AU: {
      Description: "Aberdeen Std Actvly Hdg Intl Eqs Fd",
    },
    CRS0007AU: {
      Description: "SG Hiscock Property",
    },
    CRS0008AU: {
      Description: "Aberdeen Std Inflation Linked bd Fd",
    },
    CSA0038AU: {
      Description: "Bentham Global Income",
    },
    CSA0042AU: {
      Description: "Credit Suisse Global Private Equity Fund",
    },
    CSA0045AU: {
      Description: "Bentham Professional Global Income",
    },
    CSA0046AU: {
      Description: "Bentham Syndicated Loan",
    },
    CSA0048AU: {
      Description: "Bentham Professional Syndicated Loan",
    },
    CSA0062AU: {
      Description: "Aberdeen Std Diversified Fixed Inc Fd",
    },
    CSA0102AU: {
      Description: "Bentham Wholesale High Yield",
    },
    CSA0114AU: {
      Description: "Aberdeen Std Sel Invmt Actvy H Intl Eqs",
    },
    CSA0115AU: {
      Description: "SG Hiscock Professional Property",
    },
    CSA0131AU: {
      Description: "Aberdeen Std Australian Small Coms Fd",
    },
    CSA0135AU: {
      Description: "Aberdeen Std Fully Hdg Intl Eqs Fd",
    },
    CTS7571AU: {
      Description: "The TAMIM Asia Small Companies",
    },
    CVS0681AU: {
      Description: "CVS Lane First Mortgage",
    },
    CVW1890AU: {
      Description: "CFML Antipodes Global Fund",
    },
    DAM0025AU: {
      Description: "AMS Moderately Conservative Fund",
    },
    DAM0026AU: {
      Description: "AMS Balanced Fund",
    },
    DAM2792AU: {
      Description: "Ironbark North Rock Fund",
    },
    DAM9817AU: {
      Description: "Longreach HQI - Global Market Neutral",
    },
    DCA7894AU: {
      Description: "Alium Market Neutral Platform",
    },
    DDH0001AU: {
      Description: "DDH Preferred Income",
    },
    DDH0002AU: {
      Description: "Selector Australian Equities",
    },
    DDH0006AU: {
      Description: "DDH Fixed Interest",
    },
    DDH0009AU: {
      Description: "DDH Cash IDPS",
    },
    DDH8305AU: {
      Description: "GCI Australian Capital Stable Fund",
    },
    DEU0109AU: {
      Description: "Ironbark GCM Global Macro",
    },
    DFA0001AU: {
      Description: "Dimensional Five-Year Diversified FI NZD",
    },
    DFA0002AU: {
      Description: "Dimensional Two-Year Diversified F/I",
    },
    DFA0003AU: {
      Description: "Dimensional Australian Core Equity Trust",
    },
    DFA0004AU: {
      Description: "Dimensional Global Core Equity Trust",
    },
    DFA0005AU: {
      Description: "Dimensional Global Real Estate Trust",
    },
    DFA0006AU: {
      Description: "Strategic Global Property",
    },
    DFA0007AU: {
      Description: "Strategic International Equity",
    },
    DFA0008AU: {
      Description: "Strategic Australian Equity",
    },
    DFA0009AU: {
      Description: "Dimensional Global Core Equity AUD Hgd",
    },
    DFA0015AU: {
      Description: "Strategic Fixed Interest",
    },
    DFA0028AU: {
      Description: "Dimensional Global Bond Trust",
    },
    DFA0029AU: {
      Description: "Dimensional World Allocation 70/30 Trust",
    },
    DFA0033AU: {
      Description: "Dimensional World Allocation 50/50 Trust",
    },
    DFA0035AU: {
      Description: "Dimensional World Equity Trust",
    },
    DFA0036AU: {
      Description: "Dimensional Australian Core Imptn Trust",
    },
    DFA0038AU: {
      Description: "Dimensional Global Bond Trust NZD",
    },
    DFA0039AU: {
      Description: "Dimensional Global Core Equity NZD Hgd",
    },
    DFA0041AU: {
      Description: "Dimensional Glb Sstnblty Trust Unhdg",
    },
    DFA0042AU: {
      Description: "Dimensional Glb Sstnblty Trust Hdg",
    },
    DFA0043AU: {
      Description: "Dimensional Glbl Sustainability NZD Hdg",
    },
    DFA0044AU: {
      Description: "Dimensional Global Real Estate NZD Hdg",
    },
    DFA0045AU: {
      Description: "Dimensional 2-Yr Diversified FI NZD",
    },
    DFA0100AU: {
      Description: "Dimensional Short Term Fixed Interest",
    },
    DFA0101AU: {
      Description: "Dimensional Australian Value Trust",
    },
    DFA0102AU: {
      Description: "Dimensional Global Value Trust",
    },
    DFA0103AU: {
      Description: "Dimensional Aust Large Company Trust",
    },
    DFA0104AU: {
      Description: "Dimensional Aust Small Company Trust",
    },
    DFA0105AU: {
      Description: "Dimensional Global Large Company Trust",
    },
    DFA0106AU: {
      Description: "Dimensional Global Small Company Trust",
    },
    DFA0107AU: {
      Description: "Dimensional Emerging Markets Trust",
    },
    DFA0108AU: {
      Description: "Dimensional Five-Year Diversified F/I",
    },
    DFA0642AU: {
      Description: "Dimensional Glbl Bond Sustainability AUD",
    },
    DFA2068AU: {
      Description: "Dimensional Australian Sustainability",
    },
    DFA6872AU: {
      Description: "Dimensional Glbl Bond Sustainability NZD",
    },
    DFA7518AU: {
      Description: "Dimensional Sustnby Wld Allc 70/30 Tr",
    },
    DFA8313AU: {
      Description: "Dimensional World Allocation 30/70",
    },
    DSC0001AU: {
      Description: "DS Capital Growth Fund",
    },
    ECL0002AU: {
      Description: "Ellerston Global Equity Managers",
    },
    ECL0005AU: {
      Description: "Ellerston Australian Share Fund",
    },
    ECL0006AU: {
      Description: "Ellerston Global Equity Managers GEMS C",
    },
    ECL0007AU: {
      Description: "Ellerston Global Equity Managers GEMS B",
    },
    ECL0012AU: {
      Description: "Ellerston Overlay Australian Share",
    },
    ECL0013AU: {
      Description: "Ellerston Australian Market Neutral",
    },
    ECL0015AU: {
      Description: "Ellerston Small Companies",
    },
    ECL0339AU: {
      Description: "Ellerston India",
    },
    ECL0984AU: {
      Description: "Ellerston Australian MicroCap Fund",
    },
    ECL1411AU: {
      Description: "Ellerston Asia Growth",
    },
    ECL2707AU: {
      Description: "Ellerston JAADE AUS Priv Assts Retail",
    },
    ECL6775AU: {
      Description: "Ellerston JAADE AUS Priv Assts WS",
    },
    ECL7259AU: {
      Description: "Ellerston Low Volatility Income Strategy",
    },
    ECL8388AU: {
      Description: "Ellerston Global Mid Small Cap Unhedged",
    },
    EGG0001AU: {
      Description: "Eley Griffiths Group Small Companies",
    },
    EIM0001AU: {
      Description: "Elstree Enhanced Income",
    },
    EPF9951AU: {
      Description: "Ethical Partners Australian Share",
    },
    EQB7664AU: {
      Description: "Equitable Investors Dragonfly",
    },
    EQI0001AU: {
      Description: "Alphinity Concentrated Aus Share Class B",
    },
    EQI0004AU: {
      Description: "MCP Australian Share Income",
    },
    EQI0015AU: {
      Description: "Aberdeen Std International Eq Fd",
    },
    EQI0028AU: {
      Description: "Aberdeen Std Asian Opportunities Fd",
    },
    EQI0699AU: {
      Description: "Aberdeen Std Emerging Mkt Lcl Ccy Dbt",
    },
    EQI7232AU: {
      Description: "Aberdeen Standard Global Smaller Coms",
    },
    ETL0005AU: {
      Description: "SGH LaSalle Global Listed Property Secs",
    },
    ETL0015AU: {
      Description: "PIMCO Australian Bond W",
    },
    ETL0016AU: {
      Description: "PIMCO Diversified Fixed Interest W",
    },
    ETL0018AU: {
      Description: "PIMCO Global Bond W",
    },
    ETL0019AU: {
      Description: "PIMCO Global Credit W",
    },
    ETL0032AU: {
      Description: "Aberdeen Std Emerging Opports Fd",
    },
    ETL0041AU: {
      Description: "MFS Fully Hedged Global Equity Trust",
    },
    ETL0042AU: {
      Description: "SGH20",
    },
    ETL0043AU: {
      Description: "Lincoln Wholesale Australian Growth",
    },
    ETL0046AU: {
      Description: "K2 Select International Absolute Return",
    },
    ETL0050AU: {
      Description: "PIMCO Target Return",
    },
    ETL0052AU: {
      Description: "Grant Samuel Tribeca Aust Smaller Coms",
    },
    ETL0060AU: {
      Description: "Allan Gray Australia Equity A",
    },
    ETL0062AU: {
      Description: "SGH ICE",
    },
    ETL0068AU: {
      Description: "EQT Flagship Common No 2",
    },
    ETL0069AU: {
      Description: "Tribeca Alpha Plus Class A",
    },
    ETL0071AU: {
      Description: "T. Rowe Price Global Equity I",
    },
    ETL0072AU: {
      Description: "Spectrum Strategic Income",
    },
    ETL0079AU: {
      Description: "EQT Wholesale Flagship",
    },
    ETL0089AU: {
      Description: "Lincoln Retail Australian Growth",
    },
    ETL0091AU: {
      Description: "Alpha Australian Blue Chip Equities",
    },
    ETL0092AU: {
      Description: "Alpha Australian Small Companies",
    },
    ETL0093AU: {
      Description: "Alpha Enhanced Yield",
    },
    ETL0094AU: {
      Description: "Alpha Global Opportunities",
    },
    ETL0095AU: {
      Description: "Alpha Property Securities",
    },
    ETL0100AU: {
      Description: "EQT Mortgage Income",
    },
    ETL0103AU: {
      Description: "EQT Growth",
    },
    ETL0107AU: {
      Description: "EQT Core International Equity",
    },
    ETL0114AU: {
      Description: "PIMCO Global Credit Fund",
    },
    ETL0115AU: {
      Description: "PIMCO Australian Bond Fund",
    },
    ETL0116AU: {
      Description: "PIMCO Diversified Fixed Interest Fund",
    },
    ETL0118AU: {
      Description: "SGH Emerging Companies",
    },
    ETL0119AU: {
      Description: "SGH Property Income",
    },
    ETL0122AU: {
      Description: "EQT Wholesale Mortgage Income",
    },
    ETL0130AU: {
      Description: "Aberdeen Std Global Absolute Ret Strats",
    },
    ETL0132AU: {
      Description: "Aberdeen Std Global Corporate Bond Fd",
    },
    ETL0134AU: {
      Description: "Aberdeen Std Absolute Return Glbl Bd Str",
    },
    ETL0139AU: {
      Description: "Armytage Strategic Opportunities WS",
    },
    ETL0148AU: {
      Description: "Armytage Australian Equity Income",
    },
    ETL0171AU: {
      Description: "AXA IM Sustainable Equity",
    },
    ETL0172AU: {
      Description: "MFS Concentrated Global Equity Trust W",
    },
    ETL0182AU: {
      Description: "PIMCO Australian Short-Term Bond W",
    },
    ETL0186AU: {
      Description: "Janus Henderson Global Rsrch Gr",
    },
    ETL0199AU: {
      Description: "Copper Rock Capital Global Small Cap",
    },
    ETL0200AU: {
      Description: "Tribeca Alpha Plus Class C",
    },
    ETL0201AU: {
      Description: "Legg Mason Martin Currie Emerging Mkts",
    },
    ETL0273AU: {
      Description: "Allan Gray Australia Stable",
    },
    ETL0276AU: {
      Description: "Partners Group Global Value (AUD) W",
    },
    ETL0277AU: {
      Description: "Partners Group Global Value (AUD)",
    },
    ETL0288AU: {
      Description: "Vontobel Global Equity Fund",
    },
    ETL0306AU: {
      Description: "BNY Mellon Standish Global Bond Fund",
    },
    ETL0312AU: {
      Description: "T. Rowe Price Global Equity (Hedged)",
    },
    ETL0318AU: {
      Description: "Alpha Alternatives",
    },
    ETL0319AU: {
      Description: "Alpha Infrastructure",
    },
    ETL0323AU: {
      Description: "Lincoln Retail Australian Income",
    },
    ETL0324AU: {
      Description: "Lincoln Wholesale Australian Income",
    },
    ETL0328AU: {
      Description: "T. Rowe Price Australian Equity",
    },
    ETL0329AU: {
      Description: "Alpha Diversified Income",
    },
    ETL0331AU: {
      Description: "Janus Henderson Global Natural Resources",
    },
    ETL0332AU: {
      Description: "JH INTECH Gbl All Count Mged Vol ex-Aus",
    },
    ETL0334AU: {
      Description: "MFS Emerging Markets Equity Trust",
    },
    ETL0344AU: {
      Description: "Apostle Dundas Global Equity",
    },
    ETL0347AU: {
      Description: "Somerset Emerging Markets Dividend Gr",
    },
    ETL0349AU: {
      Description: "Allan Gray Australia Equity B",
    },
    ETL0365AU: {
      Description: "Paradice Global Small Cap Fund",
    },
    ETL0370AU: {
      Description: "Mittleman Global Value Equity",
    },
    ETL0371AU: {
      Description: "Spire USA ROC II (AUD)",
    },
    ETL0373AU: {
      Description: "SGH20 Professional Investor",
    },
    ETL0374AU: {
      Description: "SGH ICE Professional Investor",
    },
    ETL0376AU: {
      Description: "SGH Property Income Professional Inv",
    },
    ETL0377AU: {
      Description: "GAM FCM ILS Yield W",
    },
    ETL0379AU: {
      Description: "GAM FCM ILS Yield A",
    },
    ETL0381AU: {
      Description: "Robeco Emerging Conservative Equity AUD",
    },
    ETL0383AU: {
      Description: "SGH Australia Plus",
    },
    ETL0390AU: {
      Description: "Evans and Partners International Fund",
    },
    ETL0391AU: {
      Description: "Evans and Partners Intl Hedged",
    },
    ETL0394AU: {
      Description: "SGH LaSalle Concentrated Global Property",
    },
    ETL0396AU: {
      Description: "Insight Diversified Inflation Plus",
    },
    ETL0398AU: {
      Description: "T. Rowe Price Dynamic Global Bond",
    },
    ETL0402AU: {
      Description: "MFS Blended Research Global Equity Tr",
    },
    ETL0404AU: {
      Description: "PIMCO Dynamic Bond W",
    },
    ETL0406AU: {
      Description: "PIMCO Dynamic Bond C",
    },
    ETL0409AU: {
      Description: "Colchester Global Government Bond A",
    },
    ETL0410AU: {
      Description: "Spire Copper Rock Glbl Smaller Companies",
    },
    ETL0412AU: {
      Description: "Spire USA ROC Srs Hsg&Medical Prpts AUD",
    },
    ETL0413AU: {
      Description: "THB US Micro Cap",
    },
    ETL0419AU: {
      Description: "Pan-Tribal Global Equity Fund",
    },
    ETL0420AU: {
      Description: "EQT DiversifiedFixed Income",
    },
    ETL0421AU: {
      Description: "EQT Diversified Fixed Income Instl",
    },
    ETL0424AU: {
      Description: "Fulcrum Div Absolute Return Fund",
    },
    ETL0431AU: {
      Description: "Partners Group Global Multi-Asset",
    },
    ETL0434AU: {
      Description: "Barrow Hanley Global Equity Trust",
    },
    ETL0435AU: {
      Description: "MFS Low Volatility Global Equity Trust",
    },
    ETL0438AU: {
      Description: "Apostle Dundas Global Equity Class C",
    },
    ETL0444AU: {
      Description: "Flinders Emerging Companies A",
    },
    ETL0445AU: {
      Description: "PIMCO Capital Securities Wholesale",
    },
    ETL0446AU: {
      Description: "Tribeca Global Natural Resources",
    },
    ETL0449AU: {
      Description: "Flinders Emerging Companies B",
    },
    ETL0452AU: {
      Description: "Insight Global Absolute Return Bond",
    },
    ETL0458AU: {
      Description: "PIMCO Income Wholesale",
    },
    ETL0460AU: {
      Description: "Spire USA ROC III (AUD)",
    },
    ETL0462AU: {
      Description: "Orbis Emerging Markets Equity",
    },
    ETL0463AU: {
      Description: "Orbis Global Equity Fund Retail Class",
    },
    ETL0467AU: {
      Description: "Colchester Global Government Bond N",
    },
    ETL0469AU: {
      Description: "Dalton Street Capital Absolute Return",
    },
    ETL0478AU: {
      Description: "India Avenue Equity - Retail Class",
    },
    ETL0480AU: {
      Description: "Partners Group Global Real Estate Fd AUD",
    },
    ETL0482AU: {
      Description: "India Avenue Equity",
    },
    ETL0483AU: {
      Description: "Pzena Emerging Markets Value Wholesale",
    },
    ETL0484AU: {
      Description: "Pzena Global Focused Value Wholesale",
    },
    ETL0485AU: {
      Description: "Watermark Market Neutral Trust C",
    },
    ETL0490AU: {
      Description: "L1 Capital Long Short - Retail",
    },
    ETL0676AU: {
      Description: "Wenlock Global Fund",
    },
    ETL0725AU: {
      Description: "Pentalpha Income For Life Ordinary",
    },
    ETL0739AU: {
      Description: "Paradice Australian Small Cap Fund B",
    },
    ETL1206AU: {
      Description: "Robeco Global DM Conservative Eqs AUD H",
    },
    ETL1328AU: {
      Description: "Ardevora Global Shares",
    },
    ETL1352AU: {
      Description: "GAM Systematic Alt Rsk Pre AU - I",
    },
    ETL1411AU: {
      Description: "Neuberger Berman Strategic Income W",
    },
    ETL1507AU: {
      Description: "Spire USA ROC Srs Housing&Medical Fd II",
    },
    ETL1567AU: {
      Description: "Spire USA ROC Office I (AUD)",
    },
    ETL1713AU: {
      Description: "Neuberger Berman Em Mkts Eq Sel W",
    },
    ETL1864AU: {
      Description: "T. Rowe Price Global Equity (Hedged) M",
    },
    ETL1954AU: {
      Description: "L1 Capital International Daily",
    },
    ETL2741AU: {
      Description: "Paradice Global Emerging Markets",
    },
    ETL2760AU: {
      Description: "Newgate Real Estate and Infrastructure",
    },
    ETL2761AU: {
      Description: "Orbis Global Eq LE Fd (Aus Registered)",
    },
    ETL2805AU: {
      Description: "Alexander Fixed Income Ordinary",
    },
    ETL2840AU: {
      Description: "THB International Micro Cap B",
    },
    ETL2847AU: {
      Description: "AXA IM Global Dynamic Equity Plus",
    },
    ETL2869AU: {
      Description: "GQG Partners Global Equity Z",
    },
    ETL3064AU: {
      Description: "Armytage Micro Cap Activist",
    },
    ETL3065AU: {
      Description: "Colchester Emerging Markets Bond Fund I",
    },
    ETL3238AU: {
      Description: "THB International Micro Cap",
    },
    ETL3276AU: {
      Description: "MFS Prudent Capital Trust",
    },
    ETL3604AU: {
      Description: "Artesian Corporate Bond Fund",
    },
    ETL3856AU: {
      Description: "Robeco Global DM Conservative Eqs (AUD)",
    },
    ETL3964AU: {
      Description: "GAM Systematic Alt Rsk Pre Pls AU - I",
    },
    ETL4000AU: {
      Description: "Baker Steel Gold Institutional",
    },
    ETL4207AU: {
      Description: "GQG Partners Emerging Markets Equity",
    },
    ETL4336AU: {
      Description: "Pzena Global Focused Value Retail",
    },
    ETL4432AU: {
      Description: "L1 Capital UK Residential Prpty III AUD",
    },
    ETL4581AU: {
      Description: "GQG Partners Emerging Markets Equity Z",
    },
    ETL4654AU: {
      Description: "Allan Gray Australia Balanced Fund",
    },
    ETL4748AU: {
      Description: "Quest Long Short Australian Equities",
    },
    ETL4912AU: {
      Description: "L1 Capital Long Short - Wholesale",
    },
    ETL4930AU: {
      Description: "Neuberger Berman Em Mkts Eq Sel I",
    },
    ETL5086AU: {
      Description: "Accountants Combined Diversifed Fund",
    },
    ETL5210AU: {
      Description: "Neuberger Berman Strategic Income I",
    },
    ETL5509AU: {
      Description: "Mittleman Global Value Equity I",
    },
    ETL5510AU: {
      Description: "Insync Global Quality Equity",
    },
    ETL5525AU: {
      Description: "Colchester Global Government Bond I",
    },
    ETL6152AU: {
      Description: "Robeco Multi Factor Absolute Return B",
    },
    ETL6184AU: {
      Description: "Partners Group Global Real Estate AUDUnH",
    },
    ETL6262AU: {
      Description: "VF High Conviction Fund",
    },
    ETL6318AU: {
      Description: "Robeco Glb DM Multi-Fac Eqs Alpha AUDH",
    },
    ETL6472AU: {
      Description: "T. Rowe Price Global Equity (Hedged) S",
    },
    ETL6685AU: {
      Description: "Clearwater Dynamic Portfolio",
    },
    ETL6826AU: {
      Description: "8IP Australian Equity Impact",
    },
    ETL6849AU: {
      Description: "Federation Alternative Investments Ret",
    },
    ETL6978AU: {
      Description: "Milford Dynamic (AU)",
    },
    ETL7238AU: {
      Description: "T. Rowe Price Global Equity S",
    },
    ETL7377AU: {
      Description: "GQG Partners Global Equity",
    },
    ETL7426AU: {
      Description: "Cooper Investors Asian Equities Retail",
    },
    ETL7477AU: {
      Description: "Mirae Asset Asia Great Consumer Eq Fd",
    },
    ETL7498AU: {
      Description: "Mirae Asset Asia Sector Leader Equity Fd",
    },
    ETL7541AU: {
      Description: "Elston Australian Large Companies A",
    },
    ETL7610AU: {
      Description: "Robeco Glb DM Multi-Fac Eqs Alpha AUD",
    },
    ETL7683AU: {
      Description: "Redpoint Industrials",
    },
    ETL7705AU: {
      Description: "SPW Global High Quality - Institutional",
    },
    ETL7981AU: {
      Description: "Pentalpha Income For Life Fund",
    },
    ETL8084AU: {
      Description: "Paradice Australian Equities Fund",
    },
    ETL8096AU: {
      Description: "Paradice Long Short Australian Equities",
    },
    ETL8155AU: {
      Description: "Milford Australian Absolute Growth Fd 1",
    },
    ETL8171AU: {
      Description: "BNP Paribas Environmental Equity Trust",
    },
    ETL8268AU: {
      Description: "Artesian Corporate Bond Fund A",
    },
    ETL8410AU: {
      Description: "L1 Capital UK Residential Prpty IV AUD",
    },
    ETL8482AU: {
      Description: "T. Rowe Price Global Equity M",
    },
    ETL8732AU: {
      Description: "Watermark Absolute Return",
    },
    ETL8772AU: {
      Description: "Paradice Australian Mid Cap Fund B",
    },
    ETL8834AU: {
      Description: "SPW Global High Quality - Retail",
    },
    ETL8946AU: {
      Description: "Spire USA ROC IV (AUD)",
    },
    ETL9424AU: {
      Description: "GAM KCL Trade Finance AU Institutional",
    },
    ETL9467AU: {
      Description: "Global Opportunities Alternatives Trust",
    },
    EVG0002AU: {
      Description: "Freehold Absolute Return Fund",
    },
    EVO0005AU: {
      Description: "Arminius Capital GMMA Fund - Direct",
    },
    EVO0006AU: {
      Description: "Arminius Capital GMMA Fund - Platform",
    },
    FAM0101AU: {
      Description: "Celeste Australian Small Companies",
    },
    FCL0626AU: {
      Description: "First Guardian Master Boutique Devpmt",
    },
    FHT0010AU: {
      Description: "Sandon Capital Activist",
    },
    FHT0012AU: {
      Description: "8IP Australian Small Companies",
    },
    FHT0030AU: {
      Description: "The Montgomery Fund",
    },
    FHT0032AU: {
      Description: "Forager International Shares",
    },
    FHT0036AU: {
      Description: "Montgomery Global Fund",
    },
    FHT0038AU: {
      Description: "Montaka Global Access",
    },
    FHT0042AU: {
      Description: "Harvest Lane Asset Management Abs Ret",
    },
    FHT0103AU: {
      Description: "AtlasTrend Clean Disruption",
    },
    FHT1810AU: {
      Description: "EGP Concentrated Value Fund",
    },
    FHT3309AU: {
      Description: "Datt Capital Absolute Return A",
    },
    FHT3495AU: {
      Description: "Maven Smaller Companies",
    },
    FHT3726AU: {
      Description: "Montgomery Small Companies",
    },
    FHT6993AU: {
      Description: "Harvest Lane Asset Management Abs Pls",
    },
    FID0007AU: {
      Description: "Fidelity Global Equities",
    },
    FID0008AU: {
      Description: "Fidelity Australian Equities",
    },
    FID0010AU: {
      Description: "Fidelity Asia",
    },
    FID0011AU: {
      Description: "Fidelity China",
    },
    FID0014AU: {
      Description: "Fidelity Hedged Global Equities",
    },
    FID0015AU: {
      Description: "Fidelity India",
    },
    FID0021AU: {
      Description: "Fidelity Australian Opportunities",
    },
    FID0023AU: {
      Description: "Fidelity Global Demographics",
    },
    FID0026AU: {
      Description: "Fidelity Future Leaders",
    },
    FID0031AU: {
      Description: "Fidelity Global Emerging Markets",
    },
    FID0239AU: {
      Description: "Fidelity Sustainable Water & Waste",
    },
    FID4852AU: {
      Description: "Fidelity FIRST Global Fund",
    },
    FID9876AU: {
      Description: "Fidelity Global Low Volatility Equity Fd",
    },
    FPS0001AU: {
      Description: "Fiducian Capital Safe",
    },
    FPS0002AU: {
      Description: "Fiducian Capital Stable",
    },
    FPS0003AU: {
      Description: "Fiducian Balanced",
    },
    FPS0004AU: {
      Description: "Fiducian Growth Fund",
    },
    FPS0005AU: {
      Description: "Fiducian International Shares",
    },
    FPS0006AU: {
      Description: "Fiducian Australian Shares",
    },
    FPS0007AU: {
      Description: "Fiducian Property Securities",
    },
    FPS0008AU: {
      Description: "Fiducian Australian Smaller Co Shares",
    },
    FPS0009AU: {
      Description: "Fiducian Global Smaller Co & Emg Markets",
    },
    FPS0010AU: {
      Description: "Fiducian Technology",
    },
    FPS0011AU: {
      Description: "Fiducian Geared Australian Shares",
    },
    FPS0013AU: {
      Description: "Fiducian India",
    },
    FPS0014AU: {
      Description: "Fiducian Ultra Growth",
    },
    FRM0015AU: {
      Description: "Pinnacle Illiquid Property Funds",
    },
    FRT0001AU: {
      Description: "Templeton Global Trust Fund",
    },
    FRT0004AU: {
      Description: "Templeton Global Equity",
    },
    FRT0005AU: {
      Description: "Templeton Global Bond Plus I",
    },
    FRT0008AU: {
      Description: "Templeton Global Bond Plus W",
    },
    FRT0009AU: {
      Description: "Franklin Global Growth W",
    },
    FRT0010AU: {
      Description: "Franklin Global Growth I",
    },
    FRT0011AU: {
      Description: "Franklin Templeton Multisector Bond W",
    },
    FRT0012AU: {
      Description: "Franklin Templeton Multisector Bond I",
    },
    FRT0020AU: {
      Description: "Franklin Templeton Australian Equity W",
    },
    FRT0021AU: {
      Description: "Franklin Templeton Australian Equity I",
    },
    FRT0023AU: {
      Description: "Franklin Templeton Global Aggregate Bd I",
    },
    FRT0025AU: {
      Description: "Franklin Templeton Global Aggregate Bd W",
    },
    FRT0027AU: {
      Description: "Franklin Australian Absolute Return Bd W",
    },
    FRT0028AU: {
      Description: "Franklin Australian Absolute Return Bd I",
    },
    FRT6143AU: {
      Description: "Franklin Australian Core Plus Bond W",
    },
    FRT6435AU: {
      Description: "Franklin Australian Core Plus Bond I",
    },
    FSF0002AU: {
      Description: "CFS Wholesale Australian Share",
    },
    FSF0003AU: {
      Description: "CFS Wholesale Imputation",
    },
    FSF0004AU: {
      Description: "CFS Wholesale Property Securities",
    },
    FSF0006AU: {
      Description: "CFS MIF-Balanced",
    },
    FSF0007AU: {
      Description: "CFS Future Leaders",
    },
    FSF0008AU: {
      Description: "CFS Wholesale Diversified",
    },
    FSF0012AU: {
      Description: "CFS MIF-Property Securities",
    },
    FSF0013AU: {
      Description: "CFS MIF-Imputation",
    },
    FSF0014AU: {
      Description: "CFS MIF-Australian Share",
    },
    FSF0016AU: {
      Description: "CFS Wholesale Concentrated Aus Shr",
    },
    FSF0021AU: {
      Description: "CFS MIF-Conservative",
    },
    FSF0022AU: {
      Description: "CFS MIF-Diversified",
    },
    FSF0027AU: {
      Description: "CFS Wholesale Australian Bond",
    },
    FSF0032AU: {
      Description: "CFS MIF-CFS Strategic Cash",
    },
    FSF0033AU: {
      Description: "CFS Wholesale Conservative",
    },
    FSF0035AU: {
      Description: "CFS Developing Companies",
    },
    FSF0038AU: {
      Description: "CFS FC-Janus Henderson W Glb Nat Res",
    },
    FSF0039AU: {
      Description: "CFS Wholesale Diversified Fixed Interest",
    },
    FSF0040AU: {
      Description: "CFS Wholesale Balanced",
    },
    FSF0041AU: {
      Description: "CFS MIF-Janus Henderson Glb Nat Res",
    },
    FSF0043AU: {
      Description: "CFS Wholesale Geared Share",
    },
    FSF0044AU: {
      Description: "CFS MIF-Geared Share",
    },
    FSF0047AU: {
      Description: "Stewart Investors W Worldwide Leaders",
    },
    FSF0048AU: {
      Description: "CFS MIF-Worldwide Leaders",
    },
    FSF0075AU: {
      Description: "CFS W Strategic Cash",
    },
    FSF0076AU: {
      Description: "CFS Wholesale Industrial Share",
    },
    FSF0077AU: {
      Description: "CFS MIF-High Growth",
    },
    FSF0079AU: {
      Description: "CFS FC W Inv-Lazard W Select Aus Equity",
    },
    FSF0080AU: {
      Description: "Stewart Investors W Global Emerg Mkts",
    },
    FSF0084AU: {
      Description: "CFS Wholesale Global Credit Income",
    },
    FSF0085AU: {
      Description: "CFS FC Inv-Altrinsic Global Equity",
    },
    FSF0086AU: {
      Description: "CFS FC Inv-Solaris Core Aus Equity",
    },
    FSF0088AU: {
      Description: "CFS FC Inv-CFS Developing Companies",
    },
    FSF0089AU: {
      Description: "CFS FC Inv-CFS Future Leaders",
    },
    FSF0090AU: {
      Description: "CFS FC Inv-Acadian Geared Aus Eq",
    },
    FSF0091AU: {
      Description: "CFS FC Inv-CFS Global Credit Income",
    },
    FSF0092AU: {
      Description: "CFS FC Inv-Investors Mutual Aus Shr",
    },
    FSF0093AU: {
      Description: "CFS FC Inv-FirstChoice Glb Small Co",
    },
    FSF0094AU: {
      Description: "CFS FC Inv-FirstChoice Lower Vol Aus",
    },
    FSF0095AU: {
      Description: "CFS FC Inv-Perennial Value Aus Shr",
    },
    FSF0096AU: {
      Description: "CFS FC Inv-Schroder Abs Return Inc",
    },
    FSF0097AU: {
      Description: "CFS FC Inv-Antares Elite Opport",
    },
    FSF0143AU: {
      Description: "CFS Wholesale Global Tech & Comm",
    },
    FSF0144AU: {
      Description: "CFS MIF-Global Tech & Comm",
    },
    FSF0145AU: {
      Description: "CFS MIF-Global Health & Biotech",
    },
    FSF0146AU: {
      Description: "CFS Wholesale Global Health & Biotech",
    },
    FSF0169AU: {
      Description: "CFS MIF-FC Geared Global Share",
    },
    FSF0170AU: {
      Description: "Firstchoice WS Geared Global Share",
    },
    FSF0197AU: {
      Description: "CFS MIF-Conservative NEF",
    },
    FSF0198AU: {
      Description: "CFS MIF-Balanced NEF",
    },
    FSF0199AU: {
      Description: "CFS MIF-Diversified NEF",
    },
    FSF0202AU: {
      Description: "CFS MIF-Imputation NEF",
    },
    FSF0205AU: {
      Description: "CFS MIF-Geared Share NEF",
    },
    FSF0211AU: {
      Description: "CFS MIF-Property Securities NEF",
    },
    FSF0219AU: {
      Description: "CFS FC Inv-FirstChoice Fixed Int",
    },
    FSF0220AU: {
      Description: "CFS FC Inv-FirstChoice Aus Share",
    },
    FSF0221AU: {
      Description: "CFS FC Inv-FirstChoice Global Share",
    },
    FSF0222AU: {
      Description: "CFS FC Inv-FirstChoice Property Sec",
    },
    FSF0223AU: {
      Description: "CFS FC Inv-FirstChoice Conservative",
    },
    FSF0224AU: {
      Description: "CFS FC Inv-FirstChoice Moderate",
    },
    FSF0225AU: {
      Description: "CFS FC Inv-FirstChoice Growth",
    },
    FSF0226AU: {
      Description: "CFS FC Inv-FirstChoice High Growth",
    },
    FSF0227AU: {
      Description: "CFS FC Inv-FirstChoice Defensive",
    },
    FSF0228AU: {
      Description: "CFS FC Inv-CFS Cash",
    },
    FSF0229AU: {
      Description: "CFS FC Inv-CFS Diversified Fix Int",
    },
    FSF0231AU: {
      Description: "CFS FC Inv-Aberdeen Std Aus Fixed Inc",
    },
    FSF0232AU: {
      Description: "CFS FC Inv-CFS Imputation",
    },
    FSF0233AU: {
      Description: "CFS FC Inv-CFS Index Aus Share",
    },
    FSF0234AU: {
      Description: "CFS FC Inv-BlackRock W Adv Aus Shr",
    },
    FSF0235AU: {
      Description: "CFS FC Inv-Perpetual Industrial Shr",
    },
    FSF0236AU: {
      Description: "CFS FC Inv-State Street Aus Equity",
    },
    FSF0237AU: {
      Description: "CFS FC Inv-Ausbil Aus Active Equity",
    },
    FSF0238AU: {
      Description: "CFS FC Inv - T. Rowe Price Aus Eq",
    },
    FSF0239AU: {
      Description: "CFS FC Inv-Maple-Brown Abb Aus Shr",
    },
    FSF0240AU: {
      Description: "CFS FC Inv-Schroder Aus Equity",
    },
    FSF0241AU: {
      Description: "CFS FC Inv-Pendal Australian Share",
    },
    FSF0242AU: {
      Description: "CFS FC Inv-CFS Worldwide Leaders",
    },
    FSF0243AU: {
      Description: "CFS FC Inv-CFS Index Global Share",
    },
    FSF0244AU: {
      Description: "CFS FC Inv-Janus Henderson Glb Nat Res",
    },
    FSF0245AU: {
      Description: "CFS FC Inv-Pendal Core Global Share",
    },
    FSF0246AU: {
      Description: "CFS FC Inv-Perpetual Global Share",
    },
    FSF0247AU: {
      Description: "CFS FC Inv-MFS Global Equity",
    },
    FSF0248AU: {
      Description: "CFS FC Inv-T. Rowe Price Glb Eqty",
    },
    FSF0249AU: {
      Description: "CFS FC Inv-Ironbark Property Sec",
    },
    FSF0250AU: {
      Description: "CFS FC Inv-Pendal Property Investment",
    },
    FSF0251AU: {
      Description: "CFS FC Inv-CFS Property Securities",
    },
    FSF0252AU: {
      Description: "CFS FC Inv-FirstChoice M-Index Div",
    },
    FSF0253AU: {
      Description: "CFS FC Inv-Perpetual Divers Growth",
    },
    FSF0254AU: {
      Description: "CFS FC Inv-CFS Balanced",
    },
    FSF0255AU: {
      Description: "CFS FC Inv-FirstChoice M-Index Cons",
    },
    FSF0256AU: {
      Description: "CFS FC Inv-Perpetual Cons Growth",
    },
    FSF0257AU: {
      Description: "CFS FC Inv-CFS Conservative",
    },
    FSF0258AU: {
      Description: "CFS FC Inv-Pendal Active Balanced",
    },
    FSF0259AU: {
      Description: "CFS FC Inv-Perpetual Balanced Grwth",
    },
    FSF0260AU: {
      Description: "CFS FC Inv-FirstChoice M-Index Bal",
    },
    FSF0261AU: {
      Description: "CFS FC Inv-CFS Diversified",
    },
    FSF0262AU: {
      Description: "CFS FC Inv-FirstChoice M-Index H Growth",
    },
    FSF0263AU: {
      Description: "CFS FC Inv-CFS High Growth",
    },
    FSF0264AU: {
      Description: "CFS FC Inv-CFS Geared Share",
    },
    FSF0265AU: {
      Description: "CFS FC Inv-FirstChoice Grd Glb Shr",
    },
    FSF0408AU: {
      Description: "CFS FC Inv-Nikko AM Aus Share Conc",
    },
    FSF0409AU: {
      Description: "CFS FC Inv-Platinum International",
    },
    FSF0410AU: {
      Description: "CFS FC Inv-FirstChoice Aus Small Co",
    },
    FSF0418AU: {
      Description: "CFS FC Inv-Lazard Select Aus Equity",
    },
    FSF0453AU: {
      Description: "Acadian Geared Australian Equity",
    },
    FSF0454AU: {
      Description: "CFS Wholesale Global Property Sec",
    },
    FSF0455AU: {
      Description: "CFS FC-Antares W Elite Opport",
    },
    FSF0456AU: {
      Description: "CFS FC W Inv-FC W Lower Volatility Aus S",
    },
    FSF0457AU: {
      Description: "CFS FC-BlackRock W Adv Aus Shr",
    },
    FSF0458AU: {
      Description: "CFS FC W Inv-Perpetual Industrial Share",
    },
    FSF0459AU: {
      Description: "CFS FC-State Street W Aus Equity",
    },
    FSF0460AU: {
      Description: "CFS FC W Inv-Ausbil W Aus Active Equity",
    },
    FSF0461AU: {
      Description: "CFS FC W Inv-Maple-Brown Abb W Aus Shr",
    },
    FSF0462AU: {
      Description: "CFS FC W Inv-Schroder Australian Equity",
    },
    FSF0463AU: {
      Description: "CFS FC-Pendal W Australian Share",
    },
    FSF0464AU: {
      Description: "CFS FC-Nikko AM W Aus Share Conc",
    },
    FSF0465AU: {
      Description: "CFS FC W Inv-Investors Mutual W Aus Shr",
    },
    FSF0466AU: {
      Description: "CFS FC W Inv-Solaris W Core Aus Equity",
    },
    FSF0467AU: {
      Description: "CFS FC W Inv-Perennial Value W Aus Shr",
    },
    FSF0468AU: {
      Description: "CFS Wholesale Developing Companies",
    },
    FSF0469AU: {
      Description: "CFS Wholesale Future Leaders",
    },
    FSF0470AU: {
      Description: "CFS FC W Inv-Perpetual Cons Gr",
    },
    FSF0471AU: {
      Description: "FirstChoice WS Multi-Index Conservative",
    },
    FSF0472AU: {
      Description: "FirstChoice WS Multi-Index Diversified",
    },
    FSF0473AU: {
      Description: "CFS FC W Inv-Perpetual Diversified Gr",
    },
    FSF0474AU: {
      Description: "CFS FC-Pendal W Active Balanced",
    },
    FSF0475AU: {
      Description: "CFS FC W Inv-Perpetual Balanced Growth",
    },
    FSF0476AU: {
      Description: "FirstChoice WS Multi-Index Balanced",
    },
    FSF0477AU: {
      Description: "FirstChoice WS Multi-Index High Growth",
    },
    FSF0478AU: {
      Description: "CFS FC W Inv-Aberdeen Std W Aus FixedInc",
    },
    FSF0479AU: {
      Description: "CFS FC W Inv-Perpetual W Global Share",
    },
    FSF0480AU: {
      Description: "CFS FC W Inv-MFS W Global Equity",
    },
    FSF0481AU: {
      Description: "CFS FC-T. Rowe Price W Glb Eqty",
    },
    FSF0482AU: {
      Description: "CFS FC-Pendal W Core Global Share",
    },
    FSF0483AU: {
      Description: "CFS FC-Altrinsic W Global Equity",
    },
    FSF0484AU: {
      Description: "FirstChoice WS Global Small Companies",
    },
    FSF0485AU: {
      Description: "FirstChoice WS Australian Share",
    },
    FSF0486AU: {
      Description: "FirstChoice WS Conservative",
    },
    FSF0487AU: {
      Description: "FirstChoice WS Defensive",
    },
    FSF0488AU: {
      Description: "FirstChoice WS Fixed Interest",
    },
    FSF0489AU: {
      Description: "FirstChoice WS Global Share",
    },
    FSF0490AU: {
      Description: "FirstChoice WS Growth",
    },
    FSF0498AU: {
      Description: "CFS Wholesale High Growth",
    },
    FSF0499AU: {
      Description: "FirstChoice Wholesale High Growth",
    },
    FSF0500AU: {
      Description: "FirstChoice WS Moderate",
    },
    FSF0501AU: {
      Description: "FirstChoice WS Property Securities",
    },
    FSF0502AU: {
      Description: "FirstChoice WS Aus Small Companies",
    },
    FSF0503AU: {
      Description: "CFS FC-Pendal W Property Investment",
    },
    FSF0504AU: {
      Description: "CFS FC W Inv-Ironbark W Property Sec",
    },
    FSF0505AU: {
      Description: "CFS FC W Inv-Platinum International",
    },
    FSF0506AU: {
      Description: "CFS FC-Schroder W Abs Return Inc",
    },
    FSF0652AU: {
      Description: "CFS Wholesale Index Australian Share",
    },
    FSF0653AU: {
      Description: "CFS Wholesale Index Australian Bond",
    },
    FSF0654AU: {
      Description: "CFS Wholesale Index Global Share",
    },
    FSF0655AU: {
      Description: "CFS Wholesale Index Property Securities",
    },
    FSF0662AU: {
      Description: "CFS FC Inv-CFS Index Property Sec",
    },
    FSF0663AU: {
      Description: "CFS FC Inv-PM Capital Enhanced Yld",
    },
    FSF0664AU: {
      Description: "CFS FC Inv-Ironbark Karara Aus Shr",
    },
    FSF0665AU: {
      Description: "CFS FC Inv-APN AREIT",
    },
    FSF0666AU: {
      Description: "CFS FC Inv-CFS Global Property Sec",
    },
    FSF0677AU: {
      Description: "CFS FC W Inv-PM Capital Enhanced Yield",
    },
    FSF0678AU: {
      Description: "CFS FC-Ironbark Karara W Aus Share",
    },
    FSF0679AU: {
      Description: "CFS FC-APN Wholesale AREIT",
    },
    FSF0694AU: {
      Description: "CFS Wholesale Target Return Income",
    },
    FSF0702AU: {
      Description: "CFS FC-Pendal W Monthly Inc Plus",
    },
    FSF0706AU: {
      Description: "FirstChoice WS Global Share - Hedged",
    },
    FSF0707AU: {
      Description: "CFS Wholesale Index Global Share-Hedged",
    },
    FSF0709AU: {
      Description: "CFS FC W Inv-Merlon W Aus Share Income",
    },
    FSF0710AU: {
      Description: "Acadian Sus Wholesale Glb Equity",
    },
    FSF0713AU: {
      Description: "FirstChoice WS Global Property Secs",
    },
    FSF0715AU: {
      Description: "CFS FC W Inv-Celeste W Aus Small Co",
    },
    FSF0716AU: {
      Description: "CFS FC W Inv-Ausbil W Aus Emg Leaders",
    },
    FSF0719AU: {
      Description: "CFS FC Inv-CFS Target Return Income",
    },
    FSF0721AU: {
      Description: "CFS FC Inv-Pendal Monthly Inc Plus",
    },
    FSF0722AU: {
      Description: "CFS FC Inv-Merlon Aus Share Income",
    },
    FSF0723AU: {
      Description: "CFS FC Inv-CFS Equity Income",
    },
    FSF0724AU: {
      Description: "CFS FC Inv-Acadian Sus Glb Equity",
    },
    FSF0725AU: {
      Description: "CFS FC Inv-Generation Global Share",
    },
    FSF0727AU: {
      Description: "CFS FC Inv-FirstChoice Glb Prop Sec",
    },
    FSF0728AU: {
      Description: "CFS FC Inv-Legg Mason M Curr Real Inc",
    },
    FSF0729AU: {
      Description: "CFS FC Inv-Celeste Aus Small Co",
    },
    FSF0730AU: {
      Description: "CFS FC Inv-Ausbil Aus Emerg Leaders",
    },
    FSF0782AU: {
      Description: "CFS FC Inv-Acadian Aus Equity",
    },
    FSF0787AU: {
      Description: "Acadian Wholesale Australian Equity",
    },
    FSF0788AU: {
      Description: "Acadian Wholesale Global Eqty Long Short",
    },
    FSF0789AU: {
      Description: "Acadian Wholesale Aus Equity Long Short",
    },
    FSF0790AU: {
      Description: "CFS FC W Inv-Fidelity Aus Equities",
    },
    FSF0791AU: {
      Description: "FirstChoice Wholesale Multi-Index Growth",
    },
    FSF0795AU: {
      Description: "FirstChoice WS Global Infrastructure Sec",
    },
    FSF0796AU: {
      Description: "CFS FC WS Inv - SG Hiscock W Prop Sec",
    },
    FSF0797AU: {
      Description: "Acadian Wholesale Defensive Income",
    },
    FSF0798AU: {
      Description: "CFS FC W Inv-PM Capital W Glb Companies",
    },
    FSF0808AU: {
      Description: "CFS FC Inv-Fidelity Aus Equities",
    },
    FSF0809AU: {
      Description: "CFS FC Inv-FirstChoice Glb Shr-Hgd",
    },
    FSF0810AU: {
      Description: "CFS FC Inv-CFS Index Global Shr-Hgd",
    },
    FSF0811AU: {
      Description: "CFS FC Inv-FC Multi-Index Gro",
    },
    FSF0813AU: {
      Description: "CFS FC Inv-PM Capital Glb Companies",
    },
    FSF0814AU: {
      Description: "CFS FC Inv-Acadian Aus Equity LS",
    },
    FSF0872AU: {
      Description: "CFS FC Inv-FirstChoice Asian Share",
    },
    FSF0873AU: {
      Description: "CFS FC Inv-FirstChoice Geared Aus Shr",
    },
    FSF0874AU: {
      Description: "CFS FC Inv-FirstChoice Glb Infrastr",
    },
    FSF0875AU: {
      Description: "CFS FC Inv-Acadian Glb Equity LS",
    },
    FSF0876AU: {
      Description: "CFS FC Inv-Acadian Geared Global Eq",
    },
    FSF0877AU: {
      Description: "CFS FC Inv-CFS Geared Glb Property Sec",
    },
    FSF0889AU: {
      Description: "FirstChoice WS Asian Share",
    },
    FSF0890AU: {
      Description: "CFS FC W Inv-FC W Geared Aus Share",
    },
    FSF0891AU: {
      Description: "Acadian Wholesale Geared Global Equity",
    },
    FSF0892AU: {
      Description: "CFS FC W Inv-CFS W Geared Glbl Prpty Sec",
    },
    FSF0893AU: {
      Description: "CFS FC W Inv-Legg Mason M Curr Real Inc",
    },
    FSF0899AU: {
      Description: "CFS FC Inv-SG Hiscock Property Sec",
    },
    FSF0905AU: {
      Description: "CFS FC W Inv-CFS W Glbl Listed Infra Sec",
    },
    FSF0908AU: {
      Description: "Generation Wholesale Global Share",
    },
    FSF0921AU: {
      Description: "CFS FC Inv-CFS Global Ltd Infra Sec",
    },
    FSF0922AU: {
      Description: "CFS FC Inv-Epoch GESY",
    },
    FSF0924AU: {
      Description: "CFS FC Inv-FirstChoice Grd Growth Plus",
    },
    FSF0961AU: {
      Description: "CFS Wholesale Equity Income",
    },
    FSF0966AU: {
      Description: "CFS FC-Epoch W GESY",
    },
    FSF0968AU: {
      Description: "FirstChoice WS Emerging Markets",
    },
    FSF0969AU: {
      Description: "FirstChoice WS Geared Growth Plus",
    },
    FSF0973AU: {
      Description: "Acadian Defensive Income - Class A",
    },
    FSF0974AU: {
      Description: "Realindex Global Share-Class A",
    },
    FSF0975AU: {
      Description: "Realindex Global Share Hedged-Class A",
    },
    FSF0976AU: {
      Description: "Realindex Australian Share-Class A",
    },
    FSF0978AU: {
      Description: "Realindex Aus Small Co-Class A",
    },
    FSF0980AU: {
      Description: "CFS FC Inv-Realindex Aus Shr",
    },
    FSF0981AU: {
      Description: "CFS FC Inv-Realindex Aus Sml Co",
    },
    FSF0982AU: {
      Description: "CFS FC Inv-Realindex Global Shr",
    },
    FSF0983AU: {
      Description: "CFS FC Inv-Realindex Global Shr-Hgd",
    },
    FSF0985AU: {
      Description: "CFS FC Inv-FirstChoice Emerging Mkts",
    },
    FSF1008AU: {
      Description: "FirstRate Wholesale Saver",
    },
    FSF1009AU: {
      Description: "CFS FC Inv-FirstRate Saver",
    },
    FSF1015AU: {
      Description: "Realindex Wholesale Australian Shr",
    },
    FSF1016AU: {
      Description: "Realindex W Australian Sml Comp",
    },
    FSF1017AU: {
      Description: "Realindex Wholesale Global Shr",
    },
    FSF1018AU: {
      Description: "Realindex W Global Share-Hedged",
    },
    FSF1019AU: {
      Description: "CFS FC W Inv-Macquarie Income Opps",
    },
    FSF1020AU: {
      Description: "FirstChoice WS Balanced",
    },
    FSF1021AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep (3Mth)",
    },
    FSF1024AU: {
      Description: "CFS FC Inv-Macquarie Income Opps",
    },
    FSF1025AU: {
      Description: "CFS FC Inv-FirstChoice Balanced",
    },
    FSF1026AU: {
      Description: "CFS FC Inv-FirstRate Term Dep (3Mth)",
    },
    FSF1028AU: {
      Description: "CFS FC Inv-FirstRate Term Dep (6Mth)",
    },
    FSF1050AU: {
      Description: "Stewart Investors W Glb Emerg Mkts Sus",
    },
    FSF1052AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep (6Mth)",
    },
    FSF1053AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep (9Mth)",
    },
    FSF1054AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep(12Mth)",
    },
    FSF1055AU: {
      Description: "CFS FC-UBS W Divers Fixed Income",
    },
    FSF1056AU: {
      Description: "CFS FC Inv-FirstRate Term Dep (9Mth)",
    },
    FSF1057AU: {
      Description: "CFS FC Inv-FirstRate Term Dep(12Mth)",
    },
    FSF1058AU: {
      Description: "CFS FC Inv-UBS Diversified Fixed Inc",
    },
    FSF1077AU: {
      Description: "CFS Wholesale Global Corporate Bond",
    },
    FSF1079AU: {
      Description: "CFS FC W Inv-Platinum Asia",
    },
    FSF1081AU: {
      Description: "Aspect Wholesale Diversified Futures",
    },
    FSF1082AU: {
      Description: "CFS FC Inv-Platinum Asia",
    },
    FSF1083AU: {
      Description: "CFS FC Inv-Stewart Glb Emg Mkt Ldrs",
    },
    FSF1084AU: {
      Description: "CFS FC Inv-Aspect Div Futures",
    },
    FSF1085AU: {
      Description: "Stewart Investors Glb Emerg Mkts Leaders",
    },
    FSF1086AU: {
      Description: "Aspect Diversified Futures-Class A",
    },
    FSF1101AU: {
      Description: "Realindex Emerging Markets-Class A",
    },
    FSF1197AU: {
      Description: "Realindex W Emerging Markets",
    },
    FSF1198AU: {
      Description: "CFS FC-Magellan W Global Share",
    },
    FSF1201AU: {
      Description: "CFS FC-Baillie Gifford W LT Glb Gwth",
    },
    FSF1202AU: {
      Description: "CFS FC W Inv-AMP Capital W Glb Prop Sec",
    },
    FSF1204AU: {
      Description: "CFS FC Inv-Magellan Global",
    },
    FSF1207AU: {
      Description: "CFS FC Inv-Baillie Gifford LT Glb Gwth",
    },
    FSF1208AU: {
      Description: "CFS FC Inv-AMP Capital Glb Property Sec",
    },
    FSF1240AU: {
      Description: "Acadian Global Managed Volatility Equity",
    },
    FSF1241AU: {
      Description: "CFS WS Glb Listed Infrastructure-Class A",
    },
    FSF1242AU: {
      Description: "CFS FC Inv-Perpetual Aus Share",
    },
    FSF1243AU: {
      Description: "CFS FC-Perpetual W Australian Share",
    },
    FSF1244AU: {
      Description: "CFS FC W Inv-Perpetual W Divers Income",
    },
    FSF1247AU: {
      Description: "Acadian Aus Equity High Yield Class A",
    },
    FSF1248AU: {
      Description: "CFS FC Inv-Perpetual Diversified Income",
    },
    FSF1295AU: {
      Description: "Stewart Investors W Wrldwide Sustainabty",
    },
    FSF1402AU: {
      Description: "CFS FC Inv-PIMCO Global Bond",
    },
    FSF1405AU: {
      Description: "CFS FC-PIMCO Wholesale Global Bond",
    },
    FSF1406AU: {
      Description: "Acadian Wholesale Global Managed Volat",
    },
    FSF1414AU: {
      Description: "CFS FC Multi-Index Conservative Class A",
    },
    FSF1415AU: {
      Description: "CFS FC Multi-Index Diversified Class A",
    },
    FSF1416AU: {
      Description: "CFS FC Multi-Index Balanced Class A",
    },
    FSF1422AU: {
      Description: "CFS Multi-Asset Real Return - Class A",
    },
    FSF1609AU: {
      Description: "CFS FC Inv-FirstChoice Alternatives",
    },
    FSF1610AU: {
      Description: "CFS FC Inv- Schroder Real Return",
    },
    FSF1611AU: {
      Description: "CFS FC Inv- Kapstream Absolute Ret",
    },
    FSF1613AU: {
      Description: "FirstChoice WS Alternatives",
    },
    FSF1614AU: {
      Description: "CFS FC-Schroder W Real Return",
    },
    FSF1615AU: {
      Description: "CFS FC W Inv-Kapstream W Absolute Ret",
    },
    FSF1616AU: {
      Description: "CFS FC Multi-Index High Growth Class A",
    },
    FSF1650AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep (2yr)",
    },
    FSF1651AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep (3yr)",
    },
    FSF1652AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep (5yr)",
    },
    FSF1653AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep (7yr)",
    },
    FSF1654AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep (10yr)",
    },
    FSF1655AU: {
      Description: "CFS FC W Inv-FirstRate W Term Dep (15yr)",
    },
    FSF1668AU: {
      Description: "CFS FC Inv-FirstRate Term Dep (2yr)",
    },
    FSF1669AU: {
      Description: "CFS FC Inv-FirstRate Term Dep (3yr)",
    },
    FSF1670AU: {
      Description: "CFS FC Inv-FirstRate Term Dep (5yr)",
    },
    FSF1671AU: {
      Description: "CFS FC Inv-FirstRate Term Dep (7yr)",
    },
    FSF1672AU: {
      Description: "CFS FC Inv-FirstRate Term Dep (10yr)",
    },
    FSF1673AU: {
      Description: "CFS FC Inv-FirstRate Term Dep (15yr)",
    },
    FSF1675AU: {
      Description: "Stewart Investors Worldwide Sus-Class A",
    },
    FSF1676AU: {
      Description: "CFS Equity Income Fund Class A",
    },
    FSF1688AU: {
      Description: "CFS FC Inv-Bennelong ex-20 Aus Eq",
    },
    FSF1693AU: {
      Description: "CFS FC Inv-OC Premium Small Comp",
    },
    FSF1694AU: {
      Description: "CFS FirstChoice WS Diversified",
    },
    FSF1695AU: {
      Description: "CFS FC W Inv-FirstChoice W Multi-Idx Mod",
    },
    FSF1696AU: {
      Description: "CFS FC W Inv-Franklin Temp W Msect Bond",
    },
    FSF1697AU: {
      Description: "CFS FC W Inv-Bennelong ex-20 W Aus Eq",
    },
    FSF1699AU: {
      Description: "CFS FC-Milliman W Mgd Risk Aus Shr",
    },
    FSF1700AU: {
      Description: "CFS FC-Milliman W Mgd Risk Glb Shr",
    },
    FSF1701AU: {
      Description: "CFS FC-Milliman W Mg Ris M-I Hi Gro",
    },
    FSF1702AU: {
      Description: "CFS FC W Inv-OC W Premium Small Comp",
    },
    FSF1760AU: {
      Description: "CFS FC Multi-Index Moderate-Class A",
    },
    FSF1761AU: {
      Description: "Milliman Mgd Risk Australian Shr-Class A",
    },
    FSF1762AU: {
      Description: "Milliman Managed Risk Global Shr-Class A",
    },
    FSF1763AU: {
      Description: "Milliman Mgd Risk M-Index High Gro- A",
    },
    FSF1771AU: {
      Description: "Realindex Global Shr Fd(Scr)-Class A",
    },
    FSF1773AU: {
      Description: "CFS Asian Growth - A",
    },
    FSF1774AU: {
      Description: "CFS FC Inv-Magellan Global Shre-Hgd",
    },
    FSF1775AU: {
      Description: "CFS FC Inv-Perpetual Ethic SRI Shr",
    },
    FSF1776AU: {
      Description: "CFS FC Inv-Magellan Infrastructure",
    },
    FSF1777AU: {
      Description: "CFS FC Inv-Bennelong Kardin Abs Ret",
    },
    FSF1778AU: {
      Description: "CFS FC-Magellan W Global Shre-Hgd",
    },
    FSF1779AU: {
      Description: "CFS FC-Perpetual W Ethic SRI Shr",
    },
    FSF1780AU: {
      Description: "CFS FC-Magellan W Infrastructure",
    },
    FSF1781AU: {
      Description: "CFS FC-Bennelong Kardin W Abs Ret",
    },
    FSF1809AU: {
      Description: "CFS Wholesale Institutional Cash",
    },
    FSF1816AU: {
      Description: "CFS FC-Antipodes W Global",
    },
    FSF1820AU: {
      Description: "CFS FC-AZ Sestante W Conservative",
    },
    FSF1821AU: {
      Description: "CFS FC-AZ Sestante W Diversified",
    },
    FSF1822AU: {
      Description: "CFS FC-AZ Sestante W Growth",
    },
    FSF1978AU: {
      Description: "Acadian Global Equity Long Short-Class A",
    },
    FSF2045AU: {
      Description: "FirstChoice Wholesale Cash",
    },
    FSF2055AU: {
      Description: "CFS FC Inv-FR Term Dep(2yr)-Monthly Int",
    },
    FSF2340AU: {
      Description: "CFS FC-FirstRate Term Dep (7yr)",
    },
    FSF2365AU: {
      Description: "CFS W Index High Growth",
    },
    FSF2675AU: {
      Description: "CFS FC-FirstRate Term Dep (2yr)",
    },
    FSF2825AU: {
      Description: "CFS FC Inv-Antipodes Global",
    },
    FSF2891AU: {
      Description: "CFS FC-CFS W Index Glb Property Sec",
    },
    FSF3080AU: {
      Description: "CFS FC Inv-AZ Sestante Conservative",
    },
    FSF3145AU: {
      Description: "CFS FC-FirstRate Term Dep (3yr)",
    },
    FSF3532AU: {
      Description: "Aspect Absolute Return Fund Class A",
    },
    FSF3982AU: {
      Description: "Acadian Aus Equity Long Short-Class A",
    },
    FSF4018AU: {
      Description: "Baillie Gifford Glb Stewardship A",
    },
    FSF4058AU: {
      Description: "CFS FC Inv-FR Term Dep(15yr)-Monthly Int",
    },
    FSF4148AU: {
      Description: "CFS W Index Moderate",
    },
    FSF4361AU: {
      Description: "CFS FC-FirstRate Term Dep (15yr)",
    },
    FSF4420AU: {
      Description: "CFS FC Inv-FR Term Dep(3yr)-Monthly Int",
    },
    FSF4829AU: {
      Description: "CFS FC-FirstRate Term Dep (5yr)",
    },
    FSF4877AU: {
      Description: "CFS Index Diversified A",
    },
    FSF4976AU: {
      Description: "CFS FC Inv - Pendal Global Em Mkt Opps",
    },
    FSF5516AU: {
      Description: "CFS FC-FirstRate Term Dep (10yr)",
    },
    FSF5774AU: {
      Description: "Baillie Gifford LT Gbl Growth A",
    },
    FSF6085AU: {
      Description: "CFS W Index Balanced",
    },
    FSF6554AU: {
      Description: "CFS FC-CFS W Index Global Bond",
    },
    FSF7298AU: {
      Description: "Affirmative Global Bond Fund - A",
    },
    FSF7580AU: {
      Description: "CFS Index Conservative A",
    },
    FSF7935AU: {
      Description: "CFS US Select High Yield Fund-Class A",
    },
    FSF8054AU: {
      Description: "CFS FC Inv-AZ Sestante Diversified",
    },
    FSF8084AU: {
      Description: "CFS US Short Duration Hi Yld Fd-Class A",
    },
    FSF8190AU: {
      Description: "CFS FC-CFS W Index Conservative",
    },
    FSF8242AU: {
      Description: "CFS Index Growth A",
    },
    FSF8443AU: {
      Description: "CFS Glb Emerg Markets Focus Fund-Class A",
    },
    FSF8519AU: {
      Description: "CFS FC Inv-FR Term Dep(10yr)-Monthly Int",
    },
    FSF8602AU: {
      Description: "CFS FC-AIM W Global Bond",
    },
    FSF8777AU: {
      Description: "CFS Australian MidCap Fund - Class A",
    },
    FSF8830AU: {
      Description: "CFS FC-CFS W Index Diversified",
    },
    FSF9130AU: {
      Description: "CFS FC Inv-FR Term Dep(7yr)-Monthly Int",
    },
    FSF9303AU: {
      Description: "CFS FC Inv-FR Term Dep(5yr)-Monthly Int",
    },
    FSF9393AU: {
      Description: "CFS FC-Pendal W Global Em Mkt Opps",
    },
    FSF9900AU: {
      Description: "CFS High Quality US High Yld Fd-Class A",
    },
    FSF9949AU: {
      Description: "CFS FC-CFS W Index Growth",
    },
    FSF9952AU: {
      Description: "Acadian W Aus Mgd Vol Eqty-Class A",
    },
    FSP0001AU: {
      Description: "CBG Australian Equities Fund",
    },
    FSP174204: {
      Description: "Clarity Trans-Tasman",
    },
    FSP174205: {
      Description: "Clarity Dividend Yield",
    },
    FSP174206: {
      Description: "Clarity Fixed Income",
    },
    FSP174207: {
      Description: "Clarity Global Shares",
    },
    FSP174208: {
      Description: "Clarity Diversified Income",
    },
    FSP174209: {
      Description: "Clarity Diversified Growth",
    },
    GCM0001AU: {
      Description: "Ganes Focused Value",
    },
    GDI0251AU: {
      Description: "GDI No.36 Perth CBD Office Trust",
    },
    GDI0645AU: {
      Description: "GDI No.38 Diversified Property Trust",
    },
    GDI1087AU: {
      Description: "GDI No. 42 Office Trust",
    },
    GDI3129AU: {
      Description: "GDI No.43 Property Trust",
    },
    GDI6455AU: {
      Description: "GDI No.33 Brisbane Office Trust",
    },
    GEM0111AU: {
      Description: "AUI Property Securities Fund Ordinary",
    },
    GEM0112AU: {
      Description: "AUI Property Securities Fund Income",
    },
    GEM0113AU: {
      Description: "AUI Property Securities Fund Growth",
    },
    GIO0001AU: {
      Description: "AMP FLI-AMP Monthly Income No 1",
    },
    GIO0002AU: {
      Description: "AMP FLI-AMP Monthly Income No 2",
    },
    GIO0003AU: {
      Description: "AMP FLI-AMP Monthly Income No 3",
    },
    GLO0015AU: {
      Description: "Alphinity Sustainable Share B",
    },
    GMO0001AU: {
      Description: "GMO Systematic Global Macro Trust A",
    },
    GMO0006AU: {
      Description: "GMO Systematic Global Macro Trust B",
    },
    GMO0014AU: {
      Description: "GMO SGM Major Markets Trust",
    },
    GMO0102AU: {
      Description: "GMO Emerging Markets Trust",
    },
    GSF0001AU: {
      Description: "Epoch Gbl Eq Shldr Yld Fd Hgd",
    },
    GSF0002AU: {
      Description: "Epoch Gbl Eq Shldr Yld Fd Uhgd",
    },
    GSF0008AU: {
      Description: "Payden Global Income Opportunities",
    },
    GSF4799AU: {
      Description: "Cambridge Global Smaller Companies A",
    },
    GSF9808AU: {
      Description: "Munro Concentrated Global Growth A",
    },
    GTU0008AU: {
      Description: "Invesco WS Global Opportunities-Hedged A",
    },
    GTU0041AU: {
      Description: "Invesco WS Global Property Secs-Class A",
    },
    GTU0096AU: {
      Description: "Invesco WS Aus Smaller Companies-Class R",
    },
    GTU0097AU: {
      Description: "Invesco WS Diversified Growth-Class R",
    },
    GTU0098AU: {
      Description: "Invesco WS Global Opportunities-Hedged R",
    },
    GTU0102AU: {
      Description: "Invesco WS Global Opportunities-Unhedged",
    },
    GTU0109AU: {
      Description: "Invesco WS Global Targeted Returns A",
    },
    GTU0110AU: {
      Description: "Invesco WS Global Targeted Returns I",
    },
    GTU0113AU: {
      Description: "Invesco Australian Equity Long Short A",
    },
    GTU0114AU: {
      Description: "Invesco Australian Equity Long Short I",
    },
    GTU0516AU: {
      Description: "Invesco Australian Equity Effcnt Inc A",
    },
    GTU3750AU: {
      Description: "Invesco Credit Opportunities - Thd Cls",
    },
    GTU4172AU: {
      Description: "Invesco Credit Opportunities",
    },
    GTU5547AU: {
      Description: "Invesco Global Real Estate A",
    },
    GTU7049AU: {
      Description: "Invesco Credit Opportunities - Sec Cls",
    },
    GTU7360AU: {
      Description: "Invesco Global Real Estate I",
    },
    GTU8912AU: {
      Description: "Invesco Wholesale USD Cash A",
    },
    GYC6212AU: {
      Description: "Gyrostat Absolute Return Income Equity",
    },
    HAM0002AU: {
      Description: "Herschel Australian Equities Trust",
    },
    HBC0008AU: {
      Description: "SG Hiscock Property Opportunities",
    },
    HBC0011AU: {
      Description: "Merlon Australian Share Income",
    },
    HFL0014AU: {
      Description: "Ironbark Gavekal Asian Opportunities",
    },
    HFL0104AU: {
      Description: "Ironbark LHP Diversified Investments",
    },
    HFL0106AU: {
      Description: "Ironbark LHP Global Long/Short R",
    },
    HFL0108AU: {
      Description: "Ironbark LHP Global Long/Short W",
    },
    HGI0004AU: {
      Description: "Janus Henderson Glb Fixed Intst Ttl Ret",
    },
    HGI0005AU: {
      Description: "Janus Henderson Glb Equity Income Fund",
    },
    HGI4648AU: {
      Description: "Janus Henderson Global Multi-Strategy",
    },
    HHA0001AU: {
      Description: "Pengana Australian Equities Income",
    },
    HHA0002AU: {
      Description: "Pengana International Ethical Opp",
    },
    HHA0007AU: {
      Description: "Pengana WHEB Sustainable Impact",
    },
    HHA0017AU: {
      Description: "Wisdom Australian Equities",
    },
    HHA0020AU: {
      Description: "Pengana High Conviction Equities",
    },
    HLN0003AU: {
      Description: "Hamilton Investment Fd-Multi Asset Port",
    },
    HLR0001AU: {
      Description: "Experts' Choice Diversified Interest Inc",
    },
    HLR0002AU: {
      Description: "Experts' Choice Australian Shares",
    },
    HLR0003AU: {
      Description: "Experts' Choice Balanced",
    },
    HLR0004AU: {
      Description: "Experts' Choice Conservative",
    },
    HLR0005AU: {
      Description: "Experts' Choice Growth",
    },
    HLR0006AU: {
      Description: "Experts' Choice International Shares",
    },
    HLR0007AU: {
      Description: "Experts' Choice Short Term Money Market",
    },
    HLR0022AU: {
      Description: "Experts' Choice Property and Infras",
    },
    HLR0023AU: {
      Description: "Experts' Choice Small Companies",
    },
    HML0002AU: {
      Description: "OnePath OA IP-OP Monthly Income",
    },
    HML0010AU: {
      Description: "OnePath OA IP-ING Heine Property Sec",
    },
    HML0011AU: {
      Description: "OnePath OA IP-OP Income Plus EF",
    },
    HML0016AU: {
      Description: "UBS Clarion Global Property SecuritiesFd",
    },
    HOW0001NZ: {
      Description: "Bentham Global Income Fund NZD",
    },
    HOW0002AU: {
      Description: "Pengana International Ethical",
    },
    HOW0002NZ: {
      Description: "Bentham Wholesale Syndicated Loan NZD",
    },
    HOW0016AU: {
      Description: "NovaPort Smaller Companies",
    },
    HOW0017AU: {
      Description: "NovaPort Smaller Companies Class B",
    },
    HOW0018AU: {
      Description: "NovaPort Smaller Companies Class I",
    },
    HOW0019AU: {
      Description: "Alphinity Australian Equity",
    },
    HOW0020AU: {
      Description: "WaveStone Australian Share",
    },
    HOW0026AU: {
      Description: "Alphinity Concentrated Australian Share",
    },
    HOW0027AU: {
      Description: "NovaPort Microcap",
    },
    HOW0034AU: {
      Description: "Greencape Broadcap",
    },
    HOW0035AU: {
      Description: "Greencape High Conviction",
    },
    HOW0052AU: {
      Description: "Kapstream Absolute Return Income",
    },
    HOW0053AU: {
      Description: "WaveStone Dynamic Australian Equity",
    },
    HOW0062AU: {
      Description: "Ardea Australian Inflation Linked Bond",
    },
    HOW0096AU: {
      Description: "Challenger Guaranteed Pen - 30 June 2021",
    },
    HOW0098AU: {
      Description: "Ardea Real Outcome Fund",
    },
    HOW0121AU: {
      Description: "Alphinity Sustainable Share",
    },
    HOW0122AU: {
      Description: "Alphinity Australian Share Class B",
    },
    HOW0158AU: {
      Description: "Greencape Broadcap Class P",
    },
    HOW0162AU: {
      Description: "Ardea Real Outcome Plus",
    },
    HOW0164AU: {
      Description: "Alphinity Global Equity",
    },
    HOW0165AU: {
      Description: "Kapstream Absolute Return Income Class I",
    },
    HOW1289AU: {
      Description: "Lennox Australian Microcap Fund",
    },
    HOW2852AU: {
      Description: "Bentham Asset Backed Securities I",
    },
    HOW2967AU: {
      Description: "Eiger Australian Small Companies",
    },
    HOW3590AU: {
      Description: "Lennox Australian Small Companies",
    },
    HOW4476AU: {
      Description: "Ares Global Credit Income A",
    },
    HOW5500AU: {
      Description: "Challenger Investment Ptnrs Crdt Inc Fd",
    },
    HOW5722AU: {
      Description: "Bentham Global Opportunities F",
    },
    HOW6060AU: {
      Description: "WaveStone Australian Share I",
    },
    HOW7031AU: {
      Description: "Bentham Global Opportunities I",
    },
    HOW7305AU: {
      Description: "Whitehelm Capital Listed Core Infras UnH",
    },
    HOW8209AU: {
      Description: "Challenger Invmt Ptnrs Crdt Inc P",
    },
    HOW8743AU: {
      Description: "Kapstream Absolute Return Income Plus I",
    },
    HOW9187AU: {
      Description: "Avenir Global",
    },
    HTH0015AU: {
      Description: "Heathley Direct Medical Fund No. 1",
    },
    HTH0020AU: {
      Description: "Heathley Aged Care Property Fund No. 1",
    },
    HTH2279AU: {
      Description: "Heathley Direct Medical Fund No. 2",
    },
    IAM0004AU: {
      Description: "Loomis Sayles Credit Opportunities",
    },
    IAM0006AU: {
      Description: "Loomis Sayles Senior Floating Rate Loan",
    },
    IML0001AU: {
      Description: "Investors Mutual WS Aus Smaller Co",
    },
    IML0002AU: {
      Description: "Investors Mutual WS Australian Share",
    },
    IML0003AU: {
      Description: "Investors Mutual WS Future Leaders",
    },
    IML0004AU: {
      Description: "Investors Mutual All Industrials Share",
    },
    IML0005AU: {
      Description: "Investors Mutual Equity Income",
    },
    IML0006AU: {
      Description: "Investors Mutual Small Cap",
    },
    IML0010AU: {
      Description: "Investors Mutual Concentrated Aus Share",
    },
    IML0341AU: {
      Description: "Loomis Sayles Global Equity",
    },
    IML2681AU: {
      Description: "Investors Mutual Private Portfolio",
    },
    INT0001AU: {
      Description: "Morningstar Australian Bonds Z",
    },
    INT0002AU: {
      Description: "Morningstar Australian Shares Fund Z",
    },
    INT0005AU: {
      Description: "Morningstar Balanced Real Return Fund Z",
    },
    INT0006AU: {
      Description: "Morningstar Cash Z",
    },
    INT0008AU: {
      Description: "Morningstar Moderate Real Ret Fd - Cl Z",
    },
    INT0010AU: {
      Description: "Morningstar Growth Real Return Fd - Cl Z",
    },
    INT0011AU: {
      Description: "Morningstar Multi Asset Rl Ret Fd - Cl Z",
    },
    INT0012AU: {
      Description: "Morningstar High Growth Rl Ret Fd - Cl Z",
    },
    INT0016AU: {
      Description: "Morningstar International Shares Hdgd Z",
    },
    INT0017AU: {
      Description: "Morningstar International Shares Unhdg Z",
    },
    INT0021AU: {
      Description: "Morningstar Australian Bonds B",
    },
    INT0022AU: {
      Description: "Morningstar Australian Shares Fund A",
    },
    INT0023AU: {
      Description: "Morningstar Australian Shares Fund B",
    },
    INT0026AU: {
      Description: "Morningstar Balanced Fund - Class A",
    },
    INT0028AU: {
      Description: "Morningstar Balanced Real Return Fund A",
    },
    INT0029AU: {
      Description: "Morningstar Balanced Real Return Fund B",
    },
    INT0030AU: {
      Description: "Morningstar Cash Fund - Class A",
    },
    INT0032AU: {
      Description: "Morningstar Moderate Fund - Class A",
    },
    INT0034AU: {
      Description: "Morningstar Moderate Real Ret Fd - Cl A",
    },
    INT0035AU: {
      Description: "Morningstar Moderate Real Return Fund B",
    },
    INT0036AU: {
      Description: "Morningstar Growth Fund - Class A",
    },
    INT0038AU: {
      Description: "Morningstar Growth Real Return Fd - Cl A",
    },
    INT0039AU: {
      Description: "Morningstar Growth Real Return Fund B",
    },
    INT0040AU: {
      Description: "Morningstar Multi Asset Rl Ret Fd - Cl A",
    },
    INT0041AU: {
      Description: "Morningstar Multi Asset Rl Ret Fd - Cl B",
    },
    INT0042AU: {
      Description: "Morningstar High Growth Rl Ret Fd - Cl A",
    },
    INT0043AU: {
      Description: "Morningstar High Growth Real Return Fd B",
    },
    INT0050AU: {
      Description: "Morningstar Intl Shrs (Hdg) Fd - Cl A",
    },
    INT0051AU: {
      Description: "Morningstar Intl Shrs (Hdg) Fd - Cl B",
    },
    INT0052AU: {
      Description: "Morningstar Intl Shrs (Unhdgd) Fd - Cl A",
    },
    INT0053AU: {
      Description: "Morningstar Intl Shrs (Unhdgd) Fd - Cl B",
    },
    INT0056AU: {
      Description: "Morningstar Conservative Fund - Class A",
    },
    INT0077AU: {
      Description: "Morningstar Glb Prpty Secs (Hdg) Fd-Cl A",
    },
    INT0078AU: {
      Description: "Morningstar Glb Prpty Secs (Hdg) Fd-Cl B",
    },
    INT0079AU: {
      Description: "Morningstar Glb Prpty Secs (Hdg) Fd-Cl Z",
    },
    INT0080AU: {
      Description: "Morningstar Intl Bds (Hdg) Fd - Cl A",
    },
    INT0082AU: {
      Description: "Morningstar International Bonds Hdgd Z",
    },
    INT4623AU: {
      Description: "Morningstar Global Shares Z",
    },
    INV1488AU: {
      Description: "Ninety One Aust Fds Emerging Mkts Eq I",
    },
    INV4233AU: {
      Description: "Ninety One Aust Fds Emerging Mkts Eq J",
    },
    IOF0013AU: {
      Description: "IOOF/Perennial Flex Balanced",
    },
    IOF0015AU: {
      Description: "IOOF/Perennial Flex Growth Shares",
    },
    IOF0044AU: {
      Description: "Resolution Capital Core Plus Prp Sec II",
    },
    IOF0045AU: {
      Description: "Antipodes Global Fund - Class P",
    },
    IOF0046AU: {
      Description: "Janus Henderson Australian Fxd Intst",
    },
    IOF0047AU: {
      Description: "Janus Henderson Cash Enhanced",
    },
    IOF0078AU: {
      Description: "Perennial Value Shares for Income Trust",
    },
    IOF0080AU: {
      Description: "Antipodes Global Fund - Long I",
    },
    IOF0081AU: {
      Description: "Resolution Capital Global Prpt Secs II",
    },
    IOF0090AU: {
      Description: "IOOF MultiSeries 70",
    },
    IOF0091AU: {
      Description: "IOOF MultiMix Cash Enhanced Trust",
    },
    IOF0092AU: {
      Description: "IOOF MultiMix Australian Shares Trust",
    },
    IOF0093AU: {
      Description: "IOOF MultiMix Balanced Growth Trust",
    },
    IOF0094AU: {
      Description: "IOOF MultiMix Capital Stable Trust",
    },
    IOF0095AU: {
      Description: "IOOF MultiMix Conservative Trust",
    },
    IOF0096AU: {
      Description: "IOOF MultiMix Diversified Fixed Interest",
    },
    IOF0097AU: {
      Description: "IOOF MultiMix Growth Trust",
    },
    IOF0098AU: {
      Description: "IOOF MultiMix International Shares Trust",
    },
    IOF0107AU: {
      Description: "IOOF/Perennial Flex Balanced NEF",
    },
    IOF0111AU: {
      Description: "Janus Henderson Cash Enhanced Instl",
    },
    IOF0113AU: {
      Description: "Janus Henderson Australian Fxd IntstInst",
    },
    IOF0127AU: {
      Description: "Janus Henderson Diversified Credit",
    },
    IOF0141AU: {
      Description: "Janus Henderson Cash Institutional",
    },
    IOF0145AU: {
      Description: "Janus Henderson Tactical Income",
    },
    IOF0184AU: {
      Description: "Resolution Capital Glbl Ppty Secs UH SII",
    },
    IOF0200AU: {
      Description: "Perennial Value Australian Shares Trust",
    },
    IOF0203AU: {
      Description: "Antipodes Asia P",
    },
    IOF0206AU: {
      Description: "Perennial Value Shares Wholesale Trust",
    },
    IOF0212AU: {
      Description: "IOOF/Perennial Flex Value Shares",
    },
    IOF0214AU: {
      Description: "Perennial Value Smaller Companies Trust",
    },
    IOF0228AU: {
      Description: "Perennial Value Wealth Defender Aust Shr",
    },
    IOF0232AU: {
      Description: "IOOF Balanced Investor Trust",
    },
    IOF0253AU: {
      Description: "IOOF MultiSeries 30",
    },
    IOF0254AU: {
      Description: "IOOF MultiSeries 50",
    },
    IOF0255AU: {
      Description: "IOOF MultiSeries 90",
    },
    IPA0011AU: {
      Description: "ipac Strat Inv Srv Inflation Plus 2",
    },
    IPA0012AU: {
      Description: "ipac Strat Inv Srv Inflation Plus 4",
    },
    IPA0013AU: {
      Description: "ipac Strat Inv Srv Inflation Plus 6",
    },
    IPA0034AU: {
      Description: "ipac Strat Inv Srv Inflation Plus 7",
    },
    IPA0046AU: {
      Description: "ipac Pathways 30",
    },
    IPA0047AU: {
      Description: "ipac Pathways 70",
    },
    IPA0048AU: {
      Description: "ipac Pathways 85",
    },
    IPA0049AU: {
      Description: "ipac Pathways 95",
    },
    IPA0050AU: {
      Description: "ipac Pathways Aust Prop Securities",
    },
    IPA0051AU: {
      Description: "ipac Pathways Australian Shares",
    },
    IPA0052AU: {
      Description: "ipac Pathways Intl Shares - Hedged",
    },
    IPA0053AU: {
      Description: "ipac Pathways Intl Shares - Unhedged",
    },
    IPA0054AU: {
      Description: "ipac Classic Value Portfolio",
    },
    IPA0055AU: {
      Description: "ipac Diversified Investment Strategy 5",
    },
    IPA0056AU: {
      Description: "ipac Pathways Value",
    },
    IPA0057AU: {
      Description: "North Professional Alternative Balanced",
    },
    IPA0061AU: {
      Description: "AMP Gen-Alternative Balanced Fund",
    },
    IPA0067AU: {
      Description: "North Multi Manager Balanced",
    },
    IPA0068AU: {
      Description: "North Multi Manager Active Defensive",
    },
    IPA0069AU: {
      Description: "North Multi Manager Active Growth",
    },
    IPA0070AU: {
      Description: "North Multi Manager Active High Growth",
    },
    IPA0071AU: {
      Description: "North Multi Manager Active Moderately De",
    },
    IPA0072AU: {
      Description: "ipac-Classic Enhanced Growth Portfolio",
    },
    IPA0074AU: {
      Description: "Summit Select Income Generator",
    },
    IPA0075AU: {
      Description: "North Select Income Generator",
    },
    IPA0076AU: {
      Description: "IPAC Income Generator",
    },
    IPA0077AU: {
      Description: "North Professional Balanced",
    },
    IPA0078AU: {
      Description: "North Professional Growth",
    },
    IPA0079AU: {
      Description: "North Professional High Growth",
    },
    IPA0080AU: {
      Description: "North Professional Moderately Cnsrv",
    },
    IPA0115AU: {
      Description: "ipac Diversified Investment Strategy 2",
    },
    IPA0116AU: {
      Description: "ipac Diversified Investment Strategy 3",
    },
    IPA0117AU: {
      Description: "ipac Classic Portfolio 1",
    },
    IPA0118AU: {
      Description: "ipac Classic Portfolio 2",
    },
    IPA0119AU: {
      Description: "ipac Classic Portfolio 3",
    },
    IPA0123AU: {
      Description: "ipac Diversified Investment Strategy 1",
    },
    IPA0124AU: {
      Description: "ipac Diversified Investment Strategy 4",
    },
    IPA0142AU: {
      Description: "Ipac Select Income Generator",
    },
    IPA0143AU: {
      Description: "Ipac Select Index Defensive",
    },
    IPA0144AU: {
      Description: "Ipac Select Index High Growth",
    },
    IPA0145AU: {
      Description: "Ipac Select Index Growth",
    },
    IPA0146AU: {
      Description: "Ipac Select Index Balanced",
    },
    IPA0147AU: {
      Description: "Ipac Select Index Moderately Defensive",
    },
    IPA0148AU: {
      Description: "ipac Alternative Balanced",
    },
    IPA0153AU: {
      Description: "ipac life choices Active 100",
    },
    IPA0154AU: {
      Description: "ipac life choices Active 85",
    },
    IPA0155AU: {
      Description: "ipac life choices Active 70",
    },
    IPA0156AU: {
      Description: "ipac life choices Active 50",
    },
    IPA0157AU: {
      Description: "ipac life choices Alternative Balanced",
    },
    IPA0158AU: {
      Description: "ipac life choices Income Generator",
    },
    IPA0159AU: {
      Description: "ipac life choices Index 70",
    },
    IPA0160AU: {
      Description: "ipac life choices Index 50",
    },
    IPA0161AU: {
      Description: "ipac life choices Index 85",
    },
    IPA0162AU: {
      Description: "ipac life choices Premium Growth",
    },
    IPA0167AU: {
      Description: "North Guardian Balanced",
    },
    IPA0168AU: {
      Description: "North Guardian Growth",
    },
    IPA0169AU: {
      Description: "North Guardian Moderately Defensive",
    },
    IPA0173AU: {
      Description: "AMP Capital Income Generator H",
    },
    IPA0174AU: {
      Description: "AMP Capital Income Generator",
    },
    IPA0176AU: {
      Description: "North Professional Conservative",
    },
    IPA0178AU: {
      Description: "AMP Capital Premium Growth",
    },
    IPA0180AU: {
      Description: "MyNorth Index Defensive",
    },
    IPA0181AU: {
      Description: "MyNorth Index Moderately Defensive",
    },
    IPA0182AU: {
      Description: "MyNorth Index Balanced",
    },
    IPA0183AU: {
      Description: "MyNorth Index Growth",
    },
    IPA0184AU: {
      Description: "MyNorth Index High Growth",
    },
    IVS9571AU: {
      Description: "InvestSmart Australian Small Coms Fd",
    },
    JBM2867AU: {
      Description: "JB High Alpha",
    },
    JBM7543AU: {
      Description: "JB High Alpha Retail",
    },
    JBW0005AU: {
      Description: "Yarra Investment Fund",
    },
    JBW0007AU: {
      Description: "Yarra Emerging Leaders Fund (Direct)",
    },
    JBW0009AU: {
      Description: "Yarra Australian Equities Fund",
    },
    JBW0010AU: {
      Description: "Yarra Emerging Leaders Fund",
    },
    JBW0011AU: {
      Description: "Yarra Leaders Fund",
    },
    JBW0016AU: {
      Description: "Yarra Income Plus Fund",
    },
    JBW0018AU: {
      Description: "Yarra Enhanced Income Fund",
    },
    JBW0030AU: {
      Description: "Yarra Australian Real Assets Secs Fund",
    },
    JBW0049AU: {
      Description: "Yarra A$ Cash Reserves I Class",
    },
    JBW0052AU: {
      Description: "Yarra Ex-20 Australian Equities Fund",
    },
    JBW0103AU: {
      Description: "Yarra Global Small Companies Fund",
    },
    JBW0114AU: {
      Description: "Yarra Australian Equities Fund (Direct)",
    },
    JBW0118AU: {
      Description: "Yarra Enhanced Income Fund (Direct)",
    },
    JBW4379AU: {
      Description: "Yarra Absolute Credit",
    },
    JPM0008AU: {
      Description: "Legg Mason Martin Currie Divers Gr A",
    },
    JPM0100AU: {
      Description: "Legg Mason Western Asset Cash Plus Tr X",
    },
    KAM0100AU: {
      Description: "K2 Asian Absolute Return",
    },
    KAM0101AU: {
      Description: "K2 Australian Absolute Return",
    },
    KCL4613AU: {
      Description: "KC Diversified Income",
    },
    KTA0002AU: {
      Description: "Katana Australian Equity Fund",
    },
    LAM0042AU: {
      Description: "Freehold AREITs & Listed Infrastructure",
    },
    LAM0044AU: {
      Description: "Freehold Australian Property",
    },
    LAZ0002AU: {
      Description: "Lazard Global Small Cap I",
    },
    LAZ0003AU: {
      Description: "Lazard Emerging Markets Equity I",
    },
    LAZ0005AU: {
      Description: "Lazard Select Australian Equity I Cl",
    },
    LAZ0006AU: {
      Description: "Lazard Australian Equity I",
    },
    LAZ0010AU: {
      Description: "Lazard Australian Equity W",
    },
    LAZ0012AU: {
      Description: "Lazard Global Small Cap W",
    },
    LAZ0013AU: {
      Description: "Lazard Select Australian Equity W Cl",
    },
    LAZ0014AU: {
      Description: "Lazard Global Listed Infrastructure",
    },
    LAZ0022AU: {
      Description: "Lazard Defensive Australian Equity",
    },
    LAZ0023AU: {
      Description: "Lazard Emerging Markets Total Ret Debt",
    },
    LAZ0025AU: {
      Description: "Lazard Global Equity Franchise",
    },
    LAZ1240AU: {
      Description: "Lazard Global Managed Volatility AUD Inc",
    },
    LAZ2189AU: {
      Description: "Lazard Select Australian Equity S Cl",
    },
    LAZ7550AU: {
      Description: "Lazard Global Equity Franchise I",
    },
    LCP0001AU: {
      Description: "L1 Capital Australian Equities Fund",
    },
    LEF0027AU: {
      Description: "Optimix WS-Moderate Trust",
    },
    LEF0033AU: {
      Description: "Optimix Trusts-Australian Fixed Interest",
    },
    LEF0034AU: {
      Description: "Optimix Trusts-Australian Fixed Intr NE",
    },
    LEF0035AU: {
      Description: "Optimix Trusts-Moderate",
    },
    LEF0036AU: {
      Description: "Optimix Trusts-Moderate NE",
    },
    LEF0041AU: {
      Description: "Optimix WS-Australian Fixed Interest A",
    },
    LEF0042AU: {
      Description: "Optimix WS-Property Trust A",
    },
    LEF0043AU: {
      Description: "Optimix WS-Australian Share A",
    },
    LEF0044AU: {
      Description: "Optimix WS-Balanced A",
    },
    LEF0045AU: {
      Description: "Optimix WS-Conservative A",
    },
    LEF0047AU: {
      Description: "Optimix WS-Global Shares A",
    },
    LEF0048AU: {
      Description: "Optimix WS-Global Smaller Companies A",
    },
    LEF0049AU: {
      Description: "Optimix WS-Growth A",
    },
    LEF0050AU: {
      Description: "Optimix WS-High Growth A",
    },
    LEF0051AU: {
      Description: "Optimix WS-Moderate A",
    },
    LEF0100AU: {
      Description: "Optimix WS-High Growth",
    },
    LEF0101AU: {
      Description: "Optimix WS-Property Securities B",
    },
    LEF0102AU: {
      Description: "Optimix WS-Australian Share No.2",
    },
    LEF0103AU: {
      Description: "Optimix WS-Global Share",
    },
    LEF0104AU: {
      Description: "Optimix WS-Australian Fixed Int",
    },
    LEF0105AU: {
      Description: "Optimix WS-Enhanced Cash",
    },
    LEF0106AU: {
      Description: "Optimix WS-Growth",
    },
    LEF0107AU: {
      Description: "Optimix WS-Balanced",
    },
    LEF0108AU: {
      Description: "Optimix WS-Conservative",
    },
    LEF0117AU: {
      Description: "Optimix Trusts-Property Securities EF",
    },
    LEF0118AU: {
      Description: "Optimix Trusts-Australian Shares",
    },
    LEF0119AU: {
      Description: "Optimix Trusts-Balanced",
    },
    LEF0120AU: {
      Description: "Optimix Trusts-Conservative",
    },
    LEF0121AU: {
      Description: "Optimix Trusts-Enhanced Cash",
    },
    LEF0122AU: {
      Description: "Optimix Trusts-Growth",
    },
    LEF0123AU: {
      Description: "Optimix Trusts-High Growth",
    },
    LEF0124AU: {
      Description: "Optimix Trusts-Global Share",
    },
    LEF0141AU: {
      Description: "Optimix Trusts-Property Securities NE",
    },
    LEF0142AU: {
      Description: "Optimix Trusts-Australian Shares NE",
    },
    LEF0143AU: {
      Description: "Optimix Trusts-Balanced NE",
    },
    LEF0144AU: {
      Description: "Optimix Trusts-Conservative NE",
    },
    LEF0145AU: {
      Description: "Optimix Trusts-Enhanced Cash NE",
    },
    LEF0146AU: {
      Description: "Optimix Trusts-Growth NE",
    },
    LEF0147AU: {
      Description: "Optimix Trusts-High Growth NE",
    },
    LEF0148AU: {
      Description: "Optimix Trusts-Global Share NE",
    },
    LEF0173AU: {
      Description: "Optimix WS-Global Smaller Companies",
    },
    LEF0174AU: {
      Description: "Optimix Trusts-Global Smaller Co Share",
    },
    LEF0177AU: {
      Description: "Optimix Trusts-Global Smaller Co Shr NE",
    },
    LFS0001AU: {
      Description: "Life Settlements Wholesale",
    },
    LIF0018AU: {
      Description: "Lifeplan FlexiGrowth High Yield Option",
    },
    LMI0002AU: {
      Description: "LM Cash Performance",
    },
    LMI0004AU: {
      Description: "LM First Mortgage Income",
    },
    LMI0007AU: {
      Description: "LM WS First Mort Inc Flexi",
    },
    LMI0008AU: {
      Description: "LM WS First Mort Inc 12 Mth Fix",
    },
    LMI0183AU: {
      Description: "LM Australian Income CP AUD 1 Year",
    },
    LTC0001AU: {
      Description: "La Trobe Classic 48 Hour Account",
    },
    LTC0002AU: {
      Description: "La Trobe Financial 12 Month Term Account",
    },
    LTC9067AU: {
      Description: "La Trobe Australian Cr 90 Day Ntc Acnt",
    },
    MAA5944AU: {
      Description: "Moelis Australia Secured Loan Series B",
    },
    MAA7333AU: {
      Description: "Moelis Australia Secured Loan Series",
    },
    MAA8010AU: {
      Description: "Moelis Australia Fixed Income",
    },
    MAA8412AU: {
      Description: "Moelis Australia Private Credit",
    },
    MAL0017AU: {
      Description: "BlackRock P Invs Gbl Allocation Aus C",
    },
    MAL0018AU: {
      Description: "BlackRock Global Allocation Aus D",
    },
    MAL0029AU: {
      Description: "BlackRock Global Allocation Aus S",
    },
    MAN0002AU: {
      Description: "Man AHL Alpha (AUD)",
    },
    MAN0004AU: {
      Description: "Man Diversified Alternatives",
    },
    MAN0011CK: {
      Description: "Man Series 6 OM-IP 220 Limited",
    },
    MAN0012CK: {
      Description: "Man Series 7 OM-IP 220 Limited",
    },
    MAN0013CK: {
      Description: "Man Series 8 OM-IP 220 Limited",
    },
    MAN0017AU: {
      Description: "Man AHL Alpha (AUD) B",
    },
    MAN0019CK: {
      Description: "Man OM-IP 15seven Ltd",
    },
    MAN0029CK: {
      Description: "Man AHL Diversified (AUD)",
    },
    MAN0038CK: {
      Description: "Man AHL Gold (AUD)",
    },
    MAN0040CK: {
      Description: "Man OM-IP AHL 2010 Limited",
    },
    MAN0041CK: {
      Description: "Man OM-IP Global Limited",
    },
    MAQ0048AU: {
      Description: "Macquarie Balanced Growth",
    },
    MAQ0049AU: {
      Description: "Macquarie Capital Stable",
    },
    MAQ0052AU: {
      Description: "Macquarie Inflation Linked Bond",
    },
    MAQ0053AU: {
      Description: "Macquarie Active Plus Equities",
    },
    MAQ0054AU: {
      Description: "Macquarie Property Securities",
    },
    MAQ0055AU: {
      Description: "Macquarie Treasury",
    },
    MAQ0058AU: {
      Description: "Macquarie Master Balanced",
    },
    MAQ0059AU: {
      Description: "Macquarie Master Capital Stable",
    },
    MAQ0060AU: {
      Description: "Macquarie Term Cash",
    },
    MAQ0061AU: {
      Description: "Macquarie Australian Fixed Interest",
    },
    MAQ0063AU: {
      Description: "Macquarie Master Property Securities",
    },
    MAQ0079AU: {
      Description: "Arrowstreet Global Equity Hedged",
    },
    MAQ0085AU: {
      Description: "Macquarie Master Small Companies",
    },
    MAQ0088AU: {
      Description: "Macquarie Small Companies",
    },
    MAQ0100AU: {
      Description: "Macquarie Core Plus Australian Fxd Intr",
    },
    MAQ0107AU: {
      Description: "Macquarie Enhanced Aust Fixed Interest",
    },
    MAQ0177AU: {
      Description: "Macquarie Aus Pure Indexed Equities",
    },
    MAQ0178AU: {
      Description: "Macquarie Australian Enhanced Plus Eqs",
    },
    MAQ0179AU: {
      Description: "Macquarie Enhanced Property Securities",
    },
    MAQ0180AU: {
      Description: "Macquarie Master Enhanced Fixed Int",
    },
    MAQ0187AU: {
      Description: "Macquarie Master Cash",
    },
    MAQ0204AU: {
      Description: "Macquarie Australian Diversified Inc (A)",
    },
    MAQ0211AU: {
      Description: "Macquarie True Index Aust Fixed Interest",
    },
    MAQ0213AU: {
      Description: "Macquarie Wholesale Australian Equities",
    },
    MAQ0219AU: {
      Description: "Macquarie True Index Listed Property",
    },
    MAQ0266AU: {
      Description: "Macquarie Index Tracking Global Bond",
    },
    MAQ0267AU: {
      Description: "Macquarie Enhanced Global Bond",
    },
    MAQ0274AU: {
      Description: "Macquarie Dynamic Bond",
    },
    MAQ0277AU: {
      Description: "Macquarie Income Opportunities",
    },
    MAQ0278AU: {
      Description: "Macquarie Australian Equities",
    },
    MAQ0287AU: {
      Description: "Macquarie Wholesale Property Securities",
    },
    MAQ0288AU: {
      Description: "Macquarie True Index Australian Shares",
    },
    MAQ0310AU: {
      Description: "Macquarie Australian Diversified Inc AA",
    },
    MAQ0324AU: {
      Description: "Macquarie Global Income Opportunities Fd",
    },
    MAQ0353AU: {
      Description: "Macquarie Global Infrastructure Trust II",
    },
    MAQ0356AU: {
      Description: "Macquarie Global Infrastructure Tr II B",
    },
    MAQ0404AU: {
      Description: "IFP Global Franchise",
    },
    MAQ0410AU: {
      Description: "Walter Scott Global Equity",
    },
    MAQ0422AU: {
      Description: "Macquarie International Equities",
    },
    MAQ0432AU: {
      Description: "Macquarie International Infra Ses",
    },
    MAQ0433AU: {
      Description: "Charter Hall Direct Office",
    },
    MAQ0441AU: {
      Description: "Premium China",
    },
    MAQ0443AU: {
      Description: "Macquarie Australian Shares",
    },
    MAQ0446AU: {
      Description: "Macquarie Core Australian Fixed Interest",
    },
    MAQ0448AU: {
      Description: "Charter Hall Direct Office Wholesale",
    },
    MAQ0454AU: {
      Description: "Macquarie Australian Small Companies",
    },
    MAQ0459AU: {
      Description: "Macquarie Tax Effective Aust Shares",
    },
    MAQ0464AU: {
      Description: "Arrowstreet Global Equity",
    },
    MAQ0477AU: {
      Description: "Arrowstreet Emerging Markets",
    },
    MAQ0482AU: {
      Description: "Winton Global Alpha",
    },
    MAQ0557AU: {
      Description: "Walter Scott Global Equity Hedged",
    },
    MAQ0574AU: {
      Description: "Premium Asia Property",
    },
    MAQ0631AU: {
      Description: "IFP Global Franchise Fund (Hedged)",
    },
    MAQ0633AU: {
      Description: "Macquarie True Index International Eqs",
    },
    MAQ0635AU: {
      Description: "Premium Asia",
    },
    MAQ0636AU: {
      Description: "Macquarie True Index Sovereign Bond",
    },
    MAQ0640AU: {
      Description: "Macquarie Asia New Stars No.1",
    },
    MAQ0650AU: {
      Description: "Charter Hall Direct Office Ordinary",
    },
    MAQ0651AU: {
      Description: "Walter Scott Emerging Markets",
    },
    MAQ0782AU: {
      Description: "Premium Asia Income",
    },
    MAQ0787AU: {
      Description: "Macquarie Global Multi-Sector F/I Fund",
    },
    MAQ0789AU: {
      Description: "Macquarie True Index Cash Fund",
    },
    MAQ0815AU: {
      Description: "Charter Hall Direct Industrial Fund No.2",
    },
    MAQ0816AU: {
      Description: "Charter Hall Direct Industrial No.2 - W",
    },
    MAQ0825AU: {
      Description: "Macquarie Int Infrastructure Secs Unhdgd",
    },
    MAQ0829AU: {
      Description: "Hedged Index Global Infrastructure Secs",
    },
    MAQ0830AU: {
      Description: "Hedged Index Global Real Estate Secs",
    },
    MAQ0831AU: {
      Description: "True Index Global Infrastructure Secs",
    },
    MAQ0832AU: {
      Description: "Macquarie True Index Glbl Rel Est Secs",
    },
    MAQ0833AU: {
      Description: "Charter Hall Direct BW Trust",
    },
    MAQ0834AU: {
      Description: "Charter Hall Direct CDC Trust Ordinary",
    },
    MAQ0836AU: {
      Description: "Macquarie Diversified Equity Yield",
    },
    MAQ0837AU: {
      Description: "Macquarie True Index Emerging Markets",
    },
    MAQ0838AU: {
      Description: "Polaris Global Equity Fund",
    },
    MAQ0842AU: {
      Description: "Charter Hall Direct Office Wholesale A",
    },
    MAQ0844AU: {
      Description: "Charter Hall Direct Industrial No.3 W",
    },
    MAQ0845AU: {
      Description: "Charter Hall Direct Industrial No.3 Ord",
    },
    MAQ0851AU: {
      Description: "Charter Hall Direct Automotive Trust Ord",
    },
    MAQ0853AU: {
      Description: "Charter Hall Direct Automotive No.2",
    },
    MAQ0854AU: {
      Description: "Charter Hall Direct Industrial No.4",
    },
    MAQ2806AU: {
      Description: "Polaris Global Equity (Hedged)",
    },
    MAQ3060AU: {
      Description: "IFP Global Franchise Fund II",
    },
    MAQ3069AU: {
      Description: "Macquarie Multi-Asset Opportunities",
    },
    MAQ5143AU: {
      Description: "P/E Global FX Alpha Fund",
    },
    MAQ5318AU: {
      Description: "IPM Global Macro 50",
    },
    MAQ5378AU: {
      Description: "Arrowstreet Global Equity No 1",
    },
    MAQ5703AU: {
      Description: "Charter Hall Direct Dvrs Cnsmr Staples",
    },
    MAQ5880AU: {
      Description: "Charter Hall Direct PFA Fund",
    },
    MAQ7203AU: {
      Description: "Macquarie Australian Emerging Companies",
    },
    MAQ7578AU: {
      Description: "Macquarie Professional Series Glb Alts",
    },
    MAQ8243AU: {
      Description: "IPM Global Macro Fund",
    },
    MAQ8743AU: {
      Description: "Arrowstreet Global Equity No.2 Class I",
    },
    MAQ9419AU: {
      Description: "Macquarie Diversified Growth",
    },
    MAQ9692AU: {
      Description: "Walter Scott Global Equity No 1",
    },
    MCK0005AU: {
      Description: "AIMS Commercial Mortgage Wholesale",
    },
    MCK0008AU: {
      Description: "AIMS Commercial Mortgage Ord Units",
    },
    MER0001AU: {
      Description: "Merricks Capital Partners",
    },
    MFM0001AU: {
      Description: "MPG Retail Brands Property Trust",
    },
    MFM0003AU: {
      Description: "MPG Seaford Meadows Property Trust",
    },
    MGC0001AU: {
      Description: "Melling Capital Dynamic Volatility",
    },
    MGE0001AU: {
      Description: "Magellan Global",
    },
    MGE0002AU: {
      Description: "Magellan Infrastructure",
    },
    MGE0005AU: {
      Description: "Magellan High Conviction",
    },
    MGE0006AU: {
      Description: "Magellan Infrastructure (Unhedged)",
    },
    MGE0007AU: {
      Description: "Magellan Global (Hedged)",
    },
    MGE9705AU: {
      Description: "Airlie Australian Share",
    },
    MGE9885AU: {
      Description: "Magellan High Conviction - B",
    },
    MGL0004AU: {
      Description: "Ironbark Royal London ConcentratedGlbShr",
    },
    MGL0010AU: {
      Description: "Ironbark Global (ex-Aus) Property Secs",
    },
    MGL0011AU: {
      Description: "Ironbark Global Property Securities",
    },
    MGL0018AU: {
      Description: "Ironbark Copper Rock Global All Cap Shr",
    },
    MGL0019AU: {
      Description: "Ironbark Copper Rock Emerging Mkts Opps",
    },
    MGL0114AU: {
      Description: "Aberdeen Std Australian Eqs Fd",
    },
    MGM0001AU: {
      Description: "Montaka Global",
    },
    MIA0001AU: {
      Description: "MFS Global Equity Trust",
    },
    MIC0001AU: {
      Description: "Microequities Deep Value",
    },
    MIC0002AU: {
      Description: "Microequities High Income Value Microcap",
    },
    MIC0003AU: {
      Description: "Microequities Global Value Microcap",
    },
    MIC0004AU: {
      Description: "Microequities Emerging Companies Value",
    },
    MIC5676AU: {
      Description: "Microequities Pure Microcap Value",
    },
    MIL0002AU: {
      Description: "Merrill-Instreet Reliance Global Alloc",
    },
    MIL0003AU: {
      Description: "Merrill-Instreet Reliance Commodities",
    },
    MIN0006AU: {
      Description: "Mercer Australian Shares",
    },
    MIN0007AU: {
      Description: "Mercer Australian Small Companies",
    },
    MIN0008AU: {
      Description: "Mercer Cash Fund - Cash Units",
    },
    MIN0009AU: {
      Description: "Mercer Conservative Growth",
    },
    MIN0012AU: {
      Description: "Mercer High Growth",
    },
    MIN0013AU: {
      Description: "Mercer Growth",
    },
    MIN0014AU: {
      Description: "Mercer Moderate Growth",
    },
    MIN0015AU: {
      Description: "Mercer International Shares Fund",
    },
    MIN0016AU: {
      Description: "Mercer Hedged International Shares Fund",
    },
    MIN0017AU: {
      Description: "Mercer Global Small Companies SharesFund",
    },
    MIN0019AU: {
      Description: "Mercer Diversified Shares Fund",
    },
    MIN0020AU: {
      Description: "Mercer Australian Shares Plus",
    },
    MIN0023AU: {
      Description: "Mercer Global Listed Property Fund",
    },
    MIN0026AU: {
      Description: "Mercer Diversified Alternatives",
    },
    MIN0028AU: {
      Description: "Mercer Global Sovereign Bond Fund",
    },
    MIN0029AU: {
      Description: "Mercer Australian Listed Property",
    },
    MIN0030AU: {
      Description: "Mercer Australian Sovereign Bond Fund",
    },
    MIN0031AU: {
      Description: "Mercer Australian Inflation Plus",
    },
    MIN0032AU: {
      Description: "Mercer Global Credit Fund",
    },
    MIN0033AU: {
      Description: "Mercer Global Listed Infrastructure",
    },
    MIN0037AU: {
      Description: "Mercer Emerging Markets Shares Fund",
    },
    MIN0045AU: {
      Description: "Mercer Socially Resp Australian",
    },
    MIN0046AU: {
      Description: "Mercer Cash Fund - Term Deposit Units",
    },
    MIN0082AU: {
      Description: "Mercer Emerging Markets Debt",
    },
    MIN0087AU: {
      Description: "Mercer Australian Shrs for Tax Exmpt Inv",
    },
    MLC0011AU: {
      Description: "MLC UT/MKey InvSer Cash",
    },
    MLC0013AU: {
      Description: "MLC UT/MKey InvSer Prop Securities",
    },
    MLC0014AU: {
      Description: "MLC UT/MKey InvSer MLC - Vanguard Sh Ind",
    },
    MLC0015AU: {
      Description: "MLC UT/MKey InvSer Australian Share",
    },
    MLC0017AU: {
      Description: "MLC UT/MKey InvSer Global Share",
    },
    MLC0021AU: {
      Description: "MLC UT/MKey InvSer Horizon 2 - Income",
    },
    MLC0023AU: {
      Description: "MLC UT/MKey InvSer Horizon 4 - Balanced",
    },
    MLC0024AU: {
      Description: "MLC UT/MKey InvSerHorizon 5 - Growth",
    },
    MLC0060AU: {
      Description: "MLC UT/MKey InvSer Platinum Global",
    },
    MLC0097AU: {
      Description: "MLC UT/MKey InvSer Income Builder",
    },
    MLC0260AU: {
      Description: "MLC Wholesale Horizon 4 Balanced",
    },
    MLC0261AU: {
      Description: "MLC Wholesale Global Share",
    },
    MLC0262AU: {
      Description: "MLC Wholesale Australian Share",
    },
    MLC0263AU: {
      Description: "MLC Wholesale Property Securities",
    },
    MLC0264AU: {
      Description: "MLC Wholesale IncomeBuilderTM",
    },
    MLC0265AU: {
      Description: "MLC Wholesale Horizon 5 Growth Portfolio",
    },
    MLC0393AU: {
      Description: "MLC UT/MKey InvSer Horizon 3-Conserv Gr",
    },
    MLC0394AU: {
      Description: "MLC UT/MKey InvSer Horizon 6 - Shares",
    },
    MLC0397AU: {
      Description: "MLC Wholesale Horizon 6 Share Portfolio",
    },
    MLC0398AU: {
      Description: "MLC Wholesale Horizon 3 Conservative Gr",
    },
    MLC0448AU: {
      Description: "MLC UT/MKey InvSerT Horizon 7 - Acc Gr",
    },
    MLC0449AU: {
      Description: "MLC Wholesale Horizon 7 Accelerated Gr",
    },
    MLC0667AU: {
      Description: "MLC WS Inflation Plus - Assertive",
    },
    MLC0668AU: {
      Description: "MLC Inflation Plus Assertive Portfolio B",
    },
    MLC0669AU: {
      Description: "MLC Wholesale Horizon 1 Bond Portfolio",
    },
    MLC0670AU: {
      Description: "MLC Wholesale Horizon 2 Income Portfolio",
    },
    MLC0768AU: {
      Description: "PIC Wholesale Australian Share",
    },
    MLC0771AU: {
      Description: "PIC Wholesale Global Share",
    },
    MLC0774AU: {
      Description: "PIC Wholesale 0/100 Portfolio",
    },
    MLC0775AU: {
      Description: "PIC Wholesale 30/70 Portfolio",
    },
    MLC0776AU: {
      Description: "PIC Wholesale 50/50 Portfolio",
    },
    MLC0777AU: {
      Description: "PIC Wholesale 70/30 Portfolio",
    },
    MLC0778AU: {
      Description: "PIC Wholesale 85/15 Portfolio",
    },
    MLC0779AU: {
      Description: "PIC Wholesale 100/0 Portfolio",
    },
    MLC0780AU: {
      Description: "PIC Wholesale 130/0 Portfolio",
    },
    MLC0781AU: {
      Description: "PIC Wholesale Income Builder",
    },
    MLC0782AU: {
      Description: "PIC Wholesale Inflation Plus-Assrtv Port",
    },
    MLC0783AU: {
      Description: "PIC Wholesale Property Securities",
    },
    MLC0784AU: {
      Description: "MLC UT/MKey InvSer Global Property",
    },
    MLC0786AU: {
      Description: "MLC Wholesale Global Property A",
    },
    MLC0788AU: {
      Description: "PIC Wholesale Global Property",
    },
    MLC0839AU: {
      Description: "MLC Wholesale Diversified Debt A",
    },
    MLC0840AU: {
      Description: "PIC Wholesale Diversified Debt",
    },
    MLC0855AU: {
      Description: "MLC UT/MKey InvSerT Diversified Debt",
    },
    MLC0893AU: {
      Description: "MLC Wholesale Australian Share Index",
    },
    MLC0920AU: {
      Description: "MLC WS Inflation Plus - Moderate",
    },
    MLC0921AU: {
      Description: "MLC WS Inflation Plus - Conservative",
    },
    MLC0923AU: {
      Description: "PIC Wholesale Inflation Plus - Moderate",
    },
    MLC0924AU: {
      Description: "PIC Wholesale Inflation Plus - Conserv",
    },
    MLC1460AU: {
      Description: "JANA High Alpha Global Share Trust",
    },
    MLC2457AU: {
      Description: "JANA High Alpha Glbl Shr Tr with Ccy Hdg",
    },
    MLC3634AU: {
      Description: "JANA High Alpha Australian Share Trust",
    },
    MLC4447AU: {
      Description: "PIC WS Index Plus Balanced Portfolio",
    },
    MLC4466AU: {
      Description: "JANA Moderate Trust",
    },
    MLC5068AU: {
      Description: "PIC WS Index Plus Conservative Gr Port",
    },
    MLC7387AU: {
      Description: "MLC WS Index Plus Balanced Portfolio",
    },
    MLC7849AU: {
      Description: "MLC WS Index Plus Conservative Gr Port",
    },
    MLC8225AU: {
      Description: "PIC WS Index Plus Growth Portfolio",
    },
    MLC9748AU: {
      Description: "MLC WS Index Plus Growth Portfolio",
    },
    MLT0010AU: {
      Description: "Challenger GIF 4.00 cents pa 30 Sep 2022",
    },
    MLT0361AU: {
      Description: "Challenger GIF 1.70 cents pa 30 Apr 2021",
    },
    MLT2940AU: {
      Description: "Challenger GIF 2.08 cents pa 28 Feb 2021",
    },
    MLT5126AU: {
      Description: "Challenger Guaranteed Pen - 31 Dec 2023",
    },
    MLT5528AU: {
      Description: "Challenger GIF 2.35 cents pa 31 Aug 2024",
    },
    MLT5897AU: {
      Description: "Challenger GIF 2.03 cents pa 30 Sep 2023",
    },
    MLT9335AU: {
      Description: "Challenger GIF 3.40 cents pa 31 Mar 2021",
    },
    MMC0102AU: {
      Description: "Specialist Diversified Fixed Interest",
    },
    MMC0110AU: {
      Description: "Loftus Peak Global Disruption",
    },
    MMF0006AU: {
      Description: "OnePath OA IP-OP Mortgage Tr No. 2",
    },
    MMF0012AU: {
      Description: "OnePath OA IP-OP Blue Chip Imput EF",
    },
    MMF0013AU: {
      Description: "OnePath OA IP-OP Emerging Companies EF",
    },
    MMF0014AU: {
      Description: "OnePath OA IP-OP Active Growth EF",
    },
    MMF0069AU: {
      Description: "OnePath OA IP-OP Australian Shr EF",
    },
    MMF0070AU: {
      Description: "OnePath OA IP-OP Australian Share NE",
    },
    MMF0071AU: {
      Description: "OnePath OA IP-OP Balanced EF",
    },
    MMF0072AU: {
      Description: "OnePath OA IP-OP Balanced NE",
    },
    MMF0073AU: {
      Description: "OnePath OA IP-OP Blue Chip Imput NE",
    },
    MMF0074AU: {
      Description: "OnePath OA IP-OP Emerging Companies NE",
    },
    MMF0076AU: {
      Description: "OnePath OA IP-OP Active Growth NE",
    },
    MMF0106AU: {
      Description: "OnePath OA IP-OP Tax Effective Inc NE",
    },
    MMF0107AU: {
      Description: "OnePath OA IP-OP Property Securities EF",
    },
    MMF0108AU: {
      Description: "OnePath OA IP-OP Global Share EF",
    },
    MMF0110AU: {
      Description: "OnePath OA IP-OP Property Securities NE",
    },
    MMF0111AU: {
      Description: "OnePath OA IP-OP Global Share NE",
    },
    MMF0112AU: {
      Description: "OnePath WS-Emerging Companies",
    },
    MMF0114AU: {
      Description: "OnePath WS-Capital Stable Trust",
    },
    MMF0115AU: {
      Description: "OnePath WS-Managed Growth",
    },
    MMF0262AU: {
      Description: "OnePath OA IP-MFS Global Equity EF",
    },
    MMF0265AU: {
      Description: "OnePath OA IP-OP Global Emg Mkt Shr EF",
    },
    MMF0266AU: {
      Description: "OnePath OA IP-Antpds Glbl(Lg only)EF/Sel",
    },
    MMF0267AU: {
      Description: "OnePath OA IP-MFS Global Equity NE",
    },
    MMF0270AU: {
      Description: "OnePath OA IP-OP Global Emg Mkt Shr NE",
    },
    MMF0271AU: {
      Description: "OnePath OA IP-Antpds Glbl (Lg only) NEF",
    },
    MMF0275AU: {
      Description: "OnePath WS-OP Global Emg Markets Shr",
    },
    MMF0335AU: {
      Description: "OnePath WS-Sustainable Inv Aus Shares",
    },
    MMF0339AU: {
      Description: "OnePath OA IP-OP High Growth EF",
    },
    MMF0340AU: {
      Description: "OnePath WS-Blue Chip Imputation Trust",
    },
    MMF0342AU: {
      Description: "OnePath WS-High Growth Trust",
    },
    MMF0388AU: {
      Description: "OnePath OA IP-OP High Growth NE",
    },
    MMF0394AU: {
      Description: "OnePath OA IP-OP Cash",
    },
    MMF0395AU: {
      Description: "OnePath OA IP-Vanguard Intl Shr Index EF",
    },
    MMF0396AU: {
      Description: "OnePath OA IP-CFS Imputation EF",
    },
    MMF0397AU: {
      Description: "OnePath Schroder Real Return Trust EF",
    },
    MMF0398AU: {
      Description: "OnePath OA IP-BlackRock Tact Gr EF",
    },
    MMF0399AU: {
      Description: "OnePath OA IP-Perpetual Australian Sh EF",
    },
    MMF0400AU: {
      Description: "OnePath OA IP-Magellan Global Tr EF/Sel",
    },
    MMF0405AU: {
      Description: "OnePath OA IP-Pendal Cor H Glb EF/Sel",
    },
    MMF0406AU: {
      Description: "OnePath OA IP-UBS Balanced EF",
    },
    MMF0408AU: {
      Description: "OnePath Arrowstreet Global Eq Hdg Tr EF",
    },
    MMF0410AU: {
      Description: "OnePath OA IP-Vanguard Intl Shr Index NE",
    },
    MMF0411AU: {
      Description: "OnePath OA IP-CFS Imputation NE",
    },
    MMF0412AU: {
      Description: "OnePath Schroder Real Return Trust NEF",
    },
    MMF0415AU: {
      Description: "OnePath OA IP-BlackRock Tact Gr NE",
    },
    MMF0416AU: {
      Description: "OnePath OA IP-Perpetual Australian Sh NE",
    },
    MMF0417AU: {
      Description: "OnePath OA IP-Magellan Global Trust NEF",
    },
    MMF0418AU: {
      Description: "OnePath OA IP-Pendal Cor H Glb NEF",
    },
    MMF0419AU: {
      Description: "OnePath OA IP-UBS Balanced NE",
    },
    MMF0421AU: {
      Description: "OnePath Arrowstreet Global Eq Hdg Tr NEF",
    },
    MMF0544AU: {
      Description: "OnePath OA IP-BlackRock Sci Div Gr EF",
    },
    MMF0545AU: {
      Description: "OnePath OA IP-BlackRock Sci Div Gr NE",
    },
    MMF0546AU: {
      Description: "OnePath OA IP-BlackRock Sci Intl Eq EF",
    },
    MMF0547AU: {
      Description: "OnePath OA IP-BlackRock Sci Intl Eq NE",
    },
    MMF0548AU: {
      Description: "OnePath OA IP-OP Capital Stable EF",
    },
    MMF0549AU: {
      Description: "OnePath OA IP-OP Capital Stable NE",
    },
    MMF0550AU: {
      Description: "OnePath OA IP-SG Hiscock Property-EF/Sel",
    },
    MMF0551AU: {
      Description: "OnePath OA IP-SG Hiscock Property-NEF",
    },
    MMF0552AU: {
      Description: "OnePath OA IP-OP Dvrs Crdt EF",
    },
    MMF0553AU: {
      Description: "OnePath OA IP-OP Dvrs Crdt NE",
    },
    MMF0554AU: {
      Description: "OnePath OA IP-OP Diversified Fix Int EF",
    },
    MMF0555AU: {
      Description: "OnePath OA IP-OP Diversified Fix Int NE",
    },
    MMF0556AU: {
      Description: "OnePath OA IP-OP Sust Inv Aus Share EF",
    },
    MMF0557AU: {
      Description: "OnePath OA IP-OP Sust Inv Aus Share NE",
    },
    MMF0558AU: {
      Description: "OnePath OA IP-IML Australian Share EF",
    },
    MMF0559AU: {
      Description: "OnePath OA IP-IML Australian Share NE",
    },
    MMF0560AU: {
      Description: "OnePath OA IP-OP Managed Growth EF",
    },
    MMF0561AU: {
      Description: "OnePath OA IP-OP Managed Growth NE",
    },
    MMF0562AU: {
      Description: "OnePath OA IP-Platinum International EF",
    },
    MMF0563AU: {
      Description: "OnePath OA IP-Platinum International NE",
    },
    MMF0564AU: {
      Description: "OnePath OA IP-Optimix Property Sec EF",
    },
    MMF0565AU: {
      Description: "OnePath OA IP-Optimix Property Sec NE",
    },
    MMF0566AU: {
      Description: "OnePath OA IP-Optimix Aus Fixed Int EF",
    },
    MMF0567AU: {
      Description: "OnePath OA IP-Optimix Aus Fixed Int NE",
    },
    MMF0568AU: {
      Description: "OnePath OA IP-Optimix Australian Shr EF",
    },
    MMF0569AU: {
      Description: "OnePath OA IP-Optimix Australian Shr NE",
    },
    MMF0570AU: {
      Description: "OnePath OA IP-Optimix Balanced EF",
    },
    MMF0571AU: {
      Description: "OnePath OA IP-Optimix Balanced NE",
    },
    MMF0572AU: {
      Description: "OnePath OA IP-Optimix Conservative EF",
    },
    MMF0573AU: {
      Description: "OnePath OA IP-Optimix Conservative NE",
    },
    MMF0574AU: {
      Description: "OnePath OA IP-Optimix Enhanced Cash EF",
    },
    MMF0575AU: {
      Description: "OnePath OA IP-Optimix Enhanced Cash NE",
    },
    MMF0576AU: {
      Description: "OnePath OA IP-Optimix Global Bal Shr EF",
    },
    MMF0577AU: {
      Description: "OnePath OA IP-Optimix Global Bal Shr NE",
    },
    MMF0578AU: {
      Description: "OnePath OA IP-Optimix Growth EF",
    },
    MMF0579AU: {
      Description: "OnePath OA IP-Optimix Growth NE",
    },
    MMF0580AU: {
      Description: "OnePath OA IP-Optimix High Growth EF",
    },
    MMF0581AU: {
      Description: "OnePath OA IP-Optimix High Growth NE",
    },
    MMF0582AU: {
      Description: "OnePath OA IP-Optimix Moderate EF",
    },
    MMF0583AU: {
      Description: "OnePath OA IP-Optimix Moderate NE",
    },
    MMF0584AU: {
      Description: "OnePath OA IP-Perpetual Balanced Gr EF",
    },
    MMF0585AU: {
      Description: "OnePath OA IP-Perpetual Balanced Gr NE",
    },
    MMF0586AU: {
      Description: "OnePath OA IP-Perpetual Cons Growth EF",
    },
    MMF0587AU: {
      Description: "OnePath OA IP-Perpetual Cons Growth NE",
    },
    MMF0588AU: {
      Description: "OnePath OA IP-Schroders Australian Eq EF",
    },
    MMF0589AU: {
      Description: "OnePath OA IP-Schroders Australian Eq NE",
    },
    MMF0590AU: {
      Description: "OnePath OA IP-Schroders Balanced EF",
    },
    MMF0591AU: {
      Description: "OnePath OA IP-Schroders Balanced NE",
    },
    MMF0592AU: {
      Description: "OnePath OA IP-OP Select Leaders EF",
    },
    MMF0593AU: {
      Description: "OnePath OA IP-OP Select Leaders NE",
    },
    MMF0594AU: {
      Description: "OnePath OA IP-UBS Defensive EF",
    },
    MMF0595AU: {
      Description: "OnePath OA IP-UBS Defensive NE",
    },
    MMF0596AU: {
      Description: "OnePath OA IP-UBS Diversified Fix Inc EF",
    },
    MMF0597AU: {
      Description: "OnePath OA IP-UBS Diversified Fix Inc NE",
    },
    MMF0598AU: {
      Description: "OnePath OA IP-Optimix Gbl Bal SmCo S2 EF",
    },
    MMF0599AU: {
      Description: "OnePath OA IP-Optimix Gbl Bal SmCo S2 NE",
    },
    MMF0700AU: {
      Description: "OnePath Tax Effective Income-WS",
    },
    MMF0708AU: {
      Description: "OnePath WS-Dvrs Crdt",
    },
    MMF0721AU: {
      Description: "OnePath OA IP-BlackRock Sci Aus Eq EF",
    },
    MMF0722AU: {
      Description: "OnePath OA IP-BlackRock Sci Aus Eq NE",
    },
    MMF0725AU: {
      Description: "OnePath OA IP-Pendal Smlr Coms EF",
    },
    MMF0726AU: {
      Description: "OnePath OA IP-Pendal Smlr Coms NE",
    },
    MMF0729AU: {
      Description: "OnePath OA IP-IOOF/Perennial Val Shr EF",
    },
    MMF0730AU: {
      Description: "OnePath OA IP-IOOF/Perennial Val Shr NE",
    },
    MMF0878AU: {
      Description: "OnePath OA IP-Ausbil Aus Emg Leaders NE",
    },
    MMF0880AU: {
      Description: "OnePath OA IP-CFS Global Credit Inc NE",
    },
    MMF0881AU: {
      Description: "OnePath OA IP-Bentham Global Income NE",
    },
    MMF0882AU: {
      Description: "OnePath OA IP-OP Income Plus NE",
    },
    MMF0883AU: {
      Description: "OnePath OA IP-Kapstream Abs Ret Inc NE",
    },
    MMF0884AU: {
      Description: "OnePath OA IP-Vangard Aus Shr Index NE",
    },
    MMF0885AU: {
      Description: "OnePath OA IP-Vangard Intl Sh Index H NE",
    },
    MMF0886AU: {
      Description: "OnePath OA IP-Vangard Prp Sec Index NE",
    },
    MMF0888AU: {
      Description: "OnePath OA IP-Ausbil Aus Emg Leaders EF",
    },
    MMF0890AU: {
      Description: "OnePath OA IP-CFS Global Credit Inc EF",
    },
    MMF0891AU: {
      Description: "OnePath OA IP-Bentham Global Income EF",
    },
    MMF0894AU: {
      Description: "OnePath OA IP- Kapstream Abs Ret Inc EF",
    },
    MMF0895AU: {
      Description: "OnePath OA IP-Vangard Aus Shr Index EF",
    },
    MMF0896AU: {
      Description: "OnePath OA IP-Vangard Intl Sh Index H EF",
    },
    MMF0897AU: {
      Description: "OnePath OA IP-Vangard Prp Sec Index EF",
    },
    MMF0983AU: {
      Description: "ANZ OA IP-OP Geared AusSh Id Tr EF/Sel",
    },
    MMF0984AU: {
      Description: "ANZ OA IP-OP Geared Aus Shrs Idx Tr NEF",
    },
    MMF0985AU: {
      Description: "OnePath OA IP Geared AusShr Id Tr EF/Sel",
    },
    MMF0986AU: {
      Description: "OnePath OA IP Geared Aus Shrs Idx Tr NEF",
    },
    MMF0987AU: {
      Description: "OptiMix Trust-Geared Aus Shrs Idx Tr EF",
    },
    MMF0988AU: {
      Description: "OptiMix Trust-Geared Aus Shrs Idx Tr NEF",
    },
    MMF0990AU: {
      Description: "OnePath WS Geared Aus Shrs Idx Tr B",
    },
    MMF1012AU: {
      Description: "ANZ OA IP-BlackRock AA Alpha EF",
    },
    MMF1013AU: {
      Description: "ANZ OA Inv-OP Glb Prpty Secs Idx EF/Sel",
    },
    MMF1032AU: {
      Description: "OnePath OA IP-Alternatives Growth EF",
    },
    MMF1033AU: {
      Description: "OnePath OA IP-OP Glb Prp Secs Idx EF/Sel",
    },
    MMF1036AU: {
      Description: "ANZ OA IP-BlackRock AA Alpha NE",
    },
    MMF1037AU: {
      Description: "ANZ OA Inv-OP Glb Prpty Secs Idx NEF",
    },
    MMF1040AU: {
      Description: "OnePath OA IP-Alternatives Growth NE",
    },
    MMF1041AU: {
      Description: "OnePath OA IP-OP Glb Prpty Secs Idx NEF",
    },
    MMF1057AU: {
      Description: "ANZ OA IP-ANZ Flexible Term Deposit EF",
    },
    MMF1058AU: {
      Description: "ANZ OA Inv-Perpetual Ethical SRI EF/Sel",
    },
    MMF1059AU: {
      Description: "ANZ OA Inv-Stwt Invs WldWd Sust EF/Sel",
    },
    MMF1060AU: {
      Description: "ANZ OA IP-Merlon Aus Share Income EF",
    },
    MMF1061AU: {
      Description: "ANZ OA Inv-Pendal Mly Inc Pl EF/Sel",
    },
    MMF1062AU: {
      Description: "ANZ OA IP-Optimix Gbl Emerging Mkts EF",
    },
    MMF1078AU: {
      Description: "OnePath OA IP-ANZ Flexible Term Dep NE",
    },
    MMF1079AU: {
      Description: "OnePath OA IP-Perpetual Ethcl SRI EF/Sel",
    },
    MMF1080AU: {
      Description: "OnePath OA IP-Stwt Invs WldWdSust EF/Sel",
    },
    MMF1081AU: {
      Description: "OnePath OA IP-Merlon Australian Share EF",
    },
    MMF1082AU: {
      Description: "OnePath OA IP-BT Mly Inc Pl EF/Sel",
    },
    MMF1083AU: {
      Description: "OnePath OA IP-Optimix Gbl Emg Mkt Shr EF",
    },
    MMF1099AU: {
      Description: "OnePath OA IP-ANZ Flexible Term Dep EF",
    },
    MMF1100AU: {
      Description: "OnePath OA IP-Perpetual Ethical SRI NEF",
    },
    MMF1101AU: {
      Description: "OnePath OA IP-Stwt Invs WldWd Sust NEF",
    },
    MMF1102AU: {
      Description: "OnePath OA IP-Merlon Australian Share NE",
    },
    MMF1103AU: {
      Description: "OnePath OA IP-Pendal Mly Inc Pl NEF",
    },
    MMF1104AU: {
      Description: "OnePath OA IP-Optimix Gbl Emg Mkt Shr NE",
    },
    MMF1120AU: {
      Description: "ANZ OA IP-ANZ Flexible Term Deposit NE",
    },
    MMF1121AU: {
      Description: "ANZ OA Inv-Perpetual Ethical SRI-DEF",
    },
    MMF1122AU: {
      Description: "ANZ OA Inv-Stwt Invs WldWd Sust DEF",
    },
    MMF1123AU: {
      Description: "ANZ OA IP-Merlon Aus Share Income NE",
    },
    MMF1124AU: {
      Description: "ANZ OA Inv-Pendal Mly Inc Pl-DEF",
    },
    MMF1125AU: {
      Description: "ANZ OA IP-Optimix Gbl Emerging Mkts NE",
    },
    MMF1145AU: {
      Description: "Optimix Trusts-Global Emg Mkt Share EF",
    },
    MMF1146AU: {
      Description: "Optimix Trusts-Global Emg Mkt Share NE",
    },
    MMF1157AU: {
      Description: "OnePath OA IP-Pendal Aus Shr EF",
    },
    MMF1158AU: {
      Description: "OnePath OA IP-Pendal Aus Shr NE",
    },
    MMF1163AU: {
      Description: "ANZ OA IP-Pendal Aus Shrs EF",
    },
    MMF1164AU: {
      Description: "ANZ OA IP-Pendal Aus Shrs NE",
    },
    MMF1169AU: {
      Description: "OnePath OA IP-Fidelity Australian Eq EF",
    },
    MMF1170AU: {
      Description: "OnePath OA IP-Fidelity Australian Eq NE",
    },
    MMF1175AU: {
      Description: "ANZ OA IP-Fidelity Australian Equity EF",
    },
    MMF1176AU: {
      Description: "ANZ OA IP-Fidelity Australian Equity NE",
    },
    MMF1201AU: {
      Description: "OnePath OA IP-Janus Hdsn GlFI TR EF/Sel",
    },
    MMF1202AU: {
      Description: "OnePath OA IP-Janus Hdsn Gl FI TR NEF",
    },
    MMF1207AU: {
      Description: "ANZ OA Inv-Janus HendersonGlFI TR EF/Sel",
    },
    MMF1208AU: {
      Description: "ANZ OA Inv-Janus Henderson Gl FI TR DEF",
    },
    MMF1213AU: {
      Description: "OnePath OA IP-Rare Infrastructure Val EF",
    },
    MMF1214AU: {
      Description: "OnePath OA IP-Rare Infrastructure Val NE",
    },
    MMF1225AU: {
      Description: "OnePath OA IP-T Rowe Price Global Eq EF",
    },
    MMF1226AU: {
      Description: "OnePath OA IP-T Rowe Price Global Eq NE",
    },
    MMF1231AU: {
      Description: "ANZ OA IP-T Rowe Price Global Equity EF",
    },
    MMF1232AU: {
      Description: "ANZ OA IP-T Rowe Price Global Equity NE",
    },
    MMF1237AU: {
      Description: "OnePath OA IP-Vanguard Divs BdIdx EF/Sel",
    },
    MMF1238AU: {
      Description: "OnePath OA IP-Vanguard Divers Bd Idx NEF",
    },
    MMF1243AU: {
      Description: "ANZ OA Inv-Vanguard Divers Bd Idx EF/Sel",
    },
    MMF1244AU: {
      Description: "ANZ OA Inv-Vanguard Divers Bd Idx DEF",
    },
    MMF1261AU: {
      Description: "OnePath OA IP-ANZ Cash Advantage EF",
    },
    MMF1262AU: {
      Description: "OnePath OA IP-ANZ Cash Advantage NEF",
    },
    MMF1267AU: {
      Description: "ANZ OA IP-ANZ Cash Advantage EF",
    },
    MMF1268AU: {
      Description: "ANZ OA IP-ANZ Cash Advantage NE",
    },
    MMF1391AU: {
      Description: "OnePath OA IP-Bennelong Australian Eq EF",
    },
    MMF1392AU: {
      Description: "OnePath OA IP-Bennelong Australian Eq NE",
    },
    MMF1404AU: {
      Description: "OnePath OA IP-Vanguard Cons Index EF",
    },
    MMF1405AU: {
      Description: "OnePath OA IP-Vanguard Cons Index NE",
    },
    MMF1410AU: {
      Description: "ANZ OA IP-Vanguard Conservative Index EF",
    },
    MMF1411AU: {
      Description: "ANZ OA IP-Vanguard Conervative Index NE",
    },
    MMF1416AU: {
      Description: "OnePath OA IP-Vanguard Balanced Index EF",
    },
    MMF1417AU: {
      Description: "OnePath OA IP-Vanguard Balanced Index NE",
    },
    MMF1422AU: {
      Description: "ANZ OA IP-Vanguard Balanced Index EF",
    },
    MMF1423AU: {
      Description: "ANZ OA IP-Vanguard Balanced Index NE",
    },
    MMF1428AU: {
      Description: "OnePath OA IP-Vanguard Growth Index EF",
    },
    MMF1429AU: {
      Description: "OnePath OA IP-Vanguard Growth Index NE",
    },
    MMF1434AU: {
      Description: "ANZ OA IP-Vanguard Growth Index EF",
    },
    MMF1435AU: {
      Description: "ANZ OA IP-Vanguard Growth Index NE",
    },
    MMF1440AU: {
      Description: "OnePath OA IP-Vanguard High Gr Index EF",
    },
    MMF1441AU: {
      Description: "OnePath OA IP-Vanguard High Gr Index NE",
    },
    MMF1446AU: {
      Description: "ANZ OA IP-Vanguard High Growth Index EF",
    },
    MMF1447AU: {
      Description: "ANZ OA IP-Vanguard High Growth Index NE",
    },
    MMF1452AU: {
      Description: "OnePath OA IP-Altrinsic Glbl Eq EF/Sel",
    },
    MMF1453AU: {
      Description: "OnePath OA IP-Altrinsic Glbl Eq NE",
    },
    MMF1463AU: {
      Description: "OnePath OA FR IP-Perpetual Ethical SRI",
    },
    MMF1464AU: {
      Description: "OnePath OA FR IP-Stewart Invs WldWd Sust",
    },
    MMF1466AU: {
      Description: "OnePath OA FR IP-ANZ Cash Advantage",
    },
    MMF1468AU: {
      Description: "OnePath OA FR IP-Ausbil Aus Emg Leaders",
    },
    MMF1470AU: {
      Description: "OnePath OA FR IP-Arrowstreet Glb Eq Hdg",
    },
    MMF1471AU: {
      Description: "OnePath OA FR IP-OnePath Alts Gr",
    },
    MMF1472AU: {
      Description: "OnePath OA FR IP-BlackRock Tact Gr",
    },
    MMF1473AU: {
      Description: "OnePath OA FR IP-Kapstream Abs Ret Inc",
    },
    MMF1474AU: {
      Description: "OnePath OA FR IP-BlackRock Div Growth",
    },
    MMF1475AU: {
      Description: "OnePath OA FR IP-BlackRock Sci Intl Eq",
    },
    MMF1476AU: {
      Description: "OnePath OA FR IP-Pendal Aus Shr",
    },
    MMF1477AU: {
      Description: "OnePath OA FR IP-Pendal Smlr Coms",
    },
    MMF1478AU: {
      Description: "OnePath OA FR IP-Pendal Core Hdg Global",
    },
    MMF1479AU: {
      Description: "OnePath OA FR IP-Bennelong Australian Eq",
    },
    MMF1480AU: {
      Description: "OnePath OA FR IP-Merlon Australian Inc",
    },
    MMF1482AU: {
      Description: "OnePath OA FR IP-Schroder Real Return",
    },
    MMF1483AU: {
      Description: "OnePath OA FR IP-CFS Global Credit Inc",
    },
    MMF1484AU: {
      Description: "OnePath OA FR IP-SG Hiscock Property",
    },
    MMF1485AU: {
      Description: "OnePath OA FR IP-Bentham Global Income",
    },
    MMF1486AU: {
      Description: "OnePath OA FR IP-Nikko AM Aust Shares",
    },
    MMF1487AU: {
      Description: "OnePath OA FR IP-CFS Global Listed Infra",
    },
    MMF1488AU: {
      Description: "OnePath OA FR IP-Greencape Broadcap",
    },
    MMF1489AU: {
      Description: "OnePath OA Fr IP-T.Rowe PriceDynaGlBd",
    },
    MMF1496AU: {
      Description: "OnePath OA FR IP-OP Global Emerging Mkt",
    },
    MMF1497AU: {
      Description: "OnePath OA FR IP-Pendal Monthly Inc Plus",
    },
    MMF1498AU: {
      Description: "OnePath OA FR IP-OP Active Growth",
    },
    MMF1499AU: {
      Description: "OnePath OA FR IP-OP Australian Share",
    },
    MMF1500AU: {
      Description: "OnePath OA FR IP-OP Balanced",
    },
    MMF1501AU: {
      Description: "OnePath OA FR IP-OP Blue Chip Imput",
    },
    MMF1502AU: {
      Description: "OnePath OA FR IP-OP Conservative",
    },
    MMF1503AU: {
      Description: "OnePath OA FR IP-OP Cash",
    },
    MMF1504AU: {
      Description: "OnePath OA FR IP-CFS Imputation",
    },
    MMF1505AU: {
      Description: "OnePath OA FR IP-OP Div Fixed Interest",
    },
    MMF1506AU: {
      Description: "OnePath OA FR IP-OP Dvrs Credit",
    },
    MMF1507AU: {
      Description: "OnePath OA FR IP-OP Emerging Companies",
    },
    MMF1509AU: {
      Description: "OnePath OA FR IP-OP Glb Prpty Secs Idx",
    },
    MMF1511AU: {
      Description: "OnePath OA FR IP-OP Global Share",
    },
    MMF1512AU: {
      Description: "OnePath OA FR IP-OP High Growth",
    },
    MMF1515AU: {
      Description: "OnePath OA FR IP-OP Managed Growth",
    },
    MMF1517AU: {
      Description: "OnePath OA FR IP-Fidelity Australian Eq",
    },
    MMF1519AU: {
      Description: "OnePath OA FR IP-Perpetual Australian Sh",
    },
    MMF1520AU: {
      Description: "OnePath OA FR IP-OP Property Securities",
    },
    MMF1523AU: {
      Description: "OnePath OA FR IP-OP Select Leaders",
    },
    MMF1529AU: {
      Description: "OnePath OA FR IP-OP Sust Inv Aus Shares",
    },
    MMF1530AU: {
      Description: "OnePath OA FR IP-OP Tax Effective Inc",
    },
    MMF1531AU: {
      Description: "OnePath OA FR IP-UBS Balanced",
    },
    MMF1532AU: {
      Description: "OnePath OA FR IP-Investors Mutual Aus Sh",
    },
    MMF1533AU: {
      Description: "OnePath OA FR IP-Altrinsic Glbl Equities",
    },
    MMF1534AU: {
      Description: "OnePath OA FR IP-Janus Henderson Gl FITR",
    },
    MMF1535AU: {
      Description: "OnePath OA FR IP-MFS Global Equity",
    },
    MMF1536AU: {
      Description: "OnePath OA FR IP-Optimix Aus Fixed Int",
    },
    MMF1537AU: {
      Description: "OnePath OA FR IP-Optimix Australian Shr",
    },
    MMF1538AU: {
      Description: "OnePath OA FR IP-Optimix Balanced",
    },
    MMF1539AU: {
      Description: "OnePath OA FR IP-Optimix Conservative",
    },
    MMF1541AU: {
      Description: "OnePath OA FR IP-OP Geared Aus Shrs Idx",
    },
    MMF1542AU: {
      Description: "OnePath OA FR IP-Optimix Gbl Emg Mkt Shr",
    },
    MMF1543AU: {
      Description: "OnePath OA FR IP-Optimix Global Share",
    },
    MMF1544AU: {
      Description: "OnePath OA FR IP-Optimix Gbl Sm Co Shr",
    },
    MMF1545AU: {
      Description: "OnePath OA FR IP-Optimix Growth",
    },
    MMF1546AU: {
      Description: "OnePath OA FR IP-Optimix High Growth",
    },
    MMF1547AU: {
      Description: "OnePath OA FR IP-Optimix Moderate",
    },
    MMF1548AU: {
      Description: "OnePath OA FR IP-Optimix Property Sec",
    },
    MMF1553AU: {
      Description: "OnePath OA FR IP-Perennial Value Shares",
    },
    MMF1554AU: {
      Description: "OnePath OA FR IP-Perpetual Balanced Gr",
    },
    MMF1555AU: {
      Description: "OnePath OA FR IP-Perpetual Cons Growth",
    },
    MMF1556AU: {
      Description: "OnePath OA FR IP-Magellan Global",
    },
    MMF1557AU: {
      Description: "OnePath OA FR IP-Platinum International",
    },
    MMF1559AU: {
      Description: "OnePath OA FR IP-Rare Infrastructure Val",
    },
    MMF1561AU: {
      Description: "OnePath OA FR IP-Schroder Australian Eq",
    },
    MMF1562AU: {
      Description: "OnePath OA FR IP-Schroder Balanced",
    },
    MMF1563AU: {
      Description: "OnePath OA FR IP-T. Rowe Price Global Eq",
    },
    MMF1564AU: {
      Description: "OnePath OA FR IP-UBS Defensive",
    },
    MMF1565AU: {
      Description: "OnePath OA FR IP-UBS Div Fixed Income",
    },
    MMF1566AU: {
      Description: "OnePath OA FR IP-Vanguard Aus Shr Index",
    },
    MMF1567AU: {
      Description: "OnePath OA FR IP-Vanguard Balanced Index",
    },
    MMF1568AU: {
      Description: "OnePath OA FR IP-Vanguard Cons Index",
    },
    MMF1569AU: {
      Description: "OnePath OA FR IP-Vanguard Growth Index",
    },
    MMF1570AU: {
      Description: "OnePath OA FR IP-Vanguard High Gr Index",
    },
    MMF1571AU: {
      Description: "OnePath OA FR IP-Vanguard Divers Bd Idx",
    },
    MMF1572AU: {
      Description: "OnePath OA FR IP-Vanguard Intl Index",
    },
    MMF1573AU: {
      Description: "OnePath OA FR IP-Vanguard Intl Index H",
    },
    MMF1574AU: {
      Description: "OnePath OA FR IP-Vanguard Prp Secs Index",
    },
    MMF1575AU: {
      Description: "OnePath OA FR IP-Antipodes Glbl (Lgonly)",
    },
    MMF1823AU: {
      Description: "OnePath OA IP-ANZ Term Deposit 3 Months",
    },
    MMF1827AU: {
      Description: "OnePath OA FR IP-ANZ Term Dep 3 Mths",
    },
    MMF1830AU: {
      Description: "OnePath OA IP-ANZ Term Deposit 6 Months",
    },
    MMF1834AU: {
      Description: "OnePath OA FR IP-ANZ Term Dep 6 Mths",
    },
    MMF1837AU: {
      Description: "OnePath OA IP-ANZ Term Deposit 12 Months",
    },
    MMF1843AU: {
      Description: "ANZ OA IP-ANZ Term Deposit 3 Months",
    },
    MMF1846AU: {
      Description: "ANZ OA IP-ANZ Term Deposit 6 Months",
    },
    MMF1849AU: {
      Description: "ANZ OA IP-ANZ Term Deposit 12 Months",
    },
    MMF1852AU: {
      Description: "ANZ OA IP-ANZ Term Deposit 2 Years",
    },
    MMF1855AU: {
      Description: "ANZ OA IP-ANZ Term Deposit 3 Years",
    },
    MMF1858AU: {
      Description: "ANZ OA IP-ANZ Term Deposit 5 Years",
    },
    MMF1859AU: {
      Description: "OnePath OA FR IP-ANZ Term Dep 12 Mths",
    },
    MMF1862AU: {
      Description: "OnePath OA IP-ANZ Term Deposit 2 Years",
    },
    MMF1866AU: {
      Description: "OnePath OA FR IP-ANZ Term Deposit 2 Yrs",
    },
    MMF1869AU: {
      Description: "OnePath OA IP-ANZ Term Deposit 3 Years",
    },
    MMF1873AU: {
      Description: "OnePath OA FR IP-ANZ Term Deposit 3 Yrs",
    },
    MMF1876AU: {
      Description: "OnePath OA IP-ANZ Term Deposit 5 Years",
    },
    MMF1881AU: {
      Description: "OnePath OA FR IP-ANZ Term Deposit 5 Ys",
    },
    MMF1923AU: {
      Description: "ANZ OA IP-Schroder Fixed Income EF",
    },
    MMF1924AU: {
      Description: "ANZ OA IP-Schroder Fixed Income NE",
    },
    MMF1927AU: {
      Description: "OnePath OA IP-Platinum Asia EF",
    },
    MMF1928AU: {
      Description: "OnePath OA FR IP-Platinum Asia",
    },
    MMF1929AU: {
      Description: "OnePath OA IP-Platinum Asia NE",
    },
    MMF1930AU: {
      Description: "OnePath OA IP-Schroder Fixed Income EF",
    },
    MMF1931AU: {
      Description: "OnePath OA FR IP-Schroder Fixed Income",
    },
    MMF1932AU: {
      Description: "OnePath OA IP-Schroder Fixed Income NE",
    },
    MMF1933AU: {
      Description: "OnePath OA IP-Walter Scott Gbl Eq H EF",
    },
    MMF1934AU: {
      Description: "OnePath OA FR IP-Walter Scott Gbl Eq Hgd",
    },
    MMF1935AU: {
      Description: "OnePath OA IP-Walter Scott Gbl Eq H NE",
    },
    MMF1943AU: {
      Description: "OnePath OA FR IP-BlackRock Sci Aus Eq",
    },
    MMF2133AU: {
      Description: "ANZ Enhanced Yield Fund",
    },
    MMF2134AU: {
      Description: "ANZ Fixed Income Fund",
    },
    MMF2135AU: {
      Description: "ANZ Private Global Equities Trust",
    },
    MMF2184AU: {
      Description: "ANZ Private Global Equities(Actvly Hdg)",
    },
    MMF2186AU: {
      Description: "ANZ Private International Fixed Interest",
    },
    MMF2767AU: {
      Description: "OnePath OA IP-CFS Gl Listed Infra EF",
    },
    MMF3072AU: {
      Description: "OnePath OA IP-T.Rowe PriceDynaGlBd EF",
    },
    MMF3380AU: {
      Description: "OnePath ANZ OA IP-CFS Gl Listed Infra NE",
    },
    MMF3621AU: {
      Description: "OnePath ANZ OA IP-Greencape Broadcap EF",
    },
    MMF3695AU: {
      Description: "OnePath OA IP-Greencape Broadcap NE",
    },
    MMF4261AU: {
      Description: "OnePath OA IP-Nikko AM Aust Shares EF",
    },
    MMF5260AU: {
      Description: "OnePath OA IP-Nikko AM Aust Shares NE",
    },
    MMF5352AU: {
      Description: "OnePath OA IP-T.Rowe PriceDynaGlBd NE",
    },
    MMF6623AU: {
      Description: "OnePath ANZ OA IP-T.Rowe PriceDynaGlBdNE",
    },
    MMF6871AU: {
      Description: "OnePath ANZ OA IP-Greencape Broadcap NE",
    },
    MMF7212AU: {
      Description: "OnePath ANZ OA IP-Nikko AM Aust SharesEF",
    },
    MMF7561AU: {
      Description: "OnePath OA IP-Greencape Broadcap EF",
    },
    MMF7684AU: {
      Description: "OnePath ANZ OA IP-T.Rowe PriceDynaGlBdEF",
    },
    MMF7872AU: {
      Description: "OnePath ANZ OA IP-CFS Gl Listed Infra EF",
    },
    MMF8278AU: {
      Description: "OnePath OA IP-CFS Gl Listed Infra NE",
    },
    MMF8660AU: {
      Description: "OnePath ANZ OA IP-Nikko AM Aust SharesNE",
    },
    MON0001AU: {
      Description: "Monash Absolute Investment Class A",
    },
    MPL0001AU: {
      Description: "Maple-Brown Abbott Diversified Inv",
    },
    MPL0002AU: {
      Description: "Maple-Brown Abbott Australian Equity",
    },
    MPL0003AU: {
      Description: "Maple-Brown Abbott Asian Investment",
    },
    MPL0006AU: {
      Description: "Maple-Brown Abbott Global Listed Infras",
    },
    MPL0008AU: {
      Description: "MBA Global Listed Infrastructure-Hedge",
    },
    MPL0544AU: {
      Description: "Maple-Brown Abbott Responsible Invmt",
    },
    MSC0001AU: {
      Description: "Frame Futures Fund",
    },
    MSC0129AU: {
      Description: "Hamilton Chs Slct Inv Bntlgh Dbt Sb Tr A",
    },
    MSC5632AU: {
      Description: "Hamilton Chs Slct Inv Bntlgh Dbt Sb Tr C",
    },
    MSC8203AU: {
      Description: "Hamilton Chs Slct Inv Bntlgh Dbt Sb Tr B",
    },
    MSM9568AU: {
      Description: "Manning Private Debt",
    },
    MST0002AU: {
      Description: "Mason Stevens Credit Fund",
    },
    MUA0002AU: {
      Description: "Munro Global Growth",
    },
    MUA4641AU: {
      Description: "Munro Global Growth Founders Units",
    },
    NAB0020AU: {
      Description: "AIMS Commercial Mortgage Retail",
    },
    NCL1621AU: {
      Description: "Mercer Conservative Gr Enh Pasv Units",
    },
    NCL2802AU: {
      Description: "Newmark Hardware Trust",
    },
    NCL4039AU: {
      Description: "Mercer Socially Rspnb Shrs Fd Unhdg",
    },
    NCL4057AU: {
      Description: "Mercer Socially Rspnb Shrs Fd Hdg",
    },
    NCL4286AU: {
      Description: "Mercer Moderate Growth Enh Pasv Units",
    },
    NCL4407AU: {
      Description: "Mercer Growth Enhanced Passive Units",
    },
    NCP0001AU: {
      Description: "Northcape Capital Global Emerg Mkts",
    },
    NCP2294AU: {
      Description: "Northcape Capital Global Equities",
    },
    NET0001AU: {
      Description: "Netwealth Australian Equities Index",
    },
    NET0002AU: {
      Description: "Netwealth Index Opportunities Balanced",
    },
    NET0004AU: {
      Description: "Netwealth Index Opportunities Cnsrv",
    },
    NET0006AU: {
      Description: "Netwealth Active 50/50 Balanced",
    },
    NET0008AU: {
      Description: "Netwealth Active 90/10 High Growth",
    },
    NET0009AU: {
      Description: "Netwealth International Equities Index",
    },
    NET0010AU: {
      Description: "Netwealth Australian Property Index",
    },
    NET0013AU: {
      Description: "Netwealth Active 70/30 Growth",
    },
    NET0023AU: {
      Description: "Netwealth Australian Bond Index",
    },
    NET0025AU: {
      Description: "Netwealth Active 30/70 Conservative",
    },
    NET0027AU: {
      Description: "Netwealth Index Opportunities Growth",
    },
    NET2119AU: {
      Description: "Netwealth Hedged International Eqs Idx",
    },
    NET5702AU: {
      Description: "Netwealth Global Bond Index",
    },
    NFS0196AU: {
      Description: "Antares Pers Listed Property",
    },
    NFS0209AU: {
      Description: "Antares Prof Listed Property",
    },
    NFS0241AU: {
      Description: "MLC Inv Port-MIF Cpt Guaranteed",
    },
    NIK1854AU: {
      Description: "Nikko AM ARK Global Disruptive Innovt",
    },
    NMF0003AU: {
      Description: "AMP Gen-AMP Capital Diversified Credit",
    },
    NMF0004AU: {
      Description: "AMP Gen-CFS Geared Australian Share",
    },
    NMF0011AU: {
      Description: "AMP Gen-Vanguard Intl Shr Indx",
    },
    NMF0012AU: {
      Description: "AMP Gen-Vanguard Int Shr Idx Hgd",
    },
    NMF0015AU: {
      Description: "AMP Gen-Vanguard Aus Shr Indx",
    },
    NMF0019AU: {
      Description: "AMP Gen-Moderately Defensive Index",
    },
    NMF0020AU: {
      Description: "AMP Gen-Balanced Index",
    },
    NMF0021AU: {
      Description: "AMP Gen-Growth Index",
    },
    NML0001AU: {
      Description: "AMP Capital W Australian Property",
    },
    NML0018AU: {
      Description: "AMP Capital W Cash Management Trust",
    },
    NML0061AU: {
      Description: "AMP Capital W Australian Equity Value",
    },
    NML0337AU: {
      Description: "AMP Capital Australian Property",
    },
    NML0348AU: {
      Description: "AMP Capital W Global Equity Value",
    },
    NML0569AU: {
      Description: "AMP Gen-AMP Cash Mgmt",
    },
    NML0571AU: {
      Description: "AMP Gen-BlackRock Australian Equity",
    },
    NML0572AU: {
      Description: "AMP Gen-BlackRock Aust Equity Index",
    },
    NML0573AU: {
      Description: "AMP Gen-BlackRock Aust Fixed Int Ind",
    },
    NML0574AU: {
      Description: "AMP Gen-BlackRock Intl Eq Ind Hedged",
    },
    NML0575AU: {
      Description: "AMP Gen-BlackRock Intl Eq Ind Unhdgd",
    },
    NML0576AU: {
      Description: "AMP Gen-BlackRock Intl Fix Int Ind",
    },
    NML0577AU: {
      Description: "AMP Gen-BlackRock Prop Securities Ind",
    },
    NML0578AU: {
      Description: "AMP Gen-Legg Mason Property Secs",
    },
    NML0579AU: {
      Description: "AMP Gen-Aberdeen Global Equity",
    },
    NML0580AU: {
      Description: "AMP Gen-Perpetual Industrial Equity",
    },
    NML0581AU: {
      Description: "AMP Gen-PIMCO Global Fixed Interest",
    },
    NML0582AU: {
      Description: "AMP Gen-Platinum International Equity",
    },
    NML0583AU: {
      Description: "AMP Gen-P Partners High Gr Aust Eq",
    },
    NML0584AU: {
      Description: "AMP Gen-Schroder Australian Equity",
    },
    NML0585AU: {
      Description: "AMP Gen-UBS Australian Equity",
    },
    NML0586AU: {
      Description: "AMP Gen-Defensive",
    },
    NML0587AU: {
      Description: "AMP Gen-Moderately Defensive",
    },
    NML0588AU: {
      Description: "AMP Gen-Balanced",
    },
    NML0589AU: {
      Description: "AMP Gen-Growth",
    },
    NML0590AU: {
      Description: "AMP Gen-High Growth",
    },
    NML0591AU: {
      Description: "AMP Gen-Australian Equities",
    },
    NML0592AU: {
      Description: "AMP Gen-International Equities Hedged",
    },
    NML0593AU: {
      Description: "AMP Gen-International Equities Unhedged",
    },
    NMM0106AU: {
      Description: "SUMMIT Select - Active Defensive Units",
    },
    NMM0107AU: {
      Description: "SUMMIT Select - Active Mod Defensive",
    },
    NMM0108AU: {
      Description: "SUMMIT Select - Active Balanced",
    },
    NMM0109AU: {
      Description: "SUMMIT Select - Active Growth Units",
    },
    NMM0110AU: {
      Description: "SUMMIT Select - Active High Growth Units",
    },
    NMM0111AU: {
      Description: "North Index Defensive",
    },
    NMM0112AU: {
      Description: "North Index Moderately Defensive",
    },
    NMM0113AU: {
      Description: "North Index Balanced",
    },
    NMM0114AU: {
      Description: "North Index Growth",
    },
    NMM0115AU: {
      Description: "North Index High Growth",
    },
    NRM0005AU: {
      Description: "ClearView Mgd Inv Diversified Stable",
    },
    NRM0006AU: {
      Description: "ClearView Mgd Inv Diversified Balanced",
    },
    NRM0007AU: {
      Description: "ClearView Mgd Inv Aus Shares Growth",
    },
    NRM0023AU: {
      Description: "ClearView Mgd Inv Diversified Growth",
    },
    NRM0026AU: {
      Description: "CFML Money Market",
    },
    NRM0028AU: {
      Description: "CFML Schroder Equity Opportunities",
    },
    NRM0030AU: {
      Description: "CFML Fixed Interest",
    },
    NRM0032AU: {
      Description: "CFML Stewart Investors Worldwide S",
    },
    NRM0034AU: {
      Description: "CFML Listed Property",
    },
    NRM0036AU: {
      Description: "CFML First Sentier Investors Infras",
    },
    NRM0038AU: {
      Description: "CFML RARE Emerging Markets",
    },
    NUN0001AU: {
      Description: "Pre Select Conservative",
    },
    NUN0002AU: {
      Description: "Pre Select Balanced",
    },
    NUN0003AU: {
      Description: "Pre Select Growth",
    },
    NUN0004AU: {
      Description: "Pre Select High Growth",
    },
    NUN0030AU: {
      Description: "Access Pre Select Balanced",
    },
    NUN0032AU: {
      Description: "Access Pre Select Conservative",
    },
    NUN0033AU: {
      Description: "Access Pre Select Growth",
    },
    NUN0034AU: {
      Description: "Access Pre Select High Growth",
    },
    NWQ0001AU: {
      Description: "NWQ Fiduciary Fund Wholesale A",
    },
    NWQ8621AU: {
      Description: "NWQ Global Markets Wholesale",
    },
    OMF0001AU: {
      Description: "Realm High Income",
    },
    OMF0003AU: {
      Description: "Atlantic Pacific Australian Equity",
    },
    OMF0005AU: {
      Description: "Alexander Credit Opportunities Fund",
    },
    OMF0009AU: {
      Description: "Realm High Income - Wholesale",
    },
    OMF0018AU: {
      Description: "Realm High Income Fund Adviser Class",
    },
    OMF0022AU: {
      Description: "DirectMoney Personal Loan",
    },
    OMF0027AU: {
      Description: "Strategic Global Fund",
    },
    OMF1140AU: {
      Description: "Lakehouse Global Growth Fund",
    },
    OMF1394AU: {
      Description: "Realm High Income mFund Units",
    },
    OMF3725AU: {
      Description: "Realm Short Term Income Ordinary",
    },
    OMF5868AU: {
      Description: "Realm Strategic Income Enduring",
    },
    OMF6696AU: {
      Description: "Lakehouse Small Companies Fund",
    },
    OMF8040AU: {
      Description: "Holon Photon Ordinary Units",
    },
    OMF8160AU: {
      Description: "Realm Short Term Income mFunds",
    },
    OMF8185AU: {
      Description: "Saville Capital Emerging Companies",
    },
    OMF8680AU: {
      Description: "Realm Capital Series 2018-1",
    },
    OMF9290AU: {
      Description: "Atlas High Income Property",
    },
    OMF9649AU: {
      Description: "Future Renewables",
    },
    OPH0001AU: {
      Description: "Ophir Opportunities",
    },
    OPH2093AU: {
      Description: "Ophir Global Opportunities A",
    },
    OPS0001AU: {
      Description: "OC Dynamic Equity",
    },
    OPS0002AU: {
      Description: "OC Premium Small Companies",
    },
    OPS0004AU: {
      Description: "OC Micro-Cap",
    },
    OPS0011AU: {
      Description: "Odey International Fund",
    },
    OPS1827AU: {
      Description: "Vertium Equity Income Fund",
    },
    OPS2991AU: {
      Description: "ECP Growth Companies",
    },
    OPS7755AU: {
      Description: "Chester High Conviction",
    },
    OPS8304AU: {
      Description: "Artisan Global Discovery",
    },
    OPT0001AU: {
      Description: "ARCO Absolute Trust",
    },
    ORD0001AU: {
      Description: "Ord Minnett Cash Management",
    },
    PAC0001AU: {
      Description: "Packer & Co Investigator Trust",
    },
    PAL0002AU: {
      Description: "Ironbark Paladin Property Securities",
    },
    PAM0001AU: {
      Description: "Alphinity Australian Share",
    },
    PAT0001AU: {
      Description: "Ironbark Karara Australian Share",
    },
    PAT0002AU: {
      Description: "Ironbark Karara Australian Small Comp",
    },
    PAT5878AU: {
      Description: "Sestante Global Macro Fund",
    },
    PBT0001AU: {
      Description: "IOOF Profile 45",
    },
    PBT0002AU: {
      Description: "IOOF Profile 55",
    },
    PBT0003AU: {
      Description: "IOOF Profile 65",
    },
    PBT0004AU: {
      Description: "IOOF Profile 75",
    },
    PBT0005AU: {
      Description: "IOOF Profile 85",
    },
    PBT0006AU: {
      Description: "IOOF Profile 95",
    },
    PBT0007AU: {
      Description: "IOOF Profile Diversified Fixed Interest",
    },
    PBT0008AU: {
      Description: "IOOF Profile International Shares",
    },
    PBT0009AU: {
      Description: "IOOF Profile International Shares Hdgd",
    },
    PBT0010AU: {
      Description: "IOOF Profile Australian Shares",
    },
    PCL0005AU: {
      Description: "Pengana Australian Equities Class A",
    },
    PCL0022AU: {
      Description: "Pengana Global Small Companies",
    },
    PCL0026AU: {
      Description: "Pengana International",
    },
    PCL0027AU: {
      Description: "Pengana International Managed Risk",
    },
    PCL1284AU: {
      Description: "Pengana International E",
    },
    PCL5020AU: {
      Description: "ORAH A",
    },
    PCL8246AU: {
      Description: "Pengana High Conviction Property Secs A",
    },
    PCL9690AU: {
      Description: "Pengana International D",
    },
    PCS9867AU: {
      Description: "PCS Australian Absolute Return Founders",
    },
    PDL0422AU: {
      Description: "Pendal Focus Australian Equities",
    },
    PDL3383AU: {
      Description: "Pendal Multi-Asset Target Return",
    },
    PDL5969AU: {
      Description: "Regnan Credit Impact Trust",
    },
    PER0001AU: {
      Description: "Perpetual Cash Management",
    },
    PER0011AU: {
      Description: "Perpetual WFI-Perpetual Indl Shr",
    },
    PER0013AU: {
      Description: "Perpetual Bal Grth 2",
    },
    PER0028AU: {
      Description: "Perpetual WFIA-Perpetual Indl Shr",
    },
    PER0029AU: {
      Description: "Perpetual WFIA-Perpetual Aus Shr",
    },
    PER0030AU: {
      Description: "Perpetual WFIA-Perpetual Conservative Gr",
    },
    PER0031AU: {
      Description: "Perpetual WFI-Perpetual Int Shr",
    },
    PER0036AU: {
      Description: "Perpetual WFIA-Perpetual Bal Grth",
    },
    PER0038AU: {
      Description: "Perpetual WFIA-Perpetual Int Shr",
    },
    PER0039AU: {
      Description: "Perpetual WFIA-Perpetual Small Coms",
    },
    PER0040AU: {
      Description: "Perpetual WFIA-Perpetual Cash",
    },
    PER0046AU: {
      Description: "Perpetual Wholesale Industrial",
    },
    PER0048AU: {
      Description: "Perpetual Wholesale Smaller Companies",
    },
    PER0049AU: {
      Description: "Perpetual Wholesale Australian",
    },
    PER0050AU: {
      Description: "Perpetual Wholesale International Share",
    },
    PER0063AU: {
      Description: "Perpetual Wholesale Balanced Growth",
    },
    PER0066AU: {
      Description: "Perpetual Wholesale Split Growth",
    },
    PER0071AU: {
      Description: "Perpetual Wholesale Geared Australian",
    },
    PER0072AU: {
      Description: "Perpetual W Share Plus L/S",
    },
    PER0077AU: {
      Description: "Perpetual Wholesale Conservative Growth",
    },
    PER0102AU: {
      Description: "Perpetual Wholesale Concentrated Equity",
    },
    PER0114AU: {
      Description: "Perpetual Wholesale Diversified Growth",
    },
    PER0116AU: {
      Description: "Perpetual Wholesale Ethical SRI",
    },
    PER0247AU: {
      Description: "Perpetual Select Investments Conserv",
    },
    PER0248AU: {
      Description: "Perpetual Select Investments Diversified",
    },
    PER0249AU: {
      Description: "Perpetual Select Investments Balanced",
    },
    PER0251AU: {
      Description: "Perpetual Select Growth Fund",
    },
    PER0252AU: {
      Description: "Perpetual Select Fixed Income Fund",
    },
    PER0254AU: {
      Description: "Perpetual Select Investments Real Estate",
    },
    PER0255AU: {
      Description: "Perpetual Select Investments Aus Share",
    },
    PER0256AU: {
      Description: "Perpetual Select Investments Int Share",
    },
    PER0258AU: {
      Description: "Perpetual Exact Market Cash",
    },
    PER0259AU: {
      Description: "Perpetual Wholesale Smaller Companies 2",
    },
    PER0260AU: {
      Description: "Perpetual Wholesale Diversified Income",
    },
    PER0262AU: {
      Description: "Perpetual Active Fixed Interest Fund",
    },
    PER0263AU: {
      Description: "Perpetual Credit Income",
    },
    PER0265AU: {
      Description: "Perpetual High Grade Treasury",
    },
    PER0270AU: {
      Description: "Pengana Emerging Companies",
    },
    PER0281AU: {
      Description: "Perpetual's - Australian Share Fund",
    },
    PER0284AU: {
      Description: "Perpetual WFI-Perpetual Diversified Inc",
    },
    PER0392AU: {
      Description: "Perpetual Charitable & Commuity Investor",
    },
    PER0397AU: {
      Description: "Perpetual Select Geared Aust Sh Fd",
    },
    PER0398AU: {
      Description: "Perpetual Select Geared High Growth Fd",
    },
    PER0436AU: {
      Description: "Perpetual Income Opportunities",
    },
    PER0437AU: {
      Description: "Perpetual Growth Opportunities",
    },
    PER0439AU: {
      Description: "Perpetual Pure Value Share",
    },
    PER0446AU: {
      Description: "Perpetual WFIA-Schroder Fixed Income",
    },
    PER0450AU: {
      Description: "Perpetual WFIA-Ausbil Aust Actv Eq",
    },
    PER0451AU: {
      Description: "Perpetual WFIA-Ausbil Aust Emerg Ldrs",
    },
    PER0455AU: {
      Description: "Perpetual WFIA-BlackRock Scien Diver Gr",
    },
    PER0456AU: {
      Description: "Perpetual WFIA-BlackRock Scien Divr Stb",
    },
    PER0459AU: {
      Description: "Perpetual WFIA-BlackRock Tactical Growth",
    },
    PER0461AU: {
      Description: "Perpetual WFIA-Pendal Australian Equity",
    },
    PER0463AU: {
      Description: "Perpetual WFIA-Pendal Property Secs",
    },
    PER0467AU: {
      Description: "Perpetual WFIA-Bentham Global Income",
    },
    PER0470AU: {
      Description: "Perpetual WFIA-Fidelity Australian Eq",
    },
    PER0472AU: {
      Description: "Perpetual WFIA-Magellan Global",
    },
    PER0474AU: {
      Description: "Perpetual WFIA-OnePath Divers Fixed Int",
    },
    PER0480AU: {
      Description: "Perpetual WFIA-Morningstar Growth Rl Rt",
    },
    PER0482AU: {
      Description: "Perpetual WFIA-Investor Mutual Aus Sha",
    },
    PER0483AU: {
      Description: "Perpetual WFIA-Investor Mutual Fut Ledr",
    },
    PER0484AU: {
      Description: "Perpetual WFIA-Lazard Glbl Listed Infra",
    },
    PER0485AU: {
      Description: "Perpetual WFIA-Macquarie Income Opps",
    },
    PER0488AU: {
      Description: "Perpetual WFIA-Perpetual Concntr Eq",
    },
    PER0489AU: {
      Description: "Perpetual WFIA-Perpetual Diversified Gr",
    },
    PER0490AU: {
      Description: "Perpetual WFIA-Perpetual Diversified Inc",
    },
    PER0491AU: {
      Description: "Perpetual WFIA-Perpetual Ethical SRI",
    },
    PER0492AU: {
      Description: "Perpetual WFIA-Perpetual Geared Aus",
    },
    PER0495AU: {
      Description: "Perpetual WFIA-Perpetual Share Plus L/S",
    },
    PER0496AU: {
      Description: "Perpetual WFIA-Perpetual Split Gr",
    },
    PER0497AU: {
      Description: "Perpetual WFIA-Platinum Asia",
    },
    PER0498AU: {
      Description: "Perpetual WFIA-Platinum International",
    },
    PER0501AU: {
      Description: "Perpetual WFIA-Schroder Australian Eq",
    },
    PER0502AU: {
      Description: "Perpetual WFIA-Schroder Balanced",
    },
    PER0504AU: {
      Description: "Perpetual WFIA-T. Rowe Price Global Eq",
    },
    PER0507AU: {
      Description: "Perpetual WFIA-Vanguard Aust FI Idx",
    },
    PER0508AU: {
      Description: "Perpetual WFIA-Vanguard Intl Shr Idx Hdg",
    },
    PER0509AU: {
      Description: "Perpetual WFIA-Vanguard Prpty Secs Idx",
    },
    PER0542AU: {
      Description: "Perpetual WFIA-AMP Capl Glbl Prpty Secs",
    },
    PER0543AU: {
      Description: "Perpetual WFIA-MFS Global Equity",
    },
    PER0546AU: {
      Description: "Perpetual WFIA-Vanguard Australian Idx",
    },
    PER0554AU: {
      Description: "AQR WS DELTA 1F",
    },
    PER0556AU: {
      Description: "Perpetual Diversified Real Return W",
    },
    PER0557AU: {
      Description: "Perpetual Wholesale Dynamic Fixed Income",
    },
    PER0558AU: {
      Description: "Perpetual Charitable Endowment",
    },
    PER0561AU: {
      Description: "FirstMac High Livez",
    },
    PER0562AU: {
      Description: "Perpetual High Grade Treasury R",
    },
    PER0634AU: {
      Description: "AQR Wholesale Managed Futures 1P",
    },
    PER0668AU: {
      Description: "Perpetual Pure Equity Alpha",
    },
    PER0669AU: {
      Description: "Perpetual Pure Credit Alpha Fund W",
    },
    PER0673AU: {
      Description: "Morphic Global Opportunities",
    },
    PER0677AU: {
      Description: "Perpetual Select Inv Conservative",
    },
    PER0678AU: {
      Description: "Perpetual Select Inv Diversified",
    },
    PER0679AU: {
      Description: "Perpetual Select Inv Balanced",
    },
    PER0680AU: {
      Description: "Perpetual Select Inv Growth",
    },
    PER0681AU: {
      Description: "Perpetual Select Inv Geared High Growth",
    },
    PER0682AU: {
      Description: "Perpetual Select Fixed Income Fd - PPSW",
    },
    PER0683AU: {
      Description: "Perpetual Select Inv Real Estate",
    },
    PER0684AU: {
      Description: "Perpetual Select Inv Australian Share",
    },
    PER0685AU: {
      Description: "Perpetual Select Inv Geared AUS Share",
    },
    PER0686AU: {
      Description: "Perpetual Select Inv International Share",
    },
    PER0697AU: {
      Description: "Firstmac High Livez Wholesale",
    },
    PER0700AU: {
      Description: "Perpetual WFIA-Aspect Divers Futures",
    },
    PER0704AU: {
      Description: "Perpetual Pure Microcap Fund",
    },
    PER0708AU: {
      Description: "Implemented Australian Share Portfolio",
    },
    PER0710AU: {
      Description: "Implemented Fixed Income Portfolio",
    },
    PER0711AU: {
      Description: "Implemented International Share Portf",
    },
    PER0712AU: {
      Description: "Implemented Real Estate Portfolio",
    },
    PER0715AU: {
      Description: "JPMorgan Global Rsrch Enhncd Idx Eq Hdg",
    },
    PER0716AU: {
      Description: "JPMorgan Global Bond Opportunities Fund",
    },
    PER0719AU: {
      Description: "JPMorgan Glb Rsrch Enhncd Idx Eq Fd",
    },
    PER0727AU: {
      Description: "JPMorgan Global Strategic Bond Fund",
    },
    PER0728AU: {
      Description: "BMO Pyrford Global Absolute Return",
    },
    PER0731AU: {
      Description: "PineBridge Global Dynamic Asset Alloc I",
    },
    PER0733AU: {
      Description: "Perpetual Global Share Class A",
    },
    PER0736AU: {
      Description: "BMO LGM Global Emerging Markets",
    },
    PER0738AU: {
      Description: "Perpetual WFIA Dynamic Fxd Inc",
    },
    PER0739AU: {
      Description: "Perpetual WFIA-Perpetual Dvrsfd Real Rt",
    },
    PER0744AU: {
      Description: "PineBridge Global Dynamic Asset Alloc R",
    },
    PER0746AU: {
      Description: "Metrics Credit Diversified Aust Sr Ln",
    },
    PER0752AU: {
      Description: "Perpetual Wholesale Global Share Hdg",
    },
    PER0758AU: {
      Description: "JPMorgan Global Macro Opps Class A Units",
    },
    PER1547AU: {
      Description: "Perpetual Global Innovation Share",
    },
    PER1744AU: {
      Description: "Perpetual Ethical SRI Credit",
    },
    PER3831AU: {
      Description: "ACRA Diversified",
    },
    PER6115AU: {
      Description: "Perpetual Diversified Real Return Z",
    },
    PER6331AU: {
      Description: "Montaka Global Equities",
    },
    PER6348AU: {
      Description: "AQR Wholesale Managed Futures 7P",
    },
    PER7240AU: {
      Description: "MCP Secured Private Debt II",
    },
    PER7572AU: {
      Description: "MCP Credit Trust",
    },
    PER7633AU: {
      Description: "JPMorgan Diversified Risk",
    },
    PER7697AU: {
      Description: "MCP Real Estate Debt",
    },
    PER7802AU: {
      Description: "Ironbark Karara Market Neutral Fund",
    },
    PER7809AU: {
      Description: "Global Transport A-2019",
    },
    PER8045AU: {
      Description: "Perpetual Active Fixed Interest Fund A",
    },
    PER9072AU: {
      Description: "AQR Wholesale Managed Futures 8P",
    },
    PGF0001AU: {
      Description: "Paragon Australian Long Short Fund",
    },
    PGI0001AU: {
      Description: "Principal Global Credit Opportunities",
    },
    PGI0002AU: {
      Description: "Principal Global Property Securities",
    },
    PIC5743AU: {
      Description: "PIMCO TRENDS Managed Futures Stgy Seed",
    },
    PIC6396AU: {
      Description: "PIMCO ESG Global Bond Fund - Wholesale",
    },
    PIC9659AU: {
      Description: "PIMCO TRENDS Managed Futures Stgy Wholsl",
    },
    PIM0002AU: {
      Description: "IOOF Cash Management Trust",
    },
    PIM0003AU: {
      Description: "IOOF Income Trust",
    },
    PIM0021AU: {
      Description: "The Trust Company Diversified Property",
    },
    PIM0023AU: {
      Description: "The Trust Company Philanthropy",
    },
    PIM0026AU: {
      Description: "Aviva Investors Multi-Strategy Trgt Ret",
    },
    PIM0028AU: {
      Description: "DNR Capital Aus Eq High Conviction",
    },
    PIM0034AU: {
      Description: "CFM Institutional Systematic Diversified",
    },
    PIM0037AU: {
      Description: "Aviva Inv Mlt-Stgy Tgt Inc Fh AUD Inc",
    },
    PIM0058AU: {
      Description: "Aoris International Fund B",
    },
    PIM0101AU: {
      Description: "The Trust Company Bond",
    },
    PIM0941AU: {
      Description: "Fairlight Global Small & Mid Cap Hedged",
    },
    PIM1015AU: {
      Description: "Hamilton Lane Global Private Asst (AUD)",
    },
    PIM1115AU: {
      Description: "Rivkin Australian Equity",
    },
    PIM1142AU: {
      Description: "Fairlight Global Small & Mid Cap Fndtn",
    },
    PIM1744AU: {
      Description: "Even Keel Strategy Domestic Risk Mgmt",
    },
    PIM1812AU: {
      Description: "Aoris International Fund D Hedged",
    },
    PIM1923AU: {
      Description: "Lucerne Alternative Investments 2",
    },
    PIM1966AU: {
      Description: "CFM IS Trends Trust Class A Units",
    },
    PIM3268AU: {
      Description: "ATLAS Infrastructure Aust Fdr",
    },
    PIM3513AU: {
      Description: "Aoris International Fund A",
    },
    PIM3831AU: {
      Description: "Rivkin Global Equity",
    },
    PIM4232AU: {
      Description: "Trinetra Emerging Markets Growth Trust",
    },
    PIM4357AU: {
      Description: "DNR Capital Australian Emerging Coms",
    },
    PIM4806AU: {
      Description: "Melior Australian Impact",
    },
    PIM5346AU: {
      Description: "Eley Griffiths Group Emerging Companies",
    },
    PIM5565AU: {
      Description: "1851 Emerging Companies",
    },
    PIM5737AU: {
      Description: "Even Keel Strategy Global Risk Mgmt",
    },
    PIM5807AU: {
      Description: "Aviva Inv Mlt-Stgy Fxd Inc I AUD Acc",
    },
    PIM6284AU: {
      Description: "Totus Alpha Long Short",
    },
    PIM6769AU: {
      Description: "ATLAS Infrastructure Aust Fdr Fd - Unhdg",
    },
    PIM7035AU: {
      Description: "Lucerne Alternative Investments 1",
    },
    PIM7802AU: {
      Description: "Fairlight Global Small & Mid Cap Ord",
    },
    PIM8022AU: {
      Description: "Thornburg Multisector Opportunistic",
    },
    PIM8130AU: {
      Description: "CFM IS Trends Trust Class B Units",
    },
    PIM8302AU: {
      Description: "DNR Capital Australian Equities Income",
    },
    PIM8433AU: {
      Description: "Aoris International Fund C Hedged",
    },
    PIM9091AU: {
      Description: "Microequities Value Income",
    },
    PIM9253AU: {
      Description: "ATLAS Infrastructure Aust Fdr Fd - Hdg",
    },
    PLA0001AU: {
      Description: "Platinum European Fund",
    },
    PLA0002AU: {
      Description: "Platinum International Fund",
    },
    PLA0003AU: {
      Description: "Platinum Japan",
    },
    PLA0004AU: {
      Description: "Platinum Asia",
    },
    PLA0005AU: {
      Description: "Platinum International Healthcare",
    },
    PLA0006AU: {
      Description: "Platinum Unhedged Fund",
    },
    PLA0017AU: {
      Description: "Platinum Global Fund",
    },
    PLA0100AU: {
      Description: "Platinum International Brands Fund",
    },
    PLA0101AU: {
      Description: "Platinum International Technology",
    },
    PLA0779AU: {
      Description: "Platinum Unhedged Fund P",
    },
    PLA2056AU: {
      Description: "Platinum International Brands Fund P",
    },
    PLA2445AU: {
      Description: "Platinum Japan P",
    },
    PLA5576AU: {
      Description: "Platinum European Fund P",
    },
    PLA6044AU: {
      Description: "Platinum International Technology P",
    },
    PLA6965AU: {
      Description: "Platinum International HealthCare P",
    },
    PLA8968AU: {
      Description: "Platinum International Fund P",
    },
    PLA9999AU: {
      Description: "Platinum Asia P",
    },
    PLL0002AU: {
      Description: "NewActon East Property Fund",
    },
    PLL0004AU: {
      Description: "The Stables Property Ordinary",
    },
    PLL2183AU: {
      Description: "333 Exhibition Street Property Ordinary",
    },
    PLL3642AU: {
      Description: "Laverton North Property Ordinary",
    },
    PLL4486AU: {
      Description: "Thynne Street Property",
    },
    PLL9780AU: {
      Description: "Cambridge Bedford Property Ordinary",
    },
    PMC0002AU: {
      Description: "PM Capital Asian Companies",
    },
    PMC0100AU: {
      Description: "PM Capital Global Companies",
    },
    PMC0101AU: {
      Description: "PM Capital Australian Companies",
    },
    PMC0103AU: {
      Description: "PM Capital Enhanced Yield",
    },
    PMC4700AU: {
      Description: "PM Capital Enhanced Yield B",
    },
    PPL0002AU: {
      Description: "Antares Prof Dividend Builder",
    },
    PPL0026AU: {
      Description: "Presima Global Property Sec Concentrated",
    },
    PPL0028AU: {
      Description: "Antares Income Fund",
    },
    PPL0031AU: {
      Description: "Redpoint Global Infrastructure Fund",
    },
    PPL0036AU: {
      Description: "Intermede Global Equities Fund",
    },
    PPL0106AU: {
      Description: "Antares Prof High Growth Shares",
    },
    PPL0108AU: {
      Description: "Antares Pers High Growth Shares",
    },
    PPL0110AU: {
      Description: "Antares Prof Australian Equities",
    },
    PPL0115AU: {
      Description: "Antares Prof Elite Opportunities",
    },
    PPL5308AU: {
      Description: "Antares Ex-20 Australian Equities",
    },
    PPL8808AU: {
      Description: "Antares Diversified Fixed Income",
    },
    PRM0001AU: {
      Description: "Mutual 50 Leaders Australian Shares",
    },
    PRM0010AU: {
      Description: "Mutual Cash Term Deposits & Bank Bills",
    },
    PRM0013AU: {
      Description: "Mutual Cash Term Deposits & Bank Bills B",
    },
    PRM0014AU: {
      Description: "Mutual Cash Term Deposits & Bank Bills C",
    },
    PRM0015AU: {
      Description: "Mutual Income Fund A",
    },
    PRM0017AU: {
      Description: "MIF C",
    },
    PRM8256AU: {
      Description: "Mutual Credit",
    },
    PRM8798AU: {
      Description: "Mutual High Yield",
    },
    PTC0002AU: {
      Description: "Perpetual Wholesale Income Share Fund",
    },
    PTC0003AU: {
      Description: "The Trust Company Australian Share",
    },
    PTC6509AU: {
      Description: "Sculptor (AU) Global Multi-Strategy",
    },
    PVA0001AU: {
      Description: "Prime Value Growth",
    },
    PVA0002AU: {
      Description: "Prime Value Imputation",
    },
    PVA0005AU: {
      Description: "Prime Value Opportunities",
    },
    PVA0006AU: {
      Description: "Prime Value Opportunities B",
    },
    PVA0011AU: {
      Description: "Prime Value Growth B",
    },
    PVA0013AU: {
      Description: "Prime Value Emerging Opportunities Fund",
    },
    PVA0022AU: {
      Description: "Prime Value Imputation B",
    },
    PVA0088AU: {
      Description: "Prime Value Cash Plus Fund",
    },
    PWA0001AU: {
      Description: "BlackRock Equity",
    },
    PWA0013AU: {
      Description: "BlackRock Tactical Growth",
    },
    PWA0014AU: {
      Description: "BlackRock Australian Share",
    },
    PWA0015AU: {
      Description: "BlackRock Australian Share Plus",
    },
    PWA0822AU: {
      Description: "BlackRock WS Tactical Growth",
    },
    PWA0823AU: {
      Description: "BlackRock WS Australian Share",
    },
    PWA0825AU: {
      Description: "BlackRock WS International Bond",
    },
    QIN0001AU: {
      Description: "DDH Aggressive Growth",
    },
    QIN0002AU: {
      Description: "DDH Australian Shares",
    },
    QIN0003AU: {
      Description: "DDH Balanced Growth",
    },
    QIN0004AU: {
      Description: "DDH Conservative Growth",
    },
    QTC0001AU: {
      Description: "RACQ Bank Cash Investment Account",
    },
    QVG9204AU: {
      Description: "QVG Opportunities Fund",
    },
    QVL8781AU: {
      Description: "QVG Long Short Investor",
    },
    RCG6220AU: {
      Description: "RC Global Infra-Energy",
    },
    RFA0002AU: {
      Description: "BT Fixed Interest Retail",
    },
    RFA0011AU: {
      Description: "BT Class Inv Core Aus Shr",
    },
    RFA0012AU: {
      Description: "BT Smaller Companies Retail",
    },
    RFA0013AU: {
      Description: "BT Class Inv Natural Resources",
    },
    RFA0014AU: {
      Description: "BT Investment Global Share",
    },
    RFA0019AU: {
      Description: "BT Imp Shr Retail",
    },
    RFA0020AU: {
      Description: "BT Active Bal Retail",
    },
    RFA0021AU: {
      Description: "BT Class Inv Active Bal NE",
    },
    RFA0023AU: {
      Description: "BT Class Inv Tax Effective Income NE",
    },
    RFA0024AU: {
      Description: "BT Class Inv Div Shr NE",
    },
    RFA0025AU: {
      Description: "Pendal Ethical Share",
    },
    RFA0030AU: {
      Description: "BT Core Hedged Global Share Retail",
    },
    RFA0031AU: {
      Description: "Pendal Concentrated Global Share Hedged",
    },
    RFA0032AU: {
      Description: "Pendal Global Fixed Interest",
    },
    RFA0051AU: {
      Description: "Pendal Global Property Securities",
    },
    RFA0052AU: {
      Description: "BT Global Property Value",
    },
    RFA0059AU: {
      Description: "Pendal Focus Australian Share",
    },
    RFA0061AU: {
      Description: "Pendal MicroCap Opportunities",
    },
    RFA0062AU: {
      Description: "BT Geared Imputation Fund (Retail)",
    },
    RFA0064AU: {
      Description: "Pendal Australian Long/Short",
    },
    RFA0065AU: {
      Description: "Pendal Cash Plus",
    },
    RFA0100AU: {
      Description: "Pendal Enhanced Credit",
    },
    RFA0103AU: {
      Description: "Pendal Imputation",
    },
    RFA0108AU: {
      Description: "Pendal Total Return",
    },
    RFA0130AU: {
      Description: "Pendal Geared Imputation",
    },
    RFA0811AU: {
      Description: "Pendal Sustainable Conservative",
    },
    RFA0813AU: {
      Description: "Pendal Fixed Interest",
    },
    RFA0815AU: {
      Description: "Pendal Active Balanced",
    },
    RFA0817AU: {
      Description: "Pendal Property Investment",
    },
    RFA0818AU: {
      Description: "Pendal Australian Share",
    },
    RFA0819AU: {
      Description: "Pendal Smaller Companies",
    },
    RFA0821AU: {
      Description: "Pendal Concentrated Global Share No.2",
    },
    RGL0001AU: {
      Description: "Tasman Market Neutral",
    },
    RGL0002AU: {
      Description: "Regal Australian Long Short Equity",
    },
    RGL0003AU: {
      Description: "Regal Asian Quantitative",
    },
    RGL0004AU: {
      Description: "Regal Australian Small Companies Fund",
    },
    RGL0005AU: {
      Description: "Atlantic Absolute Return",
    },
    RGL0006AU: {
      Description: "Regal Emerging Companies",
    },
    RGL1073AU: {
      Description: "Regal Emerging Companies Fund II",
    },
    RGL2432AU: {
      Description: "Regal Emerging Companies III",
    },
    RGL5177AU: {
      Description: "Regal Global Equity Income",
    },
    RGL6948AU: {
      Description: "Regal Emerging Companies III 2019-12 Ser",
    },
    RGL9873AU: {
      Description: "Regal Emerging Companies III 2019-11 Ser",
    },
    RIM0001AU: {
      Description: "Russell Balanced A",
    },
    RIM0002AU: {
      Description: "Russell Conservative A",
    },
    RIM0003AU: {
      Description: "Russell Diversified 50 A",
    },
    RIM0004AU: {
      Description: "Russell Growth A",
    },
    RIM0005AU: {
      Description: "Russell Australian Bond A",
    },
    RIM0006AU: {
      Description: "Russell Australian Share A",
    },
    RIM0007AU: {
      Description: "Russell International Bond $A Hedged A",
    },
    RIM0008AU: {
      Description: "Russell International Shares A",
    },
    RIM0009AU: {
      Description: "Russell International Shares Hedged A",
    },
    RIM0011AU: {
      Description: "Russell Balanced Class C",
    },
    RIM0012AU: {
      Description: "Russell Conservative C",
    },
    RIM0013AU: {
      Description: "Russell Diversified 50 C",
    },
    RIM0014AU: {
      Description: "Russell Growth C",
    },
    RIM0015AU: {
      Description: "Russell Australian Shares C",
    },
    RIM0016AU: {
      Description: "Russell International Shares C",
    },
    RIM0017AU: {
      Description: "Russell International Shr Hedged Class C",
    },
    RIM0018AU: {
      Description: "Ventura Conservative",
    },
    RIM0019AU: {
      Description: "Ventura Diversified 50",
    },
    RIM0020AU: {
      Description: "Ventura Growth 70",
    },
    RIM0021AU: {
      Description: "Ventura Australian Shares",
    },
    RIM0022AU: {
      Description: "Ventura International Shares",
    },
    RIM0023AU: {
      Description: "Russell Portfolio Series Conservative A",
    },
    RIM0024AU: {
      Description: "Russell Portfolio Series Balanced A",
    },
    RIM0025AU: {
      Description: "Russell Portfolio Series Growth A",
    },
    RIM0026AU: {
      Description: "Russell Portfolio Series Conservative B",
    },
    RIM0027AU: {
      Description: "Russell Portfolio Series Balanced B",
    },
    RIM0028AU: {
      Description: "Russell Portfolio Series Growth B",
    },
    RIM0029AU: {
      Description: "Russell Aust Opportunities Class A",
    },
    RIM0030AU: {
      Description: "Russell High Growth C",
    },
    RIM0031AU: {
      Description: "Russell Intl Property Secs Hedged A",
    },
    RIM0032AU: {
      Description: "Russell Global Opportunities A",
    },
    RIM0033AU: {
      Description: "Ventura Aust Opportunities",
    },
    RIM0034AU: {
      Description: "Russell High Growth A",
    },
    RIM0037AU: {
      Description: "Russell Aus Cash Enhanced Fund Class A",
    },
    RIM0038AU: {
      Description: "Russell Emerging Markets Fund Class A",
    },
    RIM0039AU: {
      Description: "Russell Global Opportunities $A Hedged",
    },
    RIM0041AU: {
      Description: "Russell Australian Cash A",
    },
    RIM0042AU: {
      Description: "Russell Global Listed Infr $A Hedged",
    },
    RIM0045AU: {
      Description: "Russell Australian Bond Income",
    },
    RIM0046AU: {
      Description: "Russell After-Tax Aus Shr (SuperInvs) A",
    },
    RIM0073AU: {
      Description: "Russell Global Opportunities $NZ Hdg A",
    },
    RIM0074AU: {
      Description: "Russell Global Opportunities B",
    },
    RIM0075AU: {
      Description: "Russell Global Opportunities $NZ Hdg B",
    },
    RIM0076AU: {
      Description: "Russell Emerging Markets Fund Class B",
    },
    RIM0080AU: {
      Description: "Russell Global Bond B",
    },
    RIM0086AU: {
      Description: "Russell Inv Multi-Asset Growth Strat Ret",
    },
    RIM0087AU: {
      Description: "Russell Inv Multi-Asset Growth StratPlus",
    },
    RIM0089AU: {
      Description: "Russell Inv Multi-Asset Income Strategy",
    },
    RIM0098AU: {
      Description: "Russell Inv Multi-Asset Growth Strat A",
    },
    RIM4675AU: {
      Description: "Russell Invmts Glb Lstd Infras $NZ Hdg B",
    },
    RIM8665AU: {
      Description: "Russell Invmts Low Carbon Glb Shrs A",
    },
    RSM3331AU: {
      Description: "Realside Adelaide Office",
    },
    SAI0004AU: {
      Description: "Arrow Primary Infrastructure",
    },
    SBC0007AU: {
      Description: "UBS Diversified Fixed Income Fund",
    },
    SBC0811AU: {
      Description: "UBS Cash Fund",
    },
    SBC0812AU: {
      Description: "UBS Short-Term Fixed Income Fund",
    },
    SBC0813AU: {
      Description: "UBS Australian Bond Fund",
    },
    SBC0814AU: {
      Description: "UBS Defensive Investment Fund",
    },
    SBC0815AU: {
      Description: "UBS Balanced Investment Fund",
    },
    SBC0816AU: {
      Description: "UBS Property Securities Fund",
    },
    SBC0817AU: {
      Description: "UBS Australian Share Fund",
    },
    SBC0819AU: {
      Description: "UBS International Bond Fund",
    },
    SBC0822AU: {
      Description: "UBS International Share Fund",
    },
    SCH0002AU: {
      Description: "Schroder Australian Equity Fund - PC",
    },
    SCH0003AU: {
      Description: "Schroder Global Core Fund - WC",
    },
    SCH0006AU: {
      Description: "Schroder Asia Pacific Fund - WC",
    },
    SCH0010AU: {
      Description: "Schroder Strategic Growth - PC",
    },
    SCH0016AU: {
      Description: "Schroder Fixed Income Fund - PC",
    },
    SCH0024AU: {
      Description: "Schroder Absolute Return Income Fund -PC",
    },
    SCH0028AU: {
      Description: "Schroder Fixed Income Fund - Wholesale",
    },
    SCH0030AU: {
      Description: "Schroder Global Value Fund - WC",
    },
    SCH0032AU: {
      Description: "Schroder Global Value Fund (Hedged) - WC",
    },
    SCH0034AU: {
      Description: "Schroder Global Emerging Markets Fnd -WC",
    },
    SCH0035AU: {
      Description: "Schroder Equity Opportunities Fund - WC",
    },
    SCH0038AU: {
      Description: "Schroder Specialist Private Equity",
    },
    SCH0039AU: {
      Description: "Schroder Real Return CPI Plus 5% Fnd -PC",
    },
    SCH0040AU: {
      Description: "Schroder Global Sustainable Equity - WC",
    },
    SCH0047AU: {
      Description: "Schroder Real Return CPI Plus 5% Fnd -WC",
    },
    SCH0048AU: {
      Description: "Schroder Global Core Fund - IC",
    },
    SCH0051AU: {
      Description: "Schroder Global Sustainable Eq(Hgd) - WC",
    },
    SCH0083AU: {
      Description: "Schroder Real Return CPI Plus 5% Fd -CC",
    },
    SCH0095AU: {
      Description: "Schroder Global Recovery Fund - WC",
    },
    SCH0096AU: {
      Description: "Schroder Real Return CPI Plus 3.5% - WC",
    },
    SCH0097AU: {
      Description: "Schroder Emerging Mkt Sustainable Fnd-WC",
    },
    SCH0101AU: {
      Description: "Schroder WS Australian Equity Fund - WC",
    },
    SCH0102AU: {
      Description: "Schroder Strategic Growth - WC",
    },
    SCH0103AU: {
      Description: "Schroder Absolute Return Income Fund -WC",
    },
    SCH1018AU: {
      Description: "Schroder Global Sustainable Eq(Hgd) - IC",
    },
    SCH3568AU: {
      Description: "Schroder Absolute Return Income Fund –IC",
    },
    SCH4757AU: {
      Description: "Schroder Global Recovery Fund - PC",
    },
    SCH5738AU: {
      Description: "Schroder Equity Opportunities Fund – PC",
    },
    SEL0461AU: {
      Description: "Selector High Conviction Equity A",
    },
    SIA0001AU: {
      Description: "SPW Global Income",
    },
    SIA0002AU: {
      Description: "The Supervised Fund",
    },
    SKY9005AU: {
      Description: "Skyring Fixed Income",
    },
    SLT0006AU: {
      Description: "Baker Steel Gold",
    },
    SLT0010AU: {
      Description: "MCG Endowment Strategy",
    },
    SLT0019AU: {
      Description: "Profile Preservation Portfolio",
    },
    SLT0020AU: {
      Description: "Profile Accumulation Portfolio",
    },
    SLT0030AU: {
      Description: "LDI Connect 7 Portfolio",
    },
    SLT0032AU: {
      Description: "LDI Connect 3 Portfolio",
    },
    SLT0035AU: {
      Description: "LDI Connect 20 Portfolio",
    },
    SLT0037AU: {
      Description: "Stonehouse Core Value Portfolio",
    },
    SLT0039AU: {
      Description: "DMG Diversified Portfolio",
    },
    SLT0041AU: {
      Description: "Insync Global Capital Aware",
    },
    SLT0051AU: {
      Description: "Smarter Money Higher Income Direct Inv",
    },
    SLT0052AU: {
      Description: "Smarter Money Higher Income Assisted Inv",
    },
    SLT0054AU: {
      Description: "Reitway Global Property Portfolio",
    },
    SLT0055AU: {
      Description: "Clime International Retail",
    },
    SLT0057AU: {
      Description: "Reitway Global Property Portfolio - Inst",
    },
    SLT0059AU: {
      Description: "YBR Protected Equities Fund",
    },
    SLT0061AU: {
      Description: "NWQ Fiduciary Fund Wholesale B",
    },
    SLT0063AU: {
      Description: "NWQ Fiduciary Fund Indirect",
    },
    SLT0064AU: {
      Description: "NWQ Fiduciary Fund Direct",
    },
    SLT0065AU: {
      Description: "ChinaAMC China Opportunities Fund",
    },
    SLT0068AU: {
      Description: "Bateau Global Opportunities",
    },
    SLT1239AU: {
      Description: "Clime Australian Income Retail",
    },
    SLT2171AU: {
      Description: "Nanuk New World",
    },
    SLT2562AU: {
      Description: "Smarter Money Long-Short Credit",
    },
    SLT3458AU: {
      Description: "Smarter Money Long-Short Credit Instl",
    },
    SLT5667AU: {
      Description: "Clime Smaller Companies Retail",
    },
    SLT7141AU: {
      Description: "Smarter Money Higher Income Instl A",
    },
    SMF0107AU: {
      Description: "IOOF MultiMix W Aus Property Trust",
    },
    SOL0001AU: {
      Description: "Solaris Core Australian Equity PA",
    },
    SPC3112AU: {
      Description: "Diversified Commercial Income",
    },
    SPI0001AU: {
      Description: "Spire W Alternative Income No.1 (AUD)",
    },
    SPI0513AU: {
      Description: "Spire Multifamily Value I (AUD)",
    },
    SPI0659AU: {
      Description: "Spire Branford Castle US Prvt Eq II(AUD)",
    },
    SPI1337AU: {
      Description: "Spire USA Multifamily IV (AUD)",
    },
    SPI1485AU: {
      Description: "Spire Oaktree Opps XI (AUD) Frst Cls",
    },
    SSB0009AU: {
      Description: "Legg Mason Martin Currie Select Opps A",
    },
    SSB0014AU: {
      Description: "Legg Mason Brandywine Glb Oppc Fxd Inc A",
    },
    SSB0026AU: {
      Description: "Legg Mason Martin Currie Real Income A",
    },
    SSB0027AU: {
      Description: "Legg Mason Martin Currie Real Income X",
    },
    SSB0028AU: {
      Description: "Legg Mason Brandywine Glb Oppc Fxd Inc I",
    },
    SSB0043AU: {
      Description: "Legg Mason Martin Currie Equity Income A",
    },
    SSB0044AU: {
      Description: "Legg Mason Martin Currie Equity Income X",
    },
    SSB0061AU: {
      Description: "Legg Mason Martin Currie Divers Inc Tr",
    },
    SSB0064AU: {
      Description: "Legg Mason Martin Currie Eth Val WithInc",
    },
    SSB0066AU: {
      Description: "Legg Mason Martin Currie Glbl LT Uncon A",
    },
    SSB0070AU: {
      Description: "Legg Mason Western Asset Macro Opps Bd A",
    },
    SSB0072AU: {
      Description: "Legg Mason Martin Currie Equity Income M",
    },
    SSB0122AU: {
      Description: "Legg Mason Western Asset Aus Bd A",
    },
    SSB0125AU: {
      Description: "Legg Mason Martin Currie Sust Eq A",
    },
    SSB0126AU: {
      Description: "Legg Mason QS Investors Global Equity A",
    },
    SSB0128AU: {
      Description: "Legg Mason Martin Currie Property Secs A",
    },
    SSB0130AU: {
      Description: "Legg Mason Martin Currie Tact Allc A",
    },
    SSB0131AU: {
      Description: "Legg Mason Western Asset Cash Plus A",
    },
    SSB0515AU: {
      Description: "Legg Mason Brandywine Glb Inc Optr",
    },
    SSB3125AU: {
      Description: "Legg Mason QS Investors Glb Rspnb Inv F",
    },
    SSB3825AU: {
      Description: "Legg Mason Western Asset Global Bond B",
    },
    SSB3982AU: {
      Description: "Legg Mason Western Asset Aust Cr SMAsh",
    },
    SSB4078AU: {
      Description: "Legg Mason Brandywine Glb Inc Optr X",
    },
    SSB4647AU: {
      Description: "RARE Infrastructure Income B",
    },
    SSB4946AU: {
      Description: "Legg Mason Martin Currie Ethical Inc Fd",
    },
    SSB5738AU: {
      Description: "Legg Mason QS Investors Glb Rspnb Inv A",
    },
    SSB5987AU: {
      Description: "Legg Mason Western Asset Global Bond X",
    },
    SSB7887AU: {
      Description: "Legg Mason Brandywine Glb Inc Optr B",
    },
    SSB8320AU: {
      Description: "Legg Mason Western Asset Global Bond A",
    },
    SST0003AU: {
      Description: "State Street Australian Cash Trust",
    },
    SST0004AU: {
      Description: "State Street Australian Equities Idx Tr",
    },
    SST0005AU: {
      Description: "State Street Australian Fixed Inc Idx Tr",
    },
    SST0007AU: {
      Description: "State Street Australian Lstd Prpt Idx Tr",
    },
    SST0009AU: {
      Description: "State Street Global Fixed Income Idx Tr",
    },
    SST0010AU: {
      Description: "State Street Global Index Plus Trust",
    },
    SST0013AU: {
      Description: "State Street International Eqs Idx Tr",
    },
    SST0016AU: {
      Description: "State Street Passive Balanced Trust",
    },
    SST0021AU: {
      Description: "State Street Global Index Plus (Hdg) Tr",
    },
    SST0022AU: {
      Description: "State Street International Eqs Idx Hg Tr",
    },
    SST0048AU: {
      Description: "State Street Australian Equity",
    },
    SST0050AU: {
      Description: "State Street Global Equity",
    },
    SST0052AU: {
      Description: "State Street Multi-Asset Builder",
    },
    SST0057AU: {
      Description: "State Street Climate ESG Intl Eq",
    },
    SST4725AU: {
      Description: "State Street Floating Rate Fund",
    },
    STE0001AU: {
      Description: "Sterling Units",
    },
    STL0001AU: {
      Description: "Sandhurst Cash Common Fund",
    },
    STL0002AU: {
      Description: "Sandhurst Select Mortgage",
    },
    STL0008AU: {
      Description: "Sandhurst BMF-Bendigo Conservative",
    },
    STL0009AU: {
      Description: "Sandhurst BMF-Bendigo Balanced",
    },
    STL0010AU: {
      Description: "Sandhurst BMF-Bendigo Growth",
    },
    STL0011AU: {
      Description: "Sandhurst BMF-Sandhurst Future Leaders",
    },
    STL0012AU: {
      Description: "Bendigo Conservative WS",
    },
    STL0013AU: {
      Description: "Bendigo Balanced Wholesale",
    },
    STL0014AU: {
      Description: "Bendigo Growth WS",
    },
    STL0015AU: {
      Description: "Bendigo Global Share",
    },
    STL0027AU: {
      Description: "Sandhurst Strategic Income A",
    },
    STL0029AU: {
      Description: "Bendigo Defensive WS",
    },
    STL0030AU: {
      Description: "Bendigo High Growth WS",
    },
    STL0031AU: {
      Description: "Bendigo Defensive Index",
    },
    STL0032AU: {
      Description: "Bendigo Conservative Index",
    },
    STL0033AU: {
      Description: "Bendigo Balanced Index",
    },
    STL0034AU: {
      Description: "Bendigo Growth Index",
    },
    STL0035AU: {
      Description: "Bendigo High Growth Index",
    },
    STL0044AU: {
      Description: "Sandhurst Strategic Income B",
    },
    STL0051AU: {
      Description: "Bendigo Diversified Fixed Interest Fund",
    },
    STL0055AU: {
      Description: "Bendigo Socially Responsible Growth",
    },
    STL0100AU: {
      Description: "Sandhurst BMF-Sandhurst Ind Share",
    },
    STL0101AU: {
      Description: "Sandhurst IML Industrial Share",
    },
    STP9437AU: {
      Description: "Samuel Terry Absolute Return Group A",
    },
    SUN0021AU: {
      Description: "Nikko AM Growth NEF",
    },
    SUN0023AU: {
      Description: "Nikko AM Conservative NEF",
    },
    SUN0031AU: {
      Description: "Nikko AM Global Share",
    },
    SUN0136AU: {
      Description: "Nikko AM Balanced NEF",
    },
    SWI1413AU: {
      Description: "WCM Quality Global Growth (Managed)",
    },
    SWI4949AU: {
      Description: "WCM Quality Global Growth (Mng) B Hdg",
    },
    SWI9720AU: {
      Description: "WCM International Small Cap Gr (Managed)",
    },
    TAM0001AU: {
      Description: "Addwealth Achiever Fund",
    },
    TCA0002AU: {
      Description: "The Trust Company Share Imputation",
    },
    TCA3906AU: {
      Description: "MCP Wholesale Investments Trust",
    },
    TCN0001AU: {
      Description: "Terra Capital Ethical Emerging Companies",
    },
    TER0001AU: {
      Description: "Terra Capital Natural Resource Fund",
    },
    TGP0005AU: {
      Description: "Armytage Strategic Opportunities Ret",
    },
    TGP0006AU: {
      Description: "Nikko AM New Asia",
    },
    TGP0008AU: {
      Description: "RARE Infrastructure Value Hedged",
    },
    TGP0014AU: {
      Description: "Third Link Growth",
    },
    TGP0015AU: {
      Description: "RARE Emerging Markets",
    },
    TGP0016AU: {
      Description: "RARE Infrastructure Income",
    },
    TGP0034AU: {
      Description: "RARE Infrastructure Value Unhedged",
    },
    TGY0003AU: {
      Description: "Trilogy Monthly Income Trust",
    },
    TGY0027AU: {
      Description: "Ravenhall Office Trust",
    },
    TGY0029AU: {
      Description: "Tower Central Trust",
    },
    TGY0033AU: {
      Description: "Acacia Ridge Industrial",
    },
    TGY3323AU: {
      Description: "Cannon Hill Office Trust",
    },
    TGY8645AU: {
      Description: "Milton Office Trust",
    },
    TGY9789AU: {
      Description: "Trilogy Enhanced Cash",
    },
    TMI0582AU: {
      Description: "TAIM ASX200 Momentum A",
    },
    TMI1893AU: {
      Description: "TAIM ASX200 Leveraged Momentum A",
    },
    TOT3036AU: {
      Description: "Totus High Conviction Ordinary",
    },
    TOT7316AU: {
      Description: "Totus Alpha Fund - Platform Class",
    },
    TPI8215AU: {
      Description: "TPI Australian Share",
    },
    TPT0001AU: {
      Description: "TPT Fixed Term",
    },
    TPT0002AU: {
      Description: "TPT Long Term",
    },
    TPT0003AU: {
      Description: "TPT Select Mortgage",
    },
    TYN0028AU: {
      Description: "Nikko AM Australian Share W",
    },
    TYN0038AU: {
      Description: "Nikko AM Australian Share Income",
    },
    TYN0040AU: {
      Description: "Nikko AM Australian Share Concntr",
    },
    TYN0054AU: {
      Description: "Nikko AM Australian Share Concntr LT",
    },
    TYN0104AU: {
      Description: "Nikko AM Australian Bond",
    },
    UBS0003AU: {
      Description: "UBS Income Solution Fund",
    },
    UBS0004AU: {
      Description: "UBS Australian Small Companies Fund",
    },
    UBS0024AU: {
      Description: "UBS-HALO Australian Share Fund",
    },
    UBS0036AU: {
      Description: "UBS Tactical Beta Fund - Conservative",
    },
    UBS0037AU: {
      Description: "UBS Tactical Beta Fund - Growth",
    },
    UBS0041AU: {
      Description: "UBS Tactical Beta Fund - Balanced",
    },
    UBS0057AU: {
      Description: "UBS Microcap Fund",
    },
    UBS0063AU: {
      Description: "UBS Australian Small Companies SIV Fund",
    },
    UBS0064AU: {
      Description: "UBS Clarion Global Infrastructure SecsFd",
    },
    UBS0103AU: {
      Description: "UBS Global Credit Fund",
    },
    UBS2393AU: {
      Description: "UBS Global High Conviction Fund",
    },
    UBS8018AU: {
      Description: "UBS Emerging Markets Equity Fund",
    },
    UCM0001AU: {
      Description: "U Ethical Enhanced Cash Portfolio",
    },
    UFM0051AU: {
      Description: "IOOF MultiMix Moderate Trust",
    },
    UFM0060AU: {
      Description: "IOOF Cash Management Trust B",
    },
    UGF0001AU: {
      Description: "U Ethical Australian Equities Trust",
    },
    UGF0002AU: {
      Description: "U Ethical Enhanced Cash Trust",
    },
    UGF2230AU: {
      Description: "U Ethical Australian Equities Tr Wholsl",
    },
    UGL0002AU: {
      Description: "U Ethical Growth Portfolio",
    },
    VAN0001AU: {
      Description: "Vanguard Australian Fixed Interest Index",
    },
    VAN0002AU: {
      Description: "Vanguard Australian Shares Index",
    },
    VAN0003AU: {
      Description: "Vanguard International Shares Index",
    },
    VAN0004AU: {
      Description: "Vanguard Australian Property Secs Idx",
    },
    VAN0005AU: {
      Description: "Vanguard Emerging Markets Shares Index",
    },
    VAN0010AU: {
      Description: "Vanguard Index Australian Shares",
    },
    VAN0011AU: {
      Description: "Vanguard Index International Shares",
    },
    VAN0012AU: {
      Description: "Vanguard Index Australian Property Secs",
    },
    VAN0013AU: {
      Description: "Vanguard LifeStrategy Conservative",
    },
    VAN0014AU: {
      Description: "Vanguard LifeStrategy Growth",
    },
    VAN0015AU: {
      Description: "Vanguard LifeStrategy High Growth",
    },
    VAN0017AU: {
      Description: "Vanguard High Yield Australian Shares",
    },
    VAN0018AU: {
      Description: "Vanguard International Property Secs Idx",
    },
    VAN0019AU: {
      Description: "Vanguard International Prpty Secs IdxHdg",
    },
    VAN0020AU: {
      Description: "Vanguard Cash Reserve",
    },
    VAN0021AU: {
      Description: "Vanguard International Small Companies",
    },
    VAN0022AU: {
      Description: "Vanguard Intl Small Companies Index Hgd",
    },
    VAN0023AU: {
      Description: "Vanguard Global Infrastructure Index",
    },
    VAN0024AU: {
      Description: "Vanguard Global Infrastructure Index Hgd",
    },
    VAN0025AU: {
      Description: "Vanguard Australian Govt Bond Index",
    },
    VAN0042AU: {
      Description: "Vanguard Diversified Bond Index",
    },
    VAN0064AU: {
      Description: "Vanguard Australian Infl-Lnkd Bond Idx",
    },
    VAN0065AU: {
      Description: "Vanguard Aust Corporate Fixed Interest",
    },
    VAN0066AU: {
      Description: "Vanguard Intl Shares Index Hgd NZD",
    },
    VAN0068AU: {
      Description: "Vanguard Global Minimum Volatility",
    },
    VAN0070AU: {
      Description: "Vanguard Managed Payout",
    },
    VAN0074AU: {
      Description: "Vanguard Global Value Equity",
    },
    VAN0100AU: {
      Description: "Vanguard Investor Cash Plus",
    },
    VAN0101AU: {
      Description: "Vanguard Index Diversified Bond",
    },
    VAN0102AU: {
      Description: "Vanguard Cash Plus",
    },
    VAN0103AU: {
      Description: "Vanguard International Fxd Intr Idx Hdg",
    },
    VAN0104AU: {
      Description: "Vanguard Australian Shares High Yield",
    },
    VAN0105AU: {
      Description: "Vanguard International Shrs Idx Hdg AUD",
    },
    VAN0106AU: {
      Description: "Vanguard International Crdt Secs Idx Hdg",
    },
    VAN0107AU: {
      Description: "Vanguard Index Hedged International Shrs",
    },
    VAN0108AU: {
      Description: "Vanguard Balanced Index Fund",
    },
    VAN0109AU: {
      Description: "Vanguard Conservative Index",
    },
    VAN0110AU: {
      Description: "Vanguard Growth Index",
    },
    VAN0111AU: {
      Description: "Vanguard High Growth Index",
    },
    VAN0124AU: {
      Description: "Vanguard LifeStrategy Balanced",
    },
    VAN0221AU: {
      Description: "Vanguard Active Emerging Market Equity",
    },
    VAN0722AU: {
      Description: "Vanguard Active Global Growth",
    },
    VAN1233AU: {
      Description: "Vanguard Etclly Cons Glb Agg Bd IdxHNZDH",
    },
    VAN1579AU: {
      Description: "Vanguard Intl Shares Sel Exclusions Idx",
    },
    VAN2989AU: {
      Description: "Vanguard Etclly Cons Glb Agg Bd IdxHAUDH",
    },
    VAN3200AU: {
      Description: "Vanguard Intl Shrs Sel Excls Idx Hdg AUD",
    },
    VAN3759AU: {
      Description: "Vanguard Global Multi-Factor",
    },
    VAN3932AU: {
      Description: "Vanguard Active Global Credit Bond",
    },
    VAN4013AU: {
      Description: "Vanguard Ethically Cons Intl ShrsIdxNZDH",
    },
    VAN8175AU: {
      Description: "Vanguard Ethically Cons Intl Shrs Idx",
    },
    VAN8287AU: {
      Description: "Vanguard Intl Shs Sel Exclusions IdxNZDH",
    },
    VAN9309AU: {
      Description: "Vanguard Global Agg Bd Indx Fd (Hdg)",
    },
    VEN0007AU: {
      Description: "All Star KFM Income",
    },
    VEN0008AU: {
      Description: "Ventura Global Opportunities",
    },
    VEN0009AU: {
      Description: "Ventura High Growth 100",
    },
    VEN0026AU: {
      Description: "Ventura Aust Opportunities A",
    },
    VEN0027AU: {
      Description: "Ventura Growth 70 A",
    },
    VEN0028AU: {
      Description: "Ventura Diversified 50 A",
    },
    VEN0029AU: {
      Description: "Ventura Conservative A",
    },
    VEN0030AU: {
      Description: "Ventura Australian Shares A",
    },
    VEN0031AU: {
      Description: "Ventura International Shares A",
    },
    VEN0032AU: {
      Description: "Ventura Growth 90",
    },
    VIL0001AU: {
      Description: "Infrastructure Partners Invst Fd Core",
    },
    VPF4993AU: {
      Description: "Valara Partners Ordinary",
    },
    WAC3695AU: {
      Description: "Progressive Global",
    },
    WAR0002AU: {
      Description: "Merlon Australian Equity Income (CNA)",
    },
    WAR0005AU: {
      Description: "SG Hiscock Property Securities Closed",
    },
    WCL0001AU: {
      Description: "WaveStone Capital Absolute Return",
    },
    WFS0003AU: {
      Description: "BT Investor Choice Cons Gr",
    },
    WFS0004AU: {
      Description: "Pendal Global Share",
    },
    WFS0005AU: {
      Description: "Pendal Enhanced Global Fixed Interest",
    },
    WFS0007AU: {
      Description: "Pendal Enhanced Australian Shares",
    },
    WFS0011AU: {
      Description: "BT Investor Choice Cash Management",
    },
    WFS0013AU: {
      Description: "BT Investor Choice Australia Bond",
    },
    WFS0021AU: {
      Description: "BT Investor Choice Aus Tax Eff",
    },
    WFS0022AU: {
      Description: "BT Investor Choice Aus Gr",
    },
    WFS0023AU: {
      Description: "BT Investor Choice Intl Share",
    },
    WFS0032AU: {
      Description: "BT Investor Choice Mod Gr",
    },
    WFS0033AU: {
      Description: "BT Investor Choice Bal Gr",
    },
    WFS0034AU: {
      Description: "BT Investor Choice Dynamic Growth",
    },
    WFS0070AU: {
      Description: "BT PPSI-BT WS Ptnr Aus Shr Gr 1",
    },
    WFS0074AU: {
      Description: "BT PPSI-BT WS Core Hedged Global",
    },
    WFS0075AU: {
      Description: "BT PPSI-MLC Income Builder",
    },
    WFS0076AU: {
      Description: "BT PPSI-Schroder W Aus Equity",
    },
    WFS0077AU: {
      Description: "BT PPSI-Schroder Hybrid Securities",
    },
    WFS0078AU: {
      Description: "BT PPSI-UBS Aus Share",
    },
    WFS0079AU: {
      Description: "BT PPSI-UBS International Share",
    },
    WFS0089AU: {
      Description: "BT-BlackRock Scientific Div Gr",
    },
    WFS0090AU: {
      Description: "BT-Aberdeen Act Hgd Intl Eq",
    },
    WFS0091AU: {
      Description: "BT-Investor Mutual Aus Shares",
    },
    WFS0092AU: {
      Description: "BT-Platinum International",
    },
    WFS0093AU: {
      Description: "BT-Schroder Aus Share",
    },
    WFS0094AU: {
      Description: "BT-Schroder Balanced",
    },
    WFS0095AU: {
      Description: "BT Schroder Credit Securities",
    },
    WFS0097AU: {
      Description: "BT-Perpetual Cons Gr",
    },
    WFS0098AU: {
      Description: "BT-UBS Diversified Fixed Income",
    },
    WFS0101AU: {
      Description: "Westpac Aus Property Secs Retail",
    },
    WFS0102AU: {
      Description: "BT Investor Choice All Aus Gr",
    },
    WFS0103AU: {
      Description: "Westpac Aus Tax Eff Retail",
    },
    WFS0207AU: {
      Description: "BT PPSI-BlackRock Scientific Div Gr",
    },
    WFS0208AU: {
      Description: "BT PPSI-BlackRock Scientific Div Stb",
    },
    WFS0209AU: {
      Description: "BT PPSI-BlackRock WS Balanced",
    },
    WFS0211AU: {
      Description: "BT PPSI-BT WS Active Bal",
    },
    WFS0212AU: {
      Description: "BT PPSI-BT Sustainable Conservative",
    },
    WFS0214AU: {
      Description: "BT PPSI-Westpac Australia Bond",
    },
    WFS0216AU: {
      Description: "BT PPSI-Westpac Aus Gr",
    },
    WFS0217AU: {
      Description: "BT PPSI-Westpac Aus Property Secs",
    },
    WFS0218AU: {
      Description: "BT PPSI-Westpac Aus Tax Eff",
    },
    WFS0219AU: {
      Description: "BT PPSI-Westpac Bal Gr",
    },
    WFS0221AU: {
      Description: "BT PPSI-Westpac Diversified Growth",
    },
    WFS0222AU: {
      Description: "BT PPSI-Westpac Dynam Gr",
    },
    WFS0223AU: {
      Description: "BT PPSI-Westpac Moderate Growth",
    },
    WFS0224AU: {
      Description: "BT PPSI-Westpac Intl Share",
    },
    WFS0226AU: {
      Description: "BT PPSI-BT Institutional Enh Int Fix Inc",
    },
    WFS0227AU: {
      Description: "BT PPSI-BT Institutional Managed Cash",
    },
    WFS0228AU: {
      Description: "BT PPSI-BT Institutional Enhanced Cash",
    },
    WFS0230AU: {
      Description: "BT PPSI-BlackRock Scientific Intl Eq",
    },
    WFS0231AU: {
      Description: "BT PPSI-BT WS Asian",
    },
    WFS0232AU: {
      Description: "BT PPSI-BT Aus Share",
    },
    WFS0233AU: {
      Description: "BT PPSI-BT WS Balanced Returns",
    },
    WFS0234AU: {
      Description: "BT PPSI-BT Cons Outlook",
    },
    WFS0235AU: {
      Description: "BT PPSI-MLC WS Horizon 5 Growth",
    },
    WFS0236AU: {
      Description: "BT PPSI-MLC WS Property Securities",
    },
    WFS0237AU: {
      Description: "BT PPSI-BT WS Core Aus Share",
    },
    WFS0238AU: {
      Description: "BT PPSI-BT WS Smaller Companies",
    },
    WFS0245AU: {
      Description: "Pendal Managed Cash",
    },
    WFS0254AU: {
      Description: "BT PPSI-BT WS European",
    },
    WFS0255AU: {
      Description: "BT PPSI-BT WS Intl Shares",
    },
    WFS0256AU: {
      Description: "BT PPSI-CFS WS Diversified",
    },
    WFS0257AU: {
      Description: "BT PPSI-CFS WS High Growth",
    },
    WFS0258AU: {
      Description: "BT PPSI-CFS Imputation",
    },
    WFS0261AU: {
      Description: "BT PPSI-Macquarie WS Property Securities",
    },
    WFS0262AU: {
      Description: "BT PPSI-MLC Inv Aus Share",
    },
    WFS0263AU: {
      Description: "BT PPSI-MLC WS Horizon 4 Balanced",
    },
    WFS0264AU: {
      Description: "BT PPSI-MLC Global Share",
    },
    WFS0266AU: {
      Description: "BT PPSI-BlackRock WS Aus Share",
    },
    WFS0268AU: {
      Description: "BT PPSI-BT WS Core Gbl Share",
    },
    WFS0285AU: {
      Description: "Pendal Sustainable Australian Share",
    },
    WFS0288AU: {
      Description: "BT PPSI-Aberdeen SI Act Hgd Intl Eq",
    },
    WFS0291AU: {
      Description: "BT PPSI-Westpac Ins Aus Sust Shr",
    },
    WFS0297AU: {
      Description: "BT PPSI-Macquarie Mas Fixed Interest",
    },
    WFS0298AU: {
      Description: "BT PPSI-Macquarie Mas Property Secs",
    },
    WFS0299AU: {
      Description: "BT PPSI-Macquarie Mas Enhanced Cash",
    },
    WFS0303AU: {
      Description: "BT PPSI-BlackRock Scientific Aus Eq",
    },
    WFS0304AU: {
      Description: "BT PPSI-Ironbark Global Div Alternatives",
    },
    WFS0305AU: {
      Description: "BT PPSI-Aberdeen Australian Equities",
    },
    WFS0327AU: {
      Description: "BT Investor Choice Aus Tax Eff NE",
    },
    WFS0329AU: {
      Description: "BT Investor Choice Aus Prp Secs NEF",
    },
    WFS0333AU: {
      Description: "BT Investor Choice Mod Gr NEF",
    },
    WFS0334AU: {
      Description: "BT Investor Choice Bal Gr NEF",
    },
    WFS0363AU: {
      Description: "Pendal Enhanced Property Securities",
    },
    WFS0367AU: {
      Description: "BT PPSI-BT WS Geared Imputation",
    },
    WFS0377AU: {
      Description: "Pendal Enhanced Cash",
    },
    WFS0379AU: {
      Description: "BT WE BT Macquarie Diversified Fixed Int",
    },
    WFS0382AU: {
      Description: "BT WE BT PM Capital Enhanced Yield",
    },
    WFS0385AU: {
      Description: "BT WE BT Investors Mutual Industrial Shr",
    },
    WFS0387AU: {
      Description: "BT Global Property Retail",
    },
    WFS0388AU: {
      Description: "BT WE Vanguard Australian Shares Index",
    },
    WFS0389AU: {
      Description: "BT WE Vanguard International Shares Indx",
    },
    WFS0392AU: {
      Description: "BT PPSI-Platinum International",
    },
    WFS0400AU: {
      Description: "BT WE BlackRock Scntf Idx Aus Lstd Prpty",
    },
    WFS0409AU: {
      Description: "BT WE Fidelity Australian Equities",
    },
    WFS0411AU: {
      Description: "BT WE Tyndall Australian Share",
    },
    WFS0413AU: {
      Description: "BT WE CFS Global Resources",
    },
    WFS0414AU: {
      Description: "BT WE Ironbark GTP Global Equity Thtc",
    },
    WFS0415AU: {
      Description: "BT WE T. Rowe Price Global Equity",
    },
    WFS0416AU: {
      Description: "BT WE Templeton Global Equity",
    },
    WFS0417AU: {
      Description: "BT WE Ironbark Global Property Secs",
    },
    WFS0421AU: {
      Description: "BT WE Ausbil Australian Active Equity",
    },
    WFS0422AU: {
      Description: "BT WE Ausbil Emerging Leaders",
    },
    WFS0426AU: {
      Description: "BT WE BT Enhanced Cash",
    },
    WFS0427AU: {
      Description: "BT WE UBS Cash",
    },
    WFS0428AU: {
      Description: "BT WE Advance Aus Fxd Intr Mlt-Blnd",
    },
    WFS0429AU: {
      Description: "BT WE Advance Intl Fxd Intr Mlt-Blnd",
    },
    WFS0430AU: {
      Description: "BT WE OnePath Diversified Fixed Interest",
    },
    WFS0431AU: {
      Description: "BT WE Macquarie Income Opportunities",
    },
    WFS0432AU: {
      Description: "BT WE Schroder Fixed Income",
    },
    WFS0433AU: {
      Description: "BT WE Aberdeen Emerging Opportunities",
    },
    WFS0435AU: {
      Description: "BT WE BlackRock Global Allocation",
    },
    WFS0439AU: {
      Description: "BT WE Zurich Global Thematic Share",
    },
    WFS0440AU: {
      Description: "BT WE Advance Defensive Multi-Blend",
    },
    WFS0441AU: {
      Description: "BT WE Advance Moderate Multi-Blend",
    },
    WFS0442AU: {
      Description: "BT WE Advance Balanced Multi-Blend",
    },
    WFS0443AU: {
      Description: "BT WE Advance Growth Multi-Blend",
    },
    WFS0444AU: {
      Description: "BT WE Advance High Growth Multi-Blend",
    },
    WFS0446AU: {
      Description: "BT WE APN AREIT",
    },
    WFS0447AU: {
      Description: "BT WE Lazard Glbl Listed Infrastructure",
    },
    WFS0486AU: {
      Description: "Altius Bond",
    },
    WFS0547AU: {
      Description: "Talaria Global Equity Hedged",
    },
    WFS0588AU: {
      Description: "BT Index Defensive",
    },
    WFS0589AU: {
      Description: "BT Index Moderate",
    },
    WFS0590AU: {
      Description: "BT Index Balanced",
    },
    WFS0591AU: {
      Description: "BT Index Growth",
    },
    WFS0592AU: {
      Description: "BT Index High Growth",
    },
    WFS0858AU: {
      Description: "Magellan Wholesale Plus Infrastructure",
    },
    WFS0859AU: {
      Description: "Pendal Wholesale Plus Active Cnsrv",
    },
    WFS0860AU: {
      Description: "Pendal Wholesale Plus Active Moderate",
    },
    WFS0861AU: {
      Description: "Pendal Wholesale Plus Active Balanced",
    },
    WFS0862AU: {
      Description: "Pendal Wholesale Plus Active Growth",
    },
    WFS0863AU: {
      Description: "Pendal Wholesale Plus Active High Growth",
    },
    WFS0864AU: {
      Description: "Antipodes Wholesale Plus Global",
    },
    WFS0865AU: {
      Description: "Perpetual Wholesale Plus Global Share",
    },
    WFS0866AU: {
      Description: "Schroder WS Plus Real Return CPI Plus 5%",
    },
    WFS0867AU: {
      Description: "Macquarie WS Plus Int Infras Sec Hdg",
    },
    WFS1033AU: {
      Description: "Antipodes Wholesale Plus Asia Fund",
    },
    WFS1338AU: {
      Description: "T. Rowe Price Global Focused Equity MPS",
    },
    WFS1667AU: {
      Description: "Russell Wholesale Plus Emerging Markets",
    },
    WFS1859AU: {
      Description: "Janus Henderson AUS Fxd Intst MPS",
    },
    WFS2157AU: {
      Description: "Realindex Australian Shares MPS",
    },
    WFS2234AU: {
      Description: "River and Mercantile Global Equity MPS",
    },
    WFS2393AU: {
      Description: "Pendal Australian Fixed Interest MPS",
    },
    WFS2912AU: {
      Description: "Western Asset Global Bond MPS",
    },
    WFS3615AU: {
      Description: "BlackRock Wholesale Plus Style Adv(Aust)",
    },
    WFS3742AU: {
      Description: "PIMCO Global Fixed Interest MPS",
    },
    WFS4021AU: {
      Description: "Blended Global Equities Hedged MPS",
    },
    WFS4487AU: {
      Description: "Solaris Core Australian Equity MPS",
    },
    WFS4874AU: {
      Description: "AMP Capital Australian Bond MPS",
    },
    WFS5839AU: {
      Description: "Fidelity Australian Opportunities MPS",
    },
    WFS5913AU: {
      Description: "Wellington Global Equity MPS",
    },
    WFS6354AU: {
      Description: "Ardevora Global Equities MPS",
    },
    WFS8168AU: {
      Description: "Nikko AM Wholesale Plus Aus Shr Inc Fd",
    },
    WFS8263AU: {
      Description: "Heitman Global Property MPS",
    },
    WFS8908AU: {
      Description: "Spheria Wholesale Plus Aus Smllr Coms Fd",
    },
    WFS9233AU: {
      Description: "Wellington Global Bond MPS",
    },
    WGT0001AU: {
      Description: "Talaria Global Equity - Foundation",
    },
    WGT7198AU: {
      Description: "Wingate Investment Partners Trust No. 3",
    },
    WHT0008AU: {
      Description: "Spheria Australian Smaller Companies",
    },
    WHT0009AU: {
      Description: "Solaris Core Australian Equity Inst",
    },
    WHT0010AU: {
      Description: "Solaris High Alpha Australian Eq Inst",
    },
    WHT0012AU: {
      Description: "Solaris Core Australian Equity Retail",
    },
    WHT0014AU: {
      Description: "Resolution Capital Real Assets",
    },
    WHT0015AU: {
      Description: "Resolution Capital Global Property Secs",
    },
    WHT0016AU: {
      Description: "Solaris High Alpha Australian Eq Retail",
    },
    WHT0017AU: {
      Description: "Solaris Core Australian Equity PFO",
    },
    WHT0023AU: {
      Description: "Omega Global Corporate Bond",
    },
    WHT0024AU: {
      Description: "Resolution Capital Global Prp Secs (WS)",
    },
    WHT0025AU: {
      Description: "Spheria Opportunities",
    },
    WHT0039AU: {
      Description: "Plato Australian Shares Income",
    },
    WHT0044AU: {
      Description: "Capital Group Global Equity (AU)",
    },
    WHT0051AU: {
      Description: "Omega Global Listed Infrastructure",
    },
    WHT0053AU: {
      Description: "Capital Group Emerging Mkts Ttl Opps(AU)",
    },
    WHT0057AU: {
      Description: "Antipodes Global Fund - Long P",
    },
    WHT0061AU: {
      Description: "Plato Global Shares Income A",
    },
    WHT0062AU: {
      Description: "Plato Global Shares Income F",
    },
    WHT0066AU: {
      Description: "Spheria Australian Microcap",
    },
    WHT0068AU: {
      Description: "Plato Australian Shares Core",
    },
    WHT0070AU: {
      Description: "Hyperion Global Growth Companies A",
    },
    WHT1468AU: {
      Description: "Two Trees Global Macro Fund Cl A",
    },
    WHT2080AU: {
      Description: "Resolution Capital Glb Ppty Sec UH SII B",
    },
    WHT2589AU: {
      Description: "Solaris Australian Equity Income",
    },
    WHT3724AU: {
      Description: "Palisade's Unlisted Infrastructure Trust",
    },
    WHT3810AU: {
      Description: "Firetrail Australian High Conviction",
    },
    WHT3859AU: {
      Description: "Solaris Australian Equity Long Short Fd",
    },
    WHT4190AU: {
      Description: "Two Trees Global Macro Fund Cl F",
    },
    WHT5134AU: {
      Description: "Firetrail Absolute Return",
    },
    WHT6597AU: {
      Description: "Pinnacle BNY Mellon Global Infras Yld",
    },
    WHT6704AU: {
      Description: "Spheria Global Microcap",
    },
    WHT6999AU: {
      Description: "Plato Global Shares Income P",
    },
    WHT8435AU: {
      Description: "Hyperion Global Growth Companies B",
    },
    WHT8557AU: {
      Description: "Hyperion Global Growth Companies C",
    },
    WHT9368AU: {
      Description: "Longwave Australian Small Companies A",
    },
    WMF0001AU: {
      Description: "Watermark Market Neutral Trust A",
    },
    WPC0005AU: {
      Description: "Specialist Australian Shares",
    },
    WPC0007AU: {
      Description: "Foundation Assertive",
    },
    WPC0008AU: {
      Description: "Foundation Balanced",
    },
    WPC0010AU: {
      Description: "Foundation Conservative",
    },
    WPC0011AU: {
      Description: "Specialist Global Shares Fund",
    },
    WPC0012AU: {
      Description: "Specialist Property",
    },
    WPC0014AU: {
      Description: "Specialist Dynamic Allocation",
    },
    WPC0028AU: {
      Description: "Strategic Cash Plus",
    },
    WPC0529AU: {
      Description: "Daintree High Income Trust NZD Unit Cl",
    },
    WPC0696AU: {
      Description: "Daintree Core Income Trust NZD",
    },
    WPC1583AU: {
      Description: "Daintree High Income Trust AUD Unit Cl",
    },
    WPC1770AU: {
      Description: "Perennial Value Future Leaders Trust",
    },
    WPC1963AU: {
      Description: "Daintree Core Income Trust",
    },
    WPC3982AU: {
      Description: "Perennial Value Microcap Opportunities",
    },
    WPC5600AU: {
      Description: "Perennial Smaller Companies Sust Fut Tr",
    },
    WPC6780AU: {
      Description: "Perennial Value Active Plus Shares Trust",
    },
    WPC7408AU: {
      Description: "Perennial Value Emerging Companies Trust",
    },
    WPC8486AU: {
      Description: "Perennial Private to Public Opps",
    },
    WRA2298AU: {
      Description: "Warakirri Diversified Agriculture",
    },
    WRA6514AU: {
      Description: "Warakirri Cash Deposits Trust",
    },
    WRA7701AU: {
      Description: "Warakirri Ethical Australian Equities",
    },
    YOC0018AU: {
      Description: "AUI Diversified Property Fund",
    },
    YOC0100AU: {
      Description: "AUI Property Income Fund W",
    },
    ZUR0059AU: {
      Description: "Zurich Investments Managed Growth",
    },
    ZUR0061AU: {
      Description: "Zurich Investments Gbl Thematic Shr",
    },
    ZUR0064AU: {
      Description: "Zurich Investments Aus Property Secs",
    },
    ZUR0143AU: {
      Description: "Zurich Investments Gbl Thematic Shr Pool",
    },
    ZUR0517AU: {
      Description: "Zurich Investments Hgd Gbl Thematic Shr",
    },
    ZUR0518AU: {
      Description: "Zurich Investments Uhgd Gbl Thematic Shr",
    },
    ZUR0580AU: {
      Description: "Zurich Investments Global Growth",
    },
    ZUR0581AU: {
      Description: "Zurich Investments Unhedged Global Gr",
    },
    ZUR0583AU: {
      Description: "Zurich Investments Small Companies",
    },
    ZUR0614AU: {
      Description: "Zurich Investments Emerging Markets Eq",
    },
    ZUR0617AU: {
      Description: "Zurich Investments Concentrated Glbl Gr",
    },
    ZUR7150AU: {
      Description: "Zurich Investments Small Companies D",
    },
  };
  var match = ticker in data ? data[ticker].Description : null;

  return match;
}
