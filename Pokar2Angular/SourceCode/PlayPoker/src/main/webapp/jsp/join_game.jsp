<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="">
<!--<link rel="icon" href="images/favicon.ico">-->
<title>Play Poker</title>

<!-- Bootstrap core CSS -->
<link
	href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css"
	rel="stylesheet">

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<link
	href="${pageContext.request.contextPath}/resources/css/ie10-viewport-bug-workaround.css"
	rel="stylesheet">

<!-- Custom styles for this template -->
<link
	href="${pageContext.request.contextPath}/resources/css/offcanvas.css"
	rel="stylesheet">
<link
	href="${pageContext.request.contextPath}/resources/css/style-input.css"
	rel="stylesheet">
<link
	href="${pageContext.request.contextPath}/resources/css/customize.css"
	rel="stylesheet">
<script src="${pageContext.request.contextPath}/resources/js/stomp.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/sockjs-0.3.4.js"></script>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
	<nav class="navbar navbar-fixed-top navbar-inverse">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand logo-header" href="#">Play Poker</a>
			</div>
			<div id="navbar" class="navbar-collapse collapse nav navbar-right"
				aria-expanded="false" style="height: 1px;">
				<ul class="nav navbar-nav">
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Logout</a></li>
				</ul>
			</div>
			<!-- /.nav-collapse -->
		</div>
		<!-- /.container -->

	</nav>
	<!-- /.navbar -->

	<div class="container">
		<div class="row row-offcanvas row-offcanvas-right">
			<div class="col-xs-12 col-md-9 col-lg-9">
				<h3 class="margin-top">Join Game</h3>
				<div class="form-txt-color grid-data-container">
					<div class="col-xs-12 col-md-2 col-lg-2 padding-lr-0">
						<div class="story-txt-heading">Story # 1/1</div>
					</div>
					<div class="col-xs-12 col-md-10 col-lg-10 padding-lr-0">
						<div class="story-desciption">Story Description</div>
					</div>
					<br clear="all">
				</div>
				<input type="hidden" name="guid" id="guid" value="${GUID}" /> <br
					clear="all">
				<div class="form-txt-color grid-data-container">
					<div class="col-xs-12 col-lg-12 padding-lr-0">
						<div style="min-height: 300px;">
							<div class="progressContainer">
								<div class="div-container">
									<div class="card div-numeric">
										<span>0</span>
									</div>
									<div class="progress progress-striped div-progress-bar">
										<span class="progress-bar progress-bar-info"></span>
									</div>
								</div>
								<span>Manish K</span>
							</div>
							<div class="progressContainer">
								<div class="div-container">
									<div class="card div-numeric">
										<span>1</span>
									</div>
									<div class="progress progress-striped div-progress-bar">
										<span class="progress-bar progress-bar-info"></span>
									</div>
								</div>
								<span>Surendar</span>
							</div>
							<div class="progressContainer">
								<div class="div-container">
									<div class="card div-numeric">
										<span>2</span>
									</div>
									<div class="progress progress-striped div-progress-bar">
										<span class="progress-bar progress-bar-info"></span>
									</div>
								</div>
								<span>Amit K</span>
							</div>
						</div>
					</div>
					<br clear="all">
				</div>
				<nav class="navbar navbar-fi xed-bottom navbar-inverse">
					<div class="text-center">
						<div class="panel-body">
							<div class="row">
								<div class="col-lg-12">
									<div class="col-lg-1 card">0</div>
									<div class="col-lg-1 card">1</div>
									<div class="col-lg-1 card">2</div>
									<div class="col-lg-1 card">3</div>
									<div class="col-lg-1 card">5</div>
									<div class="col-lg-1 card">8</div>
									<div class="col-lg-1 card">13</div>
									<div class="col-lg-1 card">20</div>
									<div class="col-lg-1 card">40</div>
									<div class="col-lg-1 card">100</div>
									<div class="col-lg-1 card">?</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<!--/.col-xs-6.col-lg-4-->

			<div class="col-xs-12 col-md-3 col-lg-3">
				<div class="form-txt-color grid-data-container">
					<h3 class="margin-top calclated-score-txt">
						<a href="#" class="pull-right" title="Edit Score"><img
							src="resources/images/edit-icon.png"></a>Calculated Score
					</h3>
					<div class="col-xs-12 col-lg-12 padding-lr-0">
						<div class="average-val">50</div>
					</div>
					<div class="col-xs-12 col-lg-12 padding-lr-0">
						<div style="min-height: 400px;">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#menu0"
									title="Information"><img src="resources/images/info-icon.png"></a></li>
								<li><a data-toggle="tab" href="#menu1" title="Players"><img
										src="resources/images/user-icon.png"></a></li>
								<li><a data-toggle="tab" href="#menu2" title="View Details"><img
										src="resources/images/view-icon.png"></a></li>
								<!--<li><a data-toggle="tab" href="#menu3" title="Edit Game"><img src="images/setting-icon.png"></a></li>-->
							</ul>
							<div class="tab-content">
								<div id="menu0" class="tab-pane fade in active">
									<h4 class="tab-content-heading">ID</h4>
									<p>1</p>
									<h4 class="tab-content-heading">Title</h4>
									<p>Dashboard</p>
									<h4 class="tab-content-heading">Description</h4>
									<p>Lorem Ipsum is simply dummy text of the printing and
										typesetting industry.</p>
								</div>
								<div id="menu1" class="tab-pane fade">
									<div class="margin-tb-10">
										<div class="margin-tb-10">
											<a href="#" title="Edit player name"><img
												src="resources/images/edit-icon1.png"></a>&nbsp;<span>Player
												Name 1</span><a href="#" class="pull-right"
												title="Delete this player"><img
												src="resources/images/delete-icon.png"></a>
										</div>
										<div class="margin-tb-10">
											<a href="#" title="Edit player name"><img
												src="resources/images/edit-icon1.png"></a>&nbsp;<span>Player
												Name 2</span><a href="#" class="pull-right"
												title="Delete this player"><img
												src="resources/images/delete-icon.png"></a>
										</div>
										<div class="margin-tb-10">
											<a href="#" title="Edit player name"><img
												src="resources/images/edit-icon1.png"></a>&nbsp;<span>Player
												Name 3</span><a href="#" class="pull-right"
												title="Delete this player"><img
												src="resources/images/delete-icon.png"></a>
										</div>
									</div>
								</div>
								<div id="menu2" class="tab-pane fade">
									<div class="margin-tb-10">
										<table
											class="table table-condensed  table-striped table-hover table-responsive"
											style="border: 0px;">
											<thead>
												<tr>
													<th>#</th>
													<th>Story</th>
													<th>Points</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Dashboard</td>
													<td>15</td>
												</tr>
												<tr>
													<td>2</td>
													<td>Login</td>
													<td>10</td>
												</tr>
												<tr>
													<td>3</td>
													<td>Welcome</td>
													<td>5</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- <div id="menu3" class="tab-pane fade">
                <h3>M3</h3>
                <p>Some content in menu 3.</p>
              </div>-->
							</div>
						</div>
					</div>
					<br clear="all">
				</div>
			</div>
		</div>
		<!--/row-->
		<br> <br>
		<hr>
		<footer class="text-center">
			<p>© Xavient Information Systems, Inc. 2017</p>
		</footer>
	</div>
	<!--/.container-->

	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script
		src="${pageContext.request.contextPath}/resources/js/jquery.min.js.download"></script>
	<script
		src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js.download"></script>
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script
		src="${pageContext.request.contextPath}/resources/js/ie10-viewport-bug-workaround.js.download"></script>
	<script
		src="${pageContext.request.contextPath}/resources/js/offcanvas.js.download"></script>
	<script>
		var stompClient = null;
		$(document).ready(
				function() {
					var socket = new SockJS('/PlayPoker/playerName');
					stompClient = Stomp.over(socket);
					connetWSScoket();
				});
				
				function connetWSScoket() {
					stompClient.connect({}, function(frame) {							
						stompClient.subscribe('/topic/playerNameResult', function(greeting) {
										console.log(greeting);
									});
					});
		}
	
		function getPlayerName() {
				var tempguid = $("#guid").val();
				stompClient.send("/app/playerName", {}, JSON.stringify({
					'guid' : tempguid
				}));
		}
	</script>
	<button id="startGame" onclick="getPlayerName();">Game Start</button>
</body>
</html>