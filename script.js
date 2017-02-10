var arr = [
	[2, 0, 2],
	[0, 2, 0],
	[2, 0, 2]
]


function WinCondition()
{
	// var Cells = document.getElementsByClassName("cell");

	for(var i = 0; i < arr.length; i++)
	{
		
	}
	for (var i=0; i<3; i++) {
		for(var j=0; j<3; j++){
			if (arr[i][j]!=0) 
				console.log(Derevo(arr[i][j], i, j));
		}
	}
}


function Derevo(key, Row, Column){
	var dColumn,dRow;
	var nRow, nColumn;	

	dRow=1;
	dColumn=-1;
	nRow=Row;
	nColumn=Column;
	for (var i =0; i<3; i++){
		if ((nRow+dRow<=3) && (nColumn+dColumn>=-1) && (arr[nRow][nColumn]==key)) { 
			nRow+=dRow;
			nColumn+=dColumn;
		}
		else break;
		if(i==2) {
			return key;
		}
	}

	dRow=1;
	dColumn=0;
	nRow=Row;
	nColumn=Column;
	for (var i =0; i<3; i++){
		if ((nRow+dRow<=3) && (arr[nRow][nColumn]==key)) { 
			nRow+=dRow;
			nColumn+=dColumn;
		}
		else break;
		if(i==2) {
			return key;
		}
	}

	dRow=1;
	dColumn=1;	
	nRow=Row;
	nColumn=Column;
	for (var i =0; i<3; i++){
		if ((nRow+dRow<=3) && (nColumn+dColumn<=3) && (arr[nRow][nColumn]==key)) { 
			nRow+=dRow;
			nColumn+=dColumn;
		}
		else break;
		if(i==2) {
			return key;
		}
	}

	dRow=0;
	dColumn=1;
	nRow=Row;
	nColumn=Column;
	for (var i =0; i<=3; i++){
		if ((nColumn+dColumn<=3) && (arr[nRow][nColumn]==key)) {

			nRow+=dRow;
			nColumn+=dColumn;
		}
		else break;

		if(i==2) {
			return key;
		}
	}
	 return 0;
}

WinCondition();