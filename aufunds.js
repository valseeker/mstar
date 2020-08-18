function tickersToFundNames(ticker, region) {
  var data = {
    "22": {
      Description: "Maple-Brown Abbott Sharemarket",
    },
    "33": {
      Description: "Maple-Brown Abbott Aus Shr Retail",
    },
    "60": {
      Description: "MLC UT/MKey InvSer Cash",
    },
    "63": {
      Description: "MLC UT/MKey InvSer Horizon 4 - Balanced",
    },
    "66": {
      Description: "MLC UT/MKey InvSer Global Share",
    },
    "67": {
      Description: "MLC UT/MKey InvSer Australian Share",
    },
    "68": {
      Description: "MLC UT/MKey InvSer MLC - Vanguard Sh Ind",
    },
    "69": {
      Description: "MLC UT/MKey InvSer Prop Securities",
    },
    "92": {
      Description: "OnePath OA IP-ING AJ Mortgage",
    },
    "120": {
      Description: "AMP FLI- AMP Capital Equity",
    },
    "121": {
      Description: "AMP FLI-FD International Shr Original",
    },
    "122": {
      Description: "AMP FLI-FD Australian Shr Original",
    },
    "152": {
      Description: "ANZ Mortgage",
    },
    "156": {
      Description: "ANZ Fixed Interest Trust",
    },
    "158": {
      Description: "ANZ Equity Trust No 1",
    },
    "160": {
      Description: "ANZ Equity Imputation",
    },
    "208": {
      Description: "BT Cash Management",
    },
    "209": {
      Description: "BT Class Inv Split Growth",
    },
    "210": {
      Description: "BT Class Inv Split Income",
    },
    "214": {
      Description: "BT American Share Retail",
    },
    "215": {
      Description: "BT International Share Retail",
    },
    "216": {
      Description: "BT European Share Retail",
    },
    "217": {
      Description: "BT Asian Share Retail",
    },
    "218": {
      Description: "BT Aus Share Retail",
    },
    "296": {
      Description: "BlackRock Equity",
    },
    "305": {
      Description: "Alphinity Concentrated Aus Share Class B",
    },
    "326": {
      Description: "Perpetual WFI-Perpetual Int Shr",
    },
    "366": {
      Description: "AUI Property Securities Fund Growth",
    },
    "367": {
      Description: "AUI Property Securities Fund Income",
    },
    "480": {
      Description: "OnePath OA IP-OP Monthly Income",
    },
    "508": {
      Description: "Yarra Investment Fund",
    },
    "737": {
      Description: "Ord Minnett Cash Management",
    },
    "741": {
      Description: "BlackRock Australian Share Plus",
    },
    "760": {
      Description: "Perpetual Cash Management",
    },
    "766": {
      Description: "BT Class Inv Core Aus Shr",
    },
    "768": {
      Description: "BT Investment Global Share",
    },
    "769": {
      Description: "BT Class Inv Natural Resources",
    },
    "773": {
      Description: "BT Smaller Companies Retail",
    },
    "794": {
      Description: "Schroder Australian Equity Fund - PC",
    },
    "855": {
      Description: "Merlon Australian Equity Income (CNA)",
    },
    "866": {
      Description: "BT Investor Choice Intl Share",
    },
    "867": {
      Description: "BT Investor Choice Australia Bond",
    },
    "868": {
      Description: "BT Investor Choice Cash Management",
    },
    "907": {
      Description: "AMP FLI-AMP Property Securities",
    },
    "926": {
      Description: "BT Fixed Interest Retail",
    },
    "1026": {
      Description: "OnePath OA IP-OP Blue Chip Imput EF",
    },
    "1027": {
      Description: "OnePath OA IP-OP Active Growth EF",
    },
    "1083": {
      Description: "BlackRock Australian Share",
    },
    "1105": {
      Description: "BT Investor Choice Aus Tax Eff",
    },
    "1106": {
      Description: "BT Investor Choice Aus Gr",
    },
    "1144": {
      Description: "AMP Capital W Australian Property",
    },
    "1271": {
      Description: "AMP FLI-AMP Monthly Income No 1",
    },
    "1406": {
      Description: "AET Cash Deposit",
    },
    "1408": {
      Description: "OnePath OA IP-OP Tax Effective Inc EF",
    },
    "1473": {
      Description: "ANZ Property Securities",
    },
    "1495": {
      Description: "Yarra Leaders Fund",
    },
    "1502": {
      Description: "CBA Balanced",
    },
    "1535": {
      Description: "AMP FLI-UBS Aus Small Companies",
    },
    "1598": {
      Description: "CFS MIF-Imputation",
    },
    "1599": {
      Description: "CFS MIF-Diversified",
    },
    "1600": {
      Description: "CFS MIF-Australian Share",
    },
    "1635": {
      Description: "Alphinity Sustainable Share B",
    },
    "1676": {
      Description: "AUI Property Securities Fund Ordinary",
    },
    "1681": {
      Description: "IOOF/Perennial Flex Growth Shares",
    },
    "1793": {
      Description: "MCP Australian Share Income",
    },
    "1820": {
      Description: "Perpetual WFI-Perpetual Indl Shr",
    },
    "1863": {
      Description: "Australian Ethical Balanced",
    },
    "1884": {
      Description: "Pendal Sustainable Conservative",
    },
    "1885": {
      Description: "Pendal Active Balanced",
    },
    "1889": {
      Description: "AMP FLI-AMP Balanced Growth",
    },
    "1911": {
      Description: "CBA Bond",
    },
    "1941": {
      Description: "BT Investor Choice Mod Gr",
    },
    "1942": {
      Description: "BT Investor Choice Bal Gr",
    },
    "1943": {
      Description: "BT Investor Choice Dynamic Growth",
    },
    "2147": {
      Description: "CBA Share Income",
    },
    "2211": {
      Description: "BT Class Inv Active Bal NE",
    },
    "2221": {
      Description: "AMP FLI-AMP Conservative",
    },
    "2251": {
      Description: "BT Future Goals Retail",
    },
    "2252": {
      Description: "BT Class Inv Balanced Returns",
    },
    "2253": {
      Description: "BT Income Plus Retail",
    },
    "2254": {
      Description: "BT Class Inv Monthly Income",
    },
    "2270": {
      Description: "CFS MIF-Property Securities",
    },
    "2272": {
      Description: "OnePath OA IP-OP Mortgage Tr No. 2",
    },
    "2503": {
      Description: "AMP FLI-AMP Monthly Income No 2",
    },
    "2504": {
      Description: "Pendal Balanced Returns",
    },
    "2507": {
      Description: "Pendal Active Conservative",
    },
    "2521": {
      Description: "BlackRock Tactical Growth",
    },
    "2530": {
      Description: "ipac Strat Inv Srv Inflation Plus 2",
    },
    "2531": {
      Description: "ipac Strat Inv Srv Inflation Plus 4",
    },
    "2532": {
      Description: "ipac Strat Inv Srv Inflation Plus 6",
    },
    "2536": {
      Description: "Westpac Aus Property Secs Retail",
    },
    "2556": {
      Description: "Invesco WS Aus Share",
    },
    "2557": {
      Description: "Invesco WS Aus Smaller Companies-Class A",
    },
    "2571": {
      Description: "Macquarie Treasury",
    },
    "2579": {
      Description: "UBS Australian Bond Fund",
    },
    "2614": {
      Description: "Advance Balanced Multi-Blend",
    },
    "2631": {
      Description: "Advance Defensive Multi-Blend",
    },
    "2632": {
      Description: "Advance Growth Multi-Blend",
    },
    "2723": {
      Description: "UBS Cash Fund",
    },
    "2725": {
      Description: "Pendal Smaller Companies",
    },
    "2726": {
      Description: "Pendal Australian Share",
    },
    "2727": {
      Description: "Pendal Property Investment",
    },
    "2728": {
      Description: "Maple-Brown Abbott Diversified Inv",
    },
    "2732": {
      Description: "MLC UT/MKey InvSer Horizon 2 - Income",
    },
    "2733": {
      Description: "MLC UT/MKey InvSerHorizon 5 - Growth",
    },
    "2734": {
      Description: "Zurich Investments Managed Growth",
    },
    "2773": {
      Description: "OnePath OA IP-OP Emerging Companies EF",
    },
    "2776": {
      Description: "Perpetual Bal Grth 2",
    },
    "2798": {
      Description: "BlackRock WS Tactical Growth",
    },
    "2838": {
      Description: "CFS MIF-Conservative",
    },
    "2867": {
      Description: "Maple-Brown Abbott Australian Equity",
    },
    "2882": {
      Description: "IOOF/Perennial Flex Balanced",
    },
    "2943": {
      Description: "Invesco WS Senior Secured Income",
    },
    "2944": {
      Description: "Invesco WS Diversified Growth-Class A",
    },
    "2950": {
      Description: "Pendal Fixed Interest",
    },
    "2951": {
      Description: "Pendal Concentrated Global Share No.2",
    },
    "2953": {
      Description: "UBS Property Securities Fund",
    },
    "2954": {
      Description: "UBS Defensive Investment Fund",
    },
    "2959": {
      Description: "BlackRock Diversified ESG Stable Fund",
    },
    "2960": {
      Description: "BlackRock Diversified ESG Growth Fund",
    },
    "2965": {
      Description: "BlackRock WS International Bond",
    },
    "2969": {
      Description: "Aberdeen Std Actvly Hdg Intl Eqs Fd",
    },
    "3005": {
      Description: "BlackRock Advantage Australian Equity",
    },
    "3022": {
      Description: "BT Class Inv Tax Effective Income NE",
    },
    "3095": {
      Description: "BT Class Inv Div Shr NE",
    },
    "3195": {
      Description: "Perpetual's - Australian Share Fund",
    },
    "3196": {
      Description: "MLC UT/MKey InvSer Platinum Global",
    },
    "3197": {
      Description: "ANZ V2 Plus",
    },
    "3198": {
      Description: "ANZ OA IP-OP Conservative",
    },
    "3199": {
      Description: "ANZ OA IP-OP Balanced",
    },
    "3202": {
      Description: "OnePath WS-Property Securities Trust",
    },
    "3205": {
      Description: "ANZ OA IP-OP Managed Growth",
    },
    "3206": {
      Description: "ANZ OA IP-OP Income",
    },
    "3216": {
      Description: "Aberdeen Std Multi-Asset Real Return Fd",
    },
    "3217": {
      Description: "Aberdeen Std Multi-Asset Inc Fd",
    },
    "3218": {
      Description: "Aberdeen Std Ex-20 Australian Eqs Fd",
    },
    "3219": {
      Description: "Aberdeen Std Australian Fixed Inc Fd",
    },
    "3220": {
      Description: "SG Hiscock Property",
    },
    "3283": {
      Description: "SG Hiscock Property Opportunities",
    },
    "3307": {
      Description: "BlackRock Advantage Intl Equity Fund",
    },
    "3321": {
      Description: "IOOF MultiMix W Aus Property Trust",
    },
    "3326": {
      Description: "Pendal Sustainable Balanced",
    },
    "3344": {
      Description: "Hyperion Australian Growth Companies",
    },
    "3349": {
      Description: "UBS Short-Term Fixed Income Fund",
    },
    "3351": {
      Description: "UBS International Bond Fund",
    },
    "3352": {
      Description: "UBS Australian Share Fund",
    },
    "3353": {
      Description: "UBS International Share Fund",
    },
    "3354": {
      Description: "UBS Balanced Investment Fund",
    },
    "3376": {
      Description: "AMP Capital Managed Treasury",
    },
    "3404": {
      Description: "CFS Wholesale Australian Share",
    },
    "3405": {
      Description: "CFS Wholesale Imputation",
    },
    "3413": {
      Description: "Yarra Emerging Leaders Fund (Direct)",
    },
    "3434": {
      Description: "AMP FLI-AMP Monthly Income No 3",
    },
    "3458": {
      Description: "Advance Australia Shr Multi-Blend",
    },
    "3461": {
      Description: "BlackRock WS Australian Share",
    },
    "3477": {
      Description: "OnePath WS-Australian Share Trust",
    },
    "3478": {
      Description: "OnePath WS-Balanced Trust",
    },
    "3480": {
      Description: "Invesco WS Global Opportunities-Hedged A",
    },
    "3482": {
      Description: "CFS Wholesale Property Securities",
    },
    "3484": {
      Description: "CFS Wholesale Diversified",
    },
    "3566": {
      Description: "Alphinity Australian Share",
    },
    "3671": {
      Description: "CFS MIF-Balanced",
    },
    "3672": {
      Description: "CFS Future Leaders",
    },
    "3681": {
      Description: "Advance International Shr Multi-Blend",
    },
    "3683": {
      Description: "Merlon Australian Share Income",
    },
    "3684": {
      Description: "Schroder Global Core Fund - WC",
    },
    "3700": {
      Description: "CFS Wholesale Indexed Global Bond",
    },
    "3701": {
      Description: "CFS FC - T. Rowe Price W Aus Eq",
    },
    "3702": {
      Description: "CFS Wholesale Indexed Global Share",
    },
    "3704": {
      Description: "Macquarie Property Securities",
    },
    "3734": {
      Description: "Perpetual WFIA-Perpetual Bal Grth",
    },
    "3786": {
      Description: "Macquarie Balanced Growth",
    },
    "3787": {
      Description: "Perpetual WFIA-Perpetual Conservative Gr",
    },
    "3788": {
      Description: "Perpetual WFIA-Perpetual Aus Shr",
    },
    "3789": {
      Description: "Perpetual WFIA-Perpetual Indl Shr",
    },
    "3790": {
      Description: "Perpetual WFIA-Perpetual Int Shr",
    },
    "3791": {
      Description: "Perpetual WFIA-Perpetual Small Coms",
    },
    "3793": {
      Description: "Perpetual WFIA-Perpetual Cash",
    },
    "3851": {
      Description: "ANZ OA IP-OP Australian Shares",
    },
    "3854": {
      Description: "ANZ OA IP-OP Blue Chip Imputation",
    },
    "3875": {
      Description: "BT Property Secs Retail",
    },
    "3876": {
      Description: "Pengana International Ethical",
    },
    "3878": {
      Description: "CFS Wholesale Concentrated Aus Shr",
    },
    "3893": {
      Description: "MLC UT/MKey InvSer Income Builder",
    },
    "3914": {
      Description: "Macquarie Capital Stable",
    },
    "3921": {
      Description: "Australian Ethical Australian Shr",
    },
    "3980": {
      Description: "Macquarie Australian Fixed Interest",
    },
    "3982": {
      Description: "Macquarie Master Balanced",
    },
    "3983": {
      Description: "Macquarie Master Property Securities",
    },
    "3987": {
      Description: "Nikko AM Australian Share W",
    },
    "4006": {
      Description: "CBA Growth",
    },
    "4007": {
      Description: "CBA Income",
    },
    "4008": {
      Description: "CBA Australian Share",
    },
    "4009": {
      Description: "CBA International Share",
    },
    "4018": {
      Description: "CFS Wholesale Premium Cash",
    },
    "4029": {
      Description: "SG Hiscock Property Securities Closed",
    },
    "4075": {
      Description: "AIMS Commercial Mortgage Retail",
    },
    "4079": {
      Description: "BT Investor Choice Cons Gr",
    },
    "4081": {
      Description: "OnePath OA IP-OP Australian Shr EF",
    },
    "4119": {
      Description: "Macquarie Master Capital Stable",
    },
    "4122": {
      Description: "CFS Wholesale Australian Bond",
    },
    "4123": {
      Description: "OnePath OA IP-OP Balanced EF",
    },
    "4128": {
      Description: "Advance Aus Fixed Intr Multi-Blend",
    },
    "4129": {
      Description: "Macquarie Term Cash",
    },
    "4189": {
      Description: "CFS Wholesale Conservative",
    },
    "4195": {
      Description: "AMP Capital Enhanced Index Share",
    },
    "4198": {
      Description: "AMP Capital International Bond",
    },
    "4206": {
      Description: "AMP FLI-AMP High Growth",
    },
    "4231": {
      Description: "CBA Property Securities",
    },
    "4242": {
      Description: "Hyperion Small Growth Companies",
    },
    "4245": {
      Description: "Pendal Concentrated Global Share No.3",
    },
    "4246": {
      Description: "Pendal Asian Share",
    },
    "4247": {
      Description: "Pendal Australian Equity",
    },
    "4264": {
      Description: "BT PPSI-BlackRock Scientific Div Stb",
    },
    "4270": {
      Description: "BT PPSI-BlackRock Scientific Div Gr",
    },
    "4281": {
      Description: "BT PPSI-BlackRock WS Balanced",
    },
    "4284": {
      Description: "BT PPSI-BT Sustainable Conservative",
    },
    "4285": {
      Description: "BT PPSI-BT WS Active Bal",
    },
    "4286": {
      Description: "BT PPSI-Westpac Moderate Growth",
    },
    "4287": {
      Description: "BT PPSI-Westpac Diversified Growth",
    },
    "4288": {
      Description: "BT PPSI-Westpac Bal Gr",
    },
    "4289": {
      Description: "BT PPSI-Westpac Dynam Gr",
    },
    "4291": {
      Description: "BT PPSI-Westpac Australia Bond",
    },
    "4292": {
      Description: "BT PPSI-Westpac Aus Property Secs",
    },
    "4293": {
      Description: "BT PPSI-Westpac Aus Tax Eff",
    },
    "4294": {
      Description: "BT PPSI-Westpac Aus Gr",
    },
    "4295": {
      Description: "BT PPSI-Westpac Intl Share",
    },
    "4296": {
      Description: "BT PPSI-BT Institutional Managed Cash",
    },
    "4297": {
      Description: "BT PPSI-BT Institutional Enhanced Cash",
    },
    "4298": {
      Description: "BT PPSI-BT Institutional Enh Int Fix Inc",
    },
    "4360": {
      Description: "Macquarie Active Plus Equities",
    },
    "4361": {
      Description: "Perpetual Wholesale Australian",
    },
    "4362": {
      Description: "Perpetual Wholesale Industrial",
    },
    "4363": {
      Description: "Perpetual Wholesale Smaller Companies",
    },
    "4364": {
      Description: "Perpetual Wholesale International Share",
    },
    "4437": {
      Description: "CFS Developing Companies",
    },
    "4487": {
      Description: "Vanguard Australian Fixed Interest Index",
    },
    "4488": {
      Description: "Vanguard Australian Shares Index",
    },
    "4489": {
      Description: "Vanguard International Shares Index",
    },
    "4493": {
      Description: "Legg Mason Martin Currie Divers Gr A",
    },
    "4497": {
      Description: "The Property Income Plus Fund",
    },
    "4499": {
      Description: "CFS MIF-Janus Henderson Glb Nat Res",
    },
    "4501": {
      Description: "OnePath WS-Emerging Companies",
    },
    "4505": {
      Description: "Platinum International Fund",
    },
    "4522": {
      Description: "Antares Prof Australian Equities",
    },
    "4532": {
      Description: "MFS Global Equity Trust",
    },
    "4542": {
      Description: "C WorldWide Global Equity Trust",
    },
    "4544": {
      Description: "Yarra Australian Equities Fund",
    },
    "4545": {
      Description: "Yarra Emerging Leaders Fund",
    },
    "4548": {
      Description: "CFS MIF-Geared Share",
    },
    "4549": {
      Description: "TPS Cash Management",
    },
    "4594": {
      Description: "BT PPSI-BT Cons Outlook",
    },
    "4595": {
      Description: "BT PPSI-BT WS Balanced Returns",
    },
    "4596": {
      Description: "BT PPSI-BT Aus Share",
    },
    "4597": {
      Description: "BT PPSI-BT WS Intl Shares",
    },
    "4598": {
      Description: "BT PPSI-BlackRock Scientific Intl Eq",
    },
    "4599": {
      Description: "BT PPSI-CFS Imputation",
    },
    "4600": {
      Description: "BT PPSI-BT WS Core Aus Share",
    },
    "4621": {
      Description: "CFS MIF-Worldwide Leaders",
    },
    "4625": {
      Description: "CFS MIF-CFS Strategic Cash",
    },
    "4631": {
      Description: "Schroder Strategic Growth - PC",
    },
    "4635": {
      Description: "Arrowstreet Global Equity Hedged",
    },
    "4672": {
      Description: "Stewart Investors W Worldwide Leaders",
    },
    "4678": {
      Description: "AMP Capital Listed Property Trusts",
    },
    "4695": {
      Description: "Schroder Asia Pacific Fund - WC",
    },
    "4704": {
      Description: "ClearView Mgd Inv Aus Shares Growth",
    },
    "4705": {
      Description: "ClearView Mgd Inv Diversified Balanced",
    },
    "4706": {
      Description: "ClearView Mgd Inv Diversified Stable",
    },
    "4711": {
      Description: "ipac Strat Inv Srv Inflation Plus 7",
    },
    "4712": {
      Description: "CFS Wholesale Diversified Fixed Interest",
    },
    "4713": {
      Description: "CFS FC-Janus Henderson W Glb Nat Res",
    },
    "4714": {
      Description: "CFS Wholesale Balanced",
    },
    "4715": {
      Description: "CFS Wholesale Geared Share",
    },
    "4726": {
      Description: "Pendal Property Securities",
    },
    "4728": {
      Description: "Optimix WS-Enhanced Cash",
    },
    "4729": {
      Description: "Optimix WS-Australian Fixed Int",
    },
    "4731": {
      Description: "Optimix WS-Global Share",
    },
    "4732": {
      Description: "Optimix WS-Conservative",
    },
    "4733": {
      Description: "Optimix WS-Balanced",
    },
    "4734": {
      Description: "Optimix WS-Growth",
    },
    "4736": {
      Description: "AMP Capital Listed Property Trusts A",
    },
    "4743": {
      Description: "Vanguard Emerging Markets Shares Index",
    },
    "4744": {
      Description: "Vanguard Australian Property Secs Idx",
    },
    "4748": {
      Description: "State Street International Eqs Idx Tr",
    },
    "4756": {
      Description: "Perpetual Wholesale Balanced Growth",
    },
    "4766": {
      Description: "Australian Ethical Income",
    },
    "4767": {
      Description: "Australian Ethical Diversified Shr",
    },
    "4768": {
      Description: "Aberdeen Std International Eq Fd",
    },
    "4774": {
      Description: "MLC Wholesale Horizon 4 Balanced",
    },
    "4775": {
      Description: "MLC Wholesale Horizon 5 Growth Portfolio",
    },
    "4776": {
      Description: "MLC Wholesale Global Share",
    },
    "4777": {
      Description: "MLC Wholesale Australian Share",
    },
    "4778": {
      Description: "MLC Wholesale Property Securities",
    },
    "4779": {
      Description: "MLC Wholesale IncomeBuilderTM",
    },
    "4780": {
      Description: "BT PPSI-MLC WS Horizon 4 Balanced",
    },
    "4781": {
      Description: "BT PPSI-MLC WS Horizon 5 Growth",
    },
    "4782": {
      Description: "BT PPSI-MLC WS Property Securities",
    },
    "4783": {
      Description: "BT PPSI-MLC Inv Aus Share",
    },
    "4784": {
      Description: "BT PPSI-MLC Global Share",
    },
    "4785": {
      Description: "Fiducian Capital Safe",
    },
    "4786": {
      Description: "Fiducian Capital Stable",
    },
    "4787": {
      Description: "Fiducian Balanced",
    },
    "4788": {
      Description: "Fiducian Growth Fund",
    },
    "4789": {
      Description: "Fiducian Australian Shares",
    },
    "4790": {
      Description: "Fiducian International Shares",
    },
    "4791": {
      Description: "Fiducian Property Securities",
    },
    "4792": {
      Description: "Fiducian Australian Smaller Co Shares",
    },
    "4856": {
      Description: "Advance Defensive Multi-Blend W",
    },
    "4857": {
      Description: "Advance Balanced Multi-Blend W",
    },
    "4863": {
      Description: "Advance International Shr Multi-Blend W",
    },
    "4864": {
      Description: "Maple-Brown Abbott Aus Shr Wholesale",
    },
    "4865": {
      Description: "Advance Australia Shr Multi-Blend W",
    },
    "4866": {
      Description: "UBS Diversified Fixed Income Fund",
    },
    "4869": {
      Description: "Lazard Global Small Cap I",
    },
    "4870": {
      Description: "Lazard Emerging Markets Equity I",
    },
    "4872": {
      Description: "State Street Australian Equities Idx Tr",
    },
    "4873": {
      Description: "State Street Australian Lstd Prpt Idx Tr",
    },
    "4874": {
      Description: "ANZ Mortgage Series 2",
    },
    "4897": {
      Description: "Fidelity Global Equities",
    },
    "4950": {
      Description: "ClearView Mgd Inv Diversified Growth",
    },
    "4951": {
      Description: "Zurich Investments Gbl Thematic Shr",
    },
    "5024": {
      Description: "Yarra Income Plus Fund",
    },
    "5031": {
      Description: "OnePath WS-Capital Stable Trust",
    },
    "5032": {
      Description: "OnePath WS-Managed Growth",
    },
    "5049": {
      Description: "OnePath OA IP-ING Heine Property Sec",
    },
    "5050": {
      Description: "Ironbark Paladin Property Securities",
    },
    "5072": {
      Description: "APN Property for Income",
    },
    "5084": {
      Description: "iShares Australian Equity Index",
    },
    "5101": {
      Description: "BT Imp Shr Retail",
    },
    "5169": {
      Description: "OnePath OA IP-OP Income Plus EF",
    },
    "5201": {
      Description: "OnePath OA IP-OP Blue Chip Imput NE",
    },
    "5202": {
      Description: "OnePath OA IP-OP Emerging Companies NE",
    },
    "5203": {
      Description: "OnePath OA IP-OP Active Growth NE",
    },
    "5233": {
      Description: "BT PPSI-Macquarie WS Property Securities",
    },
    "5242": {
      Description: "Maple-Brown Abbott Aus Shr NEF",
    },
    "5291": {
      Description: "Templeton Global Trust Fund",
    },
    "5306": {
      Description: "Aberdeen Std Inflation Linked bd Fd",
    },
    "5308": {
      Description: "Bentham Wholesale High Yield",
    },
    "5316": {
      Description: "AMP Capital International Bond A",
    },
    "5334": {
      Description: "CFS W Strategic Cash",
    },
    "5335": {
      Description: "AMP Capital Corporate Bond",
    },
    "5339": {
      Description: "Investors Mutual WS Australian Share",
    },
    "5340": {
      Description: "Investors Mutual WS Aus Smaller Co",
    },
    "5341": {
      Description: "CFS MIF-High Growth",
    },
    "5342": {
      Description: "State Street Global Fixed Income Idx Tr",
    },
    "5343": {
      Description: "State Street Australian Fixed Inc Idx Tr",
    },
    "5344": {
      Description: "Platinum European Fund",
    },
    "5345": {
      Description: "Platinum Japan",
    },
    "5346": {
      Description: "AMP Capital Enhanced Index Intl Share",
    },
    "5396": {
      Description: "Zurich Investments Aus Property Secs",
    },
    "5397": {
      Description: "Vanguard Index Australian Shares",
    },
    "5398": {
      Description: "Vanguard Index International Shares",
    },
    "5399": {
      Description: "Vanguard Index Australian Property Secs",
    },
    "5400": {
      Description: "Vanguard LifeStrategy Conservative",
    },
    "5401": {
      Description: "Vanguard LifeStrategy Growth",
    },
    "5402": {
      Description: "Vanguard LifeStrategy High Growth",
    },
    "5466": {
      Description: "Legg Mason Martin Currie Property Secs A",
    },
    "5468": {
      Description: "Legg Mason QS Investors Global Equity A",
    },
    "5471": {
      Description: "Legg Mason Western Asset Aus Bd A",
    },
    "5472": {
      Description: "Legg Mason Martin Currie Sust Eq A",
    },
    "5473": {
      Description: "Legg Mason Martin Currie Tact Allc A",
    },
    "5476": {
      Description: "Perpetual Wholesale Split Growth",
    },
    "5500": {
      Description: "AUI Property Income Fund W",
    },
    "5501": {
      Description: "OnePath OA IP-OP Property Securities EF",
    },
    "5502": {
      Description: "OnePath OA IP-OP Property Securities NE",
    },
    "5503": {
      Description: "OnePath OA IP-OP Global Share EF",
    },
    "5504": {
      Description: "OnePath OA IP-OP Global Share NE",
    },
    "5514": {
      Description: "CFS Wholesale Industrial Share",
    },
    "5515": {
      Description: "CFS Wholesale High Growth",
    },
    "5528": {
      Description: "AMP Capital Global Gr Opportunities",
    },
    "5529": {
      Description: "Macquarie Master Small Companies",
    },
    "5532": {
      Description: "AMP Capital W Cash Management Trust",
    },
    "5543": {
      Description: "Pendal Active Growth",
    },
    "5544": {
      Description: "Pendal European Share",
    },
    "5545": {
      Description: "Pendal American Share",
    },
    "5601": {
      Description: "Adelaide Cash Management Trust",
    },
    "5604": {
      Description: "Pendal Enhanced Credit",
    },
    "5636": {
      Description: "BlackRock Scientific Wholesale Divers Gr",
    },
    "5637": {
      Description: "BlackRock Scientific Whls Divers Stable",
    },
    "5649": {
      Description: "IOOF/Perennial Flex Balanced NEF",
    },
    "5652": {
      Description: "Fiducian Global Smaller Co & Emg Markets",
    },
    "5655": {
      Description: "AMP Capital Enhanced Index Share A",
    },
    "5663": {
      Description: "Invesco WS Global Opportunities-Unhedged",
    },
    "5666": {
      Description: "Janus Henderson Australian Fxd Intst",
    },
    "5667": {
      Description: "Antipodes Global Fund - Class P",
    },
    "5668": {
      Description: "Janus Henderson Cash Enhanced",
    },
    "5669": {
      Description: "Resolution Capital Core Plus Prp Sec II",
    },
    "5685": {
      Description: "Aberdeen Std Australian Eqs Fd",
    },
    "5730": {
      Description: "Pendal Imputation",
    },
    "5734": {
      Description: "CFS MIF-Global Tech & Comm",
    },
    "5737": {
      Description: "SUMMIT Select - Active Defensive Units",
    },
    "5738": {
      Description: "SUMMIT Select - Active Mod Defensive",
    },
    "5739": {
      Description: "SUMMIT Select - Active Balanced",
    },
    "5740": {
      Description: "SUMMIT Select - Active Growth Units",
    },
    "5741": {
      Description: "SUMMIT Select - Active High Growth Units",
    },
    "5742": {
      Description: "North Index Defensive",
    },
    "5743": {
      Description: "North Index Moderately Defensive",
    },
    "5744": {
      Description: "North Index Balanced",
    },
    "5745": {
      Description: "North Index Growth",
    },
    "5746": {
      Description: "North Index High Growth",
    },
    "5809": {
      Description: "Sandhurst BMF-Sandhurst Ind Share",
    },
    "5812": {
      Description: "Yarra Global Small Companies Fund",
    },
    "5819": {
      Description: "Aberdeen Std Sel Invmt Actvy H Intl Eqs",
    },
    "5820": {
      Description: "SG Hiscock Professional Property",
    },
    "5839": {
      Description: "Dimensional Short Term Fixed Interest",
    },
    "5840": {
      Description: "Dimensional Australian Value Trust",
    },
    "5841": {
      Description: "Dimensional Global Value Trust",
    },
    "5842": {
      Description: "Ironbark GCM Global Macro",
    },
    "5848": {
      Description: "CFS Wholesale Global Tech & Comm",
    },
    "5850": {
      Description: "BT Japanese Share Retail",
    },
    "5851": {
      Description: "Antares Prof High Growth Shares",
    },
    "5852": {
      Description: "Antares Pers High Growth Shares",
    },
    "5880": {
      Description: "Westpac Aus Tax Eff Retail",
    },
    "5881": {
      Description: "BT Investor Choice All Aus Gr",
    },
    "5893": {
      Description: "Perpetual Wholesale Concentrated Equity",
    },
    "5899": {
      Description: "BT Technology Retail",
    },
    "5960": {
      Description: "BT Premium Cash Retail",
    },
    "5963": {
      Description: "Pendal Japanese Share",
    },
    "5991": {
      Description: "OnePath OA IP-OP Tax Effective Inc NE",
    },
    "5992": {
      Description: "OnePath OA IP-OP Australian Share NE",
    },
    "5993": {
      Description: "OnePath OA IP-OP Balanced NE",
    },
    "6057": {
      Description: "AMP Capital Equity A",
    },
    "6110": {
      Description: "ANZ Cash Plus",
    },
    "6117": {
      Description: "Ausbil Australian Active Equity",
    },
    "6118": {
      Description: "Ausbil Balanced",
    },
    "6147": {
      Description: "BT PPSI-BT WS Asian",
    },
    "6148": {
      Description: "BT PPSI-BlackRock WS Aus Share",
    },
    "6150": {
      Description: "BT PPSI-CFS WS Diversified",
    },
    "6225": {
      Description: "EQT Mortgage Income",
    },
    "6269": {
      Description: "Nikko AM Growth NEF",
    },
    "6270": {
      Description: "Nikko AM Conservative NEF",
    },
    "6272": {
      Description: "Nikko AM Global Share",
    },
    "6297": {
      Description: "CFS MIF-Global Health & Biotech",
    },
    "6419": {
      Description: "Celeste Australian Small Companies",
    },
    "6425": {
      Description: "BT PPSI-BT WS Smaller Companies",
    },
    "6427": {
      Description: "Vanguard Cash Plus",
    },
    "6428": {
      Description: "Vanguard International Fxd Intr Idx Hdg",
    },
    "6429": {
      Description: "Vanguard Australian Shares High Yield",
    },
    "6430": {
      Description: "Vanguard International Shrs Idx Hdg AUD",
    },
    "6431": {
      Description: "Vanguard Investor Cash Plus",
    },
    "6432": {
      Description: "Vanguard Index Diversified Bond",
    },
    "6465": {
      Description: "Dimensional Aust Large Company Trust",
    },
    "6466": {
      Description: "Dimensional Global Large Company Trust",
    },
    "6467": {
      Description: "Dimensional Global Small Company Trust",
    },
    "6468": {
      Description: "Dimensional Emerging Markets Trust",
    },
    "6511": {
      Description: "LM Cash Performance",
    },
    "6586": {
      Description: "Zurich Investments Gbl Thematic Shr Pool",
    },
    "6594": {
      Description: "Macquarie Australian Enhanced Plus Eqs",
    },
    "6610": {
      Description: "Macquarie Master Cash",
    },
    "6626": {
      Description: "OnePath OA IP-MFS Global Equity EF",
    },
    "6627": {
      Description: "OnePath OA IP-OP Global Emg Mkt Shr EF",
    },
    "6628": {
      Description: "OnePath OA IP-Antpds Glbl(Lg only)EF/Sel",
    },
    "6632": {
      Description: "OnePath WS-OP Global Emg Markets Shr",
    },
    "6638": {
      Description: "CFS Wholesale Global Health & Biotech",
    },
    "6641": {
      Description: "Macquarie Master Enhanced Fixed Int",
    },
    "6643": {
      Description: "Platinum International Brands Fund",
    },
    "6644": {
      Description: "Platinum International Technology",
    },
    "6647": {
      Description: "OnePath OA IP-MFS Global Equity NE",
    },
    "6648": {
      Description: "OnePath OA IP-OP Global Emg Mkt Shr NE",
    },
    "6649": {
      Description: "OnePath OA IP-Antpds Glbl (Lg only) NEF",
    },
    "6709": {
      Description: "Optimix WS-High Growth",
    },
    "6710": {
      Description: "Optimix WS-Australian Share No.2",
    },
    "6711": {
      Description: "Optimix WS-Property Securities B",
    },
    "6814": {
      Description: "The Trust Company Share Imputation",
    },
    "6821": {
      Description: "Perennial Value Australian Shares Trust",
    },
    "6828": {
      Description: "PM Capital Global Companies",
    },
    "6829": {
      Description: "PM Capital Australian Companies",
    },
    "6837": {
      Description: "Lazard Australian Equity I",
    },
    "6842": {
      Description: "AMP Capital Ethical Leaders Intl Shr A",
    },
    "6843": {
      Description: "AMP Capital Conservative A",
    },
    "6844": {
      Description: "Optimix Trusts-Property Securities EF",
    },
    "6845": {
      Description: "Optimix Trusts-Property Securities NE",
    },
    "6846": {
      Description: "Optimix Trusts-Conservative",
    },
    "6847": {
      Description: "Optimix Trusts-Conservative NE",
    },
    "6848": {
      Description: "Optimix Trusts-Balanced",
    },
    "6849": {
      Description: "Optimix Trusts-Balanced NE",
    },
    "6850": {
      Description: "Optimix Trusts-Growth",
    },
    "6851": {
      Description: "Optimix Trusts-Growth NE",
    },
    "6852": {
      Description: "Optimix Trusts-High Growth",
    },
    "6853": {
      Description: "Optimix Trusts-High Growth NE",
    },
    "6854": {
      Description: "Optimix Trusts-Enhanced Cash",
    },
    "6855": {
      Description: "Optimix Trusts-Enhanced Cash NE",
    },
    "6856": {
      Description: "Optimix Trusts-Australian Shares",
    },
    "6857": {
      Description: "Optimix Trusts-Australian Shares NE",
    },
    "6858": {
      Description: "Optimix Trusts-Global Share",
    },
    "6859": {
      Description: "Optimix Trusts-Global Share NE",
    },
    "6907": {
      Description: "Dimensional Aust Small Company Trust",
    },
    "6910": {
      Description: "EQT Core International Equity",
    },
    "6913": {
      Description: "Legg Mason Western Asset Cash Plus A",
    },
    "6924": {
      Description: "Pendal Ethical Share",
    },
    "6973": {
      Description: "AMP FLI-AMP Sustainable Future Aus Shr",
    },
    "6979": {
      Description: "AMP Capital Sustainable Share A",
    },
    "6980": {
      Description: "AMP Capital Ethical Leaders Intl Shr O",
    },
    "6981": {
      Description: "AMP Capital Ethical Leaders Bal",
    },
    "6982": {
      Description: "AMP Capital Sustainable Share",
    },
    "6988": {
      Description: "Ironbark LHP Diversified Investments",
    },
    "6992": {
      Description: "Ironbark LHP Global Long/Short W",
    },
    "6994": {
      Description: "Ironbark LHP Global Long/Short R",
    },
    "7003": {
      Description: "CFS Wholesale Indexed Australian Bond",
    },
    "7004": {
      Description: "CFS Wholesale Indexed Australian Share",
    },
    "7005": {
      Description: "CFS Wholesale Indexed Property Sec",
    },
    "7006": {
      Description: "CFS Wholesale Aus Small Companies",
    },
    "7007": {
      Description: "CFS Wholesale Premium Cash Enhanced",
    },
    "7041": {
      Description: "AMP Capital Australian Property",
    },
    "7045": {
      Description: "Sandhurst IML Industrial Share",
    },
    "7046": {
      Description: "AUI Healthcare Property Trust R",
    },
    "7048": {
      Description: "Antares Pers Listed Property",
    },
    "7050": {
      Description: "Antares Prof Listed Property",
    },
    "7073": {
      Description: "AMP Capital Future Directions Balanced",
    },
    "7230": {
      Description: "AMP Capital Res Inv Leaders Bal A",
    },
    "7580": {
      Description: "CFS MIF-FC Geared Global Share",
    },
    "7581": {
      Description: "Firstchoice WS Geared Global Share",
    },
    "7586": {
      Description: "Specialist Diversified Fixed Interest",
    },
    "7589": {
      Description: "AMP Capital W Global Equity Value",
    },
    "7590": {
      Description: "OnePath WS-High Growth Trust",
    },
    "7609": {
      Description: "Addwealth Achiever Fund",
    },
    "7610": {
      Description: "OnePath WS-Blue Chip Imputation Trust",
    },
    "7612": {
      Description: "Yarra Australian Equities Fund (Direct)",
    },
    "7616": {
      Description: "OnePath OA IP-OP High Growth EF",
    },
    "7643": {
      Description: "AMP Capital Equity",
    },
    "7644": {
      Description: "LM First Mortgage Income",
    },
    "7695": {
      Description: "ANZ Wholesale-Australian Imputation",
    },
    "7696": {
      Description: "OnePath WS-Select Leaders",
    },
    "7697": {
      Description: "OnePath WS-Diversified Fixed Interest",
    },
    "7698": {
      Description: "ANZ Wholesale-Property Securities",
    },
    "7704": {
      Description: "ANZ OA IP-OP Diversified Fixed Interest",
    },
    "7705": {
      Description: "ANZ OA IP-OP Select Leaders NE",
    },
    "7815": {
      Description: "Antipodes Asia P",
    },
    "7817": {
      Description: "Perennial Value Shares Wholesale Trust",
    },
    "7868": {
      Description: "Pengana Australian Equities Income",
    },
    "7869": {
      Description: "Pengana International Ethical Opp",
    },
    "7873": {
      Description: "BT Premium Cash",
    },
    "7877": {
      Description: "AUI Balanced Growth Portfolio",
    },
    "8009": {
      Description: "OnePath WS-Sustainable Inv Aus Shares",
    },
    "8012": {
      Description: "AMP Capital Australian Small Companies A",
    },
    "8014": {
      Description: "CFS MIF-Property Securities NEF",
    },
    "8016": {
      Description: "CFS MIF-Imputation NEF",
    },
    "8019": {
      Description: "CFS MIF-Geared Share NEF",
    },
    "8025": {
      Description: "CFS MIF-Conservative NEF",
    },
    "8026": {
      Description: "CFS MIF-Balanced NEF",
    },
    "8027": {
      Description: "CFS MIF-Diversified NEF",
    },
    "8049": {
      Description: "PM Capital Enhanced Yield",
    },
    "8055": {
      Description: "BT Core Hedged Global Share Retail",
    },
    "8059": {
      Description: "Pendal Concentrated Global Share Hedged",
    },
    "8146": {
      Description: "BT Multi-Manager Gr W",
    },
    "8147": {
      Description: "BT Multi-Manager Bal WS",
    },
    "8148": {
      Description: "BT Multi-Manager Cons WS",
    },
    "8406": {
      Description: "Dimensional Five-Year Diversified F/I",
    },
    "8409": {
      Description: "Pendal Sustainable Australian Share",
    },
    "8412": {
      Description: "Aus Unity Healthcare Property Wholesale",
    },
    "8425": {
      Description: "Loftus Peak Global Disruption",
    },
    "8426": {
      Description: "Maple-Brown Abbott Sharemarket W",
    },
    "8429": {
      Description: "Perpetual Wholesale Diversified Growth",
    },
    "8433": {
      Description: "CFS FC Inv-Perpetual Divers Growth",
    },
    "8434": {
      Description: "CFS FC Inv-FirstChoice Defensive",
    },
    "8435": {
      Description: "CFS FC Inv-FirstChoice Conservative",
    },
    "8436": {
      Description: "CFS FC Inv-FirstChoice Moderate",
    },
    "8437": {
      Description: "CFS FC Inv-FirstChoice High Growth",
    },
    "8438": {
      Description: "CFS FC Inv-FirstChoice Aus Share",
    },
    "8439": {
      Description: "CFS FC Inv-FirstChoice Global Share",
    },
    "8440": {
      Description: "CFS FC Inv-FirstChoice Property Sec",
    },
    "8441": {
      Description: "CFS FC Inv-FirstChoice Fixed Int",
    },
    "8442": {
      Description: "CFS FC Inv-CFS Conservative",
    },
    "8443": {
      Description: "CFS FC Inv-FirstChoice M-Index Cons",
    },
    "8444": {
      Description: "CFS FC Inv-Perpetual Cons Growth",
    },
    "8445": {
      Description: "CFS FC Inv-CFS Balanced",
    },
    "8446": {
      Description: "CFS FC Inv-FirstChoice M-Index Div",
    },
    "8447": {
      Description: "CFS FC Inv-CFS Diversified",
    },
    "8448": {
      Description: "CFS FC Inv-FirstChoice M-Index Bal",
    },
    "8449": {
      Description: "CFS FC Inv-Perpetual Balanced Grwth",
    },
    "8450": {
      Description: "CFS FC Inv-Pendal Active Balanced",
    },
    "8451": {
      Description: "CFS FC Inv-CFS High Growth",
    },
    "8452": {
      Description: "CFS FC Inv-FirstChoice M-Index H Growth",
    },
    "8453": {
      Description: "CFS FC Inv-CFS Imputation",
    },
    "8454": {
      Description: "CFS FC Inv-FirstChoice Growth",
    },
    "8455": {
      Description: "CFS FC Inv-Schroder Aus Equity",
    },
    "8456": {
      Description: "CFS FC Inv-Pendal Australian Share",
    },
    "8457": {
      Description: "CFS FC Inv-State Street Aus Equity",
    },
    "8458": {
      Description: "CFS FC Inv-Perpetual Industrial Shr",
    },
    "8459": {
      Description: "CFS FC Inv-CFS Index Aus Share",
    },
    "8460": {
      Description: "CFS FC Inv-BlackRock W Adv Aus Shr",
    },
    "8461": {
      Description: "CFS FC Inv-Ausbil Aus Active Equity",
    },
    "8462": {
      Description: "CFS FC Inv-Maple-Brown Abb Aus Shr",
    },
    "8463": {
      Description: "CFS FC Inv - T. Rowe Price Aus Eq",
    },
    "8464": {
      Description: "State Street Passive Balanced Trust",
    },
    "8466": {
      Description: "CFS FC Inv-CFS Worldwide Leaders",
    },
    "8467": {
      Description: "CFS FC Inv-Janus Henderson Glb Nat Res",
    },
    "8468": {
      Description: "CFS FC Inv-MFS Global Equity",
    },
    "8469": {
      Description: "CFS FC Inv-T. Rowe Price Glb Eqty",
    },
    "8470": {
      Description: "CFS FC Inv-Perpetual Global Share",
    },
    "8471": {
      Description: "CFS FC Inv-CFS Index Global Share",
    },
    "8472": {
      Description: "CFS FC Inv-Pendal Core Global Share",
    },
    "8473": {
      Description: "CFS FC Inv-CFS Property Securities",
    },
    "8474": {
      Description: "CFS FC Inv-Ironbark Property Sec",
    },
    "8475": {
      Description: "CFS FC Inv-Pendal Property Investment",
    },
    "8476": {
      Description: "CFS FC Inv-Aberdeen Std Aus Fixed Inc",
    },
    "8477": {
      Description: "CFS FC Inv-CFS Diversified Fix Int",
    },
    "8479": {
      Description: "CFS FC Inv-CFS Cash",
    },
    "8480": {
      Description: "CFS FC Inv-CFS Geared Share",
    },
    "8481": {
      Description: "CFS FC Inv-FirstChoice Grd Glb Shr",
    },
    "8599": {
      Description: "Macquarie Enhanced Aust Fixed Interest",
    },
    "8600": {
      Description: "Macquarie Enhanced Global Bond",
    },
    "8601": {
      Description: "Macquarie Core Plus Australian Fxd Intr",
    },
    "8602": {
      Description: "Macquarie Small Companies",
    },
    "8603": {
      Description: "Macquarie Enhanced Property Securities",
    },
    "8610": {
      Description: "Russell Portfolio Series Conservative A",
    },
    "8611": {
      Description: "Russell Portfolio Series Balanced A",
    },
    "8612": {
      Description: "Russell Portfolio Series Growth A",
    },
    "8613": {
      Description: "Ventura Conservative",
    },
    "8614": {
      Description: "Ventura Diversified 50",
    },
    "8615": {
      Description: "Ventura Growth 70",
    },
    "8616": {
      Description: "Ventura Australian Shares",
    },
    "8617": {
      Description: "Ventura International Shares",
    },
    "8618": {
      Description: "Russell International Shares C",
    },
    "8619": {
      Description: "Russell International Shr Hedged Class C",
    },
    "8620": {
      Description: "Russell Australian Shares C",
    },
    "8621": {
      Description: "Russell Conservative C",
    },
    "8622": {
      Description: "Russell Diversified 50 C",
    },
    "8623": {
      Description: "Russell Balanced Class C",
    },
    "8624": {
      Description: "Russell Growth C",
    },
    "8625": {
      Description: "Macquarie Australian Diversified Inc (A)",
    },
    "8627": {
      Description: "IOOF/Perennial Flex Value Shares",
    },
    "8628": {
      Description: "Perennial Value Smaller Companies Trust",
    },
    "8649": {
      Description: "Perpetual Wholesale Ethical SRI",
    },
    "8650": {
      Description: "LM WS First Mort Inc Flexi",
    },
    "8651": {
      Description: "LM WS First Mort Inc 12 Mth Fix",
    },
    "8741": {
      Description: "Investors Mutual WS Future Leaders",
    },
    "8742": {
      Description: "Investors Mutual All Industrials Share",
    },
    "8847": {
      Description: "Schroder WS Australian Equity Fund - WC",
    },
    "8851": {
      Description: "Pacific First Mortgage Fund",
    },
    "8852": {
      Description: "Schroder Absolute Return Income Fund -PC",
    },
    "8855": {
      Description: "UBS Income Solution Fund",
    },
    "8877": {
      Description: "GMO Emerging Markets Trust",
    },
    "8886": {
      Description: "Experts' Choice Australian Shares",
    },
    "8887": {
      Description: "Experts' Choice Balanced",
    },
    "8890": {
      Description: "Experts' Choice Conservative",
    },
    "8892": {
      Description: "Experts' Choice Growth",
    },
    "8894": {
      Description: "Experts' Choice International Shares",
    },
    "8896": {
      Description: "Experts' Choice Property and Infras",
    },
    "8897": {
      Description: "Experts' Choice Short Term Money Market",
    },
    "8898": {
      Description: "Experts' Choice Diversified Interest Inc",
    },
    "8921": {
      Description: "Schroder Strategic Growth - WC",
    },
    "8922": {
      Description: "Schroder Absolute Return Income Fund -WC",
    },
    "8923": {
      Description: "Vanguard Index Hedged International Shrs",
    },
    "8925": {
      Description: "BT Investor Choice Bal Gr NEF",
    },
    "8926": {
      Description: "BT Investor Choice Mod Gr NEF",
    },
    "8931": {
      Description: "BT Investor Choice Aus Tax Eff NE",
    },
    "8932": {
      Description: "BT Investor Choice Aus Prp Secs NEF",
    },
    "8990": {
      Description: "OnePath OA IP-OP Cash",
    },
    "8991": {
      Description: "OnePath OA IP-Vanguard Intl Shr Index EF",
    },
    "8992": {
      Description: "OnePath OA IP-Vanguard Intl Shr Index NE",
    },
    "8993": {
      Description: "OnePath OA IP-CFS Imputation EF",
    },
    "8994": {
      Description: "OnePath OA IP-CFS Imputation NE",
    },
    "8995": {
      Description: "OnePath Schroder Real Return Trust EF",
    },
    "8996": {
      Description: "OnePath Schroder Real Return Trust NEF",
    },
    "8997": {
      Description: "OnePath OA IP-BlackRock Tact Gr EF",
    },
    "8999": {
      Description: "OnePath OA IP-BlackRock Tact Gr NE",
    },
    "9000": {
      Description: "OnePath OA IP-Perpetual Australian Sh EF",
    },
    "9001": {
      Description: "OnePath OA IP-Perpetual Australian Sh NE",
    },
    "9002": {
      Description: "OnePath OA IP-Magellan Global Tr EF/Sel",
    },
    "9003": {
      Description: "OnePath OA IP-Magellan Global Trust NEF",
    },
    "9004": {
      Description: "OnePath OA IP-Pendal Cor H Glb EF/Sel",
    },
    "9005": {
      Description: "OnePath OA IP-Pendal Cor H Glb NEF",
    },
    "9006": {
      Description: "OnePath OA IP-UBS Balanced EF",
    },
    "9007": {
      Description: "OnePath OA IP-UBS Balanced NE",
    },
    "9011": {
      Description: "OnePath Arrowstreet Global Eq Hdg Tr EF",
    },
    "9013": {
      Description: "OnePath Arrowstreet Global Eq Hdg Tr NEF",
    },
    "9093": {
      Description: "iShares Australian Bond Index",
    },
    "9105": {
      Description: "Alphinity Australian Share Class B",
    },
    "9108": {
      Description: "NovaPort Smaller Companies Class B",
    },
    "9115": {
      Description: "NovaPort Smaller Companies Class I",
    },
    "9121": {
      Description: "SGH Emerging Companies",
    },
    "9125": {
      Description: "Maple-Brown Abbott Aus Geared Eq",
    },
    "9132": {
      Description: "Maple-Brown Abbott Aus Geared Eq W",
    },
    "9140": {
      Description: "NovaPort Smaller Companies",
    },
    "9143": {
      Description: "Vanguard Conservative Index",
    },
    "9144": {
      Description: "Vanguard Balanced Index Fund",
    },
    "9145": {
      Description: "Vanguard Growth Index",
    },
    "9146": {
      Description: "Vanguard High Growth Index",
    },
    "9152": {
      Description: "Vanguard International Crdt Secs Idx Hdg",
    },
    "9154": {
      Description: "iShares International Equity Index",
    },
    "9166": {
      Description: "iShares Australian Listed Property Index",
    },
    "9206": {
      Description: "MLC Wholesale Horizon 6 Share Portfolio",
    },
    "9207": {
      Description: "MLC Wholesale Horizon 3 Conservative Gr",
    },
    "9208": {
      Description: "MLC Wholesale Horizon 7 Accelerated Gr",
    },
    "9209": {
      Description: "MLC UT/MKey InvSer Horizon 6 - Shares",
    },
    "9210": {
      Description: "MLC UT/MKey InvSer Horizon 3-Conserv Gr",
    },
    "9211": {
      Description: "MLC UT/MKey InvSerT Horizon 7 - Acc Gr",
    },
    "9227": {
      Description: "Sandhurst BMF-Sandhurst Future Leaders",
    },
    "9233": {
      Description: "Sandhurst BMF-Bendigo Balanced",
    },
    "9234": {
      Description: "Sandhurst BMF-Bendigo Conservative",
    },
    "9235": {
      Description: "Sandhurst BMF-Bendigo Growth",
    },
    "9246": {
      Description: "Aberdeen Std Fully Hdg Intl Eqs Fd",
    },
    "9257": {
      Description: "Aberdeen Std Australian Small Coms Fd",
    },
    "9310": {
      Description: "EQT Wholesale Mortgage Income",
    },
    "9323": {
      Description: "Lazard Select Australian Equity I Cl",
    },
    "9329": {
      Description: "AMP Capital Future Directions Growth",
    },
    "9358": {
      Description: "BT Ptnr Aus Share Gr 1 WS",
    },
    "9362": {
      Description: "BT Multi-Manager High Gr WS",
    },
    "9387": {
      Description: "Optimix WS-Global Smaller Companies",
    },
    "9391": {
      Description: "Antares Prof Elite Opportunities",
    },
    "9545": {
      Description: "Pendal Geared Imputation",
    },
    "9561": {
      Description: "Pendal Global Fixed Interest",
    },
    "9650": {
      Description: "Optimix Trusts-Global Smaller Co Share",
    },
    "9651": {
      Description: "Optimix Trusts-Global Smaller Co Shr NE",
    },
    "9652": {
      Description: "CFS FC Inv-Lazard Select Aus Equity",
    },
    "9653": {
      Description: "CFS FC Inv-FirstChoice Aus Small Co",
    },
    "9654": {
      Description: "CFS FC Inv-Nikko AM Aus Share Conc",
    },
    "9655": {
      Description: "CFS FC Inv-Platinum International",
    },
    "9825": {
      Description: "BT Ptnr Aus Share Gr 1 Retail",
    },
    "9829": {
      Description: "BT Multi-Manager Bal Retail",
    },
    "9830": {
      Description: "BT Multi-Manager Cons Retail",
    },
    "9831": {
      Description: "BT Multi-Manager High Gr Retail",
    },
    "9832": {
      Description: "BT Multi-Manager Gr Retail",
    },
    "9834": {
      Description: "Macquarie Wholesale Australian Equities",
    },
    "9835": {
      Description: "Perpetual Wholesale Geared Australian",
    },
    "9836": {
      Description: "Perpetual W Share Plus L/S",
    },
    "9839": {
      Description: "Macquarie Dynamic Bond",
    },
    "9840": {
      Description: "Macquarie Australian Equities",
    },
    "9841": {
      Description: "Macquarie True Index Aust Fixed Interest",
    },
    "9842": {
      Description: "Macquarie Index Tracking Global Bond",
    },
    "9843": {
      Description: "Macquarie True Index Listed Property",
    },
    "9852": {
      Description: "OC Premium Small Companies",
    },
    "9853": {
      Description: "OC Dynamic Equity",
    },
    "9856": {
      Description: "BlackRock Advantage Hedged Intl Equity",
    },
    "9864": {
      Description: "Russell Portfolio Series Conservative B",
    },
    "9865": {
      Description: "Russell Portfolio Series Balanced B",
    },
    "9866": {
      Description: "Russell Portfolio Series Growth B",
    },
    "9894": {
      Description: "Platinum Asia",
    },
    "9949": {
      Description: "AMP FLI-FD Conservative",
    },
    "9950": {
      Description: "AMP FLI-FD Moderately Conservative",
    },
    "9951": {
      Description: "AMP FLI-Future Directions Balanced",
    },
    "9952": {
      Description: "AMP FLI-FD Growth",
    },
    "9953": {
      Description: "AMP FLI-FD High Growth",
    },
    "9954": {
      Description: "AMP FLI-FD Australian Bond",
    },
    "9955": {
      Description: "AMP FLI-FD International Bond",
    },
    "9956": {
      Description: "Yarra Enhanced Income Fund (Direct)",
    },
    "9957": {
      Description: "Yarra Enhanced Income Fund",
    },
    "9958": {
      Description: "Macquarie True Index Australian Shares",
    },
    "9984": {
      Description: "CFS FC W Inv-Lazard W Select Aus Equity",
    },
    "10006": {
      Description: "Optimix WS-Moderate Trust",
    },
    "10007": {
      Description: "BT-Aberdeen Act Hgd Intl Eq",
    },
    "10009": {
      Description: "BT-Platinum International",
    },
    "10010": {
      Description: "BT-Schroder Aus Share",
    },
    "10012": {
      Description: "BT-Investor Mutual Aus Shares",
    },
    "10013": {
      Description: "BT-BlackRock Scientific Div Gr",
    },
    "10014": {
      Description: "BT-Schroder Balanced",
    },
    "10015": {
      Description: "BT-Perpetual Cons Gr",
    },
    "10017": {
      Description: "BT Schroder Credit Securities",
    },
    "10018": {
      Description: "BT-UBS Diversified Fixed Income",
    },
    "10020": {
      Description: "AMP Capital W Australian Equity Value",
    },
    "10148": {
      Description: "Smallco Investment",
    },
    "10157": {
      Description: "UBS Global Credit Fund",
    },
    "10158": {
      Description: "ipac Pathways 30",
    },
    "10159": {
      Description: "ipac Pathways 70",
    },
    "10160": {
      Description: "ipac Pathways 85",
    },
    "10161": {
      Description: "ipac Pathways 95",
    },
    "10162": {
      Description: "ipac Pathways Aust Prop Securities",
    },
    "10163": {
      Description: "ipac Pathways Australian Shares",
    },
    "10164": {
      Description: "ipac Pathways Intl Shares - Hedged",
    },
    "10165": {
      Description: "ipac Pathways Intl Shares - Unhedged",
    },
    "10167": {
      Description: "Alphinity Sustainable Share",
    },
    "10169": {
      Description: "OnePath OA IP-BlackRock Sci Div Gr EF",
    },
    "10277": {
      Description: "OnePath OA IP-BlackRock Sci Div Gr NE",
    },
    "10278": {
      Description: "OnePath OA IP-BlackRock Sci Intl Eq EF",
    },
    "10279": {
      Description: "OnePath OA IP-BlackRock Sci Intl Eq NE",
    },
    "10280": {
      Description: "OnePath OA IP-OP Capital Stable EF",
    },
    "10281": {
      Description: "OnePath OA IP-OP Capital Stable NE",
    },
    "10282": {
      Description: "OnePath OA IP-SG Hiscock Property-EF/Sel",
    },
    "10283": {
      Description: "OnePath OA IP-SG Hiscock Property-NEF",
    },
    "10284": {
      Description: "OnePath OA IP-OP Dvrs Crdt EF",
    },
    "10285": {
      Description: "OnePath OA IP-OP Dvrs Crdt NE",
    },
    "10286": {
      Description: "OnePath OA IP-OP Diversified Fix Int NE",
    },
    "10287": {
      Description: "OnePath OA IP-OP Sust Inv Aus Share EF",
    },
    "10288": {
      Description: "OnePath OA IP-OP Sust Inv Aus Share NE",
    },
    "10289": {
      Description: "OnePath OA IP-IML Australian Share EF",
    },
    "10290": {
      Description: "OnePath OA IP-IML Australian Share NE",
    },
    "10291": {
      Description: "OnePath OA IP-OP Managed Growth EF",
    },
    "10292": {
      Description: "OnePath OA IP-OP Managed Growth NE",
    },
    "10293": {
      Description: "OnePath OA IP-Platinum International EF",
    },
    "10294": {
      Description: "OnePath OA IP-Platinum International NE",
    },
    "10295": {
      Description: "OnePath OA IP-Optimix Property Sec EF",
    },
    "10296": {
      Description: "OnePath OA IP-Optimix Property Sec NE",
    },
    "10297": {
      Description: "OnePath OA IP-Optimix Aus Fixed Int EF",
    },
    "10298": {
      Description: "OnePath OA IP-Optimix Aus Fixed Int NE",
    },
    "10299": {
      Description: "OnePath OA IP-Optimix Australian Shr EF",
    },
    "10300": {
      Description: "OnePath OA IP-Optimix Australian Shr NE",
    },
    "10301": {
      Description: "OnePath OA IP-Optimix Balanced EF",
    },
    "10302": {
      Description: "OnePath OA IP-Optimix Balanced NE",
    },
    "10303": {
      Description: "OnePath OA IP-Optimix Conservative EF",
    },
    "10304": {
      Description: "OnePath OA IP-Optimix Conservative NE",
    },
    "10305": {
      Description: "OnePath OA IP-Optimix Enhanced Cash EF",
    },
    "10306": {
      Description: "OnePath OA IP-Optimix Enhanced Cash NE",
    },
    "10307": {
      Description: "OnePath OA IP-Optimix Global Bal Shr EF",
    },
    "10308": {
      Description: "OnePath OA IP-Optimix Global Bal Shr NE",
    },
    "10309": {
      Description: "OnePath OA IP-Optimix Growth EF",
    },
    "10310": {
      Description: "OnePath OA IP-Optimix Growth NE",
    },
    "10311": {
      Description: "OnePath OA IP-Optimix High Growth EF",
    },
    "10312": {
      Description: "OnePath OA IP-Optimix High Growth NE",
    },
    "10313": {
      Description: "OnePath OA IP-Optimix Moderate EF",
    },
    "10314": {
      Description: "OnePath OA IP-Optimix Moderate NE",
    },
    "10315": {
      Description: "OnePath OA IP-Perpetual Balanced Gr EF",
    },
    "10316": {
      Description: "OnePath OA IP-Perpetual Balanced Gr NE",
    },
    "10317": {
      Description: "OnePath OA IP-Perpetual Cons Growth EF",
    },
    "10318": {
      Description: "OnePath OA IP-Perpetual Cons Growth NE",
    },
    "10319": {
      Description: "OnePath OA IP-Schroders Australian Eq EF",
    },
    "10320": {
      Description: "OnePath OA IP-Schroders Australian Eq NE",
    },
    "10321": {
      Description: "OnePath OA IP-Schroders Balanced EF",
    },
    "10322": {
      Description: "OnePath OA IP-Schroders Balanced NE",
    },
    "10323": {
      Description: "OnePath OA IP-OP Select Leaders EF",
    },
    "10324": {
      Description: "OnePath OA IP-OP Select Leaders NE",
    },
    "10325": {
      Description: "OnePath OA IP-UBS Defensive EF",
    },
    "10326": {
      Description: "OnePath OA IP-UBS Defensive NE",
    },
    "10327": {
      Description: "OnePath OA IP-Optimix Gbl Bal SmCo S2 EF",
    },
    "10328": {
      Description: "OnePath OA IP-Optimix Gbl Bal SmCo S2 NE",
    },
    "10329": {
      Description: "OnePath OA IP-OP Diversified Fix Int EF",
    },
    "10330": {
      Description: "OnePath OA IP-UBS Diversified Fix Inc EF",
    },
    "10331": {
      Description: "OnePath OA IP-UBS Diversified Fix Inc NE",
    },
    "10438": {
      Description: "Aberdeen Std Asian Opportunities Fd",
    },
    "10463": {
      Description: "Eley Griffiths Group Small Companies",
    },
    "10464": {
      Description: "Optimix Trusts-Moderate",
    },
    "10465": {
      Description: "Optimix Trusts-Moderate NE",
    },
    "10466": {
      Description: "Optimix Trusts-Australian Fixed Interest",
    },
    "10467": {
      Description: "Optimix Trusts-Australian Fixed Intr NE",
    },
    "10600": {
      Description: "Perpetual Wholesale Conservative Growth",
    },
    "10601": {
      Description: "Ausbil Australian Emerging Leaders",
    },
    "10603": {
      Description: "Morningstar Moderate Real Ret Fd - Cl A",
    },
    "10604": {
      Description: "Morningstar Growth Real Return Fd - Cl A",
    },
    "10605": {
      Description: "Morningstar Australian Shares Fund A",
    },
    "10606": {
      Description: "Morningstar Balanced Real Return Fund A",
    },
    "10607": {
      Description: "Baker Steel Gold",
    },
    "10622": {
      Description: "BT Active Bal Retail",
    },
    "10633": {
      Description: "AMP Capital Future Directions Balanced A",
    },
    "10634": {
      Description: "AMP Capital Future Directions Growth A",
    },
    "10636": {
      Description: "AMP Capital Future Directions Aus Bd",
    },
    "10637": {
      Description: "AMP Specialist Australian Share WT",
    },
    "10638": {
      Description: "AMP Capital Future Directions Cnsrv",
    },
    "10639": {
      Description: "AMP Capital Future Directions High Gr",
    },
    "10640": {
      Description: "AMP Capital Future Directions Intl Shr",
    },
    "10641": {
      Description: "AMP Capital Future Directions Mod Cnsrv",
    },
    "10642": {
      Description: "AMP Capital Future Directions Intl Bd",
    },
    "10700": {
      Description: "Lazard Australian Equity W",
    },
    "10701": {
      Description: "Lazard Global Small Cap W",
    },
    "10702": {
      Description: "Lazard Select Australian Equity W Cl",
    },
    "10710": {
      Description: "AMP Capital Balanced Growth",
    },
    "10711": {
      Description: "AMP Capital Conservative",
    },
    "10712": {
      Description: "AMP Capital High Growth",
    },
    "10715": {
      Description: "Macquarie Income Opportunities",
    },
    "10716": {
      Description: "Alphinity Australian Equity",
    },
    "10717": {
      Description: "WaveStone Australian Share",
    },
    "10723": {
      Description: "AMP Capital Balanced Growth A",
    },
    "10728": {
      Description: "IOOF Cash Management Trust",
    },
    "10729": {
      Description: "IOOF Income Trust",
    },
    "10730": {
      Description: "IOOF MultiMix Moderate Trust",
    },
    "10746": {
      Description: "AMP Capital Australian Small Companies",
    },
    "10751": {
      Description: "Bentham Global Income",
    },
    "10818": {
      Description: "K2 Asian Absolute Return",
    },
    "10819": {
      Description: "K2 Australian Absolute Return",
    },
    "10858": {
      Description: "Nikko AM Australian Bond",
    },
    "10862": {
      Description: "Schroder Fixed Income Fund - Wholesale",
    },
    "10872": {
      Description: "CFS Wholesale Global Credit Income",
    },
    "10874": {
      Description: "GMO Systematic Global Macro Trust A",
    },
    "10881": {
      Description: "PIMCO Australian Bond W",
    },
    "10882": {
      Description: "PIMCO Diversified Fixed Interest W",
    },
    "10883": {
      Description: "PIMCO Global Bond W",
    },
    "10884": {
      Description: "PIMCO Global Credit W",
    },
    "10891": {
      Description: "Sandhurst Select Mortgage",
    },
    "10892": {
      Description: "Sandhurst Cash Common Fund",
    },
    "10959": {
      Description: "AIMS Commercial Mortgage Wholesale",
    },
    "10966": {
      Description: "OnePath Tax Effective Income-WS",
    },
    "10974": {
      Description: "ipac Classic Portfolio 1",
    },
    "10975": {
      Description: "ipac Classic Portfolio 2",
    },
    "10976": {
      Description: "ipac Classic Portfolio 3",
    },
    "10993": {
      Description: "AMP FLI-BlackRock Sci Int Alpha Tilts",
    },
    "10994": {
      Description: "AMP FLI-UBS Property Securities",
    },
    "10997": {
      Description: "AMP FLI-Specialist Geared Aus Share",
    },
    "10998": {
      Description: "AMP FLI-AMP Aus Share Enhanced Index",
    },
    "11000": {
      Description: "AMP FLI-Schroder Global Active Value",
    },
    "11002": {
      Description: "AMP FLI-Fidelity Global Equities",
    },
    "11007": {
      Description: "AMP FLI-BlackRock Sci Hgd Int Alpha Tilt",
    },
    "11009": {
      Description: "AMP FLI-Perennial Value Aust Share",
    },
    "11010": {
      Description: "AMP FLI-Ironbark Karara Australian Share",
    },
    "11011": {
      Description: "AMP FLI- Yarra Cap Mngmt Aust Eq",
    },
    "11012": {
      Description: "AMP FLI-Alphinity Australian Share",
    },
    "11014": {
      Description: "AMP FLI-BT Australian Share",
    },
    "11035": {
      Description: "AMP FLI-Specialist Australian Shares",
    },
    "11036": {
      Description: "AMP FLI-Specialist International Shares",
    },
    "11062": {
      Description: "AMP Specialist International Share A",
    },
    "11063": {
      Description: "AMP Specialist International Shr (Hdg) A",
    },
    "11064": {
      Description: "PIMCO Australian Bond Fund",
    },
    "11065": {
      Description: "PIMCO Diversified Fixed Interest Fund",
    },
    "11067": {
      Description: "PIMCO Global Credit Fund",
    },
    "11079": {
      Description: "OnePath OA IP-OP High Growth NE",
    },
    "11080": {
      Description: "Optimix WS-Australian Fixed Interest A",
    },
    "11081": {
      Description: "Optimix WS-Property Trust A",
    },
    "11082": {
      Description: "Optimix WS-Australian Share A",
    },
    "11083": {
      Description: "Optimix WS-Balanced A",
    },
    "11084": {
      Description: "Optimix WS-Conservative A",
    },
    "11086": {
      Description: "Optimix WS-Global Shares A",
    },
    "11087": {
      Description: "Optimix WS-Global Smaller Companies A",
    },
    "11088": {
      Description: "Optimix WS-Growth A",
    },
    "11089": {
      Description: "Optimix WS-High Growth A",
    },
    "11090": {
      Description: "Optimix WS-Moderate A",
    },
    "11091": {
      Description: "CFS FC Inv-FirstChoice Lower Vol Aus",
    },
    "11092": {
      Description: "CFS FC Inv-CFS Global Credit Income",
    },
    "11093": {
      Description: "CFS FC Inv-Schroder Abs Return Inc",
    },
    "11094": {
      Description: "CFS FC Inv-Solaris Core Aus Equity",
    },
    "11095": {
      Description: "CFS FC Inv-Antares Elite Opport",
    },
    "11096": {
      Description: "CFS FC Inv-CFS Developing Companies",
    },
    "11097": {
      Description: "CFS FC Inv-CFS Future Leaders",
    },
    "11098": {
      Description: "CFS FC Inv-Investors Mutual Aus Shr",
    },
    "11099": {
      Description: "CFS FC Inv-Perennial Value Aus Shr",
    },
    "11100": {
      Description: "CFS FC Inv-Acadian Geared Aus Eq",
    },
    "11101": {
      Description: "CFS FC Inv-Altrinsic Global Equity",
    },
    "11102": {
      Description: "CFS FC Inv-FirstChoice Glb Small Co",
    },
    "11103": {
      Description: "CFS FC-Antares W Elite Opport",
    },
    "11104": {
      Description: "Acadian Geared Australian Equity",
    },
    "11132": {
      Description: "EQT Growth",
    },
    "11135": {
      Description: "Vanguard LifeStrategy Balanced",
    },
    "11164": {
      Description: "Advance Moderate Multi-Blend",
    },
    "11165": {
      Description: "Advance High Growth Multi-Blend",
    },
    "11166": {
      Description: "Advance Moderate Multi-Blend W",
    },
    "11167": {
      Description: "Advance Growth Multi-Blend W",
    },
    "11168": {
      Description: "Advance High Growth Multi-Blend W",
    },
    "11169": {
      Description: "Advance Property Sec Multi-Blend",
    },
    "11170": {
      Description: "Advance Int Fix Intr Multi-Blend",
    },
    "11171": {
      Description: "Advance Property Sec Multi-Blend W",
    },
    "11172": {
      Description: "Advance Aus Fixed Intr Multi-Blend W",
    },
    "11173": {
      Description: "Advance Int Fix Intr Multi-Blend W",
    },
    "11177": {
      Description: "Advance Cash Multi-Blend",
    },
    "11181": {
      Description: "Russell Conservative A",
    },
    "11182": {
      Description: "Russell Diversified 50 A",
    },
    "11183": {
      Description: "Russell Balanced A",
    },
    "11184": {
      Description: "Russell Growth A",
    },
    "11232": {
      Description: "Prime Value Growth",
    },
    "11233": {
      Description: "Prime Value Imputation",
    },
    "11234": {
      Description: "OnePath WS-Dvrs Crdt",
    },
    "11238": {
      Description: "ANZ OA IP-OP Dvrs Crdt EF",
    },
    "11239": {
      Description: "ANZ OA IP-OP Dvrs Crdt NE",
    },
    "11241": {
      Description: "SGH LaSalle Global Listed Property Secs",
    },
    "11242": {
      Description: "SGH Property Income",
    },
    "11287": {
      Description: "FirstChoice WS Defensive",
    },
    "11288": {
      Description: "FirstChoice WS Conservative",
    },
    "11289": {
      Description: "FirstChoice WS Moderate",
    },
    "11290": {
      Description: "FirstChoice WS Growth",
    },
    "11291": {
      Description: "FirstChoice Wholesale High Growth",
    },
    "11292": {
      Description: "FirstChoice WS Fixed Interest",
    },
    "11293": {
      Description: "FirstChoice WS Property Securities",
    },
    "11294": {
      Description: "FirstChoice WS Australian Share",
    },
    "11295": {
      Description: "CFS FC W Inv-FC W Lower Volatility Aus S",
    },
    "11296": {
      Description: "FirstChoice WS Aus Small Companies",
    },
    "11297": {
      Description: "FirstChoice WS Global Share",
    },
    "11298": {
      Description: "FirstChoice WS Multi-Index Conservative",
    },
    "11299": {
      Description: "CFS FC W Inv-Perpetual Cons Gr",
    },
    "11300": {
      Description: "FirstChoice WS Multi-Index Diversified",
    },
    "11301": {
      Description: "CFS FC W Inv-Perpetual Diversified Gr",
    },
    "11302": {
      Description: "CFS FC-Pendal W Active Balanced",
    },
    "11303": {
      Description: "FirstChoice WS Multi-Index Balanced",
    },
    "11304": {
      Description: "CFS FC W Inv-Perpetual Balanced Growth",
    },
    "11305": {
      Description: "FirstChoice WS Multi-Index High Growth",
    },
    "11306": {
      Description: "CFS FC W Inv-Aberdeen Std W Aus FixedInc",
    },
    "11307": {
      Description: "CFS FC-Schroder W Abs Return Inc",
    },
    "11308": {
      Description: "CFS FC-Pendal W Property Investment",
    },
    "11309": {
      Description: "CFS FC W Inv-Ironbark W Property Sec",
    },
    "11310": {
      Description: "CFS FC W Inv-Solaris W Core Aus Equity",
    },
    "11311": {
      Description: "CFS FC-Pendal W Australian Share",
    },
    "11312": {
      Description: "CFS FC W Inv-Ausbil W Aus Active Equity",
    },
    "11313": {
      Description: "CFS FC-State Street W Aus Equity",
    },
    "11314": {
      Description: "CFS FC W Inv-Maple-Brown Abb W Aus Shr",
    },
    "11315": {
      Description: "CFS FC-BlackRock W Adv Aus Shr",
    },
    "11316": {
      Description: "CFS FC W Inv-Perpetual Industrial Share",
    },
    "11317": {
      Description: "CFS FC W Inv-Schroder Australian Equity",
    },
    "11318": {
      Description: "CFS FC-Nikko AM W Aus Share Conc",
    },
    "11319": {
      Description: "CFS FC W Inv-Investors Mutual W Aus Shr",
    },
    "11320": {
      Description: "CFS FC W Inv-Perennial Value W Aus Shr",
    },
    "11321": {
      Description: "CFS Wholesale Developing Companies",
    },
    "11322": {
      Description: "CFS Wholesale Future Leaders",
    },
    "11323": {
      Description: "CFS FC W Inv-MFS W Global Equity",
    },
    "11324": {
      Description: "CFS FC-Altrinsic W Global Equity",
    },
    "11325": {
      Description: "CFS FC-Pendal W Core Global Share",
    },
    "11326": {
      Description: "CFS FC-T. Rowe Price W Glb Eqty",
    },
    "11327": {
      Description: "CFS FC W Inv-Perpetual W Global Share",
    },
    "11328": {
      Description: "CFS FC W Inv-Platinum International",
    },
    "11329": {
      Description: "FirstChoice WS Global Small Companies",
    },
    "11330": {
      Description: "CFS Wholesale Index Australian Bond",
    },
    "11331": {
      Description: "CFS Wholesale Index Property Securities",
    },
    "11332": {
      Description: "CFS Wholesale Index Australian Share",
    },
    "11333": {
      Description: "CFS Wholesale Index Global Share",
    },
    "11589": {
      Description: "Russell Aust Opportunities Class A",
    },
    "11591": {
      Description: "BT Ptnr Intl Shares Core 1 WS",
    },
    "11594": {
      Description: "Aberdeen Std Emerging Opports Fd",
    },
    "11595": {
      Description: "UBS Australian Small Companies Fund",
    },
    "11617": {
      Description: "AMP Gen-Defensive",
    },
    "11618": {
      Description: "AMP Gen-Moderately Defensive",
    },
    "11619": {
      Description: "AMP Gen-Balanced",
    },
    "11620": {
      Description: "AMP Gen-Growth",
    },
    "11621": {
      Description: "AMP Gen-High Growth",
    },
    "11622": {
      Description: "AMP Gen-Australian Equities",
    },
    "11623": {
      Description: "AMP Gen-International Equities Hedged",
    },
    "11624": {
      Description: "AMP Gen-International Equities Unhedged",
    },
    "11625": {
      Description: "AMP Gen-BlackRock Australian Equity",
    },
    "11626": {
      Description: "AMP Gen-BlackRock Aust Equity Index",
    },
    "11627": {
      Description: "AMP Gen-BlackRock Aust Fixed Int Ind",
    },
    "11628": {
      Description: "AMP Gen-BlackRock Intl Eq Ind Hedged",
    },
    "11629": {
      Description: "AMP Gen-BlackRock Intl Eq Ind Unhdgd",
    },
    "11630": {
      Description: "AMP Gen-BlackRock Intl Fix Int Ind",
    },
    "11631": {
      Description: "AMP Gen-BlackRock Prop Securities Ind",
    },
    "11632": {
      Description: "AMP Gen-Legg Mason Property Secs",
    },
    "11633": {
      Description: "AMP Gen-Aberdeen Global Equity",
    },
    "11634": {
      Description: "AMP Gen-Perpetual Industrial Equity",
    },
    "11635": {
      Description: "AMP Gen-PIMCO Global Fixed Interest",
    },
    "11636": {
      Description: "AMP Gen-Platinum International Equity",
    },
    "11637": {
      Description: "AMP Gen-P Partners High Gr Aust Eq",
    },
    "11638": {
      Description: "AMP Gen-Schroder Australian Equity",
    },
    "11639": {
      Description: "AMP Gen-UBS Australian Equity",
    },
    "11640": {
      Description: "AMP Gen-AMP Cash Mgmt",
    },
    "11642": {
      Description: "Platinum International Healthcare",
    },
    "11736": {
      Description: "Morningstar Multi Asset Rl Ret Fd - Cl A",
    },
    "11737": {
      Description: "Morningstar High Growth Rl Ret Fd - Cl A",
    },
    "11738": {
      Description: "Morningstar Growth Fund - Class A",
    },
    "11739": {
      Description: "Morningstar Balanced Fund - Class A",
    },
    "11740": {
      Description: "Morningstar Moderate Fund - Class A",
    },
    "11741": {
      Description: "Morningstar Conservative Fund - Class A",
    },
    "11743": {
      Description: "Morningstar Intl Shrs (Unhdgd) Fd - Cl A",
    },
    "11745": {
      Description: "Morningstar Intl Shrs (Hdg) Fd - Cl A",
    },
    "11748": {
      Description: "Morningstar Cash Fund - Class A",
    },
    "11769": {
      Description: "Pendal Enhanced Cash",
    },
    "11770": {
      Description: "Pendal Managed Cash",
    },
    "11771": {
      Description: "Bentham Syndicated Loan",
    },
    "11773": {
      Description: "Bentham Professional Global Income",
    },
    "11783": {
      Description: "CFS FC Inv-CFS Index Property Sec",
    },
    "11784": {
      Description: "CFS FC Inv-PM Capital Enhanced Yld",
    },
    "11785": {
      Description: "CFS FC Inv-Ironbark Karara Aus Shr",
    },
    "11786": {
      Description: "CFS FC Inv-APN AREIT",
    },
    "11787": {
      Description: "CFS FC Inv-CFS Global Property Sec",
    },
    "11806": {
      Description: "CFS Wholesale Global Property Sec",
    },
    "11807": {
      Description: "CFS FC-APN Wholesale AREIT",
    },
    "11808": {
      Description: "CFS FC W Inv-PM Capital Enhanced Yield",
    },
    "11809": {
      Description: "CFS FC-Ironbark Karara W Aus Share",
    },
    "11929": {
      Description: "OnePath OA IP-BlackRock Sci Aus Eq EF",
    },
    "11930": {
      Description: "OnePath OA IP-BlackRock Sci Aus Eq NE",
    },
    "11931": {
      Description: "OnePath OA IP-Pendal Smlr Coms EF",
    },
    "11932": {
      Description: "OnePath OA IP-Pendal Smlr Coms NE",
    },
    "11933": {
      Description: "OnePath OA IP-IOOF/Perennial Val Shr EF",
    },
    "11934": {
      Description: "OnePath OA IP-IOOF/Perennial Val Shr NE",
    },
    "12106": {
      Description: "Life Settlements Wholesale",
    },
    "12108": {
      Description: "Principal Global Credit Opportunities",
    },
    "12113": {
      Description: "Ironbark Global (ex-Aus) Property Secs",
    },
    "12114": {
      Description: "Ironbark Global Property Securities",
    },
    "12116": {
      Description: "ipac Classic Value Portfolio",
    },
    "12140": {
      Description: "BT WE BT Macquarie Diversified Fixed Int",
    },
    "12141": {
      Description: "BT WE BT PM Capital Enhanced Yield",
    },
    "12144": {
      Description: "BT WE BT Investors Mutual Industrial Shr",
    },
    "12145": {
      Description: "BT WE Vanguard International Shares Indx",
    },
    "12147": {
      Description: "BT Ptnr Intl Shares Core 1 Retail",
    },
    "12148": {
      Description: "BT Global Property Retail",
    },
    "12149": {
      Description: "BT WE Vanguard Australian Shares Index",
    },
    "12152": {
      Description: "Perpetual High Grade Treasury",
    },
    "12153": {
      Description: "Perpetual Credit Income",
    },
    "12160": {
      Description: "IFP Global Franchise",
    },
    "12161": {
      Description: "Russell High Growth C",
    },
    "12162": {
      Description: "Russell Global Opportunities A",
    },
    "12163": {
      Description: "Russell Australian Share A",
    },
    "12164": {
      Description: "Russell International Shares A",
    },
    "12165": {
      Description: "Russell International Shares Hedged A",
    },
    "12166": {
      Description: "Russell Intl Property Secs Hedged A",
    },
    "12177": {
      Description: "Alphinity Concentrated Australian Share",
    },
    "12178": {
      Description: "Lincoln Wholesale Australian Growth",
    },
    "12230": {
      Description: "Mercer Australian Shares",
    },
    "12231": {
      Description: "Mercer Australian Small Companies",
    },
    "12232": {
      Description: "Mercer Cash Fund - Cash Units",
    },
    "12233": {
      Description: "Mercer Conservative Growth",
    },
    "12236": {
      Description: "Mercer High Growth",
    },
    "12237": {
      Description: "Mercer Growth",
    },
    "12238": {
      Description: "Mercer Moderate Growth",
    },
    "12239": {
      Description: "Mercer International Shares Fund",
    },
    "12240": {
      Description: "Mercer Hedged International Shares Fund",
    },
    "12241": {
      Description: "Mercer Global Small Companies SharesFund",
    },
    "12242": {
      Description: "Mercer Diversified Shares Fund",
    },
    "12244": {
      Description: "Man OM-IP 15seven Ltd",
    },
    "12257": {
      Description: "Vanguard High Yield Australian Shares",
    },
    "12260": {
      Description: "Pengana Emerging Companies",
    },
    "12285": {
      Description: "Investors Mutual Equity Income",
    },
    "12289": {
      Description: "Elstree Enhanced Income",
    },
    "12292": {
      Description: "Fidelity Australian Equities",
    },
    "12294": {
      Description: "Mutual 50 Leaders Australian Shares",
    },
    "12308": {
      Description: "AMP FLI-AMP Intl Share Enhanced Index",
    },
    "12309": {
      Description: "AMP FLI-Perpetual Industrial Share",
    },
    "12310": {
      Description: "AMP FLI-Schroder Australian Equity",
    },
    "12320": {
      Description: "AMP FLI-Specialist Aus Small Companies",
    },
    "12321": {
      Description: "AMP FLI-Specialist Hedged Int Shares",
    },
    "12322": {
      Description: "AMP FLI-Specialist Property & Infras",
    },
    "12326": {
      Description: "MFS Fully Hedged Global Equity Trust",
    },
    "12328": {
      Description: "Candriam Sustainable Global Equity",
    },
    "12329": {
      Description: "Walter Scott Global Equity",
    },
    "12338": {
      Description: "Netwealth Australian Equities Index",
    },
    "12339": {
      Description: "Netwealth Index Opportunities Balanced",
    },
    "12340": {
      Description: "Netwealth Index Opportunities Cnsrv",
    },
    "12341": {
      Description: "Netwealth Active 50/50 Balanced",
    },
    "12342": {
      Description: "Netwealth Active 90/10 High Growth",
    },
    "12343": {
      Description: "Netwealth International Equities Index",
    },
    "12344": {
      Description: "Netwealth Australian Property Index",
    },
    "12345": {
      Description: "K2 Select International Absolute Return",
    },
    "12350": {
      Description: "NovaPort Microcap",
    },
    "12352": {
      Description: "AMP Capital Global Property Securities",
    },
    "12353": {
      Description: "AMP Capital Global Property Securities A",
    },
    "12366": {
      Description: "Templeton Global Equity",
    },
    "12370": {
      Description: "AUI Wholesale Cash Fund",
    },
    "12386": {
      Description: "CFS FC Inv-CFS Target Return Income",
    },
    "12389": {
      Description: "CFS FC Inv-Pendal Monthly Inc Plus",
    },
    "12392": {
      Description: "CFS FC Inv-Celeste Aus Small Co",
    },
    "12397": {
      Description: "CFS FC-Pendal W Monthly Inc Plus",
    },
    "12400": {
      Description: "CFS FC W Inv-Celeste W Aus Small Co",
    },
    "12403": {
      Description: "Acadian Sus Wholesale Glb Equity",
    },
    "12404": {
      Description: "CFS FC Inv-Acadian Sus Glb Equity",
    },
    "12410": {
      Description: "CFS Wholesale Target Return Income",
    },
    "12419": {
      Description: "Global All Weather A Class",
    },
    "12420": {
      Description: "Global All Weather B Class",
    },
    "12421": {
      Description: "Global Pure Alpha A Class",
    },
    "12422": {
      Description: "Global Pure Alpha B Class",
    },
    "12425": {
      Description: "BT PPSI-BT WS Ptnr Aus Shr Gr 1",
    },
    "12429": {
      Description: "BT PPSI-BT WS Core Hedged Global",
    },
    "12430": {
      Description: "BT PPSI-MLC Income Builder",
    },
    "12431": {
      Description: "BT PPSI-Schroder W Aus Equity",
    },
    "12432": {
      Description: "BT PPSI-Schroder Hybrid Securities",
    },
    "12433": {
      Description: "BT PPSI-UBS Aus Share",
    },
    "12434": {
      Description: "BT PPSI-UBS International Share",
    },
    "12435": {
      Description: "BT PPSI-BT WS European",
    },
    "12436": {
      Description: "BT PPSI-CFS WS High Growth",
    },
    "12438": {
      Description: "BT PPSI-BT WS Core Gbl Share",
    },
    "12441": {
      Description: "BT PPSI-Aberdeen SI Act Hgd Intl Eq",
    },
    "12442": {
      Description: "BT PPSI-Westpac Ins Aus Sust Shr",
    },
    "12445": {
      Description: "BT PPSI-Macquarie Mas Fixed Interest",
    },
    "12446": {
      Description: "BT PPSI-Macquarie Mas Property Secs",
    },
    "12447": {
      Description: "BT PPSI-Macquarie Mas Enhanced Cash",
    },
    "12448": {
      Description: "BT PPSI-BlackRock Scientific Aus Eq",
    },
    "12449": {
      Description: "BT PPSI-Ironbark Global Div Alternatives",
    },
    "12450": {
      Description: "BT PPSI-Aberdeen Australian Equities",
    },
    "12453": {
      Description: "BT PPSI-BT WS Geared Imputation",
    },
    "12549": {
      Description: "Pendal Global Property Securities",
    },
    "12910": {
      Description: "Pendal Focus Australian Share",
    },
    "12912": {
      Description: "BlackRock Global Allocation Aus D",
    },
    "12913": {
      Description: "BlackRock P Invs Gbl Allocation Aus C",
    },
    "12915": {
      Description: "Schroder Fixed Income Fund - PC",
    },
    "12923": {
      Description: "DDH Preferred Income",
    },
    "12924": {
      Description: "Selector Australian Equities",
    },
    "12927": {
      Description: "APN Property for Income No. 2",
    },
    "12941": {
      Description: "ipac Pathways Value",
    },
    "12944": {
      Description: "AMP FLI-AMP Australian Bond",
    },
    "12945": {
      Description: "AMP FLI-AMP Capital Aus Prpty Secs",
    },
    "12946": {
      Description: "AMP FLI-AMP Balanced Index",
    },
    "12947": {
      Description: "AMP FLI-AMP Conservative Index",
    },
    "12950": {
      Description: "AMP FLI-Zurich American Cent Glbl Gr",
    },
    "12951": {
      Description: "AMP FLI-Res Inv Leaders Aus Share",
    },
    "12952": {
      Description: "AMP FLI-Res Inv Leaders Balanced",
    },
    "12953": {
      Description: "AMP FLI-Res Inv Leaders Conservative",
    },
    "12954": {
      Description: "AMP FLI-Res Inv Leaders Growth",
    },
    "12955": {
      Description: "AMP FLI-Res Inv Leaders Intl Share",
    },
    "12988": {
      Description: "Mercer Australian Shares Plus",
    },
    "12993": {
      Description: "Mercer Global Listed Property Fund",
    },
    "12997": {
      Description: "Perpetual Select Growth Fund",
    },
    "13016": {
      Description: "Fiducian Technology",
    },
    "13017": {
      Description: "Fiducian Geared Australian Shares",
    },
    "13029": {
      Description: "OnePath OA IP-Ausbil Aus Emg Leaders EF",
    },
    "13030": {
      Description: "OnePath OA IP-Ausbil Aus Emg Leaders NE",
    },
    "13033": {
      Description: "OnePath OA IP-CFS Global Credit Inc EF",
    },
    "13034": {
      Description: "OnePath OA IP-CFS Global Credit Inc NE",
    },
    "13035": {
      Description: "OnePath OA IP-Bentham Global Income EF",
    },
    "13036": {
      Description: "OnePath OA IP-Bentham Global Income NE",
    },
    "13038": {
      Description: "OnePath OA IP- Kapstream Abs Ret Inc EF",
    },
    "13039": {
      Description: "OnePath OA IP-Kapstream Abs Ret Inc NE",
    },
    "13040": {
      Description: "OnePath OA IP-Vangard Aus Shr Index EF",
    },
    "13041": {
      Description: "OnePath OA IP-Vangard Aus Shr Index NE",
    },
    "13042": {
      Description: "OnePath OA IP-Vangard Intl Sh Index H EF",
    },
    "13043": {
      Description: "OnePath OA IP-Vangard Intl Sh Index H NE",
    },
    "13044": {
      Description: "OnePath OA IP-Vangard Prp Sec Index EF",
    },
    "13045": {
      Description: "OnePath OA IP-Vangard Prp Sec Index NE",
    },
    "13144": {
      Description: "Foundation Conservative",
    },
    "13145": {
      Description: "Foundation Balanced",
    },
    "13146": {
      Description: "Foundation Assertive",
    },
    "13148": {
      Description: "Specialist Property",
    },
    "13149": {
      Description: "Specialist Global Shares Fund",
    },
    "13150": {
      Description: "Specialist Australian Shares",
    },
    "13154": {
      Description: "Armytage Strategic Opportunities Ret",
    },
    "13156": {
      Description: "AMP Capital Core Property A",
    },
    "13184": {
      Description: "Macquarie Aus Pure Indexed Equities",
    },
    "13185": {
      Description: "State Street International Eqs Idx Hg Tr",
    },
    "13186": {
      Description: "Premium China",
    },
    "13187": {
      Description: "Antares Prof Dividend Builder",
    },
    "13189": {
      Description: "Pendal Enhanced Property Securities",
    },
    "13195": {
      Description: "Bendigo Balanced Wholesale",
    },
    "13196": {
      Description: "Bendigo Conservative WS",
    },
    "13197": {
      Description: "Bendigo Growth WS",
    },
    "13198": {
      Description: "Zurich Investments Uhgd Gbl Thematic Shr",
    },
    "13199": {
      Description: "Zurich Investments Hgd Gbl Thematic Shr",
    },
    "13201": {
      Description: "Invesco WS Global Property Secs-Class A",
    },
    "13202": {
      Description: "SGH20",
    },
    "13205": {
      Description: "Prime Value Imputation B",
    },
    "13206": {
      Description: "Prime Value Growth B",
    },
    "13286": {
      Description: "Charter Hall Direct Office",
    },
    "13287": {
      Description: "Macquarie International Infra Ses",
    },
    "13289": {
      Description: "Charter Hall Maxim Property Securities",
    },
    "13300": {
      Description: "Arrow Primary Infrastructure",
    },
    "13304": {
      Description: "AMP Specialist Australian Small Coms A",
    },
    "13305": {
      Description: "Dimensional Two-Year Diversified F/I",
    },
    "13312": {
      Description: "Perpetual Wholesale Smaller Companies 2",
    },
    "13313": {
      Description: "Fidelity China",
    },
    "13314": {
      Description: "Fidelity India",
    },
    "13316": {
      Description: "Fidelity Asia",
    },
    "13319": {
      Description: "Fidelity Hedged Global Equities",
    },
    "13327": {
      Description: "Pre Select Conservative",
    },
    "13328": {
      Description: "Pre Select Balanced",
    },
    "13329": {
      Description: "Pre Select Growth",
    },
    "13330": {
      Description: "Pre Select High Growth",
    },
    "13341": {
      Description: "Access Pre Select Conservative",
    },
    "13342": {
      Description: "Access Pre Select Balanced",
    },
    "13343": {
      Description: "Access Pre Select Growth",
    },
    "13344": {
      Description: "Access Pre Select High Growth",
    },
    "13380": {
      Description: "Schroder Global Value Fund (Hedged) - WC",
    },
    "13400": {
      Description: "MLC WS Inflation Plus - Assertive",
    },
    "13401": {
      Description: "MLC Inflation Plus Assertive Portfolio B",
    },
    "13402": {
      Description: "MLC Wholesale Horizon 1 Bond Portfolio",
    },
    "13403": {
      Description: "MLC Wholesale Horizon 2 Income Portfolio",
    },
    "13422": {
      Description: "Bentham Professional Syndicated Loan",
    },
    "13423": {
      Description: "Yarra Australian Real Assets Secs Fund",
    },
    "13426": {
      Description: "Vanguard International Property Secs Idx",
    },
    "13427": {
      Description: "Vanguard International Prpty Secs IdxHdg",
    },
    "13429": {
      Description: "Mercer Diversified Alternatives",
    },
    "13432": {
      Description: "Nikko AM New Asia",
    },
    "13443": {
      Description: "Perpetual Wholesale Diversified Income",
    },
    "13444": {
      Description: "Perpetual WFI-Perpetual Diversified Inc",
    },
    "13447": {
      Description: "BlackRock Global Allocation Aus S",
    },
    "13449": {
      Description: "Ganes Focused Value",
    },
    "13457": {
      Description: "Lazard Global Listed Infrastructure",
    },
    "13462": {
      Description: "AMP Specialist Geared Australian Share A",
    },
    "13522": {
      Description: "Acadian Wholesale Australian Equity",
    },
    "13523": {
      Description: "CFS FC W Inv-Fidelity Aus Equities",
    },
    "13525": {
      Description: "Acadian Wholesale Aus Equity Long Short",
    },
    "13526": {
      Description: "CFS FC W Inv-PM Capital W Glb Companies",
    },
    "13527": {
      Description: "FirstChoice Wholesale Multi-Index Growth",
    },
    "13528": {
      Description: "FirstChoice WS Global Share - Hedged",
    },
    "13529": {
      Description: "CFS Wholesale Index Global Share-Hedged",
    },
    "13546": {
      Description: "CFS FC Inv-Acadian Aus Equity",
    },
    "13547": {
      Description: "CFS FC Inv-Fidelity Aus Equities",
    },
    "13549": {
      Description: "CFS FC Inv-Acadian Aus Equity LS",
    },
    "13550": {
      Description: "CFS FC Inv-PM Capital Glb Companies",
    },
    "13551": {
      Description: "CFS FC Inv-FC Multi-Index Gro",
    },
    "13552": {
      Description: "CFS FC Inv-FirstChoice Glb Shr-Hgd",
    },
    "13553": {
      Description: "CFS FC Inv-CFS Index Global Shr-Hgd",
    },
    "13583": {
      Description: "BT PPSI-Platinum International",
    },
    "13584": {
      Description: "ANZ OA IP-BlackRock Sci Intl Equity EF",
    },
    "13585": {
      Description: "ANZ OA IP-BlackRock Sci Intl Equity NE",
    },
    "13588": {
      Description: "ANZ OA IP-MFS Global Equity EF",
    },
    "13589": {
      Description: "ANZ OA IP-MFS Global Equity NE",
    },
    "13590": {
      Description: "ANZ OA Inv-Magellan Global EF",
    },
    "13591": {
      Description: "ANZ OA Inv-Magellan Global NEF",
    },
    "13592": {
      Description: "ANZ OA IP-Platinum International EF",
    },
    "13593": {
      Description: "ANZ OA IP-Platinum International NE",
    },
    "13594": {
      Description: "ANZ OA IP-Vanguard Intl Shares Index EF",
    },
    "13595": {
      Description: "ANZ OA IP-Vanguard Intl Shares Index NE",
    },
    "13596": {
      Description: "ANZ OA Inv-Antipodes Glbl(Lg only)EF/Sel",
    },
    "13597": {
      Description: "ANZ OA Inv-Antipodes Global (Lg only)NEF",
    },
    "13602": {
      Description: "ANZ OA Inv-Arrowstreet Global Eq Hdg EF",
    },
    "13603": {
      Description: "ANZ OA Inv-Arrowstreet Global Eq Hdg NEF",
    },
    "13604": {
      Description: "ANZ OA IP-OP Active Growth EF",
    },
    "13605": {
      Description: "ANZ OA IP-OP Active Growth NE",
    },
    "13606": {
      Description: "ANZ OA IP-Ausbil Aus Emerging Leaders EF",
    },
    "13607": {
      Description: "ANZ OA IP-Ausbil Aus Emerging Leaders NE",
    },
    "13608": {
      Description: "ANZ OA IP-OP Australian Shares NE",
    },
    "13609": {
      Description: "ANZ OA IP-BlackRock Sci Aus Equity EF",
    },
    "13610": {
      Description: "ANZ OA IP-BlackRock Sci Aus Equity NE",
    },
    "13611": {
      Description: "ANZ OA IP-BlackRock Sci Div Growth EF",
    },
    "13612": {
      Description: "ANZ OA IP-BlackRock Sci Div Growth NE",
    },
    "13613": {
      Description: "ANZ OA IP-Pendal Smlr Coms EF",
    },
    "13614": {
      Description: "ANZ OA IP-Pendal Smlr Coms NE",
    },
    "13615": {
      Description: "ANZ OA IP-OP Balanced NE",
    },
    "13616": {
      Description: "ANZ OA IP-OP Blue Chip Imputation NE",
    },
    "13617": {
      Description: "ANZ OA Inv-Schroder Real Return Trust EF",
    },
    "13618": {
      Description: "ANZ OA Inv-Schroder Real Return Tr NEF",
    },
    "13619": {
      Description: "ANZ OA IP-CFS Global Credit Income EF",
    },
    "13620": {
      Description: "ANZ OA IP-CFS Global Credit Income NE",
    },
    "13621": {
      Description: "ANZ OA IP-CFS Imputation EF",
    },
    "13622": {
      Description: "ANZ OA IP-CFS Imputation NE",
    },
    "13623": {
      Description: "ANZ OA IP-OP Conservative NE",
    },
    "13624": {
      Description: "ANZ OA IP-OP Cash EF",
    },
    "13625": {
      Description: "ANZ OA IP-OP Cash NE",
    },
    "13627": {
      Description: "ANZ OA IP-Bentham Global Income EF",
    },
    "13628": {
      Description: "ANZ OA IP-Bentham Global Income NE",
    },
    "13629": {
      Description: "ANZ OA Inv-Pendal Cor H Glb EF/Sel",
    },
    "13630": {
      Description: "ANZ OA Inv-Pendal Cor H Glb NEF",
    },
    "13631": {
      Description: "ANZ OA IP-SG Hiscock Property EF",
    },
    "13632": {
      Description: "ANZ OA IP-SG Hiscock Property NEF",
    },
    "13634": {
      Description: "ANZ OA IP-OP Global Share EF",
    },
    "13635": {
      Description: "ANZ OA IP-OP Global Share NE",
    },
    "13636": {
      Description: "ANZ OA IP-OP High Growth EF",
    },
    "13637": {
      Description: "ANZ OA IP-OP High Growth NE",
    },
    "13638": {
      Description: "ANZ OA IP-OP Diversified Fixed Int NE",
    },
    "13639": {
      Description: "ANZ OA IP-OP Global Emerging Markets EF",
    },
    "13640": {
      Description: "ANZ OA IP-OP Global Emerging Markets NE",
    },
    "13641": {
      Description: "ANZ OA IP-OP Sustainable Inv Aus EF",
    },
    "13642": {
      Description: "ANZ OA IP-OP Sustainable Inv Aus NE",
    },
    "13643": {
      Description: "ANZ OA IP-IOOF/Perennial Value Share EF",
    },
    "13644": {
      Description: "ANZ OA IP-IOOF/Perennial Value Share NE",
    },
    "13645": {
      Description: "ANZ OA IP-OP Income NE",
    },
    "13646": {
      Description: "ANZ OA IP-Investors Mutual Aus Shares EF",
    },
    "13647": {
      Description: "ANZ OA IP-Investors Mutual Aus Shares NE",
    },
    "13648": {
      Description: "ANZ OA IP-OP Managed Growth NE",
    },
    "13649": {
      Description: "ANZ OA IP-Kapstream Abs Ret Income EF",
    },
    "13650": {
      Description: "ANZ OA IP-Kapstream Abs Ret Income NE",
    },
    "13651": {
      Description: "ANZ OA IP-OnePath Mortgage EF",
    },
    "13652": {
      Description: "ANZ OA IP-OnePath Mortgage NE",
    },
    "13653": {
      Description: "ANZ OA IP-Optimix Aus Fixed Interest EF",
    },
    "13654": {
      Description: "ANZ OA IP-Optimix Aus Fixed Interest NE",
    },
    "13655": {
      Description: "ANZ OA IP-Optimix Property Securities EF",
    },
    "13656": {
      Description: "ANZ OA IP-Optimix Property Securities NE",
    },
    "13657": {
      Description: "ANZ OA IP-Optimix Australian Shares EF",
    },
    "13658": {
      Description: "ANZ OA IP-Optimix Australian Shares NE",
    },
    "13659": {
      Description: "ANZ OA IP-Optimix Balanced EF",
    },
    "13660": {
      Description: "ANZ OA IP-Optimix Balanced NE",
    },
    "13661": {
      Description: "ANZ OA IP-Optimix Conservative EF",
    },
    "13662": {
      Description: "ANZ OA IP-Optimix Conservative NE",
    },
    "13665": {
      Description: "ANZ OA IP-Optimix Gbl Small Companies EF",
    },
    "13666": {
      Description: "ANZ OA IP-Optimix Gbl Small Companies NE",
    },
    "13667": {
      Description: "ANZ OA IP-Optimix Global Shares EF",
    },
    "13668": {
      Description: "ANZ OA IP-Optimix Global Shares NE",
    },
    "13669": {
      Description: "ANZ OA IP-Optimix Growth EF",
    },
    "13670": {
      Description: "ANZ OA IP-Optimix Growth NE",
    },
    "13671": {
      Description: "ANZ OA IP-Optimix High Growth EF",
    },
    "13672": {
      Description: "ANZ OA IP-Optimix High Growth NE",
    },
    "13673": {
      Description: "ANZ OA IP-Optimix Moderate EF",
    },
    "13674": {
      Description: "ANZ OA IP-Optimix Moderate NE",
    },
    "13675": {
      Description: "ANZ OA IP-Perpetual Australian Shares EF",
    },
    "13676": {
      Description: "ANZ OA IP-Perpetual Australian Shares NE",
    },
    "13677": {
      Description: "ANZ OA IP-Perpetual Balanced Growth EF",
    },
    "13678": {
      Description: "ANZ OA IP-Perpetual Balanced Growth NE",
    },
    "13679": {
      Description: "ANZ OA IP-Perpetual Conservative Gr EF",
    },
    "13680": {
      Description: "ANZ OA IP-Perpetual Conservative Gr NE",
    },
    "13681": {
      Description: "ANZ OA IP-OP Property Securities EF",
    },
    "13682": {
      Description: "ANZ OA IP-OP Property Securities NE",
    },
    "13683": {
      Description: "ANZ OA IP-Schroder Australian Equity EF",
    },
    "13684": {
      Description: "ANZ OA IP-Schroder Australian Equity NE",
    },
    "13685": {
      Description: "ANZ OA IP-Schroder Balanced EF",
    },
    "13686": {
      Description: "ANZ OA IP-Schroder Balanced NE",
    },
    "13687": {
      Description: "ANZ OA IP-OP Select Leaders EF",
    },
    "13688": {
      Description: "ANZ OA IP-OP Tax Effective Income EF",
    },
    "13689": {
      Description: "ANZ OA IP-OP Tax Effective Income NE",
    },
    "13690": {
      Description: "ANZ OA IP-UBS Balanced EF",
    },
    "13691": {
      Description: "ANZ OA IP-UBS Balanced NE",
    },
    "13692": {
      Description: "ANZ OA IP-UBS Defensive EF",
    },
    "13693": {
      Description: "ANZ OA IP-UBS Defensive NE",
    },
    "13694": {
      Description: "ANZ OA IP-UBS Diversified Fixed Inc EF",
    },
    "13695": {
      Description: "ANZ OA IP-UBS Diversified Fixed Inc NE",
    },
    "13696": {
      Description: "ANZ OA IP-Vanguard Aus Shares Index EF",
    },
    "13697": {
      Description: "ANZ OA IP-Vanguard Aus Shares Index NE",
    },
    "13698": {
      Description: "ANZ OA IP-Vanguard Intl Shr Index H EF",
    },
    "13699": {
      Description: "ANZ OA IP-Vanguard Intl Shr Index H NE",
    },
    "13700": {
      Description: "ANZ OA IP-Vanguard Property Sec Index EF",
    },
    "13701": {
      Description: "ANZ OA IP-Vanguard Property Sec Index NE",
    },
    "13702": {
      Description: "ANZ OA IP-OP Income Plus EF",
    },
    "13703": {
      Description: "ANZ OA IP-OP Income Plus NE",
    },
    "14109": {
      Description: "Ironbark Royal London ConcentratedGlbShr",
    },
    "14110": {
      Description: "Ironbark Karara Australian Share",
    },
    "14111": {
      Description: "Ironbark Karara Australian Small Comp",
    },
    "14127": {
      Description: "Credit Suisse Global Private Equity Fund",
    },
    "14129": {
      Description: "DDH Australian Shares",
    },
    "14130": {
      Description: "DDH Conservative Growth",
    },
    "14131": {
      Description: "DDH Balanced Growth",
    },
    "14132": {
      Description: "DDH Aggressive Growth",
    },
    "14133": {
      Description: "CBG Australian Equities Fund",
    },
    "14138": {
      Description: "BT WE BlackRock Scntf Idx Aus Lstd Prpty",
    },
    "14139": {
      Description: "BT Geared Imputation Fund (Retail)",
    },
    "14167": {
      Description: "Pendal Enhanced Global Fixed Interest",
    },
    "14191": {
      Description: "North Professional Alternative Balanced",
    },
    "14192": {
      Description: "AMP Gen-Alternative Balanced Fund",
    },
    "14252": {
      Description: "AMP Gen-AMP Capital Diversified Credit",
    },
    "14253": {
      Description: "AMP Gen-CFS Geared Australian Share",
    },
    "14254": {
      Description: "Perennial Value Shares for Income Trust",
    },
    "14255": {
      Description: "AMP Capital Specialist Geared Aus Shr",
    },
    "14257": {
      Description: "AMP Capital Global Property Securities H",
    },
    "14258": {
      Description: "AMP Capital Core Property H",
    },
    "14260": {
      Description: "La Trobe Financial 12 Month Term Account",
    },
    "14261": {
      Description: "La Trobe Classic 48 Hour Account",
    },
    "14265": {
      Description: "Charter Hall Direct Office Wholesale",
    },
    "14268": {
      Description: "Resolution Capital Global Prpt Secs II",
    },
    "14288": {
      Description: "Acadian Wholesale Global Eqty Long Short",
    },
    "14291": {
      Description: "UBS Clarion Global Property SecuritiesFd",
    },
    "14317": {
      Description: "Bendigo Global Share",
    },
    "14318": {
      Description: "Dimensional Australian Core Equity Trust",
    },
    "14320": {
      Description: "Pendal MicroCap Opportunities",
    },
    "14322": {
      Description: "Aberdeen Std Diversified Fixed Inc Fd",
    },
    "14325": {
      Description: "Macquarie Australian Small Companies",
    },
    "14326": {
      Description: "Macquarie Australian Shares",
    },
    "14337": {
      Description: "Ventura Aust Opportunities",
    },
    "14339": {
      Description: "Russell High Growth A",
    },
    "14342": {
      Description: "OnePath OA IP Geared AusShr Id Tr EF/Sel",
    },
    "14343": {
      Description: "OnePath OA IP Geared Aus Shrs Idx Tr NEF",
    },
    "14350": {
      Description: "ANZ OA IP-OP Geared AusSh Id Tr EF/Sel",
    },
    "14351": {
      Description: "ANZ OA IP-OP Geared Aus Shrs Idx Tr NEF",
    },
    "14358": {
      Description: "OptiMix Trust-Geared Aus Shrs Idx Tr EF",
    },
    "14359": {
      Description: "OptiMix Trust-Geared Aus Shrs Idx Tr NEF",
    },
    "14367": {
      Description: "OnePath WS Geared Aus Shrs Idx Tr B",
    },
    "14369": {
      Description: "Platypus Australian Equities - Wholesale",
    },
    "14379": {
      Description: "AMP Capital Australian Small Companies H",
    },
    "14386": {
      Description: "Macquarie Tax Effective Aust Shares",
    },
    "14395": {
      Description: "AUI Diversified Property Fund",
    },
    "14440": {
      Description: "DDH Fixed Interest",
    },
    "14465": {
      Description: "Lifeplan FlexiGrowth High Yield Option",
    },
    "14466": {
      Description: "SGH ICE",
    },
    "14479": {
      Description: "T. Rowe Price Global Equity I",
    },
    "14560": {
      Description: "DDH Cash IDPS",
    },
    "14573": {
      Description: "Dimensional Global Core Equity Trust",
    },
    "14614": {
      Description: "ANZ OA Inv-OP Glb Prpty Secs Idx EF/Sel",
    },
    "14615": {
      Description: "ANZ OA Inv-OP Glb Prpty Secs Idx NEF",
    },
    "14616": {
      Description: "ANZ OA IP-BlackRock AA Alpha EF",
    },
    "14617": {
      Description: "ANZ OA IP-BlackRock AA Alpha NE",
    },
    "14632": {
      Description: "OnePath OA IP-Alternatives Growth EF",
    },
    "14633": {
      Description: "OnePath OA IP-Alternatives Growth NE",
    },
    "14634": {
      Description: "OnePath OA IP-OP Glb Prp Secs Idx EF/Sel",
    },
    "14635": {
      Description: "OnePath OA IP-OP Glb Prpty Secs Idx NEF",
    },
    "14651": {
      Description: "RARE Infrastructure Value Hedged",
    },
    "14653": {
      Description: "Greencape High Conviction",
    },
    "14654": {
      Description: "Greencape Broadcap",
    },
    "14739": {
      Description: "Arrowstreet Global Equity",
    },
    "14745": {
      Description: "Ironbark Copper Rock Global All Cap Shr",
    },
    "14765": {
      Description: "IOOF Capital Secure Trust",
    },
    "14774": {
      Description: "Morningstar Glb Prpty Secs (Hdg) Fd-Cl A",
    },
    "14777": {
      Description: "EQT Flagship Common No 2",
    },
    "14778": {
      Description: "EQT Wholesale Flagship",
    },
    "14791": {
      Description: "Investors Mutual Small Cap",
    },
    "14808": {
      Description: "AIMS Commercial Mortgage Ord Units",
    },
    "14814": {
      Description: "PIC Wholesale Australian Share",
    },
    "14817": {
      Description: "PIC Wholesale Global Share",
    },
    "14820": {
      Description: "PIC Wholesale Income Builder",
    },
    "14821": {
      Description: "PIC Wholesale Property Securities",
    },
    "14822": {
      Description: "PIC Wholesale 30/70 Portfolio",
    },
    "14823": {
      Description: "PIC Wholesale 70/30 Portfolio",
    },
    "14824": {
      Description: "PIC Wholesale 85/15 Portfolio",
    },
    "14825": {
      Description: "PIC Wholesale 100/0 Portfolio",
    },
    "14826": {
      Description: "PIC Wholesale 130/0 Portfolio",
    },
    "14827": {
      Description: "PIC Wholesale 0/100 Portfolio",
    },
    "14828": {
      Description: "PIC Wholesale 50/50 Portfolio",
    },
    "14829": {
      Description: "PIC Wholesale Inflation Plus-Assrtv Port",
    },
    "14830": {
      Description: "GMO Systematic Global Macro Trust B",
    },
    "14838": {
      Description: "Schroder Global Emerging Markets Fnd -WC",
    },
    "14845": {
      Description: "Ironbark Copper Rock Emerging Mkts Opps",
    },
    "14848": {
      Description: "Principal Global Property Securities",
    },
    "14905": {
      Description: "Adv Defensive Multi-Blend ARS",
    },
    "14906": {
      Description: "Adv Balanced Multi-Blend ARS",
    },
    "14907": {
      Description: "Advance Australian Shares ARS",
    },
    "14908": {
      Description: "Advance Cash Multi-Blend ARS",
    },
    "14909": {
      Description: "Adv Defensv Multi-Blend ARS NEF",
    },
    "14910": {
      Description: "Adv Balanced Multi-Blend ARS NEF",
    },
    "14911": {
      Description: "Advance Australian Shares ARS NEF",
    },
    "14912": {
      Description: "Adv International Shrs Multi-Blend ARS",
    },
    "14913": {
      Description: "Adv Int Shares Multi-Blend ARS NEF",
    },
    "14914": {
      Description: "Macquarie Australian Diversified Inc AA",
    },
    "14915": {
      Description: "Macquarie Global Income Opportunities Fd",
    },
    "14916": {
      Description: "Macquarie Inflation Linked Bond",
    },
    "14928": {
      Description: "MLC Inv Port-MIF Cpt Guaranteed",
    },
    "14935": {
      Description: "iShares Wholesale Indexed Aust Bd Z",
    },
    "14944": {
      Description: "Stewart Investors W Global Emerg Mkts",
    },
    "15001": {
      Description: "FirstChoice WS Asian Share",
    },
    "15002": {
      Description: "CFS FC W Inv-FC W Geared Aus Share",
    },
    "15003": {
      Description: "FirstChoice WS Global Infrastructure Sec",
    },
    "15004": {
      Description: "FirstChoice WS Global Property Secs",
    },
    "15005": {
      Description: "Acadian Wholesale Geared Global Equity",
    },
    "15006": {
      Description: "CFS FC W Inv-Ausbil W Aus Emg Leaders",
    },
    "15007": {
      Description: "CFS FC WS Inv - SG Hiscock W Prop Sec",
    },
    "15008": {
      Description: "CFS FC W Inv-CFS W Geared Glbl Prpty Sec",
    },
    "15032": {
      Description: "CFS FC Inv-FirstChoice Asian Share",
    },
    "15033": {
      Description: "CFS FC Inv-FirstChoice Geared Aus Shr",
    },
    "15034": {
      Description: "CFS FC Inv-FirstChoice Glb Infrastr",
    },
    "15035": {
      Description: "CFS FC Inv-FirstChoice Glb Prop Sec",
    },
    "15036": {
      Description: "CFS FC Inv-Acadian Geared Global Eq",
    },
    "15037": {
      Description: "CFS FC Inv-Acadian Glb Equity LS",
    },
    "15038": {
      Description: "CFS FC Inv-Ausbil Aus Emerg Leaders",
    },
    "15039": {
      Description: "CFS FC Inv-SG Hiscock Property Sec",
    },
    "15040": {
      Description: "CFS FC Inv-CFS Geared Glb Property Sec",
    },
    "15105": {
      Description: "AMP Capital Future Directions Mod Cons A",
    },
    "15106": {
      Description: "AMP Capital Specialist Intl Shr",
    },
    "15115": {
      Description: "AMP Capital FD Intl Bond A",
    },
    "15116": {
      Description: "AMP Capital Specialist Intl (Hdg) Shr",
    },
    "15121": {
      Description: "Pendal Government Bond",
    },
    "15184": {
      Description: "BT Australian Fixed Interest Index",
    },
    "15185": {
      Description: "BT Property Securities Index W",
    },
    "15186": {
      Description: "BT Australian Shares Index W",
    },
    "15187": {
      Description: "BT International Fixed Interest Index W",
    },
    "15188": {
      Description: "BT International Shares Index W",
    },
    "15189": {
      Description: "Russell Australian Bond A",
    },
    "15190": {
      Description: "Russell International Bond $A Hedged A",
    },
    "15209": {
      Description: "Macquarie Wholesale Property Securities",
    },
    "15210": {
      Description: "Schroder Global Value Fund - WC",
    },
    "15265": {
      Description: "AMP FLI-BlackRock Global Bond",
    },
    "15266": {
      Description: "AMP FLI-FD Emerging Markets",
    },
    "15287": {
      Description: "MLC Wholesale Global Property A",
    },
    "15290": {
      Description: "PIC Wholesale Global Property",
    },
    "15291": {
      Description: "MLC UT/MKey InvSer Global Property",
    },
    "15312": {
      Description: "Antipodes Global Fund - Long I",
    },
    "15316": {
      Description: "MCG Endowment Strategy",
    },
    "15329": {
      Description: "Ausbil Australian Geared Equity",
    },
    "15362": {
      Description: "Platinum Unhedged Fund",
    },
    "15413": {
      Description: "Nikko AM Balanced NEF",
    },
    "15430": {
      Description: "Perpetual Select Fixed Income Fund",
    },
    "15431": {
      Description: "Perpetual Select Investments Aus Share",
    },
    "15432": {
      Description: "Perpetual Select Investments Diversified",
    },
    "15433": {
      Description: "Perpetual Select Investments Balanced",
    },
    "15435": {
      Description: "Perpetual Select Investments Int Share",
    },
    "15436": {
      Description: "Perpetual Select Investments Real Estate",
    },
    "15437": {
      Description: "Perpetual Select Investments Conserv",
    },
    "15439": {
      Description: "Perpetual Select Geared High Growth Fd",
    },
    "15440": {
      Description: "Perpetual Select Geared Aust Sh Fd",
    },
    "15441": {
      Description: "Lincoln Retail Australian Growth",
    },
    "15444": {
      Description: "Arrowstreet Emerging Markets",
    },
    "15450": {
      Description: "AMP Capital Res Inv Leaders Aus Shr A",
    },
    "15451": {
      Description: "Tribeca Alpha Plus Class A",
    },
    "15576": {
      Description: "Alpha Australian Blue Chip Equities",
    },
    "15577": {
      Description: "Alpha Australian Small Companies",
    },
    "15578": {
      Description: "Alpha Enhanced Yield",
    },
    "15579": {
      Description: "Alpha Global Opportunities",
    },
    "15580": {
      Description: "Alpha Property Securities",
    },
    "15584": {
      Description: "All Star KFM Income",
    },
    "15699": {
      Description: "Magellan Global",
    },
    "15700": {
      Description: "Magellan Infrastructure",
    },
    "15720": {
      Description: "Fiducian India",
    },
    "15723": {
      Description: "Spheria Australian Smaller Companies",
    },
    "15778": {
      Description: "Dimensional Global Real Estate Trust",
    },
    "15811": {
      Description: "Winton Global Alpha",
    },
    "15813": {
      Description: "Generation Wholesale Global Share",
    },
    "15816": {
      Description: "CFS FC Inv-Generation Global Share",
    },
    "15838": {
      Description: "AMP Capital Core Infrastructure H",
    },
    "15839": {
      Description: "AMP Capital Core Infrastructure A",
    },
    "15840": {
      Description: "OnePath OA IP-Perpetual Ethcl SRI EF/Sel",
    },
    "15841": {
      Description: "OnePath OA IP-Stwt Invs WldWdSust EF/Sel",
    },
    "15842": {
      Description: "OnePath OA IP-Merlon Australian Share EF",
    },
    "15843": {
      Description: "OnePath OA IP-BT Mly Inc Pl EF/Sel",
    },
    "15844": {
      Description: "OnePath OA IP-Optimix Gbl Emg Mkt Shr EF",
    },
    "15845": {
      Description: "OnePath OA IP-Perpetual Ethical SRI NEF",
    },
    "15846": {
      Description: "OnePath OA IP-Merlon Australian Share NE",
    },
    "15847": {
      Description: "OnePath OA IP-Stwt Invs WldWd Sust NEF",
    },
    "15848": {
      Description: "OnePath OA IP-Pendal Mly Inc Pl NEF",
    },
    "15849": {
      Description: "OnePath OA IP-Optimix Gbl Emg Mkt Shr NE",
    },
    "15870": {
      Description: "Ellerston Global Equity Managers",
    },
    "15887": {
      Description: "Pengana WHEB Sustainable Impact",
    },
    "15889": {
      Description: "CFS FC W Inv-CFS W Glbl Listed Infra Sec",
    },
    "15896": {
      Description: "Vanguard Cash Reserve",
    },
    "15897": {
      Description: "Vanguard International Small Companies",
    },
    "15898": {
      Description: "Vanguard Intl Small Companies Index Hgd",
    },
    "15902": {
      Description: "OnePath OA IP-OP Income Plus NE",
    },
    "16126": {
      Description: "Clime Australian Value",
    },
    "16128": {
      Description: "Allan Gray Australia Equity A",
    },
    "16129": {
      Description: "IOOF Cash Management Trust B",
    },
    "16165": {
      Description: "North Multi Manager Active Defensive",
    },
    "16166": {
      Description: "North Multi Manager Active Moderately De",
    },
    "16167": {
      Description: "North Multi Manager Balanced",
    },
    "16168": {
      Description: "North Multi Manager Active Growth",
    },
    "16169": {
      Description: "North Multi Manager Active High Growth",
    },
    "16172": {
      Description: "IOOF MultiSeries 70",
    },
    "16182": {
      Description: "ipac-Classic Enhanced Growth Portfolio",
    },
    "16190": {
      Description: "Walter Scott Global Equity Hedged",
    },
    "16191": {
      Description: "Legg Mason Martin Currie Select Opps A",
    },
    "16192": {
      Description: "Legg Mason Brandywine Glb Oppc Fxd Inc A",
    },
    "16195": {
      Description: "AMP Capital Sustainable Share H",
    },
    "16197": {
      Description: "8IP Australian Small Companies",
    },
    "16221": {
      Description: "Ventura Global Opportunities",
    },
    "16222": {
      Description: "Ventura High Growth 100",
    },
    "16225": {
      Description: "Experts' Choice Small Companies",
    },
    "16230": {
      Description: "Armytage Australian Equity Income",
    },
    "16233": {
      Description: "Templeton Global Bond Plus I",
    },
    "16235": {
      Description: "Armytage Strategic Opportunities WS",
    },
    "16241": {
      Description: "Vanguard Global Infrastructure Index",
    },
    "16242": {
      Description: "Vanguard Global Infrastructure Index Hgd",
    },
    "16243": {
      Description: "Russell Emerging Markets Fund Class A",
    },
    "16244": {
      Description: "MLC Wholesale Diversified Debt A",
    },
    "16245": {
      Description: "PIC Wholesale Diversified Debt",
    },
    "16252": {
      Description: "Perpetual Exact Market Cash",
    },
    "16260": {
      Description: "Cromwell Phoenix Property Securities",
    },
    "16261": {
      Description: "Russell Aus Cash Enhanced Fund Class A",
    },
    "16270": {
      Description: "Pendal Total Return",
    },
    "16277": {
      Description: "Templeton Global Bond Plus W",
    },
    "16280": {
      Description: "ipac Diversified Investment Strategy 1",
    },
    "16281": {
      Description: "ipac Diversified Investment Strategy 2",
    },
    "16282": {
      Description: "ipac Diversified Investment Strategy 3",
    },
    "16283": {
      Description: "ipac Diversified Investment Strategy 4",
    },
    "16284": {
      Description: "ipac Diversified Investment Strategy 5",
    },
    "16286": {
      Description: "IOOF MultiMix Capital Stable Trust",
    },
    "16287": {
      Description: "IOOF MultiMix Conservative Trust",
    },
    "16288": {
      Description: "IOOF MultiMix Balanced Growth Trust",
    },
    "16289": {
      Description: "IOOF MultiMix Growth Trust",
    },
    "16291": {
      Description: "IOOF MultiMix Cash Enhanced Trust",
    },
    "16292": {
      Description: "IOOF MultiMix Diversified Fixed Interest",
    },
    "16293": {
      Description: "IOOF MultiMix Australian Shares Trust",
    },
    "16294": {
      Description: "IOOF MultiMix International Shares Trust",
    },
    "16301": {
      Description: "Epoch Gbl Eq Shldr Yld Fd Uhgd",
    },
    "16302": {
      Description: "Epoch Gbl Eq Shldr Yld Fd Hgd",
    },
    "16310": {
      Description: "BT WE BT Multi-Manager Aus Share",
    },
    "16312": {
      Description: "BT WE Fidelity Australian Equities",
    },
    "16313": {
      Description: "BT WE Tyndall Australian Share",
    },
    "16315": {
      Description: "BT WE BT Multi-Manager Fixed Interest",
    },
    "16317": {
      Description: "BT WE CFS Global Resources",
    },
    "16318": {
      Description: "BT WE Ironbark GTP Global Equity Thtc",
    },
    "16319": {
      Description: "BT WE T. Rowe Price Global Equity",
    },
    "16320": {
      Description: "BT WE Templeton Global Equity",
    },
    "16321": {
      Description: "BT WE Ironbark Global Property Secs",
    },
    "16328": {
      Description: "CFS FC Inv-Merlon Aus Share Income",
    },
    "16330": {
      Description: "CFS FC Inv-CFS Equity Income",
    },
    "16331": {
      Description: "CFS FC Inv-Epoch GESY",
    },
    "16332": {
      Description: "CFS FC Inv-FirstChoice Grd Growth Plus",
    },
    "16333": {
      Description: "CFS FC Inv-Legg Mason M Curr Real Inc",
    },
    "16334": {
      Description: "CFS FC Inv-CFS Global Ltd Infra Sec",
    },
    "16351": {
      Description: "Acadian Wholesale Defensive Income",
    },
    "16352": {
      Description: "CFS FC W Inv-Merlon W Aus Share Income",
    },
    "16354": {
      Description: "CFS Wholesale Equity Income",
    },
    "16355": {
      Description: "CFS FC-Epoch W GESY",
    },
    "16356": {
      Description: "FirstChoice WS Geared Growth Plus",
    },
    "16357": {
      Description: "CFS FC W Inv-Legg Mason M Curr Real Inc",
    },
    "16394": {
      Description: "MLC UT/MKey InvSerT Diversified Debt",
    },
    "16432": {
      Description: "Macquarie Global Infrastructure Trust II",
    },
    "16450": {
      Description: "BT Multi-Manager Fixed Interest W",
    },
    "16451": {
      Description: "BT Wholesale Multi Manager Intl Share",
    },
    "16452": {
      Description: "BT Multi-Manager Aus Shr WS",
    },
    "16455": {
      Description: "ANZ OA IP-ANZ Flexible Term Deposit NE",
    },
    "16458": {
      Description: "OnePath OA IP-ANZ Flexible Term Dep EF",
    },
    "16459": {
      Description: "OnePath OA IP-ANZ Flexible Term Dep NE",
    },
    "16460": {
      Description: "ANZ OA IP-ANZ Flexible Term Deposit EF",
    },
    "16474": {
      Description: "Pendal MidCap",
    },
    "16541": {
      Description: "AMP Capital Res Inv Leaders Aus Shr",
    },
    "16558": {
      Description: "Premium Asia Property",
    },
    "16564": {
      Description: "Perpetual Pure Value Share",
    },
    "16567": {
      Description: "Solaris Core Australian Equity Retail",
    },
    "16593": {
      Description: "AMP FLI-FD Asian Share",
    },
    "16595": {
      Description: "AMP FLI-DNR High Conviction Aus Share",
    },
    "16614": {
      Description: "Mercer Global Sovereign Bond Fund",
    },
    "16615": {
      Description: "Mercer Australian Listed Property",
    },
    "16616": {
      Description: "Mercer Australian Sovereign Bond Fund",
    },
    "16617": {
      Description: "ANZ OA Inv-Perpetual Ethical SRI EF/Sel",
    },
    "16618": {
      Description: "ANZ OA Inv-Stwt Invs WldWd Sust EF/Sel",
    },
    "16619": {
      Description: "ANZ OA IP-Merlon Aus Share Income EF",
    },
    "16620": {
      Description: "ANZ OA Inv-Pendal Mly Inc Pl EF/Sel",
    },
    "16621": {
      Description: "ANZ OA IP-Optimix Gbl Emerging Mkts EF",
    },
    "16622": {
      Description: "ANZ OA Inv-Perpetual Ethical SRI-DEF",
    },
    "16623": {
      Description: "ANZ OA Inv-Stwt Invs WldWd Sust DEF",
    },
    "16624": {
      Description: "ANZ OA IP-Merlon Aus Share Income NE",
    },
    "16625": {
      Description: "ANZ OA Inv-Pendal Mly Inc Pl-DEF",
    },
    "16626": {
      Description: "ANZ OA IP-Optimix Gbl Emerging Mkts NE",
    },
    "16647": {
      Description: "Merrill-Instreet Reliance Global Alloc",
    },
    "16648": {
      Description: "Merrill-Instreet Reliance Commodities",
    },
    "16651": {
      Description: "Janus Henderson Cash Institutional",
    },
    "16705": {
      Description: "Bell Global Equities",
    },
    "16726": {
      Description: "Trilogy Monthly Income Trust",
    },
    "16732": {
      Description: "Optimix Trusts-Global Emg Mkt Share NE",
    },
    "16733": {
      Description: "Optimix Trusts-Global Emg Mkt Share EF",
    },
    "16734": {
      Description: "Talaria Global Equity",
    },
    "16738": {
      Description: "MPG Retail Brands Property Trust",
    },
    "16739": {
      Description: "MPG Bulky Goods Retail Trust",
    },
    "16740": {
      Description: "Franklin Global Growth W",
    },
    "16743": {
      Description: "Schroder Real Return CPI Plus 5% Fnd -PC",
    },
    "16744": {
      Description: "Schroder Equity Opportunities Fund - WC",
    },
    "16746": {
      Description: "Resolution Capital Real Assets",
    },
    "16747": {
      Description: "Resolution Capital Global Property Secs",
    },
    "16749": {
      Description: "RARE Infrastructure Income",
    },
    "16750": {
      Description: "RARE Emerging Markets",
    },
    "16752": {
      Description: "Solaris High Alpha Australian Eq Retail",
    },
    "16754": {
      Description: "Strategic Global Property",
    },
    "16755": {
      Description: "Strategic Australian Equity",
    },
    "16756": {
      Description: "Strategic International Equity",
    },
    "16765": {
      Description: "Perpetual WFIA-Schroder Australian Eq",
    },
    "16766": {
      Description: "Perpetual WFIA-Schroder Balanced",
    },
    "16768": {
      Description: "Perpetual WFIA-T. Rowe Price Global Eq",
    },
    "16771": {
      Description: "Perpetual WFIA-Vanguard Aust FI Idx",
    },
    "16772": {
      Description: "Perpetual WFIA-Vanguard Intl Shr Idx Hdg",
    },
    "16773": {
      Description: "Perpetual WFIA-Vanguard Prpty Secs Idx",
    },
    "16775": {
      Description: "Perpetual WFIA-Perpetual Share Plus L/S",
    },
    "16776": {
      Description: "Perpetual WFIA-Perpetual Split Gr",
    },
    "16777": {
      Description: "Perpetual WFIA-Platinum Asia",
    },
    "16778": {
      Description: "Perpetual WFIA-Platinum International",
    },
    "16789": {
      Description: "Perpetual WFIA-Fidelity Australian Eq",
    },
    "16791": {
      Description: "Perpetual WFIA-Magellan Global",
    },
    "16793": {
      Description: "Perpetual WFIA-OnePath Divers Fixed Int",
    },
    "16799": {
      Description: "Perpetual WFIA-Morningstar Growth Rl Rt",
    },
    "16801": {
      Description: "Perpetual WFIA-Investor Mutual Aus Sha",
    },
    "16802": {
      Description: "Perpetual WFIA-Investor Mutual Fut Ledr",
    },
    "16803": {
      Description: "Perpetual WFIA-Lazard Glbl Listed Infra",
    },
    "16804": {
      Description: "Perpetual WFIA-Macquarie Income Opps",
    },
    "16807": {
      Description: "Perpetual WFIA-Perpetual Concntr Eq",
    },
    "16808": {
      Description: "Perpetual WFIA-Perpetual Diversified Gr",
    },
    "16809": {
      Description: "Perpetual WFIA-Perpetual Diversified Inc",
    },
    "16810": {
      Description: "Perpetual WFIA-Perpetual Ethical SRI",
    },
    "16811": {
      Description: "Perpetual WFIA-Perpetual Geared Aus",
    },
    "16818": {
      Description: "Perpetual WFIA-BlackRock Scien Diver Gr",
    },
    "16819": {
      Description: "Perpetual WFIA-BlackRock Scien Divr Stb",
    },
    "16822": {
      Description: "Perpetual WFIA-Pendal Australian Equity",
    },
    "16825": {
      Description: "Perpetual WFIA-BlackRock Tactical Growth",
    },
    "16827": {
      Description: "Perpetual WFIA-Pendal Property Secs",
    },
    "16830": {
      Description: "Perpetual WFIA-Bentham Global Income",
    },
    "16833": {
      Description: "Perpetual WFIA-Schroder Fixed Income",
    },
    "16836": {
      Description: "Perpetual WFIA-Ausbil Aust Actv Eq",
    },
    "16837": {
      Description: "Perpetual WFIA-Ausbil Aust Emerg Ldrs",
    },
    "16841": {
      Description: "Franklin Global Growth I",
    },
    "16843": {
      Description: "Dimensional Global Core Equity AUD Hgd",
    },
    "16844": {
      Description: "FirstChoice WS Emerging Markets",
    },
    "16848": {
      Description: "CFS FC Inv-FirstChoice Emerging Mkts",
    },
    "16853": {
      Description: "Maple-Brown Abbott Asian Investment",
    },
    "16854": {
      Description: "CFS FC Inv-FirstRate Saver",
    },
    "16857": {
      Description: "FirstRate Wholesale Saver",
    },
    "16868": {
      Description: "Vanguard Australian Govt Bond Index",
    },
    "16869": {
      Description: "AMP Capital WS Australian Bd",
    },
    "16870": {
      Description: "CFS FC Inv-Realindex Global Shr",
    },
    "16873": {
      Description: "CFS FC Inv-Realindex Global Shr-Hgd",
    },
    "16875": {
      Description: "CFS FC Inv-Realindex Aus Shr",
    },
    "16877": {
      Description: "Realindex W Australian Sml Comp",
    },
    "16880": {
      Description: "Realindex Wholesale Global Shr",
    },
    "16882": {
      Description: "Realindex W Global Share-Hedged",
    },
    "16885": {
      Description: "Realindex Wholesale Australian Shr",
    },
    "16888": {
      Description: "CFS FC Inv-Realindex Aus Sml Co",
    },
    "16893": {
      Description: "IOOF Cash Management Trust D",
    },
    "16894": {
      Description: "Fiducian Ultra Growth",
    },
    "16949": {
      Description: "AMP Gen-Vanguard Intl Shr Indx",
    },
    "16950": {
      Description: "AMP Gen-Vanguard Aus Shr Indx",
    },
    "16951": {
      Description: "AMP Gen-Vanguard Int Shr Idx Hgd",
    },
    "16952": {
      Description: "Realindex Global Share Hedged-Class A",
    },
    "16953": {
      Description: "Realindex Global Share-Class A",
    },
    "16954": {
      Description: "Realindex Aus Small Co-Class A",
    },
    "16955": {
      Description: "Realindex Australian Share-Class A",
    },
    "16962": {
      Description: "Macquarie Global Infrastructure Tr II B",
    },
    "16966": {
      Description: "Nikko AM Australian Share Income",
    },
    "16977": {
      Description: "Pendal Cash Plus",
    },
    "16980": {
      Description: "Pendal Global Share",
    },
    "16981": {
      Description: "Russell Australian Cash A",
    },
    "16990": {
      Description: "Real Estate Capital Partners Prp Tr No.3",
    },
    "16991": {
      Description: "Pendal Enhanced Australian Shares",
    },
    "16998": {
      Description: "Bennelong Australian Equities",
    },
    "16999": {
      Description: "Bennelong Concentrated Australian Eq",
    },
    "17005": {
      Description: "Russell Global Opportunities $A Hedged",
    },
    "17006": {
      Description: "APN AREIT",
    },
    "17007": {
      Description: "Acadian Defensive Income - Class A",
    },
    "17008": {
      Description: "Fairview Equity Partners Emerging Co",
    },
    "17045": {
      Description: "Cromwell Riverpark Trust",
    },
    "17047": {
      Description: "Solaris Core Australian Equity Inst",
    },
    "17048": {
      Description: "Solaris High Alpha Australian Eq Inst",
    },
    "17050": {
      Description: "OnePath OA IP-Pendal Aus Shr EF",
    },
    "17051": {
      Description: "OnePath OA IP-Pendal Aus Shr NE",
    },
    "17060": {
      Description: "OnePath OA IP-Janus Hdsn GlFI TR EF/Sel",
    },
    "17061": {
      Description: "OnePath OA IP-Janus Hdsn Gl FI TR NEF",
    },
    "17066": {
      Description: "OnePath OA IP-Rare Infrastructure Val EF",
    },
    "17067": {
      Description: "OnePath OA IP-Rare Infrastructure Val NE",
    },
    "17072": {
      Description: "OnePath OA IP-T Rowe Price Global Eq EF",
    },
    "17073": {
      Description: "OnePath OA IP-T Rowe Price Global Eq NE",
    },
    "17078": {
      Description: "OnePath OA IP-Vanguard Divs BdIdx EF/Sel",
    },
    "17079": {
      Description: "OnePath OA IP-Vanguard Divers Bd Idx NEF",
    },
    "17084": {
      Description: "OnePath OA IP-Fidelity Australian Eq EF",
    },
    "17085": {
      Description: "OnePath OA IP-Fidelity Australian Eq NE",
    },
    "17086": {
      Description: "ANZ OA IP-Pendal Aus Shrs EF",
    },
    "17087": {
      Description: "ANZ OA IP-Pendal Aus Shrs NE",
    },
    "17092": {
      Description: "ANZ OA IP-Fidelity Australian Equity EF",
    },
    "17093": {
      Description: "ANZ OA IP-Fidelity Australian Equity NE",
    },
    "17098": {
      Description: "ANZ OA Inv-Janus HendersonGlFI TR EF/Sel",
    },
    "17099": {
      Description: "ANZ OA Inv-Janus Henderson Gl FI TR DEF",
    },
    "17104": {
      Description: "ANZ OA IP-T Rowe Price Global Equity EF",
    },
    "17105": {
      Description: "ANZ OA IP-T Rowe Price Global Equity NE",
    },
    "17110": {
      Description: "ANZ OA Inv-Vanguard Divers Bd Idx EF/Sel",
    },
    "17111": {
      Description: "ANZ OA Inv-Vanguard Divers Bd Idx DEF",
    },
    "17117": {
      Description: "Tasman Market Neutral",
    },
    "17144": {
      Description: "AUI Healthcare Property Trust A",
    },
    "17152": {
      Description: "Ellerston Australian Share Fund",
    },
    "17158": {
      Description: "PIMCO Australian Short-Term Bond W",
    },
    "17160": {
      Description: "Solaris Core Australian Equity PFO",
    },
    "17249": {
      Description: "AMP Capital FD Intl Shr A",
    },
    "17253": {
      Description: "Plato Australian Shares Core",
    },
    "17256": {
      Description: "Kapstream Absolute Return Income",
    },
    "17291": {
      Description: "FirstChoice WS Balanced",
    },
    "17292": {
      Description: "CFS FC W Inv-Macquarie Income Opps",
    },
    "17294": {
      Description: "CFS FC-UBS W Divers Fixed Income",
    },
    "17299": {
      Description: "CFS FC Inv-FirstChoice Balanced",
    },
    "17300": {
      Description: "CFS FC Inv-Macquarie Income Opps",
    },
    "17302": {
      Description: "CFS FC Inv-UBS Diversified Fixed Inc",
    },
    "17328": {
      Description: "OnePath OA IP-ANZ Cash Advantage EF",
    },
    "17329": {
      Description: "OnePath OA IP-ANZ Cash Advantage NEF",
    },
    "17364": {
      Description: "WaveStone Dynamic Australian Equity",
    },
    "17373": {
      Description: "U Ethical Enhanced Cash Portfolio",
    },
    "17374": {
      Description: "U Ethical Growth Portfolio",
    },
    "17375": {
      Description: "U Ethical Australian Equities Trust",
    },
    "17380": {
      Description: "Morningstar High Growth Fund - Class A",
    },
    "17381": {
      Description: "Morningstar Intl Bds (Hdg) Fd - Cl A",
    },
    "17388": {
      Description: "AMP Capital Corporate Bond A",
    },
    "17390": {
      Description: "Franklin Templeton Multisector Bond W",
    },
    "17391": {
      Description: "Franklin Templeton Multisector Bond I",
    },
    "17406": {
      Description: "Janus Henderson Tactical Income",
    },
    "17414": {
      Description: "PM Capital Asian Companies",
    },
    "17415": {
      Description: "IFP Global Franchise Fund (Hedged)",
    },
    "17438": {
      Description: "Perpetual WFIA-AMP Capl Glbl Prpty Secs",
    },
    "17439": {
      Description: "Perpetual WFIA-MFS Global Equity",
    },
    "17442": {
      Description: "Perpetual WFIA-Vanguard Australian Idx",
    },
    "17475": {
      Description: "Man AHL Alpha (AUD)",
    },
    "17477": {
      Description: "Macquarie International Equities",
    },
    "17478": {
      Description: "Macquarie True Index International Eqs",
    },
    "17494": {
      Description: "Insync Global Capital Aware",
    },
    "17495": {
      Description: "iShares Hedged International Equity Idx",
    },
    "17496": {
      Description: "AMP Capital Property Securities",
    },
    "17504": {
      Description: "Zurich Investments Unhedged Global Gr",
    },
    "17505": {
      Description: "Zurich Investments Global Growth",
    },
    "17535": {
      Description: "BT WE Ausbil Australian Active Equity",
    },
    "17536": {
      Description: "BT WE Ausbil Emerging Leaders",
    },
    "17538": {
      Description: "BT WE Advance Defensive Multi-Blend",
    },
    "17539": {
      Description: "BT WE Advance Balanced Multi-Blend",
    },
    "17541": {
      Description: "BT WE Advance Intl Fxd Intr Mlt-Blnd",
    },
    "17542": {
      Description: "BT WE Advance Aus Fxd Intr Mlt-Blnd",
    },
    "17543": {
      Description: "BT WE Advance Growth Multi-Blend",
    },
    "17544": {
      Description: "BT WE Advance High Growth Multi-Blend",
    },
    "17545": {
      Description: "BT WE Advance Moderate Multi-Blend",
    },
    "17548": {
      Description: "BT WE OnePath Diversified Fixed Interest",
    },
    "17549": {
      Description: "BT WE APN AREIT",
    },
    "17550": {
      Description: "BT WE Aberdeen Emerging Opportunities",
    },
    "17552": {
      Description: "BT WE Lazard Glbl Listed Infrastructure",
    },
    "17553": {
      Description: "BT WE BlackRock Global Allocation",
    },
    "17556": {
      Description: "BT WE BT Enhanced Cash",
    },
    "17557": {
      Description: "BT WE Zurich Global Thematic Share",
    },
    "17562": {
      Description: "BT WE Macquarie Income Opportunities",
    },
    "17563": {
      Description: "BT WE Schroder Fixed Income",
    },
    "17564": {
      Description: "BT WE UBS Cash",
    },
    "17565": {
      Description: "The Supervised Fund",
    },
    "17566": {
      Description: "SPW Global Income",
    },
    "17592": {
      Description: "AMP Capital Corporate Bond H",
    },
    "17595": {
      Description: "Bennelong ex-20 Australian Equities",
    },
    "17597": {
      Description: "ANZ OA IP-ANZ Cash Advantage EF",
    },
    "17598": {
      Description: "ANZ OA IP-ANZ Cash Advantage NE",
    },
    "17618": {
      Description: "Australian Ethical Intl Shr",
    },
    "17633": {
      Description: "OnePath OA IP-Bennelong Australian Eq EF",
    },
    "17634": {
      Description: "OnePath OA IP-Bennelong Australian Eq NE",
    },
    "17639": {
      Description: "Ellerston Global Equity Managers GEMS B",
    },
    "17640": {
      Description: "Premium Asia",
    },
    "17649": {
      Description: "AMP Gen-Moderately Defensive Index",
    },
    "17650": {
      Description: "AMP Gen-Balanced Index",
    },
    "17651": {
      Description: "AMP Gen-Growth Index",
    },
    "17690": {
      Description: "Janus Henderson Australian Fxd IntstInst",
    },
    "17692": {
      Description: "AQR WS DELTA 1F",
    },
    "17693": {
      Description: "Maple-Brown Abbott Responsible Invmt",
    },
    "17701": {
      Description: "Schroder Global Sustainable Equity - WC",
    },
    "17705": {
      Description: "Pendal Australian Long/Short",
    },
    "17706": {
      Description: "BT Global Property Value",
    },
    "17714": {
      Description: "CFS Wholesale Global Corporate Bond",
    },
    "17715": {
      Description: "Janus Henderson Cash Enhanced Instl",
    },
    "17744": {
      Description: "Aspect Diversified Futures-Class A",
    },
    "17745": {
      Description: "Aspect Wholesale Diversified Futures",
    },
    "17746": {
      Description: "CFS FC Inv-Aspect Div Futures",
    },
    "17754": {
      Description: "Stewart Investors W Glb Emerg Mkts Sus",
    },
    "17755": {
      Description: "CFS FC Inv-FirstRate Term Dep (3Mth)",
    },
    "17756": {
      Description: "CFS FC Inv-FirstRate Term Dep (6Mth)",
    },
    "17761": {
      Description: "CFS FC Inv-FirstRate Term Dep (9Mth)",
    },
    "17762": {
      Description: "CFS FC Inv-FirstRate Term Dep(12Mth)",
    },
    "17771": {
      Description: "CFS FC W Inv-FirstRate W Term Dep (9Mth)",
    },
    "17772": {
      Description: "CFS FC W Inv-FirstRate W Term Dep(12Mth)",
    },
    "17784": {
      Description: "Pendal Monthly Income Plus",
    },
    "17786": {
      Description: "OC Micro-Cap",
    },
    "17802": {
      Description: "CFS FC W Inv-Platinum Asia",
    },
    "17803": {
      Description: "Stewart Investors Glb Emerg Mkts Leaders",
    },
    "17808": {
      Description: "CFS FC Inv-Platinum Asia",
    },
    "17809": {
      Description: "CFS FC Inv-Stewart Glb Emg Mkt Ldrs",
    },
    "17962": {
      Description: "AMP FLI S2-AMP Australian Bond",
    },
    "17964": {
      Description: "AMP FLI S2-AMP Balanced Index",
    },
    "17965": {
      Description: "AMP FLI S2-AMP Balanced Growth",
    },
    "17966": {
      Description: "AMP FLI S2-AMP Conservative",
    },
    "17967": {
      Description: "AMP FLI S2-AMP Conservative Index",
    },
    "17968": {
      Description: "AMP FLI S2-AMP Capital Equity",
    },
    "17969": {
      Description: "AMP FLI S2-AMP High Growth",
    },
    "17970": {
      Description: "AMP FLI S2-AMP Intl Shr Enh Index",
    },
    "17971": {
      Description: "AMP FLI S2-AMP Capital Aus Prpty Secs",
    },
    "17972": {
      Description: "AMP FLI S2-UBS Aus Small Companies",
    },
    "17974": {
      Description: "AMP FLIS2-BlckRock Sci Hgd Int Alph Tilt",
    },
    "17975": {
      Description: "AMP FLI S2-BlackRock Sci Int Alpha Tilt",
    },
    "17976": {
      Description: "AMP FLI S2-Schroder Global Active Value",
    },
    "17977": {
      Description: "AMP FLI S2-BlackRock Global Bond",
    },
    "17978": {
      Description: "AMP FLI S2-BT Australian Share",
    },
    "17979": {
      Description: "AMP FLI S2- Yarra Cap Mngmt Aust Eq",
    },
    "17980": {
      Description: "AMP FLI S2-Ironbark Karara Aus Shr",
    },
    "17981": {
      Description: "AMP FLI S2-FD Asian Share",
    },
    "17982": {
      Description: "AMP FLI S2-FD Australian Bond",
    },
    "17983": {
      Description: "AMP FLI S2-Specialist Australian Shares",
    },
    "17984": {
      Description: "AMP FLI S2-Specialist Aus Small Co",
    },
    "17985": {
      Description: "AMP FLI S2-FD Balanced",
    },
    "17986": {
      Description: "AMP FLI S2-FD Conservative",
    },
    "17987": {
      Description: "AMP FLI S2-FD Emerging Markets",
    },
    "17989": {
      Description: "AMP FLI S2-Specialist Geared Aus Share",
    },
    "17990": {
      Description: "AMP FLI S2-FD Growth",
    },
    "17991": {
      Description: "AMP FLI S2-Specialist Hedged Int Shares",
    },
    "17992": {
      Description: "AMP FLI S2-FD High Growth",
    },
    "17993": {
      Description: "AMP FLI S2-FD International Bond",
    },
    "17994": {
      Description: "AMP FLI S2-Specialist International Shr",
    },
    "17995": {
      Description: "AMP FLI S2-FD Moderately Conservative",
    },
    "17996": {
      Description: "AMP FLI S2-Specialist Property & Infras",
    },
    "18000": {
      Description: "AMP FLI S2-Zurich American Cent Glbl Gr",
    },
    "18003": {
      Description: "AMP FLI S2-Perennial Value Aus Shr",
    },
    "18004": {
      Description: "AMP FLI S2-Perpetual Industrial Share",
    },
    "18005": {
      Description: "AMP FLI S2-Fidelity Global Equities",
    },
    "18006": {
      Description: "AMP FLI S2-Res Inv Leaders Aus Shr",
    },
    "18007": {
      Description: "AMP FLI S2-Res Inv Leaders Balanced",
    },
    "18008": {
      Description: "AMP FLI S2-Res Inv Leaders Conservative",
    },
    "18009": {
      Description: "AMP FLI S2-Res Inv Leaders Growth",
    },
    "18010": {
      Description: "AMP FLI S2-Res Inv Leaders Intl Shr",
    },
    "18011": {
      Description: "AMP FLI S2-Schroder Australian Equities",
    },
    "18012": {
      Description: "AMP FLI S2-UBS Property Securities",
    },
    "18014": {
      Description: "AMP FLI S2-DNR High Conviction Aus Share",
    },
    "18015": {
      Description: "AMP FLI S2-AMP Monthly Income Fund No.1",
    },
    "18016": {
      Description: "AMP FLI S2-AMP Monthly Income Fund No.2",
    },
    "18017": {
      Description: "AMP FLI S2-AMP Monthly Income Fund No.3",
    },
    "18018": {
      Description: "AMP FLI S2-AMP Aus Shr Enh Indx",
    },
    "18119": {
      Description: "ANZ OA IP-Vanguard Conservative Index EF",
    },
    "18120": {
      Description: "ANZ OA IP-Vanguard Conervative Index NE",
    },
    "18121": {
      Description: "ANZ OA IP-Vanguard Balanced Index EF",
    },
    "18122": {
      Description: "ANZ OA IP-Vanguard Balanced Index NE",
    },
    "18123": {
      Description: "ANZ OA IP-Vanguard Growth Index EF",
    },
    "18124": {
      Description: "ANZ OA IP-Vanguard Growth Index NE",
    },
    "18125": {
      Description: "ANZ OA IP-Vanguard High Growth Index EF",
    },
    "18126": {
      Description: "ANZ OA IP-Vanguard High Growth Index NE",
    },
    "18127": {
      Description: "OnePath OA IP-Vanguard Cons Index EF",
    },
    "18128": {
      Description: "OnePath OA IP-Vanguard Cons Index NE",
    },
    "18129": {
      Description: "OnePath OA IP-Vanguard Balanced Index EF",
    },
    "18130": {
      Description: "OnePath OA IP-Vanguard Balanced Index NE",
    },
    "18131": {
      Description: "OnePath OA IP-Vanguard Growth Index EF",
    },
    "18132": {
      Description: "OnePath OA IP-Vanguard Growth Index NE",
    },
    "18133": {
      Description: "OnePath OA IP-Vanguard High Gr Index EF",
    },
    "18134": {
      Description: "OnePath OA IP-Vanguard High Gr Index NE",
    },
    "18135": {
      Description: "OnePath OA IP-Altrinsic Glbl Eq EF/Sel",
    },
    "18136": {
      Description: "OnePath OA IP-Altrinsic Glbl Eq NE",
    },
    "18163": {
      Description: "Ausbil MicroCap",
    },
    "18187": {
      Description: "SG Hiscock Premier Property Opports",
    },
    "18189": {
      Description: "Kapstream Absolute Return Income Class I",
    },
    "18190": {
      Description: "Pengana Australian Equities Class A",
    },
    "18191": {
      Description: "Australian Ethical Advocacy",
    },
    "18200": {
      Description: "iShares Global Bond Index",
    },
    "18201": {
      Description: "U Ethical Australian Equities Tr Wholsl",
    },
    "18205": {
      Description: "Platypus Systematic Growth",
    },
    "18206": {
      Description: "Summit Select Income Generator",
    },
    "18207": {
      Description: "North Select Income Generator",
    },
    "18332": {
      Description: "Mercer Global Credit Fund",
    },
    "18333": {
      Description: "Mercer Global Listed Infrastructure",
    },
    "18334": {
      Description: "Mercer Australian Inflation Plus",
    },
    "18335": {
      Description: "Mercer Emerging Markets Shares Fund",
    },
    "18337": {
      Description: "Macquarie Asia New Stars No.1",
    },
    "18341": {
      Description: "Spectrum Strategic Income",
    },
    "18344": {
      Description: "Ausbil 130/30 Focus - Wholesale",
    },
    "18347": {
      Description: "AMP Capital Global Infr Secs Fd Hgd A",
    },
    "18349": {
      Description: "AMP Capital Global Infr Secs Fd Unhgd A",
    },
    "18350": {
      Description: "AMP Capital Global Infr Secs Fd Hgd H",
    },
    "18351": {
      Description: "AMP Capital Global Infr Secs Fd Unhgd H",
    },
    "18353": {
      Description: "Schroder Real Return CPI Plus 5% Fnd -WC",
    },
    "18354": {
      Description: "Ausbil 130/30 Focus - Institutional",
    },
    "18355": {
      Description: "UBS-HALO Australian Share Fund",
    },
    "18357": {
      Description: "BlackRock Cash Fund",
    },
    "18365": {
      Description: "Ironbark Gavekal Asian Opportunities",
    },
    "18366": {
      Description: "Yarra Ex-20 Australian Equities Fund",
    },
    "18369": {
      Description: "PIMCO Target Return",
    },
    "18370": {
      Description: "Specialist Dynamic Allocation",
    },
    "18374": {
      Description: "IPAC Income Generator",
    },
    "18384": {
      Description: "ANZ OA IP-Schroder Fixed Income EF",
    },
    "18385": {
      Description: "ANZ OA IP-Schroder Fixed Income NE",
    },
    "18390": {
      Description: "OnePath OA IP-Platinum Asia EF",
    },
    "18391": {
      Description: "OnePath OA IP-Platinum Asia NE",
    },
    "18392": {
      Description: "OnePath OA IP-Schroder Fixed Income EF",
    },
    "18393": {
      Description: "OnePath OA IP-Schroder Fixed Income NE",
    },
    "18394": {
      Description: "OnePath OA IP-Walter Scott Gbl Eq H EF",
    },
    "18395": {
      Description: "OnePath OA IP-Walter Scott Gbl Eq H NE",
    },
    "18408": {
      Description: "Russell Global Listed Infr $A Hedged",
    },
    "18413": {
      Description: "Man AHL Gold (AUD)",
    },
    "18414": {
      Description: "Man AHL Diversified (AUD)",
    },
    "18418": {
      Description: "Spheria Opportunities",
    },
    "18430": {
      Description: "Resolution Capital Global Prp Secs (WS)",
    },
    "18447": {
      Description: "Zurich Investments Small Companies",
    },
    "18493": {
      Description: "AMP FLI S2-Alphinity Australian Share",
    },
    "18498": {
      Description: "Grant Samuel Tribeca Aust Smaller Coms",
    },
    "18499": {
      Description: "OnePath OA FR IP-Perpetual Ethical SRI",
    },
    "18500": {
      Description: "OnePath OA FR IP-Stewart Invs WldWd Sust",
    },
    "18501": {
      Description: "OnePath OA FR IP-ANZ Cash Advantage",
    },
    "18502": {
      Description: "OnePath OA FR IP-Ausbil Aus Emg Leaders",
    },
    "18503": {
      Description: "OnePath OA FR IP-Arrowstreet Glb Eq Hdg",
    },
    "18504": {
      Description: "OnePath OA FR IP-Bentham Global Income",
    },
    "18505": {
      Description: "OnePath OA FR IP-OnePath Alts Gr",
    },
    "18506": {
      Description: "OnePath OA FR IP-BlackRock Tact Gr",
    },
    "18507": {
      Description: "OnePath OA FR IP-Kapstream Abs Ret Inc",
    },
    "18508": {
      Description: "OnePath OA FR IP-BlackRock Div Growth",
    },
    "18509": {
      Description: "OnePath OA FR IP-BlackRock Sci Aus Eq",
    },
    "18510": {
      Description: "OnePath OA FR IP-BlackRock Sci Intl Eq",
    },
    "18511": {
      Description: "OnePath OA FR IP-Pendal Aus Shr",
    },
    "18512": {
      Description: "OnePath OA FR IP-Pendal Smlr Coms",
    },
    "18513": {
      Description: "OnePath OA FR IP-Pendal Core Hdg Global",
    },
    "18514": {
      Description: "OnePath OA FR IP-SG Hiscock Property",
    },
    "18515": {
      Description: "OnePath OA FR IP-Bennelong Australian Eq",
    },
    "18516": {
      Description: "OnePath OA FR IP-Schroder Real Return",
    },
    "18517": {
      Description: "OnePath OA FR IP-CFS Global Credit Inc",
    },
    "18518": {
      Description: "OnePath OA FR IP-CFS Imputation",
    },
    "18519": {
      Description: "OnePath OA FR IP-Fidelity Australian Eq",
    },
    "18520": {
      Description: "OnePath OA FR IP-Pendal Monthly Inc Plus",
    },
    "18521": {
      Description: "OnePath OA FR IP-OP Active Growth",
    },
    "18522": {
      Description: "OnePath OA FR IP-OP Australian Share",
    },
    "18523": {
      Description: "OnePath OA FR IP-OP Balanced",
    },
    "18524": {
      Description: "OnePath OA FR IP-OP Blue Chip Imput",
    },
    "18525": {
      Description: "OnePath OA FR IP-OP Cash",
    },
    "18526": {
      Description: "OnePath OA FR IP-OP Conservative",
    },
    "18527": {
      Description: "OnePath OA FR IP-OP Div Fixed Interest",
    },
    "18528": {
      Description: "OnePath OA FR IP-OP Dvrs Credit",
    },
    "18529": {
      Description: "OnePath OA FR IP-OP Emerging Companies",
    },
    "18530": {
      Description: "OnePath OA FR IP-OP Global Emerging Mkt",
    },
    "18531": {
      Description: "OnePath OA FR IP-OP Glb Prpty Secs Idx",
    },
    "18532": {
      Description: "OnePath OA FR IP-OP Global Share",
    },
    "18533": {
      Description: "OnePath OA FR IP-OP High Growth",
    },
    "18534": {
      Description: "OnePath OA FR IP-OP Managed Growth",
    },
    "18535": {
      Description: "OnePath OA FR IP-OP Property Securities",
    },
    "18538": {
      Description: "OnePath OA FR IP-OP Select Leaders",
    },
    "18539": {
      Description: "OnePath OA FR IP-OP Sust Inv Aus Shares",
    },
    "18540": {
      Description: "OnePath OA FR IP-OP Tax Effective Inc",
    },
    "18541": {
      Description: "OnePath OA FR IP-Investors Mutual Aus Sh",
    },
    "18542": {
      Description: "OnePath OA FR IP-Janus Henderson Gl FITR",
    },
    "18543": {
      Description: "OnePath OA FR IP-Altrinsic Glbl Equities",
    },
    "18544": {
      Description: "OnePath OA FR IP-Merlon Australian Inc",
    },
    "18545": {
      Description: "OnePath OA FR IP-MFS Global Equity",
    },
    "18546": {
      Description: "OnePath OA FR IP-Optimix Aus Fixed Int",
    },
    "18547": {
      Description: "OnePath OA FR IP-Optimix Australian Shr",
    },
    "18548": {
      Description: "OnePath OA FR IP-Optimix Balanced",
    },
    "18549": {
      Description: "OnePath OA FR IP-Optimix Conservative",
    },
    "18550": {
      Description: "OnePath OA FR IP-OP Geared Aus Shrs Idx",
    },
    "18551": {
      Description: "OnePath OA FR IP-Optimix Gbl Emg Mkt Shr",
    },
    "18552": {
      Description: "OnePath OA FR IP-Optimix Global Share",
    },
    "18553": {
      Description: "OnePath OA FR IP-Optimix Gbl Sm Co Shr",
    },
    "18554": {
      Description: "OnePath OA FR IP-Optimix Growth",
    },
    "18555": {
      Description: "OnePath OA FR IP-Optimix High Growth",
    },
    "18556": {
      Description: "OnePath OA FR IP-Optimix Moderate",
    },
    "18557": {
      Description: "OnePath OA FR IP-Optimix Property Sec",
    },
    "18559": {
      Description: "OnePath OA FR IP-Perennial Value Shares",
    },
    "18560": {
      Description: "OnePath OA FR IP-Perpetual Australian Sh",
    },
    "18561": {
      Description: "OnePath OA FR IP-Perpetual Balanced Gr",
    },
    "18562": {
      Description: "OnePath OA FR IP-Perpetual Cons Growth",
    },
    "18563": {
      Description: "OnePath OA FR IP-Magellan Global",
    },
    "18564": {
      Description: "OnePath OA FR IP-Platinum International",
    },
    "18565": {
      Description: "OnePath OA FR IP-Rare Infrastructure Val",
    },
    "18566": {
      Description: "OnePath OA FR IP-Schroder Australian Eq",
    },
    "18567": {
      Description: "OnePath OA FR IP-Schroder Balanced",
    },
    "18568": {
      Description: "OnePath OA FR IP-T. Rowe Price Global Eq",
    },
    "18569": {
      Description: "OnePath OA FR IP-UBS Balanced",
    },
    "18570": {
      Description: "OnePath OA FR IP-UBS Defensive",
    },
    "18571": {
      Description: "OnePath OA FR IP-UBS Div Fixed Income",
    },
    "18572": {
      Description: "OnePath OA FR IP-Vanguard Aus Shr Index",
    },
    "18573": {
      Description: "OnePath OA FR IP-Vanguard Balanced Index",
    },
    "18574": {
      Description: "OnePath OA FR IP-Vanguard Cons Index",
    },
    "18575": {
      Description: "OnePath OA FR IP-Vanguard Growth Index",
    },
    "18576": {
      Description: "OnePath OA FR IP-Vanguard High Gr Index",
    },
    "18577": {
      Description: "OnePath OA FR IP-Vanguard Divers Bd Idx",
    },
    "18578": {
      Description: "OnePath OA FR IP-Vanguard Intl Index H",
    },
    "18579": {
      Description: "OnePath OA FR IP-Vanguard Intl Index",
    },
    "18580": {
      Description: "OnePath OA FR IP-Vanguard Prp Secs Index",
    },
    "18581": {
      Description: "OnePath OA FR IP-Antipodes Glbl (Lgonly)",
    },
    "18597": {
      Description: "CFS FC W Inv-FirstRate W Term Dep (3Mth)",
    },
    "18598": {
      Description: "CFS FC W Inv-FirstRate W Term Dep (6Mth)",
    },
    "18776": {
      Description: "Aurora Fortitude Absolute Return",
    },
    "18806": {
      Description: "Ellerston Global Equity Managers GEMS C",
    },
    "18858": {
      Description: "Charter Hall Direct Office Ordinary",
    },
    "18952": {
      Description: "Realindex Emerging Markets-Class A",
    },
    "18953": {
      Description: "Investors Mutual Concentrated Aus Share",
    },
    "18957": {
      Description: "Russell Australian Bond Income",
    },
    "18977": {
      Description: "Herschel Australian Equities Trust",
    },
    "18978": {
      Description: "Herschel Concentrated Australian Eq",
    },
    "18989": {
      Description: "Ipac Select Index Defensive",
    },
    "18990": {
      Description: "Ipac Select Index Moderately Defensive",
    },
    "18991": {
      Description: "Ipac Select Index Balanced",
    },
    "18992": {
      Description: "Ipac Select Index Growth",
    },
    "18993": {
      Description: "Ipac Select Index High Growth",
    },
    "18994": {
      Description: "Ipac Select Income Generator",
    },
    "18995": {
      Description: "North Professional Moderately Cnsrv",
    },
    "18996": {
      Description: "North Professional Balanced",
    },
    "18997": {
      Description: "North Professional Growth",
    },
    "18998": {
      Description: "North Professional High Growth",
    },
    "19006": {
      Description: "Perpetual High Grade Treasury R",
    },
    "19012": {
      Description: "Profile Preservation Portfolio",
    },
    "19013": {
      Description: "Profile Accumulation Portfolio",
    },
    "19014": {
      Description: "ipac Alternative Balanced",
    },
    "19016": {
      Description: "Tribeca Alpha Plus Class C",
    },
    "19022": {
      Description: "Ardea Australian Inflation Linked Bond",
    },
    "19023": {
      Description: "Mercer Cash Fund - Term Deposit Units",
    },
    "19024": {
      Description: "Legg Mason Brandywine Glb Oppc Fxd Inc I",
    },
    "19026": {
      Description: "Legg Mason Martin Currie Real Income A",
    },
    "19028": {
      Description: "Regal Long Short Australian Equity",
    },
    "19030": {
      Description: "CFS FC-Magellan W Global Share",
    },
    "19031": {
      Description: "Realindex W Emerging Markets",
    },
    "19033": {
      Description: "CFS FC-Baillie Gifford W LT Glb Gwth",
    },
    "19035": {
      Description: "CFS FC W Inv-AMP Capital W Glb Prop Sec",
    },
    "19050": {
      Description: "CFS FC Inv-Magellan Global",
    },
    "19053": {
      Description: "CFS FC Inv-Baillie Gifford LT Glb Gwth",
    },
    "19055": {
      Description: "CFS FC Inv-AMP Capital Glb Property Sec",
    },
    "19084": {
      Description: "Perpetual Wholesale Dynamic Fixed Income",
    },
    "19089": {
      Description: "AQR Wholesale Managed Futures 1P",
    },
    "19090": {
      Description: "Vanguard Diversified Bond Index",
    },
    "19094": {
      Description: "OnePath OA FR IP-Schroder Fixed Income",
    },
    "19095": {
      Description: "OnePath OA FR IP-Platinum Asia",
    },
    "19096": {
      Description: "OnePath OA FR IP-Walter Scott Gbl Eq Hgd",
    },
    "19105": {
      Description: "Russell Emerging Markets Fund Class B",
    },
    "19106": {
      Description: "Russell Global Opportunities B",
    },
    "19107": {
      Description: "Russell Global Opportunities $NZ Hdg B",
    },
    "19109": {
      Description: "RARE Infrastructure Value Unhedged",
    },
    "19110": {
      Description: "Russell Global Opportunities $NZ Hdg A",
    },
    "19114": {
      Description: "Legg Mason Martin Currie Equity Income A",
    },
    "19117": {
      Description: "Russell After-Tax Aus Shr (SuperInvs) A",
    },
    "19123": {
      Description: "Strategic Fixed Interest",
    },
    "19124": {
      Description: "Walter Scott Emerging Markets",
    },
    "19130": {
      Description: "Russell Global Bond B",
    },
    "19132": {
      Description: "Regal Australian Long Short Equity",
    },
    "19133": {
      Description: "Regal Asian Quantitative",
    },
    "19141": {
      Description: "Legg Mason Martin Currie Emerging Mkts",
    },
    "19142": {
      Description: "ANZ OA IP-ANZ Term Deposit 3 Months",
    },
    "19143": {
      Description: "ANZ OA IP-ANZ Term Deposit 6 Months",
    },
    "19144": {
      Description: "ANZ OA IP-ANZ Term Deposit 12 Months",
    },
    "19145": {
      Description: "ANZ OA IP-ANZ Term Deposit 2 Years",
    },
    "19146": {
      Description: "ANZ OA IP-ANZ Term Deposit 3 Years",
    },
    "19147": {
      Description: "ANZ OA IP-ANZ Term Deposit 5 Years",
    },
    "19160": {
      Description: "OnePath OA IP-ANZ Term Deposit 3 Months",
    },
    "19161": {
      Description: "OnePath OA IP-ANZ Term Deposit 6 Months",
    },
    "19162": {
      Description: "OnePath OA IP-ANZ Term Deposit 12 Months",
    },
    "19163": {
      Description: "OnePath OA IP-ANZ Term Deposit 2 Years",
    },
    "19164": {
      Description: "OnePath OA IP-ANZ Term Deposit 3 Years",
    },
    "19165": {
      Description: "OnePath OA IP-ANZ Term Deposit 5 Years",
    },
    "19166": {
      Description: "OnePath OA FR IP-ANZ Term Dep 3 Mths",
    },
    "19167": {
      Description: "OnePath OA FR IP-ANZ Term Dep 6 Mths",
    },
    "19168": {
      Description: "OnePath OA FR IP-ANZ Term Dep 12 Mths",
    },
    "19169": {
      Description: "OnePath OA FR IP-ANZ Term Deposit 2 Yrs",
    },
    "19170": {
      Description: "OnePath OA FR IP-ANZ Term Deposit 3 Yrs",
    },
    "19171": {
      Description: "OnePath OA FR IP-ANZ Term Deposit 5 Ys",
    },
    "19205": {
      Description: "FirstMac High Livez",
    },
    "19207": {
      Description: "AMP Capital Multi-Asset A",
    },
    "19208": {
      Description: "AMP Capital Multi-Asset H",
    },
    "19210": {
      Description: "Third Link Growth",
    },
    "19212": {
      Description: "Dimensional Global Bond Trust",
    },
    "19213": {
      Description: "Dimensional World Allocation 70/30 Trust",
    },
    "19214": {
      Description: "Mutual Cash Term Deposits & Bank Bills",
    },
    "19244": {
      Description: "TPT Fixed Term",
    },
    "19245": {
      Description: "TPT Long Term",
    },
    "19246": {
      Description: "TPT Select Mortgage",
    },
    "19278": {
      Description: "Ventura Diversified 50 A",
    },
    "19279": {
      Description: "Ventura Growth 70 A",
    },
    "19280": {
      Description: "Ventura Conservative A",
    },
    "19281": {
      Description: "Ventura Australian Shares A",
    },
    "19282": {
      Description: "Ventura Aust Opportunities A",
    },
    "19283": {
      Description: "Ventura International Shares A",
    },
    "19285": {
      Description: "Omega Global Corporate Bond",
    },
    "19286": {
      Description: "Netwealth Active 70/30 Growth",
    },
    "19288": {
      Description: "Bendigo Defensive Index",
    },
    "19289": {
      Description: "Bendigo Conservative Index",
    },
    "19290": {
      Description: "Bendigo Balanced Index",
    },
    "19291": {
      Description: "Bendigo Growth Index",
    },
    "19292": {
      Description: "Bendigo High Growth Index",
    },
    "19293": {
      Description: "Bendigo Defensive WS",
    },
    "19294": {
      Description: "Bendigo High Growth WS",
    },
    "19295": {
      Description: "Plato Australian Shares Income",
    },
    "19296": {
      Description: "Premium Asia Income",
    },
    "19307": {
      Description: "MLC Wholesale Australian Share Index",
    },
    "19308": {
      Description: "Franklin Templeton Australian Equity W",
    },
    "19309": {
      Description: "Franklin Templeton Australian Equity I",
    },
    "19310": {
      Description: "RACQ Bank Cash Investment Account",
    },
    "19311": {
      Description: "Altius Bond",
    },
    "19312": {
      Description: "Hamilton Investment Fd-Multi Asset Port",
    },
    "19314": {
      Description: "CFML Schroder Equity Opportunities",
    },
    "19315": {
      Description: "CFML Money Market",
    },
    "19316": {
      Description: "CFML RARE Emerging Markets",
    },
    "19317": {
      Description: "CFML Fixed Interest",
    },
    "19318": {
      Description: "CFML Stewart Investors Worldwide S",
    },
    "19319": {
      Description: "CFML First Sentier Investors Infras",
    },
    "19320": {
      Description: "CFML Listed Property",
    },
    "19322": {
      Description: "Bennelong Long Short Equity",
    },
    "19325": {
      Description: "Challenger Guaranteed Pen - 30 June 2021",
    },
    "19329": {
      Description: "Legg Mason Western Asset Cash Plus Tr X",
    },
    "19330": {
      Description: "LDI Connect 3 Portfolio",
    },
    "19331": {
      Description: "LDI Connect 7 Portfolio",
    },
    "19341": {
      Description: "Microequities Deep Value",
    },
    "19342": {
      Description: "Australian Ethical Advocacy WS",
    },
    "19343": {
      Description: "Australian Ethical Diversified Shr WS",
    },
    "19344": {
      Description: "Australian Ethical Australian Shr WS",
    },
    "19345": {
      Description: "LM Australian Income CP AUD 1 Year",
    },
    "19359": {
      Description: "Aurora Dividend Income Trust",
    },
    "19360": {
      Description: "IOOF Profile 45",
    },
    "19361": {
      Description: "IOOF Profile 55",
    },
    "19362": {
      Description: "IOOF Profile 65",
    },
    "19363": {
      Description: "IOOF Profile 75",
    },
    "19364": {
      Description: "IOOF Profile 85",
    },
    "19365": {
      Description: "IOOF Profile 95",
    },
    "19366": {
      Description: "IOOF Profile Diversified Fixed Interest",
    },
    "19367": {
      Description: "IOOF Profile Australian Shares",
    },
    "19368": {
      Description: "IOOF Profile International Shares",
    },
    "19369": {
      Description: "IOOF Profile International Shares Hdgd",
    },
    "19370": {
      Description: "Clime Australian Value WS",
    },
    "19382": {
      Description: "Smarter Money Platform Investor",
    },
    "19383": {
      Description: "Atrium Evolution Series Divers - AEF 5",
    },
    "19384": {
      Description: "Atrium Evolution Series Divers - AEF 7",
    },
    "19385": {
      Description: "Atrium Evolution Series Divers - AEF 9",
    },
    "19386": {
      Description: "ipac life choices Active 50",
    },
    "19387": {
      Description: "ipac life choices Active 70",
    },
    "19388": {
      Description: "ipac life choices Active 85",
    },
    "19389": {
      Description: "ipac life choices Active 100",
    },
    "19390": {
      Description: "ipac life choices Income Generator",
    },
    "19391": {
      Description: "ipac life choices Alternative Balanced",
    },
    "19392": {
      Description: "Altrinsic Global Equities Trust",
    },
    "19394": {
      Description: "Pendal Dynamic Global Equity",
    },
    "19431": {
      Description: "Perpetual Pure Equity Alpha",
    },
    "19434": {
      Description: "Sandhurst Strategic Income A",
    },
    "19437": {
      Description: "Partners Group Global Value (AUD)",
    },
    "19438": {
      Description: "Ventura Growth 90",
    },
    "19448": {
      Description: "T. Rowe Price Australian Equity",
    },
    "19456": {
      Description: "CFS FC-Perpetual W Australian Share",
    },
    "19457": {
      Description: "CFS FC W Inv-Perpetual W Divers Income",
    },
    "19462": {
      Description: "CFS FC Inv-Perpetual Aus Share",
    },
    "19463": {
      Description: "CFS FC Inv-Perpetual Diversified Income",
    },
    "19468": {
      Description: "ipac life choices Index 50",
    },
    "19469": {
      Description: "ipac life choices Index 70",
    },
    "19470": {
      Description: "ipac life choices Premium Growth",
    },
    "19471": {
      Description: "ipac life choices Index 85",
    },
    "19477": {
      Description: "UBS Tactical Beta Fund - Conservative",
    },
    "19478": {
      Description: "UBS Tactical Beta Fund - Growth",
    },
    "19480": {
      Description: "CFS WS Glb Listed Infrastructure-Class A",
    },
    "19481": {
      Description: "Cromwell Ipswich City Heart Trust",
    },
    "19483": {
      Description: "Fidelity Australian Opportunities",
    },
    "19493": {
      Description: "Bennelong Kardinia Absolute Return",
    },
    "19494": {
      Description: "State Street Australian Cash Trust",
    },
    "19496": {
      Description: "State Street Global Index Plus Trust",
    },
    "19497": {
      Description: "State Street Global Index Plus (Hdg) Tr",
    },
    "19501": {
      Description: "State Street Australian Equity",
    },
    "19519": {
      Description: "Pinnacle Illiquid Property Funds",
    },
    "19524": {
      Description: "Lincoln Wholesale Australian Income",
    },
    "19525": {
      Description: "Allan Gray Australia Stable",
    },
    "19536": {
      Description: "Pendal Global Emerging Mkts Oppes – WS",
    },
    "19537": {
      Description: "Solaris Core Australian Equity PA",
    },
    "19538": {
      Description: "Alpha Alternatives",
    },
    "19539": {
      Description: "Alpha Diversified Income",
    },
    "19540": {
      Description: "Alpha Infrastructure",
    },
    "19542": {
      Description: "Liberty Term Investment",
    },
    "19543": {
      Description: "The Montgomery Fund",
    },
    "19544": {
      Description: "Packer & Co Investigator Trust",
    },
    "19545": {
      Description: "Resolution Capital Glbl Ppty Secs UH SII",
    },
    "19546": {
      Description: "Morphic Global Opportunities",
    },
    "19547": {
      Description: "Smallco Broadcap",
    },
    "19573": {
      Description: "Russell Inv Multi-Asset Growth Strat Ret",
    },
    "19574": {
      Description: "Russell Inv Multi-Asset Growth StratPlus",
    },
    "19576": {
      Description: "Russell Inv Multi-Asset Income Strategy",
    },
    "19578": {
      Description: "Netwealth Active 30/70 Conservative",
    },
    "19579": {
      Description: "Netwealth Index Opportunities Growth",
    },
    "19580": {
      Description: "Netwealth Australian Bond Index",
    },
    "19581": {
      Description: "Ellerston Australian Market Neutral",
    },
    "19582": {
      Description: "UBS Tactical Beta Fund - Balanced",
    },
    "19583": {
      Description: "Strategic Cash Plus",
    },
    "19585": {
      Description: "Janus Henderson Global Natural Resources",
    },
    "19586": {
      Description: "Mutual Cash Term Deposits & Bank Bills B",
    },
    "19587": {
      Description: "Mutual Cash Term Deposits & Bank Bills C",
    },
    "19589": {
      Description: "Payden Global Income Opportunities",
    },
    "19590": {
      Description: "Acadian Aus Equity High Yield Class A",
    },
    "19591": {
      Description: "Acadian Global Managed Volatility Equity",
    },
    "19594": {
      Description: "BT Capital Protection - Cash Class 2020",
    },
    "19595": {
      Description: "BT Capital Protection - Cash Class 2021",
    },
    "19596": {
      Description: "BT Capital Protection - Cash Class 2022",
    },
    "19599": {
      Description: "BT Capital Protection - Bond Class 2020",
    },
    "19600": {
      Description: "BT Capital Protection - Bond Class 2021",
    },
    "19601": {
      Description: "BT Capital Protection - Bond Class 2022",
    },
    "19602": {
      Description: "Mercer Emerging Markets Debt",
    },
    "19603": {
      Description: "Somerset Emerging Markets Dividend Gr",
    },
    "19649": {
      Description: "Capital Group Emerging Mkts Ttl Opps(AU)",
    },
    "19652": {
      Description: "Fidelity Global Demographics",
    },
    "19675": {
      Description: "Charter Hall Direct Industrial Fund No.2",
    },
    "19686": {
      Description: "Crescent Australian Equity",
    },
    "19688": {
      Description: "Allan Gray Australia Equity B",
    },
    "19689": {
      Description: "MFS Concentrated Global Equity Trust W",
    },
    "19690": {
      Description: "Crescent International Equity",
    },
    "19691": {
      Description: "Crescent Islamic Cash Management",
    },
    "19694": {
      Description: "i Capital International Value",
    },
    "19695": {
      Description: "Paradice Global Small Cap Fund",
    },
    "19696": {
      Description: "Bell Global Emerging Companies",
    },
    "19697": {
      Description: "Vanguard Australian Infl-Lnkd Bond Idx",
    },
    "19698": {
      Description: "Perpetual Diversified Real Return W",
    },
    "19699": {
      Description: "Franklin Templeton Global Aggregate Bd I",
    },
    "19700": {
      Description: "Franklin Templeton Global Aggregate Bd W",
    },
    "19701": {
      Description: "Crescent Diversified Property",
    },
    "19702": {
      Description: "Pro-D Balanced",
    },
    "19703": {
      Description: "Pro-D Growth",
    },
    "19704": {
      Description: "Pro-D High Growth",
    },
    "19708": {
      Description: "Lazard Emerging Markets Total Ret Debt",
    },
    "19709": {
      Description: "LDI Connect 20 Portfolio",
    },
    "19711": {
      Description: "Spire USA ROC II (AUD)",
    },
    "19712": {
      Description: "Macquarie True Index Sovereign Bond",
    },
    "19713": {
      Description: "Schroder Real Return CPI Plus 5% Fd -CC",
    },
    "19735": {
      Description: "Realm High Income",
    },
    "19737": {
      Description: "Charter Hall Direct Industrial No.2 - W",
    },
    "19738": {
      Description: "Lincoln Retail Australian Income",
    },
    "19741": {
      Description: "Stonehouse Core Value Portfolio",
    },
    "19779": {
      Description: "Invesco WS Aus Smaller Companies-Class R",
    },
    "19780": {
      Description: "Invesco WS Diversified Growth-Class R",
    },
    "19781": {
      Description: "Invesco WS Global Opportunities-Hedged R",
    },
    "19782": {
      Description: "The Trust Company Philanthropy",
    },
    "19783": {
      Description: "The Trust Company Diversified Property",
    },
    "19784": {
      Description: "The Trust Company Australian Share",
    },
    "19785": {
      Description: "Perpetual Wholesale Income Share Fund",
    },
    "19786": {
      Description: "The Trust Company Bond",
    },
    "19787": {
      Description: "Auscap Long Short Australian Equities",
    },
    "19788": {
      Description: "CFS FC-PIMCO Wholesale Global Bond",
    },
    "19789": {
      Description: "SGH20 Professional Investor",
    },
    "19790": {
      Description: "SGH ICE Professional Investor",
    },
    "19792": {
      Description: "SGH Property Income Professional Inv",
    },
    "19793": {
      Description: "Forager International Shares",
    },
    "19794": {
      Description: "Lazard Defensive Australian Equity",
    },
    "19796": {
      Description: "Apostle Dundas Global Equity",
    },
    "19797": {
      Description: "Dimensional World Allocation 50/50 Trust",
    },
    "19798": {
      Description: "Dimensional World Equity Trust",
    },
    "19800": {
      Description: "DMG Diversified Portfolio",
    },
    "19801": {
      Description: "Mercer Australian Shrs for Tax Exmpt Inv",
    },
    "19806": {
      Description: "CFS FC Inv-PIMCO Global Bond",
    },
    "19869": {
      Description: "Acadian Wholesale Global Managed Volat",
    },
    "19871": {
      Description: "Prime Value Opportunities",
    },
    "19872": {
      Description: "Prime Value Opportunities B",
    },
    "19873": {
      Description: "North Guardian Growth",
    },
    "19874": {
      Description: "North Guardian Balanced",
    },
    "19875": {
      Description: "North Guardian Moderately Defensive",
    },
    "19876": {
      Description: "Sandhurst Strategic Income B",
    },
    "19877": {
      Description: "Magellan Global (Hedged)",
    },
    "19878": {
      Description: "Magellan High Conviction",
    },
    "19879": {
      Description: "Magellan Infrastructure (Unhedged)",
    },
    "19880": {
      Description: "Perpetual WFIA-Aspect Divers Futures",
    },
    "19893": {
      Description: "Fidelity Future Leaders",
    },
    "19894": {
      Description: "Partners Group Global Value (AUD) W",
    },
    "19895": {
      Description: "Nikko AM Australian Share Concntr",
    },
    "19896": {
      Description: "Pendal Pure Alpha Fixed Income",
    },
    "19898": {
      Description: "BT Capital Protection - Cash Class 2023",
    },
    "19899": {
      Description: "BT Capital Protection - Bond Class 2023",
    },
    "19900": {
      Description: "Maple-Brown Abbott Global Listed Infras",
    },
    "19901": {
      Description: "Aquasia Enhanced Credit",
    },
    "19902": {
      Description: "BlackRock Multi Opportunity Absolute Ret",
    },
    "19904": {
      Description: "Ophir Opportunities",
    },
    "19907": {
      Description: "Perpetual Pure Credit Alpha Fund W",
    },
    "19911": {
      Description: "Perpetual Pure Microcap Fund",
    },
    "19914": {
      Description: "APN Asian REIT",
    },
    "19916": {
      Description: "Wisdom Australian Equities",
    },
    "19939": {
      Description: "MLC WS Inflation Plus - Conservative",
    },
    "19940": {
      Description: "MLC WS Inflation Plus - Moderate",
    },
    "19941": {
      Description: "PIC Wholesale Inflation Plus - Conserv",
    },
    "19942": {
      Description: "PIC Wholesale Inflation Plus - Moderate",
    },
    "19943": {
      Description: "Cromwell Direct Property",
    },
    "20835": {
      Description: "Fisher Global Fund",
    },
    "20836": {
      Description: "Fisher Trans Tasman Equity Trust",
    },
    "21068": {
      Description: "Fisher Multi Sector Fund",
    },
    "21851": {
      Description: "Sovereign New Zealand Property Fund",
    },
    "22210": {
      Description: "Fisher BondPlus Fund",
    },
    "22248": {
      Description: "OneAnswer SAC NZ Share",
    },
    "22275": {
      Description: "OneAnswer SAC NZ Fixed Interest",
    },
    "22367": {
      Description: "Westpac Active Conservative Trust",
    },
    "22368": {
      Description: "Westpac Active Balanced Trust",
    },
    "22420": {
      Description: "OneAnswer SAC Balanced",
    },
    "22642": {
      Description: "OneAnswer SAC Property Securities",
    },
    "22643": {
      Description: "Fisher Funds Australian Growth Fund",
    },
    "22651": {
      Description: "Westpac Active Growth Trust",
    },
    "22749": {
      Description: "OneAnswer SAC Australian Share",
    },
    "22885": {
      Description: "OneAnswer SAC International Share",
    },
    "22953": {
      Description: "Fisher Funds NZ Growth Fund",
    },
    "22984": {
      Description: "Devon Trans-Tasman Fund",
    },
    "23092": {
      Description: "OneAnswer SAC Equity Selection",
    },
    "23101": {
      Description: "AMP PUT Select Cash",
    },
    "23102": {
      Description: "AMP PUT Select Income",
    },
    "23103": {
      Description: "AMP PUT Select Conservative",
    },
    "23104": {
      Description: "AMP PUT Select Balanced",
    },
    "23105": {
      Description: "AMP PUT Select Growth",
    },
    "23113": {
      Description: "AMP Prem PUT SSgA Global Fixed Int Index",
    },
    "23116": {
      Description: "AMP Prem PUT ACI NZ Shares Index",
    },
    "23118": {
      Description: "AMP Prem PUT ACI NZ Shares",
    },
    "23119": {
      Description: "AMP Prem PUT SSgA Global Shares Index",
    },
    "23120": {
      Description: "AMP Prem PUT SSgA Global Shares IndexHdg",
    },
    "23121": {
      Description: "AMP Prem PUT FD Intl Share Fund 1 Value",
    },
    "23157": {
      Description: "AMP Australasian Property Index Fund",
    },
    "23158": {
      Description: "AMP Capital Global Shares Fund",
    },
    "23160": {
      Description: "AMP Capital Hdgd Gbl Fixed Intrst Fund",
    },
    "23161": {
      Description: "AMP Capital Ethical Leaders Conservative",
    },
    "23184": {
      Description: "Nikko AM Concentrated Equity",
    },
    "23215": {
      Description: "AMP Capital NZ Short Duration",
    },
    "23216": {
      Description: "AMP Capital Core Global Shares Fund",
    },
    "23217": {
      Description: "AMP Capital Core Hedged Global Shares Fd",
    },
    "23218": {
      Description: "AMP Capital Emerging Markets Share",
    },
    "23219": {
      Description: "AMP Capital Ethical Leaders Global Shars",
    },
    "23220": {
      Description: "AMP Capital Global Propty Securities Fd",
    },
    "23221": {
      Description: "AMP Capital Ethical Leaders Growth",
    },
    "23253": {
      Description: "AMP Capital NZ Cash Fund",
    },
    "23255": {
      Description: "Milford Active Growth",
    },
    "23256": {
      Description: "Milford Trans-Tasman Equity",
    },
    "23259": {
      Description: "AMP AIT Balanced Portfolio - UT 02",
    },
    "23260": {
      Description: "AMP AIT Emerging Markets - UT65",
    },
    "23261": {
      Description: "AMP AIT Australasian Shrs-Multi Mgr-UT07",
    },
    "23263": {
      Description: "Mint Australasian Equity Fd (Retail)",
    },
    "23264": {
      Description: "Mint Australia NZ Rl Estt Invm (Ret)",
    },
    "23550": {
      Description: "Fisher Cashplus Fund",
    },
    "23557": {
      Description: "Fisher Funds International Growth Fund",
    },
    "23559": {
      Description: "Fisher Funds Premium Australian Fund",
    },
    "23560": {
      Description: "Fisher Funds Premium New Zealand Fund",
    },
    "23561": {
      Description: "Fisher Funds Premium International Fund",
    },
    "23562": {
      Description: "ASB Cash Fund",
    },
    "23566": {
      Description: "AMP Capital NZ Fixed Interest Fund",
    },
    "23578": {
      Description: "Nikko AM Income",
    },
    "23582": {
      Description: "ASB Conservative",
    },
    "23583": {
      Description: "ASB Conservative Plus",
    },
    "23584": {
      Description: "ASB Moderate",
    },
    "23585": {
      Description: "ASB Balanced",
    },
    "23586": {
      Description: "ASB Growth",
    },
    "23587": {
      Description: "ASB World Shares",
    },
    "23599": {
      Description: "Fisher Funds Property and Infrastructure",
    },
    "23600": {
      Description: "Elevation Capital Value Fund",
    },
    "23602": {
      Description: "Harbour NZ Corporate Bond",
    },
    "23603": {
      Description: "Pie Australasian Growth Fund",
    },
    "23609": {
      Description: "Pathfinder Commodity Plus Fund",
    },
    "23613": {
      Description: "Nikko AM NZ Corporate Bond",
    },
    "23615": {
      Description: "AMP Capital NZ Shares Fund",
    },
    "23631": {
      Description: "AMP Capital Australian Share Fund",
    },
    "23677": {
      Description: "Harbour Australasian Equity",
    },
    "23680": {
      Description: "Nikko AM Core Equity",
    },
    "23683": {
      Description: "Milford Balanced Fund",
    },
    "23684": {
      Description: "Milford Diversified Income Fund",
    },
    "23685": {
      Description: "ANZ Invmt Fds Conservative",
    },
    "23686": {
      Description: "ANZ Invmt Fds Conservative Balanced",
    },
    "23687": {
      Description: "ANZ Invmt Fds Balanced",
    },
    "23688": {
      Description: "ANZ Invmt Fds Balanced Growth",
    },
    "23689": {
      Description: "ANZ Invmt Fds Growth",
    },
    "23690": {
      Description: "Devon Alpha Fund",
    },
    "23692": {
      Description: "BT Corporate Bond Fund",
    },
    "23696": {
      Description: "BT Property Fund",
    },
    "23698": {
      Description: "BT Enhanced Cash Fund",
    },
    "23706": {
      Description: "Devon Australian",
    },
    "23741": {
      Description: "NZAM Global Growth",
    },
    "23758": {
      Description: "AMP AIT Moderate Portfolio - UT01",
    },
    "23759": {
      Description: "AMP AIT Growth Portfolio - UT03",
    },
    "23760": {
      Description: "AMP AIT Global Infrastructure - UT04",
    },
    "23763": {
      Description: "AMP AIT Global Bonds-Multi Mgr-UT13",
    },
    "23766": {
      Description: "AMP AIT Global Equities-Multi Mgr-UT28",
    },
    "23768": {
      Description: "AMP AIT Global Property - UT54",
    },
    "23772": {
      Description: "AMP AIT NZ Fixed Interest - UT60",
    },
    "23773": {
      Description: "Pathfinder Global Water",
    },
    "23774": {
      Description: "Nikko AM NZ Bond",
    },
    "23777": {
      Description: "Harbour NZ Core Fixed Interest",
    },
    "23780": {
      Description: "AMP Capital Ethical Leaders Balanced",
    },
    "23781": {
      Description: "AMP Capital Term Advantage",
    },
    "23782": {
      Description: "Harbour Australasian Equity Income",
    },
    "23783": {
      Description: "Forsyth Barr Premium Yield",
    },
    "23784": {
      Description: "Forsyth Barr NZ Fixed Interest",
    },
    "23787": {
      Description: "Forsyth Barr New Zealand Equities",
    },
    "23788": {
      Description: "Russell Investments NZ Fixed Interest",
    },
    "23789": {
      Description: "Russell Investments Global Fixed Int",
    },
    "23790": {
      Description: "Russell Investments NZ Shares",
    },
    "23791": {
      Description: "Russell Investments Global Shares",
    },
    "23792": {
      Description: "Russell Investments Hedged Global Shares",
    },
    "23793": {
      Description: "Pie Australasian Dividend",
    },
    "23802": {
      Description: "Pathfinder World Equity Fund",
    },
    "23803": {
      Description: "Fisher Funds Income",
    },
    "23806": {
      Description: "BT PS Australasian Diversified Share",
    },
    "23808": {
      Description: "BT PS International Diversified Bond",
    },
    "23809": {
      Description: "BT PS International Diversified Share",
    },
    "23811": {
      Description: "Westpac Active Income Strategies Trust",
    },
    "23812": {
      Description: "Westpac Active Moderate Trust",
    },
    "23813": {
      Description: "Nikko AM Global Equity Hedged",
    },
    "23815": {
      Description: "Nikko AM Global Bond",
    },
    "23819": {
      Description: "Fisher New Zealand Fixed Inc Trust",
    },
    "23824": {
      Description: "Devon Dividend Yield",
    },
    "23825": {
      Description: "Pie Australasian Emerging Companies",
    },
    "23826": {
      Description: "Milford Global Equity",
    },
    "23827": {
      Description: "AMP Capital Global Short Duration",
    },
    "23831": {
      Description: "OneAnswer SAC International Fixed Intrst",
    },
    "23832": {
      Description: "OneAnswer SAC International Property",
    },
    "23834": {
      Description: "Milford Dynamic",
    },
    "23835": {
      Description: "OneAnswer MAC Conservative",
    },
    "23836": {
      Description: "OneAnswer MAC Conservative Balanced",
    },
    "23837": {
      Description: "OneAnswer MAC Balanced",
    },
    "23838": {
      Description: "OneAnswer MAC Balanced Growth",
    },
    "23839": {
      Description: "OneAnswer MAC Growth",
    },
    "23840": {
      Description: "KTAM NZ Australian Long Short Equity",
    },
    "23841": {
      Description: "Vanguard Intl Shares Index Hgd NZD",
    },
    "23842": {
      Description: "Dimensional Global Core Equity NZD Hgd",
    },
    "23843": {
      Description: "Dimensional Five-Year Diversified FI NZD",
    },
    "23844": {
      Description: "Bentham Global Income Fund NZD",
    },
    "23845": {
      Description: "Bentham Wholesale Syndicated Loan NZD",
    },
    "23856": {
      Description: "Dimensional Global Bond Trust NZD",
    },
    "23857": {
      Description: "Harbour Australasian Equity Focus Fund",
    },
    "23859": {
      Description: "Pie Global Small Companies Fund",
    },
    "23860": {
      Description: "Nikko AM NZ Cash",
    },
    "23863": {
      Description: "Forte Equity Trust",
    },
    "23864": {
      Description: "AMP Capital Income Generator Fund",
    },
    "23866": {
      Description: "Salt Long Short Fund",
    },
    "23877": {
      Description: "Castle Point Ranger Fund",
    },
    "23878": {
      Description: "AMP Capital Global Multi Asset Fund",
    },
    "23879": {
      Description: "Mint Diversified Income",
    },
    "23880": {
      Description: "Smartshares NZ Core Equity Trust",
    },
    "23881": {
      Description: "Harbour NZ Equity Advanced Beta Fund",
    },
    "23885": {
      Description: "AMP Capital Global Listed Infrastructure",
    },
    "23889": {
      Description: "AMP NZRT International Fixed Interest",
    },
    "23890": {
      Description: "AMP NZRT Australasian Shares",
    },
    "23891": {
      Description: "AMP NZRT International Shares",
    },
    "23892": {
      Description: "AMP NZRT Passive International Shares",
    },
    "23893": {
      Description: "AMP NZRT Property Fund",
    },
    "23894": {
      Description: "AMP NZRT NZ Fixed Interest",
    },
    "23895": {
      Description: "AMP Capital Ethical Leaders NZ Shares",
    },
    "23896": {
      Description: "AMP ARS-Conservative",
    },
    "23897": {
      Description: "AMP ARS-Balanced",
    },
    "23898": {
      Description: "AMP ARS-High Growth",
    },
    "23899": {
      Description: "AMP ARS-Cash",
    },
    "23900": {
      Description: "AMP ARS-International Fixed Interest",
    },
    "23913": {
      Description: "AMP ARS-NZ Fixed Interest",
    },
    "23914": {
      Description: "AMP ARS-Listed NZ & Australian Property",
    },
    "23915": {
      Description: "AMP ARS-Listed International Property",
    },
    "23916": {
      Description: "AMP ARS-NZ & Australian (multi-manager)",
    },
    "23917": {
      Description: "AMP ARS-NZ & Australian (Value)",
    },
    "23918": {
      Description: "AMP ARS-International Shares (Growth)",
    },
    "23919": {
      Description: "AMP ARS-International Shares (Value)",
    },
    "23920": {
      Description: "AMP ARS-International Shares (Passive)",
    },
    "23921": {
      Description: "AMP ARS-UK Cash",
    },
    "23923": {
      Description: "Milford Conservative",
    },
    "23924": {
      Description: "Harbour Income",
    },
    "23925": {
      Description: "T.Rowe Price Global Equity Growth",
    },
    "24001": {
      Description: "Pie Growth 2 Fund",
    },
    "24002": {
      Description: "AMP AIT eInvest - Conservative - MDF2",
    },
    "24003": {
      Description: "AMP AIT eInvest - Moderate - MDf3",
    },
    "24004": {
      Description: "AMP AIT eInvest - Balanced - MDF5",
    },
    "24005": {
      Description: "AMP AIT eInvest - Growth - MDF6",
    },
    "24006": {
      Description: "AMP AIT eInvest - Aggressive - MDF7",
    },
    "24007": {
      Description: "AMP AIT NZ Cash - UT35",
    },
    "24008": {
      Description: "AMP AIT NZ Bond - UT36",
    },
    "24009": {
      Description: "AMP AIT Fixed Interest Income - UT36",
    },
    "24010": {
      Description: "AMP AIT Aggressive Portfolio - UT31",
    },
    "24044": {
      Description: "AMP NZRT Koru Balanced Fund",
    },
    "24068": {
      Description: "Pie Growth UK & Europe",
    },
    "24084": {
      Description: "Castle Point 5 Oceans Fund",
    },
    "24103": {
      Description: "BNZ PWS Australasian Equity Fund",
    },
    "24104": {
      Description: "BNZ PWS Cash Fund",
    },
    "24105": {
      Description: "BNZ PWS International Equity Fund",
    },
    "24106": {
      Description: "BNZ PWS International Fixed Interest Fd",
    },
    "24107": {
      Description: "BNZ PWS NZ Fixed Interest Fund",
    },
    "24111": {
      Description: "APN AREIT PIE Fund",
    },
    "24112": {
      Description: "Pathfinder Global Property Fund",
    },
    "24153": {
      Description: "Milford Global Select Wholesale Fund",
    },
    "24154": {
      Description: "Milford NZ Equities Wholesale Fund",
    },
    "24217": {
      Description: "Forsyth Barr Australian Equities Fund",
    },
    "24218": {
      Description: "Forsyth Barr Global Equities Fund",
    },
    "24219": {
      Description: "Forsyth Barr Listed Property Fund",
    },
    "24244": {
      Description: "Milford Australian Absolute Growth Fund",
    },
    "24252": {
      Description: "BOCNZ Wholesale #1 Fund",
    },
    "24254": {
      Description: "Mint New Zealand SRI Equity Fund",
    },
    "24255": {
      Description: "Milford Global Corporate Bond Fund",
    },
    "24258": {
      Description: "Nikko AM Global Shares",
    },
    "24260": {
      Description: "Milford Trans-Tasman Bond",
    },
    "24261": {
      Description: "Simplicity NZ Bond",
    },
    "24262": {
      Description: "Simplicity NZ Share",
    },
    "24266": {
      Description: "Legg Mason Global Oppc Fxd Inc Fd",
    },
    "24267": {
      Description: "Hunter Global Fixed Interest",
    },
    "24269": {
      Description: "Pie Climate Friendly",
    },
    "24290": {
      Description: "AMP Capital NZ Shares Index",
    },
    "24291": {
      Description: "AMP Capital Hedged Glb Fixed Intrst Idx",
    },
    "24292": {
      Description: "AMP Capital All Country Glb Shares Idx",
    },
    "24322": {
      Description: "Simplicity Growth Investment Fund",
    },
    "24323": {
      Description: "Simplicity Balanced Investment Fund",
    },
    "24324": {
      Description: "Simplicity Conservative Investment Fund",
    },
    "24325": {
      Description: "Clarity Diversified Growth",
    },
    "24326": {
      Description: "Clarity Diversified Income",
    },
    "24327": {
      Description: "Clarity Dividend Yield",
    },
    "24328": {
      Description: "Clarity Fixed Income",
    },
    "24329": {
      Description: "Clarity Global Shares",
    },
    "24330": {
      Description: "Clarity Trans-Tasman",
    },
    "24336": {
      Description: "Kiwi Wealth Managed Funds Conservative",
    },
    "24337": {
      Description: "Kiwi Wealth Managed Funds Balanced",
    },
    "24338": {
      Description: "Kiwi Wealth Managed Funds Growth",
    },
    "24339": {
      Description: "Kiwi Wealth Super Scheme Conservative",
    },
    "24340": {
      Description: "Kiwi Wealth Super Scheme Balanced",
    },
    "24341": {
      Description: "Kiwi Wealth Super Scheme Growth",
    },
    "24343": {
      Description: "Harbour Real Estate Investment",
    },
    "24344": {
      Description: "Antipodes Global",
    },
    "24345": {
      Description: "Antipodes Global - Long",
    },
    "24365": {
      Description: "Milford Cash",
    },
    "24378": {
      Description: "Salt Dividend Appreciation",
    },
    "24379": {
      Description: "Salt Enhanced Property",
    },
    "24380": {
      Description: "Fisher Funds Conservative",
    },
    "24381": {
      Description: "Fisher Funds Growth",
    },
    "24395": {
      Description: "Castle Point Trans-Tasman",
    },
    "24399": {
      Description: "Harbour Long Short",
    },
    "24403": {
      Description: "Mint Diversified Growth",
    },
    "24427": {
      Description: "Milford Australian Equities Wholesale",
    },
    "24433": {
      Description: "QuayStreet Altum",
    },
    "24434": {
      Description: "QuayStreet AU Equity",
    },
    "24435": {
      Description: "QuayStreet Balanced",
    },
    "24436": {
      Description: "QuayStreet Conservative",
    },
    "24437": {
      Description: "QuayStreet Fixed Interest",
    },
    "24438": {
      Description: "QuayStreet Growth",
    },
    "24439": {
      Description: "QuayStreet Income",
    },
    "24440": {
      Description: "QuayStreet International Equity",
    },
    "24441": {
      Description: "QuayStreet NZ Equity",
    },
    "24442": {
      Description: "QuayStreet Socially Responsible Inv",
    },
    "24449": {
      Description: "Aspiring",
    },
    "24474": {
      Description: "Nikko AM Global Shares Hedged",
    },
    "24476": {
      Description: "BNZ YouWealth Balanced",
    },
    "24477": {
      Description: "BNZ YouWealth Balanced Growth",
    },
    "24478": {
      Description: "BNZ YouWealth Growth",
    },
    "24479": {
      Description: "BNZ YouWealth Income",
    },
    "24480": {
      Description: "BNZ YouWealth Moderate",
    },
    "24481": {
      Description: "Harbour Enhanced Cash",
    },
    "24484": {
      Description: "ASB Investment Funds Positive Impact",
    },
    "24491": {
      Description: "AMP Capital Global Companies",
    },
    "24492": {
      Description: "Kernel NZ 20",
    },
    "24493": {
      Description: "Kernel NZ Level 9",
    },
    "24494": {
      Description: "Kernel NZ Commercial Property",
    },
    "24497": {
      Description: "Nikko AM Wholesale Global Shares Hedged",
    },
    "24535": {
      Description: "Harbour Active Growth",
    },
    "24545": {
      Description: "Pie Conservative",
    },
    "24549": {
      Description: "Clarity-Capital Group New Perspective",
    },
    "24550": {
      Description: "Clarity New Zealand Equity",
    },
    "24578": {
      Description: "AMP Capital Commodities",
    },
    "24669": {
      Description: "Nikko AM ARK Disruptive Innovation",
    },
    "24670": {
      Description: "Nikko AM Balanced",
    },
    "24671": {
      Description: "Nikko AM Conservative",
    },
    "24672": {
      Description: "Nikko AM Growth",
    },
    "24673": {
      Description: "Nikko AM Option",
    },
    "24681": {
      Description: "Airlie Australian Share",
    },
    "40003": {
      Description: "Realm High Income - Wholesale",
    },
    "40004": {
      Description: "Atlantic Pacific Australian Equity",
    },
    "40006": {
      Description: "Janus Henderson Diversified Credit",
    },
    "40007": {
      Description: "Presima Global Property Sec Concentrated",
    },
    "40071": {
      Description: "Mason Stevens Credit Fund",
    },
    "40072": {
      Description: "Schroder Global Core Fund - IC",
    },
    "40079": {
      Description: "Fidelity Global Emerging Markets",
    },
    "40080": {
      Description: "Cromwell Property Trust 12",
    },
    "40081": {
      Description: "Robeco Emerging Conservative Equity AUD",
    },
    "40082": {
      Description: "AMP Capital Equity Income Generator",
    },
    "40088": {
      Description: "Mutual Income Fund A",
    },
    "40090": {
      Description: "MIF C",
    },
    "40091": {
      Description: "Freehold AREITs & Listed Infrastructure",
    },
    "40092": {
      Description: "Talaria Global Equity Hedged",
    },
    "40093": {
      Description: "Antares Income Fund",
    },
    "40102": {
      Description: "Advance Defensive Yield Multi-Blend",
    },
    "40103": {
      Description: "Bronte Capital Amalthea",
    },
    "40105": {
      Description: "Omega Global Listed Infrastructure",
    },
    "40107": {
      Description: "Copper Rock Capital Global Small Cap",
    },
    "40159": {
      Description: "AMP Capital Australian Equity Income H",
    },
    "40160": {
      Description: "AMP Capital Australian Dynamic Markets A",
    },
    "40164": {
      Description: "Nikko AM Australian Share Concntr LT",
    },
    "40217": {
      Description: "CFS FC Multi-Index Diversified Class A",
    },
    "40218": {
      Description: "CFS FC Multi-Index Conservative Class A",
    },
    "40257": {
      Description: "JPMorgan Global Strategic Bond Fund",
    },
    "40258": {
      Description: "Aberdeen Std Global Absolute Ret Strats",
    },
    "40260": {
      Description: "AB Dynamic Global Fixed Income",
    },
    "40261": {
      Description: "CFS FC Multi-Index Balanced Class A",
    },
    "40262": {
      Description: "AMP Capital Australian Dynamic Markets W",
    },
    "40263": {
      Description: "AMP Capital Australian Dynamic Markets H",
    },
    "40264": {
      Description: "Perpetual Income Opportunities",
    },
    "40265": {
      Description: "Perpetual Growth Opportunities",
    },
    "40274": {
      Description: "NWQ Fiduciary Fund Wholesale A",
    },
    "40275": {
      Description: "IOOF Balanced Investor Trust",
    },
    "40276": {
      Description: "AMP Capital Income Generator H",
    },
    "40277": {
      Description: "State Street Multi-Asset Builder",
    },
    "40280": {
      Description: "State Street Global Equity",
    },
    "40282": {
      Description: "T. Rowe Price Dynamic Global Bond",
    },
    "40286": {
      Description: "1940's Lifestage Fund - A",
    },
    "40287": {
      Description: "1950's Lifestage Fund - A",
    },
    "40288": {
      Description: "1960's Lifestage Fund - A",
    },
    "40289": {
      Description: "1970's Lifestage Fund - A",
    },
    "40290": {
      Description: "1980's Lifestage Fund - A",
    },
    "40291": {
      Description: "1990's Lifestage Fund - A",
    },
    "40292": {
      Description: "2000's Lifestage Fund - A",
    },
    "40293": {
      Description: "Implemented Australian Share Portfolio",
    },
    "40294": {
      Description: "Implemented Fixed Income Portfolio",
    },
    "40295": {
      Description: "Implemented International Share Portf",
    },
    "40296": {
      Description: "Implemented Real Estate Portfolio",
    },
    "40299": {
      Description: "PIMCO Dynamic Bond W",
    },
    "40300": {
      Description: "Man Diversified Alternatives",
    },
    "40301": {
      Description: "PIMCO Dynamic Bond C",
    },
    "40304": {
      Description: "AMP FLI S2-Professional Conservative",
    },
    "40305": {
      Description: "AMP FLI S2-Professional Balanced",
    },
    "40306": {
      Description: "AMP FLI S2-Professional Growth",
    },
    "40307": {
      Description: "AMP FLI S2-Professional High Growth",
    },
    "40308": {
      Description: "AMP FLI S2-Professional Moderately Cons",
    },
    "40340": {
      Description: "CFS FC W Inv-Kapstream W Absolute Ret",
    },
    "40345": {
      Description: "CFS FC Inv- Kapstream Absolute Ret",
    },
    "40357": {
      Description: "CFS FC Inv- Schroder Real Return",
    },
    "40358": {
      Description: "CFS FC-Schroder W Real Return",
    },
    "40363": {
      Description: "CFS FC Inv-FirstChoice Alternatives",
    },
    "40364": {
      Description: "FirstChoice WS Alternatives",
    },
    "40365": {
      Description: "CFS FC Multi-Index High Growth Class A",
    },
    "40367": {
      Description: "AMP FLI S2-Specialist Divers FixedIncome",
    },
    "40368": {
      Description: "Evans and Partners International Fund",
    },
    "40369": {
      Description: "Evans and Partners Intl Hedged",
    },
    "40372": {
      Description: "Barwon Global Listed Private Equity Fund",
    },
    "40373": {
      Description: "Macquarie Global Multi-Sector F/I Fund",
    },
    "40374": {
      Description: "Hedged Index Global Infrastructure Secs",
    },
    "40375": {
      Description: "Hedged Index Global Real Estate Secs",
    },
    "40376": {
      Description: "True Index Global Infrastructure Secs",
    },
    "40377": {
      Description: "Macquarie True Index Glbl Rel Est Secs",
    },
    "40378": {
      Description: "Macquarie Int Infrastructure Secs Unhdgd",
    },
    "40379": {
      Description: "Perennial Value Wealth Defender Aust Shr",
    },
    "40380": {
      Description: "JPMorgan Global Bond Opportunities Fund",
    },
    "40381": {
      Description: "Firstmac High Livez Wholesale",
    },
    "40382": {
      Description: "Alexander Credit Opportunities Fund",
    },
    "40410": {
      Description: "MFS Emerging Markets Equity Trust",
    },
    "40412": {
      Description: "Paragon Australian Long Short Fund",
    },
    "40415": {
      Description: "Australian Ethical Fixed Interest",
    },
    "40416": {
      Description: "Australian Ethical Fixed Interest WS",
    },
    "40417": {
      Description: "Janus Henderson Glb Fixed Intst Ttl Ret",
    },
    "40418": {
      Description: "AMP Specialist Diversified Fixed Income",
    },
    "40420": {
      Description: "AMP Specialist Property and Infras",
    },
    "40422": {
      Description: "Legg Mason Martin Currie Divers Inc Tr",
    },
    "40437": {
      Description: "Microequities High Income Value Microcap",
    },
    "40438": {
      Description: "Dimensional Australian Core Imptn Trust",
    },
    "40439": {
      Description: "CFS FC W Inv-FirstRate W Term Dep (10yr)",
    },
    "40440": {
      Description: "CFS FC W Inv-FirstRate W Term Dep (15yr)",
    },
    "40441": {
      Description: "CFS FC W Inv-FirstRate W Term Dep (2yr)",
    },
    "40442": {
      Description: "CFS FC W Inv-FirstRate W Term Dep (3yr)",
    },
    "40443": {
      Description: "CFS FC W Inv-FirstRate W Term Dep (5yr)",
    },
    "40444": {
      Description: "CFS FC W Inv-FirstRate W Term Dep (7yr)",
    },
    "40457": {
      Description: "CFS FC Inv-FirstRate Term Dep (10yr)",
    },
    "40458": {
      Description: "CFS FC Inv-FirstRate Term Dep (15yr)",
    },
    "40459": {
      Description: "CFS FC Inv-FirstRate Term Dep (2yr)",
    },
    "40460": {
      Description: "CFS FC Inv-FirstRate Term Dep (3yr)",
    },
    "40461": {
      Description: "CFS FC Inv-FirstRate Term Dep (5yr)",
    },
    "40462": {
      Description: "CFS FC Inv-FirstRate Term Dep (7yr)",
    },
    "40475": {
      Description: "Prime Value Cash Plus Fund",
    },
    "40476": {
      Description: "CFS Multi-Asset Real Return - Class A",
    },
    "40477": {
      Description: "Argyle Water Fund",
    },
    "40484": {
      Description: "Man Series 6 OM-IP 220 Limited",
    },
    "40485": {
      Description: "Man Series 7 OM-IP 220 Limited",
    },
    "40498": {
      Description: "Man OM-IP AHL 2010 Limited",
    },
    "40502": {
      Description: "Man OM-IP Global Limited",
    },
    "40505": {
      Description: "Man Series 8 OM-IP 220 Limited",
    },
    "40507": {
      Description: "ANZ Fixed Income Fund",
    },
    "40508": {
      Description: "ANZ Enhanced Yield Fund",
    },
    "40509": {
      Description: "ANZ Private Global Equities Trust",
    },
    "40510": {
      Description: "Macquarie True Index Cash Fund",
    },
    "40513": {
      Description: "Terra Capital Natural Resource Fund",
    },
    "40514": {
      Description: "BT Capital Protection - Cash Class 2024",
    },
    "40515": {
      Description: "BT Capital Protection - Bond Class 2024",
    },
    "40518": {
      Description: "SGH LaSalle Concentrated Global Property",
    },
    "40519": {
      Description: "Morningstar International Bonds Hdgd Z",
    },
    "40521": {
      Description: "Loomis Sayles Credit Opportunities",
    },
    "40522": {
      Description: "Loomis Sayles Senior Floating Rate Loan",
    },
    "40523": {
      Description: "Redpoint Global Infrastructure Fund",
    },
    "40525": {
      Description: "Charter Hall Direct Industrial No.3 W",
    },
    "40526": {
      Description: "Charter Hall Direct Office Wholesale A",
    },
    "40527": {
      Description: "BlackRock Fixed Income Global Opps Cl D",
    },
    "40529": {
      Description: "Capital Group World Div Growers (AU)",
    },
    "40531": {
      Description: "Charter Hall Direct BW Trust",
    },
    "40532": {
      Description: "CFS Equity Income Fund Class A",
    },
    "40533": {
      Description: "Stewart Investors Worldwide Sus-Class A",
    },
    "40535": {
      Description: "WaveStone Capital Absolute Return",
    },
    "40536": {
      Description: "Smarter Money Higher Income Assisted Inv",
    },
    "40538": {
      Description: "Odey International Fund",
    },
    "40540": {
      Description: "Platinum Global Fund",
    },
    "40542": {
      Description: "Australian Equities Extension Fund",
    },
    "40543": {
      Description: "Stewart Investors W Wrldwide Sustainabty",
    },
    "40544": {
      Description: "Perpetual Global Share Class A",
    },
    "40546": {
      Description: "AMS Balanced Fund",
    },
    "40547": {
      Description: "AMS Moderately Conservative Fund",
    },
    "40548": {
      Description: "Vanguard Aust Corporate Fixed Interest",
    },
    "40549": {
      Description: "AXA IM Sustainable Equity",
    },
    "40550": {
      Description: "Aberdeen WS Plus Actively Hdg Intl Eq",
    },
    "40551": {
      Description: "AMP Capital WS Plus Corporate Bond",
    },
    "40552": {
      Description: "APN WS Plus AREIT",
    },
    "40553": {
      Description: "Bennelong WS Plus ex-20 Aus Equities",
    },
    "40554": {
      Description: "Pendal Wholesale Plus Australian Share",
    },
    "40555": {
      Description: "Fidelity WS Plus Australian Equities",
    },
    "40556": {
      Description: "Ironbark Karara WS Plus Aust Small Co",
    },
    "40557": {
      Description: "Perpetual WS Plus Australian",
    },
    "40558": {
      Description: "Schroder WS Plus Australian Equity",
    },
    "40559": {
      Description: "UBS WS Plus Australian Bond",
    },
    "40560": {
      Description: "Pendal Wholesale Plus Core Global Share",
    },
    "40561": {
      Description: "Pendal Wholesale Plus Fixed Interest",
    },
    "40562": {
      Description: "Walter Scott WS Plus Global Equity",
    },
    "40563": {
      Description: "Pendal Wholesale Plus Global EmMkts Opps",
    },
    "40564": {
      Description: "Pendal Wholesale Plus Global Prpty Secs",
    },
    "40565": {
      Description: "Pendal Wholesale Plus Property Secs",
    },
    "40566": {
      Description: "Fidelity WS Plus Global Equities",
    },
    "40567": {
      Description: "Franklin Templeton WS Plus MultiSec Bond",
    },
    "40568": {
      Description: "Lazard WS Plus Emerging Markets Equity",
    },
    "40569": {
      Description: "Macquarie WS Plus Income Opportunities",
    },
    "40570": {
      Description: "Nikko AM WS Plus Australian Share Fund",
    },
    "40571": {
      Description: "Perpetual WS Plus Diversified Income",
    },
    "40572": {
      Description: "RARE Infrastructure WS Plus Value Unhdgd",
    },
    "40573": {
      Description: "RARE Infrastructure WS Plus Value Hedged",
    },
    "40575": {
      Description: "Schroder WS Plus Fixed income",
    },
    "40580": {
      Description: "Kapstream WS Plus Absolute Return Income",
    },
    "40581": {
      Description: "T. Rowe Price WS Plus Global Equity",
    },
    "40602": {
      Description: "BMO Pyrford Global Absolute Return",
    },
    "40603": {
      Description: "Clime International Fund",
    },
    "40604": {
      Description: "Aberdeen Std Absolute Return Glbl Bd Str",
    },
    "40605": {
      Description: "Bendigo Diversified Fixed Interest Fund",
    },
    "40606": {
      Description: "BNY Mellon Standish Global Bond Fund",
    },
    "40657": {
      Description: "DS Capital Growth Fund",
    },
    "40658": {
      Description: "AMP Capital Corporate Bond R",
    },
    "40659": {
      Description: "AMP Capital Income Generator",
    },
    "40660": {
      Description: "AMP Capital Australian Equity Income",
    },
    "40661": {
      Description: "AMP Capital Global Property Securities R",
    },
    "40662": {
      Description: "AMP Capital Global Infr Sec (Unh)",
    },
    "40663": {
      Description: "AMP Capital Multi-Asset",
    },
    "40664": {
      Description: "Polaris Global Equity Fund",
    },
    "40665": {
      Description: "Cromwell Phoenix Opportunities Fund",
    },
    "40666": {
      Description: "Franklin Australian Absolute Return Bd W",
    },
    "40667": {
      Description: "Franklin Australian Absolute Return Bd I",
    },
    "40670": {
      Description: "Talaria WS Plus Global Equity",
    },
    "40671": {
      Description: "Man AHL WS Plus Alpha (AUD)",
    },
    "40674": {
      Description: "PineBridge Global Dynamic Asset Alloc I",
    },
    "40675": {
      Description: "North Professional Conservative",
    },
    "40676": {
      Description: "UBS Microcap Fund",
    },
    "40677": {
      Description: "Charter Hall Direct Industrial No.3 Ord",
    },
    "40678": {
      Description: "AB Managed Volatility Equities",
    },
    "40679": {
      Description: "Pan-Tribal Global Equity Fund",
    },
    "40680": {
      Description: "U Ethical Enhanced Cash Trust",
    },
    "40709": {
      Description: "Altius Sustainable Bond Fund",
    },
    "40721": {
      Description: "Freehold Absolute Return Fund",
    },
    "40722": {
      Description: "AMP Capital Premium Growth",
    },
    "40725": {
      Description: "Magellan WS Plus Global",
    },
    "40726": {
      Description: "GMO SGM Major Markets Trust",
    },
    "40741": {
      Description: "Pengana High Conviction Equities",
    },
    "40742": {
      Description: "Quay Global Real Estate Fund",
    },
    "40748": {
      Description: "NewActon East Property Fund",
    },
    "40749": {
      Description: "Invesco WS Global Targeted Returns A",
    },
    "40750": {
      Description: "Regal Australian Small Companies Fund",
    },
    "40756": {
      Description: "Greencape Broadcap Class P",
    },
    "40757": {
      Description: "Ophir Opportunities Class E",
    },
    "40758": {
      Description: "Morningstar International Shares Hdgd Z",
    },
    "40759": {
      Description: "Morningstar International Shares Unhdg Z",
    },
    "40760": {
      Description: "ANZ Private Global Equities(Actvly Hdg)",
    },
    "40761": {
      Description: "Spire Copper Rock Glbl Smaller Companies",
    },
    "40763": {
      Description: "Janus Henderson Glb Equity Income Fund",
    },
    "40764": {
      Description: "SGH Australia Plus",
    },
    "40795": {
      Description: "Freehold Australian Property",
    },
    "40799": {
      Description: "PIMCO WS Plus Global Bond",
    },
    "40800": {
      Description: "PIMCO WS Plus Diversified Fixed Interest",
    },
    "40802": {
      Description: "Pengana Global Small Companies",
    },
    "40808": {
      Description: "CFS FirstChoice WS Diversified",
    },
    "40815": {
      Description: "CFS FC W Inv-FirstChoice W Multi-Idx Mod",
    },
    "40821": {
      Description: "CFS FC W Inv-Franklin Temp W Msect Bond",
    },
    "40827": {
      Description: "CFS FC Inv-Bennelong ex-20 Aus Eq",
    },
    "40828": {
      Description: "CFS FC W Inv-Bennelong ex-20 W Aus Eq",
    },
    "40838": {
      Description: "CFS FC Inv-OC Premium Small Comp",
    },
    "40839": {
      Description: "CFS FC W Inv-OC W Premium Small Comp",
    },
    "40845": {
      Description: "CFS FC-Milliman W Mgd Risk Aus Shr",
    },
    "40846": {
      Description: "Milliman Mgd Risk Australian Shr-Class A",
    },
    "40852": {
      Description: "CFS FC-Milliman W Mgd Risk Glb Shr",
    },
    "40853": {
      Description: "Milliman Managed Risk Global Shr-Class A",
    },
    "40859": {
      Description: "CFS FC-Milliman W Mg Ris M-I Hi Gro",
    },
    "40861": {
      Description: "CFS FC Multi-Index Moderate-Class A",
    },
    "40862": {
      Description: "Milliman Mgd Risk M-Index High Gro- A",
    },
    "40864": {
      Description: "JPMorgan Glb Rsrch Enhncd Idx Eq Fd",
    },
    "40865": {
      Description: "JPMorgan Global Rsrch Enhncd Idx Eq Hdg",
    },
    "40866": {
      Description: "Perpetual WFIA Dynamic Fxd Inc",
    },
    "40867": {
      Description: "Perpetual WFIA-Perpetual Dvrsfd Real Rt",
    },
    "40880": {
      Description: "AMP FLI S2-Bentham Global Income",
    },
    "40886": {
      Description: "AMP FLI S2-Grant Samuel Epoch GESY UH",
    },
    "40897": {
      Description: "AMP FLI S2-AMP Capital Glbl Infra (Hgd)",
    },
    "40898": {
      Description: "AMP FLI S2-Schroder Fixed Income",
    },
    "40899": {
      Description: "AMP FLI S2-Magellan Global",
    },
    "40900": {
      Description: "AMP FLI S2-Rare Infrastructure Value",
    },
    "40901": {
      Description: "AMP FLI S2-AMP Capital Glbl Property Sec",
    },
    "40902": {
      Description: "AMP FLI S2-AMP Capital Equity Income Gen",
    },
    "40903": {
      Description: "AMP FLI S2-Ausbil Aus Active Equity",
    },
    "40907": {
      Description: "AMP FLI S2-AB Dynamic Global Fixed Inc",
    },
    "40915": {
      Description: "AMP FLI S2-UBS Clarion Glbl Property Sec",
    },
    "40918": {
      Description: "AMP FLI S2-AMP Capital Corporate Bond",
    },
    "40922": {
      Description: "Heathley Direct Medical Fund No. 1",
    },
    "40923": {
      Description: "Schroder Real Return CPI Plus 3.5% - WC",
    },
    "40924": {
      Description: "ANZ Private International Fixed Interest",
    },
    "40926": {
      Description: "YBR Protected Equities Fund",
    },
    "40927": {
      Description: "iShares Emerging Markets IMI Equity Idx",
    },
    "40930": {
      Description: "Colchester Global Government Bond A",
    },
    "40931": {
      Description: "EQT Diversified Fixed Income Instl",
    },
    "40933": {
      Description: "Zurich Investments Emerging Markets Eq",
    },
    "40934": {
      Description: "Melling Capital Dynamic Volatility",
    },
    "40935": {
      Description: "Montgomery Global Fund",
    },
    "40936": {
      Description: "THB US Micro Cap",
    },
    "40937": {
      Description: "Watermark Market Neutral Trust A",
    },
    "40938": {
      Description: "BT Capital Protection - Cash Class 2025",
    },
    "40939": {
      Description: "BT Capital Protection - Bond Class 2025",
    },
    "40940": {
      Description: "BMO LGM Global Emerging Markets",
    },
    "40941": {
      Description: "PineBridge Global Dynamic Asset Alloc R",
    },
    "40947": {
      Description: "Ravenhall Office Trust",
    },
    "40948": {
      Description: "DNR Capital Aus Eq High Conviction",
    },
    "40949": {
      Description: "MBA Global Listed Infrastructure-Hedge",
    },
    "40953": {
      Description: "Monash Absolute Investment Class A",
    },
    "40954": {
      Description: "Capital Group Global Equity (AU)",
    },
    "40956": {
      Description: "AB Global Equities",
    },
    "40957": {
      Description: "Apostle Dundas Global Equity Class C",
    },
    "40962": {
      Description: "Yarra A$ Cash Reserves I Class",
    },
    "40964": {
      Description: "BlackRock Glbl Multi Asset Inc AUS Cl D",
    },
    "40966": {
      Description: "Australian Ethical Income WS",
    },
    "40967": {
      Description: "Australian Ethical Emerging Companies WS",
    },
    "40968": {
      Description: "Australian Ethical Intl Shr WS",
    },
    "40969": {
      Description: "Australian Ethical Emerging Companies",
    },
    "40970": {
      Description: "Vontobel Global Equity Fund",
    },
    "40981": {
      Description: "MFS Low Volatility Global Equity Trust",
    },
    "40982": {
      Description: "MFS Blended Research Global Equity Tr",
    },
    "40983": {
      Description: "Heathley Aged Care Property Fund No. 1",
    },
    "40984": {
      Description: "Capital Group New Perspective (AU)",
    },
    "40985": {
      Description: "Capital Group New Perspective Hdg (AU)",
    },
    "40987": {
      Description: "VF High Conviction Fund",
    },
    "40988": {
      Description: "Bennelong Market Neutral Fund",
    },
    "40991": {
      Description: "AMP FLI S2-Macquarie Income Opps",
    },
    "41008": {
      Description: "AMP FLI S2-Aberdeen Emerg Opps",
    },
    "41009": {
      Description: "AMP FLI S2-PIMCO Div Fixed Interest",
    },
    "41010": {
      Description: "UBS Australian Small Companies SIV Fund",
    },
    "41011": {
      Description: "NWQ Fiduciary Fund Direct",
    },
    "41012": {
      Description: "Challenger GIF 4.00 cents pa 30 Sep 2022",
    },
    "41030": {
      Description: "Cyan C3G",
    },
    "41032": {
      Description: "Legg Mason Martin Currie Eth Val WithInc",
    },
    "41033": {
      Description: "Microequities Global Value Microcap",
    },
    "41034": {
      Description: "Montaka Global Access",
    },
    "41035": {
      Description: "AB Advantage Dynamic Global Fixed Income",
    },
    "41036": {
      Description: "Alphinity Advantage Australian Share",
    },
    "41037": {
      Description: "Bentham Advantage Global Income",
    },
    "41038": {
      Description: "MyNorth Dynamic Balanced",
    },
    "41039": {
      Description: "Grant Samuel Epch Advtg GlbEq ShldYldUnH",
    },
    "41040": {
      Description: "Ironbark Karara Advantage AUS Share",
    },
    "41041": {
      Description: "Magellan Advantage Global",
    },
    "41042": {
      Description: "Perennial Value Advantage Inc Wlth Dfndr",
    },
    "41043": {
      Description: "PIMCO Advantage Diversified Fixed Intst",
    },
    "41044": {
      Description: "RARE Advantage Infrastructure Value Hdg",
    },
    "41045": {
      Description: "DNR Capital Advantage AUS Eqs Hi Convct",
    },
    "41046": {
      Description: "MyNorth Index Defensive",
    },
    "41047": {
      Description: "MyNorth Index Moderately Defensive",
    },
    "41048": {
      Description: "MyNorth Index Balanced",
    },
    "41049": {
      Description: "MyNorth Index Growth",
    },
    "41050": {
      Description: "MyNorth Index High Growth",
    },
    "41051": {
      Description: "PIMCO Capital Securities Wholesale",
    },
    "41053": {
      Description: "Legg Mason Martin Currie Glbl LT Uncon A",
    },
    "41056": {
      Description: "Aviva Investors Multi-Strategy Trgt Ret",
    },
    "41057": {
      Description: "Tower Central Trust",
    },
    "41059": {
      Description: "Flinders Emerging Companies A",
    },
    "41060": {
      Description: "Flinders Emerging Companies B",
    },
    "41061": {
      Description: "Fiducian Diversified Social Aspirations",
    },
    "41062": {
      Description: "CFM Institutional Systematic Diversified",
    },
    "41063": {
      Description: "Dimensional Glb Sstnblty Trust Hdg",
    },
    "41064": {
      Description: "Dimensional Glb Sstnblty Trust Unhdg",
    },
    "41065": {
      Description: "Plato Global Shares Income F",
    },
    "41066": {
      Description: "Plato Global Shares Income A",
    },
    "41067": {
      Description: "Terra Capital Ethical Emerging Companies",
    },
    "41068": {
      Description: "Zurich Investments Concentrated Glbl Gr",
    },
    "41069": {
      Description: "Orbis Global Equity Fund Retail Class",
    },
    "41070": {
      Description: "Katana Australian Equity Fund",
    },
    "41071": {
      Description: "Affluence Investment Fund",
    },
    "41072": {
      Description: "Antipodes Global Fund - Long P",
    },
    "41074": {
      Description: "Perpetual Wholesale Global Share Hdg",
    },
    "41075": {
      Description: "BetaShares CPS - Global Growth Fund",
    },
    "41078": {
      Description: "Dimensional Glbl Sustainability NZD Hdg",
    },
    "41079": {
      Description: "Lazard Global Equity Franchise",
    },
    "41081": {
      Description: "Colchester Global Government Bond N",
    },
    "41082": {
      Description: "Australian Unity A-REIT Fund",
    },
    "41083": {
      Description: "CC Marsico Global Fund - Instl Class",
    },
    "41084": {
      Description: "CC Marsico Global Fund - Retail Class",
    },
    "41085": {
      Description: "Frame Futures Fund",
    },
    "41086": {
      Description: "JPMorgan Global Macro Opps Class A Units",
    },
    "41087": {
      Description: "CFS FC-Perpetual W Ethic SRI Shr",
    },
    "41088": {
      Description: "CFS FC-Magellan W Infrastructure",
    },
    "41089": {
      Description: "CFS FC-Magellan W Global Shre-Hgd",
    },
    "41090": {
      Description: "CFS FC Inv-Magellan Global Shre-Hgd",
    },
    "41095": {
      Description: "CFS FC Inv-Perpetual Ethic SRI Shr",
    },
    "41100": {
      Description: "CFS FC Inv-Magellan Infrastructure",
    },
    "41105": {
      Description: "CFS FC Inv-Bennelong Kardin Abs Ret",
    },
    "41108": {
      Description: "CFS FC-Bennelong Kardin W Abs Ret",
    },
    "41111": {
      Description: "MPG Seaford Meadows Property Trust",
    },
    "41112": {
      Description: "Quay Global Real Estate-Daily Series",
    },
    "41113": {
      Description: "T. Rowe Price Global Equity (Hedged)",
    },
    "41114": {
      Description: "Spire W Alternative Income No.1 (AUD)",
    },
    "41320": {
      Description: "CFS Asian Growth - A",
    },
    "41323": {
      Description: "Bennelong Twenty20 Australian Equities",
    },
    "41324": {
      Description: "AtlasTrend Big Data Big",
    },
    "41325": {
      Description: "AtlasTrend Online Shopping Spree",
    },
    "41329": {
      Description: "BlackRock Concentrated Industrial",
    },
    "41330": {
      Description: "Tribeca Global Natural Resources",
    },
    "41331": {
      Description: "Spheria Australian Microcap",
    },
    "41332": {
      Description: "Touchstone Index Unaware",
    },
    "41334": {
      Description: "PIMCO Income Wholesale",
    },
    "41350": {
      Description: "Intermede Global Equities Fund",
    },
    "41370": {
      Description: "MyNorth Retirement",
    },
    "41371": {
      Description: "AMP Capital Future Cash Flow 12 Series 1",
    },
    "41372": {
      Description: "AMP Capital Future Cash Flow 9 Series 1",
    },
    "41373": {
      Description: "AMP Capital Future Cash Flow 6 Series 1",
    },
    "41377": {
      Description: "Barrow Hanley Global Equity Trust",
    },
    "41379": {
      Description: "Schroder Global Sustainable Eq(Hgd) - WC",
    },
    "41380": {
      Description: "Pengana International",
    },
    "41381": {
      Description: "Blue Sky Private Equity EC 2010 Retail",
    },
    "41382": {
      Description: "Blue Sky Private Equity EC 2010 Instl",
    },
    "41384": {
      Description: "Blue Sky Hotel",
    },
    "41385": {
      Description: "Blue Sky Private Equity Origo Education",
    },
    "41388": {
      Description: "4D Global Infrastructure",
    },
    "41389": {
      Description: "Spire USA ROC Srs Hsg&Medical Prpts AUD",
    },
    "41390": {
      Description: "Pendal Wholesale Plus Active Cnsrv",
    },
    "41391": {
      Description: "Pendal Wholesale Plus Active Growth",
    },
    "41392": {
      Description: "Pendal Wholesale Plus Active Balanced",
    },
    "41393": {
      Description: "Antipodes Wholesale Plus Global",
    },
    "41394": {
      Description: "Perpetual Wholesale Plus Global Share",
    },
    "41395": {
      Description: "Schroder WS Plus Real Return CPI Plus 5%",
    },
    "41396": {
      Description: "Pendal Wholesale Plus Active Moderate",
    },
    "41397": {
      Description: "Pendal Wholesale Plus Active High Growth",
    },
    "41398": {
      Description: "BT Capital Protection Cash 2026",
    },
    "41399": {
      Description: "BT Capital Protection Bond 2026",
    },
    "41400": {
      Description: "CFS Wholesale Institutional Cash",
    },
    "41401": {
      Description: "Realindex Global Shr Fd(Scr)-Class A",
    },
    "41403": {
      Description: "AMP Dynamic Balanced",
    },
    "41406": {
      Description: "CC JCB Active Bond",
    },
    "41408": {
      Description: "BT Index Defensive",
    },
    "41409": {
      Description: "BT Index Moderate",
    },
    "41410": {
      Description: "BT Index Balanced",
    },
    "41411": {
      Description: "BT Index Growth",
    },
    "41412": {
      Description: "BT Index High Growth",
    },
    "41413": {
      Description: "Partners Group Global Multi-Asset",
    },
    "41414": {
      Description: "MacKay Shields Unconstrained Bond",
    },
    "41415": {
      Description: "Orbis Emerging Markets Equity",
    },
    "41421": {
      Description: "NWQ Fiduciary Fund Indirect",
    },
    "41422": {
      Description: "NWQ Fiduciary Fund Wholesale B",
    },
    "41423": {
      Description: "Blue Sky Private Equity Vinomofo",
    },
    "41424": {
      Description: "Blue Sky Private Equity Shoes of Prey",
    },
    "41425": {
      Description: "Blue Sky Digital Outdoor Advertising",
    },
    "41426": {
      Description: "Blue Sky Private Equity Conventus",
    },
    "41427": {
      Description: "Blue Sky Private Equity aCommerce",
    },
    "41428": {
      Description: "Blue Sky Private Equity Aquila",
    },
    "41429": {
      Description: "Blue Sky Agriculture Fund III",
    },
    "41430": {
      Description: "Cove Property Group 2 Rector StreetTrust",
    },
    "41431": {
      Description: "Watermark Market Neutral Trust C",
    },
    "41432": {
      Description: "UBS Clarion Global Infrastructure SecsFd",
    },
    "41433": {
      Description: "Pendal Active Moderate",
    },
    "41434": {
      Description: "Pendal Active High Growth",
    },
    "41435": {
      Description: "Invesco Australian Equity Long Short I",
    },
    "41436": {
      Description: "Invesco Australian Equity Long Short A",
    },
    "41437": {
      Description: "DirectMoney Personal Loan",
    },
    "41439": {
      Description: "Munro Global Growth",
    },
    "41441": {
      Description: "Insight Global Absolute Return Bond",
    },
    "41442": {
      Description: "Insight Diversified Inflation Plus",
    },
    "41444": {
      Description: "Blue Sky Beach Burrito Company",
    },
    "41447": {
      Description: "Blue Sky Mining Services",
    },
    "41448": {
      Description: "Blue Sky Residential Developments 3",
    },
    "41449": {
      Description: "Blue Sky Residential Developments 2",
    },
    "41451": {
      Description: "Blue Sky Student Accomodation III",
    },
    "41452": {
      Description: "Blue Sky Student Accomodation IV",
    },
    "41453": {
      Description: "Blue Sky Student Accomodation II",
    },
    "41457": {
      Description: "Blue Sky Wild Breads",
    },
    "41458": {
      Description: "Bell Global Equities Platform Class",
    },
    "41462": {
      Description: "IOOF MultiSeries 30",
    },
    "41463": {
      Description: "IOOF MultiSeries 50",
    },
    "41464": {
      Description: "IOOF MultiSeries 90",
    },
    "41466": {
      Description: "Bateau Global Opportunities",
    },
    "41467": {
      Description: "Blue Sky Agriculture",
    },
    "41468": {
      Description: "Blue Sky Agriculture II",
    },
    "41469": {
      Description: "Blue Sky Darra Industrial Income",
    },
    "41470": {
      Description: "Blue Sky Duke Street Kangaroo Point",
    },
    "41471": {
      Description: "Blue Sky Flora Street Greenslopes Trust",
    },
    "41473": {
      Description: "Blue Sky Logan Road Greenslopes Trust",
    },
    "41475": {
      Description: "Blue Sky Management Rights Income 2",
    },
    "41476": {
      Description: "Blue Sky Management Rights Income",
    },
    "41479": {
      Description: "Blue Sky Student Accomodation 6",
    },
    "41480": {
      Description: "Blue Sky Student Accomodation No.1",
    },
    "41481": {
      Description: "Blue Sky VC2012 LP",
    },
    "41482": {
      Description: "Blue Sky VC2014 LP",
    },
    "41483": {
      Description: "Blue Sky Wellington Road East Brisbane 2",
    },
    "41486": {
      Description: "Blue Sky Residential Developments",
    },
    "41487": {
      Description: "Blue Sky Student Accomodation 5",
    },
    "41488": {
      Description: "Blue Sky Wellington Road East Brisbane 1",
    },
    "41490": {
      Description: "Realm High Income Fund Adviser Class",
    },
    "41491": {
      Description: "Pendal Concentrated Global Share",
    },
    "41495": {
      Description: "Blue Sky Residential Asset Income Fund",
    },
    "41499": {
      Description: "Blue Sky Private Equity EC 2010 (Instl)",
    },
    "41509": {
      Description: "Invesco WS Global Targeted Returns I",
    },
    "41510": {
      Description: "Pendal Stable Cash Plus",
    },
    "41511": {
      Description: "Pendal High Alpha Fixed Income",
    },
    "41512": {
      Description: "India Avenue Equity",
    },
    "41513": {
      Description: "Bendigo Socially Responsible Growth",
    },
    "41515": {
      Description: "Blue Sky Retirement Living Corinda",
    },
    "41516": {
      Description: "Blue Sky VC2017 ESVCLP LP",
    },
    "41518": {
      Description: "Cove Property Group 441 Ninth Avenue",
    },
    "41520": {
      Description: "Charter Hall Direct Industrial No.4",
    },
    "41521": {
      Description: "CFS FC-AZ Sestante W Conservative",
    },
    "41522": {
      Description: "CFS FC-AZ Sestante W Diversified",
    },
    "41523": {
      Description: "CFS FC-AZ Sestante W Growth",
    },
    "41530": {
      Description: "Harvest Lane Asset Management Abs Ret",
    },
    "41531": {
      Description: "Charter Hall Direct Automotive No.2",
    },
    "41533": {
      Description: "Man AHL Alpha (AUD) B",
    },
    "41534": {
      Description: "Colchester Global Government Bond I",
    },
    "41535": {
      Description: "BlackRock Concentrated Total Return E2",
    },
    "41536": {
      Description: "Fixed Income Strategy 2 (FIS2)",
    },
    "41537": {
      Description: "Hyperion Global Growth Companies A",
    },
    "41538": {
      Description: "Legg Mason Martin Currie Equity Income M",
    },
    "41541": {
      Description: "Dimensional Global Real Estate NZD Hdg",
    },
    "41542": {
      Description: "Dimensional 2-Yr Diversified FI NZD",
    },
    "41543": {
      Description: "Collins St Value Fund",
    },
    "41544": {
      Description: "Macquarie WS Plus Int Infras Sec Hdg",
    },
    "41549": {
      Description: "Blue Sky Private Equity aCommerce 2",
    },
    "41550": {
      Description: "Vanguard Intl Shares Sel Exclusions Idx",
    },
    "41551": {
      Description: "Legg Mason Western Asset Global Bond A",
    },
    "41552": {
      Description: "Legg Mason Western Asset Macro Opps Bd A",
    },
    "41553": {
      Description: "Perpetual Active Fixed Interest Fund",
    },
    "41554": {
      Description: "Auscap Long Short Aus Equs-Platform",
    },
    "41555": {
      Description: "Pengana International D",
    },
    "41556": {
      Description: "Atlantic Absolute Return",
    },
    "41557": {
      Description: "Regal Emerging Companies",
    },
    "41558": {
      Description: "Mercer Socially Resp Australian",
    },
    "41561": {
      Description: "ARCO Absolute Trust",
    },
    "41562": {
      Description: "Capital Group New World (AU)",
    },
    "41563": {
      Description: "Capital Group New World Hedged (AU)",
    },
    "41564": {
      Description: "L1 Capital Long Short - Retail",
    },
    "41565": {
      Description: "Spire USA ROC III (AUD)",
    },
    "41566": {
      Description: "Metrics Credit Diversified Aust Sr Ln",
    },
    "41567": {
      Description: "Blue Sky Private Equity QFS",
    },
    "41568": {
      Description: "Perennial Value Microcap Opportunities",
    },
    "41570": {
      Description: "Acacia Ridge Industrial",
    },
    "41571": {
      Description: "Smarter Money Higher Income Direct Inv",
    },
    "41572": {
      Description: "Dalton Street Capital Absolute Return",
    },
    "41574": {
      Description: "Talaria Global Equity - Foundation",
    },
    "41575": {
      Description: "L1 Capital Long Short - Wholesale",
    },
    "41589": {
      Description: "Vanguard Intl Shs Sel Exclusions IdxNZDH",
    },
    "41590": {
      Description: "Russell Inv Multi-Asset Growth Strat A",
    },
    "41591": {
      Description: "Vanguard Global Minimum Volatility",
    },
    "41593": {
      Description: "Vanguard Global Value Equity",
    },
    "41594": {
      Description: "Vanguard Managed Payout",
    },
    "41597": {
      Description: "Smarter Money Long-Short Credit",
    },
    "41598": {
      Description: "CFS Australian MidCap Fund - Class A",
    },
    "41599": {
      Description: "CFS Glb Emerg Markets Focus Fund-Class A",
    },
    "41600": {
      Description: "UBS Global High Conviction Fund",
    },
    "41675": {
      Description: "Blue Sky SMG Fund",
    },
    "41676": {
      Description: "Artesian Corporate Bond Fund A",
    },
    "41677": {
      Description: "Pengana International Managed Risk",
    },
    "41678": {
      Description: "CFS High Quality US High Yld Fd-Class A",
    },
    "41679": {
      Description: "CFS US Select High Yield Fund-Class A",
    },
    "41680": {
      Description: "CFS US Short Duration Hi Yld Fd-Class A",
    },
    "41682": {
      Description: "Lakehouse Small Companies Fund",
    },
    "41683": {
      Description: "Fidelity FIRST Global Fund",
    },
    "41686": {
      Description: "Reitway Global Property Portfolio",
    },
    "41697": {
      Description: "Charter Hall Direct PFA Fund",
    },
    "41698": {
      Description: "Arminius Capital GMMA Fund - Direct",
    },
    "41699": {
      Description: "Arminius Capital GMMA Fund - Platform",
    },
    "41700": {
      Description: "Magellan Wholesale Plus Infrastructure",
    },
    "41701": {
      Description: "Eley Griffiths Group Emerging Companies",
    },
    "41702": {
      Description: "PIMCO ESG Global Bond Fund - Wholesale",
    },
    "41705": {
      Description: "CFML Antipodes Global Fund",
    },
    "41706": {
      Description: "Legg Mason Brandywine Glb Inc Optr",
    },
    "41707": {
      Description: "Acadian W Aus Mgd Vol Eqty-Class A",
    },
    "41712": {
      Description: "CFS FC Inv-AZ Sestante Conservative",
    },
    "41713": {
      Description: "CFS FC Inv-AZ Sestante Diversified",
    },
    "41735": {
      Description: "Alphinity Global Equity",
    },
    "41737": {
      Description: "MLC WS Index Plus Balanced Portfolio",
    },
    "41738": {
      Description: "MLC WS Index Plus Conservative Gr Port",
    },
    "41739": {
      Description: "MLC WS Index Plus Growth Portfolio",
    },
    "41740": {
      Description: "PIC WS Index Plus Balanced Portfolio",
    },
    "41741": {
      Description: "PIC WS Index Plus Conservative Gr Port",
    },
    "41742": {
      Description: "PIC WS Index Plus Growth Portfolio",
    },
    "41743": {
      Description: "Ellerston Australian MicroCap Fund",
    },
    "41744": {
      Description: "Cor Capital Fund",
    },
    "41745": {
      Description: "Reitway Global Property Portfolio - Inst",
    },
    "41746": {
      Description: "P/E Global FX Alpha Fund",
    },
    "41747": {
      Description: "Chester High Conviction",
    },
    "41748": {
      Description: "Infrastructure Partners Invst Fd Core",
    },
    "41749": {
      Description: "Nanuk New World",
    },
    "41750": {
      Description: "Affluence LIC Fund",
    },
    "41751": {
      Description: "Blue Sky Lexer Fund",
    },
    "41752": {
      Description: "SPW Global High Quality - Institutional",
    },
    "41753": {
      Description: "SPW Global High Quality - Retail",
    },
    "41754": {
      Description: "Lennox Australian Small Companies",
    },
    "41755": {
      Description: "Perennial Value Active Plus Shares Trust",
    },
    "41789": {
      Description: "Blue Sky Retirement Living Maroochydore",
    },
    "41790": {
      Description: "Student Quarters Property Trust",
    },
    "41791": {
      Description: "Student Quarters Yield Trust",
    },
    "41792": {
      Description: "Blue Sky Private Eq Better Medical Fd",
    },
    "41793": {
      Description: "Blue Sky Private Equity Sunfresh Fund",
    },
    "41794": {
      Description: "Blue Sky Private Equity Thr1ve Gr Fd",
    },
    "41795": {
      Description: "Blue Sky Private Equity Wild Breads RCPS",
    },
    "41796": {
      Description: "Blue Sky Retirement Living Lutwyche Fund",
    },
    "41797": {
      Description: "Blue Sky Student Accommodation Fund 9",
    },
    "41798": {
      Description: "Blue Sky Premium Beef Development Fund",
    },
    "41799": {
      Description: "Hamilton Road McDowall Trust",
    },
    "41800": {
      Description: "Blue Sky Private Equity Tourism Fund",
    },
    "41801": {
      Description: "Ardea Real Outcome Plus",
    },
    "41803": {
      Description: "Morningstar Multi Asset Rl Ret Fd - Cl Z",
    },
    "41804": {
      Description: "ChinaAMC China Opportunities Fund",
    },
    "41805": {
      Description: "Ardea Real Outcome Fund",
    },
    "41806": {
      Description: "Atrium Alternatives Fund",
    },
    "41807": {
      Description: "Atrium Enhanced Fixed Income Fund",
    },
    "41808": {
      Description: "Atrium Global Equities Mandate No. 1",
    },
    "41809": {
      Description: "Legg Mason Martin Currie Ethical Inc Fd",
    },
    "41810": {
      Description: "IPM Global Macro Fund",
    },
    "41812": {
      Description: "Spire USA ROC Srs Housing&Medical Fd II",
    },
    "41817": {
      Description: "Plato Global Shares Income P",
    },
    "41818": {
      Description: "Cooper Investors Global Eqs Fd (Hdg)",
    },
    "41819": {
      Description: "Cooper Investors Global Eqs Fd (Unhdg)",
    },
    "41820": {
      Description: "Platinum Asia P",
    },
    "41821": {
      Description: "Platinum European Fund P",
    },
    "41822": {
      Description: "Platinum International Brands Fund P",
    },
    "41823": {
      Description: "Platinum International Fund P",
    },
    "41824": {
      Description: "Platinum International HealthCare P",
    },
    "41825": {
      Description: "Platinum International Technology P",
    },
    "41826": {
      Description: "Platinum Japan P",
    },
    "41827": {
      Description: "Platinum Unhedged Fund P",
    },
    "41828": {
      Description: "India Avenue Equity - Retail Class",
    },
    "41829": {
      Description: "Solaris Australian Equity Long Short Fd",
    },
    "41830": {
      Description: "InvestSmart Australian Small Coms Fd",
    },
    "41832": {
      Description: "Vanguard Global Agg Bd Indx Fd (Hdg)",
    },
    "41833": {
      Description: "Wheelhouse Global Equity Income",
    },
    "41834": {
      Description: "CFM IS Trends Trust Class A Units",
    },
    "41835": {
      Description: "CFM IS Trends Trust Class B Units",
    },
    "41836": {
      Description: "Ironbark North Rock Fund",
    },
    "41837": {
      Description: "Blue Sky Venture Capital Serene Fund",
    },
    "41838": {
      Description: "BNP Paribas Environmental Equity Trust",
    },
    "41840": {
      Description: "Trilogy Enhanced Cash",
    },
    "41856": {
      Description: "Blue Sky Student Accommodation 7",
    },
    "41857": {
      Description: "AMP Capital Core Retirement Fund",
    },
    "41862": {
      Description: "Optar Australian Concentrated Fund",
    },
    "41863": {
      Description: "EGP Concentrated Value Fund",
    },
    "41870": {
      Description: "QVG Opportunities Fund",
    },
    "41881": {
      Description: "OnePath ANZ OA IP-CFS Gl Listed Infra EF",
    },
    "41882": {
      Description: "OnePath ANZ OA IP-CFS Gl Listed Infra NE",
    },
    "41883": {
      Description: "OnePath ANZ OA IP-Greencape Broadcap EF",
    },
    "41884": {
      Description: "OnePath ANZ OA IP-Greencape Broadcap NE",
    },
    "41885": {
      Description: "OnePath ANZ OA IP-Nikko AM Aust SharesEF",
    },
    "41886": {
      Description: "OnePath ANZ OA IP-Nikko AM Aust SharesNE",
    },
    "41887": {
      Description: "OnePath ANZ OA IP-T.Rowe PriceDynaGlBdEF",
    },
    "41888": {
      Description: "OnePath ANZ OA IP-T.Rowe PriceDynaGlBdNE",
    },
    "41905": {
      Description: "OnePath OA FR IP-CFS Global Listed Infra",
    },
    "41906": {
      Description: "OnePath OA FR IP-Nikko AM Aust Shares",
    },
    "41907": {
      Description: "OnePath OA Fr IP-T.Rowe PriceDynaGlBd",
    },
    "41916": {
      Description: "OnePath OA IP-CFS Gl Listed Infra EF",
    },
    "41917": {
      Description: "OnePath OA IP-CFS Gl Listed Infra NE",
    },
    "41918": {
      Description: "OnePath OA IP-Greencape Broadcap EF",
    },
    "41919": {
      Description: "OnePath OA IP-Greencape Broadcap NE",
    },
    "41920": {
      Description: "OnePath OA IP-Nikko AM Aust Shares EF",
    },
    "41921": {
      Description: "OnePath OA IP-Nikko AM Aust Shares NE",
    },
    "41922": {
      Description: "OnePath OA IP-T.Rowe PriceDynaGlBd EF",
    },
    "41923": {
      Description: "OnePath OA IP-T.Rowe PriceDynaGlBd NE",
    },
    "41940": {
      Description: "OnePath OA FR IP-Greencape Broadcap",
    },
    "41941": {
      Description: "Vertium Equity Income Fund",
    },
    "41942": {
      Description: "Sestante Global Macro Fund",
    },
    "41976": {
      Description: "Munro Global Growth Founders Units",
    },
    "41977": {
      Description: "Mirae Asset Asia Great Consumer Eq Fd",
    },
    "41978": {
      Description: "Bronte Capital Amalthea Fund Platform",
    },
    "41979": {
      Description: "Heathley Direct Medical Fund No. 2",
    },
    "41980": {
      Description: "Daintree Core Income Trust",
    },
    "41981": {
      Description: "AB Concentrated Australian Equities Fund",
    },
    "41982": {
      Description: "Charter Hall Direct Dvrs Cnsmr Staples",
    },
    "41985": {
      Description: "Milford Australian Absolute Growth Fd 1",
    },
    "41986": {
      Description: "ATLAS Infrastructure Aust Fdr Fd - Hdg",
    },
    "41987": {
      Description: "ATLAS Infrastructure Aust Fdr Fd - Unhdg",
    },
    "41988": {
      Description: "Perpetual Active Fixed Interest Fund A",
    },
    "41989": {
      Description: "Accountants Combined Diversifed Fund",
    },
    "41991": {
      Description: "Artesian Corporate Bond Fund",
    },
    "41992": {
      Description: "Centuria Diversified Property Fund",
    },
    "41995": {
      Description: "Paradice Australian Mid Cap Fund B",
    },
    "41996": {
      Description: "Paradice Australian Small Cap Fund B",
    },
    "41997": {
      Description: "Student Quarters Yield Trust 2",
    },
    "41998": {
      Description: "Student Quarters Property Trust 2",
    },
    "41999": {
      Description: "Blue Sky SMG Fund II",
    },
    "42000": {
      Description: "Blue Sky Private Equity aCommerce Fund 3",
    },
    "42001": {
      Description: "Alluvium Global Fund",
    },
    "42002": {
      Description: "Morningstar Australian Shares Fund B",
    },
    "42003": {
      Description: "Morningstar Balanced Real Return Fund Z",
    },
    "42004": {
      Description: "Morningstar Glb Prpty Secs (Hdg) Fd-Cl B",
    },
    "42005": {
      Description: "Morningstar Growth Real Return Fd - Cl Z",
    },
    "42006": {
      Description: "Morningstar High Growth Rl Ret Fd - Cl Z",
    },
    "42007": {
      Description: "Morningstar Intl Shrs (Hdg) Fd - Cl B",
    },
    "42008": {
      Description: "Morningstar Intl Shrs (Unhdgd) Fd - Cl B",
    },
    "42009": {
      Description: "Morningstar Moderate Real Ret Fd - Cl Z",
    },
    "42010": {
      Description: "Morningstar Multi Asset Rl Ret Fd - Cl B",
    },
    "42011": {
      Description: "Invesco Advtg Wholsl Glb Trgtd Rets Fd",
    },
    "42012": {
      Description: "Ausbil Advantage 130/30 Focus Fund",
    },
    "42013": {
      Description: "Schroder Advantage Australian Equity Fd",
    },
    "42014": {
      Description: "Fidelity Advantage Australian Eqs Fd",
    },
    "42015": {
      Description: "NAM Advantage Australian Share Income",
    },
    "42016": {
      Description: "Legg Mason Martin Currie Advtg Eq Inc Tr",
    },
    "42017": {
      Description: "Bennelong Advantage ex-20 Aus Eqs Fd",
    },
    "42018": {
      Description: "Merlon Advantage Australian Share Inc Fd",
    },
    "42019": {
      Description: "Schroder Advantage Fixed Income Fund",
    },
    "42020": {
      Description: "Kapstream Advantage Absolute Ret Inc Fd",
    },
    "42022": {
      Description: "Janus Henderson Advtg Tact Inc Fd",
    },
    "42023": {
      Description: "Lazard Advantage Global Infras Fd",
    },
    "42024": {
      Description: "Zurich Investment Advtg Glb Gr Shr Fd",
    },
    "42025": {
      Description: "Aberdeen Advantage Emerging Opps Fd",
    },
    "42026": {
      Description: "Arrowstreet Advantage Global Eq Fd",
    },
    "42027": {
      Description: "Antipodes Advantage Global Share Fund",
    },
    "42028": {
      Description: "Walter Scott Advantage Global Equity Fd",
    },
    "42029": {
      Description: "Legg Mason Martin Currie Advtg Real Inc",
    },
    "42030": {
      Description: "L1 Capital Australian Equities Fund",
    },
    "42031": {
      Description: "Allan Gray Australia Balanced Fund",
    },
    "42032": {
      Description: "Pathfinder Responsible Investment Fund",
    },
    "42033": {
      Description: "Pathfinder Global Responsibility Fund",
    },
    "42035": {
      Description: "Morningstar Balanced Real Return Fund B",
    },
    "42036": {
      Description: "Morningstar Growth Real Return Fund B",
    },
    "42037": {
      Description: "Morningstar High Growth Real Return Fd B",
    },
    "42038": {
      Description: "Morningstar Moderate Real Return Fund B",
    },
    "42039": {
      Description: "Paradice Australian Equities Fund",
    },
    "42046": {
      Description: "Centuria 111 SGT Fund",
    },
    "42049": {
      Description: "Centuria 203 Pacific Highway Fund",
    },
    "42052": {
      Description: "Centuria 8 Central Avenue Fund No.2",
    },
    "42053": {
      Description: "Centuria ATP Fund",
    },
    "42054": {
      Description: "Centuria Havelock House Fund",
    },
    "42055": {
      Description: "Centuria Retail Fund",
    },
    "42056": {
      Description: "Centuria Sandgate Road Fund",
    },
    "42057": {
      Description: "Centuria SOP Fund",
    },
    "42078": {
      Description: "Fidelity Global Low Volatility Equity Fd",
    },
    "42082": {
      Description: "Partners Group Global Real Estate Fd AUD",
    },
    "42084": {
      Description: "Milford Australian Absolute Growth Fd 2",
    },
    "42085": {
      Description: "AMP Capital Advantage Core Infras Fd",
    },
    "42086": {
      Description: "AMP Capital Advantage Corporate Bond Fd",
    },
    "42087": {
      Description: "AMP Capital Advantage Glb Prprty Secs Fd",
    },
    "42088": {
      Description: "Smarter Money Institutional Investor",
    },
    "42090": {
      Description: "State Street Floating Rate Fund",
    },
    "42091": {
      Description: "BlackRock Style Advantage Fund Aust Cl D",
    },
    "42092": {
      Description: "Barwon Healthcare Property Fund",
    },
    "42093": {
      Description: "Aspect Absolute Return Fund Class A",
    },
    "42094": {
      Description: "Two Trees Global Macro Fund Cl A",
    },
    "42096": {
      Description: "GDI No. 42 Office Trust",
    },
    "42097": {
      Description: "Lakehouse Global Growth Fund",
    },
    "42098": {
      Description: "Blue Sky Agriculture Fund IV",
    },
    "42099": {
      Description: "Blue Sky Energy Infrastructure Fund",
    },
    "42100": {
      Description: "Blue Sky Mackay Mezzanine Debt Fund",
    },
    "42104": {
      Description: "Magellan High Conviction - B",
    },
    "42105": {
      Description: "Morningstar Australian Shares Fund Z",
    },
    "42106": {
      Description: "GCI Australian Capital Stable Fund",
    },
    "42108": {
      Description: "Antipodes Wholesale Plus Asia Fund",
    },
    "42109": {
      Description: "Nikko AM Wholesale Plus Aus Shr Inc Fd",
    },
    "42110": {
      Description: "Spheria Wholesale Plus Aus Smllr Coms Fd",
    },
    "42111": {
      Description: "Realm Short Term Income Ordinary",
    },
    "42112": {
      Description: "Blue Sky US Brewery Fund",
    },
    "42113": {
      Description: "Mercer Socially Rspnb Shrs Fd Hdg",
    },
    "42114": {
      Description: "Mercer Socially Rspnb Shrs Fd Unhdg",
    },
    "42119": {
      Description: "Northcape Capital Global Emerg Mkts",
    },
    "42120": {
      Description: "Vanguard Intl Shrs Sel Excls Idx Hdg AUD",
    },
    "42122": {
      Description: "Pentalpha Income For Life Fund",
    },
    "42126": {
      Description: "Two Trees Global Macro Fund Cl F",
    },
    "42135": {
      Description: "Bennelong Emerging Companies Fund",
    },
    "42136": {
      Description: "CI Australian Equities Fund",
    },
    "42137": {
      Description: "Realm Short Term Income mFunds",
    },
    "42138": {
      Description: "Centuria Scarborough House Fund",
    },
    "42139": {
      Description: "Legg Mason Brandywine Glb Inc Optr X",
    },
    "42140": {
      Description: "Legg Mason Western Asset Global Bond X",
    },
    "42145": {
      Description: "Pendal Dynamic Income Trust",
    },
    "42149": {
      Description: "Blue Sky Private Eq IT Consulting Fd",
    },
    "42150": {
      Description: "JH INTECH Gbl All Count Mged Vol ex-Aus",
    },
    "42151": {
      Description: "Janus Henderson Global Rsrch Gr",
    },
    "42153": {
      Description: "AQR Wholesale Managed Futures 7P",
    },
    "42154": {
      Description: "CI Asian Equities Fund",
    },
    "42155": {
      Description: "Lennox Australian Microcap Fund",
    },
    "42157": {
      Description: "Schroder Global Recovery Fund - WC",
    },
    "42158": {
      Description: "Schroder Equity Opportunities Fund – PC",
    },
    "42160": {
      Description: "Bentham Asset Backed Securities I",
    },
    "42161": {
      Description: "Mirae Asset Asia Sector Leader Equity Fd",
    },
    "42162": {
      Description: "Dimensional Glbl Bond Sustainability AUD",
    },
    "42163": {
      Description: "Dimensional Glbl Bond Sustainability NZD",
    },
    "42164": {
      Description: "Robeco Global DM Conservative Eqs AUD H",
    },
    "42166": {
      Description: "Fulcrum Div Absolute Return Fund",
    },
    "42167": {
      Description: "Bronte Capital Amalthea Fund Platform B",
    },
    "42168": {
      Description: "BlackRock Global Equity Signals Fund D",
    },
    "42169": {
      Description: "Challenger Investment Ptnrs Crdt Inc Fd",
    },
    "42170": {
      Description: "Colchester Emerging Markets Bond Fund I",
    },
    "42171": {
      Description: "Prime Value Emerging Opportunities Fund",
    },
    "42173": {
      Description: "Hyperion Global Growth Companies B",
    },
    "42174": {
      Description: "Orbis Global Eq LE Fd (Aus Registered)",
    },
    "42176": {
      Description: "Wenlock Global Fund",
    },
    "42177": {
      Description: "Pendal Dynamic Income",
    },
    "42178": {
      Description: "Affirmative Global Bond Fund - A",
    },
    "42179": {
      Description: "Strategic Global Fund",
    },
    "42180": {
      Description: "Montaka Global Equities",
    },
    "42181": {
      Description: "Skyring Fixed Income",
    },
    "42182": {
      Description: "Australian Ethical Balanced WS",
    },
    "42183": {
      Description: "RC Global Infra-Energy",
    },
    "42184": {
      Description: "Pendal Sustainable Aust Fixed Interest",
    },
    "42185": {
      Description: "Auscap Long Short Aus Equs- Daily Plfm",
    },
    "42186": {
      Description: "Aoris International Fund A",
    },
    "42187": {
      Description: "Blue Sky Private Equity Birch & Waite",
    },
    "42188": {
      Description: "Blue Sky Revesby Industrial Income",
    },
    "42189": {
      Description: "Firetrail Absolute Return",
    },
    "42190": {
      Description: "Firetrail Australian High Conviction",
    },
    "42191": {
      Description: "Netwealth Global Bond Index",
    },
    "42192": {
      Description: "Netwealth Hedged International Eqs Idx",
    },
    "42193": {
      Description: "Ironbark Karara Market Neutral Fund",
    },
    "42194": {
      Description: "JPMorgan Diversified Risk",
    },
    "42195": {
      Description: "Aoris International Fund B",
    },
    "42196": {
      Description: "8IP Australian Equity Impact",
    },
    "42197": {
      Description: "Acadian Aus Equity Long Short-Class A",
    },
    "42198": {
      Description: "Acadian Global Equity Long Short-Class A",
    },
    "42199": {
      Description: "CFS FC Inv-Antipodes Global",
    },
    "42200": {
      Description: "CFS FC Inv - Pendal Global Em Mkt Opps",
    },
    "42206": {
      Description: "CFS FC-AIM W Global Bond",
    },
    "42207": {
      Description: "CFS FC-Pendal W Global Em Mkt Opps",
    },
    "42208": {
      Description: "CFS FC-CFS W Index Glb List Infr Sec",
    },
    "42209": {
      Description: "CFS FC-CFS W Index Glb Property Sec",
    },
    "42210": {
      Description: "CFS FC-CFS W Index Global Bond",
    },
    "42212": {
      Description: "CFS FC-Antipodes W Global",
    },
    "42229": {
      Description: "Totus Alpha Fund - Platform Class",
    },
    "42230": {
      Description: "Schroder Emerging Mkt Sustainable Fnd-WC",
    },
    "42232": {
      Description: "Atlas High Income Property",
    },
    "42337": {
      Description: "Ellerston Global Mid Small Cap Unhedged",
    },
    "42338": {
      Description: "Redpoint Industrials",
    },
    "42339": {
      Description: "Aim Global High Conviction",
    },
    "42340": {
      Description: "Even Keel Strategy Domestic Risk Mgmt",
    },
    "42341": {
      Description: "Even Keel Strategy Global Risk Mgmt",
    },
    "42869": {
      Description: "Ausbil Active Sustainable Equity",
    },
    "42870": {
      Description: "Ausbil Australian Concentrated Equity",
    },
    "42871": {
      Description: "Microequities Pure Microcap Value",
    },
    "42872": {
      Description: "Perpetual Ethical SRI Credit",
    },
    "42873": {
      Description: "Perpetual Global Innovation Share",
    },
    "42874": {
      Description: "Regal Emerging Companies Fund II",
    },
    "42876": {
      Description: "Daintree Core Income Trust NZD",
    },
    "42877": {
      Description: "Pendal Multi-Asset Target Return",
    },
    "42878": {
      Description: "PM Capital Enhanced Yield B",
    },
    "42879": {
      Description: "UBS Emerging Markets Equity Fund",
    },
    "42905": {
      Description: "TPI Australian Share",
    },
    "42906": {
      Description: "Australian Unity Real Estate Securities",
    },
    "43011": {
      Description: "Merricks Capital Partners",
    },
    "43012": {
      Description: "Robeco Glb DM Multi-Fac Eqs Alpha AUD",
    },
    "43013": {
      Description: "Robeco Glb DM Multi-Fac Eqs Alpha AUDH",
    },
    "43015": {
      Description: "Blue Sky Private Equity Akulaku",
    },
    "43016": {
      Description: "Blue Sky Private Equity QFS II",
    },
    "43017": {
      Description: "Saville Capital Emerging Companies",
    },
    "43019": {
      Description: "Schroder Global Recovery Fund - PC",
    },
    "43020": {
      Description: "Zurich Investments Small Companies D",
    },
    "43022": {
      Description: "Glenmore Australian Equities",
    },
    "43024": {
      Description: "Aberdeen Std Global Corporate Bond Fd",
    },
    "43025": {
      Description: "Morningstar Multi-Asset All Growth Z",
    },
    "43026": {
      Description: "Morningstar Multi-Asset Defensive Z",
    },
    "43027": {
      Description: "AXA IM Global Dynamic Equity Plus",
    },
    "43028": {
      Description: "Newgate Real Estate and Infrastructure",
    },
    "43029": {
      Description: "Aquasia Private Investment",
    },
    "43030": {
      Description: "Arrowstreet Global Equity No 1",
    },
    "43031": {
      Description: "IPM Global Macro 50",
    },
    "43032": {
      Description: "Macquarie Professional Series Glb Alts",
    },
    "43033": {
      Description: "Walter Scott Global Equity No 1",
    },
    "43034": {
      Description: "Morningstar Australian Bonds Z",
    },
    "43035": {
      Description: "Morningstar Cash Z",
    },
    "43036": {
      Description: "Pinnacle BNY Mellon Global Infras Yld",
    },
    "43057": {
      Description: "Rivkin Australian Equity",
    },
    "43058": {
      Description: "Rivkin Global Equity",
    },
    "43062": {
      Description: "T. Rowe Price Global Equity M",
    },
    "43063": {
      Description: "Realm Capital Series 2018-1",
    },
    "43064": {
      Description: "VF Strategic Equities Series A",
    },
    "43065": {
      Description: "Vanguard Etclly Cons Glb Agg Bd IdxHAUDH",
    },
    "43066": {
      Description: "Vanguard Etclly Cons Glb Agg Bd IdxHNZDH",
    },
    "43067": {
      Description: "Vanguard Ethically Cons Intl Shrs Idx",
    },
    "43069": {
      Description: "Vanguard Ethically Cons Intl ShrsIdxNZDH",
    },
    "43070": {
      Description: "Spire USA ROC Office I (AUD)",
    },
    "43071": {
      Description: "Spire USA ROC IV (AUD)",
    },
    "43072": {
      Description: "Montaka Global",
    },
    "43073": {
      Description: "Capital Group Global High Inc Opps H",
    },
    "43074": {
      Description: "Capital Group Global Corp Bond Hedged",
    },
    "43075": {
      Description: "Lazard Global Managed Volatility AUD Inc",
    },
    "43076": {
      Description: "Challenger GIF 3.40 cents pa 31 Mar 2021",
    },
    "43077": {
      Description: "Avenir Global",
    },
    "43078": {
      Description: "GAM Systematic Alt Rsk Pre AU - I",
    },
    "43079": {
      Description: "Milton Office Trust",
    },
    "43080": {
      Description: "Multi Asset Class A Moderate",
    },
    "43081": {
      Description: "Multi Asset Class B Balanced",
    },
    "43082": {
      Description: "Multi Asset Class C Growth",
    },
    "43083": {
      Description: "THB International Micro Cap",
    },
    "43084": {
      Description: "Warakirri Ethical Australian Equities",
    },
    "43085": {
      Description: "Ellerston Asia Growth",
    },
    "43086": {
      Description: "Fairlight Global Small & Mid Cap Fndtn",
    },
    "43087": {
      Description: "Fairlight Global Small & Mid Cap Ord",
    },
    "43088": {
      Description: "Baillie Gifford LT Gbl Growth A",
    },
    "43089": {
      Description: "Perpetual Diversified Real Return Z",
    },
    "43090": {
      Description: "GAM FCM ILS Yield W",
    },
    "43091": {
      Description: "Ethical Partners Australian Share",
    },
    "43092": {
      Description: "Nikko AM ARK Global Disruptive Innovt",
    },
    "43093": {
      Description: "Equitable Investors Dragonfly",
    },
    "43094": {
      Description: "GAM Systematic Alt Rsk Pre Pls AU - I",
    },
    "43095": {
      Description: "Selector High Conviction Equity A",
    },
    "43096": {
      Description: "Selector High Conviction Equity B",
    },
    "43097": {
      Description: "AMP Capital Australian Bond MPS",
    },
    "43098": {
      Description: "Ardevora Global Equities MPS",
    },
    "43099": {
      Description: "Blended Global Equities Hedged MPS",
    },
    "43100": {
      Description: "BT Wholesale Multi-manager Moderate",
    },
    "43101": {
      Description: "Fidelity Australian Opportunities MPS",
    },
    "43102": {
      Description: "Heitman Global Property MPS",
    },
    "43103": {
      Description: "Janus Henderson AUS Fxd Intst MPS",
    },
    "43104": {
      Description: "Pendal Australian Fixed Interest MPS",
    },
    "43105": {
      Description: "PIMCO Global Fixed Interest MPS",
    },
    "43106": {
      Description: "Realindex Australian Shares MPS",
    },
    "43107": {
      Description: "River and Mercantile Global Equity MPS",
    },
    "43108": {
      Description: "Solaris Core Australian Equity MPS",
    },
    "43109": {
      Description: "T. Rowe Price Global Focused Equity MPS",
    },
    "43110": {
      Description: "Wellington Global Bond MPS",
    },
    "43111": {
      Description: "Wellington Global Equity MPS",
    },
    "43112": {
      Description: "Western Asset Global Bond MPS",
    },
    "43113": {
      Description: "Multi Strategy Alternative",
    },
    "43114": {
      Description: "AtlasTrend Clean Disruption",
    },
    "43115": {
      Description: "Mittleman Global Value Equity",
    },
    "43116": {
      Description: "Dimensional World Allocation 30/70",
    },
    "43117": {
      Description: "Dimensional Australian Sustainability",
    },
    "43130": {
      Description: "Daintree High Income Trust AUD Unit Cl",
    },
    "43131": {
      Description: "Aoris International Fund C Hedged",
    },
    "43132": {
      Description: "Aoris International Fund D Hedged",
    },
    "43149": {
      Description: "Challenger Guaranteed Pen - 31 Dec 2023",
    },
    "43150": {
      Description: "GAM FCM ILS Yield A",
    },
    "43151": {
      Description: "Russell Wholesale Plus Emerging Markets",
    },
    "43152": {
      Description: "BlackRock Wholesale Plus Style Adv(Aust)",
    },
    "43153": {
      Description: "Realm High Income mFund Units",
    },
    "43154": {
      Description: "Daintree High Income Trust NZD Unit Cl",
    },
    "43155": {
      Description: "T. Rowe Price Global Equity (Hedged) M",
    },
    "43156": {
      Description: "GQG Partners Emerging Markets Equity",
    },
    "43157": {
      Description: "Mercer Growth Enhanced Passive Units",
    },
    "43158": {
      Description: "Mercer Moderate Growth Enh Pasv Units",
    },
    "43159": {
      Description: "Mercer Conservative Gr Enh Pasv Units",
    },
    "43160": {
      Description: "Loomis Sayles Global Equity",
    },
    "43161": {
      Description: "Macquarie True Index Emerging Markets",
    },
    "43162": {
      Description: "Alexander Fixed Income Ordinary",
    },
    "43163": {
      Description: "Pentalpha Income For Life Ordinary",
    },
    "43164": {
      Description: "Ausbil Active Dividend Income",
    },
    "43165": {
      Description: "Ausbil Global SmallCap",
    },
    "43167": {
      Description: "Ellerston Overlay Australian Share",
    },
    "43168": {
      Description: "Ellerston Small Companies",
    },
    "43169": {
      Description: "Ellerston India",
    },
    "43170": {
      Description: "Trinetra Emerging Markets Growth Trust",
    },
    "43172": {
      Description: "Macquarie Diversified Equity Yield",
    },
    "43174": {
      Description: "CC JCB Active Bond B",
    },
    "43175": {
      Description: "JB High Alpha",
    },
    "43176": {
      Description: "Schroder Absolute Return Income Fund –IC",
    },
    "43177": {
      Description: "Legg Mason Western Asset Global Bond B",
    },
    "43178": {
      Description: "CC RWC Global Emerging Markets",
    },
    "43179": {
      Description: "Hamilton Chs Slct Inv Bntlgh Dbt Sb Tr A",
    },
    "43180": {
      Description: "Hamilton Chs Slct Inv Bntlgh Dbt Sb Tr B",
    },
    "43181": {
      Description: "Hamilton Chs Slct Inv Bntlgh Dbt Sb Tr C",
    },
    "43182": {
      Description: "Cambridge Global Smaller Companies A",
    },
    "43183": {
      Description: "DNR Capital Australian Emerging Coms",
    },
    "43206": {
      Description: "GDI No.36 Perth CBD Office Trust",
    },
    "43207": {
      Description: "GDI No.38 Diversified Property Trust",
    },
    "43208": {
      Description: "GDI No.43 Property Trust",
    },
    "43209": {
      Description: "Ellerston JAADE AUS Priv Assts WS",
    },
    "43210": {
      Description: "Kapstream Absolute Return Income Plus I",
    },
    "43211": {
      Description: "Microequities Value Income",
    },
    "43212": {
      Description: "GQG Partners Global Equity",
    },
    "43214": {
      Description: "Diversified Commercial Income",
    },
    "43284": {
      Description: "State Street Climate ESG Intl Eq",
    },
    "43285": {
      Description: "Clime Smaller Companies",
    },
    "43286": {
      Description: "Pendal Active Long Volatility",
    },
    "43287": {
      Description: "Legg Mason Martin Currie Equity Income X",
    },
    "43288": {
      Description: "Legg Mason Martin Currie Real Income X",
    },
    "43292": {
      Description: "Clime Australian Income",
    },
    "43293": {
      Description: "PIMCO TRENDS Managed Futures Stgy Seed",
    },
    "43294": {
      Description: "PIMCO TRENDS Managed Futures Stgy Wholsl",
    },
    "43295": {
      Description: "Wingate Investment Partners Trust No. 3",
    },
    "43296": {
      Description: "CI Brunswick",
    },
    "43297": {
      Description: "CC JCB Global Bond A Hedged",
    },
    "43298": {
      Description: "CC JCB Global Bond B Unhedged",
    },
    "43299": {
      Description: "Elston Australian Large Companies A",
    },
    "43300": {
      Description: "AMP Capital Global Coms On-platform A",
    },
    "43301": {
      Description: "AMP Capital Global Coms Off-platform H",
    },
    "43302": {
      Description: "AMP Capital Global Coms Instl O",
    },
    "43303": {
      Description: "4D Emerging Markets Infrastructure",
    },
    "43304": {
      Description: "Watermark Absolute Return",
    },
    "43305": {
      Description: "Bentham Global Opportunities F",
    },
    "43306": {
      Description: "T. Rowe Price Global Equity S",
    },
    "43307": {
      Description: "GDI No.33 Brisbane Office Trust",
    },
    "43309": {
      Description: "JB High Alpha Retail",
    },
    "43310": {
      Description: "Franklin Australian Core Plus Bond I",
    },
    "43311": {
      Description: "Baker Steel Gold Institutional",
    },
    "43312": {
      Description: "Perpetual Charitable & Commuity Investor",
    },
    "43313": {
      Description: "Perpetual Charitable Endowment",
    },
    "43314": {
      Description: "Perpetual Select Inv Conservative",
    },
    "43315": {
      Description: "Perpetual Select Inv Diversified",
    },
    "43316": {
      Description: "Perpetual Select Inv Balanced",
    },
    "43317": {
      Description: "Perpetual Select Inv Growth",
    },
    "43318": {
      Description: "Perpetual Select Inv Geared High Growth",
    },
    "43319": {
      Description: "Perpetual Select Fixed Income Fd - PPSW",
    },
    "43320": {
      Description: "Perpetual Select Inv Real Estate",
    },
    "43321": {
      Description: "Perpetual Select Inv Australian Share",
    },
    "43322": {
      Description: "Perpetual Select Inv Geared AUS Share",
    },
    "43323": {
      Description: "Perpetual Select Inv International Share",
    },
    "43324": {
      Description: "The TAMIM Asia Small Companies",
    },
    "43325": {
      Description: "Affluence Small Company Ordinary",
    },
    "43326": {
      Description: "RARE Infrastructure Income B",
    },
    "43327": {
      Description: "Mutual High Yield",
    },
    "43328": {
      Description: "Charter Hall Direct CDC Trust Ordinary",
    },
    "43329": {
      Description: "Charter Hall Direct Automotive Trust Ord",
    },
    "43330": {
      Description: "Vanguard Global Multi-Factor",
    },
    "43331": {
      Description: "MFS Prudent Capital Trust",
    },
    "43332": {
      Description: "Perennial Smaller Companies Sust Fut Tr",
    },
    "43333": {
      Description: "iShares All-Country Equity Index D",
    },
    "43334": {
      Description: "iShares ESG Australian Bond Index D",
    },
    "43335": {
      Description: "Newmark Hardware Trust",
    },
    "43336": {
      Description: "Macquarie Australian Emerging Companies",
    },
    "43337": {
      Description: "Longreach Direct Lending",
    },
    "43338": {
      Description: "Robeco Global DM Conservative Eqs (AUD)",
    },
    "43339": {
      Description: "Manning Private Debt",
    },
    "43340": {
      Description: "Moelis Australia Fixed Income",
    },
    "43341": {
      Description: "Moelis Australia Secured Loan Series",
    },
    "43342": {
      Description: "Crown Diversified Trend Access",
    },
    "43343": {
      Description: "Man Alternative Style Risk Premia Accs",
    },
    "43344": {
      Description: "Zebedee L-S Equity Access",
    },
    "43345": {
      Description: "Blue Sky aCommerce 4",
    },
    "43346": {
      Description: "Smarter Money Long-Short Credit Instl",
    },
    "43349": {
      Description: "AMP Capital Australian Em Coms On-plfm A",
    },
    "43350": {
      Description: "Clearwater Dynamic Portfolio",
    },
    "43351": {
      Description: "Mittleman Global Value Equity I",
    },
    "43352": {
      Description: "THB International Micro Cap B",
    },
    "43353": {
      Description: "Schroder Global Sustainable Eq(Hgd) - IC",
    },
    "43362": {
      Description: "CFS FC-CFS W Index Conservative",
    },
    "43363": {
      Description: "CFS FC-CFS W Index Diversified",
    },
    "43364": {
      Description: "CFS FC-CFS W Index Growth",
    },
    "43365": {
      Description: "Baillie Gifford Glb Stewardship A",
    },
    "43366": {
      Description: "CFS Index Conservative A",
    },
    "43367": {
      Description: "CFS Index Diversified A",
    },
    "43368": {
      Description: "CFS Index Growth A",
    },
    "43369": {
      Description: "Legg Mason QS Investors Glb Rspnb Inv A",
    },
    "43370": {
      Description: "Legg Mason QS Investors Glb Rspnb Inv F",
    },
    "43371": {
      Description: "Polaris Global Equity (Hedged)",
    },
    "43373": {
      Description: "KC Diversified Income",
    },
    "43374": {
      Description: "BlackRock Fission Indexed Intl Eq D",
    },
    "43375": {
      Description: "BlackRock Fixed Inc Glb Oppos (Aust) E",
    },
    "43376": {
      Description: "L1 Capital International Daily",
    },
    "43377": {
      Description: "Ausbil Global Essential Infras Wholsl",
    },
    "43378": {
      Description: "BlackRock Enhanced Australian Bond D",
    },
    "43379": {
      Description: "AMP Capital Australian Em Coms Instl O",
    },
    "43380": {
      Description: "Cannon Hill Office Trust",
    },
    "43381": {
      Description: "Lazard Global Equity Franchise I",
    },
    "43382": {
      Description: "QVG Long Short Investor",
    },
    "43383": {
      Description: "L1 Capital UK Residential Prpty III AUD",
    },
    "43384": {
      Description: "Macquarie Core Australian Fixed Interest",
    },
    "43385": {
      Description: "Arrowstreet Global Equity No.2 Class I",
    },
    "43386": {
      Description: "CFS FC Inv-FR Term Dep(10yr)-Monthly Int",
    },
    "43387": {
      Description: "CFS FC Inv-FR Term Dep(15yr)-Monthly Int",
    },
    "43388": {
      Description: "CFS FC Inv-FR Term Dep(2yr)-Monthly Int",
    },
    "43389": {
      Description: "CFS FC Inv-FR Term Dep(3yr)-Monthly Int",
    },
    "43390": {
      Description: "CFS FC Inv-FR Term Dep(5yr)-Monthly Int",
    },
    "43391": {
      Description: "CFS FC Inv-FR Term Dep(7yr)-Monthly Int",
    },
    "43404": {
      Description: "CFS FC-FirstRate Term Dep (10yr)",
    },
    "43405": {
      Description: "CFS FC-FirstRate Term Dep (15yr)",
    },
    "43406": {
      Description: "CFS FC-FirstRate Term Dep (2yr)",
    },
    "43407": {
      Description: "CFS FC-FirstRate Term Dep (3yr)",
    },
    "43408": {
      Description: "CFS FC-FirstRate Term Dep (5yr)",
    },
    "43409": {
      Description: "CFS FC-FirstRate Term Dep (7yr)",
    },
    "43410": {
      Description: "Clime Fixed Interest Wholesale",
    },
    "43411": {
      Description: "Bombora Special Investments Growth",
    },
    "43412": {
      Description: "Global Opportunities Alternatives Trust",
    },
    "43413": {
      Description: "Valara Partners Ordinary",
    },
    "43414": {
      Description: "Arnott Opportunities Trust",
    },
    "43415": {
      Description: "Franklin Australian Core Plus Bond W",
    },
    "43417": {
      Description: "Morningstar Australian Bonds B",
    },
    "43418": {
      Description: "Morningstar Glb Prpty Secs (Hdg) Fd-Cl Z",
    },
    "43419": {
      Description: "TAIM ASX200 Leveraged Momentum A",
    },
    "43420": {
      Description: "TAIM ASX200 Momentum A",
    },
    "43421": {
      Description: "AB Managed Volatility Equities - Green",
    },
    "43422": {
      Description: "Morningstar Global Shares Z",
    },
    "43423": {
      Description: "Regal Global Equity Income",
    },
    "43424": {
      Description: "Perennial Private to Public Opps",
    },
    "43425": {
      Description: "Macquarie Multi-Asset Opportunities",
    },
    "43426": {
      Description: "Australian Eagle Trust",
    },
    "43427": {
      Description: "Antares Diversified Fixed Income",
    },
    "43428": {
      Description: "MCP Credit Trust",
    },
    "43429": {
      Description: "MCP Real Estate Debt",
    },
    "43430": {
      Description: "MCP Secured Private Debt II",
    },
    "43431": {
      Description: "MCP Wholesale Investments Trust",
    },
    "43432": {
      Description: "ICAM Duxton Port Infrastructrue Tr Ord",
    },
    "43433": {
      Description: "WCM Quality Global Growth (Managed)",
    },
    "43434": {
      Description: "Paradice Global Emerging Markets",
    },
    "43435": {
      Description: "Paradice Long Short Australian Equities",
    },
    "43436": {
      Description: "Pzena Emerging Markets Value Wholesale",
    },
    "43437": {
      Description: "Platypus Absolute Return Aus Eqs Ord",
    },
    "43438": {
      Description: "Invesco Credit Opportunities",
    },
    "43439": {
      Description: "Invesco Credit Opportunities - Sec Cls",
    },
    "43440": {
      Description: "Invesco Credit Opportunities - Thd Cls",
    },
    "43441": {
      Description: "CC Sage Capital Absolute Return",
    },
    "43442": {
      Description: "CC Sage Capital Equity Plus",
    },
    "43443": {
      Description: "Aberdeen Std Emerging Mkt Lcl Ccy Dbt",
    },
    "43444": {
      Description: "Longreach HQI - Global Market Neutral",
    },
    "43445": {
      Description: "Vanguard Active Global Growth",
    },
    "43446": {
      Description: "Vanguard Active Emerging Market Equity",
    },
    "43447": {
      Description: "Spire USA Multifamily IV (AUD)",
    },
    "43448": {
      Description: "ATLAS Infrastructure Aust Fdr",
    },
    "43449": {
      Description: "WCM International Small Cap Gr (Managed)",
    },
    "43457": {
      Description: "BWA Cash Management Account",
    },
    "43458": {
      Description: "Clime Australian Income Retail",
    },
    "43459": {
      Description: "Clime International Retail",
    },
    "43460": {
      Description: "Clime Smaller Companies Retail",
    },
    "43461": {
      Description: "Insync Global Quality Equity",
    },
    "43462": {
      Description: "Gyrostat Absolute Return Income Equity",
    },
    "43463": {
      Description: "FirstChoice Wholesale Cash",
    },
    "43464": {
      Description: "Milford Dynamic (AU)",
    },
    "43465": {
      Description: "Hamilton Lane Global Private Asst (AUD)",
    },
    "43466": {
      Description: "Global Listed Infra Mndt No.1",
    },
    "43467": {
      Description: "Montgomery Small Companies",
    },
    "43468": {
      Description: "Invesco Global Real Estate A",
    },
    "43469": {
      Description: "Invesco Global Real Estate I",
    },
    "43470": {
      Description: "Arnott Opportunities Trust Non-Series",
    },
    "43471": {
      Description: "Harvest Lane Asset Management Abs Pls",
    },
    "43472": {
      Description: "Warakirri Cash Deposits Trust",
    },
    "43473": {
      Description: "Ellerston JAADE AUS Priv Assts Retail",
    },
    "43474": {
      Description: "Antares Ex-20 Australian Equities",
    },
    "43475": {
      Description: "NWQ Global Markets Wholesale",
    },
    "43477": {
      Description: "Ardevora Global Shares",
    },
    "43478": {
      Description: "Global Transport A-2019",
    },
    "43479": {
      Description: "Mutual Credit",
    },
    "43480": {
      Description: "Bentham Global Opportunities I",
    },
    "43481": {
      Description: "Challenger GIF 2.03 cents pa 30 Sep 2023",
    },
    "43482": {
      Description: "Perennial Value Emerging Companies Trust",
    },
    "43483": {
      Description: "Regal Emerging Companies III",
    },
    "43484": {
      Description: "333 Exhibition Street Property Ordinary",
    },
    "43485": {
      Description: "The Stables Property Ordinary",
    },
    "43486": {
      Description: "NewActon East Property Ordinary",
    },
    "43487": {
      Description: "Cloudbreak Digital Opportunities A",
    },
    "43488": {
      Description: "Cloudbreak Bitcoin Investment Trust A",
    },
    "43489": {
      Description: "EQT DiversifiedFixed Income",
    },
    "43490": {
      Description: "Munro Concentrated Global Growth A",
    },
    "43491": {
      Description: "Laverton North Property Ordinary",
    },
    "43492": {
      Description: "Cambridge Bedford Property Ordinary",
    },
    "43493": {
      Description: "Vanguard Active Global Credit Bond",
    },
    "43494": {
      Description: "WaveStone Australian Share I",
    },
    "43495": {
      Description: "BlackRock Balanced Multi-Index D",
    },
    "43496": {
      Description: "BlackRock Growth Multi-Index D",
    },
    "43497": {
      Description: "BlackRock Moderate Multi-Index D",
    },
    "43498": {
      Description: "Invesco Wholesale USD Cash A",
    },
    "43499": {
      Description: "Russell Invmts Glb Lstd Infras $NZ Hdg B",
    },
    "43500": {
      Description: "Russell Invmts Low Carbon Glb Shrs A",
    },
    "43501": {
      Description: "Cooper Investors Family and Founder",
    },
    "43503": {
      Description: "Ophir Global Opportunities A",
    },
    "43504": {
      Description: "Whitehelm Capital Listed Core Infras UnH",
    },
    "43505": {
      Description: "T. Rowe Price Global Equity (Hedged) S",
    },
    "43506": {
      Description: "Longwave Australian Small Companies A",
    },
    "43507": {
      Description: "Regal Emerging Companies III 2019-11 Ser",
    },
    "43508": {
      Description: "Regal Emerging Companies III 2019-12 Ser",
    },
    "43509": {
      Description: "Auscap Global Equities",
    },
    "43510": {
      Description: "Invesco Australian Equity Effcnt Inc A",
    },
    "43511": {
      Description: "Eiger Australian Small Companies",
    },
    "43512": {
      Description: "Investors Mutual Private Portfolio",
    },
    "43514": {
      Description: "Revolution Private Debt I",
    },
    "43515": {
      Description: "Datt Capital Absolute Return A",
    },
    "43516": {
      Description: "Holon Photon Ordinary Units",
    },
    "43517": {
      Description: "AQR Wholesale Managed Futures 8P",
    },
    "43518": {
      Description: "Aberdeen Standard Global Smaller Coms",
    },
    "43519": {
      Description: "Revolution Private Debt II",
    },
    "43520": {
      Description: "Revolution Wholesale Private Debt II A",
    },
    "43521": {
      Description: "BlackRock Appreciation Strategy (AUS) S",
    },
    "43522": {
      Description: "JANA High Alpha Australian Share Trust",
    },
    "43523": {
      Description: "JANA High Alpha Global Share Trust",
    },
    "43524": {
      Description: "JANA High Alpha Glbl Shr Tr with Ccy Hdg",
    },
    "43525": {
      Description: "JANA Moderate Trust",
    },
    "43526": {
      Description: "CC JCB Dynamic Alpha A",
    },
    "43527": {
      Description: "Progressive Global",
    },
    "43528": {
      Description: "1851 Emerging Companies",
    },
    "43529": {
      Description: "Moelis Australia Private Credit",
    },
    "43530": {
      Description: "Armytage Micro Cap Activist",
    },
    "43531": {
      Description: "Ninety One Aust Fds Emerging Mkts Eq J",
    },
    "43532": {
      Description: "Ninety One Aust Fds Emerging Mkts Eq I",
    },
    "43533": {
      Description: "Moelis Australia Secured Loan Series B",
    },
    "43534": {
      Description: "Sterling Units",
    },
    "43535": {
      Description: "Perennial Value Future Leaders Trust",
    },
    "43536": {
      Description: "Legg Mason Western Asset Aust Cr SMAsh",
    },
    "43537": {
      Description: "Smarter Money Higher Income Instl A",
    },
    "43538": {
      Description: "Lazard Select Australian Equity S Cl",
    },
    "43539": {
      Description: "Totus High Conviction Ordinary",
    },
    "43540": {
      Description: "Challenger GIF 2.08 cents pa 28 Feb 2021",
    },
    "43541": {
      Description: "Challenger GIF 2.35 cents pa 31 Aug 2024",
    },
    "43542": {
      Description: "Dimensional Sustnby Wld Allc 70/30 Tr",
    },
    "43543": {
      Description: "Pengana International E",
    },
    "43544": {
      Description: "Anacacia Wattle Fund",
    },
    "43545": {
      Description: "Australian Small and Mid-Cap Fund",
    },
    "43546": {
      Description: "Global Systematic Equities Fund",
    },
    "43547": {
      Description: "La Trobe Australian Cr 90 Day Ntc Acnt",
    },
    "43548": {
      Description: "Legg Mason Brandywine Glb Inc Optr B",
    },
    "43549": {
      Description: "BlackRock Australian Alpha Tilts S",
    },
    "43550": {
      Description: "CVS Lane First Mortgage",
    },
    "43551": {
      Description: "Realm Strategic Income Enduring",
    },
    "43552": {
      Description: "Federation Alternative Investments Ret",
    },
    "43553": {
      Description: "Ausbil Global Resources Wholesale",
    },
    "43555": {
      Description: "IFP Global Franchise Fund II",
    },
    "43556": {
      Description: "ECP Growth Companies",
    },
    "43557": {
      Description: "Robeco Multi Factor Absolute Return B",
    },
    "43558": {
      Description: "Macquarie Diversified Growth",
    },
    "43559": {
      Description: "Challenger Invmt Ptnrs Crdt Inc P",
    },
    "43560": {
      Description: "Palisade's Unlisted Infrastructure Trust",
    },
    "43561": {
      Description: "Thornburg Multisector Opportunistic",
    },
    "43562": {
      Description: "Melior Australian Impact",
    },
    "43563": {
      Description: "Samuel Terry Absolute Return Group A",
    },
    "43564": {
      Description: "Realside Adelaide Office",
    },
    "43565": {
      Description: "Future Renewables",
    },
    "43566": {
      Description: "Chiodo Diversified Property Dev Cl",
    },
    "43567": {
      Description: "L1 Capital UK Residential Prpty IV AUD",
    },
    "43568": {
      Description: "DNR Capital Australian Equities Income",
    },
    "43569": {
      Description: "Sandon Capital Activist",
    },
    "43570": {
      Description: "Challenger GIF 1.70 cents pa 30 Apr 2021",
    },
    "43571": {
      Description: "First Guardian Master Boutique Devpmt",
    },
    "43572": {
      Description: "Yarra Absolute Credit",
    },
    "43573": {
      Description: "Alium Market Neutral Platform",
    },
    "43574": {
      Description: "Aviva Inv Mlt-Stgy Fxd Inc I AUD Acc",
    },
    "43575": {
      Description: "Aviva Inv Mlt-Stgy Tgt Inc Fh AUD Inc",
    },
    "43577": {
      Description: "Partners Group Global Real Estate AUDUnH",
    },
    "43578": {
      Description: "Resolution Capital Glb Ppty Sec UH SII B",
    },
    "43602": {
      Description: "Milford Diversified Income (AU)",
    },
    "43604": {
      Description: "Sculptor (AU) Global Multi-Strategy",
    },
    "43605": {
      Description: "iShares Screened WS Intl Eq Idx E",
    },
    "43606": {
      Description: "Ellerston Low Volatility Income Strategy",
    },
    "43607": {
      Description: "ACRA Diversified",
    },
    "43608": {
      Description: "Neuberger Berman Strategic Income I",
    },
    "43609": {
      Description: "Neuberger Berman Strategic Income W",
    },
    "43610": {
      Description: "Neuberger Berman Em Mkts Eq Sel I",
    },
    "43611": {
      Description: "Neuberger Berman Em Mkts Eq Sel W",
    },
    "43618": {
      Description: "Revolution Wholesale Private Debt II B",
    },
    "43619": {
      Description: "Microequities Emerging Companies Value",
    },
    "43620": {
      Description: "Pengana High Conviction Property Secs A",
    },
    "43631": {
      Description: "Fairlight Global Small & Mid Cap Hedged",
    },
    "43716": {
      Description: "Cooper Investors Asian Equities Retail",
    },
    "43717": {
      Description: "GQG Partners Global Equity Z",
    },
    "43718": {
      Description: "GQG Partners Emerging Markets Equity Z",
    },
    "43719": {
      Description: "AMP Australian Equity Index",
    },
    "43720": {
      Description: "AMP Australian Fixed Interest Index",
    },
    "43721": {
      Description: "AMP Australian Property Index",
    },
    "43722": {
      Description: "AMP International Equity Index",
    },
    "43723": {
      Description: "AMP International Fixed Intst Idx Hdg",
    },
    "43724": {
      Description: "AMP International Property Index Hdg",
    },
    "43725": {
      Description: "Australian Unity Green Bond",
    },
    "43726": {
      Description: "Hyperion Global Growth Companies C",
    },
    "43727": {
      Description: "BlackRock Core Alternatives E",
    },
    "43729": {
      Description: "Ares Global Credit Income A",
    },
    "43730": {
      Description: "Pzena Global Focused Value Wholesale",
    },
    "43731": {
      Description: "Pzena Global Focused Value Retail",
    },
    "43732": {
      Description: "360 Capital Active Value Equity",
    },
    "43733": {
      Description: "Alceon High Conviction Absolute Rt A",
    },
    "43734": {
      Description: "Alceon High Conviction Absolute Rt Fndtn",
    },
    "43735": {
      Description: "Alceon High Conviction Absolute Rt Plfm",
    },
    "43736": {
      Description: "Fidelity Sustainable Water & Waste",
    },
    "43737": {
      Description: "Lucerne Alternative Investments 1",
    },
    "43738": {
      Description: "Lucerne Alternative Investments 2",
    },
    "43739": {
      Description: "Maven Smaller Companies",
    },
    "43740": {
      Description: "GAM KCL Trade Finance AU Institutional",
    },
    "43744": {
      Description: "Warakirri Diversified Agriculture",
    },
    "43745": {
      Description: "Thynne Street Property",
    },
    "43746": {
      Description: "Pendal Focus Australian Equities",
    },
    "43747": {
      Description: "Northcape Capital Global Equities",
    },
    "43748": {
      Description: "Spatium Small Companies",
    },
    "43749": {
      Description: "ORAH A",
    },
    "43750": {
      Description: "Schroder Specialist Private Equity",
    },
    "43751": {
      Description: "Ausbil Australian SmallCap Wholesale",
    },
    "43753": {
      Description: "iShares ESG Global Bond Index D",
    },
    "43754": {
      Description: "CFS W Index High Growth",
    },
    "43758": {
      Description: "CFS W Index Moderate",
    },
    "43760": {
      Description: "CFS W Index Balanced",
    },
    "43763": {
      Description: "Regnan Credit Impact Trust",
    },
    "43764": {
      Description: "Totus Alpha Long Short",
    },
    "43765": {
      Description: "Spheria Global Microcap",
    },
    "43766": {
      Description: "Lumenary Global Founders",
    },
    "43767": {
      Description: "Janus Henderson Global Multi-Strategy",
    },
    "43768": {
      Description: "Realm Strategic Wholesale Income A",
    },
    "43769": {
      Description: "Ellerston Pre-IPO",
    },
    "43770": {
      Description: "WCM Quality Global Growth (Mng) B Hdg",
    },
    "43771": {
      Description: "PCS Australian Absolute Return Founders",
    },
    "43773": {
      Description: "Quest Long Short Australian Equities",
    },
    "43774": {
      Description: "Solaris Australian Equity Income",
    },
    "43775": {
      Description: "Spire Multifamily Value I (AUD)",
    },
    "43776": {
      Description: "Spire Branford Castle US Prvt Eq II(AUD)",
    },
    "43777": {
      Description: "Spire Oaktree Opps XI (AUD) Frst Cls",
    },
    "43778": {
      Description: "Morningstar Alternatives Strategies Z",
    },
    "43779": {
      Description: "Artisan Global Discovery",
    },
    "#CASH": {
      Description: "Cash or cash equivalents",
    },
    "#ASX300": {
      Description: "S&P/ASX 300 Index",
    },
    "#ASXSmallOrds": {
      Description: "S&P/ASX Small Ordinaries Index",
    },
    "#NZX50": {
      Description: "S&P/NZX 50 Index",
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
    "#MSCIEM": {
      Description: "MSCI Emerging Markets",
    },
    "#AREIT": {
      Description: "S&P Australia REIT Index",
    },
    "#DevREIT": {
      Description: "S&P Developed REIT Index",
    },
    "#AusBondBankBill OR Cash": {
      Description: "Bloomberg AusBond Bank Bill Index",
    },
    "#AusBondComposite": {
      Description: "Bloomberg AusBond Composite 0+ Index",
    },
    "#FTSEWGBI1-5": {
      Description: "FTSE WGBI 1-5 Index",
    },
    "#BarGlbAgg": {
      Description: "Bloomberg Barclays Global Aggregate Bond Index",
    },
    "#BarGlbAggCredit": {
      Description: "Bloomberg Barclays Global Aggregate Credit Bond Index",
    },
    XARO: {
      Description: "Activex Ardea Real Outcome Bond ETF",
    },
    XKAP: {
      Description: "ActiveX Kapstream Absolute Ret Inc ETF",
    },
    DMKT: {
      Description: "AMP Capital Dynamic Markets ETF (Hedge)",
    },
    GLIN: {
      Description: "AMP Capital Global Infras Secs Unhdg ETF",
    },
    RENT: {
      Description: "AMP Capital Global Property Secs UnH ETF",
    },
    AGX1: {
      Description: "Antipodes Global Shares ETF",
    },
    HBRD: {
      Description: "BetaShares Active Australian Hybrids ETF",
    },
    QAG: {
      Description: "BetaShares Agriculture ETF CcyHgd(Synth)",
    },
    ASIA: {
      Description: "BetaShares Asia Technology Tigers ETF",
    },
    QPON: {
      Description: "Betashares Aus Bank Sr Fltng Rt Bd ETF",
    },
    BEAR: {
      Description: "BetaShares Aus Equities Bear Hedge ETF",
    },
    EX20: {
      Description: "BetaShares Aus Ex-20 Port Divrs ETF",
    },
    AAA: {
      Description: "BetaShares Aus High Interest Cash ETF",
    },
    CRED: {
      Description: "BetaShares Aus Inv Grd Corp Bd ETF",
    },
    YMAX: {
      Description: "BetaShares Aus Top 20 Eq Yld Mxmsr ETF",
    },
    A200: {
      Description: "BetaShares Australia 200 ETF",
    },
    HVST: {
      Description: "BetaShares Australian Div Harvester ETF",
    },
    BBOZ: {
      Description: "BetaShares Australian Eqs Strong BrH ETF",
    },
    QFN: {
      Description: "BetaShares Australian Fincls Sect ETF",
    },
    AGVT: {
      Description: "BetaShares Australian Government Bd ETF",
    },
    QRE: {
      Description: "BetaShares Australian Res Sect ETF",
    },
    SMLL: {
      Description: "BetaShares Australian Small Coms Sel ETF",
    },
    FAIR: {
      Description: "BetaShares Australian Sustnby Ldrs ETF",
    },
    POU: {
      Description: "BetaShares British Pound ETF",
    },
    QCB: {
      Description: "BetaShares Com Basket ETF Ccy Hgd(Synth)",
    },
    OOO: {
      Description: "BetaShares Crude Oil ETF Ccy Hgd(Synth)",
    },
    DBBF: {
      Description: "BetaShares Diversified Balanced ETF",
    },
    DZZF: {
      Description: "BetaShares Diversified Cnsrv Inc ETF",
    },
    DGGF: {
      Description: "BetaShares Diversified Growth ETF",
    },
    DHHF: {
      Description: "BetaShares Diversified High Growth ETF",
    },
    EEU: {
      Description: "BetaShares Euro ETF",
    },
    HEUR: {
      Description: "BetaShares Europe ETF-Ccy Hdg",
    },
    F100: {
      Description: "BetaShares FTSE 100 ETF",
    },
    QOZ: {
      Description: "BetaShares FTSE RAFI Australia 200 ETF",
    },
    QUS: {
      Description: "BetaShares FTSE RAFI US 1000 ETF",
    },
    GEAR: {
      Description: "BetaShares Geared Australian Equity ETF",
    },
    GGUS: {
      Description: "BetaShares Geared US Eq Ccy Hdg ETF",
    },
    FOOD: {
      Description: "BetaShares Glb Agltr Coms ETF-Ccy Hdg",
    },
    BNKS: {
      Description: "BetaShares Glb Banks ETF-Ccy Hdg",
    },
    FUEL: {
      Description: "BetaShares Glb Energy Coms ETF-Ccy Hdg",
    },
    MNRS: {
      Description: "BetaShares Glb Gold Miners ETF-Ccy Hdg",
    },
    DRUG: {
      Description: "BetaShares Glb Healthcare ETF-Ccy Hdg",
    },
    RBTZ: {
      Description: "BetaShares Glb Rbtc & Artfcl Intlgc ETF",
    },
    HACK: {
      Description: "Betashares Global Cybersecurity ETF",
    },
    GGOV: {
      Description: "BetaShares Global Gov Bd 20+Yr ETF Ccy H",
    },
    INCM: {
      Description: "BetaShares Global Income Leaders ETF",
    },
    HQLT: {
      Description: "BetaShares Global Quality Ldrs ETF Ccy H",
    },
    QLTY: {
      Description: "BetaShares Global Quality Leaders ETF",
    },
    ETHI: {
      Description: "BetaShares Global Sstnbty Ldrs ETF",
    },
    QAU: {
      Description: "BetaShares Gold Bullion ETF Ccy Hedged",
    },
    IIND: {
      Description: "Betashares India Quality ETF",
    },
    HJPN: {
      Description: "BetaShares Japan ETF-Ccy Hdg",
    },
    BNDS: {
      Description: "BetaShares Legg Mason Australian Bd ETF",
    },
    EMMG: {
      Description: "BetaShares Legg Mason Em Mkts ETF",
    },
    EINC: {
      Description: "BetaShares Legg Mason Equity Income ETF",
    },
    RINC: {
      Description: "BetaShares Legg Mason Real Income ETF",
    },
    AUST: {
      Description: "BetaShares Managed Risk AUS Shr ETF",
    },
    WRLD: {
      Description: "BetaShares Managed Risk Global Share ETF",
    },
    NDQ: {
      Description: "BetaShares NASDAQ 100 ETF",
    },
    UMAX: {
      Description: "BetaShares S&P 500 Yield Maximiser ETF",
    },
    ATEC: {
      Description: "BetaShares S&P/ASX Australian Tech ETF",
    },
    GBND: {
      Description: "BetaShares Sstby Ldrs Dvrs Bd ETF Ccy Hd",
    },
    AUDS: {
      Description: "BetaShares Strong Australian Dllr H ETF",
    },
    YANK: {
      Description: "BetaShares Strong US Dollar Hedge ETF",
    },
    USD: {
      Description: "BetaShares US Dollar ETF",
    },
    BBUS: {
      Description: "BetaShares US Eqs Strong Bear H CcyH ETF",
    },
    ECAS: {
      Description: "eInvest Cash Booster ETF",
    },
    ECOR: {
      Description: "eInvest Core Income ETF",
    },
    IMPQ: {
      Description: "eInvest Future Impact Small Caps ETF",
    },
    EIGA: {
      Description: "eInvest Income Generator ETF",
    },
    EMAX: {
      Description: "eInvest Income Maximiser ETF",
    },
    ACDC: {
      Description: "ETFS Battery Tech and Lithium ETF",
    },
    ZUSD: {
      Description: "ETFS Enhanced USD Cash ETF",
    },
    ESTX: {
      Description: "ETFS EURO STOXX 50® ETF",
    },
    FANG: {
      Description: "ETFS FANG+ ETF",
    },
    CORE: {
      Description: "ETFS Global Core Infrastructure ETF",
    },
    TECH: {
      Description: "ETFS Morningstar Global Technology ETF",
    },
    GOLD: {
      Description: "ETFS Physical Gold ETC",
    },
    ETPMPD: {
      Description: "ETFS Physical Palladium ETC",
    },
    ETPMPT: {
      Description: "ETFS Physical Platinum ETC",
    },
    ETPMPM: {
      Description: "ETFS Physical PM Basket ETC",
    },
    ETPMAG: {
      Description: "ETFS Physical Silver ETC",
    },
    NDIA: {
      Description: "ETFS Reliance India Nifty 50 ETF",
    },
    ROBO: {
      Description: "ETFS ROBO Glbl Robotics and Atmtn ETF",
    },
    ZYUS: {
      Description: "ETFS S&P 500 High Yield Low Volatil ETF",
    },
    CURE: {
      Description: "ETFS S&P Biotech ETF",
    },
    ZYAU: {
      Description: "ETFS S&P/ASX 300 High Yield Plus ETF",
    },
    FEMX: {
      Description: "Fidelity Global Emerging Markets ETF",
    },
    INIF: {
      Description: "InvestSMART Australian Equity Income ETF",
    },
    INES: {
      Description: "InvestSMART Ethical Share ETF",
    },
    IAA: {
      Description: "iShares Asia 50 ETF (AU)",
    },
    IZZ: {
      Description: "iShares China Large-Cap ETF (AU)",
    },
    BILL: {
      Description: "iShares Core Cash ETF",
    },
    IAF: {
      Description: "iShares Core Composite Bond ETF",
    },
    ICOR: {
      Description: "iShares Core Corporate Bond ETF",
    },
    IHCB: {
      Description: "iShares Core Global Corp Bd AUDH ETF",
    },
    IHWL: {
      Description: "iShares Core MSCI World All Cap AUDH ETF",
    },
    IWLD: {
      Description: "iShares Core MSCI World All Cap ETF",
    },
    IOZ: {
      Description: "iShares Core S&P/ASX 200 ETF",
    },
    MVOL: {
      Description: "iShares Edge MSCI Australia Mini Vol ETF",
    },
    AUMF: {
      Description: "iShares Edge MSCI Australia Mltfctr ETF",
    },
    WVOL: {
      Description: "iShares Edge MSCI World Minimum Vol ETF",
    },
    WDMF: {
      Description: "iShares Edge MSCI World Multifactor ETF",
    },
    ISEC: {
      Description: "iShares Enhanced Cash ETF",
    },
    IEU: {
      Description: "iShares Europe ETF (AU)",
    },
    IHOO: {
      Description: "iShares Global 100 AUD Hedged ETF",
    },
    IOO: {
      Description: "iShares Global 100 ETF (AU)",
    },
    IXI: {
      Description: "iShares Global Consumer Staples ETF (AU)",
    },
    IXJ: {
      Description: "iShares Global Healthcare ETF (AU)",
    },
    IHHY: {
      Description: "iShares Global High Yield Bond AUDH ETF",
    },
    ILB: {
      Description: "iShares Government Inflation ETF",
    },
    IHEB: {
      Description: "iShares JP Morgan USD EmMkts Bd AUDH ETF",
    },
    IVE: {
      Description: "iShares MSCI EAFE ETF (AU)",
    },
    IEM: {
      Description: "iShares MSCI Emerging Markets ETF (AU)",
    },
    IJP: {
      Description: "iShares MSCI Japan ETF (AU)",
    },
    IKO: {
      Description: "iShares MSCI South Korea ETF (AU)",
    },
    IHVV: {
      Description: "iShares S&P 500 AUD Hedged ETF",
    },
    IVV: {
      Description: "iShares S&P 500 ETF",
    },
    IJH: {
      Description: "iShares S&P Mid-Cap ETF",
    },
    IJR: {
      Description: "iShares S&P Small-Cap ETF",
    },
    ILC: {
      Description: "iShares S&P/ASX 20 ETF",
    },
    IHD: {
      Description: "iShares S&P/ASX Dividend Opps ETF",
    },
    ISO: {
      Description: "iShares S&P/ASX Small Ordinaries ETF",
    },
    IGB: {
      Description: "iShares Treasury ETF",
    },
    IYLD: {
      Description: "iShares Yield Plus ETF",
    },
    KSM: {
      Description: "K2 Australian Small Cap ETF",
    },
    KII: {
      Description: "K2 Global Equities ETF",
    },
    MHG: {
      Description: "Magellan Global Equities Currency H ETF",
    },
    MGE: {
      Description: "Magellan Global Equities ETF",
    },
    MICH: {
      Description: "Magellan Infrastructure Ccy Hdg ETF",
    },
    MKAX: {
      Description: "Montaka Global Extension ETF",
    },
    MOGL: {
      Description: "Montgomery Global Equities ETF",
    },
    MSTR: {
      Description: "Morningstar International Shrs Actv ETF",
    },
    PMGOLD: {
      Description: "Perth Mint Gold ETF",
    },
    Z3RO: {
      Description: "Pinnacle aShares Dynamic Cash ETF",
    },
    SAVE: {
      Description: "Pinnacle aShares Global Dynamic Inc ETF",
    },
    PAXX: {
      Description: "Platinum Asia ETF",
    },
    PIXX: {
      Description: "Platinum International ETF",
    },
    RGB: {
      Description: "Russell Inv Australian Government Bd ETF",
    },
    RARI: {
      Description: "Russell Inv Australian Rspnb Inv ETF",
    },
    RCB: {
      Description: "Russell Inv Australian Select CorpBd ETF",
    },
    RSM: {
      Description: "Russell Inv Australian Semi-Govt Bd ETF",
    },
    RDV: {
      Description: "Russell Inv High Dividend Aus Shrs ETF",
    },
    PAYS: {
      Description: "Schroder Absolute Return Income ETF",
    },
    GROW: {
      Description: "Schroder Real Return ETF",
    },
    SELF: {
      Description: "SelfWealth SMSF Leaders ETF",
    },
    APA: {
      Description: "Smartshares Asia Pacific",
    },
    ASD: {
      Description: "Smartshares Aus Dividend",
    },
    ASF: {
      Description: "Smartshares Aus Financials",
    },
    MZY: {
      Description: "Smartshares Aus Mid Cap",
    },
    ASP: {
      Description: "Smartshares Aus Property",
    },
    ASR: {
      Description: "Smartshares Aus Resources",
    },
    OZY: {
      Description: "Smartshares Aus Top 20",
    },
    BOT: {
      Description: "Smartshares Automation and Robotics ETF",
    },
    EMF: {
      Description: "Smartshares Emerging Markets",
    },
    EMG: {
      Description: "Smartshares Emerging Markets Eqs ESG ETF",
    },
    EUF: {
      Description: "Smartshares Europe",
    },
    EUG: {
      Description: "Smartshares Europe Equities ESG ETF",
    },
    AGG: {
      Description: "Smartshares Global Aggregate Bond ETF",
    },
    GBF: {
      Description: "Smartshares Global Bond",
    },
    ESG: {
      Description: "Smartshares Global Equities ESG ETF",
    },
    LIV: {
      Description: "Smartshares Healthcare Innovation ETF",
    },
    JPN: {
      Description: "Smartshares Japan Equities ESG ETF",
    },
    NZB: {
      Description: "Smartshares NZ Bond",
    },
    NZC: {
      Description: "Smartshares NZ Cash",
    },
    DIV: {
      Description: "Smartshares NZ Dividend",
    },
    MDZ: {
      Description: "Smartshares NZ Mid Cap",
    },
    NPF: {
      Description: "Smartshares NZ Property",
    },
    TNZ: {
      Description: "Smartshares NZ Top 10",
    },
    FNZ: {
      Description: "Smartshares NZ Top 50",
    },
    TWF: {
      Description: "Smartshares Total World",
    },
    USF: {
      Description: "Smartshares US 500",
    },
    USA: {
      Description: "Smartshares US Equities ESG ETF",
    },
    USG: {
      Description: "Smartshares US Large Growth",
    },
    USV: {
      Description: "Smartshares US Large Value",
    },
    USM: {
      Description: "Smartshares US Mid Cap",
    },
    USS: {
      Description: "Smartshares US Small Cap",
    },
    DJRE: {
      Description: "SPDR® Dow Jones Global Real Estate ETF",
    },
    SYI: {
      Description: "SPDR® MSCI Australia Sel Hi Div Yld ETF",
    },
    QMIX: {
      Description: "SPDR® MSCI World Quality Mix ETF",
    },
    SPY: {
      Description: "SPDR® S&P 500 ETF",
    },
    WEMG: {
      Description: "SPDR® S&P Emerging Markets ETF",
    },
    WDIV: {
      Description: "SPDR® S&P Global Dividend ETF",
    },
    WXOZ: {
      Description: "SPDR® S&P World ex Australia ETF",
    },
    WXHG: {
      Description: "SPDR® S&P World ex Australia(Hedged) ETF",
    },
    STW: {
      Description: "SPDR® S&P/ASX 200 ETF",
    },
    OZF: {
      Description: "SPDR® S&P/ASX 200 Fincls EX A-REIT ETF",
    },
    SLF: {
      Description: "SPDR® S&P/ASX 200 Listed Property ETF",
    },
    OZR: {
      Description: "SPDR® S&P/ASX 200 Resources ETF",
    },
    SFY: {
      Description: "SPDR® S&P/ASX 50 ETF",
    },
    BOND: {
      Description: "SPDR® S&P/ASX Australian Bond ETF",
    },
    GOVT: {
      Description: "SPDR® S&P/ASX Australian Govt Bd ETF",
    },
    SSO: {
      Description: "SPDR® S&P/ASX Small Ordinaries ETF",
    },
    SWTZ: {
      Description: "Switzer Dividend Growth ETF",
    },
    EBND: {
      Description: "VanEck Emerging Income Opps Actv ETF",
    },
    MVB: {
      Description: "VanEck Vectors Australian Banks ETF",
    },
    PLUS: {
      Description: "VanEck Vectors Australian Corp Bd+ ETF",
    },
    MVW: {
      Description: "VanEck Vectors Australian Equal Wt ETF",
    },
    FLOT: {
      Description: "VanEck Vectors Australian Fltng Rt ETF",
    },
    MVA: {
      Description: "VanEck Vectors Australian Property ETF",
    },
    MVR: {
      Description: "VanEck Vectors Australian Resources ETF",
    },
    SUBD: {
      Description: "VanEck Vectors Australian Sbdntd Dbt ETF",
    },
    CNEW: {
      Description: "VanEck Vectors China New Economy ETF",
    },
    CETF: {
      Description: "VanEck Vectors FTSE China A50 ETF",
    },
    IFRA: {
      Description: "VanEck Vectors FTSE Glbl Infras(Hdg)ETF",
    },
    REIT: {
      Description: "VanEck Vectors FTSE Intl Prop Hdg ETF",
    },
    GDX: {
      Description: "VanEck Vectors Gold Miners ETF",
    },
    MOAT: {
      Description: "VanEck Vectors Morningstar Wide Moat ETF",
    },
    GRNV: {
      Description: "VanEck Vectors MSCI AUS Sust Eq ETF",
    },
    ESGI: {
      Description: "VanEck Vectors MSCI Intl Sust Eq ETF",
    },
    EMKT: {
      Description: "VanEck Vectors MSCI Mltfac EmMkts Eq ETF",
    },
    QUAL: {
      Description: "VanEck Vectors MSCI Wld ex Aus Qlty ETF",
    },
    QHAL: {
      Description: "VanEck Vectors MSCI Wld ex AUS Qul H ETF",
    },
    MVE: {
      Description: "VanEck Vectors S&P/ASX MidCap ETF",
    },
    MVS: {
      Description: "VanEck Vectors Small Coms Masters ETF",
    },
    VEU: {
      Description: "Vanguard All-World ex-US Shares ETF",
    },
    VACF: {
      Description: "Vanguard Australian Corp Fxd Intr ETF",
    },
    VAF: {
      Description: "Vanguard Australian Fixed Interest ETF",
    },
    VGB: {
      Description: "Vanguard Australian Government Bond ETF",
    },
    VAP: {
      Description: "Vanguard Australian Property Secs ETF",
    },
    VAS: {
      Description: "Vanguard Australian Shares ETF",
    },
    VHY: {
      Description: "Vanguard Australian Shares High Yld ETF",
    },
    VDBA: {
      Description: "Vanguard Diversified Balanced ETF",
    },
    VDCO: {
      Description: "Vanguard Diversified Conservative ETF",
    },
    VDGR: {
      Description: "Vanguard Diversified Growth ETF",
    },
    VDHG: {
      Description: "Vanguard Diversified High Growth ETF",
    },
    VEFI: {
      Description: "Vanguard Etclly Cons Gbl Aggt Bd H ETF",
    },
    VESG: {
      Description: "Vanguard Etclly Cons Intl Shrs ETF",
    },
    VAE: {
      Description: "Vanguard FTSE Asia ex Japan Shrs ETF",
    },
    VGE: {
      Description: "Vanguard FTSE Emerging Markets Shrs ETF",
    },
    VEQ: {
      Description: "Vanguard FTSE Europe Shares ETF",
    },
    VBND: {
      Description: "Vanguard Global Aggregate Bd Hdg ETF",
    },
    VBLD: {
      Description: "Vanguard Global Infrastructure ETF",
    },
    VMIN: {
      Description: "Vanguard Global Minimum Volatil Act ETF",
    },
    VGMF: {
      Description: "Vanguard Global Multi-Factor Active ETF",
    },
    VVLU: {
      Description: "Vanguard Global Value Equity Active ETF",
    },
    VCF: {
      Description: "Vanguard Intl Credit Secs (Hdg) ETF",
    },
    VIF: {
      Description: "Vanguard Intl Fxd Intr (Hdg) ETF",
    },
    VLC: {
      Description: "Vanguard MSCI Australian Large Coms ETF",
    },
    VSO: {
      Description: "Vanguard MSCI Australian Small Coms ETF",
    },
    VISM: {
      Description: "Vanguard MSCI International SC ETF",
    },
    VGAD: {
      Description: "Vanguard MSCI Intl (Hdg) ETF",
    },
    VGS: {
      Description: "Vanguard MSCI Intl ETF",
    },
    VTS: {
      Description: "Vanguard US Total Market Shares ETF",
    },
    WCMQ: {
      Description: "WCM Quality Glbl Gr ETF (Quoted Mgd)",
    },
  };

  var match = ticker in data ? data[ticker].Description : null;

  return match;
}
