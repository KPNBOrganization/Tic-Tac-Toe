// Field size
const FIELD_SIZE = 3;

// Cell status
const EMPTY = 0;
const CROSS = 1;
const CIRCLE = 2;

var TURN = 'X';

var Arr = [];

function Run()
{
	// Add event on click

	var Cells = document.getElementsByTagName('td');

	for(var i = 0; i < Cells.length; i++)
	{
		Cells[i].addEventListener('click', function (event) {
			var Cell = event.target;

			if(Cell.innerHTML == '&nbsp;')
			{
				Cell.innerHTML = TURN;

				if(TURN == 'X')
				{
					Cell.className = 'cross';
					TURN = 'O';
				}
				else
				{
					Cell.className = 'circle';
					TURN = 'X';
				}
			}
		});
	}
}

function WinCondition()
{
	for (var i=0; i<FIELD_SIZE; i++) {
		for(var j=0; j<FIELD_SIZE; j++){
			if (Arr[i][j]!=0) 
				console.log(Derevo(Arr[i][j], i, j));
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
	for (var i =0; i<FIELD_SIZE; i++){
		if ((nRow+dRow<=FIELD_SIZE) && (nColumn+dColumn>=-1) && (Arr[nRow][nColumn]==key)) { 
			nRow+=dRow;
			nColumn+=dColumn;
		}
		else break;
		if(i==FIELD_SIZE-1) {
			return key;
		}
	}

	dRow=1;
	dColumn=0;
	nRow=Row;
	nColumn=Column;
	for (var i =0; i<FIELD_SIZE; i++){
		if ((nRow+dRow<=FIELD_SIZE) && (Arr[nRow][nColumn]==key)) { 
			nRow+=dRow;
			nColumn+=dColumn;
		}
		else break;
		if(i==FIELD_SIZE-1) {
			return key;
		}
	}

	dRow=1;
	dColumn=1;	
	nRow=Row;
	nColumn=Column;
	for (var i =0; i<FIELD_SIZE; i++){
		if ((nRow+dRow<=FIELD_SIZE) && (nColumn+dColumn<=FIELD_SIZE) && (Arr[nRow][nColumn]==key)) { 
			nRow+=dRow;
			nColumn+=dColumn;
		}
		else break;
		if(i==FIELD_SIZE-1) {
			return key;
		}
	}

	dRow=0;
	dColumn=1;
	nRow=Row;
	nColumn=Column;
	for (var i =0; i<=FIELD_SIZE; i++){
		if ((nColumn+dColumn<=FIELD_SIZE) && (Arr[nRow][nColumn]==key)) {

			nRow+=dRow;
			nColumn+=dColumn;
		}
		else break;

		if(i==FIELD_SIZE-1) {
			return key;
		}
	}
	 return 0;
}

function GetField()
{
	var Cells = document.getElementsByTagName("td");

	var k = 0;

	for(var i = 0; i < FIELD_SIZE; i++)
	{
		Arr[i] = [];

		for(var j = 0; j < FIELD_SIZE; j++)
		{
			switch(Cells[k].innerHTML)
			{
				case 'X' :
					Arr[i][j] = CROSS;
				break;

				case 'O' : 
					Arr[i][j] = CIRCLE;
				break;

				default:
					Arr[i][j] = EMPTY;
			}

			k++;
		}
	}
}

function WriteField()
{
	for(var i = 0; i < 3; i++)
	{
		var str = "";

		for(var j = 0; j < 3; j++)
		{
			str = str + " " + Arr[i][j];
		}

		console.log(str);
	}
}

function ClearField()
{
	var Cells = document.getElementsByTagName('td');

	for(var i = 0; i < Cells.length; i++)
	{
		Cells[i].innerHTML = '&nbsp;';
		Cells[i].className = '';
	}
}

function Reset()
{
	if(confirm('Do you really wabt to reset this game?'))
		window.location.reload(true);
}

// After our window wal loaded
window.onload = function () {
	//GetField();
	ClearField();

	Run();
}
