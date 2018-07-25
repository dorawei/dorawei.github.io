var Proxy4 = (function(){
	/* comment global below is for jsLint to avoid spurios warnings */
	/*global isInNet, myIpAddress, isPlainHostName, localHostOrDomainIs, dnsDomainIs, isResolvable, dnsResolve, alert */
	//////////////////////////////////////////////////////
	// Change Control
	//
	// Version:	3.58
	// Date:	09-Jun-2018
	// 	
	//   Please see Release information in file - http://wtd.ten.thomsonreuters.com/proxyreleasefile.txt
	//   Please direct all inquiries to the Global Service Desk
	//
	//	*** SEE README! FILE BEFORE MAKING CHANGES ***
	//
	//////////////////////////////////////////////////////
	var	HPGBC1 = "PROXY 10.86.33.20:8080; PROXY 10.86.33.21:8080";
	var	HPGBC2 = "PROXY 10.86.33.21:8080; PROXY 10.86.33.20:8080";
	var	HYDBC1 = "PROXY 10.23.27.130:8080; PROXY 10.23.27.131:8080";
	var	HYDBC2 = "PROXY 10.23.27.131:8080; PROXY 10.23.27.130:8080";
	var	DTCBC1 = "PROXY 10.23.28.130:8080; PROXY 10.23.28.131:8080";
	var	DTCBC2 = "PROXY 10.23.28.131:8080; PROXY 10.23.28.130:8080";
	var	UK1BC1 = "PROXY 10.23.29.130:8080; PROXY 10.23.29.131:8080";
	var	UK1BC2 = "PROXY 10.23.29.131:8080; PROXY 10.23.29.130:8080";
	var	STCBC1 = "PROXY 10.23.30.130:8080; PROXY 10.23.30.131:8080";
	var	STCBC2 = "PROXY 10.23.30.131:8080; PROXY 10.23.30.130:8080";
	var	HDCBC1 = "PROXY 10.23.32.130:8080; PROXY 10.23.32.131:8080";
	var	HDCBC2 = "PROXY 10.23.32.131:8080; PROXY 10.23.32.130:8080";
	var	HKBC1 = "PROXY 10.23.31.131:8080; PROXY 10.23.30.131:8080";
	var	HKBC2 = "PROXY 10.23.31.131:8080; PROXY 10.23.30.130:8080";
	var	EAGBC1 = "PROXY 10.213.0.66:8080; PROXY 10.213.0.67:8080";
	var	EAGBC2 = "PROXY 10.213.0.67:8080; PROXY 10.213.0.66:8080";
	var	LONBC1 = "PROXY 10.1.56.11:80; PROXY 10.1.56.19:80";
	var	LONBC2 = "PROXY 10.1.56.19:80; PROXY 10.1.56.11:80";
	var	SINBC1 = "PROXY 10.40.14.55:8080; PROXY 10.40.14.56:8080";
	var	SINBC2 = "PROXY 10.40.14.56:8080; PROXY 10.40.14.55:8080";
	var	TSQBC1 = "PROXY 10.87.255.36:8080; PROXY 10.87.255.37:8080";
	var	TSQBC2 = "PROXY 10.87.255.37:8080; PROXY 10.87.255.36:8080";
	var	BAABC1 = "PROXY 10.116.198.130:8080; PROXY 10.116.198.131:8080";
	var	BAABC2 = "PROXY 10.116.198.131:8080; PROXY 10.116.198.130:8080";
	var	BSABC1 = "PROXY 10.116.193.25:8080; PROXY 10.116.193.26:8080";
	var	BSABC2 = "PROXY 10.116.193.26:8080; PROXY 10.116.193.25:8080";
	var	CARBC1 = "PROXY 10.192.4.61:8080; PROXY 10.192.4.62:8080";
	var	CARBC2 = "PROXY 10.192.4.62:8080; PROXY 10.192.4.61:8080";
	var	BEIBC1 = "PROXY 10.35.33.10:80; PROXY 10.35.33.11:80";
	var	BEIBC2 = "PROXY 10.35.33.11:80; PROXY 10.35.33.10:80";
	var	BEIBC3 = "PROXY 10.35.2.21:8080";
	var	BLTBC1 = "PROXY 10.23.26.130:8080; PROXY 10.23.26.131:8080";
	var	BLTBC2 = "PROXY 10.23.26.131:8080; PROXY 10.23.26.130:8080";
	var	BRAEDT1 = "PROXY 10.78.89.15:80; PROXY 10.78.89.16:80";
	var	BRAEDT2 = "PROXY 10.78.89.16:80; PROXY 10.78.89.15:80";
	//var	SYDBC1 = "PROXY 10.33.4.132:8080; PROXY 10.33.4.132:8080";
	//var	SYDBC2 = "PROXY 10.33.4.132:8080; PROXY 10.33.4.132:8080";
	//var	SYDBC1 = "PROXY 10.23.30.130:8080; PROXY 10.23.30.131:8080"; //singapore-1
	//var	SYDBC2 = "PROXY 10.23.31.131:8080; PROXY 10.23.31.130:8080"; //Hongkong-2
	//var	DUBBC1 = "PROXY 10.3.81.250:8080; PROXY 10.3.81.251:8080";
	//var	DUBBC2 = "PROXY 10.3.81.251:8080; PROXY 10.3.81.250:8080";
	var	RADBC1 = "PROXY 10.100.40.38:80; PROXY 10.100.40.47:80";
	var	RADBC2 = "PROXY 10.100.40.47:80; PROXY 10.100.40.38:80";
	var	TORPX1 = "PROXY 10.218.187.143:8080; PROXY 10.218.187.194:8080";
	var	TORPX2 = "PROXY 10.218.187.194:8080; PROXY 10.218.187.143:8080";
	//////////////////////////////////////////////////////
	var debug_url;
	function debug_alert( msg )
	{
		var DEBUG = false;
		var pattern = /\.(gif|css|jpg|jpeg|png|js)$/;
		if( DEBUG &&
			!pattern.test( debug_url ) ) {
			alert( msg );
		}
	}
	//////////////////////////////////////////////////////
	function loadBalance (VIP1,VIP2)
	{
		//finding the 4th octect 
		var MyIP_full = myIpAddress();
		var MyIP = MyIP_full.split(".");
		var myseg = parseInt(MyIP[3]);
		var moduloremainder = myseg % 2;
		// Check 4th octect even or odd. If odd, assign VIP1. Otherwise, assign VIP2.
		if (moduloremainder == 0) { proxy = VIP1   }
		else {   proxy = VIP2  }
		return proxy;	
	}
	//////////////////////////////////////////////////////
	function getClientNetworkSegment( ip )
	{
		if( isInNet( ip, "10.2.0.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.2.4.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.2.8.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.2.18.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.2.26.0", "255.255.254.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.2.28.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.2.31.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.2.32.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.2.64.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.2.101.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.2.132.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.20.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.24.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.32.0", "255.255.224.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.3.52.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.80.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.85.64", "255.255.255.192" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.3.85.128", "255.255.255.128" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.3.85.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.96.0", "255.255.252.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.3.104.0", "255.255.254.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.3.112.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.112.0", "255.255.252.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.3.116.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.118.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.123.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.132.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.3.134.0", "255.255.255.0" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.3.138.32", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.155.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.3.157.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.3.168.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.4.130.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.4.136.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.4.205.0", "255.255.255.0" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.4.132.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
	//	if( isInNet( ip, "10.4.137.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
	//	if( isInNet( ip, "10.4.139.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.5.209.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.5.212.40", "255.255.255.248" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.5.212.48", "255.255.255.240" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.5.212.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.6.0.64", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.6.160.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.6.192.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.0.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.8.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.14.0", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.14.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.15.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.18.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.21.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.22.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.24.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.28.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.0.0", "255.255.224.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.7.40.0", "255.255.252.0") ) { return "transparent"; }	
		if( isInNet( ip, "10.7.44.0", "255.255.255.0") ) { return "transparent"; }
		if( isInNet( ip, "10.7.48.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.50.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.53.96", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.53.128", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.53.160", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.53.192", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.53.208", "255.255.255.248" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.7.58.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.96.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.100.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.103.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.104.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.106.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.7.108.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.8.34.0", "255.255.254.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.8.36.0", "255.255.252.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.8.40.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.8.44.0", "255.255.254.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.8.46.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.8.48.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.8.52.0", "255.255.252.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.8.56.0", "255.255.254.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.8.58.0", "255.255.254.0" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.8.60.0", "255.255.252.0" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.8.64.0", "255.255.252.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.9.192.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.9.224.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.130.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.136.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.139.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.140.0", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.140.16", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.140.24", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.142.192", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.144.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.151.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.152.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.154.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.10.156.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.159.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.159.128", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.159.144", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.160.0", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.160.32", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.160.48", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.160.96", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.167.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.166.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.177.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.10.200.0", "255.255.252.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.12.1.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.12.5.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.12.6.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.12.8.0", "255.255.255.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.12.9.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.12.0.0", "255.255.128.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.12.128.0", "255.255.128.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.13.116.0", "255.255.252.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.13.120.0", "255.255.252.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.13.124.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.14.32.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.14.128.0", "255.255.128.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.2.224", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.3.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.4.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.8.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.12.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.14.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.16.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.20.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.21.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.22.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.25.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.29.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.240.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.244.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.15.51.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.3.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.13.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.14.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.16.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.23.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.28.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.30.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.32.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.41.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.16.45.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.22.61.192", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.22.228.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.10.0", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.14.0", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.14.16", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.14.96", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.14.192", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.14.224", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.15.32", "255.255.255.240" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.23.15.192", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.15.240", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.16.160", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.17.0", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.17.96", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.18.0", "255.255.255.240" ) ) { return "transparent"; }	//Taipei
		if( isInNet( ip, "10.23.18.64", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.18.80", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.18.128", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.18.176", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.58.0", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.72.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.73.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.76.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.78.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.78.128", "255.255.255.192" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.79.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.89.0", "255.255.255.128" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.90.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.90.0", "255.255.254.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.93.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.93.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.94.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.94.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.95.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.95.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.96.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.97.32", "255.255.255.224" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.97.0", "255.255.255.192" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.97.64", "255.255.255.224" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.97.128", "255.255.255.224" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.97.160", "255.255.255.240" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.97.176", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.97.192", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.97.240", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.97.224", "255.255.255.224" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.98.0", "255.255.255.240" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.98.16", "255.255.255.240" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.98.32", "255.255.255.224" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.98.64", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.98.96", "255.255.255.224" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.98.128", "255.255.255.224" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.98.160", "255.255.255.224" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.98.192", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.98.208", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.98.224", "255.255.255.240" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.98.240", "255.255.255.240" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.99.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.100.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.100.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.100.192", "255.255.255.192" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.101.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.103.0", "255.255.255.192" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.105.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.108.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.109.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.109.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.109.192", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.109.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.110.0", "255.255.255.128" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.23.110.128", "255.255.255.128" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.111.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.112.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.113.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.113.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.113.192", "255.255.255.192" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.114.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.115.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.120.0", "255.255.255.128" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.23.120.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.120.192", "255.255.255.192" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.121.32", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.121.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.121.64", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.121.96", "255.255.255.224" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.121.128", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.121.160", "255.255.255.224" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.121.192", "255.255.255.224" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.121.224", "255.255.255.224" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.122.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.123.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.123.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.124.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.125.32", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.125.64", "255.255.255.192" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.23.125.128", "255.255.255.224" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.125.160", "255.255.255.224" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.125.192", "255.255.255.224" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.126.32", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.126.64", "255.255.255.192" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.23.128.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.23.144.0", "255.255.240.0" ) ) { return "bangalore_BLT_bluecoat"; }
		if( isInNet( ip, "10.23.176.0", "255.255.240.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.24.249.112", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.25.0.0", "255.255.192.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.25.64.0", "255.255.192.0" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.29.24.0", "255.255.248.0"))  { return "DTC_Proxy"; }
		if( isInNet( ip, "10.29.32.0", "255.255.224.0"))  { return "DTC_Proxy"; }
		if( isInNet( ip, "10.29.108.0", "255.255.252.0"))  { return "DTC_Proxy"; }
		if( isInNet( ip, "10.29.112.0", "255.255.240.0"))  { return "DTC_Proxy"; }
		if( isInNet( ip, "10.29.0.0", "255.255.192.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.29.128.0", "255.255.192.0" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.29.192.0", "255.255.192.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.30.106.56", "255.255.255.128" ) ) { return "EAG_Proxy"; } //BES
		if( isInNet( ip, "10.30.192.0", "255.255.224.0" ) ) { return "bangalore_BLT_bluecoat"; }
		if( isInNet( ip, "10.30.240.0", "255.255.248.0" ) ) { return "transparent"; }		
		if( isInNet( ip, "10.30.248.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.30.0.0", "255.255.0.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.31.0.0", "255.255.192.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.31.64.0", "255.255.192.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.32.11.0", "255.255.255.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.32.18.48", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.20.0", "255.255.254.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.32.32.0", "255.255.248.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.32.94.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.94.128", "255.255.255.128" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.32.95.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.95.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.95.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.97.0", "255.255.255.0" ) ) { return "bangalore_BLT_bluecoat"; }
	        if( isInNet( ip, "10.32.98.128", "255.255.255.128" ) ) { return "bangalore_BLT_bluecoat"; }
		if( isInNet( ip, "10.32.99.0", "255.255.255.128" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.32.99.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.100.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.100.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.101.128", "255.255.255.128" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.32.102.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.102.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.103.0", "255.255.255.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.32.108.0", "255.255.255.0" ) ) { return "legacy_reuters_apac"; }
		if( isInNet( ip, "10.32.110.0", "255.255.255.0" ) ) { return "HK_Proxy"; }
	        if( isInNet( ip, "10.32.111.0", "255.255.255.0" ) ) { return "bangalore_BLT_bluecoat"; }
		if( isInNet( ip, "10.32.112.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.120.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.122.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.123.0", "255.255.255.128" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.32.123.192", "255.255.255.192" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.32.124.0", "255.255.255.0" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.32.125.64", "255.255.255.224" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.32.125.96", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.125.128", "255.255.255.224" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.32.125.160", "255.255.255.224" ) ) { return "legacy_reuters_apac"; }
		if( isInNet( ip, "10.32.144.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.32.219.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.0.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.18.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.20.0", "255.255.254.0" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.33.26.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.39.0", "255.255.255.192" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.33.64.0", "255.255.192.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.102.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.128.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.208.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.224.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.232.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.232.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.237.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.237.192", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.238.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.33.240.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.34.4.0", "255.255.254.0" ) ) { return "HK_Proxy"; }	//EDT
		if( isInNet( ip, "10.34.7.0", "255.255.255.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.34.6.0", "255.255.255.192" ) ) { return "zpark_bluecoat3"; }
		if( isInNet( ip, "10.34.6.0", "255.255.255.0" ) ) { return "STC_Proxy"; }	//EDT
		if( isInNet( ip, "10.34.8.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.34.12.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.34.13.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.34.14.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.34.15.0", "255.255.255.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.34.16.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.34.17.0", "255.255.255.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.34.100.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.34.251.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.34.0.0", "255.255.252.0" ) ) { return "HK_Proxy"; }	//EDT
		if( isInNet( ip, "10.35.23.0", "255.255.255.0" ) ) { return "HK_Proxy"; }	//EDT
		if( isInNet( ip, "10.35.44.0", "255.255.255.0" ) ) { return "HK_Proxy"; }	//EDT
		if( isInNet( ip, "10.35.59.0", "255.255.255.0" ) ) { return "HK_Proxy"; }	//EDT
		if( isInNet( ip, "10.35.0.0", "255.255.192.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.40.0.0", "255.255.0.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.0.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.16.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.27.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.24.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.30.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.32.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.64.0", "255.255.192.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.240.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.248.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.250.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.43.242.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.43.251.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.43.0.0", "255.255.0.0" ) ) { return "bangalore_BLT_bluecoat"; }
		if( isInNet( ip, "10.44.0.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.44.32.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.51.2.0", "255.255.255.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.51.52.0", "255.255.255.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.52.152.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.52.156.0", "255.255.254.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.52.175.0", "255.255.255.0" ) ) { return "DTC_Proxy"; } 
		if( isInNet( ip, "10.52.186.0", "255.255.254.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.55.56.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.65.16.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.32.0", "255.255.255.0" ) ) { return "TSQ_Proxy"; }
		if( isInNet( ip, "10.65.32.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.48.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.58.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.64.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.96.0", "255.255.252.0" ) ) { return "transparent"; }
	        if( isInNet( ip, "10.65.102.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
	        if( isInNet( ip, "10.65.104.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
	        if( isInNet( ip, "10.65.124.0", "255.255.255.0" ) ) { return "HDC_Proxy"; }
	        if( isInNet( ip, "10.65.125.0", "255.255.255.0" ) ) { return "HDC_Proxy"; }
	        if( isInNet( ip, "10.65.126.0", "255.255.255.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.65.128.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.130.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.134.0", "255.255.255.0" ) ) { return "transparent"; }
	        if( isInNet( ip, "10.65.146.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.65.162.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.173.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.178.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.188.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.188.192", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.200.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.204.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.210.0", "255.255.255.0" ) ) { return "transparent"; }
	        if( isInNet( ip, "10.65.211.0", "255.255.255.0" ) ) { return "transparent" ; }
		if( isInNet( ip, "10.65.218.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.220.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.229.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.230.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.230.128", "255.255.255.128" ) ) { return "transparent"; }
	        if( isInNet( ip, "10.65.231.0", "255.255.255.128" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.65.231.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.65.254.0", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.0.0", "255.255.224.0" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.66.4.0", "255.255.255.128" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.66.6.0", "255.255.255.0" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.66.8.128", "255.255.255.128" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.66.9.0", "255.255.255.128" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.66.24.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.56.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.66.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.67.0", "255.255.255.0" ) ) { return "bangalore_BLT_bluecoat"; }
		if( isInNet( ip, "10.66.68.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.72.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.80.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.81.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.81.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.81.192", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.81.208", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.88.0", "255.255.248.0" ) ) { return "transparent"; }
	        if( isInNet( ip, "10.66.100.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.135.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.136.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.156.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.66.0.0", "255.255.0.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.71.0.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.72.0.0", "255.255.0.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.74.2.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.74.10.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.74.32.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.0.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.32.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.89.0", "255.255.255.0" ) ) { return "transparent"; }
	        if( isInNet( ip, "10.78.90.0", "255.255.255.128" ) ) { return "HDC_Proxy" ; }
		if( isInNet( ip, "10.78.91.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.92.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.96.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.96.192", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.97.0", "255.255.255.0" ) ) { return "transparent"; }
	        if( isInNet( ip, "10.78.98.0", "255.255.255.224" ) ) { return "HDC_Proxy" ; }
		if( isInNet( ip, "10.78.99.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.101.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.103.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.103.160", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.108.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.112.0", "255.255.252.0" ) ) { return "transparent"; }
	        if( isInNet( ip, "10.78.125.96", "255.255.255.224" ) ) { return "HDC_Proxy"; }
	        if( isInNet( ip, "10.78.126.160", "255.255.255.224" ) ) { return "HDC_Proxy"; }
	        if( isInNet( ip, "10.78.126.225", "255.255.255.224" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.78.205.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.209.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.78.211.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.87.0.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.87.4.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.87.32.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.87.128.0", "255.255.128.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.89.0.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.89.16.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.91.13.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.91.22.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.91.25.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.91.0.0", "255.255.192.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.91.148.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.91.160.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.91.162.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.91.164.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.92.0.0", "255.255.0.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.93.0.0", "255.255.0.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.95.2.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.95.11.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.95.21.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.95.31.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.95.41.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.95.42.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.95.44.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.98.16.0", "255.255.248.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.106.6.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.12.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.14.192", "255.255.255.224" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.106.17.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.18.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.36.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.42.0", "255.255.254.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.106.62.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.96.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.112.128.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.112.128.0", "255.255.128.0" ) ) { return "HYD_Proxy"; }
		if( isInNet( ip, "10.106.132.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.142.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.144.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.158.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.160.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.165.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.166.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.170.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.172.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.106.174.0", "255.255.254.0" ) ) { return "transparent"; }         
	 	if( isInNet( ip, "10.106.174.64", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.112.170.0", "255.255.255.192" ) ) { return "EAG_Proxy"; } //BES
		if( isInNet( ip, "10.106.182.0", "255.255.255.0" ) ) { return "tokyo_bluecoat"; }
		if( isInNet( ip, "10.112.16.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.112.48.0", "255.255.255.0" ) ) { return "bangalore_BLT_bluecoat"; }
		if( isInNet( ip, "10.112.50.0", "255.255.254.0" ) ) { return "bangalore_BLT_bluecoat"; }
		if( isInNet( ip, "10.112.52.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.112.64.0", "255.255.224.0" ) ) { return "HYD_Proxy"; }
		if( isInNet( ip, "10.116.72.0", "255.255.255.0" ) ) { return "carswell_isa"; }
		if( isInNet( ip, "10.116.193.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.116.194.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.116.196.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.116.200.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.117.68.0", "255.255.254.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.117.99.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.117.100.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.119.250.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.16.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.17.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.18.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.20.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.21.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.21.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.22.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.23.8", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.23.96", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.23.192", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.36.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.40.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.52.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.62.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.62.192", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.55.0", "255.255.255.0" ) ) { return "transparent"; }	//redi data center-DO  NOT REODER
		if( isInNet( ip, "10.136.32.0", "255.255.224.0" ) ) { return "HYD_Proxy"; }	//redi data center-DO NOT REODER
		if( isInNet( ip, "10.136.244.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.136.0.0", "255.255.0.0" ) ) { return "bangalore_BLT_bluecoat"; }
		if( isInNet( ip, "10.143.28.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.32.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.40.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.42.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.44.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.32.0", "255.255.248.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.143.76.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.143.88.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.90.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.113.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.114.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.114.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.151.0.0", "255.255.0.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.162.6.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.162.8.0", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.162.8.16", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.162.9.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.162.38.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.162.64.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.162.64.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.162.70.0", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.163.6.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.163.7.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.163.9.0", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.163.9.160", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.163.11.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.163.28.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.164.2.0", "255.255.255.0" ) ) { return "HK_Proxy"; }	//EDT
		if( isInNet( ip, "10.165.24.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.165.48.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.165.50.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.165.52.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.163.60.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.165.96.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.165.112.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.165.116.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.169.0.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.183.254.0", "255.255.255.192" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.183.254.128", "255.255.255.192" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.184.52.0", "255.255.255.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.184.54.0", "255.255.254.0" ) ) { return "HDC_Proxy"; }
		if( isInNet( ip, "10.192.8.0", "255.255.255.0" ) ) { return "carswell_isa"; }
		if( isInNet( ip, "10.193.0.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.24.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.34.0", "255.255.254.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.193.36.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.38.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.39.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.193.44.0", "255.255.252.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.193.49.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.50.0", "255.255.254.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.193.52.0", "255.255.252.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.193.56.0", "255.255.252.0" ) ) { return "UK1_Proxy"; }
	        if( isInNet( ip, "10.193.60.0", "255.255.255.192" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.193.60.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.60.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.62.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.88.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.96.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.112.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.120.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.124.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.132.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.134.0", "255.255.254.0" ) ) { return "carswell_isa"; }
		if( isInNet( ip, "10.193.136.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.193.160.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.0.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.128.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.144.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.152.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.160.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.176.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.192.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.224.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.225.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.226.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.232.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.233.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.236.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.240.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.194.248.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.197.0.0", "255.255.240.0" ) ) { return "LaLey_isa"; }
		if( isInNet( ip, "10.197.16.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.24.0", "255.255.252.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.32.0", "255.255.254.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.34.0", "255.255.254.0" ) ) { return "LaLey_isa"; }
		if( isInNet( ip, "10.197.36.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.37.128", "255.255.255.128" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.38.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.40.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.44.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.44.96", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.44.160", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.44.128", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.44.224", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.45.0", "255.255.255.224" ) ) { return "transparent"; }		
		if( isInNet( ip, "10.197.45.96", "255.255.255.224" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.197.45.128", "255.255.255.128" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.197.46.64", "255.255.255.240" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.197.46.96", "255.255.255.224" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.197.46.128", "255.255.255.224" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.197.46.160", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.49.0", "255.255.255.0" ) ) { return "transparent"; }		
		if( isInNet( ip, "10.197.50.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.52.0", "255.255.252.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.56.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.58.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.59.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.60.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.62.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.64.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.197.67.0", "255.255.255.128" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.68.0", "255.255.254.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.74.0", "255.255.254.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.76.0", "255.255.254.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.88.0", "255.255.254.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.90.0", "255.255.255.128" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.91.0", "255.255.255.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.92.0", "255.255.254.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.94.0", "255.255.254.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.98.128", "255.255.255.128" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.99.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.101.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.103.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.114.0", "255.255.254.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.117.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.119.0", "255.255.255.128" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.120.0", "255.255.248.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.129.0", "255.255.255.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.197.212.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.197.248.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.128.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.198.129.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.198.130.0", "255.255.255.192" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.198.130.128", "255.255.255.128" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.198.131.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.198.132.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.134.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.136.0", "255.255.254.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.198.138.0", "255.255.254.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.198.140.0", "255.255.252.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.198.144.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.146.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.147.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.148.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.152.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.154.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.198.155.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.160.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.166.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.170.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.171.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.172.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.182.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.184.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.185.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.186.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.189.0", "255.255.255.128" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.198.189.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.191.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.192.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.193.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.194.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.195.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.196.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.197.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.198.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.200.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.208.0", "255.255.255.0" ) ) { return "tokyo_bluecoat"; }
		if( isInNet( ip, "10.198.209.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.210.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.212.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.212.128", "255.255.255.128" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.198.214.0", "255.255.255.128" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.198.214.128", "255.255.255.128" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.198.215.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.219.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.220.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.222.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.198.223.0", "255.255.255.128" ) ) { return "STC_Proxy"; }  
		if( isInNet( ip, "10.198.224.0", "255.255.224.0" ) ) { return "UK1_Proxy"; }
	 	if( isInNet( ip, "10.202.0.0", "255.255.0.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.204.106.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.204.142.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.204.144.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.205.106.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.206.58.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.206.100.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.208.0.0", "255.248.0.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.213.0.32", "255.255.255.248" ) ) { return "transparent"; }
	        if( isInNet( ip, "10.218.186.0", "255.255.255.0" ) ) { return "TOR_Proxy"; }         
		if( isInNet( ip, "10.216.0.0", "255.252.0.0" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.220.0.0", "255.254.0.0" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.222.0.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.1.0", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.1.96", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.3.0", "255.255.255.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.222.4.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.8.0", "255.255.254.0" )) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.222.13.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.14.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.22.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.32.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.33.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.34.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.35.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.37.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.37.128", "255.255.255.192" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.222.38.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.45.32", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.47.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.49.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.50.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.51.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.52.0", "255.255.255.0"  ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.55.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.58.0", "255.255.254.0"  ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.62.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.63.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.64.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.69.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.69.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.222.71.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.73.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.76.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.78.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.79.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.80.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.88.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.101.0", "255.255.255.128" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.222.101.16", "255.255.255.240" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.222.101.32", "255.255.255.240" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.222.101.48", "255.255.255.248" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.222.101.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.101.136", "255.255.255.248" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.101.144", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.101.160", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.101.192", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.101.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.102.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.104.0", "255.255.255.0" ) ) { return "transparent"; }	
		if( isInNet( ip, "10.222.105.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.106.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.112.0", "255.255.240.0" ) ) { return "EAG_Proxy"; } 
		if( isInNet( ip, "10.222.114.0", "255.255.255.0" ) ) { return "carswell_isa"; }
		if( isInNet( ip, "10.222.118.0", "255.255.255.0" ) ) { return "transparent"; } 
		if( isInNet( ip, "10.222.124.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.128.0", "255.255.240.0" ) ) { return "transparent"; } 
		if( isInNet( ip, "10.222.148.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.150.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.152.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.159.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.164.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.165.0", "255.255.255.192" ) ) { return "transparent"; } 
		if( isInNet( ip, "10.222.168.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.168.192", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.169.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.170.0", "255.255.255.128" ) ) { return "carswell_isa"; }
		if( isInNet( ip, "10.222.171.80", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.173.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.174.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.175.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.176.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.180.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.181.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.182.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.184.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.186.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.187.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.192.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.196.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.205.64", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.205.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.206.0", "255.255.255.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.222.207.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.208.0", "255.255.252.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.222.213.0", "255.255.255.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.222.216.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.218.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.219.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.223.0", "255.255.255.0" ) ) { return "transparent";}
		if( isInNet( ip, "10.222.231.0", "255.255.255.128" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.222.232.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.236.0", "255.255.252.0" ) ) { return "transparent"; } 
		if( isInNet( ip, "10.222.243.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.244.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.222.248.0", "255.255.254.0" ) ) { return "transparent"; } 
		if( isInNet( ip, "10.222.252.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.4.0", "255.255.254.0" ) ) { return "transparent"; }
	 	if( isInNet( ip, "10.223.0.0", "255.255.192.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.65.64", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.68.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.69.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.70.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.72.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.75.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.80.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.80.128", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.80.192", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.81.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.84.0", "255.255.254.0" ) ) { return "transparent";  }
		if( isInNet( ip, "10.223.88.0", "255.255.254.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.223.90.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.93.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.96.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.104.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.112.128", "255.255.255.128" ) ) { return "transparent"; } 
		if( isInNet( ip, "10.223.113.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.113.224", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.115.224", "255.255.255.224" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.223.116.0", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.116.176", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.117.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.118.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.223.120.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.128.0", "255.255.224.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.223.160.0", "255.255.254.0" ) ) { return "LaLey_isa"; }
		if( isInNet( ip, "10.223.164.0", "255.255.255.0" ) ) { return "UK1_Proxy"; } 
		if( isInNet( ip, "10.223.165.16", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.165.128", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.165.192", "255.255.255.224" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.165.240", "255.255.255.240" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.168.0", "255.255.252.0" ) ) { return "LaLey_isa"; }
		if( isInNet( ip, "10.223.168.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.186.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.191.0", "255.255.255.0" ) ) { return "EQX_Proxy"; }
		if( isInNet( ip, "10.223.192.0", "255.255.224.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.228.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.231.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.232.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.233.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.234.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.238.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.236.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.240.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.243.128", "255.255.255.128" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.248.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.249.64", "255.255.255.192" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.223.249.128", "255.255.255.192" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.223.250.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.223.252.0", "255.255.252.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.224.70.0", "255.255.255.0" ) ) { return "transparent"; } 
		if( isInNet( ip, "10.224.73.0", "255.255.255.0" ) ) { return "transparent"; } 
		if( isInNet( ip, "10.224.79.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.81.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.85.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.88.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.110.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.112.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.128.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.130.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.136.0", "255.255.252.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.202.0", "255.255.254.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.224.208.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.226.17.0", "255.255.255.192" ) ) { return "transparent"; }
		if( isInNet( ip, "10.226.244.0", "255.255.252.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.228.61.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.228.104.0", "255.255.255.192" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.192.0.0", "255.255.0.0" ) ) { return "carswell_isa"; }
		if( isInNet( ip, "159.104.0.0", "255.255.0.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "164.179.64.0", "255.255.224.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "164.179.163.0", "255.255.255.0" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "164.179.177.0", "255.255.255.0" ) ) { return "transparent"; }          
		if( isInNet( ip, "164.179.178.0", "255.255.255.0" ) ) { return "transparent"; }
		//
		//  must be kept as last as there are exceptions above
		//
		// BES
		//
		if( isInNet( ip, "10.51.2.64", "255.255.255.192" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.51.5.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
		//
		if( isInNet( ip, "10.204.68.120", "255.255.255.248" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.204.72.0", "255.255.255.224" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "163.231.21.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
		// "eagan"
		if( isInNet( ip, "10.143.204.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.176.0.0", "255.255.192.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.176.64.0", "255.255.248.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.176.72.0", "255.255.254.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.176.74.0", "255.255.255.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.176.75.0", "255.255.255.128" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.176.128.0", "255.255.128.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.192.0.0", "255.224.0.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.223.120.0", "255.255.248.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.224.64.0", "255.255.192.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.224.128.0", "255.255.128.0" ) ) { return "EAG_Proxy"; }
	     	if( isInNet( ip, "10.236.192.0", "255.255.240.0" ) ) { return "EAG_Proxy"; }
		if( isInNet( ip, "10.237.128.0", "255.255.192.0" ) ) { return "EAG_Proxy"; }
		// "legacy_reuters_apac"
		if( isInNet( ip, "10.23.192.0", "255.255.240.0" ) ) { return "STC_Proxy"; }
		if( isInNet( ip, "10.32.96.0", "255.255.255.192" ) ) { return "STC_Proxy"; }
		
		// "legacy_reuters_emea"
		if( isInNet( ip, "10.23.0.0", "255.255.0.0" ) ) { return "UK1_Proxy"; }
		if( isInNet( ip, "10.0.0.0", "255.224.0.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.42.32.0", "255.255.248.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.48.0", "255.255.240.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.42.64.0", "255.255.224.0" ) ) { return "transparent"; }
	//	if( isInNet( ip, "10.143.89.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }	
	//	if( isInNet( ip, "10.143.90.0", "255.255.255.0" ) ) { return "transparent"; }
		if( isInNet( ip, "10.143.112.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.143.113.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }	
		if( isInNet( ip, "10.143.114.0", "255.255.255.0" ) ) { return "DTC_Proxy"; }
		if( isInNet( ip, "10.228.100.0", "255.255.254.0" ) ) { return "DTC_Proxy"; }
		// "legacy_reuters_apac"
		if( isInNet( ip, "10.32.0.0", "255.224.0.0" ) ) { return "HK_Proxy"; }
		if( isInNet( ip, "10.106.174.0", "255.255.254.0" ) ) { return "STC_Proxy"; }
		// "legacy_reuters_amers defaUlt"
		if( isInNet( ip, "10.64.0.0", "255.224.0.0" ) ) { return "HDC_Proxy"; }
		return "transparent";
	}
	//////////////////////////
	function getHostNetworkSegment( client_ip, client_segment, url, lower_host )
	{
		var host_ip = null;
		var ip_regex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/;
		if( dnsDomainIs( lower_host, ".erf.thomson.com" ) ||
			dnsDomainIs( lower_host, ".ten.thomsonreuters.com" ) ||
			dnsDomainIs( lower_host, ".mail.thomsonreuters.com" ) ||
			dnsDomainIs( lower_host, ".erf.thomsonreuters.com" ) ||
			dnsDomainIs( lower_host, ".ha.westgroup.com" ) ||
			dnsDomainIs( lower_host, ".int.westgroup.net" ) ||
			dnsDomainIs( lower_host, ".int.westgroup.com" ) ||
			dnsDomainIs( lower_host, ".prod.westlan.com" ) ||
			dnsDomainIs( lower_host, ".int.westlaw.com" ) ||
			dnsDomainIs( lower_host, ".int.thomson.com" ) ||
			dnsDomainIs( lower_host, ".thomsoncorporate.com" ) ||
			dnsDomainIs( lower_host, ".int.thomsonreuters.com" ) ||
			dnsDomainIs( lower_host, ".local" ) ||
			dnsDomainIs( lower_host, ".edt.reuters.com" ) ||
	      		dnsDomainIs( lower_host, ".oblab.oakbrook.thomsonreuters.com" ) ||
			dnsDomainIs( lower_host, ".oakbrook.reuters.com" ) ||
			dnsDomainIs( lower_host, ".derwent.co.uk" ) ||
			dnsDomainIs( lower_host, ".ime.reuters.com" ) ) {
			return "internal";
		}
		//////////////////////////////////////////////////////
		// ip based exceptions, try to avoid DNS resolution
		//////////////////////////////////////////////////////
		if( ip_regex.test( lower_host ) ) {
			host_ip = lower_host;
			} else if( isResolvable( lower_host ) ) {
				host_ip = dnsResolve( lower_host );
			}
		if( host_ip !== null ) {
			if( isInNet( host_ip, "10.0.0.0", "255.0.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "62.73.160.224", "255.255.255.240" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.207.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.223.101", "255.255.255.255" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.223.102", "255.255.255.255" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.223.104", "255.255.255.255" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.223.112", "255.255.255.240" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.224.160", "255.255.255.248" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.228.128", "255.255.255.128" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.230.0", "255.255.255.224" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.236.165", "255.255.255.255" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.242.128", "255.255.255.240" ) ) { return "internal"; }
			if( isInNet( host_ip, "83.231.253.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "95.254.0.0", "255.255.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "127.0.0.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "128.242.96.80", "255.255.255.240" ) ) { return "internal"; }
			if( isInNet( host_ip, "128.242.96.96", "255.255.255.224" ) ) { return "internal"; }
			if( isInNet( host_ip, "172.16.0.0", "255.240.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "192.168.0.0", "255.255.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "150.151.0.0", "255.255.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "155.195.0.0", "255.255.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "157.199.0.0", "255.255.192.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "159.42.65.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "159.42.97.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "159.42.128.0", "255.255.254.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "159.43.0.0", "255.255.192.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "159.44.40.0", "255.255.248.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "159.44.111.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "159.44.168.0", "255.255.252.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "159.104.0.0", "255.255.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "159.220.192.0", "255.255.224.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "162.8.64.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "162.8.112.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "162.8.168.128", "255.255.255.128" ) ) { return "internal"; }
			if( isInNet( host_ip, "162.8.232.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "163.231.4.0", "255.255.254.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "163.231.7.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "163.231.8.0", "255.255.252.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "163.231.14.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "163.231.15.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "163.231.16.0", "255.255.240.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "163.231.32.0", "255.255.224.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "163.231.64.0", "255.255.192.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "163.231.128.0", "255.255.128.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "164.57.0.0", "255.255.128.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "164.57.128.0", "255.255.192.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "164.57.224.0", "255.255.224.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "164.179.0.0", "255.255.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "165.78.0.0", "255.255.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.76.0.0", "255.255.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.0.2", "255.255.255.255" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.5.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.11.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.16.0", "255.255.254.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.20.0", "255.255.254.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.22.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.23.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.24.0", "255.255.255.0" ) ) { return "internal"; }
	                if( isInNet( host_ip, "167.68.32.0", "255.255.255.0" ) ) { return "internal"; }
	                if( isInNet( host_ip, "167.68.33.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.39.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.47.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.64.0", "255.255.192.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "167.68.128.0", "255.255.128.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "169.141.1.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "169.141.8.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "169.141.36.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "170.107.0.0", "255.255.0.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "192.152.41.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "192.155.137.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "192.155.138.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "192.189.224.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "192.237.224.60", "255.255.255.255" ) ) { return "internal"; }
			if( isInNet( host_ip, "192.251.4.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.139.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.147.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.154.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.156.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.166.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.170.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.171.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.173.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.179.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.183.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.188.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.80.190.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.177.217.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "198.177.219.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "199.119.46.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "199.119.52.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "199.119.60.0", "255.255.255.192" ) ) { return "internal"; }
			if( isInNet( host_ip, "199.224.136.0", "255.255.252.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "199.242.7.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "199.248.238.0", "255.255.255.0" ) ) { return "internal"; }
			if( isInNet( host_ip, "202.69.216.0", "255.255.252.0" ) ) {
	                	// xP Australia
				if( isInNet( client_ip, "10.223.191.0", "255.255.255.0" ) ) { return "internal"; }
			}
			if( isInNet( host_ip, "65.62.0.0", "255.254.0.0" ) ) { return "internal"; }
		}
		return "external";
	}
	///////////////////////////////////
	function FindProxyForURL(url, host)
	{
		////////////////////////////////////
		// variables for optimal performance
		////////////////////////////////////
		var lower_url = url.toLowerCase();
		var lower_host = host.toLowerCase();
		var ip = myIpAddress();
		var client_segment = null;
		var host_segment = "external";
		debug_url = lower_url;
		if( isPlainHostName( host ) ) {
			return "DIRECT";
		}
		//////////////////////////
		// Get the Network Segment
		//////////////////////////
		client_segment = getClientNetworkSegment( ip );
		if( client_segment != "transparent" ) {
			host_segment = getHostNetworkSegment( ip, client_segment, lower_url, lower_host );
		}
		debug_alert( "ip: " + ip +
			"\nclient segment: " + client_segment +
			"\nurl: " + lower_url +
			"\nhost segment: " + host_segment +
			"\nhost: " + lower_host );
		/////////////////////////////////////
		// Application Exceptions
		// i.e. applications that MUST go via a specific proxy
		// e.g. to get around firewall issues
		/////////////////////////////////////
		
		// ------------------
		// pawz proxy
		// ------------------
		if( dnsDomainIs( lower_host, ".gcmgpawz.ime.reuters.com" ) ) {
			return "PROXY 159.220.193.39:80";
		}
		// ------------------
		// pawzred proxy
		// ------------------
		if( dnsDomainIs( lower_host, ".gcmgpawzred.ime.reuters.com" ) ) {
			return "PROXY 10.1.16.172:80";
		}
		// ------------------
		// rxn proxy
		// ------------------
		if( dnsDomainIs( lower_host, ".knowledge.reuters.net" ) ||
			dnsDomainIs( lower_host, ".barraone.compelling-content.com" ) ||
			dnsDomainIs( lower_host, ".mpd.compelling-content.com" ) ||
			dnsDomainIs( lower_host, ".markets.reuters.com" ) ||
			lower_host == "10.101.40.41" ||
			localHostOrDomainIs( lower_host, "rmm4.dlinezrh.radianz.net" ) ) {
			return "DIRECT";
		}
		// ------------------
		// ntm proxy
		// ------------------
		if( localHostOrDomainIs( lower_host, "transactions.thomsonreuters.com" ) && (
	          	isInNet( ip, "10.15.17.0", "255.255.255.0" ) ||
			isInNet( ip, "10.15.18.0", "255.255.254.0" ) ||
			isInNet( ip, "10.15.20.0", "255.255.255.0" ) ||
			isInNet( ip, "10.15.25.0", "255.255.255.0" ) ||
			isInNet( ip, "10.15.26.0", "255.255.255.0" ))) {
			return "PROXY 10.15.25.26:8080";
		}
		// ------------------
		// rxn thin proxy
		// ------------------
		if( localHostOrDomainIs( lower_host, "xthin.dlinezrh.radianz.net" ) ) {
			return "PROXY 10.1.251.253:80";
		}
		// ------------------
		// rxn NAT proxy
		// ------------------
		if( localHostOrDomainIs( lower_host, "session.rservices.com" ) &&
			isInNet( ip, "159.0.0.0", "255.0.0.0" ) ) {
			return "PROXY 10.18.198.42:80";
		}
		// ------------------
		// Radianz proxy
		// ------------------
		if( dnsDomainIs( lower_host, ".radianz.com" ) &&
			!localHostOrDomainIs( lower_host, "www.radianz.com" ) &&
			!dnsDomainIs( lower_host, ".raport.radianz.com" ) ) {
			return loadBalance (RADBC1,RADBC2);
		}
		// ------------------
		// S.A. Worldcheck exception
		// ------------------
		if( isInNet( ip, "10.198.216.0", "255.255.254.0" ) ||
		    isInNet( ip, "10.3.28.0", "255.255.254.0" ) ) {
			if( dnsDomainIs( lower_host, "www.mod.gov.il") ||
			    dnsDomainIs( lower_host, "www.prefettura.it") )  {return loadBalance (DTCBC1,DTCBC2); }
				else  { return "DIRECT"; }  
		}
		// ------------------
		// services.tdspc.gov.in
		// ------------------
		if( dnsDomainIs( lower_host, ".tdscpc.gov.in" ) && (
			isInNet( ip, "10.43.0.0", "255.255.0.0" ) ||
			isInNet( ip, "10.30.0.0", "255.255.0.0" ) ||
			isInNet( ip, "10.112.0.0", "255.255.0.0" ) ||
			isInNet( ip, "10.32.111.0", "255.255.255.0" ) ||
			isInNet( ip, "10.32.98.0", "255.255.255.0" ) ||
			isInNet( ip, "10.136.0.0", "255.255.0.0" ) ||
			isInNet( ip, "10.32.112.0", "255.255.252.0" )) ) {
			return "PROXY 10.43.97.145:8080"; 
		}
	//        // mytravel.thomsonreuters.com exception for Stockholm
	//        // ------------------
	//        if( dnsDomainIs( lower_host, "mytravel.thomsonreuters.com" ) && (
	//                isInNet( ip, "10.23.105.0", "255.255.255.0" ) ||
	//		isInNet( ip, "10.78.98.0", "255.255.255.224" ) )) {
	//                return loadBalance (DTCBC1,DTCBC2); 
	//        }
	//
	//	// ------------------
	//	// mytravel.thomsonreuters.com exception for AU
	//	// ------------------
	//	if( dnsDomainIs( lower_host, "mytravel.thomsonreuters.com" ) && (
	//		isInNet( ip, "10.33.20.192", "255.255.255.192" ) ||
	//		isInNet( ip, "10.32.102.128", "255.255.255.192" ) ||
	//		isInNet( ip, "10.33.21.64", "255.255.255.192" ) ||
	//		isInNet( ip, "10.33.20.64", "255.255.255.192" ) ||
	//              isInNet( ip, "10.222.105.0", "255.255.255.128" ) ||
	//		isInNet( ip, "10.222.105.192", "255.255.255.224" ) ||
	//		isInNet( ip, "10.32.102.192", "255.255.255.192" )) ) {
	//		return loadBalance (SYDBC1,SYDBC2); 
	//	}
	//
		// ------------------
		// mytravel.thomsonreuters.com exception
		// ------------------
		if( dnsDomainIs( lower_host, "mytravel.thomsonreuters.com" )) {
			return "DIRECT";
		}
		// ------------------
		// opsmanual.avoxdc.comm exception
		// ------------------
		if( dnsDomainIs( lower_host, "opsmanual.avoxdc.com" )) {
			return "DIRECT";
		}
		//////////////////////////////////////////////////////
		// Application Exceptions
		// i.e. applications that MUST go direct when the network is not transparent
		//////////////////////////////////////////////////////
		if( client_segment != "transparent" &&
			host_segment == "internal" ) {
			return "DIRECT";
		}
		//////////////////////////////////////////////////////
		// Non Transparent Network Exceptions
		// NOTE: use port 8080 to avoid issues from the data centers
		//////////////////////////////////////////////////////
		// ------------------
		// ------------------
		if( client_segment == "UK1_Proxy"  ) {
			return loadBalance (UK1BC1,UK1BC2);
		}	
		// ------------------
		if( client_segment == "DTC_Proxy" ) {
			return loadBalance (DTCBC1,DTCBC2);
		}
		// ------------------
		if( client_segment == "HK_Proxy" || client_segment == "STC_Proxy") {
			if( dnsDomainIs( lower_host, ".bdo.com.ph" ) ||
				dnsDomainIs( lower_host, ".csfunds.com.cn" ) ||
				dnsDomainIs( lower_host, ".changanfunds.com" ) ||
				dnsDomainIs( lower_host, ".htcxfund.com" ) ||
				dnsDomainIs( lower_host, ".securitybank.com" ) ||
				dnsDomainIs( lower_host, ".scmp.com" ) ||
				dnsDomainIs( lower_host, ".hongkongpost.hk" ) ||
				dnsDomainIs( lower_host, ".surveymonkey.com" ) ||
				dnsDomainIs( lower_host, ".surveymonkey.net" ) ||
				dnsDomainIs( lower_host, "nevadagold.com" ) ||
				dnsDomainIs( lower_host, ".tangoe.com" ) ||
				dnsDomainIs( lower_host, ".safe.thomson.com" ) ||
				dnsDomainIs( lower_host, ".corp.delaware.gov" )) {
			return loadBalance (SYDBC1,SYDBC2);
			}
		}
		// ------------------
		if( client_segment == "STC_Proxy"  ) {
			return loadBalance (STCBC1,STCBC2);
		}	
		// ------------------
		if( client_segment == "HDC_Proxy" ) {
			return loadBalance (HDCBC1,HDCBC2);
		}
		// ------------------
		if( client_segment == "HK_Proxy"  ) {
			return loadBalance (HKBC1,HKBC2);
		}	
		// ------------------
		if( client_segment == "HYD_Proxy" ) {
			return loadBalance (HYDBC1,HYDBC2);
		}
		// ------------------
		if( client_segment == "EAG_Proxy" ) {
			return loadBalance (EAGBC1,EAGBC2);
		}
		// ------------------
		if( client_segment == "TSQ_Proxy" ) {
			return loadBalance (TSQBC1,TSQBC2);
		}
	//	// ------------------
	//	if( client_segment == "Sydney_Proxy" ) {
	//		return loadBalance (SYDBC1,SYDBC2);
	//	}
		// ------------------
		if( client_segment == "buenosaires_bluecoat" ) {
			return loadBalance (BSABC1,BSABC2);
		}
		// ------------------
		if( client_segment == "EQX_Proxy" ) {
			return "PROXY 10.222.109.10:8080";
		}
		// ------------------
		if( client_segment == "LaLey_isa" ) {
			return "PROXY 10.197.8.11:8080";
		}
		// ------------------
		if( client_segment == "carswell_isa" ) {
			return loadBalance (CARBC1,CARBC2);
		}
		// ------------------
		if( client_segment == "zpark_bluecoat" ) {
			if( dnsDomainIs( lower_host, ".tw" ) ||
				dnsDomainIs( lower_host, ".jp" ) ||
				dnsDomainIs( lower_host, ".reuters.com" ) ||
				dnsDomainIs( lower_host, ".webex.com" ) ||
				dnsDomainIs( lower_host, ".salesforce.com" ) ||
				dnsDomainIs( lower_host, ".thomsonreuters.com" ) ||
				dnsDomainIs( lower_host, ".reutersresearch.com" )) {
				return loadBalance (HKBC1,HKBC2)
			}
			return "DIRECT";
		}
		// ------------------
		if( client_segment == "zpark_bluecoat3" ) {
			return loadBalance (BEIBC3,BEIBC3);
		}
	//        // ------------------
	//                if( client_segment == "ITSGW_Proxy" ) {
	//                     return loadBalance (ITSGW1,ITSGW2);
	//        }
		// ------------------
		if( client_segment == "bangalore_BLT_bluecoat" ) {
			return loadBalance (BLTBC1,BLTBC2);
		}
		// ------------------
		if( client_segment == "TOR_Proxy" ) {
			return loadBalance (TORPX1,TORPX2);
		}
		// ------------------
		if( client_segment == "toronto_edit_bluecoat" ) {
			return "PROXY 10.78.97.163:80";
		}
		// ------------------
		if( client_segment == "tokyo_bluecoat" ) {
			return "PROXY 10.106.6.33:8080";
		}
		if( host_segment == "external" ) {
			// ------------------
			if( client_segment == "legacy_reuters_amers" ) {
				return loadBalance (HPGBC1,HPGBC2);
			}
			// ------------------
			if( client_segment == "legacy_reuters_emea" ) {
				return loadBalance (LONBC1,LONBC2);
			}
			// ------------------
			if( client_segment == "legacy_reuters_apac"  ||
			    client_segment == "datacenter_stc" ) {
				return loadBalance (SINBC1,SINBC2);
			}
		}
		return "DIRECT";
	}
	//////////////////////////////////////////////////////
	function FindProxyForURLEx(url, host)
	{
		// for IE8 just force it to use the downlevel function
		return FindProxyForURL(url, host);
	}
	// END
	return FindProxyForURL;
})();
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
    function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*://*.apac.ime.reuters.com/*") || shExpMatch(url, "*://apac.ime.reuters.com/*")) return Proxy4(url, host);
	if (shExpMatch(url, "*://amazon.cn/*")) return 'DIRECT';
	if (shExpMatch(url, "*://*.thomsonreuters.com/*") || shExpMatch(url, "*://thomsonreuters.com/*")) return Proxy4(url, host);
	if (shExpMatch(url, "http://10.249.181.98*")) return Proxy4(url, host);
	if (shExpMatch(url, "*://taobao.com/*")) return 'DIRECT';
	if (shExpMatch(url, "*://tmall.com/*")) return 'DIRECT';
	if (shExpMatch(url, "*://www.smzdm.com/*")) return 'DIRECT';
	if (shExpMatch(url, "*://jd.com/*")) return 'DIRECT';
	if (shExpMatch(url, "*taobao.com/*")) return 'DIRECT';
	if (shExpMatch(url, "*://*.thomsonreuters.net/*") || shExpMatch(url, "*://thomsonreuters.net/*")) return Proxy4(url, host);
	if (shExpMatch(url, "*://bjcore-ace01:8081/*")) return 'DIRECT';
	if(shExpMatch(host, 'localhost')) return 'DIRECT';
	if(shExpMatch(host, '127.0.0.1')) return 'DIRECT';
	if(shExpMatch(host, '<local>')) return 'DIRECT';
	return 'PROXY 10.23.29.130:8080';
}
