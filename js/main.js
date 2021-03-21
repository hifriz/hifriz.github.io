// some functions will be called by section
let all_companies = [{ "Name": "3M Company", "Sector": "Industrials", "Symbol": "MMM" }, { "Name": "A.O. Smith Corp", "Sector": "Industrials", "Symbol": "AOS" }, { "Name": "Abbott Laboratories", "Sector": "Health Care", "Symbol": "ABT" }, { "Name": "AbbVie Inc.", "Sector": "Health Care", "Symbol": "ABBV" }, { "Name": "Abiomed", "Sector": "Health Care", "Symbol": "ABMD" }, { "Name": "Accenture", "Sector": "Information Technology", "Symbol": "ACN" }, { "Name": "Activision Blizzard", "Sector": "Communication Services", "Symbol": "ATVI" }, { "Name": "Adobe Inc.", "Sector": "Information Technology", "Symbol": "ADBE" }, { "Name": "Advance Auto Parts", "Sector": "Consumer Discretionary", "Symbol": "AAP" }, { "Name": "Advanced Micro Devices", "Sector": "Information Technology", "Symbol": "AMD" }, { "Name": "AES Corp", "Sector": "Utilities", "Symbol": "AES" }, { "Name": "Aflac", "Sector": "Financials", "Symbol": "AFL" }, { "Name": "Agilent Technologies", "Sector": "Health Care", "Symbol": "A" }, { "Name": "Air Products & Chemicals", "Sector": "Materials", "Symbol": "APD" }, { "Name": "Akamai Technologies", "Sector": "Information Technology", "Symbol": "AKAM" }, { "Name": "Alaska Air Group", "Sector": "Industrials", "Symbol": "ALK" }, { "Name": "Albemarle Corporation", "Sector": "Materials", "Symbol": "ALB" }, { "Name": "Alexandria Real Estate Equities", "Sector": "Real Estate", "Symbol": "ARE" }, { "Name": "Alexion Pharmaceuticals", "Sector": "Health Care", "Symbol": "ALXN" }, { "Name": "Align Technology", "Sector": "Health Care", "Symbol": "ALGN" }, { "Name": "Allegion", "Sector": "Industrials", "Symbol": "ALLE" }, { "Name": "Alliant Energy", "Sector": "Utilities", "Symbol": "LNT" }, { "Name": "Allstate Corp", "Sector": "Financials", "Symbol": "ALL" }, { "Name": "Alphabet Inc. (Class A)", "Sector": "Communication Services", "Symbol": "GOOGL" }, { "Name": "Alphabet Inc. (Class C)", "Sector": "Communication Services", "Symbol": "GOOG" }, { "Name": "Altria Group Inc", "Sector": "Consumer Staples", "Symbol": "MO" }, { "Name": "Amazon.com Inc.", "Sector": "Consumer Discretionary", "Symbol": "AMZN" }, { "Name": "Amcor", "Sector": "Materials", "Symbol": "AMCR" }, { "Name": "Ameren Corp", "Sector": "Utilities", "Symbol": "AEE" }, { "Name": "American Airlines Group", "Sector": "Industrials", "Symbol": "AAL" }, { "Name": "American Electric Power", "Sector": "Utilities", "Symbol": "AEP" }, { "Name": "American Express", "Sector": "Financials", "Symbol": "AXP" }, { "Name": "American International Group", "Sector": "Financials", "Symbol": "AIG" }, { "Name": "American Tower Corp.", "Sector": "Real Estate", "Symbol": "AMT" }, { "Name": "American Water Works", "Sector": "Utilities", "Symbol": "AWK" }, { "Name": "Ameriprise Financial", "Sector": "Financials", "Symbol": "AMP" }, { "Name": "AmerisourceBergen", "Sector": "Health Care", "Symbol": "ABC" }, { "Name": "Ametek", "Sector": "Industrials", "Symbol": "AME" }, { "Name": "Amgen Inc.", "Sector": "Health Care", "Symbol": "AMGN" }, { "Name": "Amphenol Corp", "Sector": "Information Technology", "Symbol": "APH" }, { "Name": "Analog Devices Inc.", "Sector": "Information Technology", "Symbol": "ADI" }, { "Name": "ANSYS Inc.", "Sector": "Information Technology", "Symbol": "ANSS" }, { "Name": "Anthem", "Sector": "Health Care", "Symbol": "ANTM" }, { "Name": "Aon plc", "Sector": "Financials", "Symbol": "AON" }, { "Name": "APA Corporation", "Sector": "Energy", "Symbol": "APA" }, { "Name": "Apple Inc.", "Sector": "Information Technology", "Symbol": "AAPL" }, { "Name": "Applied Materials Inc.", "Sector": "Information Technology", "Symbol": "AMAT" }, { "Name": "Aptiv PLC", "Sector": "Consumer Discretionary", "Symbol": "APTV" }, { "Name": "Archer-Daniels-Midland Co", "Sector": "Consumer Staples", "Symbol": "ADM" }, { "Name": "Arista Networks", "Sector": "Information Technology", "Symbol": "ANET" }, { "Name": "Arthur J. Gallagher & Co.", "Sector": "Financials", "Symbol": "AJG" }, { "Name": "Assurant", "Sector": "Financials", "Symbol": "AIZ" }, { "Name": "AT&T Inc.", "Sector": "Communication Services", "Symbol": "T" }, { "Name": "Atmos Energy", "Sector": "Utilities", "Symbol": "ATO" }, { "Name": "Autodesk Inc.", "Sector": "Information Technology", "Symbol": "ADSK" }, { "Name": "Automatic Data Processing", "Sector": "Information Technology", "Symbol": "ADP" }, { "Name": "AutoZone Inc", "Sector": "Consumer Discretionary", "Symbol": "AZO" }, { "Name": "AvalonBay Communities", "Sector": "Real Estate", "Symbol": "AVB" }, { "Name": "Avery Dennison Corp", "Sector": "Materials", "Symbol": "AVY" }, { "Name": "Baker Hughes Co", "Sector": "Energy", "Symbol": "BKR" }, { "Name": "Ball Corp", "Sector": "Materials", "Symbol": "BLL" }, { "Name": "Bank of America Corp", "Sector": "Financials", "Symbol": "BAC" }, { "Name": "Baxter International Inc.", "Sector": "Health Care", "Symbol": "BAX" }, { "Name": "Becton Dickinson", "Sector": "Health Care", "Symbol": "BDX" }, { "Name": "Berkshire Hathaway", "Sector": "Financials", "Symbol": "BRKB" }, { "Name": "Best Buy Co. Inc.", "Sector": "Consumer Discretionary", "Symbol": "BBY" }, { "Name": "Bio-Rad Laboratories", "Sector": "Health Care", "Symbol": "BIO" }, { "Name": "Biogen Inc.", "Sector": "Health Care", "Symbol": "BIIB" }, { "Name": "BlackRock", "Sector": "Financials", "Symbol": "BLK" }, { "Name": "Boeing Company", "Sector": "Industrials", "Symbol": "BA" }, { "Name": "Booking Holdings Inc", "Sector": "Consumer Discretionary", "Symbol": "BKNG" }, { "Name": "BorgWarner", "Sector": "Consumer Discretionary", "Symbol": "BWA" }, { "Name": "Boston Properties", "Sector": "Real Estate", "Symbol": "BXP" }, { "Name": "Boston Scientific", "Sector": "Health Care", "Symbol": "BSX" }, { "Name": "Bristol-Myers Squibb", "Sector": "Health Care", "Symbol": "BMY" }, { "Name": "Broadcom Inc.", "Sector": "Information Technology", "Symbol": "AVGO" }, { "Name": "Broadridge Financial Solutions", "Sector": "Information Technology", "Symbol": "BR" }, { "Name": "Brown-Forman Corp.", "Sector": "Consumer Staples", "Symbol": "BFB" }, { "Name": "C. H. Robinson Worldwide", "Sector": "Industrials", "Symbol": "CHRW" }, { "Name": "Cabot Oil & Gas", "Sector": "Energy", "Symbol": "COG" }, { "Name": "Cadence Design Systems", "Sector": "Information Technology", "Symbol": "CDNS" }, { "Name": "Campbell Soup", "Sector": "Consumer Staples", "Symbol": "CPB" }, { "Name": "Capital One Financial", "Sector": "Financials", "Symbol": "COF" }, { "Name": "Cardinal Health Inc.", "Sector": "Health Care", "Symbol": "CAH" }, { "Name": "Carmax Inc", "Sector": "Consumer Discretionary", "Symbol": "KMX" }, { "Name": "Carnival Corp.", "Sector": "Consumer Discretionary", "Symbol": "CCL" }, { "Name": "Carrier Global", "Sector": "Industrials", "Symbol": "CARR" }, { "Name": "Catalent", "Sector": "Health Care", "Symbol": "CTLT" }, { "Name": "Caterpillar Inc.", "Sector": "Industrials", "Symbol": "CAT" }, { "Name": "Cboe Global Markets", "Sector": "Financials", "Symbol": "CBOE" }, { "Name": "CBRE Group", "Sector": "Real Estate", "Symbol": "CBRE" }, { "Name": "CDW", "Sector": "Information Technology", "Symbol": "CDW" }, { "Name": "Celanese", "Sector": "Materials", "Symbol": "CE" }, { "Name": "Centene Corporation", "Sector": "Health Care", "Symbol": "CNC" }, { "Name": "CenterPoint Energy", "Sector": "Utilities", "Symbol": "CNP" }, { "Name": "Cerner", "Sector": "Health Care", "Symbol": "CERN" }, { "Name": "CF Industries Holdings Inc", "Sector": "Materials", "Symbol": "CF" }, { "Name": "Charles Schwab Corporation", "Sector": "Financials", "Symbol": "SCHW" }, { "Name": "Charter Communications", "Sector": "Communication Services", "Symbol": "CHTR" }, { "Name": "Chevron Corp.", "Sector": "Energy", "Symbol": "CVX" }, { "Name": "Chipotle Mexican Grill", "Sector": "Consumer Discretionary", "Symbol": "CMG" }, { "Name": "Chubb Limited", "Sector": "Financials", "Symbol": "CB" }, { "Name": "Church & Dwight", "Sector": "Consumer Staples", "Symbol": "CHD" }, { "Name": "Cigna", "Sector": "Health Care", "Symbol": "CI" }, { "Name": "Cincinnati Financial", "Sector": "Financials", "Symbol": "CINF" }, { "Name": "Cintas Corporation", "Sector": "Industrials", "Symbol": "CTAS" }, { "Name": "Cisco Systems", "Sector": "Information Technology", "Symbol": "CSCO" }, { "Name": "Citigroup Inc.", "Sector": "Financials", "Symbol": "C" }, { "Name": "Citizens Financial Group", "Sector": "Financials", "Symbol": "CFG" }, { "Name": "Citrix Systems", "Sector": "Information Technology", "Symbol": "CTXS" }, { "Name": "CME Group Inc.", "Sector": "Financials", "Symbol": "CME" }, { "Name": "CMS Energy", "Sector": "Utilities", "Symbol": "CMS" }, { "Name": "Coca-Cola Company", "Sector": "Consumer Staples", "Symbol": "KO" }, { "Name": "Cognizant Technology Solutions", "Sector": "Information Technology", "Symbol": "CTSH" }, { "Name": "Colgate-Palmolive", "Sector": "Consumer Staples", "Symbol": "CL" }, { "Name": "Comcast Corp.", "Sector": "Communication Services", "Symbol": "CMCSA" }, { "Name": "Comerica Inc.", "Sector": "Financials", "Symbol": "CMA" }, { "Name": "Conagra Brands", "Sector": "Consumer Staples", "Symbol": "CAG" }, { "Name": "ConocoPhillips", "Sector": "Energy", "Symbol": "COP" }, { "Name": "Consolidated Edison", "Sector": "Utilities", "Symbol": "ED" }, { "Name": "Constellation Brands", "Sector": "Consumer Staples", "Symbol": "STZ" }, { "Name": "Copart Inc", "Sector": "Industrials", "Symbol": "CPRT" }, { "Name": "Corning Inc.", "Sector": "Information Technology", "Symbol": "GLW" }, { "Name": "Corteva", "Sector": "Materials", "Symbol": "CTVA" }, { "Name": "Costco Wholesale Corp.", "Sector": "Consumer Staples", "Symbol": "COST" }, { "Name": "Crown Castle", "Sector": "Real Estate", "Symbol": "CCI" }, { "Name": "CSX Corp.", "Sector": "Industrials", "Symbol": "CSX" }, { "Name": "Cummins Inc.", "Sector": "Industrials", "Symbol": "CMI" }, { "Name": "CVS Health", "Sector": "Health Care", "Symbol": "CVS" }, { "Name": "D. R. Horton", "Sector": "Consumer Discretionary", "Symbol": "DHI" }, { "Name": "Danaher Corp.", "Sector": "Health Care", "Symbol": "DHR" }, { "Name": "Darden Restaurants", "Sector": "Consumer Discretionary", "Symbol": "DRI" }, { "Name": "DaVita Inc.", "Sector": "Health Care", "Symbol": "DVA" }, { "Name": "Deere & Co.", "Sector": "Industrials", "Symbol": "DE" }, { "Name": "Delta Air Lines Inc.", "Sector": "Industrials", "Symbol": "DAL" }, { "Name": "Dentsply Sirona", "Sector": "Health Care", "Symbol": "XRAY" }, { "Name": "Devon Energy", "Sector": "Energy", "Symbol": "DVN" }, { "Name": "DexCom", "Sector": "Health Care", "Symbol": "DXCM" }, { "Name": "Diamondback Energy", "Sector": "Energy", "Symbol": "FANG" }, { "Name": "Digital Realty Trust Inc", "Sector": "Real Estate", "Symbol": "DLR" }, { "Name": "Discover Financial Services", "Sector": "Financials", "Symbol": "DFS" }, { "Name": "Discovery Inc. (Series A)", "Sector": "Communication Services", "Symbol": "DISCA" }, { "Name": "Discovery Inc. (Series C)", "Sector": "Communication Services", "Symbol": "DISCK" }, { "Name": "Dish Network", "Sector": "Communication Services", "Symbol": "DISH" }, { "Name": "Dollar General", "Sector": "Consumer Discretionary", "Symbol": "DG" }, { "Name": "Dollar Tree", "Sector": "Consumer Discretionary", "Symbol": "DLTR" }, { "Name": "Dominion Energy", "Sector": "Utilities", "Symbol": "D" }, { "Name": "Domino's Pizza", "Sector": "Consumer Discretionary", "Symbol": "DPZ" }, { "Name": "Dover Corporation", "Sector": "Industrials", "Symbol": "DOV" }, { "Name": "Dow Inc.", "Sector": "Materials", "Symbol": "DOW" }, { "Name": "DTE Energy Co.", "Sector": "Utilities", "Symbol": "DTE" }, { "Name": "Duke Energy", "Sector": "Utilities", "Symbol": "DUK" }, { "Name": "Duke Realty Corp", "Sector": "Real Estate", "Symbol": "DRE" }, { "Name": "DuPont de Nemours Inc", "Sector": "Materials", "Symbol": "DD" }, { "Name": "DXC Technology", "Sector": "Information Technology", "Symbol": "DXC" }, { "Name": "Eastman Chemical", "Sector": "Materials", "Symbol": "EMN" }, { "Name": "Eaton Corporation", "Sector": "Industrials", "Symbol": "ETN" }, { "Name": "eBay Inc.", "Sector": "Consumer Discretionary", "Symbol": "EBAY" }, { "Name": "Ecolab Inc.", "Sector": "Materials", "Symbol": "ECL" }, { "Name": "Edison Int'l", "Sector": "Utilities", "Symbol": "EIX" }, { "Name": "Edwards Lifesciences", "Sector": "Health Care", "Symbol": "EW" }, { "Name": "Electronic Arts", "Sector": "Communication Services", "Symbol": "EA" }, { "Name": "Emerson Electric Company", "Sector": "Industrials", "Symbol": "EMR" }, { "Name": "Enphase Energy", "Sector": "Information Technology", "Symbol": "ENPH" }, { "Name": "Entergy Corp.", "Sector": "Utilities", "Symbol": "ETR" }, { "Name": "EOG Resources", "Sector": "Energy", "Symbol": "EOG" }, { "Name": "Equifax Inc.", "Sector": "Industrials", "Symbol": "EFX" }, { "Name": "Equinix", "Sector": "Real Estate", "Symbol": "EQIX" }, { "Name": "Equity Residential", "Sector": "Real Estate", "Symbol": "EQR" }, { "Name": "Essex Property Trust Inc.", "Sector": "Real Estate", "Symbol": "ESS" }, { "Name": "Est\u00e9e Lauder Companies", "Sector": "Consumer Staples", "Symbol": "EL" }, { "Name": "Etsy", "Sector": "Consumer Discretionary", "Symbol": "ETSY" }, { "Name": "Everest Re Group Ltd.", "Sector": "Financials", "Symbol": "RE" }, { "Name": "Evergy", "Sector": "Utilities", "Symbol": "EVRG" }, { "Name": "Eversource Energy", "Sector": "Utilities", "Symbol": "ES" }, { "Name": "Exelon Corp.", "Sector": "Utilities", "Symbol": "EXC" }, { "Name": "Expedia Group", "Sector": "Consumer Discretionary", "Symbol": "EXPE" }, { "Name": "Expeditors", "Sector": "Industrials", "Symbol": "EXPD" }, { "Name": "Extra Space Storage", "Sector": "Real Estate", "Symbol": "EXR" }, { "Name": "Exxon Mobil Corp.", "Sector": "Energy", "Symbol": "XOM" }, { "Name": "F5 Networks", "Sector": "Information Technology", "Symbol": "FFIV" }, { "Name": "Facebook Inc.", "Sector": "Communication Services", "Symbol": "FB" }, { "Name": "Fastenal Co", "Sector": "Industrials", "Symbol": "FAST" }, { "Name": "Federal Realty Investment Trust", "Sector": "Real Estate", "Symbol": "FRT" }, { "Name": "FedEx Corporation", "Sector": "Industrials", "Symbol": "FDX" }, { "Name": "Fidelity National Information Services", "Sector": "Information Technology", "Symbol": "FIS" }, { "Name": "Fifth Third Bancorp", "Sector": "Financials", "Symbol": "FITB" }, { "Name": "First Republic Bank", "Sector": "Financials", "Symbol": "FRC" }, { "Name": "FirstEnergy Corp", "Sector": "Utilities", "Symbol": "FE" }, { "Name": "Fiserv Inc", "Sector": "Information Technology", "Symbol": "FISV" }, { "Name": "FleetCor Technologies Inc", "Sector": "Information Technology", "Symbol": "FLT" }, { "Name": "FLIR Systems", "Sector": "Information Technology", "Symbol": "FLIR" }, { "Name": "Flowserve Corporation", "Sector": "Industrials", "Symbol": "FLS" }, { "Name": "FMC Corporation", "Sector": "Materials", "Symbol": "FMC" }, { "Name": "Ford Motor Company", "Sector": "Consumer Discretionary", "Symbol": "F" }, { "Name": "Fortinet", "Sector": "Information Technology", "Symbol": "FTNT" }, { "Name": "Fortive Corp", "Sector": "Industrials", "Symbol": "FTV" }, { "Name": "Fortune Brands Home & Security", "Sector": "Industrials", "Symbol": "FBHS" }, { "Name": "Fox Corporation (Class A)", "Sector": "Communication Services", "Symbol": "FOXA" }, { "Name": "Fox Corporation (Class B)", "Sector": "Communication Services", "Symbol": "FOX" }, { "Name": "Franklin Resources", "Sector": "Financials", "Symbol": "BEN" }, { "Name": "Freeport-McMoRan Inc.", "Sector": "Materials", "Symbol": "FCX" }, { "Name": "Gap Inc.", "Sector": "Consumer Discretionary", "Symbol": "GPS" }, { "Name": "Garmin Ltd.", "Sector": "Consumer Discretionary", "Symbol": "GRMN" }, { "Name": "Gartner Inc", "Sector": "Information Technology", "Symbol": "IT" }, { "Name": "General Dynamics", "Sector": "Industrials", "Symbol": "GD" }, { "Name": "General Electric", "Sector": "Industrials", "Symbol": "GE" }, { "Name": "General Mills", "Sector": "Consumer Staples", "Symbol": "GIS" }, { "Name": "General Motors", "Sector": "Consumer Discretionary", "Symbol": "GM" }, { "Name": "Genuine Parts", "Sector": "Consumer Discretionary", "Symbol": "GPC" }, { "Name": "Gilead Sciences", "Sector": "Health Care", "Symbol": "GILD" }, { "Name": "Global Payments Inc.", "Sector": "Information Technology", "Symbol": "GPN" }, { "Name": "Globe Life Inc.", "Sector": "Financials", "Symbol": "GL" }, { "Name": "Goldman Sachs Group", "Sector": "Financials", "Symbol": "GS" }, { "Name": "Grainger (W.W.) Inc.", "Sector": "Industrials", "Symbol": "GWW" }, { "Name": "Halliburton Co.", "Sector": "Energy", "Symbol": "HAL" }, { "Name": "Hanesbrands Inc", "Sector": "Consumer Discretionary", "Symbol": "HBI" }, { "Name": "Hartford Financial Svc.Gp.", "Sector": "Financials", "Symbol": "HIG" }, { "Name": "Hasbro Inc.", "Sector": "Consumer Discretionary", "Symbol": "HAS" }, { "Name": "HCA Healthcare", "Sector": "Health Care", "Symbol": "HCA" }, { "Name": "Healthpeak Properties", "Sector": "Real Estate", "Symbol": "PEAK" }, { "Name": "Henry Schein", "Sector": "Health Care", "Symbol": "HSIC" }, { "Name": "Hess Corporation", "Sector": "Energy", "Symbol": "HES" }, { "Name": "Hewlett Packard Enterprise", "Sector": "Information Technology", "Symbol": "HPE" }, { "Name": "Hilton Worldwide Holdings Inc", "Sector": "Consumer Discretionary", "Symbol": "HLT" }, { "Name": "HollyFrontier Corp", "Sector": "Energy", "Symbol": "HFC" }, { "Name": "Hologic", "Sector": "Health Care", "Symbol": "HOLX" }, { "Name": "Home Depot", "Sector": "Consumer Discretionary", "Symbol": "HD" }, { "Name": "Honeywell Int'l Inc.", "Sector": "Industrials", "Symbol": "HON" }, { "Name": "Hormel Foods Corp.", "Sector": "Consumer Staples", "Symbol": "HRL" }, { "Name": "Host Hotels & Resorts", "Sector": "Real Estate", "Symbol": "HST" }, { "Name": "Howmet Aerospace", "Sector": "Industrials", "Symbol": "HWM" }, { "Name": "HP Inc.", "Sector": "Information Technology", "Symbol": "HPQ" }, { "Name": "Humana Inc.", "Sector": "Health Care", "Symbol": "HUM" }, { "Name": "Huntington Bancshares", "Sector": "Financials", "Symbol": "HBAN" }, { "Name": "Huntington Ingalls Industries", "Sector": "Industrials", "Symbol": "HII" }, { "Name": "IDEX Corporation", "Sector": "Industrials", "Symbol": "IEX" }, { "Name": "Idexx Laboratories", "Sector": "Health Care", "Symbol": "IDXX" }, { "Name": "IHS Markit", "Sector": "Industrials", "Symbol": "INFO" }, { "Name": "Illinois Tool Works", "Sector": "Industrials", "Symbol": "ITW" }, { "Name": "Illumina Inc", "Sector": "Health Care", "Symbol": "ILMN" }, { "Name": "Incyte", "Sector": "Health Care", "Symbol": "INCY" }, { "Name": "Ingersoll Rand", "Sector": "Industrials", "Symbol": "IR" }, { "Name": "Intel Corp.", "Sector": "Information Technology", "Symbol": "INTC" }, { "Name": "Intercontinental Exchange", "Sector": "Financials", "Symbol": "ICE" }, { "Name": "International Business Machines", "Sector": "Information Technology", "Symbol": "IBM" }, { "Name": "International Flavors & Fragrances", "Sector": "Materials", "Symbol": "IFF" }, { "Name": "International Paper", "Sector": "Materials", "Symbol": "IP" }, { "Name": "Interpublic Group", "Sector": "Communication Services", "Symbol": "IPG" }, { "Name": "Intuit Inc.", "Sector": "Information Technology", "Symbol": "INTU" }, { "Name": "Intuitive Surgical Inc.", "Sector": "Health Care", "Symbol": "ISRG" }, { "Name": "Invesco Ltd.", "Sector": "Financials", "Symbol": "IVZ" }, { "Name": "IPG Photonics Corp.", "Sector": "Information Technology", "Symbol": "IPGP" }, { "Name": "IQVIA Holdings Inc.", "Sector": "Health Care", "Symbol": "IQV" }, { "Name": "Iron Mountain Incorporated", "Sector": "Real Estate", "Symbol": "IRM" }, { "Name": "J. B. Hunt Transport Services", "Sector": "Industrials", "Symbol": "JBHT" }, { "Name": "Jack Henry & Associates", "Sector": "Information Technology", "Symbol": "JKHY" }, { "Name": "Jacobs Engineering Group", "Sector": "Industrials", "Symbol": "J" }, { "Name": "JM Smucker", "Sector": "Consumer Staples", "Symbol": "SJM" }, { "Name": "Johnson & Johnson", "Sector": "Health Care", "Symbol": "JNJ" }, { "Name": "Johnson Controls International", "Sector": "Industrials", "Symbol": "JCI" }, { "Name": "JPMorgan Chase & Co.", "Sector": "Financials", "Symbol": "JPM" }, { "Name": "Juniper Networks", "Sector": "Information Technology", "Symbol": "JNPR" }, { "Name": "Kansas City Southern", "Sector": "Industrials", "Symbol": "KSU" }, { "Name": "Kellogg Co.", "Sector": "Consumer Staples", "Symbol": "K" }, { "Name": "KeyCorp", "Sector": "Financials", "Symbol": "KEY" }, { "Name": "Keysight Technologies", "Sector": "Information Technology", "Symbol": "KEYS" }, { "Name": "Kimberly-Clark", "Sector": "Consumer Staples", "Symbol": "KMB" }, { "Name": "Kimco Realty", "Sector": "Real Estate", "Symbol": "KIM" }, { "Name": "Kinder Morgan", "Sector": "Energy", "Symbol": "KMI" }, { "Name": "KLA Corporation", "Sector": "Information Technology", "Symbol": "KLAC" }, { "Name": "Kraft Heinz Co", "Sector": "Consumer Staples", "Symbol": "KHC" }, { "Name": "Kroger Co.", "Sector": "Consumer Staples", "Symbol": "KR" }, { "Name": "L Brands Inc.", "Sector": "Consumer Discretionary", "Symbol": "LB" }, { "Name": "L3Harris Technologies", "Sector": "Industrials", "Symbol": "LHX" }, { "Name": "Laboratory Corp. of America Holding", "Sector": "Health Care", "Symbol": "LH" }, { "Name": "Lam Research", "Sector": "Information Technology", "Symbol": "LRCX" }, { "Name": "Lamb Weston Holdings Inc", "Sector": "Consumer Staples", "Symbol": "LW" }, { "Name": "Las Vegas Sands", "Sector": "Consumer Discretionary", "Symbol": "LVS" }, { "Name": "Leggett & Platt", "Sector": "Consumer Discretionary", "Symbol": "LEG" }, { "Name": "Leidos Holdings", "Sector": "Information Technology", "Symbol": "LDOS" }, { "Name": "Lennar Corp.", "Sector": "Consumer Discretionary", "Symbol": "LEN" }, { "Name": "Lilly (Eli) & Co.", "Sector": "Health Care", "Symbol": "LLY" }, { "Name": "Lincoln National", "Sector": "Financials", "Symbol": "LNC" }, { "Name": "Linde plc", "Sector": "Materials", "Symbol": "LIN" }, { "Name": "Live Nation Entertainment", "Sector": "Communication Services", "Symbol": "LYV" }, { "Name": "LKQ Corporation", "Sector": "Consumer Discretionary", "Symbol": "LKQ" }, { "Name": "Lockheed Martin Corp.", "Sector": "Industrials", "Symbol": "LMT" }, { "Name": "Loews Corp.", "Sector": "Financials", "Symbol": "L" }, { "Name": "Lowe's Cos.", "Sector": "Consumer Discretionary", "Symbol": "LOW" }, { "Name": "Lumen Technologies", "Sector": "Communication Services", "Symbol": "LUMN" }, { "Name": "LyondellBasell", "Sector": "Materials", "Symbol": "LYB" }, { "Name": "M&T Bank", "Sector": "Financials", "Symbol": "MTB" }, { "Name": "Marathon Oil Corp.", "Sector": "Energy", "Symbol": "MRO" }, { "Name": "Marathon Petroleum", "Sector": "Energy", "Symbol": "MPC" }, { "Name": "MarketAxess", "Sector": "Financials", "Symbol": "MKTX" }, { "Name": "Marriott International", "Sector": "Consumer Discretionary", "Symbol": "MAR" }, { "Name": "Marsh & McLennan", "Sector": "Financials", "Symbol": "MMC" }, { "Name": "Martin Marietta Materials", "Sector": "Materials", "Symbol": "MLM" }, { "Name": "Masco Corp.", "Sector": "Industrials", "Symbol": "MAS" }, { "Name": "Mastercard Inc.", "Sector": "Information Technology", "Symbol": "MA" }, { "Name": "Maxim Integrated Products", "Sector": "Information Technology", "Symbol": "MXIM" }, { "Name": "McCormick & Co.", "Sector": "Consumer Staples", "Symbol": "MKC" }, { "Name": "McDonald's Corp.", "Sector": "Consumer Discretionary", "Symbol": "MCD" }, { "Name": "McKesson Corp.", "Sector": "Health Care", "Symbol": "MCK" }, { "Name": "Medtronic plc", "Sector": "Health Care", "Symbol": "MDT" }, { "Name": "Merck & Co.", "Sector": "Health Care", "Symbol": "MRK" }, { "Name": "MetLife Inc.", "Sector": "Financials", "Symbol": "MET" }, { "Name": "Mettler Toledo", "Sector": "Health Care", "Symbol": "MTD" }, { "Name": "MGM Resorts International", "Sector": "Consumer Discretionary", "Symbol": "MGM" }, { "Name": "Microchip Technology", "Sector": "Information Technology", "Symbol": "MCHP" }, { "Name": "Micron Technology", "Sector": "Information Technology", "Symbol": "MU" }, { "Name": "Microsoft Corp.", "Sector": "Information Technology", "Symbol": "MSFT" }, { "Name": "Mid-America Apartments", "Sector": "Real Estate", "Symbol": "MAA" }, { "Name": "Mohawk Industries", "Sector": "Consumer Discretionary", "Symbol": "MHK" }, { "Name": "Molson Coors Beverage Company", "Sector": "Consumer Staples", "Symbol": "TAP" }, { "Name": "Mondelez International", "Sector": "Consumer Staples", "Symbol": "MDLZ" }, { "Name": "Monolithic Power Systems", "Sector": "Information Technology", "Symbol": "MPWR" }, { "Name": "Monster Beverage", "Sector": "Consumer Staples", "Symbol": "MNST" }, { "Name": "Moody's Corp", "Sector": "Financials", "Symbol": "MCO" }, { "Name": "Morgan Stanley", "Sector": "Financials", "Symbol": "MS" }, { "Name": "Motorola Solutions Inc.", "Sector": "Information Technology", "Symbol": "MSI" }, { "Name": "MSCI Inc", "Sector": "Financials", "Symbol": "MSCI" }, { "Name": "Nasdaq Inc.", "Sector": "Financials", "Symbol": "NDAQ" }, { "Name": "NetApp", "Sector": "Information Technology", "Symbol": "NTAP" }, { "Name": "Netflix Inc.", "Sector": "Communication Services", "Symbol": "NFLX" }, { "Name": "Newell Brands", "Sector": "Consumer Discretionary", "Symbol": "NWL" }, { "Name": "Newmont Corporation", "Sector": "Materials", "Symbol": "NEM" }, { "Name": "News Corp (Class A)", "Sector": "Communication Services", "Symbol": "NWSA" }, { "Name": "News Corp (Class B)", "Sector": "Communication Services", "Symbol": "NWS" }, { "Name": "NextEra Energy", "Sector": "Utilities", "Symbol": "NEE" }, { "Name": "Nielsen Holdings", "Sector": "Industrials", "Symbol": "NLSN" }, { "Name": "Nike Inc.", "Sector": "Consumer Discretionary", "Symbol": "NKE" }, { "Name": "NiSource Inc.", "Sector": "Utilities", "Symbol": "NI" }, { "Name": "Norfolk Southern Corp.", "Sector": "Industrials", "Symbol": "NSC" }, { "Name": "Northern Trust Corp.", "Sector": "Financials", "Symbol": "NTRS" }, { "Name": "Northrop Grumman", "Sector": "Industrials", "Symbol": "NOC" }, { "Name": "NortonLifeLock", "Sector": "Information Technology", "Symbol": "NLOK" }, { "Name": "Norwegian Cruise Line Holdings", "Sector": "Consumer Discretionary", "Symbol": "NCLH" }, { "Name": "NOV Inc.", "Sector": "Energy", "Symbol": "NOV" }, { "Name": "NRG Energy", "Sector": "Utilities", "Symbol": "NRG" }, { "Name": "Nucor Corp.", "Sector": "Materials", "Symbol": "NUE" }, { "Name": "Nvidia Corporation", "Sector": "Information Technology", "Symbol": "NVDA" }, { "Name": "NVR Inc.", "Sector": "Consumer Discretionary", "Symbol": "NVR" }, { "Name": "O'Reilly Automotive", "Sector": "Consumer Discretionary", "Symbol": "ORLY" }, { "Name": "Occidental Petroleum", "Sector": "Energy", "Symbol": "OXY" }, { "Name": "Old Dominion Freight Line", "Sector": "Industrials", "Symbol": "ODFL" }, { "Name": "Omnicom Group", "Sector": "Communication Services", "Symbol": "OMC" }, { "Name": "Oneok", "Sector": "Energy", "Symbol": "OKE" }, { "Name": "Oracle Corp.", "Sector": "Information Technology", "Symbol": "ORCL" }, { "Name": "Otis Worldwide", "Sector": "Industrials", "Symbol": "OTIS" }, { "Name": "Paccar", "Sector": "Industrials", "Symbol": "PCAR" }, { "Name": "Packaging Corporation of America", "Sector": "Materials", "Symbol": "PKG" }, { "Name": "Parker-Hannifin", "Sector": "Industrials", "Symbol": "PH" }, { "Name": "Paychex Inc.", "Sector": "Information Technology", "Symbol": "PAYX" }, { "Name": "Paycom", "Sector": "Information Technology", "Symbol": "PAYC" }, { "Name": "PayPal", "Sector": "Information Technology", "Symbol": "PYPL" }, { "Name": "Pentair plc", "Sector": "Industrials", "Symbol": "PNR" }, { "Name": "People's United Financial", "Sector": "Financials", "Symbol": "PBCT" }, { "Name": "PepsiCo Inc.", "Sector": "Consumer Staples", "Symbol": "PEP" }, { "Name": "PerkinElmer", "Sector": "Health Care", "Symbol": "PKI" }, { "Name": "Perrigo", "Sector": "Health Care", "Symbol": "PRGO" }, { "Name": "Pfizer Inc.", "Sector": "Health Care", "Symbol": "PFE" }, { "Name": "Philip Morris International", "Sector": "Consumer Staples", "Symbol": "PM" }, { "Name": "Phillips 66", "Sector": "Energy", "Symbol": "PSX" }, { "Name": "Pinnacle West Capital", "Sector": "Utilities", "Symbol": "PNW" }, { "Name": "Pioneer Natural Resources", "Sector": "Energy", "Symbol": "PXD" }, { "Name": "PNC Financial Services", "Sector": "Financials", "Symbol": "PNC" }, { "Name": "Pool Corporation", "Sector": "Consumer Discretionary", "Symbol": "POOL" }, { "Name": "PPG Industries", "Sector": "Materials", "Symbol": "PPG" }, { "Name": "PPL Corp.", "Sector": "Utilities", "Symbol": "PPL" }, { "Name": "Principal Financial Group", "Sector": "Financials", "Symbol": "PFG" }, { "Name": "Procter & Gamble", "Sector": "Consumer Staples", "Symbol": "PG" }, { "Name": "Progressive Corp.", "Sector": "Financials", "Symbol": "PGR" }, { "Name": "Prologis", "Sector": "Real Estate", "Symbol": "PLD" }, { "Name": "Prudential Financial", "Sector": "Financials", "Symbol": "PRU" }, { "Name": "Public Service Enterprise Group (PSEG)", "Sector": "Utilities", "Symbol": "PEG" }, { "Name": "Public Storage", "Sector": "Real Estate", "Symbol": "PSA" }, { "Name": "PulteGroup", "Sector": "Consumer Discretionary", "Symbol": "PHM" }, { "Name": "PVH Corp.", "Sector": "Consumer Discretionary", "Symbol": "PVH" }, { "Name": "Qorvo", "Sector": "Information Technology", "Symbol": "QRVO" }, { "Name": "Qualcomm", "Sector": "Information Technology", "Symbol": "QCOM" }, { "Name": "Quanta Services Inc.", "Sector": "Industrials", "Symbol": "PWR" }, { "Name": "Quest Diagnostics", "Sector": "Health Care", "Symbol": "DGX" }, { "Name": "Ralph Lauren Corporation", "Sector": "Consumer Discretionary", "Symbol": "RL" }, { "Name": "Raymond James Financial", "Sector": "Financials", "Symbol": "RJF" }, { "Name": "Raytheon Technologies", "Sector": "Industrials", "Symbol": "RTX" }, { "Name": "Realty Income Corporation", "Sector": "Real Estate", "Symbol": "O" }, { "Name": "Regency Centers Corporation", "Sector": "Real Estate", "Symbol": "REG" }, { "Name": "Regeneron Pharmaceuticals", "Sector": "Health Care", "Symbol": "REGN" }, { "Name": "Regions Financial Corp.", "Sector": "Financials", "Symbol": "RF" }, { "Name": "Republic Services Inc", "Sector": "Industrials", "Symbol": "RSG" }, { "Name": "ResMed", "Sector": "Health Care", "Symbol": "RMD" }, { "Name": "Robert Half International", "Sector": "Industrials", "Symbol": "RHI" }, { "Name": "Rockwell Automation Inc.", "Sector": "Industrials", "Symbol": "ROK" }, { "Name": "Rollins Inc.", "Sector": "Industrials", "Symbol": "ROL" }, { "Name": "Roper Technologies", "Sector": "Industrials", "Symbol": "ROP" }, { "Name": "Ross Stores", "Sector": "Consumer Discretionary", "Symbol": "ROST" }, { "Name": "Royal Caribbean Group", "Sector": "Consumer Discretionary", "Symbol": "RCL" }, { "Name": "S&P Global Inc.", "Sector": "Financials", "Symbol": "SPGI" }, { "Name": "Salesforce.com", "Sector": "Information Technology", "Symbol": "CRM" }, { "Name": "SBA Communications", "Sector": "Real Estate", "Symbol": "SBAC" }, { "Name": "Schlumberger Ltd.", "Sector": "Energy", "Symbol": "SLB" }, { "Name": "Seagate Technology", "Sector": "Information Technology", "Symbol": "STX" }, { "Name": "Sealed Air", "Sector": "Materials", "Symbol": "SEE" }, { "Name": "Sempra Energy", "Sector": "Utilities", "Symbol": "SRE" }, { "Name": "ServiceNow", "Sector": "Information Technology", "Symbol": "NOW" }, { "Name": "Sherwin-Williams", "Sector": "Materials", "Symbol": "SHW" }, { "Name": "Simon Property Group Inc", "Sector": "Real Estate", "Symbol": "SPG" }, { "Name": "Skyworks Solutions", "Sector": "Information Technology", "Symbol": "SWKS" }, { "Name": "SL Green Realty", "Sector": "Real Estate", "Symbol": "SLG" }, { "Name": "Snap-on", "Sector": "Industrials", "Symbol": "SNA" }, { "Name": "Southern Company", "Sector": "Utilities", "Symbol": "SO" }, { "Name": "Southwest Airlines", "Sector": "Industrials", "Symbol": "LUV" }, { "Name": "Stanley Black & Decker", "Sector": "Industrials", "Symbol": "SWK" }, { "Name": "Starbucks Corp.", "Sector": "Consumer Discretionary", "Symbol": "SBUX" }, { "Name": "State Street Corp.", "Sector": "Financials", "Symbol": "STT" }, { "Name": "Steris", "Sector": "Health Care", "Symbol": "STE" }, { "Name": "Stryker Corp.", "Sector": "Health Care", "Symbol": "SYK" }, { "Name": "SVB Financial", "Sector": "Financials", "Symbol": "SIVB" }, { "Name": "Synchrony Financial", "Sector": "Financials", "Symbol": "SYF" }, { "Name": "Synopsys Inc.", "Sector": "Information Technology", "Symbol": "SNPS" }, { "Name": "Sysco Corp.", "Sector": "Consumer Staples", "Symbol": "SYY" }, { "Name": "T-Mobile US", "Sector": "Communication Services", "Symbol": "TMUS" }, { "Name": "T. Rowe Price Group", "Sector": "Financials", "Symbol": "TROW" }, { "Name": "Take-Two Interactive", "Sector": "Communication Services", "Symbol": "TTWO" }, { "Name": "Tapestry Inc.", "Sector": "Consumer Discretionary", "Symbol": "TPR" }, { "Name": "Target Corp.", "Sector": "Consumer Discretionary", "Symbol": "TGT" }, { "Name": "TE Connectivity Ltd.", "Sector": "Information Technology", "Symbol": "TEL" }, { "Name": "Teledyne Technologies", "Sector": "Industrials", "Symbol": "TDY" }, { "Name": "Teleflex", "Sector": "Health Care", "Symbol": "TFX" }, { "Name": "Teradyne", "Sector": "Information Technology", "Symbol": "TER" }, { "Name": "Tesla Inc.", "Sector": "Consumer Discretionary", "Symbol": "TSLA" }, { "Name": "Texas Instruments", "Sector": "Information Technology", "Symbol": "TXN" }, { "Name": "Textron Inc.", "Sector": "Industrials", "Symbol": "TXT" }, { "Name": "The Bank of New York Mellon", "Sector": "Financials", "Symbol": "BK" }, { "Name": "The Clorox Company", "Sector": "Consumer Staples", "Symbol": "CLX" }, { "Name": "The Cooper Companies", "Sector": "Health Care", "Symbol": "COO" }, { "Name": "The Hershey Company", "Sector": "Consumer Staples", "Symbol": "HSY" }, { "Name": "The Mosaic Company", "Sector": "Materials", "Symbol": "MOS" }, { "Name": "The Travelers Companies", "Sector": "Financials", "Symbol": "TRV" }, { "Name": "The Walt Disney Company", "Sector": "Communication Services", "Symbol": "DIS" }, { "Name": "Thermo Fisher Scientific", "Sector": "Health Care", "Symbol": "TMO" }, { "Name": "TJX Companies Inc.", "Sector": "Consumer Discretionary", "Symbol": "TJX" }, { "Name": "Tractor Supply Company", "Sector": "Consumer Discretionary", "Symbol": "TSCO" }, { "Name": "Trane Technologies plc", "Sector": "Industrials", "Symbol": "TT" }, { "Name": "TransDigm Group", "Sector": "Industrials", "Symbol": "TDG" }, { "Name": "Trimble Inc.", "Sector": "Information Technology", "Symbol": "TRMB" }, { "Name": "Truist Financial", "Sector": "Financials", "Symbol": "TFC" }, { "Name": "Twitter Inc.", "Sector": "Communication Services", "Symbol": "TWTR" }, { "Name": "Tyler Technologies", "Sector": "Information Technology", "Symbol": "TYL" }, { "Name": "Tyson Foods", "Sector": "Consumer Staples", "Symbol": "TSN" }, { "Name": "U.S. Bancorp", "Sector": "Financials", "Symbol": "USB" }, { "Name": "UDR Inc.", "Sector": "Real Estate", "Symbol": "UDR" }, { "Name": "Ulta Beauty", "Sector": "Consumer Discretionary", "Symbol": "ULTA" }, { "Name": "Under Armour (Class A)", "Sector": "Consumer Discretionary", "Symbol": "UAA" }, { "Name": "Under Armour (Class C)", "Sector": "Consumer Discretionary", "Symbol": "UA" }, { "Name": "Union Pacific Corp", "Sector": "Industrials", "Symbol": "UNP" }, { "Name": "United Airlines Holdings", "Sector": "Industrials", "Symbol": "UAL" }, { "Name": "United Parcel Service", "Sector": "Industrials", "Symbol": "UPS" }, { "Name": "United Rentals Inc.", "Sector": "Industrials", "Symbol": "URI" }, { "Name": "UnitedHealth Group Inc.", "Sector": "Health Care", "Symbol": "UNH" }, { "Name": "Universal Health Services", "Sector": "Health Care", "Symbol": "UHS" }, { "Name": "Unum Group", "Sector": "Financials", "Symbol": "UNM" }, { "Name": "Valero Energy", "Sector": "Energy", "Symbol": "VLO" }, { "Name": "Varian Medical Systems", "Sector": "Health Care", "Symbol": "VAR" }, { "Name": "Ventas Inc", "Sector": "Real Estate", "Symbol": "VTR" }, { "Name": "Verisign Inc.", "Sector": "Information Technology", "Symbol": "VRSN" }, { "Name": "Verisk Analytics", "Sector": "Industrials", "Symbol": "VRSK" }, { "Name": "Verizon Communications", "Sector": "Communication Services", "Symbol": "VZ" }, { "Name": "Vertex Pharmaceuticals Inc", "Sector": "Health Care", "Symbol": "VRTX" }, { "Name": "VF Corporation", "Sector": "Consumer Discretionary", "Symbol": "VFC" }, { "Name": "ViacomCBS", "Sector": "Communication Services", "Symbol": "VIAC" }, { "Name": "Viatris", "Sector": "Health Care", "Symbol": "VTRS" }, { "Name": "Visa Inc.", "Sector": "Information Technology", "Symbol": "V" }, { "Name": "Vontier", "Sector": "Information Technology", "Symbol": "VNT" }, { "Name": "Vornado Realty Trust", "Sector": "Real Estate", "Symbol": "VNO" }, { "Name": "Vulcan Materials", "Sector": "Materials", "Symbol": "VMC" }, { "Name": "W. R. Berkley Corporation", "Sector": "Financials", "Symbol": "WRB" }, { "Name": "Walgreens Boots Alliance", "Sector": "Consumer Staples", "Symbol": "WBA" }, { "Name": "Walmart", "Sector": "Consumer Staples", "Symbol": "WMT" }, { "Name": "Waste Management Inc.", "Sector": "Industrials", "Symbol": "WM" }, { "Name": "Waters Corporation", "Sector": "Health Care", "Symbol": "WAT" }, { "Name": "WEC Energy Group", "Sector": "Utilities", "Symbol": "WEC" }, { "Name": "Wells Fargo", "Sector": "Financials", "Symbol": "WFC" }, { "Name": "Welltower Inc.", "Sector": "Real Estate", "Symbol": "WELL" }, { "Name": "West Pharmaceutical Services", "Sector": "Health Care", "Symbol": "WST" }, { "Name": "Western Digital", "Sector": "Information Technology", "Symbol": "WDC" }, { "Name": "Western Union Co", "Sector": "Information Technology", "Symbol": "WU" }, { "Name": "Westinghouse Air Brake Technologies Corp", "Sector": "Industrials", "Symbol": "WAB" }, { "Name": "WestRock", "Sector": "Materials", "Symbol": "WRK" }, { "Name": "Weyerhaeuser", "Sector": "Real Estate", "Symbol": "WY" }, { "Name": "Whirlpool Corp.", "Sector": "Consumer Discretionary", "Symbol": "WHR" }, { "Name": "Williams Companies", "Sector": "Energy", "Symbol": "WMB" }, { "Name": "Willis Towers Watson", "Sector": "Financials", "Symbol": "WLTW" }, { "Name": "Wynn Resorts Ltd", "Sector": "Consumer Discretionary", "Symbol": "WYNN" }, { "Name": "Xcel Energy Inc", "Sector": "Utilities", "Symbol": "XEL" }, { "Name": "Xerox", "Sector": "Information Technology", "Symbol": "XRX" }, { "Name": "Xilinx", "Sector": "Information Technology", "Symbol": "XLNX" }, { "Name": "Xylem Inc.", "Sector": "Industrials", "Symbol": "XYL" }, { "Name": "Yum! Brands Inc", "Sector": "Consumer Discretionary", "Symbol": "YUM" }, { "Name": "Zebra Technologies", "Sector": "Information Technology", "Symbol": "ZBRA" }, { "Name": "Zimmer Biomet", "Sector": "Health Care", "Symbol": "ZBH" }, { "Name": "Zions Bancorp", "Sector": "Financials", "Symbol": "ZION" }, { "Name": "Zoetis", "Sector": "Health Care", "Symbol": "ZTS" }];

// list of selected stocks
let selectedStocks = [];

// selected date
let date = "2019-01-01";

// range min and max
let overiewRangeMin = 0;
let overiewRangeMax = 0;

function creatingMenu(companies) {
    let list = document.getElementById("stockList");
    companies.forEach(function(element) {
        var item = element["Name"] + " -- " + element["Symbol"];
        var button = document.createElement("button");
        button.innerHTML = item;
        button.className = "stock";
        button.onclick = function() { addToList(item) };
        button.style.display = "none";
        list.appendChild(button);
    });
};

// clean menu of stocks after the search
function cleanMenu() {
    let inputElements = document.getElementsByClassName("stock");
    for (i = 0; i < inputElements.length; i++) {
        inputElements[i].style.display = "none";
    };
};

// add name to list
function addToList(stockName) {
    if (selectedStocks.length == 10) {
        alert("You reached maximum capacity.");
        cleanMenu();
    } else {
        selectedStocks.push(stockName);
        selectedStocks = [...new Set(selectedStocks)];
        cleanMenu();
    }

    updateSelectedStocks();
};

// remove name from list
function removeFromList(stockName) {
    let index = selectedStocks.indexOf(stockName);
    selectedStocks.splice(index, 1);

    updateSelectedStocks();
};

// search for stocks
function searchStocks() {
    let inputElement = document.getElementsByClassName("stock");
    let searchQuery = document.getElementById("searchBar");
    let filter = searchQuery.value.toUpperCase();

    for (i = 0; i < inputElement.length; i++) {
        let searchElement = inputElement[i].innerHTML.toUpperCase();
        if (searchElement.indexOf(filter) > -1) {
            inputElement[i].style.display = "";
        } else {
            inputElement[i].style.display = "none";
        };
    };
    if (searchQuery.value.length == 0) {
        document.getElementById("stockList").style.display = "none";
    } else {
        document.getElementById("stockList").style.display = "";
    };
};

// update selected stocks section
function updateSelectedStocks() {
    let addedStockSection = document.getElementById('selected-assets');
    addedStockSection.innerHTML = "&nbsp;";
    selectedStocks.forEach(
        function(element) {
            let addedstock = document.createElement("div");
            let cancelButton = document.createElement("button");
            cancelButton.innerText = 'x';
            cancelButton.className = "cancel-box";
            cancelButton.onclick = function() { removeFromList(element) };
            addedstock.innerText = element.split(" -- ")[1];
            addedstock.className = "added-stock";

            addedstock.appendChild(cancelButton);
            addedStockSection.appendChild(addedstock);

        }
    );
};


// show sort criteria
let arrowDown = true;

function showSortCriteria() {
    let arrow = document.getElementById("arrow-direction");
    document.getElementById("sort-content").classList.toggle("show");

    if (arrowDown) {
        arrow.className = "arrow up";
        arrowDown = false;
    } else {
        arrow.className = "arrow down";
        arrowDown = true;
    }
};

// remove the sort menu if we click on the screen 
window.onclick = function(event) {
    if (!event.target.matches('.sortBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                let arrow = document.getElementById("arrow-direction");
                arrow.className = "arrow down";
                arrowDown = true;
            }
        }
    }
}

// when we choose the sort criteria
function sortStocks(criteria) {
    console.log(criteria);
};

// filter the date
function dateFilter(e) {
    let innerDate = e.target.value;
    let splitDate = innerDate.split("-");
    let year = splitDate[0];
    let month = splitDate[1];
    let day = splitDate[2];

    // check the validation of the date
    let validation = (2021 > year) && (year > 2016) && (13 > month) && (month > 01) && (31 > day) && (day > 01);
    if (validation) {
        date = innerDate;
        viewOverview(date, all_companies);
    };

};

// view overview
function viewOverview(date, companies) {
    let mainPanel = document.getElementById('main-panel');
    companies.forEach(
        function(element) {
            let stockViz = document.createElement("div");
            let stockVizText = document.createElement("div");
            stockVizText.className = "stockVizText";
            stockVizText.innerText = element["Name"];
            stockVizText.id = element["Symbol"] + '-text';
            stockViz.id = element["Symbol"];
            stockViz.className = "stockViz";
            stockViz.onclick = function() { addToList(element["Name"] + " -- " + element["Symbol"]) };

            stockViz.appendChild(stockVizText);
            mainPanel.appendChild(stockViz);
        }
    );
};

// draw overview
function drawOverview(date, companies) {
    let items = document.getElementsByClassName("stockViz");
    for (i = 0; i < items.length; i++) {


        // this data is sample data that is generated for showing application of our viz
        let data = [Array.from({ length: 100 }, () => Math.floor(Math.random() * 5 - 2.5))];

        // Set some base properties.
        // Some come from an options object
        // pass when `Matrix` is called.
        const margin = { top: 0, right: 0, bottom: 0, left: 0 },
            width = '100%',
            height = "100%",
            container = '#' + items[i].id,
            startColor = "#b30000",
            middleColor = "#ffffff",
            endColor = "#00b300";
        // empty the container
        // items[i].innerText = '';

        // Find our max and min values
        const maxValue = d3.max(data, layer => {
            return d3.max(layer, d => {
                return d
            })
        })

        // set overview max value
        if (maxValue > overiewRangeMax) { overiewRangeMax = maxValue };
        const minValue = d3.min(data, layer => {
            return d3.min(layer, d => {
                return d
            })
        })

        // set overview min value
        if (minValue < overiewRangeMin) { overiewRangeMin = minValue };

        const numrows = data.length
            // assume all subarrays have same length
        const numcols = data[0].length

        // Create the SVG container
        const svg = d3
            .select(container)
            .append("svg")
            .attr("id", container + i)
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(0,0)")

        let current_box = document.getElementById(container + i);
        const height_num = current_box.clientHeight,
            width_num = current_box.clientWidth;
        // Add a background to the SVG
        const background = svg
            .append("rect")
            .style("stroke", "black")
            .attr("width", width)
            .attr("height", height)

        // Build some scales for us to use
        const x = d3.scale
            .ordinal()
            .domain(d3.range(numcols))
            .rangeBands([0, width_num])

        const y = d3.scale
            .ordinal()
            .domain(d3.range(numrows))
            .rangeBands([0, height_num])

        // This scale in particular will
        // scale our colors from the start
        // color to the end color.
        const colorMap = d3.scale
            .linear()
            .domain([minValue, 0.5 * (minValue + maxValue), maxValue])
            .range([startColor, middleColor, endColor])

        // Generate rows and columns and add
        // color fills.
        const row = svg
            .selectAll(".row")
            .data(data)
            .enter()
            .append("g")
            .attr("class", "row")
            .attr("transform", (d, i) => {
                return "translate(0," + y(i) + ")"
            })

        const cell = row
            .selectAll(".cell")
            .data(d => {
                return d
            })
            .enter()
            .append("g")
            .attr("class", "cell")
            .attr("transform", (d, i) => {
                return "translate(" + x(i) + ", 0)"
            })

        cell
            .append("rect")
            .attr("width", x.rangeBand() - 0.3)
            .attr("height", y.rangeBand() - 0.3)

        row
            .selectAll(".cell")
            .data((d, i) => {
                return data[i]
            })
            .style("fill", colorMap)
    };

};

// draw legend (id, beginRange, endRange, beginColor, endColor)
function drawLegend(containerId) {

    var svgWidth = '100%',
        svgHeight = '50%',
        x1 = '0%',
        barWidth = '20%',
        y1 = '50%',
        barHeight = '50%',
        numberSaturation = 200;

    var idGradient = 'legendGradient';

    var svgForLegendStuff = d3.select('#' + containerId).append("svg")
        .attr("id", "legend")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    //create the empty gradient that we're going to populate later
    svgForLegendStuff.append("g")
        .append("defs")
        .append("linearGradient")
        .attr("id", idGradient)
        .attr("x1", "0%")
        .attr("x2", "0%")
        .attr("y1", "100%")
        .attr("y2", "0%"); // x1=0, x2=100%, y1=y2 results in a horizontal gradient
    // it would have been vertical if x1=x2, y1=0, y2=100%
    // See 
    //      http://www.w3.org/TR/SVG/pservers.html#LinearGradients
    // for more details and fancier things you can do
    //create the bar for the legend to go into
    // the "fill" attribute hooks the gradient up to this rect

    svgForLegendStuff.append("rect")
        .attr("fill", "url(#" + idGradient + ")")
        .attr("x", x1)
        .attr("y", y1)
        .attr("width", barWidth)
        .attr("height", barHeight)
        .attr("rx", 2) //rounded corners, of course!
        .attr("ry", 2);

    // finding the pixel number of the rectangle
    let current_box = document.getElementById("legend");
    barHeight = current_box.clientHeight;
    barWidth = current_box.clientWidth;
    y1 = barHeight / 2;
    x1 = barWidth / 4.3;

    //add text on either side of the bar

    svgForLegendStuff.append("text")
        .attr("font-size", "1vw")
        .attr("font-family", "Oswald")
        .attr("class", "legendText")
        .attr("text-anchor", "left")
        .attr("x", x1)
        .attr("y", 2 * y1)
        .attr("dy", 0)
        .text(overiewRangeMin + "%");

    svgForLegendStuff.append("text")
        .attr("font-size", "1vw")
        .attr("font-family", "Oswald")
        .attr("class", "legendText")
        .attr("text-anchor", "left")
        .attr("x", x1)
        .attr("y", y1 + 0.08 * y1)
        .attr("dy", 0)
        .text("+" + overiewRangeMax + "%");


    //we go from a somewhat transparent blue/green (hue = 160º, opacity = 0.3) to a fully opaque reddish (hue = 0º, opacity = 1)
    var hueStart = 0,
        hueEnd = 120;
    var opacityStart = 1.0,
        opacityEnd = 0;

    var saturationStart = 100,
        saturationEnd = 0;
    var theHue, rgbString, opacity, p, theSat;

    var deltaPercent = 1 / (numberSaturation);
    var deltaSat = (saturationEnd - saturationStart) / (numberSaturation / 2);
    var deltaOpacity = (opacityEnd - opacityStart) / (numberSaturation / 2);

    //kind of out of order, but set up the data here 
    var theData = [];

    // we are going through the HSL color space from dark red to dark green.
    for (var i = 1; i <= numberSaturation; i++) {
        if (i <= numberSaturation / 2) {
            theHue = hueStart;
            theSat = saturationStart + deltaSat * i;
            //the second parameter, set to 1 here, is the saturation
            // the third parameter is "lightness"    
            rgbString = d3.hsl(theHue, theSat, 0.35).toString();
            opacity = opacityStart + deltaOpacity * i;
            p = 0 + deltaPercent * i;
        } else {
            theHue = hueEnd;
            theSat = theSat - deltaSat * (i - (numberSaturation / 2));
            //the second parameter, set to 1 here, is the saturation
            // the third parameter is "lightness"    
            rgbString = d3.hsl(theHue, theSat, 0.35).toString();
            opacity = opacityEnd - deltaOpacity * (i - (numberSaturation / 2));
            p = 0 + deltaPercent * i;
        };

        theData.push({ "rgb": rgbString, "opacity": opacity, "percent": p });
    }

    //now the d3 magic (imo) ...
    var stops = d3.select('#' + idGradient).selectAll('stop')
        .data(theData);

    stops.enter().append('stop');
    stops.attr('offset', function(d) {
            return d.percent;
        })
        .attr('stop-color', function(d) {
            return d.rgb;
        })
        .attr('stop-opacity', function(d) {
            return d.opacity;
        });

};

// view details
function viewDetails(selectedStocks, date) {

};

// run the app
creatingMenu(all_companies);
// run the overview on default date 
viewOverview(date, all_companies);
drawOverview(date, all_companies);
// run the drawLegend with its function for id = "overview-legend"
drawLegend("overview-legend");