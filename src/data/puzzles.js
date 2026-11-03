/* data/puzzles.js — the books on the shelf. Each book is one Lichess CSV pasted as is.
   Fields: id (the cat's lines per book live under this id in ui/texts.js BOOK_TEXTS),
   title (book page), short (spine of the book), csv.
   Order of books = order on the shelf. */
const VOLUMES = [
  {
    id: 'backrank', title: 'Маты на последней горизонтали', short: 'Последняя горизонталь',
    // tasks_backrank600.csv — back-rank mates, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
hUjQL,3r2k1/1q3ppp/p3p3/PpR1P3/3Q4/6P1/5P1P/2R3K1 b - - 0 29,d8d4 c5c8 b7c8 c1c8 d4d8 c8d8,587,85,100,94,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/hQL2vxZy/black#58
KObot,2r3k1/p1r4p/1p4p1/5p2/3Nb3/Q7/PP5P/1KB2R2 w - - 4 42,b1a1 c7c1 f1c1 c8c1,540,86,100,153,backRankMate mate mateIn2 middlegame short,https://lichess.org/UGv1Xj5I#83
kCTdQ,3r1Q1k/p5pp/1p2p1p1/8/4p1Pb/PN2B2P/1qP5/5RK1 b - - 7 30,d8f8 f1f8,399,104,71,249,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/BealPFEj/black#60
WZGVW,3r3r/pP2kpQp/5n2/8/2b5/8/P4PPP/R2q2KR w - - 4 22,a1d1 d8d1,533,104,97,383,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/kw8YnAr8#43
93z4v,1r6/4ppkp/p5p1/2R5/8/p1P5/1P3PPP/6K1 w - - 0 25,b2a3 b8b1,412,95,100,597,backRankMate endgame mate mateIn1 oneMove rookEndgame,https://lichess.org/YAyEoLzp#49
gNUY2,4rrk1/p1p2ppp/1p3q2/8/2B3Q1/3P4/PP4PP/5R1K w - - 0 23,f1f6 e8e1 f6f1 e1f1,565,112,78,347,backRankMate endgame mate mateIn2 short,https://lichess.org/YslSR04s#45
MRW6E,1k3Q2/pppn4/8/8/3p4/P1pPq2p/2Q1B1r1/4KR2 b - - 0 36,d7f8 f1f8 e3e8 f8e8,571,100,67,131,backRankMate endgame mate mateIn2 short,https://lichess.org/RYDzuhuk/black#72
1TVbg,3r2k1/5ppp/p2Qp3/2p5/3b4/3P2P1/P1P2P1P/1R4K1 b - - 0 25,d8d6 b1b8 d6d8 b8d8,400,93,100,312,backRankMate endgame mate mateIn2 short,https://lichess.org/iGAsfVra/black#50
mAE3U,6k1/1p3pp1/3p3p/3P4/1R6/8/r3rPPP/R5K1 w - - 0 25,a1a2 e2e1,581,97,93,1586,backRankMate endgame mate mateIn1 oneMove rookEndgame,https://lichess.org/3MwRwEFy#49
jgPzr,3r2k1/p2P1ppp/1pR1p3/8/3P1P2/P7/6PP/6K1 b - - 0 26,d8d7 c6c8 d7d8 c8d8,542,104,81,1019,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/b30AUO12/black#52
hiNMl,6k1/5ppp/2b1p3/8/2P5/5PP1/1q3NKP/3R4 b - - 1 30,b2e2 d1d8 c6e8 d8e8,400,107,100,302,backRankMate endgame mate mateIn2 short,https://lichess.org/Fgjdm9dc/black#60
7NWLP,4r1k1/1p3rp1/2pppq1p/2b1p3/p3PPQ1/P1PP4/1P1B2PP/4RR1K w - - 0 21,f4e5 f6f1 e1f1 f7f1,440,87,75,202,backRankMate mate mateIn2 middlegame short,https://lichess.org/yDUgBomT#41
65bk4,4r1k1/pp5p/6p1/2b2n2/5B2/7Q/PP2r1PP/3q1R1K w - - 0 30,f1d1 e2e1 d1e1 e8e1,574,98,96,187,backRankMate mate mateIn2 middlegame short,https://lichess.org/J7YWMfse#59
zG0xD,6k1/5p1p/p5p1/3n4/1P6/r3P3/5PPP/3R2K1 w - - 0 30,d1d5 a3a1 d5d1 a1d1,577,99,80,1207,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/7ptJvuz6#59
ft929,3r4/4r3/p5kp/8/8/8/P4PPP/4R1K1 w - - 0 32,e1e7 d8d1 e7e1 d1e1,405,96,81,82,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/TnEJIcFm#63
NBDEE,7k/4r1pp/p1n4r/1p6/3Pp3/P3Pp1P/5B1K/2R2BN1 b - - 1 34,c6a5 c1c8 e7e8 c8e8,503,88,58,80,backRankMate mate mateIn2 middlegame short,https://lichess.org/i5vjRqcL/black#68
iNwgt,1rb4R/p4k1p/1Pp3p1/3p4/B1P5/2B2P2/P5PP/7K w - - 0 30,b6a7 b8b1 a4d1 b1d1 c3e1 d1e1,577,101,84,982,backRankMate endgame long mate mateIn3,https://lichess.org/0X0YWDog#59
xjOaR,rn1r2k1/1p3ppp/p5n1/6N1/4p3/1P6/P1P2PPP/R1BqR1K1 w - - 1 18,e1d1 d8d1,541,92,87,238,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/FlOHVCwF#35
S7MjB,8/pp5B/2pk4/3b2pp/1P1R1N2/r7/5PPP/6K1 w - - 3 41,f4d5 a3a1 h7b1 a1b1 d4d1 b1d1,494,94,82,245,backRankMate endgame long mate mateIn3,https://lichess.org/ObVdXrAD#81
l6PDI,8/ppp4k/4r1b1/8/1Pq1r3/8/PQ3PPP/2R3K1 w - - 0 28,c1c4 e4e1,575,94,85,65,backRankMate endgame master mate mateIn1 oneMove,https://lichess.org/Bxk9kra6#55
YuW6y,r3Q2k/2p3pp/p6r/1pPP4/1P2Rp1q/1P5b/3B1PP1/R5K1 b - - 1 26,a8e8 e4e8,570,97,77,194,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/nNwoK6eR/black#52
Hv48t,4r1k1/p1p2pp1/4r2p/3Q4/NPP5/P7/5bPP/q4R1K w - - 0 22,f1a1 e6e1 a1e1 e8e1,523,91,100,216,backRankMate endgame mate mateIn2 short,https://lichess.org/cpbKXcmG#43
Yb4sj,r1b2Q1k/p5pp/2p1n3/1p2b3/4N2q/2PP4/PP4PP/R1B2R1K b - - 6 19,e6f8 f1f8,483,91,100,114,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/eo0E914S/black#38
izHqc,2r3k1/3q1pp1/7p/1b1rP3/5Q2/4B3/PPP2PPP/R4RK1 w - - 3 24,f1d1 d5d1 a1d1 d7d1,563,103,82,372,backRankMate mate mateIn2 middlegame short,https://lichess.org/O2lsSocM#47
SneGc,2Q1q1kr/p2R1ppp/4p3/4n3/8/2N5/PP3PPP/3R2K1 b - - 0 21,e8c8 d7d8 c8d8 d1d8,551,106,83,733,backRankMate endgame fork mate mateIn2 short,https://lichess.org/8ZFZXnRR/black#42
MZO9M,2r3k1/p2q1p1p/6p1/8/4B3/8/Pb3PPP/3R2K1 w - - 0 21,d1d7 c8c1 d7d1 c1d1,585,111,67,50,backRankMate endgame mate mateIn2 short,https://lichess.org/mWBj2SCf#41
8pvFU,2br2k1/5ppp/3Bp3/1pq5/2p5/P1b5/2P1PPBP/3Q1KR1 w - - 4 24,d6c5 d8d1,522,98,96,1134,backRankMate hangingPiece mate mateIn1 middlegame oneMove,https://lichess.org/PC9Zsvo8#47
DxDqY,r5k1/p1p3pp/b3Nr2/3p4/4p2Q/2P5/PP4PP/R1B4K w - - 0 18,e6g5 f6f1,558,84,63,98,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/t9Ph2LmW#35
qDkLn,2r4k/5pp1/2N4p/3p4/pP6/Pb6/4RPPP/6K1 w - - 1 30,c6d4 c8c1 e2e1 c1e1,459,98,86,1209,backRankMate endgame mate mateIn2 short,https://lichess.org/BHrT0rw0#59
KfEzF,1k1r3r/5R1p/ppp5/2p1p2N/4P3/1P2b3/1PP3PP/R6K w - - 3 24,a1a6 d8d1 f7f1 d1f1,517,96,79,274,backRankMate endgame mate mateIn2 short,https://lichess.org/3s9b2mqe#47
9yrrs,2r4k/6pp/8/3QP3/8/1P6/6PP/2q2R1K w - - 0 35,f1c1 c8c1 d5d1 c1d1,568,102,53,173,backRankMate endgame mate mateIn2 queenRookEndgame short,https://lichess.org/u9iL4VNO#69
ymKSu,6k1/7p/p1p1N1p1/5p2/2P5/5P2/r4PPP/3R2K1 w - - 0 24,d1d6 a2a1 d6d1 a1d1,522,91,100,295,backRankMate endgame mate mateIn2 short,https://lichess.org/F3T3bjSr#47
XPMZW,k1Q1r3/pp6/6r1/5pP1/1P2q3/P7/5PP1/2RR2K1 b - - 12 31,e8c8 c1c8,553,107,86,728,backRankMate endgame mate mateIn1 oneMove queenRookEndgame,https://lichess.org/v5CiVRgR/black#62
Ne7dU,2kr4/5ppp/pp6/2p5/2P5/1P2P3/P2R1PPP/6K1 w - - 1 27,d2e2 d8d1 e2e1 d1e1,599,104,50,80,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/u9IDPK0R#53
slAZD,8/8/8/8/2rP4/1k6/5PPP/R5K1 w - - 0 52,a1c1 c4c1,445,105,96,506,backRankMate endgame hangingPiece master masterVsMaster mate mateIn1 oneMove rookEndgame,https://lichess.org/qBXj7sVg#103
k17pO,6k1/p4ppp/2p5/1bp5/8/7r/PPK5/3R4 b - - 3 31,h3h5 d1d8,586,104,80,410,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/ZibUqIGF/black#62
Ep4Jh,7k/5p1p/p4p2/2p5/4P3/8/PrP2PPP/3R2K1 w - - 0 26,d1d7 b2b1 d7d1 b1d1,571,98,64,142,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/ct0WJQYH#51
RTyLI,6k1/p5pp/5p2/8/1P6/8/1r3PPP/4R1K1 w - - 0 28,e1e4 b2b1 e4e1 b1e1,413,113,91,615,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/U1pBIPKV#55
fGP0Y,1r4k1/2p2ppp/4p3/2N5/3P4/2q1P3/5PPP/2R3K1 w - - 0 24,c1c3 b8b1 c3c1 b1c1,472,88,100,125,backRankMate endgame mate mateIn2 short,https://lichess.org/a4wYlhfi#47
7WtNl,r3Q2k/p1p3pp/1p1p4/5q2/3P4/7P/PP1B1PP1/4R1K1 b - - 4 21,a8e8 e1e8 f5f8 e8f8,399,102,100,289,backRankMate endgame mate mateIn2 short,https://lichess.org/l826Wujw/black#42
b0S8u,1r2Q2k/6pp/p7/6p1/1pNP4/1Pb4P/K1P1R1B1/2q5 b - - 2 37,b8e8 e2e8,400,92,47,76,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/xvphrezQ/black#74
5dfrI,r1b1r1k1/1pp2ppp/p7/5P2/4Q3/4B3/PPP3PP/3R1RK1 b - - 0 18,e8e4 d1d8 e4e8 d8e8,502,97,87,123,backRankMate endgame mate mateIn2 short,https://lichess.org/YV5PuXgt/black#36
deiA9,3r2k1/ppp2p2/7p/8/2P5/2P1P3/P4PPP/2Qr2K1 w - - 1 23,c1d1 d8d1,560,95,84,682,backRankMate endgame hangingPiece mate mateIn1 oneMove,https://lichess.org/53UhMN7H#45
rWu1y,2k2b1r/ppprBppp/8/4Q3/8/2P5/bP3PPP/RN4K1 w - - 0 16,a1a2 d7d1 e5e1 d1e1,579,94,100,228,backRankMate fork mate mateIn2 middlegame short,https://lichess.org/9qJG2Kx1#31
zNPke,6k1/5ppp/1Rn1p3/2Pp4/3P4/4P2P/3r1PP1/6K1 b - - 1 35,c6e7 b6b8 e7c8 b8c8,400,96,83,378,backRankMate endgame mate mateIn2 short,https://lichess.org/GNcnxIXc/black#70
5Nr5j,3r4/p1R2pkp/6p1/4q3/8/8/PP3PPP/4R1K1 w - - 0 28,e1e5 d8d1 e5e1 d1e1,400,109,88,593,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/Zrj1fzIc#55
PuqK3,4r2k/pp4pp/2p5/4Q3/8/8/PPP3PP/3R2K1 b - - 0 23,e8e5 d1d8 e5e8 d8e8,454,105,100,166,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/LHEBSsVB/black#46
Wz7ow,2Qr4/p3b1kp/5np1/4p3/4P3/4BN2/P4PPP/6K1 w - - 0 21,c8e6 d8d1 f3e1 d1e1,539,103,80,400,backRankMate endgame mate mateIn2 short,https://lichess.org/KIchFG0Q#41
eJ2pg,2kr3r/p3q2p/2p3p1/8/8/2P5/PP3PPP/RN2R1K1 w - - 0 20,e1e7 d8d1 e7e1 d1e1,550,111,69,400,backRankMate endgame mate mateIn2 short,https://lichess.org/3uKHpKfX#39
ebJ1b,3r2k1/pB3p1p/6p1/4n1Q1/2b5/4P3/5PPP/R2q2K1 w - - 5 27,a1d1 d8d1,492,103,95,307,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/TkFwp4H5#53
ub8Bq,5r1k/p1p3pp/8/2pqP3/P7/1P2p3/2Q3PP/3R3K w - - 0 26,d1d5 f8f1,428,105,100,255,backRankMate endgame master mate mateIn1 oneMove queenRookEndgame,https://lichess.org/uIrPoDeJ#51
B9YYv,r1b1rQ1k/pp4pp/2p5/4P3/2P3n1/P2qP3/1B4PP/R4RK1 b - - 2 18,e8f8 f1f8,482,90,100,110,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/DsMtQkzR/black#36
vnaoz,r3Q1kr/1pp2ppp/p7/6B1/3P2q1/8/PP3PPP/R3R1K1 b - - 2 19,a8e8 e1e8,579,105,71,672,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/uJxkmp2f/black#38
j1vUe,2br2k1/5ppp/2P1p3/8/1Q6/4P3/5PPP/1R1q2K1 w - - 4 27,b1d1 d8d1 b4e1 d1e1,571,95,86,78,backRankMate endgame mate mateIn2 short,https://lichess.org/diodeXcp#53
QtBcx,5r1k/pp4pp/6q1/1N1Bn2n/5pbB/P3Q3/1PP3PP/R4RK1 b - - 0 24,f4e3 f1f8,506,95,92,414,backRankMate hangingPiece mate mateIn1 middlegame oneMove,https://lichess.org/j4ESvmIK/black#48
MVNjt,3r1Q1k/1pp3pp/2np4/2bB4/4P3/r2P3P/PpP3P1/1K3R1R b - - 3 18,d8f8 f1f8,559,104,71,371,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/SGv0WMDy/black#36
1eMsr,3rr1k1/6pp/p4p2/P7/q1p2P2/3P1R2/1P4PP/3Q3K w - - 0 27,d1a4 e8e1 f3f1 e1f1,479,87,100,370,backRankMate endgame mate mateIn2 queenRookEndgame short,https://lichess.org/qGNJaOhD#53
owXYR,r4rk1/2pq1ppp/p2p4/1p1P4/8/1P2Q2P/P3RPP1/4R1K1 b - - 4 20,f8e8 e3e8 a8e8 e2e8 d7e8 e1e8,460,102,97,1424,backRankMate endgame long mate mateIn3,https://lichess.org/QsSk2j3L/black#40
l6lXe,5rk1/pp1b2pp/4p3/8/3PpB2/2P5/P1P3PP/5R1K w - - 0 23,f4e5 f8f1,511,91,100,315,backRankMate endgame hangingPiece mate mateIn1 oneMove,https://lichess.org/leNYwTnt#45
iUls5,7k/5rpp/8/ppQ2r2/8/1R3P1P/4RPK1/8 b - - 0 50,f5c5 e2e8 f7f8 e8f8,562,104,66,128,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/9ka86yRm/black#100
WXzYI,3q2k1/pp3p1p/3rn2Q/6p1/8/4P3/PPR2PPP/5RK1 w - - 4 25,f1c1 d6d1 c1d1 d8d1,407,101,96,319,backRankMate endgame mate mateIn2 short,https://lichess.org/xArYE7C0#49
JJ9a0,6k1/pR3ppp/1bp5/5r2/8/2P2PK1/PP2r2P/R7 b - - 2 26,e2b2 b7b8 b6d8 b8d8,472,107,89,603,backRankMate endgame mate mateIn2 short,https://lichess.org/qml8Muyw/black#52
3romC,3r3k/p1p3pp/8/1p6/N2RR3/7P/PPPb2PK/5r2 b - - 1 26,d8d4 e4e8 f1f8 e8f8,500,106,93,2737,backRankMate endgame mate mateIn2 short,https://lichess.org/dcF9wLAR/black#52
nzqzG,3r3k/p5p1/1p2PbQp/2p2P2/2P1q3/1P6/P5PP/4R2K w - - 0 34,e1e4 d8d1 e4e1 d1e1,546,84,100,91,backRankMate endgame mate mateIn2 short,https://lichess.org/5ljl1oPa#67
LYLC3,2r3k1/pp3ppp/8/3R4/1P6/4P3/5PPP/6K1 w - - 1 26,d5d7 c8c1 d7d1 c1d1,526,105,81,547,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/1hqFxA5f#51
NPoX4,2k3r1/pp3b2/2p4Q/8/4PBq1/8/P4PPP/3R2K1 w - - 1 28,f4g3 g4d1,488,89,88,243,backRankMate endgame hangingPiece mate mateIn1 oneMove,https://lichess.org/jlBK30pv#55
pgeed,8/p1pR2pp/1p3k2/4rp2/8/2P5/PP2rPPP/1R4K1 w - - 4 25,d7c7 e2e1 b1e1 e5e1,399,113,91,1546,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/Y9zppgBM#49
Pb7mR,6k1/p4ppp/1p2p3/4P3/8/r2rPP2/2R2K1P/R7 b - - 1 25,a3a1 c2c8 d3d8 c8d8,409,101,100,250,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/Q00rrtn1/black#50
XOSR7,2k5/ppp3pp/8/8/1N6/P7/1r3PPP/4R1K1 w - - 0 25,e1e7 b2b1 e7e1 b1e1,479,107,93,483,backRankMate endgame mate mateIn2 short,https://lichess.org/jTLXcpd5#49
z2hig,1rb1qQ1k/1p1p2pp/p7/4P3/2Bp4/3P4/PPPN2PP/5RK1 b - - 0 17,e8f8 f1f8,456,90,100,84,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/m43A5GXz/black#34
YKGNO,r2R3k/1p4pp/p1p2bq1/2B1p3/P3Pn2/2P4P/1P1Q1PP1/3R2K1 b - - 5 28,a8d8 d2d8 f6d8 d1d8 g6e8 d8e8,529,93,92,143,backRankMate long mate mateIn3 middlegame,https://lichess.org/hfMYskb6/black#56
23an7,5rk1/p1p3pp/1b2q3/2ppPr2/5B2/2P5/PP1Q2PP/4RR1K w - - 0 23,f4g3 f5f1 e1f1 f8f1,588,86,100,266,backRankMate mate mateIn2 middlegame short,https://lichess.org/1LxwZs9I#45
0jKTK,4r1k1/p4ppp/3N4/5P2/2p1nrP1/4R2P/PPP5/4R1K1 b - - 3 27,e4d6 e3e8 d6e8 e1e8,558,105,65,134,backRankMate endgame mate mateIn2 short,https://lichess.org/RJKSqJvn/black#54
DX5CD,1k1r4/ppp4R/5pp1/8/3R1P2/8/PP3P2/1K6 b - - 0 25,d8d4 h7h8 d4d8 h8d8,576,104,73,81,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/CcAVh7PX/black#50
qM62r,6k1/5ppp/2p5/8/1p6/1K2b1P1/1PP5/r1N1R3 b - - 3 37,e3h6 e1e8,402,114,81,132,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/g2j1AiYc/black#74
nUOj6,4rk2/1p3p2/2p2p2/3n1P2/PP4Q1/8/6PP/3R3K w - - 5 37,d1d5 e8e1,463,104,100,479,backRankMate endgame master mate mateIn1 oneMove queenRookEndgame,https://lichess.org/m0iOFc48#73
fo1uD,6k1/5ppp/1p6/2pP4/r1P5/8/4RPPP/6K1 w - - 0 30,d5d6 a4a1 e2e1 a1e1,481,97,79,696,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/xngI2Wd4#59
GuaKT,6k1/1p2rppp/p1p3b1/2P2N2/1P6/5P2/P2R2PP/6K1 b - - 9 29,g6f5 d2d8 e7e8 d8e8,453,107,80,736,backRankMate endgame mate mateIn2 short,https://lichess.org/gUwSSRES/black#58
ZuLdx,4rQ1k/r1qb2pp/p1p5/2N1p3/P2P4/1PP3P1/7P/R4RK1 b - - 5 28,e8f8 f1f8,478,103,97,488,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/rWaRKC1W/black#56
Ywsl3,rn2r3/ppp2RPp/1b1k4/3B4/2b5/1P6/PB4PP/RN5K w - - 0 20,b3c4 e8e1 f7f1 e1f1,463,91,100,210,backRankMate mate mateIn2 middlegame short,https://lichess.org/fO5tQbKY#39
xgc4G,7k/ppp3pp/2n5/5PB1/8/5r2/PP3P1P/4R1K1 b - - 0 20,f3f5 e1e8 f5f8 e8f8,454,105,85,466,backRankMate endgame mate mateIn2 short,https://lichess.org/HnVPDspL/black#40
3fYH8,Q4rk1/p4ppp/3Rp3/4P3/1p6/8/q4PPP/3R2K1 b - - 0 21,f8a8 d6d8 a8d8 d1d8,530,101,96,394,backRankMate endgame mate mateIn2 queenRookEndgame short,https://lichess.org/Fs1adFFR/black#42
ZWNrO,4k3/8/8/2QpP1pq/1p3p2/5P2/PP2R3/K7 w - - 1 40,c5d5 h5h1 e2e1 h1e1 d5d1 e1d1,597,88,92,112,backRankMate endgame long mate mateIn3,https://lichess.org/VCWr6cWE#79
cTrHf,1k4Q1/ppp5/1b3n1p/8/3P1q2/P5NP/5PP1/R3R1K1 b - - 0 33,f6g8 e1e8,525,86,78,67,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/J6oKT7gI/black#66
X8K9I,4r1k1/5ppp/3R4/6P1/4RP2/P6P/1Pr1BK2/8 b - - 0 31,e8e4 d6d8 e4e8 d8e8,399,96,100,113,backRankMate endgame mate mateIn2 short,https://lichess.org/v28NuZAu/black#62
ixSsc,1r4k1/5pp1/p3p2p/8/8/2r1P3/PP1R1PPP/6K1 w - - 0 28,b2c3 b8b1 d2d1 b1d1,406,91,76,125,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/u0fmKksc#55
bpOz4,4r1k1/p4pp1/5b2/8/8/7Q/P3r1PP/1R1q3K w - - 0 26,b1d1 e2e1 d1e1 e8e1,545,105,86,418,backRankMate endgame mate mateIn2 short,https://lichess.org/GbMaX7by#51
Xjqyg,k2r2r1/pp4pp/4pp2/3n4/3P1B2/6P1/PPR2P1P/2R3K1 b - - 1 24,d8d7 c2c8 g8c8 c1c8,472,91,76,147,backRankMate endgame mate mateIn2 short,https://lichess.org/zVmnWAdN/black#48
0pTFA,r1b2r1k/pp4pp/1b6/4pp2/2B1N1P1/8/PPP3P1/R1B2R1K b - - 0 18,f5e4 f1f8,508,99,74,98,backRankMate hangingPiece mate mateIn1 middlegame oneMove,https://lichess.org/XfntXnl5/black#36
n5HvT,3r4/pb4pB/2p5/1p2nR2/6k1/8/PPP3PP/7K w - - 7 32,f5e5 d8d1 e5e1 d1e1,532,106,74,109,backRankMate endgame mate mateIn2 short,https://lichess.org/4jbBhLBQ#63
I4Toq,6k1/p5pp/2p5/4q3/1QPp4/1P6/PB4PP/4q2K w - - 0 29,b4e1 e5e1,399,111,100,209,backRankMate endgame master mate mateIn1 oneMove,https://lichess.org/MHoBwktJ#57
FyelH,6k1/5pp1/7p/8/4q3/6B1/3r1PPP/4R1K1 w - - 0 27,e1e4 d2d1 e4e1 d1e1,584,92,100,86,backRankMate endgame mate mateIn2 short,https://lichess.org/kw2V4q9j#53
9LF1F,r4rk1/pQ3R1p/3p2p1/6N1/3b4/8/6PP/5q1K w - - 0 25,f7f1 f8f1,409,96,82,223,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/rrYKSsg2#49
QLvrv,5Q1k/4b1pp/1q2p3/3p2P1/3P4/2pNP2P/r7/5RK1 b - - 4 34,e7f8 f1f8,399,113,92,633,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/Dwan7u4N/black#68
vnW2d,5r1k/p5p1/1p2p2p/2p5/4Q3/2P5/PP4PP/3R1q1K w - - 2 25,d1f1 f8f1,419,105,64,163,backRankMate endgame mate mateIn1 oneMove queenRookEndgame,https://lichess.org/vJbl2EUI#49
HXvDn,1k1Q4/ppp5/5q2/8/8/5P2/PP1R2P1/2K5 b - - 0 36,f6d8 d2d8,399,108,87,419,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/iRH6LLgW/black#72
2kFh1,5k1r/p4ppp/3rp1n1/1RP5/4Q3/8/P4PPP/1R1q2K1 w - - 1 25,b1d1 d6d1 e4e1 d1e1,585,105,50,191,backRankMate endgame mate mateIn2 short,https://lichess.org/vY0eTQMz#49
UagY9,r3r2k/ppp4p/6p1/5p2/3R4/P1Q4P/1P3PPB/4q1K1 w - - 0 26,c3e1 e8e1,422,114,94,713,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/Fv7ecBEr#51
bX099,8/5pk1/1pNrp2p/p5p1/8/8/5PPP/1R4K1 w - - 2 37,b1b6 d6d1,430,110,89,990,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/OziCV2gM#73
WQGk0,r3r1k1/1p2qp1p/p4p2/1b1pN3/3P4/1QP5/P4PPP/R3R1K1 w - - 0 18,e5g4 e7e1 a1e1 e8e1,569,87,100,99,backRankMate mate mateIn2 middlegame short,https://lichess.org/P8wx4Yzd#35
8H8l6,6k1/1p4pp/p4n2/3p4/1q6/5Q2/P1rB2PP/7K w - - 0 31,d2b4 c2c1 b4e1 c1e1 f3f1 e1f1,599,107,84,529,backRankMate endgame long mate mateIn3,https://lichess.org/4BkIM1wj#61
xEFh4,4rr2/p1p4k/b2p2pp/1p1P4/2P2p2/1P1R4/P1N2PPP/4R1K1 w - - 0 27,c2b4 e8e1,456,101,97,713,backRankMate endgame hangingPiece mate mateIn1 oneMove,https://lichess.org/00faMYOw#53
P1NCR,6k1/5ppp/4p3/p1N5/3P4/2q5/1r3PPP/2R3K1 w - - 0 41,c1c3 b2b1 c3c1 b1c1,513,89,100,125,backRankMate endgame mate mateIn2 short,https://lichess.org/jfStduFa#81
P7z9U,6k1/5ppp/p7/8/2R5/6PP/P4B1K/3q4 b - - 2 43,d1d5 c4c8 d5d8 c8d8,400,91,58,113,backRankMate endgame mate mateIn2 short,https://lichess.org/HOA0LMjX/black#86
Mr7N6,r1br2k1/p4ppp/1p2p3/3p4/2PR4/1B6/PP3PPP/5RK1 b - - 0 15,d5c4 d4d8,467,93,70,156,backRankMate endgame hangingPiece mate mateIn1 oneMove,https://lichess.org/FlLvykq3/black#30
X5Teu,3r2k1/2R2pp1/p2r3p/7Q/8/8/PP3PPP/2Rq2K1 w - - 0 30,c1d1 d6d1 h5d1 d8d1,497,104,87,107,backRankMate endgame mate mateIn2 queenRookEndgame short,https://lichess.org/Jrg7rVtZ#59
2LP8e,2r3k1/pp3ppp/4p1b1/3nN3/8/P1N1P3/1P1R1PPP/6K1 w - - 3 25,c3d5 c8c1 d2d1 c1d1,530,97,94,201,backRankMate endgame mate mateIn2 short,https://lichess.org/xIv0IOBI#49
blItR,4B3/k3Bp2/pp2p1p1/3qP3/P1N2P1Q/8/2P3PP/7K w - - 1 36,f4f5 d5d1 h4e1 d1e1,580,101,77,337,backRankMate endgame mate mateIn2 short,https://lichess.org/VHJNicfb#71
gndf9,3r2k1/r4ppp/p3p3/n1P5/3P1P2/P4B2/7P/1R3R1K b - - 0 26,d8d4 b1b8 d4d8 b8d8,504,83,85,342,backRankMate endgame mate mateIn2 short,https://lichess.org/qdgMbHMd/black#52
VjExe,6k1/1R3ppp/p1p2n2/3p4/3P4/5PK1/3r2PP/8 b - - 0 28,d2d4 b7b8 f6e8 b8e8,480,105,93,1486,backRankMate endgame mate mateIn2 short,https://lichess.org/VjNmZSxh/black#56
IQ6YU,rn3rk1/pp4p1/2pqp2B/4p3/8/2PQ4/PP4PP/R3b2K w - - 0 19,d3d6 f8f1,463,94,100,186,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/QkCOkaA6#37
NGIuq,7k/p2b2pp/2p5/1p2r3/5p2/8/PP2NKPP/3R4 b - - 1 33,d7g4 d1d8 e5e8 d8e8,505,107,94,1494,backRankMate endgame mate mateIn2 short,https://lichess.org/PyxW2wIK/black#66
WQdjY,2k4r/pp2bpp1/2p4p/N7/5B2/1PPr4/1P3PPP/RN4K1 w - - 0 19,a5c4 d3d1,478,102,100,149,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/vRBaaPHy#37
KJXuh,2r3k1/6pp/1p3p2/1b2p3/1Q2P3/1PB2P2/6PP/q6K w - - 0 40,c3a1 c8c1 b4e1 c1e1,546,94,82,174,backRankMate endgame fork mate mateIn2 short,https://lichess.org/aIDYcCZe#79
NzNfD,6k1/p4ppp/8/r2nbP2/2p3PP/5K2/8/3R4 b - - 3 34,d5f6 d1d8 f6e8 d8e8,572,107,63,483,backRankMate endgame mate mateIn2 short,https://lichess.org/Vx4vKjEe/black#68
7cMDr,r3r3/1p3k2/p4n1p/3p4/6p1/P1N3P1/1PQ3PP/1R2q2K w - - 5 25,b1e1 e8e1,497,98,64,92,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/QWgA5GdT#49
eXbZZ,5r1k/p5pp/1p2p3/3p4/3P4/4PP2/PP5P/2R3K1 b - - 0 30,f8f3 c1c8 f3f8 c8f8,541,101,64,266,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/QSejmmoA/black#60
aYeDC,6k1/5ppp/p4n2/1p2p3/1P2P3/P2PnPPN/r6P/2R4K b - - 7 36,a2a3 c1c8 f6e8 c8e8,572,85,81,86,backRankMate endgame mate mateIn2 short,https://lichess.org/0i54HvRk/black#72
QPFmx,r5k1/1p1r1ppp/2pP4/1p1n1P2/8/P2B3P/1PP1R1P1/4R1K1 b - - 1 22,d7d6 e2e8 a8e8 e1e8,536,84,100,103,backRankMate endgame mate mateIn2 short,https://lichess.org/vlDVfQ2G/black#44
MHqQn,6k1/3p1ppp/p1B5/1p6/8/4r1P1/PPP4P/3R2K1 b - - 0 26,d7c6 d1d8 e3e8 d8e8,559,93,78,305,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/hyhSzdhT/black#52
88eDW,1r3r2/2bR1B1p/6pk/8/3Q4/4P3/5PPP/6K1 w - - 12 36,d7c7 b8b1 c7c1 b1c1 d4d1 c1d1,463,112,97,421,backRankMate endgame long mate mateIn3,https://lichess.org/mRbFgoOk#71
liupr,r3k3/pppqpp2/3p2p1/3P4/2nQ1P2/2N4P/PPP1P3/2KR1B1r b q - 2 14,c4b6 d4h8,485,106,92,820,backRankMate master mate mateIn1 middlegame oneMove,https://lichess.org/YG5kHPUv/black#28
Cb9OQ,5rk1/6pp/p3p3/3p4/6Q1/1P6/P5PP/R4q1K w - - 2 24,a1f1 f8f1,557,107,74,717,backRankMate endgame mate mateIn1 oneMove queenRookEndgame,https://lichess.org/9Mw7pGGV#47
ZjxJi,7k/2p3pp/p4p2/3r4/3P1K1P/1nr5/1R6/1R6 b - - 1 40,b3d4 b2b8 d5d8 b8d8,552,111,70,293,backRankMate endgame mate mateIn2 short,https://lichess.org/ecjDjS7f/black#80
IClvV,1r3rk1/3b1p1p/p1p3p1/4p3/P7/R1P1PN2/5PPP/1R4K1 w - - 0 18,f3e5 b8b1,423,104,76,298,backRankMate endgame hangingPiece mate mateIn1 oneMove,https://lichess.org/wGaCF2go#35
LMD8U,6k1/pQ2rppp/8/4q3/8/5P2/PPP3PP/2KR4 b - - 0 26,e7b7 d1d8 e5e8 d8e8,399,98,79,220,backRankMate endgame mate mateIn2 queenRookEndgame short,https://lichess.org/lB5dFnWd/black#52
6YibV,2r2Q1k/6pp/8/3p4/3P3q/P3BR2/1r4PP/R5K1 b - - 2 30,c8f8 f3f8,590,98,63,188,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/ar60S8S9/black#60
QCN5i,6k1/5ppp/p2rp3/1p6/3N1P2/8/PP2PPKP/2R5 b - - 0 23,d6d4 c1c8 d4d8 c8d8,425,113,82,336,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/HmCozDeY/black#46
CS0lQ,2kr4/1p1bbp2/p3p3/q2pPp1r/3P1P1p/PR6/1P4PP/R1BQ3K w - - 2 20,d1h5 a5e1,433,99,73,376,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/igUsDGgB#39
SAzGU,8/rp2k2p/3p4/1b1B1p2/P2R4/1P6/5PPP/6K1 w - - 0 26,a4b5 a7a1 d4d1 a1d1,415,108,84,701,backRankMate endgame mate mateIn2 short,https://lichess.org/WsnDSkW2#51
8VqQH,6k1/1pp2pp1/6Qp/p7/P7/1Bq5/2P3PP/3Rr2K w - - 1 27,d1e1 c3e1,468,102,87,99,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/UOFYPr6O#53
Mu6mO,r5k1/1b3p2/2p2B2/1p5p/8/1P6/1PP2PPP/4R1K1 w - - 0 23,e1e7 a8a1 e7e1 a1e1,488,88,70,217,backRankMate endgame mate mateIn2 short,https://lichess.org/ZjVEwEVB#45
ZKR2f,3r2k1/3Q1ppp/3P4/p1p5/8/P6P/5PP1/1R4K1 b - - 0 29,d8d7 b1b8 d7d8 b8d8,520,88,100,126,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/fioWNiTm/black#58
T2HSN,2r3k1/7p/4qppQ/3p4/3P4/2r5/5PPP/4R1K1 w - - 0 32,e1e6 c3c1 h6c1 c8c1 e6e1 c1e1,491,111,83,727,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/B5SugXu8#63
eM1iE,6k1/pp3ppp/1b6/8/3p2P1/P2P1Q1q/1r2rP1P/2R3KR b - - 0 26,h3f3 c1c8 b6d8 c8d8 e2e8 d8e8,504,88,64,176,backRankMate endgame long mate mateIn3,https://lichess.org/OuOqXUzZ/black#52
dC4VH,6k1/5ppp/1R2p3/p7/8/4PP1P/P4PK1/2r5 b - - 1 25,c1c2 b6b8 c2c8 b8c8,468,108,81,586,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/uMmkBOJI/black#50
GoUmb,r1b1r1k1/ppp2pp1/3pq2p/4P3/8/2N3Q1/PPP2PPP/3RR1K1 w - - 0 17,e5d6 e6e1 d1e1 e8e1,578,95,89,875,backRankMate mate mateIn2 middlegame short,https://lichess.org/EPpdjGR5#33
KggWJ,rnb2k1r/p1p1pp1p/1p3bp1/4P3/2P5/2N2N2/PP3PPP/3RKB1R b K - 0 10,f6g7 d1d8,479,100,90,187,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/8oarqTX9/black#20
HSnNH,r3r1k1/1b3ppp/pp4q1/8/P2Np3/2P1QB1P/2P2PP1/1R2R1K1 b - - 0 22,e4f3 e3e8 a8e8 e1e8,481,81,73,133,backRankMate mate mateIn2 middlegame short,https://lichess.org/LfekIYgs/black#44
luNTt,2r5/5p2/p3bkp1/1p3p2/2PR4/P7/5PPP/2R3K1 w - - 0 34,c4b5 c8c1 d4d1 c1d1,502,104,81,411,backRankMate endgame hangingPiece mate mateIn2 short,https://lichess.org/mzMrxFtS#67
g99Rw,6k1/1p3pp1/p2r3p/4p3/r3P3/2P5/1P3PPP/3R2K1 w - - 0 23,d1d6 a4a1 d6d1 a1d1,519,90,100,82,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/wiWIk2Ct#45
RZh8L,4rQ1k/pp4pp/2p5/8/8/4P3/Pq4PP/R4RK1 b - - 1 19,e8f8 f1f8,400,94,77,239,backRankMate endgame mate mateIn1 oneMove queenRookEndgame,https://lichess.org/7Yb4RSPq/black#38
OznwC,3r1rk1/1Q2bppp/p7/4Pq2/8/8/P5PP/5R1K w - - 0 22,f1f5 d8d1 f5f1 d1f1,481,99,85,126,backRankMate endgame mate mateIn2 short,https://lichess.org/41XhMyd0#43
hebce,r2rb1k1/2R2p1p/p3pQp1/1p2N3/8/8/PP3PPP/2Rq2K1 w - - 2 27,c1d1 d8d1,534,93,100,92,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/O38BvuhR#53
VzPPq,2rrnQ1k/2q1b1pp/4p3/p1p1P3/P2p2P1/2N1B2P/1PP5/3R1RK1 b - - 3 23,e7f8 f1f8,516,100,78,223,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/ozxXILrc/black#46
BR7GM,5r1k/p3b1pp/2pp4/4p3/4P1r1/1B3bNq/PPP2Q1P/R4RK1 b - - 5 27,f3e4 f2f8 e7f8 f1f8,540,100,77,679,backRankMate mate mateIn2 middlegame short,https://lichess.org/h77OTsYn/black#54
FFvax,r4r1k/pp1Q4/4B1pp/4R3/8/8/PP4PP/1R3q1K w - - 1 25,b1f1 f8f1,423,97,73,119,backRankMate endgame master mate mateIn1 oneMove,https://lichess.org/bWlfkcVL#49
AZxCb,1r4k1/pQ3ppp/2r2n2/8/8/8/PP3PPP/R2R2K1 b - - 0 23,b8b7 d1d8 f6e8 d8e8,557,91,74,90,backRankMate endgame mate mateIn2 short,https://lichess.org/BPpfllNL/black#46
hCcTe,3r1rk1/pp2npb1/6pp/8/4b3/P7/BPP2PPP/R1B1R1K1 w - - 0 18,e1e4 d8d1 e4e1 d1e1,526,114,68,183,backRankMate mate mateIn2 middlegame short,https://lichess.org/ZNKNhhZY#35
YZCgb,2r5/1p3k2/p3p3/3p2p1/1P1P4/P7/5PPP/4R1K1 w - - 2 29,e1e3 c8c1 e3e1 c1e1,412,94,41,42,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/tzJtVfs0#57
mtKfZ,2r3k1/6p1/1P5p/3P4/P7/3R4/6PP/7K w - - 1 38,d5d6 c8c1 d3d1 c1d1,586,97,75,75,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/HsXhHgLN#75
oMcBK,2r3k1/p4pp1/b3p2p/3p4/3Q4/1P2P3/P4PPP/1Rq3K1 w - - 2 24,b1c1 c8c1 d4d1 c1d1,515,88,100,49,backRankMate endgame mate mateIn2 short,https://lichess.org/kjvxCvM1#47
fnzOp,2r3k1/5ppp/8/R7/8/5P1P/2Q3PK/8 b - - 0 32,c8c2 a5a8 c2c8 a8c8,442,93,76,226,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/xO7X2vsg/black#64
O2pye,2r3k1/5ppp/1R2p3/p2pP3/3P4/P5P1/5P1P/6K1 b - - 0 25,c8c4 b6b8 c4c8 b8c8,454,104,96,314,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/DlMgQPqn/black#50
sM8nJ,4r3/pb6/1kpp3p/1p5N/4r3/1P4Q1/P1P2PPP/3q1RK1 w - - 0 29,f1d1 e4e1 d1e1 e8e1,462,104,89,1020,backRankMate endgame mate mateIn2 short,https://lichess.org/D2lJ5kur#57
mp3nk,r2kr3/pppn2p1/1b3nBp/8/2NP4/1QP2R2/PP4PP/R3q2K w - - 6 18,a1e1 e8e1 f3f1 e1f1,562,91,77,562,backRankMate mate mateIn2 middlegame short,https://lichess.org/fXzWQoj8#35
L11zS,r5k1/p5pp/3R4/3P4/4Pp2/3r4/6PP/5R1K w - - 0 32,f1f4 d3d1 f4f1 d1f1,589,108,78,297,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/LqPRhBja#63
usGkX,rn2r2k/1b4pp/p1p2p2/1pBn1N2/7R/5B2/P1Q2PPP/3Rq1K1 w - - 7 26,d1e1 e8e1,414,96,80,186,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/gKvwtqbm#51
fd3r3,6k1/3q3p/p5pQ/1p1bBp2/1P1Pp3/P1r5/5PPP/4R1K1 w - - 2 28,e1e3 c3c1 e3e1 c1e1,501,116,80,512,backRankMate endgame mate mateIn2 short,https://lichess.org/8t0cnqyw#55
D4dbI,r2r2k1/5ppp/pp1p2q1/2p1N3/P3P3/2PQ4/1P3PPP/R2R2K1 b - - 0 19,d6e5 d3d8 a8d8 d1d8,478,98,84,256,backRankMate endgame mate mateIn2 short,https://lichess.org/6ZKtKFWh/black#38
PT4fq,3r2k1/p4ppp/2p1p3/2p1P3/2b1P3/1N1P1R2/P5PP/7K w - - 0 28,d3c4 d8d1 f3f1 d1f1,400,104,100,146,backRankMate endgame mate mateIn2 short,https://lichess.org/xl1z31Sp#55
GOscI,3r1Q1k/6pp/p3p3/8/B7/2P2R1P/q5P1/7K b - - 2 34,d8f8 f3f8,588,101,79,364,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/7JUd7umU/black#68
qsE8N,r1b3k1/p1prRppp/2pB4/8/8/2P5/P1P2PPP/R5K1 b - - 0 15,c7d6 e7e8,449,99,57,118,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/y7Gmv0Y0/black#30
A41q7,2Q2rk1/p4ppp/8/8/3PRb2/P1B2q1P/1P3P2/4R1K1 b - - 0 23,f8c8 e4e8 c8e8 e1e8,554,105,70,180,backRankMate endgame mate mateIn2 short,https://lichess.org/BRbxt3GR/black#46
zrf6p,r3r1k1/1b1p1ppp/p1n5/1p3P2/5BQ1/P1N5/BP4PP/R3q2K w - - 1 21,a1e1 e8e1,447,101,100,373,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/YFRxhYM6#41
smc3h,r5k1/5ppp/2rPp3/R1p1P3/2P2PP1/3K3P/8/1R6 b - - 0 44,a8a5 b1b8 c6c8 b8c8,435,99,100,268,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/ixGeDkrb/black#88
bb7WI,4r3/8/2k1r2p/1p6/4N3/2bP1R2/5PPP/R5K1 w - - 0 27,e4c3 e6e1 a1e1 e8e1,399,116,95,1317,backRankMate endgame mate mateIn2 short,https://lichess.org/CQUmqIRo#53
Yi5Po,1r1r3k/3n1Qp1/p4p1p/8/3P3B/8/P4PPP/4R1K1 w - - 3 27,e1e7 b8b1 e7e1 b1e1,566,91,91,147,backRankMate endgame mate mateIn2 short,https://lichess.org/WRVqZLSM#53
xJrJB,3r2k1/p4ppp/1pb1p3/2p5/6B1/2q5/P1P2PPP/3R2K1 b - - 1 24,c3c2 d1d8 c6e8 d8e8,570,102,69,674,backRankMate endgame hangingPiece mate mateIn2 short,https://lichess.org/zgEDE7ny/black#48
VvPq2,4r1k1/R4ppp/P7/2K5/8/4N2P/6n1/8 b - - 0 32,e8e3 a7a8 e3e8 a8e8,581,91,78,225,backRankMate endgame mate mateIn2 short,https://lichess.org/VnBVBev8/black#64
FTzbB,r2r2k1/pp3p1p/6p1/4p3/8/N1P3Q1/PP2RPPP/R2q2K1 w - - 1 21,a1d1 d8d1 e2e1 d1e1,469,108,93,435,backRankMate endgame mate mateIn2 short,https://lichess.org/3hkZREBg#41
dH2Ic,rn4k1/p1p2ppp/1p1r4/5nQ1/2P1p3/5N2/PB3PPP/6K1 w - - 0 20,g5f5 d6d1 f3e1 d1e1,420,105,100,201,backRankMate endgame mate mateIn2 short,https://lichess.org/4LZj2lmw#39
Ac6YY,2r3k1/3q1p1p/p5p1/1p6/8/PP6/1P3PPP/3R2K1 w - - 0 25,d1d7 c8c1 d7d1 c1d1,555,107,79,578,backRankMate endgame mate mateIn2 rookEndgame short,https://lichess.org/B5okVsGD#49
IWC2p,4rrk1/ppp3pp/5n2/8/8/2P5/PQ3PPP/3Rq1K1 w - - 3 22,d1e1 e8e1,437,93,86,538,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/BtDFDEno#43
nDOmd,3r2k1/2R2ppp/ppq1p3/8/4P3/1P3N2/P4PPP/6K1 w - - 0 25,c7c6 d8d1 f3e1 d1e1,399,118,97,452,backRankMate endgame mate mateIn2 short,https://lichess.org/PFJORst3#49
ERd8l,r3r1k1/ppp2ppp/3n4/8/8/2N2P2/PPP1R1PP/2K1R3 b - - 2 18,d6f5 e2e8 a8e8 e1e8,552,86,100,53,backRankMate endgame mate mateIn2 short,https://lichess.org/T50av6y3/black#36
ZSSUd,5rk1/5ppp/R5n1/4P3/2P1b3/1r4B1/5PPP/4R1K1 w - - 0 25,e1e4 b3b1 e4e1 b1e1,559,104,86,887,backRankMate endgame mate mateIn2 short,https://lichess.org/BKgzeucT#49
2SdIY,3r4/ppp1b1kp/6p1/8/4PQ2/1P6/P1P2PPP/2Rq2K1 w - - 1 26,c1d1 d8d1,399,93,94,178,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/q0gE0Lb7#51
G6D0W,2krr3/1pp2ppp/p1p5/5bN1/5Q2/P2P4/1PP2PPP/R3q1KR w - - 5 18,a1e1 e8e1,436,110,86,1715,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/snArau9y#35
paL79,3r4/Rp4pp/4pbk1/8/1PP5/8/1P2RPPP/6K1 w - - 1 26,a7b7 d8d1 e2e1 d1e1,586,92,100,88,backRankMate endgame mate mateIn2 short,https://lichess.org/veWvr1LP#51
H3aWr,r4bk1/pp3p1p/4rBp1/8/3p4/6Q1/PP3RPP/R3q2K w - - 8 29,a1e1 e6e1 f2f1 e1f1,531,89,75,39,backRankMate mate mateIn2 middlegame short,https://lichess.org/rQ7DuvZI#57
eWUGc,5k1r/1p2nppp/8/pB6/2P5/P4n2/1P3P1P/2KRR3 b - - 0 19,f3e1 d1d8,556,86,100,104,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/HQhy8vF3/black#38
VSE3Q,2r4k/p1r3pp/n7/5p2/1p1R4/5N1P/PP3PP1/3R2K1 b - - 3 32,a6c5 d4d8 c8d8 d1d8,588,83,100,91,backRankMate endgame mate mateIn2 short,https://lichess.org/wLHsR9DC/black#64
fHGS1,5r1k/pp3Qpp/1np2p2/3p4/3P4/2P4P/PP1N1PP1/4R1K1 b - - 0 24,f8f7 e1e8 f7f8 e8f8,599,96,100,91,backRankMate endgame mate mateIn2 short,https://lichess.org/SeAIQldN/black#48
O7tVz,3r2k1/pp3p1p/3rp1p1/2p5/3B4/1PP1RQ2/P4PPP/1b4K1 w - - 0 22,d4c5 d6d1 f3d1 d8d1 e3e1 d1e1,484,92,100,468,backRankMate endgame long mate mateIn3,https://lichess.org/Cb9PymJO#43
UoWys,r3r1k1/p6p/2p3p1/5bB1/3b4/1PP2n2/P5PP/2RN1R1K w - - 0 26,f1f3 e8e1 f3f1 e1f1,415,118,90,1360,backRankMate mate mateIn2 middlegame short,https://lichess.org/7aXRzgSw#51
5Q7U0,4rQ1k/p5pp/8/8/8/PPr1q2P/6P1/3R1R1K b - - 2 28,e8f8 f1f8,530,93,100,106,backRankMate endgame mate mateIn1 oneMove queenRookEndgame,https://lichess.org/3FzzZyaT/black#56
waMIk,1r2nQ1k/2pqb1pp/2p5/p1Pp2P1/1r1P3P/2N5/PP6/K1BR1R2 b - - 6 26,e7f8 f1f8,501,96,100,155,backRankMate master mate mateIn1 middlegame oneMove,https://lichess.org/uuSWrZYI/black#52
FMIYg,r1bq1Q1k/1p4np/p7/P1pP2p1/4N3/3B4/1PP3PP/5RK1 b - - 7 24,d8f8 f1f8,507,100,96,205,backRankMate master mate mateIn1 middlegame oneMove,https://lichess.org/Y6zJTFMA/black#48
uE8hW,6k1/5ppp/R7/3rPn2/8/7P/P5P1/7K b - - 0 33,d5e5 a6a8 e5e8 a8e8,426,99,91,606,backRankMate endgame mate mateIn2 short,https://lichess.org/Kgs7kWya/black#66
lsumH,r1br3k/p5pp/1p6/n3p2B/8/2P1PQ2/PP2NPPP/R2q1K1R w - - 2 18,a1d1 d8d1,446,94,100,333,backRankMate mate mateIn1 middlegame oneMove,https://lichess.org/3i62bJ1Y#35
p6VX9,3rR2k/6pp/1p2B3/5p2/Q3bPq1/P3P1P1/7P/6K1 b - - 8 34,d8e8 a4e8,496,98,79,218,backRankMate endgame master mate mateIn1 oneMove,https://lichess.org/kIxcvdZe/black#68
iXnsJ,5rk1/pp4pp/8/3p4/B2b1r2/2N5/PP2R1PP/R5K1 w - - 0 24,g1h1 f4f1 a1f1 f8f1,534,104,80,597,backRankMate mate mateIn2 middlegame short,https://lichess.org/0lgejK0s#47
SYpzH,r1br4/p1k5/1p2p3/4Pp2/8/6Q1/PPB2PPP/3q2K1 w - - 0 27,c2d1 d8d1,501,90,100,114,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/OkXCuC3R#53
al8Ia,6k1/5ppb/4p2p/qp6/p1nPP2P/P3RPB1/n1R3PK/8 b - - 3 32,c4e3 c2c8 a5d8 c8d8,593,86,81,605,backRankMate endgame mate mateIn2 short,https://lichess.org/h18i0d5a/black#64
gEItM,k3Q2r/pp6/8/8/4RB2/1PPq2P1/P5KP/8 b - - 2 33,h8e8 e4e8 d3d8 e8d8,399,100,100,338,backRankMate endgame mate mateIn2 short,https://lichess.org/xSFI9mZ0/black#66
Es4tw,5k1r/2p3p1/p6p/3n4/2bP4/R7/1P2rPPP/1NR3K1 w - - 0 22,c1c4 e2e1,399,103,85,296,backRankMate endgame mate mateIn1 oneMove,https://lichess.org/l7WFE28u#43
IWqzt,3N4/p3R3/6pk/7p/2Bp4/1P6/P1r3PP/7K w - - 4 37,e7a7 c2c1 c4f1 c1f1,566,86,100,175,backRankMate endgame mate mateIn2 short,https://lichess.org/835LpJee#73
alayL,r4k1r/p4ppp/2p2q2/1p2R3/1B1N4/3K4/PP3PPP/4R3 b - - 3 19,f8g8 e5e8 a8e8 e1e8,482,110,87,671,backRankMate mate mateIn2 middlegame short,https://lichess.org/HnvHF1Xh/black#38
3IT4e,4r3/7p/5k2/5p2/1RP3p1/5N2/6PP/7K w - - 0 35,f3d2 e8e1 d2f1 e1f1,561,114,81,217,backRankMate endgame mate mateIn2 short,https://lichess.org/o9O9LNXY#69`,
  },
  {
    id: 'hanging-endgame', title: 'Висячие фигуры в эндшпиле', short: 'Висячие в эндшпиле',
    // task_hanging600_endgame.csv — hanging pieces in the endgame, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
0CweW,4R3/pp5k/3p2p1/3P4/P1r2bP1/2r5/P1B5/1KR5 w - - 0 38,c2g6 h7g6 c1c3 c4c3,474,88,100,254,advantage endgame hangingPiece short,https://lichess.org/i5ricZVm#75
0jfEN,8/2k5/p2p1p2/2pBP3/1pN3p1/1P3q2/P1P5/2KRB2r b - - 0 42,f3d1 c1d1 h1e1 d1e1,530,103,82,106,crushing endgame hangingPiece master short,https://lichess.org/TbMpl1Dq/black#84
0nXca,3r2k1/ppb3pp/2p2p2/2P5/3P4/1N2r3/PP4PP/3RR1K1 b - - 1 22,c7h2 g1h2 e3e1 d1e1,545,102,67,213,advantage endgame hangingPiece short,https://lichess.org/Nl8PmbH0/black#44
0olA8,3r2k1/2p2pp1/p6p/8/8/2P4P/2P2PP1/1Q1r2KR w - - 1 25,b1d1 d8d1 g1h2 d1h1,591,88,100,94,crushing endgame hangingPiece short,https://lichess.org/lxDxOaNv#49
1LcUO,8/1p3p2/p4Pk1/2p1P3/5Kp1/1B3bP1/P5r1/4R3 w - - 0 39,b3f7 g6f7 e5e6 f7f6,579,84,83,167,advantage endgame hangingPiece master short,https://lichess.org/4ue5OUtC#77
1iQbK,8/8/r3P3/5B1R/1ppk1p2/p4P1P/K1R2Pr1/8 w - - 0 38,c2c4 d4c4 f5d3 c4d3,417,108,93,511,crushing endgame hangingPiece short,https://lichess.org/FEi7aao7#75
24mgE,2r2k2/1K3p2/5Q2/pp2pN2/P3P3/2P4P/1P1r1q2/8 b - - 2 45,d2d7 b7c8 f2c5 c8d7,579,89,100,820,crushing endgame hangingPiece master short,https://lichess.org/ReiaPlfj/black#90
2MNGo,8/8/8/4p3/4P1K1/1p6/1P6/1Bk5 w - - 3 49,g4f5 c1b1 f5e5 b1b2,544,88,80,137,crushing endgame hangingPiece short,https://lichess.org/E5h2i66a#97
40mS4,1k2r3/1p6/4p3/p3P2p/P7/5q2/1P1p2Q1/6RK b - - 3 45,e8g8 g2f3 g8g1 h1g1,515,90,100,426,crushing endgame hangingPiece master short,https://lichess.org/TiALC3Fx/black#90
4kbIM,r2q3r/p2k1p2/5p1p/2Pp4/4p3/2P2Q2/P4PPP/R4RK1 w - - 0 19,f3f6 d8f6,534,100,82,217,crushing endgame hangingPiece oneMove,https://lichess.org/v9KSxdQ2#37
5cy6N,r2k3q/1pp1n3/p6p/3PR1p1/2P1Q3/8/5PPP/R5K1 w - - 0 31,e5e7 h8a1 e4e1 a1e1,580,91,42,75,advantage endgame hangingPiece short,https://lichess.org/3bVplw3p#61
5vVf5,4r3/7p/R2b1k2/2p1Rp2/5K1P/8/P4P2/8 b - - 2 36,e8e5 a6d6 e5e6 d6e6,514,99,100,130,crushing endgame hangingPiece master short,https://lichess.org/6w7qcNtN/black#72
5xAyQ,5rk1/2p3p1/1p5p/p2P4/2P1q3/P4pP1/1P3Q1P/4R1K1 b - - 7 30,e4e1 f2e1 f3f2 e1f2 f8f2 g1f2,594,91,100,134,advantage endgame hangingPiece long,https://lichess.org/aIupoU2s/black#60
6KnQV,5Q2/1bkr1p2/p3pN2/2p1P3/8/8/P1P2qPP/1R5K w - - 0 27,b1b7 c7b7 f8b8 b7b8,580,83,84,104,crushing endgame hangingPiece short,https://lichess.org/uoJPJhZB#53
6PDD5,8/3k4/1p1rq3/8/8/PQR3P1/KP5P/8 w - - 9 59,c3c7 d7c7 b3e6 d6e6,547,101,91,109,crushing endgame hangingPiece master short,https://lichess.org/OShGWrNK#117
6wytu,r5k1/4q2p/p3R1pB/5p2/3r4/5Q1P/5PP1/6K1 b - - 0 32,e7e6 f3a8 e6c8 a8c8,574,90,78,82,crushing endgame hangingPiece short,https://lichess.org/zBx9Gthf/black#64
6xrJ1,6k1/1p3p2/p2p1bp1/2pPq3/P1P2Q2/1P3RKP/2B3P1/4r3 b - - 14 42,f6h4 g3h4 e5f4 f3f4,578,99,90,1076,crushing endgame hangingPiece short,https://lichess.org/nf0miUpp/black#84
7AyPQ,3r2k1/1p3pp1/4p2p/8/p3P3/P1P1Q3/1P3nPP/3R3K w - - 1 36,e3f2 d8d1 f2g1 d1g1,548,104,88,1066,crushing endgame hangingPiece master queenRookEndgame short,https://lichess.org/tnUScHcq#71
7eXUG,8/5pk1/6pp/p7/P1pq3P/2Q3P1/5r2/2R3K1 b - - 1 40,f2f1 g1f1 d4c3 c1c3,567,92,66,189,crushing endgame hangingPiece short,https://lichess.org/QmlV0sz0/black#80
85Xoj,3r1b1k/6p1/p3Q2p/1p2B3/6PP/3p4/PP1q4/5R1K w - - 3 34,f1f8 d8f8 e5g7 h8g7,587,97,83,270,crushing endgame hangingPiece master short,https://lichess.org/UyDr54Ta#67
867iq,8/5n1k/7p/4B3/6p1/2PK1P2/5P2/8 w - - 1 53,f3g4 f7e5 d3e3 e5g4,591,88,81,533,advantage endgame hangingPiece master short,https://lichess.org/h0W5N2wK#105
8fYKZ,3r2k1/pp1r3p/2pn1p2/4pP2/8/P1P3P1/3N1P1P/1R1R2K1 w - - 1 21,d2e4 d6e4 d1d7 d8d7,595,100,80,357,crushing endgame hangingPiece short,https://lichess.org/PbwkA2vk#41
97zZN,N1r3k1/6p1/5pb1/4p2p/3b2P1/1P3PBP/P2R4/2R3K1 w - - 1 37,d2d4 c8c1 d4d1 c1d1,578,104,97,416,advantage endgame hangingPiece short,https://lichess.org/a2n2OrTD#73
9ye2G,5Q2/7k/8/5p1p/4p3/P6P/1P3qBK/8 w - - 20 50,f8f5 f2f5 g2e4 f5e4,459,95,84,171,crushing endgame hangingPiece master short,https://lichess.org/3TfblCTq#99
A0AqR,1r6/p2R2bk/6pp/2p1Pr2/8/2PQ1q2/PP3P1P/3R2K1 w - - 0 31,d7g7 h7g7 d3f3 f5f3,583,94,81,185,crushing endgame hangingPiece short,https://lichess.org/yhVdpvdD#61
AJ2RM,1q2r1k1/5pp1/1Np4p/2np4/1p1P4/1P2Q2P/1P3PP1/R5K1 w - - 0 27,e3e8 b8e8 a1a8 e8a8,462,105,82,229,advantage endgame hangingPiece short,https://lichess.org/kkAfki5j#53
BKtsH,8/5pkp/6p1/4q3/8/P1Q3P1/1KR4P/3r4 b - - 25 74,d1b1 b2b1 e5c3 c2c3,447,107,72,410,crushing endgame hangingPiece short,https://lichess.org/ISBJhbIP/black#148
BcsRe,8/1pR5/b1p3k1/P1Pp2p1/PK1P1pP1/5P2/8/8 w - - 47 63,c7b7 a6b7 a5a6 b7a6,495,102,82,69,crushing endgame hangingPiece short,https://lichess.org/ncVNKzdO#125
C6jlh,6k1/p1p2ppp/1p6/4P3/2P2P2/2Bq1rPb/PP5P/3RQ1K1 b - - 10 32,d3d1 e1d1 f3f1 d1f1 h3f1 g1f1,477,84,100,314,crushing endgame hangingPiece long,https://lichess.org/v9wkeUDu/black#64
DCKhq,3r1rk1/3R1B1p/6p1/8/1p2P3/1P3P2/2P3PP/1K6 b - - 0 29,f8f7 d7d8,569,94,84,1124,crushing endgame hangingPiece oneMove rookEndgame,https://lichess.org/VRx9Uqt2/black#58
Eh3uL,1k2r3/ppq3p1/2p2p1p/2b2P2/4p1P1/5Q1P/PPP2B2/2K1R3 b - - 1 24,e4f3 e1e8 c7d8 e8d8,442,102,91,1653,crushing endgame hangingPiece queensideAttack short,https://lichess.org/Fn1qZviB/black#48
FUZv1,2R5/2P2r2/5k2/6pp/8/7P/6PK/8 w - - 1 50,c8f8 f7f8 c7c8q f8c8,579,104,94,525,crushing endgame hangingPiece rookEndgame short,https://lichess.org/VVTPewgC#99
Fco9x,8/8/4k3/2B4K/7P/6p1/5r2/8 b - - 0 66,g3g2 c5f2 g2g1q f2g1,570,94,91,513,crushing endgame hangingPiece short,https://lichess.org/399J7gCH/black#132
G0Ieg,3r2k1/p4pp1/2n4p/2p5/5Pb1/2BB2P1/PP1R3P/6K1 w - - 0 30,d3h7 g8h7 d2d8 c6d8,554,91,62,90,advantage endgame hangingPiece short,https://lichess.org/4Yd59tOW#59
GWEOF,8/2k1P3/8/pppQ4/3p4/7p/1P2P2P/7K w - - 0 53,d5d7 c7d7 e7e8r d7e8,461,97,60,154,crushing endgame hangingPiece master short,https://lichess.org/TDMjoFFd#105
Ga0Lu,8/5pkp/4p1p1/8/3bP3/5P2/6PP/r1B1RK2 w - - 2 29,c1h6 g7h6 e1a1 d4a1,519,93,100,453,crushing endgame hangingPiece short,https://lichess.org/7GGGLaqg#57
GgOb2,r1bRnk2/pp3ppp/4p3/8/1P6/P5P1/4NPBP/6K1 w - - 4 27,g2b7 c8b7 d8a8 b7a8,593,99,75,526,advantage endgame hangingPiece short,https://lichess.org/rLkLCPgW#53
H2MdZ,2kr3r/1pp2ppp/pbp5/8/4P3/1P2BP2/1P3KPP/R2R4 b - - 0 19,d8d2 d1d2 b6e3 f2e3,592,92,57,67,advantage endgame hangingPiece short,https://lichess.org/pW8XCGoF/black#38
HAql4,4rk2/pp3p1p/6p1/7N/4q1Q1/1P2n1P1/P6P/5RK1 w - - 6 31,f1f7 f8f7 g4e4 e8e4,528,98,95,1006,crushing endgame hangingPiece short,https://lichess.org/8JH92Mvl#61
HZz7O,1Qb4k/p5pp/2p1rp2/3Rq3/8/P3P3/1P2BPPP/6K1 b - - 1 24,e5d5 b8c8 e6e8 c8e8,537,97,81,190,crushing endgame hangingPiece short,https://lichess.org/W5FKNxBb/black#48
Hz2u8,3r4/2k2p2/2pq2p1/p7/P5P1/2P5/6PQ/1R4K1 w - - 3 35,b1b7 c7b7 h2d6 d8d6,481,85,57,207,crushing endgame hangingPiece master short,https://lichess.org/rjF7w2wP#69
IMofT,2r5/3q1p1k/6pp/Q4b2/P1PN1p2/1P5P/5PP1/3R1K2 w - - 1 36,d4f5 d7d1,428,96,88,1280,crushing endgame hangingPiece oneMove,https://lichess.org/HIiQsNJF#71
IU73M,8/1p3pk1/3p3p/p2Pb1pP/8/3Q1RP1/2P2PK1/r2q1B2 w - - 5 38,f3f7 g7f7 d3d1 a1d1,576,98,94,160,crushing endgame hangingPiece short,https://lichess.org/gvkO7CeX#75
JUEhk,2k3r1/ppp1p3/7p/8/4PB2/5N2/Pb4RP/2K5 w - - 0 25,c1b2 g8g2,512,110,67,108,advantage endgame hangingPiece oneMove,https://lichess.org/DoS4PIYy#49
KLHZw,2r2k2/5p2/p3b1p1/1p1p3p/8/PPB1PP1P/4K1P1/2R5 w - - 1 28,c3g7 f8g7 c1c8 e6c8,592,100,76,405,crushing endgame hangingPiece short,https://lichess.org/lZkAatXW#55
KLbrW,7r/1p1r1kbR/2p1p3/p2p2P1/P2P1B2/2PBP3/1P2KP2/8 w - - 4 30,d3g6 f7g6 h7h8 g7h8,569,91,78,131,crushing endgame hangingPiece short,https://lichess.org/sJ6k8Uxv#59
KRSow,r7/1R1P4/2k1K3/8/8/8/8/8 w - - 0 70,b7b8 a8b8 d7d8r b8d8,591,91,87,382,crushing endgame hangingPiece rookEndgame short,https://lichess.org/aol9C9Bt#139
KTL2j,4k3/pR2B3/1b1P4/8/2K4p/2P5/r6P/8 w - - 0 38,d6d7 e8e7 d7d8b e7d8,575,107,95,399,advantage endgame hangingPiece short,https://lichess.org/gxMF0NEq#75
KZkaw,1r4k1/qBQ2p2/P3p1p1/7p/8/6P1/3RP1KP/4b3 w - - 2 33,c7b8 a7b8 d2d8 b8d8,588,101,92,420,advantage endgame hangingPiece master short,https://lichess.org/smtiUbqb#65
LeMe1,2r5/4Pk2/5P2/8/4K3/8/2p5/2R5 w - - 2 52,c1c2 c8c2 e7e8q f7e8,572,90,100,464,crushing endgame hangingPiece master rookEndgame short,https://lichess.org/wF8OHOtA#103
Lj2y6,8/3q1p1k/4p1pp/8/8/2Q3PP/2p4K/8 b - - 2 52,d7d2 c3d2,527,108,79,203,crushing endgame hangingPiece oneMove queenEndgame,https://lichess.org/tXNyB4gT/black#104
MmGaH,8/3B4/p1P5/P5k1/b2K2p1/6P1/8/8 w - - 1 59,c6c7 a4d7 c7c8q d7c8,547,97,95,366,bishopEndgame crushing endgame hangingPiece short,https://lichess.org/DEf98Dwk#117
NZtgb,6k1/p4p2/1pRq1np1/3P4/3Q1PPp/7P/P3r1B1/6K1 b - - 2 30,e2g2 g1g2 d6d5 d4d5,524,91,80,629,crushing endgame hangingPiece short,https://lichess.org/b268sc4G/black#60
NqdUo,5r2/4KP2/6R1/p2p3p/2p4P/P1P5/1P3kp1/8 b - - 3 55,f8f7 e7f7 g2g1q g6g1,556,100,80,697,crushing endgame hangingPiece master masterVsMaster rookEndgame short,https://lichess.org/1Y0lNTB9/black#110
OUXiG,8/4bp1k/4p3/4P1PP/p7/5N2/1K6/8 b - - 18 54,e7g5 f3g5 h7h6 g5f7,568,78,100,131,crushing endgame hangingPiece master short,https://lichess.org/YJqhz7f1/black#108
PCNST,8/2p1P1b1/4N3/5P2/b1k5/4B3/1p6/1K6 b - - 1 43,a4c2 b1c2 b2b1q c2b1,404,107,77,161,crushing endgame hangingPiece short,https://lichess.org/eDnZXMCR/black#86
PU5pf,8/6p1/2p5/1kP2pPp/7P/8/1r3r2/5RK1 b - - 1 60,b2b1 f1b1 f2b2 b1b2,466,111,91,1194,crushing endgame hangingPiece master rookEndgame short,https://lichess.org/USVHEyFd/black#120
QL7GL,8/1p2nk1p/5pp1/3p4/5P2/1P2RBPP/Q4PK1/1rq5 w - - 26 45,e3e7 f7e7 a2b1 c1b1,519,89,100,215,crushing endgame hangingPiece master short,https://lichess.org/L8C57Xu3#89
RZQ31,6k1/5p1p/6p1/1P6/8/Pbq2BP1/3p1PKP/1Q6 b - - 2 32,c3f3 g2f3 d2d1q b1d1,591,87,73,107,crushing endgame hangingPiece master short,https://lichess.org/0hhV8mlL/black#64
Rasyj,5r2/Pb5p/1p4p1/2k5/1Np1p3/2Pp2P1/1P1K3P/5R2 b - - 7 53,f8f2 f1f2 e4e3 d2e3,592,85,88,97,crushing endgame hangingPiece short,https://lichess.org/FbVnilT2/black#106
RayLC,8/8/6k1/2p3p1/3b2Q1/7P/1r2Q1K1/8 w - - 7 52,g4d4 b2e2 d4f2 e2f2,597,82,100,293,crushing endgame hangingPiece short,https://lichess.org/ODxcJIqr#103
S3Tqk,5rk1/1pp2rp1/p3p3/2PpP2p/PP1P2pP/4P1P1/5R1K/6R1 w - - 0 30,g1f1 f7f2 f1f2 f8f2,544,102,79,139,crushing endgame hangingPiece rookEndgame short,https://lichess.org/BFGnhvmp#59
Scy1A,8/3r2p1/6p1/3b1p1k/3R3P/4B1PK/5P2/8 b - - 25 52,d5g2 h3g2 d7d4 e3d4,432,109,95,923,crushing endgame hangingPiece short,https://lichess.org/HiTANNf5/black#104
SvNwm,6k1/pp3pp1/7p/3p4/1P1P3q/7r/P2N2R1/1R3QK1 w - - 6 31,g2g7 g8g7 f1h3 h4h3,474,95,72,388,advantage endgame hangingPiece short,https://lichess.org/3T9y9izO#61
Sxu3W,1r4k1/5ppp/8/6N1/3p1P2/Ppq5/1Q5P/K1R5 b - - 3 31,c3c1 b2c1 b3b2 c1b2 b8b2 a1b2,574,98,83,403,advantage endgame hangingPiece long,https://lichess.org/v7rs4WFC/black#62
TBThg,r6n/1ppk4/p3R3/P3P3/1P4B1/2p1b1Pp/7P/R6K w - - 0 30,e6c6 d7c6,525,105,76,166,crushing endgame hangingPiece oneMove,https://lichess.org/RhZqAvJG#59
TP6Mx,2r3k1/3p1p2/1B2p1p1/3rP2p/bK3P2/2R3P1/1R5P/8 b - - 13 42,d5b5 b4a4 b5b2 c3c8,567,86,100,212,advantage endgame hangingPiece master short,https://lichess.org/Fiyv1oET/black#84
UBExB,8/2n5/6p1/Pp3p1p/1P1P1P1P/2K1k3/8/4B3 w - - 6 42,e1f2 e3f2 d4d5 c7d5,498,90,89,280,advantage endgame hangingPiece short,https://lichess.org/zhDd6mZM#83
UEkTJ,2r2r2/3Rbkpp/4p3/4p3/P1B5/1P6/1P3PPP/1K2R3 w - - 0 27,c4e6 f7e6 d7e7 e6e7,585,89,100,70,advantage endgame hangingPiece short,https://lichess.org/0OG50iRA#53
UJ5Mc,2rr4/5Q1P/8/2k1p3/p2pP3/8/1PP3P1/6K1 w - - 0 42,f7d7 d8d7 h7h8q c8h8,577,101,62,153,crushing endgame hangingPiece master short,https://lichess.org/xGwSkRrc#83
UeCDi,8/8/8/1N2p3/4Pp2/2Q2K2/p7/1k6 w - - 3 59,c3a1 b1a1 b5c3 a1b2 c3a2 b2a2,562,87,100,228,crushing endgame hangingPiece long,https://lichess.org/f4CwPyMC#117
UqYwH,3r2k1/p4ppp/1p6/2qp4/2P1QPP1/7P/PP6/2KR4 b - - 0 32,d5e4 d1d8 c5f8 d8f8,406,88,100,230,advantage endgame hangingPiece queenRookEndgame short,https://lichess.org/qgtKL6j3/black#64
UzoDS,8/p7/b1p1p1p1/3qP2k/4Q1p1/8/6rP/R3R2K b - - 6 33,g2h2 h1h2 d5e4 e1e4,597,100,71,547,crushing endgame hangingPiece short,https://lichess.org/dBxKjg21/black#66
V5774,8/p4ppk/6qp/8/3R4/1P1Q1b2/PBr4P/5K2 b - - 3 36,c2f2 f1f2 g6d3 d4d3,584,96,89,1034,crushing endgame hangingPiece short,https://lichess.org/hyPbazcE/black#72
VZA9W,3r2k1/4qpbp/p1p3p1/2B5/8/1P3P2/P4QPP/3R2K1 w - - 2 23,c5e7 d8d1 f2e1 d1e1,587,96,83,517,crushing endgame hangingPiece short,https://lichess.org/lv9epqAu#45
VoMOz,1R2b3/4rkp1/p2Qp3/3p1qP1/2pP4/2P1B3/P1PK4/8 w - - 1 36,d6e7 f7e7 b8e8 e7e8,575,96,79,366,crushing endgame hangingPiece short,https://lichess.org/gl4YAHlA#71
Vy2VB,8/5b2/2k3p1/2P1R3/3KP3/5p1r/2R1B2r/8 w - - 0 48,e2b5 c6b5 c2h2 h3h2,490,91,74,1010,crushing endgame hangingPiece master short,https://lichess.org/r1yYUZbt#95
WcOr5,4rr1k/1p3p2/5p1p/p7/3P1b2/3B1P2/PP3K2/4RR2 b - - 4 26,f4g3 f2g3 e8e1 f1e1,480,103,92,828,crushing endgame hangingPiece short,https://lichess.org/u45P8TDC/black#52
XLh0J,8/3b1k2/pq1p2p1/3P1pP1/1p6/1P2Q2P/5rBK/4R3 b - - 3 39,f2g2 h2g2 b6e3 e1e3,594,97,91,1005,crushing endgame hangingPiece short,https://lichess.org/4N78tIvb/black#78
XYu81,4r1k1/ppbn1ppp/2p5/3p4/3P2P1/2P1B2P/PP2RP2/2N3K1 b - - 0 26,c7f4 e3f4 e8e2 c1e2,570,105,68,119,advantage endgame hangingPiece short,https://lichess.org/z2o0XqhL/black#52
Y2cWE,7r/p1krR1b1/3p3p/2p3p1/P1P5/6B1/5PPP/4R1K1 w - - 3 26,g3d6 c7d6 e1e6 d6c7 e7d7 c7d7,553,96,93,1269,crushing endgame hangingPiece long,https://lichess.org/4GByjHF9#51
YrB34,6k1/p4pp1/1p2p3/3q2pP/8/5QR1/P4PK1/2r5 b - - 5 36,c1g1 g2g1 d5f3 g3f3,591,84,100,305,advantage endgame hangingPiece short,https://lichess.org/AfYeROSZ/black#72
aKNh9,8/5p2/4pk2/R7/8/4PK2/p3r3/8 b - - 3 59,e2e3 f3e3 a2a1b a5a1,547,91,81,182,crushing endgame hangingPiece master rookEndgame short,https://lichess.org/zrZiLB64/black#118
bEmaU,2r5/1q2k2p/4p3/4b3/4P1p1/3Q2P1/P4RKP/3R4 w - - 2 42,f2f7 e7f7 d3d7 b7d7,591,90,73,104,advantage endgame hangingPiece master short,https://lichess.org/kSNg9mnc#83
bWDLm,8/R6p/3k2b1/1PN5/3r4/4n2P/P1p3P1/2R3K1 w - - 4 33,a7d7 d6c5 d7d4 c5d4,581,93,87,890,advantage endgame hangingPiece short,https://lichess.org/wbpX6KOA#65
bnlzF,4r3/1p6/3b1k2/1P6/3p1pB1/4p2P/2P3KP/6R1 b - - 0 39,e8c8 g4c8 f4f3 g2f3,533,90,81,921,crushing endgame hangingPiece master short,https://lichess.org/x1nREesP/black#78
d0gqQ,1B1k4/3B1ppp/2P1p3/7P/p5P1/5PK1/3r4/8 w - - 0 51,c6c7 d8d7 c7c8q d7c8,510,104,93,547,crushing endgame hangingPiece short,https://lichess.org/5ZDX0xJC#101
dCxnq,8/2pq3p/1p3pk1/p4Np1/7P/P3Q3/4RB2/6K1 w - - 1 42,e3d3 d7d3,570,94,95,1833,advantage endgame hangingPiece oneMove,https://lichess.org/rDnRhhTy#83
eTsAx,r5k1/1p2qppp/2p1p3/p1n1P3/RQ6/1P5P/5PP1/1N1B2K1 b - - 0 24,a5b4 a4a8 e7f8 a8f8,533,97,89,491,advantage endgame hangingPiece kingsideAttack master short,https://lichess.org/yvTwmgiN/black#48
eu4g4,3b2k1/4P1p1/p7/1pBp4/1P2q3/6PP/5P2/5K2 b - - 2 42,e4e2 f1e2 d8e7 c5e7,587,91,78,217,crushing endgame hangingPiece master masterVsMaster short,https://lichess.org/Uw5FKoU1/black#84
fxuKT,3rr1k1/ppp3pp/8/3p4/2nRN3/P2K4/1PB3PP/7R b - - 6 22,d5e4 d3c4 d8d4 c4d4,526,96,94,1038,crushing endgame hangingPiece short,https://lichess.org/fuApUiXO/black#44
fyCxz,8/6p1/p4p1p/P1k1p2P/1pb1P1P1/2B1K3/4BP2/8 w - - 0 44,c3b4 c5b4 e2c4 b4c4,593,97,65,48,bishopEndgame crushing endgame hangingPiece short,https://lichess.org/cg4Ytv6q#87
gcaUJ,8/p4pk1/2p5/1p2r1P1/2q5/PQ4P1/KPr5/2R4R b - - 3 33,c2b2 a2b2 c4b3 b2b3,565,91,88,326,crushing endgame hangingPiece master short,https://lichess.org/v2lh66E0/black#66
hXHbJ,8/8/7p/R7/6k1/4bpP1/4p3/4K3 b - - 3 79,e3f2 e1f2 e2e1b f2e1,573,91,82,155,crushing endgame hangingPiece master masterVsMaster short,https://lichess.org/JnSszZzy/black#158
hf9PO,2r3k1/4R1P1/7P/6K1/8/8/8/8 w - - 9 77,e7e8 c8e8 g5g6 e8e6,548,82,100,145,crushing endgame hangingPiece rookEndgame short,https://lichess.org/we1jdXPP#153
htkO6,8/2b1rk2/2p1R2R/pp3r2/3B1P2/P1P3P1/1PK5/8 w - - 0 33,h6h7 f7e6 h7e7 e6e7,562,91,73,255,crushing endgame hangingPiece short,https://lichess.org/Nl487rfS#65
iMvET,8/b6p/P7/8/8/4p1BP/4k1K1/8 w - - 0 54,g3b8 a7b8 a6a7 b8a7,572,84,79,154,bishopEndgame crushing endgame hangingPiece master short,https://lichess.org/zOYS73na#107
iY7dK,4r1k1/pp3ppp/2p5/3p4/3P4/5P2/PPP1N2b/4RK2 b - - 0 26,h2g3 e2g3 e8e1 f1e1,587,89,82,283,advantage endgame hangingPiece short,https://lichess.org/tigJ5ZUD/black#52
iYMQa,4r1k1/2BQ2p1/p4np1/1p2b3/6P1/2P4P/PP6/5RK1 w - - 3 33,d7f7 g8f7 c7e5 e8e5,590,94,82,112,advantage endgame hangingPiece short,https://lichess.org/HhXECOqu#65
igjve,3r4/3P1q1k/6p1/3Q2p1/6P1/2P4P/1P6/rNKR4 b - - 2 42,a1b1 c1b1 f7d5 d1d5,524,93,92,149,crushing endgame hangingPiece short,https://lichess.org/Yuw0jHyQ/black#84
jYSo1,2kr4/p1p2p1p/1pp3p1/4r3/5q2/2PR3P/PP1Q3P/2KR4 b - - 0 21,d8d3 d2f4 d3d1 c1d1,594,106,78,192,advantage endgame hangingPiece short,https://lichess.org/LaeNqHH7/black#42
jkhuP,4k3/1b5p/p3r1p1/1p3p2/2pB3b/P1P2PPP/1PN2K2/4R3 b - - 0 32,h4g3 f2g3 e6e1 c2e1,587,89,100,145,advantage endgame hangingPiece short,https://lichess.org/S3zqy62o/black#64
k6iwm,4r1k1/6p1/p2p4/1p4q1/2pP2b1/2P1B3/PP4QP/4R2K w - - 0 30,e3g5 e8e1 g2f1 e1f1,599,97,76,214,crushing endgame hangingPiece short,https://lichess.org/DKsiNVlG#59
k87d1,3k4/pp6/8/7p/5P2/P1K1p3/1PP1B3/3r4 b - - 1 40,h5h4 e2d1 e3e2 d1e2,564,86,82,164,crushing endgame hangingPiece short,https://lichess.org/TpbZ0FaD/black#80
kWv99,2r5/6kn/p2p2pR/1p6/4P3/6N1/P2Q2PK/2q5 w - - 4 42,h6g6 g7g6 d2c1 c8c1,474,90,84,330,crushing endgame hangingPiece short,https://lichess.org/PFh8bln1#83
kqExN,6k1/5n1p/4p1p1/p7/P4P2/3q2P1/3pQ2P/5K2 b - - 3 41,f7d6 e2d3 d2d1r d3d1,589,108,81,724,crushing endgame hangingPiece master short,https://lichess.org/pWQ35fQZ/black#82
kwvjB,4r1k1/5pp1/1N2p2p/8/q2P4/6P1/5PQP/2rR2K1 w - - 0 35,b6a4 c1d1 g2f1 d1f1,594,90,80,682,advantage endgame hangingPiece short,https://lichess.org/JtqzIJ0P#69
lanpg,r4k2/2p2pp1/p2p1R2/8/1p1n2Q1/8/PPPBq1PP/7K w - - 1 24,f6f7 f8f7 g4e2 d4e2,526,92,86,422,advantage endgame hangingPiece short,https://lichess.org/4Ms7wRcl#47
mClJo,8/p4BP1/1p1kpn2/1P3pK1/1P3P2/P7/r7/8 b - - 7 54,a2g2 g5f6 g2g7 f6g7,574,92,64,84,crushing endgame hangingPiece master short,https://lichess.org/d6sp6f4i/black#108
matnF,r7/p4pkp/2p2p2/8/8/2q1Qb2/2P3PP/R3R2K b - - 1 26,f3g2 h1g2 c3e3 e1e3,546,102,65,259,crushing endgame hangingPiece short,https://lichess.org/0c5FND9Y/black#52
nvydS,5rk1/p7/1p1p4/2rPp1pp/3qB3/P1P2PQP/4p1PB/2R3K1 w - - 2 34,c3d4 c5c1 g3e1 c1e1,579,102,92,343,crushing endgame hangingPiece kingsideAttack short,https://lichess.org/scVE4r2x#67
oGbsh,8/4k3/p4b2/P1p2P1p/1p3K2/1PpP3P/2N5/8 b - - 6 54,f6e5 f4e5,560,101,81,420,crushing endgame hangingPiece oneMove,https://lichess.org/2GAzfJNw/black#108
oapa5,7r/rk3p2/2q1p1pp/1p1pP3/RR1P1P2/2P1Q3/2P3PP/7K w - - 0 30,b4b5 c6b5 a4a7 b7a7,592,84,60,137,advantage endgame hangingPiece master short,https://lichess.org/wTEipEkU#59
ob5IJ,3rk3/3p1pp1/p3p3/1p2PpP1/5P1q/P1P3Q1/1P3KPr/R3R3 b - - 2 26,h2g2 f2g2 h4g3 g2g3,587,100,73,171,crushing endgame hangingPiece short,https://lichess.org/Vt3y65Ie/black#52
pLzbA,r7/5R2/1bp3pk/1p3b2/p3N2P/2P5/PP4P1/3B3K w - - 1 34,g2g4 f5e4 d1f3 e4f3,586,100,80,432,crushing endgame hangingPiece master short,https://lichess.org/1SYHmmWW#67
q3waV,8/8/6kp/4p3/1P6/4p1PP/5qQK/8 b - - 4 49,e3e2 g2f2 e2e1q f2e1,599,103,78,213,crushing endgame hangingPiece master queenEndgame short,https://lichess.org/NOrmZ31R/black#98
q9LFm,8/2p3kP/2P5/6n1/4B1p1/1K4P1/1p6/8 w - - 4 48,b3b2 g5e4 h7h8q g7h8,560,97,83,122,crushing endgame hangingPiece master short,https://lichess.org/tgK5xu93#95
qOXQR,3r2k1/5qpp/8/8/4PP2/3p1NP1/1P2R1KP/3R4 b - - 0 31,d3e2 d1d8 f7e8 d8e8,490,95,96,267,crushing endgame hangingPiece master short,https://lichess.org/Bnps6th6/black#62
qtGJ1,4r3/p2k2p1/4b2p/1p6/3p4/5P2/PPBK2PP/4R3 w - - 4 27,c2f5 e6f5 e1e8 d7e8,586,90,89,418,advantage endgame hangingPiece short,https://lichess.org/R4Fe9S1c#53
rQSfW,2r5/1p2k1pp/n3p3/3R4/P7/5N1P/5PP1/Q1r3K1 w - - 1 25,a1c1 c8c1 d5d1 c1d1,587,100,67,461,crushing endgame hangingPiece short,https://lichess.org/P5Zdg07J#49
ri37t,3r4/ppRb1kqQ/4p1n1/3p2p1/8/8/PP3PPP/R5K1 w - - 7 28,c7d7 d8d7 h7g7 f7g7,597,96,82,285,crushing endgame hangingPiece short,https://lichess.org/UyXlOa7v#55
sd6Ve,8/8/7p/3p1rkP/3P4/4P2B/4Kp2/8 b - - 25 61,g5h5 h3f5 f2f1q e2f1,599,91,82,140,crushing endgame hangingPiece master short,https://lichess.org/4Hg8eScr/black#122
ssD2B,8/pp1b4/2p1pkpp/3p4/P1P2r2/1P3N1P/4RPP1/1B4K1 w - - 3 32,g2g3 f4f3 e2e3 f3e3,579,94,64,103,advantage endgame hangingPiece short,https://lichess.org/JyMVQyUQ#63
swKnE,2r3k1/5ppp/4p3/pNbn4/1P6/P7/3B1PPP/2R3K1 b - - 0 25,c5f2 g1f2 c8c1 d2c1,404,111,80,178,advantage endgame hangingPiece short,https://lichess.org/crsGq82s/black#50
tJ66U,4r3/8/8/p1p3p1/P1P2k1p/1P3P1P/3pBKP1/8 b - - 5 46,e8e2 f2e2 d2d1q e2d1,568,101,80,114,crushing endgame hangingPiece short,https://lichess.org/BzJwWj4a/black#92
uAITR,2k4r/1ppr2pp/p2b4/4R3/5B1P/8/PPP2PP1/R5K1 w - - 1 21,e5d5 d6f4 d5d7 c8d7,584,310,0,4,advantage endgame hangingPiece short,https://lichess.org/FVHICfSm#41
uxzeq,3r1bk1/7p/RQ1p2p1/3Pp3/4qr2/1P3P2/6PP/5R1K w - - 0 29,f3e4 f4f1 b6g1 f1g1,526,92,80,98,advantage endgame hangingPiece short,https://lichess.org/gsHbRmG3#57
vOuax,b7/P4p2/5k1p/1Bp2p2/2P2P2/4K1PP/8/8 w - - 5 38,b5c6 a8c6 a7a8q c6a8,542,89,100,160,bishopEndgame crushing endgame hangingPiece short,https://lichess.org/w8wypzmZ#75
vQtmY,5R2/1r2Pnk1/p1pB2pp/1p2Kp2/1P6/P7/2P5/8 w - - 1 38,f8f7 g7f7 e7e8q f7e8,543,104,95,861,crushing endgame hangingPiece short,https://lichess.org/bAz5HApv#75
wwNCn,5rk1/1p3qpp/p3Q3/3p4/P1p3P1/2P3b1/1P4P1/RB4K1 w - - 2 30,b1h7 g8h7 e6f7 f8f7,470,105,88,703,crushing endgame hangingPiece short,https://lichess.org/CAAmzTKb#59
x10Sc,8/ppkrR2r/3p3p/P1pP4/2b2B2/8/5PPP/4R1K1 w - - 15 31,f4d6 c7d6 e7h7 d7h7,533,89,83,285,crushing endgame hangingPiece short,https://lichess.org/nmy80Mrl#61
xSTSM,8/8/2k3p1/1p2p3/1P4P1/1K1pbP2/8/3N4 b - - 3 59,d3d2 d1e3 d2d1q e3d1,568,103,96,277,crushing endgame hangingPiece short,https://lichess.org/eujlTiaX/black#118
xi9HI,6k1/p6p/2p1p1p1/8/8/4q1P1/PPPQ4/1K1N1r2 w - - 0 25,d2e3 f1d1 e3c1 d1c1,408,100,80,758,crushing endgame hangingPiece master masterVsMaster short,https://lichess.org/nEeSIpGs#49
yOIeI,4r1k1/5q1p/p4Pp1/1p2Q3/8/3P4/PP4P1/5R1K w - - 5 28,e5e8 f7e8 f6f7 e8f7 f1f7 g8f7,478,103,82,486,crushing endgame hangingPiece long,https://lichess.org/C3IHT0bL#55
yVB4Z,b1r3k1/5ppp/1n2p3/1p1pP3/1P3PP1/2NK3P/2P3B1/7R b - - 1 25,c8c3 d3c3 d5d4 c3d4,577,92,74,91,advantage endgame hangingPiece master short,https://lichess.org/ZYdN35uo/black#50
yVQof,8/8/1Pk3nR/5p2/8/1r6/5KP1/8 b - - 4 48,b3b6 h6g6 c6b5 g6b6,544,104,79,140,crushing endgame hangingPiece short,https://lichess.org/7zmmitIK/black#96
ymbZS,3r4/1pbr2pp/p4p2/5k2/1P2R3/P6P/1B2KPP1/3R4 w - - 1 25,g2g4 f5e4 d1d7 d8d7,408,107,89,1110,crushing endgame hangingPiece short,https://lichess.org/j02tBjLZ#49
z4o0G,7Q/pp5p/4k3/3p1p2/3q1P2/1P6/P5PP/2r1B2K w - - 11 39,h8d4 c1e1 d4g1 e1g1,568,98,95,423,crushing endgame hangingPiece master short,https://lichess.org/QFQsF331#77
zHZDN,6k1/8/6r1/4K1Bp/1p3P2/8/P7/8 b - - 4 52,g6e6 e5e6 b4b3 a2b3,534,91,74,137,crushing endgame hangingPiece master short,https://lichess.org/dEumcS9N/black#104
zPSfF,5k2/6rP/6Q1/2Pb1p2/p7/K2P4/1P6/8 w - - 1 52,g6g7 f8g7 h7h8q g7h8,561,92,98,671,crushing endgame hangingPiece master short,https://lichess.org/3yIRW9PB#103
zyBHp,8/3b1pk1/7p/r1ppPpPP/5P2/2RP2K1/2P5/4R3 w - - 3 39,e1a1 a5a1,599,104,43,82,advantage endgame hangingPiece oneMove,https://lichess.org/s4nWO9V2#77`,
  },
  {
    id: 'hanging-middle', title: 'Висячие фигуры в игре', short: 'Висячие в игре',
    // task_hanging600_middle.csv — hanging pieces in the opening / middlegame, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
0MvVG,r3k2r/ppp1nppp/3q4/2b5/2P5/1P3N2/P4PPP/R1BQR1K1 b kq - 0 15,c5f2 g1f2 d6d1 e1d1,598,94,90,471,advantage hangingPiece middlegame short,https://lichess.org/GNZYcIY9/black#30
0r7l4,2r4r/1p3k2/p3bnp1/2q2p2/8/1P1BR3/PB2Q1PP/4R2K b - - 9 28,h8h2 h1h2 c5e3 e2e3,575,91,92,443,advantage hangingPiece middlegame short,https://lichess.org/JjqI7eR7/black#56
253Iw,3rr1k1/p3qpbn/2p5/3p1P2/4nN1Q/1P1B2R1/P1P3PP/R5K1 w - - 9 28,g3g7 g8g7 h4e7 e8e7,558,95,80,91,advantage hangingPiece middlegame short,https://lichess.org/90eZjx7R#55
2lCqY,r1bqkbnr/ppp1pppp/2n5/4P3/2Bp4/8/PPPP1PPP/RNBQK1NR w KQkq - 2 4,c4f7 e8f7,467,108,76,172,advantage hangingPiece oneMove opening,https://lichess.org/OkMq73m3#7
2y7nd,1rbq1rk1/p1pp1ppp/2p5/4P3/1nP5/B7/P1P2PPP/1R1QKB1R b K - 2 12,b4c2 d1c2 b8b1 c2b1,538,96,85,110,crushing hangingPiece middlegame short,https://lichess.org/njLpUEMv/black#24
34EwY,rnb1r1k1/ppp2pp1/7p/8/2BPqP2/P2Q2P1/4N1P1/2R1K2R w K - 0 17,c4f7 g8f7 d3e4 e8e4,596,90,65,172,crushing hangingPiece middlegame short,https://lichess.org/3OBxEOHa#33
34SRL,r1bq1rk1/pp2nppp/2nbp3/3p4/3P4/1PPBPNB1/5PPP/RN1QK2R w KQ - 3 10,d3h7 g8h7 g3d6 d8d6,576,82,100,223,advantage hangingPiece opening short,https://lichess.org/i78VP5vG#19
3RSBg,r2q1rk1/1ppnbppp/p1b5/4B3/8/2NB4/PPP2PPP/R2QR1K1 w - - 1 13,d3h7 g8h7 d1h5 h7g8 e5g7 g8g7,561,86,62,172,advantage hangingPiece long opening,https://lichess.org/f2UjtUbc#25
4bOSU,r1b3k1/ppp2Npp/1b3n2/4p3/2B5/P1P4P/5PP1/R1Br1RK1 b - - 0 17,b6f2 g1f2 d1f1 f2f1,533,90,100,168,advantage hangingPiece middlegame short,https://lichess.org/D3od2IUW/black#34
4dSMV,r1b2r2/1p2R1nk/n5p1/p1pP2P1/2P2q2/P1NBQp1P/1P3P2/4R1K1 w - - 1 31,e7g7 h7g7 e3f4 f8f4,576,94,84,1349,advantage hangingPiece middlegame short,https://lichess.org/YjXf0RlK#61
5d1ky,r4rk1/p1qb1ppp/1p1bp3/2pp3n/3P1B2/2PBPN2/PP3PPP/R2Q1RK1 w - - 0 12,d3h7 g8h7 f4d6 c7d6,539,86,100,190,advantage hangingPiece middlegame short,https://lichess.org/G0ZVetTa#23
5fnv0,1k1r3r/p1q2p1p/Pp2p2p/2b1P3/1PQ5/5N2/5PPP/R1R3K1 b - - 0 19,c5f2 g1f2 c7c4 c1c4,520,92,88,379,crushing hangingPiece middlegame short,https://lichess.org/EMEuHw4j/black#38
5uqbR,r2qk2r/pp3ppp/4bn2/2p1P1B1/3b4/6P1/PP3PBP/RN1QR1K1 b kq - 0 13,d4f2 g1f2 d8d1 e1d1,495,102,89,477,advantage hangingPiece middlegame short,https://lichess.org/XvXr4lZ5/black#26
604SI,5rk1/1pp2pp1/1b5p/nP2N3/4P3/2P1P3/2BrRKPP/R7 b - - 2 24,b6e3 f2e3 d2e2 e3e2,528,101,78,254,crushing hangingPiece middlegame short,https://lichess.org/tKQGB876/black#48
6A5pg,r1bqr1k1/ppp2pbp/3p2p1/6B1/2BQn3/P1N4P/1PP2PP1/2KR3R w - - 0 12,c4f7 g8f7 d4g7 f7g7,546,100,83,406,advantage hangingPiece middlegame short,https://lichess.org/WkWBtDwf#23
6RtUc,r1r3k1/4qppp/pb2p3/8/P1Np1P2/5QP1/1PP4P/R4RK1 b - - 0 26,c8c4 f3a8 e7d8 a8d8,554,98,60,410,advantage hangingPiece middlegame short,https://lichess.org/coMat8so/black#52
6UgCr,rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4,c5f2 e1f2,508,100,79,428,advantage hangingPiece oneMove opening,https://lichess.org/xy5CzPvW/black#8
6sf0w,3r4/ppN1kq2/4bn2/8/5Q2/P5r1/1PP2K2/R3R3 b - - 1 32,f6g4 f2g3 f7f4 g3f4,558,96,69,116,crushing hangingPiece middlegame short,https://lichess.org/7QmeJra0/black#64
7Ju9l,r4rk1/p1qb1ppp/1ppbp3/3p3n/3P4/2PBPNB1/PP3PPP/R2QK2R w KQ - 0 12,d3h7 g8h7 g3d6 c7d6,579,89,100,197,advantage hangingPiece middlegame short,https://lichess.org/ATQeo4z1#23
7PiCO,r4rk1/2qn1ppp/bp1bp3/p1pp4/3P1B2/2PBPN1P/PP3PP1/R2Q1RK1 w - - 0 13,d3h7 g8h7 f4d6 c7d6,574,100,90,793,advantage hangingPiece middlegame short,https://lichess.org/VAXupxEO#25
7PvxW,4r1k1/p4b1p/2p3pP/3p1pP1/2P2Q2/P4P2/1rPKBq2/R3R3 b - - 0 26,b2c2 d2c2 e8e2 e1e2,538,103,78,201,crushing hangingPiece master middlegame short,https://lichess.org/7qScPf3w/black#52
840FV,r1b1k2r/pp3pp1/4p2p/q1b1Q3/2B5/2N5/PP3PPP/R3R1K1 b kq - 0 15,c5f2 g1f2 a5e5 e1e5,572,90,85,859,advantage hangingPiece middlegame short,https://lichess.org/4Yl1v7br/black#30
8JB2V,r1b1r1k1/ppp2ppp/3p1q2/4n3/4Pb1N/N1PP4/PP2BQPP/R4RK1 b - - 3 14,f4h2 g1h2 f6f2 f1f2,516,99,79,231,advantage hangingPiece middlegame short,https://lichess.org/vNMSHg94/black#28
8MiOa,r1bq1rk1/pp2nppp/2nbp3/3p4/3P4/2PB1NB1/PP3PPP/RN1QK2R w KQ - 1 9,d3h7 g8h7 g3d6 d8d6,548,94,73,213,advantage hangingPiece opening short,https://lichess.org/UPMZK3WP#17
8UUiC,r1b2rk1/pp1nb1pp/2p1p3/8/3PQ3/6N1/P1BBKPPP/q6R b - - 1 17,f8f2 e2f2 a1d4 e4d4,560,97,77,540,advantage hangingPiece middlegame short,https://lichess.org/kcWZmRLV/black#34
8Yjyi,4rn1k/pp4pp/2p5/2P1PPq1/1PB1R1nP/P7/3r4/2Q2RK1 b - - 0 32,d2g2 g1g2 g5c1 f1c1,593,86,77,259,crushing hangingPiece middlegame short,https://lichess.org/yb4T7oSj/black#64
8jKpX,r1b2rk1/ppq2ppp/2nbp3/3p3n/3P4/2PB1NB1/PP1NQPPP/R3K2R w KQ - 5 11,d3h7 g8h7 g3d6 c7d6,574,92,100,334,advantage hangingPiece middlegame short,https://lichess.org/ZGNPks8i#21
94wlV,rnbqkb1r/pppp1ppp/8/4p3/2B1n3/P7/1PPP1PPP/RNBQK1NR w KQkq - 0 4,c4f7 e8f7,510,107,70,183,advantage hangingPiece oneMove opening,https://lichess.org/bPHQh8ix#7
9DGI3,r1b1kb1r/pp1p3p/5p2/8/1n6/8/PRP1PPPP/3QKB1R w Kkq - 0 13,b2b4 f8b4 d1d2 b4d2,583,95,78,234,crushing hangingPiece middlegame short,https://lichess.org/dKU78KVg#25
9MYBz,r4rk1/1b2bppp/p3p3/4N1P1/3qBP1B/5Q2/P6P/R3K2R w KQ - 0 20,e4h7 g8h7 f3d3 d4d3,583,84,80,324,crushing hangingPiece middlegame short,https://lichess.org/FWhL2k3d#39
9fuaD,2rq1rk1/pb1n1ppp/1p1bp3/4N1P1/2Pp1P2/3B4/PP5P/R1BQR1K1 w - - 1 16,d3h7 g8h7 e5f7 f8f7,566,98,78,367,advantage hangingPiece opening short,https://lichess.org/l5Rmck1q#31
AenkT,3r1rk1/pp3ppp/3q1b2/1P6/8/3B3P/PP3PP1/R2Q1RK1 w - - 0 18,d3h7 g8h7 d1d6 d8d6,578,102,25,43,advantage hangingPiece middlegame short,https://lichess.org/m5PAyH7o#35
BSFLL,2rq1rk1/1b1n1ppp/p1p1p3/1pR1N3/3P4/3BP3/PP3PPP/3Q1RK1 w - - 3 16,d3h7 g8h7 e5d7 d8d7,474,92,100,368,advantage hangingPiece middlegame short,https://lichess.org/N0UavizU#31
BgzKu,r5k1/1p3pp1/p2N1n1p/3n1Q2/8/4r3/PP1q2BP/3RR2K w - - 8 29,d1d2 e3e1 f5f1 e1f1,486,88,78,204,advantage hangingPiece master middlegame short,https://lichess.org/AobVNwdJ#57
C9gzn,r3q1k1/3b1ppp/3p1b2/p4n2/1p1P4/B1P2Q2/PP1N1PPP/4RBK1 b - - 1 19,e8e1 f3a8 e1e8 a8e8,581,98,95,475,advantage hangingPiece kingsideAttack middlegame short,https://lichess.org/qSvXa1Gy/black#38
CDUXi,2r3k1/pp1b1pp1/7p/8/2BP4/P3rNbP/1P4P1/2R2RK1 w - - 0 23,c4f7 g8f7 c1c8 d7c8,596,86,74,213,advantage hangingPiece middlegame short,https://lichess.org/EGmaZVQw#45
CDtVz,r2qr1k1/pp3pp1/2p3np/5pb1/3P4/1BP1Q2P/PP3PP1/R1B1R1K1 w - - 2 17,b3f7 g8f7 e3e8 d8e8,435,97,74,243,advantage hangingPiece middlegame short,https://lichess.org/TfN1cXkT#33
CUQA1,r1b1k2r/ppppqppp/2n2n2/2b1p3/2P1P3/3P1NP1/PP3PBP/RNBQK2R b KQkq - 0 6,c5f2 e1f2,407,109,91,1192,advantage hangingPiece oneMove opening,https://lichess.org/2MDaV4cl/black#12
CWdJU,2rq3b/1b1k4/p3pn1p/1pp1pnp1/8/P1NPB1Q1/BPP3PP/R4RK1 w - - 2 21,a2e6 d7e6 f1f5 e6f5,524,97,95,153,advantage hangingPiece master masterVsMaster middlegame short,https://lichess.org/A08PuF3P#41
D8HiO,r2kr3/p4ppp/1p3q2/8/4R3/Q7/PPP1BPPP/4K2R w K - 1 20,a3d6 f6d6 e4e8 d8e8,501,102,95,922,crushing hangingPiece middlegame short,https://lichess.org/T7C4LX29#39
DF23b,7r/4rkpn/p1pb1p1p/3p1N2/3P4/2P5/PP1NR1PP/4R1K1 b - - 7 23,d6h2 g1h2 e7e2 e1e2,517,96,81,567,crushing hangingPiece middlegame short,https://lichess.org/9Xgm0Oq0/black#46
DUQHe,2k5/1ppr4/pn5r/5p2/1Q1q3p/1PR2B1R/2P2PP1/2K5 w - - 0 41,f3b7 c8b7 b4d4 d7d4,507,101,80,543,advantage hangingPiece middlegame short,https://lichess.org/vp1YtHRF#81
DW2iU,5b1r/4nkpp/2r1pp2/1Q2p3/4P3/8/PP3PPP/2BR2K1 w - - 2 21,d1d7 c6c1 b5f1 c1f1,545,107,79,349,advantage hangingPiece kingsideAttack middlegame short,https://lichess.org/ZTIXTeLY#41
Dpg6K,4r1k1/1br1np2/5B1p/p4Rp1/P3p3/1BP4P/2P3P1/3R2K1 w - - 6 27,b3f7 g8f7 f6e7 f7e7,572,93,96,902,advantage hangingPiece middlegame short,https://lichess.org/YkqtBtw8#53
DtnpE,r3kb1r/ppp2ppp/2np3q/3Bp3/4P3/3P3Q/PPPN1PPP/R3K2R w KQkq - 6 12,d5f7 e8f7 h3h6 g7h6,576,105,77,203,advantage hangingPiece middlegame short,https://lichess.org/KKABk3HE#23
EAbNy,2r2rk1/pbqn1ppp/1p1bp3/2pp4/3P3P/2PBPNB1/PP3PP1/R2QK2R w KQ - 0 13,d3h7 g8h7 g3d6 c7d6,585,100,56,126,advantage hangingPiece middlegame short,https://lichess.org/M0EqF0ge#25
EBV4e,3r2k1/1p2ppbp/p4np1/1q3b2/3N4/Q1B1P1P1/PP3PBP/3R2K1 w - - 3 21,d4b5 d8d1 c3e1 d1e1,562,101,94,503,crushing hangingPiece kingsideAttack middlegame short,https://lichess.org/lsLMOV4A#41
EEGHj,4k2r/r2n1ppp/p3pn2/8/2BP4/2Q1P3/1q3PPP/RN2K2R b KQk - 0 17,b2f2 e1f2,532,102,81,219,advantage hangingPiece middlegame oneMove,https://lichess.org/LYjmsEQV/black#34
EQ00K,r1bqk2r/ppppnppp/2n5/4b3/2B1P3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 7,c4f7 e8f7 f3e5 c6e5,594,98,86,251,advantage hangingPiece opening short,https://lichess.org/H4lGigwK#13
EohZM,1r1qk2r/1p2bppp/p1np4/3BpP2/8/3Q4/PPP2PPP/R1B2RK1 w k - 1 13,d5f7 e8f7,456,104,67,238,advantage hangingPiece middlegame oneMove,https://lichess.org/nJ65IDxC#25
FUoao,3r2k1/1pqrnpp1/p4b1p/2pBp2P/1P6/P3P1P1/1BQR1P2/3R2K1 w - - 0 26,d5f7 g8f7 d2d7 d8d7 d1d7 c7d7,582,84,78,153,advantage hangingPiece long middlegame,https://lichess.org/VMMZFpCR#51
G2Ok7,r1bqr1k1/ppp2ppp/2p2n2/2b5/4P3/1N5P/PPP2PP1/RNBQR1K1 b - - 2 10,c5f2 g1f2 d8d1 e1d1,402,113,79,441,advantage hangingPiece opening short,https://lichess.org/JXDtBlFC/black#20
G2oyN,3rr1k1/pp5p/6pB/4pp2/3bq3/3R3P/PP1Q1PP1/3R2K1 b - - 2 20,e4d3 d2d3 d4f2 g1f2 d8d3 d1d3,465,88,81,157,advantage hangingPiece long master middlegame,https://lichess.org/CpxMLZnC/black#40
Ga9FQ,5r2/p5kp/6r1/3p1Bq1/8/4PQb1/PP4R1/5RK1 b - - 2 29,g3h2 g1h2 g5g2 f3g2 g6g2 h2g2,471,90,68,209,crushing hangingPiece long middlegame,https://lichess.org/mpyInVPk/black#58
HaHbI,r4rk1/1pb1qppp/p4n2/Q2p4/4pP2/1P4P1/PB1P1PBP/R3K2R w KQ - 2 19,a5c5 e7c5,503,100,83,838,crushing hangingPiece middlegame oneMove,https://lichess.org/qY7veoZ2#37
HsrV5,r3k3/ppp1qp1p/2n1b1r1/8/2p2B2/2P2N2/P3QPPP/3R1RK1 b q - 0 15,g6g2 g1g2 e6h3 g2h3,530,102,95,901,crushing hangingPiece middlegame short,https://lichess.org/F3ImyhEk/black#30
I5Gju,r2qr1k1/pbp2ppp/1p6/n2n4/8/B1PB1N2/P4PPP/R2QR1K1 w - - 0 15,d3h7 g8h7 e1e8 d8e8,544,101,73,349,crushing hangingPiece opening short,https://lichess.org/ClWGTsBC#29
Ihht4,r3k2r/pppbbppp/1q6/3p4/Q3R3/4BP2/PPP3PP/RN4K1 w kq - 2 14,a4d7 e8d7 e4e7 d7e7,537,100,72,282,advantage hangingPiece middlegame short,https://lichess.org/aeZxQvJ0#27
JtJsH,1k1r2r1/pp2qp1Q/3b4/7p/R7/1P2P3/1PP2PPP/3R2K1 b - - 3 22,d6h2 g1h2 g8g2 h2g2,599,101,77,473,advantage hangingPiece middlegame short,https://lichess.org/SFvnSf6g/black#44
JtVnq,1k5r/1r1qb1pp/1p1p1p2/8/P1R5/1P2B3/2PQ2PP/5R1K w - - 1 30,c4g4 d7g4,581,89,85,910,advantage hangingPiece middlegame oneMove,https://lichess.org/xYz3BKkY#59
K34fH,r1bqk2r/1pp2ppp/1bnp1n2/p7/P1BPP3/5N2/1P3PPP/RNBQ1RK1 w kq - 0 9,c4f7 e8f7,572,103,36,120,advantage hangingPiece oneMove opening,https://lichess.org/aCqHs05Q#17
KdXkO,r1b1k2r/ppp1qpbp/5np1/4Q3/2B5/8/PPP2PPP/RNB1K2R w KQkq - 1 11,c4f7 e8f7 e5e7 f7e7,510,98,91,1123,crushing hangingPiece opening short,https://lichess.org/JgfFbQuH#21
KhoMd,2kr3r/pp3Npp/1np2n2/8/8/P1Pb3P/2PB1PP1/R2KR3 b - - 0 18,d3c2 d1c2 d8d2 c2d2,458,94,100,392,advantage hangingPiece middlegame short,https://lichess.org/9mcHvecp/black#36
Lfmjf,r1bqnrk1/pp1n1ppp/4p3/3pN3/3P1P2/1PPB4/3N1PPP/R2QK2R w KQ - 5 12,d3h7 g8h7,594,99,53,155,advantage hangingPiece oneMove opening,https://lichess.org/7cEBIWvl#23
M5nYw,r3k2r/ppp2ppp/8/2qPP3/4n1b1/3B1P2/PP4KP/RN1Q1R2 b kq - 2 14,g4h3 g2h3 e4f2 f1f2,549,99,79,102,advantage hangingPiece middlegame short,https://lichess.org/6rGg5bfV/black#28
MB7WY,r4r2/kp6/3R3p/p2Pn1p1/5pB1/8/PqPBQ1PP/2R4K w - - 1 28,d2a5 b2c1 e2d1 c1d1,510,86,100,316,advantage hangingPiece middlegame short,https://lichess.org/DcUfyFxU#55
MKQDP,r6k/p5pp/1p2P3/6Q1/PbB2r2/2PP1qB1/3K3P/4R3 b - - 0 30,b4c3 d2c3 f4c4 c3c4,400,93,85,144,advantage hangingPiece middlegame short,https://lichess.org/yaZHDi2x/black#60
N93eO,rnb1k2r/pp3pp1/5q1p/2bQ4/8/2N2N2/PP2PPPP/R3KB1R b KQkq - 0 9,c5f2 e1f2,462,98,84,375,advantage hangingPiece oneMove opening,https://lichess.org/FGok3yay/black#18
NFVHd,2k4r/p1q4p/2p3p1/2Nbpp2/3r4/7Q/PPP2PPP/1K1RR3 b - - 0 21,d5a2 b1a2 d4d1 e1d1,500,101,72,265,advantage hangingPiece middlegame short,https://lichess.org/1Umwy6e7/black#42
NSmG9,2r2rk1/bb3p1p/p4p2/8/NP1q4/P3pRPB/4P2P/2RQ2K1 w - - 2 24,d1d4 c8c1 d4d1 c1d1,592,81,80,226,crushing hangingPiece middlegame short,https://lichess.org/HFyfJgHg#47
NZnEs,1rb2rk1/ppqn1ppp/3bp3/2pp4/3P1B2/2PBPN2/PP3PPP/R2QK2R w KQ - 0 11,d3h7 g8h7 f4d6 c7d6,578,89,100,601,advantage hangingPiece opening short,https://lichess.org/903Btkqr#21
Nbon9,r3k2r/pbpp1q1p/1pn1p1B1/3n2pQ/3P3B/2P4P/PP3PP1/RN3RK1 b kq - 3 14,h7g6 h5h8 f7f8 h8f8,536,103,93,423,advantage hangingPiece middlegame short,https://lichess.org/N9ijc4nh/black#28
NqQp4,1brqr1k1/pb3ppp/1p6/8/1B1p2B1/P2P3P/1P3PP1/2RQ1K1R b - - 3 18,b7g2 f1g2 c8c1 d1c1,550,101,78,279,advantage hangingPiece middlegame short,https://lichess.org/rBhqe7fT/black#36
OPEV0,1k1r3r/p1pb2pp/2pB4/4p3/2n1p3/1NPR1N2/PP3PPP/2KR4 w - - 0 19,d6c7 b8c7 d3d7 d8d7 d1d7 c7d7,585,91,84,419,advantage hangingPiece long middlegame,https://lichess.org/2V8oBb0B#37
OUBIX,2r2rk1/1p3ppp/p3p3/7P/b5P1/2qBQP2/P1P5/1K1RR3 w - - 1 21,d3h7 g8h7 e3c3 c8c3,500,92,71,109,advantage hangingPiece master middlegame short,https://lichess.org/ofU7Fr6X#41
OciDY,2r3k1/p1B2b1p/1p1q1np1/8/8/1Q3B2/PP4PP/2R4K w - - 0 29,c7d6 c8c1 b3d1 c1d1,588,90,81,120,advantage hangingPiece middlegame short,https://lichess.org/gRvhBT8R#57
OeYKg,4rrk1/pp3pp1/7p/8/2bqB3/4RP2/P1P3PP/R3Q2K w - - 0 24,e4h7 g8h7 e3e8 f8e8,592,91,73,294,crushing hangingPiece middlegame short,https://lichess.org/yU5gzqhu#47
Oewhd,r1b1k2r/pp1qnppp/2pQ4/8/5Pn1/1BN5/PPP3PP/R1B1R1K1 w kq - 3 15,b3f7 e8f7 d6d7 c8d7,563,106,65,187,advantage hangingPiece opening short,https://lichess.org/tBBlKecc#29
PkBGX,r2qr1k1/1p1n1ppp/p1pb4/7b/1P1PB3/P4N1P/5PP1/R1BQR1K1 w - - 1 16,e4h7 g8h7 e1e8 d8e8,434,104,78,372,advantage hangingPiece opening short,https://lichess.org/dAOd7Q3V#31
Pxupv,3r4/pp2q1k1/2p5/3PppnR/2P1p1nR/1P2P3/P2N1PK1/Q7 w - - 0 34,h5g5 e7g5 h4g4 g5g4,579,99,72,257,crushing hangingPiece master middlegame short,https://lichess.org/HPYMCQBe#67
Q15sw,2k1rr2/pp1q1p2/6p1/8/4pQ1P/3P2N1/PP3P1R/1K1R4 w - - 0 27,d3e4 d7d1 f4c1 d1c1,544,86,76,158,advantage hangingPiece middlegame queensideAttack short,https://lichess.org/elJFkIpc#53
QH56q,r1bq1rk1/1pp2ppp/p1n2n2/2b1p3/B3P3/5N1P/PPP2PP1/RNBQR1K1 b - - 0 9,c5f2 g1f2 d8d1 e1d1,483,105,75,253,advantage hangingPiece opening short,https://lichess.org/3jeWlCDz/black#18
RKl3Q,r2qr1k1/1pp2ppp/p1nb4/8/3PB1b1/P4N2/1P3PPP/R1BQR1K1 w - - 1 14,e4h7 g8h7 e1e8 d8e8,562,91,79,238,advantage hangingPiece opening short,https://lichess.org/UjwjGQhB#27
RwHzA,rn2k2r/p2pbpp1/5q1p/2P1p3/2P4P/P2B1bN1/1B3QP1/R4K1R b kq - 1 18,f3g2 f1g2 f6f2 g2f2,526,96,90,201,advantage hangingPiece middlegame short,https://lichess.org/t3AcywyH/black#36
SEZeH,2rr2k1/5pp1/p6p/5b2/3b4/8/PP1RNPPP/R1B3K1 b - - 4 25,d4f2 g1f2 d8d2 c1d2,486,103,94,944,crushing hangingPiece middlegame short,https://lichess.org/1QlLb7ws/black#50
STixn,2rq2k1/pb1nrppp/1p1p4/2nP4/8/2N2N1P/PPB2PP1/R2QR1K1 w - - 0 20,c2h7 g8h7 e1e7 d8e7,445,106,72,456,advantage hangingPiece middlegame short,https://lichess.org/QhxzwrvJ#39
SV87A,r1b2rk1/1p4pp/p2b4/2pP4/2P5/5P1P/PPB2KP1/R2QR2q b - - 6 23,d6g3 f2g3 h1e1 d1e1,581,101,89,789,advantage hangingPiece middlegame short trappedPiece,https://lichess.org/SwT8dhZI/black#46
SrWxp,r5r1/1b3p1k/pb3p1p/1p2pN2/1P2P3/3q3P/3NQPP1/R3R1K1 b - - 5 22,g8g2 g1g2 d3e2 e1e2,594,102,79,371,advantage hangingPiece middlegame short,https://lichess.org/Vst9STem/black#44
T1Y5o,1n5k/p5pp/4Q1b1/2qBp3/8/P2P3P/KP2P3/5rNR b - - 2 26,c5d5 e6d5 g6f7 d5f7,510,99,93,1602,advantage hangingPiece middlegame short,https://lichess.org/0Ge1xVzz/black#52
TaXiI,r2qkb1r/2p2ppp/p1np1n2/1p2p3/4P1b1/1BP2N2/PP1P1PPP/RNBQR1K1 w kq - 2 9,b3f7 e8f7,512,111,65,169,advantage hangingPiece oneMove opening,https://lichess.org/vme1EACC#17
UJGgJ,r3r1k1/1p1nqppp/4b3/p1ppP3/5P1P/2NB4/PPPQ2P1/2KR3R w - - 0 16,c3d5 e6d5 d3h7 g8h7,589,83,83,231,advantage hangingPiece middlegame short,https://lichess.org/pOvFTzGt#31
UUYK1,5rk1/5p2/3pN1bQ/2p1p3/p1P5/P3B3/1r4PP/4qRK1 b - - 7 30,b2g2 g1g2 e1f1 g2f1,442,112,82,368,crushing hangingPiece master middlegame short,https://lichess.org/v8VHUC6f/black#60
VzpN3,r1b1k2r/ppp1bppp/2n2n2/1Nq1p3/2B5/5N2/PPPP1PPP/R1BQR1K1 w kq - 8 9,c4f7 e8f7,582,104,79,129,advantage hangingPiece oneMove opening,https://lichess.org/1vNxDQIV#17
WCr0k,r3r1k1/1b3p2/p1n2bpp/1p1p4/2pP4/NPP4P/P3NPP1/R2BR1K1 w - - 0 21,e2f4 e8e1,520,110,93,2437,crushing hangingPiece kingsideAttack middlegame oneMove,https://lichess.org/IEqbG6dd#41
XwtsG,rnbq1rk1/p4ppp/1p1bp3/3p3n/3P4/2PB1NB1/PP1N1PPP/R2QK2R w KQ - 1 10,d3h7 g8h7 g3d6 d8d6,547,101,79,813,advantage hangingPiece opening short,https://lichess.org/Rk02mKS0#19
XzIoY,3r1rk1/pp4p1/1q1b3p/5p1Q/4p3/2P1P2P/PP1R1NP1/3R2K1 b - - 1 24,d6h2 g1h2 d8d2 d1d2,483,101,97,1097,advantage hangingPiece middlegame short,https://lichess.org/dzD2J8sA/black#48
YKzcy,r1bqr1k1/1p3pp1/p4n1p/2Ppb3/1P6/P1NB4/1B3PPP/R2QR1K1 b - - 1 17,e5h2 g1h2 e8e1 d1e1,595,98,71,155,crushing hangingPiece master opening short,https://lichess.org/x6L1mDe8/black#34
YW5Cf,rn1qk2r/pp2bpp1/2p2p1p/7b/2BPN3/5P2/PPP1Q1PP/2KR2NR w kq - 1 11,e4d6 d8d6,538,108,78,868,advantage hangingPiece oneMove opening,https://lichess.org/ayzAVP8j#21
YgQOp,r3k1r1/4Bp1p/2p3p1/2p1Pp2/3p4/1q1PnRQ1/P3N1PP/R5K1 w q - 0 22,a2b3 a8a1 e2c1 a1c1,591,95,97,379,advantage hangingPiece middlegame short,https://lichess.org/9cUhI8JU#43
Z8fqk,r7/1pp4k/n2p4/p2P1qQ1/2P1r3/6RP/PP2B3/R3K3 b Q - 1 26,e4e2 e1e2 f5g5 g3g5,596,89,50,40,advantage hangingPiece master middlegame short,https://lichess.org/yF97diVB/black#52
Z8tha,2kr2nr/ppp2ppp/2p5/2b1q3/4Q1P1/2P4P/PP1P1P2/RNB1R1K1 b - - 0 12,c5f2 g1f2 e5e4 e1e4,565,89,73,421,advantage hangingPiece middlegame short,https://lichess.org/0Djca0xh/black#24
ZAO18,r1b2r1k/1p3p2/p5p1/3qb3/2Q5/3B4/PP3PPP/R1B2RK1 b - - 1 17,e5h2 g1h2 d5c4 d3c4,598,98,22,103,advantage hangingPiece middlegame short,https://lichess.org/UqrWaWWf/black#34
ZIIQ6,r4rk1/2p2ppp/P3p3/2npP3/1Q1b3q/6P1/2P2P1P/1RB1KB1R b K - 0 19,d4f2 e1f2 h4b4 b1b4,585,96,82,1009,advantage hangingPiece middlegame short,https://lichess.org/QPoSWiQL/black#38
ZOOyq,rn1q1rk1/3p1ppp/p1b1p3/6b1/3P1n2/2PB1N1P/RP2QPPB/1N3RK1 w - - 5 15,d3h7 g8h7 h2f4 g5f4,530,92,58,101,advantage hangingPiece middlegame short,https://lichess.org/zrPHFTYj#29
ZgDGJ,2kr4/1pp1Rp1p/p6p/3B4/8/P1N2Nr1/1P3qbK/R2Q4 w - - 0 24,d5b7 c8b7 e7c7 b7c7,557,97,83,248,crushing hangingPiece middlegame short,https://lichess.org/BUtrIVF7#47
a08rt,r2q1rk1/pp2bppp/2b1p3/2p1B3/3P4/2PB4/P1P2PPP/R2QR1K1 w - - 3 13,d3h7 g8h7 d1h5 h7g8 e5g7 g8g7,552,99,94,718,advantage hangingPiece long master middlegame,https://lichess.org/7koVVRf7#25
aYyg3,2k2r2/1ppq1p2/p2p2Q1/3Pp2p/2P1P1bP/2N1b3/PP4P1/R3KR2 b Q - 0 20,f7g6 f1f8 d7d8 f8d8,552,93,90,1676,advantage hangingPiece middlegame queensideAttack short,https://lichess.org/7V5OdtUR/black#40
aglJ4,r4k1r/pp4p1/1bn5/4p3/4Np1q/5B1b/PPPP1PPK/R1BQ3R b - - 1 16,h3g2 h2g2 h4h1 d1h1 h8h1 g2h1,573,89,100,342,advantage hangingPiece long middlegame,https://lichess.org/qiIavPKS/black#32
agmaf,r1bqk2r/p4ppp/2pbpn2/6B1/2B5/8/PPP2PPP/RN1QR1K1 b kq - 3 11,d6h2 g1h2 d8d1 e1d1,565,99,81,217,crushing hangingPiece opening short,https://lichess.org/IeeVQmJc/black#22
ay0Cb,3k1r1r/pp1n2p1/4R3/3Q1B2/3P4/2P3K1/Pq4P1/8 b - - 1 31,b2f2 g3f2 f8f5 d5f5,579,91,86,387,advantage hangingPiece middlegame short,https://lichess.org/BKoAFBnB/black#62
b7JI0,2nq1rk1/1pR3bp/p3p1p1/Q2pPpn1/3P4/1P3NPP/P3BPK1/8 w - - 2 30,c7g7 g8g7 a5d8 f8d8,592,87,100,159,advantage hangingPiece middlegame short,https://lichess.org/IGwqszdg#59
bVt4v,r1b1k2r/pp2qpp1/7p/8/1nB5/5N2/PP2QPPP/R3K2R w KQkq - 2 14,c4f7 e8f7 e2e7 f7e7,543,98,90,346,advantage hangingPiece middlegame short,https://lichess.org/NgkFpm8f#27
bhXCl,5r2/1b1nkr2/p7/1pp1P3/6P1/4PN1P/PP2KR2/5R2 b - - 0 23,d7e5 f3e5 f7f2 f1f2 f8f2 e2f2,593,85,100,153,advantage hangingPiece long middlegame,https://lichess.org/FoKrqlGC/black#46
cAhFJ,1k1r3r/p1p2p2/1p1b4/3Q3p/P1PP4/1P3PP1/1B2qRK1/R7 b - - 1 24,e2f2 g2f2 d6g3 f2g3,509,100,97,607,advantage hangingPiece middlegame short,https://lichess.org/JVfWc1ST/black#48
cBqgL,1r2k2r/1p3ppp/p3b3/q1b1Q3/1n6/2N2NP1/PP2PPBP/2R1K2R b Kk - 1 20,c5f2 e1f2 a5e5 f3e5,460,102,78,502,advantage hangingPiece middlegame short,https://lichess.org/r08AIadQ/black#40
cOMs4,r1bqk2r/ppp3p1/3b1n2/6Bp/2B1p3/8/PPP2PPP/RN1QR1K1 b kq - 1 10,d6h2 g1h2 d8d1 e1d1,541,104,85,183,advantage hangingPiece opening short,https://lichess.org/ENkcFAxO/black#20
cZZKh,2k2r2/ppp3pp/8/2bNq1p1/5r2/1Q5P/PPP3P1/3RR2K b - - 0 21,e5e1 d1e1 f4f1 e1f1,544,94,81,201,advantage hangingPiece middlegame short,https://lichess.org/eF0pwgPa/black#42
cfdAo,r1bqk2r/p3pp1p/5bpB/2nQ4/8/5NN1/PP3PPP/2KR3R b kq - 0 16,f6b2 c1b2 d8d5 d1d5,440,96,95,459,advantage hangingPiece middlegame short,https://lichess.org/QeTeEBPr/black#32
cw0JL,3rr1k1/p3Bppp/2pQ1n2/8/8/6R1/PqP2PPP/4R1K1 w - - 1 25,g3g7 g8g7 d6d8 e8d8,541,95,78,542,crushing hangingPiece middlegame short,https://lichess.org/of46hix2#49
d7Dqo,r1bq1rk1/pp3ppp/2nbp3/3p3n/3P4/2PB1NB1/PP1N1PPP/R2Q1RK1 w - - 4 11,d3h7 g8h7 g3d6 d8d6,577,100,94,826,advantage hangingPiece opening short,https://lichess.org/LS1D0cd7#21
dv1kk,r2q2k1/pp3p1p/4rnp1/2pp1p2/2P5/3QPN1P/PP3PP1/3R1RK1 b - - 0 16,d5c4 d3d8 a8d8 d1d8,528,93,86,1140,crushing hangingPiece kingsideAttack middlegame short,https://lichess.org/rnMFyVEn/black#32
e0QxS,rnb2rk1/pp3ppp/2p1p3/q7/1bPPB3/7N/PP1B1PPP/R2QK2R w KQ - 5 11,e4h7 g8h7 d2b4 a5b4,581,105,76,480,advantage hangingPiece opening short,https://lichess.org/qdaj3Tva#21
eTJiE,4rrk1/p1p3pp/2p5/1p1q1p2/2Pb1B2/1P1Q1PNb/P4P1P/2RR2K1 b - - 0 21,e8e1 d1e1 d4f2 g1f2,554,101,85,994,advantage hangingPiece middlegame short,https://lichess.org/ZrxyRRcZ/black#42
ep6BM,Q6r/1pk4q/p1p5/2B3r1/3P2p1/8/PP4RP/4R1K1 w - - 8 35,c5b6 c7b6 a8h8 h7h8,598,98,76,413,crushing hangingPiece middlegame short trappedPiece,https://lichess.org/Gz4JcbDU#69
extN9,r4qk1/bpp3p1/3p1r1p/3Pp3/1PP1P3/R4NNb/5P1P/R2Q2K1 b - - 7 23,a7f2 g1f2 a8a3 a1a3,593,83,100,205,advantage hangingPiece middlegame short,https://lichess.org/10AJiNrh/black#46
fGcKq,r3k2r/p3qppp/2p2n2/2b5/8/8/PPP1QPPP/RNB1K2R b KQkq - 0 12,c5f2 e1f2 e7e2 f2e2,473,106,96,569,advantage hangingPiece middlegame short,https://lichess.org/VtJ4nxQ7/black#24
fWKNL,2r2rk1/pp1n2p1/4p2p/2bpP3/8/1P3N2/P2N1PPP/2R1R1K1 b - - 1 20,c5f2 g1f2 c8c1 e1c1,549,92,78,447,advantage hangingPiece master middlegame short,https://lichess.org/C3kMOAEd/black#40
fc9y1,r3kb1r/pppbnppp/2n5/1B2P3/3N4/8/PPP2PPP/R1BNK2R w KQkq - 5 10,f2f4 c6d4 b5d7 e8d7,573,98,80,1110,crushing hangingPiece opening short,https://lichess.org/AJJTFw38#19
flyOO,r1b1kb1r/pp2pppp/2n2n2/8/2Bq1B2/2N5/PP3PPP/R2QK1NR w KQkq - 0 8,c4f7 e8f7 d1d4 c6d4,485,93,85,319,advantage hangingPiece opening short,https://lichess.org/Vmf36f5l#15
frD06,1k1r1b1r/ppp1ppp1/8/7p/3q1BQ1/3P4/PPP3PP/R4R1K w - - 0 16,f4c7 b8c7 g4d4 d8d4,589,92,81,132,crushing hangingPiece middlegame short,https://lichess.org/x02PYUXc#31
gT1oC,r2qr1k1/1b3ppp/p1nb4/1p6/2pPB3/5N1P/PP3PP1/R1BQR1K1 w - - 3 16,e4h7 g8h7 e1e8 d8e8,569,86,100,622,advantage hangingPiece opening short,https://lichess.org/gaT9kxVI#31
hb68l,r4rk1/1pqb1ppp/2nbp3/3p4/p2P4/2PB1NB1/PP2QPPP/R3K2R w KQ - 0 14,d3h7 g8h7 g3d6 c7d6,548,97,76,757,advantage hangingPiece middlegame short,https://lichess.org/u7BzfnkO#27
i4Nv0,2kr3r/ppp2ppp/2pbb3/8/2P5/1P6/P3BPPP/R1BR2K1 b - - 0 13,d6h2 g1h2 d8d1 e2d1,540,92,70,284,crushing hangingPiece middlegame short,https://lichess.org/hvUoonnM/black#26
i9WYs,r1bq1rk1/pp1nbppp/4p3/3pP1B1/8/3B4/PPP2PPP/RN1QR1K1 w - - 1 11,d3h7 g8h7 g5e7 d8e7,588,96,73,141,advantage hangingPiece opening short,https://lichess.org/rnZN11zR#21
irV1i,r2q1rk1/pp1b2pp/2p1p3/3pP3/8/2PBPR2/P1P3PP/R2Q2K1 w - - 1 15,d3h7 g8h7 f3f8 d8f8,490,91,100,353,advantage hangingPiece middlegame short,https://lichess.org/pFdW4L6B#29
j3uGL,r1b1k2r/pp1nppb1/2p4p/2q1P1p1/2BQ2n1/2N2NB1/P1P2PPP/1R2K2R w Kkq - 3 14,c4f7 e8f7 d4c5 d7c5,592,95,80,190,advantage hangingPiece master masterVsMaster middlegame short,https://lichess.org/VdwIohAM#27
j6tH2,2r1r1k1/1pq2ppp/p1n1b3/2bpQ3/8/2NB1N2/PPP2PPP/R3R1K1 w - - 4 16,d3h7 g8h7 e5c7 c8c7,501,99,79,124,advantage hangingPiece middlegame short,https://lichess.org/2VATAFF1#31
jJK5a,r1b1r1k1/1pp1qppp/8/p3b3/4Q3/3BB3/PPP2PPP/2KRR3 b - - 3 15,e5b2 c1b2 e7e4 d3e4,578,91,98,603,advantage hangingPiece middlegame short,https://lichess.org/Y0bHBwQN/black#30
jSg1B,2b1r1k1/1p2Bpp1/p4n1p/3P4/8/P4P1P/1P1bN1P1/2R1R1K1 b - - 0 29,e8e7 c1c8 e7e8 c8e8,574,96,95,1156,crushing hangingPiece kingsideAttack middlegame short,https://lichess.org/ODRx1mSW/black#58
k3MlW,3qr1k1/p4p1p/Pp3np1/1brB4/8/6P1/1P1QPP1P/R1B1R1K1 w - - 2 21,d5f7 g8f7 d2d8 e8d8,487,103,84,291,crushing hangingPiece middlegame short,https://lichess.org/HSHjDZtN#41
kEc2Z,rn2k3/ppp3qp/3p2pB/4Pr2/3P4/2N4Q/PPP4K/R7 b q - 1 18,g7h6 h3h6 f5h5 h6h5,576,87,100,261,advantage hangingPiece middlegame short,https://lichess.org/5IHQcPcW/black#36
lIL7l,6k1/2p2rpp/rb1pb3/p2Np3/4B3/P7/1PP3PP/1K1R1R2 w - - 8 22,e4h7 g8h7 f1f7 e6f7,581,85,100,110,advantage hangingPiece middlegame short,https://lichess.org/fxHKshc4#43
laOMd,rn4k1/6b1/pp1p1rRp/2pP1qnP/P1P2B2/8/1PQ1B3/2K4R w - - 0 27,g6g7 g8g7 c2f5 f6f5,599,103,37,101,advantage hangingPiece middlegame short,https://lichess.org/rzxXjRHv#53
mSmhc,r1b2rk1/1pR3np/p3p1p1/6N1/2B5/8/PPP3PP/5RK1 w - - 1 21,c7g7 g8g7 f1f8 g7f8,588,98,81,255,advantage hangingPiece middlegame short,https://lichess.org/NmxO2Cer#41
moj23,r1bbk2r/p1pn1pp1/2p4p/4P3/2B5/2N5/PPP3PP/R1B1K2R w KQkq - 1 12,c4f7 e8f7 e5e6 f7e6,500,90,87,725,advantage hangingPiece middlegame short,https://lichess.org/sMbO9pUh#23
n8rvJ,rnbqr1k1/pp3ppp/5b2/2p5/3NB3/2P5/PP3PPP/R1BQR1K1 w - - 0 13,e4h7 g8h7 e1e8 d8e8,552,96,85,995,crushing hangingPiece master opening short,https://lichess.org/Ats4sfIz#25
o5cZ3,4R3/1rk1bBr1/p2p4/2pPpQN1/nqp1P3/2N1BP2/PPR5/1K6 w - - 1 35,f5d7 c7d7 e8e7 d7e7,548,87,100,176,advantage hangingPiece middlegame short,https://lichess.org/TLfAwbff#69
o6K4U,rnb1k2r/pp2bppp/3q4/2pB4/8/2P2N2/PP3PPP/R1BQ1K1R w kq - 1 12,d5f7 e8f7 d1d6 e7d6,568,99,58,519,advantage hangingPiece opening short,https://lichess.org/jMvrKLL8#23
oH2PA,rn1qk1nr/ppp2ppp/1b1p4/8/2BPPBb1/5N2/PPP3PP/RN1QK2R w KQkq - 2 7,c4f7 e8f7,597,102,56,93,advantage hangingPiece oneMove opening,https://lichess.org/BgBKM2tn#13
odzlV,r1bq3r/pp3kpB/4pp2/2Pp3R/1P1P4/P7/3Q1PPP/R5K1 w - - 1 20,h7g6 f7g6 h5h8 d8h8,580,95,79,506,advantage hangingPiece middlegame short,https://lichess.org/phL5uTj2#39
pEREl,r3k2r/pp1bbppp/4pn2/q2pN3/1n1P1B2/P1NBP3/1PQ2PPP/R3K2R w KQkq - 2 12,a3b4 a5a1 c2b1 a1b1,536,93,78,836,advantage hangingPiece middlegame short,https://lichess.org/x5Kpmhkt#23
pGQ7s,1k1r1b1r/ppp2ppp/4bq2/3p4/4Q3/1P2PN2/PBP1BPPP/2KR1R2 b - - 0 13,f6b2 c1b2 f8a3 b2a3,522,101,97,863,advantage hangingPiece middlegame short,https://lichess.org/r9BIQmEr/black#26
plYJT,rn2k1nr/ppp2ppp/3p4/2b1p2q/4P1b1/2P2NP1/PP1PBP1P/RNBQR1K1 b kq - 4 10,c5f2 g1f2,511,102,72,368,advantage hangingPiece oneMove opening,https://lichess.org/rZfHWSkE/black#20
q1OJ7,r1bq1rk1/2p2ppp/p1n2n2/1pb1p3/4P3/1B3N1P/PPP2PP1/RNBQR1K1 b - - 0 10,c5f2 g1f2 d8d1 e1d1,582,102,78,373,advantage hangingPiece opening short,https://lichess.org/QWym9Yu5/black#20
qRvwv,r7/1p2kn1p/p3bnp1/3p1pB1/8/3B4/P1PK2PP/4RR2 w - - 4 23,e1e6 e7e6 g5f6 e6f6,428,96,88,843,advantage hangingPiece middlegame short,https://lichess.org/tsnLbkVY#45
qkpfm,4r2k/pR3Q2/2p4p/B1P1bqp1/3p4/3P1pPP/P3rP1K/5R2 b - - 4 32,e5g3 h2g3 f5f7 b7f7,580,87,79,370,crushing hangingPiece master middlegame short,https://lichess.org/XOjMxZ9d/black#64
rpdzr,r2q2k1/pp1nrppp/8/3p3b/3P4/3B1N1P/PP3PP1/R2QR1K1 w - - 0 15,d3h7 g8h7 e1e7 d8e7,599,91,77,650,advantage hangingPiece master middlegame short,https://lichess.org/nZQ5kIlp#29
rtV4L,r4rk1/4bppp/pq2p3/1p1bB3/5P2/P2B3P/1PP1Q1PK/R2R4 w - - 0 19,d3h7 g8h7 e2h5 h7g8 e5g7 g8g7,550,99,82,563,crushing hangingPiece long middlegame,https://lichess.org/W18afBJj#37
rwMyN,r1b1r2k/1p1p1qp1/1bp4p/pn6/3P4/1BPQ4/PP3PPP/R1B1R1K1 w - - 0 20,b3f7 e8e1 d3f1 e1f1,558,98,75,169,advantage hangingPiece kingsideAttack middlegame short,https://lichess.org/jdvpZ65C#39
rxMOb,r1bq1rk1/1ppnbppp/p3p3/4P1B1/8/3B4/PPP2PPP/RN1QR1K1 w - - 1 12,d3h7 g8h7 g5e7 d8e7,581,91,88,1048,advantage hangingPiece master opening short,https://lichess.org/JUgFm9RG#23
sAvds,3r1rk1/p4pp1/1p2pq1p/5n2/2Bb2Q1/P7/1P3PPP/2BRR1K1 b - - 1 22,d4f2 g1f2 d8d1 e1d1,588,91,83,446,advantage hangingPiece middlegame short,https://lichess.org/Mb4DhvCU/black#44
sS9Q6,r1b1k2r/p2pqppp/2p5/4Q3/2B1n3/8/PPP2PPP/R1B1K2R w KQkq - 1 11,c4f7 e8f7 e5e7 f7e7,501,94,85,940,advantage hangingPiece middlegame short,https://lichess.org/Vw86kMoS#21
spqLU,2qrr1k1/pp1b1p1p/2p2pp1/8/2PP1b1N/3Q3P/PP3PP1/1B1RR1K1 b - - 1 20,f4h2 g1h2 e8e1 d1e1,573,85,100,491,advantage hangingPiece middlegame short,https://lichess.org/PSRGVuCh/black#40
stZZs,r2q1rk1/3b1ppp/p1n1pb2/1p1pN3/3P4/2PB2N1/PP3PPP/R2QR1K1 w - - 0 15,d3h7 g8h7 e5d7 d8d7,598,89,43,53,advantage hangingPiece middlegame short,https://lichess.org/hK9ffOfx#29
tDwPT,3r3k/1p3pp1/p1n1bq1p/8/2p1NP2/P3QP2/BPP4P/1K1R4 w - - 1 23,e4f6 d8d1 e3c1 d1c1,580,98,66,198,advantage hangingPiece middlegame queensideAttack short,https://lichess.org/P04TPkpo#45
uEIOe,r1bqkb1r/ppp2pp1/2n2n1p/4p3/2B1P3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 7,c4f7 e8f7 d1d8 c6d8,594,89,100,481,advantage hangingPiece opening short,https://lichess.org/rJC5iXUJ#13
v38Km,N2qkr2/1pp5/p2pp1pp/4p3/1P1bP3/P2P1Q1P/2P2PP1/1RB2nK1 w - - 1 18,a8c7 d8c7 f3f8 e8f8,582,94,72,375,crushing hangingPiece middlegame short,https://lichess.org/wlmCV5OL#35
vJHVy,2rr2k1/1p1qbppp/p1n3B1/8/6P1/P1p1PP1P/1P1Q3N/2R2RK1 w - - 0 23,g6f7 g8f7 d2d7 d8d7,569,103,83,230,advantage hangingPiece middlegame short,https://lichess.org/GWpvTddT#45
vp1eb,r1n1Rrk1/1pp3p1/p6p/6PQ/3q4/2N4P/PP3P1K/R1B5 w - - 2 20,h5f7 g8f7 e8f8 f7f8,591,100,80,247,crushing hangingPiece middlegame short,https://lichess.org/TVz9DENd#39
vrAqB,r4r1k/bbpQqpp1/p6p/1p2P3/5B2/1N6/PPP2PPP/3RR1K1 b - - 0 18,a7f2 g1f2 e7d7 d1d7,599,94,83,157,advantage hangingPiece middlegame short,https://lichess.org/GEyS8zYv/black#36
w2lxQ,r1bqr1k1/p1p2ppp/2p2n2/8/4p3/BBP2P2/P1P3PP/R2QK2R w KQ - 0 12,b3f7 g8f7 d1d8 e8d8,599,89,75,100,crushing hangingPiece middlegame short,https://lichess.org/IVZbnijf#23
wKWi1,r4rk1/ppp2pbp/2q3p1/n2N4/4PP2/P2PB2P/1PQ5/2KR3R b - - 4 18,g7b2 c1b2 c6c2 b2c2,576,103,76,144,crushing hangingPiece middlegame short,https://lichess.org/Y841hdpm/black#36
wPOrT,r2rq2k/6pp/3b4/pQ3p2/N2BpPb1/P3P3/2P2KP1/R6R w - - 3 27,h1h7 h8h7 b5e8 d8e8,537,100,60,160,crushing hangingPiece middlegame short,https://lichess.org/RUEZnPAY#53
wpxyl,r4rk1/p4pp1/2pbp2p/3p4/3N1P2/2PPqR1b/PP4P1/RN1Q3K b - - 1 16,h3g2 h1g2 e3f4 f3f4,575,102,90,443,advantage hangingPiece middlegame short trappedPiece,https://lichess.org/VXdelGWe/black#32
xQyMc,rr3k2/6p1/1q1bQ2p/3p4/1P6/p1P1R3/P4PPP/1R4K1 b - - 2 25,d6h2 g1h2 b6e6 e3e6,548,95,88,1146,advantage hangingPiece middlegame short,https://lichess.org/7pJUXA80/black#50
xjRS2,r1b3r1/pp1q3k/2p5/3p2BP/8/P1NP2Q1/BPP3K1/R7 b - - 0 28,g8g5 g3g5 d7g4 g5g4,525,98,50,64,advantage hangingPiece middlegame short,https://lichess.org/ijXeioWq/black#56
y6e0g,r4r1k/pp3pp1/1b6/4R2q/1P6/P1Q2bP1/3B1P1P/2R3K1 b - - 3 28,b6f2 g1f2 h5h2 f2f3,585,94,71,159,advantage hangingPiece middlegame short,https://lichess.org/yh506GRg/black#56
yDeJd,r1b1k2r/pppp1ppp/2n2n2/2b1p1B1/2B1P1q1/3P1Q1N/PPP2PPP/RN2K2R w KQkq - 7 7,c4f7 e8f7 f3g4 f6g4,500,98,60,277,advantage hangingPiece middlegame short,https://lichess.org/5dJ0vbYz#13
yeNbg,4rk2/1rb3p1/5pq1/p1pP3p/2P1BP2/P5PP/1B2R1K1/4R3 b - - 3 37,c7f4 e4g6 e8e2 e1e2 b7b2 e2b2,595,91,82,99,crushing hangingPiece long middlegame,https://lichess.org/hTrspKkp/black#74
yhy8s,r1bqr1k1/2p2ppp/p1n5/1pbn4/3p4/2P2N1P/PPB2PP1/RNBQR1K1 w - - 0 14,c2h7 g8h7 e1e8 d8e8,526,98,73,136,advantage hangingPiece opening short,https://lichess.org/EJ0vjtCx#27
z1HlA,rnb1k1r1/ppppqpP1/1b6/6p1/2B5/2P2N2/P3Q1PP/RN3K1R w q - 3 13,c4f7 e8f7 e2e7 f7e7,572,101,79,245,crushing hangingPiece opening short,https://lichess.org/Cr4Y5aXy#25
zgKsv,r2q1rk1/1p3ppp/p1nnb3/2pp4/5B2/2PBPN2/PP3PPP/R2Q1RK1 w - - 0 13,d3h7 g8h7 f4d6 d8d6,502,92,79,265,advantage hangingPiece middlegame short,https://lichess.org/BrTxzmeK#25`,
  },
  {
    id: 'advanced-pawn', title: 'Проходная пешка', short: 'Проходная пешка',
    // task_advanced600.csv — advanced / passed pawn, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
YYoiv,8/6P1/8/5n1P/4k3/5p2/5K2/8 b - - 0 60,f5g7 h5h6 g7h5 h6h7 h5f4 h7h8q,521,84,100,143,advancedPawn crushing endgame knightEndgame long promotion,https://lichess.org/1Q3Ljtph/black#120
6S9dY,8/8/K4k2/7p/P7/8/8/8 w - - 0 56,a6b6 h5h4 a4a5 h4h3 a5a6 h3h2,529,109,95,427,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/mUKayHOU#111
wvn7X,8/8/pK2p3/P3k3/1P3p2/8/8/8 w - - 0 82,b6a6 f4f3 a6b6 f3f2,573,94,80,226,advancedPawn crushing endgame pawnEndgame short,https://lichess.org/v495JXFp#163
6Pjpq,1K6/8/8/P3k3/4N3/7p/8/8 b - - 1 50,e5e4 a5a6 e4f3 a6a7 f3g2 a7a8q,400,107,86,275,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/wmdxWAFk/black#100
STXyM,8/8/1p6/pP1K4/k3P3/8/8/8 b - - 0 52,a4b5 e4e5 a5a4 e5e6 b5b4 e6e7 a4a3 e7e8q,561,106,90,291,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/uHqKoEwL/black#104
y2NNA,8/8/6K1/1p6/1k5P/8/8/8 b - - 1 63,b4c3 h4h5 b5b4 h5h6 b4b3 h6h7 b3b2 h7h8q,595,97,80,110,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/Uo61OFJx/black#126
sL0wn,8/2k4p/8/3p2K1/6P1/7P/8/8 w - - 0 54,g5h6 d5d4 h6g5 d4d3 g5f4 d3d2,533,97,82,200,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/kdpxADug#107
SMhS2,8/8/7P/p4p2/1k6/2p3P1/1pK5/8 b - - 1 58,a5a4 h6h7 a4a3 h7h8q,577,99,93,492,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/imkx2rSk/black#116
ywQYm,8/p1p5/8/2PN4/4p3/2P5/PP3k2/2K5 w - - 2 35,d5c7 e4e3 c1c2 e3e2,566,91,78,148,advancedPawn advantage endgame knightEndgame master short,https://lichess.org/AikoJ69u#69
V3krP,8/8/K7/1P3p1p/1P3p1P/5k2/8/8 b - - 1 47,f3g3 b5b6 f4f3 b6b7 f3f2 b7b8q,469,113,91,375,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/RlTGWIxV/black#94
IYuI0,8/8/1k5K/pP5P/P1p4P/8/8/8 w - - 0 45,h6g5 c4c3 h5h6 c3c2 g5g6 c2c1q,473,114,85,594,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/oWMHBqax#89
8DOUJ,8/8/4K3/4Pp2/5P2/6p1/k7/8 w - - 0 62,e6f5 g3g2 e5e6 g2g1q,450,104,82,196,advancedPawn crushing endgame master pawnEndgame promotion short,https://lichess.org/HkP8dORN#123
P5fxb,1K6/5ppp/4p3/4P3/P4k2/8/8/8 b - - 1 39,h7h5 a4a5 h5h4 a5a6 h4h3 a6a7,546,99,83,429,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/exTjS3F6/black#78
Tljlx,8/7p/5p2/3ppPP1/p1p5/1k5P/8/1K6 b - - 0 42,f6g5 f5f6 d5d4 f6f7,488,98,56,51,advancedPawn advantage endgame master pawnEndgame short,https://lichess.org/EWZ3Wrq0/black#84
KNQJW,8/8/6p1/8/1K3k2/1P6/8/8 w - - 1 47,b4c5 g6g5 b3b4 g5g4 b4b5 g4g3 b5b6 g3g2 b6b7 g2g1q,542,109,92,1057,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/eEaiGRTT#93
IRqbt,8/8/8/1p4K1/6P1/k7/8/8 w - - 0 55,g5f5 b5b4 g4g5 b4b3 g5g6 b3b2,435,117,95,316,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/jn9donqf#109
AHKqZ,8/8/p1p5/2k3pP/8/8/1K6/8 b - - 0 48,c5d6 h5h6 g5g4 h6h7 g4g3 h7h8q,518,95,100,174,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/AaYyXD0E/black#96
9SFre,8/8/8/1K5p/1P4k1/P7/8/8 w - - 1 60,a3a4 h5h4 b5a5 h4h3 b4b5 h3h2 b5b6 h2h1q,469,101,100,483,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/7GejBL8U#119
AXBKX,8/8/8/1p4K1/1k5P/8/8/8 b - - 1 57,b4c3 h4h5 b5b4 h5h6 c3c2 h6h7 b4b3 h7h8q,400,118,92,792,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/mNuh6tKc/black#114
Y01fY,8/8/8/1K4kp/8/P7/8/8 b - - 2 48,g5h4 a3a4 h4g3 a4a5 g3f2 a5a6 h5h4 a6a7 h4h3 a7a8q,469,100,84,664,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/7m3JT971/black#96
KS2HP,8/6K1/8/pk6/6P1/8/8/8 w - - 0 68,g7f6 a5a4 g4g5 a4a3 g5g6 a3a2 f6f7 a2a1q,555,100,71,106,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/2Em10l6S#135
43tLJ,8/8/5K2/8/p4P2/1k6/8/8 w - - 1 69,f6g7 a4a3 f4f5 a3a2 f5f6 a2a1q,575,92,83,211,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/iCatbKAc#137
xk7vB,8/5K2/8/p5P1/8/k7/8/8 b - - 1 49,a3b4 g5g6 a5a4 g6g7 a4a3 g7g8q,555,100,76,318,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/Xf1ZC6n3/black#98
IE0Jz,2n5/5pk1/3P4/2K4p/2P3pP/1P3bP1/8/8 b - - 0 42,g7f6 d6d7 c8a7 d7d8q,599,106,77,147,advancedPawn crushing endgame master promotion short,https://lichess.org/82eIUnn3/black#84
nW7hC,8/b7/P4p2/4PP2/7p/7k/3K4/8 b - - 0 52,f6e5 f5f6 h3g2 f6f7 h4h3 f7f8q,400,118,83,788,advancedPawn bishopEndgame crushing endgame long promotion,https://lichess.org/3TaY0nmB/black#104
U0GzZ,8/8/5k2/5P2/p1N3K1/2P5/1b6/8 w - - 1 41,c4b2 a4a3 b2d1 a3a2 d1e3 a2a1q,485,93,100,515,advancedPawn crushing endgame knightEndgame long promotion,https://lichess.org/m46bXRXi#81
FvcHA,8/6p1/1K3p1p/8/P5P1/7k/8/8 b - - 0 42,h3g4 a4a5 f6f5 a5a6 f5f4 a6a7 f4f3 a7a8q,400,115,92,383,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/0IePyhlp/black#84
OrAEy,8/5p2/8/1PK1kp2/8/8/8/8 b - - 2 46,f5f4 b5b6 e5e4 b6b7 f4f3 b7b8q,545,92,81,213,advancedPawn crushing endgame long master pawnEndgame promotion,https://lichess.org/QiceaouO/black#92
zHjbC,8/8/1K4k1/1P6/6p1/1P6/8/8 w - - 0 56,b6c5 g4g3 b5b6 g3g2 b6b7 g2g1q,540,87,83,232,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/E6ULiGZP#111
vIca1,8/1K6/8/6kp/8/8/P7/8 w - - 0 56,a2a3 h5h4 a3a4 h4h3 a4a5 h3h2 b7b8 h2h1q,549,100,95,550,advancedPawn crushing endgame master pawnEndgame promotion quietMove veryLong,https://lichess.org/kGFeCyxV#111
ZjQQs,8/8/7p/2PK1k1P/6p1/8/8/8 b - - 0 53,g4g3 c5c6 f5f4 c6c7 g3g2 c7c8q,488,100,81,268,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/Y51lKlSO/black#106
GJ01g,8/8/8/P7/3p4/2kBb3/8/5K2 b - - 0 69,c3d3 a5a6 d3c4 a6a7,585,104,77,352,advancedPawn bishopEndgame crushing endgame short,https://lichess.org/UtbC0NSa/black#138
9a4uc,8/6p1/8/2K3k1/8/1P6/8/8 b - - 1 50,g5f4 b3b4 g7g5 b4b5 g5g4 b5b6 g4g3 b6b7 g3g2 b7b8q,598,99,60,213,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/jWurSCcV/black#100
3tb4t,8/8/8/8/3K2pp/7P/2k5/8 w - - 0 78,h3g4 h4h3 g4g5 h3h2 g5g6 h2h1q,432,113,85,663,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/sthAxe6w#155
UR5Pm,1K1k4/5p1p/P4Pp1/5nP1/8/8/8/8 b - - 0 52,f5d6 a6a7 d8d7 a7a8q,519,107,94,886,advancedPawn crushing endgame knightEndgame promotion short,https://lichess.org/jPLXncyB/black#104
F0kaw,8/8/5pK1/2p5/5P2/6P1/8/3k4 w - - 0 57,g6f6 c5c4 f4f5 c4c3 f6g6 c3c2 f5f6 c2c1q,469,98,100,206,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/rPGRRmg2#113
Purra,6k1/7p/2p3pP/2PN4/3Pp1n1/4P1P1/8/2K5 b - - 0 35,c6d5 c5c6 g8f7 c6c7,475,103,68,225,advancedPawn crushing endgame knightEndgame short,https://lichess.org/aPzScvpe/black#70
GFbp3,8/8/6p1/1P3P2/3k1K1P/4p3/8/8 w - - 0 54,f5g6 e3e2 g6g7 e2e1q,433,119,93,401,advancedPawn crushing endgame master pawnEndgame promotion short,https://lichess.org/8viat6o0#107
OJlC3,8/8/6p1/1K4kp/1P6/P7/8/8 w - - 0 50,a3a4 h5h4 b5a6 h4h3 b4b5 h3h2 b5b6 h2h1q,483,111,91,320,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/uMRAwOta#99
g5xKk,8/8/1KP5/8/1b1Pk3/8/8/8 b - - 0 45,e4d4 c6c7 b4d6 c7c8q,555,86,76,192,advancedPawn bishopEndgame crushing endgame master promotion short,https://lichess.org/dWq3WJWw/black#90
a8bSq,8/8/1K5p/6p1/P5k1/8/8/8 b - - 1 57,g4f3 a4a5 f3e2 a5a6 g5g4 a6a7 g4g3 a7a8q,446,104,100,447,advancedPawn crushing endgame master pawnEndgame promotion quietMove veryLong,https://lichess.org/41pfYR0n/black#114
0QSVr,8/8/p5K1/1p6/1k5P/8/8/8 b - - 1 41,a6a5 h4h5 b4a4 h5h6 b5b4 h6h7,466,103,100,420,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/lezEcX6u/black#82
B9QAL,8/7p/1K6/1P3k1P/P5p1/8/8/8 w - - 0 54,a4a5 g4g3 b6a6 g3g2 b5b6 g2g1q,530,99,96,1232,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/R4NdfMKv#107
VQZil,8/8/7K/7P/p7/1k6/8/8 w - - 0 68,h6g6 a4a3 h5h6 a3a2 g6g7 a2a1q,525,97,85,179,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/PpckscO7#135
cNfe6,8/8/2p3n1/k1PpN1p1/3P1pP1/5P2/5K2/8 b - - 3 65,g6e5 d4e5 a5b5 e5e6 b5c5 e6e7,569,85,100,238,advancedPawn crushing endgame long,https://lichess.org/hPmmcYCo/black#130
MABm7,8/8/2K4p/p1P4k/P1P3p1/8/8/8 w - - 0 41,c6b6 g4g3 b6b7 g3g2 c5c6 g2g1q,539,102,84,859,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/zMZFaRmw#81
qR6mH,3b4/8/8/PK3k2/8/8/8/8 b - - 0 65,f5e6 a5a6 e6d5 a6a7,492,92,78,202,advancedPawn bishopEndgame crushing endgame master short,https://lichess.org/ImOw44Qh/black#130
hczpJ,4k3/8/8/8/6K1/7p/6N1/8 w - - 0 75,g2f4 h3h2 f4h5 h2h1q,487,97,69,96,advancedPawn crushing endgame knightEndgame promotion short,https://lichess.org/EeqZGoIQ#149
MYOww,7k/1p4pp/p2P4/P1p1p3/8/5r1P/3R3K/8 b - - 0 39,f3f7 d6d7 f7d7 d2d7,572,101,82,472,advancedPawn crushing endgame rookEndgame short,https://lichess.org/j5g1PRwW/black#78
JCEGX,8/8/6K1/1p6/k5P1/6P1/8/8 w - - 0 61,g6f5 b5b4 g4g5 b4b3 g5g6 b3b2 g6g7 b2b1q,449,105,69,173,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/WV9Q8SE4#121
O444x,8/8/7K/1p6/k7/8/7P/8 w - - 0 49,h6g5 b5b4 h2h4 b4b3 h4h5 b3b2 h5h6 b2b1q,501,96,100,169,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/7p0fmwL4#97
fv45W,8/7K/8/p5P1/8/k7/8/8 b - - 0 59,a3b3 g5g6 a5a4 g6g7 b3b2 g7g8q,461,102,100,272,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/iK0dos6r/black#118
L840N,6k1/p7/2p2p2/5b2/8/2P1p3/P1P2R1K/8 w - - 0 40,f2f5 e3e2 f5f6 e2e1q,579,100,89,814,advancedPawn crushing endgame promotion rookEndgame short,https://lichess.org/Mp5g4mCT#79
FisE3,8/8/8/1p6/1k4KP/8/8/8 b - - 0 56,b4c3 h4h5 b5b4 h5h6 b4b3 h6h7 b3b2 h7h8q,523,87,3,77,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/M4M3yqes/black#112
SnF5w,6k1/8/8/8/p4bP1/3N4/4K3/8 w - - 7 85,d3f4 a4a3 e2d3 a3a2,440,89,67,97,advancedPawn advantage endgame knightEndgame master short,https://lichess.org/GVfySWyw#169
I0FkK,8/8/6Kp/p6P/1k6/8/5P2/8 w - - 0 53,g6h6 a5a4 h6h7 a4a3 h5h6 a3a2 h7g8 a2a1q,558,109,88,917,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/xCGEIIfr#105
znTdD,8/p2k1K2/r6p/1p2PP2/8/8/5P1P/8 b - - 0 41,b5b4 e5e6 d7c7 e6e7,563,100,67,259,advancedPawn crushing endgame rookEndgame short,https://lichess.org/GFggS4eO/black#82
dlR6b,8/6K1/8/p7/6P1/8/8/1k6 w - - 0 51,g7f6 a5a4 g4g5 a4a3 g5g6 a3a2 f6f7 a2a1q,400,102,96,364,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/IlZcQ107#101
sFwjJ,8/8/1PK5/8/7p/7k/8/8 b - - 0 50,h3g3 b6b7 h4h3 b7b8q,542,91,76,104,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/kbet97LS/black#100
BQlsL,8/8/7K/7P/p7/1k6/8/8 w - - 1 55,h6g6 a4a3 h5h6 a3a2 g6g7 a2a1q,526,93,68,161,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/8u1KbdsY#109
4ZBb5,8/8/8/p5K1/1k4P1/7P/8/8 w - - 0 57,h3h4 a5a4 g5h5 a4a3 g4g5 a3a2 g5g6 a2a1q,456,106,82,200,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/yprAcj8W#113
dHJNk,8/6pp/1K6/1P1k4/4p3/p7/P5PP/8 w - - 0 39,b6c7 e4e3 b5b6 e3e2 b6b7 e2e1q,589,90,100,149,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/lnx88RFu#77
ST8XO,8/8/5Kp1/1k5p/8/8/5P2/8 w - - 0 53,f6g6 h5h4 f2f4 h4h3 f4f5 h3h2 f5f6 h2h1q,400,109,81,325,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/4pVrAGX9#105
TkuLu,8/6k1/2K5/2P5/pP1p1P2/P7/8/8 w - - 0 53,c6d5 d4d3 c5c6 d3d2 d5e6 d2d1q,561,92,72,105,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/sWEIs9iG#105
G5lO5,8/8/8/p5K1/1k4P1/8/8/8 w - - 0 72,g5f6 a5a4 f6f7 a4a3 g4g5 a3a2 g5g6 a2a1q,440,114,96,396,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/rnI2Y1mk#143
4dcyu,8/8/8/2p4P/1p4K1/1P6/2k5/8 b - - 0 58,c2b3 h5h6 c5c4 h6h7 b3a2 h7h8q,461,111,81,666,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/hCwBxsbZ/black#116
R6BN3,8/8/K7/P7/7p/6k1/8/8 w - - 1 52,a6b6 h4h3 b6a7 h3h2 a5a6 h2h1q,563,92,86,114,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/KozGxPbW#103
imloM,8/8/8/6pp/4P3/pk3P1P/8/K7 b - - 3 38,a3a2 e4e5 b3c4 e5e6 c4d5 e6e7,598,102,88,617,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/t9msOvmd/black#76
auQoc,8/8/1K6/1P6/2P3kp/8/8/8 w - - 0 54,b6c6 h4h3 c6c7 h3h2 b5b6 h2h1q,569,104,85,904,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/i15S6LWS#107
aXYWD,8/8/pK6/P3N3/7p/6k1/8/8 w - - 2 62,e5d3 h4h3 d3b4 h3h2 b4a6 h2h1q,498,113,83,206,advancedPawn crushing endgame knightEndgame long promotion,https://lichess.org/4OAOlqsW#123
WP8f5,8/8/K7/8/P5p1/8/7k/8 w - - 1 56,a6b5 g4g3 a4a5 g3g2 a5a6 g2g1q,428,103,62,136,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/ymX6cFPt#111
5zyAq,8/1p6/8/p1kpKP2/8/8/8/8 b - - 0 59,a5a4 f5f6 c5c4 f6f7 a4a3 f7f8q,400,113,98,486,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/Pc44Tduk/black#118
mYB4N,8/6pp/8/p7/1kP2P2/3K3P/6P1/8 w - - 1 46,d3d4 a5a4 d4d5 a4a3 c4c5 a3a2,533,108,96,334,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/zqMSrKVP#91
UhEy4,8/6p1/7p/1P5P/K3p3/4k3/8/8 b - - 0 49,e3f4 b5b6 e4e3 b6b7 f4g4 b7b8q,599,98,55,77,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/2OVtviDG/black#98
7jGM9,8/8/K7/7p/P5k1/8/8/8 w - - 0 44,a6b6 h5h4 a4a5 h4h3 a5a6 h3h2 b6a7 h2h1q,400,125,91,312,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/ttWmlG0N#87
isWYp,8/8/1K6/P7/5p1p/5P1P/6k1/8 b - - 0 59,g2f3 a5a6 f3e2 a6a7 f4f3 a7a8q,580,95,78,67,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/miBWHRWJ/black#118
tocO3,2k5/8/2P1Kp2/7p/5P2/8/8/8 w - - 0 51,e6f6 h5h4 f4f5 h4h3 f6g7 h3h2 f5f6 h2h1q,520,103,89,713,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/pvhGuJY7#101
ID7oS,3n4/K7/1P6/1k6/8/8/8/8 b - - 18 87,d8f7 b6b7 f7d6 b7b8q,433,92,100,208,advancedPawn crushing endgame knightEndgame promotion short,https://lichess.org/W6FTJYMC/black#174
puN5f,8/8/6KP/8/4p1p1/5k2/5P2/8 b - - 0 45,f3f2 h6h7 e4e3 h7h8q,570,89,72,129,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/RCRlfmtc/black#90
hVyGX,8/8/8/8/Ppk1K3/8/8/8 w - - 1 69,a4a5 b4b3 a5a6 b3b2 a6a7 b2b1q,579,99,82,349,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/qB9wr5hj#137
xOz9J,8/8/3k3p/2pP2NP/2P2pP1/1K6/5n2/8 b - - 0 48,h6g5 h5h6 f2e4 h6h7 f4f3 h7h8q,434,104,94,199,advancedPawn crushing endgame knightEndgame long promotion,https://lichess.org/E3vIhrbi/black#96
lmlM1,8/8/1KP5/8/6B1/6kp/8/8 b - - 0 67,g3g4 c6c7 g4f3 c7c8q,530,108,81,474,advancedPawn crushing endgame master pawnEndgame promotion short,https://lichess.org/Ym3KgPlV/black#134
77K6E,8/8/3p3p/3k2PP/8/5K2/8/8 b - - 0 72,h6g5 h5h6 d5e5 h6h7,538,88,58,106,advancedPawn crushing endgame pawnEndgame short,https://lichess.org/OeVWMGFx/black#144
BSQGx,8/8/8/6P1/p7/1k6/3K4/8 b - - 0 52,b3b2 g5g6 a4a3 g6g7 a3a2 g7g8q,487,90,69,130,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/EGSZKegl/black#104
uf6zZ,8/7K/4p1P1/7p/7P/p7/k7/8 b - - 0 47,a2b2 g6g7 a3a2 g7g8q,574,100,78,228,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/shOskyjG/black#94
PFmDw,8/8/2k5/1p4K1/8/6P1/8/8 w - - 0 73,g5h6 b5b4 g3g4 b4b3 g4g5 b3b2 g5g6 b2b1q,537,109,88,1187,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/W3l94MjH#145
e5Jzx,8/8/1K6/2P5/1P3p2/5Pbk/8/8 b - - 0 50,h3g2 c5c6 g2f3 c6c7 f3g2 c7c8q,529,109,80,585,advancedPawn bishopEndgame crushing endgame long promotion,https://lichess.org/3EOopoTA/black#100
h6Yfr,8/8/3p3K/3Pp3/4k1P1/8/8/8 b - - 0 52,e4f4 g4g5 e5e4 g5g6 e4e3 g6g7 e3e2 g7g8q,595,105,92,747,advancedPawn advantage endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/kaEOsnGs/black#104
NymgX,8/8/6K1/7P/p7/k7/8/8 b - - 0 51,a3b3 h5h6 b3a2 h6h7 a2b1 h7h8q,434,101,95,288,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/R8d5AlGo/black#102
Z35zk,8/8/p7/1p6/1k4KP/8/8/8 b - - 0 51,a6a5 h4h5 b4a4 h5h6 b5b4 h6h7 b4b3 h7h8q,568,90,85,183,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/ebieSWYf/black#102
IslGk,8/1p3k1K/8/p4nP1/2pB4/8/P7/8 b - - 3 42,f5d4 g5g6 f7e7 g6g7 c4c3 g7g8q,522,104,63,128,advancedPawn advantage endgame knightEndgame long promotion,https://lichess.org/yOKYgim6/black#84
EfLJE,8/8/7K/1p6/8/8/2k4P/8 w - - 0 41,h6g5 b5b4 h2h4 b4b3 h4h5 b3b2,470,95,52,105,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/tQEve49M#81
ZPSRW,8/6K1/p6p/1p6/8/5P2/k4P1P/8 w - - 0 36,g7h6 b5b4 f3f4 b4b3 f4f5 b3b2 f5f6 b2b1q,535,100,92,2194,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/VRTxzPEk#71
MV0wE,8/8/1K5p/6p1/P5k1/8/8/8 b - - 0 55,h6h5 a4a5 g4h4 a5a6 g5g4 a6a7 g4g3 a7a8q,498,97,100,358,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/hzh3JWuI/black#110
5k7jf,8/p5K1/8/8/8/k4P2/8/8 b - - 0 52,a3b4 f3f4 a7a5 f4f5 a5a4 f5f6 a4a3 f6f7 b4b3 f7f8q,461,93,65,111,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/tohYpH8G/black#104
ccthz,8/8/8/5p1P/4p3/4P3/1K3k2/8 b - - 0 49,f2e3 h5h6 f5f4 h6h7 f4f3 h7h8q,490,92,62,151,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/PEgMT73j/black#98
Ba3Gk,8/5K2/4p1p1/k2pP1Pp/3P1P1P/1p6/8/8 w - - 0 48,f7g6 b3b2 g6h6 b2b1q,572,106,85,891,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/Qk2StAmk#95
ZKAvM,6k1/8/7K/4p1P1/8/8/8/8 w - - 3 53,h6g6 e5e4 g6f5 e4e3 f5e4 e3e2,551,88,75,117,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/RNHEb8vn#105
47Kn5,8/8/K7/P5k1/7p/8/8/8 w - - 0 68,a6b6 h4h3 a5a6 h3h2 b6b7 h2h1q,541,99,88,212,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/0IEq5atU#135
jjSHR,8/8/8/6KP/p7/k7/8/8 b - - 0 73,a3b3 h5h6 b3c2 h6h7 a4a3 h7h8q,555,92,100,224,advancedPawn crushing endgame long master pawnEndgame promotion,https://lichess.org/GZTeMGwg/black#146
kyzMm,8/p5p1/8/1KP5/5k2/8/8/8 b - - 0 48,g7g5 c5c6 g5g4 c6c7 g4g3 c7c8q,412,122,92,468,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/0gTuMXvR/black#96
o4Db0,8/1pK5/p7/P7/5p2/1R3bk1/8/8 w - - 0 55,b3b7 f3b7 c7b7 f4f3 b7a6 f3f2,598,116,38,40,advancedPawn crushing endgame long,https://lichess.org/VlYp2vlr#109
QIvUh,6k1/6p1/4KpP1/7P/8/8/8/8 w - - 5 50,e6e7 f6f5 e7d6 f5f4 d6e5 f4f3 e5d4 f3f2,500,110,85,372,advancedPawn crushing endgame pawnEndgame quietMove veryLong,https://lichess.org/rgB0FR0B#99
9pJrl,8/8/8/3pP3/K2k4/8/8/8 b - - 0 62,d4c3 e5e6 d5d4 e6e7 d4d3 e7e8q,560,84,79,112,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/ZErWbLMr/black#124
F6g7r,8/8/6K1/p7/7P/k7/8/8 b - - 0 57,a3b3 h4h5 b3a2 h5h6 a5a4 h6h7 a2b1 h7h8q,452,119,85,658,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/t4d7t4z3/black#114
cVYVF,8/8/4K3/2p2P2/2k5/8/8/8 b - - 0 63,c4d3 f5f6 c5c4 f6f7 c4c3 f7f8q,567,103,92,628,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/PA7BsrwL/black#126
53iHI,k7/8/PK6/5p2/8/8/8/8 w - - 0 54,b6a5 f5f4 a5b5 f4f3 b5c4 f3f2,565,97,100,245,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/e0G3yneS#107
ksbt1,8/8/2K5/2P5/1k1P4/p7/8/8 w - - 0 57,d4d5 a3a2 d5d6 a2a1q,589,96,85,250,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/xu4QdLtF#113
TSTmr,8/6p1/8/6p1/P1K3k1/8/8/8 b - - 0 43,g4f3 a4a5 g5g4 a5a6 g4g3 a6a7 g3g2 a7a8q,599,87,100,270,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/pZgI2tkg/black#86
X26sa,8/p7/1p6/2p5/P2pPk2/1P1P4/3K4/8 b - - 1 34,f4f3 e4e5 f3f4 e5e6 f4e5 e6e7,581,98,81,410,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/yCcYrM1r/black#68
gVGhJ,8/1p6/8/1p1K4/8/2k3P1/7P/8 w - - 0 45,g3g4 b5b4 g4g5 b4b3 g5g6 b3b2 d5e5 b2b1q,561,98,71,221,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/WJFYkL6D#89
cRQsZ,8/2K5/5k1p/n2P3P/6P1/8/8/8 b - - 0 51,f6g5 d5d6 a5c4 d6d7 g5g4 d7d8q,545,98,70,134,advancedPawn crushing endgame knightEndgame long promotion,https://lichess.org/WRjeeH2S/black#102
X89N4,8/8/3K4/p1pP4/P1p5/5k2/8/8 w - - 0 56,d6c5 c4c3 d5d6 c3c2 d6d7 c2c1q,470,97,100,189,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/vX2taIX9#111
3lbKB,8/1R6/8/8/2p5/1p2K1P1/1k2P2P/8 w - - 2 43,e3d2 c4c3 d2d3 c3c2 b7b8 c2c1q,559,87,85,216,advancedPawn crushing endgame long promotion rookEndgame,https://lichess.org/f6t7nZYu#85
VBdeN,8/5p2/8/2Ppk3/8/5K2/8/8 b - - 1 69,e5d4 c5c6 d4c5 c6c7,590,90,82,310,advancedPawn crushing endgame pawnEndgame short,https://lichess.org/XGDKm36a/black#138
2kzQB,8/7K/8/8/1p5P/8/2k5/8 w - - 0 59,h7g6 b4b3 h4h5 b3b2 h5h6 b2b1q,462,112,92,216,advancedPawn crushing endgame long master pawnEndgame promotion,https://lichess.org/zoHUjjcs#117
zAGVv,8/5P2/1N5b/1P6/4K3/6p1/7k/8 w - - 0 65,b6d5 g3g2 b5b6 g2g1q,546,98,97,367,advancedPawn crushing endgame promotion short,https://lichess.org/gLbwAGfg#129
PV890,1N6/8/8/P4p2/4pP2/8/5k2/7K w - - 1 67,a5a6 e4e3 h1h2 e3e2 h2h3 e2e1q,533,89,79,297,advancedPawn crushing endgame knightEndgame long promotion,https://lichess.org/6gDPQG5I#133
6s1qd,8/8/1p6/4K1p1/2k3P1/7P/8/8 w - - 1 56,e5f5 b6b5 f5g5 b5b4 g5h6 b4b3 g4g5 b3b2 g5g6 b2b1q,538,99,73,284,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/QV6Cdtp2#111
DRQuP,1K6/8/3p4/P7/2k5/8/8/8 b - - 0 73,d6d5 a5a6 d5d4 a6a7,550,95,86,78,advancedPawn crushing endgame master pawnEndgame short,https://lichess.org/S2yUX0Je/black#146
oxgxk,1k6/8/5K1p/5P1P/8/1p6/8/8 w - - 0 48,f6e7 b3b2 f5f6 b2b1q,556,102,83,91,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/LviURxnm#95
SPsGi,3k4/8/3nB1P1/1p6/1P2p3/4Kp2/8/8 b - - 0 54,d8e7 g6g7 e7e6 g7g8q,596,92,96,1782,advancedPawn crushing endgame master promotion short,https://lichess.org/OdshMop1/black#108
YZH7K,8/8/8/5K2/p1kp4/P3P3/8/8 w - - 0 50,e3e4 d4d3 e4e5 d3d2,552,112,88,625,advancedPawn crushing endgame pawnEndgame short,https://lichess.org/aFdhPOyj#99
bLX3L,8/8/4K3/2k5/5pPP/7P/8/8 w - - 0 50,g4g5 f4f3 g5g6 f3f2 g6g7 f2f1q,523,93,100,257,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/PASjnm8i#99
P5xTe,3r3k/p5p1/3R3p/4P3/3p4/P7/6PP/6K1 b - - 1 31,d8d6 e5d6 h8g8 d6d7,568,102,78,360,advancedPawn crushing endgame short,https://lichess.org/TgqIWkxG/black#62
qT432,8/5p2/K7/1P4pp/7P/6k1/8/8 b - - 0 53,g5h4 b5b6 h4h3 b6b7 h3h2 b7b8q,446,106,100,217,advancedPawn crushing endgame long master pawnEndgame promotion,https://lichess.org/vQhHh9Df/black#106
8dbSu,8/8/8/2p5/1k3K2/6P1/8/8 w - - 2 63,g3g4 c5c4 g4g5 c4c3 g5g6 c3c2 g6g7 c2c1q,519,99,95,212,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/SuykWuuf#125
QxGpR,8/8/6K1/6P1/1pk5/8/8/8 w - - 0 65,g6h7 b4b3 g5g6 b3b2 h7h6 b2b1q,483,114,90,712,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/WotmMJA2#129
XdwUA,8/8/4p3/2p2p2/1pP4P/1K2kP2/8/8 b - - 0 41,e3f3 h4h5 f5f4 h5h6 f3g2 h6h7 f4f3 h7h8q,476,111,96,825,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/43HOyyzd/black#82
CoTNS,8/p6K/1p6/2p5/2k3P1/8/8/8 b - - 0 50,c4d5 g4g5 d5d4 g5g6 c5c4 g6g7 c4c3 g7g8q,485,112,91,1159,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/Lo55JId4/black#100
9lF2P,8/7K/8/p7/7P/1k6/8/8 w - - 0 44,h7g6 a5a4 g6g7 a4a3 h4h5 a3a2 h5h6 a2a1q,492,115,93,539,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/IxEkFt7w#87
c9zZP,8/8/8/6PK/1k5P/p7/8/8 w - - 0 63,h5h6 a3a2 g5g6 a2a1q,558,108,78,421,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/EMgQ1VKs#125
7U0oz,8/8/4K3/5P2/p7/k7/8/8 b - - 0 58,a3b4 f5f6 a4a3 f6f7 b4b3 f7f8q,541,85,84,205,advancedPawn crushing endgame long master pawnEndgame promotion,https://lichess.org/HdOXZQn7/black#116
dzktQ,8/8/8/2PK1k1p/p7/P7/8/8 b - - 0 45,h5h4 c5c6 f5f4 c6c7,480,114,94,440,advancedPawn crushing endgame pawnEndgame short,https://lichess.org/32SoA1ii/black#90
eZHOJ,8/5p1p/1K6/8/P5k1/8/8/8 b - - 1 38,h7h5 a4a5 f7f5 a5a6 f5f4 a6a7,573,99,85,148,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/kYfhGnxx/black#76
1YFqd,8/ppp2K2/8/6p1/1PP1P2k/P1P5/8/8 w - - 0 34,f7e7 g5g4 e4e5 g4g3 e5e6 g3g2 e7d8 g2g1q,569,106,94,1363,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/bnKIbBkm#67
E4ohG,8/8/1p1k4/p1pP1p1p/P1P1pP1P/1P6/8/1K6 w - - 20 60,b1a1 e4e3 a1b2 e3e2,566,90,76,139,advancedPawn crushing endgame master pawnEndgame short,https://lichess.org/YlaQvNWY#119
IlWGA,8/8/7k/2P2p2/4pP2/4Kb2/8/8 b - - 0 44,h6g6 c5c6 g6f6 c6c7,535,89,88,129,advancedPawn bishopEndgame crushing endgame short,https://lichess.org/B7DwPStT/black#88
62RIs,8/8/8/p3k2p/5p1K/8/2B5/8 w - - 0 51,h4h5 f4f3 h5g4 f3f2,558,92,81,99,advancedPawn bishopEndgame crushing endgame master short,https://lichess.org/ZjHwy3H7#101
LT53u,8/7K/6p1/3k2P1/2p4P/8/8/8 w - - 0 49,h7g6 c4c3 g6h7 c3c2 g5g6 c2c1q,541,104,85,504,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/QcbJTNEB#97
pmhEj,8/8/4R3/8/P4p2/4p1p1/4k1K1/8 w - - 0 50,a4a5 f4f3 g2g3 f3f2,532,104,94,250,advancedPawn crushing endgame master rookEndgame short,https://lichess.org/xulIaS81#99
1bItO,8/8/8/6p1/8/P3K3/7k/8 w - - 0 48,a3a4 g5g4 a4a5 g4g3 a5a6 g3g2,460,124,92,1091,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/xyUO4f9m#95
LQStr,8/8/p5K1/1p6/1k4pP/6P1/8/8 b - - 0 65,b4c3 h4h5 b5b4 h5h6 c3c2 h6h7,519,107,84,270,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/cdOS2rs7/black#130
84XVG,8/8/6p1/3K2k1/8/P7/8/8 b - - 0 68,g5f5 a3a4 g6g5 a4a5 g5g4 a5a6 f5f4 a6a7 g4g3 a7a8q,498,113,84,933,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/Es76ffM6/black#136
o7qmY,7k/8/8/2Pp1pP1/2K4p/4P3/5P2/8 w - - 0 48,c4d5 h4h3 c5c6 h3h2 c6c7 h2h1q,567,102,85,310,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/Er119x9e#95
DYZtt,8/8/8/pp4K1/1k4P1/7P/8/8 w - - 0 53,h3h4 a5a4 g5h6 a4a3 g4g5 a3a2 g5g6 a2a1q,577,91,83,120,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/8MPdTob3#105
VC98j,8/2k1K3/p4p2/3PpPb1/8/8/8/8 b - - 7 48,e5e4 d5d6 c7b6 d6d7,442,98,100,174,advancedPawn bishopEndgame crushing endgame short,https://lichess.org/NJO66fKf/black#96
bceTx,6k1/8/1p5K/6P1/8/8/8/8 w - - 1 65,g5g6 b6b5 h6g5 b5b4 g5f4 b4b3 f4e3 b3b2,557,95,100,367,advancedPawn crushing endgame pawnEndgame quietMove veryLong,https://lichess.org/4RuEG1Px#129
bwLAm,4k3/8/4P3/4K1p1/8/8/8/8 w - - 0 81,e5f6 g5g4 f6e5 g4g3 e5d4 g3g2,579,83,68,114,advancedPawn crushing endgame long master pawnEndgame quietMove,https://lichess.org/dvuH2PwG#161
2c0Wr,8/7p/2K5/1P4p1/8/8/6k1/8 b - - 0 48,g2f2 b5b6 g5g4 b6b7 g4g3 b7b8q,512,117,82,374,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/Evna2jgj/black#96
zpwQ8,8/7k/5Kp1/6P1/5p1P/8/8/8 w - - 0 81,f6e5 f4f3 e5d4 f3f2,512,108,93,512,advancedPawn crushing endgame master masterVsMaster pawnEndgame short,https://lichess.org/7ShayRWN#161
N9L6C,8/8/8/p5K1/1k4P1/5P2/8/8 w - - 1 47,g5f6 a5a4 f6f7 a4a3 g4g5 a3a2 g5g6 a2a1q,575,105,91,526,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/o08a1ZWa#93
sPWBN,8/8/1K6/P7/7p/7k/8/8 b - - 0 53,h3g3 a5a6 h4h3 a6a7 g3f2 a7a8q,547,98,82,568,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/NzO0YwO1/black#106
Fqi8I,8/8/1K3k2/pP6/P3p3/8/8/8 w - - 0 63,b6a5 e4e3 a5a6 e3e2 b5b6 e2e1q,551,107,82,274,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/W2mHSRg7#125
xaZUP,8/8/8/5P2/p3K3/PpP5/6k1/8 w - - 0 51,f5f6 b3b2 e4e5 b2b1q,510,97,78,108,advancedPawn crushing endgame master pawnEndgame promotion short,https://lichess.org/zvG615Ek#101
vUcdc,8/5B2/8/8/8/4K2p/8/6k1 w - - 2 57,e3f3 h3h2 f7c4 h2h1q,576,81,56,70,advancedPawn bishopEndgame crushing endgame master promotion short,https://lichess.org/52R96WY8#113
ygzF5,8/2p5/8/8/P7/5k2/4p3/4K3 b - - 0 52,c7c5 a4a5 c5c4 a5a6 c4c3 a6a7 c3c2 a7a8q,558,99,82,232,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/nLutRLbx/black#104
BubE8,8/8/3N4/5p2/5K1p/8/6k1/8 w - - 6 58,f4f5 h4h3 f5f4 h3h2 d6e4 h2h1q,516,120,96,261,advancedPawn crushing endgame knightEndgame long promotion,https://lichess.org/ZhYPCU2t#115
L57JY,8/3r4/p7/6PP/8/k1p2P2/P3R1K1/8 w - - 1 46,e2c2 d7d2 c2d2 c3d2,558,89,85,254,advancedPawn crushing endgame rookEndgame short,https://lichess.org/Fp1StWSI#91
AUbEx,8/8/7K/6P1/1k6/8/5n2/8 b - - 0 60,f2h3 g5g6 h3f4 g6g7 b4c3 g7g8q,583,88,79,147,advancedPawn crushing endgame knightEndgame long master promotion,https://lichess.org/a7pWb2BU/black#120
AoTct,8/8/6K1/1p6/2k3P1/8/8/8 w - - 0 60,g6h7 b5b4 g4g5 b4b3 g5g6 b3b2 h7h6 b2b1q,486,107,92,180,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/j9hXzYDp#119
PvvVW,8/8/k6p/1n4P1/3p3P/3K4/8/8 b - - 0 52,h6h5 g5g6 b5a7 g6g7,559,91,74,182,advancedPawn crushing endgame knightEndgame short,https://lichess.org/hgGRR3Al/black#104
jX0Tr,8/8/4K3/5P1p/p5p1/k5P1/7P/8 b - - 0 52,a3b2 f5f6 a4a3 f6f7,499,91,100,231,advancedPawn crushing endgame pawnEndgame short,https://lichess.org/eCMdmhat/black#104
uMAgN,8/6kp/6p1/p1PK4/Pb6/1P6/8/8 b - - 0 45,h7h5 c5c6 g7f6 c6c7,551,102,93,618,advancedPawn bishopEndgame crushing endgame short,https://lichess.org/FQSuMwAq/black#90
ZLqoj,8/8/1p6/p1k3K1/P7/5P2/8/8 b - - 0 38,c5b4 f3f4 b4a4 f4f5 a4b3 f5f6 a5a4 f6f7 a4a3 f7f8q,535,98,83,204,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/kGEmREtY/black#76
xOXjQ,8/8/8/P1K5/6p1/8/6k1/8 b - - 0 48,g2f3 a5a6 g4g3 a6a7 f3f2 a7a8q,517,90,100,149,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/705O9E5F/black#96
cVr5R,8/8/8/p5K1/1k4P1/7P/8/8 w - - 0 56,h3h4 a5a4 g5h5 a4a3 g4g5 a3a2 g5g6 a2a1q,558,101,95,284,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/4aZuOfnF#111
pVzA2,8/8/1p5K/p7/k5P1/8/8/8 b - - 0 41,a4b3 g4g5 b6b5 g5g6 b5b4 g6g7 b3a3 g7g8q,550,98,91,134,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/vCWvP2uq/black#82
uJvOf,8/8/8/3p2KP/2p5/2P5/1k6/8 b - - 0 57,b2c3 h5h6 c3d2 h6h7 c4c3 h7h8q,485,113,99,849,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/4kEqxGmi/black#114
H3iia,8/8/7P/8/8/3p4/2k1K3/8 w - - 0 60,e2f3 d3d2 f3f4 d2d1q,429,95,70,81,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/wamp12RL#119
3z8Gr,8/8/1p6/p6K/k5P1/8/8/8 b - - 0 47,a4b3 g4g5 b6b5 g5g6 b5b4 g6g7,548,93,81,63,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/E7hBBff7/black#94
ON4o8,8/8/8/1P6/8/5k2/7n/1K6 b - - 0 51,f3g3 b5b6 h2f3 b6b7,560,105,83,270,advancedPawn crushing endgame knightEndgame master short,https://lichess.org/L2U1FJMc/black#102
g95md,8/8/8/3p4/1p1Pk1P1/1P6/5K2/8 b - - 0 51,e4d4 g4g5 d4c3 g5g6 d5d4 g6g7,581,92,100,140,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/NsC6o870/black#102
uw7N6,8/8/5p2/8/P4k2/4p3/8/4K3 b - - 1 50,f4f3 a4a5 f6f5 a5a6 f5f4 a6a7,432,111,98,686,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/lNPwXMGz/black#100
eeoSu,8/8/8/p5Kp/8/1k3P2/8/8 w - - 1 45,g5h5 a5a4 f3f4 a4a3 f4f5 a3a2 f5f6 a2a1q,475,111,63,375,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/9WfuxvRT#89
R2FPE,8/8/K7/P7/1P6/6p1/5k2/8 w - - 0 60,a6b7 g3g2 b4b5 g2g1q,410,105,84,441,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/H34EDFr7#119
GueRS,8/8/8/3p4/5p1P/5P2/5PK1/1k6 w - - 0 66,g2h3 d5d4 h3g4 d4d3 h4h5 d3d2,583,95,79,182,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/QsYBqBSh#131
gOlKu,8/8/7p/8/2P5/1K5k/8/8 b - - 0 50,h3g3 c4c5 h6h5 c5c6 g3f2 c6c7 h5h4 c7c8q,468,105,83,216,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/svTEl4ql/black#100
RP1Iu,8/8/7p/1K6/P7/8/7k/8 b - - 0 46,h2g2 a4a5 g2g1 a5a6 h6h5 a6a7 h5h4 a7a8q,471,109,90,289,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/6gsmq6Lu/black#92
HKdKi,8/8/1k1K4/1Pp5/4P3/8/8/8 b - - 0 55,b6b5 e4e5 c5c4 e5e6 c4c3 e6e7 b5a4 e7e8q,510,101,85,265,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/0kXGcm8s/black#110
Oktp6,8/8/3K2p1/7p/2P5/7k/8/8 b - - 0 44,g6g5 c4c5 g5g4 c5c6 g4g3 c6c7,533,97,76,427,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/AvAzqa8T/black#88
wHQW8,8/8/6k1/2K5/pp6/1P6/8/8 w - - 0 51,b3a4 b4b3 a4a5 b3b2,424,97,64,124,advancedPawn crushing endgame master pawnEndgame short,https://lichess.org/wQRcHweY#101
N4jNy,8/8/1p6/p1p5/2P3P1/Pk6/4K3/8 b - - 0 62,b3a3 g4g5 a3b2 g5g6 a5a4 g6g7 a4a3 g7g8q,515,99,83,245,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/wrAcuOrJ/black#124
ls5vV,8/p7/1k6/5P2/8/6K1/8/8 b - - 0 67,a7a5 f5f6 a5a4 f6f7 a4a3 f7f8q,424,102,100,297,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/q7x113XF/black#134
E3Ndk,6R1/5p2/5r2/1P6/K6p/6k1/8/8 b - - 1 41,f6g6 g8g6 f7g6 b5b6 g3g2 b6b7,529,89,80,179,advancedPawn crushing endgame long rookEndgame,https://lichess.org/hhglcj3C/black#82
L2pje,8/K7/8/P7/7p/8/8/6k1 w - - 0 48,a7b6 h4h3 a5a6 h3h2 b6b7 h2h1q,494,108,98,1127,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/XtKo3qIo#95
pSKrO,8/8/6p1/5PP1/1pk4K/8/8/8 b - - 0 62,g6f5 g5g6 c4c3 g6g7 b4b3 g7g8q,430,120,90,720,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/J0assBa2/black#124
wKjd3,8/1K1k4/PP2p3/8/8/8/8/r7 b - - 0 55,a1h1 a6a7 d7d6 a7a8q,469,100,79,534,advancedPawn crushing endgame promotion rookEndgame short,https://lichess.org/1Zr78egi/black#110
WSmlL,8/p7/6K1/8/8/k6P/8/8 b - - 1 59,a3b3 h3h4 a7a5 h4h5 a5a4 h5h6 a4a3 h6h7 b3a2 h7h8q,559,86,74,130,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/PsVE0sg7/black#118
wMkzy,8/7p/P7/8/1K4p1/7k/8/8 b - - 0 52,h3h2 a6a7 g4g3 a7a8q,488,93,100,155,advancedPawn crushing endgame master pawnEndgame promotion short,https://lichess.org/P0YlFOGs/black#104
DLZS5,8/8/4pK2/4P3/3pkP2/6P1/8/8 w - - 0 58,f6e6 d4d3 e6f6 d3d2 e5e6 d2d1q,444,113,70,187,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/BsVVSZ7y#115
pSMbh,8/5b2/7P/5k2/2pK1P2/8/8/8 b - - 0 56,f5f4 h6h7 f7g6 h7h8q,536,115,93,348,advancedPawn bishopEndgame crushing endgame master promotion short,https://lichess.org/psqXofx1/black#112
PtBNn,8/8/8/p5K1/1k4P1/8/8/8 w - - 1 64,g5f6 a5a4 f6f7 a4a3 g4g5 a3a2 g5g6 a2a1q,523,115,89,442,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/xrO5IvkN#127
A9K5G,8/8/5K2/7p/1p3P1P/2k5/8/8 w - - 0 54,f6g5 b4b3 f4f5 b3b2 f5f6 b2b1q,511,91,81,280,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/0vCEhQgo#107
8CZZS,6k1/8/3K2P1/p7/8/8/8/8 w - - 0 43,d6e6 a5a4 e6d5 a4a3 d5c4 a3a2,552,113,93,636,advancedPawn crushing endgame long pawnEndgame quietMove,https://lichess.org/ugHb1OhF#85
41CHp,8/8/8/p5K1/1k4P1/6P1/8/8 w - - 1 67,g5f6 a5a4 g4g5 a4a3 g5g6 a3a2 g6g7 a2a1q,527,95,72,132,advancedPawn crushing endgame pawnEndgame promotion quietMove veryLong,https://lichess.org/rDwihZWu#133
GjCYP,8/6p1/3k4/3p1PP1/3K4/2p1p3/2B3P1/8 w - - 0 53,g2g4 e3e2 d4c3 e2e1q,594,93,100,127,advancedPawn bishopEndgame crushing endgame promotion short,https://lichess.org/dS79pE9j#105
WkxLD,8/8/PK6/7p/6pk/8/8/8 b - - 0 53,h4h3 a6a7 h3h2 a7a8q,583,97,80,291,advancedPawn crushing endgame pawnEndgame promotion short,https://lichess.org/st9oSFz2/black#106
dh4Pf,8/8/8/6p1/PpkPK1Pp/7P/8/8 w - - 1 54,d4d5 b4b3 d5d6 b3b2 d6d7 b2b1q,562,102,83,538,advancedPawn crushing endgame long pawnEndgame promotion,https://lichess.org/hwiKnyLW#107
LXDim,8/pK6/5kp1/5p1p/PP2rR2/6P1/7P/8 w - - 3 37,f4e4 f5e4 b7a7 e4e3 b4b5 e3e2,584,104,78,281,advancedPawn crushing endgame long,https://lichess.org/ntHohRBt#73`,
  },
  {
    id: 'fork', title: 'Вилка', short: 'Вилка',
    // task_fork600.csv — forks, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
GmUzF,8/1pr2pkp/p3R1p1/2N5/P7/7P/1P3PP1/6K1 b - - 0 30,f7e6 c5e6 g7f7 e6c7,564,84,97,525,advantage endgame fork master short,https://lichess.org/tn3GEmCA/black#60
T9grh,8/3k1p2/4p1pp/3pP3/1P3P2/1r4P1/2N4P/2K5 b - - 4 43,d7c6 c2d4 c6b6 d4b3,585,105,84,881,crushing endgame fork short,https://lichess.org/836PSkTl/black#86
u1MXO,1kb2r2/1p1p3p/5p2/1p6/3Q4/n5P1/P4PBP/1K5R w - - 0 32,b1a1 a3c2 a1b2 c2d4,599,102,77,103,advantage endgame fork master short,https://lichess.org/7sU0c15z#63
rBjGH,8/p1b2k1p/1p4p1/5pN1/8/1P3PPP/3K4/8 b - - 1 33,f7g7 g5e6 g7f6 e6c7,550,98,94,272,advantage endgame fork short,https://lichess.org/FExFTeVr/black#66
a9pF8,3q2k1/1p3pp1/7p/pbP1p3/3r4/P5RP/4BPP1/2Q3K1 w - - 8 33,e2b5 d4d1 c1d1 d8d1,517,87,100,519,advantage endgame fork master short,https://lichess.org/n9iiVNFb#65
030iQ,4r3/ppp4k/8/4p3/6NP/8/P1P3PK/8 b - - 1 45,e5e4 g4f6 h7g6 f6e8,569,88,79,272,crushing endgame fork short,https://lichess.org/djVflfbt/black#90
vd63I,8/7p/8/4k3/5p2/N2KbP1P/8/8 b - - 7 59,e3b6 a3c4 e5d5 c4b6,563,100,85,427,crushing endgame fork master short,https://lichess.org/P4QJRNj1/black#118
KXIs5,8/1p3p1p/p2kp1p1/3p4/1n3P2/1P6/P4KPP/2R5 w - - 3 33,a2a3 b4d3 f2e3 d3c1,584,102,82,534,crushing endgame fork master short,https://lichess.org/JjVV9PsQ#65
v1pHK,rn3rk1/p1p1np1p/1p2R1p1/8/2B3q1/NQP5/PP3P1P/R6K b - - 0 16,f7e6 c4e6 g4e6 b3e6,505,103,95,466,crushing fork middlegame short,https://lichess.org/Gmoxdg37/black#32
E3tFE,3k4/6p1/3P1p2/pB2n3/1pb5/5P1P/1K3BP1/8 w - - 4 45,b5a4 e5d3 b2a1 d3f2,597,84,84,360,crushing endgame fork short,https://lichess.org/bb9Q5glO#89
fx4jz,8/3Pkp1p/1p4p1/8/2n1BP2/6PP/P5K1/8 w - - 1 41,e4d5 c4e3 g2f3 e3d5,550,93,86,527,crushing endgame fork master short,https://lichess.org/xsHEgo8O#81
kTKaN,B5k1/6p1/3p3p/2nPp3/4b3/8/5KPP/4R3 w - - 4 32,g2g4 c5d3 f2e3 d3e1,590,88,82,167,crushing endgame fork short,https://lichess.org/f1TcPCSl#63
CReDH,8/4kp1p/2pp1p2/N3p3/1P2P3/7P/1r3PP1/6K1 b - - 2 25,b2b4 a5c6 e7e6 c6b4,577,108,76,436,advantage endgame fork short,https://lichess.org/y7DMEa2N/black#50
YGz0y,8/1k4p1/8/1r3N2/6PK/7P/8/8 b - - 0 46,g7g6 f5d6 b7a6 d6b5,567,90,81,106,crushing endgame fork master short,https://lichess.org/UlTi4HJq/black#92
PRY7Z,8/5p2/3nk1p1/6P1/4P3/3K1P2/1B6/8 w - - 19 46,d3e3 d6c4 e3d4 c4b2,559,100,72,93,crushing endgame fork short,https://lichess.org/3Y9nApIY#91
0HQ10,r6r/p3nkp1/1p3p1p/2pn4/4N3/P3PP2/1BQ3PP/1B3bK1 w - - 0 27,g1f1 d5e3 f1f2 e3c2,567,82,68,98,advantage fork master middlegame short,https://lichess.org/pj2dSxPL#53
aGAFR,8/p6p/1pk5/2n3P1/3Q3P/8/P4K2/8 w - - 3 57,d4e5 c5d3 f2e3 d3e5,573,88,79,132,advantage endgame fork short,https://lichess.org/QcBV1Nd4#113
e5doK,5rk1/p4ppp/n1N2n2/2pp4/8/P3PN2/1r3PPP/R4RK1 b - - 1 17,f8c8 c6e7 g8f8 e7c8,554,105,84,306,advantage fork middlegame short,https://lichess.org/4kqKSkSY/black#34
mGvoB,2r5/8/3r2k1/1K6/6P1/5NR1/8/8 b - - 16 55,d6d7 f3e5 g6g5 e5d7,575,98,77,220,advantage endgame fork short,https://lichess.org/90wmXwmL/black#110
0OvD9,5k2/8/3RP3/1p6/p5p1/8/PPP2n2/2K5 w - - 1 32,c1d2 f2e4 d2e3 e4d6,597,93,80,166,advantage endgame fork short,https://lichess.org/MveNhG17#63
pJqGh,4k3/p7/1p5p/2B2Pp1/8/2n5/P1P3PP/6K1 w - - 0 29,c5d4 c3e2 g1f2 e2d4,569,93,97,1187,crushing endgame fork short,https://lichess.org/v5txytUK#57
MUF9o,8/1pp2n2/pk1p1p2/3P1P2/4P3/P2K1B2/1P6/8 w - - 6 40,d3c4 f7e5 c4c3 e5f3,577,106,82,109,crushing endgame fork short,https://lichess.org/vbs7ZNbr#79
zbssc,8/1p4pk/p1q5/6p1/4p3/P1P3B1/1PKR3P/8 b - - 1 33,h7g6 d2d6 c6d6 g3d6,599,98,93,354,advantage endgame fork master short,https://lichess.org/M14KStmW/black#66
UP7Bh,8/p7/1p5k/2p5/2P5/1P4B1/4r2P/3K4 b - - 3 44,e2e3 g3f4 h6g6 f4e3,511,100,89,646,crushing endgame fork short,https://lichess.org/jW3RTUrV/black#88
xzGlt,8/8/6k1/8/3r3P/6NK/6P1/8 b - - 0 66,g6h6 g3f5 h6h7 f5d4,461,110,50,109,crushing endgame fork short,https://lichess.org/5fB4KkeI/black#132
SLEbw,3k4/7p/3P2p1/p1KB1p2/1p3P2/1P4P1/n6P/8 w - - 0 34,c5b5 a2c3 b5a5 c3d5,451,105,96,1133,crushing endgame fork master short,https://lichess.org/z9bz7HE8#67
iizv8,8/7p/8/2K2k2/5p2/4n3/8/4R3 w - - 2 54,c5d4 e3c2 d4d3 c2e1,595,94,86,293,crushing endgame fork short,https://lichess.org/ZhycSBF7#107
VYeMT,8/6k1/7p/pp6/2rP4/4N3/P4P1P/5K2 b - - 2 35,c4d4 e3f5 g7f6 f5d4,579,95,96,271,crushing endgame fork short,https://lichess.org/ftZ4EF29/black#70
bsdFo,8/8/p5r1/1p4P1/2p1k3/P4NK1/1P6/8 b - - 2 46,e4d3 f3e5 d3e4 e5g6,547,88,96,467,crushing endgame fork short,https://lichess.org/XrT2k2Xt/black#92
UmyIz,8/4n1p1/1p1k3p/1P2np2/P4B2/8/2K1B1PP/8 w - - 0 35,c2c3 e7d5 c3d2 d5f4,556,84,76,144,crushing endgame fork master short,https://lichess.org/UUSMcFhq#69
ptMAN,6k1/2pP4/pp4p1/8/3rN3/6P1/1P3P2/6K1 b - - 0 36,d4d7 e4f6 g8f7 f6d7,433,106,95,494,advantage endgame fork master short,https://lichess.org/2McQ0P0o/black#72
6rd5K,1r4k1/2r3pp/2R2b2/3n4/2BP4/P7/1P3PPP/3R2K1 b - - 2 26,c7c6 c4d5 g8f8 d5c6,550,97,93,634,advantage endgame fork hangingPiece short,https://lichess.org/fLHVyPnx/black#52
V9Kqn,r5k1/p5p1/2N1p2p/1p3p2/3Pp2P/4P3/P4P2/7K b - - 0 31,a8c8 c6e7 g8f7 e7c8,569,100,85,808,advantage endgame fork short,https://lichess.org/Wg5GWJ2t/black#62
t8WZl,r1bq1rk1/5pbp/p1np2p1/1p3P2/8/2PBQN1P/PP1N2P1/4RR1K b - - 0 16,f8e8 e3e8 d8e8 e1e8,400,104,85,865,crushing fork master middlegame short,https://lichess.org/B6JNSM6M/black#32
0miFa,1r6/2N3kp/3p4/p7/P7/2PK3P/5P2/8 b - - 11 50,b8f8 c7e6 g7g8 e6f8,462,92,63,96,crushing endgame fork master short,https://lichess.org/AwwJmFqm/black#100
vykje,8/8/7p/5p2/5ppk/3K4/6Q1/8 w - - 0 46,d3e2 f4f3 g2f3 g4f3,566,100,95,1638,crushing endgame fork queenEndgame short,https://lichess.org/uT9bc9DQ#91
81jmH,4r3/6kN/5ppn/p2N4/P2n2P1/1p5P/1P3P2/R5K1 b - - 0 29,g7h7 d5f6 h7h8 f6e8,489,101,84,431,crushing endgame fork short,https://lichess.org/vbtyKC1Z/black#58
PLXyz,6k1/1p4pp/p2b4/2pPnp2/8/P1N3PP/1PPB1P2/6K1 w - - 0 30,f2f4 e5f3 g1f2 f3d2,512,104,71,74,advantage endgame fork short,https://lichess.org/in6bmqkf#59
0rYPv,8/p7/2p4Q/3kn1p1/r7/2P5/2P3K1/8 w - - 4 44,h6g5 a4g4 g5g4 e5g4,535,94,98,468,crushing endgame fork short,https://lichess.org/x63kKKv9#87
R5PBq,5rk1/5pp1/1b1p3p/1P2p3/B7/4P3/1P4PP/2R3K1 w - - 3 28,a4b3 b6e3 g1f1 e3c1,565,96,97,1806,crushing endgame fork short,https://lichess.org/riOMF5JC#55
OCBrH,8/8/8/K2N4/P4n2/5r1k/8/8 b - - 0 67,f3d3 d5f4 h3g4 f4d3,557,96,100,75,crushing endgame fork hangingPiece master short,https://lichess.org/FNrBTTTE/black#134
Nfy3q,8/8/2b5/2P2k2/2N1p2p/4Pp2/7P/4K3 b - - 1 49,c6e8 c4d6 f5e6 d6e8,593,83,71,171,crushing endgame fork master short,https://lichess.org/yYJaM704/black#98
fCYwP,8/5k2/1q6/1P1N2p1/2K1R1P1/8/8/8 b - - 2 55,b6b7 e4e7 b7e7 d5e7,592,97,85,257,crushing endgame fork short,https://lichess.org/9QNpl1dJ/black#110
fOoZy,6k1/8/pp2q2p/2p3pN/3p1p1P/1P1P4/1PP2R1K/8 b - - 0 33,e6g4 h5f6 g8f7 f6g4,559,96,63,110,crushing endgame fork master short,https://lichess.org/cMUY4HLO/black#66
sPXGL,3k3r/3p3p/p3p3/1p1n1p2/5P2/6P1/PPQ4P/7K w - - 0 27,h1g2 d5e3 g2f3 e3c2,584,98,91,899,crushing endgame fork short,https://lichess.org/Y6GNDCw2#53
5zOXe,5k2/p1p3p1/5p2/2r4p/3N3P/6P1/B4PK1/8 b - - 1 29,a7a5 d4e6 f8e7 e6c5,567,99,86,1029,crushing endgame fork short,https://lichess.org/BdBbOtK3/black#58
FFKEA,4k3/2p1P3/1pP5/pPn1R2p/8/P5PP/6K1/3b4 w - - 1 38,g2f2 c5d3 f2e3 d3e5,591,79,71,136,crushing endgame fork short,https://lichess.org/ZF9cfvyD#75
FE0z5,4rqrk/p1p2pp1/1p1p1b1B/1P1P1P1P/2P1P3/P6Q/6R1/6RK b - - 0 35,g7h6 g2g8 f8g8 g1g8,571,104,86,160,advantage fork middlegame short,https://lichess.org/0IxBhWGD/black#70
JaQz9,8/6k1/p4pp1/5r2/6p1/2Q5/P4K2/8 w - - 2 42,f2g3 f5f3 c3f3 g4f3,581,98,86,301,crushing endgame fork queenRookEndgame short,https://lichess.org/tuJF2yJ7#83
Pudea,r3r3/1p4pp/2pkpp2/8/pPnP4/2P3N1/P2K1PPP/3RR3 w - - 1 21,d2d3 c4b2 d3e2 b2d1,587,92,79,358,advantage endgame fork master masterVsMaster short,https://lichess.org/OSkVYC8C#41
1BBw2,5r2/1pk3p1/2n1p3/6N1/n1P5/8/5PPP/2R3K1 b - - 2 32,c6e5 g5e6 c7c6 e6f8,528,97,93,1481,crushing endgame fork short,https://lichess.org/lRFNRTEJ/black#64
syCPQ,8/8/2p3k1/3pn1P1/1P2p1K1/2P5/8/2B5 w - - 8 51,g4f4 e5d3 f4e3 d3c1,596,84,53,72,crushing endgame fork master short,https://lichess.org/VfY2HqGC#101
p3X3P,8/6R1/3r2k1/5pp1/8/4N3/5K1P/8 b - - 1 39,g6g7 e3f5 g7f6 f5d6,400,111,76,345,crushing endgame fork short,https://lichess.org/UoGiuBY5/black#78
Pai0T,2N3k1/5pp1/pp5p/3b4/5P2/7P/P5PK/8 b - - 3 34,b6b5 c8e7 g8f8 e7d5,589,105,78,607,advantage endgame fork short,https://lichess.org/8xbCvU1n/black#68
M2VuT,8/7p/6p1/1N3p2/1P5P/Pk4P1/r4P2/5K2 b - - 8 41,b3a4 b5c3 a4a3 c3a2,567,105,79,479,crushing endgame fork short,https://lichess.org/blGGor8R/black#82
KDjeF,3r2k1/5pp1/2N5/6p1/4K3/2P4P/P5r1/R7 b - - 1 34,d8c8 c6e7 g8f8 e7c8,591,96,96,446,crushing endgame fork short,https://lichess.org/GUxfh2eX/black#68
SmDha,5b2/3Q2pk/p2qN2p/1p6/8/6PP/1P3P1K/8 b - - 0 39,d6d7 e6f8 h7g8 f8d7,524,87,47,62,advantage endgame fork hangingPiece short,https://lichess.org/cYeUTtUm/black#78
cbY80,r7/3k1ppp/4p3/3pP3/1p1P4/1p1NP3/6PP/3K4 b - - 2 32,a8a4 d3c5 d7c6 c5a4,542,100,82,364,crushing endgame fork short,https://lichess.org/w3FJat5S/black#64
1MVXB,4k1r1/1p2n2p/p2R2pB/8/8/P1K5/1P4PP/8 w - - 0 33,d6b6 e7d5 c3d4 d5b6,511,104,95,210,crushing endgame fork short,https://lichess.org/9MK0vmBd#65
MknEW,6k1/8/1p5p/p4Bp1/3K2P1/3P3P/Pr6/8 b - - 0 34,b2a2 f5e6 g8f8 e6a2,584,95,85,62,crushing endgame fork short,https://lichess.org/XXElhjeY/black#68
vfmkw,1k6/p4p1p/5N1p/1pb5/8/8/P4PPP/6K1 b - - 1 31,a7a5 f6d7 b8c7 d7c5,492,105,92,493,advantage endgame fork short,https://lichess.org/HwfVqe7R/black#62
qLsgW,8/8/7p/4kP1P/2B1n1P1/6K1/8/8 w - - 13 58,g3f3 e4d2 f3e2 d2c4,598,95,85,121,crushing endgame fork short,https://lichess.org/V75Ddu9M#115
k2xPf,8/2p2pkp/2p5/p1b5/P4p2/1P6/3NK1PP/8 b - - 0 34,g7f6 d2e4 f6e5 e4c5,589,98,79,608,crushing endgame fork short,https://lichess.org/fTNlr7JL/black#68
nH9K6,r4k2/6R1/5n2/p4N1p/8/7P/5KP1/8 w - - 1 39,g7g3 f6e4 f2e3 e4g3,574,94,81,446,crushing endgame fork short,https://lichess.org/g135snqd#77
1VpDa,8/pp6/2pk4/8/2P4p/PP3P1P/2K3n1/4R3 w - - 0 40,e1f1 g2e3 c2d3 e3f1,570,82,57,90,advantage endgame fork short,https://lichess.org/M7P55SkB#79
wbtCH,4r1k1/1b3pp1/p1pp4/8/6PQ/4qN1P/1PPn2B1/1K2R3 w - - 6 28,f3d2 e3e1 h4e1 e8e1,592,98,82,449,crushing fork master masterVsMaster middlegame short,https://lichess.org/GWLtCyWx#55
nUFXC,8/2k1b3/6R1/1n6/5P1p/5K2/7P/8 w - - 0 48,g6e6 b5d4 f3e4 d4e6,581,98,86,651,crushing endgame fork master short,https://lichess.org/tjeaCErf#95
wRBER,3N2k1/1p6/p7/6p1/2P2p2/4bR2/P1n3K1/8 w - - 0 33,d8b7 c2e1 g2h1 e1f3,570,106,79,301,crushing endgame fork short,https://lichess.org/sQAJLryR#65
hukFQ,1q3rk1/1p1n1ppp/4pb2/1P1p4/3P4/2Q1PN2/4BPPP/2R3K1 b - - 4 19,f8c8 c3c8 b8c8 c1c8,562,97,47,339,crushing fork middlegame short,https://lichess.org/NuOIv9uN/black#38
t77gn,5b2/8/1p3P1p/2kpN1p1/8/3K2P1/6P1/8 b - - 2 46,b6b5 e5d7 c5c6 d7f8,578,91,78,99,crushing endgame fork master short,https://lichess.org/PYCljSEu/black#92
Ku4Bi,r4rk1/pp3ppp/4p3/3nP3/2Q5/P7/6PP/R1B2K1R w - - 1 18,c1b2 d5e3 f1e2 e3c4,586,95,77,249,crushing fork middlegame short,https://lichess.org/xV1U1Meq#35
S6duv,1r6/4kpp1/B3p2p/1P6/1N6/1n6/1P3PPP/6K1 b - - 2 30,b3c5 b4c6 e7d7 c6b8,568,107,95,501,advantage endgame fork master short,https://lichess.org/Ubh4CVmK/black#60
r3krm,q5k1/5p1p/4b3/3nPP2/2p5/b1P4P/P2R1B2/K2R4 b - - 0 33,d5c3 d2d8 a8d8 d1d8,584,93,71,146,advantage fork middlegame short,https://lichess.org/DyJBPcmq/black#66
vF70f,8/6k1/3r2P1/ppN2KPn/2pP4/P1P5/1P6/8 b - - 5 55,d6d8 c5e6 g7g8 e6d8,598,107,57,51,crushing endgame fork short,https://lichess.org/wrsPe57h/black#110
dSJEF,8/8/1p2B3/p5k1/8/6N1/P6r/6K1 b - - 0 43,h2d2 g3e4 g5f4 e4d2,591,100,86,239,crushing endgame fork short,https://lichess.org/OW7c0jLY/black#86
HCREg,1n4k1/2N2p1p/2p3p1/4n3/8/3r1P2/PP3K1P/2RR4 w - - 2 31,d1d3 e5d3 f2e3 d3c1,575,108,73,106,advantage endgame fork short,https://lichess.org/uljrnOnS#61
ZWO6Y,r5k1/6p1/p1N1p2p/1p3p2/4P2P/1P4P1/P2r4/1B2R1K1 b - - 0 30,a8c8 c6e7 g8f7 e7c8,563,101,90,567,crushing endgame fork master short,https://lichess.org/BjoYAwnr/black#60
1vZPH,5rk1/6pp/2N1p3/2B2p2/2KP4/4PP2/6PP/r7 b - - 1 25,f8c8 c6e7 g8f7 e7c8,598,94,87,340,advantage endgame fork short,https://lichess.org/6ktX1ZrS/black#50
V7wgk,8/6p1/1p6/7p/2k5/6P1/5PKP/3r1N2 b - - 1 44,b6b5 f1e3 c4d3 e3d1,597,102,77,444,advantage endgame fork short,https://lichess.org/WVkC6LFC/black#88
DjEeJ,8/6k1/3q2pp/2p4P/4p3/P3N2K/5PP1/8 b - - 2 43,g6h5 e3f5 g7f6 f5d6,546,93,100,241,crushing endgame fork master short,https://lichess.org/Bxpdsomn/black#86
Cvk7M,5r2/pp4k1/8/2p1p1N1/5p2/8/PPP4P/3B3K b - - 0 29,f8d8 g5e6 g7f6 e6d8,599,98,96,810,crushing endgame fork short,https://lichess.org/CmqxPist/black#58
IJzZU,r4b2/5p2/8/3Npk1p/1p1p3P/1P1K1PP1/2P5/2R5 b - - 0 44,f5e6 d5c7 e6d7 c7a8,569,99,85,359,crushing endgame fork master short,https://lichess.org/YPBShYIo/black#88
SABqg,r4r2/ppp2pk1/6pp/8/3nPp2/1B1P3P/PPP4P/R4RK1 w - - 0 18,f1f4 d4e2 g1f2 e2f4,590,108,83,1017,crushing endgame fork short,https://lichess.org/L0w5OxQ6#35
HEjHP,r3kb1r/p2qpp1p/2p2np1/8/Q3B3/6P1/PP1P1P1P/R1B1K2R b KQkq - 0 12,d7e6 a4c6 e6c6 e4c6,583,84,100,366,crushing fork middlegame short,https://lichess.org/Ew2IZfIN/black#24
VFRDV,3r4/3k2p1/1p3p1p/1K6/1P1N4/1P5P/6P1/8 b - - 7 35,d7c7 d4e6 c7c8 e6d8,578,108,80,63,crushing endgame fork short,https://lichess.org/BGLF6K61/black#70
SPG5s,2bq4/4p1k1/p2pPrpp/2p5/5r2/1B6/P4NPP/R2Q1RK1 w - - 1 25,f2h3 f4f1 d1f1 f6f1,547,96,85,982,crushing fork middlegame short,https://lichess.org/HxEdqoAm#49
RyEES,8/B1p2kpp/3b4/1b1p4/8/2P4P/P1N2KP1/8 b - - 0 29,f7e6 c2d4 e6d7 d4b5,536,99,86,941,advantage endgame fork master masterVsMaster short,https://lichess.org/PVNnZWqD/black#58
FuGAT,1r3k2/1p6/p2pR1p1/P1pPnp2/2P4p/1P3r1P/6P1/4R1K1 w - - 0 34,g2f3 e5f3 g1f2 f3e1,492,90,86,167,advantage endgame fork short,https://lichess.org/UznCb2kO#67
n3Trm,8/5kbp/1B2p1p1/1B3p2/5P2/1n4P1/5P1P/5K2 w - - 4 35,b5c4 b3d2 f1g2 d2c4,574,90,97,480,advantage endgame fork master short,https://lichess.org/IpKsEa2h#69
A4XvV,8/7p/3r2p1/N2k4/Pp4P1/1K6/7P/8 b - - 1 38,d5c5 a5b7 c5c6 b7d6,575,97,88,1123,crushing endgame fork short,https://lichess.org/NlsKCVA7/black#76
vXtEY,8/8/b3k3/4p1pp/N3P3/4K1P1/7P/8 b - - 4 48,a6b7 a4c5 e6d6 c5b7,560,109,98,584,crushing endgame fork master short,https://lichess.org/f38tW18L/black#96
G1jZb,2r3k1/2p3pb/1pN4p/p2p4/5P2/P6P/1P4P1/2R3K1 b - - 2 30,h7e4 c6e7 g8f7 e7c8,561,97,92,875,crushing endgame fork short,https://lichess.org/KQrVJZ1q/black#60
bPIhA,3r2k1/6p1/p1N2p1p/5P2/5PP1/1P4PK/8/8 b - - 0 37,d8c8 c6e7 g8f8 e7c8,439,113,96,686,crushing endgame fork short,https://lichess.org/XNwVo4MZ/black#74
XgaA6,r7/3p3p/6pk/p1N1np2/8/5P2/PPPR3P/6K1 w - - 1 32,f3f4 e5f3 g1f2 f3d2,572,94,95,554,crushing endgame fork short,https://lichess.org/TJMYihoS#63
nfJJv,1q5k/2r3pn/pb1p3p/1p1Pp3/4P3/1NP2RPB/P6P/5Q1K b - - 12 33,h7g5 f3f8 b8f8 f1f8,584,104,65,67,crushing fork middlegame short,https://lichess.org/fNTrmBGZ/black#66
ZQSgl,8/p1kp4/3p4/3Pp3/2n1K3/2P2p1R/P4P2/8 w - - 9 51,h3f3 c4d2 e4d3 d2f3,552,90,96,203,crushing endgame fork master short,https://lichess.org/oX8CQPA8#101
acU3i,8/8/8/7N/7P/2k3P1/6r1/4K3 b - - 5 61,c3d3 h5f4 d3e3 f4g2,596,102,96,474,crushing endgame fork short,https://lichess.org/qPTaDSRb/black#122
tpUwX,5R2/kp6/2p5/p1P5/1n6/5P2/5KP1/8 w - - 0 47,f8f4 b4d3 f2e3 d3f4,597,102,82,395,crushing endgame fork short,https://lichess.org/WldjtBWe#93
Mv8df,6k1/1p1r1p1p/6p1/8/P1P1N3/5P1P/3p2P1/2bR1K2 b - - 2 33,f7f5 e4f6 g8g7 f6d7,585,86,100,405,crushing endgame fork short,https://lichess.org/woD9VFrl/black#66
ZHxy7,8/1b4kp/p5p1/4p1P1/1Pp1N3/2P1K3/7P/8 b - - 0 42,g7f7 e4d6 f7e6 d6b7,579,113,83,53,crushing endgame fork short,https://lichess.org/oniOXlb8/black#84
MafaN,8/8/5p2/4qBp1/p5Pp/P4R1P/3k1PK1/8 b - - 4 50,d2e1 f3e3 e5e3 f2e3,566,103,92,523,crushing endgame fork master masterVsMaster short,https://lichess.org/D7kEvpVW/black#100
i3zuq,6k1/5pp1/4p2p/2n5/8/P5B1/3K1P1P/8 b - - 3 35,g8f8 g3d6 f8e8 d6c5,574,92,97,481,advantage endgame fork short,https://lichess.org/6qlQx2ue/black#70
9TKSU,8/3b3p/p6N/2pk1p2/3n1R2/P2P4/1P4PP/7K w - - 0 31,h1g1 d4e2 g1f2 e2f4,591,121,75,45,crushing endgame fork short,https://lichess.org/yCnFm6zO#61
x3DkM,5rk1/5pp1/N1N4p/1p6/3Pn3/P3P2P/1P4P1/6K1 b - - 0 28,f8c8 c6e7 g8f8 e7c8,554,89,97,315,crushing endgame fork short,https://lichess.org/JLbY3mVl/black#56
zWQOQ,8/8/b7/1k6/1p2N2p/1K6/P6P/8 b - - 1 55,a6c8 e4d6 b5c6 d6c8,590,87,78,292,crushing endgame fork short,https://lichess.org/ydg35BGj/black#110
nVmLn,r4rk1/p1pb1p2/2p2p1p/7N/4p3/8/PPP2PPP/R4RK1 b - - 1 16,f6f5 h5f6 g8g7 f6d7,575,110,82,416,advantage endgame fork short,https://lichess.org/zFVYBRr4/black#32
RzuNU,4k3/p5p1/1p2K1p1/1PrB4/6P1/7P/8/8 b - - 4 39,c5b5 d5c6 e8f8 c6b5,571,95,95,481,crushing endgame fork short,https://lichess.org/S6hOXJvW/black#78
DBtFI,r5k1/5p2/p1N1p3/1p5p/2n1PP2/1R4P1/7P/6K1 b - - 4 35,a8c8 c6e7 g8f8 e7c8,553,117,78,357,advantage endgame fork short,https://lichess.org/Hs63579j/black#70
JUXes,8/7k/6p1/4bp1p/P4QnP/6P1/4P1K1/8 w - - 3 54,f4c4 g4e3 g2f2 e3c4,576,106,78,149,crushing endgame fork master short,https://lichess.org/S7vUgSmv#107
JLAgd,6k1/p4pp1/7p/1p3b2/8/1Pn2P2/P5PP/2B1N1K1 w - - 1 30,a2a3 c3e2 g1f1 e2c1,529,104,91,670,crushing endgame fork short,https://lichess.org/hUfB4wry#59
vgELX,1k4q1/5p2/1p3P2/1P5P/P6r/3R4/6P1/3R2K1 b - - 2 43,h4h5 d3d8 g8d8 d1d8,499,99,92,887,crushing endgame fork queenRookEndgame short,https://lichess.org/nRPWOMLs/black#86
6Rc6m,5r2/p4ppk/1p2q3/8/4R3/1p2PN1P/P4PP1/5RK1 b - - 0 22,e6e4 f3g5 h7g6 g5e4,539,103,72,299,advantage endgame fork short,https://lichess.org/UcpYTaVe/black#44
qS65R,3k2r1/6r1/2b1Q1P1/3pP3/p2P4/B1P5/6K1/8 w - - 3 43,e6c6 g7g6 c6g6 g8g6,563,100,97,1176,crushing endgame fork master short,https://lichess.org/yHTGgtNs#85
982AH,r4rk1/p4p2/7p/4n1P1/7B/2P4P/P4P2/R4RK1 w - - 0 24,g5h6 e5f3 g1h1 f3h4,589,100,90,1151,advantage endgame fork short,https://lichess.org/IOEEV5Dc#47
KB5E0,2r3k1/5p2/p3Rp1p/1pp4b/7P/P1P3P1/BP3P2/5K2 b - - 0 36,f7e6 a2e6 g8f8 e6c8,400,99,94,665,advantage endgame fork short,https://lichess.org/OGEls0y3/black#72
jgqCg,5k2/p1p2ppp/8/2N1P3/2P1r1P1/2K4P/P4P2/8 b - - 0 31,e4e5 c5d7 f8e7 d7e5,549,102,77,554,crushing endgame fork short,https://lichess.org/N5iV9mSO/black#62
6ef9R,5nk1/5p2/5Qp1/1K5p/7P/6P1/8/8 w - - 15 71,b5b6 f8d7 b6b5 d7f6,499,96,73,451,crushing endgame fork short,https://lichess.org/5zwix1iP#141
j0EV2,2r1k2r/pp2bppp/3p4/2pNn3/4PB2/5P2/PPP2P1P/R3R1K1 w k - 9 17,a1d1 e5f3 g1g2 f3e1,562,99,84,533,advantage fork middlegame short,https://lichess.org/BW0GA6mO#33
e8M8D,2r3k1/6q1/4pR2/4P1p1/2r5/2B5/PpRQ4/2K5 w - - 0 39,c3b2 c4c2 d2c2 c8c2,571,93,73,277,advantage fork master middlegame short,https://lichess.org/Hu40FsX1#77
76zYA,4rrk1/pppQ1p2/3p2p1/6bn/8/1BP5/PP3K1P/2R2R2 w - - 0 26,b3f7 f8f7 d7f7 g8f7,587,107,78,307,advantage fork middlegame short,https://lichess.org/TNznE8Me#51
HzPON,r5k1/3R2pp/p4p2/3p4/2pP2nP/2P5/PPKN4/8 w - - 2 27,d7d5 g4e3 c2c1 e3d5,567,89,97,2507,crushing endgame fork short,https://lichess.org/qHq4m5lk#53
IVfQz,5r1k/7p/3N2p1/1P6/pB1b4/7P/P5K1/8 b - - 2 36,f8d8 d6f7 h8g7 f7d8,544,93,79,297,advantage endgame fork master short,https://lichess.org/ibgICM9p/black#72
6gz1f,5r2/p5k1/6p1/7p/1p1Np1nP/8/PPP5/1K5R b - - 0 27,g4e3 d4e6 g7g8 e6f8,583,88,72,150,crushing endgame fork short,https://lichess.org/grfi6odM/black#54
NosWz,8/8/4kp2/1b6/4PK2/8/2N5/8 b - - 0 58,b5c6 c2d4 e6f7 d4c6,475,90,83,79,crushing endgame fork short,https://lichess.org/YTIgdPxa/black#116
oGDje,6k1/p2r4/1pp4p/2b1p1p1/2b1NpP1/2P2P1B/6KP/R7 b - - 4 45,c5e3 e4f6 g8f7 f6d7,561,101,80,416,advantage endgame fork master short,https://lichess.org/pr5BLTxC/black#90
a62dy,6r1/1pk5/8/3N4/1P4P1/P4K2/8/8 b - - 4 53,c7c6 d5e7 c6d6 e7g8,558,97,69,307,crushing endgame fork master short,https://lichess.org/HrAPy3mO/black#106
HT7PZ,8/2b3k1/p5pp/2N5/2P5/8/6PP/7K b - - 3 43,a6a5 c5e6 g7f7 e6c7,585,86,86,293,crushing endgame fork master short,https://lichess.org/BfSmIwcL/black#86
GhWPS,2Q1q1k1/1p2r1p1/3R3p/3R4/8/P5P1/1P2PK1P/8 b - - 0 29,e8c8 d6d8 c8d8 d5d8,594,95,58,282,crushing endgame fork master queenRookEndgame short,https://lichess.org/adC3xtIu/black#58
U7ZMF,3r2k1/5ppp/p1N5/1p6/6bP/6P1/P5BK/2B5 b - - 2 31,d8c8 c6e7 g8f8 e7c8,594,97,86,1398,advantage endgame fork short,https://lichess.org/mZqMs16R/black#62
ifo0I,8/5nP1/1p6/p2pk3/P5K1/2P5/1P6/8 w - - 0 56,g7g8q f7h6 g4g5 h6g8,569,104,83,298,crushing endgame fork master short,https://lichess.org/WAZTiHWV#111
3TMOy,8/5p2/4k3/R3n1pp/4P3/5K1P/6P1/8 w - - 3 44,f3e3 e5c4 e3d4 c4a5,593,92,89,305,crushing endgame fork master short,https://lichess.org/b6VyQqxp#87
CtWrf,2r3k1/4p3/p3p2p/4b1p1/2B1p3/1P2P2P/P2K1PP1/1R6 b - - 2 27,a6a5 c4e6 g8g7 e6c8,554,99,82,811,crushing endgame fork short,https://lichess.org/J48MNF2l/black#54
GdNC9,5k2/6pp/4p3/1r2P3/1pN3P1/1P6/P1P1K2P/8 b - - 0 34,f8f7 c4d6 f7g6 d6b5,535,107,79,170,crushing endgame fork short,https://lichess.org/4MKoQVAb/black#68
3irh1,r5k1/p6p/1p1p4/2pP1r1N/6P1/3P4/P4P1P/1R4K1 b - - 0 25,f5d5 h5f6 g8f7 f6d5,597,99,93,181,advantage endgame fork master short,https://lichess.org/frHVTWPd/black#50
a5D7Y,5r1k/pp6/1b1ppp1p/8/1n1PB3/4PN2/1P1N1K1P/2R5 w - - 0 25,e4b7 b4d3 f2f1 d3c1,566,100,95,1056,advantage fork middlegame short,https://lichess.org/xvu4EIi4#49
lCNWs,r7/r6k/2p2ppp/np1p4/3P4/1qN1P2P/2Q2PP1/R1R3K1 w - - 0 31,c2b3 a5b3 a1a7 a8a7,506,101,100,612,advantage fork middlegame short,https://lichess.org/nNAzOhev#61
Tb2QZ,2r3k1/7p/6p1/1N3p2/P7/1P3PKP/6P1/8 b - - 1 33,g8f7 b5d6 f7e6 d6c8,566,104,81,594,crushing endgame fork short,https://lichess.org/FzazPrNo/black#66
nONB4,7k/7p/p4bp1/1pN5/8/7P/PP4P1/6K1 w - - 0 39,b2b3 f6d4 g1f1 d4c5,557,88,60,84,crushing endgame fork short,https://lichess.org/obmi1ZVf#77
DdoNa,5k2/1p2r1p1/p1pN3p/P1Pn1P2/1P6/4p2P/5KP1/1R6 w - - 0 45,f2e2 d5c3 e2e1 c3b1,596,101,86,818,crushing endgame fork short,https://lichess.org/bPNDMv24#89
Pr4eI,4r1k1/6pp/p1N2p2/1p6/5P2/PP6/3K2PP/8 b - - 0 28,e8c8 c6e7 g8f7 e7c8,596,106,64,98,crushing endgame fork short,https://lichess.org/DPZuw6U5/black#56
GXoiB,8/8/5p1p/1R1p1b2/3k4/1P6/P4PPP/6K1 w - - 0 29,g1f1 f5d3 f1e1 d3b5,570,93,81,152,advantage endgame fork short,https://lichess.org/AIDw119e#57
CTQjI,4k3/pp5p/2n5/1P3Q2/2P5/8/P2Kr2P/8 w - - 7 50,d2e2 c6d4 e2e3 d4f5,583,89,85,154,advantage endgame fork master short,https://lichess.org/bDsFAPmo#99
3yNiA,4r3/1k3p1p/2p1p3/ppP5/2n1NPP1/P7/7P/5RK1 b - - 0 27,c4a3 e4d6 b7a6 d6e8,589,98,71,211,advantage endgame fork short,https://lichess.org/cPbRny1B/black#54
GhhbK,1k6/1p3p2/p4N2/8/5P1P/1r6/5PK1/8 b - - 0 36,b3b6 f6d7 b8c8 d7b6,550,93,84,190,crushing endgame fork short,https://lichess.org/DTHgYpGv/black#72
ptJ7a,8/3k3p/8/1p2B3/4R2P/p4KP1/3q4/8 b - - 9 48,a3a2 e4d4 d2d4 e5d4,568,84,85,193,crushing endgame fork short,https://lichess.org/j0HBhrqi/black#96
TvG7p,8/8/8/5n1P/2pk4/5B2/2K5/8 w - - 2 58,f3g4 f5e3 c2c1 e3g4,584,99,94,207,crushing endgame fork short,https://lichess.org/SJMbsi9P#115
NKVQj,8/1p1r1kp1/7p/8/p7/3N2BP/4KPP1/8 b - - 1 43,a4a3 d3e5 f7e6 e5d7,530,98,79,281,advantage endgame fork short,https://lichess.org/ERaFI7Tn/black#86
zhIBv,8/8/8/8/6N1/7r/1KP3k1/7R b - - 0 69,g2h1 g4f2 h1g2 f2h3,583,94,84,141,crushing endgame fork master short,https://lichess.org/z2OIidnZ/black#138
d8T7N,rn1q2k1/1p4p1/3p1p1p/p2p1P2/2P4N/P3R2P/1B1K1P2/4R3 b - - 1 24,a5a4 e3e8 d8e8 e1e8,593,99,89,241,crushing fork middlegame short,https://lichess.org/K5Ia1iJw/black#48
llsmB,7r/pp6/1k1p4/8/1P1pP2r/3P4/P1Q4N/7K w - - 3 30,a2a4 h4h2 c2h2 h8h2,463,104,84,530,crushing endgame fork short,https://lichess.org/0y1Sa5zC#59
JrzNY,8/8/4p3/8/2n3k1/4P1P1/6K1/1B6 w - - 3 45,b1c2 c4e3 g2f2 e3c2,520,96,79,98,crushing endgame fork master short,https://lichess.org/MloOiKGP#89
KLyF4,6k1/5pp1/2p1p2p/2Bp4/1P1P4/1B2P3/2p2PPP/r1N2K2 w - - 1 33,b3c2 a1c1 f1e2 c1c2,537,88,85,187,advantage endgame fork hangingPiece short,https://lichess.org/240RQVyn#65
OBHDr,2k5/1p2n3/1K4p1/1P3p2/P3P3/2B5/8/8 w - - 0 60,e4e5 e7d5 b6c5 d5c3,549,92,86,68,crushing endgame fork short,https://lichess.org/FjnWapt0#119
4GLW5,1kQ3r1/pp2b3/5pNp/6p1/1n2PP2/3P2P1/PP4KP/8 b - - 0 30,b8c8 g6e7 c8d8 e7g8,578,93,86,1286,advantage endgame fork hangingPiece short,https://lichess.org/SzroDNqJ/black#60
5viYD,8/5k1p/4p1p1/1N6/r3PP2/2P4P/5KP1/8 b - - 2 37,a4e4 b5d6 f7e7 d6e4,557,87,86,175,crushing endgame fork master masterVsMaster short,https://lichess.org/N7yOOhtb/black#74
ARlrR,8/pp2k1pp/2p5/2P5/PP3R2/2n5/6PP/6K1 w - - 1 38,a4a5 c3e2 g1f2 e2f4,400,116,89,893,crushing endgame fork short,https://lichess.org/qZsGIm2c#75
h8j3r,8/6k1/8/1B6/P5p1/4q3/6RK/8 b - - 3 60,g4g3 g2g3 e3g3 h2g3,563,85,100,694,crushing endgame fork short,https://lichess.org/nbP48132/black#120
eFe37,3N4/6k1/p5p1/5pP1/r4P1P/8/2K5/8 b - - 1 44,a4d4 d8e6 g7g8 e6d4,568,104,78,177,crushing endgame fork short,https://lichess.org/lar5z4D9/black#88
P2RU4,3r3k/p6p/1p6/8/2Pp1N2/P5P1/1P3K1P/8 b - - 3 31,h8g7 f4e6 g7f6 e6d8,583,99,91,648,crushing endgame fork short,https://lichess.org/o8s9Ygai/black#62
YXRiP,5k2/p1b2p2/6p1/2PP3p/3P4/2K2P1P/P5P1/8 b - - 0 30,f8e7 d5d6 c7d6 c5d6,540,85,100,539,bishopEndgame crushing endgame fork short,https://lichess.org/0ECv411C/black#60
PnUKp,1r4k1/5p1p/p1N1p1p1/8/1P6/P5PP/5P2/6K1 b - - 0 28,b8c8 c6e7 g8f8 e7c8,573,85,98,472,advantage endgame fork short,https://lichess.org/dIJLB1K7/black#56
7LQyH,1R3n2/5pk1/6p1/7p/4K2P/8/6P1/8 w - - 7 54,e4e5 f8d7 e5f4 d7b8,557,112,72,247,crushing endgame fork master short,https://lichess.org/AFfT0ZAV#107
4P2MR,2n2k2/6p1/6p1/p2B1pK1/P6P/5P2/6P1/8 w - - 13 49,g5g6 c8e7 g6g5 e7d5,590,83,94,180,advantage endgame fork short,https://lichess.org/35efuxH0#97
pkJrP,8/6B1/p2k1p1p/1p3Pn1/1P4P1/6K1/8/8 w - - 1 51,g7f6 g5e4 g3h4 e4f6,487,93,60,258,crushing endgame fork short,https://lichess.org/TsJuanxk#101
sMpwh,r1b4r/p1p1k3/2p2p2/2b3pp/2B1n3/2B5/PPP2PPP/RN1R2K1 w - - 2 16,d1e1 c5f2 g1h1 f2e1,554,105,97,1134,advantage fork middlegame short,https://lichess.org/mjf0hFMh#31
lyXqq,8/p2nkpp1/7p/8/2B5/5KPP/P4P2/8 w - - 3 33,h3h4 d7e5 f3e4 e5c4,531,89,100,427,advantage endgame fork short,https://lichess.org/FcFESx9b#65
QlWF4,8/p5k1/8/2Np4/3P1r2/1P5P/P5PK/8 b - - 1 40,f4d4 c5e6 g7f6 e6d4,586,97,67,63,crushing endgame fork master short,https://lichess.org/lnIwSxpK/black#80
bv6tB,2k3q1/1p4B1/p2p3P/5R2/4n1PK/2P5/8/8 b - - 6 49,b7b6 f5f8 g8f8 g7f8,513,106,85,1324,crushing endgame fork short,https://lichess.org/KAnGv9yC/black#98
XBbm9,5b2/2k5/3p2p1/1p1Pp1Np/1P6/2P2P1P/8/6K1 b - - 1 36,h5h4 g5e6 c7d7 e6f8,567,84,100,127,crushing endgame fork short,https://lichess.org/Xt31LcTR/black#72
L2qdV,8/6p1/p3b3/1k3p1p/8/2K3P1/1P2N2P/8 b - - 3 45,g7g5 e2d4 b5b6 d4e6,559,90,67,90,crushing endgame fork short,https://lichess.org/Z8kL7sH0/black#90
n4RY7,r4rk1/pp4pp/5p2/2pp2B1/7P/P1P2Nn1/1PP5/R2R2K1 w - - 0 20,g5f4 g3e2 g1g2 e2f4,575,101,92,899,advantage fork middlegame short,https://lichess.org/x94aaqMC#39
pJo2D,8/1p1r3k/p1p3pp/5R2/1P1P4/1bP3PB/1P3P1P/6K1 b - - 0 25,g6f5 h3f5 h7g7 f5d7,543,110,80,188,crushing endgame fork short,https://lichess.org/qzobZmmp/black#50
ZTvrd,3k4/1pp2N2/p1r5/4r2p/8/2P3P1/PP4KP/8 b - - 1 36,d8d7 f7e5 d7e6 e5c6,585,92,91,1584,crushing endgame fork hangingPiece short,https://lichess.org/bkqc8kJl/black#72
fxICH,8/4k2p/6p1/p7/n2b1P2/3N2P1/1p5P/1R3K2 w - - 4 39,f1e2 a4c3 e2f3 c3b1,522,99,76,149,crushing endgame fork master short,https://lichess.org/O0Y3NG7I#77
6HIIU,2kr4/1pp5/p3b1N1/2p2p2/5P1p/P2P3P/1PP2K2/5N2 b - - 0 36,d8g8 g6e7 c8d8 e7g8,566,88,71,287,advantage endgame fork short,https://lichess.org/eGkMiuBC/black#72
ZzubP,2b5/8/p1N3p1/Pp1p1k2/1P1P4/4K3/8/8 b - - 7 50,g6g5 c6e7 f5e6 e7c8,512,106,85,377,crushing endgame fork short,https://lichess.org/sfHqv96Y/black#100
4iZhY,1k6/1p6/pNp1qB2/8/P3P3/4K3/1PP5/8 b - - 0 45,e6f6 b6d7 b8c7 d7f6,599,102,81,349,crushing endgame fork short,https://lichess.org/N0ox1K6Z/black#90
cycab,4r1k1/R4p1p/2N1p1p1/1N6/p7/7P/r4PP1/6K1 b - - 1 29,e8c8 c6e7 g8g7 e7c8,597,93,85,482,crushing endgame fork short,https://lichess.org/7QYY37dg/black#58
4ke1u,8/2k5/1P6/K1P2r2/4N1pp/8/5P2/8 b - - 0 56,c7b7 e4d6 b7c6 d6f5,531,97,87,1147,crushing endgame fork short,https://lichess.org/mg6JssDZ/black#112
as1XF,8/p2Rkpp1/1p6/8/1Pq5/P4N2/5PK1/8 b - - 3 47,e7d7 f3e5 d7d6 e5c4,596,83,58,82,advantage endgame fork master short,https://lichess.org/gqkDbH1j/black#94
4nOHe,2kr4/1pp3p1/4p3/p2p4/5n1p/1PP2P1P/1K4P1/R3R3 w - - 1 34,a1a5 f4d3 b2c2 d3e1,556,93,80,129,advantage endgame fork short,https://lichess.org/U0QZJ23B#67
r8z4U,7k/1R6/7p/3B4/7p/3b3P/8/7K w - - 0 51,d5e4 d3e4 h1g1 e4b7,589,87,75,262,crushing endgame fork hangingPiece master short,https://lichess.org/a8wxeFgp#101
Z8qPL,1r3r2/p1q1ppkp/2pp2p1/4n3/4P3/2NB3b/PPPQ1PP1/1R3RK1 w - - 0 16,g2h3 e5f3 g1g2 f3d2,577,96,83,388,crushing fork middlegame short,https://lichess.org/6IEutRF1#31
6cnND,8/8/6k1/8/6p1/6R1/8/5qRK b - - 9 61,f1f4 g3g4 f4g4 g1g4,571,92,100,206,crushing endgame fork queenRookEndgame short,https://lichess.org/NIH3LUmw/black#122
lbXuV,2r5/7k/p2p3p/3N2p1/1pP1p3/1P6/5KPP/8 b - - 0 46,c8e8 d5f6 h7g6 f6e8,587,97,85,316,crushing endgame fork short,https://lichess.org/jy0PeGGA/black#92
5i8An,3b4/6N1/8/1pk1p2p/4P3/1P1K3P/8/8 b - - 5 40,h5h4 g7e6 c5d6 e6d8,558,101,88,1280,crushing endgame fork short,https://lichess.org/cRm70C1G/black#80
HCJI7,8/3b4/1p6/3N1p1k/1P2pP1p/7P/5K2/8 b - - 2 49,b6b5 d5f6 h5g6 f6d7,459,113,92,416,crushing endgame fork short,https://lichess.org/8if9gOCy/black#98
Kg9aq,8/1p1k1p1p/1n2p1p1/1N1p4/3P1PP1/3Kb2P/1R6/8 w - - 0 31,d3e3 b6c4 e3e2 c4b2,577,100,73,407,crushing endgame fork short,https://lichess.org/QNetfCKa#61
cYspk,8/p1p2k2/1p1pqp2/4r2p/2P4R/6P1/PP3P1P/3Q2K1 w - - 2 29,b2b3 e5e1 d1e1 e6e1,590,93,76,68,advantage endgame fork master masterVsMaster short,https://lichess.org/2bQurOQz#57
oOZxV,5b2/3K1k2/8/4p1N1/4P3/p7/P7/8 b - - 0 54,f7f6 g5h7 f6g6 h7f8,594,87,81,51,crushing endgame fork master masterVsMaster short,https://lichess.org/6fU3SQnv/black#108
Mm7Xd,5rk1/6pp/3pb3/p2Np3/1pP1P3/4KP2/P5PP/1R6 b - - 0 25,f8c8 d5e7 g8f7 e7c8,525,105,78,447,crushing endgame fork short,https://lichess.org/54ypHw2c/black#50
7KInJ,8/5p2/1p1k4/3n2p1/P5P1/3K4/6P1/5B2 w - - 7 54,d3c4 d5e3 c4d3 e3f1,576,99,89,490,crushing endgame fork master short,https://lichess.org/lxihXUAB#107
Cmgsm,8/8/1k4p1/p1bp3p/5N1P/4PP2/2K3P1/8 b - - 2 46,c5e3 f4d5 b6c5 d5e3,598,87,83,195,crushing endgame fork master short,https://lichess.org/AtLkwlHE/black#92
IziKN,8/pp4p1/2pk1n1p/8/1P1P2P1/2P1R3/5P1K/8 w - - 3 43,f2f4 f6g4 h2g3 g4e3,599,114,58,62,crushing endgame fork short,https://lichess.org/yznf33fR#85
SJBMU,8/p7/Pp3k1n/8/5p2/3P4/5KR1/8 w - - 0 45,g2h2 h6g4 f2f3 g4h2,544,85,100,600,crushing endgame fork master short,https://lichess.org/pCRDoN8u#89
enJXs,8/5pkp/3p2p1/3Pp3/3nP1P1/7P/2p2PB1/1R4K1 w - - 0 39,b1c1 d4e2 g1h2 e2c1,527,98,80,234,crushing endgame fork short,https://lichess.org/CtboYQ7R#77
5fFj4,8/8/p3b3/2k1Pp1p/2p2Pp1/P3K1P1/4N3/8 b - - 3 51,c5b5 e2d4 b5c5 d4e6,596,79,83,148,crushing endgame fork master short,https://lichess.org/IyjmhFiS/black#102
gR5b4,8/1R1K1pk1/6p1/5n1p/5P1b/1B5P/8/8 w - - 13 64,d7e8 f5d6 e8d7 d6b7,541,100,96,970,crushing endgame fork master short,https://lichess.org/RxiE9i7Y#127
cAHNn,6k1/1p3pp1/7p/p3p3/Pn1p4/1P3P1P/1P1Q1KP1/4q3 w - - 0 27,d2e1 b4d3 f2e2 d3e1,582,87,81,89,advantage endgame fork short,https://lichess.org/ia90D3b3#53
5NAKs,8/3kbpp1/r6p/2R5/3p4/1N5P/5PP1/6K1 b - - 0 39,e7c5 b3c5 d7c6 c5a6,598,118,57,40,advantage endgame fork short,https://lichess.org/rj6Lf1K6/black#78`,
  },
];
