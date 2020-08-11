function tickersToFundNames(ticker, region){

	var data = {
        "#ASX300": {
           "Description": "S&P/ASX 300 Index"
        },
        "#ASXSmallOrds": {
           "Description": "S&P/ASX Small Ordinaries Index"
        },
        "#NZX50": {
           "Description": "S&P/NZX 50 Index"
        },
        "#MSCIWorld": {
           "Description": "MSCI World Index"
        },
        "#MSCIWorldAUDHgd": {
           "Description": "MSCI World Index hedged to AUD"
        },
        "#MSCIWorldNZDHgd": {
           "Description": "MSCI World Index hedged to NZD"
        },
        "#MSCIEM": {
           "Description": "MSCI Emerging Markets"
        },
        "#AREIT": {
           "Description": "S&P Australia REIT Index"
        },
        "#DevREIT": {
           "Description": "S&P Developed REIT Index"
        },
        "#AusBondBankBill OR Cash": {
           "Description": "Bloomberg AusBond Bank Bill Index"
        },
        "#AusBondComposite": {
           "Description": "Bloomberg AusBond Composite 0+ Index"
        },
        "#FTSEWGBI1-5": {
           "Description": "FTSE WGBI 1-5 Index"
        },
        "#BarGlbAgg": {
           "Description": "Bloomberg Barclays Global Aggregate Bond Index"
        },
        "#BarGlbAggCredit": {
           "Description": "Bloomberg Barclays Global Aggregate Credit Bond Index"
        },
        "AU60PIM55650": {
           "Description": "1851 Emerging Companies"
        },
        "AU60BTA04528": {
           "Description": "1940's Lifestage Fund - A"
        },
        "AU60BTA04536": {
           "Description": "1950's Lifestage Fund - A"
        },
        "AU60BTA04544": {
           "Description": "1960's Lifestage Fund - A"
        },
        "AU60BTA04551": {
           "Description": "1970's Lifestage Fund - A"
        },
        "AU60BTA04569": {
           "Description": "1980's Lifestage Fund - A"
        },
        "AU60BTA04577": {
           "Description": "1990's Lifestage Fund - A"
        },
        "AU60BTA04585": {
           "Description": "2000's Lifestage Fund - A"
        },
        "AU60PLL21831": {
           "Description": "333 Exhibition Street Property Ordinary"
        },
        "AU60BFL73941": {
           "Description": "4D Emerging Markets Infrastructure"
        },
        "AU60BFL00191": {
           "Description": "4D Global Infrastructure"
        },
        "AU60ETL68268": {
           "Description": "8IP Australian Equity Impact"
        },
        "AU60FHT00126": {
           "Description": "8IP Australian Small Companies"
        },
        "AU60AMP20669": {
           "Description": "AB Advantage Dynamic Global Fixed Income"
        },
        "AU60ACM00057": {
           "Description": "AB Concentrated Australian Equities Fund"
        },
        "AU60ACM00016": {
           "Description": "AB Dynamic Global Fixed Income"
        },
        "AU60ACM00099": {
           "Description": "AB Global Equities"
        },
        "AU60ACM00065": {
           "Description": "AB Managed Volatility Equities"
        },
        "AU60ACM39501": {
           "Description": "AB Managed Volatility Equities - Green"
        },
        "AU60AMP91447": {
           "Description": "Aberdeen Advantage Emerging Opps Fd"
        },
        "AU60EQI72320": {
           "Description": "Aberdeen Standard Global Smaller Coms"
        },
        "AU60ETL01343": {
           "Description": "Aberdeen Std Absolute Return Glbl Bd Str"
        },
        "AU60CRS00058": {
           "Description": "Aberdeen Std Actvly Hdg Intl Eqs Fd"
        },
        "AU60EQI00289": {
           "Description": "Aberdeen Std Asian Opportunities Fd"
        },
        "AU60MGL01145": {
           "Description": "Aberdeen Std Australian Eqs Fd"
        },
        "AU60CRS00041": {
           "Description": "Aberdeen Std Australian Fixed Inc Fd"
        },
        "AU60CSA01318": {
           "Description": "Aberdeen Std Australian Small Coms Fd"
        },
        "AU60CSA00625": {
           "Description": "Aberdeen Std Diversified Fixed Inc Fd"
        },
        "AU60EQI06997": {
           "Description": "Aberdeen Std Emerging Mkt Lcl Ccy Dbt"
        },
        "AU60ETL00329": {
           "Description": "Aberdeen Std Emerging Opports Fd"
        },
        "AU60CRS00033": {
           "Description": "Aberdeen Std Ex-20 Australian Eqs Fd"
        },
        "AU60CSA01359": {
           "Description": "Aberdeen Std Fully Hdg Intl Eqs Fd"
        },
        "AU60ETL01301": {
           "Description": "Aberdeen Std Global Absolute Ret Strats"
        },
        "AU60ETL01327": {
           "Description": "Aberdeen Std Global Corporate Bond Fd"
        },
        "AU60CRS00082": {
           "Description": "Aberdeen Std Inflation Linked bd Fd"
        },
        "AU60EQI00156": {
           "Description": "Aberdeen Std International Eq Fd"
        },
        "AU60CRS00017": {
           "Description": "Aberdeen Std Multi-Asset Inc Fd"
        },
        "AU60CRS00025": {
           "Description": "Aberdeen Std Multi-Asset Real Return Fd"
        },
        "AU60CSA01144": {
           "Description": "Aberdeen Std Sel Invmt Actvy H Intl Eqs"
        },
        "AU60BTA04791": {
           "Description": "Aberdeen WS Plus Actively Hdg Intl Eq"
        },
        "AU60TGY00335": {
           "Description": "Acacia Ridge Industrial"
        },
        "AU60FSF12473": {
           "Description": "Acadian Aus Equity High Yield Class A"
        },
        "AU60FSF09735": {
           "Description": "Acadian Defensive Income - Class A"
        },
        "AU60FSF04538": {
           "Description": "Acadian Geared Australian Equity"
        },
        "AU60FSF12408": {
           "Description": "Acadian Global Managed Volatility Equity"
        },
        "AU60FSF07101": {
           "Description": "Acadian Sus Wholesale Glb Equity"
        },
        "AU60FSF99520": {
           "Description": "Acadian W Aus Mgd Vol Eqty-Class A"
        },
        "AU60FSF07895": {
           "Description": "Acadian Wholesale Aus Equity Long Short"
        },
        "AU60FSF07879": {
           "Description": "Acadian Wholesale Australian Equity"
        },
        "AU60FSF07978": {
           "Description": "Acadian Wholesale Defensive Income"
        },
        "AU60FSF08919": {
           "Description": "Acadian Wholesale Geared Global Equity"
        },
        "AU60FSF07887": {
           "Description": "Acadian Wholesale Global Eqty Long Short"
        },
        "AU60NUN00308": {
           "Description": "Access Pre Select Balanced"
        },
        "AU60NUN00324": {
           "Description": "Access Pre Select Conservative"
        },
        "AU60NUN00332": {
           "Description": "Access Pre Select Growth"
        },
        "AU60NUN00340": {
           "Description": "Access Pre Select High Growth"
        },
        "AU60ETL50860": {
           "Description": "Accountants Combined Diversifed Fund"
        },
        "AU0000031700": {
           "Description": "Activex Ardea Real Outcome Bond ETF"
        },
        "AU0000044836": {
           "Description": "ActiveX Kapstream Absolute Ret Inc ETF"
        },
        "AU60TAM00010": {
           "Description": "Addwealth Achiever Fund"
        },
        "AU60AMF01009": {
           "Description": "Adelaide Cash Management Trust"
        },
        "AU60ADV01203": {
           "Description": "Adv Balanced Multi-Blend ARS"
        },
        "AU60ADV01211": {
           "Description": "Adv Balanced Multi-Blend ARS NEF"
        },
        "AU60ADV01237": {
           "Description": "Adv Defensive Multi-Blend ARS"
        },
        "AU60ADV01245": {
           "Description": "Adv Defensv Multi-Blend ARS NEF"
        },
        "AU60ADV01260": {
           "Description": "Adv Int Shares Multi-Blend ARS NEF"
        },
        "AU60ADV01252": {
           "Description": "Adv International Shrs Multi-Blend ARS"
        },
        "AU60ADV00296": {
           "Description": "Advance Aus Fixed Intr Multi-Blend"
        },
        "AU60ADV00841": {
           "Description": "Advance Aus Fixed Intr Multi-Blend W"
        },
        "AU60ADV00254": {
           "Description": "Advance Australia Shr Multi-Blend"
        },
        "AU60ADV00452": {
           "Description": "Advance Australia Shr Multi-Blend W"
        },
        "AU60ADV01187": {
           "Description": "Advance Australian Shares ARS"
        },
        "AU60ADV01195": {
           "Description": "Advance Australian Shares ARS NEF"
        },
        "AU60ADV00239": {
           "Description": "Advance Balanced Multi-Blend"
        },
        "AU60ADV00502": {
           "Description": "Advance Balanced Multi-Blend W"
        },
        "AU60ADV00692": {
           "Description": "Advance Cash Multi-Blend"
        },
        "AU60ADV01229": {
           "Description": "Advance Cash Multi-Blend ARS"
        },
        "AU60ADV00221": {
           "Description": "Advance Defensive Multi-Blend"
        },
        "AU60ADV00494": {
           "Description": "Advance Defensive Multi-Blend W"
        },
        "AU60ADV01732": {
           "Description": "Advance Defensive Yield Multi-Blend"
        },
        "AU60ADV00247": {
           "Description": "Advance Growth Multi-Blend"
        },
        "AU60ADV00858": {
           "Description": "Advance Growth Multi-Blend W"
        },
        "AU60ADV00866": {
           "Description": "Advance High Growth Multi-Blend"
        },
        "AU60ADV00874": {
           "Description": "Advance High Growth Multi-Blend W"
        },
        "AU60ADV00882": {
           "Description": "Advance Int Fix Intr Multi-Blend"
        },
        "AU60ADV00676": {
           "Description": "Advance Int Fix Intr Multi-Blend W"
        },
        "AU60ADV00288": {
           "Description": "Advance International Shr Multi-Blend"
        },
        "AU60ADV00536": {
           "Description": "Advance International Shr Multi-Blend W"
        },
        "AU60ADV00908": {
           "Description": "Advance Moderate Multi-Blend"
        },
        "AU60ADV00916": {
           "Description": "Advance Moderate Multi-Blend W"
        },
        "AU60ADV00940": {
           "Description": "Advance Property Sec Multi-Blend"
        },
        "AU60ADV00957": {
           "Description": "Advance Property Sec Multi-Blend W"
        },
        "AU60AUX00015": {
           "Description": "AET Cash Deposit"
        },
        "AU60FSF72980": {
           "Description": "Affirmative Global Bond Fund - A"
        },
        "AU60AFX00016": {
           "Description": "Affluence Investment Fund"
        },
        "AU60AFX69300": {
           "Description": "Affluence LIC Fund"
        },
        "AU60AFX02400": {
           "Description": "Affluence Small Company Ordinary"
        },
        "AU60AIT30817": {
           "Description": "Aim Global High Conviction"
        },
        "AU60MCK00080": {
           "Description": "AIMS Commercial Mortgage Ord Units"
        },
        "AU60NAB00206": {
           "Description": "AIMS Commercial Mortgage Retail"
        },
        "AU60MCK00056": {
           "Description": "AIMS Commercial Mortgage Wholesale"
        },
        "AU60MGE97056": {
           "Description": "Airlie Australian Share"
        },
        "AU60ALC99002": {
           "Description": "Alceon High Conviction Absolute Rt A"
        },
        "AU60OMF00051": {
           "Description": "Alexander Credit Opportunities Fund"
        },
        "AU60ETL28056": {
           "Description": "Alexander Fixed Income Ordinary"
        },
        "AU60DCA78946": {
           "Description": "Alium Market Neutral Platform"
        },
        "AU60VEN00073": {
           "Description": "All Star KFM Income"
        },
        "AU60ETL46546": {
           "Description": "Allan Gray Australia Balanced Fund"
        },
        "AU60ETL00600": {
           "Description": "Allan Gray Australia Equity A"
        },
        "AU60ETL03497": {
           "Description": "Allan Gray Australia Equity B"
        },
        "AU60ETL02739": {
           "Description": "Allan Gray Australia Stable"
        },
        "AU60ALU93866": {
           "Description": "Alluvium Global Fund"
        },
        "AU60ETL03182": {
           "Description": "Alpha Alternatives"
        },
        "AU60ETL00915": {
           "Description": "Alpha Australian Blue Chip Equities"
        },
        "AU60ETL00923": {
           "Description": "Alpha Australian Small Companies"
        },
        "AU60ETL03299": {
           "Description": "Alpha Diversified Income"
        },
        "AU60ETL00931": {
           "Description": "Alpha Enhanced Yield"
        },
        "AU60ETL00949": {
           "Description": "Alpha Global Opportunities"
        },
        "AU60ETL03190": {
           "Description": "Alpha Infrastructure"
        },
        "AU60ETL00956": {
           "Description": "Alpha Property Securities"
        },
        "AU60AMP20727": {
           "Description": "Alphinity Advantage Australian Share"
        },
        "AU60HOW00197": {
           "Description": "Alphinity Australian Equity"
        },
        "AU60PAM00018": {
           "Description": "Alphinity Australian Share"
        },
        "AU60HOW01229": {
           "Description": "Alphinity Australian Share Class B"
        },
        "AU60EQI00016": {
           "Description": "Alphinity Concentrated Aus Share Class B"
        },
        "AU60HOW00262": {
           "Description": "Alphinity Concentrated Australian Share"
        },
        "AU60HOW01641": {
           "Description": "Alphinity Global Equity"
        },
        "AU60HOW01211": {
           "Description": "Alphinity Sustainable Share"
        },
        "AU60GLO00150": {
           "Description": "Alphinity Sustainable Share B"
        },
        "AU60WFS04863": {
           "Description": "Altius Bond"
        },
        "AU60AUS00718": {
           "Description": "Altius Sustainable Bond Fund"
        },
        "AU60ANT00059": {
           "Description": "Altrinsic Global Equities Trust"
        },
        "AU60AMP95554": {
           "Description": "AMP Australian Equity Index"
        },
        "AU60AMP40204": {
           "Description": "AMP Australian Fixed Interest Index"
        },
        "AU60AMP35618": {
           "Description": "AMP Australian Property Index"
        },
        "AU60AMP82925": {
           "Description": "AMP Capital Advantage Core Infras Fd"
        },
        "AU60AMP77503": {
           "Description": "AMP Capital Advantage Corporate Bond Fd"
        },
        "AU60AMP32599": {
           "Description": "AMP Capital Advantage Glb Prprty Secs Fd"
        },
        "AU60WFS48746": {
           "Description": "AMP Capital Australian Bond MPS"
        },
        "AU60AMP19323": {
           "Description": "AMP Capital Australian Dynamic Markets A"
        },
        "AU60AMP19463": {
           "Description": "AMP Capital Australian Dynamic Markets H"
        },
        "AU60AMP62653": {
           "Description": "AMP Capital Australian Em Coms On-plfm A"
        },
        "AU60AMP90258": {
           "Description": "AMP Capital Australian Equity Income"
        },
        "AU60AMP19315": {
           "Description": "AMP Capital Australian Equity Income H"
        },
        "AU60NML03378": {
           "Description": "AMP Capital Australian Property"
        },
        "AU60AMP05777": {
           "Description": "AMP Capital Australian Small Companies"
        },
        "AU60AMP04465": {
           "Description": "AMP Capital Australian Small Companies A"
        },
        "AU60AMP10777": {
           "Description": "AMP Capital Australian Small Companies H"
        },
        "AU60AMP04424": {
           "Description": "AMP Capital Balanced Growth"
        },
        "AU60AMP04416": {
           "Description": "AMP Capital Balanced Growth A"
        },
        "AU60AMP04440": {
           "Description": "AMP Capital Conservative"
        },
        "AU60AMP04432": {
           "Description": "AMP Capital Conservative A"
        },
        "AU60AMP11791": {
           "Description": "AMP Capital Core Infrastructure A"
        },
        "AU60AMP11809": {
           "Description": "AMP Capital Core Infrastructure H"
        },
        "AU60AMP10157": {
           "Description": "AMP Capital Core Property A"
        },
        "AU60AMP10744": {
           "Description": "AMP Capital Core Property H"
        },
        "AU60AMP32540": {
           "Description": "AMP Capital Core Retirement Fund"
        },
        "AU60AMP02634": {
           "Description": "AMP Capital Corporate Bond"
        },
        "AU60AMP05579": {
           "Description": "AMP Capital Corporate Bond A"
        },
        "AU60AMP12856": {
           "Description": "AMP Capital Corporate Bond H"
        },
        "AU60AMP90241": {
           "Description": "AMP Capital Corporate Bond R"
        },
        "AU00000DMKT6": {
           "Description": "AMP Capital Dynamic Markets ETF (Hedge)"
        },
        "AU60AMP02758": {
           "Description": "AMP Capital Enhanced Index Intl Share"
        },
        "AU60AMP02717": {
           "Description": "AMP Capital Enhanced Index Share"
        },
        "AU60AMP02576": {
           "Description": "AMP Capital Enhanced Index Share A"
        },
        "AU60AMP04457": {
           "Description": "AMP Capital Equity"
        },
        "AU60AMP03707": {
           "Description": "AMP Capital Equity A"
        },
        "AU60AMP19059": {
           "Description": "AMP Capital Equity Income Generator"
        },
        "AU60AMP04531": {
           "Description": "AMP Capital Ethical Leaders Bal"
        },
        "AU60AMP04556": {
           "Description": "AMP Capital Ethical Leaders Intl Shr A"
        },
        "AU60AMP04564": {
           "Description": "AMP Capital Ethical Leaders Intl Shr O"
        },
        "AU60AMP06775": {
           "Description": "AMP Capital FD Intl Bond A"
        },
        "AU60AMP06825": {
           "Description": "AMP Capital FD Intl Shr A"
        },
        "AU60AMP20909": {
           "Description": "AMP Capital Future Cash Flow 12 Series 1"
        },
        "AU60AMP20883": {
           "Description": "AMP Capital Future Cash Flow 6 Series 1"
        },
        "AU60AMP20891": {
           "Description": "AMP Capital Future Cash Flow 9 Series 1"
        },
        "AU60AMP06700": {
           "Description": "AMP Capital Future Directions Aus Bd"
        },
        "AU60AMP04473": {
           "Description": "AMP Capital Future Directions Balanced"
        },
        "AU60AMP05462": {
           "Description": "AMP Capital Future Directions Balanced A"
        },
        "AU60AMP06726": {
           "Description": "AMP Capital Future Directions Cnsrv"
        },
        "AU60AMP05587": {
           "Description": "AMP Capital Future Directions Growth"
        },
        "AU60AMP05595": {
           "Description": "AMP Capital Future Directions Growth A"
        },
        "AU60AMP06742": {
           "Description": "AMP Capital Future Directions High Gr"
        },
        "AU60AMP06767": {
           "Description": "AMP Capital Future Directions Intl Bd"
        },
        "AU60AMP06833": {
           "Description": "AMP Capital Future Directions Intl Shr"
        },
        "AU60AMP06783": {
           "Description": "AMP Capital Future Directions Mod Cnsrv"
        },
        "AU60AMP06791": {
           "Description": "AMP Capital Future Directions Mod Cons A"
        },
        "AU60AMP85068": {
           "Description": "AMP Capital Global Coms Off-platform H"
        },
        "AU60AMP74971": {
           "Description": "AMP Capital Global Coms On-platform A"
        },
        "AU60AMP02824": {
           "Description": "AMP Capital Global Gr Opportunities"
        },
        "AU60AMP90274": {
           "Description": "AMP Capital Global Infr Sec (Unh)"
        },
        "AU60AMP15958": {
           "Description": "AMP Capital Global Infr Secs Fd Hgd A"
        },
        "AU60AMP15941": {
           "Description": "AMP Capital Global Infr Secs Fd Hgd H"
        },
        "AU60AMP15933": {
           "Description": "AMP Capital Global Infr Secs Fd Unhgd A"
        },
        "AU60AMP15925": {
           "Description": "AMP Capital Global Infr Secs Fd Unhgd H"
        },
        "AU00000GLIN8": {
           "Description": "AMP Capital Global Infras Secs Unhdg ETF"
        },
        "AU00000RENT7": {
           "Description": "AMP Capital Global Property Secs UnH ETF"
        },
        "AU60AMP06866": {
           "Description": "AMP Capital Global Property Securities"
        },
        "AU60AMP09746": {
           "Description": "AMP Capital Global Property Securities A"
        },
        "AU60AMP10736": {
           "Description": "AMP Capital Global Property Securities H"
        },
        "AU60AMP90266": {
           "Description": "AMP Capital Global Property Securities R"
        },
        "AU60AMP05744": {
           "Description": "AMP Capital High Growth"
        },
        "AU60IPA01741": {
           "Description": "AMP Capital Income Generator"
        },
        "AU60IPA01733": {
           "Description": "AMP Capital Income Generator H"
        },
        "AU60AMP02683": {
           "Description": "AMP Capital International Bond"
        },
        "AU60AMP02543": {
           "Description": "AMP Capital International Bond A"
        },
        "AU60AMP02691": {
           "Description": "AMP Capital Listed Property Trusts"
        },
        "AU60AMP02550": {
           "Description": "AMP Capital Listed Property Trusts A"
        },
        "AU60AMP02493": {
           "Description": "AMP Capital Managed Treasury"
        },
        "AU60AMP90282": {
           "Description": "AMP Capital Multi-Asset"
        },
        "AU60AMP16857": {
           "Description": "AMP Capital Multi-Asset A"
        },
        "AU60AMP16865": {
           "Description": "AMP Capital Multi-Asset H"
        },
        "AU60IPA01782": {
           "Description": "AMP Capital Premium Growth"
        },
        "AU60AMP06973": {
           "Description": "AMP Capital Property Securities"
        },
        "AU60AMP11528": {
           "Description": "AMP Capital Res Inv Leaders Aus Shr"
        },
        "AU60AMP11510": {
           "Description": "AMP Capital Res Inv Leaders Aus Shr A"
        },
        "AU60AMP04523": {
           "Description": "AMP Capital Res Inv Leaders Bal A"
        },
        "AU60AMP09688": {
           "Description": "AMP Capital Specialist Geared Aus Shr"
        },
        "AU60AMP10769": {
           "Description": "AMP Capital Specialist Intl (Hdg) Shr"
        },
        "AU60AMP10751": {
           "Description": "AMP Capital Specialist Intl Shr"
        },
        "AU60AMP04507": {
           "Description": "AMP Capital Sustainable Share"
        },
        "AU60AMP04499": {
           "Description": "AMP Capital Sustainable Share A"
        },
        "AU60AMP11007": {
           "Description": "AMP Capital Sustainable Share H"
        },
        "AU60NML00614": {
           "Description": "AMP Capital W Australian Equity Value"
        },
        "AU60NML00010": {
           "Description": "AMP Capital W Australian Property"
        },
        "AU60NML00184": {
           "Description": "AMP Capital W Cash Management Trust"
        },
        "AU60NML03485": {
           "Description": "AMP Capital W Global Equity Value"
        },
        "AU60AMP09811": {
           "Description": "AMP Capital WS Australian Bd"
        },
        "AU60BTA04742": {
           "Description": "AMP Capital WS Plus Corporate Bond"
        },
        "AU60AMP20917": {
           "Description": "AMP Dynamic Balanced"
        },
        "AU60AMP14068": {
           "Description": "AMP FLI S2- Yarra Cap Mngmt Aust Eq"
        },
        "AU60AMP16394": {
           "Description": "AMP FLI S2-Alphinity Australian Share"
        },
        "AU60AMP14456": {
           "Description": "AMP FLI S2-AMP Aus Shr Enh Indx"
        },
        "AU60AMP13888": {
           "Description": "AMP FLI S2-AMP Australian Bond"
        },
        "AU60AMP13912": {
           "Description": "AMP FLI S2-AMP Balanced Growth"
        },
        "AU60AMP13904": {
           "Description": "AMP FLI S2-AMP Balanced Index"
        },
        "AU60AMP13979": {
           "Description": "AMP FLI S2-AMP Capital Aus Prpty Secs"
        },
        "AU60AMP13946": {
           "Description": "AMP FLI S2-AMP Capital Equity"
        },
        "AU60AMP13920": {
           "Description": "AMP FLI S2-AMP Conservative"
        },
        "AU60AMP13938": {
           "Description": "AMP FLI S2-AMP Conservative Index"
        },
        "AU60AMP13953": {
           "Description": "AMP FLI S2-AMP High Growth"
        },
        "AU60AMP13961": {
           "Description": "AMP FLI S2-AMP Intl Shr Enh Index"
        },
        "AU60AMP14423": {
           "Description": "AMP FLI S2-AMP Monthly Income Fund No.1"
        },
        "AU60AMP14431": {
           "Description": "AMP FLI S2-AMP Monthly Income Fund No.2"
        },
        "AU60AMP14449": {
           "Description": "AMP FLI S2-AMP Monthly Income Fund No.3"
        },
        "AU60AMP14035": {
           "Description": "AMP FLI S2-BlackRock Global Bond"
        },
        "AU60AMP14019": {
           "Description": "AMP FLI S2-BlackRock Sci Int Alpha Tilt"
        },
        "AU60AMP14050": {
           "Description": "AMP FLI S2-BT Australian Share"
        },
        "AU60AMP14415": {
           "Description": "AMP FLI S2-DNR High Conviction Aus Share"
        },
        "AU60AMP14084": {
           "Description": "AMP FLI S2-FD Asian Share"
        },
        "AU60AMP14092": {
           "Description": "AMP FLI S2-FD Australian Bond"
        },
        "AU60AMP14126": {
           "Description": "AMP FLI S2-FD Balanced"
        },
        "AU60AMP14134": {
           "Description": "AMP FLI S2-FD Conservative"
        },
        "AU60AMP14142": {
           "Description": "AMP FLI S2-FD Emerging Markets"
        },
        "AU60AMP14175": {
           "Description": "AMP FLI S2-FD Growth"
        },
        "AU60AMP14191": {
           "Description": "AMP FLI S2-FD High Growth"
        },
        "AU60AMP14209": {
           "Description": "AMP FLI S2-FD International Bond"
        },
        "AU60AMP14225": {
           "Description": "AMP FLI S2-FD Moderately Conservative"
        },
        "AU60AMP14324": {
           "Description": "AMP FLI S2-Fidelity Global Equities"
        },
        "AU60AMP14076": {
           "Description": "AMP FLI S2-Ironbark Karara Aus Shr"
        },
        "AU60AMP14308": {
           "Description": "AMP FLI S2-Perennial Value Aus Shr"
        },
        "AU60AMP14316": {
           "Description": "AMP FLI S2-Perpetual Industrial Share"
        },
        "AU60AMP14332": {
           "Description": "AMP FLI S2-Res Inv Leaders Aus Shr"
        },
        "AU60AMP14340": {
           "Description": "AMP FLI S2-Res Inv Leaders Balanced"
        },
        "AU60AMP14357": {
           "Description": "AMP FLI S2-Res Inv Leaders Conservative"
        },
        "AU60AMP14365": {
           "Description": "AMP FLI S2-Res Inv Leaders Growth"
        },
        "AU60AMP14373": {
           "Description": "AMP FLI S2-Res Inv Leaders Intl Shr"
        },
        "AU60AMP14381": {
           "Description": "AMP FLI S2-Schroder Australian Equities"
        },
        "AU60AMP14027": {
           "Description": "AMP FLI S2-Schroder Global Active Value"
        },
        "AU60AMP14118": {
           "Description": "AMP FLI S2-Specialist Aus Small Co"
        },
        "AU60AMP14100": {
           "Description": "AMP FLI S2-Specialist Australian Shares"
        },
        "AU60AMP19919": {
           "Description": "AMP FLI S2-Specialist Divers FixedIncome"
        },
        "AU60AMP14167": {
           "Description": "AMP FLI S2-Specialist Geared Aus Share"
        },
        "AU60AMP14183": {
           "Description": "AMP FLI S2-Specialist Hedged Int Shares"
        },
        "AU60AMP14217": {
           "Description": "AMP FLI S2-Specialist International Shr"
        },
        "AU60AMP14233": {
           "Description": "AMP FLI S2-Specialist Property & Infras"
        },
        "AU60AMP13987": {
           "Description": "AMP FLI S2-UBS Aus Small Companies"
        },
        "AU60AMP14399": {
           "Description": "AMP FLI S2-UBS Property Securities"
        },
        "AU60AMP14274": {
           "Description": "AMP FLI S2-Zurich American Cent Glbl Gr"
        },
        "AU60AMP00182": {
           "Description": "AMP FLI- AMP Capital Equity"
        },
        "AU60AMP08334": {
           "Description": "AMP FLI- Yarra Cap Mngmt Aust Eq"
        },
        "AU60AMP08342": {
           "Description": "AMP FLI-Alphinity Australian Share"
        },
        "AU60AMP08284": {
           "Description": "AMP FLI-AMP Aus Share Enhanced Index"
        },
        "AU60AMP10488": {
           "Description": "AMP FLI-AMP Australian Bond"
        },
        "AU60AMP00133": {
           "Description": "AMP FLI-AMP Balanced Growth"
        },
        "AU60AMP10504": {
           "Description": "AMP FLI-AMP Balanced Index"
        },
        "AU60AMP10496": {
           "Description": "AMP FLI-AMP Capital Aus Prpty Secs"
        },
        "AU60AMP00125": {
           "Description": "AMP FLI-AMP Conservative"
        },
        "AU60AMP10512": {
           "Description": "AMP FLI-AMP Conservative Index"
        },
        "AU60AMP01412": {
           "Description": "AMP FLI-AMP High Growth"
        },
        "AU60AMP09944": {
           "Description": "AMP FLI-AMP Intl Share Enhanced Index"
        },
        "AU60GIO00016": {
           "Description": "AMP FLI-AMP Monthly Income No 1"
        },
        "AU60GIO00024": {
           "Description": "AMP FLI-AMP Monthly Income No 2"
        },
        "AU60GIO00032": {
           "Description": "AMP FLI-AMP Monthly Income No 3"
        },
        "AU60AMP00141": {
           "Description": "AMP FLI-AMP Property Securities"
        },
        "AU60AMP04481": {
           "Description": "AMP FLI-AMP Sustainable Future Aus Shr"
        },
        "AU60AMP11163": {
           "Description": "AMP FLI-BlackRock Global Bond"
        },
        "AU60AMP08391": {
           "Description": "AMP FLI-BlackRock Sci Hgd Int Alpha Tilt"
        },
        "AU60AMP08417": {
           "Description": "AMP FLI-BlackRock Sci Int Alpha Tilts"
        },
        "AU60AMP08359": {
           "Description": "AMP FLI-BT Australian Share"
        },
        "AU60AMP12070": {
           "Description": "AMP FLI-DNR High Conviction Aus Share"
        },
        "AU60AMP12054": {
           "Description": "AMP FLI-FD Asian Share"
        },
        "AU60AMP06932": {
           "Description": "AMP FLI-FD Australian Bond"
        },
        "AU60AMP00158": {
           "Description": "AMP FLI-FD Australian Shr Original"
        },
        "AU60AMP06882": {
           "Description": "AMP FLI-FD Conservative"
        },
        "AU60AMP11171": {
           "Description": "AMP FLI-FD Emerging Markets"
        },
        "AU60AMP06916": {
           "Description": "AMP FLI-FD Growth"
        },
        "AU60AMP06924": {
           "Description": "AMP FLI-FD High Growth"
        },
        "AU60AMP06940": {
           "Description": "AMP FLI-FD International Bond"
        },
        "AU60AMP00174": {
           "Description": "AMP FLI-FD International Shr Original"
        },
        "AU60AMP06890": {
           "Description": "AMP FLI-FD Moderately Conservative"
        },
        "AU60AMP08466": {
           "Description": "AMP FLI-Fidelity Global Equities"
        },
        "AU60AMP06908": {
           "Description": "AMP FLI-Future Directions Balanced"
        },
        "AU60AMP08326": {
           "Description": "AMP FLI-Ironbark Karara Australian Share"
        },
        "AU60AMP08433": {
           "Description": "AMP FLI-Perennial Value Aust Share"
        },
        "AU60AMP08532": {
           "Description": "AMP FLI-Perpetual Industrial Share"
        },
        "AU60AMP10553": {
           "Description": "AMP FLI-Res Inv Leaders Aus Share"
        },
        "AU60AMP10561": {
           "Description": "AMP FLI-Res Inv Leaders Balanced"
        },
        "AU60AMP10579": {
           "Description": "AMP FLI-Res Inv Leaders Conservative"
        },
        "AU60AMP10587": {
           "Description": "AMP FLI-Res Inv Leaders Growth"
        },
        "AU60AMP10595": {
           "Description": "AMP FLI-Res Inv Leaders Intl Share"
        },
        "AU60AMP09951": {
           "Description": "AMP FLI-Schroder Australian Equity"
        },
        "AU60AMP08441": {
           "Description": "AMP FLI-Schroder Global Active Value"
        },
        "AU60AMP10058": {
           "Description": "AMP FLI-Specialist Aus Small Companies"
        },
        "AU60AMP08540": {
           "Description": "AMP FLI-Specialist Australian Shares"
        },
        "AU60AMP08508": {
           "Description": "AMP FLI-Specialist Geared Aus Share"
        },
        "AU60AMP10066": {
           "Description": "AMP FLI-Specialist Hedged Int Shares"
        },
        "AU60AMP08557": {
           "Description": "AMP FLI-Specialist International Shares"
        },
        "AU60AMP10074": {
           "Description": "AMP FLI-Specialist Property & Infras"
        },
        "AU60AMP00190": {
           "Description": "AMP FLI-UBS Aus Small Companies"
        },
        "AU60AMP08425": {
           "Description": "AMP FLI-UBS Property Securities"
        },
        "AU60AMP10546": {
           "Description": "AMP FLI-Zurich American Cent Glbl Gr"
        },
        "AU60AMP14001": {
           "Description": "AMP FLIS2-BlckRock Sci Hgd Int Alph Tilt"
        },
        "AU60NML05795": {
           "Description": "AMP Gen-Aberdeen Global Equity"
        },
        "AU60IPA00610": {
           "Description": "AMP Gen-Alternative Balanced Fund"
        },
        "AU60NMF00038": {
           "Description": "AMP Gen-AMP Capital Diversified Credit"
        },
        "AU60NML05696": {
           "Description": "AMP Gen-AMP Cash Mgmt"
        },
        "AU60NML05910": {
           "Description": "AMP Gen-Australian Equities"
        },
        "AU60NML05886": {
           "Description": "AMP Gen-Balanced"
        },
        "AU60NMF00202": {
           "Description": "AMP Gen-Balanced Index"
        },
        "AU60NML05720": {
           "Description": "AMP Gen-BlackRock Aust Equity Index"
        },
        "AU60NML05738": {
           "Description": "AMP Gen-BlackRock Aust Fixed Int Ind"
        },
        "AU60NML05712": {
           "Description": "AMP Gen-BlackRock Australian Equity"
        },
        "AU60NML05746": {
           "Description": "AMP Gen-BlackRock Intl Eq Ind Hedged"
        },
        "AU60NML05753": {
           "Description": "AMP Gen-BlackRock Intl Eq Ind Unhdgd"
        },
        "AU60NML05761": {
           "Description": "AMP Gen-BlackRock Intl Fix Int Ind"
        },
        "AU60NML05779": {
           "Description": "AMP Gen-BlackRock Prop Securities Ind"
        },
        "AU60NMF00046": {
           "Description": "AMP Gen-CFS Geared Australian Share"
        },
        "AU60NML05860": {
           "Description": "AMP Gen-Defensive"
        },
        "AU60NML05894": {
           "Description": "AMP Gen-Growth"
        },
        "AU60NMF00210": {
           "Description": "AMP Gen-Growth Index"
        },
        "AU60NML05902": {
           "Description": "AMP Gen-High Growth"
        },
        "AU60NML05928": {
           "Description": "AMP Gen-International Equities Hedged"
        },
        "AU60NML05936": {
           "Description": "AMP Gen-International Equities Unhedged"
        },
        "AU60NML05787": {
           "Description": "AMP Gen-Legg Mason Property Secs"
        },
        "AU60NML05878": {
           "Description": "AMP Gen-Moderately Defensive"
        },
        "AU60NMF00194": {
           "Description": "AMP Gen-Moderately Defensive Index"
        },
        "AU60NML05837": {
           "Description": "AMP Gen-P Partners High Gr Aust Eq"
        },
        "AU60NML05803": {
           "Description": "AMP Gen-Perpetual Industrial Equity"
        },
        "AU60NML05811": {
           "Description": "AMP Gen-PIMCO Global Fixed Interest"
        },
        "AU60NML05829": {
           "Description": "AMP Gen-Platinum International Equity"
        },
        "AU60NML05845": {
           "Description": "AMP Gen-Schroder Australian Equity"
        },
        "AU60NML05852": {
           "Description": "AMP Gen-UBS Australian Equity"
        },
        "AU60NMF00152": {
           "Description": "AMP Gen-Vanguard Aus Shr Indx"
        },
        "AU60NMF00129": {
           "Description": "AMP Gen-Vanguard Int Shr Idx Hgd"
        },
        "AU60NMF00111": {
           "Description": "AMP Gen-Vanguard Intl Shr Indx"
        },
        "AU60AMP70789": {
           "Description": "AMP International Equity Index"
        },
        "AU60AMP76265": {
           "Description": "AMP International Fixed Intst Idx Hdg"
        },
        "AU60AMP43448": {
           "Description": "AMP International Property Index Hdg"
        },
        "AU60AMP06817": {
           "Description": "AMP Specialist Australian Share WT"
        },
        "AU60AMP09738": {
           "Description": "AMP Specialist Australian Small Coms A"
        },
        "AU60AMP19927": {
           "Description": "AMP Specialist Diversified Fixed Income"
        },
        "AU60AMP09696": {
           "Description": "AMP Specialist Geared Australian Share A"
        },
        "AU60AMP08243": {
           "Description": "AMP Specialist International Share A"
        },
        "AU60AMP08250": {
           "Description": "AMP Specialist International Shr (Hdg) A"
        },
        "AU60AMP19901": {
           "Description": "AMP Specialist Property and Infras"
        },
        "AU60DAM00261": {
           "Description": "AMS Balanced Fund"
        },
        "AU60DAM00253": {
           "Description": "AMS Moderately Conservative Fund"
        },
        "AU60PPL88088": {
           "Description": "Antares Diversified Fixed Income"
        },
        "AU60PPL53082": {
           "Description": "Antares Ex-20 Australian Equities"
        },
        "AU60PPL00281": {
           "Description": "Antares Income Fund"
        },
        "AU60PPL01081": {
           "Description": "Antares Pers High Growth Shares"
        },
        "AU60NFS01967": {
           "Description": "Antares Pers Listed Property"
        },
        "AU60PPL01107": {
           "Description": "Antares Prof Australian Equities"
        },
        "AU60PPL00026": {
           "Description": "Antares Prof Dividend Builder"
        },
        "AU60PPL01156": {
           "Description": "Antares Prof Elite Opportunities"
        },
        "AU60PPL01065": {
           "Description": "Antares Prof High Growth Shares"
        },
        "AU60NFS02098": {
           "Description": "Antares Prof Listed Property"
        },
        "AU60AMP99895": {
           "Description": "Antipodes Advantage Global Share Fund"
        },
        "AU60IOF02030": {
           "Description": "Antipodes Asia P"
        },
        "AU60IOF00455": {
           "Description": "Antipodes Global Fund - Class P"
        },
        "AU60IOF00802": {
           "Description": "Antipodes Global Fund - Long I"
        },
        "AU60WHT00576": {
           "Description": "Antipodes Global Fund - Long P"
        },
        "AU0000026429": {
           "Description": "Antipodes Global Shares ETF"
        },
        "AU60WFS10332": {
           "Description": "Antipodes Wholesale Plus Asia Fund"
        },
        "AU60WFS08641": {
           "Description": "Antipodes Wholesale Plus Global"
        },
        "AU60ANZ01500": {
           "Description": "ANZ Cash Plus"
        },
        "AU60MMF21333": {
           "Description": "ANZ Enhanced Yield Fund"
        },
        "AU60ANZ00270": {
           "Description": "ANZ Equity Imputation"
        },
        "AU60ANZ00288": {
           "Description": "ANZ Equity Trust No 1"
        },
        "AU60MMF21341": {
           "Description": "ANZ Fixed Income Fund"
        },
        "AU60ANZ00239": {
           "Description": "ANZ Fixed Interest Trust"
        },
        "AU60ANZ01294": {
           "Description": "ANZ Mortgage"
        },
        "AU60ANZ00791": {
           "Description": "ANZ Mortgage Series 2"
        },
        "AU60ANZ08570": {
           "Description": "ANZ OA Inv-Antipodes Glbl(Lg only)EF/Sel"
        },
        "AU60ANZ08588": {
           "Description": "ANZ OA Inv-Antipodes Global (Lg only)NEF"
        },
        "AU60ANZ03308": {
           "Description": "ANZ OA Inv-Arrowstreet Global Eq Hdg EF"
        },
        "AU60ANZ03316": {
           "Description": "ANZ OA Inv-Arrowstreet Global Eq Hdg NEF"
        },
        "AU60MMF12084": {
           "Description": "ANZ OA Inv-Janus Henderson Gl FI TR DEF"
        },
        "AU60MMF12076": {
           "Description": "ANZ OA Inv-Janus HendersonGlFI TR EF/Sel"
        },
        "AU60ANZ03407": {
           "Description": "ANZ OA Inv-Magellan Global EF"
        },
        "AU60ANZ03415": {
           "Description": "ANZ OA Inv-Magellan Global NEF"
        },
        "AU60MMF10138": {
           "Description": "ANZ OA Inv-OP Glb Prpty Secs Idx EF/Sel"
        },
        "AU60MMF10377": {
           "Description": "ANZ OA Inv-OP Glb Prpty Secs Idx NEF"
        },
        "AU60ANZ03365": {
           "Description": "ANZ OA Inv-Pendal Cor H Glb EF/Sel"
        },
        "AU60ANZ03373": {
           "Description": "ANZ OA Inv-Pendal Cor H Glb NEF"
        },
        "AU60MMF10617": {
           "Description": "ANZ OA Inv-Pendal Mly Inc Pl EF/Sel"
        },
        "AU60MMF11243": {
           "Description": "ANZ OA Inv-Pendal Mly Inc Pl-DEF"
        },
        "AU60MMF10583": {
           "Description": "ANZ OA Inv-Perpetual Ethical SRI EF/Sel"
        },
        "AU60MMF11219": {
           "Description": "ANZ OA Inv-Perpetual Ethical SRI-DEF"
        },
        "AU60ANZ08257": {
           "Description": "ANZ OA Inv-Schroder Real Return Tr NEF"
        },
        "AU60ANZ08240": {
           "Description": "ANZ OA Inv-Schroder Real Return Trust EF"
        },
        "AU60MMF11227": {
           "Description": "ANZ OA Inv-Stwt Invs WldWd Sust DEF"
        },
        "AU60MMF10591": {
           "Description": "ANZ OA Inv-Stwt Invs WldWd Sust EF/Sel"
        },
        "AU60MMF12449": {
           "Description": "ANZ OA Inv-Vanguard Divers Bd Idx DEF"
        },
        "AU60MMF12431": {
           "Description": "ANZ OA Inv-Vanguard Divers Bd Idx EF/Sel"
        },
        "AU60MMF12670": {
           "Description": "ANZ OA IP-ANZ Cash Advantage EF"
        },
        "AU60MMF12688": {
           "Description": "ANZ OA IP-ANZ Cash Advantage NE"
        },
        "AU60MMF10575": {
           "Description": "ANZ OA IP-ANZ Flexible Term Deposit EF"
        },
        "AU60MMF11201": {
           "Description": "ANZ OA IP-ANZ Flexible Term Deposit NE"
        },
        "AU60MMF18495": {
           "Description": "ANZ OA IP-ANZ Term Deposit 12 Months"
        },
        "AU60MMF18529": {
           "Description": "ANZ OA IP-ANZ Term Deposit 2 Years"
        },
        "AU60MMF18438": {
           "Description": "ANZ OA IP-ANZ Term Deposit 3 Months"
        },
        "AU60MMF18552": {
           "Description": "ANZ OA IP-ANZ Term Deposit 3 Years"
        },
        "AU60MMF18586": {
           "Description": "ANZ OA IP-ANZ Term Deposit 5 Years"
        },
        "AU60MMF18461": {
           "Description": "ANZ OA IP-ANZ Term Deposit 6 Months"
        },
        "AU60ANZ08182": {
           "Description": "ANZ OA IP-Ausbil Aus Emerging Leaders EF"
        },
        "AU60ANZ08190": {
           "Description": "ANZ OA IP-Ausbil Aus Emerging Leaders NE"
        },
        "AU60ANZ08281": {
           "Description": "ANZ OA IP-Bentham Global Income EF"
        },
        "AU60ANZ08299": {
           "Description": "ANZ OA IP-Bentham Global Income NE"
        },
        "AU60MMF10120": {
           "Description": "ANZ OA IP-BlackRock AA Alpha EF"
        },
        "AU60MMF10369": {
           "Description": "ANZ OA IP-BlackRock AA Alpha NE"
        },
        "AU60ANZ03282": {
           "Description": "ANZ OA IP-BlackRock Sci Aus Equity EF"
        },
        "AU60ANZ03290": {
           "Description": "ANZ OA IP-BlackRock Sci Aus Equity NE"
        },
        "AU60ANZ08224": {
           "Description": "ANZ OA IP-BlackRock Sci Div Growth EF"
        },
        "AU60ANZ08232": {
           "Description": "ANZ OA IP-BlackRock Sci Div Growth NE"
        },
        "AU60ANZ03324": {
           "Description": "ANZ OA IP-BlackRock Sci Intl Equity EF"
        },
        "AU60ANZ03332": {
           "Description": "ANZ OA IP-BlackRock Sci Intl Equity NE"
        },
        "AU60ANZ08265": {
           "Description": "ANZ OA IP-CFS Global Credit Income EF"
        },
        "AU60ANZ08273": {
           "Description": "ANZ OA IP-CFS Global Credit Income NE"
        },
        "AU60ANZ03340": {
           "Description": "ANZ OA IP-CFS Imputation EF"
        },
        "AU60ANZ03357": {
           "Description": "ANZ OA IP-CFS Imputation NE"
        },
        "AU60MMF11755": {
           "Description": "ANZ OA IP-Fidelity Australian Equity EF"
        },
        "AU60MMF11763": {
           "Description": "ANZ OA IP-Fidelity Australian Equity NE"
        },
        "AU60ANZ03688": {
           "Description": "ANZ OA IP-Investors Mutual Aus Shares EF"
        },
        "AU60ANZ03696": {
           "Description": "ANZ OA IP-Investors Mutual Aus Shares NE"
        },
        "AU60ANZ08356": {
           "Description": "ANZ OA IP-IOOF/Perennial Value Share EF"
        },
        "AU60ANZ08364": {
           "Description": "ANZ OA IP-IOOF/Perennial Value Share NE"
        },
        "AU60ANZ08372": {
           "Description": "ANZ OA IP-Kapstream Abs Ret Income EF"
        },
        "AU60ANZ08380": {
           "Description": "ANZ OA IP-Kapstream Abs Ret Income NE"
        },
        "AU60MMF10609": {
           "Description": "ANZ OA IP-Merlon Aus Share Income EF"
        },
        "AU60MMF11235": {
           "Description": "ANZ OA IP-Merlon Aus Share Income NE"
        },
        "AU60ANZ08398": {
           "Description": "ANZ OA IP-MFS Global Equity EF"
        },
        "AU60ANZ08406": {
           "Description": "ANZ OA IP-MFS Global Equity NE"
        },
        "AU60ANZ03589": {
           "Description": "ANZ OA IP-OnePath Mortgage EF"
        },
        "AU60ANZ03597": {
           "Description": "ANZ OA IP-OnePath Mortgage NE"
        },
        "AU60ANZ03423": {
           "Description": "ANZ OA IP-OP Active Growth EF"
        },
        "AU60ANZ03431": {
           "Description": "ANZ OA IP-OP Active Growth NE"
        },
        "AU60ANZ00114": {
           "Description": "ANZ OA IP-OP Australian Shares"
        },
        "AU60ANZ03449": {
           "Description": "ANZ OA IP-OP Australian Shares NE"
        },
        "AU60ANZ00379": {
           "Description": "ANZ OA IP-OP Balanced"
        },
        "AU60ANZ03456": {
           "Description": "ANZ OA IP-OP Balanced NE"
        },
        "AU60ANZ00130": {
           "Description": "ANZ OA IP-OP Blue Chip Imputation"
        },
        "AU60ANZ03464": {
           "Description": "ANZ OA IP-OP Blue Chip Imputation NE"
        },
        "AU60ANZ03472": {
           "Description": "ANZ OA IP-OP Cash EF"
        },
        "AU60ANZ03480": {
           "Description": "ANZ OA IP-OP Cash NE"
        },
        "AU60ANZ00361": {
           "Description": "ANZ OA IP-OP Conservative"
        },
        "AU60ANZ03498": {
           "Description": "ANZ OA IP-OP Conservative NE"
        },
        "AU60ANZ03506": {
           "Description": "ANZ OA IP-OP Diversified Fixed Int NE"
        },
        "AU60ANZ02334": {
           "Description": "ANZ OA IP-OP Diversified Fixed Interest"
        },
        "AU60ANZ06244": {
           "Description": "ANZ OA IP-OP Dvrs Crdt EF"
        },
        "AU60ANZ06251": {
           "Description": "ANZ OA IP-OP Dvrs Crdt NE"
        },
        "AU60MMF09841": {
           "Description": "ANZ OA IP-OP Geared Aus Shrs Idx Tr NEF"
        },
        "AU60MMF09833": {
           "Description": "ANZ OA IP-OP Geared AusSh Id Tr EF/Sel"
        },
        "AU60ANZ03605": {
           "Description": "ANZ OA IP-OP Global Emerging Markets EF"
        },
        "AU60ANZ03613": {
           "Description": "ANZ OA IP-OP Global Emerging Markets NE"
        },
        "AU60ANZ08331": {
           "Description": "ANZ OA IP-OP Global Share EF"
        },
        "AU60ANZ08349": {
           "Description": "ANZ OA IP-OP Global Share NE"
        },
        "AU60ANZ03522": {
           "Description": "ANZ OA IP-OP High Growth EF"
        },
        "AU60ANZ03530": {
           "Description": "ANZ OA IP-OP High Growth NE"
        },
        "AU60ANZ00353": {
           "Description": "ANZ OA IP-OP Income"
        },
        "AU60ANZ03548": {
           "Description": "ANZ OA IP-OP Income NE"
        },
        "AU60ANZ03555": {
           "Description": "ANZ OA IP-OP Income Plus EF"
        },
        "AU60ANZ03563": {
           "Description": "ANZ OA IP-OP Income Plus NE"
        },
        "AU60ANZ00387": {
           "Description": "ANZ OA IP-OP Managed Growth"
        },
        "AU60ANZ03571": {
           "Description": "ANZ OA IP-OP Managed Growth NE"
        },
        "AU60ANZ03621": {
           "Description": "ANZ OA IP-OP Property Securities EF"
        },
        "AU60ANZ03639": {
           "Description": "ANZ OA IP-OP Property Securities NE"
        },
        "AU60ANZ07580": {
           "Description": "ANZ OA IP-OP Select Leaders EF"
        },
        "AU60ANZ02359": {
           "Description": "ANZ OA IP-OP Select Leaders NE"
        },
        "AU60ANZ03647": {
           "Description": "ANZ OA IP-OP Sustainable Inv Aus EF"
        },
        "AU60ANZ03654": {
           "Description": "ANZ OA IP-OP Sustainable Inv Aus NE"
        },
        "AU60ANZ03662": {
           "Description": "ANZ OA IP-OP Tax Effective Income EF"
        },
        "AU60ANZ03670": {
           "Description": "ANZ OA IP-OP Tax Effective Income NE"
        },
        "AU60ANZ03704": {
           "Description": "ANZ OA IP-Optimix Aus Fixed Interest EF"
        },
        "AU60ANZ03712": {
           "Description": "ANZ OA IP-Optimix Aus Fixed Interest NE"
        },
        "AU60ANZ03746": {
           "Description": "ANZ OA IP-Optimix Australian Shares EF"
        },
        "AU60ANZ03753": {
           "Description": "ANZ OA IP-Optimix Australian Shares NE"
        },
        "AU60ANZ06327": {
           "Description": "ANZ OA IP-Optimix Balanced EF"
        },
        "AU60ANZ06335": {
           "Description": "ANZ OA IP-Optimix Balanced NE"
        },
        "AU60ANZ03761": {
           "Description": "ANZ OA IP-Optimix Conservative EF"
        },
        "AU60ANZ03779": {
           "Description": "ANZ OA IP-Optimix Conservative NE"
        },
        "AU60MMF10625": {
           "Description": "ANZ OA IP-Optimix Gbl Emerging Mkts EF"
        },
        "AU60MMF11250": {
           "Description": "ANZ OA IP-Optimix Gbl Emerging Mkts NE"
        },
        "AU60ANZ03829": {
           "Description": "ANZ OA IP-Optimix Gbl Small Companies EF"
        },
        "AU60ANZ03837": {
           "Description": "ANZ OA IP-Optimix Gbl Small Companies NE"
        },
        "AU60ANZ03803": {
           "Description": "ANZ OA IP-Optimix Global Shares EF"
        },
        "AU60ANZ03811": {
           "Description": "ANZ OA IP-Optimix Global Shares NE"
        },
        "AU60ANZ03845": {
           "Description": "ANZ OA IP-Optimix Growth EF"
        },
        "AU60ANZ03852": {
           "Description": "ANZ OA IP-Optimix Growth NE"
        },
        "AU60ANZ03860": {
           "Description": "ANZ OA IP-Optimix High Growth EF"
        },
        "AU60ANZ03878": {
           "Description": "ANZ OA IP-Optimix High Growth NE"
        },
        "AU60ANZ03886": {
           "Description": "ANZ OA IP-Optimix Moderate EF"
        },
        "AU60ANZ03894": {
           "Description": "ANZ OA IP-Optimix Moderate NE"
        },
        "AU60ANZ03720": {
           "Description": "ANZ OA IP-Optimix Property Securities EF"
        },
        "AU60ANZ03738": {
           "Description": "ANZ OA IP-Optimix Property Securities NE"
        },
        "AU60MMF11631": {
           "Description": "ANZ OA IP-Pendal Aus Shrs EF"
        },
        "AU60MMF11649": {
           "Description": "ANZ OA IP-Pendal Aus Shrs NE"
        },
        "AU60ANZ06285": {
           "Description": "ANZ OA IP-Pendal Smlr Coms EF"
        },
        "AU60ANZ06293": {
           "Description": "ANZ OA IP-Pendal Smlr Coms NE"
        },
        "AU60ANZ03902": {
           "Description": "ANZ OA IP-Perpetual Australian Shares EF"
        },
        "AU60ANZ03910": {
           "Description": "ANZ OA IP-Perpetual Australian Shares NE"
        },
        "AU60ANZ08414": {
           "Description": "ANZ OA IP-Perpetual Balanced Growth EF"
        },
        "AU60ANZ08422": {
           "Description": "ANZ OA IP-Perpetual Balanced Growth NE"
        },
        "AU60ANZ08430": {
           "Description": "ANZ OA IP-Perpetual Conservative Gr EF"
        },
        "AU60ANZ08448": {
           "Description": "ANZ OA IP-Perpetual Conservative Gr NE"
        },
        "AU60ANZ08455": {
           "Description": "ANZ OA IP-Platinum International EF"
        },
        "AU60ANZ08463": {
           "Description": "ANZ OA IP-Platinum International NE"
        },
        "AU60ANZ03928": {
           "Description": "ANZ OA IP-Schroder Australian Equity EF"
        },
        "AU60ANZ03936": {
           "Description": "ANZ OA IP-Schroder Australian Equity NE"
        },
        "AU60ANZ08471": {
           "Description": "ANZ OA IP-Schroder Balanced EF"
        },
        "AU60ANZ08489": {
           "Description": "ANZ OA IP-Schroder Balanced NE"
        },
        "AU60MMF19238": {
           "Description": "ANZ OA IP-Schroder Fixed Income EF"
        },
        "AU60MMF19246": {
           "Description": "ANZ OA IP-Schroder Fixed Income NE"
        },
        "AU60ANZ03381": {
           "Description": "ANZ OA IP-SG Hiscock Property EF"
        },
        "AU60ANZ03399": {
           "Description": "ANZ OA IP-SG Hiscock Property NEF"
        },
        "AU60MMF12316": {
           "Description": "ANZ OA IP-T Rowe Price Global Equity EF"
        },
        "AU60MMF12324": {
           "Description": "ANZ OA IP-T Rowe Price Global Equity NE"
        },
        "AU60ANZ08497": {
           "Description": "ANZ OA IP-UBS Balanced EF"
        },
        "AU60ANZ08505": {
           "Description": "ANZ OA IP-UBS Balanced NE"
        },
        "AU60ANZ08513": {
           "Description": "ANZ OA IP-UBS Defensive EF"
        },
        "AU60ANZ08521": {
           "Description": "ANZ OA IP-UBS Defensive NE"
        },
        "AU60ANZ03985": {
           "Description": "ANZ OA IP-UBS Diversified Fixed Inc EF"
        },
        "AU60ANZ03993": {
           "Description": "ANZ OA IP-UBS Diversified Fixed Inc NE"
        },
        "AU60ANZ03944": {
           "Description": "ANZ OA IP-Vanguard Aus Shares Index EF"
        },
        "AU60ANZ03951": {
           "Description": "ANZ OA IP-Vanguard Aus Shares Index NE"
        },
        "AU60MMF14221": {
           "Description": "ANZ OA IP-Vanguard Balanced Index EF"
        },
        "AU60MMF14239": {
           "Description": "ANZ OA IP-Vanguard Balanced Index NE"
        },
        "AU60MMF14114": {
           "Description": "ANZ OA IP-Vanguard Conervative Index NE"
        },
        "AU60MMF14106": {
           "Description": "ANZ OA IP-Vanguard Conservative Index EF"
        },
        "AU60MMF14346": {
           "Description": "ANZ OA IP-Vanguard Growth Index EF"
        },
        "AU60MMF14353": {
           "Description": "ANZ OA IP-Vanguard Growth Index NE"
        },
        "AU60MMF14460": {
           "Description": "ANZ OA IP-Vanguard High Growth Index EF"
        },
        "AU60MMF14478": {
           "Description": "ANZ OA IP-Vanguard High Growth Index NE"
        },
        "AU60ANZ08539": {
           "Description": "ANZ OA IP-Vanguard Intl Shares Index EF"
        },
        "AU60ANZ08547": {
           "Description": "ANZ OA IP-Vanguard Intl Shares Index NE"
        },
        "AU60ANZ03969": {
           "Description": "ANZ OA IP-Vanguard Intl Shr Index H EF"
        },
        "AU60ANZ03977": {
           "Description": "ANZ OA IP-Vanguard Intl Shr Index H NE"
        },
        "AU60ANZ08554": {
           "Description": "ANZ OA IP-Vanguard Property Sec Index EF"
        },
        "AU60ANZ08562": {
           "Description": "ANZ OA IP-Vanguard Property Sec Index NE"
        },
        "AU60MMF21358": {
           "Description": "ANZ Private Global Equities Trust"
        },
        "AU60MMF21846": {
           "Description": "ANZ Private Global Equities(Actvly Hdg)"
        },
        "AU60MMF21861": {
           "Description": "ANZ Private International Fixed Interest"
        },
        "AU60ANZ00304": {
           "Description": "ANZ Property Securities"
        },
        "AU60ANZ01179": {
           "Description": "ANZ V2 Plus"
        },
        "AU60ANZ02045": {
           "Description": "ANZ Wholesale-Australian Imputation"
        },
        "AU60ANZ02151": {
           "Description": "ANZ Wholesale-Property Securities"
        },
        "AU60PIM35132": {
           "Description": "Aoris International Fund A"
        },
        "AU60PIM00581": {
           "Description": "Aoris International Fund B"
        },
        "AU60PIM84338": {
           "Description": "Aoris International Fund C Hedged"
        },
        "AU60PIM18120": {
           "Description": "Aoris International Fund D Hedged"
        },
        "AU60APN00081": {
           "Description": "APN AREIT"
        },
        "AU60APN00230": {
           "Description": "APN Asian REIT"
        },
        "AU60APN00016": {
           "Description": "APN Property for Income"
        },
        "AU60APN00040": {
           "Description": "APN Property for Income No. 2"
        },
        "AU60BTA04759": {
           "Description": "APN WS Plus AREIT"
        },
        "AU60ETL03448": {
           "Description": "Apostle Dundas Global Equity"
        },
        "AU60ETL04388": {
           "Description": "Apostle Dundas Global Equity Class C"
        },
        "AU60PER06347": {
           "Description": "AQR Wholesale Managed Futures 1P"
        },
        "AU60PER63488": {
           "Description": "AQR Wholesale Managed Futures 7P"
        },
        "AU60PER90721": {
           "Description": "AQR Wholesale Managed Futures 8P"
        },
        "AU60PER05547": {
           "Description": "AQR WS DELTA 1F"
        },
        "AU60AQU80755": {
           "Description": "Aquasia Enhanced Credit"
        },
        "AU60AQU36955": {
           "Description": "Aquasia Private Investment"
        },
        "AU60OPT00014": {
           "Description": "ARCO Absolute Trust"
        },
        "AU60HOW00627": {
           "Description": "Ardea Australian Inflation Linked Bond"
        },
        "AU60HOW00981": {
           "Description": "Ardea Real Outcome Fund"
        },
        "AU60HOW01625": {
           "Description": "Ardea Real Outcome Plus"
        },
        "AU60WFS63547": {
           "Description": "Ardevora Global Equities MPS"
        },
        "AU60ETL13280": {
           "Description": "Ardevora Global Shares"
        },
        "AU60HOW44765": {
           "Description": "Ares Global Credit Income A"
        },
        "AU60BSP00054": {
           "Description": "Argyle Water Fund"
        },
        "AU60EVO00055": {
           "Description": "Arminius Capital GMMA Fund - Direct"
        },
        "AU60EVO00063": {
           "Description": "Arminius Capital GMMA Fund - Platform"
        },
        "AU60ETL01483": {
           "Description": "Armytage Australian Equity Income"
        },
        "AU60ETL30649": {
           "Description": "Armytage Micro Cap Activist"
        },
        "AU60TGP00051": {
           "Description": "Armytage Strategic Opportunities Ret"
        },
        "AU60ETL01392": {
           "Description": "Armytage Strategic Opportunities WS"
        },
        "AU60SAI00044": {
           "Description": "Arrow Primary Infrastructure"
        },
        "AU60AMP86637": {
           "Description": "Arrowstreet Advantage Global Eq Fd"
        },
        "AU60MAQ04778": {
           "Description": "Arrowstreet Emerging Markets"
        },
        "AU60MAQ04646": {
           "Description": "Arrowstreet Global Equity"
        },
        "AU60MAQ00792": {
           "Description": "Arrowstreet Global Equity Hedged"
        },
        "AU60MAQ53783": {
           "Description": "Arrowstreet Global Equity No 1"
        },
        "AU60MAQ87435": {
           "Description": "Arrowstreet Global Equity No.2 Class I"
        },
        "AU60ETL36042": {
           "Description": "Artesian Corporate Bond Fund"
        },
        "AU60ETL82681": {
           "Description": "Artesian Corporate Bond Fund A"
        },
        "AU60OPS83046": {
           "Description": "Artisan Global Discovery"
        },
        "AU60FSF35326": {
           "Description": "Aspect Absolute Return Fund Class A"
        },
        "AU60FSF10865": {
           "Description": "Aspect Diversified Futures-Class A"
        },
        "AU60FSF10816": {
           "Description": "Aspect Wholesale Diversified Futures"
        },
        "AU60RGL00054": {
           "Description": "Atlantic Absolute Return"
        },
        "AU60OMF00036": {
           "Description": "Atlantic Pacific Australian Equity"
        },
        "AU60OMF92900": {
           "Description": "Atlas High Income Property"
        },
        "AU60PIM32683": {
           "Description": "ATLAS Infrastructure Aust Fdr"
        },
        "AU60PIM92539": {
           "Description": "ATLAS Infrastructure Aust Fdr Fd - Hdg"
        },
        "AU60PIM67697": {
           "Description": "ATLAS Infrastructure Aust Fdr Fd - Unhdg"
        },
        "AU60FHT01033": {
           "Description": "AtlasTrend Clean Disruption"
        },
        "AU60AIM00021": {
           "Description": "Atrium Alternatives Fund"
        },
        "AU60AIM00039": {
           "Description": "Atrium Enhanced Fixed Income Fund"
        },
        "AU60COL00290": {
           "Description": "Atrium Evolution Series Divers - AEF 5"
        },
        "AU60COL00308": {
           "Description": "Atrium Evolution Series Divers - AEF 7"
        },
        "AU60COL00316": {
           "Description": "Atrium Evolution Series Divers - AEF 9"
        },
        "AU60AIM00013": {
           "Description": "Atrium Global Equities Mandate No. 1"
        },
        "AU60AUS01005": {
           "Description": "AUI Balanced Growth Portfolio"
        },
        "AU60YOC00186": {
           "Description": "AUI Diversified Property Fund"
        },
        "AU60AUS00379": {
           "Description": "AUI Healthcare Property Trust A"
        },
        "AU60AUS01021": {
           "Description": "AUI Healthcare Property Trust R"
        },
        "AU60YOC01002": {
           "Description": "AUI Property Income Fund W"
        },
        "AU60GEM01132": {
           "Description": "AUI Property Securities Fund Growth"
        },
        "AU60GEM01124": {
           "Description": "AUI Property Securities Fund Income"
        },
        "AU60GEM01116": {
           "Description": "AUI Property Securities Fund Ordinary"
        },
        "AU60AUS00049": {
           "Description": "AUI Wholesale Cash Fund"
        },
        "AU60AFM00100": {
           "Description": "Aurora Dividend Income Trust"
        },
        "AU60AFM00050": {
           "Description": "Aurora Fortitude Absolute Return"
        },
        "AU60AUS01120": {
           "Description": "Aus Unity Healthcare Property Wholesale"
        },
        "AU60AAP00039": {
           "Description": "Ausbil 130/30 Focus - Institutional"
        },
        "AU60AAP00088": {
           "Description": "Ausbil 130/30 Focus - Wholesale"
        },
        "AU60AAP36561": {
           "Description": "Ausbil Active Dividend Income"
        },
        "AU60AAP39409": {
           "Description": "Ausbil Active Sustainable Equity"
        },
        "AU60AMP96206": {
           "Description": "Ausbil Advantage 130/30 Focus Fund"
        },
        "AU60AAP01037": {
           "Description": "Ausbil Australian Active Equity"
        },
        "AU60AAP92275": {
           "Description": "Ausbil Australian Concentrated Equity"
        },
        "AU60AAP01045": {
           "Description": "Ausbil Australian Emerging Leaders"
        },
        "AU60AAP00021": {
           "Description": "Ausbil Australian Geared Equity"
        },
        "AU60AAP01011": {
           "Description": "Ausbil Balanced"
        },
        "AU60AAP32545": {
           "Description": "Ausbil Global Essential Infras Wholsl"
        },
        "AU60AAP82854": {
           "Description": "Ausbil Global SmallCap"
        },
        "AU60AAP00070": {
           "Description": "Ausbil MicroCap"
        },
        "AU60ASX64866": {
           "Description": "Auscap Global Equities"
        },
        "AU60ASX61243": {
           "Description": "Auscap Long Short Aus Equs- Daily Plfm"
        },
        "AU60ASX84112": {
           "Description": "Auscap Long Short Aus Equs-Platform"
        },
        "AU60ASX00019": {
           "Description": "Auscap Long Short Australian Equities"
        },
        "AU60ALR27837": {
           "Description": "Australian Eagle Trust"
        },
        "AU60BEG00061": {
           "Description": "Australian Equities Extension Fund"
        },
        "AU60AUG00085": {
           "Description": "Australian Ethical Advocacy"
        },
        "AU60AUG00200": {
           "Description": "Australian Ethical Advocacy WS"
        },
        "AU60AUG00028": {
           "Description": "Australian Ethical Australian Shr"
        },
        "AU60AUG00184": {
           "Description": "Australian Ethical Australian Shr WS"
        },
        "AU60AUG00010": {
           "Description": "Australian Ethical Balanced"
        },
        "AU60AUG00176": {
           "Description": "Australian Ethical Balanced WS"
        },
        "AU60AUG00044": {
           "Description": "Australian Ethical Diversified Shr"
        },
        "AU60AUG00192": {
           "Description": "Australian Ethical Diversified Shr WS"
        },
        "AU60AUG00267": {
           "Description": "Australian Ethical Emerging Companies"
        },
        "AU60AUG00275": {
           "Description": "Australian Ethical Emerging Companies WS"
        },
        "AU60AUG00218": {
           "Description": "Australian Ethical Fixed Interest"
        },
        "AU60AUG00234": {
           "Description": "Australian Ethical Fixed Interest WS"
        },
        "AU60AUG00036": {
           "Description": "Australian Ethical Income"
        },
        "AU60AUG00242": {
           "Description": "Australian Ethical Income WS"
        },
        "AU60AUG00069": {
           "Description": "Australian Ethical Intl Shr"
        },
        "AU60AUG00259": {
           "Description": "Australian Ethical Intl Shr WS"
        },
        "AU60BEG46015": {
           "Description": "Australian Small and Mid-Cap Fund"
        },
        "AU60AUS00551": {
           "Description": "Australian Unity A-REIT Fund"
        },
        "AU60AUS91857": {
           "Description": "Australian Unity Real Estate Securities"
        },
        "AU60HOW91873": {
           "Description": "Avenir Global"
        },
        "AU60PIM58076": {
           "Description": "Aviva Inv Mlt-Stgy Fxd Inc I AUD Acc"
        },
        "AU60PIM00375": {
           "Description": "Aviva Inv Mlt-Stgy Tgt Inc Fh AUD Inc"
        },
        "AU60PIM00268": {
           "Description": "Aviva Investors Multi-Strategy Trgt Ret"
        },
        "AU60ETL28478": {
           "Description": "AXA IM Global Dynamic Equity Plus"
        },
        "AU60ETL01715": {
           "Description": "AXA IM Sustainable Equity"
        },
        "AU60FSF40185": {
           "Description": "Baillie Gifford Glb Stewardship A"
        },
        "AU60FSF57742": {
           "Description": "Baillie Gifford LT Gbl Growth A"
        },
        "AU60SLT00063": {
           "Description": "Baker Steel Gold"
        },
        "AU60ETL40002": {
           "Description": "Baker Steel Gold Institutional"
        },
        "AU60ETL04347": {
           "Description": "Barrow Hanley Global Equity Trust"
        },
        "AU60BAR00017": {
           "Description": "Barwon Global Listed Private Equity Fund"
        },
        "AU60BAR54030": {
           "Description": "Barwon Healthcare Property Fund"
        },
        "AU60SLT00683": {
           "Description": "Bateau Global Opportunities"
        },
        "AU60BPF00291": {
           "Description": "Bell Global Emerging Companies"
        },
        "AU60BPF00143": {
           "Description": "Bell Global Equities"
        },
        "AU60BPF00168": {
           "Description": "Bell Global Equities Platform Class"
        },
        "AU60STL00337": {
           "Description": "Bendigo Balanced Index"
        },
        "AU60STL00139": {
           "Description": "Bendigo Balanced Wholesale"
        },
        "AU60STL00329": {
           "Description": "Bendigo Conservative Index"
        },
        "AU60STL00121": {
           "Description": "Bendigo Conservative WS"
        },
        "AU60STL00311": {
           "Description": "Bendigo Defensive Index"
        },
        "AU60STL00295": {
           "Description": "Bendigo Defensive WS"
        },
        "AU60STL00519": {
           "Description": "Bendigo Diversified Fixed Interest Fund"
        },
        "AU60STL00154": {
           "Description": "Bendigo Global Share"
        },
        "AU60STL00345": {
           "Description": "Bendigo Growth Index"
        },
        "AU60STL00147": {
           "Description": "Bendigo Growth WS"
        },
        "AU60STL00352": {
           "Description": "Bendigo High Growth Index"
        },
        "AU60STL00303": {
           "Description": "Bendigo High Growth WS"
        },
        "AU60STL00550": {
           "Description": "Bendigo Socially Responsible Growth"
        },
        "AU60AMP91637": {
           "Description": "Bennelong Advantage ex-20 Aus Eqs Fd"
        },
        "AU60BFL00019": {
           "Description": "Bennelong Australian Equities"
        },
        "AU60BFL00027": {
           "Description": "Bennelong Concentrated Australian Eq"
        },
        "AU60BFL37797": {
           "Description": "Bennelong Emerging Companies Fund"
        },
        "AU60BFL00043": {
           "Description": "Bennelong ex-20 Australian Equities"
        },
        "AU60BFL00100": {
           "Description": "Bennelong Kardinia Absolute Return"
        },
        "AU60BFL00050": {
           "Description": "Bennelong Long Short Equity"
        },
        "AU60BFL00167": {
           "Description": "Bennelong Market Neutral Fund"
        },
        "AU60BFL00175": {
           "Description": "Bennelong Twenty20 Australian Equities"
        },
        "AU60BTA04809": {
           "Description": "Bennelong WS Plus ex-20 Aus Equities"
        },
        "AU60AMP20685": {
           "Description": "Bentham Advantage Global Income"
        },
        "AU60HOW28529": {
           "Description": "Bentham Asset Backed Securities I"
        },
        "AU60CSA00385": {
           "Description": "Bentham Global Income"
        },
        "AU60HOW57221": {
           "Description": "Bentham Global Opportunities F"
        },
        "AU60HOW70315": {
           "Description": "Bentham Global Opportunities I"
        },
        "AU60CSA00450": {
           "Description": "Bentham Professional Global Income"
        },
        "AU60CSA00484": {
           "Description": "Bentham Professional Syndicated Loan"
        },
        "AU60CSA00468": {
           "Description": "Bentham Syndicated Loan"
        },
        "AU60CSA01029": {
           "Description": "Bentham Wholesale High Yield"
        },
        "AU00000HBRD9": {
           "Description": "BetaShares Active Australian Hybrids ETF"
        },
        "AU000000QAG6": {
           "Description": "BetaShares Agriculture ETF CcyHgd(Synth)"
        },
        "AU0000022063": {
           "Description": "BetaShares Asia Technology Tigers ETF"
        },
        "AU00000QPON6": {
           "Description": "Betashares Aus Bank Sr Fltng Rt Bd ETF"
        },
        "AU00000BEAR2": {
           "Description": "BetaShares Aus Equities Bear Hedge ETF"
        },
        "AU00000EX202": {
           "Description": "BetaShares Aus Ex-20 Port Divrs ETF"
        },
        "AU000000AAA3": {
           "Description": "BetaShares Aus High Interest Cash ETF"
        },
        "AU0000008203": {
           "Description": "BetaShares Aus Inv Grd Corp Bd ETF"
        },
        "AU00000YMAX5": {
           "Description": "BetaShares Aus Top 20 Eq Yld Mxmsr ETF"
        },
        "AU00000A2000": {
           "Description": "BetaShares Australia 200 ETF"
        },
        "AU00000HVST1": {
           "Description": "BetaShares Australian Div Harvester ETF"
        },
        "AU00000BBOZ2": {
           "Description": "BetaShares Australian Eqs Strong BrH ETF"
        },
        "AU000000QFN1": {
           "Description": "BetaShares Australian Fincls Sect ETF"
        },
        "AU0000049553": {
           "Description": "BetaShares Australian Government Bd ETF"
        },
        "AU000000QRE5": {
           "Description": "BetaShares Australian Res Sect ETF"
        },
        "AU00000SMLL9": {
           "Description": "BetaShares Australian Small Coms Sel ETF"
        },
        "AU00000FAIR4": {
           "Description": "BetaShares Australian Sustnby Ldrs ETF"
        },
        "AU000000POU0": {
           "Description": "BetaShares British Pound ETF"
        },
        "AU000000QCB3": {
           "Description": "BetaShares Com Basket ETF Ccy Hgd(Synth)"
        },
        "AU60BSC00045": {
           "Description": "BetaShares CPS - Global Growth Fund"
        },
        "AU000000OOO6": {
           "Description": "BetaShares Crude Oil ETF Ccy Hgd(Synth)"
        },
        "AU0000059610": {
           "Description": "BetaShares Diversified Balanced ETF"
        },
        "AU0000059602": {
           "Description": "BetaShares Diversified Cnsrv Inc ETF"
        },
        "AU0000059594": {
           "Description": "BetaShares Diversified Growth ETF"
        },
        "AU0000059586": {
           "Description": "BetaShares Diversified High Growth ETF"
        },
        "AU000000EEU5": {
           "Description": "BetaShares Euro ETF"
        },
        "AU00000HEUR7": {
           "Description": "BetaShares Europe ETF-Ccy Hdg"
        },
        "AU0000051054": {
           "Description": "BetaShares FTSE 100 ETF"
        },
        "AU000000QOZ7": {
           "Description": "BetaShares FTSE RAFI Australia 200 ETF"
        },
        "AU000000QUS9": {
           "Description": "BetaShares FTSE RAFI US 1000 ETF"
        },
        "AU00000GEAR1": {
           "Description": "BetaShares Geared Australian Equity ETF"
        },
        "AU00000GGUS2": {
           "Description": "BetaShares Geared US Eq Ccy Hdg ETF"
        },
        "AU00000FOOD3": {
           "Description": "BetaShares Glb Agltr Coms ETF-Ccy Hdg"
        },
        "AU00000BNKS0": {
           "Description": "BetaShares Glb Banks ETF-Ccy Hdg"
        },
        "AU00000FUEL4": {
           "Description": "BetaShares Glb Energy Coms ETF-Ccy Hdg"
        },
        "AU00000MNRS2": {
           "Description": "BetaShares Glb Gold Miners ETF-Ccy Hdg"
        },
        "AU00000DRUG1": {
           "Description": "BetaShares Glb Healthcare ETF-Ccy Hdg"
        },
        "AU0000022055": {
           "Description": "BetaShares Glb Rbtc & Artfcl Intlgc ETF"
        },
        "AU00000HACK8": {
           "Description": "Betashares Global Cybersecurity ETF"
        },
        "AU0000078651": {
           "Description": "BetaShares Global Gov Bd 20+Yr ETF Ccy H"
        },
        "AU0000022071": {
           "Description": "BetaShares Global Income Leaders ETF"
        },
        "AU0000089732": {
           "Description": "BetaShares Global Quality Ldrs ETF Ccy H"
        },
        "AU0000022089": {
           "Description": "BetaShares Global Quality Leaders ETF"
        },
        "AU00000ETHI8": {
           "Description": "BetaShares Global Sstnbty Ldrs ETF"
        },
        "AU000000QAU7": {
           "Description": "BetaShares Gold Bullion ETF Ccy Hedged"
        },
        "AU0000053126": {
           "Description": "Betashares India Quality ETF"
        },
        "AU00000HJPN5": {
           "Description": "BetaShares Japan ETF-Ccy Hdg"
        },
        "AU0000026189": {
           "Description": "BetaShares Legg Mason Australian Bd ETF"
        },
        "AU0000041725": {
           "Description": "BetaShares Legg Mason Em Mkts ETF"
        },
        "AU0000000648": {
           "Description": "BetaShares Legg Mason Equity Income ETF"
        },
        "AU0000000630": {
           "Description": "BetaShares Legg Mason Real Income ETF"
        },
        "AU00000AUST8": {
           "Description": "BetaShares Managed Risk AUS Shr ETF"
        },
        "AU00000WRLD7": {
           "Description": "BetaShares Managed Risk Global Share ETF"
        },
        "AU000000NDQ6": {
           "Description": "BetaShares NASDAQ 100 ETF"
        },
        "AU00000UMAX3": {
           "Description": "BetaShares S&P 500 Yield Maximiser ETF"
        },
        "AU0000075467": {
           "Description": "BetaShares S&P/ASX Australian Tech ETF"
        },
        "AU0000063901": {
           "Description": "BetaShares Sstby Ldrs Dvrs Bd ETF Ccy Hd"
        },
        "AU00000AUDS2": {
           "Description": "BetaShares Strong Australian Dllr H ETF"
        },
        "AU00000YANK0": {
           "Description": "BetaShares Strong US Dollar Hedge ETF"
        },
        "AU000000USD7": {
           "Description": "BetaShares US Dollar ETF"
        },
        "AU00000BBUS4": {
           "Description": "BetaShares US Eqs Strong Bear H CcyH ETF"
        },
        "AU60BAR08143": {
           "Description": "BlackRock Advantage Australian Equity"
        },
        "AU60BGL01098": {
           "Description": "BlackRock Advantage Hedged Intl Equity"
        },
        "AU60BAR08176": {
           "Description": "BlackRock Advantage Intl Equity Fund"
        },
        "AU60BLK76985": {
           "Description": "BlackRock Appreciation Strategy (AUS) S"
        },
        "AU60BLK67232": {
           "Description": "BlackRock Australian Alpha Tilts S"
        },
        "AU60PWA00140": {
           "Description": "BlackRock Australian Share"
        },
        "AU60PWA00157": {
           "Description": "BlackRock Australian Share Plus"
        },
        "AU60BLK19183": {
           "Description": "BlackRock Balanced Multi-Index D"
        },
        "AU60BGL00090": {
           "Description": "BlackRock Cash Fund"
        },
        "AU60BLK00126": {
           "Description": "BlackRock Concentrated Industrial"
        },
        "AU60BLK00225": {
           "Description": "BlackRock Concentrated Total Return E2"
        },
        "AU60BLK22047": {
           "Description": "BlackRock Core Alternatives E"
        },
        "AU60BAR08135": {
           "Description": "BlackRock Diversified ESG Growth Fund"
        },
        "AU60BAR08119": {
           "Description": "BlackRock Diversified ESG Stable Fund"
        },
        "AU60BGL00603": {
           "Description": "BlackRock Enhanced Australian Bond D"
        },
        "AU60PWA00017": {
           "Description": "BlackRock Equity"
        },
        "AU60BGL00512": {
           "Description": "BlackRock Fission Indexed Intl Eq D"
        },
        "AU60BLK00100": {
           "Description": "BlackRock Fixed Inc Glb Oppos (Aust) E"
        },
        "AU60BLK00035": {
           "Description": "BlackRock Fixed Income Global Opps Cl D"
        },
        "AU60BLK00092": {
           "Description": "BlackRock Glbl Multi Asset Inc AUS Cl D"
        },
        "AU60MAL00181": {
           "Description": "BlackRock Global Allocation Aus D"
        },
        "AU60MAL00298": {
           "Description": "BlackRock Global Allocation Aus S"
        },
        "AU60BLK59379": {
           "Description": "BlackRock Global Equity Signals Fund D"
        },
        "AU60BLK95605": {
           "Description": "BlackRock Growth Multi-Index D"
        },
        "AU60BLK36518": {
           "Description": "BlackRock Moderate Multi-Index D"
        },
        "AU60BLK00019": {
           "Description": "BlackRock Multi Opportunity Absolute Ret"
        },
        "AU60MAL00173": {
           "Description": "BlackRock P Invs Gbl Allocation Aus C"
        },
        "AU60BGL00025": {
           "Description": "BlackRock Scientific Whls Divers Stable"
        },
        "AU60BGL00033": {
           "Description": "BlackRock Scientific Wholesale Divers Gr"
        },
        "AU60BLK00183": {
           "Description": "BlackRock Style Advantage Fund Aust Cl D"
        },
        "AU60PWA00132": {
           "Description": "BlackRock Tactical Growth"
        },
        "AU60WFS36154": {
           "Description": "BlackRock Wholesale Plus Style Adv(Aust)"
        },
        "AU60PWA08234": {
           "Description": "BlackRock WS Australian Share"
        },
        "AU60PWA08259": {
           "Description": "BlackRock WS International Bond"
        },
        "AU60PWA08226": {
           "Description": "BlackRock WS Tactical Growth"
        },
        "AU60WFS40214": {
           "Description": "Blended Global Equities Hedged MPS"
        },
        "AU60BSP10350": {
           "Description": "Blue Sky aCommerce 4"
        },
        "AU60BSP00112": {
           "Description": "Blue Sky Agriculture"
        },
        "AU60BSP00369": {
           "Description": "Blue Sky Agriculture Fund III"
        },
        "AU60BSP25978": {
           "Description": "Blue Sky Agriculture Fund IV"
        },
        "AU60BSP00237": {
           "Description": "Blue Sky Agriculture II"
        },
        "AU60BSP00161": {
           "Description": "Blue Sky Darra Industrial Income"
        },
        "AU60BSP00336": {
           "Description": "Blue Sky Digital Outdoor Advertising"
        },
        "AU60BSP29707": {
           "Description": "Blue Sky Energy Infrastructure Fund"
        },
        "AU60BSP00229": {
           "Description": "Blue Sky Hotel"
        },
        "AU60BSP87291": {
           "Description": "Blue Sky Lexer Fund"
        },
        "AU60BSP84868": {
           "Description": "Blue Sky Private Eq Better Medical Fd"
        },
        "AU60BSP75247": {
           "Description": "Blue Sky Private Equity aCommerce Fund 3"
        },
        "AU60BSP00328": {
           "Description": "Blue Sky Private Equity Aquila"
        },
        "AU60BSP17355": {
           "Description": "Blue Sky Private Equity Birch & Waite"
        },
        "AU60BSP00278": {
           "Description": "Blue Sky Private Equity Conventus"
        },
        "AU60BSP00211": {
           "Description": "Blue Sky Private Equity Origo Education"
        },
        "AU60BSP70719": {
           "Description": "Blue Sky Private Equity QFS"
        },
        "AU60BSP00286": {
           "Description": "Blue Sky Private Equity Shoes of Prey"
        },
        "AU60BSP00310": {
           "Description": "Blue Sky Private Equity Vinomofo"
        },
        "AU60BSP00138": {
           "Description": "Blue Sky Residential Developments"
        },
        "AU60BSP00195": {
           "Description": "Blue Sky Residential Developments 2"
        },
        "AU60BSP00260": {
           "Description": "Blue Sky Residential Developments 3"
        },
        "AU60BSP00385": {
           "Description": "Blue Sky Retirement Living Corinda"
        },
        "AU60BSP47618": {
           "Description": "Blue Sky SMG Fund"
        },
        "AU60BSP67830": {
           "Description": "Blue Sky SMG Fund II"
        },
        "AU60BSP06945": {
           "Description": "Blue Sky Student Accommodation 7"
        },
        "AU60BSP00344": {
           "Description": "Blue Sky Student Accomodation 5"
        },
        "AU60BSP00377": {
           "Description": "Blue Sky Student Accomodation 6"
        },
        "AU60BSP00203": {
           "Description": "Blue Sky Student Accomodation II"
        },
        "AU60BSP00252": {
           "Description": "Blue Sky Student Accomodation III"
        },
        "AU60BSP00302": {
           "Description": "Blue Sky Student Accomodation IV"
        },
        "AU60BSP00179": {
           "Description": "Blue Sky Student Accomodation No.1"
        },
        "AU60BSP52352": {
           "Description": "Blue Sky US Brewery Fund"
        },
        "AU60BSP00062": {
           "Description": "Blue Sky VC2012 LP"
        },
        "AU60BSP00153": {
           "Description": "Blue Sky VC2014 LP"
        },
        "AU60BSP00401": {
           "Description": "Blue Sky VC2017 ESVCLP LP"
        },
        "AU60BSP00104": {
           "Description": "Blue Sky Wild Breads"
        },
        "AU60PER07360": {
           "Description": "BMO LGM Global Emerging Markets"
        },
        "AU60PER07287": {
           "Description": "BMO Pyrford Global Absolute Return"
        },
        "AU60ETL81717": {
           "Description": "BNP Paribas Environmental Equity Trust"
        },
        "AU60ETL03067": {
           "Description": "BNY Mellon Standish Global Bond Fund"
        },
        "AU60BIM84148": {
           "Description": "Bombora Special Investments Growth"
        },
        "AU60BCM00014": {
           "Description": "Bronte Capital Amalthea"
        },
        "AU60BCM00063": {
           "Description": "Bronte Capital Amalthea Fund Platform"
        },
        "AU60BCM16572": {
           "Description": "Bronte Capital Amalthea Fund Platform B"
        },
        "AU60RFA00208": {
           "Description": "BT Active Bal Retail"
        },
        "AU60BTA00237": {
           "Description": "BT American Share Retail"
        },
        "AU60BTA00260": {
           "Description": "BT Asian Share Retail"
        },
        "AU60BTA00211": {
           "Description": "BT Aus Share Retail"
        },
        "AU60ADV00643": {
           "Description": "BT Australian Fixed Interest Index"
        },
        "AU60ADV00627": {
           "Description": "BT Australian Shares Index W"
        },
        "AU60BTA04130": {
           "Description": "BT Capital Protection - Bond Class 2020"
        },
        "AU60BTA04148": {
           "Description": "BT Capital Protection - Bond Class 2021"
        },
        "AU60BTA04155": {
           "Description": "BT Capital Protection - Bond Class 2022"
        },
        "AU60BTA04510": {
           "Description": "BT Capital Protection - Bond Class 2023"
        },
        "AU60BTA04627": {
           "Description": "BT Capital Protection - Bond Class 2024"
        },
        "AU60BTA04858": {
           "Description": "BT Capital Protection - Bond Class 2025"
        },
        "AU60BTA04353": {
           "Description": "BT Capital Protection - Cash Class 2020"
        },
        "AU60BTA04361": {
           "Description": "BT Capital Protection - Cash Class 2021"
        },
        "AU60BTA04312": {
           "Description": "BT Capital Protection - Cash Class 2022"
        },
        "AU60BTA04502": {
           "Description": "BT Capital Protection - Cash Class 2023"
        },
        "AU60BTA04635": {
           "Description": "BT Capital Protection - Cash Class 2024"
        },
        "AU60BTA04866": {
           "Description": "BT Capital Protection - Cash Class 2025"
        },
        "AU60BTA04940": {
           "Description": "BT Capital Protection Bond 2026"
        },
        "AU60BTA05004": {
           "Description": "BT Capital Protection Cash 2026"
        },
        "AU60BTA00021": {
           "Description": "BT Cash Management"
        },
        "AU60RFA00216": {
           "Description": "BT Class Inv Active Bal NE"
        },
        "AU60BTA00435": {
           "Description": "BT Class Inv Balanced Returns"
        },
        "AU60RFA00117": {
           "Description": "BT Class Inv Core Aus Shr"
        },
        "AU60RFA00240": {
           "Description": "BT Class Inv Div Shr NE"
        },
        "AU60BTA00419": {
           "Description": "BT Class Inv Monthly Income"
        },
        "AU60RFA00133": {
           "Description": "BT Class Inv Natural Resources"
        },
        "AU60BTA00120": {
           "Description": "BT Class Inv Split Growth"
        },
        "AU60BTA00112": {
           "Description": "BT Class Inv Split Income"
        },
        "AU60RFA00232": {
           "Description": "BT Class Inv Tax Effective Income NE"
        },
        "AU60RFA00307": {
           "Description": "BT Core Hedged Global Share Retail"
        },
        "AU60BTA00252": {
           "Description": "BT European Share Retail"
        },
        "AU60RFA00026": {
           "Description": "BT Fixed Interest Retail"
        },
        "AU60BTA00443": {
           "Description": "BT Future Goals Retail"
        },
        "AU60RFA00620": {
           "Description": "BT Geared Imputation Fund (Retail)"
        },
        "AU60WFS03873": {
           "Description": "BT Global Property Retail"
        },
        "AU60RFA00521": {
           "Description": "BT Global Property Value"
        },
        "AU60RFA00190": {
           "Description": "BT Imp Shr Retail"
        },
        "AU60BTA00427": {
           "Description": "BT Income Plus Retail"
        },
        "AU60WFS05902": {
           "Description": "BT Index Balanced"
        },
        "AU60WFS05886": {
           "Description": "BT Index Defensive"
        },
        "AU60WFS05910": {
           "Description": "BT Index Growth"
        },
        "AU60WFS05928": {
           "Description": "BT Index High Growth"
        },
        "AU60WFS05894": {
           "Description": "BT Index Moderate"
        },
        "AU60ADV00585": {
           "Description": "BT International Fixed Interest Index W"
        },
        "AU60BTA00245": {
           "Description": "BT International Share Retail"
        },
        "AU60ADV00569": {
           "Description": "BT International Shares Index W"
        },
        "AU60RFA00141": {
           "Description": "BT Investment Global Share"
        },
        "AU60WFS01026": {
           "Description": "BT Investor Choice All Aus Gr"
        },
        "AU60WFS00226": {
           "Description": "BT Investor Choice Aus Gr"
        },
        "AU60WFS03295": {
           "Description": "BT Investor Choice Aus Prp Secs NEF"
        },
        "AU60WFS00218": {
           "Description": "BT Investor Choice Aus Tax Eff"
        },
        "AU60WFS03279": {
           "Description": "BT Investor Choice Aus Tax Eff NE"
        },
        "AU60WFS00135": {
           "Description": "BT Investor Choice Australia Bond"
        },
        "AU60WFS00333": {
           "Description": "BT Investor Choice Bal Gr"
        },
        "AU60WFS03345": {
           "Description": "BT Investor Choice Bal Gr NEF"
        },
        "AU60WFS00119": {
           "Description": "BT Investor Choice Cash Management"
        },
        "AU60WFS00036": {
           "Description": "BT Investor Choice Cons Gr"
        },
        "AU60WFS00341": {
           "Description": "BT Investor Choice Dynamic Growth"
        },
        "AU60WFS00234": {
           "Description": "BT Investor Choice Intl Share"
        },
        "AU60WFS00325": {
           "Description": "BT Investor Choice Mod Gr"
        },
        "AU60WFS03337": {
           "Description": "BT Investor Choice Mod Gr NEF"
        },
        "AU60BTA01318": {
           "Description": "BT Japanese Share Retail"
        },
        "AU60BTA02597": {
           "Description": "BT Multi-Manager Aus Shr WS"
        },
        "AU60BTA00773": {
           "Description": "BT Multi-Manager Bal Retail"
        },
        "AU60BTA02217": {
           "Description": "BT Multi-Manager Bal WS"
        },
        "AU60BTA00781": {
           "Description": "BT Multi-Manager Cons Retail"
        },
        "AU60BTA02225": {
           "Description": "BT Multi-Manager Cons WS"
        },
        "AU60BTA02605": {
           "Description": "BT Multi-Manager Fixed Interest W"
        },
        "AU60BTA00807": {
           "Description": "BT Multi-Manager Gr Retail"
        },
        "AU60BTA02233": {
           "Description": "BT Multi-Manager Gr W"
        },
        "AU60BTA00799": {
           "Description": "BT Multi-Manager High Gr Retail"
        },
        "AU60BTA02464": {
           "Description": "BT Multi-Manager High Gr WS"
        },
        "AU60WFS03055": {
           "Description": "BT PPSI-Aberdeen Australian Equities"
        },
        "AU60WFS02883": {
           "Description": "BT PPSI-Aberdeen SI Act Hgd Intl Eq"
        },
        "AU60WFS03030": {
           "Description": "BT PPSI-BlackRock Scientific Aus Eq"
        },
        "AU60WFS02073": {
           "Description": "BT PPSI-BlackRock Scientific Div Gr"
        },
        "AU60WFS02081": {
           "Description": "BT PPSI-BlackRock Scientific Div Stb"
        },
        "AU60WFS02305": {
           "Description": "BT PPSI-BlackRock Scientific Intl Eq"
        },
        "AU60WFS02669": {
           "Description": "BT PPSI-BlackRock WS Aus Share"
        },
        "AU60WFS02099": {
           "Description": "BT PPSI-BlackRock WS Balanced"
        },
        "AU60WFS02321": {
           "Description": "BT PPSI-BT Aus Share"
        },
        "AU60WFS02347": {
           "Description": "BT PPSI-BT Cons Outlook"
        },
        "AU60WFS02263": {
           "Description": "BT PPSI-BT Institutional Enh Int Fix Inc"
        },
        "AU60WFS02289": {
           "Description": "BT PPSI-BT Institutional Enhanced Cash"
        },
        "AU60WFS02271": {
           "Description": "BT PPSI-BT Institutional Managed Cash"
        },
        "AU60WFS02123": {
           "Description": "BT PPSI-BT Sustainable Conservative"
        },
        "AU60WFS02115": {
           "Description": "BT PPSI-BT WS Active Bal"
        },
        "AU60WFS02313": {
           "Description": "BT PPSI-BT WS Asian"
        },
        "AU60WFS02339": {
           "Description": "BT PPSI-BT WS Balanced Returns"
        },
        "AU60WFS02370": {
           "Description": "BT PPSI-BT WS Core Aus Share"
        },
        "AU60WFS02685": {
           "Description": "BT PPSI-BT WS Core Gbl Share"
        },
        "AU60WFS00747": {
           "Description": "BT PPSI-BT WS Core Hedged Global"
        },
        "AU60WFS02545": {
           "Description": "BT PPSI-BT WS European"
        },
        "AU60WFS03675": {
           "Description": "BT PPSI-BT WS Geared Imputation"
        },
        "AU60WFS02552": {
           "Description": "BT PPSI-BT WS Intl Shares"
        },
        "AU60WFS00705": {
           "Description": "BT PPSI-BT WS Ptnr Aus Shr Gr 1"
        },
        "AU60WFS02388": {
           "Description": "BT PPSI-BT WS Smaller Companies"
        },
        "AU60WFS02586": {
           "Description": "BT PPSI-CFS Imputation"
        },
        "AU60WFS02560": {
           "Description": "BT PPSI-CFS WS Diversified"
        },
        "AU60WFS02578": {
           "Description": "BT PPSI-CFS WS High Growth"
        },
        "AU60WFS03048": {
           "Description": "BT PPSI-Ironbark Global Div Alternatives"
        },
        "AU60WFS02990": {
           "Description": "BT PPSI-Macquarie Mas Enhanced Cash"
        },
        "AU60WFS02974": {
           "Description": "BT PPSI-Macquarie Mas Fixed Interest"
        },
        "AU60WFS02982": {
           "Description": "BT PPSI-Macquarie Mas Property Secs"
        },
        "AU60WFS02610": {
           "Description": "BT PPSI-Macquarie WS Property Securities"
        },
        "AU60WFS02644": {
           "Description": "BT PPSI-MLC Global Share"
        },
        "AU60WFS00754": {
           "Description": "BT PPSI-MLC Income Builder"
        },
        "AU60WFS02628": {
           "Description": "BT PPSI-MLC Inv Aus Share"
        },
        "AU60WFS02636": {
           "Description": "BT PPSI-MLC WS Horizon 4 Balanced"
        },
        "AU60WFS02354": {
           "Description": "BT PPSI-MLC WS Horizon 5 Growth"
        },
        "AU60WFS02362": {
           "Description": "BT PPSI-MLC WS Property Securities"
        },
        "AU60WFS03923": {
           "Description": "BT PPSI-Platinum International"
        },
        "AU60WFS00770": {
           "Description": "BT PPSI-Schroder Hybrid Securities"
        },
        "AU60WFS00762": {
           "Description": "BT PPSI-Schroder W Aus Equity"
        },
        "AU60WFS00788": {
           "Description": "BT PPSI-UBS Aus Share"
        },
        "AU60WFS00796": {
           "Description": "BT PPSI-UBS International Share"
        },
        "AU60WFS02164": {
           "Description": "BT PPSI-Westpac Aus Gr"
        },
        "AU60WFS02172": {
           "Description": "BT PPSI-Westpac Aus Property Secs"
        },
        "AU60WFS02180": {
           "Description": "BT PPSI-Westpac Aus Tax Eff"
        },
        "AU60WFS02149": {
           "Description": "BT PPSI-Westpac Australia Bond"
        },
        "AU60WFS02198": {
           "Description": "BT PPSI-Westpac Bal Gr"
        },
        "AU60WFS02214": {
           "Description": "BT PPSI-Westpac Diversified Growth"
        },
        "AU60WFS02222": {
           "Description": "BT PPSI-Westpac Dynam Gr"
        },
        "AU60WFS02917": {
           "Description": "BT PPSI-Westpac Ins Aus Sust Shr"
        },
        "AU60WFS02248": {
           "Description": "BT PPSI-Westpac Intl Share"
        },
        "AU60WFS02230": {
           "Description": "BT PPSI-Westpac Moderate Growth"
        },
        "AU60BTA01730": {
           "Description": "BT Premium Cash"
        },
        "AU60BTA01292": {
           "Description": "BT Premium Cash Retail"
        },
        "AU60BTA00518": {
           "Description": "BT Property Secs Retail"
        },
        "AU60ADV00601": {
           "Description": "BT Property Securities Index W"
        },
        "AU60BTA00732": {
           "Description": "BT Ptnr Aus Share Gr 1 Retail"
        },
        "AU60BTA02423": {
           "Description": "BT Ptnr Aus Share Gr 1 WS"
        },
        "AU60BTA02498": {
           "Description": "BT Ptnr Intl Shares Core 1 Retail"
        },
        "AU60BTA02480": {
           "Description": "BT Ptnr Intl Shares Core 1 WS"
        },
        "AU60WFS00952": {
           "Description": "BT Schroder Credit Securities"
        },
        "AU60RFA00125": {
           "Description": "BT Smaller Companies Retail"
        },
        "AU60BTA01276": {
           "Description": "BT Technology Retail"
        },
        "AU60WFS04335": {
           "Description": "BT WE Aberdeen Emerging Opportunities"
        },
        "AU60WFS04285": {
           "Description": "BT WE Advance Aus Fxd Intr Mlt-Blnd"
        },
        "AU60WFS04426": {
           "Description": "BT WE Advance Balanced Multi-Blend"
        },
        "AU60WFS04400": {
           "Description": "BT WE Advance Defensive Multi-Blend"
        },
        "AU60WFS04434": {
           "Description": "BT WE Advance Growth Multi-Blend"
        },
        "AU60WFS04442": {
           "Description": "BT WE Advance High Growth Multi-Blend"
        },
        "AU60WFS04293": {
           "Description": "BT WE Advance Intl Fxd Intr Mlt-Blnd"
        },
        "AU60WFS04418": {
           "Description": "BT WE Advance Moderate Multi-Blend"
        },
        "AU60WFS04467": {
           "Description": "BT WE APN AREIT"
        },
        "AU60WFS04210": {
           "Description": "BT WE Ausbil Australian Active Equity"
        },
        "AU60WFS04228": {
           "Description": "BT WE Ausbil Emerging Leaders"
        },
        "AU60WFS04350": {
           "Description": "BT WE BlackRock Global Allocation"
        },
        "AU60WFS04004": {
           "Description": "BT WE BlackRock Scntf Idx Aus Lstd Prpty"
        },
        "AU60WFS04269": {
           "Description": "BT WE BT Enhanced Cash"
        },
        "AU60WFS03857": {
           "Description": "BT WE BT Investors Mutual Industrial Shr"
        },
        "AU60WFS03790": {
           "Description": "BT WE BT Macquarie Diversified Fixed Int"
        },
        "AU60BTA03108": {
           "Description": "BT WE BT Multi-Manager Aus Share"
        },
        "AU60BTA03116": {
           "Description": "BT WE BT Multi-Manager Fixed Interest"
        },
        "AU60WFS03824": {
           "Description": "BT WE BT PM Capital Enhanced Yield"
        },
        "AU60WFS04137": {
           "Description": "BT WE CFS Global Resources"
        },
        "AU60WFS04095": {
           "Description": "BT WE Fidelity Australian Equities"
        },
        "AU60WFS04178": {
           "Description": "BT WE Ironbark Global Property Secs"
        },
        "AU60WFS04145": {
           "Description": "BT WE Ironbark GTP Global Equity Thtc"
        },
        "AU60WFS04475": {
           "Description": "BT WE Lazard Glbl Listed Infrastructure"
        },
        "AU60WFS04319": {
           "Description": "BT WE Macquarie Income Opportunities"
        },
        "AU60WFS04301": {
           "Description": "BT WE OnePath Diversified Fixed Interest"
        },
        "AU60WFS04327": {
           "Description": "BT WE Schroder Fixed Income"
        },
        "AU60WFS04152": {
           "Description": "BT WE T. Rowe Price Global Equity"
        },
        "AU60WFS04160": {
           "Description": "BT WE Templeton Global Equity"
        },
        "AU60WFS04111": {
           "Description": "BT WE Tyndall Australian Share"
        },
        "AU60WFS04277": {
           "Description": "BT WE UBS Cash"
        },
        "AU60WFS03881": {
           "Description": "BT WE Vanguard Australian Shares Index"
        },
        "AU60WFS03899": {
           "Description": "BT WE Vanguard International Shares Indx"
        },
        "AU60WFS04392": {
           "Description": "BT WE Zurich Global Thematic Share"
        },
        "AU60BTA02613": {
           "Description": "BT Wholesale Multi Manager Intl Share"
        },
        "AU60BTA91590": {
           "Description": "BT Wholesale Multi-manager Moderate"
        },
        "AU60WFS00903": {
           "Description": "BT-Aberdeen Act Hgd Intl Eq"
        },
        "AU60WFS00895": {
           "Description": "BT-BlackRock Scientific Div Gr"
        },
        "AU60WFS00911": {
           "Description": "BT-Investor Mutual Aus Shares"
        },
        "AU60WFS00978": {
           "Description": "BT-Perpetual Cons Gr"
        },
        "AU60WFS00929": {
           "Description": "BT-Platinum International"
        },
        "AU60WFS00937": {
           "Description": "BT-Schroder Aus Share"
        },
        "AU60WFS00945": {
           "Description": "BT-Schroder Balanced"
        },
        "AU60WFS00986": {
           "Description": "BT-UBS Diversified Fixed Income"
        },
        "AU60BOW00018": {
           "Description": "BWA Cash Management Account"
        },
        "AU60ARO00069": {
           "Description": "C WorldWide Global Equity Trust"
        },
        "AU60PLL97807": {
           "Description": "Cambridge Bedford Property Ordinary"
        },
        "AU60GSF47998": {
           "Description": "Cambridge Global Smaller Companies A"
        },
        "AU60AAP00013": {
           "Description": "Candriam Sustainable Global Equity"
        },
        "AU60TGY33237": {
           "Description": "Cannon Hill Office Trust"
        },
        "AU60WHT00535": {
           "Description": "Capital Group Emerging Mkts Ttl Opps(AU)"
        },
        "AU60CIM01611": {
           "Description": "Capital Group Global Corp Bond Hedged"
        },
        "AU60WHT00444": {
           "Description": "Capital Group Global Equity (AU)"
        },
        "AU60CIM38399": {
           "Description": "Capital Group Global High Inc Opps H"
        },
        "AU60CIM00068": {
           "Description": "Capital Group New Perspective (AU)"
        },
        "AU60CIM00084": {
           "Description": "Capital Group New Perspective Hdg (AU)"
        },
        "AU60CIM86802": {
           "Description": "Capital Group New World (AU)"
        },
        "AU60CIM18987": {
           "Description": "Capital Group New World Hedged (AU)"
        },
        "AU60CIM00027": {
           "Description": "Capital Group World Div Growers (AU)"
        },
        "AU60COM00223": {
           "Description": "CBA Australian Share"
        },
        "AU60COM00132": {
           "Description": "CBA Balanced"
        },
        "AU60COM00116": {
           "Description": "CBA Bond"
        },
        "AU60COM00181": {
           "Description": "CBA Growth"
        },
        "AU60COM00207": {
           "Description": "CBA Income"
        },
        "AU60COM00199": {
           "Description": "CBA International Share"
        },
        "AU60COM00330": {
           "Description": "CBA Property Securities"
        },
        "AU60COM00124": {
           "Description": "CBA Share Income"
        },
        "AU60FSP00014": {
           "Description": "CBG Australian Equities Fund"
        },
        "AU60CHN00050": {
           "Description": "CC JCB Active Bond"
        },
        "AU60CHN37490": {
           "Description": "CC JCB Active Bond B"
        },
        "AU60CHN86075": {
           "Description": "CC JCB Dynamic Alpha A"
        },
        "AU60CHN47119": {
           "Description": "CC JCB Global Bond A Hedged"
        },
        "AU60CHN14259": {
           "Description": "CC JCB Global Bond B Unhedged"
        },
        "AU60CHN00019": {
           "Description": "CC Marsico Global Fund - Instl Class"
        },
        "AU60CHN00027": {
           "Description": "CC Marsico Global Fund - Retail Class"
        },
        "AU60CHN88501": {
           "Description": "CC RWC Global Emerging Markets"
        },
        "AU60CHN58439": {
           "Description": "CC Sage Capital Absolute Return"
        },
        "AU60CHN88626": {
           "Description": "CC Sage Capital Equity Plus"
        },
        "AU60FAM01017": {
           "Description": "Celeste Australian Small Companies"
        },
        "AU60CNT00261": {
           "Description": "Centuria 203 Pacific Highway Fund"
        },
        "AU60CNT00162": {
           "Description": "Centuria 8 Central Avenue Fund No.2"
        },
        "AU60CNT00287": {
           "Description": "Centuria ATP Fund"
        },
        "AU60CNT00329": {
           "Description": "Centuria Diversified Property Fund"
        },
        "AU60CNT68292": {
           "Description": "Centuria Sandgate Road Fund"
        },
        "AU60CNT10724": {
           "Description": "Centuria Scarborough House Fund"
        },
        "AU60CNT96087": {
           "Description": "Centuria SOP Fund"
        },
        "AU60PIM00342": {
           "Description": "CFM Institutional Systematic Diversified"
        },
        "AU60PIM19664": {
           "Description": "CFM IS Trends Trust Class A Units"
        },
        "AU60PIM81300": {
           "Description": "CFM IS Trends Trust Class B Units"
        },
        "AU60CVW18906": {
           "Description": "CFML Antipodes Global Fund"
        },
        "AU60NRM00363": {
           "Description": "CFML First Sentier Investors Infras"
        },
        "AU60NRM00306": {
           "Description": "CFML Fixed Interest"
        },
        "AU60NRM00348": {
           "Description": "CFML Listed Property"
        },
        "AU60NRM00264": {
           "Description": "CFML Money Market"
        },
        "AU60NRM00389": {
           "Description": "CFML RARE Emerging Markets"
        },
        "AU60NRM00280": {
           "Description": "CFML Schroder Equity Opportunities"
        },
        "AU60NRM00322": {
           "Description": "CFML Stewart Investors Worldwide S"
        },
        "AU60FSF17738": {
           "Description": "CFS Asian Growth - A"
        },
        "AU60FSF87772": {
           "Description": "CFS Australian MidCap Fund - Class A"
        },
        "AU60FSF00353": {
           "Description": "CFS Developing Companies"
        },
        "AU60FSF16763": {
           "Description": "CFS Equity Income Fund Class A"
        },
        "AU60CFM04041": {
           "Description": "CFS FC - T. Rowe Price W Aus Eq"
        },
        "AU60FSF02383": {
           "Description": "CFS FC Inv - T. Rowe Price Aus Eq"
        },
        "AU60FSF02318": {
           "Description": "CFS FC Inv-Aberdeen Std Aus Fixed Inc"
        },
        "AU60FSF07820": {
           "Description": "CFS FC Inv-Acadian Aus Equity"
        },
        "AU60FSF08141": {
           "Description": "CFS FC Inv-Acadian Aus Equity LS"
        },
        "AU60FSF00908": {
           "Description": "CFS FC Inv-Acadian Geared Aus Eq"
        },
        "AU60FSF08760": {
           "Description": "CFS FC Inv-Acadian Geared Global Eq"
        },
        "AU60FSF08752": {
           "Description": "CFS FC Inv-Acadian Glb Equity LS"
        },
        "AU60FSF07242": {
           "Description": "CFS FC Inv-Acadian Sus Glb Equity"
        },
        "AU60FSF00858": {
           "Description": "CFS FC Inv-Altrinsic Global Equity"
        },
        "AU60FSF12085": {
           "Description": "CFS FC Inv-AMP Capital Glb Property Sec"
        },
        "AU60FSF00973": {
           "Description": "CFS FC Inv-Antares Elite Opport"
        },
        "AU60FSF06657": {
           "Description": "CFS FC Inv-APN AREIT"
        },
        "AU60FSF10840": {
           "Description": "CFS FC Inv-Aspect Div Futures"
        },
        "AU60FSF02375": {
           "Description": "CFS FC Inv-Ausbil Aus Active Equity"
        },
        "AU60FSF07309": {
           "Description": "CFS FC Inv-Ausbil Aus Emerg Leaders"
        },
        "AU60FSF12077": {
           "Description": "CFS FC Inv-Baillie Gifford LT Glb Gwth"
        },
        "AU60FSF02342": {
           "Description": "CFS FC Inv-BlackRock W Adv Aus Shr"
        },
        "AU60FSF07291": {
           "Description": "CFS FC Inv-Celeste Aus Small Co"
        },
        "AU60FSF02540": {
           "Description": "CFS FC Inv-CFS Balanced"
        },
        "AU60FSF02284": {
           "Description": "CFS FC Inv-CFS Cash"
        },
        "AU60FSF02573": {
           "Description": "CFS FC Inv-CFS Conservative"
        },
        "AU60FSF00882": {
           "Description": "CFS FC Inv-CFS Developing Companies"
        },
        "AU60FSF02615": {
           "Description": "CFS FC Inv-CFS Diversified"
        },
        "AU60FSF02292": {
           "Description": "CFS FC Inv-CFS Diversified Fix Int"
        },
        "AU60FSF07234": {
           "Description": "CFS FC Inv-CFS Equity Income"
        },
        "AU60FSF00890": {
           "Description": "CFS FC Inv-CFS Future Leaders"
        },
        "AU60FSF08778": {
           "Description": "CFS FC Inv-CFS Geared Glb Property Sec"
        },
        "AU60FSF02649": {
           "Description": "CFS FC Inv-CFS Geared Share"
        },
        "AU60FSF00916": {
           "Description": "CFS FC Inv-CFS Global Credit Income"
        },
        "AU60FSF09214": {
           "Description": "CFS FC Inv-CFS Global Ltd Infra Sec"
        },
        "AU60FSF06665": {
           "Description": "CFS FC Inv-CFS Global Property Sec"
        },
        "AU60FSF02631": {
           "Description": "CFS FC Inv-CFS High Growth"
        },
        "AU60FSF02326": {
           "Description": "CFS FC Inv-CFS Imputation"
        },
        "AU60FSF02334": {
           "Description": "CFS FC Inv-CFS Index Aus Share"
        },
        "AU60FSF02433": {
           "Description": "CFS FC Inv-CFS Index Global Share"
        },
        "AU60FSF08109": {
           "Description": "CFS FC Inv-CFS Index Global Shr-Hgd"
        },
        "AU60FSF06624": {
           "Description": "CFS FC Inv-CFS Index Property Sec"
        },
        "AU60FSF02516": {
           "Description": "CFS FC Inv-CFS Property Securities"
        },
        "AU60FSF07192": {
           "Description": "CFS FC Inv-CFS Target Return Income"
        },
        "AU60FSF02425": {
           "Description": "CFS FC Inv-CFS Worldwide Leaders"
        },
        "AU60FSF09222": {
           "Description": "CFS FC Inv-Epoch GESY"
        },
        "AU60FSF08117": {
           "Description": "CFS FC Inv-FC Multi-Index Gro"
        },
        "AU60FSF08083": {
           "Description": "CFS FC Inv-Fidelity Aus Equities"
        },
        "AU60FSF08729": {
           "Description": "CFS FC Inv-FirstChoice Asian Share"
        },
        "AU60FSF02201": {
           "Description": "CFS FC Inv-FirstChoice Aus Share"
        },
        "AU60FSF04108": {
           "Description": "CFS FC Inv-FirstChoice Aus Small Co"
        },
        "AU60FSF10253": {
           "Description": "CFS FC Inv-FirstChoice Balanced"
        },
        "AU60FSF02235": {
           "Description": "CFS FC Inv-FirstChoice Conservative"
        },
        "AU60FSF02276": {
           "Description": "CFS FC Inv-FirstChoice Defensive"
        },
        "AU60FSF09859": {
           "Description": "CFS FC Inv-FirstChoice Emerging Mkts"
        },
        "AU60FSF02193": {
           "Description": "CFS FC Inv-FirstChoice Fixed Int"
        },
        "AU60FSF08737": {
           "Description": "CFS FC Inv-FirstChoice Geared Aus Shr"
        },
        "AU60FSF08745": {
           "Description": "CFS FC Inv-FirstChoice Glb Infrastr"
        },
        "AU60FSF07275": {
           "Description": "CFS FC Inv-FirstChoice Glb Prop Sec"
        },
        "AU60FSF08091": {
           "Description": "CFS FC Inv-FirstChoice Glb Shr-Hgd"
        },
        "AU60FSF00932": {
           "Description": "CFS FC Inv-FirstChoice Glb Small Co"
        },
        "AU60FSF02219": {
           "Description": "CFS FC Inv-FirstChoice Global Share"
        },
        "AU60FSF02656": {
           "Description": "CFS FC Inv-FirstChoice Grd Glb Shr"
        },
        "AU60FSF09248": {
           "Description": "CFS FC Inv-FirstChoice Grd Growth Plus"
        },
        "AU60FSF02250": {
           "Description": "CFS FC Inv-FirstChoice Growth"
        },
        "AU60FSF02268": {
           "Description": "CFS FC Inv-FirstChoice High Growth"
        },
        "AU60FSF00940": {
           "Description": "CFS FC Inv-FirstChoice Lower Vol Aus"
        },
        "AU60FSF02607": {
           "Description": "CFS FC Inv-FirstChoice M-Index Bal"
        },
        "AU60FSF02557": {
           "Description": "CFS FC Inv-FirstChoice M-Index Cons"
        },
        "AU60FSF02524": {
           "Description": "CFS FC Inv-FirstChoice M-Index Div"
        },
        "AU60FSF02623": {
           "Description": "CFS FC Inv-FirstChoice M-Index H Growth"
        },
        "AU60FSF02243": {
           "Description": "CFS FC Inv-FirstChoice Moderate"
        },
        "AU60FSF02227": {
           "Description": "CFS FC Inv-FirstChoice Property Sec"
        },
        "AU60FSF10097": {
           "Description": "CFS FC Inv-FirstRate Saver"
        },
        "AU60FSF10261": {
           "Description": "CFS FC Inv-FirstRate Term Dep (3Mth)"
        },
        "AU60FSF10287": {
           "Description": "CFS FC Inv-FirstRate Term Dep (6Mth)"
        },
        "AU60FSF10568": {
           "Description": "CFS FC Inv-FirstRate Term Dep (9Mth)"
        },
        "AU60FSF10576": {
           "Description": "CFS FC Inv-FirstRate Term Dep(12Mth)"
        },
        "AU60FSF07259": {
           "Description": "CFS FC Inv-Generation Global Share"
        },
        "AU60FSF00924": {
           "Description": "CFS FC Inv-Investors Mutual Aus Shr"
        },
        "AU60FSF06640": {
           "Description": "CFS FC Inv-Ironbark Karara Aus Shr"
        },
        "AU60FSF02490": {
           "Description": "CFS FC Inv-Ironbark Property Sec"
        },
        "AU60FSF02441": {
           "Description": "CFS FC Inv-Janus Henderson Glb Nat Res"
        },
        "AU60FSF04181": {
           "Description": "CFS FC Inv-Lazard Select Aus Equity"
        },
        "AU60FSF07283": {
           "Description": "CFS FC Inv-Legg Mason M Curr Real Inc"
        },
        "AU60FSF10246": {
           "Description": "CFS FC Inv-Macquarie Income Opps"
        },
        "AU60FSF12044": {
           "Description": "CFS FC Inv-Magellan Global"
        },
        "AU60FSF02391": {
           "Description": "CFS FC Inv-Maple-Brown Abb Aus Shr"
        },
        "AU60FSF07226": {
           "Description": "CFS FC Inv-Merlon Aus Share Income"
        },
        "AU60FSF02474": {
           "Description": "CFS FC Inv-MFS Global Equity"
        },
        "AU60FSF04082": {
           "Description": "CFS FC Inv-Nikko AM Aus Share Conc"
        },
        "AU60FSF02581": {
           "Description": "CFS FC Inv-Pendal Active Balanced"
        },
        "AU60FSF02417": {
           "Description": "CFS FC Inv-Pendal Australian Share"
        },
        "AU60FSF02458": {
           "Description": "CFS FC Inv-Pendal Core Global Share"
        },
        "AU60FSF07218": {
           "Description": "CFS FC Inv-Pendal Monthly Inc Plus"
        },
        "AU60FSF02508": {
           "Description": "CFS FC Inv-Pendal Property Investment"
        },
        "AU60FSF00957": {
           "Description": "CFS FC Inv-Perennial Value Aus Shr"
        },
        "AU60FSF02599": {
           "Description": "CFS FC Inv-Perpetual Balanced Grwth"
        },
        "AU60FSF02565": {
           "Description": "CFS FC Inv-Perpetual Cons Growth"
        },
        "AU60FSF02532": {
           "Description": "CFS FC Inv-Perpetual Divers Growth"
        },
        "AU60FSF12481": {
           "Description": "CFS FC Inv-Perpetual Diversified Income"
        },
        "AU60FSF02466": {
           "Description": "CFS FC Inv-Perpetual Global Share"
        },
        "AU60FSF02359": {
           "Description": "CFS FC Inv-Perpetual Industrial Shr"
        },
        "AU60FSF10824": {
           "Description": "CFS FC Inv-Platinum Asia"
        },
        "AU60FSF04090": {
           "Description": "CFS FC Inv-Platinum International"
        },
        "AU60FSF06632": {
           "Description": "CFS FC Inv-PM Capital Enhanced Yld"
        },
        "AU60FSF08133": {
           "Description": "CFS FC Inv-PM Capital Glb Companies"
        },
        "AU60FSF09800": {
           "Description": "CFS FC Inv-Realindex Aus Shr"
        },
        "AU60FSF09818": {
           "Description": "CFS FC Inv-Realindex Aus Sml Co"
        },
        "AU60FSF09826": {
           "Description": "CFS FC Inv-Realindex Global Shr"
        },
        "AU60FSF09834": {
           "Description": "CFS FC Inv-Realindex Global Shr-Hgd"
        },
        "AU60FSF00965": {
           "Description": "CFS FC Inv-Schroder Abs Return Inc"
        },
        "AU60FSF02409": {
           "Description": "CFS FC Inv-Schroder Aus Equity"
        },
        "AU60FSF08992": {
           "Description": "CFS FC Inv-SG Hiscock Property Sec"
        },
        "AU60FSF00866": {
           "Description": "CFS FC Inv-Solaris Core Aus Equity"
        },
        "AU60FSF02367": {
           "Description": "CFS FC Inv-State Street Aus Equity"
        },
        "AU60FSF10832": {
           "Description": "CFS FC Inv-Stewart Glb Emg Mkt Ldrs"
        },
        "AU60FSF02482": {
           "Description": "CFS FC Inv-T. Rowe Price Glb Eqty"
        },
        "AU60FSF10584": {
           "Description": "CFS FC Inv-UBS Diversified Fixed Inc"
        },
        "AU60FSF14164": {
           "Description": "CFS FC Multi-Index Balanced Class A"
        },
        "AU60FSF14149": {
           "Description": "CFS FC Multi-Index Conservative Class A"
        },
        "AU60FSF14156": {
           "Description": "CFS FC Multi-Index Diversified Class A"
        },
        "AU60FSF16169": {
           "Description": "CFS FC Multi-Index High Growth Class A"
        },
        "AU60FSF17605": {
           "Description": "CFS FC Multi-Index Moderate-Class A"
        },
        "AU60FSF04785": {
           "Description": "CFS FC W Inv-Aberdeen Std W Aus FixedInc"
        },
        "AU60FSF12028": {
           "Description": "CFS FC W Inv-AMP Capital W Glb Prop Sec"
        },
        "AU60FSF04603": {
           "Description": "CFS FC W Inv-Ausbil W Aus Active Equity"
        },
        "AU60FSF07168": {
           "Description": "CFS FC W Inv-Ausbil W Aus Emg Leaders"
        },
        "AU60FSF07150": {
           "Description": "CFS FC W Inv-Celeste W Aus Small Co"
        },
        "AU60FSF08927": {
           "Description": "CFS FC W Inv-CFS W Geared Glbl Prpty Sec"
        },
        "AU60FSF09057": {
           "Description": "CFS FC W Inv-CFS W Glbl Listed Infra Sec"
        },
        "AU60FSF08901": {
           "Description": "CFS FC W Inv-FC W Geared Aus Share"
        },
        "AU60FSF04561": {
           "Description": "CFS FC W Inv-FC W Lower Volatility Aus S"
        },
        "AU60FSF07903": {
           "Description": "CFS FC W Inv-Fidelity Aus Equities"
        },
        "AU60FSF10212": {
           "Description": "CFS FC W Inv-FirstRate W Term Dep (3Mth)"
        },
        "AU60FSF10527": {
           "Description": "CFS FC W Inv-FirstRate W Term Dep (6Mth)"
        },
        "AU60FSF10535": {
           "Description": "CFS FC W Inv-FirstRate W Term Dep (9Mth)"
        },
        "AU60FSF10543": {
           "Description": "CFS FC W Inv-FirstRate W Term Dep(12Mth)"
        },
        "AU60FSF04652": {
           "Description": "CFS FC W Inv-Investors Mutual W Aus Shr"
        },
        "AU60FSF05048": {
           "Description": "CFS FC W Inv-Ironbark W Property Sec"
        },
        "AU60FSF00791": {
           "Description": "CFS FC W Inv-Lazard W Select Aus Equity"
        },
        "AU60FSF08935": {
           "Description": "CFS FC W Inv-Legg Mason M Curr Real Inc"
        },
        "AU60FSF10196": {
           "Description": "CFS FC W Inv-Macquarie Income Opps"
        },
        "AU60FSF04611": {
           "Description": "CFS FC W Inv-Maple-Brown Abb W Aus Shr"
        },
        "AU60FSF07093": {
           "Description": "CFS FC W Inv-Merlon W Aus Share Income"
        },
        "AU60FSF04801": {
           "Description": "CFS FC W Inv-MFS W Global Equity"
        },
        "AU60FSF04678": {
           "Description": "CFS FC W Inv-Perennial Value W Aus Shr"
        },
        "AU60FSF04751": {
           "Description": "CFS FC W Inv-Perpetual Balanced Growth"
        },
        "AU60FSF04702": {
           "Description": "CFS FC W Inv-Perpetual Cons Gr"
        },
        "AU60FSF04736": {
           "Description": "CFS FC W Inv-Perpetual Diversified Gr"
        },
        "AU60FSF04587": {
           "Description": "CFS FC W Inv-Perpetual Industrial Share"
        },
        "AU60FSF12440": {
           "Description": "CFS FC W Inv-Perpetual W Divers Income"
        },
        "AU60FSF04793": {
           "Description": "CFS FC W Inv-Perpetual W Global Share"
        },
        "AU60FSF10790": {
           "Description": "CFS FC W Inv-Platinum Asia"
        },
        "AU60FSF05055": {
           "Description": "CFS FC W Inv-Platinum International"
        },
        "AU60FSF06772": {
           "Description": "CFS FC W Inv-PM Capital Enhanced Yield"
        },
        "AU60FSF07986": {
           "Description": "CFS FC W Inv-PM Capital W Glb Companies"
        },
        "AU60FSF04629": {
           "Description": "CFS FC W Inv-Schroder Australian Equity"
        },
        "AU60FSF04660": {
           "Description": "CFS FC W Inv-Solaris W Core Aus Equity"
        },
        "AU60FSF07960": {
           "Description": "CFS FC WS Inv - SG Hiscock W Prop Sec"
        },
        "AU60FSF04835": {
           "Description": "CFS FC-Altrinsic W Global Equity"
        },
        "AU60FSF04553": {
           "Description": "CFS FC-Antares W Elite Opport"
        },
        "AU60FSF06798": {
           "Description": "CFS FC-APN Wholesale AREIT"
        },
        "AU60FSF12010": {
           "Description": "CFS FC-Baillie Gifford W LT Glb Gwth"
        },
        "AU60FSF04579": {
           "Description": "CFS FC-BlackRock W Adv Aus Shr"
        },
        "AU60FSF09669": {
           "Description": "CFS FC-Epoch W GESY"
        },
        "AU60FSF06780": {
           "Description": "CFS FC-Ironbark Karara W Aus Share"
        },
        "AU60FSF00387": {
           "Description": "CFS FC-Janus Henderson W Glb Nat Res"
        },
        "AU60FSF11988": {
           "Description": "CFS FC-Magellan W Global Share"
        },
        "AU60FSF04645": {
           "Description": "CFS FC-Nikko AM W Aus Share Conc"
        },
        "AU60FSF04744": {
           "Description": "CFS FC-Pendal W Active Balanced"
        },
        "AU60FSF04637": {
           "Description": "CFS FC-Pendal W Australian Share"
        },
        "AU60FSF04827": {
           "Description": "CFS FC-Pendal W Core Global Share"
        },
        "AU60FSF07028": {
           "Description": "CFS FC-Pendal W Monthly Inc Plus"
        },
        "AU60FSF05030": {
           "Description": "CFS FC-Pendal W Property Investment"
        },
        "AU60FSF12432": {
           "Description": "CFS FC-Perpetual W Australian Share"
        },
        "AU60FSF05063": {
           "Description": "CFS FC-Schroder W Abs Return Inc"
        },
        "AU60FSF04595": {
           "Description": "CFS FC-State Street W Aus Equity"
        },
        "AU60FSF04819": {
           "Description": "CFS FC-T. Rowe Price W Glb Eqty"
        },
        "AU60FSF10550": {
           "Description": "CFS FC-UBS W Divers Fixed Income"
        },
        "AU60FSF00072": {
           "Description": "CFS Future Leaders"
        },
        "AU60FSF84431": {
           "Description": "CFS Glb Emerg Markets Focus Fund-Class A"
        },
        "AU60FSF99009": {
           "Description": "CFS High Quality US High Yld Fd-Class A"
        },
        "AU60FSF75801": {
           "Description": "CFS Index Conservative A"
        },
        "AU60FSF48774": {
           "Description": "CFS Index Diversified A"
        },
        "AU60FSF82427": {
           "Description": "CFS Index Growth A"
        },
        "AU60FSF00148": {
           "Description": "CFS MIF-Australian Share"
        },
        "AU60FSF00064": {
           "Description": "CFS MIF-Balanced"
        },
        "AU60FSF01989": {
           "Description": "CFS MIF-Balanced NEF"
        },
        "AU60FSF00320": {
           "Description": "CFS MIF-CFS Strategic Cash"
        },
        "AU60FSF00213": {
           "Description": "CFS MIF-Conservative"
        },
        "AU60FSF01971": {
           "Description": "CFS MIF-Conservative NEF"
        },
        "AU60FSF00221": {
           "Description": "CFS MIF-Diversified"
        },
        "AU60FSF01997": {
           "Description": "CFS MIF-Diversified NEF"
        },
        "AU60FSF01690": {
           "Description": "CFS MIF-FC Geared Global Share"
        },
        "AU60FSF00445": {
           "Description": "CFS MIF-Geared Share"
        },
        "AU60FSF02052": {
           "Description": "CFS MIF-Geared Share NEF"
        },
        "AU60FSF01450": {
           "Description": "CFS MIF-Global Health & Biotech"
        },
        "AU60FSF01443": {
           "Description": "CFS MIF-Global Tech & Comm"
        },
        "AU60FSF00775": {
           "Description": "CFS MIF-High Growth"
        },
        "AU60FSF00130": {
           "Description": "CFS MIF-Imputation"
        },
        "AU60FSF02029": {
           "Description": "CFS MIF-Imputation NEF"
        },
        "AU60FSF00411": {
           "Description": "CFS MIF-Janus Henderson Glb Nat Res"
        },
        "AU60FSF00122": {
           "Description": "CFS MIF-Property Securities"
        },
        "AU60FSF02110": {
           "Description": "CFS MIF-Property Securities NEF"
        },
        "AU60FSF00486": {
           "Description": "CFS MIF-Worldwide Leaders"
        },
        "AU60FSF14222": {
           "Description": "CFS Multi-Asset Real Return - Class A"
        },
        "AU60FSF79357": {
           "Description": "CFS US Select High Yield Fund-Class A"
        },
        "AU60FSF80843": {
           "Description": "CFS US Short Duration Hi Yld Fd-Class A"
        },
        "AU60FSF00759": {
           "Description": "CFS W Strategic Cash"
        },
        "AU60CMI01116": {
           "Description": "CFS Wholesale Aus Small Companies"
        },
        "AU60FSF00270": {
           "Description": "CFS Wholesale Australian Bond"
        },
        "AU60FSF00023": {
           "Description": "CFS Wholesale Australian Share"
        },
        "AU60FSF00403": {
           "Description": "CFS Wholesale Balanced"
        },
        "AU60FSF00163": {
           "Description": "CFS Wholesale Concentrated Aus Shr"
        },
        "AU60FSF00338": {
           "Description": "CFS Wholesale Conservative"
        },
        "AU60FSF04686": {
           "Description": "CFS Wholesale Developing Companies"
        },
        "AU60FSF00080": {
           "Description": "CFS Wholesale Diversified"
        },
        "AU60FSF00395": {
           "Description": "CFS Wholesale Diversified Fixed Interest"
        },
        "AU60FSF09610": {
           "Description": "CFS Wholesale Equity Income"
        },
        "AU60FSF04694": {
           "Description": "CFS Wholesale Future Leaders"
        },
        "AU60FSF00437": {
           "Description": "CFS Wholesale Geared Share"
        },
        "AU60FSF10774": {
           "Description": "CFS Wholesale Global Corporate Bond"
        },
        "AU60FSF00841": {
           "Description": "CFS Wholesale Global Credit Income"
        },
        "AU60FSF01468": {
           "Description": "CFS Wholesale Global Health & Biotech"
        },
        "AU60FSF04546": {
           "Description": "CFS Wholesale Global Property Sec"
        },
        "AU60FSF01435": {
           "Description": "CFS Wholesale Global Tech & Comm"
        },
        "AU60FSF04983": {
           "Description": "CFS Wholesale High Growth"
        },
        "AU60FSF00031": {
           "Description": "CFS Wholesale Imputation"
        },
        "AU60FSF06533": {
           "Description": "CFS Wholesale Index Australian Bond"
        },
        "AU60FSF06525": {
           "Description": "CFS Wholesale Index Australian Share"
        },
        "AU60FSF06541": {
           "Description": "CFS Wholesale Index Global Share"
        },
        "AU60FSF07077": {
           "Description": "CFS Wholesale Index Global Share-Hedged"
        },
        "AU60FSF06558": {
           "Description": "CFS Wholesale Index Property Securities"
        },
        "AU60CMI01025": {
           "Description": "CFS Wholesale Indexed Australian Bond"
        },
        "AU60CMI01033": {
           "Description": "CFS Wholesale Indexed Australian Share"
        },
        "AU60CFM04066": {
           "Description": "CFS Wholesale Indexed Global Bond"
        },
        "AU60CFM04058": {
           "Description": "CFS Wholesale Indexed Global Share"
        },
        "AU60CMI01058": {
           "Description": "CFS Wholesale Indexed Property Sec"
        },
        "AU60FSF00767": {
           "Description": "CFS Wholesale Industrial Share"
        },
        "AU60FSF18090": {
           "Description": "CFS Wholesale Institutional Cash"
        },
        "AU60COM00249": {
           "Description": "CFS Wholesale Premium Cash"
        },
        "AU60COM00298": {
           "Description": "CFS Wholesale Premium Cash Enhanced"
        },
        "AU60FSF00049": {
           "Description": "CFS Wholesale Property Securities"
        },
        "AU60FSF06947": {
           "Description": "CFS Wholesale Target Return Income"
        },
        "AU60FSF12416": {
           "Description": "CFS WS Glb Listed Infrastructure-Class A"
        },
        "AU60MLT03615": {
           "Description": "Challenger GIF 1.70 cents pa 30 Apr 2021"
        },
        "AU60MLT58973": {
           "Description": "Challenger GIF 2.03 cents pa 30 Sep 2023"
        },
        "AU60MLT29404": {
           "Description": "Challenger GIF 2.08 cents pa 28 Feb 2021"
        },
        "AU60MLT55284": {
           "Description": "Challenger GIF 2.35 cents pa 31 Aug 2024"
        },
        "AU60MLT93350": {
           "Description": "Challenger GIF 3.40 cents pa 31 Mar 2021"
        },
        "AU60MLT00108": {
           "Description": "Challenger GIF 4.00 cents pa 30 Sep 2022"
        },
        "AU60HOW00965": {
           "Description": "Challenger Guaranteed Pen - 30 June 2021"
        },
        "AU60MLT51267": {
           "Description": "Challenger Guaranteed Pen - 31 Dec 2023"
        },
        "AU60HOW55001": {
           "Description": "Challenger Investment Ptnrs Crdt Inc Fd"
        },
        "AU60HOW82096": {
           "Description": "Challenger Invmt Ptnrs Crdt Inc P"
        },
        "AU60MAQ08530": {
           "Description": "Charter Hall Direct Automotive No.2"
        },
        "AU60MAQ08514": {
           "Description": "Charter Hall Direct Automotive Trust Ord"
        },
        "AU60MAQ08332": {
           "Description": "Charter Hall Direct BW Trust"
        },
        "AU60MAQ08340": {
           "Description": "Charter Hall Direct CDC Trust Ordinary"
        },
        "AU60MAQ57032": {
           "Description": "Charter Hall Direct Dvrs Cnsmr Staples"
        },
        "AU60MAQ08159": {
           "Description": "Charter Hall Direct Industrial Fund No.2"
        },
        "AU60MAQ08167": {
           "Description": "Charter Hall Direct Industrial No.2 - W"
        },
        "AU60MAQ08456": {
           "Description": "Charter Hall Direct Industrial No.3 Ord"
        },
        "AU60MAQ08449": {
           "Description": "Charter Hall Direct Industrial No.3 W"
        },
        "AU60MAQ08548": {
           "Description": "Charter Hall Direct Industrial No.4"
        },
        "AU60MAQ04331": {
           "Description": "Charter Hall Direct Office"
        },
        "AU60MAQ06500": {
           "Description": "Charter Hall Direct Office Ordinary"
        },
        "AU60MAQ04489": {
           "Description": "Charter Hall Direct Office Wholesale"
        },
        "AU60MAQ08423": {
           "Description": "Charter Hall Direct Office Wholesale A"
        },
        "AU60MAQ58808": {
           "Description": "Charter Hall Direct PFA Fund"
        },
        "AU60COL00019": {
           "Description": "Charter Hall Maxim Property Securities"
        },
        "AU60OPS77550": {
           "Description": "Chester High Conviction"
        },
        "AU60SLT00659": {
           "Description": "ChinaAMC China Opportunities Fund"
        },
        "AU60CIP00046": {
           "Description": "CI Asian Equities Fund"
        },
        "AU60CIP00053": {
           "Description": "CI Australian Equities Fund"
        },
        "AU60CIP00020": {
           "Description": "CI Brunswick"
        },
        "AU60NRM00074": {
           "Description": "ClearView Mgd Inv Aus Shares Growth"
        },
        "AU60NRM00066": {
           "Description": "ClearView Mgd Inv Diversified Balanced"
        },
        "AU60NRM00231": {
           "Description": "ClearView Mgd Inv Diversified Growth"
        },
        "AU60NRM00058": {
           "Description": "ClearView Mgd Inv Diversified Stable"
        },
        "AU60ETL66858": {
           "Description": "Clearwater Dynamic Portfolio"
        },
        "AU60CLA00026": {
           "Description": "Clime Australian Income"
        },
        "AU60SLT12399": {
           "Description": "Clime Australian Income Retail"
        },
        "AU60CRE00017": {
           "Description": "Clime Australian Value"
        },
        "AU60CRE00058": {
           "Description": "Clime Australian Value WS"
        },
        "AU60CLA07245": {
           "Description": "Clime Fixed Interest Wholesale"
        },
        "AU60CLA00018": {
           "Description": "Clime International Fund"
        },
        "AU60SLT00550": {
           "Description": "Clime International Retail"
        },
        "AU60CLA15578": {
           "Description": "Clime Smaller Companies"
        },
        "AU60SLT56677": {
           "Description": "Clime Smaller Companies Retail"
        },
        "AU60BQC39799": {
           "Description": "Cloudbreak Bitcoin Investment Trust A"
        },
        "AU60BQC89240": {
           "Description": "Cloudbreak Digital Opportunities A"
        },
        "AU60ETL30656": {
           "Description": "Colchester Emerging Markets Bond Fund I"
        },
        "AU60ETL04099": {
           "Description": "Colchester Global Government Bond A"
        },
        "AU60ETL55257": {
           "Description": "Colchester Global Government Bond I"
        },
        "AU60ETL04677": {
           "Description": "Colchester Global Government Bond N"
        },
        "AU60ETL74266": {
           "Description": "Cooper Investors Asian Equities Retail"
        },
        "AU60CIP49431": {
           "Description": "Cooper Investors Family and Founder"
        },
        "AU60CIP00012": {
           "Description": "Cooper Investors Global Eqs Fd (Hdg)"
        },
        "AU60CIP00038": {
           "Description": "Cooper Investors Global Eqs Fd (Unhdg)"
        },
        "AU60ETL01996": {
           "Description": "Copper Rock Capital Global Small Cap"
        },
        "AU60COR00016": {
           "Description": "Cor Capital Fund"
        },
        "AU60BSP00351": {
           "Description": "Cove Property Group 2 Rector StreetTrust"
        },
        "AU60BSP47139": {
           "Description": "Cove Property Group 441 Ninth Avenue"
        },
        "AU60CSA00427": {
           "Description": "Credit Suisse Global Private Equity Fund"
        },
        "AU60CFL00025": {
           "Description": "Crescent Australian Equity"
        },
        "AU60CFL00066": {
           "Description": "Crescent Diversified Property"
        },
        "AU60CFL00082": {
           "Description": "Crescent International Equity"
        },
        "AU60CFL00033": {
           "Description": "Crescent Islamic Cash Management"
        },
        "AU60CRM00184": {
           "Description": "Cromwell Direct Property"
        },
        "AU60CRM00150": {
           "Description": "Cromwell Ipswich City Heart Trust"
        },
        "AU60CRM00283": {
           "Description": "Cromwell Phoenix Opportunities Fund"
        },
        "AU60CRM00085": {
           "Description": "Cromwell Phoenix Property Securities"
        },
        "AU60CRM00234": {
           "Description": "Cromwell Property Trust 12"
        },
        "AU60CRM00093": {
           "Description": "Cromwell Riverpark Trust"
        },
        "AU60AIM03348": {
           "Description": "Crown Diversified Trend Access"
        },
        "AU60CVS06818": {
           "Description": "CVS Lane First Mortgage"
        },
        "AU60WPC19633": {
           "Description": "Daintree Core Income Trust"
        },
        "AU60WPC06960": {
           "Description": "Daintree Core Income Trust NZD"
        },
        "AU60WPC15839": {
           "Description": "Daintree High Income Trust AUD Unit Cl"
        },
        "AU60WPC05293": {
           "Description": "Daintree High Income Trust NZD Unit Cl"
        },
        "AU60ETL04693": {
           "Description": "Dalton Street Capital Absolute Return"
        },
        "AU60FHT33093": {
           "Description": "Datt Capital Absolute Return A"
        },
        "AU60QIN00017": {
           "Description": "DDH Aggressive Growth"
        },
        "AU60QIN00025": {
           "Description": "DDH Australian Shares"
        },
        "AU60QIN00033": {
           "Description": "DDH Balanced Growth"
        },
        "AU60DDH00091": {
           "Description": "DDH Cash IDPS"
        },
        "AU60QIN00041": {
           "Description": "DDH Conservative Growth"
        },
        "AU60DDH00067": {
           "Description": "DDH Fixed Interest"
        },
        "AU60DDH00018": {
           "Description": "DDH Preferred Income"
        },
        "AU60DFA00455": {
           "Description": "Dimensional 2-Yr Diversified FI NZD"
        },
        "AU60DFA01032": {
           "Description": "Dimensional Aust Large Company Trust"
        },
        "AU60DFA01040": {
           "Description": "Dimensional Aust Small Company Trust"
        },
        "AU60DFA00034": {
           "Description": "Dimensional Australian Core Equity Trust"
        },
        "AU60DFA00364": {
           "Description": "Dimensional Australian Core Imptn Trust"
        },
        "AU60DFA20685": {
           "Description": "Dimensional Australian Sustainability"
        },
        "AU60DFA01016": {
           "Description": "Dimensional Australian Value Trust"
        },
        "AU60DFA01073": {
           "Description": "Dimensional Emerging Markets Trust"
        },
        "AU60DFA01081": {
           "Description": "Dimensional Five-Year Diversified F/I"
        },
        "AU60DFA00018": {
           "Description": "Dimensional Five-Year Diversified FI NZD"
        },
        "AU60DFA00422": {
           "Description": "Dimensional Glb Sstnblty Trust Hdg"
        },
        "AU60DFA00414": {
           "Description": "Dimensional Glb Sstnblty Trust Unhdg"
        },
        "AU60DFA06429": {
           "Description": "Dimensional Glbl Bond Sustainability AUD"
        },
        "AU60DFA68726": {
           "Description": "Dimensional Glbl Bond Sustainability NZD"
        },
        "AU60DFA00430": {
           "Description": "Dimensional Glbl Sustainability NZD Hdg"
        },
        "AU60DFA00281": {
           "Description": "Dimensional Global Bond Trust"
        },
        "AU60DFA00380": {
           "Description": "Dimensional Global Bond Trust NZD"
        },
        "AU60DFA00091": {
           "Description": "Dimensional Global Core Equity AUD Hgd"
        },
        "AU60DFA00398": {
           "Description": "Dimensional Global Core Equity NZD Hgd"
        },
        "AU60DFA00042": {
           "Description": "Dimensional Global Core Equity Trust"
        },
        "AU60DFA01057": {
           "Description": "Dimensional Global Large Company Trust"
        },
        "AU60DFA00448": {
           "Description": "Dimensional Global Real Estate NZD Hdg"
        },
        "AU60DFA00059": {
           "Description": "Dimensional Global Real Estate Trust"
        },
        "AU60DFA01065": {
           "Description": "Dimensional Global Small Company Trust"
        },
        "AU60DFA01024": {
           "Description": "Dimensional Global Value Trust"
        },
        "AU60DFA01008": {
           "Description": "Dimensional Short Term Fixed Interest"
        },
        "AU60DFA75184": {
           "Description": "Dimensional Sustnby Wld Allc 70/30 Tr"
        },
        "AU60DFA00026": {
           "Description": "Dimensional Two-Year Diversified F/I"
        },
        "AU60DFA83139": {
           "Description": "Dimensional World Allocation 30/70"
        },
        "AU60DFA00331": {
           "Description": "Dimensional World Allocation 50/50 Trust"
        },
        "AU60DFA00299": {
           "Description": "Dimensional World Allocation 70/30 Trust"
        },
        "AU60DFA00356": {
           "Description": "Dimensional World Equity Trust"
        },
        "AU60OMF00226": {
           "Description": "DirectMoney Personal Loan"
        },
        "AU60SPC31123": {
           "Description": "Diversified Commercial Income"
        },
        "AU60SLT00394": {
           "Description": "DMG Diversified Portfolio"
        },
        "AU60AMP20768": {
           "Description": "DNR Capital Advantage AUS Eqs Hi Convct"
        },
        "AU60PIM00284": {
           "Description": "DNR Capital Aus Eq High Conviction"
        },
        "AU60PIM43573": {
           "Description": "DNR Capital Australian Emerging Coms"
        },
        "AU60PIM83025": {
           "Description": "DNR Capital Australian Equities Income"
        },
        "AU60DSC00017": {
           "Description": "DS Capital Growth Fund"
        },
        "AU60OPS29916": {
           "Description": "ECP Growth Companies"
        },
        "AU60FHT18102": {
           "Description": "EGP Concentrated Value Fund"
        },
        "AU60HOW29675": {
           "Description": "Eiger Australian Small Companies"
        },
        "AU0000044711": {
           "Description": "eInvest Cash Booster ETF"
        },
        "AU0000044786": {
           "Description": "eInvest Core Income ETF"
        },
        "AU0000044984": {
           "Description": "eInvest Future Impact Small Caps ETF"
        },
        "AU0000003022": {
           "Description": "eInvest Income Generator ETF"
        },
        "AU0000044802": {
           "Description": "eInvest Income Maximiser ETF"
        },
        "AU60PIM53465": {
           "Description": "Eley Griffiths Group Emerging Companies"
        },
        "AU60EGG00011": {
           "Description": "Eley Griffiths Group Small Companies"
        },
        "AU60ECL14110": {
           "Description": "Ellerston Asia Growth"
        },
        "AU60ECL00135": {
           "Description": "Ellerston Australian Market Neutral"
        },
        "AU60ECL09847": {
           "Description": "Ellerston Australian MicroCap Fund"
        },
        "AU60ECL00051": {
           "Description": "Ellerston Australian Share Fund"
        },
        "AU60ECL00028": {
           "Description": "Ellerston Global Equity Managers"
        },
        "AU60ECL00077": {
           "Description": "Ellerston Global Equity Managers GEMS B"
        },
        "AU60ECL00069": {
           "Description": "Ellerston Global Equity Managers GEMS C"
        },
        "AU60ECL83883": {
           "Description": "Ellerston Global Mid Small Cap Unhedged"
        },
        "AU60ECL03394": {
           "Description": "Ellerston India"
        },
        "AU60ECL27070": {
           "Description": "Ellerston JAADE AUS Priv Assts Retail"
        },
        "AU60ECL67753": {
           "Description": "Ellerston JAADE AUS Priv Assts WS"
        },
        "AU60ECL72597": {
           "Description": "Ellerston Low Volatility Income Strategy"
        },
        "AU60ECL00127": {
           "Description": "Ellerston Overlay Australian Share"
        },
        "AU60ECL04053": {
           "Description": "Ellerston Pre-IPO"
        },
        "AU60ECL00150": {
           "Description": "Ellerston Small Companies"
        },
        "AU60ETL75412": {
           "Description": "Elston Australian Large Companies A"
        },
        "AU60EIM00015": {
           "Description": "Elstree Enhanced Income"
        },
        "AU60GSF00013": {
           "Description": "Epoch Gbl Eq Shldr Yld Fd Hgd"
        },
        "AU60GSF00021": {
           "Description": "Epoch Gbl Eq Shldr Yld Fd Uhgd"
        },
        "AU60ETL01079": {
           "Description": "EQT Core International Equity"
        },
        "AU60ETL04214": {
           "Description": "EQT Diversified Fixed Income Instl"
        },
        "AU60ETL04206": {
           "Description": "EQT DiversifiedFixed Income"
        },
        "AU60ETL00683": {
           "Description": "EQT Flagship Common No 2"
        },
        "AU60ETL01038": {
           "Description": "EQT Growth"
        },
        "AU60ETL01004": {
           "Description": "EQT Mortgage Income"
        },
        "AU60ETL00790": {
           "Description": "EQT Wholesale Flagship"
        },
        "AU60ETL01228": {
           "Description": "EQT Wholesale Mortgage Income"
        },
        "AU60EQB76649": {
           "Description": "Equitable Investors Dragonfly"
        },
        "AU0000022386": {
           "Description": "ETFS Battery Tech and Lithium ETF"
        },
        "AU00000ZUSD9": {
           "Description": "ETFS Enhanced USD Cash ETF"
        },
        "AU00000ESTX4": {
           "Description": "ETFS EURO STOXX 50® ETF"
        },
        "AU0000078669": {
           "Description": "ETFS FANG+ ETF"
        },
        "AU00000CORE1": {
           "Description": "ETFS Global Core Infrastructure ETF"
        },
        "AU00000TECH1": {
           "Description": "ETFS Morningstar Global Technology ETF"
        },
        "AU00000GOLD7": {
           "Description": "ETFS Physical Gold ETC"
        },
        "AU000ETPMPD3": {
           "Description": "ETFS Physical Palladium ETC"
        },
        "AU000ETPMPT9": {
           "Description": "ETFS Physical Platinum ETC"
        },
        "AU000ETPMPM4": {
           "Description": "ETFS Physical PM Basket ETC"
        },
        "AU000ETPMAG8": {
           "Description": "ETFS Physical Silver ETC"
        },
        "AU0000043838": {
           "Description": "ETFS Reliance India Nifty 50 ETF"
        },
        "AU00000ROBO2": {
           "Description": "ETFS ROBO Glbl Robotics and Atmtn ETF"
        },
        "AU00000ZYUS5": {
           "Description": "ETFS S&P 500 High Yield Low Volatil ETF"
        },
        "AU0000028110": {
           "Description": "ETFS S&P Biotech ETF"
        },
        "AU00000ZYAU3": {
           "Description": "ETFS S&P/ASX 300 High Yield Plus ETF"
        },
        "AU60EPF99511": {
           "Description": "Ethical Partners Australian Share"
        },
        "AU60ETL03901": {
           "Description": "Evans and Partners International Fund"
        },
        "AU60ETL03919": {
           "Description": "Evans and Partners Intl Hedged"
        },
        "AU60PIM17445": {
           "Description": "Even Keel Strategy Domestic Risk Mgmt"
        },
        "AU60PIM57375": {
           "Description": "Even Keel Strategy Global Risk Mgmt"
        },
        "AU60HLR00029": {
           "Description": "Experts' Choice Australian Shares"
        },
        "AU60HLR00037": {
           "Description": "Experts' Choice Balanced"
        },
        "AU60HLR00045": {
           "Description": "Experts' Choice Conservative"
        },
        "AU60HLR00011": {
           "Description": "Experts' Choice Diversified Interest Inc"
        },
        "AU60HLR00052": {
           "Description": "Experts' Choice Growth"
        },
        "AU60HLR00060": {
           "Description": "Experts' Choice International Shares"
        },
        "AU60HLR00227": {
           "Description": "Experts' Choice Property and Infras"
        },
        "AU60HLR00078": {
           "Description": "Experts' Choice Short Term Money Market"
        },
        "AU60HLR00235": {
           "Description": "Experts' Choice Small Companies"
        },
        "AU60PIM11422": {
           "Description": "Fairlight Global Small & Mid Cap Fndtn"
        },
        "AU60PIM09418": {
           "Description": "Fairlight Global Small & Mid Cap Hedged"
        },
        "AU60PIM78025": {
           "Description": "Fairlight Global Small & Mid Cap Ord"
        },
        "AU60ANT00026": {
           "Description": "Fairview Equity Partners Emerging Co"
        },
        "AU60ETL68490": {
           "Description": "Federation Alternative Investments Ret"
        },
        "AU60AMP67025": {
           "Description": "Fidelity Advantage Australian Eqs Fd"
        },
        "AU60FID00102": {
           "Description": "Fidelity Asia"
        },
        "AU60FID00086": {
           "Description": "Fidelity Australian Equities"
        },
        "AU60FID00219": {
           "Description": "Fidelity Australian Opportunities"
        },
        "AU60WFS58398": {
           "Description": "Fidelity Australian Opportunities MPS"
        },
        "AU60FID00110": {
           "Description": "Fidelity China"
        },
        "AU60FID48523": {
           "Description": "Fidelity FIRST Global Fund"
        },
        "AU60FID00268": {
           "Description": "Fidelity Future Leaders"
        },
        "AU60FID00235": {
           "Description": "Fidelity Global Demographics"
        },
        "AU60FID00318": {
           "Description": "Fidelity Global Emerging Markets"
        },
        "AU0000027708": {
           "Description": "Fidelity Global Emerging Markets ETF"
        },
        "AU60FID00078": {
           "Description": "Fidelity Global Equities"
        },
        "AU60FID98767": {
           "Description": "Fidelity Global Low Volatility Equity Fd"
        },
        "AU60FID00144": {
           "Description": "Fidelity Hedged Global Equities"
        },
        "AU60FID00151": {
           "Description": "Fidelity India"
        },
        "AU60FID02397": {
           "Description": "Fidelity Sustainable Water & Waste"
        },
        "AU60BTA04817": {
           "Description": "Fidelity WS Plus Australian Equities"
        },
        "AU60BTA05517": {
           "Description": "Fidelity WS Plus Global Equities"
        },
        "AU60FPS00063": {
           "Description": "Fiducian Australian Shares"
        },
        "AU60FPS00089": {
           "Description": "Fiducian Australian Smaller Co Shares"
        },
        "AU60FPS00030": {
           "Description": "Fiducian Balanced"
        },
        "AU60FPS00014": {
           "Description": "Fiducian Capital Safe"
        },
        "AU60FPS00022": {
           "Description": "Fiducian Capital Stable"
        },
        "AU60AAA00031": {
           "Description": "Fiducian Diversified Social Aspirations"
        },
        "AU60FPS00113": {
           "Description": "Fiducian Geared Australian Shares"
        },
        "AU60FPS00097": {
           "Description": "Fiducian Global Smaller Co & Emg Markets"
        },
        "AU60FPS00048": {
           "Description": "Fiducian Growth Fund"
        },
        "AU60FPS00139": {
           "Description": "Fiducian India"
        },
        "AU60FPS00055": {
           "Description": "Fiducian International Shares"
        },
        "AU60FPS00071": {
           "Description": "Fiducian Property Securities"
        },
        "AU60FPS00105": {
           "Description": "Fiducian Technology"
        },
        "AU60FPS00147": {
           "Description": "Fiducian Ultra Growth"
        },
        "AU60WHT51348": {
           "Description": "Firetrail Absolute Return"
        },
        "AU60WHT38105": {
           "Description": "Firetrail Australian High Conviction"
        },
        "AU60FCL06261": {
           "Description": "First Guardian Master Boutique Devpmt"
        },
        "AU60FSF20450": {
           "Description": "FirstChoice Wholesale Cash"
        },
        "AU60FSF04991": {
           "Description": "FirstChoice Wholesale High Growth"
        },
        "AU60FSF07911": {
           "Description": "FirstChoice Wholesale Multi-Index Growth"
        },
        "AU60FSF08893": {
           "Description": "FirstChoice WS Asian Share"
        },
        "AU60FSF05022": {
           "Description": "FirstChoice WS Aus Small Companies"
        },
        "AU60FSF04850": {
           "Description": "FirstChoice WS Australian Share"
        },
        "AU60FSF10204": {
           "Description": "FirstChoice WS Balanced"
        },
        "AU60FSF04868": {
           "Description": "FirstChoice WS Conservative"
        },
        "AU60FSF04876": {
           "Description": "FirstChoice WS Defensive"
        },
        "AU60FSF09685": {
           "Description": "FirstChoice WS Emerging Markets"
        },
        "AU60FSF04884": {
           "Description": "FirstChoice WS Fixed Interest"
        },
        "AU60FSF01708": {
           "Description": "Firstchoice WS Geared Global Share"
        },
        "AU60FSF09693": {
           "Description": "FirstChoice WS Geared Growth Plus"
        },
        "AU60FSF07952": {
           "Description": "FirstChoice WS Global Infrastructure Sec"
        },
        "AU60FSF07135": {
           "Description": "FirstChoice WS Global Property Secs"
        },
        "AU60FSF04892": {
           "Description": "FirstChoice WS Global Share"
        },
        "AU60FSF07069": {
           "Description": "FirstChoice WS Global Share - Hedged"
        },
        "AU60FSF04843": {
           "Description": "FirstChoice WS Global Small Companies"
        },
        "AU60FSF04900": {
           "Description": "FirstChoice WS Growth"
        },
        "AU60FSF05006": {
           "Description": "FirstChoice WS Moderate"
        },
        "AU60FSF04769": {
           "Description": "FirstChoice WS Multi-Index Balanced"
        },
        "AU60FSF04710": {
           "Description": "FirstChoice WS Multi-Index Conservative"
        },
        "AU60FSF04728": {
           "Description": "FirstChoice WS Multi-Index Diversified"
        },
        "AU60FSF04777": {
           "Description": "FirstChoice WS Multi-Index High Growth"
        },
        "AU60FSF05014": {
           "Description": "FirstChoice WS Property Securities"
        },
        "AU60PER05612": {
           "Description": "FirstMac High Livez"
        },
        "AU60PER06974": {
           "Description": "Firstmac High Livez Wholesale"
        },
        "AU60FSF10089": {
           "Description": "FirstRate Wholesale Saver"
        },
        "AU60BEG12751": {
           "Description": "Fixed Income Strategy 2 (FIS2)"
        },
        "AU60ETL04446": {
           "Description": "Flinders Emerging Companies A"
        },
        "AU60ETL04495": {
           "Description": "Flinders Emerging Companies B"
        },
        "AU60FHT00324": {
           "Description": "Forager International Shares"
        },
        "AU60WPC00070": {
           "Description": "Foundation Assertive"
        },
        "AU60WPC00088": {
           "Description": "Foundation Balanced"
        },
        "AU60WPC00104": {
           "Description": "Foundation Conservative"
        },
        "AU60MSC00018": {
           "Description": "Frame Futures Fund"
        },
        "AU60FRT00281": {
           "Description": "Franklin Australian Absolute Return Bd I"
        },
        "AU60FRT00273": {
           "Description": "Franklin Australian Absolute Return Bd W"
        },
        "AU60FRT64352": {
           "Description": "Franklin Australian Core Plus Bond I"
        },
        "AU60FRT61432": {
           "Description": "Franklin Australian Core Plus Bond W"
        },
        "AU60FRT00109": {
           "Description": "Franklin Global Growth I"
        },
        "AU60FRT00091": {
           "Description": "Franklin Global Growth W"
        },
        "AU60FRT00216": {
           "Description": "Franklin Templeton Australian Equity I"
        },
        "AU60FRT00208": {
           "Description": "Franklin Templeton Australian Equity W"
        },
        "AU60FRT00232": {
           "Description": "Franklin Templeton Global Aggregate Bd I"
        },
        "AU60FRT00257": {
           "Description": "Franklin Templeton Global Aggregate Bd W"
        },
        "AU60FRT00125": {
           "Description": "Franklin Templeton Multisector Bond I"
        },
        "AU60FRT00117": {
           "Description": "Franklin Templeton Multisector Bond W"
        },
        "AU60BTA05525": {
           "Description": "Franklin Templeton WS Plus MultiSec Bond"
        },
        "AU60EVG00028": {
           "Description": "Freehold Absolute Return Fund"
        },
        "AU60LAM00421": {
           "Description": "Freehold AREITs & Listed Infrastructure"
        },
        "AU60LAM00447": {
           "Description": "Freehold Australian Property"
        },
        "AU60ETL04248": {
           "Description": "Fulcrum Div Absolute Return Fund"
        },
        "AU60ETL03794": {
           "Description": "GAM FCM ILS Yield A"
        },
        "AU60ETL03778": {
           "Description": "GAM FCM ILS Yield W"
        },
        "AU60ETL13520": {
           "Description": "GAM Systematic Alt Rsk Pre AU - I"
        },
        "AU60ETL39640": {
           "Description": "GAM Systematic Alt Rsk Pre Pls AU - I"
        },
        "AU60GCM00013": {
           "Description": "Ganes Focused Value"
        },
        "AU60DDH83055": {
           "Description": "GCI Australian Capital Stable Fund"
        },
        "AU60GDI10877": {
           "Description": "GDI No. 42 Office Trust"
        },
        "AU60GDI64551": {
           "Description": "GDI No.33 Brisbane Office Trust"
        },
        "AU60GDI02510": {
           "Description": "GDI No.36 Perth CBD Office Trust"
        },
        "AU60GDI06453": {
           "Description": "GDI No.38 Diversified Property Trust"
        },
        "AU60GDI31295": {
           "Description": "GDI No.43 Property Trust"
        },
        "AU60FSF09081": {
           "Description": "Generation Wholesale Global Share"
        },
        "AU60BPF00028": {
           "Description": "Global All Weather A Class"
        },
        "AU60BPF00036": {
           "Description": "Global All Weather B Class"
        },
        "AU60AIM55579": {
           "Description": "Global Listed Infra Mndt No.1"
        },
        "AU60ETL94678": {
           "Description": "Global Opportunities Alternatives Trust"
        },
        "AU60BPF00051": {
           "Description": "Global Pure Alpha A Class"
        },
        "AU60BPF00069": {
           "Description": "Global Pure Alpha B Class"
        },
        "AU60BEG14880": {
           "Description": "Global Systematic Equities Fund"
        },
        "AU60PER78098": {
           "Description": "Global Transport A-2019"
        },
        "AU60GMO01024": {
           "Description": "GMO Emerging Markets Trust"
        },
        "AU60GMO00141": {
           "Description": "GMO SGM Major Markets Trust"
        },
        "AU60GMO00018": {
           "Description": "GMO Systematic Global Macro Trust A"
        },
        "AU60GMO00067": {
           "Description": "GMO Systematic Global Macro Trust B"
        },
        "AU60ETL42073": {
           "Description": "GQG Partners Emerging Markets Equity"
        },
        "AU60ETL73771": {
           "Description": "GQG Partners Global Equity"
        },
        "AU60AMP20784": {
           "Description": "Grant Samuel Epch Advtg GlbEq ShldYldUnH"
        },
        "AU60ETL00527": {
           "Description": "Grant Samuel Tribeca Aust Smaller Coms"
        },
        "AU60HOW00346": {
           "Description": "Greencape Broadcap"
        },
        "AU60HOW01583": {
           "Description": "Greencape Broadcap Class P"
        },
        "AU60HOW00353": {
           "Description": "Greencape High Conviction"
        },
        "AU60GYC62125": {
           "Description": "Gyrostat Absolute Return Income Equity"
        },
        "AU60MSC01297": {
           "Description": "Hamilton Chs Slct Inv Bntlgh Dbt Sb Tr A"
        },
        "AU60MSC82032": {
           "Description": "Hamilton Chs Slct Inv Bntlgh Dbt Sb Tr B"
        },
        "AU60MSC56325": {
           "Description": "Hamilton Chs Slct Inv Bntlgh Dbt Sb Tr C"
        },
        "AU60HLN00036": {
           "Description": "Hamilton Investment Fd-Multi Asset Port"
        },
        "AU60PIM10150": {
           "Description": "Hamilton Lane Global Private Asst (AUD)"
        },
        "AU60FHT69931": {
           "Description": "Harvest Lane Asset Management Abs Pls"
        },
        "AU60FHT00423": {
           "Description": "Harvest Lane Asset Management Abs Ret"
        },
        "AU60HTH00205": {
           "Description": "Heathley Aged Care Property Fund No. 1"
        },
        "AU60HTH00155": {
           "Description": "Heathley Direct Medical Fund No. 1"
        },
        "AU60HTH22795": {
           "Description": "Heathley Direct Medical Fund No. 2"
        },
        "AU60MAQ08290": {
           "Description": "Hedged Index Global Infrastructure Secs"
        },
        "AU60MAQ08308": {
           "Description": "Hedged Index Global Real Estate Secs"
        },
        "AU60WFS82638": {
           "Description": "Heitman Global Property MPS"
        },
        "AU60HAM00023": {
           "Description": "Herschel Australian Equities Trust"
        },
        "AU60OMF80400": {
           "Description": "Holon Photon Ordinary Units"
        },
        "AU60BNT00032": {
           "Description": "Hyperion Australian Growth Companies"
        },
        "AU60WHT00709": {
           "Description": "Hyperion Global Growth Companies A"
        },
        "AU60WHT84356": {
           "Description": "Hyperion Global Growth Companies B"
        },
        "AU60WHT85577": {
           "Description": "Hyperion Global Growth Companies C"
        },
        "AU60BNT01014": {
           "Description": "Hyperion Small Growth Companies"
        },
        "AU60MAQ04042": {
           "Description": "IFP Global Franchise"
        },
        "AU60MAQ06310": {
           "Description": "IFP Global Franchise Fund (Hedged)"
        },
        "AU60MAQ30609": {
           "Description": "IFP Global Franchise Fund II"
        },
        "AU60PER07089": {
           "Description": "Implemented Australian Share Portfolio"
        },
        "AU60PER07105": {
           "Description": "Implemented Fixed Income Portfolio"
        },
        "AU60PER07113": {
           "Description": "Implemented International Share Portf"
        },
        "AU60PER07121": {
           "Description": "Implemented Real Estate Portfolio"
        },
        "AU60ETL04826": {
           "Description": "India Avenue Equity"
        },
        "AU60ETL04784": {
           "Description": "India Avenue Equity - Retail Class"
        },
        "AU60VIL00011": {
           "Description": "Infrastructure Partners Invst Fd Core"
        },
        "AU60ETL03968": {
           "Description": "Insight Diversified Inflation Plus"
        },
        "AU60ETL04529": {
           "Description": "Insight Global Absolute Return Bond"
        },
        "AU60SLT00410": {
           "Description": "Insync Global Capital Aware"
        },
        "AU60ETL55109": {
           "Description": "Insync Global Quality Equity"
        },
        "AU60PPL00364": {
           "Description": "Intermede Global Equities Fund"
        },
        "AU60AMP55814": {
           "Description": "Invesco Advtg Wholsl Glb Trgtd Rets Fd"
        },
        "AU60GTU05167": {
           "Description": "Invesco Australian Equity Effcnt Inc A"
        },
        "AU60GTU01133": {
           "Description": "Invesco Australian Equity Long Short A"
        },
        "AU60GTU01141": {
           "Description": "Invesco Australian Equity Long Short I"
        },
        "AU60GTU41725": {
           "Description": "Invesco Credit Opportunities"
        },
        "AU60GTU70492": {
           "Description": "Invesco Credit Opportunities - Sec Cls"
        },
        "AU60GTU37509": {
           "Description": "Invesco Credit Opportunities - Thd Cls"
        },
        "AU60GTU55477": {
           "Description": "Invesco Global Real Estate A"
        },
        "AU60GTU73603": {
           "Description": "Invesco Global Real Estate I"
        },
        "AU60GTU89120": {
           "Description": "Invesco Wholesale USD Cash A"
        },
        "AU60CNA08116": {
           "Description": "Invesco WS Aus Share"
        },
        "AU60CNA08124": {
           "Description": "Invesco WS Aus Smaller Companies-Class A"
        },
        "AU60GTU00960": {
           "Description": "Invesco WS Aus Smaller Companies-Class R"
        },
        "AU60CNA08066": {
           "Description": "Invesco WS Diversified Growth-Class A"
        },
        "AU60GTU00978": {
           "Description": "Invesco WS Diversified Growth-Class R"
        },
        "AU60GTU00085": {
           "Description": "Invesco WS Global Opportunities-Hedged A"
        },
        "AU60GTU00986": {
           "Description": "Invesco WS Global Opportunities-Hedged R"
        },
        "AU60GTU01026": {
           "Description": "Invesco WS Global Opportunities-Unhedged"
        },
        "AU60GTU00416": {
           "Description": "Invesco WS Global Property Secs-Class A"
        },
        "AU60GTU01091": {
           "Description": "Invesco WS Global Targeted Returns A"
        },
        "AU60GTU01109": {
           "Description": "Invesco WS Global Targeted Returns I"
        },
        "AU60CNA08058": {
           "Description": "Invesco WS Senior Secured Income"
        },
        "AU60IML00044": {
           "Description": "Investors Mutual All Industrials Share"
        },
        "AU60IML00101": {
           "Description": "Investors Mutual Concentrated Aus Share"
        },
        "AU60IML00051": {
           "Description": "Investors Mutual Equity Income"
        },
        "AU60IML26817": {
           "Description": "Investors Mutual Private Portfolio"
        },
        "AU60IML00069": {
           "Description": "Investors Mutual Small Cap"
        },
        "AU60IML00010": {
           "Description": "Investors Mutual WS Aus Smaller Co"
        },
        "AU60IML00028": {
           "Description": "Investors Mutual WS Australian Share"
        },
        "AU60IML00036": {
           "Description": "Investors Mutual WS Future Leaders"
        },
        "AU0000005902": {
           "Description": "InvestSMART Australian Equity Income ETF"
        },
        "AU60IVS95719": {
           "Description": "InvestSmart Australian Small Coms Fd"
        },
        "AU0000043069": {
           "Description": "InvestSMART Ethical Share ETF"
        },
        "AU60IOF02329": {
           "Description": "IOOF Balanced Investor Trust"
        },
        "AU60AUX00072": {
           "Description": "IOOF Capital Secure Trust"
        },
        "AU60PIM00029": {
           "Description": "IOOF Cash Management Trust"
        },
        "AU60UFM00603": {
           "Description": "IOOF Cash Management Trust B"
        },
        "AU60AUX00213": {
           "Description": "IOOF Cash Management Trust D"
        },
        "AU60PIM00037": {
           "Description": "IOOF Income Trust"
        },
        "AU60IOF00927": {
           "Description": "IOOF MultiMix Australian Shares Trust"
        },
        "AU60IOF00935": {
           "Description": "IOOF MultiMix Balanced Growth Trust"
        },
        "AU60IOF00943": {
           "Description": "IOOF MultiMix Capital Stable Trust"
        },
        "AU60IOF00919": {
           "Description": "IOOF MultiMix Cash Enhanced Trust"
        },
        "AU60IOF00950": {
           "Description": "IOOF MultiMix Conservative Trust"
        },
        "AU60IOF00968": {
           "Description": "IOOF MultiMix Diversified Fixed Interest"
        },
        "AU60IOF00976": {
           "Description": "IOOF MultiMix Growth Trust"
        },
        "AU60IOF00984": {
           "Description": "IOOF MultiMix International Shares Trust"
        },
        "AU60UFM00512": {
           "Description": "IOOF MultiMix Moderate Trust"
        },
        "AU60SMF01076": {
           "Description": "IOOF MultiMix W Aus Property Trust"
        },
        "AU60IOF02535": {
           "Description": "IOOF MultiSeries 30"
        },
        "AU60IOF02543": {
           "Description": "IOOF MultiSeries 50"
        },
        "AU60IOF00901": {
           "Description": "IOOF MultiSeries 70"
        },
        "AU60IOF02550": {
           "Description": "IOOF MultiSeries 90"
        },
        "AU60PBT00011": {
           "Description": "IOOF Profile 45"
        },
        "AU60PBT00029": {
           "Description": "IOOF Profile 55"
        },
        "AU60PBT00037": {
           "Description": "IOOF Profile 65"
        },
        "AU60PBT00045": {
           "Description": "IOOF Profile 75"
        },
        "AU60PBT00052": {
           "Description": "IOOF Profile 85"
        },
        "AU60PBT00060": {
           "Description": "IOOF Profile 95"
        },
        "AU60PBT00102": {
           "Description": "IOOF Profile Australian Shares"
        },
        "AU60PBT00078": {
           "Description": "IOOF Profile Diversified Fixed Interest"
        },
        "AU60PBT00086": {
           "Description": "IOOF Profile International Shares"
        },
        "AU60PBT00094": {
           "Description": "IOOF Profile International Shares Hdgd"
        },
        "AU60IOF00133": {
           "Description": "IOOF/Perennial Flex Balanced"
        },
        "AU60IOF01073": {
           "Description": "IOOF/Perennial Flex Balanced NEF"
        },
        "AU60IOF00158": {
           "Description": "IOOF/Perennial Flex Growth Shares"
        },
        "AU60IOF02121": {
           "Description": "IOOF/Perennial Flex Value Shares"
        },
        "AU60IPA01485": {
           "Description": "ipac Alternative Balanced"
        },
        "AU60IPA01170": {
           "Description": "ipac Classic Portfolio 1"
        },
        "AU60IPA01188": {
           "Description": "ipac Classic Portfolio 2"
        },
        "AU60IPA01196": {
           "Description": "ipac Classic Portfolio 3"
        },
        "AU60IPA00545": {
           "Description": "ipac Classic Value Portfolio"
        },
        "AU60IPA01238": {
           "Description": "ipac Diversified Investment Strategy 1"
        },
        "AU60IPA01154": {
           "Description": "ipac Diversified Investment Strategy 2"
        },
        "AU60IPA01162": {
           "Description": "ipac Diversified Investment Strategy 3"
        },
        "AU60IPA01246": {
           "Description": "ipac Diversified Investment Strategy 4"
        },
        "AU60IPA00552": {
           "Description": "ipac Diversified Investment Strategy 5"
        },
        "AU60IPA00768": {
           "Description": "IPAC Income Generator"
        },
        "AU60IPA01535": {
           "Description": "ipac life choices Active 100"
        },
        "AU60IPA01568": {
           "Description": "ipac life choices Active 50"
        },
        "AU60IPA01550": {
           "Description": "ipac life choices Active 70"
        },
        "AU60IPA01543": {
           "Description": "ipac life choices Active 85"
        },
        "AU60IPA01576": {
           "Description": "ipac life choices Alternative Balanced"
        },
        "AU60IPA01584": {
           "Description": "ipac life choices Income Generator"
        },
        "AU60IPA01600": {
           "Description": "ipac life choices Index 50"
        },
        "AU60IPA01592": {
           "Description": "ipac life choices Index 70"
        },
        "AU60IPA01618": {
           "Description": "ipac life choices Index 85"
        },
        "AU60IPA01626": {
           "Description": "ipac life choices Premium Growth"
        },
        "AU60IPA00461": {
           "Description": "ipac Pathways 30"
        },
        "AU60IPA00479": {
           "Description": "ipac Pathways 70"
        },
        "AU60IPA00487": {
           "Description": "ipac Pathways 85"
        },
        "AU60IPA00495": {
           "Description": "ipac Pathways 95"
        },
        "AU60IPA00503": {
           "Description": "ipac Pathways Aust Prop Securities"
        },
        "AU60IPA00511": {
           "Description": "ipac Pathways Australian Shares"
        },
        "AU60IPA00529": {
           "Description": "ipac Pathways Intl Shares - Hedged"
        },
        "AU60IPA00537": {
           "Description": "ipac Pathways Intl Shares - Unhedged"
        },
        "AU60IPA00560": {
           "Description": "ipac Pathways Value"
        },
        "AU60IPA01428": {
           "Description": "Ipac Select Income Generator"
        },
        "AU60IPA01469": {
           "Description": "Ipac Select Index Balanced"
        },
        "AU60IPA01436": {
           "Description": "Ipac Select Index Defensive"
        },
        "AU60IPA01451": {
           "Description": "Ipac Select Index Growth"
        },
        "AU60IPA01444": {
           "Description": "Ipac Select Index High Growth"
        },
        "AU60IPA01477": {
           "Description": "Ipac Select Index Moderately Defensive"
        },
        "AU60IPA00115": {
           "Description": "ipac Strat Inv Srv Inflation Plus 2"
        },
        "AU60IPA00123": {
           "Description": "ipac Strat Inv Srv Inflation Plus 4"
        },
        "AU60IPA00131": {
           "Description": "ipac Strat Inv Srv Inflation Plus 6"
        },
        "AU60IPA00347": {
           "Description": "ipac Strat Inv Srv Inflation Plus 7"
        },
        "AU60IPA00727": {
           "Description": "ipac-Classic Enhanced Growth Portfolio"
        },
        "AU60MAQ53189": {
           "Description": "IPM Global Macro 50"
        },
        "AU60MAQ82436": {
           "Description": "IPM Global Macro Fund"
        },
        "AU60MGL00196": {
           "Description": "Ironbark Copper Rock Emerging Mkts Opps"
        },
        "AU60MGL00188": {
           "Description": "Ironbark Copper Rock Global All Cap Shr"
        },
        "AU60HFL00149": {
           "Description": "Ironbark Gavekal Asian Opportunities"
        },
        "AU60DEU01090": {
           "Description": "Ironbark GCM Global Macro"
        },
        "AU60MGL00105": {
           "Description": "Ironbark Global (ex-Aus) Property Secs"
        },
        "AU60MGL00113": {
           "Description": "Ironbark Global Property Securities"
        },
        "AU60AMP20743": {
           "Description": "Ironbark Karara Advantage AUS Share"
        },
        "AU60PAT00013": {
           "Description": "Ironbark Karara Australian Share"
        },
        "AU60PAT00021": {
           "Description": "Ironbark Karara Australian Small Comp"
        },
        "AU60PER78023": {
           "Description": "Ironbark Karara Market Neutral Fund"
        },
        "AU60BTA04775": {
           "Description": "Ironbark Karara WS Plus Aust Small Co"
        },
        "AU60HFL01048": {
           "Description": "Ironbark LHP Diversified Investments"
        },
        "AU60HFL01063": {
           "Description": "Ironbark LHP Global Long/Short R"
        },
        "AU60HFL01089": {
           "Description": "Ironbark LHP Global Long/Short W"
        },
        "AU60DAM27926": {
           "Description": "Ironbark North Rock Fund"
        },
        "AU60PAL00028": {
           "Description": "Ironbark Paladin Property Securities"
        },
        "AU60MGL00048": {
           "Description": "Ironbark Royal London ConcentratedGlbShr"
        },
        "AU60BGL00793": {
           "Description": "iShares All-Country Equity Index D"
        },
        "AU000000IAA6": {
           "Description": "iShares Asia 50 ETF (AU)"
        },
        "AU60BGL01056": {
           "Description": "iShares Australian Bond Index"
        },
        "AU60BGL00348": {
           "Description": "iShares Australian Equity Index"
        },
        "AU60BGL01080": {
           "Description": "iShares Australian Listed Property Index"
        },
        "AU000000IZZ0": {
           "Description": "iShares China Large-Cap ETF (AU)"
        },
        "AU00000BILL3": {
           "Description": "iShares Core Cash ETF"
        },
        "AU000000IAF5": {
           "Description": "iShares Core Composite Bond ETF"
        },
        "AU0000088494": {
           "Description": "iShares Core Corporate Bond ETF"
        },
        "AU00000IHCB0": {
           "Description": "iShares Core Global Corp Bd AUDH ETF"
        },
        "AU00000IHWL7": {
           "Description": "iShares Core MSCI World All Cap AUDH ETF"
        },
        "AU00000IWLD6": {
           "Description": "iShares Core MSCI World All Cap ETF"
        },
        "AU000000IOZ4": {
           "Description": "iShares Core S&P/ASX 200 ETF"
        },
        "AU00000MVOL7": {
           "Description": "iShares Edge MSCI Australia Mini Vol ETF"
        },
        "AU00000AUMF0": {
           "Description": "iShares Edge MSCI Australia Mltfctr ETF"
        },
        "AU00000WVOL6": {
           "Description": "iShares Edge MSCI World Minimum Vol ETF"
        },
        "AU00000WDMF0": {
           "Description": "iShares Edge MSCI World Multifactor ETF"
        },
        "AU60BGL00835": {
           "Description": "iShares Emerging Markets IMI Equity Idx"
        },
        "AU00000ISEC1": {
           "Description": "iShares Enhanced Cash ETF"
        },
        "AU60BLK21270": {
           "Description": "iShares ESG Australian Bond Index D"
        },
        "AU60BLK46368": {
           "Description": "iShares ESG Global Bond Index D"
        },
        "AU000000IEU6": {
           "Description": "iShares Europe ETF (AU)"
        },
        "AU00000IHOO8": {
           "Description": "iShares Global 100 AUD Hedged ETF"
        },
        "AU000000IOO8": {
           "Description": "iShares Global 100 ETF (AU)"
        },
        "AU60BGL00082": {
           "Description": "iShares Global Bond Index"
        },
        "AU000000IXI1": {
           "Description": "iShares Global Consumer Staples ETF (AU)"
        },
        "AU000000IXJ9": {
           "Description": "iShares Global Healthcare ETF (AU)"
        },
        "AU00000IHHY1": {
           "Description": "iShares Global High Yield Bond AUDH ETF"
        },
        "AU000000ILB1": {
           "Description": "iShares Government Inflation ETF"
        },
        "AU60BGL00447": {
           "Description": "iShares Hedged International Equity Idx"
        },
        "AU60BGL01064": {
           "Description": "iShares International Equity Index"
        },
        "AU00000IHEB6": {
           "Description": "iShares JP Morgan USD EmMkts Bd AUDH ETF"
        },
        "AU000000IVE4": {
           "Description": "iShares MSCI EAFE ETF (AU)"
        },
        "AU000000IEM3": {
           "Description": "iShares MSCI Emerging Markets ETF (AU)"
        },
        "AU000000IJP5": {
           "Description": "iShares MSCI Japan ETF (AU)"
        },
        "AU000000IKO6": {
           "Description": "iShares MSCI South Korea ETF (AU)"
        },
        "AU00000IHVV8": {
           "Description": "iShares S&P 500 AUD Hedged ETF"
        },
        "AU000000IVV8": {
           "Description": "iShares S&P 500 ETF"
        },
        "AU000000IJH2": {
           "Description": "iShares S&P Mid-Cap ETF"
        },
        "AU000000IJR1": {
           "Description": "iShares S&P Small-Cap ETF"
        },
        "AU000000ILC9": {
           "Description": "iShares S&P/ASX 20 ETF"
        },
        "AU000000IHD5": {
           "Description": "iShares S&P/ASX Dividend Opps ETF"
        },
        "AU000000ISO9": {
           "Description": "iShares S&P/ASX Small Ordinaries ETF"
        },
        "AU60BLK43803": {
           "Description": "iShares Screened WS Intl Eq Idx E"
        },
        "AU000000IGB1": {
           "Description": "iShares Treasury ETF"
        },
        "AU60BGL00108": {
           "Description": "iShares Wholesale Indexed Aust Bd Z"
        },
        "AU0000088502": {
           "Description": "iShares Yield Plus ETF"
        },
        "AU60MLC36348": {
           "Description": "JANA High Alpha Australian Share Trust"
        },
        "AU60MLC24575": {
           "Description": "JANA High Alpha Glbl Shr Tr with Ccy Hdg"
        },
        "AU60MLC14600": {
           "Description": "JANA High Alpha Global Share Trust"
        },
        "AU60MLC44664": {
           "Description": "JANA Moderate Trust"
        },
        "AU60AMP82875": {
           "Description": "Janus Henderson Advtg Tact Inc Fd"
        },
        "AU60WFS18590": {
           "Description": "Janus Henderson AUS Fxd Intst MPS"
        },
        "AU60IOF00463": {
           "Description": "Janus Henderson Australian Fxd Intst"
        },
        "AU60IOF01131": {
           "Description": "Janus Henderson Australian Fxd IntstInst"
        },
        "AU60IOF00471": {
           "Description": "Janus Henderson Cash Enhanced"
        },
        "AU60IOF01115": {
           "Description": "Janus Henderson Cash Enhanced Instl"
        },
        "AU60IOF01412": {
           "Description": "Janus Henderson Cash Institutional"
        },
        "AU60IOF01271": {
           "Description": "Janus Henderson Diversified Credit"
        },
        "AU60HGI00051": {
           "Description": "Janus Henderson Glb Equity Income Fund"
        },
        "AU60HGI00044": {
           "Description": "Janus Henderson Glb Fixed Intst Ttl Ret"
        },
        "AU60HGI46484": {
           "Description": "Janus Henderson Global Multi-Strategy"
        },
        "AU60ETL03315": {
           "Description": "Janus Henderson Global Natural Resources"
        },
        "AU60ETL01863": {
           "Description": "Janus Henderson Global Rsrch Gr"
        },
        "AU60IOF01453": {
           "Description": "Janus Henderson Tactical Income"
        },
        "AU60JBM28671": {
           "Description": "JB High Alpha"
        },
        "AU60JBM75433": {
           "Description": "JB High Alpha Retail"
        },
        "AU60ETL03323": {
           "Description": "JH INTECH Gbl All Count Mged Vol ex-Aus"
        },
        "AU60PER76332": {
           "Description": "JPMorgan Diversified Risk"
        },
        "AU60PER07196": {
           "Description": "JPMorgan Glb Rsrch Enhncd Idx Eq Fd"
        },
        "AU60PER07162": {
           "Description": "JPMorgan Global Bond Opportunities Fund"
        },
        "AU60PER07584": {
           "Description": "JPMorgan Global Macro Opps Class A Units"
        },
        "AU60PER07154": {
           "Description": "JPMorgan Global Rsrch Enhncd Idx Eq Hdg"
        },
        "AU60PER07279": {
           "Description": "JPMorgan Global Strategic Bond Fund"
        },
        "AU60KAM01009": {
           "Description": "K2 Asian Absolute Return"
        },
        "AU60KAM01017": {
           "Description": "K2 Australian Absolute Return"
        },
        "AU000000KSM9": {
           "Description": "K2 Australian Small Cap ETF"
        },
        "AU000000KII8": {
           "Description": "K2 Global Equities ETF"
        },
        "AU60ETL00469": {
           "Description": "K2 Select International Absolute Return"
        },
        "AU60HOW00528": {
           "Description": "Kapstream Absolute Return Income"
        },
        "AU60HOW01658": {
           "Description": "Kapstream Absolute Return Income Class I"
        },
        "AU60HOW87434": {
           "Description": "Kapstream Absolute Return Income Plus I"
        },
        "AU60AMP86348": {
           "Description": "Kapstream Advantage Absolute Ret Inc Fd"
        },
        "AU60BTA05392": {
           "Description": "Kapstream WS Plus Absolute Return Income"
        },
        "AU60KTA00022": {
           "Description": "Katana Australian Equity Fund"
        },
        "AU60KCL46135": {
           "Description": "KC Diversified Income"
        },
        "AU60LCP00016": {
           "Description": "L1 Capital Australian Equities Fund"
        },
        "AU60ETL19543": {
           "Description": "L1 Capital International Daily"
        },
        "AU60ETL04909": {
           "Description": "L1 Capital Long Short - Retail"
        },
        "AU60ETL49128": {
           "Description": "L1 Capital Long Short - Wholesale"
        },
        "AU60LTC90670": {
           "Description": "La Trobe Australian Cr 90 Day Ntc Acnt"
        },
        "AU60LTC00018": {
           "Description": "La Trobe Classic 48 Hour Account"
        },
        "AU60LTC00026": {
           "Description": "La Trobe Financial 12 Month Term Account"
        },
        "AU60OMF11405": {
           "Description": "Lakehouse Global Growth Fund"
        },
        "AU60OMF66961": {
           "Description": "Lakehouse Small Companies Fund"
        },
        "AU60PLL36425": {
           "Description": "Laverton North Property Ordinary"
        },
        "AU60AMP50187": {
           "Description": "Lazard Advantage Global Infras Fd"
        },
        "AU60LAZ00068": {
           "Description": "Lazard Australian Equity I"
        },
        "AU60LAZ00100": {
           "Description": "Lazard Australian Equity W"
        },
        "AU60LAZ00225": {
           "Description": "Lazard Defensive Australian Equity"
        },
        "AU60LAZ00035": {
           "Description": "Lazard Emerging Markets Equity I"
        },
        "AU60LAZ00233": {
           "Description": "Lazard Emerging Markets Total Ret Debt"
        },
        "AU60LAZ00258": {
           "Description": "Lazard Global Equity Franchise"
        },
        "AU60LAZ75508": {
           "Description": "Lazard Global Equity Franchise I"
        },
        "AU60LAZ00142": {
           "Description": "Lazard Global Listed Infrastructure"
        },
        "AU60LAZ12402": {
           "Description": "Lazard Global Managed Volatility AUD Inc"
        },
        "AU60LAZ00027": {
           "Description": "Lazard Global Small Cap I"
        },
        "AU60LAZ00126": {
           "Description": "Lazard Global Small Cap W"
        },
        "AU60LAZ00050": {
           "Description": "Lazard Select Australian Equity I Cl"
        },
        "AU60LAZ21890": {
           "Description": "Lazard Select Australian Equity S Cl"
        },
        "AU60LAZ00134": {
           "Description": "Lazard Select Australian Equity W Cl"
        },
        "AU60BTA05558": {
           "Description": "Lazard WS Plus Emerging Markets Equity"
        },
        "AU60SLT00352": {
           "Description": "LDI Connect 20 Portfolio"
        },
        "AU60SLT00329": {
           "Description": "LDI Connect 3 Portfolio"
        },
        "AU60SLT00303": {
           "Description": "LDI Connect 7 Portfolio"
        },
        "AU60SSB05156": {
           "Description": "Legg Mason Brandywine Glb Inc Optr"
        },
        "AU60SSB78872": {
           "Description": "Legg Mason Brandywine Glb Inc Optr B"
        },
        "AU60SSB40781": {
           "Description": "Legg Mason Brandywine Glb Inc Optr X"
        },
        "AU60SSB00140": {
           "Description": "Legg Mason Brandywine Glb Oppc Fxd Inc A"
        },
        "AU60SSB00280": {
           "Description": "Legg Mason Brandywine Glb Oppc Fxd Inc I"
        },
        "AU60AMP21139": {
           "Description": "Legg Mason Martin Currie Advtg Eq Inc Tr"
        },
        "AU60AMP30874": {
           "Description": "Legg Mason Martin Currie Advtg Real Inc"
        },
        "AU60JPM00084": {
           "Description": "Legg Mason Martin Currie Divers Gr A"
        },
        "AU60SSB00611": {
           "Description": "Legg Mason Martin Currie Divers Inc Tr"
        },
        "AU60ETL02010": {
           "Description": "Legg Mason Martin Currie Emerging Mkts"
        },
        "AU60SSB00439": {
           "Description": "Legg Mason Martin Currie Equity Income A"
        },
        "AU60SSB00728": {
           "Description": "Legg Mason Martin Currie Equity Income M"
        },
        "AU60SSB00447": {
           "Description": "Legg Mason Martin Currie Equity Income X"
        },
        "AU60SSB00645": {
           "Description": "Legg Mason Martin Currie Eth Val WithInc"
        },
        "AU60SSB49469": {
           "Description": "Legg Mason Martin Currie Ethical Inc Fd"
        },
        "AU60SSB00660": {
           "Description": "Legg Mason Martin Currie Glbl LT Uncon A"
        },
        "AU60SSB01288": {
           "Description": "Legg Mason Martin Currie Property Secs A"
        },
        "AU60SSB00264": {
           "Description": "Legg Mason Martin Currie Real Income A"
        },
        "AU60SSB00272": {
           "Description": "Legg Mason Martin Currie Real Income X"
        },
        "AU60SSB00090": {
           "Description": "Legg Mason Martin Currie Select Opps A"
        },
        "AU60SSB01254": {
           "Description": "Legg Mason Martin Currie Sust Eq A"
        },
        "AU60SSB01304": {
           "Description": "Legg Mason Martin Currie Tact Allc A"
        },
        "AU60SSB57389": {
           "Description": "Legg Mason QS Investors Glb Rspnb Inv A"
        },
        "AU60SSB31251": {
           "Description": "Legg Mason QS Investors Glb Rspnb Inv F"
        },
        "AU60SSB01262": {
           "Description": "Legg Mason QS Investors Global Equity A"
        },
        "AU60SSB01221": {
           "Description": "Legg Mason Western Asset Aus Bd A"
        },
        "AU60SSB39825": {
           "Description": "Legg Mason Western Asset Aust Cr SMAsh"
        },
        "AU60SSB01312": {
           "Description": "Legg Mason Western Asset Cash Plus A"
        },
        "AU60JPM01009": {
           "Description": "Legg Mason Western Asset Cash Plus Tr X"
        },
        "AU60SSB83203": {
           "Description": "Legg Mason Western Asset Global Bond A"
        },
        "AU60SSB38256": {
           "Description": "Legg Mason Western Asset Global Bond B"
        },
        "AU60SSB59872": {
           "Description": "Legg Mason Western Asset Global Bond X"
        },
        "AU60SSB00702": {
           "Description": "Legg Mason Western Asset Macro Opps Bd A"
        },
        "AU60HOW12895": {
           "Description": "Lennox Australian Microcap Fund"
        },
        "AU60HOW35904": {
           "Description": "Lennox Australian Small Companies"
        },
        "AU60LFS00013": {
           "Description": "Life Settlements Wholesale"
        },
        "AU60LIF00188": {
           "Description": "Lifeplan FlexiGrowth High Yield Option"
        },
        "AU60ETL00899": {
           "Description": "Lincoln Retail Australian Growth"
        },
        "AU60ETL03232": {
           "Description": "Lincoln Retail Australian Income"
        },
        "AU60ETL00436": {
           "Description": "Lincoln Wholesale Australian Growth"
        },
        "AU60ETL03240": {
           "Description": "Lincoln Wholesale Australian Income"
        },
        "AU60LMI01836": {
           "Description": "LM Australian Income CP AUD 1 Year"
        },
        "AU60LMI00028": {
           "Description": "LM Cash Performance"
        },
        "AU60LMI00044": {
           "Description": "LM First Mortgage Income"
        },
        "AU60LMI00085": {
           "Description": "LM WS First Mort Inc 12 Mth Fix"
        },
        "AU60LMI00077": {
           "Description": "LM WS First Mort Inc Flexi"
        },
        "AU60MMC01100": {
           "Description": "Loftus Peak Global Disruption"
        },
        "AU60AMT92215": {
           "Description": "Longreach Direct Lending"
        },
        "AU60DAM98174": {
           "Description": "Longreach HQI - Global Market Neutral"
        },
        "AU60WHT93688": {
           "Description": "Longwave Australian Small Companies A"
        },
        "AU60IAM00047": {
           "Description": "Loomis Sayles Credit Opportunities"
        },
        "AU60IML03410": {
           "Description": "Loomis Sayles Global Equity"
        },
        "AU60IAM00062": {
           "Description": "Loomis Sayles Senior Floating Rate Loan"
        },
        "AU60AAP00203": {
           "Description": "MacKay Shields Unconstrained Bond"
        },
        "AU60MAQ00537": {
           "Description": "Macquarie Active Plus Equities"
        },
        "AU60MAQ06401": {
           "Description": "Macquarie Asia New Stars No.1"
        },
        "AU60MAQ01774": {
           "Description": "Macquarie Aus Pure Indexed Equities"
        },
        "AU60MAQ02046": {
           "Description": "Macquarie Australian Diversified Inc (A)"
        },
        "AU60MAQ03101": {
           "Description": "Macquarie Australian Diversified Inc AA"
        },
        "AU60MAQ72031": {
           "Description": "Macquarie Australian Emerging Companies"
        },
        "AU60MAQ01782": {
           "Description": "Macquarie Australian Enhanced Plus Eqs"
        },
        "AU60MAQ02780": {
           "Description": "Macquarie Australian Equities"
        },
        "AU60MAQ00610": {
           "Description": "Macquarie Australian Fixed Interest"
        },
        "AU60MAQ04430": {
           "Description": "Macquarie Australian Shares"
        },
        "AU60MAQ04547": {
           "Description": "Macquarie Australian Small Companies"
        },
        "AU60MAQ00487": {
           "Description": "Macquarie Balanced Growth"
        },
        "AU60MAQ00495": {
           "Description": "Macquarie Capital Stable"
        },
        "AU60MAQ04463": {
           "Description": "Macquarie Core Australian Fixed Interest"
        },
        "AU60MAQ01006": {
           "Description": "Macquarie Core Plus Australian Fxd Intr"
        },
        "AU60MAQ08365": {
           "Description": "Macquarie Diversified Equity Yield"
        },
        "AU60MAQ02749": {
           "Description": "Macquarie Dynamic Bond"
        },
        "AU60MAQ01071": {
           "Description": "Macquarie Enhanced Aust Fixed Interest"
        },
        "AU60MAQ02673": {
           "Description": "Macquarie Enhanced Global Bond"
        },
        "AU60MAQ01790": {
           "Description": "Macquarie Enhanced Property Securities"
        },
        "AU60MAQ03242": {
           "Description": "Macquarie Global Income Opportunities Fd"
        },
        "AU60MAQ03564": {
           "Description": "Macquarie Global Infrastructure Tr II B"
        },
        "AU60MAQ03531": {
           "Description": "Macquarie Global Infrastructure Trust II"
        },
        "AU60MAQ07870": {
           "Description": "Macquarie Global Multi-Sector F/I Fund"
        },
        "AU60MAQ02772": {
           "Description": "Macquarie Income Opportunities"
        },
        "AU60MAQ02665": {
           "Description": "Macquarie Index Tracking Global Bond"
        },
        "AU60MAQ00529": {
           "Description": "Macquarie Inflation Linked Bond"
        },
        "AU60MAQ08258": {
           "Description": "Macquarie Int Infrastructure Secs Unhdgd"
        },
        "AU60MAQ04224": {
           "Description": "Macquarie International Equities"
        },
        "AU60MAQ04323": {
           "Description": "Macquarie International Infra Ses"
        },
        "AU60MAQ00586": {
           "Description": "Macquarie Master Balanced"
        },
        "AU60MAQ00594": {
           "Description": "Macquarie Master Capital Stable"
        },
        "AU60MAQ01873": {
           "Description": "Macquarie Master Cash"
        },
        "AU60MAQ01808": {
           "Description": "Macquarie Master Enhanced Fixed Int"
        },
        "AU60MAQ00636": {
           "Description": "Macquarie Master Property Securities"
        },
        "AU60MAQ00859": {
           "Description": "Macquarie Master Small Companies"
        },
        "AU60MAQ30690": {
           "Description": "Macquarie Multi-Asset Opportunities"
        },
        "AU60MAQ75786": {
           "Description": "Macquarie Professional Series Glb Alts"
        },
        "AU60MAQ00545": {
           "Description": "Macquarie Property Securities"
        },
        "AU60MAQ00883": {
           "Description": "Macquarie Small Companies"
        },
        "AU60MAQ04596": {
           "Description": "Macquarie Tax Effective Aust Shares"
        },
        "AU60MAQ00602": {
           "Description": "Macquarie Term Cash"
        },
        "AU60MAQ00552": {
           "Description": "Macquarie Treasury"
        },
        "AU60MAQ02111": {
           "Description": "Macquarie True Index Aust Fixed Interest"
        },
        "AU60MAQ02889": {
           "Description": "Macquarie True Index Australian Shares"
        },
        "AU60MAQ07896": {
           "Description": "Macquarie True Index Cash Fund"
        },
        "AU60MAQ08373": {
           "Description": "Macquarie True Index Emerging Markets"
        },
        "AU60MAQ08324": {
           "Description": "Macquarie True Index Glbl Rel Est Secs"
        },
        "AU60MAQ06336": {
           "Description": "Macquarie True Index International Eqs"
        },
        "AU60MAQ02194": {
           "Description": "Macquarie True Index Listed Property"
        },
        "AU60MAQ06369": {
           "Description": "Macquarie True Index Sovereign Bond"
        },
        "AU60MAQ02137": {
           "Description": "Macquarie Wholesale Australian Equities"
        },
        "AU60MAQ02871": {
           "Description": "Macquarie Wholesale Property Securities"
        },
        "AU60BTA05442": {
           "Description": "Macquarie WS Plus Income Opportunities"
        },
        "AU60WFS08674": {
           "Description": "Macquarie WS Plus Int Infras Sec Hdg"
        },
        "AU60AMP20800": {
           "Description": "Magellan Advantage Global"
        },
        "AU60MGE00019": {
           "Description": "Magellan Global"
        },
        "AU60MGE00076": {
           "Description": "Magellan Global (Hedged)"
        },
        "AU000000MHG0": {
           "Description": "Magellan Global Equities Currency H ETF"
        },
        "AU000000MGE7": {
           "Description": "Magellan Global Equities ETF"
        },
        "AU60MGE00050": {
           "Description": "Magellan High Conviction"
        },
        "AU60MGE98856": {
           "Description": "Magellan High Conviction - B"
        },
        "AU60MGE00027": {
           "Description": "Magellan Infrastructure"
        },
        "AU60MGE00068": {
           "Description": "Magellan Infrastructure (Unhedged)"
        },
        "AU00000MICH7": {
           "Description": "Magellan Infrastructure Ccy Hdg ETF"
        },
        "AU60WFS08583": {
           "Description": "Magellan Wholesale Plus Infrastructure"
        },
        "AU60BTA05657": {
           "Description": "Magellan WS Plus Global"
        },
        "AU60MAN00021": {
           "Description": "Man AHL Alpha (AUD)"
        },
        "AU60MAN00179": {
           "Description": "Man AHL Alpha (AUD) B"
        },
        "CK0030231866": {
           "Description": "Man AHL Diversified (AUD)"
        },
        "CK0107518872": {
           "Description": "Man AHL Gold (AUD)"
        },
        "AU60BTA05673": {
           "Description": "Man AHL WS Plus Alpha (AUD)"
        },
        "AU60AIM30234": {
           "Description": "Man Alternative Style Risk Premia Accs"
        },
        "AU60MAN00047": {
           "Description": "Man Diversified Alternatives"
        },
        "CK0113580171": {
           "Description": "Man OM-IP 15seven Ltd"
        },
        "CK0122853601": {
           "Description": "Man OM-IP Global Limited"
        },
        "CK0014573309": {
           "Description": "Man Series 6 OM-IP 220 Limited"
        },
        "CK0015108634": {
           "Description": "Man Series 8 OM-IP 220 Limited"
        },
        "AU60MSM95686": {
           "Description": "Manning Private Debt"
        },
        "AU60MPL00031": {
           "Description": "Maple-Brown Abbott Asian Investment"
        },
        "AU60ADV00775": {
           "Description": "Maple-Brown Abbott Aus Geared Eq"
        },
        "AU60ADV00783": {
           "Description": "Maple-Brown Abbott Aus Geared Eq W"
        },
        "AU60ADV00080": {
           "Description": "Maple-Brown Abbott Aus Shr NEF"
        },
        "AU60ADV00130": {
           "Description": "Maple-Brown Abbott Aus Shr Retail"
        },
        "AU60ADV00460": {
           "Description": "Maple-Brown Abbott Aus Shr Wholesale"
        },
        "AU60MPL00023": {
           "Description": "Maple-Brown Abbott Australian Equity"
        },
        "AU60MPL00015": {
           "Description": "Maple-Brown Abbott Diversified Inv"
        },
        "AU60MPL00064": {
           "Description": "Maple-Brown Abbott Global Listed Infras"
        },
        "AU60MPL05444": {
           "Description": "Maple-Brown Abbott Responsible Invmt"
        },
        "AU60ADV00122": {
           "Description": "Maple-Brown Abbott Sharemarket"
        },
        "AU60ADV00668": {
           "Description": "Maple-Brown Abbott Sharemarket W"
        },
        "AU60MST00020": {
           "Description": "Mason Stevens Credit Fund"
        },
        "AU60FHT34950": {
           "Description": "Maven Smaller Companies"
        },
        "AU60MPL00080": {
           "Description": "MBA Global Listed Infrastructure-Hedge"
        },
        "AU60SLT00105": {
           "Description": "MCG Endowment Strategy"
        },
        "AU60EQI00040": {
           "Description": "MCP Australian Share Income"
        },
        "AU60PER75722": {
           "Description": "MCP Credit Trust"
        },
        "AU60PER76977": {
           "Description": "MCP Real Estate Debt"
        },
        "AU60PER72406": {
           "Description": "MCP Secured Private Debt II"
        },
        "AU60TCA39068": {
           "Description": "MCP Wholesale Investments Trust"
        },
        "AU60PIM48069": {
           "Description": "Melior Australian Impact"
        },
        "AU60MGC00013": {
           "Description": "Melling Capital Dynamic Volatility"
        },
        "AU60MIN00313": {
           "Description": "Mercer Australian Inflation Plus"
        },
        "AU60MIN00297": {
           "Description": "Mercer Australian Listed Property"
        },
        "AU60MIN00065": {
           "Description": "Mercer Australian Shares"
        },
        "AU60MIN00206": {
           "Description": "Mercer Australian Shares Plus"
        },
        "AU60MIN00875": {
           "Description": "Mercer Australian Shrs for Tax Exmpt Inv"
        },
        "AU60MIN00073": {
           "Description": "Mercer Australian Small Companies"
        },
        "AU60MIN00305": {
           "Description": "Mercer Australian Sovereign Bond Fund"
        },
        "AU60MIN00081": {
           "Description": "Mercer Cash Fund - Cash Units"
        },
        "AU60MIN00461": {
           "Description": "Mercer Cash Fund - Term Deposit Units"
        },
        "AU60NCL16215": {
           "Description": "Mercer Conservative Gr Enh Pasv Units"
        },
        "AU60MIN00099": {
           "Description": "Mercer Conservative Growth"
        },
        "AU60MIN00263": {
           "Description": "Mercer Diversified Alternatives"
        },
        "AU60MIN00198": {
           "Description": "Mercer Diversified Shares Fund"
        },
        "AU60MIN00826": {
           "Description": "Mercer Emerging Markets Debt"
        },
        "AU60MIN00370": {
           "Description": "Mercer Emerging Markets Shares Fund"
        },
        "AU60MIN00321": {
           "Description": "Mercer Global Credit Fund"
        },
        "AU60MIN00339": {
           "Description": "Mercer Global Listed Infrastructure"
        },
        "AU60MIN00230": {
           "Description": "Mercer Global Listed Property Fund"
        },
        "AU60MIN00172": {
           "Description": "Mercer Global Small Companies SharesFund"
        },
        "AU60MIN00289": {
           "Description": "Mercer Global Sovereign Bond Fund"
        },
        "AU60MIN00131": {
           "Description": "Mercer Growth"
        },
        "AU60NCL44076": {
           "Description": "Mercer Growth Enhanced Passive Units"
        },
        "AU60MIN00164": {
           "Description": "Mercer Hedged International Shares Fund"
        },
        "AU60MIN00123": {
           "Description": "Mercer High Growth"
        },
        "AU60MIN00156": {
           "Description": "Mercer International Shares Fund"
        },
        "AU60MIN00149": {
           "Description": "Mercer Moderate Growth"
        },
        "AU60NCL42864": {
           "Description": "Mercer Moderate Growth Enh Pasv Units"
        },
        "AU60MIN00453": {
           "Description": "Mercer Socially Resp Australian"
        },
        "AU60NCL40579": {
           "Description": "Mercer Socially Rspnb Shrs Fd Hdg"
        },
        "AU60NCL40397": {
           "Description": "Mercer Socially Rspnb Shrs Fd Unhdg"
        },
        "AU60AMP87601": {
           "Description": "Merlon Advantage Australian Share Inc Fd"
        },
        "AU60WAR00021": {
           "Description": "Merlon Australian Equity Income (CNA)"
        },
        "AU60HBC00113": {
           "Description": "Merlon Australian Share Income"
        },
        "AU60MIL00036": {
           "Description": "Merrill-Instreet Reliance Commodities"
        },
        "AU60MIL00028": {
           "Description": "Merrill-Instreet Reliance Global Alloc"
        },
        "AU60PER07469": {
           "Description": "Metrics Credit Diversified Aust Sr Ln"
        },
        "AU60ETL04024": {
           "Description": "MFS Blended Research Global Equity Tr"
        },
        "AU60ETL01723": {
           "Description": "MFS Concentrated Global Equity Trust W"
        },
        "AU60ETL03349": {
           "Description": "MFS Emerging Markets Equity Trust"
        },
        "AU60ETL00410": {
           "Description": "MFS Fully Hedged Global Equity Trust"
        },
        "AU60MIA00013": {
           "Description": "MFS Global Equity Trust"
        },
        "AU60ETL04354": {
           "Description": "MFS Low Volatility Global Equity Trust"
        },
        "AU60ETL32769": {
           "Description": "MFS Prudent Capital Trust"
        },
        "AU60MIC00019": {
           "Description": "Microequities Deep Value"
        },
        "AU60MIC00035": {
           "Description": "Microequities Global Value Microcap"
        },
        "AU60MIC00027": {
           "Description": "Microequities High Income Value Microcap"
        },
        "AU60MIC56763": {
           "Description": "Microequities Pure Microcap Value"
        },
        "AU60PIM90913": {
           "Description": "Microequities Value Income"
        },
        "AU60PRM00178": {
           "Description": "MIF C"
        },
        "AU60ETL81550": {
           "Description": "Milford Australian Absolute Growth Fd 1"
        },
        "AU60ETL19089": {
           "Description": "Milford Diversified Income (AU)"
        },
        "AU60ETL69787": {
           "Description": "Milford Dynamic (AU)"
        },
        "AU60FSF17621": {
           "Description": "Milliman Managed Risk Global Shr-Class A"
        },
        "AU60FSF17613": {
           "Description": "Milliman Mgd Risk Australian Shr-Class A"
        },
        "AU60FSF17639": {
           "Description": "Milliman Mgd Risk M-Index High Gro- A"
        },
        "AU60TGY86458": {
           "Description": "Milton Office Trust"
        },
        "AU60ETL74779": {
           "Description": "Mirae Asset Asia Great Consumer Eq Fd"
        },
        "AU60ETL74985": {
           "Description": "Mirae Asset Asia Sector Leader Equity Fd"
        },
        "AU60ETL03703": {
           "Description": "Mittleman Global Value Equity"
        },
        "AU60ETL55091": {
           "Description": "Mittleman Global Value Equity I"
        },
        "AU60MLC06689": {
           "Description": "MLC Inflation Plus Assertive Portfolio B"
        },
        "AU60NFS02411": {
           "Description": "MLC Inv Port-MIF Cpt Guaranteed"
        },
        "AU60MLC00153": {
           "Description": "MLC UT/MKey InvSer Australian Share"
        },
        "AU60MLC00112": {
           "Description": "MLC UT/MKey InvSer Cash"
        },
        "AU60MLC07844": {
           "Description": "MLC UT/MKey InvSer Global Property"
        },
        "AU60MLC00179": {
           "Description": "MLC UT/MKey InvSer Global Share"
        },
        "AU60MLC00211": {
           "Description": "MLC UT/MKey InvSer Horizon 2 - Income"
        },
        "AU60MLC03934": {
           "Description": "MLC UT/MKey InvSer Horizon 3-Conserv Gr"
        },
        "AU60MLC00237": {
           "Description": "MLC UT/MKey InvSer Horizon 4 - Balanced"
        },
        "AU60MLC03942": {
           "Description": "MLC UT/MKey InvSer Horizon 6 - Shares"
        },
        "AU60MLC00971": {
           "Description": "MLC UT/MKey InvSer Income Builder"
        },
        "AU60MLC00146": {
           "Description": "MLC UT/MKey InvSer MLC - Vanguard Sh Ind"
        },
        "AU60MLC00609": {
           "Description": "MLC UT/MKey InvSer Platinum Global"
        },
        "AU60MLC00138": {
           "Description": "MLC UT/MKey InvSer Prop Securities"
        },
        "AU60MLC00245": {
           "Description": "MLC UT/MKey InvSerHorizon 5 - Growth"
        },
        "AU60MLC08552": {
           "Description": "MLC UT/MKey InvSerT Diversified Debt"
        },
        "AU60MLC04486": {
           "Description": "MLC UT/MKey InvSerT Horizon 7 - Acc Gr"
        },
        "AU60MLC02621": {
           "Description": "MLC Wholesale Australian Share"
        },
        "AU60MLC08933": {
           "Description": "MLC Wholesale Australian Share Index"
        },
        "AU60MLC08396": {
           "Description": "MLC Wholesale Diversified Debt A"
        },
        "AU60MLC07869": {
           "Description": "MLC Wholesale Global Property A"
        },
        "AU60MLC02613": {
           "Description": "MLC Wholesale Global Share"
        },
        "AU60MLC06697": {
           "Description": "MLC Wholesale Horizon 1 Bond Portfolio"
        },
        "AU60MLC06705": {
           "Description": "MLC Wholesale Horizon 2 Income Portfolio"
        },
        "AU60MLC03983": {
           "Description": "MLC Wholesale Horizon 3 Conservative Gr"
        },
        "AU60MLC02605": {
           "Description": "MLC Wholesale Horizon 4 Balanced"
        },
        "AU60MLC02654": {
           "Description": "MLC Wholesale Horizon 5 Growth Portfolio"
        },
        "AU60MLC03975": {
           "Description": "MLC Wholesale Horizon 6 Share Portfolio"
        },
        "AU60MLC04494": {
           "Description": "MLC Wholesale Horizon 7 Accelerated Gr"
        },
        "AU60MLC02647": {
           "Description": "MLC Wholesale IncomeBuilderTM"
        },
        "AU60MLC02639": {
           "Description": "MLC Wholesale Property Securities"
        },
        "AU60MLC73879": {
           "Description": "MLC WS Index Plus Balanced Portfolio"
        },
        "AU60MLC78498": {
           "Description": "MLC WS Index Plus Conservative Gr Port"
        },
        "AU60MLC97480": {
           "Description": "MLC WS Index Plus Growth Portfolio"
        },
        "AU60MLC06671": {
           "Description": "MLC WS Inflation Plus - Assertive"
        },
        "AU60MLC09212": {
           "Description": "MLC WS Inflation Plus - Conservative"
        },
        "AU60MLC09204": {
           "Description": "MLC WS Inflation Plus - Moderate"
        },
        "AU60MAA80103": {
           "Description": "Moelis Australia Fixed Income"
        },
        "AU60MAA84121": {
           "Description": "Moelis Australia Private Credit"
        },
        "AU60MAA73330": {
           "Description": "Moelis Australia Secured Loan Series"
        },
        "AU60MAA59446": {
           "Description": "Moelis Australia Secured Loan Series B"
        },
        "AU60MON00014": {
           "Description": "Monash Absolute Investment Class A"
        },
        "AU60MGM00012": {
           "Description": "Montaka Global"
        },
        "AU60FHT00381": {
           "Description": "Montaka Global Access"
        },
        "AU60PER63314": {
           "Description": "Montaka Global Equities"
        },
        "AU0000092033": {
           "Description": "Montaka Global Extension ETF"
        },
        "AU00000MOGL8": {
           "Description": "Montgomery Global Equities ETF"
        },
        "AU60FHT00365": {
           "Description": "Montgomery Global Fund"
        },
        "AU60FHT37268": {
           "Description": "Montgomery Small Companies"
        },
        "AU60INT00219": {
           "Description": "Morningstar Australian Bonds B"
        },
        "AU60INT00011": {
           "Description": "Morningstar Australian Bonds Z"
        },
        "AU60INT00227": {
           "Description": "Morningstar Australian Shares Fund A"
        },
        "AU60INT00235": {
           "Description": "Morningstar Australian Shares Fund B"
        },
        "AU60INT00029": {
           "Description": "Morningstar Australian Shares Fund Z"
        },
        "AU60INT00268": {
           "Description": "Morningstar Balanced Fund - Class A"
        },
        "AU60INT00284": {
           "Description": "Morningstar Balanced Real Return Fund A"
        },
        "AU60INT00292": {
           "Description": "Morningstar Balanced Real Return Fund B"
        },
        "AU60INT00052": {
           "Description": "Morningstar Balanced Real Return Fund Z"
        },
        "AU60INT00300": {
           "Description": "Morningstar Cash Fund - Class A"
        },
        "AU60INT00060": {
           "Description": "Morningstar Cash Z"
        },
        "AU60INT00565": {
           "Description": "Morningstar Conservative Fund - Class A"
        },
        "AU60INT00771": {
           "Description": "Morningstar Glb Prpty Secs (Hdg) Fd-Cl A"
        },
        "AU60INT00789": {
           "Description": "Morningstar Glb Prpty Secs (Hdg) Fd-Cl B"
        },
        "AU60INT00797": {
           "Description": "Morningstar Glb Prpty Secs (Hdg) Fd-Cl Z"
        },
        "AU60INT46238": {
           "Description": "Morningstar Global Shares Z"
        },
        "AU60INT00367": {
           "Description": "Morningstar Growth Fund - Class A"
        },
        "AU60INT00383": {
           "Description": "Morningstar Growth Real Return Fd - Cl A"
        },
        "AU60INT00102": {
           "Description": "Morningstar Growth Real Return Fd - Cl Z"
        },
        "AU60INT00391": {
           "Description": "Morningstar Growth Real Return Fund B"
        },
        "AU60ASK11989": {
           "Description": "Morningstar High Growth Fund - Class A"
        },
        "AU60INT00433": {
           "Description": "Morningstar High Growth Real Return Fd B"
        },
        "AU60INT00425": {
           "Description": "Morningstar High Growth Rl Ret Fd - Cl A"
        },
        "AU60INT00128": {
           "Description": "Morningstar High Growth Rl Ret Fd - Cl Z"
        },
        "AU60INT00821": {
           "Description": "Morningstar International Bonds Hdgd Z"
        },
        "AU60INT00169": {
           "Description": "Morningstar International Shares Hdgd Z"
        },
        "AU60INT00177": {
           "Description": "Morningstar International Shares Unhdg Z"
        },
        "AU0000058596": {
           "Description": "Morningstar International Shrs Actv ETF"
        },
        "AU60INT00805": {
           "Description": "Morningstar Intl Bds (Hdg) Fd - Cl A"
        },
        "AU60INT00508": {
           "Description": "Morningstar Intl Shrs (Hdg) Fd - Cl A"
        },
        "AU60INT00516": {
           "Description": "Morningstar Intl Shrs (Hdg) Fd - Cl B"
        },
        "AU60INT00524": {
           "Description": "Morningstar Intl Shrs (Unhdgd) Fd - Cl A"
        },
        "AU60INT00532": {
           "Description": "Morningstar Intl Shrs (Unhdgd) Fd - Cl B"
        },
        "AU60INT00326": {
           "Description": "Morningstar Moderate Fund - Class A"
        },
        "AU60INT00342": {
           "Description": "Morningstar Moderate Real Ret Fd - Cl A"
        },
        "AU60INT00086": {
           "Description": "Morningstar Moderate Real Ret Fd - Cl Z"
        },
        "AU60INT00359": {
           "Description": "Morningstar Moderate Real Return Fund B"
        },
        "AU60INT00409": {
           "Description": "Morningstar Multi Asset Rl Ret Fd - Cl A"
        },
        "AU60INT00417": {
           "Description": "Morningstar Multi Asset Rl Ret Fd - Cl B"
        },
        "AU60INT00110": {
           "Description": "Morningstar Multi Asset Rl Ret Fd - Cl Z"
        },
        "AU60ASK12110": {
           "Description": "Morningstar Multi-Asset All Growth Z"
        },
        "AU60ASK12144": {
           "Description": "Morningstar Multi-Asset Defensive Z"
        },
        "AU60PER06735": {
           "Description": "Morphic Global Opportunities"
        },
        "AU60MFM00014": {
           "Description": "MPG Retail Brands Property Trust"
        },
        "AU60MFM00030": {
           "Description": "MPG Seaford Meadows Property Trust"
        },
        "AU60BEG62186": {
           "Description": "Multi Asset Class A Moderate"
        },
        "AU60BEG87381": {
           "Description": "Multi Asset Class B Balanced"
        },
        "AU60BEG70536": {
           "Description": "Multi Asset Class C Growth"
        },
        "AU60BEG86359": {
           "Description": "Multi Strategy Alternative"
        },
        "AU60GSF98082": {
           "Description": "Munro Concentrated Global Growth A"
        },
        "AU60MUA00026": {
           "Description": "Munro Global Growth"
        },
        "AU60MUA46417": {
           "Description": "Munro Global Growth Founders Units"
        },
        "AU60PRM00012": {
           "Description": "Mutual 50 Leaders Australian Shares"
        },
        "AU60PRM00103": {
           "Description": "Mutual Cash Term Deposits & Bank Bills"
        },
        "AU60PRM00137": {
           "Description": "Mutual Cash Term Deposits & Bank Bills B"
        },
        "AU60PRM00145": {
           "Description": "Mutual Cash Term Deposits & Bank Bills C"
        },
        "AU60PRM82564": {
           "Description": "Mutual Credit"
        },
        "AU60PRM87985": {
           "Description": "Mutual High Yield"
        },
        "AU60PRM00152": {
           "Description": "Mutual Income Fund A"
        },
        "AU60AMP20867": {
           "Description": "MyNorth Dynamic Balanced"
        },
        "AU60IPA01824": {
           "Description": "MyNorth Index Balanced"
        },
        "AU60IPA01808": {
           "Description": "MyNorth Index Defensive"
        },
        "AU60IPA01832": {
           "Description": "MyNorth Index Growth"
        },
        "AU60IPA01840": {
           "Description": "MyNorth Index High Growth"
        },
        "AU60IPA01816": {
           "Description": "MyNorth Index Moderately Defensive"
        },
        "AU60AMP20875": {
           "Description": "MyNorth Retirement"
        },
        "AU60AMP62026": {
           "Description": "NAM Advantage Australian Share Income"
        },
        "AU60SLT21713": {
           "Description": "Nanuk New World"
        },
        "AU60NET00259": {
           "Description": "Netwealth Active 30/70 Conservative"
        },
        "AU60NET00069": {
           "Description": "Netwealth Active 50/50 Balanced"
        },
        "AU60NET00135": {
           "Description": "Netwealth Active 70/30 Growth"
        },
        "AU60NET00085": {
           "Description": "Netwealth Active 90/10 High Growth"
        },
        "AU60NET00234": {
           "Description": "Netwealth Australian Bond Index"
        },
        "AU60NET00010": {
           "Description": "Netwealth Australian Equities Index"
        },
        "AU60NET00101": {
           "Description": "Netwealth Australian Property Index"
        },
        "AU60NET57028": {
           "Description": "Netwealth Global Bond Index"
        },
        "AU60NET21198": {
           "Description": "Netwealth Hedged International Eqs Idx"
        },
        "AU60NET00028": {
           "Description": "Netwealth Index Opportunities Balanced"
        },
        "AU60NET00044": {
           "Description": "Netwealth Index Opportunities Cnsrv"
        },
        "AU60NET00275": {
           "Description": "Netwealth Index Opportunities Growth"
        },
        "AU60NET00093": {
           "Description": "Netwealth International Equities Index"
        },
        "AU60PLL00025": {
           "Description": "NewActon East Property Fund"
        },
        "AU60ETL27603": {
           "Description": "Newgate Real Estate and Infrastructure"
        },
        "AU60NCL28020": {
           "Description": "Newmark Hardware Trust"
        },
        "AU60NIK18541": {
           "Description": "Nikko AM ARK Global Disruptive Innovt"
        },
        "AU60TYN01040": {
           "Description": "Nikko AM Australian Bond"
        },
        "AU60TYN00406": {
           "Description": "Nikko AM Australian Share Concntr"
        },
        "AU60TYN00547": {
           "Description": "Nikko AM Australian Share Concntr LT"
        },
        "AU60TYN00380": {
           "Description": "Nikko AM Australian Share Income"
        },
        "AU60TYN00281": {
           "Description": "Nikko AM Australian Share W"
        },
        "AU60SUN01362": {
           "Description": "Nikko AM Balanced NEF"
        },
        "AU60SUN00232": {
           "Description": "Nikko AM Conservative NEF"
        },
        "AU60SUN00315": {
           "Description": "Nikko AM Global Share"
        },
        "AU60SUN00216": {
           "Description": "Nikko AM Growth NEF"
        },
        "AU60TGP00069": {
           "Description": "Nikko AM New Asia"
        },
        "AU60WFS81689": {
           "Description": "Nikko AM Wholesale Plus Aus Shr Inc Fd"
        },
        "AU60BTA05376": {
           "Description": "Nikko AM WS Plus Australian Share Fund"
        },
        "AU60INV14885": {
           "Description": "Ninety One Aust Fds Emerging Mkts Eq I"
        },
        "AU60INV42332": {
           "Description": "Ninety One Aust Fds Emerging Mkts Eq J"
        },
        "AU60IPA01675": {
           "Description": "North Guardian Balanced"
        },
        "AU60IPA01683": {
           "Description": "North Guardian Growth"
        },
        "AU60IPA01691": {
           "Description": "North Guardian Moderately Defensive"
        },
        "AU60NMM01131": {
           "Description": "North Index Balanced"
        },
        "AU60NMM01115": {
           "Description": "North Index Defensive"
        },
        "AU60NMM01149": {
           "Description": "North Index Growth"
        },
        "AU60NMM01156": {
           "Description": "North Index High Growth"
        },
        "AU60NMM01123": {
           "Description": "North Index Moderately Defensive"
        },
        "AU60IPA00685": {
           "Description": "North Multi Manager Active Defensive"
        },
        "AU60IPA00693": {
           "Description": "North Multi Manager Active Growth"
        },
        "AU60IPA00701": {
           "Description": "North Multi Manager Active High Growth"
        },
        "AU60IPA00719": {
           "Description": "North Multi Manager Active Moderately De"
        },
        "AU60IPA00677": {
           "Description": "North Multi Manager Balanced"
        },
        "AU60IPA00578": {
           "Description": "North Professional Alternative Balanced"
        },
        "AU60IPA00776": {
           "Description": "North Professional Balanced"
        },
        "AU60IPA01766": {
           "Description": "North Professional Conservative"
        },
        "AU60IPA00784": {
           "Description": "North Professional Growth"
        },
        "AU60IPA00792": {
           "Description": "North Professional High Growth"
        },
        "AU60IPA00800": {
           "Description": "North Professional Moderately Cnsrv"
        },
        "AU60IPA00750": {
           "Description": "North Select Income Generator"
        },
        "AU60NCP00012": {
           "Description": "Northcape Capital Global Emerg Mkts"
        },
        "AU60HOW00270": {
           "Description": "NovaPort Microcap"
        },
        "AU60HOW00163": {
           "Description": "NovaPort Smaller Companies"
        },
        "AU60HOW00171": {
           "Description": "NovaPort Smaller Companies Class B"
        },
        "AU60HOW00189": {
           "Description": "NovaPort Smaller Companies Class I"
        },
        "AU60SLT00642": {
           "Description": "NWQ Fiduciary Fund Direct"
        },
        "AU60SLT00634": {
           "Description": "NWQ Fiduciary Fund Indirect"
        },
        "AU60NWQ00018": {
           "Description": "NWQ Fiduciary Fund Wholesale A"
        },
        "AU60SLT00618": {
           "Description": "NWQ Fiduciary Fund Wholesale B"
        },
        "AU60NWQ86215": {
           "Description": "NWQ Global Markets Wholesale"
        },
        "AU60OPS00016": {
           "Description": "OC Dynamic Equity"
        },
        "AU60OPS00040": {
           "Description": "OC Micro-Cap"
        },
        "AU60OPS00024": {
           "Description": "OC Premium Small Companies"
        },
        "AU60OPS00115": {
           "Description": "Odey International Fund"
        },
        "AU60WHT00238": {
           "Description": "Omega Global Corporate Bond"
        },
        "AU60WHT00519": {
           "Description": "Omega Global Listed Infrastructure"
        },
        "AU60MMF04081": {
           "Description": "OnePath Arrowstreet Global Eq Hdg Tr EF"
        },
        "AU60MMF04214": {
           "Description": "OnePath Arrowstreet Global Eq Hdg Tr NEF"
        },
        "AU60MMF15335": {
           "Description": "OnePath OA FR IP-Altrinsic Glbl Equities"
        },
        "AU60MMF15756": {
           "Description": "OnePath OA FR IP-Antipodes Glbl (Lgonly)"
        },
        "AU60MMF14668": {
           "Description": "OnePath OA FR IP-ANZ Cash Advantage"
        },
        "AU60MMF18594": {
           "Description": "OnePath OA FR IP-ANZ Term Dep 12 Mths"
        },
        "AU60MMF18271": {
           "Description": "OnePath OA FR IP-ANZ Term Dep 3 Mths"
        },
        "AU60MMF18347": {
           "Description": "OnePath OA FR IP-ANZ Term Dep 6 Mths"
        },
        "AU60MMF18669": {
           "Description": "OnePath OA FR IP-ANZ Term Deposit 2 Yrs"
        },
        "AU60MMF18735": {
           "Description": "OnePath OA FR IP-ANZ Term Deposit 3 Yrs"
        },
        "AU60MMF18818": {
           "Description": "OnePath OA FR IP-ANZ Term Deposit 5 Ys"
        },
        "AU60MMF14700": {
           "Description": "OnePath OA FR IP-Arrowstreet Glb Eq Hdg"
        },
        "AU60MMF14684": {
           "Description": "OnePath OA FR IP-Ausbil Aus Emg Leaders"
        },
        "AU60MMF14791": {
           "Description": "OnePath OA FR IP-Bennelong Australian Eq"
        },
        "AU60MMF14858": {
           "Description": "OnePath OA FR IP-Bentham Global Income"
        },
        "AU60MMF14742": {
           "Description": "OnePath OA FR IP-BlackRock Div Growth"
        },
        "AU60MMF19436": {
           "Description": "OnePath OA FR IP-BlackRock Sci Aus Eq"
        },
        "AU60MMF14759": {
           "Description": "OnePath OA FR IP-BlackRock Sci Intl Eq"
        },
        "AU60MMF14726": {
           "Description": "OnePath OA FR IP-BlackRock Tact Gr"
        },
        "AU60MMF14833": {
           "Description": "OnePath OA FR IP-CFS Global Credit Inc"
        },
        "AU60MMF14874": {
           "Description": "OnePath OA FR IP-CFS Global Listed Infra"
        },
        "AU60MMF15046": {
           "Description": "OnePath OA FR IP-CFS Imputation"
        },
        "AU60MMF15178": {
           "Description": "OnePath OA FR IP-Fidelity Australian Eq"
        },
        "AU60MMF14882": {
           "Description": "OnePath OA FR IP-Greencape Broadcap"
        },
        "AU60MMF15327": {
           "Description": "OnePath OA FR IP-Investors Mutual Aus Sh"
        },
        "AU60MMF15343": {
           "Description": "OnePath OA FR IP-Janus Henderson Gl FITR"
        },
        "AU60MMF14734": {
           "Description": "OnePath OA FR IP-Kapstream Abs Ret Inc"
        },
        "AU60MMF15566": {
           "Description": "OnePath OA FR IP-Magellan Global"
        },
        "AU60MMF14809": {
           "Description": "OnePath OA FR IP-Merlon Australian Inc"
        },
        "AU60MMF15350": {
           "Description": "OnePath OA FR IP-MFS Global Equity"
        },
        "AU60MMF14866": {
           "Description": "OnePath OA FR IP-Nikko AM Aust Shares"
        },
        "AU60MMF14718": {
           "Description": "OnePath OA FR IP-OnePath Alts Gr"
        },
        "AU60MMF14981": {
           "Description": "OnePath OA FR IP-OP Active Growth"
        },
        "AU60MMF14999": {
           "Description": "OnePath OA FR IP-OP Australian Share"
        },
        "AU60MMF15004": {
           "Description": "OnePath OA FR IP-OP Balanced"
        },
        "AU60MMF15012": {
           "Description": "OnePath OA FR IP-OP Blue Chip Imput"
        },
        "AU60MMF15038": {
           "Description": "OnePath OA FR IP-OP Cash"
        },
        "AU60MMF15020": {
           "Description": "OnePath OA FR IP-OP Conservative"
        },
        "AU60MMF15053": {
           "Description": "OnePath OA FR IP-OP Div Fixed Interest"
        },
        "AU60MMF15061": {
           "Description": "OnePath OA FR IP-OP Dvrs Credit"
        },
        "AU60MMF15079": {
           "Description": "OnePath OA FR IP-OP Emerging Companies"
        },
        "AU60MMF15418": {
           "Description": "OnePath OA FR IP-OP Geared Aus Shrs Idx"
        },
        "AU60MMF15095": {
           "Description": "OnePath OA FR IP-OP Glb Prpty Secs Idx"
        },
        "AU60MMF14965": {
           "Description": "OnePath OA FR IP-OP Global Emerging Mkt"
        },
        "AU60MMF15111": {
           "Description": "OnePath OA FR IP-OP Global Share"
        },
        "AU60MMF15129": {
           "Description": "OnePath OA FR IP-OP High Growth"
        },
        "AU60MMF15152": {
           "Description": "OnePath OA FR IP-OP Managed Growth"
        },
        "AU60MMF15202": {
           "Description": "OnePath OA FR IP-OP Property Securities"
        },
        "AU60MMF15236": {
           "Description": "OnePath OA FR IP-OP Select Leaders"
        },
        "AU60MMF15293": {
           "Description": "OnePath OA FR IP-OP Sust Inv Aus Shares"
        },
        "AU60MMF15301": {
           "Description": "OnePath OA FR IP-OP Tax Effective Inc"
        },
        "AU60MMF15368": {
           "Description": "OnePath OA FR IP-Optimix Aus Fixed Int"
        },
        "AU60MMF15376": {
           "Description": "OnePath OA FR IP-Optimix Australian Shr"
        },
        "AU60MMF15384": {
           "Description": "OnePath OA FR IP-Optimix Balanced"
        },
        "AU60MMF15392": {
           "Description": "OnePath OA FR IP-Optimix Conservative"
        },
        "AU60MMF15426": {
           "Description": "OnePath OA FR IP-Optimix Gbl Emg Mkt Shr"
        },
        "AU60MMF15442": {
           "Description": "OnePath OA FR IP-Optimix Gbl Sm Co Shr"
        },
        "AU60MMF15434": {
           "Description": "OnePath OA FR IP-Optimix Global Share"
        },
        "AU60MMF15459": {
           "Description": "OnePath OA FR IP-Optimix Growth"
        },
        "AU60MMF15467": {
           "Description": "OnePath OA FR IP-Optimix High Growth"
        },
        "AU60MMF15475": {
           "Description": "OnePath OA FR IP-Optimix Moderate"
        },
        "AU60MMF15483": {
           "Description": "OnePath OA FR IP-Optimix Property Sec"
        },
        "AU60MMF14767": {
           "Description": "OnePath OA FR IP-Pendal Aus Shr"
        },
        "AU60MMF14783": {
           "Description": "OnePath OA FR IP-Pendal Core Hdg Global"
        },
        "AU60MMF14973": {
           "Description": "OnePath OA FR IP-Pendal Monthly Inc Plus"
        },
        "AU60MMF14775": {
           "Description": "OnePath OA FR IP-Pendal Smlr Coms"
        },
        "AU60MMF15533": {
           "Description": "OnePath OA FR IP-Perennial Value Shares"
        },
        "AU60MMF15194": {
           "Description": "OnePath OA FR IP-Perpetual Australian Sh"
        },
        "AU60MMF15541": {
           "Description": "OnePath OA FR IP-Perpetual Balanced Gr"
        },
        "AU60MMF15558": {
           "Description": "OnePath OA FR IP-Perpetual Cons Growth"
        },
        "AU60MMF14635": {
           "Description": "OnePath OA FR IP-Perpetual Ethical SRI"
        },
        "AU60MMF19287": {
           "Description": "OnePath OA FR IP-Platinum Asia"
        },
        "AU60MMF15574": {
           "Description": "OnePath OA FR IP-Platinum International"
        },
        "AU60MMF15590": {
           "Description": "OnePath OA FR IP-Rare Infrastructure Val"
        },
        "AU60MMF15616": {
           "Description": "OnePath OA FR IP-Schroder Australian Eq"
        },
        "AU60MMF15624": {
           "Description": "OnePath OA FR IP-Schroder Balanced"
        },
        "AU60MMF19311": {
           "Description": "OnePath OA FR IP-Schroder Fixed Income"
        },
        "AU60MMF14825": {
           "Description": "OnePath OA FR IP-Schroder Real Return"
        },
        "AU60MMF14841": {
           "Description": "OnePath OA FR IP-SG Hiscock Property"
        },
        "AU60MMF14643": {
           "Description": "OnePath OA FR IP-Stewart Invs WldWd Sust"
        },
        "AU60MMF15632": {
           "Description": "OnePath OA FR IP-T. Rowe Price Global Eq"
        },
        "AU60MMF14890": {
           "Description": "OnePath OA Fr IP-T.Rowe PriceDynaGlBd"
        },
        "AU60MMF15319": {
           "Description": "OnePath OA FR IP-UBS Balanced"
        },
        "AU60MMF15640": {
           "Description": "OnePath OA FR IP-UBS Defensive"
        },
        "AU60MMF15657": {
           "Description": "OnePath OA FR IP-UBS Div Fixed Income"
        },
        "AU60MMF15665": {
           "Description": "OnePath OA FR IP-Vanguard Aus Shr Index"
        },
        "AU60MMF15673": {
           "Description": "OnePath OA FR IP-Vanguard Balanced Index"
        },
        "AU60MMF15681": {
           "Description": "OnePath OA FR IP-Vanguard Cons Index"
        },
        "AU60MMF15715": {
           "Description": "OnePath OA FR IP-Vanguard Divers Bd Idx"
        },
        "AU60MMF15699": {
           "Description": "OnePath OA FR IP-Vanguard Growth Index"
        },
        "AU60MMF15707": {
           "Description": "OnePath OA FR IP-Vanguard High Gr Index"
        },
        "AU60MMF15723": {
           "Description": "OnePath OA FR IP-Vanguard Intl Index"
        },
        "AU60MMF15731": {
           "Description": "OnePath OA FR IP-Vanguard Intl Index H"
        },
        "AU60MMF15749": {
           "Description": "OnePath OA FR IP-Vanguard Prp Secs Index"
        },
        "AU60MMF19345": {
           "Description": "OnePath OA FR IP-Walter Scott Gbl Eq Hgd"
        },
        "AU60MMF09866": {
           "Description": "OnePath OA IP Geared Aus Shrs Idx Tr NEF"
        },
        "AU60MMF09858": {
           "Description": "OnePath OA IP Geared AusShr Id Tr EF/Sel"
        },
        "AU60MMF08942": {
           "Description": "OnePath OA IP- Kapstream Abs Ret Inc EF"
        },
        "AU60MMF10328": {
           "Description": "OnePath OA IP-Alternatives Growth EF"
        },
        "AU60MMF10401": {
           "Description": "OnePath OA IP-Alternatives Growth NE"
        },
        "AU60MMF14528": {
           "Description": "OnePath OA IP-Altrinsic Glbl Eq EF/Sel"
        },
        "AU60MMF14536": {
           "Description": "OnePath OA IP-Altrinsic Glbl Eq NE"
        },
        "AU60MMF02713": {
           "Description": "OnePath OA IP-Antpds Glbl (Lg only) NEF"
        },
        "AU60MMF02663": {
           "Description": "OnePath OA IP-Antpds Glbl(Lg only)EF/Sel"
        },
        "AU60MMF12613": {
           "Description": "OnePath OA IP-ANZ Cash Advantage EF"
        },
        "AU60MMF12621": {
           "Description": "OnePath OA IP-ANZ Cash Advantage NEF"
        },
        "AU60MMF10997": {
           "Description": "OnePath OA IP-ANZ Flexible Term Dep EF"
        },
        "AU60MMF10781": {
           "Description": "OnePath OA IP-ANZ Flexible Term Dep NE"
        },
        "AU60MMF18370": {
           "Description": "OnePath OA IP-ANZ Term Deposit 12 Months"
        },
        "AU60MMF18628": {
           "Description": "OnePath OA IP-ANZ Term Deposit 2 Years"
        },
        "AU60MMF18230": {
           "Description": "OnePath OA IP-ANZ Term Deposit 3 Months"
        },
        "AU60MMF18693": {
           "Description": "OnePath OA IP-ANZ Term Deposit 3 Years"
        },
        "AU60MMF18768": {
           "Description": "OnePath OA IP-ANZ Term Deposit 5 Years"
        },
        "AU60MMF18305": {
           "Description": "OnePath OA IP-ANZ Term Deposit 6 Months"
        },
        "AU60MMF08884": {
           "Description": "OnePath OA IP-Ausbil Aus Emg Leaders EF"
        },
        "AU60MMF08785": {
           "Description": "OnePath OA IP-Ausbil Aus Emg Leaders NE"
        },
        "AU60MMF13918": {
           "Description": "OnePath OA IP-Bennelong Australian Eq EF"
        },
        "AU60MMF13926": {
           "Description": "OnePath OA IP-Bennelong Australian Eq NE"
        },
        "AU60MMF08918": {
           "Description": "OnePath OA IP-Bentham Global Income EF"
        },
        "AU60MMF08819": {
           "Description": "OnePath OA IP-Bentham Global Income NE"
        },
        "AU60MMF07217": {
           "Description": "OnePath OA IP-BlackRock Sci Aus Eq EF"
        },
        "AU60MMF07225": {
           "Description": "OnePath OA IP-BlackRock Sci Aus Eq NE"
        },
        "AU60MMF05443": {
           "Description": "OnePath OA IP-BlackRock Sci Div Gr EF"
        },
        "AU60MMF05450": {
           "Description": "OnePath OA IP-BlackRock Sci Div Gr NE"
        },
        "AU60MMF05468": {
           "Description": "OnePath OA IP-BlackRock Sci Intl Eq EF"
        },
        "AU60MMF05476": {
           "Description": "OnePath OA IP-BlackRock Sci Intl Eq NE"
        },
        "AU60MMF03984": {
           "Description": "OnePath OA IP-BlackRock Tact Gr EF"
        },
        "AU60MMF04156": {
           "Description": "OnePath OA IP-BlackRock Tact Gr NE"
        },
        "AU60MMF10823": {
           "Description": "OnePath OA IP-BT Mly Inc Pl EF/Sel"
        },
        "AU60MMF08900": {
           "Description": "OnePath OA IP-CFS Global Credit Inc EF"
        },
        "AU60MMF08801": {
           "Description": "OnePath OA IP-CFS Global Credit Inc NE"
        },
        "AU60MMF03968": {
           "Description": "OnePath OA IP-CFS Imputation EF"
        },
        "AU60MMF04115": {
           "Description": "OnePath OA IP-CFS Imputation NE"
        },
        "AU60MMF11698": {
           "Description": "OnePath OA IP-Fidelity Australian Eq EF"
        },
        "AU60MMF11706": {
           "Description": "OnePath OA IP-Fidelity Australian Eq NE"
        },
        "AU60MMF05583": {
           "Description": "OnePath OA IP-IML Australian Share EF"
        },
        "AU60MMF05591": {
           "Description": "OnePath OA IP-IML Australian Share NE"
        },
        "AU60AJF00015": {
           "Description": "OnePath OA IP-ING AJ Mortgage"
        },
        "AU60HML00103": {
           "Description": "OnePath OA IP-ING Heine Property Sec"
        },
        "AU60MMF07290": {
           "Description": "OnePath OA IP-IOOF/Perennial Val Shr EF"
        },
        "AU60MMF07308": {
           "Description": "OnePath OA IP-IOOF/Perennial Val Shr NE"
        },
        "AU60MMF12027": {
           "Description": "OnePath OA IP-Janus Hdsn Gl FI TR NEF"
        },
        "AU60MMF12019": {
           "Description": "OnePath OA IP-Janus Hdsn GlFI TR EF/Sel"
        },
        "AU60MMF08835": {
           "Description": "OnePath OA IP-Kapstream Abs Ret Inc NE"
        },
        "AU60MMF04008": {
           "Description": "OnePath OA IP-Magellan Global Tr EF/Sel"
        },
        "AU60MMF04172": {
           "Description": "OnePath OA IP-Magellan Global Trust NEF"
        },
        "AU60MMF10815": {
           "Description": "OnePath OA IP-Merlon Australian Share EF"
        },
        "AU60MMF11029": {
           "Description": "OnePath OA IP-Merlon Australian Share NE"
        },
        "AU60MMF02622": {
           "Description": "OnePath OA IP-MFS Global Equity EF"
        },
        "AU60MMF02671": {
           "Description": "OnePath OA IP-MFS Global Equity NE"
        },
        "AU60MMF00147": {
           "Description": "OnePath OA IP-OP Active Growth EF"
        },
        "AU60MMF00766": {
           "Description": "OnePath OA IP-OP Active Growth NE"
        },
        "AU60MMF00709": {
           "Description": "OnePath OA IP-OP Australian Share NE"
        },
        "AU60MMF00691": {
           "Description": "OnePath OA IP-OP Australian Shr EF"
        },
        "AU60MMF00717": {
           "Description": "OnePath OA IP-OP Balanced EF"
        },
        "AU60MMF00725": {
           "Description": "OnePath OA IP-OP Balanced NE"
        },
        "AU60MMF00121": {
           "Description": "OnePath OA IP-OP Blue Chip Imput EF"
        },
        "AU60MMF00733": {
           "Description": "OnePath OA IP-OP Blue Chip Imput NE"
        },
        "AU60MMF05484": {
           "Description": "OnePath OA IP-OP Capital Stable EF"
        },
        "AU60MMF05492": {
           "Description": "OnePath OA IP-OP Capital Stable NE"
        },
        "AU60MMF03943": {
           "Description": "OnePath OA IP-OP Cash"
        },
        "AU60MMF05542": {
           "Description": "OnePath OA IP-OP Diversified Fix Int EF"
        },
        "AU60MMF05559": {
           "Description": "OnePath OA IP-OP Diversified Fix Int NE"
        },
        "AU60MMF05526": {
           "Description": "OnePath OA IP-OP Dvrs Crdt EF"
        },
        "AU60MMF05534": {
           "Description": "OnePath OA IP-OP Dvrs Crdt NE"
        },
        "AU60MMF00139": {
           "Description": "OnePath OA IP-OP Emerging Companies EF"
        },
        "AU60MMF00741": {
           "Description": "OnePath OA IP-OP Emerging Companies NE"
        },
        "AU60MMF10336": {
           "Description": "OnePath OA IP-OP Glb Prp Secs Idx EF/Sel"
        },
        "AU60MMF10419": {
           "Description": "OnePath OA IP-OP Glb Prpty Secs Idx NEF"
        },
        "AU60MMF02655": {
           "Description": "OnePath OA IP-OP Global Emg Mkt Shr EF"
        },
        "AU60MMF02705": {
           "Description": "OnePath OA IP-OP Global Emg Mkt Shr NE"
        },
        "AU60MMF01087": {
           "Description": "OnePath OA IP-OP Global Share EF"
        },
        "AU60MMF01111": {
           "Description": "OnePath OA IP-OP Global Share NE"
        },
        "AU60MMF03398": {
           "Description": "OnePath OA IP-OP High Growth EF"
        },
        "AU60MMF03885": {
           "Description": "OnePath OA IP-OP High Growth NE"
        },
        "AU60HML00111": {
           "Description": "OnePath OA IP-OP Income Plus EF"
        },
        "AU60MMF08827": {
           "Description": "OnePath OA IP-OP Income Plus NE"
        },
        "AU60MMF05609": {
           "Description": "OnePath OA IP-OP Managed Growth EF"
        },
        "AU60MMF05617": {
           "Description": "OnePath OA IP-OP Managed Growth NE"
        },
        "AU60HML00020": {
           "Description": "OnePath OA IP-OP Monthly Income"
        },
        "AU60MMF00063": {
           "Description": "OnePath OA IP-OP Mortgage Tr No. 2"
        },
        "AU60MMF01079": {
           "Description": "OnePath OA IP-OP Property Securities EF"
        },
        "AU60MMF01103": {
           "Description": "OnePath OA IP-OP Property Securities NE"
        },
        "AU60MMF05922": {
           "Description": "OnePath OA IP-OP Select Leaders EF"
        },
        "AU60MMF05930": {
           "Description": "OnePath OA IP-OP Select Leaders NE"
        },
        "AU60MMF05567": {
           "Description": "OnePath OA IP-OP Sust Inv Aus Share EF"
        },
        "AU60MMF05575": {
           "Description": "OnePath OA IP-OP Sust Inv Aus Share NE"
        },
        "AU60AJF00031": {
           "Description": "OnePath OA IP-OP Tax Effective Inc EF"
        },
        "AU60MMF01061": {
           "Description": "OnePath OA IP-OP Tax Effective Inc NE"
        },
        "AU60MMF05666": {
           "Description": "OnePath OA IP-Optimix Aus Fixed Int EF"
        },
        "AU60MMF05674": {
           "Description": "OnePath OA IP-Optimix Aus Fixed Int NE"
        },
        "AU60MMF05682": {
           "Description": "OnePath OA IP-Optimix Australian Shr EF"
        },
        "AU60MMF05690": {
           "Description": "OnePath OA IP-Optimix Australian Shr NE"
        },
        "AU60MMF05708": {
           "Description": "OnePath OA IP-Optimix Balanced EF"
        },
        "AU60MMF05716": {
           "Description": "OnePath OA IP-Optimix Balanced NE"
        },
        "AU60MMF05724": {
           "Description": "OnePath OA IP-Optimix Conservative EF"
        },
        "AU60MMF05732": {
           "Description": "OnePath OA IP-Optimix Conservative NE"
        },
        "AU60MMF05740": {
           "Description": "OnePath OA IP-Optimix Enhanced Cash EF"
        },
        "AU60MMF05757": {
           "Description": "OnePath OA IP-Optimix Enhanced Cash NE"
        },
        "AU60MMF05989": {
           "Description": "OnePath OA IP-Optimix Gbl Bal SmCo S2 EF"
        },
        "AU60MMF05997": {
           "Description": "OnePath OA IP-Optimix Gbl Bal SmCo S2 NE"
        },
        "AU60MMF10831": {
           "Description": "OnePath OA IP-Optimix Gbl Emg Mkt Shr EF"
        },
        "AU60MMF11045": {
           "Description": "OnePath OA IP-Optimix Gbl Emg Mkt Shr NE"
        },
        "AU60MMF05765": {
           "Description": "OnePath OA IP-Optimix Global Bal Shr EF"
        },
        "AU60MMF05773": {
           "Description": "OnePath OA IP-Optimix Global Bal Shr NE"
        },
        "AU60MMF05781": {
           "Description": "OnePath OA IP-Optimix Growth EF"
        },
        "AU60MMF05799": {
           "Description": "OnePath OA IP-Optimix Growth NE"
        },
        "AU60MMF05807": {
           "Description": "OnePath OA IP-Optimix High Growth EF"
        },
        "AU60MMF05815": {
           "Description": "OnePath OA IP-Optimix High Growth NE"
        },
        "AU60MMF05823": {
           "Description": "OnePath OA IP-Optimix Moderate EF"
        },
        "AU60MMF05831": {
           "Description": "OnePath OA IP-Optimix Moderate NE"
        },
        "AU60MMF05641": {
           "Description": "OnePath OA IP-Optimix Property Sec EF"
        },
        "AU60MMF05658": {
           "Description": "OnePath OA IP-Optimix Property Sec NE"
        },
        "AU60MMF11573": {
           "Description": "OnePath OA IP-Pendal Aus Shr EF"
        },
        "AU60MMF11581": {
           "Description": "OnePath OA IP-Pendal Aus Shr NE"
        },
        "AU60MMF04057": {
           "Description": "OnePath OA IP-Pendal Cor H Glb EF/Sel"
        },
        "AU60MMF04180": {
           "Description": "OnePath OA IP-Pendal Cor H Glb NEF"
        },
        "AU60MMF11037": {
           "Description": "OnePath OA IP-Pendal Mly Inc Pl NEF"
        },
        "AU60MMF07258": {
           "Description": "OnePath OA IP-Pendal Smlr Coms EF"
        },
        "AU60MMF07266": {
           "Description": "OnePath OA IP-Pendal Smlr Coms NE"
        },
        "AU60MMF03992": {
           "Description": "OnePath OA IP-Perpetual Australian Sh EF"
        },
        "AU60MMF04164": {
           "Description": "OnePath OA IP-Perpetual Australian Sh NE"
        },
        "AU60MMF05849": {
           "Description": "OnePath OA IP-Perpetual Balanced Gr EF"
        },
        "AU60MMF05856": {
           "Description": "OnePath OA IP-Perpetual Balanced Gr NE"
        },
        "AU60MMF05864": {
           "Description": "OnePath OA IP-Perpetual Cons Growth EF"
        },
        "AU60MMF05872": {
           "Description": "OnePath OA IP-Perpetual Cons Growth NE"
        },
        "AU60MMF10799": {
           "Description": "OnePath OA IP-Perpetual Ethcl SRI EF/Sel"
        },
        "AU60MMF11003": {
           "Description": "OnePath OA IP-Perpetual Ethical SRI NEF"
        },
        "AU60MMF19279": {
           "Description": "OnePath OA IP-Platinum Asia EF"
        },
        "AU60MMF19295": {
           "Description": "OnePath OA IP-Platinum Asia NE"
        },
        "AU60MMF05625": {
           "Description": "OnePath OA IP-Platinum International EF"
        },
        "AU60MMF05633": {
           "Description": "OnePath OA IP-Platinum International NE"
        },
        "AU60MMF12134": {
           "Description": "OnePath OA IP-Rare Infrastructure Val EF"
        },
        "AU60MMF12142": {
           "Description": "OnePath OA IP-Rare Infrastructure Val NE"
        },
        "AU60MMF19303": {
           "Description": "OnePath OA IP-Schroder Fixed Income EF"
        },
        "AU60MMF19329": {
           "Description": "OnePath OA IP-Schroder Fixed Income NE"
        },
        "AU60MMF05880": {
           "Description": "OnePath OA IP-Schroders Australian Eq EF"
        },
        "AU60MMF05898": {
           "Description": "OnePath OA IP-Schroders Australian Eq NE"
        },
        "AU60MMF05906": {
           "Description": "OnePath OA IP-Schroders Balanced EF"
        },
        "AU60MMF05914": {
           "Description": "OnePath OA IP-Schroders Balanced NE"
        },
        "AU60MMF05500": {
           "Description": "OnePath OA IP-SG Hiscock Property-EF/Sel"
        },
        "AU60MMF05518": {
           "Description": "OnePath OA IP-SG Hiscock Property-NEF"
        },
        "AU60MMF11011": {
           "Description": "OnePath OA IP-Stwt Invs WldWd Sust NEF"
        },
        "AU60MMF10807": {
           "Description": "OnePath OA IP-Stwt Invs WldWdSust EF/Sel"
        },
        "AU60MMF12258": {
           "Description": "OnePath OA IP-T Rowe Price Global Eq EF"
        },
        "AU60MMF12266": {
           "Description": "OnePath OA IP-T Rowe Price Global Eq NE"
        },
        "AU60MMF04065": {
           "Description": "OnePath OA IP-UBS Balanced EF"
        },
        "AU60MMF04198": {
           "Description": "OnePath OA IP-UBS Balanced NE"
        },
        "AU60MMF05948": {
           "Description": "OnePath OA IP-UBS Defensive EF"
        },
        "AU60MMF05955": {
           "Description": "OnePath OA IP-UBS Defensive NE"
        },
        "AU60MMF05963": {
           "Description": "OnePath OA IP-UBS Diversified Fix Inc EF"
        },
        "AU60MMF05971": {
           "Description": "OnePath OA IP-UBS Diversified Fix Inc NE"
        },
        "AU60MMF08959": {
           "Description": "OnePath OA IP-Vangard Aus Shr Index EF"
        },
        "AU60MMF08843": {
           "Description": "OnePath OA IP-Vangard Aus Shr Index NE"
        },
        "AU60MMF08967": {
           "Description": "OnePath OA IP-Vangard Intl Sh Index H EF"
        },
        "AU60MMF08850": {
           "Description": "OnePath OA IP-Vangard Intl Sh Index H NE"
        },
        "AU60MMF08975": {
           "Description": "OnePath OA IP-Vangard Prp Sec Index EF"
        },
        "AU60MMF08868": {
           "Description": "OnePath OA IP-Vangard Prp Sec Index NE"
        },
        "AU60MMF14163": {
           "Description": "OnePath OA IP-Vanguard Balanced Index EF"
        },
        "AU60MMF14171": {
           "Description": "OnePath OA IP-Vanguard Balanced Index NE"
        },
        "AU60MMF14049": {
           "Description": "OnePath OA IP-Vanguard Cons Index EF"
        },
        "AU60MMF14056": {
           "Description": "OnePath OA IP-Vanguard Cons Index NE"
        },
        "AU60MMF12381": {
           "Description": "OnePath OA IP-Vanguard Divers Bd Idx NEF"
        },
        "AU60MMF12373": {
           "Description": "OnePath OA IP-Vanguard Divs BdIdx EF/Sel"
        },
        "AU60MMF14288": {
           "Description": "OnePath OA IP-Vanguard Growth Index EF"
        },
        "AU60MMF14296": {
           "Description": "OnePath OA IP-Vanguard Growth Index NE"
        },
        "AU60MMF14403": {
           "Description": "OnePath OA IP-Vanguard High Gr Index EF"
        },
        "AU60MMF14411": {
           "Description": "OnePath OA IP-Vanguard High Gr Index NE"
        },
        "AU60MMF03950": {
           "Description": "OnePath OA IP-Vanguard Intl Shr Index EF"
        },
        "AU60MMF04107": {
           "Description": "OnePath OA IP-Vanguard Intl Shr Index NE"
        },
        "AU60MMF19337": {
           "Description": "OnePath OA IP-Walter Scott Gbl Eq H EF"
        },
        "AU60MMF19352": {
           "Description": "OnePath OA IP-Walter Scott Gbl Eq H NE"
        },
        "AU60MMF03976": {
           "Description": "OnePath Schroder Real Return Trust EF"
        },
        "AU60MMF04123": {
           "Description": "OnePath Schroder Real Return Trust NEF"
        },
        "AU60MMF07001": {
           "Description": "OnePath Tax Effective Income-WS"
        },
        "AU60MMF09908": {
           "Description": "OnePath WS Geared Aus Shrs Idx Tr B"
        },
        "AU60AJF08042": {
           "Description": "OnePath WS-Australian Share Trust"
        },
        "AU60AJF08026": {
           "Description": "OnePath WS-Balanced Trust"
        },
        "AU60MMF03406": {
           "Description": "OnePath WS-Blue Chip Imputation Trust"
        },
        "AU60MMF01145": {
           "Description": "OnePath WS-Capital Stable Trust"
        },
        "AU60ANZ02128": {
           "Description": "OnePath WS-Diversified Fixed Interest"
        },
        "AU60MMF07084": {
           "Description": "OnePath WS-Dvrs Crdt"
        },
        "AU60MMF01129": {
           "Description": "OnePath WS-Emerging Companies"
        },
        "AU60MMF03422": {
           "Description": "OnePath WS-High Growth Trust"
        },
        "AU60MMF01152": {
           "Description": "OnePath WS-Managed Growth"
        },
        "AU60MMF02754": {
           "Description": "OnePath WS-OP Global Emg Markets Shr"
        },
        "AU60AJF08034": {
           "Description": "OnePath WS-Property Securities Trust"
        },
        "AU60ANZ02169": {
           "Description": "OnePath WS-Select Leaders"
        },
        "AU60MMF03356": {
           "Description": "OnePath WS-Sustainable Inv Aus Shares"
        },
        "AU60OPH20934": {
           "Description": "Ophir Global Opportunities A"
        },
        "AU60OPH00019": {
           "Description": "Ophir Opportunities"
        },
        "AU60MMF09874": {
           "Description": "OptiMix Trust-Geared Aus Shrs Idx Tr EF"
        },
        "AU60MMF09882": {
           "Description": "OptiMix Trust-Geared Aus Shrs Idx Tr NEF"
        },
        "AU60LEF00336": {
           "Description": "Optimix Trusts-Australian Fixed Interest"
        },
        "AU60LEF00344": {
           "Description": "Optimix Trusts-Australian Fixed Intr NE"
        },
        "AU60LEF01185": {
           "Description": "Optimix Trusts-Australian Shares"
        },
        "AU60LEF01425": {
           "Description": "Optimix Trusts-Australian Shares NE"
        },
        "AU60LEF01193": {
           "Description": "Optimix Trusts-Balanced"
        },
        "AU60LEF01433": {
           "Description": "Optimix Trusts-Balanced NE"
        },
        "AU60LEF01201": {
           "Description": "Optimix Trusts-Conservative"
        },
        "AU60LEF01441": {
           "Description": "Optimix Trusts-Conservative NE"
        },
        "AU60LEF01219": {
           "Description": "Optimix Trusts-Enhanced Cash"
        },
        "AU60LEF01458": {
           "Description": "Optimix Trusts-Enhanced Cash NE"
        },
        "AU60MMF11458": {
           "Description": "Optimix Trusts-Global Emg Mkt Share EF"
        },
        "AU60MMF11466": {
           "Description": "Optimix Trusts-Global Emg Mkt Share NE"
        },
        "AU60LEF01243": {
           "Description": "Optimix Trusts-Global Share"
        },
        "AU60LEF01482": {
           "Description": "Optimix Trusts-Global Share NE"
        },
        "AU60LEF01748": {
           "Description": "Optimix Trusts-Global Smaller Co Share"
        },
        "AU60LEF01771": {
           "Description": "Optimix Trusts-Global Smaller Co Shr NE"
        },
        "AU60LEF01227": {
           "Description": "Optimix Trusts-Growth"
        },
        "AU60LEF01466": {
           "Description": "Optimix Trusts-Growth NE"
        },
        "AU60LEF01235": {
           "Description": "Optimix Trusts-High Growth"
        },
        "AU60LEF01474": {
           "Description": "Optimix Trusts-High Growth NE"
        },
        "AU60LEF00351": {
           "Description": "Optimix Trusts-Moderate"
        },
        "AU60LEF00369": {
           "Description": "Optimix Trusts-Moderate NE"
        },
        "AU60LEF01177": {
           "Description": "Optimix Trusts-Property Securities EF"
        },
        "AU60LEF01417": {
           "Description": "Optimix Trusts-Property Securities NE"
        },
        "AU60LEF01045": {
           "Description": "Optimix WS-Australian Fixed Int"
        },
        "AU60LEF00419": {
           "Description": "Optimix WS-Australian Fixed Interest A"
        },
        "AU60LEF00435": {
           "Description": "Optimix WS-Australian Share A"
        },
        "AU60LEF01029": {
           "Description": "Optimix WS-Australian Share No.2"
        },
        "AU60LEF01078": {
           "Description": "Optimix WS-Balanced"
        },
        "AU60LEF00443": {
           "Description": "Optimix WS-Balanced A"
        },
        "AU60LEF01086": {
           "Description": "Optimix WS-Conservative"
        },
        "AU60LEF00450": {
           "Description": "Optimix WS-Conservative A"
        },
        "AU60LEF01052": {
           "Description": "Optimix WS-Enhanced Cash"
        },
        "AU60LEF01037": {
           "Description": "Optimix WS-Global Share"
        },
        "AU60LEF00476": {
           "Description": "Optimix WS-Global Shares A"
        },
        "AU60LEF01730": {
           "Description": "Optimix WS-Global Smaller Companies"
        },
        "AU60LEF00484": {
           "Description": "Optimix WS-Global Smaller Companies A"
        },
        "AU60LEF01060": {
           "Description": "Optimix WS-Growth"
        },
        "AU60LEF00492": {
           "Description": "Optimix WS-Growth A"
        },
        "AU60LEF01003": {
           "Description": "Optimix WS-High Growth"
        },
        "AU60LEF00500": {
           "Description": "Optimix WS-High Growth A"
        },
        "AU60LEF00518": {
           "Description": "Optimix WS-Moderate A"
        },
        "AU60LEF00278": {
           "Description": "Optimix WS-Moderate Trust"
        },
        "AU60LEF01011": {
           "Description": "Optimix WS-Property Securities B"
        },
        "AU60LEF00427": {
           "Description": "Optimix WS-Property Trust A"
        },
        "AU60PCL50201": {
           "Description": "ORAH A"
        },
        "AU60ETL04628": {
           "Description": "Orbis Emerging Markets Equity"
        },
        "AU60ETL27611": {
           "Description": "Orbis Global Eq LE Fd (Aus Registered)"
        },
        "AU60ETL04636": {
           "Description": "Orbis Global Equity Fund Retail Class"
        },
        "AU60ORD00014": {
           "Description": "Ord Minnett Cash Management"
        },
        "AU60MAQ51431": {
           "Description": "P/E Global FX Alpha Fund"
        },
        "AU60CPL00016": {
           "Description": "Pacific First Mortgage Fund"
        },
        "AU60PAC00019": {
           "Description": "Packer & Co Investigator Trust"
        },
        "AU60WHT37248": {
           "Description": "Palisade's Unlisted Infrastructure Trust"
        },
        "AU60ETL04198": {
           "Description": "Pan-Tribal Global Equity Fund"
        },
        "AU60ETL80842": {
           "Description": "Paradice Australian Equities Fund"
        },
        "AU60ETL87722": {
           "Description": "Paradice Australian Mid Cap Fund B"
        },
        "AU60ETL07399": {
           "Description": "Paradice Australian Small Cap Fund B"
        },
        "AU60ETL27413": {
           "Description": "Paradice Global Emerging Markets"
        },
        "AU60ETL03653": {
           "Description": "Paradice Global Small Cap Fund"
        },
        "AU60ETL80966": {
           "Description": "Paradice Long Short Australian Equities"
        },
        "AU60PGF00019": {
           "Description": "Paragon Australian Long Short Fund"
        },
        "AU60ETL04313": {
           "Description": "Partners Group Global Multi-Asset"
        },
        "AU60ETL04800": {
           "Description": "Partners Group Global Real Estate Fd AUD"
        },
        "AU60ETL02770": {
           "Description": "Partners Group Global Value (AUD)"
        },
        "AU60ETL02762": {
           "Description": "Partners Group Global Value (AUD) W"
        },
        "AU60GSF00088": {
           "Description": "Payden Global Income Opportunities"
        },
        "AU60RFA08151": {
           "Description": "Pendal Active Balanced"
        },
        "AU60BTA08057": {
           "Description": "Pendal Active Conservative"
        },
        "AU60BTA01250": {
           "Description": "Pendal Active Growth"
        },
        "AU60BTA04882": {
           "Description": "Pendal Active High Growth"
        },
        "AU60BTA72293": {
           "Description": "Pendal Active Long Volatility"
        },
        "AU60BTA04874": {
           "Description": "Pendal Active Moderate"
        },
        "AU60BTA01003": {
           "Description": "Pendal American Share"
        },
        "AU60BTA00542": {
           "Description": "Pendal Asian Share"
        },
        "AU60BTA00559": {
           "Description": "Pendal Australian Equity"
        },
        "AU60WFS23939": {
           "Description": "Pendal Australian Fixed Interest MPS"
        },
        "AU60RFA00646": {
           "Description": "Pendal Australian Long/Short"
        },
        "AU60RFA08185": {
           "Description": "Pendal Australian Share"
        },
        "AU60BTA08065": {
           "Description": "Pendal Balanced Returns"
        },
        "AU60RFA00653": {
           "Description": "Pendal Cash Plus"
        },
        "AU60BTA05038": {
           "Description": "Pendal Concentrated Global Share"
        },
        "AU60RFA00315": {
           "Description": "Pendal Concentrated Global Share Hedged"
        },
        "AU60RFA08219": {
           "Description": "Pendal Concentrated Global Share No.2"
        },
        "AU60BTA00567": {
           "Description": "Pendal Concentrated Global Share No.3"
        },
        "AU60BTA03215": {
           "Description": "Pendal Dynamic Global Equity"
        },
        "AU60BTA86574": {
           "Description": "Pendal Dynamic Income"
        },
        "AU60BTA38161": {
           "Description": "Pendal Dynamic Income Trust"
        },
        "AU60WFS00077": {
           "Description": "Pendal Enhanced Australian Shares"
        },
        "AU60WFS03774": {
           "Description": "Pendal Enhanced Cash"
        },
        "AU60RFA01008": {
           "Description": "Pendal Enhanced Credit"
        },
        "AU60WFS00051": {
           "Description": "Pendal Enhanced Global Fixed Interest"
        },
        "AU60WFS03634": {
           "Description": "Pendal Enhanced Property Securities"
        },
        "AU60RFA00257": {
           "Description": "Pendal Ethical Share"
        },
        "AU60BTA01243": {
           "Description": "Pendal European Share"
        },
        "AU60RFA08136": {
           "Description": "Pendal Fixed Interest"
        },
        "AU60RFA00596": {
           "Description": "Pendal Focus Australian Share"
        },
        "AU60RFA01305": {
           "Description": "Pendal Geared Imputation"
        },
        "AU60BTA04197": {
           "Description": "Pendal Global Emerging Mkts Oppes – WS"
        },
        "AU60RFA00323": {
           "Description": "Pendal Global Fixed Interest"
        },
        "AU60RFA00513": {
           "Description": "Pendal Global Property Securities"
        },
        "AU60WFS00044": {
           "Description": "Pendal Global Share"
        },
        "AU60BTA01110": {
           "Description": "Pendal Government Bond"
        },
        "AU60BTA05053": {
           "Description": "Pendal High Alpha Fixed Income"
        },
        "AU60RFA01032": {
           "Description": "Pendal Imputation"
        },
        "AU60BTA01300": {
           "Description": "Pendal Japanese Share"
        },
        "AU60WFS02453": {
           "Description": "Pendal Managed Cash"
        },
        "AU60RFA00612": {
           "Description": "Pendal MicroCap Opportunities"
        },
        "AU60BTA03132": {
           "Description": "Pendal MidCap"
        },
        "AU60BTA03181": {
           "Description": "Pendal Monthly Income Plus"
        },
        "AU60PDL33833": {
           "Description": "Pendal Multi-Asset Target Return"
        },
        "AU60RFA08177": {
           "Description": "Pendal Property Investment"
        },
        "AU60BTA00617": {
           "Description": "Pendal Property Securities"
        },
        "AU60BTA04411": {
           "Description": "Pendal Pure Alpha Fixed Income"
        },
        "AU60RFA08193": {
           "Description": "Pendal Smaller Companies"
        },
        "AU60BTA04593": {
           "Description": "Pendal Stable Cash Plus"
        },
        "AU60BTA05079": {
           "Description": "Pendal Sustainable Aust Fixed Interest"
        },
        "AU60WFS02859": {
           "Description": "Pendal Sustainable Australian Share"
        },
        "AU60BTA01227": {
           "Description": "Pendal Sustainable Balanced"
        },
        "AU60RFA08110": {
           "Description": "Pendal Sustainable Conservative"
        },
        "AU60RFA01081": {
           "Description": "Pendal Total Return"
        },
        "AU60WFS08617": {
           "Description": "Pendal Wholesale Plus Active Balanced"
        },
        "AU60WFS08591": {
           "Description": "Pendal Wholesale Plus Active Cnsrv"
        },
        "AU60WFS08625": {
           "Description": "Pendal Wholesale Plus Active Growth"
        },
        "AU60WFS08633": {
           "Description": "Pendal Wholesale Plus Active High Growth"
        },
        "AU60WFS08609": {
           "Description": "Pendal Wholesale Plus Active Moderate"
        },
        "AU60BTA04767": {
           "Description": "Pendal Wholesale Plus Australian Share"
        },
        "AU60BTA05368": {
           "Description": "Pendal Wholesale Plus Core Global Share"
        },
        "AU60BTA05475": {
           "Description": "Pendal Wholesale Plus Fixed Interest"
        },
        "AU60BTA05509": {
           "Description": "Pendal Wholesale Plus Global EmMkts Opps"
        },
        "AU60BTA05418": {
           "Description": "Pendal Wholesale Plus Global Prpty Secs"
        },
        "AU60BTA05400": {
           "Description": "Pendal Wholesale Plus Property Secs"
        },
        "AU60PCL00057": {
           "Description": "Pengana Australian Equities Class A"
        },
        "AU60HHA00015": {
           "Description": "Pengana Australian Equities Income"
        },
        "AU60PER02700": {
           "Description": "Pengana Emerging Companies"
        },
        "AU60PCL00222": {
           "Description": "Pengana Global Small Companies"
        },
        "AU60HHA00205": {
           "Description": "Pengana High Conviction Equities"
        },
        "AU60PCL00263": {
           "Description": "Pengana International"
        },
        "AU60PCL96907": {
           "Description": "Pengana International D"
        },
        "AU60PCL12847": {
           "Description": "Pengana International E"
        },
        "AU60HOW00023": {
           "Description": "Pengana International Ethical"
        },
        "AU60HHA00023": {
           "Description": "Pengana International Ethical Opp"
        },
        "AU60PCL00271": {
           "Description": "Pengana International Managed Risk"
        },
        "AU60HHA00072": {
           "Description": "Pengana WHEB Sustainable Impact"
        },
        "AU60ETL79810": {
           "Description": "Pentalpha Income For Life Fund"
        },
        "AU60ETL07258": {
           "Description": "Pentalpha Income For Life Ordinary"
        },
        "AU60WPC84868": {
           "Description": "Perennial Private to Public Opps"
        },
        "AU60WPC56007": {
           "Description": "Perennial Smaller Companies Sust Fut Tr"
        },
        "AU60WPC67806": {
           "Description": "Perennial Value Active Plus Shares Trust"
        },
        "AU60AMP20842": {
           "Description": "Perennial Value Advantage Inc Wlth Dfndr"
        },
        "AU60IOF02006": {
           "Description": "Perennial Value Australian Shares Trust"
        },
        "AU60WPC74083": {
           "Description": "Perennial Value Emerging Companies Trust"
        },
        "AU60WPC17702": {
           "Description": "Perennial Value Future Leaders Trust"
        },
        "AU60WPC39821": {
           "Description": "Perennial Value Microcap Opportunities"
        },
        "AU60IOF00786": {
           "Description": "Perennial Value Shares for Income Trust"
        },
        "AU60IOF02063": {
           "Description": "Perennial Value Shares Wholesale Trust"
        },
        "AU60IOF02147": {
           "Description": "Perennial Value Smaller Companies Trust"
        },
        "AU60IOF02287": {
           "Description": "Perennial Value Wealth Defender Aust Shr"
        },
        "AU60PER02627": {
           "Description": "Perpetual Active Fixed Interest Fund"
        },
        "AU60PER80458": {
           "Description": "Perpetual Active Fixed Interest Fund A"
        },
        "AU60PER00134": {
           "Description": "Perpetual Bal Grth 2"
        },
        "AU60PER00019": {
           "Description": "Perpetual Cash Management"
        },
        "AU60PER03922": {
           "Description": "Perpetual Charitable & Commuity Investor"
        },
        "AU60PER05588": {
           "Description": "Perpetual Charitable Endowment"
        },
        "AU60PER02635": {
           "Description": "Perpetual Credit Income"
        },
        "AU60PER05562": {
           "Description": "Perpetual Diversified Real Return W"
        },
        "AU60PER61151": {
           "Description": "Perpetual Diversified Real Return Z"
        },
        "AU60PER17443": {
           "Description": "Perpetual Ethical SRI Credit"
        },
        "AU60PER02585": {
           "Description": "Perpetual Exact Market Cash"
        },
        "AU60PER15470": {
           "Description": "Perpetual Global Innovation Share"
        },
        "AU60PER07337": {
           "Description": "Perpetual Global Share Class A"
        },
        "AU60PER04375": {
           "Description": "Perpetual Growth Opportunities"
        },
        "AU60PER02650": {
           "Description": "Perpetual High Grade Treasury"
        },
        "AU60PER05620": {
           "Description": "Perpetual High Grade Treasury R"
        },
        "AU60PER04367": {
           "Description": "Perpetual Income Opportunities"
        },
        "AU60PER06693": {
           "Description": "Perpetual Pure Credit Alpha Fund W"
        },
        "AU60PER06685": {
           "Description": "Perpetual Pure Equity Alpha"
        },
        "AU60PER07048": {
           "Description": "Perpetual Pure Microcap Fund"
        },
        "AU60PER04391": {
           "Description": "Perpetual Pure Value Share"
        },
        "AU60PER06826": {
           "Description": "Perpetual Select Fixed Income Fd - PPSW"
        },
        "AU60PER02528": {
           "Description": "Perpetual Select Fixed Income Fund"
        },
        "AU60PER03971": {
           "Description": "Perpetual Select Geared Aust Sh Fd"
        },
        "AU60PER03989": {
           "Description": "Perpetual Select Geared High Growth Fd"
        },
        "AU60PER02510": {
           "Description": "Perpetual Select Growth Fund"
        },
        "AU60PER06842": {
           "Description": "Perpetual Select Inv Australian Share"
        },
        "AU60PER06792": {
           "Description": "Perpetual Select Inv Balanced"
        },
        "AU60PER06776": {
           "Description": "Perpetual Select Inv Conservative"
        },
        "AU60PER06784": {
           "Description": "Perpetual Select Inv Diversified"
        },
        "AU60PER06859": {
           "Description": "Perpetual Select Inv Geared AUS Share"
        },
        "AU60PER06818": {
           "Description": "Perpetual Select Inv Geared High Growth"
        },
        "AU60PER06800": {
           "Description": "Perpetual Select Inv Growth"
        },
        "AU60PER06867": {
           "Description": "Perpetual Select Inv International Share"
        },
        "AU60PER06834": {
           "Description": "Perpetual Select Inv Real Estate"
        },
        "AU60PER02551": {
           "Description": "Perpetual Select Investments Aus Share"
        },
        "AU60PER02494": {
           "Description": "Perpetual Select Investments Balanced"
        },
        "AU60PER02478": {
           "Description": "Perpetual Select Investments Conserv"
        },
        "AU60PER02486": {
           "Description": "Perpetual Select Investments Diversified"
        },
        "AU60PER02569": {
           "Description": "Perpetual Select Investments Int Share"
        },
        "AU60PER02544": {
           "Description": "Perpetual Select Investments Real Estate"
        },
        "AU60PER00720": {
           "Description": "Perpetual W Share Plus L/S"
        },
        "AU60PER02841": {
           "Description": "Perpetual WFI-Perpetual Diversified Inc"
        },
        "AU60PER00118": {
           "Description": "Perpetual WFI-Perpetual Indl Shr"
        },
        "AU60PER00316": {
           "Description": "Perpetual WFI-Perpetual Int Shr"
        },
        "AU60PER07386": {
           "Description": "Perpetual WFIA Dynamic Fxd Inc"
        },
        "AU60PER05422": {
           "Description": "Perpetual WFIA-AMP Capl Glbl Prpty Secs"
        },
        "AU60PER04508": {
           "Description": "Perpetual WFIA-Ausbil Aust Actv Eq"
        },
        "AU60PER04516": {
           "Description": "Perpetual WFIA-Ausbil Aust Emerg Ldrs"
        },
        "AU60PER04672": {
           "Description": "Perpetual WFIA-Bentham Global Income"
        },
        "AU60PER04557": {
           "Description": "Perpetual WFIA-BlackRock Scien Diver Gr"
        },
        "AU60PER04565": {
           "Description": "Perpetual WFIA-BlackRock Scien Divr Stb"
        },
        "AU60PER04599": {
           "Description": "Perpetual WFIA-BlackRock Tactical Growth"
        },
        "AU60PER04706": {
           "Description": "Perpetual WFIA-Fidelity Australian Eq"
        },
        "AU60PER04821": {
           "Description": "Perpetual WFIA-Investor Mutual Aus Sha"
        },
        "AU60PER04839": {
           "Description": "Perpetual WFIA-Investor Mutual Fut Ledr"
        },
        "AU60PER04847": {
           "Description": "Perpetual WFIA-Lazard Glbl Listed Infra"
        },
        "AU60PER04854": {
           "Description": "Perpetual WFIA-Macquarie Income Opps"
        },
        "AU60PER04722": {
           "Description": "Perpetual WFIA-Magellan Global"
        },
        "AU60PER05430": {
           "Description": "Perpetual WFIA-MFS Global Equity"
        },
        "AU60PER04805": {
           "Description": "Perpetual WFIA-Morningstar Growth Rl Rt"
        },
        "AU60PER04748": {
           "Description": "Perpetual WFIA-OnePath Divers Fixed Int"
        },
        "AU60PER04615": {
           "Description": "Perpetual WFIA-Pendal Australian Equity"
        },
        "AU60PER04631": {
           "Description": "Perpetual WFIA-Pendal Property Secs"
        },
        "AU60PER00290": {
           "Description": "Perpetual WFIA-Perpetual Aus Shr"
        },
        "AU60PER00365": {
           "Description": "Perpetual WFIA-Perpetual Bal Grth"
        },
        "AU60PER00407": {
           "Description": "Perpetual WFIA-Perpetual Cash"
        },
        "AU60PER04888": {
           "Description": "Perpetual WFIA-Perpetual Concntr Eq"
        },
        "AU60PER00308": {
           "Description": "Perpetual WFIA-Perpetual Conservative Gr"
        },
        "AU60PER04896": {
           "Description": "Perpetual WFIA-Perpetual Diversified Gr"
        },
        "AU60PER04904": {
           "Description": "Perpetual WFIA-Perpetual Diversified Inc"
        },
        "AU60PER07394": {
           "Description": "Perpetual WFIA-Perpetual Dvrsfd Real Rt"
        },
        "AU60PER04912": {
           "Description": "Perpetual WFIA-Perpetual Ethical SRI"
        },
        "AU60PER04920": {
           "Description": "Perpetual WFIA-Perpetual Geared Aus"
        },
        "AU60PER00282": {
           "Description": "Perpetual WFIA-Perpetual Indl Shr"
        },
        "AU60PER00381": {
           "Description": "Perpetual WFIA-Perpetual Int Shr"
        },
        "AU60PER04953": {
           "Description": "Perpetual WFIA-Perpetual Share Plus L/S"
        },
        "AU60PER00399": {
           "Description": "Perpetual WFIA-Perpetual Small Coms"
        },
        "AU60PER04961": {
           "Description": "Perpetual WFIA-Perpetual Split Gr"
        },
        "AU60PER04979": {
           "Description": "Perpetual WFIA-Platinum Asia"
        },
        "AU60PER04987": {
           "Description": "Perpetual WFIA-Platinum International"
        },
        "AU60PER05018": {
           "Description": "Perpetual WFIA-Schroder Australian Eq"
        },
        "AU60PER05026": {
           "Description": "Perpetual WFIA-Schroder Balanced"
        },
        "AU60PER04466": {
           "Description": "Perpetual WFIA-Schroder Fixed Income"
        },
        "AU60PER05042": {
           "Description": "Perpetual WFIA-T. Rowe Price Global Eq"
        },
        "AU60PER05075": {
           "Description": "Perpetual WFIA-Vanguard Aust FI Idx"
        },
        "AU60PER05463": {
           "Description": "Perpetual WFIA-Vanguard Australian Idx"
        },
        "AU60PER05083": {
           "Description": "Perpetual WFIA-Vanguard Intl Shr Idx Hdg"
        },
        "AU60PER05091": {
           "Description": "Perpetual WFIA-Vanguard Prpty Secs Idx"
        },
        "AU60PER00498": {
           "Description": "Perpetual Wholesale Australian"
        },
        "AU60PER00639": {
           "Description": "Perpetual Wholesale Balanced Growth"
        },
        "AU60PER01025": {
           "Description": "Perpetual Wholesale Concentrated Equity"
        },
        "AU60PER00779": {
           "Description": "Perpetual Wholesale Conservative Growth"
        },
        "AU60PER01140": {
           "Description": "Perpetual Wholesale Diversified Growth"
        },
        "AU60PER02601": {
           "Description": "Perpetual Wholesale Diversified Income"
        },
        "AU60PER05570": {
           "Description": "Perpetual Wholesale Dynamic Fixed Income"
        },
        "AU60PER01165": {
           "Description": "Perpetual Wholesale Ethical SRI"
        },
        "AU60PER00712": {
           "Description": "Perpetual Wholesale Geared Australian"
        },
        "AU60PER07527": {
           "Description": "Perpetual Wholesale Global Share Hdg"
        },
        "AU60PTC00027": {
           "Description": "Perpetual Wholesale Income Share Fund"
        },
        "AU60PER00464": {
           "Description": "Perpetual Wholesale Industrial"
        },
        "AU60PER00506": {
           "Description": "Perpetual Wholesale International Share"
        },
        "AU60WFS08658": {
           "Description": "Perpetual Wholesale Plus Global Share"
        },
        "AU60PER00480": {
           "Description": "Perpetual Wholesale Smaller Companies"
        },
        "AU60PER02593": {
           "Description": "Perpetual Wholesale Smaller Companies 2"
        },
        "AU60PER00662": {
           "Description": "Perpetual Wholesale Split Growth"
        },
        "AU60BTA04825": {
           "Description": "Perpetual WS Plus Australian"
        },
        "AU60BTA05566": {
           "Description": "Perpetual WS Plus Diversified Income"
        },
        "AU60PER02817": {
           "Description": "Perpetual's - Australian Share Fund"
        },
        "AU000PMGOLD8": {
           "Description": "Perth Mint Gold ETF"
        },
        "AU60MLC07745": {
           "Description": "PIC Wholesale 0/100 Portfolio"
        },
        "AU60MLC07794": {
           "Description": "PIC Wholesale 100/0 Portfolio"
        },
        "AU60MLC07802": {
           "Description": "PIC Wholesale 130/0 Portfolio"
        },
        "AU60MLC07752": {
           "Description": "PIC Wholesale 30/70 Portfolio"
        },
        "AU60MLC07760": {
           "Description": "PIC Wholesale 50/50 Portfolio"
        },
        "AU60MLC07778": {
           "Description": "PIC Wholesale 70/30 Portfolio"
        },
        "AU60MLC07786": {
           "Description": "PIC Wholesale 85/15 Portfolio"
        },
        "AU60MLC07687": {
           "Description": "PIC Wholesale Australian Share"
        },
        "AU60MLC08404": {
           "Description": "PIC Wholesale Diversified Debt"
        },
        "AU60MLC07885": {
           "Description": "PIC Wholesale Global Property"
        },
        "AU60MLC07711": {
           "Description": "PIC Wholesale Global Share"
        },
        "AU60MLC07810": {
           "Description": "PIC Wholesale Income Builder"
        },
        "AU60MLC09246": {
           "Description": "PIC Wholesale Inflation Plus - Conserv"
        },
        "AU60MLC09238": {
           "Description": "PIC Wholesale Inflation Plus - Moderate"
        },
        "AU60MLC07828": {
           "Description": "PIC Wholesale Inflation Plus-Assrtv Port"
        },
        "AU60MLC07836": {
           "Description": "PIC Wholesale Property Securities"
        },
        "AU60MLC44474": {
           "Description": "PIC WS Index Plus Balanced Portfolio"
        },
        "AU60MLC50687": {
           "Description": "PIC WS Index Plus Conservative Gr Port"
        },
        "AU60MLC82250": {
           "Description": "PIC WS Index Plus Growth Portfolio"
        },
        "AU60AMP20826": {
           "Description": "PIMCO Advantage Diversified Fixed Intst"
        },
        "AU60ETL01152": {
           "Description": "PIMCO Australian Bond Fund"
        },
        "AU60ETL00154": {
           "Description": "PIMCO Australian Bond W"
        },
        "AU60ETL01822": {
           "Description": "PIMCO Australian Short-Term Bond W"
        },
        "AU60ETL04453": {
           "Description": "PIMCO Capital Securities Wholesale"
        },
        "AU60ETL01160": {
           "Description": "PIMCO Diversified Fixed Interest Fund"
        },
        "AU60ETL00162": {
           "Description": "PIMCO Diversified Fixed Interest W"
        },
        "AU60ETL04065": {
           "Description": "PIMCO Dynamic Bond C"
        },
        "AU60ETL04040": {
           "Description": "PIMCO Dynamic Bond W"
        },
        "AU60PIC63960": {
           "Description": "PIMCO ESG Global Bond Fund - Wholesale"
        },
        "AU60ETL00188": {
           "Description": "PIMCO Global Bond W"
        },
        "AU60ETL01145": {
           "Description": "PIMCO Global Credit Fund"
        },
        "AU60ETL00196": {
           "Description": "PIMCO Global Credit W"
        },
        "AU60WFS37426": {
           "Description": "PIMCO Global Fixed Interest MPS"
        },
        "AU60ETL04586": {
           "Description": "PIMCO Income Wholesale"
        },
        "AU60ETL00501": {
           "Description": "PIMCO Target Return"
        },
        "AU60PIC57434": {
           "Description": "PIMCO TRENDS Managed Futures Stgy Seed"
        },
        "AU60PIC96598": {
           "Description": "PIMCO TRENDS Managed Futures Stgy Wholsl"
        },
        "AU60BTA04999": {
           "Description": "PIMCO WS Plus Diversified Fixed Interest"
        },
        "AU60BTA04981": {
           "Description": "PIMCO WS Plus Global Bond"
        },
        "AU60PER07311": {
           "Description": "PineBridge Global Dynamic Asset Alloc I"
        },
        "AU60PER07444": {
           "Description": "PineBridge Global Dynamic Asset Alloc R"
        },
        "AU0000055329": {
           "Description": "Pinnacle aShares Dynamic Cash ETF"
        },
        "AU0000054413": {
           "Description": "Pinnacle aShares Global Dynamic Inc ETF"
        },
        "AU60WHT65975": {
           "Description": "Pinnacle BNY Mellon Global Infras Yld"
        },
        "AU60PLA00044": {
           "Description": "Platinum Asia"
        },
        "AU00000PAXX0": {
           "Description": "Platinum Asia ETF"
        },
        "AU60PLA99996": {
           "Description": "Platinum Asia P"
        },
        "AU60PLA00010": {
           "Description": "Platinum European Fund"
        },
        "AU60PLA55766": {
           "Description": "Platinum European Fund P"
        },
        "AU60PLA00176": {
           "Description": "Platinum Global Fund"
        },
        "AU60PLA01000": {
           "Description": "Platinum International Brands Fund"
        },
        "AU60PLA20562": {
           "Description": "Platinum International Brands Fund P"
        },
        "AU00000PIXX3": {
           "Description": "Platinum International ETF"
        },
        "AU60PLA00028": {
           "Description": "Platinum International Fund"
        },
        "AU60PLA89682": {
           "Description": "Platinum International Fund P"
        },
        "AU60PLA00051": {
           "Description": "Platinum International Healthcare"
        },
        "AU60PLA69650": {
           "Description": "Platinum International HealthCare P"
        },
        "AU60PLA01018": {
           "Description": "Platinum International Technology"
        },
        "AU60PLA60444": {
           "Description": "Platinum International Technology P"
        },
        "AU60PLA00036": {
           "Description": "Platinum Japan"
        },
        "AU60PLA24457": {
           "Description": "Platinum Japan P"
        },
        "AU60PLA00069": {
           "Description": "Platinum Unhedged Fund"
        },
        "AU60PLA07791": {
           "Description": "Platinum Unhedged Fund P"
        },
        "AU60WHT00683": {
           "Description": "Plato Australian Shares Core"
        },
        "AU60WHT00394": {
           "Description": "Plato Australian Shares Income"
        },
        "AU60WHT00618": {
           "Description": "Plato Global Shares Income A"
        },
        "AU60WHT00626": {
           "Description": "Plato Global Shares Income F"
        },
        "AU60WHT69993": {
           "Description": "Plato Global Shares Income P"
        },
        "AU60AUS89927": {
           "Description": "Platypus Absolute Return Aus Eqs Ord"
        },
        "AU60AUS00304": {
           "Description": "Platypus Australian Equities - Wholesale"
        },
        "AU60AUS00361": {
           "Description": "Platypus Systematic Growth"
        },
        "AU60PMC00022": {
           "Description": "PM Capital Asian Companies"
        },
        "AU60PMC01012": {
           "Description": "PM Capital Australian Companies"
        },
        "AU60PMC01038": {
           "Description": "PM Capital Enhanced Yield"
        },
        "AU60PMC47007": {
           "Description": "PM Capital Enhanced Yield B"
        },
        "AU60PMC01004": {
           "Description": "PM Capital Global Companies"
        },
        "AU60MAQ28066": {
           "Description": "Polaris Global Equity (Hedged)"
        },
        "AU60MAQ08381": {
           "Description": "Polaris Global Equity Fund"
        },
        "AU60NUN00027": {
           "Description": "Pre Select Balanced"
        },
        "AU60NUN00019": {
           "Description": "Pre Select Conservative"
        },
        "AU60NUN00035": {
           "Description": "Pre Select Growth"
        },
        "AU60NUN00043": {
           "Description": "Pre Select High Growth"
        },
        "AU60MAQ06351": {
           "Description": "Premium Asia"
        },
        "AU60MAQ07821": {
           "Description": "Premium Asia Income"
        },
        "AU60MAQ05742": {
           "Description": "Premium Asia Property"
        },
        "AU60MAQ04414": {
           "Description": "Premium China"
        },
        "AU60PPL00265": {
           "Description": "Presima Global Property Sec Concentrated"
        },
        "AU60PVA00886": {
           "Description": "Prime Value Cash Plus Fund"
        },
        "AU60PVA00134": {
           "Description": "Prime Value Emerging Opportunities Fund"
        },
        "AU60PVA00019": {
           "Description": "Prime Value Growth"
        },
        "AU60PVA00118": {
           "Description": "Prime Value Growth B"
        },
        "AU60PVA00027": {
           "Description": "Prime Value Imputation"
        },
        "AU60PVA00225": {
           "Description": "Prime Value Imputation B"
        },
        "AU60PVA00050": {
           "Description": "Prime Value Opportunities"
        },
        "AU60PVA00068": {
           "Description": "Prime Value Opportunities B"
        },
        "AU60PGI00013": {
           "Description": "Principal Global Credit Opportunities"
        },
        "AU60PGI00021": {
           "Description": "Principal Global Property Securities"
        },
        "AU60AUS00668": {
           "Description": "Pro-D Balanced"
        },
        "AU60AUS00684": {
           "Description": "Pro-D Growth"
        },
        "AU60AUS00643": {
           "Description": "Pro-D High Growth"
        },
        "AU60SLT00204": {
           "Description": "Profile Accumulation Portfolio"
        },
        "AU60SLT00196": {
           "Description": "Profile Preservation Portfolio"
        },
        "AU60WAC36951": {
           "Description": "Progressive Global"
        },
        "AU60ETL04834": {
           "Description": "Pzena Emerging Markets Value Wholesale"
        },
        "AU60AAA00015": {
           "Description": "Quay Global Real Estate Fund"
        },
        "AU60BFL00209": {
           "Description": "Quay Global Real Estate-Daily Series"
        },
        "AU60QVL87813": {
           "Description": "QVG Long Short Investor"
        },
        "AU60QVG92045": {
           "Description": "QVG Opportunities Fund"
        },
        "AU60QTC00017": {
           "Description": "RACQ Bank Cash Investment Account"
        },
        "AU60AMP20701": {
           "Description": "RARE Advantage Infrastructure Value Hdg"
        },
        "AU60TGP00150": {
           "Description": "RARE Emerging Markets"
        },
        "AU60TGP00168": {
           "Description": "RARE Infrastructure Income"
        },
        "AU60SSB46473": {
           "Description": "RARE Infrastructure Income B"
        },
        "AU60TGP00085": {
           "Description": "RARE Infrastructure Value Hedged"
        },
        "AU60TGP00341": {
           "Description": "RARE Infrastructure Value Unhedged"
        },
        "AU60BTA05434": {
           "Description": "RARE Infrastructure WS Plus Value Hedged"
        },
        "AU60BTA05467": {
           "Description": "RARE Infrastructure WS Plus Value Unhdgd"
        },
        "AU60TGY00277": {
           "Description": "Ravenhall Office Trust"
        },
        "AU60RCG62202": {
           "Description": "RC Global Infra-Energy"
        },
        "AU60FSF09784": {
           "Description": "Realindex Aus Small Co-Class A"
        },
        "AU60FSF09768": {
           "Description": "Realindex Australian Share-Class A"
        },
        "AU60WFS21578": {
           "Description": "Realindex Australian Shares MPS"
        },
        "AU60FSF11012": {
           "Description": "Realindex Emerging Markets-Class A"
        },
        "AU60FSF09750": {
           "Description": "Realindex Global Share Hedged-Class A"
        },
        "AU60FSF09743": {
           "Description": "Realindex Global Share-Class A"
        },
        "AU60FSF17712": {
           "Description": "Realindex Global Shr Fd(Scr)-Class A"
        },
        "AU60FSF10162": {
           "Description": "Realindex W Australian Sml Comp"
        },
        "AU60FSF11970": {
           "Description": "Realindex W Emerging Markets"
        },
        "AU60FSF10188": {
           "Description": "Realindex W Global Share-Hedged"
        },
        "AU60FSF10154": {
           "Description": "Realindex Wholesale Australian Shr"
        },
        "AU60FSF10170": {
           "Description": "Realindex Wholesale Global Shr"
        },
        "AU60OMF86803": {
           "Description": "Realm Capital Series 2018-1"
        },
        "AU60OMF00010": {
           "Description": "Realm High Income"
        },
        "AU60OMF00093": {
           "Description": "Realm High Income - Wholesale"
        },
        "AU60OMF00184": {
           "Description": "Realm High Income Fund Adviser Class"
        },
        "AU60OMF13948": {
           "Description": "Realm High Income mFund Units"
        },
        "AU60OMF81606": {
           "Description": "Realm Short Term Income mFunds"
        },
        "AU60OMF37251": {
           "Description": "Realm Short Term Income Ordinary"
        },
        "AU60OMF58687": {
           "Description": "Realm Strategic Income Enduring"
        },
        "AU60AMT31510": {
           "Description": "Realm Strategic Wholesale Income A"
        },
        "AU60RSM33314": {
           "Description": "Realside Adelaide Office"
        },
        "AU60PPL00315": {
           "Description": "Redpoint Global Infrastructure Fund"
        },
        "AU60ETL76832": {
           "Description": "Redpoint Industrials"
        },
        "AU60RGL00039": {
           "Description": "Regal Asian Quantitative"
        },
        "AU60RGL00021": {
           "Description": "Regal Australian Long Short Equity"
        },
        "AU60RGL00047": {
           "Description": "Regal Australian Small Companies Fund"
        },
        "AU60RGL00062": {
           "Description": "Regal Emerging Companies"
        },
        "AU60RGL10731": {
           "Description": "Regal Emerging Companies Fund II"
        },
        "AU60RGL24328": {
           "Description": "Regal Emerging Companies III"
        },
        "AU60RGL98736": {
           "Description": "Regal Emerging Companies III 2019-11 Ser"
        },
        "AU60RGL69489": {
           "Description": "Regal Emerging Companies III 2019-12 Ser"
        },
        "AU60RGL51776": {
           "Description": "Regal Global Equity Income"
        },
        "AU60AMR00063": {
           "Description": "Regal Long Short Australian Equity"
        },
        "AU60SLT00543": {
           "Description": "Reitway Global Property Portfolio"
        },
        "AU60SLT00576": {
           "Description": "Reitway Global Property Portfolio - Inst"
        },
        "AU60IOF00448": {
           "Description": "Resolution Capital Core Plus Prp Sec II"
        },
        "AU60IOF01842": {
           "Description": "Resolution Capital Glbl Ppty Secs UH SII"
        },
        "AU60WHT00154": {
           "Description": "Resolution Capital Global Property Secs"
        },
        "AU60WHT00246": {
           "Description": "Resolution Capital Global Prp Secs (WS)"
        },
        "AU60IOF00810": {
           "Description": "Resolution Capital Global Prpt Secs II"
        },
        "AU60WHT00147": {
           "Description": "Resolution Capital Real Assets"
        },
        "AU60CHN79344": {
           "Description": "Revolution Private Debt I"
        },
        "AU60CHN37961": {
           "Description": "Revolution Private Debt II"
        },
        "AU60CHN50709": {
           "Description": "Revolution Wholesale Private Debt II A"
        },
        "AU60CHN28689": {
           "Description": "Revolution Wholesale Private Debt II B"
        },
        "AU60WFS22345": {
           "Description": "River and Mercantile Global Equity MPS"
        },
        "AU60PIM11158": {
           "Description": "Rivkin Australian Equity"
        },
        "AU60PIM38318": {
           "Description": "Rivkin Global Equity"
        },
        "AU60ETL03810": {
           "Description": "Robeco Emerging Conservative Equity AUD"
        },
        "AU60ETL76105": {
           "Description": "Robeco Glb DM Multi-Fac Eqs Alpha AUD"
        },
        "AU60ETL63186": {
           "Description": "Robeco Glb DM Multi-Fac Eqs Alpha AUDH"
        },
        "AU60ETL38568": {
           "Description": "Robeco Global DM Conservative Eqs (AUD)"
        },
        "AU60ETL12068": {
           "Description": "Robeco Global DM Conservative Eqs AUD H"
        },
        "AU60RIM00462": {
           "Description": "Russell After-Tax Aus Shr (SuperInvs) A"
        },
        "AU60RIM00371": {
           "Description": "Russell Aus Cash Enhanced Fund Class A"
        },
        "AU60RIM00298": {
           "Description": "Russell Aust Opportunities Class A"
        },
        "AU60RIM00058": {
           "Description": "Russell Australian Bond A"
        },
        "AU60RIM00454": {
           "Description": "Russell Australian Bond Income"
        },
        "AU60RIM00413": {
           "Description": "Russell Australian Cash A"
        },
        "AU60RIM00066": {
           "Description": "Russell Australian Share A"
        },
        "AU60RIM00157": {
           "Description": "Russell Australian Shares C"
        },
        "AU60RIM00017": {
           "Description": "Russell Balanced A"
        },
        "AU60RIM00116": {
           "Description": "Russell Balanced Class C"
        },
        "AU60RIM00025": {
           "Description": "Russell Conservative A"
        },
        "AU60RIM00124": {
           "Description": "Russell Conservative C"
        },
        "AU60RIM00033": {
           "Description": "Russell Diversified 50 A"
        },
        "AU60RIM00132": {
           "Description": "Russell Diversified 50 C"
        },
        "AU60RIM00389": {
           "Description": "Russell Emerging Markets Fund Class A"
        },
        "AU60RIM00769": {
           "Description": "Russell Emerging Markets Fund Class B"
        },
        "AU60RIM00801": {
           "Description": "Russell Global Bond B"
        },
        "AU60RIM00421": {
           "Description": "Russell Global Listed Infr $A Hedged"
        },
        "AU60RIM00397": {
           "Description": "Russell Global Opportunities $A Hedged"
        },
        "AU60RIM00736": {
           "Description": "Russell Global Opportunities $NZ Hdg A"
        },
        "AU60RIM00751": {
           "Description": "Russell Global Opportunities $NZ Hdg B"
        },
        "AU60RIM00322": {
           "Description": "Russell Global Opportunities A"
        },
        "AU60RIM00744": {
           "Description": "Russell Global Opportunities B"
        },
        "AU60RIM00041": {
           "Description": "Russell Growth A"
        },
        "AU60RIM00140": {
           "Description": "Russell Growth C"
        },
        "AU60RIM00348": {
           "Description": "Russell High Growth A"
        },
        "AU60RIM00306": {
           "Description": "Russell High Growth C"
        },
        "AU60RIM00074": {
           "Description": "Russell International Bond $A Hedged A"
        },
        "AU60RIM00082": {
           "Description": "Russell International Shares A"
        },
        "AU60RIM00165": {
           "Description": "Russell International Shares C"
        },
        "AU60RIM00090": {
           "Description": "Russell International Shares Hedged A"
        },
        "AU60RIM00173": {
           "Description": "Russell International Shr Hedged Class C"
        },
        "AU60RIM00314": {
           "Description": "Russell Intl Property Secs Hedged A"
        },
        "AU000000RGB2": {
           "Description": "Russell Inv Australian Government Bd ETF"
        },
        "AU00000RARI9": {
           "Description": "Russell Inv Australian Rspnb Inv ETF"
        },
        "AU000000RCB1": {
           "Description": "Russell Inv Australian Select CorpBd ETF"
        },
        "AU000000RSM4": {
           "Description": "Russell Inv Australian Semi-Govt Bd ETF"
        },
        "AU000000RDV7": {
           "Description": "Russell Inv High Dividend Aus Shrs ETF"
        },
        "AU60RIM00983": {
           "Description": "Russell Inv Multi-Asset Growth Strat A"
        },
        "AU60RIM00868": {
           "Description": "Russell Inv Multi-Asset Growth Strat Ret"
        },
        "AU60RIM00876": {
           "Description": "Russell Inv Multi-Asset Growth StratPlus"
        },
        "AU60RIM00892": {
           "Description": "Russell Inv Multi-Asset Income Strategy"
        },
        "AU60RIM46754": {
           "Description": "Russell Invmts Glb Lstd Infras $NZ Hdg B"
        },
        "AU60RIM86651": {
           "Description": "Russell Invmts Low Carbon Glb Shrs A"
        },
        "AU60RIM00249": {
           "Description": "Russell Portfolio Series Balanced A"
        },
        "AU60RIM00272": {
           "Description": "Russell Portfolio Series Balanced B"
        },
        "AU60RIM00231": {
           "Description": "Russell Portfolio Series Conservative A"
        },
        "AU60RIM00264": {
           "Description": "Russell Portfolio Series Conservative B"
        },
        "AU60RIM00256": {
           "Description": "Russell Portfolio Series Growth A"
        },
        "AU60RIM00280": {
           "Description": "Russell Portfolio Series Growth B"
        },
        "AU60WFS16677": {
           "Description": "Russell Wholesale Plus Emerging Markets"
        },
        "AU60STL00097": {
           "Description": "Sandhurst BMF-Bendigo Balanced"
        },
        "AU60STL00089": {
           "Description": "Sandhurst BMF-Bendigo Conservative"
        },
        "AU60STL00105": {
           "Description": "Sandhurst BMF-Bendigo Growth"
        },
        "AU60STL00113": {
           "Description": "Sandhurst BMF-Sandhurst Future Leaders"
        },
        "AU60STL01004": {
           "Description": "Sandhurst BMF-Sandhurst Ind Share"
        },
        "AU60STL00014": {
           "Description": "Sandhurst Cash Common Fund"
        },
        "AU60STL01012": {
           "Description": "Sandhurst IML Industrial Share"
        },
        "AU60STL00022": {
           "Description": "Sandhurst Select Mortgage"
        },
        "AU60STL00279": {
           "Description": "Sandhurst Strategic Income A"
        },
        "AU60STL00444": {
           "Description": "Sandhurst Strategic Income B"
        },
        "AU60FHT00100": {
           "Description": "Sandon Capital Activist"
        },
        "AU60OMF81853": {
           "Description": "Saville Capital Emerging Companies"
        },
        "AU0000044810": {
           "Description": "Schroder Absolute Return Income ETF"
        },
        "AU60SCH00240": {
           "Description": "Schroder Absolute Return Income Fund -PC"
        },
        "AU60SCH01032": {
           "Description": "Schroder Absolute Return Income Fund -WC"
        },
        "AU60SCH35683": {
           "Description": "Schroder Absolute Return Income Fund –IC"
        },
        "AU60AMP56838": {
           "Description": "Schroder Advantage Australian Equity Fd"
        },
        "AU60AMP76356": {
           "Description": "Schroder Advantage Fixed Income Fund"
        },
        "AU60SCH00067": {
           "Description": "Schroder Asia Pacific Fund - WC"
        },
        "AU60SCH00026": {
           "Description": "Schroder Australian Equity Fund - PC"
        },
        "AU60SCH00976": {
           "Description": "Schroder Emerging Mkt Sustainable Fnd-WC"
        },
        "AU60SCH00356": {
           "Description": "Schroder Equity Opportunities Fund - WC"
        },
        "AU60SCH57380": {
           "Description": "Schroder Equity Opportunities Fund – PC"
        },
        "AU60SCH00166": {
           "Description": "Schroder Fixed Income Fund - PC"
        },
        "AU60SCH00281": {
           "Description": "Schroder Fixed Income Fund - Wholesale"
        },
        "AU60SCH00489": {
           "Description": "Schroder Global Core Fund - IC"
        },
        "AU60SCH00034": {
           "Description": "Schroder Global Core Fund - WC"
        },
        "AU60SCH00349": {
           "Description": "Schroder Global Emerging Markets Fnd -WC"
        },
        "AU60SCH47571": {
           "Description": "Schroder Global Recovery Fund - PC"
        },
        "AU60SCH00950": {
           "Description": "Schroder Global Recovery Fund - WC"
        },
        "AU60SCH10181": {
           "Description": "Schroder Global Sustainable Eq(Hgd) - IC"
        },
        "AU60SCH00513": {
           "Description": "Schroder Global Sustainable Eq(Hgd) - WC"
        },
        "AU60SCH00406": {
           "Description": "Schroder Global Sustainable Equity - WC"
        },
        "AU60SCH00323": {
           "Description": "Schroder Global Value Fund (Hedged) - WC"
        },
        "AU60SCH00307": {
           "Description": "Schroder Global Value Fund - WC"
        },
        "AU60SCH00968": {
           "Description": "Schroder Real Return CPI Plus 3.5% - WC"
        },
        "AU60SCH00836": {
           "Description": "Schroder Real Return CPI Plus 5% Fd -CC"
        },
        "AU60SCH00398": {
           "Description": "Schroder Real Return CPI Plus 5% Fnd -PC"
        },
        "AU60SCH00471": {
           "Description": "Schroder Real Return CPI Plus 5% Fnd -WC"
        },
        "AU00000GROW4": {
           "Description": "Schroder Real Return ETF"
        },
        "AU60SCH00380": {
           "Description": "Schroder Specialist Private Equity"
        },
        "AU60SCH00109": {
           "Description": "Schroder Strategic Growth - PC"
        },
        "AU60SCH01024": {
           "Description": "Schroder Strategic Growth - WC"
        },
        "AU60SCH01016": {
           "Description": "Schroder WS Australian Equity Fund - WC"
        },
        "AU60BTA04833": {
           "Description": "Schroder WS Plus Australian Equity"
        },
        "AU60BTA05459": {
           "Description": "Schroder WS Plus Fixed income"
        },
        "AU60WFS08666": {
           "Description": "Schroder WS Plus Real Return CPI Plus 5%"
        },
        "AU60PTC65095": {
           "Description": "Sculptor (AU) Global Multi-Strategy"
        },
        "AU60DDH00026": {
           "Description": "Selector Australian Equities"
        },
        "AU60SEL04612": {
           "Description": "Selector High Conviction Equity A"
        },
        "AU0000058588": {
           "Description": "SelfWealth SMSF Leaders ETF"
        },
        "AU60PAT58789": {
           "Description": "Sestante Global Macro Fund"
        },
        "AU60CSA01151": {
           "Description": "SG Hiscock Professional Property"
        },
        "AU60CRS00074": {
           "Description": "SG Hiscock Property"
        },
        "AU60HBC00089": {
           "Description": "SG Hiscock Property Opportunities"
        },
        "AU60WAR00054": {
           "Description": "SG Hiscock Property Securities Closed"
        },
        "AU60ETL03836": {
           "Description": "SGH Australia Plus"
        },
        "AU60ETL01186": {
           "Description": "SGH Emerging Companies"
        },
        "AU60ETL00626": {
           "Description": "SGH ICE"
        },
        "AU60ETL03745": {
           "Description": "SGH ICE Professional Investor"
        },
        "AU60ETL03943": {
           "Description": "SGH LaSalle Concentrated Global Property"
        },
        "AU60ETL00055": {
           "Description": "SGH LaSalle Global Listed Property Secs"
        },
        "AU60ETL01194": {
           "Description": "SGH Property Income"
        },
        "AU60ETL03760": {
           "Description": "SGH Property Income Professional Inv"
        },
        "AU60ETL00428": {
           "Description": "SGH20"
        },
        "AU60ETL03737": {
           "Description": "SGH20 Professional Investor"
        },
        "AU60SKY90058": {
           "Description": "Skyring Fixed Income"
        },
        "AU60ASC00039": {
           "Description": "Smallco Broadcap"
        },
        "AU60ASC00013": {
           "Description": "Smallco Investment"
        },
        "AU60SLT00527": {
           "Description": "Smarter Money Higher Income Assisted Inv"
        },
        "AU60SLT00519": {
           "Description": "Smarter Money Higher Income Direct Inv"
        },
        "AU60SLT71411": {
           "Description": "Smarter Money Higher Income Instl A"
        },
        "AU60CRE00157": {
           "Description": "Smarter Money Institutional Investor"
        },
        "AU60SLT25623": {
           "Description": "Smarter Money Long-Short Credit"
        },
        "AU60SLT34583": {
           "Description": "Smarter Money Long-Short Credit Instl"
        },
        "AU60CRE00140": {
           "Description": "Smarter Money Platform Investor"
        },
        "NZAPAE0002S1": {
           "Description": "Smartshares Asia Pacific"
        },
        "NZASDE0001S1": {
           "Description": "Smartshares Aus Dividend"
        },
        "NZASFE0001S6": {
           "Description": "Smartshares Aus Financials"
        },
        "NZMZYE0001S7": {
           "Description": "Smartshares Aus Mid Cap"
        },
        "NZASPE0001S5": {
           "Description": "Smartshares Aus Property"
        },
        "NZASRE0001S1": {
           "Description": "Smartshares Aus Resources"
        },
        "NZOZYE0001S3": {
           "Description": "Smartshares Aus Top 20"
        },
        "NZBOTE0008S9": {
           "Description": "Smartshares Automation and Robotics ETF"
        },
        "NZEMFE0001S1": {
           "Description": "Smartshares Emerging Markets"
        },
        "NZEMGE0007S6": {
           "Description": "Smartshares Emerging Markets Eqs ESG ETF"
        },
        "NZEUFE0001S4": {
           "Description": "Smartshares Europe"
        },
        "NZEUGE0007S9": {
           "Description": "Smartshares Europe Equities ESG ETF"
        },
        "NZAGGE0006S8": {
           "Description": "Smartshares Global Aggregate Bond ETF"
        },
        "NZGBFE0001S9": {
           "Description": "Smartshares Global Bond"
        },
        "NZESGE0008S1": {
           "Description": "Smartshares Global Equities ESG ETF"
        },
        "NZLIVE0008S6": {
           "Description": "Smartshares Healthcare Innovation ETF"
        },
        "NZJPNE0009S0": {
           "Description": "Smartshares Japan Equities ESG ETF"
        },
        "NZNZBE0001S3": {
           "Description": "Smartshares NZ Bond"
        },
        "NZNZCE0001S1": {
           "Description": "Smartshares NZ Cash"
        },
        "NZDIVE0001S8": {
           "Description": "Smartshares NZ Dividend"
        },
        "NZMDZE0002S9": {
           "Description": "Smartshares NZ Mid Cap"
        },
        "NZNPFE0001S5": {
           "Description": "Smartshares NZ Property"
        },
        "NZTNZE0002S3": {
           "Description": "Smartshares NZ Top 10"
        },
        "NZFNZE0002S2": {
           "Description": "Smartshares NZ Top 50"
        },
        "NZTWFE0001S8": {
           "Description": "Smartshares Total World"
        },
        "NZUSFE0001S4": {
           "Description": "Smartshares US 500"
        },
        "NZUSAE0009S8": {
           "Description": "Smartshares US Equities ESG ETF"
        },
        "NZUSGE0001S2": {
           "Description": "Smartshares US Large Growth"
        },
        "NZUSVE0001S1": {
           "Description": "Smartshares US Large Value"
        },
        "NZUSME0001S0": {
           "Description": "Smartshares US Mid Cap"
        },
        "NZUSSE0001S7": {
           "Description": "Smartshares US Small Cap"
        },
        "AU60WHT25896": {
           "Description": "Solaris Australian Equity Income"
        },
        "AU60WHT38592": {
           "Description": "Solaris Australian Equity Long Short Fd"
        },
        "AU60WHT00097": {
           "Description": "Solaris Core Australian Equity Inst"
        },
        "AU60WFS44877": {
           "Description": "Solaris Core Australian Equity MPS"
        },
        "AU60SOL00015": {
           "Description": "Solaris Core Australian Equity PA"
        },
        "AU60WHT00170": {
           "Description": "Solaris Core Australian Equity PFO"
        },
        "AU60WHT00121": {
           "Description": "Solaris Core Australian Equity Retail"
        },
        "AU60WHT00105": {
           "Description": "Solaris High Alpha Australian Eq Inst"
        },
        "AU60WHT00162": {
           "Description": "Solaris High Alpha Australian Eq Retail"
        },
        "AU60ETL03471": {
           "Description": "Somerset Emerging Markets Dividend Gr"
        },
        "AU00000DJRE9": {
           "Description": "SPDR® Dow Jones Global Real Estate ETF"
        },
        "AU000000SYI8": {
           "Description": "SPDR® MSCI Australia Sel Hi Div Yld ETF"
        },
        "AU00000QMIX4": {
           "Description": "SPDR® MSCI World Quality Mix ETF"
        },
        "AU000000SPY3": {
           "Description": "SPDR® S&P 500 ETF"
        },
        "AU00000WEMG6": {
           "Description": "SPDR® S&P Emerging Markets ETF"
        },
        "AU00000WDIV5": {
           "Description": "SPDR® S&P Global Dividend ETF"
        },
        "AU00000WXOZ2": {
           "Description": "SPDR® S&P World ex Australia ETF"
        },
        "AU00000WXHG6": {
           "Description": "SPDR® S&P World ex Australia(Hedged) ETF"
        },
        "AU000000STW9": {
           "Description": "SPDR® S&P/ASX 200 ETF"
        },
        "AU000000OZF0": {
           "Description": "SPDR® S&P/ASX 200 Fincls EX A-REIT ETF"
        },
        "AU000000SLF1": {
           "Description": "SPDR® S&P/ASX 200 Listed Property ETF"
        },
        "AU000000OZR5": {
           "Description": "SPDR® S&P/ASX 200 Resources ETF"
        },
        "AU000000SFY4": {
           "Description": "SPDR® S&P/ASX 50 ETF"
        },
        "AU00000BOND4": {
           "Description": "SPDR® S&P/ASX Australian Bond ETF"
        },
        "AU00000GOVT2": {
           "Description": "SPDR® S&P/ASX Australian Govt Bd ETF"
        },
        "AU000000SSO8": {
           "Description": "SPDR® S&P/ASX Small Ordinaries ETF"
        },
        "AU60WPC00054": {
           "Description": "Specialist Australian Shares"
        },
        "AU60MMC01027": {
           "Description": "Specialist Diversified Fixed Interest"
        },
        "AU60WPC00146": {
           "Description": "Specialist Dynamic Allocation"
        },
        "AU60WPC00112": {
           "Description": "Specialist Global Shares Fund"
        },
        "AU60WPC00120": {
           "Description": "Specialist Property"
        },
        "AU60ETL00725": {
           "Description": "Spectrum Strategic Income"
        },
        "AU60WHT00667": {
           "Description": "Spheria Australian Microcap"
        },
        "AU60WHT00089": {
           "Description": "Spheria Australian Smaller Companies"
        },
        "AU60WHT67047": {
           "Description": "Spheria Global Microcap"
        },
        "AU60WHT00253": {
           "Description": "Spheria Opportunities"
        },
        "AU60WFS89088": {
           "Description": "Spheria Wholesale Plus Aus Smllr Coms Fd"
        },
        "AU60ETL04107": {
           "Description": "Spire Copper Rock Glbl Smaller Companies"
        },
        "AU60SPI13375": {
           "Description": "Spire USA Multifamily IV (AUD)"
        },
        "AU60ETL03711": {
           "Description": "Spire USA ROC II (AUD)"
        },
        "AU60ETL04602": {
           "Description": "Spire USA ROC III (AUD)"
        },
        "AU60ETL89462": {
           "Description": "Spire USA ROC IV (AUD)"
        },
        "AU60ETL15673": {
           "Description": "Spire USA ROC Office I (AUD)"
        },
        "AU60ETL15079": {
           "Description": "Spire USA ROC Srs Housing&Medical Fd II"
        },
        "AU60ETL04123": {
           "Description": "Spire USA ROC Srs Hsg&Medical Prpts AUD"
        },
        "AU60SPI00018": {
           "Description": "Spire W Alternative Income No.1 (AUD)"
        },
        "AU60ETL77053": {
           "Description": "SPW Global High Quality - Institutional"
        },
        "AU60ETL88340": {
           "Description": "SPW Global High Quality - Retail"
        },
        "AU60SIA00010": {
           "Description": "SPW Global Income"
        },
        "AU60SST00035": {
           "Description": "State Street Australian Cash Trust"
        },
        "AU60SST00043": {
           "Description": "State Street Australian Equities Idx Tr"
        },
        "AU60SST00480": {
           "Description": "State Street Australian Equity"
        },
        "AU60SST00050": {
           "Description": "State Street Australian Fixed Inc Idx Tr"
        },
        "AU60SST00076": {
           "Description": "State Street Australian Lstd Prpt Idx Tr"
        },
        "AU60SST00571": {
           "Description": "State Street Climate ESG Intl Eq"
        },
        "AU60SST47259": {
           "Description": "State Street Floating Rate Fund"
        },
        "AU60SST00506": {
           "Description": "State Street Global Equity"
        },
        "AU60SST00092": {
           "Description": "State Street Global Fixed Income Idx Tr"
        },
        "AU60SST00217": {
           "Description": "State Street Global Index Plus (Hdg) Tr"
        },
        "AU60SST00100": {
           "Description": "State Street Global Index Plus Trust"
        },
        "AU60SST00225": {
           "Description": "State Street International Eqs Idx Hg Tr"
        },
        "AU60SST00134": {
           "Description": "State Street International Eqs Idx Tr"
        },
        "AU60SST00522": {
           "Description": "State Street Multi-Asset Builder"
        },
        "AU60SST00167": {
           "Description": "State Street Passive Balanced Trust"
        },
        "AU60STE00019": {
           "Description": "Sterling Units"
        },
        "AU60FSF10857": {
           "Description": "Stewart Investors Glb Emerg Mkts Leaders"
        },
        "AU60FSF10501": {
           "Description": "Stewart Investors W Glb Emerg Mkts Sus"
        },
        "AU60FSF00809": {
           "Description": "Stewart Investors W Global Emerg Mkts"
        },
        "AU60FSF00478": {
           "Description": "Stewart Investors W Worldwide Leaders"
        },
        "AU60FSF12952": {
           "Description": "Stewart Investors W Wrldwide Sustainabty"
        },
        "AU60FSF16755": {
           "Description": "Stewart Investors Worldwide Sus-Class A"
        },
        "AU60SLT00378": {
           "Description": "Stonehouse Core Value Portfolio"
        },
        "AU60DFA00083": {
           "Description": "Strategic Australian Equity"
        },
        "AU60WPC00286": {
           "Description": "Strategic Cash Plus"
        },
        "AU60DFA00158": {
           "Description": "Strategic Fixed Interest"
        },
        "AU60OMF00275": {
           "Description": "Strategic Global Fund"
        },
        "AU60DFA00067": {
           "Description": "Strategic Global Property"
        },
        "AU60DFA00075": {
           "Description": "Strategic International Equity"
        },
        "AU60BSP18734": {
           "Description": "Student Quarters Property Trust"
        },
        "AU60BSP15052": {
           "Description": "Student Quarters Property Trust 2"
        },
        "AU60BSP79264": {
           "Description": "Student Quarters Yield Trust"
        },
        "AU60BSP37163": {
           "Description": "Student Quarters Yield Trust 2"
        },
        "AU60NMM01081": {
           "Description": "SUMMIT Select - Active Balanced"
        },
        "AU60NMM01065": {
           "Description": "SUMMIT Select - Active Defensive Units"
        },
        "AU60NMM01099": {
           "Description": "SUMMIT Select - Active Growth Units"
        },
        "AU60NMM01107": {
           "Description": "SUMMIT Select - Active High Growth Units"
        },
        "AU60NMM01073": {
           "Description": "SUMMIT Select - Active Mod Defensive"
        },
        "AU60IPA00743": {
           "Description": "Summit Select Income Generator"
        },
        "AU00000SWTZ1": {
           "Description": "Switzer Dividend Growth ETF"
        },
        "AU60ETL03281": {
           "Description": "T. Rowe Price Australian Equity"
        },
        "AU60ETL03984": {
           "Description": "T. Rowe Price Dynamic Global Bond"
        },
        "AU60ETL03125": {
           "Description": "T. Rowe Price Global Equity (Hedged)"
        },
        "AU60ETL18644": {
           "Description": "T. Rowe Price Global Equity (Hedged) M"
        },
        "AU60ETL64721": {
           "Description": "T. Rowe Price Global Equity (Hedged) S"
        },
        "AU60ETL00717": {
           "Description": "T. Rowe Price Global Equity I"
        },
        "AU60ETL84828": {
           "Description": "T. Rowe Price Global Equity M"
        },
        "AU60ETL72385": {
           "Description": "T. Rowe Price Global Equity S"
        },
        "AU60WFS13385": {
           "Description": "T. Rowe Price Global Focused Equity MPS"
        },
        "AU60BTA05384": {
           "Description": "T. Rowe Price WS Plus Global Equity"
        },
        "AU60TMI18932": {
           "Description": "TAIM ASX200 Leveraged Momentum A"
        },
        "AU60TMI05822": {
           "Description": "TAIM ASX200 Momentum A"
        },
        "AU60AUS00353": {
           "Description": "Talaria Global Equity"
        },
        "AU60WGT00016": {
           "Description": "Talaria Global Equity - Foundation"
        },
        "AU60WFS05472": {
           "Description": "Talaria Global Equity Hedged"
        },
        "AU60BTA05632": {
           "Description": "Talaria WS Plus Global Equity"
        },
        "AU60RGL00013": {
           "Description": "Tasman Market Neutral"
        },
        "AU60FRT00059": {
           "Description": "Templeton Global Bond Plus I"
        },
        "AU60FRT00083": {
           "Description": "Templeton Global Bond Plus W"
        },
        "AU60FRT00042": {
           "Description": "Templeton Global Equity"
        },
        "AU60FRT00018": {
           "Description": "Templeton Global Trust Fund"
        },
        "AU60TCN00014": {
           "Description": "Terra Capital Ethical Emerging Companies"
        },
        "AU60TER00011": {
           "Description": "Terra Capital Natural Resource Fund"
        },
        "AU60ETL32389": {
           "Description": "THB International Micro Cap"
        },
        "AU60ETL28403": {
           "Description": "THB International Micro Cap B"
        },
        "AU60ETL04131": {
           "Description": "THB US Micro Cap"
        },
        "AU60FHT00308": {
           "Description": "The Montgomery Fund"
        },
        "AU60ACU00084": {
           "Description": "The Property Income Plus Fund"
        },
        "AU60PLL00041": {
           "Description": "The Stables Property Ordinary"
        },
        "AU60SIA00028": {
           "Description": "The Supervised Fund"
        },
        "AU60CTS75718": {
           "Description": "The TAMIM Asia Small Companies"
        },
        "AU60PTC00035": {
           "Description": "The Trust Company Australian Share"
        },
        "AU60PIM01019": {
           "Description": "The Trust Company Bond"
        },
        "AU60PIM00219": {
           "Description": "The Trust Company Diversified Property"
        },
        "AU60PIM00235": {
           "Description": "The Trust Company Philanthropy"
        },
        "AU60TCA00029": {
           "Description": "The Trust Company Share Imputation"
        },
        "AU60TGP00143": {
           "Description": "Third Link Growth"
        },
        "AU60PLL44866": {
           "Description": "Thynne Street Property"
        },
        "AU60TOT73161": {
           "Description": "Totus Alpha Fund - Platform Class"
        },
        "AU60PIM62847": {
           "Description": "Totus Alpha Long Short"
        },
        "AU60TOT30369": {
           "Description": "Totus High Conviction Ordinary"
        },
        "AU60BFL00217": {
           "Description": "Touchstone Index Unaware"
        },
        "AU60TGY00293": {
           "Description": "Tower Central Trust"
        },
        "AU60TPI82154": {
           "Description": "TPI Australian Share"
        },
        "AU60ACU00118": {
           "Description": "TPS Cash Management"
        },
        "AU60TPT00013": {
           "Description": "TPT Fixed Term"
        },
        "AU60TPT00021": {
           "Description": "TPT Long Term"
        },
        "AU60TPT00039": {
           "Description": "TPT Select Mortgage"
        },
        "AU60ETL00691": {
           "Description": "Tribeca Alpha Plus Class A"
        },
        "AU60ETL02002": {
           "Description": "Tribeca Alpha Plus Class C"
        },
        "AU60ETL04461": {
           "Description": "Tribeca Global Natural Resources"
        },
        "AU60TGY97893": {
           "Description": "Trilogy Enhanced Cash"
        },
        "AU60TGY00038": {
           "Description": "Trilogy Monthly Income Trust"
        },
        "AU60PIM42328": {
           "Description": "Trinetra Emerging Markets Growth Trust"
        },
        "AU60MAQ08316": {
           "Description": "True Index Global Infrastructure Secs"
        },
        "AU60WHT14684": {
           "Description": "Two Trees Global Macro Fund Cl A"
        },
        "AU60WHT41901": {
           "Description": "Two Trees Global Macro Fund Cl F"
        },
        "AU60UGL00017": {
           "Description": "U Ethical Australian Equities Tr Wholsl"
        },
        "AU60UGF00019": {
           "Description": "U Ethical Australian Equities Trust"
        },
        "AU60UCM00014": {
           "Description": "U Ethical Enhanced Cash Portfolio"
        },
        "AU60UGF00027": {
           "Description": "U Ethical Enhanced Cash Trust"
        },
        "AU60UGL00025": {
           "Description": "U Ethical Growth Portfolio"
        },
        "AU60SBC08139": {
           "Description": "UBS Australian Bond Fund"
        },
        "AU60SBC08170": {
           "Description": "UBS Australian Share Fund"
        },
        "AU60UBS00047": {
           "Description": "UBS Australian Small Companies Fund"
        },
        "AU60UBS00633": {
           "Description": "UBS Australian Small Companies SIV Fund"
        },
        "AU60SBC08154": {
           "Description": "UBS Balanced Investment Fund"
        },
        "AU60SBC08113": {
           "Description": "UBS Cash Fund"
        },
        "AU60UBS00641": {
           "Description": "UBS Clarion Global Infrastructure SecsFd"
        },
        "AU60HML00160": {
           "Description": "UBS Clarion Global Property SecuritiesFd"
        },
        "AU60SBC08147": {
           "Description": "UBS Defensive Investment Fund"
        },
        "AU60SBC00078": {
           "Description": "UBS Diversified Fixed Income Fund"
        },
        "AU60UBS80189": {
           "Description": "UBS Emerging Markets Equity Fund"
        },
        "AU60UBS01037": {
           "Description": "UBS Global Credit Fund"
        },
        "AU60UBS23932": {
           "Description": "UBS Global High Conviction Fund"
        },
        "AU60UBS00039": {
           "Description": "UBS Income Solution Fund"
        },
        "AU60SBC08196": {
           "Description": "UBS International Bond Fund"
        },
        "AU60SBC08220": {
           "Description": "UBS International Share Fund"
        },
        "AU000000UBA9": {
           "Description": "UBS IQ MSCI Australia Ethical ETF"
        },
        "AU60UBS00575": {
           "Description": "UBS Microcap Fund"
        },
        "AU60SBC08162": {
           "Description": "UBS Property Securities Fund"
        },
        "AU60SBC08121": {
           "Description": "UBS Short-Term Fixed Income Fund"
        },
        "AU60UBS00419": {
           "Description": "UBS Tactical Beta Fund - Balanced"
        },
        "AU60UBS00369": {
           "Description": "UBS Tactical Beta Fund - Conservative"
        },
        "AU60UBS00377": {
           "Description": "UBS Tactical Beta Fund - Growth"
        },
        "AU60BTA04783": {
           "Description": "UBS WS Plus Australian Bond"
        },
        "AU60UBS00245": {
           "Description": "UBS-HALO Australian Share Fund"
        },
        "AU60VPF49932": {
           "Description": "Valara Partners Ordinary"
        },
        "AU0000076606": {
           "Description": "VanEck Emerging Income Opps Actv ETF"
        },
        "AU000000MVB2": {
           "Description": "VanEck Vectors Australian Banks ETF"
        },
        "AU00000PLUS3": {
           "Description": "VanEck Vectors Australian Corp Bd+ ETF"
        },
        "AU000000MVW8": {
           "Description": "VanEck Vectors Australian Equal Wt ETF"
        },
        "AU00000FLOT5": {
           "Description": "VanEck Vectors Australian Fltng Rt ETF"
        },
        "AU000000MVA4": {
           "Description": "VanEck Vectors Australian Property ETF"
        },
        "AU000000MVR8": {
           "Description": "VanEck Vectors Australian Resources ETF"
        },
        "AU0000061186": {
           "Description": "VanEck Vectors Australian Sbdntd Dbt ETF"
        },
        "AU0000028185": {
           "Description": "VanEck Vectors China New Economy ETF"
        },
        "AU00000CETF5": {
           "Description": "VanEck Vectors FTSE China A50 ETF"
        },
        "AU00000IFRA4": {
           "Description": "VanEck Vectors FTSE Glbl Infras(Hdg)ETF"
        },
        "AU000000GDX6": {
           "Description": "VanEck Vectors Gold Miners ETF"
        },
        "AU00000MOAT4": {
           "Description": "VanEck Vectors Morningstar Wide Moat ETF"
        },
        "AU0000050353": {
           "Description": "VanEck Vectors MSCI AUS Sust Eq ETF"
        },
        "AU0000001356": {
           "Description": "VanEck Vectors MSCI Intl Sust Eq ETF"
        },
        "AU0000004368": {
           "Description": "VanEck Vectors MSCI Mltfac EmMkts Eq ETF"
        },
        "AU00000QUAL9": {
           "Description": "VanEck Vectors MSCI Wld ex Aus Qlty ETF"
        },
        "AU0000041204": {
           "Description": "VanEck Vectors MSCI Wld ex AUS Qul H ETF"
        },
        "AU000000MVE6": {
           "Description": "VanEck Vectors S&P/ASX MidCap ETF"
        },
        "AU000000MVS6": {
           "Description": "VanEck Vectors Small Coms Masters ETF"
        },
        "AU60VAN02218": {
           "Description": "Vanguard Active Emerging Market Equity"
        },
        "AU60VAN39327": {
           "Description": "Vanguard Active Global Credit Bond"
        },
        "AU60VAN07225": {
           "Description": "Vanguard Active Global Growth"
        },
        "AU000000VEU9": {
           "Description": "Vanguard All-World ex-US Shares ETF"
        },
        "AU60VAN00659": {
           "Description": "Vanguard Aust Corporate Fixed Interest"
        },
        "AU00000VACF9": {
           "Description": "Vanguard Australian Corp Fxd Intr ETF"
        },
        "AU000000VAF8": {
           "Description": "Vanguard Australian Fixed Interest ETF"
        },
        "AU60VAN00014": {
           "Description": "Vanguard Australian Fixed Interest Index"
        },
        "AU000000VGB4": {
           "Description": "Vanguard Australian Government Bond ETF"
        },
        "AU60VAN00253": {
           "Description": "Vanguard Australian Govt Bond Index"
        },
        "AU60VAN00642": {
           "Description": "Vanguard Australian Infl-Lnkd Bond Idx"
        },
        "AU000000VAP7": {
           "Description": "Vanguard Australian Property Secs ETF"
        },
        "AU60VAN00048": {
           "Description": "Vanguard Australian Property Secs Idx"
        },
        "AU000000VAS1": {
           "Description": "Vanguard Australian Shares ETF"
        },
        "AU60VAN01046": {
           "Description": "Vanguard Australian Shares High Yield"
        },
        "AU000000VHY4": {
           "Description": "Vanguard Australian Shares High Yld ETF"
        },
        "AU60VAN00022": {
           "Description": "Vanguard Australian Shares Index"
        },
        "AU60VAN01087": {
           "Description": "Vanguard Balanced Index Fund"
        },
        "AU60VAN01020": {
           "Description": "Vanguard Cash Plus"
        },
        "AU60VAN00204": {
           "Description": "Vanguard Cash Reserve"
        },
        "AU60VAN01095": {
           "Description": "Vanguard Conservative Index"
        },
        "AU00000VDBA6": {
           "Description": "Vanguard Diversified Balanced ETF"
        },
        "AU60VAN00428": {
           "Description": "Vanguard Diversified Bond Index"
        },
        "AU00000VDCO5": {
           "Description": "Vanguard Diversified Conservative ETF"
        },
        "AU00000VDGR9": {
           "Description": "Vanguard Diversified Growth ETF"
        },
        "AU00000VDHG0": {
           "Description": "Vanguard Diversified High Growth ETF"
        },
        "AU60VAN00055": {
           "Description": "Vanguard Emerging Markets Shares Index"
        },
        "AU0000022501": {
           "Description": "Vanguard Etclly Cons Gbl Aggt Bd H ETF"
        },
        "AU60VAN29898": {
           "Description": "Vanguard Etclly Cons Glb Agg Bd IdxHAUDH"
        },
        "AU60VAN12332": {
           "Description": "Vanguard Etclly Cons Glb Agg Bd IdxHNZDH"
        },
        "AU0000022485": {
           "Description": "Vanguard Etclly Cons Intl Shrs ETF"
        },
        "AU60VAN81758": {
           "Description": "Vanguard Ethically Cons Intl Shrs Idx"
        },
        "AU60VAN40135": {
           "Description": "Vanguard Ethically Cons Intl ShrsIdxNZDH"
        },
        "AU000000VAE1": {
           "Description": "Vanguard FTSE Asia ex Japan Shrs ETF"
        },
        "AU000000VGE8": {
           "Description": "Vanguard FTSE Emerging Markets Shrs ETF"
        },
        "AU000000VEQ7": {
           "Description": "Vanguard FTSE Europe Shares ETF"
        },
        "AU60VAN93092": {
           "Description": "Vanguard Global Agg Bd Indx Fd (Hdg)"
        },
        "AU00000VBND9": {
           "Description": "Vanguard Global Aggregate Bd Hdg ETF"
        },
        "AU0000026163": {
           "Description": "Vanguard Global Infrastructure ETF"
        },
        "AU60VAN00238": {
           "Description": "Vanguard Global Infrastructure Index"
        },
        "AU60VAN00246": {
           "Description": "Vanguard Global Infrastructure Index Hgd"
        },
        "AU0000005894": {
           "Description": "Vanguard Global Minimum Volatil Act ETF"
        },
        "AU60VAN00683": {
           "Description": "Vanguard Global Minimum Volatility"
        },
        "AU60VAN37594": {
           "Description": "Vanguard Global Multi-Factor"
        },
        "AU0000041386": {
           "Description": "Vanguard Global Multi-Factor Active ETF"
        },
        "AU60VAN00741": {
           "Description": "Vanguard Global Value Equity"
        },
        "AU0000005886": {
           "Description": "Vanguard Global Value Equity Active ETF"
        },
        "AU60VAN01103": {
           "Description": "Vanguard Growth Index"
        },
        "AU60VAN01111": {
           "Description": "Vanguard High Growth Index"
        },
        "AU60VAN00170": {
           "Description": "Vanguard High Yield Australian Shares"
        },
        "AU60VAN00121": {
           "Description": "Vanguard Index Australian Property Secs"
        },
        "AU60VAN00105": {
           "Description": "Vanguard Index Australian Shares"
        },
        "AU60VAN01012": {
           "Description": "Vanguard Index Diversified Bond"
        },
        "AU60VAN01079": {
           "Description": "Vanguard Index Hedged International Shrs"
        },
        "AU60VAN00113": {
           "Description": "Vanguard Index International Shares"
        },
        "AU60VAN01061": {
           "Description": "Vanguard International Crdt Secs Idx Hdg"
        },
        "AU60VAN01038": {
           "Description": "Vanguard International Fxd Intr Idx Hdg"
        },
        "AU60VAN00188": {
           "Description": "Vanguard International Property Secs Idx"
        },
        "AU60VAN00196": {
           "Description": "Vanguard International Prpty Secs IdxHdg"
        },
        "AU60VAN00030": {
           "Description": "Vanguard International Shares Index"
        },
        "AU60VAN01053": {
           "Description": "Vanguard International Shrs Idx Hdg AUD"
        },
        "AU60VAN00212": {
           "Description": "Vanguard International Small Companies"
        },
        "AU000000VCF4": {
           "Description": "Vanguard Intl Credit Secs (Hdg) ETF"
        },
        "AU000000VIF1": {
           "Description": "Vanguard Intl Fxd Intr (Hdg) ETF"
        },
        "AU60VAN00667": {
           "Description": "Vanguard Intl Shares Index Hgd NZD"
        },
        "AU60VAN15798": {
           "Description": "Vanguard Intl Shares Sel Exclusions Idx"
        },
        "AU60VAN32009": {
           "Description": "Vanguard Intl Shrs Sel Excls Idx Hdg AUD"
        },
        "AU60VAN82871": {
           "Description": "Vanguard Intl Shs Sel Exclusions IdxNZDH"
        },
        "AU60VAN00220": {
           "Description": "Vanguard Intl Small Companies Index Hgd"
        },
        "AU60VAN01004": {
           "Description": "Vanguard Investor Cash Plus"
        },
        "AU60VAN01244": {
           "Description": "Vanguard LifeStrategy Balanced"
        },
        "AU60VAN00139": {
           "Description": "Vanguard LifeStrategy Conservative"
        },
        "AU60VAN00147": {
           "Description": "Vanguard LifeStrategy Growth"
        },
        "AU60VAN00154": {
           "Description": "Vanguard LifeStrategy High Growth"
        },
        "AU60VAN00709": {
           "Description": "Vanguard Managed Payout"
        },
        "AU000000VLC2": {
           "Description": "Vanguard MSCI Australian Large Coms ETF"
        },
        "AU000000VSO2": {
           "Description": "Vanguard MSCI Australian Small Coms ETF"
        },
        "AU0000026171": {
           "Description": "Vanguard MSCI International SC ETF"
        },
        "AU00000VGAD5": {
           "Description": "Vanguard MSCI Intl (Hdg) ETF"
        },
        "AU000000VGS8": {
           "Description": "Vanguard MSCI Intl ETF"
        },
        "AU000000VTS1": {
           "Description": "Vanguard US Total Market Shares ETF"
        },
        "AU60RIM00330": {
           "Description": "Ventura Aust Opportunities"
        },
        "AU60VEN00263": {
           "Description": "Ventura Aust Opportunities A"
        },
        "AU60RIM00215": {
           "Description": "Ventura Australian Shares"
        },
        "AU60VEN00305": {
           "Description": "Ventura Australian Shares A"
        },
        "AU60RIM00181": {
           "Description": "Ventura Conservative"
        },
        "AU60VEN00297": {
           "Description": "Ventura Conservative A"
        },
        "AU60RIM00199": {
           "Description": "Ventura Diversified 50"
        },
        "AU60VEN00289": {
           "Description": "Ventura Diversified 50 A"
        },
        "AU60VEN00081": {
           "Description": "Ventura Global Opportunities"
        },
        "AU60RIM00207": {
           "Description": "Ventura Growth 70"
        },
        "AU60VEN00271": {
           "Description": "Ventura Growth 70 A"
        },
        "AU60VEN00321": {
           "Description": "Ventura Growth 90"
        },
        "AU60VEN00099": {
           "Description": "Ventura High Growth 100"
        },
        "AU60RIM00223": {
           "Description": "Ventura International Shares"
        },
        "AU60VEN00313": {
           "Description": "Ventura International Shares A"
        },
        "AU60OPS18273": {
           "Description": "Vertium Equity Income Fund"
        },
        "AU60ETL62626": {
           "Description": "VF High Conviction Fund"
        },
        "AU60ETL02887": {
           "Description": "Vontobel Global Equity Fund"
        },
        "AU60AMP53561": {
           "Description": "Walter Scott Advantage Global Equity Fd"
        },
        "AU60MAQ06518": {
           "Description": "Walter Scott Emerging Markets"
        },
        "AU60MAQ04109": {
           "Description": "Walter Scott Global Equity"
        },
        "AU60MAQ05577": {
           "Description": "Walter Scott Global Equity Hedged"
        },
        "AU60MAQ96923": {
           "Description": "Walter Scott Global Equity No 1"
        },
        "AU60BTA05426": {
           "Description": "Walter Scott WS Plus Global Equity"
        },
        "AU60WRA65149": {
           "Description": "Warakirri Cash Deposits Trust"
        },
        "AU60WRA22983": {
           "Description": "Warakirri Diversified Agriculture"
        },
        "AU60WRA77011": {
           "Description": "Warakirri Ethical Australian Equities"
        },
        "AU60ETL87326": {
           "Description": "Watermark Absolute Return"
        },
        "AU60WMF00013": {
           "Description": "Watermark Market Neutral Trust A"
        },
        "AU60ETL04859": {
           "Description": "Watermark Market Neutral Trust C"
        },
        "AU60HOW00205": {
           "Description": "WaveStone Australian Share"
        },
        "AU60HOW60605": {
           "Description": "WaveStone Australian Share I"
        },
        "AU60WCL00012": {
           "Description": "WaveStone Capital Absolute Return"
        },
        "AU60HOW00536": {
           "Description": "WaveStone Dynamic Australian Equity"
        },
        "AU60SWI97200": {
           "Description": "WCM International Small Cap Gr (Managed)"
        },
        "AU0000018103": {
           "Description": "WCM Quality Glbl Gr ETF (Quoted Mgd)"
        },
        "AU60SWI14130": {
           "Description": "WCM Quality Global Growth (Managed)"
        },
        "AU60WFS92330": {
           "Description": "Wellington Global Bond MPS"
        },
        "AU60WFS59131": {
           "Description": "Wellington Global Equity MPS"
        },
        "AU60ETL06763": {
           "Description": "Wenlock Global Fund"
        },
        "AU60WFS29126": {
           "Description": "Western Asset Global Bond MPS"
        },
        "AU60WFS01018": {
           "Description": "Westpac Aus Property Secs Retail"
        },
        "AU60WFS01034": {
           "Description": "Westpac Aus Tax Eff Retail"
        },
        "AU60BFL34463": {
           "Description": "Wheelhouse Global Equity Income"
        },
        "AU60HOW73053": {
           "Description": "Whitehelm Capital Listed Core Infras UnH"
        },
        "AU60WGT71983": {
           "Description": "Wingate Investment Partners Trust No. 3"
        },
        "AU60MAQ04828": {
           "Description": "Winton Global Alpha"
        },
        "AU60HHA00171": {
           "Description": "Wisdom Australian Equities"
        },
        "AU60JBW00497": {
           "Description": "Yarra A$ Cash Reserves I Class"
        },
        "AU60JBW43794": {
           "Description": "Yarra Absolute Credit"
        },
        "AU60JBW00091": {
           "Description": "Yarra Australian Equities Fund"
        },
        "AU60JBW01149": {
           "Description": "Yarra Australian Equities Fund (Direct)"
        },
        "AU60JBW00307": {
           "Description": "Yarra Australian Real Assets Secs Fund"
        },
        "AU60JBW00109": {
           "Description": "Yarra Emerging Leaders Fund"
        },
        "AU60JBW00075": {
           "Description": "Yarra Emerging Leaders Fund (Direct)"
        },
        "AU60JBW00182": {
           "Description": "Yarra Enhanced Income Fund"
        },
        "AU60JBW01180": {
           "Description": "Yarra Enhanced Income Fund (Direct)"
        },
        "AU60JBW00521": {
           "Description": "Yarra Ex-20 Australian Equities Fund"
        },
        "AU60JBW01032": {
           "Description": "Yarra Global Small Companies Fund"
        },
        "AU60JBW00166": {
           "Description": "Yarra Income Plus Fund"
        },
        "AU60JBW00059": {
           "Description": "Yarra Investment Fund"
        },
        "AU60JBW00117": {
           "Description": "Yarra Leaders Fund"
        },
        "AU60SLT00592": {
           "Description": "YBR Protected Equities Fund"
        },
        "AU60AIM43807": {
           "Description": "Zebedee L-S Equity Access"
        },
        "AU60AMP58131": {
           "Description": "Zurich Investment Advtg Glb Gr Shr Fd"
        },
        "AU60ZUR00642": {
           "Description": "Zurich Investments Aus Property Secs"
        },
        "AU60ZUR06177": {
           "Description": "Zurich Investments Concentrated Glbl Gr"
        },
        "AU60ZUR06144": {
           "Description": "Zurich Investments Emerging Markets Eq"
        },
        "AU60ZUR00618": {
           "Description": "Zurich Investments Gbl Thematic Shr"
        },
        "AU60ZUR01434": {
           "Description": "Zurich Investments Gbl Thematic Shr Pool"
        },
        "AU60ZUR05807": {
           "Description": "Zurich Investments Global Growth"
        },
        "AU60ZUR05179": {
           "Description": "Zurich Investments Hgd Gbl Thematic Shr"
        },
        "AU60ZUR00592": {
           "Description": "Zurich Investments Managed Growth"
        },
        "AU60ZUR05831": {
           "Description": "Zurich Investments Small Companies"
        },
        "AU60ZUR71502": {
           "Description": "Zurich Investments Small Companies D"
        },
        "AU60ZUR05187": {
           "Description": "Zurich Investments Uhgd Gbl Thematic Shr"
        },
        "AU60ZUR05815": {
           "Description": "Zurich Investments Unhedged Global Gr"
        }
     }

     var match = (ticker in data) ? data[ticker].Description : null;

     return match;
}
