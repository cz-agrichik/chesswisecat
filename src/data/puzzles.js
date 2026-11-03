/* data/puzzles.js — puzzle data, Lichess CSV format, pasted as is.
   Current set: tasks_backrank600.csv (back-rank mates, rating up to 600).
   Order matters: packs are filled in this order (see core/puzzle-source.js).
   To group puzzles explicitly, fill PACKS_OVERRIDE, e.g.
   [{ title: 'Пакет 1', ids: ['hUjQL', 'KObot'] }] — then packSize is ignored. */
const PUZZLES_CSV = `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
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
3IT4e,4r3/7p/5k2/5p2/1RP3p1/5N2/6PP/7K w - - 0 35,f3d2 e8e1 d2f1 e1f1,561,114,81,217,backRankMate endgame mate mateIn2 short,https://lichess.org/o9O9LNXY#69`;

const PACKS_OVERRIDE = null;
