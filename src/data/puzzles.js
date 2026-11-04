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
  {
    id: 'discovered', title: 'Вскрытые нападения', short: 'Вскрытое нападение',
    // task_discovered600.csv — discovered attacks, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
2qpnC,rn2kb1r/ppp1qppp/5n2/3b4/2P5/8/PP2QPPP/RNB1KBNR b KQkq - 1 7,d5c4 e2e7 f8e7 f1c4,576,97,72,241,crushing discoveredAttack master opening short,https://lichess.org/19pzCFBi/black#14
pgtG1,r3qr2/1pp4k/pbnpp2p/4p1p1/PP2P1N1/2PP2KP/5PP1/RN1Q1R2 b - - 0 17,e8h5 g4f6 f8f6 d1h5,522,87,52,128,crushing discoveredAttack middlegame short,https://lichess.org/vu3MSiEc/black#34
c7d67,rnb1kbr1/ppp3pp/8/3p2q1/4p1N1/7P/PPPP1PP1/RNBQK2R b KQq - 0 7,g5h5 g4f6 g7f6 d1h5,593,92,74,223,crushing discoveredAttack opening short,https://lichess.org/nlArSawW/black#14
6upzN,3rb2k/np4nr/pNp1p3/2Pp1p2/P2P1P1q/4P1RP/1P3QP1/R3B1K1 b - - 4 26,g7h5 g3g8 h8g8 f2h4,561,83,80,100,advantage discoveredAttack middlegame short,https://lichess.org/dDmikCU0/black#52
SPSJ3,rnb1k2r/pp4pp/2p2p2/4q3/1b2Q3/2NB4/PPPB1PPP/R3K2R b KQkq - 3 11,c8f5 e4e5 f6e5 d3f5,563,93,83,626,crushing discoveredAttack middlegame short,https://lichess.org/gcKISv2S/black#22
FcYzT,4k1nr/1p1q1pbp/p1r1p1p1/3pP3/Q2P4/4BN2/PP3PPP/R4RK1 w k - 0 14,f1c1 c6c1 a1c1 d7a4,576,100,100,348,advantage discoveredAttack middlegame short,https://lichess.org/6hCWBvPH#27
pR8cs,r3k2r/pp1nnppp/4p3/q2p4/P2P4/2R1P3/2PQ1PPP/1N2K1NR b Kkq - 1 12,d7b6 c3c8 a8c8 d2a5,597,101,81,543,advantage discoveredAttack middlegame short,https://lichess.org/mLTr2WJz/black#24
ltMBV,r1r3k1/3bbppp/p2p4/2qPp2n/P3P3/2R2P2/1PBQN1PP/1R5K b - - 0 20,c5a5 c3c8 a8c8 d2a5,594,85,81,123,advantage discoveredAttack middlegame short,https://lichess.org/VZhfPwQE/black#40
0ZD9b,rnb1k2r/pp3ppp/3p4/q2Pp3/8/P1R5/1P1Q1PPP/4KBNR b Kkq - 0 11,b8d7 c3c8 a8c8 d2a5,596,103,95,537,advantage discoveredAttack middlegame short,https://lichess.org/3Dvy0zFM/black#22
HLAUE,2r3k1/1br2ppp/p1n1p3/1p1pP1P1/3P4/P1RBPN2/P2K3P/2R5 w - - 0 21,d2e2 c6d4 f3d4 c7c3 c1c3 c8c3,517,95,85,337,crushing discoveredAttack long middlegame,https://lichess.org/1laYgUkb#41
PkWfO,r1r3k1/pp2ppbp/3p1np1/3P4/3B2PP/5P2/PPPR4/1K3B1R b - - 0 16,f6d5 d4g7 g8g7 d2d5,593,95,97,903,advantage discoveredAttack middlegame short,https://lichess.org/O8tTTLkT/black#32
BdPi9,r4rk1/2p2np1/p2p3p/1pb2n2/4RP2/2P4P/P1B2P2/R1B2NK1 b - - 0 21,a8e8 e4e8 f8e8 c2f5,582,97,78,332,crushing discoveredAttack master middlegame short,https://lichess.org/6lhpJL6r/black#42
62I1I,r6r/ppp2kpp/2n2b2/7q/8/1P3R2/P1PP1PPP/R1BQ2K1 b - - 0 14,c6e5 f3f6 g7f6 d1h5,549,85,72,210,crushing discoveredAttack middlegame short,https://lichess.org/znvA4Z4C/black#28
uOwTT,r3q1k1/p2r1pbp/2p3p1/1p2p3/1PQ5/P3B1P1/4PP1P/R2R2K1 w - - 0 22,c4c6 d7d1 a1d1 e8c6,502,93,85,293,crushing discoveredAttack middlegame short,https://lichess.org/Kd6IvOUM#43
dznbv,2rr2k1/pb3ppp/4p3/2bpP3/8/1PP2N1P/P1RN2P1/3R2K1 w - - 6 23,f3d4 c5d4 c3d4 c8c2,597,105,78,107,crushing discoveredAttack middlegame short,https://lichess.org/QfHRlRWG#45
KhPbM,5rk1/pb1r1pp1/1p2p2p/2p1P3/2P5/2PB1P2/P2R2PP/3R2K1 b - - 3 18,f8d8 d3h7 g8h7 d2d7 d8d7 d1d7,562,86,81,154,advantage discoveredAttack endgame long,https://lichess.org/qrcmxuhv/black#36
6bYF9,1r1r2k1/3q1pp1/np5p/p2RPp1P/P4P2/2NP1Q2/6P1/R5K1 b - - 0 30,d7c6 d5d8 b8d8 f3c6,514,97,80,148,crushing discoveredAttack middlegame short,https://lichess.org/s67FgNgW/black#60
eahnb,r1r3k1/3b1p1p/p3p1p1/P2p4/1q1P1P2/2R4P/1P1QN1P1/R6K b - - 2 24,d7b5 c3c8 a8c8 d2b4,593,103,84,380,crushing discoveredAttack master middlegame short,https://lichess.org/8oQ3v3Pz/black#48
iDHHP,2rr2k1/1p3ppp/1p2pn2/3p4/P2P4/1P3P2/2B2PPP/2RR2K1 b - - 0 21,c8c3 c2h7 g8h7 c1c3,574,87,64,124,advantage discoveredAttack endgame short,https://lichess.org/2xPYM200/black#42
fDBqv,4rrk1/ppp3pp/2p3q1/8/P2p4/1P1P1NP1/2P1RP2/R2Q3K b - - 0 22,f8f3 e2e8 g6e8 d1f3,539,94,100,209,advantage discoveredAttack endgame short,https://lichess.org/l6AczlxN/black#44
9QI18,r2r4/4k1pp/3bpp2/p1p5/1pP5/1P2PN1P/P4PP1/2RR2K1 w - - 0 20,d1d3 d6h2 g1h2 d8d3,577,98,71,82,advantage discoveredAttack endgame short,https://lichess.org/nlMpTqRb#39
UF4qp,2k2r1r/ppp3pp/3b4/3pp3/3P2q1/2P1PRB1/PP2Q1K1/7R b - - 0 23,e5e4 f3f8 d6f8 e2g4,574,84,100,223,crushing discoveredAttack middlegame short,https://lichess.org/G2pH3tsE/black#46
JCimP,r1b2qk1/p3r1pp/2pp4/5p2/2PQ1N2/PP1B4/1B4PP/2K4R w - - 2 20,d4d6 e7e1 h1e1 f8d6,526,105,85,915,advantage discoveredAttack middlegame short,https://lichess.org/AI4tMHN0#39
jPyXV,2qr2k1/p3bp1p/1p4p1/2p1Pp2/5P2/2PR4/PP2QP1P/2B3K1 b - - 1 25,c8a6 d3d8 e7d8 e2a6,522,98,78,118,crushing discoveredAttack endgame short,https://lichess.org/fQCVc28a/black#50
L7lii,3r1rk1/2q2ppp/3p4/p1BQb3/Pp6/1P3P2/2PR2PP/3R2K1 b - - 0 21,c7c5 d5c5 d6c5 d2d8,591,91,69,111,advantage discoveredAttack middlegame short,https://lichess.org/wu0wRwz9/black#42
3u8Dq,2r3k1/5p1p/1p2b1p1/p1bpPp2/P2N1P2/1RP5/1P4PP/5RK1 w - - 4 24,f1c1 c5d4 c3d4 c8c1,567,82,100,201,advantage discoveredAttack endgame short,https://lichess.org/gK3Dc1Lg#47
qEiNS,r2r2k1/2p2ppp/p4n2/2q1p3/P1N1P3/2PR3P/4QPP1/R5K1 b - - 0 19,c5c4 d3d8 a8d8 e2c4,536,99,82,499,crushing discoveredAttack middlegame short,https://lichess.org/rmf693gY/black#38
zIwa1,2r5/2p5/3p1rkp/pp1P1p2/3PpQPq/P1P1P3/1P3RK1/5R2 b - - 2 31,h4g4 f4g4 f5g4 f2f6,574,100,86,294,crushing discoveredAttack endgame short,https://lichess.org/qmvUROmA/black#62
43mpY,3rr1k1/p5pp/1p3p2/2pn4/4p3/PP1PPNP1/2R2P1P/3R1K2 w - - 0 28,d3e4 d5e3 f2e3 d8d1,583,91,81,295,advantage discoveredAttack endgame master short,https://lichess.org/6CbORU8l#55
vbMyR,r3r1k1/5ppp/p7/1p1p4/3P4/2P2P1b/PP1KRq2/RN1Q4 b - - 1 23,f2f3 e2e8 a8e8 d1f3,573,104,69,138,crushing discoveredAttack middlegame short,https://lichess.org/Z7kCSlV2/black#46
1lmqi,2r3k1/1p2rp1p/p1n3p1/4B2b/1PB5/PN4P1/5P1P/2R2RK1 b - - 0 26,c6e5 c4f7 g8f7 c1c8,590,97,83,171,advantage discoveredAttack master masterVsMaster middlegame short,https://lichess.org/LMXEwl6J/black#52
034Pi,r4rk1/pb3pp1/1p5p/2p5/2Rq4/3B3P/PP3PP1/3QR1K1 b - - 1 18,d4d7 d3h7 g8h7 d1d7,598,133,33,14,advantage discoveredAttack middlegame short,https://lichess.org/B4kfJe5A/black#36
QsgDh,r5k1/ppp2p2/3p2qp/3P2p1/4r3/2P5/P1Q2PPB/R4RK1 w - - 0 24,f1e1 e4e1 a1e1 g6c2,517,99,100,279,crushing discoveredAttack middlegame short,https://lichess.org/u3B9HN8F#47
XN3Fv,7r/pQr1k1pp/4pn2/2q1p3/4P1PP/2PB1N2/P7/2R1K2R w K - 1 22,b7b4 c5b4 c3b4 c7c1,456,105,89,823,crushing discoveredAttack middlegame short,https://lichess.org/sMaMbLFG#43
CLcGb,r1b3k1/1p1r1p2/2p3pp/p7/8/2P3P1/P1P1PPBP/3RR1K1 w - - 0 16,g2h3 d7d1 e1d1 c8h3,564,93,93,883,crushing discoveredAttack endgame short,https://lichess.org/1eQE8HjZ#31
zdAwC,r3k2r/pp3ppp/4p3/8/3pqb2/5Q1P/PPP3K1/R4RN1 b kq - 1 22,f7f5 f3e4 f5e4 f1f4,552,97,85,184,advantage capturingDefender discoveredAttack middlegame short,https://lichess.org/3fkLZ6qa/black#44
ohqpp,4r3/p4k1p/1p2n1pB/2p2p2/2Pp1P1b/1P1P4/P5KP/4RR2 w - - 1 29,e1e2 e6f4 h6f4 e8e2,490,98,85,338,crushing discoveredAttack endgame master short,https://lichess.org/x3PYJqi6#57
PrsCL,1r4k1/p5bp/2p3p1/4p3/NqbpP3/1P1Q3P/P2B2P1/1R4K1 w - - 0 27,d3c4 b4c4 b3c4 b8b1,593,97,85,529,crushing discoveredAttack middlegame short,https://lichess.org/dcxApE0F#53
upWO5,5rk1/pprb1p1p/3pP1p1/8/2B1PP2/8/PP3KPP/R1R5 b - - 0 20,f7e6 c4e6 d7e6 c1c7,507,94,77,200,advantage discoveredAttack endgame master short,https://lichess.org/VG6XvADn/black#40
HtCyF,2kr4/2p2ppp/p1pb4/2n1p3/2N5/2P1BP2/PP4PP/3R2K1 w - - 1 18,e3c5 d6c5 g1f1 d8d1,558,90,100,170,crushing discoveredAttack endgame short,https://lichess.org/pojvd8zw#35
N9hro,r3rk2/2p1npp1/p7/1p1p2q1/1P1P4/2P1R3/PB1Q1P2/R4K2 b - - 9 29,e7f5 e3e8 a8e8 d2g5,581,86,53,51,advantage discoveredAttack middlegame short,https://lichess.org/imjCUzcr/black#58
vevkr,2r5/1p2kp2/p3p2p/3pP1p1/1P6/P1nBP2P/5PP1/5RK1 w - - 2 23,f1c1 c3e2 d3e2 c8c1,576,99,96,937,crushing discoveredAttack endgame short,https://lichess.org/f0CGdT0w#45
Yc8xG,1r4k1/5ppp/4p3/3p4/1qpP1PP1/2n1PN2/1PQ4P/1R4K1 w - - 4 29,c2c3 b4c3 b2c3 b8b1,599,97,84,479,crushing discoveredAttack endgame short,https://lichess.org/jApVhOe4#57
6U5Cg,1r1q2k1/5ppp/8/1pRp4/pQ1P4/P3BP2/1P2rP1P/6K1 b - - 0 23,d8e7 c5c8 b8c8 b4e7,536,95,87,390,crushing discoveredAttack endgame short,https://lichess.org/xp5VAmRj/black#46
VbFw0,6k1/1p1rbppp/1p2p1b1/8/3N4/2P5/PP2BPPP/3R2K1 b - - 3 22,g8f8 d4e6 f7e6 d1d7,522,91,79,359,crushing discoveredAttack endgame master short,https://lichess.org/xuZpnDGX/black#44
3YHeA,1k6/ppq3p1/3r1p2/2p4p/7P/2N1n1Q1/PPP2PP1/R5K1 w - - 0 22,f2e3 d6d1 a1d1 c7g3,513,99,100,158,advantage discoveredAttack endgame short,https://lichess.org/LTuElTGF#43
w5YER,rnr5/pp3Nkp/5pp1/2b5/8/1PB1PR2/P5PP/R5K1 w - - 1 24,f3f6 c5e3 g1h1 c8c3,550,105,95,977,advantage discoveredAttack master middlegame short,https://lichess.org/jQixtMQB#47
QBpzR,r2r1k2/1p4pp/2pq1p2/2Q5/p2P4/P6P/1P3PP1/3RR1K1 w - - 3 27,e1e3 d6c5 d4c5 d8d1,535,106,90,552,crushing discoveredAttack endgame short,https://lichess.org/17TopcA0#53
rUV2Z,r3k3/2q2p2/p5p1/1p1pPpP1/2nP1B2/2P2P2/P4Q2/R4K2 b q - 5 25,e8d7 e5e6 f7e6 f4c7,547,95,87,185,crushing discoveredAttack endgame short,https://lichess.org/YfG4a3gC/black#50
GPt9G,6k1/1q3p1p/p1b3p1/1p1rQ3/4p3/P5P1/1PP1NP1P/2R3K1 w - - 0 32,e5e4 d5d1 c1d1 c6e4,549,108,92,267,crushing discoveredAttack endgame short,https://lichess.org/1pE9u4XD#63
mY24e,6k1/6pp/p2p1r1r/1p6/3qb3/1P2RPP1/P4QKP/4N1R1 b - - 1 29,e4c6 e3e8 c6e8 f2d4,400,109,86,351,advantage discoveredAttack middlegame short,https://lichess.org/ch2gcJGu/black#58
u1bIg,1q2n2k/pp5p/3r1r2/1P2Qp2/P3p3/1B4P1/5PP1/R2R2K1 w - - 0 36,b3f7 d6d1 a1d1 b8e5,473,104,93,397,crushing discoveredAttack master masterVsMaster middlegame short,https://lichess.org/lJwSqUdZ#71
Vmcyk,2k5/2pq4/4r3/p1pp1Q2/P3P1p1/2PP2Pp/5P1P/R3R1K1 w - - 1 34,e4d5 e6e1 a1e1 d7f5,562,101,91,997,crushing discoveredAttack endgame short,https://lichess.org/pOZMQdMX#67
KGr3H,4rk2/1bp2pp1/p3n2p/1p6/3N4/1PP1N2P/1P3PP1/3R2K1 b - - 5 24,e8d8 d4e6 f7e6 d1d8,583,105,82,728,crushing discoveredAttack endgame short,https://lichess.org/gUrqDyVb/black#48
b729F,r1r3k1/p3bpp1/1p5p/3p4/8/2n1PB2/2QN1PPP/4K2R w K - 0 23,e1g1 c3e2 f3e2 c8c2,599,87,97,411,crushing discoveredAttack middlegame short,https://lichess.org/nr0fX3pV#45
9x6x1,r2r2k1/p4pp1/1p2pn1p/8/3N4/2P2P2/PP1R2PP/3R2K1 b - - 4 23,g8f8 d4e6 f7e6 d2d8 a8d8 d1d8,561,87,55,124,advantage discoveredAttack endgame long,https://lichess.org/QrCOiKdh/black#46
WV4r3,3r2k1/pb3pp1/1p2pn1p/8/3N4/2P2P1P/PPB3P1/3R2K1 b - - 0 25,g8f8 d4e6 f7e6 d1d8,556,96,88,1012,crushing discoveredAttack endgame short,https://lichess.org/Fqc0yCZ9/black#50
cZa2c,6k1/pbq2p1p/3r2p1/2p1r3/8/1PQ2B1P/P4PP1/2RR2K1 w - - 0 25,c3e5 d6d1 c1d1 c7e5,588,94,85,343,advantage discoveredAttack middlegame short,https://lichess.org/dOrVwJOh#49
BF1Rt,3r1rk1/2q4p/3p2p1/pp3p2/3Q1P2/P1PR4/1P4PP/3R2K1 b - - 4 27,c7c5 d4c5 d6c5 d3d8 f8d8 d1d8,578,100,88,511,crushing discoveredAttack endgame long,https://lichess.org/N4JirMwi/black#54
z3trd,3r2k1/5ppp/4p3/pp1bP3/5P2/PPPp3P/B2R2P1/7K w - - 0 27,d2d3 d5g2 h1g2 d8d3,588,99,73,99,crushing discoveredAttack endgame short,https://lichess.org/MDTRbfzE#53
N2ukl,6k1/1p3p1p/p1b1pp2/2b5/P7/1P1rPP2/6PP/RB3NK1 b - - 4 23,d3d1 b1h7 g8h7 a1d1,574,83,100,358,advantage discoveredAttack endgame short,https://lichess.org/xBgy9ukZ/black#46
XiKbv,2rr1k2/p4ppp/1p2pn2/8/3NP3/3R1P2/PP4PP/3R3K b - - 2 25,g7g6 d4e6 f7e6 d3d8 c8d8 d1d8,594,103,91,704,crushing discoveredAttack endgame long,https://lichess.org/zgb62WLT/black#50
ofvrQ,2N3k1/2rp1pp1/p3p2p/1p2P3/3n4/P6P/1PB2PPK/2R5 b - - 0 25,c7c8 c2h7 g8h7 c1c8,468,105,95,283,advantage discoveredAttack endgame short,https://lichess.org/mHjlLSjE/black#50
t8Ubr,3r1k2/1p3ppp/p3pn2/2n5/1PPN1P2/6P1/P3N2P/3R2K1 b - - 0 30,c5e4 d4e6 f7e6 d1d8,532,98,83,1284,crushing discoveredAttack endgame short,https://lichess.org/szajhfjd/black#60
66qzc,r3r1k1/5ppb/pq2p2p/2RpP3/3Q4/7P/3N1PP1/R5K1 b - - 2 28,e8c8 c5c8 a8c8 d4b6,591,94,86,124,advantage discoveredAttack middlegame short,https://lichess.org/jLCXJ0k7/black#56
w121a,2b3k1/2q2pp1/2prp2p/2N5/2P1Q1P1/1P5P/P4P2/R5K1 w - - 0 26,e4f4 d6d1 a1d1 c7f4,553,91,96,194,advantage discoveredAttack endgame short,https://lichess.org/PcOuDoac#51
PiKAs,2r3k1/1Nb2ppp/4p3/p2p4/3P4/4nP2/PP3P1P/2R3K1 w - - 0 26,f2e3 c7h2 g1h2 c8c1,553,99,92,1265,crushing discoveredAttack endgame short,https://lichess.org/zV4B7OXs#51
3D5kT,r6k/2p2pp1/3p1q1p/1pp5/1P2R3/2P4P/P1Q2PP1/6K1 b - - 0 26,f6f5 e4e8 a8e8 c2f5,534,107,90,905,advantage discoveredAttack endgame short,https://lichess.org/gfbS4xvJ/black#52
Fogs4,r4rk1/5ppp/p1p5/5q2/3PRP2/1P1Q1P2/PB5P/6K1 b - - 0 26,f8e8 e4e8 a8e8 d3f5,585,103,79,676,crushing discoveredAttack endgame short,https://lichess.org/LIX3civT/black#52
1Thij,3q2k1/2r2p1p/1n2b1p1/1B1p4/P2Q4/4P3/4NPPP/2R3K1 w - - 1 31,d4b6 c7c1 e2c1 d8b6,531,84,86,102,advantage discoveredAttack middlegame short,https://lichess.org/1GkT4cEh#61
1SaEu,2r3k1/p4ppp/1p2pB2/3b4/1P6/P3P2P/2B2PP1/2R3K1 b - - 0 23,g7f6 c2h7 g8h7 c1c8,558,93,81,278,crushing discoveredAttack endgame short,https://lichess.org/3HR2RLyK/black#46
R9i7s,r5k1/1pp2ppp/1p2b3/4p3/8/P2B4/1PP2PPP/3R2K1 b - - 2 19,a8d8 d3h7 g8h7 d1d8,570,99,87,603,advantage discoveredAttack endgame short,https://lichess.org/7cqYELnX/black#38
183mv,r4rk1/pp3ppp/3q4/4R3/5B2/3b1N2/PP3PPK/Q7 b - - 0 21,f8e8 e5e8 a8e8 f4d6,577,98,79,325,crushing discoveredAttack middlegame short,https://lichess.org/MQ7VipqR/black#42
PeRob,8/p5pk/1p1p3p/3P1q2/2p1rp2/P1PQ1R1P/5BP1/6K1 w - - 0 31,d3c2 e4e1 f2e1 f5c2,597,85,85,301,advantage discoveredAttack endgame short,https://lichess.org/YwNRUBVO#61
jDG5P,3n3r/ppk5/5p1b/4p2p/4P3/5BP1/PPPN3P/2K1R3 w - - 2 24,f3h5 h6d2 c1d2 h8h5,557,95,85,334,advantage discoveredAttack endgame short,https://lichess.org/5sdXJ7Bw#47
Q5FKS,1n1q4/7k/3p1bp1/4r2p/1pPNQ3/1P4P1/5PBP/4R1K1 w - - 2 29,e4b1 e5e1 b1e1 f6d4,598,99,84,504,advantage discoveredAttack middlegame short,https://lichess.org/vfHfa33e#57
58Sic,3r4/p2r2kp/Pp1b1pp1/3n4/8/3R1PBP/5P1K/3R1B2 w - - 8 34,d3d5 d6g3 f2g3 d7d5,582,87,84,265,advantage discoveredAttack master middlegame short,https://lichess.org/BoGaom4y#67
wIPoR,5r2/ppk2Pp1/2pn3p/3p4/3P1B2/2P5/P1P3PP/5RK1 b - - 3 25,f8f7 f4d6 c7d6 f1f7,550,91,82,334,crushing discoveredAttack endgame short,https://lichess.org/ZNYWfZnM/black#50
Bb6HG,r2r2k1/1pp2ppp/2b5/p7/8/2PB1P2/2PR2PP/2KR4 b - - 1 19,a5a4 d3h7 g8h7 d2d8,542,106,94,1922,advantage discoveredAttack endgame short,https://lichess.org/bIhCg4eM/black#38
tsK4r,r5k1/p4q1p/1p1Qr1p1/2P2p2/3B4/7R/P4PPP/R5K1 w - - 1 24,d6d5 e6e1 a1e1 f7d5,584,96,82,200,advantage discoveredAttack middlegame short,https://lichess.org/AU2LTIFd#47
VT65f,1r1q2k1/1p4p1/p1p1p3/P1Pp2r1/3P3Q/8/2P4N/1R2R1K1 w - - 0 33,g1h1 g5g1 e1g1 d8h4,548,94,97,879,crushing discoveredAttack middlegame short,https://lichess.org/lUXJCjAH#65
9mW53,6k1/pp1q1p2/2p4p/3p1rp1/5BQ1/1PP5/1P4PP/R5K1 w - - 0 28,f4d2 f5f1 a1f1 d7g4,517,94,100,520,advantage discoveredAttack endgame short,https://lichess.org/p9Nbei26#55
rREFX,3r2k1/5p1p/5p2/1p1Bp3/p2nP3/3R1P1P/PPP2P2/6K1 b - - 1 23,d4c2 d5f7 g8f7 d3d8,536,87,32,175,advantage discoveredAttack endgame short,https://lichess.org/04dJPKQY/black#46
Tc6M7,3r2k1/1p1r4/p2Pn3/P2B1p1p/1p3Pp1/8/3R1P1P/3R2K1 b - - 4 36,d7d6 d5e6 d6e6 d2d8,471,112,84,1140,crushing discoveredAttack endgame short,https://lichess.org/HDhRpw9q/black#72
PZIhV,3r2k1/p2b1ppp/2p1p3/1p6/8/3BP3/PP2KPPP/3R4 b - - 3 20,d7e8 d3h7 g8f8 d1d8,569,104,81,534,crushing discoveredAttack endgame short,https://lichess.org/M7jHHoAt/black#40
gA50C,1r4k1/p1r2pp1/2P4p/1P1p4/P2P2P1/3KRp2/3Q1P1q/8 b - - 1 37,h2f4 e3e8 b8e8 d2f4,554,106,88,883,crushing discoveredAttack endgame master short,https://lichess.org/mPQHCX2X/black#74
pNt1N,r7/1b3kp1/p3q3/1p3R2/1P5p/Q1Pn1PPB/P6P/6K1 b - - 0 30,f7g8 f5f8 a8f8 h3e6,573,97,79,371,advantage discoveredAttack master masterVsMaster middlegame short,https://lichess.org/CFIjbjCQ/black#60
BCFt3,8/2p1kP2/1pP5/pP2p1p1/P4pP1/5P1b/3rBR1P/7K b - - 2 34,e7f7 e2c4 f7f6 f2d2,593,84,100,378,crushing discoveredAttack endgame short,https://lichess.org/YqFmrUVa/black#68
eNVbu,3r2k1/1p1P1pp1/4qb2/3Q3P/p7/P6P/KP1RB3/N1r5 b - - 2 32,d8d7 d5e6 f7e6 d2d7,550,101,89,1886,advantage capturingDefender discoveredAttack master middlegame short,https://lichess.org/tkG4l4DC/black#64
4aRoe,r5k1/5pb1/4p2p/1p5P/2pP1Bq1/2P3R1/1r4PQ/4R1K1 b - - 1 32,g4f4 g3g7 g8g7 h2f4,557,86,74,134,crushing discoveredAttack master middlegame short,https://lichess.org/tWOuGD5e/black#64
P7lA2,r5k1/6pp/b4p2/2R1p3/p2pP3/P2P4/1P3PPP/4NK2 w - - 0 27,c5a5 a6d3 e1d3 a8a5,448,92,78,195,advantage discoveredAttack endgame short,https://lichess.org/iV4jJWxD#53
oAfUl,r7/1p5p/p2p2pk/4b3/P3P3/4q2P/1Pn1NQB1/5RK1 b - - 3 31,a8f8 f2e3 c2e3 f1f8,565,95,83,586,crushing discoveredAttack master middlegame short,https://lichess.org/JhE3e5n9/black#62
lfCVM,3br1k1/p6p/1p2n1pB/5p2/1P2RP2/P1P4P/2B2PK1/8 w - - 0 26,e4e2 e6f4 h6f4 e8e2,530,103,89,288,advantage discoveredAttack endgame short,https://lichess.org/1Gmncds5#51
FFuhr,r2r2k1/pp2Bpb1/6p1/3B3p/5P2/1P6/P4PPP/3R2K1 b - - 2 25,d8d7 d5f7 g8f7 d1d7,533,85,100,289,advantage discoveredAttack endgame short,https://lichess.org/6D2kyiqr/black#50
6kkuP,3r4/5pkp/3bp1p1/pBp5/2P5/1P6/P4PPP/4R1K1 w - - 1 28,e1d1 d6h2 g1h2 d8d1,558,100,95,1338,crushing discoveredAttack endgame short,https://lichess.org/ej7c3Geh#55
2khCd,r5k1/2p2p2/p4p1p/1p2b3/4N3/8/PPP2PPP/4R1K1 b - - 2 21,a8e8 e4f6 e5f6 e1e8,579,103,82,263,crushing discoveredAttack endgame short,https://lichess.org/cZxZ7F7j/black#42
VcanA,1r5k/p1pb2pp/7q/5B2/1PPp1Q2/P2P4/4P3/2K2R2 b - - 0 26,d7f5 f4h6 g7h6 f1f5,510,93,87,301,advantage discoveredAttack endgame short,https://lichess.org/xEwZpqaN/black#52
tlKKI,3r4/pp4kp/2p2pp1/4r3/8/2P1N1PP/PP3P2/4R1K1 b - - 0 27,e5e7 e3f5 g6f5 e1e7,448,93,83,174,advantage discoveredAttack endgame short,https://lichess.org/MDeE3m0t/black#54
pc8hc,6k1/p1r2pp1/1p2pb1p/8/1P6/3BPP2/P2R2PP/6K1 b - - 0 29,c7d7 d3h7 g8h7 d2d7,594,95,93,259,advantage discoveredAttack endgame master short,https://lichess.org/RFoS4MRv/black#58
HLHma,1r4k1/5pp1/4p1p1/3p2Pn/1q1P3P/2R5/2PQNP2/4K3 b - - 3 31,b8a8 c3c8 a8c8 d2b4,432,92,77,331,advantage discoveredAttack endgame short,https://lichess.org/yVIaHsbK/black#62
iV8cI,3r3k/pp2Nppn/2p4p/8/8/7P/PPP1RPP1/6K1 b - - 1 21,d8e8 e7g6 f7g6 e2e8,589,83,100,296,crushing discoveredAttack endgame short,https://lichess.org/g7tY9mVE/black#42
1ct8h,4k3/pp1r3p/5p2/2pB1p2/2Pb4/1P6/P4PPP/3R2K1 w - - 0 26,d5e6 d4f2 g1f2 d7d1,565,87,97,718,advantage discoveredAttack endgame short,https://lichess.org/gY1OChhb#51
1BhAe,4r2k/pp2Np1p/5bp1/1b6/P7/1P4N1/5PPP/4R1K1 b - - 0 28,b5a6 e7g6 h7g6 e1e8,562,85,88,379,advantage discoveredAttack endgame short,https://lichess.org/aFC3kLuz/black#56
V5jua,3r2k1/pp3pbp/2p3p1/8/4N3/2P2P2/PP3PKP/4R3 b - - 3 26,d8e8 e4f6 g7f6 e1e8,596,83,95,256,crushing discoveredAttack endgame short,https://lichess.org/0FCY6zpv/black#52
v7nkY,2r3k1/pp2pp1p/5bp1/1PP5/P1B5/4PP1P/4K3/2R5 b - - 0 22,c8c5 c4f7 g8f7 c1c5,505,96,86,246,advantage discoveredAttack endgame short,https://lichess.org/ia6dejAR/black#44
7qew2,3r2k1/pp3p1p/2b1pp2/8/8/3B4/PPP2PPP/3R2K1 b - - 0 22,e6e5 d3h7 g8h7 d1d8,499,96,95,245,advantage discoveredAttack endgame short,https://lichess.org/zAIBJTSE/black#44
BisRl,3r2k1/p4ppp/1pn5/3Bp3/4P3/5P2/PP4PP/3R2K1 b - - 0 22,c6b4 d5f7 g8f7 d1d8,539,96,70,253,crushing discoveredAttack endgame short,https://lichess.org/Z9kWrR2Q/black#44
TnOa7,2r2k2/p1n2ppp/1q2p3/8/1PQ1P3/P4P2/6PP/2R2K2 b - - 0 25,b6a6 c4a6 c7a6 c1c8,550,99,87,197,capturingDefender crushing discoveredAttack endgame short,https://lichess.org/rpkS3N8C/black#50
V9LaI,3r2k1/pp3ppp/2p1b3/8/8/1P1BP3/P4PPP/3R2K1 b - - 0 22,a7a5 d3h7 g8h7 d1d8,436,104,93,246,advantage discoveredAttack endgame short,https://lichess.org/gwAqVpdR/black#44
aezLv,3r2k1/p4p1p/2p2p2/4p3/3bP3/6N1/PP3PPP/3R2K1 w - - 0 21,g3f5 d4f2 g1f2 d8d1,569,102,75,32,crushing discoveredAttack endgame short,https://lichess.org/nJWv3iE5#41
hmLON,8/p5pk/r4b2/1p1Bp1n1/4P3/P1P3P1/1P3P1P/3R1K2 b - - 0 34,a6d6 d5g8 h7g8 d1d6,529,105,94,675,crushing discoveredAttack endgame short,https://lichess.org/rU1ZIKz9/black#68
sIkJ5,3r2k1/p1p2ppp/2p5/8/3bP3/5PP1/P3PN1P/5RK1 w - - 2 24,f1d1 d4f2 g1f2 d8d1,587,106,84,425,crushing discoveredAttack endgame short,https://lichess.org/8WeTXAlF#47
tzhzP,2r3k1/p1r2pp1/7p/1pb5/4PP2/2R1B3/1P1R2PP/6K1 w - - 0 31,d2c2 c5e3 c3e3 c7c2,508,94,85,173,crushing discoveredAttack endgame short,https://lichess.org/AuhKbj2v#61
XF9CO,4r3/1p3pkp/p5p1/5p2/3n4/P3N3/1PP2PPP/4RK2 b - - 0 23,f5f4 e3f5 d4f5 e1e8,565,91,60,270,advantage discoveredAttack endgame short,https://lichess.org/beuPHMtx/black#46
eXCNa,r1b2rk1/pp3p1p/5p2/8/8/3B4/PP1R1PPP/5RK1 b - - 2 17,f8d8 d3h7 g8h7 d2d8,584,98,85,1014,crushing discoveredAttack endgame short,https://lichess.org/MUYCNx9I/black#34
T9yk4,3r2k1/1p3p1p/p5pb/8/3Np3/2P1P2P/PP3KP1/3R4 b - - 0 28,g8f8 d4e6 f7e6 d1d8,507,96,79,164,crushing discoveredAttack endgame short,https://lichess.org/G8096Uw8/black#56
41ttM,3q1k2/1pr1r3/8/p2p3p/PQ6/2P4P/1P3PP1/R3R1K1 w - - 0 28,b4h4 e7e1 a1e1 d8h4,570,93,78,252,crushing discoveredAttack endgame short,https://lichess.org/lMNw0LBQ#55
FE7mw,8/pp3prk/2pp2qp/5Q2/2P1P3/4P3/PPP5/5R1K w - - 2 28,f1g1 g6f5 e4f5 g7g1,595,87,81,153,crushing discoveredAttack endgame short,https://lichess.org/YEiSMht2#55
zHxQ6,6k1/pp2rp2/2p2p1p/2b5/8/3B3P/PPP2PP1/3R2K1 b - - 1 24,e7d7 d3h7 g8h7 d1d7,565,90,78,129,advantage discoveredAttack endgame master short,https://lichess.org/sldoJux3/black#48
dOjgB,3r2k1/5pb1/p2Np2p/1p4p1/2p5/P1PB4/1P3P2/3RK3 b - - 0 31,d8d6 d3h7 g8h7 d1d6,547,89,100,467,advantage discoveredAttack endgame master short,https://lichess.org/4whVUxSM/black#62
mBVut,3r4/p2r2k1/1p3pp1/7p/3n4/P6P/1P3PPK/1B1RR3 w - - 0 26,h3h4 d4f3 g2f3 d7d1 e1d1 d8d1,555,101,84,278,advantage discoveredAttack endgame long,https://lichess.org/BMy39Nud#51
wuoRN,6k1/2nr2pp/4pp2/1p6/1P1N1P2/2PR3P/r5PK/3R4 b - - 2 28,g8f8 d4e6 c7e6 d3d7,594,99,95,1250,crushing discoveredAttack endgame short,https://lichess.org/RgBnNsSp/black#56
oJoDy,3r2k1/p2b1p1p/4pp2/1p6/1P6/P2BP3/5PPP/3R2K1 b - - 0 20,d7c6 d3h7 g8h7 d1d8,576,84,82,179,crushing discoveredAttack endgame master short,https://lichess.org/1MfVMqIE/black#40
fR0Wc,6k1/ppq3pp/2p5/3pr1Q1/8/2P5/PP1N2PP/R5K1 w - - 0 21,g5f4 e5e1 a1e1 c7f4,494,97,90,345,advantage discoveredAttack endgame short,https://lichess.org/YU1nHHuu#41
dWgwu,3r2k1/1B3ppp/4bn2/p7/1p1N4/4PPP1/1P3K1P/3R4 b - - 0 24,g8f8 d4e6 f7e6 d1d8,569,100,70,230,crushing discoveredAttack endgame short,https://lichess.org/oeOvzvyO/black#48
6MrN8,3r2k1/1q2P2p/3b1pp1/1p1R4/1Pp2P2/P4QPP/6K1/8 b - - 0 41,d6e7 d5d8 e7d8 f3b7,531,102,92,273,crushing discoveredAttack endgame short,https://lichess.org/bwBd3mm3/black#82
qLWLd,3r1rk1/8/p7/1pp1Npp1/8/4PP2/PPRn2P1/4R1K1 w - - 1 29,e1d1 d2f3 e5f3 d8d1,571,89,67,118,advantage discoveredAttack endgame short,https://lichess.org/ngJ8ZQby#57
G8hsB,3r2k1/np3ppp/p7/3Pp3/8/3B4/PPP3PP/3R2K1 b - - 0 23,d8d5 d3h7 g8h7 d1d5,561,93,85,704,crushing discoveredAttack endgame short,https://lichess.org/d3FfCHY6/black#46
rNJWl,8/6k1/2p3pb/3p3p/Pp1Prr1P/1P2NPK1/4R3/3R4 b - - 0 42,e4e7 e3f5 f4f5 e2e7,599,90,98,2004,crushing discoveredAttack endgame short,https://lichess.org/jrMwdpy1/black#84
gJPrn,6k1/pp3p2/2r1pn1p/6p1/2P5/1P1B2P1/P4PP1/3R2K1 b - - 0 25,c6d6 d3h7 g8h7 d1d6,553,97,83,295,advantage discoveredAttack endgame short,https://lichess.org/DydRkAO4/black#50
LjRLU,5rk1/b5p1/p1p4p/2p5/2P1Nr2/7P/PP2RPK1/5R2 b - - 1 29,f8e8 e4f6 f4f6 e2e8,522,100,81,753,crushing discoveredAttack endgame short,https://lichess.org/GxNAssya/black#58
jqQBr,r1b4k/pp1r3p/2p2p2/8/2P5/3BP2P/5PP1/1R1R2K1 w - - 0 25,d3f5 d7d1 b1d1 c8f5,412,104,83,152,advantage discoveredAttack endgame short,https://lichess.org/1fonm0yl#49
rVj6O,r5k1/pp3rpp/1b1q4/3R4/8/1Q6/PP3PPP/5RK1 b - - 0 23,d6e6 d5d8 a8d8 b3e6,586,86,82,167,advantage discoveredAttack middlegame short,https://lichess.org/xTz7Wq6x/black#46
OTgwo,3r2k1/p2r1p1p/6p1/2p5/3b4/6B1/PP1R1PPP/5RK1 w - - 0 24,f1d1 d4f2 g3f2 d7d2,555,86,100,178,advantage discoveredAttack endgame short,https://lichess.org/uZOCGksv#47
qQhJl,4r2k/1p4p1/1p4qp/1P3R2/P2P1pP1/2PQ1P2/3n4/7K b - - 2 41,d2b3 f5f8 e8f8 d3g6,582,92,77,189,crushing discoveredAttack endgame short,https://lichess.org/v10JXC1H/black#82
9TIcj,r3n1k1/ppp3bp/3p4/3P4/6q1/5N2/P3RP2/2RQ1K2 b - - 0 24,g4f3 e2e8 a8e8 d1f3,480,88,71,207,crushing discoveredAttack middlegame short,https://lichess.org/NqegNTrV/black#48
qduKK,3r1k2/p2r1pb1/4p1p1/3n2P1/7P/1P1R4/P1N2B2/3R2K1 w - - 1 36,g1f1 d5e3 f2e3 d7d3 d1d3 d8d3,559,92,84,525,crushing discoveredAttack long middlegame,https://lichess.org/WSNl7Ld9#71
7kubs,3r3k/7p/pp4p1/2p2p2/3b1P2/1P4P1/P4PBP/3R2K1 w - - 0 25,g2b7 d4f2 g1f2 d8d1,599,83,85,181,advantage discoveredAttack endgame master short,https://lichess.org/gedf8CaF#49
WJqcs,5rk1/p4pp1/b3p2p/2p1P3/2P5/P2B4/5PPP/3R2K1 b - - 0 20,f8d8 d3h7 g8h7 d1d8,559,97,73,259,advantage discoveredAttack endgame short,https://lichess.org/K9gPgGEx/black#40
rvowx,5qk1/2Q1rpp1/p5b1/1p5p/3B4/P6P/1P3PP1/2R3K1 w - - 5 34,c7d6 e7e1 c1e1 f8d6,571,89,80,176,crushing discoveredAttack endgame short,https://lichess.org/UfriNLts#67
d80lL,6k1/5p1p/p1r1p1p1/1p2P3/1P6/P1nB3P/5PP1/4R1K1 w - - 0 28,e1c1 c3e2 d3e2 c6c1,536,109,71,286,crushing discoveredAttack endgame short,https://lichess.org/OnoeyWho#55
aRCyq,5rk1/pp3ppp/2p5/8/5n2/P1PB1P2/1P1R2PP/7K b - - 2 24,f8d8 d3h7 g8h7 d2d8,585,107,80,680,crushing discoveredAttack endgame short,https://lichess.org/cqeseF6J/black#48
EqRXW,2k4r/1bp5/1p3q1p/5Rp1/3r4/7Q/P1P2PPP/R5K1 b - - 0 25,f6e6 f5f8 h8f8 h3e6,559,95,100,236,advantage discoveredAttack master middlegame short,https://lichess.org/fKxeuGJS/black#50
CdbQK,2r4k/1b3pp1/p6p/3pB3/2p5/P4P2/1PP3PP/4R1K1 b - - 1 26,c8e8 e5g7 h8g7 e1e8,532,99,90,1199,crushing discoveredAttack endgame short,https://lichess.org/SmPQt0pQ/black#52
Mcwh0,8/p2q1pkp/2p1r3/3p1p2/5Q2/8/PPP2PPP/R5K1 w - - 0 26,f4f5 e6e1 a1e1 d7f5,546,108,84,745,crushing discoveredAttack endgame short,https://lichess.org/0HAfbber#51
cmIwL,3r2k1/1n3ppp/p3p3/1p6/8/2PBPP2/P4P1P/3R2K1 b - - 2 20,b7a5 d3h7 g8h7 d1d8,592,86,100,416,advantage discoveredAttack endgame short,https://lichess.org/5Ug1qHx7/black#40
uMyXf,5rk1/pp1N1ppp/4pb2/8/8/2P5/PP3PPP/3R1K2 b - - 2 18,f8d8 d7f6 g7f6 d1d8,592,103,75,154,crushing discoveredAttack endgame short,https://lichess.org/2SGwUnhi/black#36
ucWqH,6k1/5pb1/r2p2p1/2pP3p/8/4r1PP/PP1R1K2/R1B5 b - - 1 28,g7d4 d2d4 c5d4 c1e3,572,81,80,112,crushing discoveredAttack endgame master short,https://lichess.org/bAjsoHZc/black#56
DJjsK,3r2k1/p4p1p/2pb2p1/2p5/4P3/2P1B3/PP4PP/R5K1 w - - 2 20,a1d1 d6h2 g1h2 d8d1,595,93,98,632,advantage discoveredAttack endgame short,https://lichess.org/cStshtBf#39
b5RNU,r5k1/pp3pp1/2p2n1p/8/4NP2/8/PPP3PP/4R1K1 b - - 2 21,a8e8 e4f6 g7f6 e1e8,478,89,81,275,crushing discoveredAttack endgame short,https://lichess.org/zmLZGgTj/black#42
ZBjmP,1k2r3/2p3pp/p1pp1b2/8/5K2/2P1B2P/PPP3P1/4R3 b - - 0 24,h7h6 e3a7 b8a7 e1e8,578,85,79,135,advantage discoveredAttack endgame short,https://lichess.org/NBV2wxe8/black#48
tICLo,3r2k1/3r1pp1/p6p/1p6/3b1N2/P7/1P1R1PPP/3R2K1 w - - 0 32,f4e2 d4f2 g1f2 d7d2 d1d2 d8d2,574,81,100,265,crushing discoveredAttack endgame long,https://lichess.org/boVoGR2H#63
UyCCm,R7/2q1kpp1/1p5p/2p1r3/3p4/1P1P3P/2PQ1PP1/5K2 w - - 2 33,d2f4 e5e1 f1e1 c7f4,543,92,100,312,crushing discoveredAttack endgame master short,https://lichess.org/f1AJaEHU#65
b8WPo,4r3/1p5p/p1k2pp1/4n3/P4B2/1P5P/2P2PP1/2KR4 w - - 1 29,d1e1 e5d3 c2d3 e8e1,579,92,98,566,advantage discoveredAttack endgame short,https://lichess.org/Y9hdQLMB#57
fJq4r,5rk1/p2p1pbp/1p4p1/1P6/2B1P3/5P2/6PP/2R3K1 b - - 0 25,f8c8 c4f7 g8f7 c1c8,576,110,80,401,advantage discoveredAttack endgame short,https://lichess.org/5NqNXa1z/black#50
ked2E,2r3k1/5pp1/p1bPp2p/8/2p2B2/P4PP1/6KP/2R5 w - - 0 30,c1c4 c6f3 g2f3 c8c4,568,87,84,95,crushing discoveredAttack endgame short,https://lichess.org/ohQDlqv1#59
iC4NH,r5k1/p1pN1ppp/1p6/5n2/1P6/P6P/5PP1/3R2K1 b - - 0 25,a8d8 d7f6 g7f6 d1d8,576,98,93,1122,crushing discoveredAttack endgame short,https://lichess.org/k81RUQiF/black#50
Es0wV,4r1k1/p4ppp/4r3/2p5/2P5/1P1B1P1P/P5P1/3R1K2 b - - 0 23,e6d6 d3h7 g8h7 d1d6,495,107,93,1025,crushing discoveredAttack endgame short,https://lichess.org/Qx7hTrw4/black#46
eES2w,3r2k1/p4ppp/1p2p3/4P3/5P2/3r3P/P2BK1P1/3R4 b - - 2 25,g8f8 d2b4 f8e8 d1d3,555,94,79,133,advantage discoveredAttack endgame master short,https://lichess.org/ZoD2fGy8/black#50
Jarps,5rk1/p3r1p1/1p2qp2/3Q1R2/3P2P1/2P4P/P4RK1/8 w - - 1 32,f2e2 e6d5 f5d5 e7e2,532,101,83,586,crushing discoveredAttack endgame short,https://lichess.org/wwQsvV5V#63
aYWBR,1r3bk1/5p2/N5pp/3Pp3/2P5/1n5P/3B1PP1/1R3K2 w - - 0 36,d2c3 b3d2 c3d2 b8b1,576,101,96,594,advantage discoveredAttack endgame short,https://lichess.org/9OMmIKEC#71
1pIxn,5rk1/pb3ppp/1p2p3/4P3/5P2/3B4/P4P1P/3R2K1 b - - 0 23,f8d8 d3h7 g8h7 d1d8,526,105,94,582,crushing discoveredAttack endgame master short,https://lichess.org/UwX7ICDF/black#46
6g1zD,r7/b3kp1p/R4p2/1p6/1P5P/P2p1N2/2P2PP1/6K1 w - - 0 25,c2d3 a7f2 g1f2 a8a6,566,91,79,151,advantage discoveredAttack endgame short,https://lichess.org/lIwB4D6M#49
DJ0oY,r5k1/1p3pp1/3p1n1p/4p3/PP6/8/2B2PPP/2R3K1 b - - 0 29,a8c8 c2h7 g8h7 c1c8,539,95,100,255,advantage discoveredAttack endgame short,https://lichess.org/GieRf3ad/black#58
lR58I,7k/3b1rpp/4p3/p2p4/P2P2P1/2q2B1P/2R3K1/3Q4 b - - 4 38,c3b3 c2c8 d7c8 d1b3,587,101,80,390,crushing discoveredAttack endgame short,https://lichess.org/uCt8gqF8/black#76
rHV6h,r3r1k1/p3q1p1/1p3p2/2p5/2P1R1P1/P2P1Q2/6K1/R7 b - - 4 27,e7b7 e4e8 a8e8 f3b7,598,107,88,500,crushing discoveredAttack endgame short,https://lichess.org/EPgTiycO/black#54
aG0qC,2r2k2/pp4pp/4p3/2bNP3/8/4P3/PP4PP/2R3K1 w - - 1 21,b2b4 c5e3 d5e3 c8c1,512,91,80,425,crushing discoveredAttack endgame short,https://lichess.org/qXAk4fDw#41
RdhoO,4r2k/p5pp/1p6/5p2/1P2bP2/P4RP1/4P1BP/7K w - - 0 30,f3e3 e4g2 h1g2 e8e3,519,106,84,574,crushing discoveredAttack endgame short,https://lichess.org/jsljIEIB#59
T6jun,5k2/p3rp2/1p1R3p/2p1n3/8/5b2/PP2BPP1/4R1K1 w - - 0 33,e2f3 e5f3 g2f3 e7e1,527,98,85,1195,advantage discoveredAttack endgame short,https://lichess.org/QKKVbRn5#65
T327l,6k1/1p3q1r/4rp1P/3p1Qp1/3P4/BP6/2P2P2/1K4R1 w - - 0 33,f5d5 e6e1 g1e1 f7d5,539,101,94,673,crushing discoveredAttack endgame master short,https://lichess.org/IKadCrNM#65
fENXX,5r1k/1p2Npbp/3p2p1/p7/7P/1P6/P4PP1/4R1K1 b - - 0 22,f8e8 e7g6 h7g6 e1e8,555,103,85,719,crushing discoveredAttack endgame short,https://lichess.org/Zag30t3J/black#44
Ab7D6,3rr1k1/5p1p/p5p1/2nB4/p2R1P2/R1P3P1/5K1P/8 b - - 7 32,e8e7 d5f7 g8f7 d4d8,597,83,100,211,advantage discoveredAttack endgame short,https://lichess.org/0I645xy5/black#64
fNJJV,r4k2/pp3p1p/4p1p1/4n3/2PNP3/7P/P4KP1/3R4 b - - 4 33,a8d8 d4e6 f7e6 d1d8,446,104,86,395,crushing discoveredAttack endgame short,https://lichess.org/tigKUl5h/black#66
AOlnK,2kr4/ppp2ppp/2n5/8/4N3/7P/PP3PP1/4R1K1 b - - 2 23,d8e8 e4d6 c7d6 e1e8,598,95,85,805,advantage discoveredAttack endgame short,https://lichess.org/Jb9yOGfB/black#46
IYvWX,3r4/p5k1/bp2pNp1/3n3p/3B1P2/P5P1/7P/3R2K1 b - - 0 36,d5f6 d4f6 g7f6 d1d8,507,106,85,1012,advantage discoveredAttack endgame short,https://lichess.org/5vNzwJvX/black#72
kwOrr,3r2k1/pp3ppp/4p3/8/4n3/1P1BP2P/P5P1/3R2K1 b - - 0 23,e4c5 d3h7 g8h7 d1d8,571,86,100,164,advantage discoveredAttack endgame short,https://lichess.org/sRyy1fJw/black#46
lLrQo,1k1r4/pp3n1p/8/2P1N3/1P1Bq3/2PR3P/PK6/3R4 b - - 0 30,f7e5 d4e5 e4e5 d3d8,594,98,85,1329,crushing discoveredAttack endgame short,https://lichess.org/ergsTOxJ/black#60
gT0f4,3r2k1/pp4pp/1bp5/3q2B1/4Q3/1P4P1/P6P/4R2K b - - 0 28,d8e8 e4d5 c6d5 e1e8,522,95,57,51,crushing discoveredAttack endgame short,https://lichess.org/QEUd0s7t/black#56
u8ZMr,7k/3b2p1/1b3p1p/pq2p3/2R1P2P/2P3P1/4QP2/6K1 b - - 3 42,d7e6 c4c8 e6c8 e2b5,584,88,86,196,crushing discoveredAttack endgame short,https://lichess.org/w0YqlLHE/black#84
81DP3,2k4r/2p2p2/p1p2Pb1/7p/4N1p1/1P6/P1P4P/2K1R3 b - - 1 25,h8e8 e4d6 c7d6 e1e8,470,92,83,245,advantage discoveredAttack endgame short,https://lichess.org/Seok9bcm/black#50
sxULW,2r3k1/5N2/4p1pp/3p4/1b6/4PP2/P1Bn1KPP/2R5 b - - 0 32,g8f7 c2g6 f7g6 c1c8,498,93,88,275,advantage discoveredAttack endgame short,https://lichess.org/EzQcZKpv/black#64
a0LbN,r5k1/5ppp/4q3/p7/1pQ1P3/P2P3P/KP6/2R5 b - - 3 28,a8c8 c4e6 f7e6 c1c8,443,106,84,626,capturingDefender crushing discoveredAttack endgame short,https://lichess.org/tNlaMmUf/black#56
XMDeA,6k1/p2r1ppp/2pb4/8/8/4B2P/PP3PP1/5RK1 w - - 0 22,f1d1 d6h2 g1h2 d7d1,521,95,88,292,advantage discoveredAttack endgame short,https://lichess.org/SEPVXLHn#43
ZdCmU,6k1/3b2p1/3p1p1p/1p6/P1p5/2P3PP/3rB1RK/8 b - - 2 41,b5a4 e2c4 g8f8 g2d2,553,85,61,187,advantage discoveredAttack endgame short,https://lichess.org/2cKb0HHD/black#82
DQcwO,4r1k1/1p3pp1/5np1/3B4/1p6/1P5P/P4PP1/3R2K1 b - - 0 26,e8d8 d5f7 g8f7 d1d8,574,88,87,126,crushing discoveredAttack endgame short,https://lichess.org/INjxP0kb/black#52
WErSt,r5k1/5p1p/1q4p1/pR6/Qp1p4/3P3P/P5P1/7K b - - 3 40,b6c6 b5b8 a8b8 a4c6,495,99,93,1728,advantage discoveredAttack endgame master short,https://lichess.org/zqYHQkju/black#80
AY6yy,8/rb4pp/p4p2/1p3k2/8/1NP5/PP4PP/3R3K w - - 0 32,d1d7 b7g2 h1g2 a7d7,567,89,100,418,advantage discoveredAttack endgame short,https://lichess.org/LOydeICx#63
9mubz,3r3k/6p1/7p/1p1qpQ2/7P/1PPP2P1/5PK1/3R4 w - - 1 36,f5e4 d5e4 d3e4 d8d1,559,90,94,611,crushing discoveredAttack endgame short,https://lichess.org/NZS1rDUW#71
0yyau,r3b3/P3kppp/2r1p3/8/8/2N1P3/5KPP/R1R5 b - - 0 25,c6c7 c3d5 e6d5 c1c7,582,85,31,271,advantage discoveredAttack endgame short,https://lichess.org/uTDrLJpi/black#50
Quzvj,3r4/p4k1p/1p3pp1/3n4/8/5N2/PP3PPP/3R2K1 w - - 2 25,g1f1 d5e3 f2e3 d8d1,588,90,70,123,crushing discoveredAttack endgame short,https://lichess.org/piRb0qOR#49
gGlij,5rk1/p4pp1/4Q2p/8/3P4/2P3qP/P4RP1/4B2K b - - 0 37,f7e6 f2f8 g8f8 e1g3,517,90,100,299,crushing discoveredAttack endgame short,https://lichess.org/r9wnxXDj/black#74
QH3MP,8/1p1r3p/p5p1/4pk2/P2b4/4n3/4RPPP/3R2K1 w - - 0 30,f2e3 d4e3 e2e3 d7d1,518,99,62,161,advantage discoveredAttack endgame short,https://lichess.org/EzVIFDVK#59
5iMRD,3r2k1/5pp1/p1b1p2p/8/2P5/3B4/P4PPP/3R2K1 b - - 2 23,c6a4 d3h7 g8h7 d1d8,579,105,91,1140,crushing discoveredAttack endgame short,https://lichess.org/vIGrd4ou/black#46
K3muX,3r4/pp2kpp1/3n2p1/8/3R1P2/1P4P1/P4KBP/8 w - - 3 33,d4d2 d6e4 g2e4 d8d2,582,87,98,484,advantage discoveredAttack endgame short,https://lichess.org/B7phhzTs#65
TX5p0,4r1k1/pp4p1/1b5p/8/2p1N3/8/PPP3PP/4R2K b - - 3 26,b6c7 e4f6 g7f6 e1e8,537,98,92,504,advantage discoveredAttack endgame short,https://lichess.org/AQaXLFkm/black#52
mCNJ3,3r2k1/5pp1/1p2n2p/2p5/8/1P1B3P/P4PP1/3R1K2 b - - 1 28,e6f4 d3h7 g8h7 d1d8,561,87,85,218,crushing discoveredAttack endgame short,https://lichess.org/NP2De56R/black#56
bxbnn,3q2k1/p4p1p/6p1/4p3/3bP3/1B5P/P2Q1PP1/6K1 w - - 0 32,d2d3 d4f2 g1f2 d8d3,538,91,68,103,crushing discoveredAttack endgame short,https://lichess.org/PmMqXW8Y#63
vYXiA,2r3k1/2b2p2/p3p1p1/7p/N7/1P5P/P4PP1/3R2K1 w - - 0 27,d1c1 c7h2 g1h2 c8c1,536,80,79,174,advantage discoveredAttack endgame master short,https://lichess.org/ijamjlf7#53
Tm2fB,r5k1/5p1p/2b1p1p1/8/3q4/1P1R3P/2B2PP1/1Q4K1 b - - 2 29,d4e4 d3d8 a8d8 c2e4,555,97,84,271,crushing discoveredAttack endgame short,https://lichess.org/rK0CFLZF/black#58
ZvrvA,2r2r1k/p2R4/5q2/p1P2b2/1P1Q4/P7/2P3P1/5RK1 w - - 7 36,f1f5 f6d4 d7d4 f8f5,550,95,67,134,advantage discoveredAttack endgame master short,https://lichess.org/syCiLMnl#71`,
  },
  {
    id: 'kingside', title: 'Атака на королевском фланге', short: 'Атака на короля',
    // task_kingside600.csv — kingside attack, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
mf4LA,4r1k1/1p2q2p/p1p3p1/P2p1p2/1P1Prb2/2B1PR1P/3Q2P1/4R1K1 w - - 0 33,e3f4 e4e1 d2e1 e7e1 c3e1 e8e1,596,92,94,137,advantage kingsideAttack long middlegame,https://lichess.org/pYexHpft#65
kAkHc,r2r2k1/1p4pp/1p2pB2/pPqn4/P1PR4/8/6PP/1R1Q3K b - - 0 25,d5f6 d4d8 a8d8 d1d8,576,91,76,235,advantage kingsideAttack middlegame short,https://lichess.org/o0YfemLP/black#50
Ni87S,3rr1k1/1pp2ppp/p1p5/4nq2/5P2/2P1Q3/PP1B2PP/3RR2K b - - 1 22,e5d7 e3e8 d8e8 e1e8,471,108,86,255,advantage kingsideAttack middlegame short,https://lichess.org/MHFK38Md/black#44
SFXxG,4qb1k/p3r1pp/Q4n2/2pp4/8/1PN1B3/P4PPP/3RN1K1 w - - 0 23,e3c5 e7e1 d1e1 e8e1,536,86,100,84,advantage kingsideAttack middlegame short,https://lichess.org/p6tsEOGF#45
FGflK,2kr3r/pppqbpp1/4b3/7p/4QB2/2P2N2/PP3PPP/R4RK1 w - - 3 16,f1d1 d7d1 a1d1 d8d1,521,110,97,483,crushing kingsideAttack middlegame short,https://lichess.org/8Ao7IcxP#31
SOx4I,4rrk1/1p2q1pp/p2p4/2pP1p2/P3PPn1/2N2Q2/1P4PP/3RR1K1 w - - 0 20,e4f5 e7e1 d1e1 e8e1,545,89,88,102,crushing kingsideAttack middlegame short,https://lichess.org/IBw7lvIx#39
Lw5z8,r4rk1/2p2ppp/np1q4/p2P4/2P5/P3QB2/5PPP/R3R1K1 b - - 2 19,f8e8 e3e8 a8e8 e1e8,575,110,78,436,crushing kingsideAttack middlegame short,https://lichess.org/pl9BWeQ5/black#38
DHvZw,r1b1r1k1/pp3pbp/2p2np1/3pq3/4P3/2PB2NP/PP3PP1/R1BQR1K1 w - - 0 14,e4d5 e5e1 d1e1 e8e1,414,117,93,2109,crushing kingsideAttack master opening short,https://lichess.org/lOfNGkNR#27
ommtB,2k1r3/p1p2ppp/1p2q3/3pr3/P3B3/5PQ1/1PP3PP/R3R1K1 w - - 0 20,e4d3 e5e1 g3e1 e6e1 a1e1 e8e1,591,79,100,111,advantage kingsideAttack long middlegame,https://lichess.org/diaJYax7#39
jn7q1,2nqn1k1/p2r1pp1/1p2p1p1/4P3/3B4/1P2QBP1/P4P1P/3R2K1 w - - 0 26,d4b2 d7d1 f3d1 d8d1,584,90,82,82,crushing kingsideAttack master middlegame short,https://lichess.org/TkKCTNtw#51
0fhQH,4rrk1/ppp1qpbp/3p1np1/3b2B1/4P3/1B1Q4/PPP2PPP/R3R1K1 w - - 0 14,e4d5 e7e1 a1e1 e8e1,413,113,84,229,advantage kingsideAttack middlegame short,https://lichess.org/8jBTKKiJ#27
KyJKf,r5k1/p1n1qpbp/1pp2np1/4p3/4P3/1NP1B1PP/PP1Q1PB1/3R2K1 b - - 0 19,a8d8 d2d8 e7d8 d1d8,431,105,91,1442,crushing kingsideAttack master middlegame short,https://lichess.org/1OjPNQl9/black#38
0kOCz,3nr1k1/1pp3pp/pb1qbr2/3P4/4R3/1B3N2/PP1Q1PPP/4R1K1 b - - 0 18,e6f7 e4e8 f7e8 e1e8,558,97,92,596,advantage kingsideAttack middlegame short,https://lichess.org/QDPXcMFL/black#36
Wiqt9,4rrk1/pp4pp/1qp1b3/3p1p2/3P4/P1P1R3/BP2QPPP/1R4K1 b - - 1 19,f5f4 e3e6 e8e6 e2e6,582,88,74,95,advantage kingsideAttack middlegame short,https://lichess.org/suvkA2Ea/black#38
sjj7b,3rb1k1/1p5p/p3p1pP/3qPpP1/P3n3/BPp1PQ2/2P4R/4R1K1 w - - 3 37,e1d1 d5d1 f3d1 d8d1,457,118,88,801,crushing kingsideAttack middlegame short,https://lichess.org/hLFzrtoe#73
JbOrp,5rk1/1p1q2p1/p3p3/3p1rp1/3PpP1R/2P1B3/PP2Q2P/5RK1 w - - 0 23,f4g5 f5f1 e2f1 f8f1,589,104,74,486,crushing kingsideAttack middlegame short,https://lichess.org/1dqv1dUg#45
0thUG,4rrk1/1pp3pp/1p1p1p2/3P1bq1/2P5/1PQ1R3/PB3PPP/4R1K1 b - - 5 21,h7h5 e3e8 f8e8 e1e8,598,81,53,52,crushing kingsideAttack middlegame short,https://lichess.org/FnlGSQN1/black#42
0u6Zg,2r1r1k1/p1R2pp1/7p/2B2b2/8/2P2PQ1/PPP1q1PP/R5K1 w - - 1 21,a1e1 e2e1 g3e1 e8e1,599,104,81,466,crushing kingsideAttack middlegame short,https://lichess.org/CtHfTfah#41
CYFPV,4r1k1/p2bqppp/n1p2n2/1p1p4/3P1N2/1NPB1PP1/PP1Q2P1/R5K1 w - - 0 18,a1e1 e7e1 d2e1 e8e1,400,105,77,490,crushing kingsideAttack middlegame short,https://lichess.org/tJXjVdFd#35
NXYCG,r4rk1/5p2/p3pn1p/1pq3p1/3R4/P1P2NP1/1P3PP1/R2Q2K1 b - - 0 21,f8d8 d4d8 a8d8 d1d8,502,102,94,188,crushing kingsideAttack middlegame short,https://lichess.org/FC3F8ZCs/black#42
H1DfT,3r2k1/5nrp/b2q1nN1/1pp1p3/p6Q/N1P4R/PPB3PP/4R1K1 w - - 12 30,e1d1 d6d1 c2d1 d8d1,590,84,100,218,advantage kingsideAttack middlegame short,https://lichess.org/UrAS8wcy#59
qjZEW,2r1R1k1/3q2bp/P1bp1pp1/3p4/1P1P4/2P2N1P/4QPP1/4R1K1 b - - 0 25,c8e8 e2e8 d7e8 e1e8,557,108,79,226,crushing kingsideAttack middlegame short,https://lichess.org/sIcWCuBQ/black#50
Sugwo,3rr1k1/ppp2pp1/4q1bp/1PP5/P3N3/3P1Q2/5PPP/R3R1K1 w - - 1 22,e4g3 e6e1 a1e1 e8e1,490,103,97,457,advantage kingsideAttack middlegame short,https://lichess.org/2utURMrS#43
Lx6qd,r3q1k1/1p3p1p/p4np1/8/PP2r3/1Q5P/4BPP1/2R1R1K1 w - - 3 25,e2c4 e4e1 c1e1 e8e1,594,104,91,325,crushing kingsideAttack middlegame short,https://lichess.org/C9jrNys5#49
L7zo0,r1b1r1k1/5pp1/1p3n1p/3pq3/1P6/P1NB4/2Q2PPP/R4RK1 w - - 0 19,f1e1 e5e1 a1e1 e8e1,599,97,74,483,advantage kingsideAttack middlegame short,https://lichess.org/dYgq1EhE#37
ZQEba,4r1k1/1p2qpp1/p1n3bp/3p4/2pP4/2P5/PP1NQPPP/4RBK1 b - - 3 21,e7d7 e2e8 d7e8 e1e8,523,84,100,66,crushing kingsideAttack middlegame short,https://lichess.org/KCYCbB9A/black#42
1M2Ic,r1b1r1k1/2p2ppp/p1pq4/8/1p2n3/3P4/PPP1QPPP/R1BNR1K1 b - - 0 13,e4f6 e2e8 f6e8 e1e8 d6f8 e8f8,576,90,73,137,crushing kingsideAttack long middlegame,https://lichess.org/rwtbpvGt/black#26
kqVoO,r3r1k1/ppqn1p1p/2pbbppB/8/3PQ3/2PB1N1P/PP3PP1/R3R1K1 b - - 2 14,e6f5 e4e8 a8e8 e1e8,593,87,100,194,crushing kingsideAttack middlegame short,https://lichess.org/WITzh8Sy/black#28
fSkPj,3qr1k1/1b1r1p1p/p5p1/1p6/2p2B2/P1Q1P2P/1P3PP1/2RR2K1 w - - 0 23,f4h6 d7d1 c1d1 d8d1,598,103,71,572,crushing kingsideAttack middlegame short,https://lichess.org/3NNzOhL2#45
Z0tQY,2k2b1r/ppp2pp1/4r3/2q4p/5P2/2P4Q/PP4PP/R1B2RK1 w - - 1 16,c1e3 c5e3 h3e3 e6e3,533,110,70,295,crushing kingsideAttack middlegame short,https://lichess.org/M8TTCzeK#31
zvsD1,2r1r1k1/pp3bpp/2q5/3pRp2/3P1P2/1P5P/1BP1Q1P1/1K2R3 b - - 0 25,c8c7 e5e8 f7e8 e2e8 c6e8 e1e8,531,100,96,245,crushing kingsideAttack long master middlegame,https://lichess.org/6K89aDUu/black#50
uF2Sh,4r1k1/pp2q1bp/2p1r1p1/5p1P/6n1/P1BP1QN1/1PP2PP1/1R3RK1 w - - 1 27,f1e1 e6e1 b1e1 e7e1 c3e1 e8e1,567,80,100,274,crushing kingsideAttack long middlegame,https://lichess.org/VMIndtzN#53
c3a1i,2rr2k1/5p1p/p1b1p1p1/3n4/4P3/P2R1NP1/4BPP1/3R2K1 b - - 0 25,d5f6 d3d8 c8d8 d1d8,536,92,75,87,crushing kingsideAttack middlegame short,https://lichess.org/m3pgyJES/black#50
RPFXM,r2r2k1/3n1pb1/p3p1pp/1qp1P3/8/BP2N3/P1RR1PPP/3Q2K1 b - - 1 24,d7e5 d2d8 a8d8 d1d8,580,95,76,257,crushing kingsideAttack middlegame short,https://lichess.org/PQU12XTK/black#48
f1Y7a,2rq2k1/1b3pp1/4p2p/n3B3/5P2/2pr2P1/P4QBP/2RR2K1 w - - 0 33,g2b7 d3d1 c1d1 d8d1,590,95,99,822,crushing kingsideAttack master middlegame short,https://lichess.org/a2UyruCO#65
1kjX1,r3r1k1/1p3pbp/p5p1/P4bN1/1B6/1Pp1R3/5PPP/4R1K1 b - - 3 25,c3c2 e3e8 a8e8 e1e8,462,96,85,164,crushing kingsideAttack middlegame short,https://lichess.org/nvvMfWL6/black#50
ZKA6s,r1b1r1k1/1p4bp/p5p1/2Bp1p2/qP1Np3/P1P1QP2/6PP/R3R1K1 b - - 3 26,e4f3 e3e8 a4e8 e1e8,534,96,83,178,crushing kingsideAttack middlegame short,https://lichess.org/jHFodPdt/black#52
Po2eT,r3r1k1/ppqnRpp1/2p4p/3p3n/3P1b1B/2NB1P1P/PPP1QPK1/R7 b - - 7 17,c7d6 e7e8 a8e8 e2e8,578,98,85,608,crushing kingsideAttack middlegame short,https://lichess.org/IuJTa7a5/black#34
1rVPi,r3r1k1/p4ppp/2p5/2p1q3/8/1PnP1RP1/P1PQN2P/4R1K1 w - - 5 19,e2c3 e5e1 d2e1 e8e1,481,108,90,1171,advantage kingsideAttack middlegame short,https://lichess.org/UJFoJdf1#37
OyOsZ,r5k1/pppb1ppp/2nq4/3p4/3P4/1PP2N2/P2NQPPP/4R1K1 b - - 0 15,a8e8 e2e8 d7e8 e1e8 d6f8 e8f8,418,101,83,190,crushing kingsideAttack long middlegame,https://lichess.org/EnmEItRT/black#30
rt96x,4r1k1/ppp1qp1p/4rpn1/3p4/3P3N/2P3PP/PP1Q2P1/R3R1K1 w - - 5 20,h4f5 e6e1 d2e1 e7e1 a1e1 e8e1,536,96,88,146,crushing kingsideAttack long middlegame,https://lichess.org/VgTRh07m#39
y5BWH,1r3rk1/5ppp/p7/1pq1pP2/2p1Bn2/5P2/PPPQ2PP/1K1R3R b - - 1 22,f8d8 d2d8 b8d8 d1d8,468,96,63,221,crushing kingsideAttack master middlegame short,https://lichess.org/xNeEzIU6/black#44
Bv4hV,3rr1k1/1bp2ppp/p5q1/1pb5/7P/2BP2P1/PP2RPN1/R3Q1K1 b - - 4 23,h7h6 e2e8 d8e8 e1e8,506,108,86,814,crushing kingsideAttack middlegame short,https://lichess.org/l8XiLcJ5/black#46
He38K,2rr2k1/pp3ppp/2b2n2/4q3/3p1N2/2NRP3/PP2QPPP/3R2K1 b - - 1 19,d4c3 d3d8 c8d8 d1d8,586,110,81,625,crushing kingsideAttack middlegame short,https://lichess.org/zxpeiYPg/black#38
JZLyO,2rr2k1/1b2ppbp/ppp2Np1/4q3/2P1P3/4BP2/PP1QB1PP/2RR2K1 b - - 0 16,e5f6 d2d8 c8d8 d1d8,530,100,88,224,crushing kingsideAttack middlegame short,https://lichess.org/PMUbAUyk/black#32
fwvGf,2r3k1/4qp1p/p3r1p1/1pp1Q3/8/2P3NP/PP3PP1/3RR1K1 w - - 1 27,e5f4 e6e1 d1e1 e7e1,494,93,83,97,crushing kingsideAttack middlegame short,https://lichess.org/xb10Fnph#53
muKMO,2r2nk1/p1r4p/1p1bNqp1/1P1p4/3P1P2/2P1Q1P1/1P6/RN2R1K1 b - - 0 21,f8e6 e3e6 f6e6 e1e6,400,108,87,477,advantage kingsideAttack middlegame short,https://lichess.org/XZL2LK11/black#42
26w4q,3r1rk1/pp1q2pp/1np2p2/4p3/3PP1b1/1P3NP1/PQ3PBP/2RR2K1 w - - 1 18,d4e5 d7d1 c1d1 d8d1,594,105,79,439,crushing kingsideAttack middlegame short,https://lichess.org/c90TMQOk#35
ayL3f,r3r1k1/ppp2ppp/2pnqb2/4N3/2PP4/1P3Q1P/PB3PP1/1R2R1K1 w - - 1 15,e5c6 e6e1 b1e1 e8e1,560,98,87,325,advantage kingsideAttack middlegame short,https://lichess.org/aVWZoMs5#29
EdLCo,2rn2k1/1bqnbp1p/p3p1p1/1p1pP3/1P1P1N2/P2QBN2/5PPP/1B2R1K1 w - - 0 20,e1c1 c7c1 e3c1 c8c1 d3f1 c1f1,551,90,94,131,advantage kingsideAttack long middlegame,https://lichess.org/3ol482dK#39
2Ku3O,4rrk1/p5p1/1p4qp/2p1p1b1/5p2/P2P1RP1/1PPB1Q2/5RK1 b - - 0 28,f4g3 f3f8 e8f8 f2f8,590,85,100,241,advantage kingsideAttack middlegame short,https://lichess.org/pzLddHjV/black#56
EdGsZ,2r4k/5Rpp/p5r1/1q2P3/1p1BbQ2/1P1N4/1PP3PP/1K6 b - - 2 34,e4d5 f7f8 c8f8 f4f8,521,93,71,100,crushing kingsideAttack middlegame short,https://lichess.org/DKNyQ2zP/black#68
Lott1,1r4k1/pp3qpp/2p2p2/1n1r4/1PN5/P3Q1P1/5P1P/2R1R1K1 b - - 1 24,b8e8 e3e8 f7e8 e1e8,565,99,81,143,advantage kingsideAttack middlegame short,https://lichess.org/DofRpzXr/black#48
Vh4mP,3r2k1/3q1pp1/p4b1p/1p6/2b2P2/P3BB2/1P3QPP/2R3K1 w - - 1 23,c1d1 d7d1 f3d1 d8d1,567,100,90,1003,crushing kingsideAttack middlegame short,https://lichess.org/CiwyJM5L#45
UNxBp,r4rk1/p1b1n1p1/1p2b1qp/4pp2/4P3/2PP1RNP/1P3QPN/5R1K b - - 1 27,f5e4 f3f8 a8f8 f2f8,593,101,71,402,crushing kingsideAttack middlegame short,https://lichess.org/PNRXbgiu/black#54
yDgUS,r2q2k1/4p1rp/p2ppnn1/1p2P3/8/2N2P2/PPPQ2P1/2KR1B1R b - - 0 17,d6e5 d2d8 a8d8 d1d8,561,97,85,74,crushing kingsideAttack middlegame short,https://lichess.org/4BgZahI1/black#34
tVoV2,r3rbk1/p3qppp/Pp1p4/1PpP1b1n/2P5/2B5/R2NBPPP/3QR1K1 w - - 5 21,e2h5 e7e1 d1e1 e8e1,424,114,89,1222,advantage kingsideAttack middlegame short,https://lichess.org/zxWnYrzd#41
UevoI,4r1k1/2q2pb1/p5p1/1ppPr2p/2p2N1P/2P2QP1/PP3P2/R4RK1 w - - 2 25,f1e1 e5e1 a1e1 e8e1,546,102,85,383,crushing kingsideAttack middlegame short,https://lichess.org/tVZoQzJr#49
VV4GO,4q1k1/2p4p/3p3b/P2P1p2/2PprP2/3Nr2P/3R1QP1/4R1K1 w - - 1 34,a5a6 e3e1 d3e1 e4e1,545,100,93,1236,advantage kingsideAttack master middlegame short,https://lichess.org/pgqXlr7D#67
PyjJ2,6k1/3b1pp1/p2p1q1p/2p1pP2/4P1Q1/2PP3P/rrP3RK/3B2R1 b - - 3 25,d7a4 g4g7 f6g7 g2g7,471,92,85,272,advantage kingsideAttack middlegame short,https://lichess.org/QqRkjvvv/black#50
EyH4J,r3r1k1/5qp1/p3Rn1p/1p1p1p2/2pP1P2/2N2P2/PPP1Q2P/4R2K b - - 2 24,f6h5 e6e8 f7e8 e2e8 a8e8 e1e8,546,89,100,176,crushing kingsideAttack long middlegame,https://lichess.org/5w0AjjhF/black#48
Y0uXt,r4rk1/1p3ppp/p5n1/q2p4/P7/3BQ3/1P3PPP/1R2R1K1 b - - 1 19,f8e8 e3e8 a8e8 e1e8,513,97,83,81,advantage kingsideAttack middlegame short,https://lichess.org/jdjYedSq/black#38
2zkXL,r5k1/ppp1qppp/1b1p4/7b/1Q1P4/4r2P/PP1NBPP1/R3R1K1 w - - 0 18,e2h5 e3e1 a1e1 e7e1,428,106,91,959,crushing kingsideAttack middlegame short,https://lichess.org/G6m25CHv#35
Uhf14,1k2r3/1pp1rn1p/p1n3p1/3B2P1/2Pp1B2/5P2/P1P4P/3RR2K w - - 2 26,d5f7 e7e1 d1e1 e8e1,590,98,83,508,crushing kingsideAttack middlegame short,https://lichess.org/J3kNyUG2#51
35Sv0,3r1rk1/p1p2ppp/2pb2qn/8/3B4/2N5/PPP1QPPP/R3R1K1 b - - 1 15,f8e8 e2e8 d8e8 e1e8,412,117,52,173,crushing kingsideAttack middlegame short,https://lichess.org/WbtOaOgG/black#30
cK3N8,4r1k1/2pq1pp1/p1n1rn2/1p1p3p/3P3P/P1PB1PN1/1PQ2PP1/R3R1K1 w - - 3 21,d3f5 e6e1 a1e1 e8e1,570,108,74,219,advantage kingsideAttack master middlegame short,https://lichess.org/CLESwVXz#41
qKNZh,1r2r1k1/p3q2p/np3ppB/2pP1b2/2P4R/P5P1/1R3PBP/3Q2K1 w - - 6 23,d5d6 e7e1 d1e1 e8e1,433,112,97,251,advantage kingsideAttack middlegame short,https://lichess.org/KwGpvBy1#45
CD3Lu,4r1k1/5ppp/6b1/p1qp4/1p1Nn3/2P2PP1/PP2Q1BP/4R1K1 b - - 0 31,e4f6 e2e8 f6e8 e1e8 c5f8 e8f8,563,90,100,106,crushing kingsideAttack long middlegame,https://lichess.org/BP27J0tv/black#62
FvnCr,r3r1k1/1pq2ppp/2pb1p2/p2n4/P2PR1bP/1P3NP1/2PN1PB1/R3Q1K1 b - - 2 16,g4f5 e4e8 a8e8 e1e8,502,100,94,302,advantage kingsideAttack middlegame short,https://lichess.org/pSnlHbtB/black#32
H2Z0N,r2qr1k1/pp1nbppp/3p1B2/1BpP3b/8/2P2N1P/PP2QPP1/RN2R1K1 b - - 0 14,e7f6 e2e8 d8e8 e1e8,510,95,85,198,crushing kingsideAttack opening short,https://lichess.org/38NJYhjF/black#28
DOURH,rn1q1rk1/pp3p2/5pp1/3p3p/3P2bP/3B1N2/P1P1QPP1/R3R1K1 b - - 3 15,f8e8 e2e8 d8e8 e1e8,585,86,100,68,crushing kingsideAttack master middlegame short,https://lichess.org/pDXAkzrH/black#30
IlTjh,r3r1k1/p3Rp2/1p1p1B1p/n2b2p1/P2P2P1/8/5N1P/4R1K1 b - - 16 38,a5c6 e7e8 a8e8 e1e8,583,108,80,399,crushing kingsideAttack middlegame short,https://lichess.org/2SuVpvI2/black#76
fVkS5,r2r2k1/5pbp/p3pnp1/NBp1q1B1/4P3/2P4P/P2RQPP1/3R2K1 b - - 0 22,e5g5 d2d8 a8d8 d1d8,549,95,97,911,crushing kingsideAttack master middlegame short,https://lichess.org/qOwHUfUp/black#44
c4IK4,4r1k1/pbq1rppp/1p1p1b2/2pP4/P1B2B2/2P2Q2/1P3PPP/1R2R1K1 w - - 3 18,h2h3 e7e1 b1e1 e8e1,588,106,82,221,crushing kingsideAttack middlegame short,https://lichess.org/eyWaP8U8#35
Kg03P,r3r1k1/1p1q1pp1/p1p1b2p/8/3N4/2P1R1PP/PP2Q1P1/4R1K1 b - - 3 26,e6d5 e3e8 a8e8 e2e8 d7e8 e1e8,400,107,82,349,crushing kingsideAttack long middlegame,https://lichess.org/mNWljPwq/black#52
cGxtd,4r3/pp1q1pk1/2p1rpb1/3p4/3P4/1BP2PQ1/P5PP/4RRK1 w - - 9 24,b3c2 e6e1 f1e1 e8e1 g3e1 g6c2,599,88,84,194,crushing kingsideAttack long middlegame,https://lichess.org/nXqDXvcp#47
ivSKo,5rk1/1p3rnp/pPp1pq2/2PpR1p1/P2P1PP1/2B5/4Q2P/5RK1 w - - 0 32,f4g5 f6f1 e2f1 f7f1,584,89,57,69,crushing kingsideAttack master middlegame short,https://lichess.org/ZM9HFvgz#63
3xri0,2r2rk1/1p3ppp/p1q3n1/8/4pPP1/P1B5/1PPQ3P/1K1R2R1 b - - 1 23,f8d8 d2d8 c8d8 d1d8,574,93,97,389,crushing kingsideAttack master middlegame short,https://lichess.org/lAzLtDl7/black#46
41Tuf,2r1r1k1/1p1n2pp/1qp2p2/p3p1P1/n4P1B/2P1R2P/1P3QB1/4R1K1 b - - 0 28,e5f4 e3e8 c8e8 e1e8,514,95,90,194,advantage kingsideAttack master middlegame short,https://lichess.org/MYfzAzfb/black#56
42RRS,r2qr1k1/5ppp/p1pb1N2/1p6/1PnP4/P4N1P/4QPP1/R1B1R1K1 b - - 0 19,d8f6 e2e8 a8e8 e1e8,478,87,87,109,advantage kingsideAttack middlegame short,https://lichess.org/vPLZmvmQ/black#38
43EAG,4r2k/4qp2/1p1p2p1/p2br2p/P3P3/5PQP/1P1N2P1/3RR1K1 w - - 0 31,e4d5 e5e1 g3e1 e7e1 d1e1 e8e1,493,90,100,199,advantage kingsideAttack long middlegame,https://lichess.org/CJuvlNBo#61
nodP1,2nq2k1/5pbp/p1pr2p1/4n3/pP2P3/P2NBP2/5QPP/2RR2K1 w - - 0 30,d3e5 d6d1 c1d1 d8d1,585,108,100,232,advantage kingsideAttack middlegame short,https://lichess.org/QcmWsE8a#59
aaBlz,1rn2rk1/2p2qpp/4p3/1pB3b1/1P2P3/p1NQ1PP1/P6P/1K1R1R2 b - - 0 28,f8d8 d3d8 g5d8 d1d8,543,94,100,111,crushing kingsideAttack master middlegame short,https://lichess.org/w1vk4Vrb/black#56
SMoTg,2kr3r/pppq1np1/4p2p/2bPPp2/4PP2/2N3P1/PP4QP/R1BR3K w - - 1 18,d5e6 d7d1 c3d1 d8d1,440,95,88,225,crushing kingsideAttack middlegame short,https://lichess.org/m7leBWQU#35
49IC4,r3r1k1/2q2pp1/p2p3p/1p1P4/2p1R3/b1P2N1P/3Q1PP1/4R1K1 b - - 3 22,a3c5 e4e8 a8e8 e1e8,583,102,93,1104,crushing kingsideAttack middlegame short,https://lichess.org/X9bqkyud/black#44
4D4xT,r4rk1/pp2ppbp/q3bnp1/4N3/3Q1B2/2N5/PPP2PPP/3RR1K1 b - - 9 13,f8d8 d4d8 a8d8 d1d8,454,110,95,248,crushing kingsideAttack middlegame short,https://lichess.org/zZwOWWwT/black#26
SCNMo,3rr1k1/2p1q3/p6p/1pp2ppn/4P3/3b1P1P/PP1N1RPB/RNQ3K1 w - - 0 23,e4f5 e7e1 c1e1 e8e1,464,111,87,1014,advantage kingsideAttack middlegame short,https://lichess.org/dodkEmH5#45
wucbg,bn1r2k1/p2r1pp1/1p2p2p/1Qp5/1P2P3/3N1P2/P5PP/2R4K w - - 5 30,d3e5 d7d1 b5f1 d1f1,408,95,63,118,crushing kingsideAttack middlegame short,https://lichess.org/bFIONTQD#59
CB3z3,4r2k/5qp1/p1pb1n1p/1p1prP2/1P6/P2B1QRP/2P1NPP1/3R3K w - - 6 26,e2f4 e5e1 d1e1 e8e1,452,123,89,655,advantage kingsideAttack middlegame short,https://lichess.org/EWWZthlF#51
U0Xax,r1b3k1/p4qp1/1pn1p1p1/3p1r2/3P4/P1NQ3N/1PP3PP/4RR1K w - - 8 20,c3e2 f5f1 e1f1 f7f1,429,116,94,637,advantage kingsideAttack master masterVsMaster middlegame short,https://lichess.org/ngj0ctxW#39
sXEOB,r2r2k1/pp3pb1/4p1pp/2n5/8/2P2NP1/PP1R1PBP/3R2K1 b - - 2 18,c5e4 d2d8 a8d8 d1d8,544,98,78,341,crushing kingsideAttack middlegame short,https://lichess.org/Xtw9xAlo/black#36
tdi3U,r1b2rk1/p3bpq1/2p5/Ppn1p1pp/4Pn2/2N1B2P/BPPQ1PPN/3RR1K1 b - - 5 19,f8d8 d2d8 e7d8 d1d8,563,105,93,1234,crushing kingsideAttack middlegame short,https://lichess.org/SFWVbqBn/black#38
QAdw4,2r3k1/4bppp/p1b1q3/1p2p3/4N3/P1PQBP2/1P4PP/3R2K1 b - - 5 32,c8d8 d3d8 e7d8 d1d8,531,90,83,183,advantage kingsideAttack master middlegame short,https://lichess.org/WQeJSAp5/black#64
vnO7Y,2r4k/b5pp/p1p2p2/1p2p1n1/4P1R1/1P6/PBPRKP2/3Q3q b - - 3 34,h1h5 d2d8 h5e8 d8e8,475,109,89,1161,crushing kingsideAttack middlegame short,https://lichess.org/GxFz06LZ/black#68
IAVCY,r4rk1/pp3ppp/6b1/4Q3/1b5N/7P/qP1N1PP1/3RR1K1 b - - 4 20,f8e8 e5e8 a8e8 e1e8,555,94,76,155,advantage kingsideAttack middlegame short,https://lichess.org/KjTqyk3x/black#40
4cJll,r5k1/pp2rppp/2n5/2P1qp2/1PB5/PQ6/2P2PPP/3R1RK1 w - - 3 23,f1e1 e5e1 d1e1 e7e1,558,106,95,418,crushing kingsideAttack middlegame short,https://lichess.org/jB7cfvRw#45
y72Mb,r5k1/pp3pb1/2b1p2p/q5p1/8/1BP3B1/PP1Q1PPP/3R2K1 b - - 0 24,a8d8 d2d8 a5d8 d1d8,583,109,93,414,crushing kingsideAttack master middlegame short,https://lichess.org/QzNVIs8v/black#48
iVDgA,1r3rk1/2p2pbp/p1p3p1/3q1b2/5B2/N1P5/PP2QPPP/R3R1K1 b - - 4 16,f8e8 e2e8 b8e8 e1e8,502,87,100,151,crushing kingsideAttack middlegame short,https://lichess.org/YyL3nwaZ/black#32
lJ5uE,2r3k1/2q1bpp1/5n1p/1p2p3/4P1bB/1N1Q1N2/1P3PPP/R5K1 w - - 2 21,a1c1 c7c1 b3c1 c8c1 d3f1 c1f1,454,88,100,198,crushing kingsideAttack long middlegame,https://lichess.org/iFoA6YXM#41
ChoVm,r4rk1/1p3pqp/1np1b1p1/8/p7/1P1Q1RNP/P1B2PP1/3R2K1 b - - 0 24,f8d8 d3d8 a8d8 d1d8,593,87,80,458,crushing kingsideAttack middlegame short,https://lichess.org/RUMDoBr2/black#48
COQJO,4r1k1/pp2qppp/n2p4/2pP4/2P5/P5P1/RP3P1P/1B1QrRK1 w - - 1 21,f1e1 e7e1 d1e1 e8e1,402,115,100,199,advantage kingsideAttack middlegame short,https://lichess.org/RB5X3qHK#41
ULKi7,r3r1k1/p3bppp/2nq1B2/3p4/2p3b1/P4N2/BPPNQPPP/R3R1K1 b - - 0 15,e7f6 e2e8 a8e8 e1e8,519,105,84,343,crushing kingsideAttack middlegame short,https://lichess.org/2F7lT4QE/black#30
U9LaF,r5k1/4qppp/p7/1pn1r3/2p3Q1/P3B1P1/1PP2P1P/R3R1K1 w - - 2 21,e3d4 e5e1 a1e1 e7e1,404,89,76,97,crushing kingsideAttack middlegame short,https://lichess.org/iM1LAAkp#41
OLqwB,r1b2rk1/1p2bppp/p1q1pn2/8/2P5/2N1B2P/PP1QBPP1/2KR3R b - - 1 14,f8d8 d2d8 e7d8 d1d8,499,106,82,394,crushing kingsideAttack middlegame short,https://lichess.org/QooCsPcw/black#28
bTfAT,r1b3k1/p3qpp1/2p2n1p/2Ppr3/8/P1NB4/1PQ2PPP/R3R1K1 w - - 2 18,b2b4 e5e1 a1e1 e7e1,544,98,66,186,crushing kingsideAttack middlegame short,https://lichess.org/e5v9kAvg#35
BrkSq,r6k/pp1q2pp/n4b2/8/3pR3/P2P3P/1PP1Q1P1/4R1K1 b - - 5 25,h7h6 e4e8 a8e8 e2e8 d7e8 e1e8,540,86,75,137,crushing kingsideAttack long middlegame,https://lichess.org/AxCCiLiG/black#50
IwTKh,r4rk1/1pp2pp1/2pb1q1p/1p6/6b1/3PRN2/PPPBQPPP/R5K1 b - - 2 14,f8e8 e3e8 a8e8 e2e8,470,102,69,158,advantage kingsideAttack middlegame short,https://lichess.org/UZq9merW/black#28
CE4qk,r5k1/pb2qpbp/1p1p1np1/2pPr3/2P5/2NB4/PPQB1PPP/R3R1K1 w - - 2 16,d2f4 e5e1 a1e1 e7e1,400,103,62,159,advantage kingsideAttack middlegame short,https://lichess.org/TJ3VFjp0#31
5TefB,4r1k1/3n1pnp/q2p2p1/2pP4/2P5/1Q2NN1P/1R3PPK/8 b - - 5 34,e8b8 b3b8 d7b8 b2b8 g7e8 b8e8,538,97,84,207,crushing kingsideAttack long master middlegame,https://lichess.org/mLObWz9B/black#68
Knbio,3r1rk1/p2qbp1p/bp2p1p1/2p4N/4nP2/1P1BP2R/PBP3PP/R2Q2K1 w - - 5 17,d3e4 d7d1 a1d1 d8d1,589,107,74,389,crushing kingsideAttack master middlegame short,https://lichess.org/855MttUV#33
PSMPE,r1b2rk1/pp3qp1/2n2p1p/7P/3PQ1P1/2P2N1B/4R3/3RK3 b - - 4 31,f8e8 e4e8 f7e8 e2e8,530,104,77,448,crushing kingsideAttack middlegame short,https://lichess.org/PiGrG7dF/black#62
Sj30j,r3r1k1/pp3ppp/3q4/2b1R3/3p4/P4N2/1P3PPP/R3Q1K1 b - - 2 19,d4d3 e5e8 a8e8 e1e8,567,92,83,83,crushing kingsideAttack middlegame short,https://lichess.org/xKAUoEnJ/black#38
jgYLP,3r1rk1/1pq2ppp/p2b4/2p5/2b5/2N1QBP1/PP3P1P/R3R1K1 b - - 1 20,f8e8 e3e8 d8e8 e1e8,400,102,86,653,advantage kingsideAttack middlegame short,https://lichess.org/qLK1QJgn/black#40
5VM40,2rr2k1/5pb1/1p2p1p1/p3N2p/Pn1q1B1P/R7/1P1R1PP1/3Q2K1 b - - 1 24,d4f4 d2d8 c8d8 d1d8,562,88,100,361,advantage kingsideAttack middlegame short,https://lichess.org/jIPsNLSQ/black#48
ydN7g,4r3/2q2pk1/3p2pp/p1pnr3/4P2P/N2Q1P2/1P4P1/R3R1K1 w - - 0 33,e4d5 e5e1 a1e1 e8e1,550,87,67,73,advantage kingsideAttack middlegame short,https://lichess.org/r8PUGsKl#65
CARhv,r3r1k1/1bpn1pbp/1p1p2p1/p2P4/8/2N1RN1P/PPP2PP1/4RBK1 b - - 2 17,f7f5 e3e8 a8e8 e1e8,411,106,100,152,advantage kingsideAttack middlegame short,https://lichess.org/HtwBv96a/black#34
fQDHl,r5k1/pp1q1ppp/2p2bn1/6N1/3PQ3/1PP5/P2B2PP/4R1K1 b - - 0 23,a8e8 e4e8 d7e8 e1e8,587,107,83,423,crushing kingsideAttack middlegame short,https://lichess.org/P7zCaudQ/black#46
sLj6J,1r1r2k1/pb3pp1/4p2p/6q1/1P1RP3/3Q4/5PPP/1N1R2K1 b - - 4 24,a7a6 d4d8 g5d8 d3d8 b8d8 d1d8,574,84,100,72,crushing kingsideAttack long middlegame,https://lichess.org/YSXro9t7/black#48
BCg0k,4rrk1/pp4pp/8/2p5/3p2b1/3P1n2/PPP3PP/R2BQ2K w - - 0 22,e1g3 e8e1 g3e1 f3e1,596,95,88,206,crushing kingsideAttack middlegame short,https://lichess.org/QW1NjoXU#43
HwvyE,2kr1bnr/1pp3pp/p2qp3/8/2Q1P3/2N5/PP3PPP/R1B2RK1 w - - 0 13,f1d1 d6d1 c3d1 d8d1 c4f1 d1f1,594,86,100,68,advantage kingsideAttack long middlegame,https://lichess.org/rwpIgSr9#25
iAgUC,4r1k1/p4ppp/b2q1B2/3p4/3Pn3/4QN2/PPP2PPP/4R1K1 b - - 0 20,e4f6 e3e8 f6e8 e1e8 d6f8 e8f8,465,94,70,104,advantage kingsideAttack long middlegame,https://lichess.org/wJYqNlPn/black#40
60Uau,4rr1k/pp1n1p2/7p/3p4/3P3q/2P2Q1p/PP3R1K/R4N2 b - - 3 23,d7f6 f3f6 h4f6 f2f6,488,101,91,406,advantage kingsideAttack middlegame short,https://lichess.org/yAwk4S34/black#46
cas40,3r2k1/pbpq1ppp/1p4n1/2p1PP1B/2P5/P5B1/1P3QPP/3r1RK1 w - - 0 23,f1d1 d7d1 h5d1 d8d1 f2f1 d1f1,496,98,87,311,advantage kingsideAttack long middlegame,https://lichess.org/UfY6R3QN#45
Q12YZ,r5k1/pp3r1p/3p4/2p1bq2/7Q/4B1n1/PP3PPP/3R1R1K w - - 0 29,f2g3 f5f1 d1f1 f7f1,484,98,100,145,crushing kingsideAttack middlegame short,https://lichess.org/0YLuGehG#57
6B15M,r1b1r1k1/pp4pp/6q1/3p2B1/3PpP2/7P/PP2Q1P1/4RRK1 b - f3 0 20,e4f3 e2e8 g6e8 e1e8,555,106,97,555,crushing kingsideAttack middlegame short,https://lichess.org/7AaGrN5y/black#40
wjqjF,r3r1k1/pp3pp1/3q3p/2p5/3pb3/4R2P/PPPQ1PP1/4R1K1 b - - 1 21,e4d5 e3e8 a8e8 e1e8,470,99,71,270,advantage kingsideAttack middlegame short,https://lichess.org/KqpITbo6/black#42
6IuC7,4rrk1/1b2qppp/p7/2p1N3/3p4/3P2QP/PP3PP1/R3R1K1 w - - 0 20,e5g6 e7e1 a1e1 e8e1,567,89,44,57,advantage kingsideAttack middlegame short,https://lichess.org/CparyFQw#39
xszkF,4r1k1/1pp1qpp1/p1n2n1p/3p4/3P4/2BQ1b2/PPP1BPPP/4R1K1 w - - 0 17,e2f3 e7e1 c3e1 e8e1 d3f1 e1f1,540,95,87,175,advantage kingsideAttack long middlegame,https://lichess.org/ZnQlChMi#33
Hapx1,r1b2rk1/ppp2ppp/2nq1n2/3p4/3P4/2N2N2/PPP1QPPP/2K1RB1R b - - 1 10,f8e8 e2e8 f6e8 e1e8 d6f8 e8f8,439,111,81,283,advantage kingsideAttack long opening,https://lichess.org/4zbYMr58/black#20
sU3cK,3r2k1/p4pbp/1q2bnp1/1N1pp3/2P5/1P2P3/P2Q1PPP/R2R2K1 b - - 5 26,d5c4 d2d8 b6d8 d1d8,554,97,90,162,crushing kingsideAttack middlegame short,https://lichess.org/91ArNirT/black#52
ktney,r1bqr1k1/ppp1npbp/6p1/3p4/1n6/P1NP1NP1/1PP1QPBP/R1B1R1K1 b - - 0 11,e7f5 e2e8 d8e8 e1e8,566,103,96,212,crushing kingsideAttack opening short,https://lichess.org/vMONv86A/black#22
WtMVa,5rk1/6pn/p4p1p/qpr5/3QP3/1P3R1P/P5P1/B2R3K b - - 1 27,f8d8 d4d8 a5d8 d1d8,570,92,100,84,crushing kingsideAttack middlegame short,https://lichess.org/AqhcZl2I/black#54
yZLqW,1r2r1k1/5p2/p2pbqp1/8/1pPpRP1p/3P3P/PPB2QPK/4R3 b - - 3 30,e6f5 e4e8 b8e8 e1e8,551,88,83,185,crushing kingsideAttack master middlegame short,https://lichess.org/ZYrL2TLz/black#60
DewpK,r1r3k1/p1p2pp1/Bp4np/2P2b2/1P1R4/4B3/P4PPP/3R2K1 b - - 5 21,c8d8 d4d8 a8d8 d1d8,584,86,65,136,crushing kingsideAttack middlegame short,https://lichess.org/hrjd9ndR/black#42
t3n68,2r1r1k1/2q2ppp/3b4/1p1pn3/1P4P1/2P4P/3BQP2/R3RNK1 b - - 1 22,e5c4 e2e8 c8e8 e1e8,579,83,100,49,advantage kingsideAttack middlegame short,https://lichess.org/8xzQIYbx/black#44
XM4Y6,r2qr1k1/pp3pp1/2pb3p/8/3PR2N/6P1/PP2QP1P/R5K1 b - - 2 17,d8f6 e4e8 a8e8 e2e8,468,86,79,86,crushing kingsideAttack middlegame short,https://lichess.org/GGpK8Yke/black#34
KsKhj,4r3/pb2qpkp/1p1p1np1/2pP4/2P2P2/2N2B1P/PP1Q2P1/5RK1 w - - 0 20,f1e1 e7e1 d2e1 e8e1,491,83,44,70,crushing kingsideAttack master middlegame short,https://lichess.org/9EtYMhPI#39
cP1DL,4r1k1/6pp/bpp2pq1/3p4/3Nn3/2B1Q3/PPP2PPP/4R1K1 b - - 11 22,e4c3 e3e8 g6e8 e1e8,569,87,100,203,advantage kingsideAttack middlegame short,https://lichess.org/lQYL5nrl/black#44
jhYyl,4r1k1/3b1pnp/pq1p2p1/2p1r3/1pP5/1P1P1B1P/PQ1N1PP1/R3R1K1 w - - 2 20,f3d5 e5e1 a1e1 e8e1,562,104,93,407,crushing kingsideAttack middlegame short,https://lichess.org/TS56V6kC#39
JXHKH,2rr1bk1/1p1q1ppp/4p3/4P3/4Q3/P5P1/1B3P1P/1R2R1K1 w - - 4 26,e1d1 d7d1 b1d1 d8d1,465,99,91,826,crushing kingsideAttack middlegame short,https://lichess.org/fgfbaAgb#51
sZETY,4r1k1/qp3pbp/6p1/1QP1r3/B2p4/P5P1/1P5P/2R1R1K1 w - - 0 30,b2b4 e5e1 c1e1 e8e1,481,88,72,201,crushing kingsideAttack middlegame short,https://lichess.org/ghWMUtSP#59
E8T3j,r3r1k1/4ppbp/1q1P2p1/2n5/pp1N1B2/4Q3/PPP3PP/1K1RR3 b - - 0 22,e7d6 e3e8 a8e8 e1e8,568,92,100,184,crushing kingsideAttack middlegame short,https://lichess.org/XEe9nQek/black#44
7EBld,r3r1k1/bpp1qpp1/p1bp3p/P7/1PBP4/1Q2B3/5PPP/R3R1K1 w - - 0 18,e3h6 e7e1 a1e1 e8e1,436,106,87,1288,crushing kingsideAttack middlegame short,https://lichess.org/x6j88LDg#35
NpWpo,r3r1k1/pp1q3p/2pb2p1/3p1p2/3Pn3/2P1QNP1/PP1NR1PP/4R1K1 b - - 1 19,e4g3 e3e8 a8e8 e2e8,490,102,87,469,advantage kingsideAttack middlegame short,https://lichess.org/4BAoZ9Kc/black#38
7HKzo,1r1r2k1/p1q2pp1/1p3b1p/8/2P1Q1B1/1P1p2P1/P2R1PP1/4R1K1 b - - 1 29,d8e8 e4e8 b8e8 e1e8,528,103,90,246,advantage kingsideAttack middlegame short,https://lichess.org/RNxbj5a9/black#58
qJWGR,2r3k1/2r3qp/p3p1p1/1p1b1p2/1P6/P1PR4/3Q1PPP/2R2BK1 b - - 1 30,d5c4 d3d8 g7f8 d8f8,471,101,77,320,crushing kingsideAttack middlegame short,https://lichess.org/fiIHBVL6/black#60
NlFD7,r4rk1/pp2ppbp/2q1b1p1/8/8/P3B2P/1PPQ1PP1/2KR1B1R b - - 0 13,f8d8 d2d8 a8d8 d1d8,585,84,88,52,crushing kingsideAttack middlegame short,https://lichess.org/D9cQEis7/black#26
JTkKZ,4r1k1/pb3pbp/2p1rnp1/P3q3/3p4/1PN1PB1P/1B3PP1/1R1QR1K1 w - - 0 20,e3d4 e5e1 d1e1 e6e1 b1e1 e8e1,572,91,84,253,advantage kingsideAttack long middlegame,https://lichess.org/8qOEBizO#39
FQhNn,4r1k1/p1p1rppp/bp6/3B4/5P2/2N5/PPP3PP/R3R1K1 w - - 5 20,h2h3 e7e1 a1e1 e8e1,567,93,75,131,crushing kingsideAttack middlegame short,https://lichess.org/aef52Y2x#39
RZ3ro,r2r3k/6bp/pp3pp1/8/1n5B/1P2PN2/P2R1PPP/3R2K1 b - - 4 25,b4a2 d2d8 a8d8 d1d8,590,92,100,106,crushing kingsideAttack middlegame short,https://lichess.org/Y34or4zm/black#50
IrSMz,3r4/pbk3p1/2p2p2/P1R5/2N1pPP1/3rP2p/5B1P/2R3K1 w - - 1 30,g4g5 d3d1 c1d1 d8d1 f2e1 d1e1,494,89,100,377,advantage kingsideAttack long middlegame,https://lichess.org/uBGOWucW#59
yZuf9,4qr1k/1b1p2p1/p2Q1p1p/1pB2P2/8/1B6/Pb3PP1/5RK1 b - - 3 30,b2e5 d6f8 e8f8 c5f8,556,107,91,712,advantage kingsideAttack middlegame short,https://lichess.org/nsASFHRH/black#60
7aVbL,r4rk1/pp3pp1/2p2n2/5b2/3R4/2N2N1P/PPP3P1/2KR4 b - - 0 16,f8d8 d4d8 a8d8 d1d8,422,101,71,662,crushing kingsideAttack middlegame short,https://lichess.org/CaPV2TkM/black#32
U9Kfv,3r2k1/pp1q1pp1/4pb1p/3r4/2N5/P3PN2/4QPPP/1R1R2K1 w - - 4 24,e3e4 d5d1 b1d1 d7d1,559,101,78,144,crushing kingsideAttack middlegame short,https://lichess.org/CZzMH309#47
bWKUQ,r4rk1/p2Q1pbp/1p2p1p1/7n/2B5/4B2P/Pq3PP1/2RR2K1 b - - 1 23,f8d8 d7d8 a8d8 d1d8,507,89,91,183,advantage kingsideAttack middlegame short,https://lichess.org/KeaXaug1/black#46
ZVrCG,3r1rk1/pppqb1pp/5p2/n3p2Q/8/2P1P1BP/PP3PPN/RN3RK1 w - - 2 16,f1d1 d7d1 h5d1 d8d1,499,116,82,365,crushing kingsideAttack middlegame short,https://lichess.org/fPvwXytL#31
uYTuE,r3q1k1/pp1brp1p/1npp2pQ/3P4/2P5/1PNB4/PB3PPb/R3R1K1 w - - 0 20,h6h2 e7e1 a1e1 e8e1,571,108,72,204,advantage kingsideAttack middlegame short,https://lichess.org/MCs7Btb6#39
FLwSk,4rrk1/pbp1qpb1/2p3pp/3p4/2B1P3/2N2Q2/PPP2PPP/3RR1K1 w - - 0 14,e4d5 e7e1 d1e1 e8e1,550,87,71,160,advantage kingsideAttack middlegame short,https://lichess.org/trZaU9xc#27
smRlq,2k1r3/pp4p1/2p4p/3pr1b1/8/PNNP2P1/1P3P2/R3R1K1 w - - 2 24,d3d4 e5e1 a1e1 e8e1,596,109,57,88,crushing kingsideAttack middlegame short,https://lichess.org/ytFwzrVZ#47
X8axR,2Q2rk1/p4pp1/bp2pn1p/q7/3PP3/2R2N2/P4PPP/1BR3K1 b - - 0 19,f8c8 c3c8 a6c8 c1c8 f6e8 c8e8,463,106,79,409,advantage kingsideAttack long middlegame,https://lichess.org/EQBixQQR/black#38
O9dnx,rn3k1r/p1p2qp1/1p5p/3p4/1B1P4/1N2QP1n/PPB4P/2K1R3 b - - 5 22,f8g8 e3e8 f7e8 e1e8,454,110,95,753,crushing kingsideAttack middlegame short,https://lichess.org/zNeBcou8/black#44
y6Xmc,5rk1/p2n1ppp/b2qpb2/8/8/3PBN2/P1Q1BPPP/2R3K1 b - - 4 20,f8c8 c2c8 a6c8 c1c8 d6f8 c8f8,590,87,70,152,advantage kingsideAttack long middlegame,https://lichess.org/pOC0r4Vt/black#40
E9lOt,r1b3k1/p3qpbp/6p1/3p4/2p2Q2/2P5/PPBNrPPP/R3R1K1 w - - 4 18,f4f3 e2e1 a1e1 e7e1,587,106,82,294,crushing kingsideAttack middlegame short,https://lichess.org/Tj7CMam1#35
BGkM4,2bq1rk1/5Bp1/p6p/1pp5/P6b/8/1PPQ1PPP/3R1RK1 b - - 0 18,f8f7 d2d8 h4d8 d1d8,471,101,100,107,advantage kingsideAttack master middlegame short,https://lichess.org/PsIODkWH/black#36
RZF4m,r3r1k1/pp2qpp1/2p4p/3p4/3b2b1/2P1P1P1/PPQ2PBP/R3R1K1 w - - 0 18,e3d4 e7e1 a1e1 e8e1,477,100,100,294,crushing kingsideAttack middlegame short,https://lichess.org/HrdvYk1t#35
wOZTk,2r2k2/1p1b1ppB/2r1p3/p1qp4/8/P1NQP3/5PPP/R1R3K1 w - - 2 22,c3e2 c5c1 e2c1 c6c1 d3f1 c1f1,482,86,100,238,advantage kingsideAttack long middlegame,https://lichess.org/CMS7uFNc#43
ddrIv,rn1qr1k1/pbp1bpp1/1p5p/3p4/7N/1B1P4/PPP1QPPP/R1B1R1K1 b - - 7 12,e7h4 e2e8 d8e8 e1e8,443,107,88,496,advantage kingsideAttack opening short,https://lichess.org/1r7n7JIG/black#24
RRAPx,2r1r1k1/4ppbp/p4Bp1/q7/P7/2N1Q3/1P3PPP/3RR1K1 b - - 0 19,e7f6 e3e8 c8e8 e1e8,523,106,82,161,advantage kingsideAttack middlegame short,https://lichess.org/QJJxOFgP/black#38
FMGdj,5rk1/p1q1npb1/1p4pp/2p1p3/P1P5/2P2N1P/1P1QBPP1/3R2K1 b - - 0 21,f8d8 d2d8 c7d8 d1d8,505,106,94,852,crushing kingsideAttack master middlegame short,https://lichess.org/RRLNKnl1/black#42
jng0F,1r3rk1/2q2p2/2p1N1pp/p1PpPRb1/8/5Q2/PP4PP/5RK1 b - - 1 24,f7e6 f5f8 b8f8 f3f8,513,95,100,364,crushing kingsideAttack middlegame short,https://lichess.org/uTh1k9Dx/black#48
kR1BX,2r1r1k1/5pBp/b3q3/p2p1N2/8/1PP2Rn1/P5PP/R3Q2K w - - 1 27,f5g3 e6e1 a1e1 e8e1,504,105,94,212,crushing kingsideAttack middlegame short,https://lichess.org/hrYqmOkp#53
xE294,3rr3/1p3p1k/p1p1q1pb/7p/P1pP4/2P3NP/1PQ2PP1/R4RK1 w - - 5 24,a1e1 e6e1 f1e1 e8e1,598,81,84,87,advantage kingsideAttack middlegame short,https://lichess.org/7X8GkmSe#47
FEGre,6k1/4qppp/1pB5/p2pr3/2b5/P7/1P1Q1PPP/R1B3KR w - - 3 24,g2g3 e5e1 d2e1 e7e1,474,107,93,938,advantage kingsideAttack middlegame short,https://lichess.org/0apGMJ1E#47
E3xbU,r1b2rk1/pp3ppp/2n1p3/2q5/2B2P2/1P3NP1/P1PQ3P/2KR3R b - - 7 19,f8d8 d2d8 c6d8 d1d8,424,101,74,341,advantage kingsideAttack middlegame short,https://lichess.org/D1oOqXVC/black#38
IIqf5,r5kr/pp1Q1ppp/1qp1p3/4P3/1b6/1P2B3/P1P2PPP/3R2K1 b - - 7 21,a8d8 d7d8 b6d8 d1d8,527,89,100,260,crushing kingsideAttack middlegame short,https://lichess.org/GAw1Q8UN/black#42
93dCc,r5k1/pp3ppp/2n1p3/1bq1N3/5P2/2P5/PP1Q1PBP/3R2K1 b - - 5 21,a8d8 d2d8 c6d8 d1d8,526,94,94,339,advantage kingsideAttack master middlegame short,https://lichess.org/w1mkRL42/black#42
93qgw,r4r2/1p4k1/2n2qp1/p1P1p3/P1PpB1Q1/1N1Pb1P1/7P/1R2R2K w - - 1 26,e1f1 f6f1 b1f1 f8f1,400,115,97,305,crushing kingsideAttack master middlegame short,https://lichess.org/kLmcgVSq#51
eBMpJ,3r4/p1p1kppp/1pp5/4P1P1/7b/4BPNb/PPP1R2P/2Rr2K1 w - - 9 22,c1d1 d8d1 e2e1 d1e1,400,95,100,201,crushing kingsideAttack middlegame short,https://lichess.org/pY3NaB19#43
P05rm,4rrk1/1p2qpb1/p2p1pnp/2pP2p1/2P5/1PN2P1P/P1Q2PP1/1BR2RK1 w - - 3 17,f1e1 e7e1 c1e1 e8e1,592,99,64,210,advantage kingsideAttack middlegame short,https://lichess.org/phi6heZW#33
GShWR,6rk/5p1p/pp1p2r1/4p3/1PPpP2q/PN1PnQ1P/4RRP1/6K1 b - - 2 29,g6f6 f3f6 h4f6 f2f6,567,110,80,296,crushing kingsideAttack middlegame short,https://lichess.org/YHsOoaK1/black#58
rFslX,4r3/p1pq2kp/1p1p1np1/1P1Pr3/P2QB1P1/7P/1P3P2/R3R1K1 w - - 1 24,e4g2 e5e1 a1e1 e8e1,568,108,80,623,crushing kingsideAttack middlegame short,https://lichess.org/Y82csbVM#47
XDWdy,1b2r2k/1p3qp1/p1p4p/8/3Ppr2/P1P1QB1P/1P4P1/4RR1K w - - 0 33,f3g4 f4f1 e1f1 f7f1,518,92,100,169,crushing kingsideAttack middlegame short,https://lichess.org/5M5kgEcH#65
qUtsR,4r1k1/1b2rpp1/p4n1p/1p6/3q4/1BN1P2P/PP4P1/3RR1K1 w - - 0 23,e3d4 e7e1 d1e1 e8e1,529,111,92,206,crushing kingsideAttack middlegame short,https://lichess.org/dt3QnaPW#45
WvAd8,1r2r1k1/p4p1p/1p6/n1pP1p2/P1P1p1q1/4RPP1/6BP/4RQK1 b - - 0 27,e4f3 e3e8 b8e8 e1e8,571,89,97,331,advantage kingsideAttack middlegame short,https://lichess.org/oMaQo9Tw/black#54
hlgVr,2r2rk1/1p3ppp/p3b3/2q1P3/3p1B2/P2Q4/1P2RPPP/R5K1 w - - 0 21,a1c1 c5c1 f4c1 c8c1 e2e1 c1e1,598,101,87,449,crushing kingsideAttack long middlegame,https://lichess.org/AWTgv1Lr#41
PzuXu,r4rk1/1pq2pbp/p1np2p1/2p5/2N2Bb1/2PP1N2/PP2QPPP/R3R1K1 b - - 6 14,f8e8 e2e8 a8e8 e1e8,511,101,81,162,advantage kingsideAttack middlegame short,https://lichess.org/2WAM44gV/black#28
ecAdy,r5k1/1p1q2pp/p4pn1/2p5/3b1P2/2NP2B1/PP2Q1PP/4R2K b - - 0 21,a8e8 e2e8 d7e8 e1e8,580,104,74,290,crushing kingsideAttack middlegame short,https://lichess.org/0Ki5qDwH/black#42
BWCUB,r3r1k1/ppp2p2/1n1p1bp1/8/8/5N1P/P2BRPP1/4R1K1 b - - 5 25,b6c4 e2e8 a8e8 e1e8,500,94,87,57,advantage kingsideAttack middlegame short,https://lichess.org/lvbMYNNb/black#50
9iZzB,3qr3/pb2rpkp/1p1p2p1/2pn4/4PP1N/P2Q2P1/1P4BP/2R1R1K1 w - - 0 22,e4d5 e7e1 c1e1 e8e1,400,108,90,1238,crushing kingsideAttack middlegame short,https://lichess.org/b6Iqy6Zb#43
n3gku,r3r1k1/p1q1nppp/1p6/2p5/2Pp4/PP3PP1/3NQP1P/R3R1K1 b - - 5 16,e7g6 e2e8 a8e8 e1e8,547,105,79,732,advantage kingsideAttack middlegame short,https://lichess.org/pWGKNGFs/black#32
YpAL9,4r1k1/ppq2ppb/5b1p/2pBr3/8/1P1P1QP1/P1PN3P/4RRK1 w - - 2 20,d2c4 e5e1 f1e1 e8e1,462,113,85,327,crushing kingsideAttack middlegame short,https://lichess.org/bWwtwKjk#39
nOX8D,7k/4r2p/2pbq3/1p1n1pp1/p2P4/P1P2NP1/BP3PQP/R5K1 w - - 0 28,a1e1 e6e1 f3e1 e7e1 g2f1 e1f1,567,83,100,176,advantage kingsideAttack long middlegame,https://lichess.org/WRlPAgUr#55
GfPKH,3r2k1/p4pb1/1p4p1/2p5/4n3/2PrPN2/PP1N1PP1/R2R2K1 w - - 2 22,d2e4 d3d1 a1d1 d8d1,581,86,100,41,advantage kingsideAttack master middlegame short,https://lichess.org/pTE3Hnu9#43
9r4Ff,4r1k1/pppn2pp/1b2rp2/3pN2b/3P1B2/2PB3P/PP3PP1/R3R1K1 w - - 0 21,e5d7 e6e1 a1e1 e8e1,509,95,100,93,advantage kingsideAttack middlegame short,https://lichess.org/17Wqdm5Q#41
9sup5,r3r1k1/pp3ppp/3q4/3pn2n/8/2PBQ2P/PP1N1PP1/R3R1K1 b - - 3 16,e5d3 e3e8 a8e8 e1e8 d6f8 e8f8,427,113,91,1067,crushing kingsideAttack long middlegame,https://lichess.org/fhw0kPI2/black#32
p4T6Y,1r2r1k1/p1p1nppp/2p2q2/8/4Q3/2P4P/PB3PP1/1R2R1K1 b - - 0 18,e7g6 e4e8 b8e8 e1e8,537,104,85,203,crushing kingsideAttack middlegame short,https://lichess.org/zzSUt1be/black#36
r4dt3,2q1r1k1/p1p2pp1/1p1b3p/3Pp3/2PB4/5PPb/P3Q2P/1R2R1K1 b - - 4 19,e5d4 e2e8 c8e8 e1e8,551,86,66,328,advantage kingsideAttack middlegame short,https://lichess.org/qCbQmryh/black#38
hujYp,2rr2k1/pp2ppbp/4q1p1/3bP3/5P2/4B1NP/PP1Q2P1/2RR2K1 b - - 0 24,d5c6 d2d8 c8d8 d1d8,516,104,81,404,advantage kingsideAttack middlegame short,https://lichess.org/9nxxJIjT/black#48
NzgsN,r2r2k1/5ppp/2q1bn2/p2p4/1p2PN2/1P1Q2N1/P2R1PPP/3R2K1 b - - 0 22,d5e4 d3d8 a8d8 d2d8,575,106,82,658,crushing kingsideAttack middlegame short,https://lichess.org/ErArOKKs/black#44
VTP2K,5rk1/1p3pbp/1qp3p1/2r3P1/7P/1P3P2/P1PQ4/1K1R3R b - - 0 23,f8d8 d2d8 b6d8 d1d8,575,106,79,258,crushing kingsideAttack middlegame short,https://lichess.org/8qVf6OkF/black#46`,
  },
  {
    id: 'middlegame', title: 'Тактика миттельшпиля', short: 'Тактика миттельшпиля',
    // task_middlegame600.csv — middlegame tactics, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
NN4Fl,rn1qk2r/p3ppb1/1pp1b1pp/3p4/3PnB2/1QPBPN1P/PP1N1PP1/R3K2R w KQkq - 1 10,d2e4 d5e4 b3e6 f7e6,572,238,100,5,advantage middlegame short,https://lichess.org/JkytWN5A#19
RZf66,rnb1k1nr/p2p1p1p/2p2qpb/1p2p3/2B1P3/1Q6/PPPP1PPP/RNB1K1NR w KQkq - 0 7,c4f7 f6f7 b3f7 e8f7,579,95,83,224,advantage middlegame short,https://lichess.org/qZBiwPdm#13
uiMc0,rnb1k1nr/p1b1qpp1/2pp3p/1p2p1P1/2B1P3/1QPP1N2/PP3P1P/RNB1K2R w KQkq - 0 9,c4f7 e7f7 b3f7 e8f7,575,84,95,958,advantage middlegame short,https://lichess.org/1c68FwgD#17
AqQzD,r1b1k2r/1pp1qpp1/2np4/p1b1p2p/P1B1P1n1/1QPP1N1P/1P1N1PP1/R1B2RK1 w kq - 2 11,c4f7 e7f7 b3f7 e8f7,597,102,85,503,advantage middlegame short,https://lichess.org/npOhSe7r#21
NdMxQ,rnb1k1nr/1pp2pQp/p2p1q2/2b1p3/2B1P3/2N5/PPPP1PPP/R1B1K1NR w KQkq - 1 6,c4f7 f6f7 g7f7 e8f7,527,100,81,132,advantage middlegame short,https://lichess.org/NPCg5tOW#11
H86Le,r3k1nr/1bpq1p2/pb1p2pp/1p2p3/4P3/P2P1QNP/BPP2PP1/R1B2RK1 w kq - 2 16,f3f7 d7f7 a2f7 e8f7,586,100,75,406,advantage middlegame short,https://lichess.org/h7qJAznZ#31
XFxt1,r3kbnr/2p2pp1/ppnp2qp/4p3/2B1P2P/1QPPBP2/PP2KP2/RN5R w kq - 0 13,c4f7 g6f7 b3f7 e8f7,588,109,78,296,advantage middlegame short,https://lichess.org/J7XwCQgy#25
GZ240,rnb1k2r/pp3ppp/2p1p3/q2p4/1bPP1B2/2P1PN2/P1Q2PPP/2R1KB1R b Kkq - 0 9,b4c3 c2c3 a5c3 c1c3,599,101,75,248,advantage middlegame short,https://lichess.org/KxZNvFlu/black#18
XA55V,rnb1k2r/pp4pp/2p1p3/q2pN3/P2PpB2/1Pb1P3/2PN1PPP/1R1QK2R b Kkq - 1 12,c3d2 d1d2 a5d2 e1d2,578,107,83,310,advantage middlegame short,https://lichess.org/pWqSjYaI/black#24
RPbP7,r2qkb1r/1b2pppp/pnn1P3/1Q1p4/2pP1P2/2P2N2/1P4PP/RNB1KB1R w KQkq - 0 12,e6f7 e8f7 b5c6 b7c6,583,90,79,322,advantage master middlegame short,https://lichess.org/kGF4IR09#23
L34gr,r3kb1r/1b1nqpp1/p1p1p2p/1p1nP1NQ/3P4/3B4/PP3PPP/RNB2RK1 w kq - 2 13,h5f7 e7f7 g5f7 e8f7,495,86,85,133,advantage middlegame short,https://lichess.org/043tNh0G#25
Cu1Td,2k1rbr1/pppnqppp/3p1nb1/8/6P1/1P1P1N1P/PBPNQP2/2K1RB1R w - - 1 14,f1g2 e7e2 e1e2 e8e2,544,97,83,198,advantage middlegame short,https://lichess.org/hKgnnUDv#27
gleL9,rnb1k2r/pp3ppp/2p1p3/3p4/1bPP1B2/q1P1PN2/P1QK1PPP/3R1B1R b kq - 2 10,b4c3 c2c3 a3c3 d2c3,580,109,82,155,advantage middlegame short,https://lichess.org/5FBu8d1x/black#20
W69yW,r1b1k2r/pp2np1p/1qn1p1p1/2bpP3/1P6/2PB2Q1/P4PPP/RNB1K1NR b KQkq - 0 9,c5f2 g3f2 b6f2 e1f2,580,95,70,157,advantage middlegame short,https://lichess.org/bDSEA4PE/black#18
CXN5w,r3k2r/ppp2ppp/2nqpn2/3pN3/Q1PP2b1/4P3/PP1B1PPP/R3KB1R w KQkq - 1 9,d2b4 d6b4 a4b4 c6b4,480,89,94,229,advantage middlegame short,https://lichess.org/SFqwRrwO#17
jHEVC,r3k1nr/ppp2ppp/3p4/2bNp2b/2B1P2q/P2P1P1P/1PPBQP2/R3K2R b KQkq - 4 11,c5f2 e2f2 h4f2 e1f2,583,97,82,125,advantage middlegame short,https://lichess.org/gUljh6A2/black#22
fEPhP,3qk2r/p2nbppb/2Q1p2p/1B1pPn2/3P4/2P1BN1P/Pr1N1PP1/R3K2R w KQk - 2 13,c6d7 d8d7 b5d7 e8d7,581,97,84,380,advantage middlegame short,https://lichess.org/FLX89RoG#25
5jgXW,r1b2r2/pp1kqBpp/2np1n2/2p1p3/4P3/1QP5/PP1P1PPP/RNB1K2R w KQ - 0 10,f7e6 e7e6 b3e6 d7e6,586,88,85,169,advantage middlegame short,https://lichess.org/yVZyYTWW#19
i2OoR,2r2rk1/2qnbpp1/pp1p1n1p/3bpP2/2P1P1P1/1N2BB2/PPQ4P/2R2R1K w - - 0 19,c4d5 c7c2 c1c2 c8c2,448,98,87,168,crushing middlegame short,https://lichess.org/VwA41mLW#37
u7mYk,1k3r1r/pp4p1/1qnb2p1/n1p1p1N1/2PpPpP1/P2P3P/KBQ2PB1/1R5R b - - 5 25,b6b3 c2b3 a5b3 a2b3,561,103,76,594,advantage middlegame short,https://lichess.org/iC1HhDi4/black#50
qlFvf,r1bkrb2/pp1n3p/1qpQ1np1/3p4/3P1B2/2NB1N2/PPP2PPP/2KR3R w - - 5 13,d6c7 b6c7 f4c7 d8c7,587,86,100,170,advantage middlegame short,https://lichess.org/FakzuvRZ#25
U31tQ,2kr1bnr/Qpp2ppp/q3p3/5b2/1nNP4/2N1PB2/PP3PPP/R1B1K2R w KQ - 3 13,f3b7 a6b7 a7b7 c8b7,579,105,84,124,advantage middlegame short,https://lichess.org/F3QyKb1v#25
5AJ9s,r1b3k1/ppppqrp1/1b5p/nP2p3/2B1n3/BQP5/P2P1PPP/RN3RK1 w - - 1 12,c4f7 e7f7 b3f7 g8f7,598,104,79,244,advantage middlegame short,https://lichess.org/t7Py6dS1#23
iPdSE,rn1q1rk1/1b1p1ppp/pp2N1n1/2b5/P1B1P3/2N1B3/1PPQ1PPP/3RK2R b K - 0 11,d7e6 d2d8 f8d8 d1d8,567,98,100,190,advantage middlegame short,https://lichess.org/pmQJENwv/black#22
sIY3i,3qk2r/r1pb1ppp/2BBpn2/p2p4/Qp1P4/2P1P3/PP3PPP/RN2K2R b KQk - 0 11,d7c6 a4c6 d8d7 c6d7,583,86,81,224,crushing middlegame short,https://lichess.org/1Dm6SwPq/black#22
Lu0n2,r2qk2r/pbpnn1b1/1p1pB1pp/3N4/3PP1Q1/8/PPP2PPP/R1B1R1K1 w kq - 5 13,e6d7 d8d7 g4d7 e8d7,580,93,76,85,advantage middlegame short,https://lichess.org/U4nMrs4f#25
lC71f,rn2k2r/p2bppbp/3p2p1/qPpP4/8/1QN1P1P1/PP3PBP/R1B1K2R b KQkq - 0 11,d7b5 b3b5 a5b5 c3b5,426,103,95,919,advantage middlegame short,https://lichess.org/bqTzEwas/black#22
SU6Tb,r1b2qk1/b3npp1/2pp1n1p/1p2p3/P1B1P3/1QPP4/5PPP/RNB2RK1 w - - 0 16,c4f7 f8f7 b3f7 g8f7,569,93,78,208,advantage middlegame short,https://lichess.org/SToDWHoe#31
68Ijs,r1b1kb1r/2p2pp1/p6p/np1B1q2/3Pp3/PQ2P2P/1P1N1PP1/R1B1K2R w KQkq - 2 14,d5f7 f5f7 b3f7 e8f7,583,120,0,69,advantage middlegame short,https://lichess.org/QoRJjIP5#27
TMy9s,r3k2r/qp2bppp/2p1pn2/2Pp4/1P1PnB2/3BPN2/2Q2PPP/1R3RK1 w kq - 5 15,b1a1 a7a1 f1a1 a8a1,465,101,97,431,advantage middlegame short,https://lichess.org/QvsTLbsV#29
GlL55,r4n2/3bqr1k/pp1p1ppb/2pPp1N1/P3P3/1BN2QR1/1PP3PP/5RK1 b - - 5 26,f6g5 f3f7 e7f7 f1f7,451,89,68,117,advantage middlegame short,https://lichess.org/hNtTRIDZ/black#52
YplGp,r2q1rk1/pp1bbppp/3p1n2/1PpP4/P3P3/2N2B2/5PPP/R1BQK2R b KQ - 0 13,d7g4 f3g4 f6g4 d1g4,507,97,80,402,crushing middlegame short,https://lichess.org/iHHOajGL/black#26
uGkIh,1r2k2r/1b1p3p/p1pb1ppQ/1p2q3/1P1pP3/PB1P3P/2P2PP1/R1B2RK1 w k - 4 17,c1f4 e5f4 h6f4 d6f4,582,87,94,491,middlegame,https://lichess.org/Y0lPvDW9#33
yosrf,r5k1/1p1qppbp/1Bnpb1p1/p1N3Pn/4PP2/7P/PPPQ2B1/1K1R3R b - - 1 21,d6c5 d2d7 e6d7 d1d7,473,109,95,1216,advantage middlegame short,https://lichess.org/t0BYisHC/black#42
oEdAh,r1b4r/1pq1kpp1/p1np1n1p/4p3/2B1P3/B1P2N2/P1P2PPP/R2QR1K1 w - - 4 13,a3d6 c7d6 d1d6 e7d6,570,100,93,592,advantage middlegame short,https://lichess.org/tssUFUOd#25
cmxqr,r1r3k1/4ppbp/1qppnnp1/pP6/2RP4/P2BPN1P/4QPPB/2R3K1 b - - 0 18,c6b5 c4c8 a8c8 c1c8,517,105,93,182,advantage middlegame short,https://lichess.org/yndyJbaS/black#36
MjlF5,r4rk1/1ppq2pp/p1npp3/2b1p1B1/4P2N/3P4/PPP2PPP/R2Q1RK1 b - - 1 13,c5f2 f1f2 f8f2 g1f2,551,99,69,181,advantage middlegame short,https://lichess.org/29x8dsv3/black#26
P1s0h,r3kb1r/pp1b1ppp/6n1/qB1p1N2/4np2/1PN5/PBP1Q1PP/R3K2R w KQkq - 2 13,b5d7 e8d7 e2b5 a5b5,529,101,71,92,advantage middlegame short,https://lichess.org/g9nhYpFb#25
RJj9Y,3r2k1/pb1rqpbp/1p1Rp1p1/2p1P3/2P1p3/1PB1P1P1/P2Q1PBP/3R2K1 b - - 6 22,g7f8 d6d7 d8d7 d2d7 e7d7 d1d7,566,90,95,928,crushing long middlegame,https://lichess.org/NMnbPldz/black#44
H2WED,2r1kb1r/5pp1/1qn1pn1p/p2pN2P/Pp1P2P1/3PB3/NPQ2P2/2R1K2R b Kk - 7 19,c6a7 c2c8 a7c8 c1c8,498,101,93,560,crushing middlegame short,https://lichess.org/dCXdG9b6/black#38
ORkkg,2r2rk1/3q1pbp/3pbnp1/Qpp1p3/4P3/1P1PB1PP/R1P1NPBK/5R2 b - - 3 17,c8a8 a5a8 f8a8 a2a8,585,104,93,1048,advantage middlegame short,https://lichess.org/z59r6eGl/black#34
FE2eG,r1b1r1k1/1p3ppp/pq2p3/2bpPnB1/7N/2N2Q2/PPP2PPP/R3R1K1 b - - 5 14,c5f2 f3f2 b6f2 g1f2,545,108,82,627,advantage middlegame short,https://lichess.org/koF8OkKM/black#28
BIqsK,5rk1/2qbbppp/p2p1nn1/2pPp3/2P1P3/P1NBBN1P/1Q3PP1/1R4K1 b - - 0 18,f8b8 b2b8 c7b8 b1b8,497,89,78,79,crushing middlegame short,https://lichess.org/mIF3xvEx/black#36
c1Q3Y,6rk/pp2npp1/1r2b2p/3pPp1P/q1pP3Q/P1P2NR1/2P1KPP1/R1B5 w - - 18 24,h4e7 a4c2,474,98,95,1779,advantage middlegame oneMove,https://lichess.org/2WLIcjGg#47
GLdEO,r5k1/pp1q1rbp/4b3/PPQppn2/5pp1/3P2P1/1B1NPPBP/1RR3K1 b - - 0 23,a8c8 c5c8 d7c8 c1c8,589,94,86,137,crushing master middlegame short,https://lichess.org/H0ti79Mo/black#46
3RHUi,2r3k1/p1rqbppp/1p1p1n2/3Pp3/4P3/Q3B2P/PPRNbPP1/2R1N1K1 b - - 12 20,d7b5 c2c7 c8c7 c1c7,522,101,89,743,crushing middlegame short,https://lichess.org/Ovt0GBWq/black#40
fZIWb,r2qk2r/ppp2pp1/2p2n2/2b1p3/4P1N1/2NP2p1/PPP2PP1/R1BQ1RK1 b kq - 0 11,f6g4 d1g4 g3f2 f1f2 c5f2 g1f2,571,85,100,150,advantage long middlegame,https://lichess.org/63Ay6Tet/black#22
IyUSb,2r3k1/1b1nbrpp/p3p3/1p1pPp2/1PqP1P2/P1P1BN2/2Q3PP/2R2R1K b - - 0 24,c4c3 c2c3 c8c3 c1c3,559,90,70,63,advantage middlegame short,https://lichess.org/gB4y482K/black#48
Gxd5r,1nr2rk1/ppq1bppp/4p3/3pN2n/NP1P1B2/P2QP3/5PPP/1R1R2K1 w - - 5 17,d1c1 c7c1 b1c1 c8c1,469,84,78,178,crushing middlegame short,https://lichess.org/utiGeRb2#33
xIbR2,rn5r/pp1qk1pp/2pbpn2/3p4/3P4/2N3PB/PPP1QP1P/R1B1K2R w KQ - 3 11,e2e6 d7e6 h3e6 e7e6,592,101,75,144,advantage middlegame short,https://lichess.org/jEB8l2nQ#21
NdlCd,r2q3r/4kppp/2npbn2/p3p3/1p2P3/1N2BP2/PPPQ2PP/1K1R1B1R w - - 0 14,d2d6 d8d6 d1d6 e7d6,562,83,79,155,advantage middlegame short,https://lichess.org/HA1Z4MPL#27
r2L9A,2r2rk1/pbq1bppp/5n2/3ppP2/3PP3/3P4/PP2B1PP/RNBQ1RK1 b - - 0 18,c7c1 d1c1 c8c1 f1c1,551,97,100,363,advantage middlegame short,https://lichess.org/71Q6DR4T/black#36
0pjCU,3q4/p2r1pkp/1pnrbnp1/2p1p1Q1/4P2N/2P3NP/PP2BPP1/R4RK1 w - - 4 19,a1d1 d6d1 f1d1 d7d1,540,99,78,396,crushing middlegame short,https://lichess.org/wlwLO63h#37
9pQaZ,r1b1kb1r/pp1p1ppp/6q1/2pQP3/2B2P2/4n1B1/PPP3PP/RN3RK1 w kq - 1 13,d5f7 g6f7 c4f7 e8f7,585,105,75,44,advantage middlegame short,https://lichess.org/xi4SM69S#25
YpNQJ,r1b1k1nr/ppp1qpp1/2np3p/8/2BPP3/1Q3N2/PP1N1PPP/R3K2R w KQkq - 2 10,c4f7 e7f7 b3f7 e8f7,534,105,83,229,advantage middlegame short,https://lichess.org/MdyuAWJG#19
DFF7F,r3kbnr/3p1p2/1qb1p2p/2p1P1p1/p1P5/RN1PBN2/1P3PPP/Q4RK1 b kq - 1 19,a4b3 a3a8 c6a8 a1a8,539,94,87,163,advantage middlegame short,https://lichess.org/ATo13Zv3/black#38
VuO7F,r1qb2k1/r4ppp/Pp1p1nn1/2pPp3/2P1P3/R3B1PP/Q2N1P2/R4BK1 b - - 4 25,a7a6 a3a6 c8a6 a2a6 a8a6 a1a6,526,109,81,313,crushing long middlegame,https://lichess.org/dxml6Vrl/black#50
bHwcw,2rr1nk1/1bq1bppp/pp6/3pp3/2P1N3/P3P1B1/1PQRBPPP/3R2K1 w - - 0 20,c4d5 c7c2 d2c2 c8c2,574,88,85,227,advantage master masterVsMaster middlegame short,https://lichess.org/h6HDUYBu#39
hnvVr,r2qr1k1/ppp1bppp/5n2/5b2/3Q4/P3p2P/1PP1NPPN/R1B1KB1R b KQ - 0 13,d8d4 e2d4 e3f2 e1f2,594,96,76,95,advantage middlegame short,https://lichess.org/visZZgHX/black#26
PzBXW,r3k2r/1npnqpbp/pp4p1/1Q1p1P2/3P4/2P2N2/PP1N2PP/R1B1R1K1 w kq - 0 16,b5d7 e8d7 e1e7 d7e7,537,104,76,256,advantage middlegame short,https://lichess.org/23AqoQFJ#31
6YAi7,r3k2r/pp1bbppp/3p1n2/q1pP4/4PB2/2NQ4/PP3PPP/R3K1NR b KQkq - 0 12,d7b5 d3b5 a5b5 c3b5,446,99,83,186,crushing middlegame short,https://lichess.org/RY1nTqzS/black#24
ffyKZ,r2r2k1/2qb1pb1/1pp2npp/p3p3/4P3/P1NR2PP/1PPQNPB1/3R2K1 b - - 0 19,f6h7 d3d7 c7d7 d2d7 d8d7 d1d7,549,89,98,1739,crushing long middlegame,https://lichess.org/A9Mw7Mb8/black#38
Zx5Wa,3qr1k1/1p3p1p/p1rppnpb/2P1n3/4PN2/1P2BP2/P2QB1PP/2RR2K1 b - - 0 20,d6c5 d2d8 e8d8 d1d8,449,105,92,574,crushing master middlegame short,https://lichess.org/5B2dCD7B/black#40
cahNH,r2qk2r/2pb1pb1/pp2p1np/4P1p1/8/5NB1/PPPQBPPP/3R1RK1 w kq - 0 16,d2d7 d8d7 d1d7 e8d7,587,90,53,33,advantage middlegame short,https://lichess.org/6PvLOFdR#31
RITcd,3r3r/pp1bkp2/2p1n2p/2b1q1pQ/P1B1PpP1/2N2P2/1PPR2NP/3R3K w - - 2 23,d2d7 d8d7 d1d7 e7d7,518,104,94,320,advantage master middlegame short,https://lichess.org/AOJ2kdjm#45
0jYUE,rn2k2r/pp2qp2/2p1p3/b2pN1p1/P1PP3p/4PQB1/1P3PPP/R4RK1 w kq - 2 17,f3f7 e7f7 e5f7 e8f7,575,104,78,159,crushing middlegame short,https://lichess.org/1FIdgqfe#33
3MX2Q,r3kb1r/pp1bpppp/7n/q2pP3/3P1PP1/2NQB2P/PP6/R3K1NR b KQkq - 2 12,d7b5 d3b5 a5b5 c3b5,592,105,60,210,crushing middlegame short,https://lichess.org/BI8Vcfvr/black#24
zqQJe,1r4k1/1q1n1ppp/2bb1n2/2p1pP2/p1PpP3/P2P1NP1/2QBN1BP/R5K1 w - - 0 22,a1b1 b7b1 c2b1 b8b1,577,98,75,747,crushing middlegame short,https://lichess.org/7KUrRV1p#43
trwnS,r3r1k1/ppp1qppp/2np4/2bB4/6b1/1QP1PN2/PP3PPP/R1B2RK1 w - - 3 13,d5f7 e7f7 b3f7 g8f7,594,91,88,134,advantage middlegame short,https://lichess.org/B1RPrNTM#25
5XBaV,r2qk2r/pb1n1pb1/2p3pp/1p5n/4P3/1BN1B2P/PPPQ1PP1/3R1RK1 w kq - 4 15,d2d7 d8d7 d1d7 e8d7,497,90,84,207,advantage middlegame short,https://lichess.org/OIbz8PnS#29
1aJDP,r1b4r/2qnkp2/p2ppn1p/6p1/1p2P3/1BN3B1/PPP2PPP/R2Q1RK1 w - - 0 15,g3d6 c7d6 d1d6 e7d6,483,91,80,230,advantage middlegame short,https://lichess.org/ZsP2zhHb#29
JTojp,1r4k1/1r2npbp/1qp1p1p1/2p1P3/p1Pp1B2/1P1P1N1P/P1Q2PP1/1R2R1K1 w - - 0 20,b3a4 b6b1 e1b1 b7b1,536,107,93,158,advantage middlegame short,https://lichess.org/8e7QzzzI#39
x4gZt,rnb2rk1/pp2ppbp/6p1/2p1P1N1/2B3n1/8/PPP2PPP/RNBR2K1 w - - 1 10,c4f7 f8f7 g5f7 g8f7,532,103,83,647,advantage middlegame short,https://lichess.org/ik8GVxS9#19
KMlpV,r4rk1/p2bppbp/1q1p2p1/6B1/2p1PPn1/2N2N2/PPP1Q1PP/1R2RK2 b - - 1 15,g4e3 e2e3 b6e3 e1e3,451,91,86,248,crushing middlegame short,https://lichess.org/Vg5OINu9/black#30
9iiej,r3k2r/pppqbpp1/2bp1n2/5P1p/P6N/1P1P4/2P1Q1PP/RNB1R1K1 b kq - 0 15,e8c8 e2e7 d7e7 e1e7,528,93,87,118,advantage middlegame short,https://lichess.org/WbQZFtdO/black#30
MRWwU,r3k2r/pbpp1p1p/1pn2qp1/2b5/4P3/2B3Q1/PPP2PPP/R3KBNR b KQkq - 1 10,c5f2 g3f2 f6f2 e1f2,588,96,73,131,advantage middlegame short,https://lichess.org/rSrv8ekA/black#20
pIKPV,r3k2r/1pp1qp2/pb3npp/P1n1p3/2B1P3/1QPP3P/1P1BNP2/R3K1R1 w Qkq - 1 17,c4f7 e7f7 b3f7 e8f7,476,90,100,374,middlegame,https://lichess.org/H9uwaQV3#33
5VwIu,2r2rk1/1p3ppp/pq2p1n1/3p1b2/2nP4/1PQ1PNB1/P3BPPP/R1R3K1 b - - 0 17,c4a3 c3c8 f8c8 c1c8,438,107,95,501,crushing middlegame short,https://lichess.org/Hbx4FkJ1/black#34
mNzQg,r3rbk1/pb1qn1pp/1p3p2/3p4/2pP4/P1N1RNB1/1PP1QPPP/4R1K1 b - - 9 23,e7f5 e3e8 a8e8 e2e8 d7e8 e1e8,598,84,74,125,advantage long middlegame,https://lichess.org/MaHtg7Sx/black#46
zPhRQ,4rbk1/p1q2pp1/1pp1bnnp/4p3/4P3/P1P1BNNP/1PBQ1PP1/3R2K1 b - - 0 21,e8d8 d2d8 c7d8 d1d8,592,94,87,270,advantage middlegame short,https://lichess.org/StKpM1B7/black#42
YYTjt,r2r2k1/1b1q1pbp/p2ppnp1/1p6/4P1P1/1BN1BP2/PPPQ3P/2KRR3 w - - 0 16,d2d6 d7d6 d1d6 d8d6,531,92,100,179,advantage middlegame short,https://lichess.org/kO2AwKxW#31
IGOLw,r3k2r/p2pppbp/bqp3p1/8/2P1P1n1/5N2/PP1NQPPP/R1B1R1K1 b kq - 0 12,g4f2 e2f2 b6f2 g1f2,578,99,68,368,advantage middlegame short,https://lichess.org/TsdyhDDc/black#24
TLhBq,rr4k1/4qpb1/3p2pp/p2Ppn2/bp2N3/1N2P1P1/P1Q2P1P/1RR2BK1 b - - 2 24,b8c8 c2c8 a8c8 c1c8,597,91,80,375,advantage middlegame short,https://lichess.org/PjRgnXsD/black#48
jR1nG,3r1rk1/1ppqbbpp/p2p1p2/4NP2/4P1P1/1P5P/PBPQB3/3R1RK1 b - - 0 19,d6e5 d2d7 d8d7 d1d7,594,99,73,247,crushing middlegame short,https://lichess.org/nVb1Sl8h/black#38
iibO3,r1bq1rk1/5pbp/3p1np1/p1B5/1p2P1P1/5PN1/PPPQ3P/1K1R1B1R b - - 0 15,d6c5 d2d8 f8d8 d1d8,548,106,76,226,crushing middlegame short,https://lichess.org/DHyavFbe/black#30
OYxCZ,r3r1k1/4q1pp/pn1ppn2/2p1p3/1p2P3/1B1PB2Q/P1P2PPP/3R1RK1 w - - 2 18,b3e6 e7e6 h3e6 e8e6,547,92,73,167,crushing middlegame short,https://lichess.org/tMXKLMEq#35
aqNVE,2q1k2r/np1b1ppp/1P2p3/p1rp4/P3n3/4PN2/1Q3PPP/RN2KB1R w KQk - 2 16,b6a7 c5c1 b2c1 c8c1,449,92,80,349,crushing middlegame short,https://lichess.org/ClY13ttr#31
KoQM6,rn2r1k1/ppp1qppp/5n2/3p2B1/3P4/1BPQ4/P1P1bPPP/R3R1K1 w - - 0 13,e1e2 e7e2 d3e2 e8e2,501,98,80,202,advantage middlegame short,https://lichess.org/sk0beVOJ#25
tqRlx,r1b2r2/pp3pk1/2pq1n2/n2pp1B1/4P1P1/1BPP1Q1P/P1P2P2/R3K1R1 w Q - 4 16,g5f6 d6f6 f3f6 g7f6,591,110,93,995,advantage middlegame short,https://lichess.org/KpXTIiAq#31
W2TLG,r1n5/1bq2r1k/3p2pp/pp1P3n/2pBPpP1/2P2Q2/PP1N3P/R4R1K b - g3 0 30,f4g3 f3f7 c7f7 f1f7,515,96,80,442,crushing middlegame short,https://lichess.org/AGxYXbTT/black#60
2IhFH,4rbk1/1p2rpp1/pnpp1n1p/3P1B2/1PPP4/P3R2P/1B1Np1P1/4R1K1 w - - 0 25,e1e2 e7e3 e2e3 e8e3,581,109,66,200,crushing middlegame short,https://lichess.org/tS6056Xv#49
dFo8z,r1b2rk1/pp3ppp/1qn5/2b1p3/2P5/3P1N1P/PP2BRP1/RNB1Q1K1 b - - 0 11,c5f2 e1f2 b6f2 g1f2,551,90,86,209,advantage middlegame short,https://lichess.org/xsbtpCJM/black#22
NmYDe,2r2rk1/1b2npbp/3ppnp1/1pq5/Q1P5/4PN2/3NBPPP/BRR3K1 w - - 0 23,c4b5 c5c1 b1c1 c8c1,570,87,82,201,advantage middlegame short,https://lichess.org/3TziVizV#45
MtNkG,r2qk2r/pp1b1nbp/6p1/1Bppp3/8/1PP2N1Q/P4PPP/RN2K2R w KQkq - 2 15,b5d7 d8d7 h3d7 e8d7,513,95,81,225,advantage master middlegame short,https://lichess.org/1kY758QT#29
StkIl,r2q2nr/pp2k1pp/2pp4/b5Pb/4P3/B1PQ1N1P/P2P1P2/RN2K2R w KQ - 3 17,a3d6 d8d6 d3d6 e7d6,596,103,68,340,advantage middlegame short,https://lichess.org/5JNvCnTJ#33
0KyDF,r2r2k1/pb1q1pbp/1p3np1/1Np5/2B2Q2/2P1P1B1/PP3PPP/R4RK1 w - - 4 20,a1d1 d7d1 f1d1 d8d1,544,94,100,118,advantage middlegame short,https://lichess.org/hiGV7LYV#39
o0Qqw,2r1r1k1/ppq2p1b/4p1pp/2pp4/6P1/PP1P3P/2PNQP1b/R3RB1K b - - 1 21,h2e5 e2e5 c7e5 e1e5,597,86,83,237,advantage master middlegame short,https://lichess.org/nhqNJ7Zc/black#42
SIdfv,r1br2k1/1p1pnpp1/pq2p2p/2b5/P3PB2/2N3Q1/BP3PPP/1R1R2K1 b - - 4 16,c5f2 g3f2 b6f2 g1f2,544,96,100,250,advantage middlegame short,https://lichess.org/nQAGIHey/black#32
tvq42,r4rk1/1b1p1ppp/p1q5/1pb4Q/3p1B2/1B1Pn1N1/PPP2RPP/R5K1 w - - 4 18,b3f7 f8f7 h5f7 g8f7,498,104,90,957,crushing master middlegame short,https://lichess.org/z1N0Q7v8#35
pK166,r4rk1/pp3ppp/2n2n2/q3b3/2P1N3/1P1pQ2P/PB3PP1/2KR1BNR b - - 0 15,e5b2 c1b2 f6e4 e3e4,565,89,58,75,crushing middlegame short,https://lichess.org/FSebfmKY/black#30
nO0vA,4r1k1/pb1pqpbp/1p1p2p1/3Pr3/PPp1B3/N1P3P1/4RP1P/3QR1K1 b - - 4 22,e5e4 e2e4 e7e4 e1e4,594,100,73,187,advantage master masterVsMaster middlegame short,https://lichess.org/KkBuDMrg/black#44
jJDNw,r3k3/pbppqr1Q/1pn3p1/2bBp3/4P3/8/PPPP1PPP/R1B2RK1 w q - 0 12,d5f7 e7f7 h7f7 e8f7,463,99,86,668,advantage middlegame short,https://lichess.org/WQJJK8Tz#23
zN8a2,r4rk1/1p3p1p/1Pp3p1/p1Pp2q1/P2Pp3/NN1nQnPP/5PK1/1R3R2 b - - 2 28,d3f4 e3f4 g5f4 g3f4,598,104,77,176,advantage middlegame short,https://lichess.org/AeQ4YbXo/black#56
NRkjg,r4rk1/ppp2pbp/2np2p1/8/4PP1q/2PPBQRb/PP6/RN2KN2 b Q - 1 16,h3g4 f3g4 h4g4 g3g4,578,86,100,158,advantage middlegame short,https://lichess.org/WJ1ZYKot/black#32
bTXRI,rn1qk2r/pp3pp1/2p1p2p/3pPnP1/3P1Q2/2N5/PPP1NP2/2KR3R b kq - 2 14,d8g5 f4g5 h6g5 h1h8,487,91,74,111,advantage middlegame short,https://lichess.org/1AKCTaJH/black#28
BdlFb,2kr1r2/pp1n2pp/2pbB3/q2npQB1/3PP3/2N5/PPP3PP/2KR3R w - - 3 15,e6d7 d8d7 f5d7 c8d7,577,88,71,115,advantage middlegame short,https://lichess.org/fezpgywz#29
L9Y8Z,r3kb1r/1p3ppp/p2p1q2/3Qp2n/P1B1P3/1PN2P1b/5P1P/R1BR2K1 w kq - 3 15,d5f7 f6f7 c4f7 e8f7,583,104,81,409,advantage middlegame short,https://lichess.org/i7R5vaDH#29
8P6dR,r1bq1r2/5pk1/p1p2n2/1pbpp1B1/4P3/1P1P1Q1P/1PP1NPP1/R4RK1 w - - 0 17,g5f6 d8f6 f3f6 g7f6,544,111,74,358,advantage middlegame short,https://lichess.org/ED0OOQvh#33
oQkFG,r1bqr1k1/2ppNppp/p1p2n2/8/8/8/PPPPQPPP/RNB1R1K1 b - - 0 11,e8e7 e2e7 d8e7 e1e7,460,110,92,701,crushing middlegame short,https://lichess.org/FwOw5El9/black#22
gvSU2,rn1q1rk1/1b3p2/pb3n1p/1p2N1p1/3p1B1N/PB6/1P3PPP/2RQ1RK1 w - - 0 17,b3f7 f8f7 e5f7 g8f7,585,104,82,48,crushing middlegame short,https://lichess.org/lduhLFQc#33
wN4NU,r1b1r3/bpp2pk1/2np3p/p3p3/2B1P3/P1PP2q1/1P1NQNP1/R3KR2 b Q - 1 18,c8g4 e2g4 g3g4 f2g4,475,87,76,98,advantage middlegame short,https://lichess.org/TGgsECWb/black#36
Jaw7P,3r1rk1/pppq1pbp/2n2np1/4P3/8/PP2PB1P/1B1N1PP1/R2QK2R b KQ - 0 13,d7d2 d1d2 d8d2 e1d2,593,89,91,155,advantage middlegame short,https://lichess.org/0BYLT2J6/black#26
ero9H,rn1q1rk1/1b1p2pp/p3B3/2b2p2/4nB2/N3PN2/1PPQ1PPP/2KR3R b - - 0 14,d7e6 d2d8 f8d8 d1d8,454,107,88,1241,crushing middlegame short,https://lichess.org/zzhpfAH6/black#28
sGid3,r1bqk2B/ppppn2p/2n1P1p1/8/8/NP3p2/P1P1PPPP/3RKB1R b Kq - 1 12,d7e6 d1d8,567,107,84,477,advantage middlegame oneMove,https://lichess.org/NYF7SVCO/black#24
FPgqo,3q1r2/B3ppbk/1p2bnpp/1B2p3/3rP3/P1N1Q2P/1PP2PP1/3RR1K1 w - - 6 19,c3e2 d4d1 e1d1 d8d1,579,94,64,121,advantage master middlegame short,https://lichess.org/qtqlpSUr#37
kjH6T,rqb2rk1/1p1pnp1p/p2b2p1/1Np5/4P3/1B3Q2/PP1B1PPP/R4RK1 w - - 0 17,b3f7 f8f7 f3f7 g8f7,542,92,100,119,advantage middlegame short,https://lichess.org/Iw5oPpTn#33
NpNTA,rn5r/pp1qbkpp/2p1pn2/5Q2/2B1N3/8/PPPP1PPP/R1B1K2R w KQ - 3 11,c4e6 d7e6 f5e6 f7e6,571,105,75,746,advantage middlegame short,https://lichess.org/hY6XxudM#21
bbFbw,r1r3k1/ppqbnppp/4p3/3pP3/1n1P4/2PB1N2/2Q2PPP/RN3RK1 w - - 9 15,c3b4 c7c2 d3c2 c8c2,547,89,100,259,advantage middlegame short,https://lichess.org/3eTWbDRU#29
4DExT,r3nrk1/1pp2qbp/p2p2p1/P2Pp3/2B1P2P/2N2Qp1/1PP2P2/R4RK1 w - - 0 19,f2g3 f7f3 f1f3 f8f3,597,94,78,127,crushing middlegame short,https://lichess.org/bd4CU9Xa#37
13BoF,r3k2r/1bppqpQp/p5n1/1p2b3/4P3/PBN2P2/1PP3PP/R1B1K2R w KQkq - 1 13,g7f7 e7f7 b3f7 e8f7,597,96,63,281,advantage middlegame short,https://lichess.org/YnM7j3Xg#25
5c2k1,2r2rk1/1pq1bppp/p3p3/4Pb2/2Qnp3/2P1B3/PP3PPP/R3RBK1 w - - 0 17,e3d4 c7c4 f1c4 c8c4,583,87,100,170,advantage middlegame short,https://lichess.org/rNglXoXQ#33
wyYT4,r3kb1r/1p1b1ppp/p1n1p3/1B1pP3/Q2q1P2/P1N5/1P4PP/R1B1K2R w KQkq - 0 13,a4d4 c6d4 b5d7 e8d7,491,94,100,98,advantage middlegame short,https://lichess.org/2hXiAuj5#25
ShJZn,r3rbk1/pbp1qpp1/5n1p/2p1p3/P7/2NB1P2/1PPBR1PP/R3Q1K1 w - - 0 16,e2e5 e7e5 e1e5 e8e5,544,99,69,100,crushing middlegame short,https://lichess.org/7UnuXXpN#31
exvyz,2k1rb1r/pp1bq3/7p/2p2pp1/1nPP4/5NP1/PP2QP1P/RBB1R1K1 w - - 1 17,d4d5 e7e2 e1e2 e8e2,498,100,100,361,advantage middlegame short,https://lichess.org/iK18zKLY#33
EwEjr,Nn1q3r/1b2k1bp/p2pp1pn/2B5/1p2PQ2/8/PPP2PPP/R3KB1R w KQ - 0 15,c5d6 d8d6 f4d6 e7d6,503,80,56,95,advantage middlegame short,https://lichess.org/bfV9OMPq#29
oLFUt,r1b1r2Q/ppp1kp2/2n1p1q1/3pBp2/2PP4/2P1P3/P4PPP/R3KB1R w KQ - 8 16,e5f6 g6f6 h8f6 e7f6,554,105,77,429,advantage middlegame short,https://lichess.org/uR9AZ57R#31
CNd1K,r4rk1/p4pp1/b1p2q1p/n1b1p3/B3R3/2P5/PP1P1PPP/RNB1Q1K1 b - - 2 14,c5f2 e1f2 f6f2 g1f2,580,102,83,251,advantage middlegame short,https://lichess.org/iYRc4RfM/black#28
NYnIh,3q1rk1/pp1bppbp/5np1/4p1B1/2r5/2N2P2/PPPQN1PP/2KR3R b - - 1 15,d7c6 d2d8 f8d8 d1d8,578,95,79,116,crushing middlegame short,https://lichess.org/SvvKQbvj/black#30
q96nP,rn1qk2r/p3npp1/2b1p2p/1p2P3/1QpP4/B1P2N2/4BPPP/R3K2R b KQkq - 3 15,b8a6 b4e7 d8e7 a3e7,589,88,100,152,advantage middlegame short,https://lichess.org/NHuKyenX/black#30
OCUCi,r4rk1/ppp2pp1/1n1p1q1p/2b1p3/4P1P1/P2P2Q1/1PB2PP1/R1B1K2R b KQ - 0 15,c5f2 g3f2 f6f2 e1f2,570,103,80,548,advantage middlegame short,https://lichess.org/3a16j25J/black#30
tkTQ1,2r2rk1/B1qbppbp/1p3np1/1N1Pp3/1P2P3/P7/4BPPP/2RQ1RK1 b - - 1 17,c7c1 d1c1 c8c1 f1c1,573,86,100,70,advantage middlegame short,https://lichess.org/UdHe6qXc/black#34
mtHyQ,2kr3r/pppq1ppp/2n5/7b/6P1/2P1PN1P/PP2P1Bb/RN1Q1RK1 w - - 1 13,f3h2 d7d1 f1d1 d8d1,535,87,100,219,advantage middlegame short,https://lichess.org/xU25GnXH#25
N0jRz,r1b2qk1/pp3ppp/1npb1p2/7Q/2BP4/6N1/PPPB1PPP/4R1K1 w - - 2 15,h5f7 f8f7 c4f7 g8f7,465,94,100,205,advantage middlegame short,https://lichess.org/bYHYwhmM#29
hms5i,3r1rk1/p1pqbppp/4p3/1p1nP3/4PB2/3Q2P1/PP3PBP/1R1R2K1 b - - 0 15,d5f4 d3d7 d8d7 d1d7,561,93,74,135,crushing middlegame short,https://lichess.org/bISHEcEa/black#30
TTXla,4kb1r/1p3pp1/pq2p3/1b1pPn2/3P1P1p/PNR4P/1P1B1QP1/2N3K1 b k - 2 30,f8e7 c3c8 b6d8 c8d8,597,98,90,1023,crushing middlegame short,https://lichess.org/Nsw6s6rp/black#60
12hcd,3r4/p2rnkb1/1pn1p1pp/2p1p3/2N1P3/2P1B1PB/PP3P1P/R2R2K1 w - - 6 20,g1f1 d7d1 a1d1 d8d1,400,115,93,204,advantage master middlegame short,https://lichess.org/WaqmFmUP#39
77Z2y,2b2k1r/2q1n1r1/3n2B1/p2p2Pp/1ppP1P1P/2P1QPN1/PP2RK2/4R3 b - - 0 28,g7g6 e3e7 c7e7 e2e7,504,91,100,263,advantage middlegame short,https://lichess.org/M8cRvzCC/black#56
fxhok,rnb1r1k1/pp2qp1p/6p1/3p1pN1/3P4/N1P4P/PP1Q1PP1/R4K1R b - - 3 15,e7e2 d2e2 e8e2 f1e2,499,98,75,282,crushing middlegame short,https://lichess.org/zhE5aGYT/black#30
tTVET,2r1r1k1/pn1n1p1p/1q2p1p1/1PppP3/P2N1P2/1P4P1/2R1Q1BP/2R3K1 b - - 0 23,c5d4 c2c8 e8c8 c1c8,486,98,81,244,crushing middlegame short,https://lichess.org/X7hU5GaQ/black#46
SNwvg,r2qk2r/pp2bppp/5n2/1NppQ1B1/4P3/8/PPP2PPP/R3K2R w KQkq - 2 11,b5d6 d8d6 e5d6 e7d6,543,101,90,518,advantage middlegame short,https://lichess.org/MOJcZ943#21
ovf4Q,r2q1rk1/ppp1npp1/3p3p/4pR2/2B1P3/3PP3/PPP3PP/R2Q2K1 w - - 1 14,f5f7 f8f7 c4f7 g8f7,554,108,67,171,advantage middlegame short,https://lichess.org/2sh6YP6F#27
f7sa8,3b1rk1/1p3qp1/p1p1p1pp/3pPr2/1P1P4/2PQ1NPP/PB3RK1/5N2 w - - 2 28,f1e3 f5f3 f2f3 f7f3,598,84,72,177,crushing middlegame short,https://lichess.org/3r1mp7ZW#55
yZCKv,2kr3r/ppp2ppp/7n/2q1P3/2P1PP2/P2BBP2/1Pn2K1P/R3Q2R b - - 6 17,c5e3 e1e3 c2e3 f2e3,598,102,79,181,advantage middlegame short,https://lichess.org/rCrgbecv/black#34
nfvGP,r3r1k1/ppp1qppp/2n2n2/3p4/3P2P1/2P2PP1/PP1NBK2/R2Q3R b - - 0 14,e7e2 d1e2 e8e2 f2e2,533,98,81,336,advantage middlegame short,https://lichess.org/6LxkCVnj/black#28
KiWoX,rn2kb1r/p3q3/1pppPp1p/3Q4/8/8/PPP1PPPP/2KR1BNR w kq - 0 12,d5d6 e7d6 d1d6 f8d6,537,93,85,656,advantage middlegame short,https://lichess.org/C8QiDq1P#23
rovzk,4r1k1/1pqnr1bp/p2p2p1/P1pP1p2/2P5/4B2P/1PQ1BPP1/R3R1K1 w - - 0 22,e3d2 e7e2 e1e2 e8e2,575,91,96,850,crushing master middlegame short,https://lichess.org/8u7w2pdP#43
83YPv,1n3rk1/pq2bpp1/1p2p3/3pPn1p/1P1P4/PN2BN1P/2Q2PP1/2R3K1 b - - 0 21,f8c8 c2c8 b7c8 c1c8,405,100,84,212,crushing middlegame short,https://lichess.org/E03Bd9LA/black#42
6fCYg,2kr1b1r/ppp3pp/2n1p3/3q4/4p3/P2P1N1P/1PP2PP1/R1BQ1RK1 w - - 0 12,d3e4 d5d1 f1d1 d8d1,419,114,93,904,crushing middlegame short,https://lichess.org/RbAdpIex#23
PkNm1,1r4k1/1r1bqpbp/1p1n2p1/2pPp3/2P1P3/2NQ1N1P/1R1B1PP1/1R4K1 w - - 0 28,b2b6 b7b6 b1b6 b8b6,475,95,68,258,crushing middlegame short,https://lichess.org/m7mzGrJ6#55
Ap0Zf,r3kb1r/1p2qppp/pn3p2/3Q4/2BP4/2N5/PPb1NPPP/R3K2R w KQkq - 4 12,d5f7 e7f7 c4f7 e8f7,489,90,80,190,advantage middlegame short,https://lichess.org/LkcgP44H#23
131YB,r3kb1r/p5pp/b3Nn2/1qpp4/8/1P4P1/PB1NPPBP/n2Q1K1R b kq - 0 14,b5e2 d1e2 a6e2 f1e2,574,108,79,399,advantage master middlegame short,https://lichess.org/Gyz8h2Eu/black#28
URneW,4rr2/1pp3pk/3ppqnp/p3p3/4P3/2PPR1PP/PP3PKN/3RQ3 b - - 1 21,f6f2 e1f2 f8f2 g2f2,442,95,72,122,advantage master middlegame short,https://lichess.org/qQRuXjSt/black#42
vpjp7,r1q1k2r/2pp1pbp/ppn3p1/6B1/4P3/2N5/PPPQ1PPP/2KR3R w kq - 2 13,d2d7 c8d7 d1d7 e8d7,586,82,50,66,advantage middlegame short,https://lichess.org/ZSGkrNbd#25
GsdWF,r1q3k1/1pp1rpbp/1B1p2p1/pP1P4/4PPn1/6P1/RPQ3BP/2R3K1 b - - 2 21,c7b6 c2c8 a8c8 c1c8,400,110,91,433,advantage middlegame short,https://lichess.org/qO5GzWHM/black#42
uD7RU,rr4k1/3b2pp/2n1p1n1/3pPp2/p2P4/1qP1BN2/3QBPPP/R4RK1 w - - 0 19,f1b1 b3b1 a1b1 b8b1,560,111,76,249,crushing middlegame short,https://lichess.org/h0jsGKdl#37
dwbMo,r2q1k1r/pp2bpp1/2p2n1p/3pQ3/3P4/2N4P/PPP2PP1/R1B1R1K1 w - - 1 14,e5e7 d8e7 e1e7 f8e7,490,92,85,595,advantage middlegame short,https://lichess.org/f0zmtGJ8#27
fLMGb,r4b1r/pp1k2p1/2bqpn1p/3pQ3/3P4/7N/PP3PPP/RNB1R1K1 w - - 4 14,e5e6 d6e6 e1e6 d7e6,586,115,82,49,crushing middlegame short,https://lichess.org/xjfCiFMu#27
WQuRZ,4kb1r/p1qn1ppp/4p3/4P3/Q2p4/2r5/PP1PbPPP/R1B1KB1R w KQk - 0 17,f1e2 c3c1 a1c1 c7c1,504,102,85,659,crushing middlegame short,https://lichess.org/5Dp4jdef#33
8DMx4,1r2k2r/p2nbppp/B1p5/2Ppp3/3Pb1P1/2P1PN1P/3BKP2/RR6 b k - 1 18,e4f3 e2f3 b8b1 a1b1,545,85,100,71,advantage middlegame short,https://lichess.org/w9cFz2OG/black#36
XXyKx,r4rk1/pRpqbppp/3ppn2/8/3P4/B1P2N2/P1P2PPP/1Q3RK1 b - - 4 12,f8b8 b7b8 a8b8 b1b8,508,98,100,126,advantage middlegame short,https://lichess.org/iaEuSt2K/black#24
9kdvK,r6r/1p1qpkbp/p1p1pnp1/8/P1BPP3/2P4Q/5PPP/R1B2RK1 w - - 3 17,c4e6 d7e6 h3e6 f7e6,557,101,81,348,advantage middlegame short,https://lichess.org/ItW8R2BJ#33
cT8JF,1k3rr1/p2q2np/1ppNp1pB/3nPp2/3P2P1/P1P2Q2/2P4P/3RKR2 b - - 3 23,f5g4 f3f8 g8f8 f1f8,552,83,85,348,advantage middlegame short,https://lichess.org/TagvL9mP/black#46
GqG0b,r1b1k2r/pppq1pbp/7p/n7/2BPN3/1Q6/PP2NPPP/R3K2R w KQkq - 1 11,c4f7 d7f7 b3f7 e8f7,578,104,76,139,advantage middlegame short,https://lichess.org/ecttnsuI#21
xA2Sv,2r2rk1/4nppp/pq1pb3/1pbB2N1/4P3/P1N5/1P2QPPP/2RR2K1 b - - 5 17,c5f2 e2f2 b6f2 g1f2,584,99,80,207,advantage middlegame short,https://lichess.org/E8dKq9in/black#34
NCHG3,1r2k2r/p1qnbppp/4p3/2p5/Qp2PN2/4B3/PPP2PPP/R2R2K1 w k - 10 19,d1d7 c7d7 a4d7 e8d7,547,81,100,365,advantage middlegame short,https://lichess.org/Vmzs4QDk#37
haqaP,2r2rk1/ppq1b1pp/1n2p1p1/3n4/3PN1P1/1Q1B3P/PP1B1P2/R3K2R w KQ - 4 17,a1c1 c7c1 d2c1 c8c1,554,83,71,125,advantage middlegame short,https://lichess.org/PVJspF7E#33
9ZhSc,5rk1/1b1q1pp1/p1rbpn1p/1p2N3/4P3/PPNR4/1P1R1PPP/3Q2K1 b - - 1 20,d6e5 d3d7 f6d7 d2d7,586,93,68,77,advantage middlegame short,https://lichess.org/pquf4gQt/black#40
Jw2Ov,r3k2r/p1p1bppp/2pp1n2/4P3/7q/2N2Q2/PPP2PPP/R1B2RK1 b kq - 0 11,d6e5 f3c6,476,100,98,1523,crushing middlegame oneMove,https://lichess.org/bxfamDT6/black#22
7dNzf,4r1k1/ppq1r2p/2p1pnpb/3p4/3P4/2PQR1NP/PPB2PP1/4R1K1 w - - 0 22,e3e6 e7e6 e1e6 e8e6,592,102,81,67,crushing middlegame short,https://lichess.org/ZILejPxd#43
D6lJT,6k1/2p2qpp/1p1p2n1/p2Pp3/2P1P1b1/1Q1B2PP/PP1b1r2/1K3RNR w - - 7 25,h3g4 f2f1 d3f1 f7f1,578,98,88,695,advantage middlegame short,https://lichess.org/Em1VtqrW#49
7r8jB,2krr3/ppp3bp/2nq2p1/4pp2/3P1B2/2P2BP1/PP2RP1P/R2Q2K1 w - - 0 15,d4e5 d6d1 a1d1 d8d1,525,86,70,129,middlegame,https://lichess.org/RR4vDtWV#29
C55VN,1r1q3r/1p2kp1p/2npbp2/p3p3/4P3/P2Q1N2/1PP2PPP/2KR1B1R w - - 0 13,d3d6 d8d6 d1d6 e7d6,574,98,82,360,crushing middlegame short,https://lichess.org/e8JRbDAD#25
F4HVy,5r1r/pppknR1p/2nb2p1/3p4/3Pp3/1PN1P3/PBPN2PP/5RK1 b - - 3 17,d7d8 f7f8 h8f8 f1f8,577,93,100,277,advantage middlegame short,https://lichess.org/KK1YCI1L/black#34
kVb14,r1bq1rk1/4pp1p/p2p1bp1/1p2P3/5P2/2N5/PPPQB1PP/2KR3R b - - 0 13,d6e5 d2d8 f8d8 d1d8,584,97,92,781,crushing master middlegame short,https://lichess.org/DYOxJGLt/black#26
WAYdW,r1b1k2r/ppp3pp/8/2b1pp2/2Pq4/5N2/PP1PQPPP/R1B1K2R b KQkq - 3 11,d4f2 e2f2 c5f2 e1f2,589,102,67,64,advantage middlegame short,https://lichess.org/Xqbgyttc/black#22
MJNfs,1r1brk2/3n1pp1/pq1p1n1p/2pP4/2P3P1/P1BB1N1P/2Q1RP2/4R1K1 w - - 3 22,e1b1 b6b1 c2b1 b8b1 d3b1 e8e2,544,90,82,239,advantage long middlegame,https://lichess.org/wNwEqhNG#43
LI6f0,5rk1/ppp3p1/1b1p3p/4p1P1/3pP2P/3PnrN1/PPPB1PR1/2K2R2 w - - 3 22,f2e3 f3f1 g3f1 f8f1,496,101,94,307,crushing middlegame short,https://lichess.org/Kzh09TUx#43
n9DXk,2r3k1/1prn1pbp/p3p1p1/n2pP3/3P4/BP3N1P/P3BPP1/R1R3K1 w - - 0 21,a3b4 c7c1 a1c1 c8c1,498,98,94,328,crushing master middlegame short,https://lichess.org/gCHjReFi#41
FuhJu,2kr3r/ppnqnp1p/2p3pP/5p2/3P1B2/P2Q2P1/1PP2P2/2KR1B1R b - - 0 17,d7d4 d3d4 d8d4 d1d4,557,78,52,141,crushing master middlegame short,https://lichess.org/8cdblvRM/black#34
BgEO8,r4b1r/ppp2kpp/2n1pn2/4qQ2/2B1N3/8/PPPP2PP/R1B1K2R w KQ - 3 11,c4e6 e5e6 f5e6 f7e6,552,102,80,238,advantage middlegame short,https://lichess.org/262VMGRF#21
Q4XxF,r3k2r/pp1bnpp1/4p3/q2pP3/3P3p/P1NQ1N1P/1P3PP1/R3K2R b KQkq - 0 15,d7b5 d3b5 a5b5 c3b5,537,96,100,152,advantage middlegame short,https://lichess.org/4Aim0Ye7/black#30
Md3l2,3r1rk1/p2q1ppb/2p2n1p/P2ppP2/2P1P3/1QNP2P1/6BP/1R3RK1 b - - 1 21,d8b8 b3b8 f8b8 b1b8,592,94,71,49,crushing middlegame short,https://lichess.org/oahMGeLU/black#42
3iGXk,r2qk2r/2pb1ppp/p4b2/1pp5/4P3/2N2N2/PPPQ1PPP/2KR3R w kq - 0 12,d2d7 d8d7 d1d7 e8d7,557,102,78,659,advantage middlegame short,https://lichess.org/RNv6Gw1f#23
8h6NC,r3k2r/1pp3pp/3p1b2/p3p3/2PQPqn1/PP1P1N2/4KP2/RNB4R b kq - 0 19,f4f3 e2f3 e5d4 f3g4,597,86,80,169,advantage middlegame short,https://lichess.org/XZ3D0LrM/black#38
Ja1mv,3r2k1/pp1rppb1/n1p3p1/4Pn1p/2P2P2/BPNB4/P2R1KPP/3R4 w - - 9 18,d3f5 d7d2 d1d2 d8d2,526,84,69,75,advantage master middlegame short,https://lichess.org/BZrgvdDr#35
lpgOf,2r2rk1/1pqb2pp/p2npp2/3p4/3P4/1Q1BPN2/PP3PPP/R4RK1 w - - 0 16,a1c1 c7c1 f1c1 c8c1,436,97,85,455,crushing middlegame short,https://lichess.org/xlM289sO#31
W5ute,2r1r1k1/pp3pbp/3p2p1/3P1b2/1BPNn3/P3PN2/5PqP/2R1KQ1R b K - 1 23,g2f2 f1f2 e4f2 e1f2,599,95,82,147,advantage middlegame short,https://lichess.org/w3ZgMjd4/black#46
QEBMq,2r2rk1/1bqn1pp1/1p2pn1p/p3N3/3P3B/PQ2P3/4BPPP/R4RK1 w - - 4 17,f1c1 c7c1 a1c1 c8c1,508,109,89,1460,crushing middlegame short,https://lichess.org/2mucmiGL#33
CuZr0,r3k1nr/ppp1qppp/2n5/4p3/2P1P3/5N2/PP1Q1PPP/2KR1B1R w kq - 3 11,d2d7 e7d7 d1d7 e8d7,578,97,80,370,crushing middlegame short,https://lichess.org/NUwfaQ2y#21
O4T4f,r5k1/pppq2p1/1b2pr1p/3pp3/4P3/2PP3P/PP2NPP1/R2Q1RK1 b - - 1 16,f6f2 f1f2 b6f2 g1f2,561,89,56,116,advantage middlegame short,https://lichess.org/BJ7E7ZMl/black#32
kRiF6,4r1k1/p1p1q2p/1p2rpp1/n2p1p2/3P1P2/1PP1P1PB/P1Q1R2P/4R1K1 b - - 3 21,e6e3 e2e3 e7e3 e1e3,594,104,75,104,crushing middlegame short,https://lichess.org/5oOwqwkH/black#42
Nb3ls,2krr3/1b1q2p1/3P1p1p/2pp3P/1p1p1B2/pP1P1QP1/P1P2P2/2R1R1K1 b - - 3 27,e8e1 c1e1 d8e8 e1e8,550,99,81,444,crushing master middlegame short,https://lichess.org/cq7m8gbE/black#54
Y6Ukm,r1q1n2r/p3kpbp/1p2p1p1/2p1P3/4P3/3QB3/PPP3PP/3RKB1R w K - 0 16,d3d7 c8d7 d1d7 e7d7,490,101,88,469,crushing middlegame short,https://lichess.org/XGM7QmOL#31
xhjel,4rrk1/3q1pp1/3p1b1p/p1pP1b2/Pp6/1P2R3/2PNQPPP/1B2R1K1 b - - 7 22,f6c3 e3e8 d7e8 e2e8,580,90,96,708,advantage middlegame short,https://lichess.org/hxSxQVVb/black#44
zrfwL,1rr3k1/1q2npbp/p1b1p1p1/B2pP3/N4P2/1N1P4/P4QPP/1RR3K1 w - - 7 22,b3c5 b7b1 c1b1 b8b1,563,94,94,275,advantage middlegame short,https://lichess.org/ehmJrfib#43
ZEjIs,2br2k1/1pqn1p1p/2p3pb/1P2p1N1/2P1P2P/r1N1P3/2RQB1P1/3R2K1 b - - 2 21,d7f8 d2d8 c7d8 d1d8,598,86,100,252,advantage middlegame short,https://lichess.org/v7M3xBCY/black#42
J72RG,2kr1b1r/p1p2ppp/1pnqp3/8/P7/2P1BN2/1PP2PPP/R2Q1K1R w - - 1 12,g2g3 d6d1 a1d1 d8d1,557,90,100,66,advantage middlegame short,https://lichess.org/gb1AZtZf#23
7MFVI,2q2rk1/1p2bppp/pnr1p3/B2pP3/3P4/3Q1N1P/PP3PP1/R1R3K1 w - - 5 22,a5b6 c6c1 a1c1 c8c1,442,89,100,185,advantage middlegame short,https://lichess.org/5PpR7zCt#43
hW5IS,r3k2r/pp4pp/2nqpnp1/3p4/Q2P4/3BP3/PP1B1PPP/R3K2R w KQkq - 2 14,d2b4 d6b4 a4b4 c6b4,586,90,78,199,advantage middlegame short,https://lichess.org/uYc3sR7W#27
Ig1VT,rnb1k3/ppppqr1p/8/b3p2Q/2BP1p1P/2P5/P1PB2P1/R3K2R w KQq - 0 15,h5f7 e7f7 c4f7 e8f7,590,95,69,98,advantage middlegame short,https://lichess.org/Jvs7NJki#29`,
  },
];
