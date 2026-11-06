/* data/puzzles.js — the books on the shelf. Each book is one Lichess CSV pasted as is.
   Fields: color (book colour), id (the cat's lines per book live under this id in ui/texts.js BOOK_TEXTS),
   title (book page), short (spine of the book), csv.
   Order of books = order on the shelf. */
const VOLUMES = [
  {
    id: 'hanging-endgame', color: '#D32F2F', title: 'Висячие фигуры в эндшпиле', short: 'Висячие в эндшпиле',
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
    id: 'hanging-middle', color: '#B71C1C', title: 'Висячие фигуры в игре', short: 'Висячие в игре',
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
    id: 'advanced-pawn', color: '#E53935', title: 'Проходная пешка', short: 'Проходная пешка',
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
    id: 'fork', color: '#A52424', title: 'Вилка', short: 'Вилка',
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
    id: 'discovered', color: '#C62828', title: 'Вскрытые нападения', short: 'Вскрытое нападение',
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
    id: 'kingside', color: '#DB3A34', title: 'Атака на королевском фланге', short: 'Атака на короля',
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
    id: 'middlegame', color: '#8E1B1B', title: 'Тактики в миттельшпиле', short: 'Тактики в миттельшпиле',
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
  {
    id: 'king-mate', color: '#CC2E3A', title: 'Маты на королевском фланге', short: 'Маты на королевском фланге',
    // task_kingmate600.csv — mates on the kingside, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
Q29hl,r4rk1/pbpnb1pp/1p1pp1q1/5p2/1PPP4/P2BPN2/1BQn1PPP/R3R1K1 w - - 0 14,f3d2 g6g2,522,103,90,496,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/duE17BTk#27
R32vy,r2q1rk1/2p2ppp/3p4/pp4b1/3P2b1/2PQ1NP1/PPB2PP1/R3R1K1 b - - 3 18,g4f3 d3h7,556,103,85,578,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/lOgiRlCv/black#36
q8Ftc,r4rk1/pp2qppp/2n1p3/b5N1/3P3P/P2QP3/1B2KPP1/R6R b - - 2 15,a8d8 d3h7,485,105,96,329,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/sllddSD6/black#30
BE5zq,r2q1rk1/1p1b1ppp/2pbp3/p2P4/2P5/2Q1P1P1/PB3PBP/R4RK1 b - - 0 16,d6b4 c3g7,454,96,98,1186,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/UXXgN5hB/black#32
5e52x,2r3k1/1b2rp2/pn2p2p/1p1q2p1/3P2P1/2PB2BP/1P3QP1/4RRK1 w - - 3 29,f2f6 d5g2,478,103,100,286,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Klnhh2yj#57
bJnpa,r3k2r/pp1b1ppp/2n1pq2/2b5/4Q3/2PB1N2/PP3PPP/RN2K2R b KQkq - 2 10,e8g8 e4h7,579,86,83,160,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/BXP1K47f/black#20
E3Pfj,r2qbrk1/4p1bp/p2p1Bp1/2pP4/4P1P1/2Np1P2/PP5Q/2KR2NR b - - 0 17,g7f6 h2h7,546,83,100,99,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Y5LCSNBk/black#34
KD8Us,r4rk1/pbq1bppp/1pn1p3/2p5/4Q3/2P5/PPBP1PPP/RNB1R1K1 b - - 3 13,e7d6 e4h7,492,88,88,146,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/xYJY7ESL/black#26
ZXIgh,r3r1k1/pppnqpp1/3b1np1/6B1/3P4/2P2N1P/PPQ2PP1/RN3RK1 w - - 0 14,f1e1 e7e1 f3e1 e8e1,531,92,83,218,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/0woA8EfM#27
choWj,rn1q1Q1k/1ppb2p1/p2pp1Br/4P1bp/2PP3P/2N1P1P1/PP6/R4RK1 b - - 3 18,d8f8 f1f8,450,94,88,126,kingsideAttack mate mateIn1 middlegame oneMove pillsburysMate,https://lichess.org/kaDYTEfS/black#36
yZcJM,r1q2rk1/p1pb1pp1/2pp1B1p/5N2/4n1Q1/2N5/PPP2PPP/R4RK1 b - - 0 16,e4f6 g4g7,550,99,94,430,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/pHYnwjRb/black#32
EHAot,2r1q1k1/3R2bp/2n1r3/p1P2pp1/Pp6/5N1P/1PQ2PPB/3R2K1 w - - 0 28,f3g5 e6e1 d1e1 e8e1,547,97,100,157,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/LuwOgiJN#55
k7JCk,1r3rk1/pb1p1ppp/3Np1n1/2p1P3/2B2Pq1/1P2Q3/P1P3PP/R4RK1 w - - 3 18,c4e2 g4g2,577,93,73,334,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/ZYQC3af0#35
sCkZT,r4rk1/pb3pp1/1p5p/3q4/8/2P1p3/PP1NQPPP/R4RK1 w - - 0 18,e2e3 d5g2,542,91,100,215,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/P3tqQeXB#35
uKnP6,rn2r1k1/p4pp1/4b3/qp1p2N1/3P4/4Q3/PPP2PPP/R3R1K1 b - - 2 19,e6d7 e3e8 d7e8 e1e8,520,79,100,137,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/uDzdaCmZ/black#38
jx0S1,r4rk1/p2b1pbp/2pp2p1/4pP2/2B1P1nq/2N5/PPPB2PP/R2Q1RK1 w - - 1 14,g1h1 h4h2,486,99,94,718,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/eNih95sE#27
GCJLh,1rb2rk1/p1p1qppp/1p2p3/4P3/2N1Q3/1P5R/P4PPP/5RK1 b - - 3 18,c8b7 e4h7,567,99,97,389,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/BblkwobO/black#36
iGEnh,r1b2rk1/pp1nqppp/4p3/4N3/4Q3/2PB4/PP3PPP/R3K2R b KQ - 2 12,d7c5 e4h7,552,110,71,354,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/4W0UGBt6/black#24
F1w2e,rn2k1nr/p2b1p2/2p1p2q/1p1pP3/3P1Np1/P5P1/1PP1B2P/R2QNRK1 w kq - 1 18,e2g4 h6h2,558,89,100,195,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/NLSEcNkf#35
Qv5Qy,r4rk1/1b3ppp/ppqbpn2/8/P1BQ1B2/2N4P/1PP2PP1/R3R1K1 w - - 0 16,f4d6 c6g2,479,85,83,305,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/7Ud1vhDo#31
jHaNZ,2r1q1k1/pn3ppp/1p1R1b2/6NQ/5B2/8/PP3PPP/3Rr1K1 w - - 7 23,d1e1 e8e1,551,81,100,110,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/pErovtKq#45
ZvVvN,4r1k1/2p1qpb1/1p2b1pp/1P2p3/8/2QP2P1/rB2PPBP/1RR3K1 b - - 0 21,e5e4 c3g7,511,90,100,365,kingsideAttack master masterVsMaster mate mateIn1 middlegame oneMove,https://lichess.org/loKkQFbJ/black#42
aT8k1,r3r1k1/p4ppp/1p1bq3/8/3P4/1NR2Q1P/PP3PP1/3R2K1 w - - 7 28,d4d5 e6e1 d1e1 e8e1,584,104,97,433,kingsideAttack mate mateIn2 middlegame pillsburysMate sacrifice short,https://lichess.org/XnPRl1yL#55
IMF5W,rn2Q2k/pp1q1rp1/2p2bB1/3n4/3p4/1P5P/PBPP1PP1/R3R1K1 b - - 1 21,d7e8 e1e8 f7f8 e8f8,573,85,85,183,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/bx1H0dQz/black#42
swHiP,r4rk1/5ppp/2n2q2/pp3b2/3p4/PB3N2/1PP1QPPP/R3R1K1 b - - 2 19,f8e8 e2e8 a8e8 e1e8,519,88,83,133,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/IeAEFEmZ/black#38
f67Sa,2r2rk1/1bp2p2/p3pn1p/1p1q2p1/1P1P4/P2BP1B1/5PPP/2RQ1RK1 w - - 2 18,d1e2 d5g2,468,104,97,349,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/eLKpIhbt#35
3aZfE,r4rk1/p1b2ppp/2pq1n2/3p4/PP2p3/B1P1P3/3N1PPP/R2Q1RK1 w - - 3 18,b4b5 d6h2,576,90,100,225,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/wCxmoArn#35
xw4Lb,r1bqr1k1/p1p3pp/2p5/3p4/2PQp3/1PB3P1/P3PP1P/3RK2R b K - 1 16,c8h3 d4g7,460,88,100,263,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/OBUjgwrC/black#32
iWTLS,r4rk1/p3qppp/1pn1b3/2N1p3/4Q3/2PB4/P1P2PPP/1R3RK1 b - - 1 16,e7c5 e4h7,524,91,100,255,kingsideAttack master mate mateIn1 middlegame oneMove,https://lichess.org/fluMNRmr/black#32
pqDO8,r4rk1/ppb2ppp/2pq4/3p4/4NP2/1P4Q1/PBb1B1PP/3R1RK1 b - - 1 18,c2e4 g3g7,425,104,95,508,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/6nEtuOVb/black#36
7FV96,1r1r2k1/p5bp/6p1/2p2p2/1P6/P1P1P1Pb/1B2nP1P/RN2R1KB w - - 7 22,e1e2 d8d1 e2e1 d1e1,450,98,100,305,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/hldzqjfJ#43
PFDGA,2rq1rk1/1b2bppp/p1N1p3/2p5/1P6/P1Q1P3/1B3PPP/R4RK1 b - - 1 16,b7c6 c3g7,399,105,88,502,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Zd01qY1F/black#32
tch4v,4rrk1/p5pp/qpp1pnn1/4PpN1/3P4/2P3BQ/P1P3PP/R4RK1 b - - 0 18,f6d5 h3h7,493,96,100,423,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/hmHobeJH/black#36
35a35,r3r1k1/p4pp1/1pb2q2/2p5/3p2Q1/8/PPP3PP/R1B2R1K w - - 0 25,f1f6 e8e1 f6f1 e1f1,467,100,96,581,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/OrNAG7vl#49
xPgG5,r4r1k/3n2q1/p1p1p3/1p2P2p/3PBp2/2N2Q2/PP1R3P/7K b - - 2 34,f8g8 f3h5 g7h6 h5h6,567,110,69,37,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/yWhW6GHE/black#68
JklL0,r4rk1/pp1qbppp/2p1p3/3n4/3PQ3/3BB2P/PPP2PP1/R3K2R b KQ - 3 15,d5e3 e4h7,550,95,97,415,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/V1OLUBPL/black#30
lPsP4,r1br2k1/1p3p1p/2n1q1pP/p3P3/3p4/4P3/PPPQ2P1/1K1R1BNR b - - 0 17,d4e3 d2d8 c6d8 d1d8 e6e8 d8e8,585,88,68,278,kingsideAttack long mate mateIn3 middlegame,https://lichess.org/KYTCvqev/black#34
4n7HC,r3qrk1/p1p1nppp/2p4B/2bpPb2/8/2NB2Q1/PPP2PPP/2KR3R b - - 6 13,f5d3 g3g7,432,115,96,668,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/G5b1qVFV/black#26
S24zJ,r1bq1rk1/5ppp/p2b4/1p1Pp1N1/3pQ3/Pn1P4/1P3PPP/RNB2RK1 b - - 2 15,b3c1 e4h7,585,98,92,378,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/YDVbDfp3/black#30
DnzNF,r2q1rk1/pp3ppp/1bp1b3/4p1N1/4Q3/3P2P1/PP1BnPBP/R4R1K b - - 3 15,e2d4 e4h7,469,108,97,709,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/o8DD6sK1/black#30
JS3sL,2rr2k1/2q1bppp/p2ppn2/1p6/3BNP2/P5Q1/1PP1B1PP/4RR1K b - - 0 17,f6e4 g3g7,498,102,85,904,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/aTjHtVmW/black#34
FRWop,r4rk1/1b1p1pbp/2qPpnp1/8/NPp5/4PN2/1P2BPPP/R1BQ1RK1 w - - 0 15,f3e5 c6g2,470,109,92,1264,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/eCYOVP6z#29
Eeh8o,r2q1rk1/p1nb1ppp/2p1pb2/1p6/2PP1B2/3Q1N2/PPB2PPP/R3R1K1 b - - 1 14,b5c4 d3h7,576,90,93,232,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/J9kbLc3C/black#28
aU6gn,r2q1rk1/1p2bppp/p1p5/3b4/3BB1Q1/1P2P3/P4PPP/R4RK1 b - - 1 16,d5e4 g4g7,578,91,78,211,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/8EjUAiQ3/black#32
lTXc5,4rr1k/1p3ppn/p3q2p/2p1PN2/3p2Q1/P2PR1P1/1PP3BP/5RK1 b - - 0 31,d4e3 g4g7,502,111,96,746,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/drLSvsma/black#62
8LRV2,4q1k1/ppb1rpp1/5n2/2P3B1/1P6/P1Q2n1P/B4PP1/3R2K1 w - - 0 24,c3f3 e7e1 d1e1 e8e1,546,85,100,190,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/JJcLXjMu#47
rvuCs,r1b2rk1/ppp1nppp/3pP3/q7/3BP1Q1/2N5/2P2PPP/4KB1R b K - 0 14,c8e6 g4g7,559,90,100,90,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/1GwivKjR/black#28
T6U3j,4rrk1/qp4pp/p2pN3/3Pnp2/1R6/2P3QP/PP4P1/3R3K b - - 2 25,f8f6 g3g7,562,96,100,210,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/o1QiJKjT/black#50
PpJwP,r3k2r/1q1p1ppn/pp1bp2p/4P3/2PN1P1n/1Q2B2P/PP4P1/3R1RK1 w kq - 0 19,e5d6 b7g2,569,94,93,191,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/ssVbjZbU#37
Zzqz3,r2q1rk1/1ppnNppp/3pb3/p7/2PQ4/PP4P1/1B2PPBP/R4RK1 b - - 0 15,d8e7 d4g7,454,93,59,106,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/lfEW3JEs/black#30
JNxcC,r1bq1r1k/ppp2ppp/8/3pb3/6P1/1P1BP2Q/P1PP1P2/RN2K1R1 b Q - 1 14,e5a1 h3h7,524,89,100,118,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/TvtZRZiu/black#28
nOCny,5rk1/r2q1ppp/bn3n2/pp2p1N1/2ppP3/P2P3Q/BPP2PPP/R1B2RK1 b - - 3 18,f6g4 h3h7,510,92,100,62,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/xCXvMPsz/black#36
V0FuA,r4r1k/pp4pp/2n5/8/1P2q3/PQ2BN1b/1P3PP1/R4RK1 w - - 0 18,f3g5 e4g2,585,79,100,207,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/CiSPgXpE#35
Vl7nB,r2r2k1/1b3ppp/p1q1pn2/Q7/2NP4/2N1P3/PP3PPP/2R2RK1 w - - 1 18,c4e5 c6g2,530,105,94,269,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/vT5LgSt9#35
o5qm2,r1bq1rk1/p1p1bppp/1p2p3/4P3/4Q3/3B4/PPP2PPP/R1B1K2R b KQ - 0 11,a8b8 e4h7,490,90,100,336,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Dy8ZHEVl/black#22
bUrpb,r2q1r1k/pbp2ppp/2p5/3pP3/7b/2NB3Q/PPP2PPP/R4RK1 b - - 2 14,h4g5 h3h7,517,84,3,95,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/5BizVE29/black#28
cuf06,1kn2rr1/npp2N1p/3bp3/1q1p4/3P2p1/2P1P3/Q5PP/RNB2RK1 w - - 4 23,f7d6 f8f1,399,106,85,366,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/lu1CpD7W#45
hrh6z,r4bk1/pp1b2pp/2n1pN2/3q4/3P4/2PQ4/PP4PP/RBB3K1 b - - 4 19,g7f6 d3h7,449,105,100,358,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/ttFhOKha/black#38
zCHd8,2kr3r/ppp4Q/2nqN1p1/3p1p2/3P4/2P5/P1P2PPP/R1B2RK1 w - - 1 14,h7g6 d6h2,595,96,80,183,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Z8XOGKGv#27
R24K9,3q1rk1/1p1bbppp/4pB2/1P1p4/2n5/3QP1N1/2B2PPP/1N3RK1 b - - 0 18,e7f6 d3h7,469,96,100,264,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/AFmS0OKX/black#36
s8PMC,2r2rk1/4bppp/2p1p3/p2qP3/1P3P2/P3R1P1/2Q2B1R/5K2 b - - 1 35,a5b4 c2h7,570,89,88,552,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/lPijcUJ8/black#70
PtfI1,5r1k/pp5n/2pp1r1p/4p1pb/2B1P2P/P2P1PR1/1PPNK3/6R1 b - - 0 25,g5h4 g3g8 f8g8 g1g8,556,90,97,379,kingsideAttack mate mateIn2 middlegame operaMate short,https://lichess.org/x4O5D1oW/black#50
HsTfE,r2n1rk1/pbp3pp/1p2p1q1/5p2/2P5/P1P1PN2/4BPPP/R2Q1RK1 w - - 0 14,f3e5 g6g2,488,100,95,334,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/V8VToFy5#27
1ivJ3,r2r2k1/1b2bppp/p1qpp3/1p6/2p5/P1PnB1NP/BP3PPN/1R1Q1RK1 w - - 2 18,d1e2 c6g2,448,113,88,561,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/e1MMzueS#35
IVAQa,r4rk1/1p1nq1pp/2p1p3/p2pPpN1/1nPP2BP/6P1/PP1N1P1K/RQ5R b - - 0 18,f5g4 b1h7,517,104,91,277,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/54b8IzIo/black#36
Doxrk,r1b1Q1k1/ppp2ppp/3n1q2/5P2/3N4/1B6/PPP3PP/RN2R1K1 b - - 0 17,d6e8 e1e8,564,88,100,196,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/mnVTYLeG/black#34
weZqg,r1bq1rk1/pp2bppp/4pB2/3p4/7Q/PP1BP3/2P2PPP/RN2K2R b KQ - 0 12,e7f6 h4h7,533,80,80,162,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/fc2UDZ6W/black#24
Pnkhg,2b2rk1/2qnbppp/2n1p3/3pP1N1/2pP1B1P/r1p3P1/P1Q2PBN/R3R1K1 b - - 1 18,c6b4 c2h7,585,91,97,323,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/JWKgMmZ7/black#36
9QngV,rnb2rk1/2qn1ppp/pp2p3/2b1P3/P3Q3/2NBBN2/1P3PPP/R4RK1 b - - 4 14,c8b7 e4h7,533,98,100,242,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/9ud3shIw/black#28
L3151,1br2rk1/ppq1nppp/4p3/3p4/2PP1B2/3Q2NP/PPB2PP1/2R1R1K1 b - - 0 20,c7f4 d3h7,553,92,100,131,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/ZfacaUOi/black#40
NqgyM,r4rk1/p3bppp/1p1qp3/8/3P2n1/1P1B1b2/P3QPPP/2BR1RK1 w - - 0 19,e2f3 d6h2,455,99,90,139,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Yk4YO4hq#37
hNSD6,r4r1k/2q2ppp/2p2n2/ppb2R2/4P1n1/PBN5/1PP1Q1PP/R1B4K w - - 1 18,f5c5 c7h2,598,110,96,299,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/S5x3081J#35
ZZVvn,r3r1k1/1p1b1ppp/p7/2p5/P2n1P2/2BP2Q1/1PP1q1PP/R4R1K b - - 3 20,d4c2 g3g7,556,100,91,582,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/XXmtg0Ue/black#40
K6SGS,1k4r1/pppr1pPp/3b1B2/3q3P/2Np1nQ1/1P6/P1P2PP1/R3R1K1 w - - 1 21,g4d7 d5g2,569,92,100,242,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/FLbAy2up#41
AvA4c,5rk1/4Rp1p/b1rp2p1/p7/2nB4/2P4P/P1P2PP1/2K1R3 b - - 2 24,f8b8 e7e8 b8e8 e1e8,437,106,79,887,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/WeINIQlg/black#48
fVDLP,r1bqr1k1/ppp2ppp/3n4/8/8/2Q5/PB2NPPP/R3K2R b KQ - 3 16,d8e7 c3g7,491,92,86,98,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/zArfJz6I/black#32
rOcPI,r2q1rk1/1p3ppp/p1npp3/8/4Q3/3B3P/PPP2PP1/3RR1K1 b - - 0 14,d8f6 e4h7,590,91,100,82,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/6PBetpuC/black#28
BnQAU,r1q2rk1/1p2Nppp/p2p2n1/2p5/2PQ1P2/1P4Pb/PB2P2P/R3R1KB b - - 0 17,g6e7 d4g7,521,97,100,57,kingsideAttack master mate mateIn1 middlegame oneMove,https://lichess.org/3aQlh54Q/black#34
7bjSc,r1b1r1k1/ppp2pbp/3p2p1/6q1/2PNPn2/1P2Q3/PB1N1PPP/1R2R1K1 w - - 7 17,d4f3 g5g2,563,83,50,402,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/klU6LvNx#33
C8QvS,rn2k2r/p1p3pp/1p2p3/3bN1q1/3P4/B7/P1P2PPP/R2Q1RK1 w kq - 1 14,f2f4 g5g2,560,85,100,170,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/rOb1lI4o#27
PIgmA,r4rk1/pbN2ppp/1p2p1q1/8/1PBn4/P3P3/5PPP/2RQ1RK1 w - - 0 18,d1d4 g6g2,591,89,100,184,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/ssxrxXgg#35
MGCWL,2r5/4Nppk/3q1b2/p2p1P1p/6n1/PP2P3/2Q3PP/4RRK1 w - - 3 27,e7c8 d6h2,566,87,74,148,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/i9OT2f5i#53
Ixath,r5k1/pp1n1ppp/2p2n2/8/1qPP4/P4B2/1BQ2PPP/R3r1K1 w - - 0 18,a1e1 b4e1,493,93,100,137,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/E3b1ojrr#35
LVaE7,rn3rk1/1p2qppp/4b3/p1ppP3/3P2P1/2PQ3P/P1B2PK1/R1B1R3 b - - 1 18,c5c4 d3h7,531,96,76,77,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/nsy2UYsc/black#36
DmCMU,r2q1rk1/p4ppp/1p1b1n2/3p2P1/3Q4/2B1PN1P/PP3P2/R3K2R b KQ - 2 17,f6e4 d4g7,469,103,83,223,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/QvwzKVvU/black#34
cxM0p,r4r2/pbp1n1bk/1p2pnpp/3qNp2/3P1P2/2P3N1/PPB3PP/R1BQ1RK1 w - - 1 16,c2b3 d5g2,535,81,100,131,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/qrKjgJIb#31
tkNzy,r3k2r/1b2bpp1/p1q2n1p/8/8/1NN1B3/PP3PPP/2RQ1RK1 w kq - 4 18,b3d4 c6g2,434,109,78,455,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/gNjxWfTd#35
c13gQ,2n1b1rk/6qp/1p2p3/pP1pPp2/P2P3p/3B1N2/3Q1PPP/5RK1 w - - 0 25,f1c1 g7g2,531,111,94,894,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Hu4rpGxv#49
lBf1R,2rr2k1/pb2bp1p/1p2p1p1/3qn3/3P4/P2QBN2/1PB2PPP/R4RK1 w - - 2 18,f3e5 d5g2,561,91,95,199,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/679ZnDFJ#35
JsLAe,4n1k1/p5br/1p1q2Np/2n5/2P2N2/1Q6/PP3PPP/R1B3K1 w - - 0 21,b3e3 d6d1 e3e1 d1e1,498,90,82,70,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/vAXc8hfd#41
0DUcv,r3k2r/4npp1/p2q2p1/1p1p4/4p3/2P2N2/PP2QPPP/R1B2RK1 w kq - 0 18,f3d4 d6h2,500,92,100,251,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/wMS0iD59#35
Wa40B,r4rk1/ppp3pp/2n1R3/6q1/3P4/2P2p2/PBP1QPPP/4R1K1 w - - 0 18,e2c4 g5g2,531,101,95,309,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/i0qP9umq#35
8KREq,2r1r1kb/1b2pp1p/p1p2npB/1p6/3qPQ2/1BN2P2/PPP3PP/R4R1K b - - 7 16,f6h5 f4f7,427,98,83,241,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/UZJtGboJ/black#32
88IhZ,rn4qk/pbp2R2/1p1p3B/7Q/3b4/2N5/PPP3PP/R5K1 w - - 0 17,g1h1 g8g2,493,107,89,855,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/2Jmfk2ql#33
AJZg6,4rrk1/ppp2ppp/2b3q1/4p2n/2P5/1P2Q1NP/PB3PP1/R2R2K1 w - - 6 23,g3h5 g6g2,534,97,84,473,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/1loXmSL4#45
lsZij,r4rk1/1b1pbppp/pqn1p3/1p2P3/3P1P2/P2Q1N1P/1P2NRP1/RB4K1 b - - 2 18,b5b4 d3h7,474,106,87,677,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/YfHjymz2/black#36
IDvph,r7/p2kqp2/1pn2b2/3p1N2/3P1P2/2P4R/P1Q3PP/R3r1K1 w - - 9 29,a1e1 e7e1,399,103,86,284,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/jKrvykcZ#57
DDx4Z,1n1r1rkb/p3nB1p/2q3pP/1pp1p1N1/4P3/2P1BQP1/PP3P2/R3R1K1 b - - 0 22,f8f7 f3f7,483,88,80,188,kingsideAttack master mate mateIn1 middlegame oneMove,https://lichess.org/Axvi2iX8/black#44
oljqO,r1b2rk1/pppp2pp/2nbp3/3n2N1/3P4/1R5P/2Q2PP1/5RK1 b - - 2 18,c6d4 c2h7,555,95,79,145,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/6EwRXTfE/black#36
nECBX,4r1k1/pp3pbp/2n1q1p1/6B1/3P1Q2/1BP2pP1/PP3PbP/2RRr1K1 w - - 19 28,d1e1 e6e1 c1e1 e8e1,544,87,100,84,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/7byEYBnK#55
WXbEo,r2q1rk1/3nbppp/b1n1p3/3pP3/1ppP1P2/2P4P/1PQN2PN/RBB2RK1 b - - 1 17,b4b3 c2h7,570,81,76,66,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/hWIW5QXk/black#34
30wZI,3r1rk1/pp3ppp/3q4/3p4/1P1Qn1b1/P3P3/1B2BPPP/R4RK1 b - - 0 18,g4e2 d4g7,530,102,85,294,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/nfF5PQBQ/black#36
4JWQz,r1bq1rk1/pp4pp/2n1p3/3pPp1Q/3Pn3/2PB3R/PP4PP/RNB3K1 b - - 1 13,g7g6 h5h7,580,83,88,293,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/VozsAO8h/black#26
st2wQ,2rqr1k1/pp1n1ppp/3Pp2B/3p4/6Q1/8/PPP2PPP/R3R1K1 b - - 6 16,d7f6 g4g7,562,84,100,157,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/NzsKULpN/black#32
rNmvb,r1bq1rk1/ppp1nppp/3p4/b2P4/2BQP3/P4N2/1B3PPP/R4RK1 b - - 1 15,a5b6 d4g7,498,105,93,234,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/rj8W4BVk/black#30
e5PZG,r3r1k1/pbpqbpp1/2pp3p/8/8/3BQN1P/PPP1RPP1/4R1K1 b - - 4 17,e7f6 e3e8 a8e8 e2e8 d7e8 e1e8,582,101,90,897,kingsideAttack long mate mateIn3 middlegame pillsburysMate,https://lichess.org/dhXqOdqb/black#34
SEg4t,r3nrk1/2qp1ppp/p3p3/1p2P3/1P2Q3/P2B1P2/2P3PP/R4R1K b - - 0 18,a8c8 e4h7,514,106,98,376,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/w3GfUKxd/black#36
kep7k,r2q2k1/1p2rpp1/p4N1p/2P1b3/1P4bP/P3p1P1/2Q2P2/RB2R1K1 b - - 0 26,e5f6 c2h7 g8f8 h7h8,585,100,97,327,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/eIrpmcqQ/black#52
ifJY0,r4rk1/1p1q1ppp/2p1p3/p7/1b1P4/3QP3/1PB2PPP/1R3RK1 b - - 1 18,b7b5 d3h7,562,94,100,82,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/EepTUvww/black#36
ZQ1vs,r4rk1/1b1nb1pp/p2pN3/1p6/5PQ1/P3B3/1Pq3PP/R4RK1 b - - 1 18,d7f6 g4g7,490,96,72,347,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/dOd4y6rA/black#36
TVC4j,r4rk1/5ppp/p1pb1n2/3p1q2/3Q1N2/2B1P3/PP3PPP/R2R2K1 b - - 9 17,f6e4 d4g7,580,91,100,274,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/cANGIZiZ/black#34
Q5Q5O,r2q1rk1/3nbppp/4p3/p2n2B1/4Q3/2N2P1P/PPB2P2/R3R1K1 b - - 2 19,e7g5 e4h7,413,108,89,1040,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/ekk2rQuL/black#38
rxNOc,r5k1/ppp3pp/2npN1qP/2P5/4p3/2Q5/PP2PrP1/2KR1B1R b - - 0 16,g6e6 c3g7,573,95,96,512,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/NUNTJGp8/black#32
h47ll,2kr3r/pb1ppPq1/1p6/7p/2P5/3B4/P1PQ1PPP/4RRK1 w - - 2 18,e1e7 g7g2,545,87,97,528,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/yQRRyPNd#35
8h0td,r2qr1k1/pbpnbpp1/1p2p3/3pN2Q/3P1P2/1P2P2R/PBPn2PP/R5K1 b - - 3 14,d7f6 h5f7,514,92,100,386,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/inkG5fPT/black#28
tA4va,r2q1rk1/ppp1bppp/2n1p3/3n2N1/3P1B2/2PQ1N2/PP3PPP/R3K2R b KQ - 2 11,d5f4 d3h7,520,91,45,57,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/cc5YSQRM/black#22
jexyN,2r1k2r/1b1p1pp1/p1q1pn1p/1pn5/3B4/P1P4N/2B1QPPP/RN2R1K1 w k - 2 20,d4f6 c6g2,533,88,100,147,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/zOGDF5m1#39
Lnmlv,r1bq1rk1/5ppp/1p2pB2/p2p2N1/8/P2QP3/1PP2PPP/R4RK1 b - - 0 13,d8f6 d3h7,521,83,85,207,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/60GcckOs/black#26
sdF86,r2q1r1k/1p4b1/p1np2PR/4p3/2B1P1b1/1NN1Q3/PPP5/2KR4 b - - 0 18,g7h6 e3h6,399,100,83,182,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/kglM91ww/black#36
zri5G,1r3rk1/1pq1ppbp/2bp1np1/3N4/2PQ4/1P4P1/PB2PPBP/R4RK1 b - - 4 14,f6d5 d4g7,524,98,90,116,kingsideAttack master mate mateIn1 middlegame oneMove,https://lichess.org/OIOz7auQ/black#28
wPiNI,rn1q1rk1/pp3ppp/2p1b3/8/3PQ3/1P1B4/P2N1PPP/R3K2R b KQ - 2 13,d8a5 e4h7,434,115,94,408,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/LSRQoXwE/black#26
wLXzY,r4r1k/pp1b1ppn/1q2p3/2ppP1PQ/5B2/2P1P3/PP3PP1/R3K2R b KQ - 0 18,b6b2 h5h7,593,89,100,188,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/0Z49amu1/black#36
iLLGc,rn1q1rk1/p3bpp1/2pp1n1p/8/2NQP3/1P3P1P/PBP2P2/R3R1K1 b - - 0 14,f6h7 d4g7,449,109,94,651,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/EcUHY6wk/black#28
YQ3gp,1r3r1k/pp2R1p1/2pp2Bp/8/P1P1Q3/6Pb/1P5P/4Rq1K w - - 2 26,e1f1 f8f1,458,102,96,900,kingsideAttack mate mateIn1 middlegame oneMove pillsburysMate,https://lichess.org/GJafT39f#51
FRFP9,1br1r1k1/pb2qp1p/6p1/2p5/3P4/1P3n2/PQ2BPPP/B1R1R1K1 w - - 0 22,e2f3 e7e1 c1e1 e8e1,437,103,96,466,kingsideAttack master mate mateIn2 middlegame short,https://lichess.org/mDykaDUL#43
gmDA5,5rk1/2q2pbp/pp3Np1/2p2n2/P4P1Q/7P/1Pb3P1/R4RK1 b - - 3 27,g8h8 h4h7,550,91,80,303,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/TcVP2ZDM/black#54
tR3VF,r4rk1/ppqnbppp/2p1p3/3n2N1/3P4/2PQBB1P/PP3PP1/R4RK1 b - - 4 15,d5e3 d3h7,596,85,100,186,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/bzTQKnnM/black#30
dP0T9,r4rk1/ppq2pp1/2p2b1p/2n5/8/2P2PP1/PPBNQP2/R3R1K1 b - - 8 18,f8e8 e2e8 a8e8 e1e8,471,90,100,192,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/6HgYu4Uj/black#36
S1xRn,r3r1k1/ppp2pPn/3pB2q/4p3/3bP3/2NP1Q1P/PPP5/1K3R1R b - - 0 17,e8e6 f3f7,501,112,84,434,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/xy5JS3Ku/black#34
4auaT,r5nr/pppk4/3b3p/4q1p1/3nP3/2PPB3/PP3QPP/RN3RK1 w - - 1 18,e3d4 e5h2,557,103,97,286,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/CGCOAVqE#35
2w0dX,r4rk1/ppp3pp/2p1qp2/2n1pN2/4P1Q1/3P3P/PPP2PP1/R4RK1 b - - 1 16,g8h8 g4g7,489,90,81,93,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/qovXmdbD/black#32
roUnr,r4rk1/ppqb1p2/4pBBp/3pP3/2nP2Q1/2P3P1/PP5P/R4RK1 b - - 0 20,f7g6 g4g6,458,104,90,287,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/cdehlTQh/black#40
oYsKF,6k1/p4pp1/1pb1pq1p/2r1P2n/8/1P2NPP1/P2Q3P/1B1R2K1 b - - 0 32,f6f3 d2d8 c6e8 d8e8,549,87,100,335,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/kTMnX6GP/black#64
W6Prp,r1b2rk1/1p2qppp/2p1p3/p2n4/3PQ2P/3B1N2/PPP2PP1/2KR3R b - - 2 14,b7b5 e4h7,504,85,57,165,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/9HXt81Ez/black#28
M89Db,5k1r/p4p2/1p1bp2p/3pqb2/8/1QN1P3/PP3PPP/2R2RK1 w - - 2 18,c3b5 e5h2,595,87,100,159,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Tlz6mJQs#35
SgDvZ,3rk2r/1b1p1p1p/3qpBp1/1B6/P3P3/2P2P1Q/1P3bPP/RN5K w k - 1 22,f6h8 d6d1 b5f1 d1f1,536,87,100,250,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/UqVFj7Ic#43
kQwbI,r4rk1/1b3pbp/pp4p1/2pq4/3n4/P2PB2P/1P1NBPP1/1R1Q1RK1 w - - 2 16,e3d4 d5g2,579,91,100,385,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/VrBoWNoz#31
2CNlc,1r1r2k1/p1q2ppp/2p2b2/8/4R3/5N2/PPP1QPPP/R5K1 b - - 10 19,b8b2 e4e8 d8e8 e2e8,400,116,94,227,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/3q1udeGY/black#38
zRZPQ,r4rk1/2p2ppp/p1p1p3/3pB1q1/3Pb3/2P1P3/PP3PPP/R2Q1RK1 w - - 1 14,e5c7 g5g2,530,95,86,274,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/m8AqEpfc#27
OjL36,2rQ2k1/1q3pp1/bp2pn1p/8/2P5/1P3N2/P4PPP/1B1R2K1 b - - 3 24,c8d8 d1d8 f6e8 d8e8,598,104,84,332,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/HFfM7ENF/black#48
NOnI1,r2qrRk1/p1pn2pp/1p2p2B/4P3/8/6Q1/PPP1B1PP/R5K1 b - - 0 17,d7f8 g3g7,567,85,100,90,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/LYv1OsxW/black#34
7e0Ji,r1b2rk1/pp1n1ppp/2p1p3/4P1N1/2pP4/q1P1R3/P1Q2PPP/3K1B1R b - - 0 14,b7b5 c2h7,482,97,95,517,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/libLxPlW/black#28
0VOcy,r2qr1k1/1pp2ppp/3p1nb1/nP1P4/p1P1p3/P1Q1P1N1/1BB2PPP/R3K2R b KQ - 1 16,f6g4 c3g7,550,108,93,1076,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/XV6mU5Iz/black#32
iFFhh,r4rk1/pbqn1ppp/1p1pp3/2pP2N1/2P5/P1P3P1/2Q1PPBP/3R1RK1 b - - 0 14,e6e5 c2h7,417,98,79,430,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/eLJ4qjw1/black#28
FlrDy,r1b2rk1/p4ppp/4p3/q1bnN3/4QP2/3B4/PP1B2PP/R3K2R b KQ - 3 18,a5b6 e4h7,528,90,100,210,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/59hM4FEw/black#36
FzaJr,r3kb1r/2pq1pp1/p1n4p/1p1p4/3P4/3BPP1P/PPQ2P2/R1B3RK w kq - 0 15,c2e2 d7h3,475,120,84,485,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Hx1HeA1A#29
odHlt,rn2k2b/pbp5/1pqppnpB/5pN1/2BP4/4P3/PPP2PPP/R2Q1RK1 w q - 4 14,d1d3 c6g2,563,110,88,1059,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/2sNV2g2c#27
sI3S2,r4rk1/3nqppp/2p1p3/pp6/3PQ3/2P5/PPB2RPP/R5K1 b - - 1 16,a8c8 e4h7,457,110,94,288,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/pvIgP4g2/black#32
TeVQV,rn3rk1/pbpp1pp1/1p2p2p/6q1/2PP4/2P1P2P/P2BBPP1/R2Q1RK1 w - - 0 12,f2f4 g5g2,571,99,98,438,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/qwflJTQR#23
RcdoE,3r1rk1/1bp2p2/1p2p1p1/p2q3p/3P1P2/2PB2P1/PP1R2P1/R3Q1K1 w - - 0 23,d3e2 d5g2,569,82,100,108,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/iBeoXT2b#45
7In0N,1r3rk1/ppq1bppp/3p1n2/3N1b2/2PQ4/1P3PP1/PB4BP/R4RK1 b - - 2 15,f6d5 d4g7,591,84,100,275,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/xAxT9Wco/black#30
87aJ8,r3r1k1/4bpp1/pq3B1p/1p1p3b/2pP4/5P2/PPBNQ1PP/R3R1K1 b - - 0 22,e7f6 e2e8 a8e8 e1e8,550,86,100,172,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/qGKfJe6p/black#44
ThPsn,2b1k2r/2b2ppp/1pPq1nn1/1P1p4/4p3/4PN2/2B2PPP/BN1Q1RK1 w k - 0 18,f3d4 d6h2,522,94,100,167,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/bZFoDB9X#35
Obr2f,r4bk1/p1B3pp/2p3r1/5pq1/3P4/2P4P/PP2QPP1/4RR1K w - - 2 28,e2e3 g5g2,518,98,92,767,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/3eImE7OC#55
I81Mi,2rq1rk1/1p1n1ppp/4p3/p2p4/Pb1Q2P1/1P3N1P/1B3PB1/1R4K1 b - - 6 21,b4c5 d4g7,558,85,71,153,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/z9yFkPuS/black#42
uAHuo,2r1k2r/1Bp1n3/1p1pQ3/5Pp1/6n1/1Pb3B1/P1P2PPq/R5RK w k - 0 24,g3h2 h8h2,518,89,100,238,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/wA88p2nH#47
G4yF9,r4rk1/pb2bppp/2q2n2/1Np1n3/2P2B2/8/PPQ1B1PP/3R1RK1 w - - 3 18,f4e5 c6g2,492,86,77,145,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/fh0ezcze#35
aef6r,r2qr1k1/1p3ppp/1nnpb3/p2P4/8/PPQ2N2/1B2BPPP/R3K2R b KQ - 0 20,b6d5 c3g7,465,92,100,221,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/0Yw4cwal/black#40
hBiJn,rn2r1k1/pp3ppp/8/3p4/1P1P4/PQ4Pb/5P1P/RNBRq1K1 w - - 4 16,d1e1 e8e1,400,96,100,149,kingsideAttack mate mateIn1 middlegame oneMove pillsburysMate,https://lichess.org/mpTaHlOh#31
cLN0P,r6r/pp2kppp/8/3pqp2/QP4n1/2P4N/P5PP/RN3R1K w - - 0 17,b1d2 e5h2,585,90,100,83,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/anXp9WzF#33
TQRom,r1b2rk1/pp3ppp/2pb4/3pq3/2P5/2N1P3/PP2BPPP/R2Q1RK1 w - - 0 12,c4d5 e5h2,551,89,100,254,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/xLuu8Vew#23
JWnik,5rk1/ppp3p1/5qnp/3Pp3/2N5/2P3bP/PPQB2PN/R4r1K w - - 8 22,h2f1 f6f1 a1f1 f8f1,556,111,73,213,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/H4r2xSKE#43
WSM17,r4rk1/1b1p1pbp/p1q1p1p1/1p2P3/3n1P2/P1N5/BPP2QPP/R1B2R1K w - - 2 17,f2d4 c6g2,425,117,96,310,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/jPmUqZVW#33
Gm52A,r2q1rk1/p1p2pp1/2Q1n2p/4p3/8/2P5/PPP2PPP/R1B1R1K1 w - - 0 15,e1e5 d8d1 e5e1 d1e1,400,93,79,130,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/rELJlUTX#29
3RbKm,1b2r1k1/1p1r1pp1/p2q3p/3p4/3Pp3/P1P5/BP3PPP/3QRR1K w - - 7 25,d1g4 d6h2,399,119,95,552,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/SLOlfLas#49
OLFic,rn3rk1/p1ppqppp/bp5n/4P1N1/2PP1B2/3Q3P/PP2K1P1/R4B1R b - - 2 14,b8c6 d3h7,516,100,96,327,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/O2MP4jTd/black#28
PzH8M,7k/1p3ppp/p1b2b2/4p3/4P3/PqN1Q3/1P3PPP/R1Br2K1 w - - 3 25,c3d1 b3d1 e3e1 d1e1,449,105,96,291,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/QFb1Glky#49
rt8DT,r1bqr1k1/pp3ppp/3p2nP/3n2B1/3QP3/5BP1/PPP3K1/R6R b - - 0 16,d8g5 d4g7,457,109,92,249,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/IsRBfdzO/black#32
6AKm6,kb1r4/pp3ppp/5n2/3r4/P7/1Q2B3/1PP2PPP/R5K1 w - - 3 21,h2h3 d5d1 a1d1 d8d1,406,103,100,249,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/a4ARMXzZ#41
JJNc8,r2q1rk1/pp3ppp/2pbbn2/8/3QNp2/1P5N/PBPP2PP/2K2B1R b - - 1 15,f6e4 d4g7,578,90,100,348,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/txA9RNPM/black#30
MnzDq,r3k1nr/pb2p1bp/2q1P1p1/1p3p2/B2n4/2N2N2/PP4PP/R1BQ1R1K w kq - 0 16,f3d4 c6g2,451,86,83,293,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Jdsh7JDd#31
8ifTj,2r2rk1/1bp2pbp/p3pnp1/1p1qB3/3P4/P3P2P/NPQ1BPP1/2R2RK1 w - - 1 18,a2b4 d5g2,436,94,56,97,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/Y4q68LGK#35
rNX4c,2r2rk1/pb3pb1/1p2p2p/3qN1p1/3P4/1QP3B1/P4PPP/3RR1K1 w - - 0 20,c3c4 d5g2,527,93,100,334,kingsideAttack master mate mateIn1 middlegame oneMove,https://lichess.org/gc6YK8bS#39
0voaB,8/p1p1bkpp/2Q5/5p2/4p1q1/2N1R1Pb/PPP2P1P/R1Br2K1 w - - 2 20,c3d1 g4d1 e3e1 d1e1,554,97,100,352,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/rzw42Ctr#39
nm4cJ,r4rk1/pp3ppp/2pqb3/8/4Q3/P2B3P/1PP2PP1/R3R1K1 b - - 0 17,a8e8 e4h7,581,104,86,1048,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/nTLgIIqs/black#34
mVklA,r3r1k1/1bp1qp2/pp1b2pB/8/3PN1Q1/6P1/PP3P1P/R3R1K1 w - - 0 19,e4d6 e7e1 a1e1 e8e1,447,100,100,407,kingsideAttack mate mateIn2 middlegame pillsburysMate short,https://lichess.org/I50yzJK1#37
OySj2,r1b1qrk1/3n1ppp/p2p4/1p1Pp1N1/8/P1P1P2P/2Q1BPP1/R4RK1 b - - 0 15,e8e7 c2h7,590,86,100,181,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/2Kkfes8r/black#30
2KuYM,2Q1n1q1/1p2k1r1/p1p4N/2Pp1p2/1P1Pp3/4P2P/P6R/5RrK w - - 12 44,f1g1 g7g1,576,108,78,25,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/lLNbV8u4#87
lpWxY,r4rk1/pb3pbp/4p1p1/np1qP3/2pP4/2P2N2/PPBBQPPP/R4RK1 w - - 1 16,f3g5 d5g2,410,110,93,235,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/f9oJUcnh#31
ATWRj,r4rk1/1bpNQppp/p1qn4/2p5/5P2/4B3/PPP3PP/3RR1K1 w - - 9 21,d7f8 c6g2,471,104,86,152,kingsideAttack master masterVsMaster mate mateIn1 middlegame oneMove,https://lichess.org/e3fpwPYA#41
X3Cfz,rb2k3/pp3p2/2nqbp2/1QNp4/3Pp2P/8/PP2PPBP/2R2RK1 w q - 8 18,c5b7 d6h2,475,102,84,655,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/xZXTrhTS#35
v0Ghb,3r2k1/pp3ppp/2p1np2/3r4/3PRBq1/2P3P1/PPQ3PP/4R1K1 b - - 4 21,e6f4 e4e8 d8e8 e1e8,443,109,98,553,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/Zx0HFTzS/black#42
AaMkv,r3Q1k1/ppp2pp1/2n2b2/8/5Bb1/2PB2Pq/PP3P1P/4RRK1 b - - 5 22,a8e8 e1e8,587,85,79,62,kingsideAttack mate mateIn1 middlegame oneMove pillsburysMate,https://lichess.org/TW9D91Zx/black#44
NmRtu,r2qk2r/ppp1bppp/n2p4/3P4/3Q4/PP3B2/1BP2PPP/R3K2R b KQkq - 0 12,e8g8 d4g7,472,86,100,318,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/72trJbAP/black#24
XGfeH,rn2k2r/p4ppp/1pp1p3/3pN1q1/3P3n/P1PQP3/1P1N1PPP/R4RK1 w kq - 5 18,b2b4 g5g2,509,91,94,654,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/i0xXEAyT#35
Lwpwh,r2q1rk1/ppp2ppp/4pn2/3p4/3P2N1/3QP1P1/PPPN1PP1/R3K2R b KQ - 2 11,f6g4 d3h7,476,104,90,357,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/MzVlkBLK/black#22
NlZWx,r2q1rk1/4bppp/p1n1pB2/1p1p4/3P2b1/P1PQ1N2/1PBN1PPP/R3K2R b KQ - 0 13,e7f6 d3h7,399,95,100,175,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/o7JvpH6d/black#26
R0od1,r1bq1r1k/1p1n2b1/2p4p/p4pN1/P2P4/1BP3B1/1P3PPP/R2Q1RK1 b - - 0 18,h6g5 d1h5 g7h6 h5h6,463,106,82,260,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/KP7RYPHl/black#36
SGTFV,r1bq3k/ppQ3pp/2p2r2/3p4/8/3B4/PPP2PPP/3RR1K1 b - - 5 22,d8c7 e1e8 f6f8 e8f8,518,99,79,465,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/v3ZTgxHC/black#44
bUZTq,3r2k1/1b3ppp/pnq1p3/4P3/1BPp4/1P6/P2Q1PPP/2R1R1K1 w - - 0 25,c4c5 c6g2,510,90,100,191,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/LZTVRUJV#49
B1oPH,r4rk1/1b1p1p2/p1q1pbp1/7p/Np3P1P/1B2B2R/PPP2nP1/1R1Q3K w - - 3 19,e3f2 c6g2,561,102,80,265,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/3tqATjle#37
l8O6g,6k1/1p3ppp/p1n3b1/3p2P1/2pPrBQb/2P4P/PPq5/R5K1 b - - 2 26,c2b2 g4c8 c6d8 c8d8 e4e8 d8e8,476,103,93,1102,kingsideAttack long mate mateIn3 middlegame,https://lichess.org/5ia8F5kc/black#52
zJVPJ,r2q1rk1/ppb1nppp/2p1pB2/8/3PQ1P1/2PB1N1P/PP3P2/R3R1K1 b - - 0 16,g7f6 e4h7,503,92,100,175,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/muaZJzM5/black#32
ATT20,r3R1k1/pp3ppp/1q1P4/2n2b2/2p5/6PP/PP2Q1BK/R7 b - - 1 26,a8e8 e2e8,571,104,100,300,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/tqEcby7w/black#52
4SPfO,r1b2rk1/pp3ppp/1qn1p3/3pP3/1P1P1P2/PN1QnN2/2B3PP/R4RK1 b - - 10 16,e3f1 d3h7,550,91,100,131,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/KGJt3hcQ/black#32
MMNwq,rn4k1/5r1p/ppb1N1p1/4P2n/1p3P2/6P1/P1PR3P/2KR4 b - - 0 25,c6f3 d2d8 f7f8 d8f8,576,84,100,185,kingsideAttack mate mateIn2 middlegame short,https://lichess.org/ZTe8YmcU/black#50
alHNY,r2q1rk1/pbp2p2/1p1pp1p1/3P3p/2PbPP1P/2NB4/PP4P1/R2Q1RK1 w - - 1 18,g1h1 d8h4,596,104,85,217,kingsideAttack master mate mateIn1 middlegame oneMove,https://lichess.org/l0FqUWyh#35
U0Xuz,r2qr1k1/pppbnppp/3p4/3P4/2PQ2P1/5N2/PB3P1P/R4RK1 b - - 2 18,e7g6 d4g7,438,101,100,478,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/SnyYF45a/black#36
uPxb3,r1b1k1r1/pp3p1p/1b1p3Q/8/2B1q3/2P5/P4PPP/RN3RK1 w q - 0 16,b1d2 e4g2,537,95,98,1059,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/8m3pGIiR#31
nQY1B,1r1qr1k1/p1pbbppp/1p6/n2P4/2PQ4/5NP1/PB3PBP/R4RK1 b - - 2 16,e7c5 d4g7,420,107,95,182,kingsideAttack mate mateIn1 middlegame oneMove,https://lichess.org/XIDmCVg5/black#32`,
  },
  {
    id: 'opening-mate', color: '#B83227', title: 'Маты в дебюте', short: 'Маты в дебюте',
    // task_kingopeningmate600.csv — mates in the opening, rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
w37ON,r3kb1r/5ppp/p1b1pn2/1ppqN1B1/8/3P4/PPP1NPPP/R2Q1RK1 w kq - 1 12,g5f6 d5g2,592,88,75,80,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/zAc6MRbb#23
lEY3T,r3rbk1/pb3ppp/1p3n2/1NPqN3/3p4/P2B3P/1PP2PP1/R2QR1K1 w - - 2 16,b5c7 d5g2,542,87,80,307,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/NPkPQIGT#31
wX8WM,rn2k1nr/1b1p2pp/1p1Pp1q1/p1p1Pp2/2P5/2P2N2/P3BPPP/R1BQR1K1 w kq f6 0 14,f3d2 g6g2,416,101,100,652,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/DhRh2TI6#27
e5YVp,r1bq1bkr/pp1np1p1/2p2n1p/6N1/2QP4/8/PPP2PPP/R1B1K1NR b KQ - 1 9,e7e6 c4e6,459,107,82,340,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/3btCARMt/black#18
460To,r1b2rk1/pp1n1ppp/3qp3/3p4/3P2n1/2PB1N2/PP1N1PPP/R2Q1RK1 w - - 7 11,f3g5 d6h2,399,108,91,1287,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/jbcQXTX7#21
COk3B,r3kbnr/pp3ppp/2b1p3/3q4/2pP4/4PN2/PP3PPP/RNBQ1RK1 w kq - 0 9,f3e5 d5g2,453,87,100,139,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/idiJ8HHH#17
UPZs5,1r1q1rk1/1b1nb1pp/p1np4/1pp1pP1N/4P1Qp/2PP4/PP4BN/R1B2RK1 b - - 3 19,d7f6 g4g7,523,112,98,1440,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/n5TDxX1D/black#38
S7ufv,rn3rk1/ppp4p/2b3p1/3q1p2/3bNP2/3P4/PPQ1B1PP/R1B2R1K w - - 0 14,e4c3 d5g2,531,103,98,529,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/PSiE1qRO#27
vs7e6,rbb2rk1/1p3ppp/pn1q1n2/3p4/3Np3/P1N1P3/1P1PBPPP/R1BQ1RK1 w - - 1 14,a3a4 d6h2,477,104,97,413,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/V6lLdFfQ#27
UYElK,r1b2rk1/pp3pp1/3q1n1p/3p4/2PNp1n1/4P3/PP1NBPPP/2RQ1RK1 w - - 0 17,c4d5 d6h2,598,91,95,182,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/lvV7bkzM#33
UAlVg,r1bq1rk1/ppp1bppp/1n2p3/3nP3/3PQ3/2N2N2/PPB2PPP/R1B2RK1 b - - 8 12,d5c3 e4h7,566,94,88,112,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/HBP6is7a/black#24
TjkDf,r1q1k2r/ppp2ppp/2np1n2/2b1p3/2B1PP2/2NP3b/PPP1N1P1/R1BQ1R1K w kq - 0 10,g2h3 c8h3,515,103,90,342,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ub1wgc0A#19
7fjVA,r2n1rk1/ppB1npp1/8/3PN1qp/1P2b3/P6P/B4PP1/R2Q1RK1 w - - 2 23,d5d6 g5g2,464,97,86,337,kingsideAttack master mate mateIn1 oneMove opening,https://lichess.org/S2fquBk3#45
N3VcJ,r2qr1kb/1b3p1p/p1nppnpB/1p4N1/4PQ2/2N5/PPP2PPP/R3RBK1 b - - 3 15,f6h5 f4f7,402,111,97,1722,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/3DBiec1I/black#30
Zegtm,r1bq1rk1/pp2bppp/4p3/3n4/4QP2/1P1BPN2/P5PP/RN2K2R b KQ - 2 12,c8d7 e4h7,400,112,86,309,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/p9KMJFPl/black#24
Bzobw,rn1q1rk1/pp2nppp/2pb2B1/3p2NQ/3P4/2N5/PPP2PPP/R1B2RK1 b - - 0 10,f7g6 h5h7,423,106,94,233,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/XygZf89j/black#20
5MOzO,r1b1kb1r/1pqp1pp1/p3P3/2p4p/4P1n1/P2P1n2/BPP3PP/RNBQ1RK1 w kq - 0 11,d1f3 c7h2,499,88,100,165,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/I5s8JQQi#21
EK5SQ,r1b1k2r/pppp1ppp/3b1n2/4q3/8/4P3/PPP1BPPP/RNBQ1RK1 w kq - 4 8,b1c3 e5h2,518,105,92,485,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/LgBo0vV7#15
E0dDw,r1bq1rk1/ppp1nppp/2n1p3/3P4/4p1QP/P1B5/1PP2PP1/R3KBNR b KQ - 0 9,e6d5 g4g7,443,99,77,243,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/yuUNDaeN/black#18
CkZXz,rnbq1rk1/ppp1bpp1/4pn2/3p2P1/2PP4/2NQ1N2/PP2PPP1/R3KB1R b KQ - 0 8,f6h7 d3h7,533,98,96,275,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/hVm6UQtK/black#16
nKT3o,r1b2rk1/2pq1ppp/p1nb4/1p2p3/4Q3/3B1N2/PPPP1PPP/R1B2RK1 b - - 0 13,d7e7 e4h7,429,101,100,197,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/pyYbyDZu/black#26
NsT1i,rn1q1bkr/pp2p1pp/8/8/6n1/1QN5/PP1P1PPP/R1B1K2R b KQ - 1 11,e7e6 b3e6,504,101,73,85,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/NfmVgmB7/black#22
lrkh4,r1b1kb1r/2q1ppp1/p1N5/7p/3P2n1/8/PP3PPP/RNBQ1RK1 w kq - 1 12,d4d5 c7h2,589,84,100,179,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/jW2OZnhH#23
JjJW2,r2q1rk1/1ppb1pp1/p1nbpn1p/3p3P/3P2P1/2P1P3/PPQN1P2/RBB1K1NR b KQ - 0 10,f6h7 c2h7,486,93,100,68,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/qQujsdsb/black#20
6X1Oh,r1b1k1nr/1p3ppp/p2bp3/3Pq3/8/8/PP1QBPPP/RNB2RK1 w kq - 2 12,e2f3 e5h2,549,90,100,161,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/QG3yHXZM#23
InAr3,r2q1rk1/p4ppp/n1p1p3/1p1p4/2PP1Bb1/bP2P3/2QN1PPP/RB2K2R b KQ - 1 16,b5b4 c2h7,400,121,86,874,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/w2tY30YS/black#32
g8Q1A,r1bq1rk1/ppp2ppp/2n1p3/8/1b4Q1/1P6/PBPP1PPP/2KR1BNR b - - 2 9,d8d6 g4g7,549,110,67,54,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/fBa77tNs/black#18
sItWQ,r1b2rk1/1pb2ppp/p2q1n2/3p4/1PPPp3/P7/N2BBPPP/2RQ1RK1 w - - 1 16,c4c5 d6h2,576,92,100,106,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Y9kiYY66#31
vqXg1,rnb2rk1/p4ppp/1ppb4/3Pq3/1P2P3/P1N2P2/4B1PP/R1BQ1R1K w - - 1 16,c1b2 e5h2,491,105,85,334,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/oiQfaagi#31
Uy7Ld,r1bq1rk1/2p1bppp/p1n1pn2/4P3/1p1P4/2NQB3/PPB2PPP/R3K1NR b KQ - 0 11,f6g4 d3h7,512,98,87,221,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/INRRjlhx/black#22
WZgqx,r1bq1rk1/1p2bppp/p1n1pn2/2pp4/5P2/1P2PNQ1/PBPPB1PP/RN3RK1 b - - 9 9,f6e4 g3g7,563,100,89,1025,kingsideAttack master mate mateIn1 oneMove opening,https://lichess.org/zvZ69BT7/black#18
cxxbk,1b1rr1k1/p4ppp/b2q1n2/3p4/NP2p3/P3PN2/1B3PPP/R2QR1K1 w - - 0 21,f3d4 d6h2,562,109,93,524,kingsideAttack master mate mateIn1 oneMove opening,https://lichess.org/l9X0biYq#41
WxUB3,rbb1k2r/5ppp/p2qpn2/3p2B1/3N4/3B4/PPP2PPP/R2Q1RK1 w kq - 2 13,g5f6 d6h2,578,88,100,203,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/uIsR9yzK#25
FkvC5,r2q1rk1/1p1bbppp/p3p3/8/4Q1n1/2NB4/PP3PPP/R1BR2K1 b - - 3 15,e6e5 e4h7,531,86,100,118,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Ql0FOMpU/black#30
VazRp,rn2kb1r/pp3pp1/3qpnp1/3p4/3P4/1B6/PPP2PPP/RNBQ1RK1 w kq - 1 10,b1c3 d6h2,507,99,82,500,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/tMHf27BJ#19
ZLwEv,r1bq1rk1/pp1n1ppp/2pbp2B/3nN3/2BP2Q1/8/PPP2PPP/RN3RK1 b - - 7 9,d7e5 g4g7,548,103,97,378,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/4mVnui8W/black#18
b340X,r1bq2k1/ppp1brBp/2n1p3/3p3N/2np2Q1/1B6/PP3PPP/RN3RK1 b - - 0 15,f7g7 g4g7,485,104,82,242,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/fVYaBul7/black#30
LP7pc,r2q1rk1/1p3ppp/n3bb2/2pnN3/3P4/2PQ3P/P1B2PP1/RNB2RK1 b - - 1 16,c5d4 d3h7,501,103,96,223,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/T9aqW1tc/black#32
rAGXK,r2qr1k1/p4ppp/2p3b1/3n4/1b1Q4/4P3/PB2BPPP/RN3RK1 b - - 1 14,b4e7 d4g7,585,84,76,106,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/eF0A80bZ/black#28
l0kuG,rnbq1rk1/pp1pbppp/1n2p2B/2p1P3/2PP2Q1/8/PP3PPP/RN2KBNR b KQ - 4 8,f7f5 g4g7,498,90,82,323,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/V452vWqI/black#16
EsId0,r1q2rk1/pbn2ppp/1pn1p3/4P3/2pP4/P1P2P2/2QBN1PP/RBR3K1 b - - 0 17,c7d5 c2h7,488,91,100,274,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/1TCIRKgT/black#34
rnO5B,r1b2rk1/1ppp1pp1/p2b3p/6q1/2N1Pn2/2PP3P/PP2BPP1/RN1Q1RK1 w - - 5 14,g1h1 g5g2,591,103,87,238,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/TU92BqIW#27
0lgi7,rn2k2r/1b1nbppp/p1q1p3/4P3/PppP4/4BN2/2P1BPPP/RN1Q1RK1 w kq - 0 16,f3d2 c6g2,559,85,100,161,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/L9qOfay1#31
ZunO4,rn1k3r/pp4pp/2pbBn2/4q3/3Np3/8/P1PP1PPP/R1BQ1RK1 w - - 2 14,c1b2 e5h2,502,90,85,191,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/kEuDN3Fj#27
dKIJ8,r1b1k2r/pp3ppp/3b1n2/3pq3/8/2N1P3/PP2BPPP/R1BQ1RK1 w kq - 2 11,c3b5 e5h2,463,111,83,304,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/D0rPWClM#21
uLy0g,2kr1bnr/pbp1pppp/1pq5/4n3/3P4/2N1PNP1/PP3PBP/R1BQ1RK1 w - - 3 10,f3e5 c6g2,431,108,94,1085,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/0LSQoQIR#19
lhJlC,r1bq1rk1/pppp1ppp/2n5/8/1bP5/2N2NP1/PPQ1PPP1/R3KB1R b KQ - 2 10,d8f6 c2h7,559,99,98,603,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/5u9tDBLo/black#20
sO8FQ,rn2k1nr/pR2b1p1/2pq1pp1/3p4/3P4/2N1P3/P3BPPP/2BQ1RK1 w kq - 3 16,e3e4 d6h2,518,85,86,131,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/tAEVVYk3#31
yiDn1,rn3rk1/1b2bppp/ppq1pn2/2p5/5B2/P1NP1N1P/BPP2PP1/R2QR1K1 w - - 2 14,f3e5 c6g2,471,107,78,166,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/oIaiCr5V#27
64Ybb,r1b2rk1/ppp2ppp/1bn5/6N1/3q4/2N5/PPQ2PPP/R1B2RK1 b - - 1 12,c6b4 c2h7,570,98,90,226,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Hv7mYPme/black#24
TWbbu,r2q1rk1/pp2bppN/2n1pn1p/4p2b/3P4/3Q3P/PPB2PP1/RNB2RK1 b - - 1 13,f6h7 d3h7,595,99,74,185,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/S3RtyOmY/black#26
Ghi3V,r1b1k2r/pp1p1ppp/3b1n2/2pNq3/4P3/3B4/PPP2PPP/R1BQK2R w KQkq - 8 10,e1g1 e5h2,571,105,91,498,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/sWYOMfQX#19
vzADd,r1bq1rk1/p3b2p/2p1p2n/2p2pN1/3p1P1Q/3P1N2/PPP3PP/R1B2RK1 b - - 1 14,h6g4 h4h7,565,96,74,205,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/KlIVgGuf/black#28
5re0L,r2qr1k1/pb2bppp/2pp1n1B/4p3/4P3/2PB2QP/PP3PP1/RN3RK1 b - - 3 13,e8f8 g3g7,416,95,100,195,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/BE1E5IkB/black#26
NIaz0,r1bq1rk1/1pp2ppp/2np1N2/p1b1p1N1/2P5/P3P3/1PQP1PPP/R1B1KB1R b KQ - 0 9,d8f6 c2h7,561,99,100,332,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/MHTdJxL3/black#18
Xk59c,rn2k2r/pp2bppp/1q2b3/2p5/2P1Q3/3B1N2/PP3PPP/R1B2RK1 b kq - 6 12,e8g8 e4h7,419,100,94,240,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/hqDMTABP/black#24
y6qOR,r1b2rk1/ppqnbppp/2p5/8/P1BpP1n1/5N2/1PPNQ1PP/R1B2R1K w - - 0 12,f3d4 c7h2,486,108,93,332,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/XndxSQyQ#23
JDKA3,rnb1k2r/ppp2ppp/3b1n2/4q3/3Np3/1PP5/P2PBPPP/RNBQK2R w KQkq - 3 8,e1g1 e5h2,562,87,79,139,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ADmos0OH#15
Rynb9,r3kbnr/1b1p1ppp/p1q1p3/1p6/4PB2/2N3P1/PPP2PBP/R2Q1RK1 w kq - 2 11,e4e5 c6g2,553,105,96,350,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/hFOgUfIo#21
Je5tY,rn2kb1r/1b2pppp/p1q2n2/1pp5/8/2NP1N2/PPP1BPPP/R1BQ1RK1 w kq - 4 9,f3e5 c6g2,516,99,83,155,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/YWix57qz#17
jiJAh,2kr1bnr/pbpp1ppp/1p2p3/4P3/3n2q1/2N2N2/PPP1BPPP/R1BQ1RK1 w - - 0 10,f3d4 g4g2,528,85,100,247,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/qlhAfTMs#19
AWpQ5,r1bq1rk1/ppp2p1n/3b2p1/n3p1NB/7P/PP2P3/1BQP1PP1/RN2K2R b KQ - 0 12,g6h5 c2h7,521,101,84,380,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/No2EUv8I/black#24
7jqAE,r3kbnr/1b1p1ppp/p1q1p3/1pp5/5P2/1P2PN2/PBPP2PP/RN1Q1RK1 w kq - 2 9,f3e5 c6g2,400,107,0,107,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/pymORlzy#17
DCNzg,r3kb1r/1p3ppp/p1b5/2pqP3/3p4/1P2P1Rn/PBPPN1P1/RN1Q2K1 w kq - 0 14,g3h3 d5g2,492,104,79,129,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/PTE8Pz4e#27
pYluF,rn2kb1r/1pq2pp1/2p1pnp1/p2p4/2PP4/P1N1P3/1P2BPPP/R1BQK2R w KQkq - 2 10,e1g1 c7h2,438,106,97,1260,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ZGsqmEtA#19
8GphX,r1bq1rk1/3nbppp/p3p3/1p1pP3/2p5/2P1PN2/PPQN1PPP/RB3RK1 b - - 2 13,d8c7 c2h7,436,111,85,335,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ugqzIMl2/black#26
UeeCJ,1qr2rk1/pb1pbppp/1pn1p3/3nP3/3P4/4BP2/PPQNN1PP/1BR2RK1 b - - 2 14,d5e3 c2h7,432,111,84,445,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/LIPhnqOF/black#28
P7eT6,r1b1k2r/1pq1ppbp/p1n3p1/8/2BPN1n1/5N2/PP3PPP/R1BQ1RK1 w kq - 2 12,f3g5 c7h2,551,86,100,489,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/MFJmLUyv#23
wozHK,rnbq1rk1/ppp1bppp/4p2B/8/3PP1Q1/2P5/P4PPP/R3KBNR b KQ - 4 8,e6e5 g4g7,551,94,65,120,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/sJCnwzAc/black#16
Ln2sm,rn2kb1r/pp2pppp/2p5/4q3/2P3n1/8/PP1PNPPP/RNBQK2R w KQkq - 0 9,e1g1 e5h2,577,98,75,259,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Ybe557Zi#17
3wd8Q,1nkr1b1r/Qp3ppp/3qp3/1B6/6n1/2NP4/PP3PPP/R1B2RK1 w - - 1 14,c3e4 d6h2,586,85,100,212,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/oFoCMdWX#27
cM4o2,rnbq1rk1/pp2pp1p/3p4/2p1P1Np/3b3P/2NQ4/PPP2PP1/R1B1K2R b KQ - 0 10,d4e5 d3h7,428,106,87,284,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/RGBTfi7M/black#20
cKdbt,r1q2rk1/3nbppp/p3p3/1p1pB2b/3P4/2P5/PPQN1PPP/1BR1R1K1 b - - 3 16,d7e5 c2h7,516,94,100,461,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/zb4Stcza/black#32
veLgI,r2q1rk1/1bpnbppp/1p2p3/3nP3/PP2Q3/3B1N2/3N1PPP/R1B2RK1 b - - 2 14,a8b8 e4h7,535,91,76,96,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Hi1YJ0vU/black#28
gU0fk,r2q1rk1/ppp2ppp/2nbpn2/3p4/5P1P/PP2P1Q1/1BPPN1P1/R3KB1R b KQ - 0 12,f6e4 g3g7,440,97,83,194,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Uy3uTgMG/black#24
r4bWz,rnbq1rk1/pp2bppp/4p2B/2pp3n/2B1P1Q1/2NP3P/PPP2PP1/R3K1NR b KQ - 3 11,h5f6 g4g7,466,106,86,672,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/vU1QHHl6/black#22
QAoqU,rnbq1rk1/2p2ppp/p3pb2/1p6/3PQ3/3B1N2/PPP2PPP/R1B2RK1 b - - 1 11,c7c6 e4h7,502,96,100,329,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/nkgETEDd/black#22
qHODi,r1bqr1k1/ppp2ppp/2nbpn2/3p4/5P2/1P2PNQ1/PBPP2PP/RN1B1RK1 b - - 12 10,f6e4 g3g7,446,88,100,197,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/kjcWJhE5/black#20
MCo4a,r1bq1rk1/pp2bppp/4p3/8/1n1pQP2/3B1N2/PPP3PP/R1B1K2R b KQ - 0 13,b4c6 e4h7,492,105,87,311,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/t0sSZFs4/black#26
6vhAZ,1nrqrbk1/5ppp/b7/p2NP3/PppP4/5N2/1PQ2PPP/1BR1R1K1 b - - 2 20,d8d5 c2h7,501,104,87,519,kingsideAttack master mate mateIn1 oneMove opening,https://lichess.org/8DPyNDph/black#40
xFIO4,r1bq1rk1/ppp2ppp/2n5/2b1p1N1/8/6P1/PPQPPPBP/R1B2RK1 b - - 3 10,c5b6 c2h7,553,83,100,177,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/zhsG90H4/black#20
pXI8M,rnb1k2r/ppp2ppp/1b1q4/8/2BP2n1/5N2/PP3PPP/RNBQ1RK1 w kq - 0 10,f3g5 d6h2,399,112,87,440,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/BUJxGSL2#19
l64PA,rnbqk2r/pp1p1ppp/2p1n3/4P3/1bP1Q3/2NB1N2/PP3PPP/R1B1K2R b KQkq - 6 9,e8g8 e4h7,532,110,96,473,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/RnlPZoPf/black#18
G2pwQ,rnbq1rk1/5ppp/2p1p3/pp6/3P4/P1nQPN2/2B2PPP/R1B2RK1 b - - 1 13,c3d5 d3h7,400,99,85,190,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/0K6FiR50/black#26
QQgoW,2rq1rk1/pb2bppp/1p2pn2/2p5/8/PPQP1NP1/4PPBP/BR3RK1 b - - 0 16,f6d5 c3g7,457,119,87,629,kingsideAttack master mate mateIn1 oneMove opening,https://lichess.org/Yg4SfiGN/black#32
E7abq,rn3rk1/1bp1bppp/1pq1pn2/p7/2PP4/1P2BN2/P3BPPP/RN1Q1RK1 w - - 1 11,f3e5 c6g2,586,101,78,145,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/v2fyEjyi#21
K0NI1,r1bqnrk1/p2pbppp/1pn1p3/4P3/2P1Q3/P2B3P/1P3PP1/RNB1K1NR b KQ - 2 10,c8b7 e4h7,453,100,96,253,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/5HLRgG6C/black#20
VMytx,rn1q1bkr/pp4pp/2p1Nn2/5b2/2B5/8/PPPP1PPP/R1BQK2R b KQ - 0 9,f5e6 c4e6,587,97,78,370,doubleBishopMate kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/lCYvmqVm/black#18
6LVNF,rn1q1rk1/pbppbppp/1p2p3/3nP3/3PQ3/2PB1N2/PP1N1PPP/R1B1K2R b KQ - 4 9,c7c6 e4h7,429,98,69,219,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/z4M2vrFH/black#18
NelOo,r2q1rk1/1ppbbppn/3p3p/4pN2/p3P1QN/2PP4/PP3PPP/R1B1R1K1 b - - 5 16,e7h4 g4g7,515,110,98,574,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/8k7qZgLn/black#32
fEF1c,rnbq1rk1/ppp1bppp/4p3/8/3PQ3/3B1N2/PPP2PPP/R1B1K2R b KQ - 0 8,b8d7 e4h7,508,88,100,191,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/GX7PPwGg/black#16
siYKb,r3kbnr/1b1p1ppp/p2Pp3/1p1qn3/8/4BN2/PP1NBPPP/2RQR1K1 w kq - 0 15,f3e5 d5g2,568,97,87,543,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/5hRNTKbb#29
8xBi6,r1b2rk1/ppp1qppp/2n5/6N1/2P3n1/3Q2P1/PP2P1BP/R1B2RK1 b - - 4 14,c6b4 d3h7,528,88,74,171,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/r95wv52u/black#28
Oq6Vh,rn1q1rk1/1b2bppp/3p1N2/p1pP4/1pP5/1P1Q4/P1B1NPPP/R1B2RK1 b - - 0 14,e7f6 d3h7,487,104,92,141,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/yNsjiAxo/black#28
lGRJY,r1b2rk1/ppq1ppbp/2N3p1/8/3Q2n1/2P2B2/PP3PPP/RNB2RK1 w - - 1 12,d4e4 c7h2,559,98,83,409,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ru39wZ8V#23
yjp4N,rn1q1rk1/5ppp/p3pb2/1b6/2pPQ3/2P2N2/1PB2PPP/R1B1R1K1 b - - 1 18,b8d7 e4h7,431,111,85,304,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/znhC4FN3/black#36
EFMmu,rn3rk1/ppb3pp/2pq4/2Np1b2/4p3/PN6/1PP1BPPP/R2Q1RK1 w - - 6 16,c5b7 d6h2,466,114,93,750,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/sXBGc9EX#31
NSCat,r1bq1rk1/3nbppp/p3p3/1p6/2pPQ3/2P2N2/PPB2PPP/R1B1R1K1 b - - 0 13,a8b8 e4h7,506,104,68,98,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Z6XUTeia/black#26
evX6h,rn1q1rk1/ppp2ppp/8/3np3/4Q1b1/2PB1N2/P1PP1PPP/R1B2RK1 b - - 1 9,g4f3 e4h7,544,89,100,172,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/eG9Ni33F/black#18
Iths4,r1b2rk1/p1q1b1pp/2p5/n4p2/B2Pp1n1/2Q4N/PPP2PPP/RNB2RK1 w - - 1 14,b2b4 c7h2,467,114,96,326,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/mAOptth3#27
uBGVD,rnbq1rk1/2p1ppbp/3p3B/6Qp/pp1PP3/5P2/PPP1N1P1/2KR1BN1 b - - 1 13,f7f6 g5g7,584,87,78,147,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/nk1OiNiB/black#26
n687E,r3kb1r/1b3p1p/p3p1p1/1ppqn3/8/P2PBN1P/1PP1B1P1/R2Q1RK1 w kq - 0 14,f3e5 d5g2,470,98,87,235,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/o2rbDIKx#27
WCS9C,r1bq1rk1/3nbppp/p3p3/1p6/3PQ3/1P1B1N2/P4PPP/R1B2RK1 b - - 0 13,a8b8 e4h7,580,98,96,646,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/oLgWOsge/black#26
B0AxY,r1bq1rk1/1pp1bpp1/2n1p2p/1p1P4/2p1P3/P1Q2N2/1B3PPP/3RKB1R b K - 0 13,e6d5 c3g7,586,88,86,172,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/zl5oWzKX/black#26
bgVIr,rn3rk1/pp3ppp/2p5/3p2qb/3P4/2PQ1NnP/PPB3P1/RN3RK1 b - - 4 17,h5f3 d3h7,550,84,100,537,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/cXzwWcnr/black#34
iXX8F,r3kb1r/2p3pp/p1nqb3/1p6/6n1/3PNN2/PPP1B1PP/R1BQ1RK1 w kq - 1 16,f3g5 d6h2,531,102,89,364,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/wyo8ibN9#31
rLxnZ,r1bq1rk1/ppp2ppp/2nbp3/8/3PQ3/2PB1N2/PP3PPP/R1B1K2R b KQ - 0 10,c8d7 e4h7,400,104,80,462,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/4qGEiDwC/black#20
CdO5x,r1bq1rk1/4bppp/4pn2/p2pP3/1pp2B2/2P1P3/PPQN1PPP/RB2R1K1 b - - 0 13,f6d7 c2h7,504,96,81,216,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/aXcSDhvx/black#26
n9Ffy,r2q1rk1/ppp1bppp/2n5/3nP3/4Q1b1/2PB1N2/PP3PPP/RNB1K2R b KQ - 4 9,g4f3 e4h7,496,105,88,616,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/WhimVoTr/black#18
xnmuA,r3k1nr/p4ppp/1pPb4/4qb2/2Q1B3/2N5/PPP2PPP/R1B1K2R w KQkq - 0 12,e1g1 e5h2,490,89,82,181,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Bv5kWNtT#23
gmmXw,rn1q1bkr/pp2p1pp/8/2p5/6n1/1QN1P3/PP1P1PPP/R1B1K2R b KQ - 1 9,e7e6 b3e6,493,117,87,58,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/KCtgbQpD/black#18
jgUW4,rnb1Q1kr/pp4pp/2pp4/2b1q1N1/3pQ3/8/PPP2PPP/RNB1K2R b KQ - 0 12,e5e8 e4e8,400,112,85,149,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/oTE9ApvM/black#24
uqr2Q,r1b1k1r1/p1ppnpq1/2p4p/2b1P3/4N2B/5N2/PP3PPP/R2Q1RK1 w q - 4 13,e4c5 g7g2,548,110,95,234,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/1GaYGa7v#25
1kLGi,rb2k2r/1p3ppp/p1nqpn2/3p4/3P4/NP2BB2/P1P2PPP/R2Q1RK1 w kq - 1 13,a3b1 d6h2,410,107,85,324,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/IqFPz5yb#25
srZkv,r1b2rk1/ppq2ppp/1npbpn2/7N/3P4/P1NQP3/1PB2PPP/R1B2RK1 b - - 8 14,f6h5 d3h7,549,96,100,53,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ohAn6WDz/black#28
ewyDb,r1b2rk1/p1b2ppp/3q1n2/2Np4/1P2p3/P2B4/1BP2PPP/R2Q1RK1 w - - 0 16,d3e2 d6h2,566,102,80,597,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/jskugjLd#31
qcGMn,r1b2rk1/ppb3pp/3qpp2/1P2Nn2/3Pp3/P3P3/1B2BPPP/R2Q1RK1 w - - 0 17,e5c4 d6h2,469,89,86,155,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/wJ8aTcKJ#33
GzytD,r3kb1r/ppp2pp1/8/3P1bqp/2B5/2NPnP2/PP4PP/R1BQ1RK1 w kq - 1 13,f1e1 g5g2,451,102,100,421,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/2G9Imsqk#25
bJzYk,r1bq1rk1/pp1p1ppp/3Npb2/2Pn4/3P4/3Q1N2/PP3PPP/RB2K2R b KQ - 7 15,d5b4 d3h7,429,96,81,355,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/NRcOXU9N/black#30
HxZA9,r1bqk2r/pp1n1ppp/2pbp3/6N1/2B1Q3/3P4/PPP2PPP/R1B1K2R b KQkq - 2 9,e8g8 e4h7,502,108,78,381,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/33q1PDa6/black#18
an3i9,r1bq1rk1/p1p2ppp/2pp4/2b1P3/4Qn2/3B4/PPPN2PP/R1B1K2R b KQ - 1 11,d6e5 e4h7,470,102,81,496,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/KtYCu9AO/black#22
GBOwC,r1bqr1k1/1pp1bppp/p1np1n1B/4p3/4P2P/2NP2Q1/PPP1BPP1/R3K1NR b KQ - 1 9,c6d4 g3g7,443,109,98,619,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/CAl5bbtE/black#18
RGLKg,r2qk2r/2p1bppp/p1n1p3/1p1nP3/3PQ3/3B1N1P/PP3PP1/R1B2RK1 b kq - 2 14,e8g8 e4h7,403,105,81,374,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/tTaXavrh/black#28
bwgLx,r2q1rk1/ppp1nppp/2n5/5bN1/7Q/2P5/PP1N1PPP/R3KB1R b KQ - 5 11,e7g6 h4h7,529,102,85,271,kingsideAttack master mate mateIn1 oneMove opening,https://lichess.org/lapqoLDW/black#22
Pw4rb,r1b2rk1/pppp1ppp/3b1n2/1B2q3/3NP3/3P4/PPP2PPP/R1BQ1RK1 w - - 3 10,c2c3 e5h2,562,92,76,72,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/POJLKyNR#19
pKyW0,rnbq1rk1/pp2bppp/2p1p3/8/2PPQ3/3B1N2/PP3PPP/R1B1K2R b KQ - 2 9,c6c5 e4h7,553,90,82,168,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/djAuS6E9/black#18
XvbZs,r1bq1rk1/1p3p1p/p2b2p1/4nnN1/8/2PB3Q/PP3PPP/RNB2RK1 b - - 5 16,e5d3 h3h7,594,104,81,231,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/bcXjRq6m/black#32
krVCj,r2q1rk1/pb1n1ppp/5p2/bpp5/3P4/2PQ1N1P/PPB2PP1/R1B2RK1 b - - 1 13,c5c4 d3h7,416,107,80,276,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/OU9nEnl5/black#26
msEYc,2rq1rk1/1p1bbppp/4p3/p2nP3/P7/3QBN2/1P3PPP/RB3RK1 b - - 1 17,d5b4 d3h7,479,109,90,406,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/1beFNnId/black#34
xTXRQ,r1b2rk1/ppbp1ppp/2n2n2/4q3/2P1p3/1PN1P3/P2BBPPP/R2QNRK1 w - - 2 12,a1c1 e5h2,464,105,80,314,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/GS3oMlxV#23
k9G7q,r2q1rk1/3nbppp/2p1bB2/1p1p4/p2P4/2N1P3/PPQ1NPPP/1BR1K2R b K - 0 13,e7f6 c2h7,580,104,50,52,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/x31A3ubc/black#26
Fo1EC,rnbq1rk1/pp3ppp/2pb4/3p4/1P1P4/3Q4/P1B2PPP/RNB1R1K1 b - - 0 13,d6b4 d3h7,590,95,97,460,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/FTqSm64r/black#26
27zby,r1b1k2r/1pqpnN2/p1n1p1p1/2p5/2BbP3/8/PPPP2PP/RNBQ1RK1 w kq - 1 11,g1h1 c7h2,520,92,100,181,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/PGrp3a3o#21
jjybP,r2q1rk1/1b2bppp/p2p1N2/2p5/2Pn4/N2Q4/PPB2PPP/R1B2RK1 b - - 0 16,e7f6 d3h7,399,108,73,238,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/qudsOzkb/black#32
SdO55,rn1q1rk1/1ppbbppp/p2p1n2/3Np1N1/2P5/1P2P3/PBQP1PPP/R3KB1R b KQ - 4 9,f6d5 c2h7,566,90,100,340,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/jrDZ7YRk/black#18
8BO06,r1b1k2r/ppp2ppp/2nb4/4q3/4p3/1P6/P1PPBPPP/R1BQNRK1 w kq - 1 10,a1b1 e5h2,483,99,88,292,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/u3ldHJ3E#19
2BRv7,r1bq1rk1/1pp2ppp/2nb4/p7/2P1P3/1P6/PB4QP/2KR1BNR b - - 0 15,d8h4 g2g7,493,108,96,487,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/s5F2FEoa/black#30
WRIHg,1br2rk1/1b3ppp/pp1qpn2/3p4/PP1N4/2P1P3/3NBPPP/R2Q1RK1 w - - 2 16,a1c1 d6h2,562,97,96,282,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/lJLI1Hu0#31
mLFqj,r1b2bkr/pp1n2pp/4p1q1/P7/3P3B/1Q6/1P3PPP/RN2K2R b KQ - 3 18,g6g2 b3e6,527,100,82,160,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ISVbe29O/black#36
F9RH1,r1bq1rk1/pp3ppp/2nppn2/8/4P3/2B3Q1/PPP1BPPP/2KR2NR b - - 2 10,f6e4 g3g7,538,110,98,804,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/V0v1M9zK/black#20
HkQxh,r1bq1rk1/ppp1npp1/1b1p3p/n2P4/2B1P3/2Q2N1P/PB3PP1/RN3RK1 b - - 2 13,a5c4 c3g7,536,101,93,325,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/lWCxPGLD/black#26
2HeI4,rn3rk1/pbp2ppp/1p2pn2/3q2B1/3P4/2P5/P1B1NPPP/R2Q1RK1 w - - 0 12,g5f6 d5g2,549,93,100,293,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/y4qcGRPY#23
JHo7j,r1b1k1nr/ppb2pp1/2p4p/3pq3/1P2P3/P1N1BB2/2P2PPP/R2Q1RK1 w kq - 0 14,e3d4 e5h2,519,98,79,431,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/UandNobA#27
rTgnG,r2q1rk1/pb2bppp/1p2pn2/2p1P3/3P4/2PQBN2/P4PPP/RB3RK1 b - - 0 13,f6d7 d3h7,400,97,86,369,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/5zZGW4mb/black#26
Wtfr7,rnbq1rk1/pppp1ppp/1b6/4P3/4Q3/3B1N2/PB4PP/RN3K1R b - - 2 11,d7d6 e4h7,502,109,94,875,kingsideAttack master mate mateIn1 oneMove opening,https://lichess.org/fJ7ZiSOq/black#22
5fYtj,r2q1rk1/pbnp1ppp/1pn1p3/4P1N1/1bBP4/2N5/PPQ2PPP/R1B2RK1 b - - 7 12,c6d4 c2h7,503,104,93,308,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/UMG4vbnD/black#24
k7s9e,r2q1rk1/1b2bppp/pnp2B2/3p4/2p5/4PN2/P1QN1PPP/1BR2RK1 b - - 0 15,e7f6 c2h7,536,102,92,129,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/YrqityzI/black#30
sFvmm,1k1r1b1r/ppp4p/3q1np1/8/3p2n1/1Q5B/PPP2PPP/RNB2RK1 w - - 2 16,b1d2 d6h2,541,106,100,83,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/pT2eqslP#31
82rsG,r2qk2r/pbppbppp/1p6/n2P4/4Q3/2PB1N2/P4PPP/R1B2RK1 b kq - 3 13,e8g8 e4h7,570,106,67,122,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/uoxsV0h9/black#26
n7lyR,r1b1k2r/ppb2ppp/2p2n2/2Ppq3/8/P1NBP3/1P3PPP/R1BQ1RK1 w kq - 0 12,d1c2 e5h2,424,116,87,744,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/zOJjZDcE#23
JicQX,rnbq1rk1/ppp1bppp/3pp1n1/7P/2PP4/2NBP1P1/PPQ2P2/R1B1K1NR b KQ - 0 9,g6h8 d3h7,503,90,100,122,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/zUppUpov/black#18
w94g2,r2q1rk1/pb2bppp/1pn1p3/2pnP3/4Q3/2NB1N1P/PPP2PP1/R1B2RK1 b - - 2 12,d5c3 e4h7,459,108,100,474,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/USH3NQUJ/black#24
a6TkF,rn2k2r/pp2bppp/1qp1p3/3nP1N1/3P4/2PQ4/PP4PP/RNB2RK1 b kq - 0 12,e8g8 d3h7,533,87,100,166,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/UFLNZWs4/black#24
C3UVG,r1b1k1nr/pppp1ppp/3bp3/4q3/2B1P3/P1N5/1PPP1PPP/R1BQ1RK1 w kq - 1 8,c3b5 e5h2,511,106,74,228,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/RNjp91il#15
9CvQO,rn1qnrk1/p2bbppp/1p2p3/3pP3/3P4/2NQ1N2/PPB2PPP/R1B1R1K1 b - - 1 12,d7c6 d3h7,455,104,100,257,kingsideAttack master mate mateIn1 oneMove opening,https://lichess.org/pPo7YGZR/black#24
y8sZ5,rbb1k2r/ppqpnpp1/2p4p/5P2/4P3/3BB3/PPP1Q1PP/RN3RK1 w kq - 1 13,g1h1 c7h2,519,93,64,101,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/XtGZluMo#25
kOcVW,r1bq1rk1/pp1n1ppp/2pbp3/8/3PQ3/2PB1N2/PP3PPP/R1B1K2R b KQ - 0 10,e6e5 e4h7,494,102,85,324,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/6xRCiSLh/black#20
Z7jmq,r2q1rk1/3bbppp/n3p3/ppp1P3/3P4/P2Q1N2/1PB2PPP/R1B2RK1 b - - 1 16,c5c4 d3h7,399,98,69,220,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/GU2j3Hue/black#32
BAMzP,r1b2rk1/p1b2ppp/3qpn2/3p4/3P4/PN2P3/1B2BPPP/2RQ1RK1 w - - 6 18,a3a4 d6h2,540,105,82,509,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/jVq5jrzg#35
MPQx7,r1b1k2r/ppq2ppp/2nbp3/8/2pPQ3/2P2N2/PP3PPP/RBB1K2R b KQkq - 0 11,e8g8 e4h7,537,90,100,150,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/HnFey397/black#22
Y4OSv,rn1q1rk1/pb3ppp/1p6/2bP2N1/2P1p3/8/P1Q1BPPP/R1B1K2R b KQ - 1 13,e4e3 c2h7,595,102,95,287,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/SUm7kjfh/black#26
nYtBG,r1b1kb1r/2qp1pp1/p1p1pn2/7B/4P3/8/PPP2PPP/RNBQ1RK1 w kq - 1 12,h5f3 c7h2,415,105,87,631,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/cXJWRZAW#23
vp2EG,r2qk2r/pp1nnppp/2pb4/8/3PQ3/P1NB3P/1P3PP1/R1B1K2R b KQkq - 0 12,e8g8 e4h7,565,98,62,70,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/FGE9bc75/black#24
AL7rl,r1bq1rk1/ppp1nppp/1b1p4/n2P4/2B1P3/2Q2N2/PB3PPP/RN3RK1 b - - 2 12,e7g6 c3g7,467,107,94,948,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/LVJczMxX/black#24
KnhBi,r3kb1r/pppb1pp1/3q1n2/7p/3P2n1/2NQ1N2/PPP1B1PP/R1B2RK1 w kq - 2 11,f3g5 d6h2,511,95,67,149,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/wX4vwJvt#21
ug0Y9,2rq1rk1/pbpn1ppB/1p3n1p/3p2N1/3P4/P3P3/1PQ2PPP/R1B1K2R b KQ - 1 13,f6h7 c2h7,598,102,96,243,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/p5V7ksOm/black#26
J51qJ,2kr1br1/ppp2p1p/2n1pp2/8/6q1/3P1N2/PPPBBPP1/R2Q1RK1 w - - 0 13,f3h2 g4g2,585,94,100,472,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/aJOmouKp#25
pyGmJ,2rq1rk1/4bppp/2n1b3/3pp3/1p6/2PQPP2/1PB1N1PP/1NKR3R b - - 1 18,b4c3 d3h7,518,108,91,1193,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/NDnrPMjN/black#36
llDpm,rnbq1rk1/pp2bppp/2pp1n2/3P2N1/2B5/2NQ4/PP3PPP/R1B1K2R b KQ - 0 10,f6d5 d3h7,599,86,100,327,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/FCBOQbO4/black#20
gPUaz,r2q1rk1/bppb1ppp/p1n1p3/8/3PQ3/2P5/PPB2PPP/RNB2RK1 b - - 2 12,c6e7 e4h7,540,99,97,490,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/FRt9nSQC/black#24
g78fv,r2qr2k/pb2bpp1/2p4p/1p1nB3/4p3/2P3QP/PP2BPP1/RN2R1K1 b - - 7 18,e7h4 g3g7,587,88,100,82,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ZZqiUnHp/black#36
Yjwz2,r2q1rk1/1npbbppp/1p6/8/3PQ3/8/P1B2PPP/RNB2RK1 b - - 0 17,b7d6 e4h7,586,99,84,414,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/xfU1GTjT/black#34
e5j4Y,r1bq1rk1/2b1nppp/p7/1ppPp3/4QP2/1PP5/P1B3PP/RNB1R1K1 b - - 2 17,c8b7 e4h7,493,89,86,206,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/A3FM6CFt/black#34
8cXUC,rn1q1rk1/p1pb1ppp/4p3/3pP3/Pp3P2/4P3/2Q1K3/RNB2B1R b - - 1 15,a7a5 c2h7,557,88,100,286,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/NrZ12o7G/black#30
bPc4J,r1b1k1nr/pppp1ppp/3b4/4q3/8/2PBP3/PP3PPP/RNBQK2R w KQkq - 1 8,e1g1 e5h2,421,99,88,948,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Da9f8yaE#15
UXUc9,rn1q1rk1/pppn1ppp/3bb3/8/1P1Q1P2/8/PBP1N1PP/RN2KB1R b KQ - 2 10,e6f5 d4g7,501,108,90,573,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/RLoG9qVD/black#20
Vqkr4,r1bq1rk1/pp2bppp/1np1pN2/8/3P1PP1/3Q4/PPP1N3/2KR1B1R b - - 2 13,e7f6 d3h7,507,95,100,226,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/TyJKIYmc/black#26
6YfvG,rnbq1rk1/pp2bppp/2pp4/3nP3/3PQ3/3B4/PPP2PPP/RNB1K1NR b KQ - 1 8,d6e5 e4h7,495,96,100,268,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/HTgkIBez/black#16
KJLsg,2rq1rk1/1b1pbppn/p3p2p/1p2P3/2nP4/P1N1B2P/1PQ2PPN/1BR2RK1 b - - 2 17,c4e3 c2h7,480,104,78,182,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/yYyCtiEd/black#34
oYnLK,r1b2rk1/1p3ppp/pq1Pp3/5nN1/1nB1QP2/8/PP4PP/R1B2R1K b - - 0 17,f5d6 e4h7,456,103,97,409,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/e20U2tHC/black#34
JHd54,r1b1k1nr/1p1p1ppp/p2b4/2pPq3/8/2P5/PPN1BPPP/R1BQK2R w KQkq - 2 11,e1g1 e5h2,578,108,86,772,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/m1rV877S#21
7giUR,rnbq1rk1/pppp1ppp/4p2B/3nP3/1b1P2Q1/2N5/PPP2PPP/R3KBNR b KQ - 4 6,d5c3 g4g7,518,103,73,202,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ai4jnW2e/black#12
bgStY,r1bq1rk1/1p1pbppp/1nn1p3/p3P3/1P1P1P2/P1NQ4/2B1N1PP/R1B2RK1 b - - 1 16,a5b4 d3h7,508,111,94,475,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/gx2gDbtl/black#32
CgHkQ,r3kb1r/pbp2ppp/5n2/1p1qp1N1/8/1P1P4/PP3PPP/RNBQ1RK1 w kq - 2 10,b1c3 d5g2,405,111,96,591,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/vClkxqB1#19
4MaNE,rn1q1rk1/ppp2ppp/3p4/4P2n/3PQpbb/2PB1N2/PP4PP/RNB2K1R b - - 4 10,b8c6 e4h7,428,111,97,825,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/XYh6SFbu/black#20
x78GM,r1b1k2r/pppp1ppp/3b1n2/4q3/1PB1P3/2P5/P4PPP/RNBQK2R w KQkq - 0 9,e1g1 e5h2,474,106,94,343,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/YCPa2sDA#17
5DGo0,r2q1rk1/ppp2ppp/1bn1b3/6N1/4Q3/3P4/PPP3PP/RNBK3R b - - 2 12,c6d4 e4h7,561,103,97,793,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/WC8KVQKM/black#24
hhD46,bb2r1k1/5ppp/n2q1n2/3p4/3N4/1P2P3/PB3PPP/2RQ1RK1 w - - 4 21,a2a3 d6h2,583,88,83,168,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/ZQvqzRc9#41
rF9Bm,r1q1r1k1/1ppb1pp1/p2b1n1p/3N4/3Q4/1P2P1P1/PB3P1P/2R1R1KB b - - 2 19,f6d5 d4g7,588,104,87,1215,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/QAKu52Ui/black#38
dyPjy,rnbq1rk1/ppppbppp/4p2B/3nP3/3P2Q1/2N5/PPP2PPP/R3KBNR b KQ - 4 6,f7f5 g4g7,411,97,82,229,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/hxqlny6K/black#12
X8HgJ,r1b1k2r/p1q2pp1/2p4p/2b5/2B1p1n1/8/PPPP1PPP/RNBQ1RK1 w kq - 1 14,d2d4 c7h2,567,99,86,335,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/Y2ATkkZ8#27
FSbI0,r1b2rk1/ppp1qpp1/1b1p1n1p/3P4/2B1P1N1/2Q5/PB3PPP/RN3RK1 b - - 1 14,f6g4 c3g7,418,108,72,208,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/GmpxaNxt/black#28
BtTdw,rn1q1rk1/pppn2pp/3bp3/6Nb/8/2NQ3P/PPP2PP1/R1B1KB1R b KQ - 1 11,d7c5 d3h7,544,103,96,310,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/KzwbsVZm/black#22
obv8s,r2q1rk1/2pb1ppp/p1nbp3/1p6/3PQP2/2PB4/PP3NPP/R1B2RK1 b - - 0 13,c6e7 e4h7,579,101,94,244,kingsideAttack master mate mateIn1 oneMove opening,https://lichess.org/8N6Od3OY/black#26
sPOTn,r1b1k1nr/pp1p1ppp/3b4/4q3/8/8/PPPNBPPP/R1BQK2R w KQkq - 2 9,e1g1 e5h2,546,99,86,542,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/DLto29fZ#17
lTC0o,rn3rk1/pp1bqppp/3bpn2/2pp4/5P2/1P2PNQ1/PBPPB1PP/RN3RK1 b - - 7 9,f6e4 g3g7,489,112,83,500,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/8dpMMl4x/black#18
mnBNm,rn1q1rk1/pp2bppp/4b3/3nN1B1/3pQ3/3B4/PP3PPP/RN2R1K1 b - - 1 14,e7g5 e4h7,419,113,88,813,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/kQV2dNqm/black#28
vwJbP,r1b2rk1/ppb3pp/3qpn2/2pp2B1/3P4/2P5/PPB3PP/RN1Q1R1K w - - 2 15,g5f6 d6h2,588,83,100,86,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/tNXXEUNn#29
PxCEJ,rbb1k2r/5ppp/p2qpn2/3p2B1/8/PBN5/1PP2PPP/R2Q1RK1 w kq - 2 13,g5f6 d6h2,558,101,97,298,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/fBWtC1e2#25
P1zLt,rn3rk1/pbpp2pp/1p2pnq1/5p2/2PP4/1PB1PN2/P3BPPP/R2Q1RK1 w - - 1 11,f3e5 g6g2,460,98,100,423,kingsideAttack mate mateIn1 oneMove opening,https://lichess.org/PhkFnI3P#21`,
  },
  {
    id: 'long-mate', color: '#E0403A', title: 'Длинные маты', short: 'Длинные маты',
    // task_longmate600.csv — long mates (mostly in 3), rating up to 600
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
ZTvmJ,r4rk1/5Rpp/p3p3/3pP3/3q4/5Q1P/6P1/5R1K b - - 0 23,f8f7 f3f7 g8h8 f7f8 a8f8 f1f8,598,101,94,579,backRankMate endgame long mate mateIn3,https://lichess.org/BUKBFdo7/black#46
Wo2tM,4r2k/pp3pbp/6p1/8/4NP2/7P/PP1Q2PK/5q2 b - - 1 26,e8e4 d2d8 e4e8 d8e8 g7f8 e8f8,400,97,83,155,endgame long mate mateIn3,https://lichess.org/F2iFZynn/black#52
Swoxp,3r2k1/Rp3ppp/8/4P1P1/5PKP/p1rn4/8/8 b - - 3 37,d8d7 a7a8 c3c8 a8c8 d7d8 c8d8,482,91,80,357,backRankMate endgame long mate mateIn3,https://lichess.org/f049ueAe/black#74
vMYmS,1R6/4npkp/P3p1p1/2rpP3/Q7/5N2/5PPP/6K1 w - - 1 29,a6a7 c5c1 a4d1 c1d1 f3e1 d1e1,448,110,83,191,backRankMate endgame long mate mateIn3,https://lichess.org/XoQF3BP1#57
LX2ca,5rk1/p5pp/5q2/8/3PQ3/2P5/PP3rPP/R4RK1 w - - 0 21,f1f2 f6f2 g1h1 f2f1 a1f1 f8f1,583,90,83,101,backRankMate endgame long mate mateIn3,https://lichess.org/Q0FH7ScG#41
C8iIB,6k1/5pp1/pR6/6N1/3p4/P6P/2r2PK1/4r3 b - - 2 30,d4d3 b6b8 c2c8 b8c8 e1e8 c8e8,531,100,83,441,endgame long mate mateIn3,https://lichess.org/f9NK09Uj/black#60
3vP2j,5rk1/5p1p/2Q1p1p1/2p1P3/2R5/1p2R3/r4PPP/6K1 w - - 0 28,e3b3 a2a1 b3b1 a1b1 c4c1 b1c1,463,114,93,1253,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/KtRTHghz#55
l2Gna,6k1/p4ppp/Nrp3b1/2N3q1/3Rp3/2P5/P5PP/2Q4K w - - 1 26,c1g5 b6b1 g5c1 b1c1 d4d1 c1d1,525,105,100,82,backRankMate endgame long mate mateIn3,https://lichess.org/Zt2tRJj1#51
tLkTf,7k/pp2r2p/5P2/3R4/8/8/PP2r1P1/5K2 b - - 2 36,e7f7 d5d8 e2e8 d8e8 f7f8 e8f8,556,90,80,406,endgame long mate mateIn3 rookEndgame,https://lichess.org/T6ymDGFv/black#72
6NLWH,2r5/kp6/p6R/3bp2B/8/1P4P1/P4P1P/4R1K1 w - - 0 31,e1e5 c8c1 h5d1 c1d1 e5e1 d1e1,578,105,83,413,endgame long mate mateIn3 pillsburysMate,https://lichess.org/gIVo1V2E#61
06u0X,2r3k1/1R6/3r1p2/8/1p6/5N2/PP3PPP/3R2K1 w - - 0 30,d1d6 c8c1 d6d1 c1d1 f3e1 d1e1,435,117,93,409,backRankMate endgame long mate mateIn3,https://lichess.org/92WOutyS#59
0AKET,r4rk1/p4Rpp/1p2p3/4P3/4bQ2/3q4/P5PP/5R1K b - - 0 20,f8f7 f4f7 g8h8 f7f8 a8f8 f1f8,591,103,93,473,backRankMate endgame long mate mateIn3,https://lichess.org/0I6F1IY7/black#40
6y4xm,3r2k1/1p4pp/p1p3n1/5p2/N1P1p3/1q1r4/2QNRPPP/3R2K1 w - - 0 32,d2b3 d3d1 c2d1 d8d1 e2e1 d1e1,436,101,100,231,backRankMate long mate mateIn3 middlegame,https://lichess.org/7UyYQGuN#63
etUhp,3r1rk1/1p4pp/p7/2q1pR2/P1B1P2b/1P3Q2/2P2R1K/8 b - - 1 33,g8h8 f5f8 d8f8 f3f8 c5f8 f2f8,543,103,93,973,backRankMate long mate mateIn3 middlegame,https://lichess.org/TrIdH4xq/black#66
7ziSZ,6k1/1R4pp/4p3/p2r1pN1/P1rp4/2b3P1/2P2PP1/5K2 b - - 6 37,h7h5 b7b8 c4c8 b8c8 d5d8 c8d8,414,117,93,542,endgame long mate mateIn3,https://lichess.org/FMiiL5jC/black#74
EjiTA,1rb1k2r/2q2pp1/4p1p1/p2pP1N1/P7/5Q2/5PPP/2R3K1 w k - 0 24,c1c7 b8b1 c7c1 b1c1 f3d1 c1d1,546,85,100,94,endgame long mate mateIn3,https://lichess.org/Kt2A4Aqx#47
AFPWN,8/3R4/6p1/8/4nR1P/6Pk/2r2P2/6K1 w - - 3 36,f4e4 c2c1 d7d1 c1d1 e4e1 d1e1,473,101,100,303,endgame long mate mateIn3 rookEndgame,https://lichess.org/8CJ4jCuL#71
kU57n,5r1k/6pp/8/5R2/8/1r6/5PPP/R5K1 b - - 0 30,f8f5 a1a8 b3b8 a8b8 f5f8 b8f8,598,92,93,113,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/2odrX6xv/black#60
Yoei5,5r2/p2q2pp/k1p5/B7/8/6P1/PPP5/1K1R4 w - - 6 37,d1d7 f8f1 a5e1 f1e1 d7d1 e1d1,561,96,94,199,backRankMate endgame long mate mateIn3,https://lichess.org/GoalL9QT#73
MCxid,6k1/1pr2ppp/8/R7/4r3/6P1/7P/6K1 b - - 0 31,c7c2 a5a8 c2c8 a8c8 e4e8 c8e8,460,111,82,1336,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/albu1eeB/black#62
ZVn76,k3R2r/1p3pp1/qB1r1n2/7p/8/4Q2P/P4PP1/4R1K1 b - - 1 29,h8e8 e3e8 f6e8 e1e8 d6d8 e8d8,587,81,100,140,long mate mateIn3 middlegame pillsburysMate,https://lichess.org/RRIHCroM/black#58
MI8da,8/6pk/PR6/2R5/8/r5p1/6PK/8 w - - 0 46,h2g1 a3a1 b6b1 a1b1 c5c1 b1c1,565,100,73,126,endgame long mate mateIn3 rookEndgame,https://lichess.org/kv5OYZuC#91
97TUt,5r2/p2kb3/1p6/4p1QB/4b3/1NP1p3/PP5R/K7 w - - 0 43,g5e5 f8f1 h5d1 f1d1 b3c1 d1c1,536,107,95,295,backRankMate long mate mateIn3 middlegame,https://lichess.org/jASn6o4Z#85
K6J8j,2B5/kp4Q1/1qp3p1/p3p3/4P1P1/1PbP4/PNP4P/1K3R2 w - - 0 30,f1f7 b6g1 f7f1 g1f1 b2d1 f1d1,523,92,84,292,endgame long mate mateIn3 queensideAttack,https://lichess.org/IyMGNIFY#59
KHJHm,2q3k1/1b3p1p/p2P2p1/1p2Q3/8/1B3N2/PP3PPP/6K1 w - - 1 29,e5f6 c8c1 b3d1 c1d1 f3e1 d1e1,431,104,100,256,endgame long mate mateIn3,https://lichess.org/khy0wVgC#57
W31AB,3r3k/p5pp/8/5Rq1/2B5/1P6/4R1PP/7K w - - 3 32,f5g5 d8d1 e2e1 d1e1 c4f1 e1f1,508,100,100,101,backRankMate endgame long mate mateIn3,https://lichess.org/HEi86lGa#63
QLTKn,3rr1k1/1b3ppp/p4q2/1pp1R3/8/2PQ1N2/PP3PPP/3R2K1 b - - 0 21,e8e5 d3d8 f6d8 d1d8 e5e8 d8e8,582,89,80,168,backRankMate long mate mateIn3 middlegame,https://lichess.org/DoIcnz2q/black#42
qyXcf,3r1k2/1b1n1p1R/3B2r1/1B4p1/P1p1P3/4KP2/1qP3P1/7R b - - 0 34,f8e8 h7h8 b2h8 h1h8 g6g8 h8g8,489,83,100,372,long mate mateIn3 middlegame pillsburysMate,https://lichess.org/0gsLNFst/black#68
QlFBH,5k2/2R5/p2p1q1p/1p3B2/4P3/P7/6PP/4Q2K w - - 6 40,e1g3 f6a1 c7c1 a1c1 g3e1 c1e1,597,96,85,106,backRankMate endgame long mate mateIn3,https://lichess.org/xG677EKW#79
xJaO6,4r1k1/5ppp/r1p2q2/p2p4/3P4/PRn1BN2/2P3PP/5K1R b - - 1 20,e8e3 b3b8 f6d8 b8d8 e3e8 d8e8,502,112,93,519,backRankMate long mate mateIn3 middlegame,https://lichess.org/Efs5EtuZ/black#40
iVxX6,1r4k1/p4bp1/2pNp2p/8/5n2/P7/3BRPPP/6K1 w - - 8 29,d2f4 b8b1 f4c1 b1c1 e2e1 c1e1,496,113,89,303,backRankMate endgame long mate mateIn3,https://lichess.org/CCwGDxXz#57
SCneO,4r1k1/5ppp/3p4/2pP4/1nP1B2b/1P2p2P/4K1P1/R7 b - - 0 40,e8e4 a1a8 h4d8 a8d8 e4e8 d8e8,577,103,98,637,backRankMate endgame long mate mateIn3,https://lichess.org/dFgh0VPy/black#80
mymyA,1B4k1/2R3p1/3rpp1p/p7/8/8/r4PPP/3R2K1 w - - 0 31,d1d6 a2a1 c7c1 a1c1 d6d1 c1d1,477,105,92,140,backRankMate endgame long mate mateIn3,https://lichess.org/WEjk1tnu#61
lTG9I,4r3/5pkp/1p3bp1/pNr5/8/5B2/R4PPP/4R1K1 w - - 0 27,e1e8 c5c1 f3d1 c1d1 e8e1 d1e1,484,100,98,1344,backRankMate endgame long mate mateIn3,https://lichess.org/AbLxzCU5#53
3c74q,2r3k1/1p3ppp/3p1n2/4p3/1p1qP3/1P1P3P/2Q2PPK/R7 b - - 7 25,c8c2 a1a8 c2c8 a8c8 f6e8 c8e8,485,102,83,214,backRankMate endgame long mate mateIn3,https://lichess.org/QbpHE5tC/black#50
CaHH5,6k1/5p1p/1K2b1p1/R3B3/8/4r3/p6P/8 b - - 3 50,h7h6 a5a8 e6c8 a8c8 g8h7 c8h8,559,91,67,137,endgame long mate mateIn3 operaMate,https://lichess.org/aQlRAVEJ/black#100
D0UC2,1r4k1/p2P1pp1/7p/4p3/8/P1r1PB2/5PPP/2R3K1 w - - 0 28,c1c3 b8b1 c3c1 b1c1 f3d1 c1d1,479,115,84,435,backRankMate endgame long mate mateIn3,https://lichess.org/3SpF7IjP#55
fRlzg,4r2k/3nN1pp/8/R7/4p3/4P3/5PKP/3r4 b - - 0 32,e8e7 a5a8 d7b8 a8b8 d1d8 b8d8 e7e8 d8e8,540,108,83,285,backRankMate endgame mate mateIn4 veryLong,https://lichess.org/mlIvqeMU/black#64
pCf60,6k1/1p1b1ppp/1q2p3/3pPn2/1n1P4/RP3N1P/1QrNBPP1/6K1 b - - 0 22,c2b2 a3a8 d7c8 a8c8 b6d8 c8d8,549,103,96,330,backRankMate long mate mateIn3 middlegame,https://lichess.org/Tu8hysPj/black#44
nvXM0,3r3k/pp2r1p1/5pPp/8/P7/1P6/8/2R3K1 b - - 0 40,d8d3 c1c8 d3d8 c8d8 e7e8 d8e8,513,114,91,317,endgame long mate mateIn3 rookEndgame,https://lichess.org/VB1JYNNJ/black#80
FcXQC,4R3/pp1n2p1/1kpQ4/6q1/3P4/2N3p1/PPP2PP1/6K1 w - - 0 23,d6d7 g5c1 c3d1 c1d1 e8e1 d1e1,535,87,81,197,endgame long mate mateIn3,https://lichess.org/D7IPf7qW#45
EG8VH,r5k1/5ppp/2p1bq2/2Np4/8/4b3/Q3B1PP/1R5K b - - 1 25,a8a2 b1b8 e6c8 b8c8 f6d8 c8d8,438,106,87,235,backRankMate long mate mateIn3 middlegame,https://lichess.org/IWXIK8rr/black#50
zJguA,6k1/Rp3p1p/2b1p1p1/4B3/5P2/4q3/5QPK/3r4 b - - 4 34,e3f2 a7a8 d1d8 a8d8 c6e8 d8e8,479,107,91,360,endgame long mate mateIn3 pillsburysMate,https://lichess.org/IL7HzoSh/black#68
cWvUc,3r1k2/7p/2R3p1/2q2p2/2B5/1PQ4R/P5PP/7K w - - 14 40,c6c5 d8d1 c3e1 d1e1 c4f1 e1f1,401,114,89,857,backRankMate endgame long mate mateIn3,https://lichess.org/qPyxGsRh#79
tLIJb,k4b1r/pp3pp1/3r2b1/3q3p/P2P3P/5N2/1PP1Q3/5RK1 b - - 0 24,d5f5 e2e8 d6d8 e8d8 f5c8 d8c8,410,91,77,235,long mate mateIn3 middlegame queensideAttack,https://lichess.org/HTU6GW3d/black#48
42jMH,3r2k1/N2Q1ppp/5pb1/6q1/1R1P4/2r3P1/P4P1P/5RK1 b - - 0 23,d8d7 b4b8 c3c8 b8c8 d7d8 c8d8,505,95,52,651,backRankMate long mate mateIn3 middlegame,https://lichess.org/iDtLFveb/black#46
KH3dG,r3r1k1/2p1q2p/p4pp1/1p6/1P6/P1NP2Q1/2P1bPPP/R4K1R w - - 1 24,c3e2 e7e2 f1g1 e2e1 a1e1 e8e1,546,94,80,255,backRankMate long mate mateIn3 middlegame,https://lichess.org/vnuObOfV#47
g947t,1rR5/1P1k1ppp/4p1n1/3pPq2/3P4/Q4NB1/5PPP/6K1 w - - 3 32,c8b8 f5b1 a3c1 b1c1 f3e1 c1e1,474,96,90,165,endgame long mate mateIn3,https://lichess.org/jNJ7B5Fd#63
veVmB,6k1/pp2r1pp/4P3/8/P1R5/2p2PK1/3r3P/8 b - - 2 40,c3c2 c4c8 d2d8 c8d8 e7e8 d8e8,558,90,100,204,endgame long mate mateIn3 rookEndgame,https://lichess.org/Ru0aIeN2/black#80
rZgA9,2r4k/p2r2pp/8/4p3/8/4K3/PR4PP/2R5 b - - 1 28,c8c1 b2b8 c1c8 b8c8 d7d8 c8d8,399,97,100,396,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/pYSsm3vv/black#56
FP3c2,5r1k/3r2pp/2n3q1/p7/2PpR3/PP3QB1/5P1P/4R1K1 b - - 0 30,f8f3 e4e8 g6e8 e1e8 f3f8 e8f8,457,106,89,1240,backRankMate long mate mateIn3 middlegame,https://lichess.org/6I7x5mJD/black#60
LxnzS,1k6/ppp5/3b4/8/3Pr3/2P4p/P7/1KB3R1 b - - 1 25,h3h2 g1g8 d6f8 g8f8 e4e8 f8e8,483,106,95,331,backRankMate endgame long mate mateIn3,https://lichess.org/6Qepvusd/black#50
dyLrH,2r3k1/5ppp/4p3/3r4/pRRP4/7P/P4PP1/6K1 b - - 0 28,c8c4 b4b8 c4c8 b8c8 d5d8 c8d8,587,89,86,368,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/DlXiSe3K/black#56
s44cK,4r1k1/5ppb/2np3p/1p1p4/1P1P2P1/2P2PKP/R7/5B2 b - - 2 28,e8e3 a2a8 c6b8 a8b8 e3e8 b8e8,456,96,98,637,backRankMate endgame long mate mateIn3,https://lichess.org/ROwP7C3E/black#56
NY4xt,5k2/pp6/3Np1pp/3p1p2/1P1p4/P4Q2/r4PPP/4R1K1 w - - 0 31,e1e6 a2a1 f3d1 a1d1 e6e1 d1e1,534,90,100,121,backRankMate endgame long mate mateIn3,https://lichess.org/5T3mXP1I#61
pYl8G,3r2k1/6p1/R3p1Pp/4P3/5K2/2P1P2P/pr6/8 b - - 1 37,d8d1 a6a8 b2b8 a8b8 d1d8 b8d8,465,108,87,830,endgame long mate mateIn3 rookEndgame,https://lichess.org/9u8bJN50/black#74
9xT6X,5r1k/p5pp/8/3p3P/1P6/3Pr3/5N2/1KR5 b - - 2 38,f8f2 c1c8 e3e8 c8e8 f2f8 e8f8,553,100,89,446,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/s0BZdmoP/black#76
oz5Qy,2r2r1k/pp6/3R2pB/4pn2/8/8/PP2RPPP/6K1 w - - 1 25,h6f8 c8c1 d6d1 c1d1 e2e1 d1e1,529,98,98,2396,backRankMate endgame long mate mateIn3,https://lichess.org/7DEbnwkl#49
bep6s,4r3/4r2p/1Q6/5pNk/7P/8/PPPR2P1/1K6 w - - 15 40,b6f2 e7e1 f2e1 e8e1 d2d1 e1d1,545,86,69,88,backRankMate endgame long mate mateIn3,https://lichess.org/sr2WLTKZ#79
vnAR8,6R1/8/4R3/8/Q5P1/7k/1r3P2/6K1 w - - 3 41,g4g5 b2b1 a4d1 b1d1 e6e1 d1e1,524,101,99,805,endgame long mate mateIn3 queenRookEndgame,https://lichess.org/gHFHzRJd#81
ZV2x3,r5k1/5ppp/2N5/3pp3/br6/R3P2P/5PP1/R5K1 b - - 1 27,a4c6 a3a8 c6a8 a1a8 b4b8 a8b8,488,94,100,291,backRankMate endgame long mate mateIn3,https://lichess.org/334fmjSl/black#54
AYGK6,4Rnk1/1p3pq1/p5p1/2p5/7Q/PP1r3R/5PPP/6K1 w - - 1 41,h3d3 g7a1 d3d1 a1d1 e8e1 d1e1,469,100,80,324,endgame long mate mateIn3,https://lichess.org/daKoZjCm#81
HpVr5,7k/1p4pp/5q2/3P1b2/1P2P3/6P1/5PB1/rNQ3K1 b - - 0 32,f5g6 c1c8 g6e8 c8e8 f6f8 e8f8,537,92,63,74,endgame long mate mateIn3,https://lichess.org/NuM9QWTP/black#64
Gaw1u,r5k1/4ppb1/3p2pp/1rpP4/Pn2P3/1P2B3/3RRPPP/6K1 w - - 0 26,a4b5 a8a1 d2d1 a1d1 e2e1 d1e1,588,81,100,253,backRankMate endgame long mate mateIn3,https://lichess.org/iW3SyDli#51
iNb0V,6k1/4rppp/8/1rp1P3/3p1P2/1Pn3PP/8/R1R3K1 b - - 3 30,b5b3 a1a8 b3b8 a8b8 e7e8 b8e8,506,97,73,228,backRankMate endgame long mate mateIn3,https://lichess.org/0AstVxna/black#60
9ipUQ,6k1/p1r2ppp/2P1p1q1/8/2P1P3/5P2/6PP/RR4K1 b - - 1 25,g6f6 b1b8 c7c8 b8c8 f6d8 c8d8,421,108,95,537,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/eSppXKsY/black#50
NlGFL,8/2R2pk1/p5pp/8/1Pp1B3/8/r4PPP/6K1 w - - 0 27,c7c4 a2a1 e4b1 a1b1 c4c1 b1c1,532,86,100,132,backRankMate endgame long mate mateIn3,https://lichess.org/IKGuhAK3#53
0xcR9,3r2k1/p4ppp/1p2p3/2p5/8/1Pqr4/P1QPRPPP/3R2K1 w - - 0 23,d2c3 d3d1 c2d1 d8d1 e2e1 d1e1,517,98,97,631,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/j7H8PTiB#45
Syqty,6k1/5pp1/7p/r7/3P4/3nR3/1PR2PPP/6K1 w - - 0 35,e3d3 a5a1 c2c1 a1c1 d3d1 c1d1,502,101,97,853,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/0XjXMUtj#69
rRWxw,8/pp1RP2p/5kp1/8/8/8/PPrbRPPP/6K1 w - - 0 27,d7d2 c2c1 d2d1 c1d1 e2e1 d1e1,577,83,80,283,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/cwoQEEhU#53
EiKkc,r7/3p2k1/2bQ3p/8/8/1P4P1/1PP1qP1P/4R1K1 w - - 0 31,e1e2 a8a1 d6d1 a1d1 e2e1 d1e1,510,100,83,615,endgame long mate mateIn3 pillsburysMate,https://lichess.org/xNLxB4ji#61
HWQVm,5r1k/1p4pp/2p3q1/p3Pp2/Pn2p2b/1P2P1P1/1B1QBPK1/3R4 b - - 1 27,f8d8 d2d8 h4d8 d1d8 g6e8 d8e8,413,93,100,179,backRankMate long mate mateIn3 middlegame,https://lichess.org/rBnMvK8m/black#54
VVs4b,1R6/p1Q3bk/P4p2/3Pp1pp/q7/5N2/2P2PPP/6K1 w - - 5 35,c7a7 a4a1 b8b1 a1b1 f3e1 b1e1,481,96,85,416,endgame long mate mateIn3,https://lichess.org/owikKucB#69
SzL1O,2r5/5Q1p/4Bnpk/3P4/8/4R1bP/PP4P1/7K w - - 7 38,f7f6 c8c1 e3e1 c1e1 f6f1 e1f1,587,86,100,187,endgame long mate mateIn3 pillsburysMate,https://lichess.org/0B6cqGAn#75
EkETm,2r2rk1/1Q3pp1/7p/pp1Pq3/8/1B6/PP3PPP/4R1K1 w - - 0 24,e1e5 c8c1 b3d1 c1d1 e5e1 d1e1,523,100,83,686,backRankMate endgame long mate mateIn3,https://lichess.org/T6ObXPBT#47
15ctQ,5r1k/bb4pp/p2qpp2/1p6/1P1pPP2/P2P1N2/1BQ3PP/2R4K b - - 3 23,f8c8 c2c8 b7c8 c1c8 d6d8 c8d8,495,92,83,395,backRankMate long mate mateIn3 middlegame,https://lichess.org/fQLCFZvL/black#46
joV3a,1r1Q3k/p3r1pp/5q2/8/4p3/2P5/5PPP/3R2K1 b - - 1 34,b8d8 d1d8 e7e8 d8e8 f6f8 e8f8,563,99,52,56,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/EHBmfv4Y/black#68
X0ahN,6k1/6p1/4QrPq/2P4P/R4p2/P2r1P2/8/2K5 b - - 0 34,f6e6 a4a8 d3d8 a8d8 e6e8 d8e8,592,108,79,300,endgame long mate mateIn3 queenRookEndgame,https://lichess.org/fIDRxdVU/black#68
cKIlc,2r3k1/R4ppp/p2r4/1p6/8/1K2P3/PP3PPP/2R5 b - - 7 30,c8c1 a7a8 c1c8 a8c8 d6d8 c8d8,457,101,83,238,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/Btz9Anuh/black#60
WDctQ,7k/2R3pp/p1p3b1/2N5/8/1P5P/P1q2PPK/8 b - - 1 34,c2c5 c7c8 g6e8 c8e8 c5f8 e8f8,446,104,73,161,backRankMate endgame long mate mateIn3,https://lichess.org/oV8o5gL0/black#68
ru7aG,2r3k1/p6p/1p2q1p1/8/1P3Q2/P1r5/5PPP/4R1K1 w - - 0 38,e1e6 c3c1 f4c1 c8c1 e6e1 c1e1,495,110,94,449,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/e98tHD6V#75
K2iXu,8/4b1k1/3p3n/1p6/2p5/2P4Q/rPB2qPP/5R1K w - - 2 31,f1f2 a2a1 c2b1 a1b1 f2f1 b1f1,555,106,75,658,backRankMate endgame long mate mateIn3,https://lichess.org/8qfLtTu4#61
pnH1D,3R4/R4pkp/1pr3p1/4p3/4P3/1P3N2/P4PPP/6K1 w - - 1 34,d8d7 c6c1 d7d1 c1d1 f3e1 d1e1,561,102,71,563,backRankMate endgame long mate mateIn3,https://lichess.org/cdyjrzQP#67
yl5va,1r2n1k1/p2q1pp1/2P1p2p/Q1p1P3/2P5/5B2/P4PPP/6K1 w - - 0 25,c6d7 b8b1 f3d1 b1d1 a5e1 d1e1,564,114,75,423,backRankMate endgame long mate mateIn3,https://lichess.org/KJsVe9dR#49
D7K1H,8/7p/2Bk1b2/2R5/3pp3/1P1R4/r4PPP/6K1 w - - 4 40,c6e4 a2a1 c5c1 a1c1 d3d1 c1d1,593,100,84,628,backRankMate endgame long mate mateIn3,https://lichess.org/cRDdDZzT#79
z7Run,6k1/4bp1p/8/8/3B4/1b3P1P/4r1P1/R5K1 b - - 1 34,e7h4 a1a8 h4d8 a8d8 e2e8 d8e8,573,104,96,489,endgame long mate mateIn3 pillsburysMate,https://lichess.org/ZHpONkOn/black#68
slTRe,8/5pk1/5p2/1PpQ1P2/r2b1R2/6Pp/4q2P/4R2K w - - 4 38,e1e2 a4a1 e2e1 a1e1 f4f1 e1f1,569,107,63,39,endgame long master masterVsMaster mate mateIn3,https://lichess.org/UfTuzchx#75
8iB5K,6k1/p4ppp/Qp2q3/2ppB1b1/8/1P4PP/P1P2P1K/8 b - - 5 24,e6e5 a6c8 g5d8 c8d8 e5e8 d8e8,569,99,81,426,endgame long mate mateIn3,https://lichess.org/H9FLXV3z/black#48
x58qp,3rkb1r/pQpq2pn/4p1np/8/8/2N2N2/PP3PPP/R1B2RK1 w k - 1 16,f1d1 d7d1 c3d1 d8d1 f3e1 d1e1,578,96,88,61,backRankMate long mate mateIn3 opening,https://lichess.org/5dSi91GG#31
jxzEp,r2r2k1/pp3pp1/3qb2p/8/4p3/1BP3Q1/PP2nPPP/3RR1K1 w - - 8 25,e1e2 d6d1 b3d1 d8d1 e2e1 d1e1,496,109,92,949,backRankMate long mate mateIn3 middlegame,https://lichess.org/hdNhipd2#49
3Oo5K,6k1/5ppp/4bb2/1R6/8/PP6/K1P5/3r4 b - - 0 34,d1c1 b5b8 e6c8 b8c8 f6d8 c8d8,430,100,93,225,backRankMate endgame long mate mateIn3,https://lichess.org/5xtqFu3v/black#68
G6Y3V,2r3k1/6p1/5pB1/2B5/p2R4/P4P1p/1P3P1P/6K1 w - - 0 34,c5b4 c8c1 d4d1 c1d1 b4e1 d1e1,400,90,78,288,endgame long mate mateIn3,https://lichess.org/1jsP5i9d#67
A24mD,6k1/ppp2ppp/2p5/3b2b1/6Q1/5PP1/PP2r2P/5K2 b - - 4 24,e2e5 g4c8 g5d8 c8d8 e5e8 d8e8,553,102,81,283,endgame long mate mateIn3,https://lichess.org/m9oP7QQ1/black#48
wqHI1,5r1k/pp4pp/2p5/5Q2/6n1/1N2r3/PPP3pP/3R2K1 b - - 0 25,f8f5 d1d8 e3e8 d8e8 f5f8 e8f8,409,94,90,149,backRankMate endgame long mate mateIn3,https://lichess.org/Bb4PTbT5/black#50
1KJmS,5r1k/6pp/1p4b1/p1p5/5Q2/1P6/P5PP/3R3K b - - 0 31,f8f4 d1d8 g6e8 d8e8 f4f8 e8f8,472,113,93,1303,backRankMate endgame long mate mateIn3,https://lichess.org/jtktwBNc/black#62
TMB1v,1k6/2p1r3/1p5p/3Np3/B1r5/P7/4RPPP/6K1 w - - 0 35,d5e7 c4c1 a4d1 c1d1 e2e1 d1e1,590,96,85,131,backRankMate endgame long mate mateIn3,https://lichess.org/ISumKlgd#69
wO5Xl,6kQ/5r1p/p3r1pP/8/8/6K1/P1q2PP1/3R4 b - - 1 30,g8h8 d1d8 e6e8 d8e8 f7f8 e8f8,402,119,95,892,endgame long mate mateIn3 queenRookEndgame,https://lichess.org/OQMVOge0/black#60
p1ZcY,8/1rP2p2/4p3/r3Pp2/2R2Pk1/3p2Pp/7P/1R5K w - - 0 40,b1b7 a5a1 b7b1 a1b1 c4c1 b1c1,583,107,80,169,endgame long mate mateIn3 rookEndgame,https://lichess.org/ePGX9v1e#79
88IVy,5k2/3R3p/5qp1/8/2p1B3/5pPQ/P4P1P/5K2 w - - 17 45,h3h7 f6a1 e4b1 a1b1 d7d1 b1d1,560,104,84,825,endgame long mate mateIn3,https://lichess.org/4Et3YZDZ#89
kSVrj,1r4k1/6p1/2p1qpQp/p2p4/8/2P4R/Pr4PP/4R2K w - - 0 28,e1e6 b2b1 g6b1 b8b1 e6e1 b1e1,586,99,75,549,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/2XcD0Pm0#55
BJtRp,5r2/1pp4p/p2kp3/3NR3/3P4/8/PPP4r/1K3R2 w - - 1 31,f1f8 h2h1 f8f1 h1f1 e5e1 f1e1,521,106,88,1026,backRankMate endgame long mate mateIn3,https://lichess.org/3AMFFpsU#61
TaUU7,6k1/ppp3pp/4P1q1/6B1/2P4R/P4r2/1P2QPPP/6K1 w - - 0 26,e2f3 g6b1 g5c1 b1c1 f3d1 c1d1,567,99,73,109,backRankMate endgame long mate mateIn3,https://lichess.org/EjyLS5Cu#51
IuQYu,8/p1Q2ppk/1p5p/3p1q2/3P1b2/1NP2N1P/PP3PP1/6K1 w - - 1 26,c7a7 f5b1 b3c1 b1c1 f3e1 c1e1,516,93,76,203,endgame long mate mateIn3,https://lichess.org/wJF137kY#51
e6OV0,3R4/4P1pk/p4np1/7p/8/8/PrP3PP/5R1K w - - 2 29,f1f6 b2b1 d8d1 b1d1 f6f1 d1f1,546,96,100,351,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/8rOjboJz#57
IHF9h,8/8/6p1/2r1p3/R3b3/P5kP/4B1P1/7K w - - 1 41,a4e4 c5c1 e2d1 c1d1 e4e1 d1e1,431,108,98,667,endgame long mate mateIn3,https://lichess.org/6Z759IEs#81
MB0r8,3r2k1/p1p5/4P3/6P1/4Q3/2P5/PP3bPP/5R1K w - - 7 36,f1f2 d8d1 e4e1 d1e1 f2f1 e1f1,580,93,71,312,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/kHXbg912#71
YiUVF,7k/1p4pp/2p2r2/p3B3/4p2P/1P4P1/Pq4P1/3R1N1K b - - 2 29,b2e5 d1d8 e5e8 d8e8 f6f8 e8f8,517,104,82,256,backRankMate endgame long mate mateIn3,https://lichess.org/xZIKrGqk/black#58
wHd7W,8/6k1/p5p1/8/1N6/1P2PB2/1r3PPP/2R3K1 w - - 3 42,c1c3 b2b1 c3c1 b1c1 f3d1 c1d1,399,112,77,780,backRankMate endgame long mate mateIn3,https://lichess.org/KOUwu5vh#83
MANFO,1k3r2/ppp5/3p4/1q1P1Q2/8/8/PP3PRP/R5K1 b - - 0 29,f8f5 g2g8 f5f8 g8f8 b5e8 f8e8,498,114,81,258,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/m54Dz5K5/black#58
i4jlg,6k1/p3rpnp/1p1p4/6P1/4p3/1q2P3/1B2BP2/1KR5 b - - 3 34,e7d7 c1c8 d7d8 c8d8 g7e8 d8e8,577,110,80,175,endgame long mate mateIn3 pillsburysMate,https://lichess.org/Sx8MlATN/black#68
Psd2j,7k/ppp2R2/4B1pp/3pR3/PP6/2r5/6PP/7K w - - 4 39,e6d5 c3c1 e5e1 c1e1 f7f1 e1f1,436,107,87,531,backRankMate endgame long mate mateIn3,https://lichess.org/3TgS8j1L#77
ghO20,5rk1/1b2q1pp/pp3p2/3p1P2/5B2/1Prp3Q/P2R2PP/4R2K w - - 0 29,e1e7 c3c1 d2d1 c1d1 e7e1 d1e1,581,88,100,118,backRankMate long mate mateIn3 middlegame,https://lichess.org/Hf6ZPwjI#57
VyZ2N,5r1k/6pp/5qb1/8/6P1/4QP1P/6K1/4R3 b - - 2 42,f8e8 e3e8 g6e8 e1e8 f6f8 e8f8,549,108,74,358,backRankMate endgame long mate mateIn3,https://lichess.org/79NoVdm1/black#84
1hMfx,1R6/5kpp/5p2/p7/2n5/8/r4PPP/2R3K1 w - - 0 26,c1c4 a2a1 b8b1 a1b1 c4c1 b1c1,448,101,83,313,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/hElDIrU0#51
HPfCJ,3r4/1b2b1kp/p1nq2p1/4p3/Pp6/1B2BN1Q/1P3PPP/2R3K1 w - - 5 26,c1d1 d6d1 b3d1 d8d1 f3e1 d1e1,542,100,80,358,backRankMate long mate mateIn3 middlegame,https://lichess.org/SkS5Zvd5#51
b4mcn,2r2rk1/5p1p/4pnpQ/3pq1N1/B7/8/P4PPP/4R1K1 w - - 0 26,e1e5 c8c1 a4d1 c1d1 e5e1 d1e1,485,104,97,942,backRankMate long mate mateIn3 middlegame,https://lichess.org/AevXmSra#51
F4Yr6,1k1r4/ppp3r1/8/8/8/P4bbR/1PPBn3/RK6 b - - 0 30,d8d2 h3h8 g7g8 h8g8 d2d8 g8d8,424,100,78,628,backRankMate long mate mateIn3 middlegame,https://lichess.org/cdJwUbTh/black#60
8AvLn,2B5/4R3/8/p7/3n3P/6p1/1rk3P1/3R2K1 w - - 4 45,d1d4 b2b1 d4d1 b1d1 e7e1 d1e1,568,93,83,47,endgame long mate mateIn3,https://lichess.org/inU1wvLY#89
9ZgbD,3r2k1/b4ppp/p1R1pn2/5Pr1/8/P1NP3P/1P6/7K b - - 0 31,d8d3 c6c8 d3d8 c8d8 f6e8 d8e8,416,106,91,1005,backRankMate endgame long mate mateIn3,https://lichess.org/bl2p0wU5/black#62
TQYr7,6k1/2r2pb1/2r1p1pp/p2pP3/P2R4/PN5Q/5PPP/2q1R1K1 w - - 0 38,e1c1 c6c1 b3c1 c7c1 d4d1 c1d1,552,97,85,218,backRankMate long mate mateIn3 middlegame,https://lichess.org/vIc9o4ls#75
mia23,7k/1p4pp/p1p1r3/3QPq2/1P3P2/P5P1/6K1/2R5 b - - 0 34,c6d5 c1c8 e6e8 c8e8 f5f8 e8f8,404,107,90,1547,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/pO9JB5NR/black#68
UHq2C,8/rk6/3q3p/2p1p1p1/1P2P3/2P1R3/5PPP/3R2K1 w - - 0 32,d1d6 a7a1 d6d1 a1d1 e3e1 d1e1,569,90,81,104,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/OxXG25bv#63
ULRyK,2q4k/2Q3pp/3p1r2/4b3/4P3/6P1/RP3P1P/6K1 b - - 0 28,c8c7 a2a8 c7c8 a8c8 f6f8 c8f8,565,101,73,163,backRankMate endgame long mate mateIn3,https://lichess.org/2mNrTASB/black#56
1s5rw,6k1/p4p1p/1p4p1/4R3/1P6/P1r5/r4PPP/2R3K1 w - - 0 33,c1c3 a2a1 c3c1 a1c1 e5e1 c1e1,488,105,94,198,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/lWuDAMYa#65
S2cZm,r5k1/2p1qpb1/1pPp2p1/1N1P3p/2P5/5Q2/5PPP/4R1K1 w - - 2 29,e1e7 a8a1 f3d1 a1d1 e7e1 d1e1,427,108,91,1884,backRankMate endgame long mate mateIn3,https://lichess.org/r38qUKKn#57
pymkb,8/p4pkp/3r1bp1/8/r3R3/2P4P/5PPB/3R2K1 w - - 0 32,d1d6 a4a1 d6d1 a1d1 e4e1 d1e1,469,107,92,1412,backRankMate endgame long mate mateIn3,https://lichess.org/VpklioZo#63
jF2qk,6k1/p5pp/2p5/4P3/2bPR3/1rN5/3R1PPP/6K1 w - - 8 31,c3a4 b3b1 d2d1 b1d1 e4e1 d1e1,567,87,50,122,backRankMate endgame long mate mateIn3,https://lichess.org/htQZfQmX#61
P1lH4,4r1k1/pp4p1/1b4P1/3p1n2/1p3P2/PN1P4/1P4KP/2R5 b - - 0 31,e8e6 c1c8 b6d8 c8d8 e6e8 d8e8,585,87,71,89,endgame long mate mateIn3,https://lichess.org/taipHb9a/black#62
ZeBvg,6k1/1b2b1pp/2p1p1P1/2P5/3q4/p7/5N1P/4QBK1 b - - 1 33,e7c5 e1e6 g8h8 e6e8 c5f8 e8f8,583,81,100,717,endgame long mate mateIn3,https://lichess.org/RTO9CTcB/black#66
F6Skp,8/4Q1rk/7p/2pPp3/2B1P2p/p1P5/P7/K7 w - - 2 41,e7h4 g7g1 c4f1 g1f1 h4e1 f1e1,567,99,73,706,endgame long mate mateIn3,https://lichess.org/PEOt5VPu#81
DEJHy,3r4/5p1k/2p4q/p3QP1p/6p1/2P5/1P3PPP/3R2K1 w - - 1 30,d1d8 h6c1 d8d1 c1d1 e5e1 d1e1,400,94,85,279,endgame long mate mateIn3,https://lichess.org/u5TynZl4#59
cSWTp,1r2q1k1/5p1p/5Qp1/p7/8/B3P3/P4PPP/3R2K1 w - - 2 28,d1d2 b8b1 a3c1 b1c1 d2d1 c1d1,479,114,81,577,backRankMate endgame long mate mateIn3,https://lichess.org/2Wgplqs0#55
vCYqo,7k/5pp1/7p/2r1r3/1R6/1p1B1K2/PP6/8 b - - 1 43,b3a2 b4b8 c5c8 b8c8 e5e8 c8e8,509,93,62,220,endgame long mate mateIn3 pillsburysMate,https://lichess.org/cZsN0ryv/black#86
5oE5f,2r3k1/1R3ppp/4pq2/3p4/4n3/1P3N1P/2Q2PP1/6K1 b - - 3 28,c8c2 b7b8 c2c8 b8c8 f6d8 c8d8,478,100,91,271,backRankMate endgame long mate mateIn3,https://lichess.org/hnhT84jw/black#56
4om2L,8/p2R3p/1p4p1/2p4k/4PB2/r7/5PPP/6K1 w - - 8 32,e4e5 a3a1 f4c1 a1c1 d7d1 c1d1,566,107,62,159,backRankMate endgame long mate mateIn3,https://lichess.org/jcewBb2n#63
SPmBh,1r4k1/q4p2/6p1/3R2P1/5K2/p7/8/B2R4 b - - 0 53,a3a2 d5d8 b8d8 d1d8 g8h7 d8h8,567,82,100,155,endgame long mate mateIn3 operaMate,https://lichess.org/v93kCGwa/black#106
mMwA6,2r5/5Qpk/4p2p/p7/P7/3q4/6PP/3R3K w - - 0 37,d1d3 c8c1 d3d1 c1d1 f7f1 d1f1,437,102,85,514,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/RaxxbdN1#73
z16rj,6rk/1Rp2B1p/3b3r/8/8/3qP1P1/5P1P/5RK1 b - - 0 29,g8g7 b7b8 d6f8 b8f8 g7g8 f8g8,541,99,92,986,long mate mateIn3 middlegame operaMate,https://lichess.org/i1VGPk44/black#58
PnnHJ,3r2k1/p1r2ppp/8/3Rp3/8/1RP2P1P/P4P2/4K3 b - - 0 22,d8d5 b3b8 c7c8 b8c8 d5d8 c8d8,542,106,79,151,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/N02lQXUu/black#44
FDQMC,6k1/5p2/2K3p1/3R3p/4rp2/1p1p3P/1Bb3P1/8 b - - 1 46,d3d2 d5d8 e4e8 d8e8 g8h7 e8h8,569,83,100,408,endgame long mate mateIn3 operaMate,https://lichess.org/ZQiO0DX9/black#92
X1TTi,2rk1r2/4p3/p5Qp/1p4p1/1n6/5NB1/PP3PPP/3B2K1 w - - 1 29,d1b3 c8c1 b3d1 c1d1 f3e1 d1e1,486,94,100,325,long mate mateIn3 middlegame,https://lichess.org/WhuNy0q5#57
CPxkU,8/6pp/8/4R3/3rR3/5k2/2r2P1P/6K1 w - - 0 37,e4d4 c2c1 d4d1 c1d1 e5e1 d1e1,454,110,97,733,endgame long mate mateIn3 rookEndgame,https://lichess.org/DdoWbk8B#73
2CiiL,2r3k1/1p1bpp1p/p2p2p1/3P4/P3P3/1PQ2P2/4B1PP/7K w - - 1 23,c3b4 c8c1 e2d1 c1d1 b4e1 d1e1,550,99,78,489,backRankMate endgame long mate mateIn3,https://lichess.org/GNYgRwrF#45
2DVdT,r6k/p1p3pp/2p5/4R3/2B1P3/6P1/PPP3r1/1K1R4 w - - 1 24,d1d7 g2g1 c4f1 g1f1 d7d1 f1d1,524,99,92,288,backRankMate endgame long mate mateIn3,https://lichess.org/JcIB9OHN#47
N6G1O,B7/4Q3/pq3p2/1p6/5b1R/1Pk5/P1P5/1K6 w - - 2 38,h4f4 b6g1 f4f1 g1f1 e7e1 f1e1,463,102,97,566,endgame long mate mateIn3,https://lichess.org/ehcDsR7G#75
tI0DZ,r5kr/ppq2Bpp/2pR4/4b3/8/B7/P4PPP/1N1Q2K1 b - - 0 19,c7f7 d6d8 a8d8 d1d8 f7e8 d8e8,473,94,83,156,long mate mateIn3 middlegame,https://lichess.org/FjEkYWPR/black#38
b3uBB,5r1k/p6p/2b2QpP/8/2p2P2/2P2qP1/PR3P2/R5K1 b - - 0 25,f8f6 b2b8 c6e8 b8e8 f6f8 e8f8,512,94,81,88,endgame long mate mateIn3,https://lichess.org/1HRy49Wp/black#50
sYVk2,1r3rk1/q2b1ppp/4p3/3p4/2p3Q1/3N4/2P2PPP/R5K1 w - - 0 26,a1a7 b8b1 d3c1 b1c1 g4d1 c1d1,493,107,69,159,backRankMate endgame long mate mateIn3,https://lichess.org/513c4yZH#51
8JaGF,7k/pp3ppB/2p3P1/8/1b2r2q/6RP/P4r2/3R3K b - - 3 33,f7f6 d1d8 e4e8 d8e8 b4f8 e8f8,400,109,100,268,long mate mateIn3 middlegame,https://lichess.org/4BaAU5pl/black#66
Dxx0o,2r2k2/4ppbp/3p2p1/4n3/4P3/1r3PBP/6P1/R4RK1 b - - 5 30,c8c2 a1a8 b3b8 a8b8 c2c8 b8c8,589,89,100,136,backRankMate long mate mateIn3 middlegame,https://lichess.org/PwUEJu6O/black#60
Ft1d5,r4rk1/pp4b1/3p1q2/3R3Q/2P3B1/8/P4PPP/4N1K1 w - - 1 26,e1f3 f6a1 d5d1 a1d1 f3e1 d1e1,548,107,81,506,long mate mateIn3 middlegame,https://lichess.org/kfhgKNGs#51
RKDpx,1k6/p1p5/1p6/8/3P1Q2/2Pq4/PP2r3/K2R4 w - - 0 33,d1d3 e2e1 d3d1 e1d1 f4c1 d1c1,478,107,89,283,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/9iBYKhF1#65
HOdzM,6k1/1p2nppp/8/4N3/1PP1b1P1/7P/3NqP2/Q5K1 b - - 0 29,e2d2 a1a8 e7c8 a8c8 d2d8 c8d8,581,89,72,120,endgame long master mate mateIn3,https://lichess.org/cnnXh5j3/black#58
iNp0f,2r3k1/1b3ppp/p7/2p3q1/P2Q4/1P4NP/2R2PP1/2R4K b - - 0 30,c5d4 c2c8 b7c8 c1c8 g5d8 c8d8,400,97,77,159,backRankMate endgame long mate mateIn3,https://lichess.org/bYY60YN6/black#60
syzjL,6k1/5ppp/2p1r3/2P1q1Q1/3pp3/8/P4PPP/1R4K1 b - - 1 28,e5g5 b1b8 g5d8 b8d8 e6e8 d8e8,515,98,80,245,backRankMate endgame long mate mateIn3 queenRookEndgame,https://lichess.org/Tjmh6fIG/black#56
2NKP3,5r1k/ppR3pp/3p4/4q3/PP6/5QbP/8/7K b - - 5 34,f8f3 c7c8 e5e8 c8e8 f3f8 e8f8,490,105,65,157,backRankMate endgame long mate mateIn3,https://lichess.org/jZhq2drv/black#68
ywhM0,3R4/4k1pQ/ppq2p2/4pn2/P7/6R1/1P4PP/7K w - - 1 37,h7f5 c6c1 d8d1 c1d1 f5f1 d1f1,539,101,93,589,endgame long mate mateIn3,https://lichess.org/JFh8yMwD#73
PYsM2,2b2rk1/3p3p/p1pQp1p1/8/8/8/PP1B3P/K4q1R w - - 3 28,h1f1 f8f1 d2e1 f1e1 d6d1 e1d1,419,110,93,980,backRankMate endgame long mate mateIn3,https://lichess.org/F6OwXX15#55
UdkIm,1k6/1ppr3p/5R2/2B5/6p1/P1KP1p2/2P1r3/8 b - - 0 37,h7h5 f6f8 e2e8 f8e8 d7d8 e8d8,563,101,84,1091,endgame long mate mateIn3 pillsburysMate,https://lichess.org/hy6NQYmA/black#74
DppNr,1Br3k1/p4ppp/8/8/B3P3/8/1P3RPP/1n5K w - - 0 28,b8g3 c8c1 a4d1 c1d1 f2f1 d1f1,524,109,60,31,backRankMate endgame long mate mateIn3,https://lichess.org/WrW1CTON#55
jcDTA,6k1/5pp1/7p/4bN2/R7/4B2P/1r3PP1/6K1 w - - 0 28,a4e4 b2b1 e3c1 b1c1 e4e1 c1e1,412,107,63,194,endgame long mate mateIn3 pillsburysMate,https://lichess.org/hw70hNkt#55
2bO04,1r4k1/p4pp1/2B3bp/2Rp4/4P3/P4P2/6PP/3Q3K w - - 1 32,d1d5 b8b1 c5c1 b1c1 d5d1 c1d1,418,99,100,193,backRankMate endgame long mate mateIn3,https://lichess.org/GQdYn6s0#63
nWdKH,3r2k1/1p3p1p/2b3pP/1p6/4pq2/6RQ/6PK/8 b - - 3 37,d8d3 h3c8 d3d8 c8d8 c6e8 d8e8,469,110,96,754,endgame long mate mateIn3,https://lichess.org/sU14ZApS/black#74
JSd8x,1r2bk2/5p1p/p3qQpN/3p4/8/P7/2P3PP/4R2K w - - 0 32,e1e6 b8b1 e6e1 b1e1 f6f1 e1f1,580,86,100,137,backRankMate endgame long mate mateIn3,https://lichess.org/101j88U8#63
VeDXQ,3r1rk1/1p1qbp1Q/p3p1p1/2pp1nP1/5P2/1P2PR2/PBPPN2P/5RK1 b - - 0 19,g8h7 f3h3 f5h4 h3h4 h7g8 h4h8,528,90,75,238,long mate mateIn3 middlegame operaMate,https://lichess.org/8R038dUR/black#38
ogDXa,1r5r/p1p1R2p/2kp4/3p4/2p2B2/Q7/P4PPP/7K w - - 2 31,a3a7 b8b1 f4c1 b1c1 e7e1 c1e1,455,104,75,254,backRankMate endgame long mate mateIn3,https://lichess.org/PwZRrQsv#61
tGDzI,5rk1/5Qpp/3R4/p1p1q3/Pp2P3/1P1P2rP/1P4P1/5R1K b - - 0 30,f8f7 d6d8 e5e8 d8e8 f7f8 f1f8,589,102,79,73,endgame long mate mateIn3 queenRookEndgame,https://lichess.org/xvgynfbM/black#60
yxpk5,8/7p/1p1R4/5pk1/5Np1/1r2B3/5PPP/R5K1 w - - 8 44,a1a7 b3b1 e3c1 b1c1 d6d1 c1d1,584,108,68,109,backRankMate endgame long mate mateIn3,https://lichess.org/qbB549Hq#87
9FPIc,3r2k1/R4ppp/4b3/1p2n3/8/PP3P2/3R2PP/3B2K1 b - - 0 30,d8d2 a7a8 e6c8 a8c8 d2d8 c8d8,497,100,90,177,backRankMate endgame long mate mateIn3,https://lichess.org/R8rdg1yB/black#60
y2ohJ,2r3k1/1p3pp1/2q1P3/p6p/8/BP1QPnRP/P5P1/R1r4K w - - 3 29,a1c1 c6c1 a3c1 c8c1 d3d1 c1d1,415,110,87,903,long mate mateIn3 middlegame,https://lichess.org/82ZoSoOW#57
ZpLCS,6k1/2R3p1/2n1r1P1/2p1p2P/pp2P3/2P5/PP3P2/6K1 b - - 0 28,b4c3 c7c8 c6d8 c8d8 e6e8 d8e8,593,85,100,248,endgame long mate mateIn3,https://lichess.org/Bf1jerlQ/black#56
VfeNh,3r2k1/5p1p/6pP/4PqP1/pR5K/2p5/8/8 b - - 1 39,d8d3 b4b8 f5c8 b8c8 d3d8 c8d8,400,94,100,217,endgame long mate mateIn3 queenRookEndgame,https://lichess.org/A3mrCMZE/black#78
e5mJb,6k1/1p1q1ppp/2r5/2PRP3/5P2/8/6PP/Q5K1 b - - 0 25,d7d5 a1a8 c6c8 a8c8 d5d8 c8d8,493,89,100,148,backRankMate endgame long mate mateIn3,https://lichess.org/z3zBnWc7/black#50
DnXzZ,3NR3/8/kp6/p1p4p/P7/1r3B2/5PPP/6K1 w - - 0 40,d8c6 b3b1 f3d1 b1d1 e8e1 d1e1,587,102,70,186,backRankMate endgame long mate mateIn3,https://lichess.org/paIBCGR4#79
bwBzW,7k/ppb3pp/8/4p3/1P1pPr2/P2P4/4KP2/2R5 b - - 3 41,c7b6 c1c8 b6d8 c8d8 f4f8 d8f8,511,87,100,110,backRankMate endgame long mate mateIn3,https://lichess.org/OdfvE2kG/black#82
QOgUG,5rk1/1b3p2/4p1p1/1pp3Np/r2PP2Q/1q6/3R1PPP/1R4K1 w - - 1 29,b1b3 a4a1 b3b1 a1b1 d2d1 b1d1,411,109,94,318,backRankMate long mate mateIn3 middlegame,https://lichess.org/k6O0GuNO#57
7zbRU,4r1k1/R4ppp/8/8/P1b4P/5N2/1r6/6K1 b - - 2 31,e8e3 a7a8 b2b8 a8b8 e3e8 b8e8,572,95,93,123,backRankMate endgame long mate mateIn3,https://lichess.org/WuUJKjHB/black#62
yLlAH,6k1/5ppp/p3b3/1P6/2pr4/5B2/5PPP/R5K1 b - - 0 27,a6b5 a1a8 e6c8 a8c8 d4d8 c8d8,486,84,85,147,backRankMate endgame long mate mateIn3,https://lichess.org/wqXWkGwr/black#54
qs09v,1r4k1/5p1p/6p1/2P5/P7/5N2/5PPP/2R3K1 w - - 0 33,c1c4 b8b1 c4c1 b1c1 f3e1 c1e1,438,89,44,236,backRankMate endgame long mate mateIn3,https://lichess.org/RHVFoIGh#65
hTxCy,r4r1k/pp2q1np/n2p4/4pb2/2B1P2P/5R2/2P2Q2/5RK1 b - - 0 26,f5e4 f3f8 a8f8 f2f8 e7f8 f1f8,492,96,100,495,backRankMate long mate mateIn3 middlegame,https://lichess.org/kFnkKDCt/black#52
P2Qxi,5r1k/pppq2pp/3p2r1/8/5Q2/2N5/PP2RPPP/4R1K1 b - - 14 24,f8f4 e2e8 d7e8 e1e8 f4f8 e8f8,407,115,87,618,backRankMate endgame long mate mateIn3,https://lichess.org/Lp6AWgVu/black#48
CValn,3r2k1/p1p2p1p/2P1b1pP/2P5/P7/r3NK2/8/1R6 b - - 0 30,d8d3 b1b8 e6c8 b8c8 d3d8 c8d8,588,107,63,368,endgame long mate mateIn3,https://lichess.org/UQQRHdPj/black#60
jL4F7,2Q5/pp4pk/6q1/4b1B1/3p3P/2P5/P5P1/5R1K w - - 3 32,f1f8 g6b1 g5c1 b1c1 f8f1 c1f1,555,85,71,116,endgame long mate mateIn3,https://lichess.org/UebHh9KV#63
uZToR,2r2r2/4n1kp/3R4/4pp2/1PQ3p1/P3RbP1/5P1P/6K1 w - - 1 31,c4e6 c8c1 d6d1 c1d1 e3e1 d1e1,490,83,75,146,long mate mateIn3 middlegame pillsburysMate,https://lichess.org/BMD6Mx3W#61
N5cr5,1r4k1/6pp/2p1rp2/p7/3B4/P7/2R2PPP/4R1K1 w - - 0 31,e1e6 b8b1 c2c1 b1c1 e6e1 c1e1,549,85,100,179,backRankMate endgame long mate mateIn3,https://lichess.org/MQHroB2I#61
uK1VI,r7/8/2NR4/5pkp/6p1/8/2R2PPP/6K1 w - - 10 38,c6e7 a8a1 c2c1 a1c1 d6d1 c1d1,597,84,66,107,backRankMate endgame long mate mateIn3,https://lichess.org/ZiOm0nSV#75
bB0Os,2r2bk1/5p2/6pp/3R4/8/1P2P3/r4PPP/2R3K1 w - - 0 28,c1c8 a2a1 c8c1 a1c1 d5d1 c1d1,420,104,91,1113,backRankMate endgame long mate mateIn3,https://lichess.org/zy7CwHxn#55
LHrXp,7k/r1p3pp/5p2/7b/p1P2P2/Bq2P2Q/7P/5RK1 b - - 1 33,b3a3 h3c8 h5e8 c8e8 a3f8 e8f8,577,102,95,1281,endgame long mate mateIn3,https://lichess.org/QHWdVrv4/black#66
ZYUUO,6k1/6p1/pB4B1/1p5p/2p5/2b5/r4PPP/2R3K1 w - - 0 27,c1c3 a2a1 g6b1 a1b1 c3c1 b1c1,586,90,83,580,backRankMate endgame long mate mateIn3,https://lichess.org/CNYtJAs5#53
lJSvS,4r3/p1r2k1p/6p1/P2P4/8/3R4/5PPP/4R1K1 w - - 1 34,e1e8 c7c1 d3d1 c1d1 e8e1 d1e1,461,107,91,1310,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/FMbUIHKH#67
kmHU7,4R3/2p2k2/2B4p/2p5/2Rb4/r5B1/5PPP/6K1 w - - 0 35,c4d4 a3a1 d4d1 a1d1 e8e1 d1e1,498,92,98,697,backRankMate endgame long mate mateIn3,https://lichess.org/IH62OX64#69
3jV1Y,6k1/p5p1/4p2p/8/4R3/4B3/PrP2PPP/6K1 w - - 0 25,a2a4 b2b1 e3c1 b1c1 e4e1 c1e1,468,122,90,752,backRankMate endgame long mate mateIn3,https://lichess.org/jtgdauN1#49
Fb5cB,3R1bk1/4pp1p/6p1/8/P5B1/1P6/1r2NPPP/6K1 w - - 1 26,d8b8 b2b1 e2c1 b1c1 g4d1 c1d1,552,95,67,86,backRankMate endgame long mate mateIn3,https://lichess.org/mZU1HNSD#51
YLrUK,5k2/p2R4/5Pp1/7P/1p4r1/4p3/PPP1R3/1K6 w - - 0 35,h5g6 g4g1 e2e1 g1e1 d7d1 e1d1,557,89,100,121,backRankMate endgame long mate mateIn3 rookEndgame,https://lichess.org/DFM5ISRu#69
3I9Pq,8/rPRR4/4pk2/8/4PP1P/6p1/6P1/6K1 w - - 0 44,b7b8q a7a1 b8b1 a1b1 c7c1 b1c1 d7d1 c1d1,586,96,88,207,endgame mate mateIn4 queenRookEndgame veryLong,https://lichess.org/Rnopx2yn#87
o7szI,2r3k1/1p3ppp/p3b3/3pPp2/PbrN4/2PR4/3B1PPP/2R3K1 w - - 0 25,c3b4 c4c1 d2c1 c8c1 d3d1 c1d1,466,99,94,336,backRankMate long mate mateIn3 middlegame,https://lichess.org/MPyMCvSV#49
OWNz2,8/p5kp/1p4p1/1QP2p2/P7/3r1n1P/3r2PK/1R6 w - - 5 35,h2h1 d2d1 b1d1 d3d1 b5f1 d1f1,521,91,79,207,endgame long mate mateIn3,https://lichess.org/Rolq8qH8#69
rB1iQ,8/r4kp1/7p/2Nn1p2/1ppP4/8/1R3PPP/2R3K1 w - - 0 32,c1c4 a7a1 b2b1 a1b1 c4c1 b1c1,400,115,89,529,backRankMate endgame long mate mateIn3,https://lichess.org/X9QViMvd#63
hCHD0,6k1/5ppp/2p1b3/1p6/1Pp1PPP1/R4KBP/3r4/n7 b - - 6 39,a1c2 a3a8 e6c8 a8c8 d2d8 c8d8,426,119,79,909,backRankMate endgame long mate mateIn3,https://lichess.org/ZlVIyE1b/black#78
idbw3,3r2k1/1r3ppp/Qp2p3/8/2P5/3P2P1/P4PKP/3q4 b - - 1 26,d8d7 a6a8 b7b8 a8b8 d7d8 b8d8,430,106,96,638,backRankMate endgame long mate mateIn3,https://lichess.org/3ZhwD5oh/black#52`,
  },
  {
    id: 'hanging-opening', color: '#FF8C1A', title: 'Висячие фигуры в дебюте', short: 'Висячие в дебюте',
    // task_hangingopening800.csv, rating up to 800
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
09koP,rnb2br1/pp1pk2p/2p2q2/7Q/4Pp2/2NP4/PPP3PP/R1B2RK1 b - - 0 12,g8g2 g1g2 f6g6 h5g6,727,83,94,338,advantage hangingPiece opening short,https://lichess.org/scNGZ5Bm/black#24
0MX3E,r3k1nr/pbpp1pQp/1p4nB/1B2q3/8/8/PPP2PPP/RN3RK1 w kq - 0 11,b5d7 e8d7 g7e5 g6e5,741,108,93,732,advantage hangingPiece opening short,https://lichess.org/67PYm8qL#21
0UmjF,r1bqk2r/2p1bpp1/p1p2n1p/8/2B1R3/8/PPP1QPPP/RNB3K1 w kq - 5 13,c4f7 e8f7 e4e7 d8e7 e2e7 f7e7,708,98,81,309,advantage hangingPiece long opening,https://lichess.org/RfQBUJhF#25
0YFVx,rn1qk2r/pbp2p1p/1p2p1p1/3N4/8/1P4P1/PbPP1PBP/1R1QK1NR w Kkq - 0 10,d5c7 d8c7 g2b7 c7b7 d1f3 b7f3,633,98,81,213,advantage hangingPiece long opening,https://lichess.org/7eRbCt3i#19
0a8v4,r2q1rk1/3n1pp1/bp3n1p/p7/1bBP4/4PNB1/PP3PPP/2RQ1K1R b - - 3 17,a8c8 c4a6 c8c1 d1c1,735,89,80,143,crushing hangingPiece master opening short,https://lichess.org/vgPK6Hqn/black#34
0jhLq,r2q1rk1/pb1nbppp/2p1pn2/1p4B1/3P4/2N1PN2/PP2BPPP/R2Q1RK1 w - - 2 11,c3e4 f6e4 g5e7 d8e7,759,92,85,193,crushing hangingPiece opening short,https://lichess.org/VBafIjMy#21
0wIPf,r1bqkb1r/pp3ppp/2n2n2/2PBp3/8/6P1/PPP1PP1P/RNBQK1NR w KQkq - 1 6,d5f7 e8f7 d1d8 c6d8,790,92,95,507,advantage hangingPiece opening short,https://lichess.org/hRzspciy#11
1C2WP,rn1qr1k1/pp3ppp/2pb4/7b/3PB3/5N1P/PPP2PP1/R1BQR1K1 w - - 0 13,e4h7 g8h7 e1e8 d8e8,678,97,76,71,advantage hangingPiece opening short,https://lichess.org/qwVf2dZD#25
1UWoh,r1bqk1nr/pppp1pp1/2n4p/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 5,c4f7 e8f7 f3e5 c6e5,770,92,80,140,advantage hangingPiece opening short,https://lichess.org/iy4NTXdN#9
1Xxx6,r2qkbnr/ppp2ppp/3p4/4p3/2BnP1b1/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6,c4f7 e8f7 f3e5 d6e5,751,113,22,35,advantage hangingPiece opening short,https://lichess.org/A3gkW7r1#11
1eKfH,r2qkb1r/pb2pppp/1pn2n2/2p5/4P3/5NP1/PPPN1PBP/R1BQ1RK1 b kq - 0 8,f6e4 d2e4 d8d1 f1d1,756,94,89,392,crushing hangingPiece opening short,https://lichess.org/OWD07bJx/black#16
1lmGR,r3kb1r/pp2pppp/2n5/2P1n3/1PP3b1/5N2/P2NB1PP/R1BK3R b kq - 5 12,c6b4 f3e5 g4e2 d1e2,671,89,98,440,advantage hangingPiece opening short,https://lichess.org/wH5tWkjQ/black#24
1x8h9,r1bq1rk1/pp1n1pbp/5np1/4p3/P7/2P2NP1/1P3PBP/RNBQ1RK1 w - - 0 11,f3e5 d7e5 d1d8 f8d8,795,96,83,482,crushing hangingPiece opening short,https://lichess.org/3a0kqh13#21
1zWB9,r1bqkb1r/ppp2ppp/2n5/2nBP3/8/5N2/PB3PPP/RN1QK2R w KQkq - 1 10,d5f7 e8f7 d1d8 c6d8,659,89,74,105,crushing hangingPiece opening short,https://lichess.org/m8Ny1rvd#19
2FHzE,rn2kb1r/ppp1qppp/8/3Pn3/3BQ3/P7/1P3PPP/RN2KB1R b KQkq - 4 12,e5d3 f1d3 e7e4 d3e4,719,98,81,142,crushing hangingPiece opening short,https://lichess.org/7bVVKVJk/black#24
2Ic8s,r1bq1rk1/p1pp1ppp/2p2n2/2b3B1/4P3/2PB4/PP3PPP/RN1QK2R b KQ - 3 8,c5f2 e1f2 f6e4 d3e4,725,105,90,371,advantage hangingPiece opening short,https://lichess.org/u10YRCIZ/black#16
38wwU,r1bqk2r/ppp2ppp/2p2n2/8/3bP3/2N2P2/PPP3PP/R1BQKB1R b KQkq - 0 7,d4f2 e1f2 d8d1 c3d1,732,102,58,246,crushing hangingPiece opening short,https://lichess.org/HZdjVZvb/black#14
4az71,r1b1k1nr/p1p2p1p/2p2bp1/8/3qp3/1B2Q3/PPP2PPP/RNB1K2R w KQkq - 2 12,b3f7 e8f7 e3d4 f6d4,640,97,86,624,advantage hangingPiece opening short,https://lichess.org/9LzghZtV#23
4v9WF,r2qkb1r/ppp2ppp/2b2n2/4p3/2B5/8/PPP2PPP/RNBQ1RK1 w kq - 0 9,c4f7 e8f7 d1d8 a8d8,663,89,89,461,advantage hangingPiece opening short,https://lichess.org/SYpwfojC#17
5VtJy,rn3rk1/ppp3pp/4pp1q/5b2/3Pn3/2BBPN2/PP3PPP/R2Q1R1K b - - 3 14,e4g3 f2g3 f5d3 d1d3,734,88,73,247,crushing hangingPiece opening short,https://lichess.org/NTJPU8QL/black#28
68ecK,r1bqk2r/1pp2pp1/p1n4p/4p3/2B1Pn2/P2P1N1P/1PP3P1/RN1Q1RK1 w kq - 1 12,c4f7 e8f7 f3e5 c6e5,715,101,94,691,advantage hangingPiece opening short,https://lichess.org/kKKiPqgC#23
6EenO,r1bq1rk1/pp2nppp/2n5/4P3/1bPp4/3B1N2/PP1B1PPP/RN1Q1RK1 w - - 8 10,d3h7 g8h7 d2b4 c6b4,702,84,91,167,advantage hangingPiece opening short,https://lichess.org/hgHK46WP#19
6p2Ab,r1bqk2r/ppp1bppp/2np1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R w KQkq - 2 7,c4f7 e8f7 d4c6 b7c6,765,86,100,65,advantage hangingPiece opening short,https://lichess.org/YiSM7j0d#13
6qiCF,r1bqkbnr/ppp2ppp/8/3p4/Pn2p3/RP2P2N/1BPPBPPP/1N1QK2R b Kkq - 8 8,b4c2 d1c2 c8h3 g2h3,697,86,83,668,advantage hangingPiece opening short,https://lichess.org/yNjks54F/black#16
6zo2B,rnbq1rk1/pp1nbppp/2p1p3/3pP1B1/3P4/2NB4/PPP2PPP/R2QK1NR w KQ - 1 8,d3h7 g8h7 g5e7 d8e7,665,92,85,109,advantage hangingPiece opening short,https://lichess.org/6zW8qJa5#15
7RQ6U,r1bq1rk1/pp1nbpp1/2p1pn1p/6B1/B2PN3/2P5/PP2NPPP/R2Q1RK1 w - - 0 11,g5h4 f6e4 h4e7 d8e7,783,107,92,1481,advantage hangingPiece opening short,https://lichess.org/3ZuXQXwd#21
7sZUa,r1b1kb1r/ppppqppp/8/3Pn3/4QB2/2P5/PP3PPP/RN2KB1R b KQkq - 2 9,e5f3 g2f3 e7e4 f3e4,704,109,92,1192,crushing hangingPiece opening short,https://lichess.org/rzN5eNnE/black#18
8Dk9T,r1bqk2r/ppp1ppbp/2np1np1/8/2BPPP2/5N2/PPP3PP/RNBQK2R w KQkq - 3 6,c4f7 e8f7,763,105,67,67,advantage hangingPiece oneMove opening,https://lichess.org/eBiAIgVi#11
9Amo6,r1q1kb1r/pp2pppp/1np2n2/5b2/2B2P2/5NN1/PPPP2PP/R1BQ1RK1 w kq - 9 9,c4f7 e8f7 g3f5 c8f5,698,101,86,54,advantage hangingPiece opening short,https://lichess.org/91iLiQVl#17
9lCls,r1bqkb1r/pp3ppp/2n2n2/4p3/2B5/1N3P2/PPP3PP/RNBQK2R w KQkq - 2 9,c4f7 e8f7 d1d8 c6d8,752,91,85,942,advantage hangingPiece opening short,https://lichess.org/cjRcrMx8#17
9vIIO,r2qr1k1/pp3ppp/2n5/2b5/3pB1b1/P4N2/1PP2PPP/R1BQR1K1 w - - 1 13,e4h7 g8h7 e1e8 d8e8,618,103,53,80,advantage hangingPiece opening short,https://lichess.org/Q0Thr5tZ#25
AGaSY,r2qk2r/p3bppp/2p1bn2/3p4/8/3B4/PPP1QPPP/RNB1R1K1 w kq - 4 12,d3f5 e6f5 e2e7 d8e7 e1e7 e8e7,655,98,80,221,crushing hangingPiece long opening,https://lichess.org/BN03Bxgv#23
AHwji,r2qnrk1/pb1n1ppp/3bp3/1p1pN3/2pP1P2/2P1PQ2/PPBN2PP/R1B2RK1 w - - 4 12,c2h7 g8h7 f3h3 h7g8,629,85,65,238,advantage hangingPiece opening short,https://lichess.org/jivYs8fR#23
Awdwg,rn1qk2r/pp2pp1p/3p1bp1/8/2B1P1b1/5N2/PP3PPP/R1BQ1RK1 w kq - 0 10,c4f7 e8f7 f3g5 f6g5,731,90,85,90,advantage hangingPiece opening short,https://lichess.org/vM7mAsA6#19
BJRcX,r1bqk1nr/1ppp1pp1/p1n4p/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 w kq - 0 6,c4f7 e8f7 f3e5 c6e5,764,111,17,41,advantage hangingPiece opening short,https://lichess.org/YiteQFrw#11
CDXVW,r1bq1rk1/pp1nbpp1/2p1pn1p/8/2BPN2B/4PN2/PP3PPP/2RQK2R w K - 3 12,e1g1 f6e4 h4e7 d8e7,764,105,85,518,crushing hangingPiece opening short,https://lichess.org/dz45xaeM#23
CNqae,rnbqkbnr/ppp3pp/3p4/4p3/8/5NP1/PPP1PP1P/RNBQKB1R w KQkq - 0 5,f3e5 d6e5 d1d8 e8d8,735,165,8,21,advantage hangingPiece opening short,https://lichess.org/PaNhBc6B#9
CNrgX,rnbq1rk1/pppp1ppp/5n2/2b1p1B1/2B1P3/P2P4/1PP2PPP/RN1QK1NR b KQ - 0 5,c5f2 e1f2 f6e4 d3e4,755,84,85,321,advantage hangingPiece opening short,https://lichess.org/bRDirPn2/black#10
DLh4S,rn1q1rk1/pp1bbppp/5n2/6B1/2BN4/2N5/PP3PPP/R2Q1RK1 w - - 1 11,c3e4 f6e4 g5e7 d8e7,793,100,94,740,crushing hangingPiece opening short,https://lichess.org/gEm80GiF#21
Da3Iu,r1b1k2r/ppppnppp/1bn5/1P6/3p2q1/2PB1N2/P4PPP/RNBQ1RK1 b kq - 0 10,c6e5 f3e5 g4d1 f1d1,731,96,67,158,advantage hangingPiece opening short,https://lichess.org/FXpRSJ5H/black#20
Dm1Ry,r1bq1rk1/ppp2ppp/2np4/2b1N2n/2P1P3/2NP3P/PP2BPP1/R1BQK2R b KQ - 0 8,c5f2 e1f2 d6e5 e2h5,730,118,93,903,advantage hangingPiece opening short,https://lichess.org/mo9ZTKUF/black#16
y0S3W,r3k1nr/p1q2ppp/2pbb3/1B1p4/5B2/8/PPP2PPP/RN1Q1RK1 w kq - 0 12,b5c6 c7c6 f4d6 c6d6,610,99,82,359,crushing hangingPiece opening short,https://lichess.org/zTAd7yy7#23
EdjJf,r2q1rk1/1pp3p1/pb1ppn1p/4n3/PP2P3/B1P4P/2B2PP1/RN1Q1R1K b - - 1 15,f6h5 d1h5 f8f2 f1f2,745,100,96,1438,advantage hangingPiece opening short,https://lichess.org/d55ZDVG4/black#30
EthJO,r1bqkb1r/pp3ppp/2n2n2/2pB4/8/4B3/PPP2PPP/RN1QK1NR w KQkq - 1 8,d5f7 e8f7 d1d8 c6d8,761,94,96,223,advantage hangingPiece opening short,https://lichess.org/7JMvg5hG#15
EtmgY,r1bqk2r/pp2ppbp/5np1/4p3/2BQ1P2/2N5/PPP3PP/R1B1K2R w KQkq - 0 10,c4f7 e8f7 d4d8 h8d8,732,82,84,288,advantage hangingPiece opening short,https://lichess.org/YTyeifyG#19
Fwjdh,r2q1rk1/pb1nbppp/1pn1p3/2ppN3/3P1B2/2PBP2P/PP1N1PP1/R2Q1RK1 w - - 5 11,d3h7 g8h7 e5c6 b7c6,764,91,82,220,advantage hangingPiece opening short,https://lichess.org/JVoCcS8C#21
G7ZrA,r1bq1rk1/p1p1bppp/2p2n2/6B1/3PN3/8/PPP1BPPP/R2Q1RK1 w - - 2 12,c2c3 f6e4 g5e7 d8e7,761,94,83,361,advantage hangingPiece opening short,https://lichess.org/a8S4ZNkJ#23
G8E22,r2qkb1r/p3pppp/2n5/1B1b4/3P4/1Q6/PP3PPP/R1B1K1NR w KQkq - 1 12,b3d5 d8d5 b5c6 d5c6,719,86,88,244,crushing hangingPiece opening short,https://lichess.org/SCPX1CDL#23
GP4c3,r2qr1k1/ppp2ppp/2nb4/3p3n/3P4/2PB1N1P/PP3PP1/R1BQR1K1 w - - 0 14,d3h7 g8h7 e1e8 d8e8,692,111,95,242,advantage hangingPiece opening short,https://lichess.org/vbMQYbQz#27
GW6wn,r1bqkbnr/pppn2pp/8/5p2/4p3/5NP1/PPP1PPBP/RNBQ1RK1 w kq - 0 7,f3e5 d7e5 d1d8 e8d8,688,95,85,1697,advantage hangingPiece opening short,https://lichess.org/7kbf09QP#13
GaoDj,r2qk2r/pp2bppp/2n5/2pB4/3pP1b1/P4N2/1PP2PPP/R1BQK2R w KQkq - 5 12,d5f7 e8f7 f3g5 e7g5,785,99,84,438,crushing hangingPiece opening short,https://lichess.org/KKa1L1sf#23
HFzYl,r3nrk1/ppqb1ppp/2nb4/3pN3/2pP1P2/2P2N2/PPB3PP/R1BQ1RK1 w - - 5 13,c2h7 g8h7 e5d7 c7d7,627,96,80,193,advantage hangingPiece master opening short,https://lichess.org/BD0MsptG#25
HQaze,r3kbnr/pp1bpppp/2n5/1B6/3p4/2N2P2/PPP1N1PP/R1B1K2R w KQkq - 0 9,e2d4 c6d4 b5d7 e8d7,625,96,87,994,crushing hangingPiece opening short,https://lichess.org/Dq5nOvjN#17
HUhkk,rnbqk2r/ppp2ppp/3p1n2/2b1p2N/4P3/3P4/PPP2PPP/RNBQKB1R b KQkq - 1 5,c5f2 e1f2 f6h5 d1h5,620,89,81,646,advantage hangingPiece opening short,https://lichess.org/1W1mbmpw/black#10
IBTlV,r1bqk1nr/pp2bpp1/7p/2p1p3/2B2B2/3Q4/PPP2PPP/RN2K2R w KQkq - 0 10,c4f7 e8f7 d3d8 e7d8,745,111,89,1017,crushing hangingPiece opening short,https://lichess.org/mEllgKii#19
ILnh9,r1bqkb1r/p1pp1p2/2p4p/6p1/4n3/6B1/PPP1QPPP/RN2KB1R b KQkq - 1 9,f8g7 e2e4 d8e7 e4e7,742,96,78,155,advantage hangingPiece opening short,https://lichess.org/bPP3U4ET/black#18
Ijp7c,rn1qkr2/p2pb2Q/bpp5/5nB1/8/1B1P4/PPP2PPP/RN2R1K1 w q - 1 15,h7f5 f8f5 e1e7 d8e7 g5e7 e8e7,797,92,92,420,advantage hangingPiece long opening,https://lichess.org/K8eidWy8#29
IqnQz,rnbqk2r/ppp1np1p/6p1/3Bb1P1/8/8/PPP1PP1P/RNBQK1NR w KQkq - 1 7,d5f7 e8f7 d1d8 h8d8,697,87,87,221,advantage hangingPiece opening short,https://lichess.org/t4VqNpB2#13
J5ILf,2kr1bnr/ppp2ppp/3q4/3pn3/6b1/2P1PN2/PP1PB1PP/RNBQ1RK1 b - - 1 8,d6h6 f3e5 g4e2 d1e2,756,105,96,628,advantage hangingPiece opening short,https://lichess.org/iqlLnqJy/black#16
JoTDt,r2qnrk1/pp1bbppp/4p3/3pP1B1/3P4/2PB4/PP1N2PP/R2QK2R w KQ - 1 12,d3h7 g8h7 g5e7 d8e7,765,84,100,169,advantage hangingPiece opening short,https://lichess.org/2wm9f3CW#23
K3Bqx,r1bqk2r/pppp1ppp/2n2n2/4b3/2B1P3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 6,c4f7 e8f7 f3e5 c6e5,717,98,82,807,advantage hangingPiece opening short,https://lichess.org/ax1XMl6G#11
K6ING,r1bqk1nr/ppp3p1/1bn2p1p/4P3/2B5/5N2/PP3PPP/RNBQR1K1 b kq - 0 10,b6f2 g1f2 d8d1 e1d1,659,101,78,124,crushing hangingPiece opening short,https://lichess.org/eDGRzmF3/black#20
KD8Hz,r2qkb1r/pb1ppppp/1p3n2/8/3P4/4PB2/PP3PPP/RNBQK2R b KQkq - 3 8,a8c8 f3b7 c8c1 d1c1,701,91,80,207,advantage hangingPiece opening short,https://lichess.org/qdd7AIiA/black#16
KGTty,r1bqk1nr/1ppp1pp1/p1n4p/2b1p3/4P3/1BP2N2/PP1P1PPP/RNBQK2R w KQkq - 2 6,b3f7 e8f7 f3e5 c6e5,784,99,80,456,advantage hangingPiece opening short,https://lichess.org/V9asRFVZ#11
KOu6X,r1b2rk1/bpp2ppp/p1pq1n2/4P3/4P3/2P2N1P/PP3PP1/RNBQR1K1 b - - 0 10,a7f2 g1f2 d6d1 e1d1,698,102,87,41,advantage hangingPiece opening short,https://lichess.org/HaAQi52z/black#20
Kcoox,r2q1rk1/1p1nbppp/p1b1p3/4B3/2P5/2NB4/PP3PPP/R2QR1K1 w - - 7 16,d3h7 g8h7 d1h5 h7g8 e5g7 g8g7,665,93,79,861,advantage hangingPiece long master opening,https://lichess.org/Dxt0AKw3#31
Laij1,r2qkb1r/ppp1pppp/2n2n2/8/4PPb1/5N2/PPPN2PP/R1BQKB1R b KQkq - 0 6,f6e4 d2e4 d8d1 e1d1,780,83,86,285,advantage hangingPiece opening short,https://lichess.org/6pxQUT2r/black#12
Lg3zR,r1bqkbnr/pp2pppp/3p4/2p5/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5,c4f7 e8f7 f3d4 c5d4,713,91,73,190,advantage hangingPiece opening short,https://lichess.org/1qosLUrP#9
Mner9,r2qkbnr/ppp2ppp/8/3pn3/6b1/4PNP1/PPPP2BP/RNBQK2R b KQkq - 1 6,d8d7 f3e5 g4d1 e5d7,785,80,79,202,advantage hangingPiece opening short,https://lichess.org/L15i3gff/black#12
N2Rtz,r1bq1rk1/pp2bpp1/5n2/4N3/3PB3/6Pp/PP3P1P/R1BQ1RK1 w - - 3 16,c1g5 f6e4 g5e7 d8e7,786,81,82,131,advantage hangingPiece opening short,https://lichess.org/QkV0AMk4#31
NFnGp,r1bqkb1r/pp3pp1/2n2n1p/2pB4/4P3/5N2/PP3PPP/RNBQK2R w KQkq - 0 9,d5f7 e8f7 d1d8 c6d8,770,98,76,336,advantage hangingPiece opening short,https://lichess.org/nmemKsli#17
Nd46Q,r1b1r1k1/p1qn1ppp/2pbp3/3p4/3P4/2PB1NB1/PP3PPP/R2QK2R w KQ - 0 13,d3h7 g8h7 g3d6 c7d6,749,133,0,24,advantage hangingPiece opening short,https://lichess.org/kEd0WW9O#25
Nd5J2,r1bqkbnr/ppp2ppp/2n5/8/2BQ4/4P3/PP3PPP/RNB1K1NR w KQkq - 1 6,c4f7 e8f7 d4d8 c6d8,799,105,95,960,advantage hangingPiece opening short,https://lichess.org/cGNOmwWa#11
NgNCE,r1b2rk1/pppq1ppp/2nb1n2/6B1/3P4/5B2/PP2NPPP/RN1Q1RK1 b - - 2 11,f6d5 f3d5 d6h2 g1h2,632,86,77,276,crushing hangingPiece opening short,https://lichess.org/owior1o6/black#22
O4mBz,r1bq1rk1/pppn1ppp/2nbp3/3p2P1/1P5P/P2BP3/1BPP1P2/RN1QK1NR w KQ - 3 9,d3h7 g8h7 d1h5 h7g8 b2g7 g8g7,619,93,71,174,advantage hangingPiece long master opening,https://lichess.org/eYJUKi5k#17
OGXAM,rn1qr1k1/ppp2ppp/8/2b1P2n/6b1/2NB1N2/PPP3PP/R1BQ1R1K w - - 5 13,d3h7 g8h7 d1d8 e8d8,707,103,33,124,advantage hangingPiece opening short,https://lichess.org/O69rFQQH#25
OlPX4,rn1bk1nr/ppp2ppq/3pb2p/3Np3/2B1P2N/3P1Q2/PPP2PPP/R1B2RK1 w kq - 4 10,d5c7 d8c7 c4e6 f7e6,797,88,88,519,advantage hangingPiece opening short,https://lichess.org/7cEjSiYn#19
OxvyI,r2qr1k1/pp1n1ppp/2pb1p2/8/3P2b1/2P5/PP1NBPPP/R1BQR1K1 b - - 4 11,d7f8 e2g4 e8e1 d1e1,677,155,0,10,crushing hangingPiece opening short,https://lichess.org/KPfvMKOd/black#22
OycRd,r3kb1r/3qnppp/pp1p4/2pb4/4N3/5N2/PPP2PPP/R1BQR1K1 w kq - 0 12,d1d5 e7d5 e4f6 e8d8 f6d7 d8d7,737,105,95,894,advantage hangingPiece long opening,https://lichess.org/oOzGJ5Kg#23
PEB2v,r1bqkbnr/pp3pp1/2n4p/2p5/2B1P3/5N2/PP3PPP/RNBQK2R w KQkq - 0 8,c4f7 e8f7 d1d8 c6d8,640,89,82,338,advantage hangingPiece opening short,https://lichess.org/aRllfblB#15
PGNIO,r1bqk2r/pp3ppp/2n5/4p3/1B1pn3/1B1P3P/PPP2PP1/R2QK1NR w KQkq - 1 11,b3f7 e8f7 d3e4 c6b4,685,94,80,127,advantage hangingPiece opening short,https://lichess.org/KRwK0CJG#21
PHz0w,r2qk2r/p2bbppp/2p2n2/2ppN3/8/5Q2/PPPP1PPP/RNB1K2R w KQkq - 4 10,e5c6 d7c6,651,161,9,23,advantage hangingPiece oneMove opening,https://lichess.org/ylvArZZ8#19
PXcF0,r1bqkb1r/pp3ppp/2n5/2pB4/4P3/8/PP3PPP/R1BQK1NR w KQkq - 1 9,d5f7 e8f7 d1d8 c6d8,683,100,83,606,advantage hangingPiece opening short,https://lichess.org/SZCHuqP4#17
QC4Gi,rn1q1rk1/ppp2ppp/3b4/8/3Pp1b1/2P5/PP1NBPPP/R1BQ1RK1 b - - 1 10,d6h2 g1h2 d8h4 h2g1 g4e2 d1e2,722,107,93,905,advantage hangingPiece long opening,https://lichess.org/73ymHJQr/black#20
QLrgb,r2qr1k1/1p3ppp/2nb4/p2p4/3Nb3/P1B1P3/1P2BPPP/2RQ1RK1 b - - 11 15,d6h2 g1h2 d8h4 h2g1 e4g2 g1g2,681,98,88,585,advantage hangingPiece long master opening,https://lichess.org/viCwdmdI/black#30
RAJxO,r2qr1k1/ppp2ppp/2n2n2/6N1/4b3/P7/1PPBBPPP/R2QR1K1 b - - 1 14,e4c2 d1c2 e8e2 e1e2,785,98,22,74,advantage hangingPiece opening short,https://lichess.org/Z23SZgc1/black#28
RPjDx,r2qkbnr/ppp2b1p/2np1p2/3Np1pQ/2B1P3/8/PPPP1PPP/R1B1K1NR w KQkq - 2 9,d5c7 d8c7 c4f7 c7f7 h5f7 e8f7,728,96,95,623,crushing hangingPiece long opening,https://lichess.org/DzAabFzO#17
RuFVU,r3k1nr/ppp2pQp/3bbq2/1N1p4/4p3/4P3/PPPP1PPP/R1B1KB1R w KQkq - 1 9,b5c7 d6c7 g7f6 g8f6,742,88,86,325,advantage hangingPiece opening short,https://lichess.org/WAvSggBq#17
S4Sll,r1bq1rk1/pp1p1ppp/2n1p3/8/1bPP4/3B1N2/PP1B1PPP/R2QK2R w KQ - 1 10,d3h7 g8h7 d2b4 c6b4,799,103,92,729,advantage hangingPiece opening short,https://lichess.org/o4gD6b3Y#19
S6a3k,r2qk2r/pp3ppp/2n5/2bQ4/6b1/1B3N2/PPP2PPP/R1B1K2R b KQkq - 0 11,c5f2 e1f2 d8d5 b3d5,710,79,100,179,advantage hangingPiece opening short,https://lichess.org/PfHN18c8/black#22
SIAJh,r1b2rk1/pp1q1ppp/2nbp3/3p4/3P1B1P/2PB4/PP1N1PP1/R2QK2R w KQ - 0 12,d3h7 g8h7 f4d6 d7d6,660,108,64,80,advantage hangingPiece opening short,https://lichess.org/iioJvDX9#23
SIhii,rnbq1rk1/1p2ppbp/p2n2p1/8/8/2P2N2/PP1NBPPP/R1BQ1RK1 w - - 0 10,d2e4 d6e4 d1d8 f8d8,784,92,87,692,advantage hangingPiece master opening short,https://lichess.org/wr1wCbxM#19
SNvVm,r2qkb1r/ppp2bpp/2n2p2/2nNp2Q/2B1N3/3P4/PPP2PPP/R1B1K2R w KQkq - 4 10,d5c7 d8c7 h5f7 c7f7 c4f7 e8f7,740,104,85,40,advantage hangingPiece long opening,https://lichess.org/ODCQ5Bpw#19
SP42E,r1b1kbnr/ppp2ppp/2n5/4p3/Q1B3q1/2P2N2/PP1P1PPP/RNBK3R w kq - 4 8,c4f7 e8f7 a4g4 c8g4,693,90,94,540,advantage hangingPiece opening short,https://lichess.org/zKeJUBf8#15
T091O,rnbqk2r/pppp1ppp/3b1n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR w KQkq - 1 4,c4f7 e8f7 d4e5 d6e5,779,80,74,138,advantage hangingPiece opening short,https://lichess.org/IGuKaXAZ#7
TECHg,rn1q1rk1/ppp2ppp/8/2b1P3/5Bb1/3B1N2/PPP3PP/R2QK2R w KQ - 5 10,d3h7 g8h7 d1d8 f8d8,651,95,18,58,advantage hangingPiece opening short,https://lichess.org/onfgW2BO#19
xs3x3,r2qkbnr/pp2pppp/8/3pP3/b2P4/PnPB4/5PPP/R1BQK1NR w KQkq - 0 10,d1b3 a4b3 d3b5 d8d7 b5d7 e8d7,702,100,86,659,crushing hangingPiece long master opening,https://lichess.org/bfngNP0d#19
Tp8Es,2kr1b1r/Qpp1n1pp/2q1bp2/3p4/2n3P1/P1N3BP/1PP1PPB1/R3K1NR w KQ - 3 14,c3b5 c6b5 a7a8 c8d7 a8d8 d7d8,771,90,86,345,advantage hangingPiece long opening,https://lichess.org/Gwgiv7Ko#27
Twary,N2k1bnr/pp2pppp/2n5/5b2/P3q1P1/2P1P2P/3P1P2/R1BQKB1R w KQ - 1 13,f1g2 e4g2 g4f5 g2h1,737,85,79,165,crushing hangingPiece opening short,https://lichess.org/gRyn2m8v#25
UTWn6,r1bq1rk1/pp1n1ppp/5b2/3p4/3p1B2/3B1N2/PPP2PPP/R2Q1RK1 w - - 0 11,f3d4 f6d4 d3h7 g8h7,728,95,90,1069,advantage hangingPiece master opening short,https://lichess.org/yUIK4zqe#21
V3xIG,rn2k2r/pppb1ppp/1b2pn2/8/2Q1P3/2Pq1NP1/PP1N1PBP/R1B1K2R b KQkq - 4 10,b6f2 e1f2 d3c4 d2c4,790,87,78,108,advantage hangingPiece opening short,https://lichess.org/jitQupkb/black#20
VMNnz,rnbqk2r/pp1p1ppp/2p2n2/2b1p3/2B1P3/P1N4P/1PPP1PP1/R1BQK1NR b KQkq - 0 5,c5f2 e1f2 f6e4 c3e4,734,89,73,90,advantage hangingPiece opening short,https://lichess.org/VdNbGlow/black#10
VXxEV,r3kbnr/p2q1ppp/4p3/1Q3N2/2n5/4P3/PP3PPP/RNB1K2R w KQkq - 2 11,f5g7 f8g7 b5d7 e8d7,743,88,89,289,advantage hangingPiece opening short,https://lichess.org/ek1NuAMM#21
VzIsh,r1bq1rk1/pp3ppp/2np4/3pP3/1b1P4/3B1N2/PP1B1PPP/R2QK2R w KQ - 0 11,d3h7 g8h7 d2b4 c6b4,631,89,81,529,advantage hangingPiece opening short,https://lichess.org/JCet0I63#21
WWcQR,r1bqkbnr/p1pp1pp1/1pn4p/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5,c4f7 e8f7 f3e5 c6e5,642,99,76,366,advantage hangingPiece opening short,https://lichess.org/THw6bJeX#9
WY66t,r1bqkb1r/ppp2pp1/2n4p/4P3/2B1p3/5N2/PPP2PPP/R1BQK2R w KQkq - 0 8,c4f7 e8f7 d1d8 c6d8,674,100,88,663,crushing hangingPiece opening short,https://lichess.org/5suSiqAJ#15
WYRkX,r1bqkbnr/ppp2ppp/3p4/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5,c4f7 e8f7 f3d4 e5d4,672,93,81,229,advantage hangingPiece opening short,https://lichess.org/pFy3TWMR#9
Wd10Q,rnbqk2r/pp3ppp/5n2/3Bb3/8/6P1/PPP2P1P/RNBQK1NR w KQkq - 0 8,d5f7 e8f7 d1d8 h8d8,722,100,86,40,advantage hangingPiece opening short,https://lichess.org/R7GDNQC6#15
Wh5SI,r1bqkb1r/pp3ppp/1nn5/4P3/2B5/5N2/PP3PPP/RNBQK2R w KQkq - 1 9,c4f7 e8f7 d1d8 c6d8,709,94,74,168,advantage hangingPiece opening short,https://lichess.org/PLsGpmQD#17
WmjB3,r1bqk2r/pppp3p/2n2np1/2b1p1B1/4P3/5B2/PPP2PPP/RN1QK1NR b KQkq - 3 8,c5f2 e1f2 f6e4 f3e4,615,84,95,498,advantage hangingPiece opening short,https://lichess.org/hiljOrTV/black#16
WsR49,r2q1rk1/pb1nbppp/1p2p3/3pN3/3P3B/2PB4/PP3PPP/R2QK2R w KQ - 1 14,d3h7 g8h7 h4e7 d8e7 e5d7 e7d7,624,86,88,122,advantage hangingPiece long opening,https://lichess.org/3oNWFsy0#27
XVSgg,r3k1nr/pppnqppp/3bb3/1B6/8/5N2/PPPPQPPP/RNB1K2R w KQkq - 6 7,f3g5 e7g5 b5d7 e8d7,735,98,89,778,crushing hangingPiece master opening short,https://lichess.org/fymiBxdX#13
XnRjq,r1bqk2r/p1p2ppp/2p2n2/2bp2B1/4P3/2PB4/PP3PPP/RN1QK2R b KQkq - 1 8,c5f2 e1f2 f6e4 d3e4,709,88,88,273,advantage hangingPiece opening short,https://lichess.org/9n1lALWS/black#16
YZoec,rnbqkbnr/pppppp1p/6p1/8/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 1 2,f8g7 b2g7,680,103,68,100,crushing hangingPiece oneMove opening,https://lichess.org/UCWOYVtA/black#4
Yfgn9,r2q1rk1/pppbn1pp/1bn1pp2/3pN3/3P1P2/2PBPR2/PP4PP/RNBQ2K1 w - - 0 10,d3h7 g8h7 f3h3 h7g8 e5d7 d8d7,730,100,60,80,advantage hangingPiece long opening,https://lichess.org/Wojmt56o#19
Ygy6f,r2qr1k1/ppp2ppp/2pbbn2/6B1/3P4/2PQ1B2/PP3PPP/RN3RK1 b - - 10 12,d6h2 g1h2 f6g4 f3g4,765,100,88,591,advantage hangingPiece opening short,https://lichess.org/n09mhLpG/black#24
ZFvEG,r3kbnr/pp1bpppp/2np4/1B6/1N2P3/4B3/PPP2PPP/R3K1NR w KQkq - 1 11,e1c1 c6b4 b5d7 e8d7,792,110,94,1221,crushing hangingPiece opening short,https://lichess.org/RQxANgtr#21
ZOC8q,r1bq1rk1/pp3ppp/8/2bQn3/8/2PB3P/PP3PP1/RNB1K2R w KQ - 0 13,d3h7 g8h7 d5d8 f8d8,623,94,80,133,crushing hangingPiece opening short,https://lichess.org/69NgKtT7#25
ZQWHd,r1bq1rk1/p1p2ppp/2pb1n2/6B1/2B1p3/8/PPP2PPP/RN1QR1K1 b - - 5 10,d6h2 g1h2 d8d1 e1d1,673,102,81,361,advantage hangingPiece opening short,https://lichess.org/dbm1pMPE/black#20
ZWn7w,rn1qk2r/pp3ppp/2pbpn2/5b2/4N3/1B1P4/PP2NPPP/R1BQ1RK1 b kq - 2 9,d6h2 g1h2 f5e4 d3e4,796,86,84,185,advantage hangingPiece opening short,https://lichess.org/Pmt5YgqX/black#18
Zgb1X,2rq1rk1/pb1n1ppp/1pnbp3/3pN3/3P1P2/P2BPQ2/1P1N2PP/R1B2RK1 w - - 1 13,d3h7 g8h7 f3h3 h7g8,778,106,94,989,crushing hangingPiece opening short,https://lichess.org/vyKVkeII#25
ZtW7D,r1bq1rk1/1p2nppp/p1p1n3/3pP1B1/8/2P5/PPB2PPP/RN1Q1RK1 w - - 2 14,c2h7 g8h7 g5e7 d8e7,746,102,76,179,advantage hangingPiece opening short,https://lichess.org/Xd0UWW67#27
aKIQ2,r1bqkb1r/ppp2pp1/1nn4p/4P3/2B5/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 8,c4f7 e8f7 d1d8 c6d8,682,94,88,1105,advantage hangingPiece opening short,https://lichess.org/mKpXEGAm#15
aMQMM,r2q1rk1/p1pbbppp/5n2/3p4/8/1PNB4/PBP2PPP/R2Q1RK1 w - - 0 12,c3d5 f6d5 d3h7 g8h7,750,92,56,106,advantage hangingPiece opening short,https://lichess.org/aFhzSGwj#23
aS3ca,r1bqk2r/pp1p1pp1/2n2n1p/4b3/2B1P3/P4N2/1P3PPP/RNBQ1RK1 w kq - 0 10,c4f7 e8f7 f3e5 c6e5,734,103,97,956,advantage hangingPiece opening short,https://lichess.org/Xco68CmT#19
bLmvV,r1bqr1k1/2pp1ppp/pb6/np1Pn3/8/5N1P/PPB2PP1/RNBQ1RK1 w - - 0 14,c2h7 g8h7 f3e5 e8e5,709,108,94,342,crushing hangingPiece opening short,https://lichess.org/AukOszhD#27
bPOMx,r1bqkb1r/1ppn1ppp/p1n5/1N1QP3/5B2/8/PPP1PPPP/R3KBNR w KQkq - 0 7,b5c7 d8c7 d5f7 e8f7,617,93,83,172,advantage hangingPiece opening short,https://lichess.org/BedYCOBg#13
c4aLW,r2q1rk1/1b2bppp/p3p3/3n4/Pp1BB3/2P5/1P1N1PPP/R2QR1K1 w - - 2 15,e4h7 g8h7 d1h5 h7g8 d4g7 g8g7,684,97,75,305,advantage hangingPiece long opening,https://lichess.org/UvcAezk5#29
cdgXX,r2qnrk1/pppbn1pp/1b3p2/3PN1B1/8/2NB4/PP3PPP/R2Q1RK1 w - - 0 14,d3h7 g8h7 e5d7 d8d7,721,122,5,27,advantage hangingPiece opening short,https://lichess.org/IMDcPhyF#27
cfsmG,rnb1k2r/pp2qpp1/2p3np/3pP3/2BP3P/2P1BN2/P1P3P1/1R1QK2R w Kkq d6 0 13,e5d6 e7e3 d1e2 e3e2,738,95,86,708,advantage hangingPiece opening short,https://lichess.org/wueYmpMb#25
coEQD,r1bq1rk1/3n1ppp/p3pn2/1pb5/8/1PN1PN2/P3BPPP/R1BQ1RK1 w - - 0 12,f3e5 d7e5 d1d8 f8d8,726,97,67,130,advantage hangingPiece opening short,https://lichess.org/g71HgtVr#23
dAioy,rnbq1rk1/pp2bppp/2p1pn2/6B1/2BP4/2N2N2/PPP2PPP/R2Q1RK1 w - - 0 9,c3e4 f6e4 g5e7 d8e7,798,106,96,1244,crushing hangingPiece opening short,https://lichess.org/nssOxAyl#17
dZvYL,r2k1b1r/p1p1pppp/2p5/7q/6n1/2N2N2/PPPP1PP1/R1BQ1RK1 w - - 0 10,f3h4 h5h4 d1g4 h4g4,795,80,100,341,advantage hangingPiece opening short,https://lichess.org/SyiabeNA#19
dbN3s,r1bqkbnr/ppp2ppp/3p4/4p3/2BnP3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5,c4f7 e8f7 f3d4 e5d4,782,91,86,150,advantage hangingPiece opening short,https://lichess.org/8KZnsv47#9
dnd4F,r1bqkbnr/ppp2ppp/3p4/4p3/2BnP3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 5,c4f7 e8f7 f3d4 e5d4,662,110,95,1091,advantage hangingPiece opening short,https://lichess.org/Bi4kFs2W#9
dpiFi,r1bqk1nr/pp4pp/2pb1pn1/4p3/4P3/2N1BN2/PPP2PPP/R2QKB1R w KQkq - 2 9,e3c5 d6c5 d1d8 e8d8,726,99,81,472,advantage hangingPiece opening short,https://lichess.org/jGyuOQaC#17
e5R39,2rq1rk1/pp1nb1pp/4pp2/1b1pN3/1n1P1B2/4PN2/PP3PPP/1BRQR1K1 w - - 0 15,b1h7 g8h7 c1c8 d8c8,606,100,81,420,advantage hangingPiece opening short,https://lichess.org/At4kjEwz#29
eDvBO,rnbq1k1r/p2p2pp/2pb1n2/1p6/8/3Q4/PPPPBPPP/RNB2RK1 b - - 1 10,c8a6 d3d6 d8e7 d6e7,762,84,88,188,advantage hangingPiece opening short,https://lichess.org/gHSWvrr5/black#20
eVaPg,rnbqk1nr/pppp1pp1/3b3p/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4,c4f7 e8f7 f3e5 d6e5,700,87,92,1381,advantage hangingPiece opening short,https://lichess.org/0ugfGwGl#7
eZwiY,r2q1rk1/1pp1n1pp/p2p1p2/2b1pP2/3nP1P1/2NPB2P/PPP5/R2QKB1R b KQ - 0 12,d4f3 d1f3 c5e3 f3e3,720,84,84,152,advantage hangingPiece opening short,https://lichess.org/PLmPpbeJ/black#24
eqLPc,rn2k1nr/ppq1bppp/2p5/4p3/2B1P1b1/2N2N2/PPP2PPP/R1BQK2R w KQkq - 4 8,c4f7 e8f7 f3e5 c7e5,785,112,95,763,advantage hangingPiece opening short,https://lichess.org/3IjkO6vl#15
evxqn,r3kbnr/ppp1pppp/4q3/8/3n2b1/2N2NP1/PPPP1PBP/R1BQ1K1R b kq - 6 9,e6f5 f3d4 g4d1 d4f5,756,84,84,519,advantage hangingPiece master opening short,https://lichess.org/wBCaT0td/black#18
ex21T,rnbqk1nr/pp3ppp/4p3/8/2Pb4/2N2N2/PP3PPP/R1BQKB1R b KQkq - 1 7,d4f2 e1f2 d8d1 c3d1,653,97,81,826,advantage hangingPiece opening short,https://lichess.org/T9Jt25Oe/black#14
ezJcL,r3kbnr/pp1bpppp/2n5/1B6/3N4/8/PPP2PPP/RNB1K2R w KQkq - 1 8,c1f4 c6d4 b5d7 e8d7,747,107,96,627,crushing hangingPiece opening short,https://lichess.org/N4KHqDlz#15
f94I6,r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2P1P3/P2P4/1P2BPPP/RN1QK1NR b KQkq - 1 6,c5f2 e1f2 f6e4 d3e4,783,78,87,518,advantage hangingPiece opening short,https://lichess.org/IAEYKY4B/black#12
fFq9Y,r2qk2r/ppp1bppp/2n5/4p3/2B3b1/2PP1N2/P1P2PPP/R1BQ1RK1 w kq - 1 9,c4f7 e8f7 f3g5 e7g5,766,112,76,56,advantage hangingPiece opening short,https://lichess.org/6YfwThLC#17
fOK88,r1bqkb1r/ppp2pp1/2n1p3/3pP3/3P1PPn/2N1BN2/PPP5/R2QKB1R b KQkq - 0 11,h4g2 f1g2 h8h1 g2h1,687,95,81,400,crushing hangingPiece opening short,https://lichess.org/rQrg1dHX/black#22
fPxtR,r1b1k1nr/ppqp1ppp/4p3/2b5/2Q1P3/2N5/PPP1BPPP/R1B1K2R b KQkq - 2 8,c5f2 e1f2 c7c4 e2c4,635,99,83,209,crushing hangingPiece opening short,https://lichess.org/pRDke1eV/black#16
fpqbX,r1bqkb1r/1pp2pp1/p1n2n1p/4p3/2B1P3/2N2N2/PPP2PPP/R1BQK2R w KQkq - 0 8,c4f7 e8f7 d1d8 c6d8,774,92,87,1180,advantage hangingPiece opening short,https://lichess.org/buYGX1HK#15
gwdbu,r3kb1r/pp1bnppp/2n5/1B1p4/3N4/8/PPP2PPP/RNB1K2R w KQkq - 1 10,e1g1 c6d4 b5d7 e8d7,777,109,93,1145,crushing hangingPiece opening short,https://lichess.org/AjhmdVzt#19
hHPxx,r1bqr1k1/pppp1ppp/8/n2Pb3/3P4/3B4/PPP2PPP/R1BQR1K1 b - - 1 11,e5h2 g1h2 e8e1 d1e1,629,100,77,267,advantage hangingPiece opening short,https://lichess.org/7ACLz3oF/black#22
hKBRe,r1bqkb1r/ppp2pp1/2n2n1p/4p3/2B1P3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 7,c4f7 e8f7 d1d8 c6d8,615,93,81,331,advantage hangingPiece opening short,https://lichess.org/fSq8jatB#13
xFDN5,r1bqk2r/1pp1np2/p6p/2P1p3/2B1n1p1/2P4P/PP2NPP1/R1BQ1RK1 w kq - 0 13,c4f7 e8f7 d1d8 h8d8,743,114,67,35,advantage hangingPiece opening short,https://lichess.org/jmYuAK9c#25
hefnc,r2q1rk1/pb3ppp/1pnbp3/2p5/3PB3/2P2NB1/PP3PPP/R2QK2R w KQ - 1 12,e4h7 g8h7 g3d6 d8d6,658,91,84,483,advantage hangingPiece master opening short,https://lichess.org/C5PnuibG#23
hfN8T,rnbq1rk1/1p1p1ppp/7n/p1PBp3/8/4PQ1N/P1PP1PPP/R1B1K2R w KQ - 0 10,h3g5 d8g5,689,93,87,681,advantage hangingPiece oneMove opening,https://lichess.org/J04Aajlu#19
hm8Jm,rnbqk2r/pppp1ppp/5n2/2b1p1B1/2B1P3/3P4/PPP2PPP/RN1QK1NR b KQkq - 2 4,c5f2 e1f2 f6e4 d3e4,776,91,86,278,advantage hangingPiece opening short,https://lichess.org/3EHEtIvC/black#8
hwh60,r1b1k1nr/pp3ppp/1q2p3/2bpP3/3n4/2NQB3/PP2NPPP/R3KB1R b KQkq - 3 10,d4c2 d3c2 c5e3 f2e3,749,98,83,454,advantage hangingPiece opening short,https://lichess.org/U13GtFo2/black#20
iKl7S,1rb1kbnr/3n1ppp/8/4p3/p2p4/P2P4/1B1NPPPP/1R2KBNR b Kk - 2 13,f8a3 b2a3 b8b1 d2b1,791,83,96,449,advantage hangingPiece opening short,https://lichess.org/xbYOAi7y/black#26
iivAM,rnbqk1nr/1p3ppp/4p3/pPb5/2p1P3/2N5/P4PPP/R1BQKBNR b KQkq - 0 7,c5f2 e1f2 d8d1 c3d1,741,90,90,385,advantage hangingPiece opening short,https://lichess.org/rSTSFXvC/black#14
iozPV,rn2r1k1/ppqb1ppp/3b4/2p5/3pBN2/3P2P1/PPP2P1P/R1BQR1K1 w - - 3 15,e4h7 g8h7 d1h5 h7g8 e1e8 d7e8,608,99,93,687,advantage hangingPiece long opening,https://lichess.org/XnvfJKKl#29
jHAyq,r2qk1nr/pbpn2bp/1p1p2p1/1B1Pp3/4Pp2/2N2N2/PPP1QPPP/R1B1K2R w KQkq - 2 10,f3g5 d8g5 b5d7 e8d7,774,111,96,1142,advantage hangingPiece opening short,https://lichess.org/FKoqMmk2#19
kEqTF,r1bqk2r/p1pn1ppp/1p2pn2/6B1/2PPN3/8/PP1b1PPP/R2QKB1R w KQkq - 0 9,d1d2 f6e4 g5d8 e4d2,711,109,93,338,advantage hangingPiece opening short,https://lichess.org/Dg0noUC8#17
kJxQN,rn1qk2r/pp3ppp/5n2/2bB4/8/8/PPP2PPP/R1BQK1NR w KQkq - 1 9,d5f7 e8f7 d1d8 h8d8,778,79,100,257,advantage hangingPiece opening short,https://lichess.org/eALIubK5#17
kTd0S,r1bqk1nr/pp2bppp/2p5/3B4/3QP3/8/PPP2PPP/RNB1K2R w KQkq - 0 8,d5f7 e8f7 d4d8 e7d8,648,90,98,470,advantage hangingPiece opening short,https://lichess.org/QN9nKvpo#15
kYK7e,r1bqkb1r/ppp2p2/2n4p/4p3/2B5/2N1PN2/PP3PPP/R2QK2R w KQkq - 0 10,c4f7 e8f7 d1d8 c6d8,790,96,93,285,advantage hangingPiece opening short,https://lichess.org/octiRLXJ#19
kbYyu,r1bqk2r/pp1p2pp/4p3/n7/1bB5/5N2/PP3PPP/R1BQ1RK1 w kq - 0 11,c4e6 d7e6 d1d8 e8d8,791,94,73,204,advantage hangingPiece opening short,https://lichess.org/jnUpFcmY#21
kdYPG,r1bqk1nr/ppp2ppp/2n5/2b1P3/1PP5/P3P3/3B2PP/RN1QKBNR b KQkq - 0 8,c5e3 d2e3 d8d1 e1d1,696,91,77,255,advantage hangingPiece opening short,https://lichess.org/ix0w0MJG/black#16
lKZnL,r1b2rk1/1pq2ppp/p1nbp3/3p3n/3P4/2PB1NB1/PP1N1PPP/R2QR1K1 w - - 2 12,d3h7 g8h7 g3d6 c7d6,779,102,94,330,advantage hangingPiece opening short,https://lichess.org/5GEE45Un#23
yoawY,r2qk2r/1ppb1pp1/p3p3/3nP1N1/3n3b/P1NB4/1P1B1PP1/R2QK2R b KQkq - 1 15,h4f2 e1f2 h8h1 d1h1,669,97,80,450,advantage hangingPiece opening short,https://lichess.org/dImuixve/black#30
lcs1a,rn1q1rk1/4bppp/bpp1pn2/p3N1B1/P1PPp3/1PN5/4BPPP/2RQ1RK1 w - - 8 13,c3e4 f6e4 g5e7 d8e7,746,86,74,223,advantage hangingPiece opening short,https://lichess.org/1nikY2ml#25
yspvh,rnbq1r1k/ppp3pp/3n1p2/8/2B5/2N1PN2/PPP2PPP/R2QK2R w KQ - 3 11,e1g1 d6c4 d1d8 f8d8,744,79,100,584,advantage hangingPiece opening short,https://lichess.org/YiU3DHEv#21
lp009,rnb1k1r1/ppp1bp1p/3p4/P6q/1P2P1n1/2B2QPN/4K2P/RN3B1R b q - 2 15,g4e5 f3h5 c8g4 h5g4,761,83,78,435,advantage hangingPiece opening short,https://lichess.org/NP6JcSCb/black#30
lw6WK,rn3rk1/1p2bppp/p3b3/3qp3/8/1N1B3P/PPP2PP1/R1BQ1R1K w - - 0 13,d3h7 g8h7 d1d5 e6d5,718,96,70,206,crushing hangingPiece opening short,https://lichess.org/wLVmjqDR#25
m5KUz,1rbqk2r/3pbpp1/pp1p1nnp/1N1Bp3/4P3/4BN2/PPP2PPP/R2Q1RK1 w k - 0 12,b5d6 e7d6 d5f7 e8f7,723,92,86,748,advantage hangingPiece opening short,https://lichess.org/PywoIw5t#23
mLeog,rnb1r1k1/ppp1qppp/3b4/8/3P4/2P1BN2/P3BPPP/R2QK2R b KQ - 6 12,d6f4 e3f4 e7e2 d1e2 e8e2 e1e2,727,101,89,640,crushing hangingPiece long master opening,https://lichess.org/0lz6qHlq/black#24
n0XbA,r1bqkbnr/ppp3pp/2n5/3p1P2/4p3/2N2N2/PPPPQPPP/R1B1KB1R w KQkq - 0 6,f3d4 c6d4,682,92,84,497,advantage hangingPiece oneMove opening,https://lichess.org/1PQ3JEdi#11
zsWIl,1rbq1rk1/p2nbppp/1pBp1n2/2pP2B1/8/2N2N2/PPP2PPP/R2Q1RK1 w - - 10 11,c3e4 f6e4 g5e7 d8e7,776,94,83,299,advantage hangingPiece opening short,https://lichess.org/3L08UDfi#21
nr5Ta,r1b1kb1r/pp1pqppp/8/2p1Q3/2B1nB2/8/PPP2PPP/RN2K2R w KQkq - 0 9,c4f7 e8f7,769,157,33,21,advantage hangingPiece oneMove opening,https://lichess.org/iAJZWsfc#17
oBH4s,rnb2rk1/pp3ppp/2p5/8/3bP1Pq/4B3/PP2QN1P/RN2K2R b KQ - 1 14,d4b2 e2b2,747,100,78,91,advantage hangingPiece oneMove opening,https://lichess.org/tqzqJMa0/black#28
olDgl,r2q1rk1/ppp1b1pp/2n2n2/3bp3/4P3/6P1/PP1NNPBP/R1BQ1RK1 b - - 0 11,d5c4 d2c4 d8d1 f1d1,743,97,85,399,advantage hangingPiece opening short,https://lichess.org/MHTKqb8P/black#22
p51Nq,rnb2rk1/pp3ppp/1n6/2pq4/8/2PB1N2/P4PPP/R1BQ1RK1 w - - 0 12,d3h7 g8h7 d1d5 b6d5,718,91,88,941,advantage hangingPiece opening short,https://lichess.org/dqST8r2l#23
pFpzq,rnbqr1k1/ppp2ppp/3b1n2/8/2B5/8/PB2NPPP/RN1QR1K1 b - - 5 10,d6h2 g1h2 d8d1 e1d1,660,98,94,210,advantage hangingPiece opening short,https://lichess.org/x4n87p9Y/black#20
pHKTX,r2qr1k1/pp1n1ppp/2pb4/7b/3PB3/5N1P/PP3PP1/R1BQR1K1 w - - 1 14,e4h7 g8h7 e1e8 d8e8,785,147,31,17,advantage hangingPiece opening short,https://lichess.org/otX9hTNH#27
pssz1,r1b1k2r/p2p1pp1/1qp2n1p/2b5/2B1P3/4B3/PP3PPP/RN1Q1RK1 w kq - 0 11,c4f7 e8f7 e3c5 b6c5,680,96,98,456,advantage hangingPiece opening short,https://lichess.org/zL96wQS9#21
qfBNc,r2q1rk1/pbp1b1pp/5n2/3p2B1/6N1/2N5/PPP2PPP/R2Q1RK1 w - - 6 13,c3e2 f6g4 g5e7 d8e7,674,85,80,670,crushing hangingPiece opening short,https://lichess.org/3THRLAT4#25
xJvwE,rnbqk2r/ppp2ppp/3p1n2/2bPp3/4P3/3B3P/PPP2PP1/RNBQK1NR b KQkq - 0 5,c5f2 e1f2 f6e4 d3e4,732,91,67,94,advantage hangingPiece opening short,https://lichess.org/OG5MReVO/black#10
rmYli,rnbqkbnr/ppp3pp/3p4/4p3/2P5/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 5,f3e5 d6e5 d1d8 e8d8,695,97,97,249,advantage hangingPiece opening short,https://lichess.org/SW7ROA86#9
sdAHo,rnbq1rk1/ppp2ppp/3p1b2/3P4/3N4/3B4/PPP2PPP/R1BQK2R w KQ - 3 9,e1g1 f6d4 d3h7 g8h7,702,89,97,1372,advantage hangingPiece opening short,https://lichess.org/5HridNsd#17
sqG0h,r1b2rk1/1pq2ppp/p2b4/3Pn3/8/P4N2/2B2PPP/R1BQ1RK1 w - - 1 17,c2h7 g8h7 f3e5 d6e5,630,98,82,511,advantage hangingPiece master masterVsMaster opening short,https://lichess.org/4yTGdsXt#33
szVhL,r2q1rk1/pb1n2pp/2nbpp2/1p1pN3/2pP1P2/2P1PN2/PPB1Q1PP/R1B2RK1 w - - 0 13,c2h7 g8h7 e5c6 b7c6,695,101,88,1003,advantage hangingPiece opening short,https://lichess.org/wVOEQobN#25
tHlXj,rnbqk2r/ppp1ppbp/3p1np1/8/2B1PP2/5N2/PPPP2PP/RNBQK2R w KQkq - 2 5,c4f7 e8f7,780,118,27,34,advantage hangingPiece oneMove opening,https://lichess.org/umBszTdQ#9
tlXtB,r1br2k1/pp2npbp/6p1/q3p1B1/1n6/P1N1P3/1PQ2PPP/R3KBNR w KQ - 3 14,a3b4 a5a1 c2b1 a1b1,781,94,78,453,advantage hangingPiece opening short,https://lichess.org/fU0B77Dd#27
u9O3t,rn1q1rk1/p5pp/1pbb1p2/8/3PBB2/8/PPP2PPP/R2QR1K1 w - - 0 15,e4h7 g8h7 f4d6 d8d6,691,93,81,334,crushing hangingPiece opening short,https://lichess.org/dDuYX8Wz#29
uP4gk,rnbq1rk1/ppp2ppp/5n2/2bPp3/2B1P3/2N4P/PP3PP1/R1BQK1NR b KQ - 0 7,c5f2 e1f2 f6e4 c3e4,761,94,74,303,advantage hangingPiece opening short,https://lichess.org/ia0Pd8w7/black#14
vBIpe,r1bqk1nr/ppp1bppp/2np4/8/2BNP3/8/PPP2PPP/RNBQK2R w KQkq - 0 6,c4f7 e8f7 d4c6 b7c6,775,80,86,78,advantage hangingPiece opening short,https://lichess.org/LPX72pKI#11
vISie,rn1qk2r/pp3p1p/2pb1np1/4p3/2B1P1b1/2N2N2/PPPP2PP/R1BQ1RK1 w kq - 4 9,c4f7 e8f7 f3e5 d6e5,681,96,89,391,advantage hangingPiece opening short,https://lichess.org/Z1BWBfhd#17
vo9b5,rn1q1rk1/ppp2ppp/8/2bn4/3P2b1/1B6/PP2NPPP/RNBQ1RK1 b - - 0 9,c5d6 b3d5 g4e2 d1e2 d6h2 g1h2,790,97,94,815,crushing hangingPiece long opening,https://lichess.org/qbILgo0W/black#18
vu5Bs,rnbq1rk1/ppp3pp/3p1n2/2bPp1B1/4B3/2N2N2/PPP2PPP/R2QK2R b KQ - 4 8,c5f2 e1f2 f6e4 c3e4,781,100,67,94,advantage hangingPiece opening short,https://lichess.org/uz92Szyw/black#16
wk7Ih,r1bqkbnr/pppn2pp/8/4pp2/2P5/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 6,f3e5 d7e5 d1d8 e8d8,694,78,100,642,advantage hangingPiece opening short,https://lichess.org/eKg9uRRC#11
wx9un,r2q1rk1/1p1b1ppp/p1n1p3/2PpP3/1P5n/P2B1N2/1B3PPP/2RQK2R w K - 3 16,d3h7 g8h7 f3h4 d8h4,680,92,90,148,advantage hangingPiece opening short,https://lichess.org/u12SfrXg#31`,
  },
  {
    id: 'pin', color: '#F57C00', title: 'Связка', short: 'Связка',
    // task_middlegamepin800.csv, rating up to 800
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
0NbkQ,r2q1rk1/p3bpp1/1p1p3p/3Np2P/4P3/4n3/PPPQ4/2KR1B1R w - - 0 17,d2e3 e7g5 c1b1 g5e3,777,136,88,41,advantage middlegame pin short,https://lichess.org/s9BS2K19#33
0Pb0s,3qk2r/Q2n1p1p/4pp2/1B1p1b2/1b1P4/2N1PN2/Pr3PPP/R3K2R w KQk - 2 13,a7d7 d8d7 b5d7 e8d7,621,96,70,93,advantage middlegame pin short,https://lichess.org/qmhdfdtB#25
0UP3q,8/1pp3bk/1n4pp/p7/3pP1q1/P4NP1/1P3KN1/R6R b - - 3 30,g4e4 f3g5 h7g8 g5e4,791,85,96,317,crushing master middlegame pin short,https://lichess.org/HGS51Uto/black#60
0UWQK,6k1/ppp3pp/7r/5P2/P3q1N1/1P6/3Pr1RP/2B3RK b - - 2 35,h6h4 g4f6 g8f7 f6e4,792,83,88,251,advantage master middlegame pin short,https://lichess.org/VTmOSLIN/black#70
0hm14,r2q1r1k/1pp1bppP/p2p4/7P/4P1b1/2N1QP2/PPP5/2KR2NR w - - 1 19,f3g4 e7g5 e3g5 d8g5,796,91,95,203,advantage middlegame pin short,https://lichess.org/DbeFogsa#37
0xPF7,3r3r/4b1kp/pp4p1/3R4/1P6/P3pP1b/2P1B1NP/3R2K1 b - - 2 33,d8d7 d5d7 h3d7 d1d7,764,105,95,1413,crushing middlegame pin short,https://lichess.org/wKp8nYac/black#66
14NRA,r4rk1/1pp2q2/p2p2np/4p3/8/1P1PRN2/1PP2PK1/R6Q b - - 1 20,g8h7 f3g5 h7g7 g5f7,779,88,94,455,advantage middlegame pin short,https://lichess.org/YgBnFGpo/black#40
1ChBl,3r2k1/1pp2ppp/5n2/p7/2P1p3/bPNrP1P1/P1R2PBP/R2bB1K1 w - - 8 21,c3d1 d3d1 a1d1 d8d1,640,86,81,248,advantage middlegame pin short,https://lichess.org/LunphRlz#41
1Q9p1,2k4r/pppr4/5p1b/3Pp3/3P2pp/P4p1P/1PPQ2PB/2KR3R w - - 0 20,h2f4 h6f4 d2f4 e5f4,722,198,43,12,advantage middlegame pin short,https://lichess.org/JiPd7c7f#39
1ZsS6,r1bq1rk1/ppp1bppp/3p4/3P4/2P1Pp2/2N2P2/PP1Q2PP/2KR1B1R w - - 0 13,d2f4 e7g5 f4g5 d8g5,780,87,74,93,advantage middlegame pin short,https://lichess.org/uKLOgzJv#25
2MMZS,r2q1rk1/5ppp/p4b2/1ppP4/R3PN2/4Q2P/6PN/5RK1 w - - 0 26,a4a2 f6d4 e3d4 c5d4,736,86,80,214,advantage middlegame pin short,https://lichess.org/pxxA3Lf4#51
2MdDl,2kr3r/ppp3pp/2n1q3/4pp2/4P3/3P1B2/PPP3PP/R2Q1RK1 b - - 0 14,f5f4 f3g4 e6g4 d1g4,773,78,100,242,advantage master middlegame pin short,https://lichess.org/ajp8uou3/black#28
2U0RO,2krr3/pp1qbp1p/2p3p1/8/3P4/4RPB1/PP2QP2/1K2R3 b - - 2 22,e7f6 e3e8 d7e8 e2e8 d8e8 e1e8,642,102,85,203,crushing long middlegame pin,https://lichess.org/7BxgnIFs/black#44
3TzjM,5rr1/p4k2/2p2nb1/3pB3/6Q1/P1NB4/5P2/6K1 w - - 6 39,d3g6 g8g6 g4g6 f7g6,783,80,85,244,advantage middlegame pin short,https://lichess.org/OfIN2UYc#77
3nSNv,r4k1r/p4ppp/1q2p1b1/2Npn3/3N4/4P3/PPP3PP/R2Q1RK1 b - - 2 17,b6c5 d4e6 f8g8 e6c5,749,79,98,1014,advantage middlegame pin short,https://lichess.org/mt8Zbt48/black#34
3wrRf,r2qk1nr/2pn1ppp/3b4/pB1Pp3/P3P3/2Q3N1/5PPP/R1B1K2R w KQkq - 2 14,b5c6 d6b4 c1d2 b4c3,735,93,95,1016,advantage middlegame pin short,https://lichess.org/gF9uc5se#27
5019l,2r2rk1/3q1ppp/p1n1p3/1p2b3/4NP2/1BPp2Q1/PP4PP/R4RK1 b - - 0 18,e5b8 e4f6 g8h8 f6d7,797,79,69,70,crushing middlegame pin short,https://lichess.org/WdyHxsHY/black#36
56NEf,r1bq1rk1/2p1n1b1/1p1p4/1NnPp1pp/p1P1Pp2/5P1P/PPQNBBP1/K2R3R w - - 0 18,d2b1 c5b3 c2b3 a4b3,724,83,87,434,advantage master middlegame pin short,https://lichess.org/Q6Ehhw3A#35
5Rg9p,1r2r1k1/b4pp1/p4n1B/2p1qP2/3p4/7P/P1B3R1/1R1Q2K1 b - - 0 33,e5e1 d1e1 e8e1 b1e1,600,100,72,526,crushing middlegame pin short,https://lichess.org/SrITudiF/black#66
5SxKN,5rkr/4R1p1/3B4/4P1q1/p2P3p/8/P4QP1/4RK2 w - - 1 32,e7f7 f8f7 f2f7 g8f7,765,80,100,485,crushing middlegame pin short,https://lichess.org/En1sJxTo#63
5aHoY,5r2/pp1k1qp1/2p3p1/3pQ2r/2P4P/3PRBP1/PP3K2/R7 w - - 5 26,e5e7 f7e7 e3e7 d7e7,735,89,83,87,advantage middlegame pin short,https://lichess.org/2x3TxP83#51
5y4EB,3qk2r/Q2n1p1p/4pp2/1B1p1b2/1b1P4/2N1P3/Pr3PPP/R3K1NR w KQk - 2 14,b5d7 d8d7 a7d7 e8d7,734,92,83,192,advantage middlegame pin short,https://lichess.org/g8pIfRG5#27
6DlWf,2q2b1r/pp1k1p1p/2n1p1p1/3p4/3n1B2/2P2B1P/PP1Q1PP1/R3K2R w KQ - 0 15,c3d4 f8b4 d2b4 c6b4,772,89,76,50,advantage middlegame pin short,https://lichess.org/c3SHJjdC#29
6d9mq,1r1r1k2/7Q/1b3q2/8/6B1/7P/PP3PP1/5RK1 b - - 2 35,b6f2 f1f2 f6f2 g1f2,738,84,44,381,crushing middlegame pin short,https://lichess.org/htyRA4lC/black#70
7ZLb2,5rk1/Q4p1p/3p1p2/8/2rP4/4P1P1/P5BP/q1B2RK1 w - - 0 23,g2d5 c4c1 f1c1 a1c1,779,81,81,106,advantage middlegame pin short,https://lichess.org/UxEITvxD#45
7mVyQ,rn1q1rk1/1p2bppp/p2p4/3Pp3/8/1N2Q3/PPP2PPP/2KR1B1R w - - 1 13,f1d3 e7g5 e3g5 d8g5,778,87,95,240,advantage middlegame pin short,https://lichess.org/XVf3osuY#25
843FK,4kbr1/3b1p2/4p1P1/q2pPp1p/2pP1N2/1nN1B3/1P4QP/5RK1 w - - 1 24,g6f7 e8f7 g2g8 f7g8,708,116,66,77,crushing middlegame pin short,https://lichess.org/SBs8JD0n#47
8C76g,5r2/pkbb4/1pp5/1P2p3/P2pQ1q1/6Pn/2PB1P1P/RN3R1K w - - 1 31,b5c6 d7c6 e4c6 b7c6,710,79,86,109,crushing middlegame pin short,https://lichess.org/kHux5quO#61
8XQVJ,r1b3k1/pp3ppp/1q6/2bP4/3N1P2/3Pr2P/PP3QB1/R4RK1 w - - 0 20,f2e3 c5d4 e3d4 b6d4,762,97,86,377,crushing middlegame pin short,https://lichess.org/4BS3zZ0L#39
9V8GF,1qr1n1k1/rp2bpp1/pQN1p1p1/P1Pp4/3P4/R1P1P3/5PPP/1R4K1 b - - 0 24,b7c6 b6b8 c8b8 b1b8,691,87,76,74,advantage master masterVsMaster middlegame pin short,https://lichess.org/JiiBxiGw/black#48
9WxSg,2kr4/2q1b1p1/1B3pP1/p3p3/P3b3/7N/1PP2Q2/1K5R b - - 0 26,e4c2 f2c2 c7c2 b1c2,708,98,82,605,advantage master middlegame pin short,https://lichess.org/ymZ0rI5m/black#52
A9NS2,1r3r2/1ppn1ppk/p3p2p/7R/P2P4/1QPqPNP1/5PP1/3RK3 b - - 3 18,d3e4 f3g5 h7g6 g5e4,726,91,91,923,crushing middlegame pin short,https://lichess.org/28q2FSKC/black#36
AKULB,4r1k1/2p2pp1/1pq4p/p1b5/4r3/2P2NPP/PPQ2PK1/R3R3 w - - 4 23,a1d1 e4e1 d1e1 e8e1,794,90,96,131,crushing middlegame pin short,https://lichess.org/1ZRAaCFJ#45
BJdlJ,4r3/Q1R1nk1p/B2p1pp1/3P2q1/PP2P3/5P1b/6P1/2R3K1 w - - 0 36,c7e7 e8e7 a7e7 f7e7,711,92,100,810,advantage middlegame pin short,https://lichess.org/TwaLQ7yu#71
BZBV6,6r1/pk1b4/1p6/3pB1r1/6P1/P1pQ3B/2P2q2/R3R2K w - - 11 32,d3d5 d7c6 d5c6 b7c6,791,80,97,1240,crushing defensiveMove middlegame pin short,https://lichess.org/mUhurFrY#63
Ber70,1r3rk1/5R2/pp1p2pp/2pPb2q/P1P1P1b1/2NB3P/1P3QP1/R6K w - - 1 27,f7f8 b8f8 f2f8 g8f8,699,107,54,81,crushing middlegame pin short,https://lichess.org/5XdSia7S#53
BtDXE,r6k/pp3qb1/2b1p2p/4P3/7Q/1P4P1/P2R1P2/3R2K1 b - - 5 44,f7e8 d2d8 a8d8 d1d8 e8d8 h4d8,746,80,75,82,advantage long middlegame pin,https://lichess.org/eq6zLkIL/black#88
ByoTm,r7/1b1R1rkp/p3p1p1/1p6/4NPn1/1B4P1/PPP4P/5R1K w - - 1 22,d7f7 g7f7 h1g1 b7e4,738,77,82,106,advantage middlegame pin short,https://lichess.org/L9Sgc34K#43
CblZH,3q2k1/6bp/1pR2pp1/p2p1b2/B2P1P1N/1PQ3P1/P3r3/6K1 b - - 3 34,f5e4 c6c8 d8c8 c3c8,797,79,89,416,advantage middlegame pin short,https://lichess.org/ztF4KbWT/black#68
CuSOp,1rb4r/pp2bqpk/3pN2p/5P1n/3Pp3/B1P4Q/P1P3PP/4RRK1 b - - 5 19,h5f6 e6g5 h7g8 g5f7,796,94,82,108,crushing master middlegame pin short,https://lichess.org/oo2tUBVl/black#38
DHSao,r3kb1r/pp1q4/2pp1p1p/3P2p1/2B1PpRP/5P2/PPP1Q2K/R7 b kq - 0 18,c6c5 c4b5 e8c8 b5d7,785,87,79,97,crushing middlegame pin short,https://lichess.org/mUvBC2q4/black#36
DWP5r,2kr1r2/1bqp1pQp/p1p1p3/8/5P2/4BB2/PPP3P1/R4R1K w - - 3 18,g7h7 f8h8 h7h8 d8h8,773,90,100,40,advantage middlegame pin short,https://lichess.org/YYtMjvDb#35
Dhnh1,r2qk2r/1p2bppp/p2p4/2p5/4PnQ1/2N2P2/PPP3PP/2KR1B1R w kq - 0 13,g4f4 e7g5 f4g5 d8g5,742,93,93,437,advantage middlegame pin short,https://lichess.org/21CrSTWI#25
DurNn,2r2rk1/6p1/p1nRb2p/1p3p2/5B2/1PP3NP/2K2PP1/7R w - - 0 25,d6e6 c6d4 c2b2 d4e6,797,87,89,240,advantage middlegame pin short,https://lichess.org/vwid3zJl#49
EKNjK,8/1bR2rk1/p3rp1p/4PQp1/3p4/1P6/q2B2PP/4RK2 w - - 4 37,e5f6 e6f6 f5f6 g7f6 c7f7 f6f7,678,99,81,706,crushing long middlegame pin,https://lichess.org/D47k6Hlt#73
EgGS8,r1b2b1r/pp3kp1/2n1p2p/8/8/2Q5/PPP2PPP/R1B1K2R w KQ - 0 13,c1e3 f8b4 c3b4 c6b4,694,92,90,2148,advantage middlegame pin short,https://lichess.org/NwyjzYn1#25
FTqjX,2r2rk1/p5qp/2p1np2/4p3/2Rp4/3P1NP1/PP2QPKP/R7 w - - 6 28,f3h4 e6f4 g2f1 f4e2,758,80,99,541,crushing middlegame pin short,https://lichess.org/FYB6GYmI#55
FWBjS,r4rk1/ppp1q1pp/1b2R3/3n4/2BP4/1Q6/P4PPP/RN4K1 b - - 0 16,e7e6 c4d5 e6d5 b3d5,737,87,100,156,advantage middlegame pin short,https://lichess.org/5RVpdR0L/black#32
FmciQ,r1bq1r2/ppknbQ1R/2pp4/4P1P1/3P1B2/2N5/PPP3P1/R4K2 w - - 1 17,e5d6 e7d6 f4d6 c7d6,718,92,42,84,advantage middlegame pin short,https://lichess.org/AjCnL0bG#33
GHcdg,1qr4k/6bp/6p1/3Np3/4B3/6P1/2Q2P1P/4B1K1 w - - 3 33,c2b1 b8b1 e4b1 c8c1,796,78,70,281,advantage middlegame pin short,https://lichess.org/BNBxjpuN#65
GRZIL,2r2rk1/pp4pp/4p3/n1b2p2/4pB2/2Q1P2P/qPK1NPP1/R6R b - - 5 19,a2b3 c3b3 a5b3 c2b3,782,85,76,105,advantage middlegame pin short,https://lichess.org/JqN7m9jg/black#38
HIg53,r3k2r/ppp1npp1/2qpb2p/4N3/4P3/3B4/PPP1QPPP/R3K2R b KQkq - 3 12,d6e5 d3b5 e8c8 b5c6,736,85,70,149,advantage middlegame pin short,https://lichess.org/Bz4yrSmZ/black#24
HvRTl,1r3b1k/6pp/1q2bp2/p3p2N/P7/3Q1N1P/5PP1/3R2K1 b - - 3 30,b8d8 d3d8 b6d8 d1d8,678,102,81,364,crushing middlegame pin short,https://lichess.org/tNipK5Bq/black#60
IOUiL,2r3k1/6pp/4q3/1b1B4/pPr2P2/P5P1/1P1R3P/1K1R4 b - - 0 27,c4c1 d1c1 c8c1 b1c1,673,96,82,264,crushing middlegame pin short,https://lichess.org/PAAasRsk/black#54
IUpPR,2k2b1r/1p6/1pn1pp2/2p1p3/4P2P/2P2PR1/PP1rNB1P/1K2R3 b - - 3 21,h8h4 g3g8 h4h2 g8f8,615,93,84,247,advantage master middlegame pin short,https://lichess.org/wwtu90tt/black#42
IhA4B,r1b4r/p2k2p1/2p4p/n4N2/6n1/3P4/PPPKBqPP/R2Q2NR b - - 2 18,f2f5 e2g4 d7c7 g4f5,750,89,86,245,crushing middlegame pin short,https://lichess.org/IlLHFWEe/black#36
ItD4h,r1b2rk1/3n1ppp/pq2p3/1pbpP3/3B1P2/2N3P1/PPPQ2BP/R4RK1 w - - 2 14,d2f2 c5d4 f2d4 b6d4,627,85,76,131,crushing middlegame pin short,https://lichess.org/Wi5XaPuX#27
JR0gH,rq4k1/5pp1/b3p2p/Q2p3P/8/1BP5/1n2NPP1/R5K1 b - - 4 27,a6e2 a5a8 b8a8 a1a8,759,85,88,492,advantage master middlegame pin short,https://lichess.org/oGAfYG9G/black#54
JYGWh,3r1rk1/6pp/p3pn1q/1p1p4/2p5/2P1P1QP/PPN2PPK/3R1R2 w - - 2 22,g3e5 f6g4 h2g1 g4e5,778,130,93,66,crushing middlegame pin short,https://lichess.org/U69qfuTz#43
Jhy99,rn2kbnr/5ppp/2p3b1/pB6/3P4/8/PP1Q1PPP/R3K1NR w KQkq - 0 12,b5a4 f8b4 e1c1 b4d2,693,108,92,907,advantage middlegame pin short,https://lichess.org/dcozAs4S#23
KOWP9,r1b1k2r/ppb3pp/4p1q1/2p1N3/3p3P/3P2P1/PPP1BP2/R2Q1RK1 b kq - 0 17,c7e5 e2h5 e8g8 h5g6,704,98,93,1914,advantage middlegame pin short,https://lichess.org/0RaaG42m/black#34
KfRXS,r4rk1/q2bbp1p/2npp3/2p3Pp/4PP1N/1pPPB2P/1PQN2R1/R6K w - - 0 20,c2d1 a7a1 d1a1 a8a1,653,103,77,251,crushing middlegame pin short,https://lichess.org/DXrX5KTA#39
Ko6h6,r2q1rk1/2p1nppp/8/p2N4/8/P3bP2/1PPQ2PP/2KR1R2 w - - 0 16,d5e7 d8e7 d2e3 e7e3,660,86,100,308,crushing middlegame pin short,https://lichess.org/6L8qlHYq#31
KoOth,4rq1k/1p4pp/p1nbb3/8/1P6/P3QN2/4RPPP/4R1K1 b - - 10 28,e6f7 e3e8 f7e8 e2e8,608,107,78,434,advantage middlegame pin short,https://lichess.org/RmxwCP1V/black#56
L4amh,r2q1rk1/pppnbppp/3p4/8/3PP3/2N2B2/PPPQ2PP/2KR3R w - - 1 13,h1f1 e7g5 d2g5 d8g5,784,86,73,211,advantage middlegame pin short,https://lichess.org/9wTuUYv3#25
L8zrJ,r1b5/1pp3k1/3p4/p2Pp1qp/2P1P3/P1N2r1P/1P3PP1/Q4KR1 b - - 1 21,c8h3 g2h3 g5g1 f1g1,685,110,68,90,advantage middlegame pin short,https://lichess.org/fTqB38my/black#42
LGUgD,1r1q3r/p1p2k1p/3bpp2/Q2p2p1/3P4/4PNP1/PPP2PP1/RN2K2R w KQ - 1 15,a5c3 d6b4 c3b4 b8b4,798,96,94,486,advantage middlegame pin short,https://lichess.org/6B1PShbn#29
LfCrz,2r3k1/p1r2ppp/2q5/4p3/1b2P3/3PB1P1/bP3PBP/1R1Q1K1R w - - 0 20,b1c1 c6c1 e3c1 c7c1 d1c1 c8c1,758,88,79,45,crushing long middlegame pin,https://lichess.org/8hiU7BDN#39
M3aRp,r2qk2r/2p1bpp1/p2p3p/1p1N4/4Pn2/1P1PQ3/1PP2P1P/2KR3R w kq - 0 16,e3f4 e7g5 f4e3 g5e3,786,84,79,202,crushing middlegame pin short,https://lichess.org/qPfLM6xu#31
MVRop,rn2kb1r/4p1pp/pq6/1B4p1/3P3P/2P1P3/1Q3PP1/R3K2R b KQkq - 0 16,b6b5 b2b5 a6b5 a1a8,711,92,84,214,advantage middlegame pin short,https://lichess.org/dG5Xkvd9/black#32
MnLlw,3qk2r/Q2n1p1p/4pp2/1B1p1b2/1b1P4/2N2N2/PrP2PPP/R3K2R w KQk - 2 13,b5d7 d8d7 a7d7 e8d7,655,95,93,728,crushing middlegame pin short,https://lichess.org/9Ap8c5dY#25
Mw72O,4R3/bpp2k1p/p2p2n1/5q2/1P5r/P5QP/1B3P2/4R1K1 b - - 4 29,a7f2 g3f2 f5f2 g1f2,700,91,87,65,advantage master middlegame pin short,https://lichess.org/XLBdZZrV/black#58
OFQhk,1r4k1/5rpp/2b2q2/4p3/1PB1nP1N/1QB1b1P1/7P/3R1K2 w - - 0 32,c4f7 f6f7 b3f7 g8f7,709,89,78,108,advantage middlegame pin short,https://lichess.org/G9PtQZj1#63
OV3l3,r2qk2r/p1p4p/2pbbp2/3p2p1/3P4/2N1nN1P/PPPQ1PP1/2KR3R w kq - 0 13,d2e3 d6f4 e3f4 g5f4,752,98,95,2119,crushing middlegame pin short,https://lichess.org/fccUeqZH#25
OrhHm,2r2r2/pp4b1/3pp1k1/2p1n1pq/2P1PQ2/P2P1P2/1P2N1RP/1R2K1B1 b - - 0 29,f8f4 e2f4 g6h6 f4h5,745,105,94,841,advantage middlegame pin short,https://lichess.org/CyCp3sJm/black#58
OvKqC,r1bqkr2/ppp1bp2/3p3Q/8/2B1Pn2/2N4P/PPP2PP1/2KR3R w q - 0 14,h6f4 e7g5 f4g5 d8g5,781,97,93,230,advantage middlegame pin short,https://lichess.org/k0RnLMH6#27
Q1dYm,2r2nk1/p1rq3p/bp2p1pB/n2pP1N1/Pb1P4/6N1/1P3PP1/RB1QR1K1 w - - 4 23,e1e3 c7c1 d1c1 c8c1,786,78,84,166,advantage middlegame pin short,https://lichess.org/CugJylEH#45
QHojZ,2r1r1k1/pp1np2p/3pp1pB/q3n3/2P1PP2/2PB3P/P3Q1P1/2RR2K1 b - - 0 18,e5c4 d3c4 c8c4 e2c4,658,108,46,72,crushing master middlegame pin short,https://lichess.org/qpTwUzQW/black#36
QL3Ng,r2q1rk1/3bbppp/2pp4/pp4P1/P2BPn2/2N5/1PPQ3P/2KR1B1R w - - 0 15,d2f4 e7g5 f4g5 d8g5,783,86,88,53,advantage middlegame pin short,https://lichess.org/5qXGGNB9#29
RFnzO,r5k1/1p1b1rp1/4p1Rp/p3P2P/2Pp1P1n/3P1Q2/P1q1NK2/2B3R1 w - - 10 32,g6g7 f7g7 g1g7 g8g7,734,93,91,556,advantage middlegame pin short,https://lichess.org/se73fgQC#63
Rhglg,rn3r1k/pp4b1/2p3Pp/4q1P1/4N3/1Q3p2/PPP3B1/2KR3R b - - 0 21,e5b2 b3b2 g7b2 c1b2,753,96,67,108,crushing middlegame pin short,https://lichess.org/GP8v5xDb/black#42
Ricgo,r1q3k1/6pp/2r2n2/pp6/3Q4/P1N1B3/1P3PPP/2KRR3 w - - 0 22,d4d8 c8d8 d1d8 a8d8,696,99,80,88,advantage middlegame pin short,https://lichess.org/QRKBklVZ#43
Rugcr,2kr3r/1pp2p2/p1nbPq2/3p4/1P1P2p1/P1NBP3/2QN2Kp/R4R2 b - - 1 19,f6e6 d3f5 c6e7 f5e6,784,88,90,1681,crushing middlegame pin short,https://lichess.org/m3CPK1rj/black#38
RuhC8,2krr3/pp1b4/8/P7/2qp2Pp/P1N4B/1K6/2RQ3R b - - 1 28,d4c3 c1c3 c4c3 b2c3,791,104,85,209,crushing middlegame pin short,https://lichess.org/UKsslzEW/black#56
T0ZYR,r5k1/p2p2pp/1p6/1Np4r/1P6/P7/R2Nn2P/5R1K w - - 2 26,d2f3 e2g3 h1g2 g3f1,702,97,85,971,advantage middlegame pin short,https://lichess.org/krNU0lae#51
TSxQR,5rr1/p1Q2p1k/1p2pqBP/3b2R1/3P4/P7/1PP2P2/2K3R1 b - - 0 26,g8g6 g5g6 f6g6 g1g6,799,84,79,135,crushing middlegame pin short,https://lichess.org/gNfWUgGX/black#52
Tc64j,2r3k1/6pp/2q1p1b1/1p1p4/pP1PpP2/P1r1P1P1/RQ1RBK1P/8 w - - 0 24,d2c2 c3c2 b2c2 c6c2 a2c2 c8c2,667,103,85,216,crushing long master middlegame pin,https://lichess.org/92ilCH4d#47
TnL3j,r2q1rk1/ppp1bppp/3p4/8/2B1Pn2/P1N1QP2/1PP4P/2KR3R w - - 0 13,e3f4 e7g5 f4g5 d8g5,799,83,97,1339,advantage middlegame pin short,https://lichess.org/Q0i5LhzA#25
UUZGf,r3k2r/1pq1bpp1/p2p3p/4p2P/4P3/PNN1nQ2/1PP5/2KR3R w kq - 0 21,f3e3 e7g5 e3g5 h6g5,798,81,82,159,advantage middlegame pin short,https://lichess.org/9T4NlcqB#41
UqP1g,2r3k1/p1r2ppp/3qp3/1b2B3/1P6/P3P2P/5PP1/2RRN1K1 w - - 0 30,e5d6 c7c1 d1c1 c8c1,663,104,69,198,advantage middlegame pin short,https://lichess.org/a3VllajP#59
WHFEH,r2q1r2/2pn3k/p2b1ppp/1p1Pp3/4P3/1BP1QR2/PP1N2PP/5RK1 w - - 2 22,b3c2 d6c5 e3c5 d7c5,733,83,97,1699,crushing middlegame pin short,https://lichess.org/eEySa7z6#43
Wk8Eu,2kr3r/1bppqN1p/1p2p1pb/p2n4/P2PNP2/3P4/1P1BQ1PP/2R2RK1 b - - 5 17,e7f7 e4d6 c8b8 d6f7,773,81,70,191,advantage middlegame pin short,https://lichess.org/DPYMlm9s/black#34
X1IaX,2r1r1k1/1b1N2pq/4p3/pp3p1p/5B2/6Q1/P5PP/R6K b - - 0 35,e8e7 d7f6 g8h8 f6h7,777,86,97,2680,advantage middlegame pin short,https://lichess.org/jX7Z7OIr/black#70
XynQL,3r4/q7/5b1k/pB1P4/P1P2pQ1/1P3Pp1/2NK2Pr/6R1 w - - 7 44,g4f4 f6g5 f4g5 h6g5,793,98,86,987,crushing defensiveMove middlegame pin short,https://lichess.org/RwuQJ745#87
YW9Im,2b1k2r/3nb1pp/p2p4/Np4P1/5p2/8/PPP1B2P/2KR1R2 w k - 2 22,f1f4 e7g5 c1b1 g5f4,762,91,81,123,crushing middlegame pin short,https://lichess.org/ZNFmrTyN#43
YrSgB,r2B3k/ppp2prp/3p2nn/3Pp3/4P3/2PB2PR/P1P2PK1/R7 w - - 0 24,d8f6 g6f4 g2f3 f4h3,793,80,68,153,advantage middlegame pin short,https://lichess.org/tlqiOBZL#47
ZkVbm,r1b2rk1/pp2pp1p/2np2p1/8/N1P1P3/4QP2/P3B1PP/b3K2R w K - 0 15,e1g1 a1d4 e3d4 c6d4,793,91,95,885,crushing middlegame pin short,https://lichess.org/fySeqAHB#29
Zmzf4,r1bq1rk1/pp1pbppp/8/2p1P3/5Q2/2N5/PPP2PPP/R3KB1R w KQ - 1 11,e1c1 e7g5 f4d2 g5d2,758,97,94,795,advantage middlegame pin short,https://lichess.org/07yF6P9b#21
ZrLsz,5r2/1p4pk/p1pp3p/4p3/8/2Pq1rN1/PPB1RPRP/5K2 b - - 1 31,f3f2 g2f2 f8f2 f1f2 d3c2 e2c2,794,104,85,228,crushing long middlegame pin,https://lichess.org/C67Aa49o/black#62
admUL,4rr2/q2pB1kp/b2P2p1/p4Q2/1pB3R1/7P/PP4P1/2R2K2 w - - 1 32,e7f6 f8f6 f5f6 g7f6,784,88,83,158,crushing middlegame pin short,https://lichess.org/H1gH1JT3#63
b6DKM,r2qr1k1/pp1n1ppp/4P3/8/4Q3/8/PP1N1PPP/R3K2R w KQ - 1 16,e6f7 g8f7 e1g1 e8e4,695,82,85,169,advantage middlegame pin short,https://lichess.org/mSTD448u#31
b83fy,r3kbnr/2pb1ppp/1p6/p7/2Q1P3/2p5/PP3PPP/R1B1K2R w KQkq - 0 12,c4c3 f8b4 c3b4 a5b4,767,92,84,494,advantage middlegame pin short,https://lichess.org/ve6gBCCZ#23
bc2mA,2kr3r/ppp2ppp/3b1B2/3P1q2/2P1p1b1/8/PP2BPPP/RN1Q1RK1 b - - 0 12,g7f6 e2g4 f5g4 d1g4,682,90,96,341,crushing middlegame pin short,https://lichess.org/ewpxwjLm/black#24
beK53,3r3r/k1b2pp1/4pn2/1Qp5/2P2P1p/1P6/P5PP/3R1RK1 w - - 2 27,b5c5 c7b6 c5b6 a7b6,675,84,89,299,advantage defensiveMove master middlegame pin short,https://lichess.org/LGuShfQk#53
bu3NF,2kr3r/1p2qp2/p4b1p/2pPpP2/4P3/P7/1P1Q2P1/2KR1B1R w - - 1 21,g2g3 f6g5 c1b1 g5d2,774,125,38,26,crushing middlegame pin short,https://lichess.org/v66pTqnA#41
c40FV,3r3k/5pp1/4p1b1/pB6/Pp5q/4n2R/1P2Q1PP/7K b - - 1 30,d8d1 e2d1 e3d1 h3h4,667,87,88,461,advantage middlegame pin short,https://lichess.org/a7TtF1lZ/black#60
cPOQP,1brrn1k1/3p1ppp/pp2Q3/8/8/PP2B2P/3R2P1/3R1BK1 b - - 0 27,d7e6 d2d8 c8d8 d1d8,622,92,76,71,crushing middlegame pin short,https://lichess.org/OsKJkTfY/black#54
cavoR,r1b2bk1/1pq3pp/p3p3/4P3/3p4/2N5/PPPQB1PP/R5K1 w - - 0 18,d2d4 f8c5 d4c5 c7c5,795,81,44,73,crushing middlegame pin short,https://lichess.org/gx6aL0QF#35
ce9uS,2r1k2r/1p1npp2/p7/5P2/2Np1n1p/8/PP3P2/R3RB1K b k - 3 29,b7b5 c4d6 e8f8 d6c8,772,83,86,468,advantage master middlegame pin short,https://lichess.org/eOcQdUsU/black#58
dB7UX,3r2kr/1p3ppp/1b2p3/1P1nP3/1B3P2/5N2/4K1PP/2RR4 b - - 5 23,d5b4 d1d8 b6d8 c1c8 h7h6 c8d8,721,100,92,682,advantage long middlegame pin,https://lichess.org/A0MliUry/black#46
dCMrs,1k3Rr1/bPp5/7p/4p2q/P2pP3/3B2rb/2P3P1/R3BQ1K b - - 1 28,g8f8 f1f8 h3c8 h1g1 g3g2 g1g2,695,82,95,153,advantage long middlegame pin,https://lichess.org/ZeRtPtMx/black#56
dGnPZ,1rbq1rk1/p2pbp1p/1p5p/2pBP3/2Q5/2N5/PPP2PPP/2KR3R w - - 4 14,c4f4 e7g5 f4d2 g5d2,719,99,96,758,crushing middlegame pin short,https://lichess.org/lsyWJZWU#27
dYfHb,2r1kb1r/3q1ppp/p3p3/3pP3/3Q1B2/2N2P2/PP3KPP/R6R w k - 1 18,a1c1 f8c5 f4e3 c5d4,736,311,50,9,advantage middlegame pin short,https://lichess.org/GRlLTc6w#35
eLQR2,2rr2k1/pb3Rpp/1pq1P2B/8/2Pp2Q1/1P4PK/P6P/4q1R1 b - - 0 29,c6g2 g1g2 b7g2 h3g2,745,79,89,296,crushing middlegame pin short,https://lichess.org/5CljbO1g/black#58
eq30h,r1bqr1k1/p2n1p1p/2p1P1p1/1p5n/2P5/2B1Q3/PP3PPP/R3KBNR w KQ - 1 14,e6f7 g8f7 e1c1 e8e3,731,109,73,643,advantage middlegame pin short,https://lichess.org/bRiXipb8#27
ewExH,r3k2r/1p1b1ppp/pq2p3/2b5/2BnNP2/1P2QN2/P1P3PP/4RRK1 w kq - 0 16,f3d4 c5d4 e3d4 b6d4,713,99,96,237,advantage middlegame pin short,https://lichess.org/eBQSBYf1#31
fPQwy,2kr1b1r/1ppq3p/p1n1R3/P7/7p/2NP4/1PP1B1PP/R2Q2K1 b - - 0 16,d7e6 e2g4 e6g4 d1g4,753,95,95,199,advantage middlegame pin short,https://lichess.org/5BUa9gJj/black#32
fTa10,r5r1/pbkp2Q1/1p2p3/2p5/2P2P2/5q2/P1PB2PP/R4RK1 w - - 0 25,g7d7 c7d7 f1f3 b7f3,795,129,43,21,advantage middlegame pin short,https://lichess.org/LEnpqFQg#49
fhndE,8/3Rnrk1/1pp2q1p/4prp1/1P6/P1B3P1/1Q2RPK1/8 b - - 3 39,f5f2 e2f2 f6f2 b2f2 f7f2 g2f2,723,79,64,141,crushing long middlegame pin,https://lichess.org/KxED8IyJ/black#78
fx0J7,r2q2k1/pp3rp1/5b2/2p1p1p1/7P/2NP4/PPPQ1P2/2KR3R w - - 0 19,h4g5 f6g5 c1b1 g5d2,678,100,95,168,crushing middlegame pin short,https://lichess.org/xeE0iyVR#37
g3i8q,rnb2r1k/ppq2p2/2pbp1pP/6N1/3P3P/2NBQ3/PPP2P2/2KR3R w - - 5 17,h6h7 d6f4 c1b1 f4e3,770,94,91,1106,advantage middlegame pin short,https://lichess.org/BGyJn1zh#33
gWgWk,r3k2r/pp1q1ppp/3p1n2/4p3/1b2P3/2NB3P/PPPK1P2/R4Q1R b kq - 0 14,d6d5 d3b5 e8g8 b5d7,782,84,84,160,advantage middlegame pin short,https://lichess.org/N3D7WeDZ/black#28
gifLB,r2b2k1/5r1p/1np1p3/2Bp1pp1/p2P4/1PP2P2/R3N1PP/R5K1 b - - 3 25,a4b3 a2a8 b6a8 a1a8,663,81,100,173,advantage master middlegame pin short,https://lichess.org/820THhGP/black#50
h6tZu,r2q1rk1/1p2b1pp/3p4/p1ppP3/8/4QP1P/PPP2P2/2KRB2R w - - 0 16,d1d5 e7g5 e1d2 g5e3,757,89,95,815,crushing middlegame pin short,https://lichess.org/CkXcpIlI#31
hOaKp,2kq2RQ/8/p2pr3/1p6/2r4n/8/PP3PP1/R5K1 b - - 6 36,e6e8 g8e8 d8e8 h8e8,686,81,92,439,crushing middlegame pin short,https://lichess.org/XKqhHyx1/black#72
hZGEG,2r4k/p1q3pp/1p1n1p2/2rPp3/4P3/P2P1BP1/5P1P/R1RQ2K1 w - - 6 26,f3g4 c5c1 a1c1 c7c1 d1c1 c8c1,695,87,62,61,advantage long middlegame pin,https://lichess.org/z8hRMr4Q#51
habP2,5r2/p3krp1/1p2p2q/2ppP3/3P4/P1P3Q1/1P1N3P/2KR2R1 w - - 1 25,d1f1 f7f1 g1f1 f8f1,678,86,100,90,advantage middlegame pin short,https://lichess.org/OcJuX6F8#49
iDwBB,rn3rk1/pp4pp/2p1qb2/4p3/4P3/3B2P1/P1P1QP1P/R2R2K1 b - - 5 22,c6c5 d3c4 e6c4 e2c4,789,95,81,302,advantage middlegame pin short,https://lichess.org/OnjzNoR8/black#44
jnGpo,r2qk2r/p2N1ppp/4pb2/3p4/P2P4/1P6/4BPPP/R2Q1RK1 b kq - 0 15,d8d7 e2b5 d7b5 a4b5,750,88,87,1251,crushing middlegame pin short,https://lichess.org/s1YUuPn0/black#30
jxxPt,5rk1/pp2Rp1p/1n3Q2/2p3P1/3P3P/P1q2BK1/8/7R w - - 3 32,f6f7 f8f7 e7f7 g8f7,757,93,86,531,crushing middlegame pin short,https://lichess.org/OjR447KO#63
jyj3V,5rk1/R7/p6p/n1pp2q1/2P2r2/Q1PP1P1b/P3PRBP/5K2 b - - 4 25,h3g2 f2g2 g5g2 f1g2,658,106,89,673,crushing middlegame pin short,https://lichess.org/yi4rTENT/black#50
keUVH,4rk2/pp5r/2pb2pP/3p1qP1/3P1NRR/P4N2/1PP2P2/1K6 b - - 0 27,d6f4 g4f4 f5f4 h4f4,704,89,87,231,advantage middlegame pin short,https://lichess.org/SCSbQz9r/black#54
kjOtp,r6r/p2bp1b1/2pp2k1/1p4pn/3PP3/2PQ1P2/PPK4B/R6R w - - 5 26,e4e5 d7f5 d3f5 g6f5,796,82,77,207,advantage defensiveMove middlegame pin short,https://lichess.org/NJkiCEsn#51
l0R8a,3qk2r/Q2n1p2/4pp1p/1B1p1b2/1b1P4/2N1P3/Pr3PPP/R3K1NR w KQk - 2 13,b5d7 d8d7 a7d7 e8d7,702,102,94,473,crushing middlegame pin short,https://lichess.org/IkTXzXiV#25
lHpDL,1r2kbr1/3qB2p/2n1p3/1B1p1b2/Q2P4/5P2/PP2N1PP/R3K2R b KQ - 0 18,f8e7 b5c6 d7c6 a4c6,767,94,92,603,crushing middlegame pin short,https://lichess.org/5W4jcz6L/black#36
lQw4T,rn1qk2r/1p2bpp1/p2p3p/3Pp3/8/1N2Q3/PPP2PPP/R3KB1R w KQkq - 1 13,e1c1 e7g5 c1b1 g5e3,770,82,97,1546,crushing middlegame pin short,https://lichess.org/ytI3WP8B#25
lW6xv,r3k2r/p2q1pp1/2ppbb1p/1N2p3/4P3/3B4/PPP1QPPP/R4RK1 b kq - 3 13,c6b5 d3b5 e8g8 b5d7,640,88,79,244,advantage middlegame pin short,https://lichess.org/AqWfovjY/black#26
m9KjY,3rk1r1/2q1bp1p/p1pp4/4p3/N3P3/1P4P1/P1PQ3P/2KR2R1 w - - 0 20,g3g4 e7g5 d2g5 g8g5,780,95,74,391,crushing middlegame pin short,https://lichess.org/f9JAkTf6#39
mTU0U,1rq3k1/1rn1ppbp/p5p1/2pPP3/2p2PPP/P4B2/4NQ2/1RR4K w - - 0 30,f2c5 b7b1 c1b1 b8b1,671,94,88,390,crushing master middlegame pin short,https://lichess.org/4nSS3TtM#59
maFAW,r4r2/1b1n1k1p/p4qpQ/1p2p3/8/1NN2p2/PPP1B3/R3KR2 b Q - 1 20,f3f2 f1f2 f6f2 e1f2,606,106,45,97,crushing middlegame pin short,https://lichess.org/AshVZKq6/black#40
nDr3i,2r4k/1p3Bpp/p4n2/2r5/5P2/4n3/P2N2PP/2R2RK1 w - - 0 20,f1e1 c5c1 e1c1 c8c1,663,103,77,454,crushing middlegame pin short,https://lichess.org/qx1v7OxY#39
nkiaA,1r2k2r/3n1p2/p3p2p/4b1p1/P1P1P3/1Q2B2P/4K1P1/7R w k - 1 22,b3c2 b8b2 c2b2 e5b2,796,82,88,237,advantage middlegame pin short,https://lichess.org/dJzE7b7T#43
nqAHJ,r3r1k1/ppp2pp1/2n4p/3p1Q2/3q4/1P2PN1P/P3KPP1/R1R5 w - - 0 18,f3d4 c6d4 e2f1 d4f5,737,99,92,566,crushing middlegame pin short,https://lichess.org/KnYrCyHd#35
ojQGl,3qk2r/Q2n1p1p/4pp2/1B1p1b2/1b1P4/2N1P3/Pr3PPP/R3K1NR w KQk - 2 12,b5d7 d8d7 a7d7 e8d7,654,100,41,48,advantage middlegame pin short,https://lichess.org/kucWWWu9#23
ozMed,rn3r2/p4pk1/1p2p2p/3bP3/3P4/P2B2q1/2Q3P1/R4KNR b - - 1 19,d5g2 c2g2 g3g2 f1g2,749,195,47,51,advantage middlegame pin short,https://lichess.org/MVFS6XDK/black#38
p1KXB,r2k3r/pp4pp/1q2p3/2bpP2P/6P1/7N/PP3Q2/RNB2RK1 w - - 1 17,c1e3 c5e3 g1g2 e3f2,674,102,92,558,advantage middlegame pin short,https://lichess.org/aTIqcdnC#33
p94Zq,r2qk2r/1p1bbp1p/p2p2p1/6P1/4Pp2/2N5/PPPQB2P/2KR3R w kq - 0 16,d2f4 e7g5 f4g5 d8g5,696,101,89,784,crushing middlegame pin short,https://lichess.org/vtYSnFgL#31
pCP8Q,5r2/pp3q1k/2n3pP/3b2Q1/3P4/2PB4/PP6/R5K1 w - - 1 32,d3g6 f7g6 g5g6 h7g6,628,93,58,124,advantage master middlegame pin short,https://lichess.org/2jBaYAxE#63
pEeKd,r1b1k1r1/pp2n3/1bn2p1B/1B1P3P/1P5q/PN6/4QPP1/R3R1K1 b q - 0 21,b6f2 e2f2 h4f2 g1f2,676,88,69,112,crushing master middlegame pin short,https://lichess.org/A8KB81rD/black#42
pI89Y,r2q1rkn/3nbppp/2p5/p2pPp1P/3P1N2/1p2BNP1/PPPQ1P2/R3K2R w KQ - 0 16,c2b3 e7b4 e1g1 b4d2,718,84,67,165,crushing middlegame pin short,https://lichess.org/kCu97k3U#31
pOw1C,2k4r/1p1rb1pb/pBqpB2p/3Pn2P/6P1/5P2/PPP2Q2/1K1R3R b - - 0 21,c6c2 f2c2 h7c2 b1c2,672,99,76,69,advantage middlegame pin short,https://lichess.org/dmcYoFOe/black#42
pQbkJ,r2k1r2/pppb1pp1/5b1p/4p3/2B1P3/2N5/PPPR1PPP/2K4R w - - 0 13,h1d1 f6g5 g2g3 g5d2,743,83,52,82,advantage middlegame pin short,https://lichess.org/mL4npHjK#25
pm34T,5k2/1b3p1p/p1q1pb2/1p3p2/8/1B3N1P/PP3Pr1/3Q2RK w - - 0 27,g1g2 c6f3 d1f3 b7f3,795,96,87,52,advantage middlegame pin short,https://lichess.org/oFWB3fzW#53
qDAQ8,r2qr1k1/4bpp1/2bp4/p1p3P1/P1B1P1n1/2N1QP2/1PP3P1/2KR3R w - - 1 19,f3g4 e7g5 e3g5 d8g5,763,82,84,124,crushing middlegame pin short,https://lichess.org/CtkRzPj6#37
qFWn0,4rrk1/5p2/8/p1pNb1q1/1pQ4p/4RRPP/P6K/8 b - - 0 39,h4g3 f3g3 e5g3 e3g3 g5g3 h2g3,742,86,88,457,advantage long middlegame pin,https://lichess.org/P1UDh2Wt/black#78
qIUJv,r1b1kr2/1p4p1/p2Rp1p1/7p/4n3/PBN2Q2/1PP5/5K2 w q - 0 22,d6e6 c8e6 f3f8 e8f8,712,79,86,126,crushing middlegame pin short,https://lichess.org/kSGw6abZ#43
r7PkK,2r4k/1pq3np/p5p1/5p2/1P1P4/P1r1P2P/2B2PP1/1RRQ2K1 w - - 3 32,c2b3 c3c1 b1c1 c7c1 d1c1 c8c1,703,97,66,74,advantage long middlegame pin,https://lichess.org/O7d2MyF8#63
rBpvz,r7/4R1pk/2p4p/1nNp4/p1pr4/P7/1Pb2PPP/4Q1K1 w - - 0 31,c5e6 d4d1 e1d1 c2d1,776,97,96,428,crushing middlegame pin short,https://lichess.org/p9fmiZ73#61
rItRB,1k3b1r/p1q3p1/1pp1p3/3p3p/2B2P2/4Q2P/PP4P1/R4RK1 w - - 0 23,c4a6 f8c5 e3c5 b6c5,793,76,99,1855,crushing middlegame pin short,https://lichess.org/9myN1tml#45
ry8J2,2kr3r/pbp1qpp1/1p2Pb1p/3p4/8/2PBP1P1/PPQN2P1/2KR3R b - - 0 16,e7e6 d3f5 e6f5 c2f5,727,111,65,63,advantage middlegame pin short,https://lichess.org/yutq7eAg/black#32
saLrS,4r2r/1p1b1k2/2p5/5q2/2P2n2/p2P1QBP/6B1/5RRK b - - 3 31,h8h3 g2h3 f5h3 g3h2 h3f3 f1f3,789,115,88,30,advantage long master middlegame pin,https://lichess.org/hy5LoJ9G/black#62
sqRvL,2kr3r/ppp3p1/2n1q3/2b1pp2/2P3N1/5B2/PP1P1PP1/R1BQ1RK1 b - - 3 15,f5g4 f3g4 e6g4 d1g4,789,86,98,351,advantage middlegame pin short,https://lichess.org/ztspeOlN/black#30
ssfG6,6k1/pbp4p/6p1/3qp3/3pN3/BP1Qbr2/P5KP/5R2 w - - 0 28,f1f3 d5e4 d3e4 b7e4,721,83,87,332,crushing middlegame pin short,https://lichess.org/nRzqcZK3#55
t3QWR,2kr1n1r/pp1q2pp/2pbR3/3p1B2/6Q1/2N4P/PPPB1PP1/6K1 b - - 0 17,f8e6 f5e6 d7e6 g4e6,698,92,71,59,crushing master middlegame pin short,https://lichess.org/T4pMsOEx/black#34
tagAR,r3kbn1/1p1b2p1/p3p1q1/3pP1p1/2p4R/P1P5/1P2BPP1/R2QK1N1 b Qq - 0 15,g5h4 e2h5 e8c8 h5g6,776,90,95,310,advantage middlegame pin short,https://lichess.org/A1KIURPT/black#30
tpoBB,r4r2/6bk/p2p2pp/n2P1P2/NppqP3/4Q3/PP6/1BK3RR w - - 1 26,h1h6 g7h6 e3h6 h7h6,798,89,82,76,crushing middlegame pin short,https://lichess.org/A4ZYKfqu#51
ttrPr,4r2r/1p3kp1/1q3pp1/p2p4/P1pPb2P/2P1PNP1/RP3Q2/3B2K1 b - - 2 26,b6e6 f3g5 f7g8 g5e6,620,90,76,161,advantage middlegame pin short,https://lichess.org/NDRZymll/black#52
u462x,r1bqr1k1/ppp1bp1p/3p2p1/8/4P3/1PNPn1Q1/1PP1NPPP/R3K2R w KQ - 0 13,f2e3 e7h4 e1g1 h4g3,775,98,85,821,crushing middlegame pin short,https://lichess.org/worxNvzy#25
uIJZb,r7/p4p2/4b3/7k/8/6Q1/PPPPKPP1/RNB3q1 w - - 11 23,g3f3 e6g4 f3g4 h5g4,795,88,80,223,advantage defensiveMove middlegame pin short,https://lichess.org/pypnQIZw#45
uURuO,k4r1r/p2P2q1/1p1Q4/1P6/2P4p/P4b2/6P1/3RR1K1 w - - 2 49,d7d8q f8d8 d6d8 h8d8,799,81,79,105,advantage middlegame pin short,https://lichess.org/BHJCkhOh#97
uq0JE,r2qr1k1/bb1p1ppp/p1pB4/5n2/N3P3/1N6/PPPQ3P/2KR3R w - - 0 18,e4f5 a7e3 d2e3 e8e3,766,174,54,15,advantage middlegame pin short,https://lichess.org/lKUUA1ce#35
uvwdc,2b1r1k1/5p2/1P5p/8/3pn2p/5N1P/r5PK/2R1R3 b - - 1 28,e4f6 e1e8 f6e8 c1c8,728,81,86,422,advantage middlegame pin short,https://lichess.org/9aS8mlhR/black#56
uypQO,1r1q1rk1/4ppbp/pp1p2p1/2pN4/P3PP2/3PQ2P/1PP3P1/1R3RK1 w - - 2 17,f4f5 g7d4 e3d4 c5d4,784,89,95,2427,crushing middlegame pin short,https://lichess.org/KIsGrGwZ#33
vZR4b,2k1r3/1bpqr3/ppn2p1p/3p3P/5RB1/PP6/2P3P1/RN1Q1K2 b - - 4 24,e7e1 d1e1 e8e1 f1e1 d7g4 f4g4,761,96,88,61,crushing long middlegame pin,https://lichess.org/Qvwj0XBW/black#48
wA43d,r3k2r/ppp2pb1/3pqnpp/3N4/3pP3/PP1P3P/2P2PP1/R1BQR1K1 b kq - 1 13,f6d5 e4d5 e6e1 d1e1,766,98,89,698,crushing middlegame pin short,https://lichess.org/AM29LtsW/black#26
wOx7b,r2q1rk1/pp2nppp/2pp4/4p1B1/2B1P3/2NP1Q1P/PPP2KP1/5R2 w - - 0 14,c4f7 f8f7 f3f7 g8f7,674,99,85,293,advantage middlegame pin short,https://lichess.org/tQyZeNx5#27
wWtiZ,r6r/3n1kbq/1pp2pR1/p3p3/P3P1Q1/2NP4/1PP4P/5RK1 w - - 8 27,g6g7 h7g7 g4g7 f7g7,772,77,98,490,advantage master middlegame pin short,https://lichess.org/PunJatKf#53
wd0tT,r1b1kb1r/pp6/2n3pp/4p3/8/2p1P3/PPPQ2PP/R3K2R w KQkq - 0 16,d2c3 f8b4 c3b4 c6b4,666,113,56,77,crushing middlegame pin short,https://lichess.org/AYHFSIaV#31
wkTnM,r1q4r/pp3pk1/3Pp1pb/2p2n2/2P5/2NP1BP1/PP3Q1P/R4RK1 w - - 1 24,f3e4 h6e3 f2e3 f5e3,794,89,67,120,advantage master middlegame pin short,https://lichess.org/1mWLurFM#47
xvhRR,r3k2r/pppq1ppp/3p1b2/3P4/3p4/P2P3P/1PP1BPP1/R2QK2R b KQkq - 0 12,e8c8 e2g4 c8b8 g4d7,798,85,63,72,crushing middlegame pin short,https://lichess.org/YAlrrZ6Q/black#24
xxW8b,2k2b1r/pp3ppp/2p1q3/8/2P5/P2BNP1P/1P3PP1/R3K2R b KQ - 0 15,f8c5 d3f5 e6f5 e3f5,795,83,52,63,advantage middlegame pin short,https://lichess.org/XpeVHNka/black#30
y22SH,2kr3r/ppp1qpp1/4Nn2/3p3p/8/2PBPPP1/PPQ3P1/R3K2R b KQ - 0 16,e7e6 d3f5 c8b8 f5e6,733,94,95,699,crushing middlegame pin short,https://lichess.org/C1QJhOhl/black#32
y59vB,1k1r1b1r/1pp2p2/p4P2/3Pp2p/4P2p/2N4B/PPP5/2K3RR w - - 0 24,g1g5 f8h6 c1d1 h6g5,721,188,83,18,advantage middlegame pin short,https://lichess.org/c9xbEDqB#47
yP3oQ,2krr3/pp3ppp/2p5/3q4/2PPn3/1P3RP1/P3Q1KP/4R3 b - - 0 22,e4c3 e2e8 d5f3 g2f3 d8e8 e1e8,685,81,80,293,advantage long middlegame pin,https://lichess.org/oPpJVxH2/black#44
yeOPc,r3k2r/2pq1ppp/p2p4/1p1Bp3/3n4/3PNQ2/PPP2KPP/R1B5 w kq - 3 15,d5f7 d7f7 f3f7 e8f7,774,86,83,532,advantage middlegame pin short,https://lichess.org/I03zNHuR#29
yjHbo,3b2q1/kb6/p4p1p/8/1Npn1B2/P1N5/1PPQ2P1/6K1 w - - 0 34,d2d4 d8b6 d4b6 a7b6,754,109,18,35,advantage middlegame pin short,https://lichess.org/owuox2PT#67
zI846,3rrb1k/p4p1p/3p2p1/2BR3n/2P1P3/1P3P2/P3B1PP/3R2K1 b - - 0 22,d6c5 d5d8 e8d8 d1d8,694,98,82,309,crushing middlegame pin short,https://lichess.org/457UtS5l/black#44
zW0Za,r2q1r1k/2p4n/pb1p3Q/1p1Np3/4P1bP/1BPP4/PP4P1/2K2R1R b - - 4 19,f8f1 h1f1 d8f8 f1f8,778,86,67,101,advantage middlegame pin short,https://lichess.org/VpKAlMyH/black#38`,
  },
  {
    id: 'skewer', color: '#FFA040', title: 'Шампур', short: 'Шампур',
    // task_middlegameskewer800.csv, rating up to 800
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
0QFfu,r2k1bnr/pp3ppp/8/1B1p1p2/8/1P5P/P1KN2P1/R3R3 b - - 1 18,f8b4 e1e8 d8c7 e8a8,687,84,97,303,advantage middlegame short skewer,https://lichess.org/u2kjEwUk/black#36
0qkpA,q4r1r/1kbn1p2/1nb1pPp1/pp2P1Pp/1PpPN2P/P4B2/1BP3Q1/1K2RR2 b - - 0 30,c6e4 f3e4 b7a6 e4a8,719,97,80,115,crushing middlegame short skewer,https://lichess.org/PBOwfw7E/black#60
13OMN,r1bk2nr/1pp3pp/p1p5/8/4PR2/8/PPP3PP/RNB3K1 b - - 0 11,c8e6 f4f8 d8d7 f8a8,647,103,75,53,crushing middlegame short skewer,https://lichess.org/5S3Xp47C/black#22
15c75,6nr/pp2kp1p/4p1p1/1BrpP3/8/1P5P/P4PP1/RN2K2R w KQ - 0 16,b5d3 c5c1 e1e2 c1h1,686,87,90,332,advantage middlegame short skewer,https://lichess.org/OI9TAz4o#31
1Bofv,7r/3k1q2/3b1Pp1/4p1P1/Q2pPn2/P2P4/1BP5/3K2R1 b - - 0 43,d7d8 a4a8 d8d7 a8h8,707,79,100,424,advantage master middlegame short skewer,https://lichess.org/t0FLSgYx/black#86
1ERqI,r3k3/1p1n4/p1b4r/6R1/8/1BP5/P1P2PpP/3R2K1 b - - 0 31,e8d8 g5g8 d8c7 g8a8,775,82,79,282,advantage master masterVsMaster middlegame short skewer,https://lichess.org/9HV4sRXA/black#62
25nk3,2k4r/ppr1np2/B3p1p1/3pP1P1/3P3b/1R2B3/P6P/1R4K1 b - - 6 26,b7a6 b3b8 c8d7 b8h8,651,94,77,175,advantage middlegame short skewer,https://lichess.org/mVn7KPo8/black#52
rntJR,2r3k1/p4rpR/5qb1/1ppp4/4p3/P3P3/1PP2P1Q/2KN3R b - - 0 26,g6h7 h2h7 g8f8 h7h8 f8e7 h8c8,706,90,68,70,crushing kingsideAttack long middlegame skewer,https://lichess.org/JZGcERlt/black#52
2ai72,rr6/2p2kp1/4p2p/2BpPp2/3P3P/1P2QNP1/qKP5/7R w - - 5 27,b2c1 a2a1 c1d2 a1h1,705,93,85,783,crushing middlegame short skewer,https://lichess.org/DIfaysYq#53
2ax97,6q1/r1p1kp2/pnBp4/3PpQ2/1P2R3/2P4P/5Pr1/R5K1 w - - 0 35,g1f1 g2g1 f1e2 g1a1,746,86,95,949,advantage middlegame short skewer,https://lichess.org/HVAHa120#69
2qjH5,2kr3r/2qbp1b1/3p1p2/2pPpP2/1pP1N1B1/pP2P3/P1Q4P/R4RK1 w - - 1 20,g1f2 h8h2 f2f3 h2c2,705,94,89,1705,crushing middlegame short skewer,https://lichess.org/T2EXTc9d#39
37eeQ,r3k3/pp3p2/2npq2r/2p1p1Q1/2P1PP2/3P3P/PP4P1/R4RK1 b q - 1 20,e5f4 g5g8 e8e7 g8a8,687,93,92,477,advantage master middlegame short skewer,https://lichess.org/IS302LKf/black#40
3KSbT,2r1k2r/pp1b1ppp/4p3/3pP3/3R1P2/5N2/PP4PP/4KB1R w Kk - 3 18,f1d3 c8c1 e1f2 c1h1,709,91,90,800,advantage middlegame short skewer,https://lichess.org/ZAjDcVW4#35
3N6AZ,r1r3k1/pR1b1ppp/4pn2/B2p4/3P4/P3PP2/6PP/4KB1R w K - 3 22,f1d3 c8c1 e1f2 c1h1,692,100,73,394,crushing middlegame short skewer,https://lichess.org/wox9WoPg#43
3ey96,2r1k1nr/pp1b1ppp/4p3/3pP3/3P4/1P6/P4PPP/RN2KB1R w KQk - 1 13,f1d3 c8c1 e1d2 c1h1,675,83,100,376,crushing middlegame short skewer,https://lichess.org/J3nRTud0#25
3nmbm,rb6/pp6/4k3/1P1n1p2/3Pp2B/R6P/BPr1KP2/6R1 w - - 1 30,e2e1 c2c1 e1e2 c1g1,746,101,92,425,advantage master masterVsMaster middlegame short skewer,https://lichess.org/D8JtokSm#59
3tZTe,2r1r1k1/1b3ppp/p7/3P1N2/1N2B3/P4P2/6PP/Q1q1K2R w K - 3 23,a1c1 c8c1 e1d2 c1h1,761,81,77,139,advantage middlegame short skewer,https://lichess.org/PsudfX9J#45
46asp,1r3k2/4pp2/3p3Q/2rb4/7P/1B1n4/6P1/1K5R b - - 3 45,f8e8 h6h8 e8d7 h8b8,765,99,84,112,crushing master middlegame short skewer,https://lichess.org/GxT6y1Kz/black#90
4JhUX,5rk1/1N2bppp/p2p4/4p1Pn/4P3/4BP2/rPPR3P/2K4R w - - 0 21,b2b3 a2a1 c1b2 a1h1,784,79,100,512,advantage middlegame short skewer,https://lichess.org/nRjbm03a#41
4NIhO,1r2k3/1r1n1pp1/3R4/p3p1Pn/2p1P3/2P1BP2/2P1N3/2KR4 w - - 1 28,d1h1 b7b1 c1d2 b1h1,702,90,73,79,crushing middlegame short skewer,https://lichess.org/cuyLPwQn#55
4YZAC,r5k1/pp1N1ppp/4p3/R2p4/1n1P1B2/1Pr1P2P/4BPP1/5K1R w - - 0 22,d7c5 c3c1 e2d1 c1d1 f1e2 d1h1,796,91,43,33,advantage long middlegame skewer,https://lichess.org/eWDPdlSd#43
4e2l6,2r1k1nr/pp1b1ppp/4p3/3pP3/3P1P2/1P6/P5PP/RN2KB1R w KQk - 1 13,f1d3 c8c1 e1f2 c1h1,679,97,78,515,advantage middlegame short skewer,https://lichess.org/JsGZmjzP#25
4luWC,1r3r2/p1q4p/3kp2R/3p4/N2p1p2/P5P1/2P1P2Q/2K2B2 b - - 0 28,d6d7 h6h7 d7c6 h7c7,793,88,88,101,crushing middlegame short skewer,https://lichess.org/XBp3smiR/black#56
4mw7c,4k2r/p2nbppp/1p2p3/1b1pP3/1B1P4/5NN1/PP3PPP/2R3K1 b k - 5 18,e7b4 c1c8 e8e7 c8h8,722,92,95,1447,crushing middlegame short skewer,https://lichess.org/O4gBHpZl/black#36
4oFyD,r4k1Q/2p2p2/1p2rqp1/p1n1p3/2P4R/P7/2B3PP/4R1K1 b - - 4 35,f6h8 h4h8 f8g7 h8a8,727,86,100,141,advantage middlegame short skewer,https://lichess.org/tFRchJvc/black#70
58CKh,r5k1/ppp3p1/n2p1p2/3P1bP1/7R/8/PPP2rP1/2K1N2R b - - 1 20,f6g5 h4h8 g8f7 h8a8,659,93,84,710,advantage middlegame short skewer,https://lichess.org/cdievtJj/black#40
5NCqH,r1b2k1r/ppp3pp/1b3p2/8/8/1B1n4/PP3PPP/RNBR1K2 b - - 5 16,d3f2 d1d8 f8e7 d8h8,679,98,94,2075,crushing middlegame short skewer,https://lichess.org/jynuWSFZ/black#32
uYz4I,2Rbk2r/1p3ppp/p3Bn2/1r6/N7/P3P3/5PPP/4K2R w Kk - 4 19,e6h3 b5b1 e1e2 b1h1,664,99,93,739,crushing master masterVsMaster middlegame short skewer,https://lichess.org/x5GscRrc#37
5xib6,3r3r/1pk5/2nb1p2/3p1Q2/3P4/P3P3/5PN1/2R3K1 w - - 1 27,g1f1 h8h1 f1e2 h1c1,666,99,58,43,advantage middlegame short skewer,https://lichess.org/WHkAitMw#53
68Jg9,5k1r/pp2p3/3p1p1b/Q3pP2/2r4p/1N4P1/PPq4P/K2R3R b - - 1 25,h6e3 a5d8 f8f7 d8h8,784,77,100,203,advantage middlegame short skewer,https://lichess.org/kyGrPgxI/black#50
rwSWN,5r1k/p2R1p1p/4N1p1/8/2P2Q2/2P1P3/5PP1/1rq2BK1 w - - 13 36,f4h6 c1f1 g1h2 f1h1 h2g3 h1h6,799,83,85,479,crushing long middlegame skewer,https://lichess.org/wkgzn9sA#71
6ShM8,4k2r/1p3pp1/4bn2/4p3/1P1pP1Pp/3P1N1P/1r4BR/2RK4 b k - 3 23,f6d7 c1c8 e8e7 c8h8,703,86,85,137,advantage middlegame short skewer,https://lichess.org/Dw77OUCz/black#46
6hIdD,r4rk1/2p2pp1/3p4/1p1N3p/2B1PBn1/3P4/1PP5/4K1R1 w - - 0 27,c4b5 a8a1 e1d2 a1g1,632,102,79,111,crushing middlegame short skewer,https://lichess.org/C8hcTSNS#53
73DAO,1r1q2nk/1p2b1pn/p2pP2p/2p5/P1P2PP1/2N1BBK1/1PQ5/4R3 w - - 3 30,c3d5 e7h4 g3g2 h4e1,724,86,71,72,advantage master middlegame short skewer,https://lichess.org/PfNWPJFK#59
7KBo3,r5k1/p4r2/1pn1q3/2p1pp2/P6Q/3PR2P/1PP2PP1/R5K1 b - - 0 22,g8f8 h4h8 f8e7 h8a8,774,88,71,153,crushing middlegame short skewer,https://lichess.org/LFvH4YTk/black#44
yyb4h,4k2r/1p3ppp/4p3/1p1pPn2/1n1P4/1P2BN2/r4PPP/1RR3K1 b k - 1 20,f5e3 c1c8 e8e7 c8h8,659,87,97,2637,advantage middlegame short skewer,https://lichess.org/Fp8Hggs7/black#40
7dfOF,rnr5/4nkp1/p4p1p/1B1p4/R2P4/4P1P1/3N1PP1/4K2R w K - 1 23,b5d3 c8c1 e1e2 c1h1,650,94,89,843,crushing middlegame short skewer,https://lichess.org/bUa9aBOa#45
84S7F,1k1r3r/pppb4/2p2pB1/5Pn1/4P3/P1NP4/1PP2RP1/R5K1 w - - 2 23,g1f1 h8h1 f1e2 h1a1,760,89,71,290,advantage middlegame short skewer,https://lichess.org/rXsoNCHK#45
8HMq2,6R1/pk1bbp1p/q1p1p3/1p6/5B1P/2N5/PPP2P1K/7R b - - 2 26,a6b6 g8b8 b7a6 b8b6,724,88,82,71,crushing master middlegame short skewer,https://lichess.org/hmCzPvpt/black#52
8JzZg,1r4k1/p4pb1/3p3p/4p1p1/B3P3/1P4B1/r3NPPP/3K3R w - - 0 24,e2c3 a2a1 d1e2 a1h1,777,131,47,29,advantage middlegame short skewer,https://lichess.org/yX7ldkQn#47
9FApd,8/3rr1kp/p2p1p1q/P1p1pQp1/2P1P1P1/1R1n1B2/5PP1/1R3K2 w - - 0 36,b3d3 h6h1 f1e2 h1b1,640,93,95,1740,crushing middlegame short skewer,https://lichess.org/OGdhkNDt#71
yBhVA,1r4k1/5n1p/1qp3pP/p3p3/3Pn3/P1QBB3/2P5/2K2R2 w - - 0 28,d3e4 b6b1 c1d2 b1f1,790,82,100,88,advantage middlegame short skewer,https://lichess.org/cwNNkotl#55
9QJXV,2k4r/ppp4q/3r1p2/3PpP2/4Q3/3PB3/PP3P2/RN3K2 w - - 0 22,b1c3 h7h1 e4h1 h8h1 f1e2 h1a1,718,86,89,208,advantage long middlegame skewer,https://lichess.org/zne5iSHs#43
9WoR2,3rkb1r/4pppp/B1p5/P6b/1P2n3/5P2/2P3PP/1RB1K2R w Kk - 0 17,f3e4 d8d1 e1f2 d1h1,678,91,90,685,advantage middlegame short skewer,https://lichess.org/jOMkDRY8#33
uWn9G,5rk1/1p3pp1/n7/1Np4q/2P5/P2PP1P1/4P3/R1BQKn2 w Q - 0 23,e1f1 h5h1 f1f2 h1d1,735,100,92,1667,advantage middlegame short skewer,https://lichess.org/aeMPpvv9#45
AGTnH,r3k2r/4nppp/pq2p3/3pP2b/8/1P3N1P/P1QN1PP1/2R2RK1 b kq - 5 17,a8c8 c2c8 e7c8 c1c8 e8e7 c8h8,692,97,66,160,advantage long middlegame skewer,https://lichess.org/8tZQ8hAz/black#34
AoClK,r5k1/n3p1bp/RB3pp1/1p1P4/1P4P1/P1r2N1P/5P2/4K2R w K - 0 30,f3d2 c3c1 e1e2 c1h1,686,98,93,282,advantage middlegame short skewer,https://lichess.org/nlsnnL5h#59
B2Q71,r2k3r/pp1n1BbN/6pp/2P5/3p1p2/1P5P/P2K1P1P/2R1R3 b - - 5 24,h8h7 e1e8 d8c7 e8a8,697,95,91,792,crushing master middlegame short skewer,https://lichess.org/iesZg7yU/black#48
B6tjG,Bn3rk1/p4ppp/1p1p4/2p5/4P2q/5Q2/PPP2PP1/R1B1K3 w Q - 0 14,c1e3 h4h1 e1d2 h1a1,748,82,82,140,advantage middlegame short skewer,https://lichess.org/47lpmRIl#27
rlRwc,3r2k1/pp6/4b1p1/4Bp2/2Pnp3/1P5R/2BbNPP1/5K2 b - - 3 26,d4c2 h3h8 g8f7 h8d8,687,85,82,256,advantage middlegame short skewer,https://lichess.org/ey2BnoIQ/black#52
wtuq0,2r2bnr/3k1ppp/p2pp3/3P4/3pP3/4B2P/PP3PP1/RN2K2R w KQ - 0 15,e3d4 c8c1 e1e2 c1h1,731,98,91,1581,crushing middlegame short skewer,https://lichess.org/9IM7zYU5#29
CYdTm,2r3k1/1p3ppp/p3pn2/n2p4/3P2N1/qP1QP3/5PPP/1B3RK1 b - - 1 23,f6g4 d3h7 g8f8 h7h8 f8e7 h8c8,791,78,98,515,advantage kingsideAttack long middlegame skewer,https://lichess.org/nEeieJ3Q/black#46
DO2TP,r1b1k3/ppp1n3/3p2pQ/8/8/2NP4/PP1KBPqP/R7 b q - 0 15,c8f5 h6h8 e8d7 h8a8,692,100,89,1654,crushing middlegame short skewer,https://lichess.org/LcSQ0ND4/black#30
DPWEJ,4kbnr/1p2pppp/p7/8/3B4/1P5P/P1rP1PP1/RN2K2R w KQk - 0 13,d4c3 c2c1 e1e2 c1h1,769,78,100,667,crushing middlegame short skewer,https://lichess.org/WbbXQsIy#25
xVb7F,2kr4/pp3p2/3p4/2b3pr/3pP3/3B1P2/1PPB2P1/RN3K2 w - - 1 22,b1a3 h5h1 f1e2 h1a1,702,83,98,563,advantage middlegame short skewer,https://lichess.org/GiKu82gw#43
qr7sw,rn2k2r/2R1nppp/p3p3/3pP3/3P4/6P1/3N1PBP/3K3R b kq - 0 17,e7f5 c7c8 e8d7 c8h8,786,92,71,734,crushing middlegame short skewer,https://lichess.org/5fdsHm4c/black#34
DfuM0,2bq1krR/2pn4/p3pp1R/p5p1/3PN1P1/2P2N2/PP1K1PP1/8 b - - 1 23,g8h8 h6h8 f8e7 h8d8,724,95,87,474,advantage middlegame short skewer,https://lichess.org/CXpgkKrW/black#46
DhYfc,r1b4r/2p1n1pp/2kp1p2/pp1N4/3pP3/1B1P2P1/PPP2PP1/R3K2R b KQ - 3 19,e7d5 b3d5 c6b6 d5a8,756,97,93,1185,crushing middlegame short skewer,https://lichess.org/WnnbPpq7/black#38
Dk04F,r2r2k1/1p3pp1/p1n1pq1p/P7/2PpQ3/8/1P3PPP/RB1R2K1 b - - 2 22,d8d6 e4h7 g8f8 h7h8 f8e7 h8a8,772,82,84,276,crushing long middlegame skewer,https://lichess.org/N5evYjK0/black#44
Dtr8T,r5k1/pp3ppp/2p1bqn1/3pB3/8/2PQ3P/P1B2PP1/4R1K1 b - - 4 22,g6e5 d3h7 g8f8 h7h8 f8e7 h8a8,766,82,86,234,advantage kingsideAttack long middlegame skewer,https://lichess.org/6jKYpebP/black#44
E4Ab7,r3b3/2q1krRR/3p4/1p2pPB1/p3P2P/3n4/PPPK4/N7 b - - 3 33,e7d7 g7f7 e8f7 h7f7 d7c6 f7c7,799,96,95,207,advantage long middlegame skewer,https://lichess.org/AzKgVkuo/black#66
yWQL2,r4r1k/1p3p2/p1pb3P/6RN/3PpP2/4P3/qPPQ4/2K4R w - - 0 26,c2c3 a2a1 c1c2 a1h1,729,106,78,62,advantage middlegame short skewer,https://lichess.org/WAa0GJTx#51
EoHHx,2k3r1/b1pb1p2/R2p1r2/4p3/1PP1P2P/3P2N1/5PP1/5RK1 b - - 0 26,a7d4 a6a8 c8b7 a8g8,719,90,88,724,crushing middlegame short skewer,https://lichess.org/bmbvQCY0/black#52
zKNs3,2q2k2/1b2b1p1/p2p4/4p2Q/Np2Pr2/1P2B3/1PP5/1K5R b - - 13 35,b7e4 h5h8 f8f7 h8c8,767,82,96,1176,crushing middlegame short skewer,https://lichess.org/Ay0YgPPl/black#70
EvZOM,4k1r1/2n1p1b1/2p2p1p/3p4/rB1P4/1R2P1PN/2P2P1P/4K2R w K - 0 25,b4c5 a4a1 e1e2 a1h1,733,90,83,538,advantage middlegame short skewer,https://lichess.org/g8nJWkga#49
F2jpB,3r2k1/6p1/2r2nP1/p7/3Bb3/2P4R/PP1K3R/8 b - - 14 40,e4g6 h3h8 g8f7 h8d8,678,90,86,68,advantage middlegame short skewer,https://lichess.org/9n4LRd9V/black#80
FHuVP,4nr1k/6b1/1NP3Pp/p1p1p3/4Pp2/5Q2/qP3PR1/2K3R1 w - - 0 28,g2h2 a2a1 c1c2 a1g1,762,81,88,146,advantage master middlegame short skewer,https://lichess.org/6os0rDg4#55
FO7vd,2r1k2r/p2n1ppp/bq2p3/2ppP3/3P1PPP/1P3NK1/P1QN4/2R4R b k - 1 19,c5d4 c2c8 a6c8 c1c8 e8e7 c8h8,757,82,85,363,crushing long master middlegame skewer,https://lichess.org/KibvphUV/black#38
FRdjp,3b3r/6k1/1p3p2/pPpPB2q/P1P1Q1p1/8/5P2/4RKRr w - - 0 39,g1h1 h5h1 e4h1 h8h1 f1g2 h1e1,793,82,100,264,crushing long middlegame skewer,https://lichess.org/Xnvl5UfU#77
G5mca,3r1rk1/2b2ppp/2p5/4p3/6Q1/2BP3P/PPP2PPq/1R2RK2 w - - 0 22,e1e3 h2h1 f1e2 h1b1,767,79,100,324,advantage middlegame short skewer,https://lichess.org/eBdUw6Zp#43
G6bFH,7r/pp2k1NP/n1p1pp2/3p4/3P1B2/2Q1PP2/qPP5/2KR4 w - - 1 21,d1h1 a2a1 c1d2 a1h1,768,79,100,224,advantage middlegame short skewer,https://lichess.org/OH6jKVDQ#41
GHR4U,r1b2b1r/2p2kpp/p7/1p2p3/4N3/2P1n3/PP2KPPP/3Q3R w - - 0 16,f2e3 c8g4 e2e1 g4d1,691,92,94,373,advantage middlegame short skewer,https://lichess.org/U3rTxMef#31
GZXUs,5rk1/bpN1B1p1/p5p1/4p3/6P1/P1PP4/2P1Kr1P/1R5R w - - 1 25,e2d1 f2f1 h1f1 f8f1 d1e2 f1b1,671,101,80,639,advantage long middlegame skewer,https://lichess.org/fLaPjyEF#49
GjmxT,r3k3/bppq1p2/p1np1r2/P3p3/1P2P1bP/N1PP1PQ1/6P1/R3KB1R b KQq - 0 18,g4h5 g3g8 e8e7 g8a8,748,82,79,467,crushing middlegame short skewer,https://lichess.org/OoRp6dQ1/black#36
IGDDM,1br2k1Q/p4p2/4pqp1/8/1P5R/r4P2/6PP/4RN1K b - - 10 32,f6h8 h4h8 f8g7 h8c8,767,91,76,109,crushing middlegame short skewer,https://lichess.org/AFh9DVf4/black#64
IhuWZ,2k4r/1pp1p3/1r2qp1b/3p4/3P2p1/Q1P1P1P1/P5P1/R3RNK1 b - - 3 27,e6d6 a3a8 c8d7 a8h8,755,98,94,1321,advantage middlegame short skewer,https://lichess.org/tSrGIHcU/black#54
IlndX,rnbqk3/pp1ppp2/7R/3pP3/3P4/8/PPP2PP1/R3KBN1 b Qq - 0 11,e7e6 h6h8 e8e7 h8d8,675,131,43,28,advantage middlegame short skewer,https://lichess.org/5rPisswI/black#22
Iyt8M,1nb1r1k1/5p2/2p1p1pb/3pP1N1/1N1P1PBP/r7/2P5/2KR3R w - - 0 22,d1d3 a3a1 c1d2 a1h1,653,100,70,108,crushing middlegame short skewer,https://lichess.org/nNR4xlq8#43
J5P6b,r3k3/pp6/2n1p3/3p1n1r/3P1B1P/3PP3/PP6/3K2RR b q - 0 23,c6b4 g1g8 e8d7 g8a8,745,84,100,225,advantage middlegame short skewer,https://lichess.org/uhDjpkHF/black#46
J8Evs,2r2k2/5pp1/pr5B/2p2P1n/2n1P3/P1P4P/2B3R1/2K3R1 b - - 0 34,g7h6 g2g8 f8e7 g8c8,674,97,75,584,advantage middlegame short skewer,https://lichess.org/4KavVZTd/black#68
ti5iN,1rb2rk1/1pN2ppp/p2p4/8/3QP2P/1P1R1P2/q1P3P1/2K4R w - - 1 17,d4d6 a2a1 c1d2 a1h1,772,88,96,1225,crushing middlegame short skewer,https://lichess.org/nN3iEf4r#33
JvfHu,2r2k1r/n4pNp/2q5/pp1p4/8/P3P2P/1Q3PP1/RN2K2R w KQ - 1 23,g7h5 c6c1 b2c1 c8c1 e1d2 c1h1,796,79,100,182,advantage long middlegame skewer,https://lichess.org/3VjgMo30#45
sSRTa,2k5/1p1rb2p/p4p2/2P1pN2/bP2N3/3PP3/3RK1rP/2R5 w - - 0 25,e2e1 g2g1 e1e2 g1c1,774,78,68,229,crushing middlegame short skewer,https://lichess.org/9loBdbS8#49
K3vqI,q4rk1/5pbb/2p1p1pp/1p2P3/4BP1P/1Q6/1PP3P1/2B1K2R w K - 1 22,c1e3 a8a1 e1f2 a1h1,737,85,83,132,advantage middlegame short skewer,https://lichess.org/wHMmY8EE#43
KM6K4,r5k1/5p1p/1nNbpn2/3p1p2/3P1B2/2P1P3/3N1PPP/4K2R w K - 0 19,f4d6 a8a1 e1e2 a1h1,659,94,95,688,advantage middlegame short skewer,https://lichess.org/rWdjB05r#37
KaNYQ,2r3k1/5r2/p5p1/1p1bP1P1/2n1pP2/P2p4/7R/1BBK3R b - - 3 42,g8f8 h2h8 f8e7 h8c8,700,102,84,562,advantage master middlegame short skewer,https://lichess.org/Xlg3hseD/black#84
L4xp7,2kr1b2/pp1n1p2/3p2r1/2p2N1p/3pPB2/1P1P1P2/P1P2P2/R3K2R w KQ - 2 21,h1h5 g6g1 e1d2 g1a1,606,105,79,830,advantage middlegame short skewer,https://lichess.org/My5ofSth#41
LdFcD,4r1k1/4npp1/p6p/1p3P2/3pQ3/P6r/R1BN1P2/4RK1q w - - 3 27,e4h1 h3h1 f1g2 h1e1,781,93,85,193,crushing middlegame short skewer,https://lichess.org/FDzMOVK9#53
LkMYX,r5k1/p1b2ppp/1n6/R1BP4/2P4r/8/3N1PP1/2R2K2 w - - 2 26,g2g3 h4h1 f1g2 h1c1,777,85,98,419,advantage middlegame short skewer,https://lichess.org/kzTBUKyp#51
MSNfs,rn1qkb2/pp2pp2/2p2p2/7p/3P3P/2P4R/PP2BPr1/R1BQK3 w Qq - 0 11,e2h5 g2g1 e1e2 g1d1,719,81,100,269,advantage master middlegame short skewer,https://lichess.org/ngc6UJ7A#21
N3GDn,r3k3/3q4/p1p5/npPp1bpr/PN1Pp2P/2P1PpR1/1R3P2/2KQ1B2 b q - 0 29,g5h4 g3g8 e8f7 g8a8,691,91,90,647,crushing middlegame short skewer,https://lichess.org/v6t4AZSb/black#58
NeVnm,r2q2k1/p4pbp/1ppN1np1/2Pp4/1P6/P3PB1b/1B3Pr1/R2QK2R w KQ - 0 17,h1h3 g2g1 e1e2 g1d1,653,94,87,1115,crushing middlegame short skewer,https://lichess.org/lKIGaOGV#33
tHXPq,1r4k1/p4pb1/r3p1p1/2ppP3/5P2/qPP3PR/P6R/1K5Q b - - 3 28,f7f5 h3h8 g8f7 h8b8,633,86,84,236,crushing master middlegame short skewer,https://lichess.org/oxN8lOaD/black#56
OWpCk,5qk1/bpp2rp1/p5p1/2PP1b2/1P3P2/P7/1B5R/6KQ b - - 5 32,f7d7 h2h8 g8f7 h8f8,679,83,96,315,crushing middlegame short skewer,https://lichess.org/zHC3EnDZ/black#64
OtUhS,r7/2q2k2/2pp1ppQ/1p2pb1p/7R/r1B5/5PPP/4R1K1 b - - 1 30,a3c3 h6h7 f7e6 h7c7,735,100,70,128,advantage middlegame short skewer,https://lichess.org/kBenmCcH/black#60
OwW1f,1r2r3/3n1kb1/R5pp/3Np3/2Pp4/3P2P1/3BPP1P/4K2R w K - 0 23,a6a7 b8b1 d2c1 b1c1 e1d2 c1h1,642,90,97,859,advantage long middlegame skewer,https://lichess.org/HNYEOGGg#45
PAEK2,r1b1k1r1/p4ppp/2p1p3/B6n/8/5P2/PPP2P1P/3RK1R1 b q - 4 15,g7g6 d1d8 e8e7 d8g8,731,97,82,1040,advantage middlegame short skewer,https://lichess.org/CDW8TN4f/black#30
PAqKw,4n3/2N1k2b/2Rn3p/pp1P2p1/5p2/P3rP1P/BP3K1B/8 b - - 0 36,e8c7 c6c7 e7d8 c7h7,717,89,80,445,advantage master middlegame short skewer,https://lichess.org/KzzboRjd/black#72
PLcx2,2rq1k1r/6bp/p1b1p1p1/Pp1pP3/1PpP2P1/8/2PBBK1P/R4Q1R b - - 1 21,f8e7 d2g5 e7d7 g5d8,770,90,97,1459,crushing middlegame short skewer,https://lichess.org/w6sxy4F2/black#42
PNsoD,3q1rk1/2p2ppp/2r5/pN1pp3/P7/4P3/3N1PPP/Q3K2R w K - 0 22,a1e5 c6c1 e1e2 c1h1,676,91,93,473,advantage middlegame short skewer,https://lichess.org/EfMN53b7#43
POots,5rk1/2N2ppp/p2Q4/1bp1P3/8/5N2/qPP3PP/2KR3n w - - 0 19,d1h1 a2a1 c1d2 a1h1,681,100,83,46,advantage middlegame short skewer,https://lichess.org/wPni4Qgu#37
PQpX9,5rk1/5pb1/3P1qpp/2R4P/pQ2p1P1/P3Nb2/5P2/4K1R1 w - - 1 34,d6d7 f6a1 e1d2 a1g1,797,115,67,34,advantage master middlegame short skewer,https://lichess.org/4xDDH9FW#67
PV0vK,rn1qkQ2/4p3/p1ppP1p1/1p1P1b2/6p1/2N5/PPP2P2/2KR3R b - - 0 22,e8f8 h1h8 f8g7 h8d8,733,101,60,52,advantage middlegame short skewer,https://lichess.org/Po06VUyN/black#44
PXurM,r2k2nr/pBp3pp/3p4/6q1/4P3/8/PbP3PP/RN1Q1R1K b - - 0 14,a8b8 f1f8 d8e7 f8b8,759,97,95,645,advantage middlegame short skewer,https://lichess.org/ANZWS57C/black#28
PjKS0,2kr2nr/2p2p1p/2B5/1pb3p1/5p1P/2P5/PP4P1/R1B2K1R w - - 1 18,h4g5 d8d1 f1e2 d1h1,634,93,88,1993,crushing middlegame short skewer,https://lichess.org/C4x5hCNd#35
PpIh3,rn2k2r/pp3ppp/4b3/8/8/2R5/PP2PPPP/4KBNR b Kkq - 0 15,e6a2 c3c8 e8e7 c8h8,755,84,83,265,crushing middlegame short skewer,https://lichess.org/lyIHg99y/black#30
Ppt4R,r3r1k1/p3ppbp/2p3p1/q2p2PP/1p1P1B2/P2RP1Q1/1PP2P2/2K4R w - - 0 19,a3b4 a5a1 c1d2 a1h1,769,93,90,744,crushing middlegame short skewer,https://lichess.org/dk620r0g#37
PzYiJ,r4rk1/pp3pp1/2p2q1p/3p4/P2P3P/N1P1P3/1PQ4b/R2K3R w - - 0 19,h1h2 f6f1 d1d2 f1a1,658,95,84,299,advantage middlegame short skewer,https://lichess.org/575o0kXH#37
yUUKF,2r3k1/5pp1/4pbp1/n2p3P/3P4/q1PQ1N2/2B2PP1/5RK1 b - - 0 23,g6h5 d3h7 g8f8 h7h8 f8e7 h8c8,777,77,100,460,crushing long middlegame skewer,https://lichess.org/ENtSzcpA/black#46
QJXA5,1q4k1/1p3pp1/p3b2p/2b5/2P1Q3/PP1B3P/1B1r1PP1/5RK1 b - - 2 21,d2b2 e4h7 g8f8 h7h8 f8e7 h8b8,793,89,88,486,crushing long middlegame skewer,https://lichess.org/VCUYGOb6/black#42
QL0C1,rn2k2r/ppRb1ppp/4p3/3p4/3P4/P7/1P2PPPP/4KBNR b Kkq - 0 12,d7c6 c7c8 e8e7 c8h8,690,92,91,1686,crushing middlegame short skewer,https://lichess.org/uLgUPkHD/black#24
QN6rP,r4rk1/5pp1/p2p3p/1p1Pp3/4P3/q1pRQN1P/2P3P1/3K3R w - - 0 22,d3c3 a3a1 d1d2 a1h1,774,98,96,2373,crushing middlegame short skewer,https://lichess.org/ahIIKizx#43
QNfyK,4k2r/p1rn1pp1/1p2p2p/3pP3/Pb1P4/5N1P/1B3PP1/R1R3K1 b k - 1 20,c7b7 c1c8 e8e7 c8h8,732,89,71,252,crushing middlegame short skewer,https://lichess.org/jizqKkFG/black#40
QOwqc,r2k2nr/3p2pp/b1p5/p1P1p3/2B1P3/8/PP4PP/RN3RK1 b - - 2 15,a6c4 f1f8 d8c7 f8a8,696,98,90,1319,crushing middlegame short skewer,https://lichess.org/aVnVjToK/black#30
QaSTK,2r3k1/p4ppp/1p2n3/4b3/P3Q3/1P4PP/R1B2P1K/2q5 b - - 2 27,e5f6 e4h7 g8f8 h7h8 f8e7 h8c8,798,113,92,670,crushing long middlegame skewer,https://lichess.org/STSisR9a/black#54
Ql75S,r3k2r/ppp2npp/2q2p2/8/3P2QP/1P2P3/P2P1PP1/RN2K2R w KQkq - 1 16,g4g7 c6c1 e1e2 c1h1,767,93,86,422,advantage middlegame short skewer,https://lichess.org/d9eHuXSy#31
QuMPE,5rk1/2p2p1p/5n2/p5p1/1r1PP3/3P2B1/2R1NPPP/5K1R w - - 1 24,c2a2 b4b1 e2c1 b1c1 f1e2 c1h1,770,82,83,239,advantage long middlegame skewer,https://lichess.org/tgmv5DB8#47
wstWH,r3qk2/pp1n2r1/2p2p2/P1P2P2/2BpPb2/5K2/1PQ2P2/R6R b - - 5 31,f4g5 h1h8 f8e7 h8e8,696,98,83,512,advantage middlegame short skewer,https://lichess.org/O58Z0NoC/black#62
RwGi5,1nr1kb1r/pp2nppp/4p3/1P1pP3/3P4/P4N2/3B1PPP/RN2K2R w KQk - 1 14,d2b4 c8c1 e1e2 c1h1,679,89,83,406,crushing middlegame short skewer,https://lichess.org/ky8JOpKQ#27
wvjcn,2r3k1/1p3bp1/p1n1pq2/3p2b1/1P1P4/PN2P2Q/6P1/R3K2R b KQ - 3 23,g8f8 h3h8 f8e7 h8c8,768,91,79,271,advantage middlegame short skewer,https://lichess.org/WJmrgZkK/black#46
S5G9O,r5k1/p2nB2p/1p2R1p1/5p2/1P6/3B1P2/P4P1q/b2Q1K2 w - - 0 22,d1a1 h2h1 f1e2 h1a1,661,85,96,3138,crushing middlegame short skewer,https://lichess.org/s083fAB6#43
SC2uN,r5k1/pp4b1/2p3r1/4p1q1/4RpB1/P2P1Q2/1PP2P2/R4K2 w - - 5 28,g4h3 g5g1 f1e2 g1a1,742,91,81,188,advantage middlegame short skewer,https://lichess.org/DsHUIFHs#55
ShdGI,r4k2/pp3pp1/2p1p3/2npPb1Q/5qnP/P1N5/1PPN1P2/2KR2R1 b - - 2 20,g4f2 h5h8 f8e7 h8a8,792,111,95,1262,advantage middlegame short skewer,https://lichess.org/yB9tKbKD/black#40
Si2Vl,2r2rk1/1pq1ppbp/p2p1np1/3P4/P1N1P3/1Q2BP2/1P3P1P/2R1K2R w K - 3 16,c4b6 c7c1 e3c1 c8c1 e1e2 c1h1,785,80,69,83,advantage long middlegame skewer,https://lichess.org/QjfoaqrL#31
SsnVe,r1b1kbr1/3n1p2/2pp3p/pp2p3/4P3/PBNP4/1PP1NPqP/R2QKR2 w Qq - 6 18,f1g1 g2g1 e2g1 g8g1 e1d2 g1d1,730,93,84,141,crushing long middlegame skewer,https://lichess.org/y1uFmpLo#35
zJ6H6,2r5/pp3kb1/3p1pp1/N2N1p2/3Pp3/P3P3/2r2PP1/R3K2R w KQ - 4 24,a5b7 c2c1 a1c1 c8c1 e1d2 c1h1,719,84,89,313,advantage long middlegame skewer,https://lichess.org/VGAqcKp4#47
Sz0cW,6rr/1bqk1p2/p2p4/2p2Rpp/PpPbP3/1P1P3P/3NB1P1/1R1Q3K b - - 0 22,g5g4 f5f7 d7d8 f7c7,769,90,95,2619,crushing middlegame short skewer,https://lichess.org/upfMrqKG/black#44
TIAkM,r4k1r/pp1Q2pp/1b3p2/4q3/8/2P4P/PPP2PP1/R2R2K1 b - - 1 20,a8d8 d7d8 b6d8 d1d8 f8f7 d8h8,789,87,77,248,advantage long middlegame skewer,https://lichess.org/aemzwYEt/black#40
TrwUn,3k3r/2r3pp/1q2Bp2/np2pP2/3p4/Q7/2P1RP1P/1R4K1 b - - 7 35,a5c4 a3a8 d8e7 a8h8,735,87,90,349,crushing middlegame short skewer,https://lichess.org/wj4H71YG/black#70
t9waY,rn4kr/pp2bqpp/2p5/8/8/8/PPP1QPPP/R1B1R1K1 b - - 1 17,e7f6 e2e8 f7e8 e1e8 g8f7 e8h8,796,91,100,102,advantage kingsideAttack long middlegame skewer,https://lichess.org/x226bQRD/black#34
UmKcP,r1bk4/1p4R1/2p2rB1/3pn2P/p7/P1P1P3/1P6/2K3R1 b - - 1 34,c8d7 g7g8 d8c7 g8a8,757,95,95,246,advantage middlegame short skewer,https://lichess.org/cM5E6oYS/black#68
Vqr5D,r3k1r1/ppp2p1p/2q1bQ2/3p4/6P1/1P1P3P/P2P1P2/RN2K2R w KQq - 1 16,f2f4 c6c1 e1f2 c1h1,719,86,87,287,advantage middlegame short skewer,https://lichess.org/iFc3PAlm#31
rEo1N,4r2r/2p2k2/pp1b4/3Pp1p1/P1P1BpP1/2B2R2/1P4Q1/R4K1q w - - 1 32,g2h1 h8h1 f1e2 h1a1,774,83,62,101,advantage master middlegame short skewer,https://lichess.org/xcFmzHs4#63
WSfdp,r2qk3/pp2pp1Q/6r1/5n2/8/2N5/PPP2PP1/R1B1K3 b Qq - 0 18,d8a5 h7h8 e8d7 h8a8,707,89,70,274,crushing master masterVsMaster middlegame short skewer,https://lichess.org/VnjJLxV0/black#36
z53sz,1r3rk1/p1R2ppp/1p2pn2/8/3P4/3Q1B1P/PP3PPq/2R2K2 w - - 3 21,c7a7 h2h1 f1e2 h1c1,671,88,97,2562,crushing middlegame short skewer,https://lichess.org/1q9qDSZx#41
YGzRw,2r1k2r/p2n1pp1/p6p/4pQ1P/4P1P1/3P4/P1q1NP2/R3K1R1 w k - 5 24,a1c1 c2c1 e2c1 c8c1 e1d2 c1g1,748,89,85,231,crushing long middlegame skewer,https://lichess.org/lgwZLqHI#47
YH194,r1b3k1/pp4pp/2p1p3/5r2/3PQ3/3BP3/PPP2qPP/R2K3R w - - 4 16,h1f1 f2f1 d3f1 f5f1 d1d2 f1a1,796,97,92,339,advantage long middlegame skewer,https://lichess.org/5YIAqZeg#31
YIbKZ,1q6/4nk1Q/3p2p1/2pPp3/2p1Pn2/2B2P2/rP1K4/1R6 b - - 17 41,f7e8 h7h8 e8d7 h8b8,746,96,92,715,crushing master middlegame short skewer,https://lichess.org/YrUSWojN/black#82
ZTceS,3rkb1r/6pp/p4p2/2p4b/PpPN4/4P2P/1PP3P1/RN2K2R w KQk - 0 17,d4e6 d8d1 e1f2 d1h1,692,95,78,250,crushing middlegame short skewer,https://lichess.org/HmxRIZEu#33
ZmyD0,5rk1/pp1qn1pp/5p2/3p1B2/3P2P1/P3P3/1Pr2PP1/RN2K2R w KQ - 0 18,f5d7 c2c1 e1d2 c1h1,700,97,93,763,advantage middlegame short skewer,https://lichess.org/6urdvST2#35
z6ETG,r1b1k1nr/ppp2pp1/2p5/7p/2B1P3/1P3K2/P1P3PP/RNB4R w kq - 0 11,h1d1 c8g4 f3e3 g4d1,757,94,91,1468,advantage middlegame short skewer,https://lichess.org/MNeX0Vhc#21
aeMT7,r3k3/1p1bnp2/n1p1p1pQ/q2pP3/3P2P1/pPNN4/P1P5/1K1R1B2 b q - 0 20,a5c3 h6h8 e7g8 h8g8 e8e7 g8a8,709,82,67,125,advantage long middlegame skewer,https://lichess.org/iJ9Tinu2/black#40
b3MD0,r4rk1/pp3pp1/3R3p/2p1P2n/6Q1/4B3/qPP2PPP/2K4R w - - 0 17,e3h6 a2a1 c1d2 a1h1,635,90,96,3104,advantage middlegame short skewer,https://lichess.org/lkGVSraT#33
bpZ3h,r2k3r/1pp2p2/p1np4/2P1p3/4P3/PBP5/1P3Pp1/RN2R1K1 w - - 0 17,c5d6 h8h1 g1g2 h1e1,647,99,95,1204,advantage kingsideAttack middlegame short skewer,https://lichess.org/6f22ddVe#33
tVi1w,r5k1/p1p2p2/2ppr3/2b1p2Q/5q1P/3P3P/PPP2P2/1K1R3R b - - 2 18,g8f8 h5h8 f8e7 h8a8,657,94,89,787,advantage middlegame short skewer,https://lichess.org/M3GZA0S7/black#36
y7Jg7,5nr1/1p2R3/1k2p3/p2pP2p/3P3p/1P3N1P/5Nr1/1R3K2 w - - 0 33,f3h4 g2g1 f1e2 g1b1,722,86,95,287,advantage middlegame short skewer,https://lichess.org/f6ukjEJE#65
cXfTr,2r3k1/5ppp/p1Pbp3/Bp1n3q/P3Qn2/5N1P/2B2PP1/2R3K1 b - - 4 29,h7h6 e4h7 g8f8 h7h8 f8e7 h8c8,797,82,90,70,crushing long middlegame skewer,https://lichess.org/QGHcmXpr/black#58
d7iOy,2r1k2r/2qnbpp1/4pn2/p6p/1p1PN2P/PQ1BBP2/1P3P2/R3K2R w KQk - 1 18,a1c1 c7c1 e3c1 c8c1 e1e2 c1h1,742,98,93,1092,crushing long middlegame skewer,https://lichess.org/DhKqyUz9#35
dDTQg,2b1k1nr/1ppp1pRp/1b6/1N1PP3/8/8/r1PBBPPP/4K2R w Kk - 0 18,e2d3 a2a1 e1e2 a1h1,797,96,91,1519,advantage middlegame short skewer,https://lichess.org/6lkTVhbv#35
dTJ9y,5q2/p3r1kp/3b2p1/3b1r2/3P3P/P3B1P1/1P1Q1P2/2R2RK1 b - - 2 29,f5f3 e3h6 g7h8 h6f8,790,104,95,502,crushing middlegame short skewer,https://lichess.org/6A9geWv5/black#58
dVcMA,4k2r/p4p1p/B1b1p2p/1pqpP3/P7/5N2/3N1RPP/1R4K1 b k - 0 19,b5a4 b1b8 e8e7 b8h8,796,81,92,293,advantage middlegame short skewer,https://lichess.org/qqiZHd17/black#38
dWu1E,r1bq2k1/ppb2p1R/2p5/4p1r1/2PP4/3Q4/PP1KBPP1/7R b - - 1 23,g8f8 h7h8 f8e7 h8d8,654,84,100,431,crushing middlegame short skewer,https://lichess.org/1udpB6ZJ/black#46
dkvum,1r5q/p1pb1kp1/3p1p2/2pPp1p1/P1B1P2r/1P4R1/2P1NPR1/4Q1K1 w - - 10 29,f2f3 h4h1 g1f2 h1e1,777,93,84,649,advantage kingsideAttack middlegame short skewer,https://lichess.org/qqJSr3n4#57
e6DRL,3rkbnr/ppp2pp1/2n5/4N2p/5B2/4P3/PPP1bPPP/RN2K2R w KQk - 0 9,e5c6 d8d1 e1e2 d1h1,730,94,81,345,advantage middlegame short skewer,https://lichess.org/dCqqJg18#17
tFdt7,1k5r/1p3ppp/1Pn1p3/2bpP3/2p2B2/2Pb4/RP1K1PPP/R7 b - - 5 22,c5b6 a2a8 b8c7 a8h8,754,80,100,509,advantage middlegame short skewer,https://lichess.org/u0yMUcJ3/black#44
eaiQt,3r1bnr/pkp1pppp/8/8/b1B5/4B3/PP3PPP/RN2K2R w KQ - 2 12,c4f7 d8d1 e1e2 d1h1,722,97,93,1449,crushing middlegame short skewer,https://lichess.org/7e2bTrmx#23
vIuoC,4kb1r/5pp1/R3p2p/n2pP3/P2P1P2/2r2N2/5KPP/R7 b k - 0 22,f8b4 a6a8 e8d7 a8h8,792,101,93,607,crushing master middlegame short skewer,https://lichess.org/cbyoi8hS/black#44
fshNr,r5k1/pp3r1p/3p2nP/2pP4/2P1p2q/2Q3R1/PP2NPP1/R3K3 w Q - 3 20,c3e3 h4h1 e1d2 h1a1,770,90,89,842,crushing middlegame short skewer,https://lichess.org/xQw5BcOd#39
ge65t,n1r1q2r/1k4p1/R3p1Pp/1p1pPp2/1P6/3BP1Q1/5PP1/4K2R w K - 2 28,a6d6 c8c1 e1e2 c1h1,696,98,95,944,crushing middlegame short skewer,https://lichess.org/wG9dRwIi#55
rGbFT,r3rk2/pp3p2/2p2p2/5Pp1/2nP4/2P1B2Q/1P2RP1P/qBK5 b - - 2 25,e8e4 h3h8 f8e7 h8a8,715,88,93,640,advantage middlegame short skewer,https://lichess.org/0yP1U17R/black#50
zyN9u,4k2r/1pB5/p1p2p1n/6p1/1bb1P1P1/2N2PN1/PPPr4/3RR1K1 b k - 2 19,d2c2 d1d8 e8f7 d8h8,759,85,96,1233,crushing middlegame short skewer,https://lichess.org/EVAn41V6/black#38
hA0F7,4k1r1/2Rb1p2/p3p2b/n2pPp1p/1p1P4/1P3N2/1B1N1PPP/6K1 b - - 0 23,d7b5 c7c8 e8e7 c8g8,782,99,95,1812,advantage master middlegame short skewer,https://lichess.org/o7CQM6DF/black#46
hFZ09,rn2k2r/ppR2ppp/2b2p2/3P4/8/5N2/PP2PPPP/4KB1R b Kkq - 0 14,c6d5 c7c8 e8e7 c8h8,748,87,98,598,crushing middlegame short skewer,https://lichess.org/0LuV6fQR/black#28
hqQ8S,r3k2r/pp3p2/2Pp1b2/3Pp2B/2P1P3/2N4b/P4P2/R5RK b q - 0 23,h8h5 g1g8 e8e7 g8a8,778,81,78,81,advantage middlegame short skewer,https://lichess.org/m4XHjKSc/black#46
htqBn,2r2k2/pp3ppQ/4pb2/n2p4/3P3P/2P5/Pq1N1PP1/R4RK1 b - - 0 19,b2d2 h7h8 f8e7 h8c8,646,85,96,1651,crushing middlegame short skewer,https://lichess.org/AQgrzUM9/black#38
hxtAs,r2q2k1/pp3pp1/2p2B1p/b2pr3/6b1/2PQ4/PPB2PPP/RN3RK1 b - - 0 15,d8f6 d3h7 g8f8 h7h8 f8e7 h8a8,724,96,86,523,advantage long middlegame skewer,https://lichess.org/htKV9fO4/black#30
hyHU9,r5k1/5rb1/4p1p1/1q1pPpP1/2p2P2/2P1P2R/p2B2KQ/7R b - - 1 37,g8f8 h3h8 f8e7 h8a8,695,101,93,350,advantage middlegame short skewer,https://lichess.org/PtXovgJP/black#74
i3V1c,r3k3/1p1qnpp1/p3p3/3pP2Q/1r6/1P5P/1P1N1PK1/2R1R3 b q - 1 22,e7f5 h5h8 e8e7 h8a8,785,96,84,345,crushing middlegame short skewer,https://lichess.org/nyEbJlsJ/black#44
ioebv,r7/1pp2kp1/p2b1q2/3p3Q/b2P4/2P1B2P/P4PP1/R5K1 b - - 2 20,f7f8 h5h8 f8e7 h8a8,693,102,82,260,advantage middlegame short skewer,https://lichess.org/XKuVqxhX/black#40
jG80o,r4rk1/5bb1/3R1p1p/1p4p1/4P1P1/4BP2/1PP5/2K2B1R w - - 2 25,f1b5 a8a1 c1d2 a1h1,700,82,45,170,advantage middlegame short skewer,https://lichess.org/RYQoUBAq#49
jHcif,4kb1r/6pp/1B2b3/4pp2/1P2p3/2r3P1/3R1PBP/5RK1 b k - 0 18,f8b4 d2d8 e8f7 d8h8,639,88,99,1395,advantage master middlegame short skewer,https://lichess.org/PMJHXblQ/black#36
jIPA6,2r3k1/5rp1/1q2p2p/pp1pP3/2n5/3Q3P/5PP1/RB3RK1 b - - 0 30,c4e5 d3h7 g8f8 h7h8 f8e7 h8c8,789,82,91,89,advantage long middlegame skewer,https://lichess.org/4bhshwUv/black#60
jabOB,r1b2Qkr/1pp3p1/7p/4P3/pb6/4P3/PPP2PPP/2KR2NR b - - 0 15,g8f8 d1d8 f8f7 d8h8,768,215,0,6,crushing middlegame short skewer,https://lichess.org/cKXcS6VB/black#30
jjC6w,5bk1/1p2p2r/p1np4/2pNp1Bq/4P3/P2P4/1PPQ2PN/1R4K1 w - - 0 31,h2f3 h5h1 g1f2 h1b1,750,84,96,3312,advantage middlegame short skewer,https://lichess.org/nh8JiADT#61
jjyO3,r2k4/pppb4/3p3r/2nPp2P/4P3/2N2RP1/PPP5/2K4R b - - 0 27,d7g4 f3f8 d8e7 f8a8,719,93,92,1061,crushing middlegame short skewer,https://lichess.org/rIzAsQuZ/black#54
rugyd,1r3k1r/1qpQ2pp/b1p2b2/4p3/4PP2/1PN5/P1P3PP/2KR3R b - - 0 18,b8d8 d7d8 f6d8 d1d8 f8f7 d8h8,798,99,60,64,advantage long middlegame skewer,https://lichess.org/SL42X0Vx/black#36
k5ZTq,r4k1r/1p4pp/p1p2bq1/8/3PP3/P1P2Q2/BP3P1P/R1B1K3 w Q - 1 20,c1e3 g6g1 e1e2 g1a1,723,95,84,338,crushing middlegame short skewer,https://lichess.org/GQOKuGNX#39
kKS1J,1r2k2r/p2q1pp1/2p1b2p/3p1p2/Q2P4/2bBP3/PPR2PPP/4K2R w Kk - 0 16,b2c3 b8b1 e1e2 b1h1,678,87,97,2954,crushing master middlegame short skewer,https://lichess.org/WqSfZxFe#31
kMjJk,4r1k1/pp4p1/8/3pnPB1/3N4/q1P5/P1PK3R/7R b - - 2 26,e8c8 h2h8 g8f7 h8c8,678,92,84,668,crushing master middlegame short skewer,https://lichess.org/MuEKZenL/black#52
kPL9g,r7/2q5/p4kn1/1pp2bBQ/8/P1P5/2P4P/R5K1 b - - 1 32,f6f7 h5h7 f7e6 h7c7,776,93,86,287,crushing middlegame short skewer,https://lichess.org/uuEyHYcS/black#64
kQvKN,2n1k3/1R2bn2/p1N2p2/2P1p3/4P3/3P4/5p1r/2R2KN1 w - - 0 34,g1f3 h2h1 f1f2 h1c1,741,80,89,298,advantage middlegame short skewer,https://lichess.org/qtrYgIvF#67
krGZI,r3k1r1/p1pqnp2/1pn2B2/3pP2p/3P4/2N5/PP3P2/R2QK2R w KQq - 0 18,h1h5 g8g1 e1d2 g1d1,789,92,87,248,crushing middlegame short skewer,https://lichess.org/uFAr4SK2#35
ksFh0,4n3/1R4p1/n6p/5b2/1bN1k3/4P3/1P2K1PP/2R5 w - - 2 27,c1d1 f5g4 e2f2 g4d1,761,78,100,456,advantage middlegame short skewer,https://lichess.org/HNA4WHcV#53
l1fYm,r6r/1pQ2pk1/p3ppp1/3p3q/3P4/2P1R3/PP1N1P2/R5K1 w - - 10 25,g1f1 h5h1 f1e2 h1a1,685,93,65,265,crushing middlegame short skewer,https://lichess.org/yMdCvzxb#49
l5Rqj,r5kr/N4p2/6pq/1N1PQ3/4P3/P4PP1/2R3K1/8 w - - 1 39,g2f2 h6h2 f2e3 h2c2,746,93,94,172,advantage master middlegame short skewer,https://lichess.org/J4Svm1BE#77
lZL7t,rn2kb1r/p5pp/4pp2/3p4/Pp1P4/4P3/1P1B1PPP/2R1K1NR b Kkq - 1 13,f8d6 c1c8 e8f7 c8h8,777,82,95,214,advantage middlegame short skewer,https://lichess.org/2uGoeVUe/black#26
uuc9S,rn2k2r/pbRp1ppp/1p6/3pP3/3P4/8/PP1KNPPP/5B1R b kq - 3 13,b7c6 c7c8 e8e7 c8h8,772,92,86,847,crushing middlegame short skewer,https://lichess.org/A18QwO2n/black#26
mOj6U,2r3k1/p4pp1/5n1p/np1P2q1/8/3QP3/PPB3P1/R3N1K1 b - - 1 24,f6d5 d3h7 g8f8 h7h8 f8e7 h8c8,795,122,69,25,advantage long middlegame skewer,https://lichess.org/72AnYSHs/black#48
nfoos,4rk2/1p4r1/p2p1p2/4b1p1/P1B1PnR1/1PP5/1BK5/7R b - - 0 33,e8c8 h1h8 f8e7 h8c8,751,78,97,248,advantage master middlegame short skewer,https://lichess.org/VTmzmnkY/black#66
nt7K9,1r4k1/5pp1/p3p3/3pPb2/3q1P1Q/PPr5/K1P4R/2R5 b - - 5 28,g8f8 h4h8 f8e7 h8b8,745,112,63,33,advantage middlegame short skewer,https://lichess.org/SvQ0U1vu/black#56
o4Zgj,r7/2rbk1n1/3p1q1p/pP1Pp3/P3BpP1/3Q1N1P/1P3P2/R3K2R w KQ - 5 24,a1a3 c7c1 e1d2 c1h1,743,97,85,596,advantage middlegame short skewer,https://lichess.org/QLffCU5E#47
oLe1J,2r3nr/p1B1k1bp/5pp1/8/8/3PP2P/PP3PP1/RN2K2R w KQ - 1 16,c7f4 c8c1 e1e2 c1h1,709,90,69,182,crushing middlegame short skewer,https://lichess.org/bO0LOG7A#31
oq8pM,7r/1p1bkpp1/2p1p1np/8/P2Pp3/2q1P1Q1/3N1PPP/R3K2R w KQ - 0 20,a1a2 c3c1 e1e2 c1h1,714,103,82,175,advantage middlegame short skewer,https://lichess.org/CiY8rEsl#39
pDPhT,r2k4/2p3r1/1p2p2p/pPnp4/2P3b1/N5P1/P1B4P/R3KR2 b Q - 2 24,d5d4 f1f8 d8e7 f8a8,752,87,60,163,advantage middlegame short skewer,https://lichess.org/9cfozQAk/black#48
rbsH0,rn2k2r/p2p1p1p/1p2pp2/q1p5/3P4/4P3/2RN1PPP/3QKR2 b kq - 0 16,c5d4 c2c8 e8e7 c8h8,794,84,89,205,advantage middlegame short skewer,https://lichess.org/NCaEKL8B/black#32
paIKT,r4rk1/2p2ppp/2R2n2/1p2N3/3P4/4PQ1b/q2N1P1P/4K1R1 w - - 0 22,c6f6 a2a1 e1e2 a1g1,717,89,98,381,advantage middlegame short skewer,https://lichess.org/ufWIFCyP#43
pp3Ts,1kr2b1r/pp3ppp/2qp1n2/3np3/1PP1P3/P2QBN2/5PPP/2R1K2R w K - 0 16,c4d5 c6c1 e3c1 c8c1 e1e2 c1h1,652,96,93,1017,crushing long middlegame skewer,https://lichess.org/vkY9G9yt#31
qEzmT,r3k3/3b1p2/1pnnp1p1/p2p2P1/1P1P4/P3PN2/3NKPB1/7R b q - 0 25,a5b4 h1h8 e8e7 h8a8,785,92,82,189,crushing master middlegame short skewer,https://lichess.org/OxW0z271/black#50
qN7QR,r1b1r1k1/ppp2N2/7p/6p1/2P1n3/7P/PP2BPP1/R4RK1 b - - 0 17,g8f7 e2h5 f7f6 h5e8,765,88,96,1145,crushing middlegame short skewer,https://lichess.org/qOOGuIZO/black#34
qdvDn,8/5k1q/p2r4/Pp2Bp2/2p1pPp1/2P2bPr/2RR3P/5QK1 b - - 4 54,d6h6 d2d7 f7e8 d7h7,797,81,70,103,advantage middlegame short skewer,https://lichess.org/DoYbnRP2/black#108`,
  },
  {
    id: 'opening', color: '#E8740C', title: 'Тактики в дебюте', short: 'Тактики в дебюте',
    // task_opening800.csv, rating up to 800
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
uJrzG,rnb1k1nr/ppp2ppp/3p4/2b1p3/2B1P2q/3P3P/PPP1QPP1/RNB1K1NR b KQkq - 0 5,c5f2 e2f2 h4f2 e1f2,707,94,95,1160,advantage opening short,https://lichess.org/8tHGwqcx/black#10
co2j5,rn1qk1nr/1ppbbp1p/p2pp3/6p1/2BPP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 0 7,c1g5 e7g5 f3g5 d8g5,665,84,94,184,advantage opening short,https://lichess.org/qWB3vDfE#13
FBJdR,rnbq1rk1/pp1p1ppp/4pn2/2p3B1/1bPP4/2N2N2/PP2PPPP/2RQKB1R b K - 5 6,f6e4 g5d8,799,96,87,866,crushing oneMove opening,https://lichess.org/VvUT5C95/black#12
XlwSH,r1b1kbnr/ppp2p1p/2np1qp1/4p3/2B1P3/1Q6/PPPP1PPP/RNB1K1NR w KQkq - 4 6,c4f7 f6f7 b3f7 e8f7,601,89,84,156,advantage opening short,https://lichess.org/QNFL3QQx#11
TPiTv,r1b1kbnr/pppp1p1p/5qp1/n3p3/2B1P3/1Q6/PPPP1PPP/RNB1K1NR w KQkq - 4 6,c4f7 f6f7 b3f7 e8f7,628,90,87,431,advantage opening short,https://lichess.org/YvKsf8fh#11
MsG57,rn1qkbnr/pp3ppp/2p1p3/3p1bB1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq - 1 5,h7h6 g5d8,695,96,88,719,crushing oneMove opening,https://lichess.org/xAjdb8lG/black#10
hqEQA,r1bq1rk1/pp3ppp/2nb1n2/2ppp3/8/PP1PP3/1BPNBPPP/1R1QK1NR b K - 2 8,c8g4 e2g4 f6g4 d1g4,633,98,86,305,advantage opening short,https://lichess.org/KLypTU3X/black#16
pcqlO,r2qkb1r/1bpp1ppp/1p3n2/p1n5/2P1p3/P1NPP3/1PQBNPPP/R3KB1R w KQkq - 0 11,d3d4 c5d3 c2d3 e4d3,749,106,94,1321,crushing opening short,https://lichess.org/l1LMVrrM#21
BEufk,r2qk2r/ppp1bppp/2np1n2/4p2b/4P3/2NP3P/PPP1BPPN/R1BQ1RK1 b kq - 2 8,e8g8 e2h5 f6h5 d1h5,733,100,98,715,crushing opening short,https://lichess.org/Uohwh09N/black#16
ahsXw,r1b1kbnr/pppp1ppp/2n2q2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4,h5f7 f6f7 c4f7 e8f7,682,96,74,127,advantage opening short,https://lichess.org/AWmtqSGH#7
g1WRs,rnbqkb1r/pp2pp1p/2p2np1/3p4/3P3P/4P3/PPP1BPP1/RNBQK1NR b KQkq - 2 5,c8g4 e2g4 f6g4 d1g4,674,100,82,285,crushing opening short,https://lichess.org/eF5wqhrl/black#10
J6Uqk,r1bq1rk1/pp1nbpnp/3p2pB/2pPp3/2P1P3/1PN2N2/P3BPPP/R2Q1RK1 w - - 2 11,f3g5 e7g5 h6g5 d8g5,716,96,89,1496,advantage opening short,https://lichess.org/Z9uG928j#21
fD2dT,rnbqkb1r/pp2pppp/2p4n/3pP3/5P2/8/PPPPB1PP/RNBQK1NR b KQkq - 2 4,c8g4 e2g4 h6g4 d1g4,694,104,89,1201,advantage opening short,https://lichess.org/VeJlbNt1/black#8
XyPuN,r1bqk2r/1pp1bp2/p1n2n1p/4p1p1/3pP1PP/PP1P1B2/2P2P2/RNBQK1NR b KQkq - 0 10,f6g4 f3g4 c8g4 d1g4,703,96,90,1008,advantage opening short,https://lichess.org/j3KbrLVU/black#20
0nfGf,r1b1kb1r/pp2pppp/1np5/q1Pp4/3PnB2/2N1P3/PP2NPPP/R2QKB1R b KQkq - 0 8,b6a4 d1a4 a5a4 c3a4,702,94,86,806,crushing opening short,https://lichess.org/NswWDUnn/black#16
Mtcwl,rnb1kb1r/pp2qppp/2pp1n2/4p2Q/2B1P3/2N2N2/PPPP1PPP/R1B1K2R w KQkq - 4 6,h5f7 e7f7 c4f7 e8f7,652,101,84,529,crushing opening short,https://lichess.org/MMgkzny1#11
6744Q,r1b1k1nr/pppp1ppp/5q2/2b1p2Q/2BnP3/2N2N2/PPPP1PPP/R1B1K2R w KQkq - 8 6,c4f7 f6f7 h5f7 e8f7,677,91,88,626,advantage opening short,https://lichess.org/mGWBx13h#11
cbqXh,rn1qkbnr/pp3ppp/2p1p3/3pP2b/5PP1/7P/PPPPN3/RNBQKB1R w KQkq - 0 7,g4h5 d8h4 e2g3 h4g3,725,103,57,34,advantage opening short,https://lichess.org/IVwCLiYq#13
3z4Yv,r1bq1rk1/ppp1bppp/2np1n2/4p3/7P/1P1PP3/PBPNBPP1/R2QK1NR b KQ - 0 7,c8g4 e2g4 f6g4 d1g4,724,104,95,549,advantage opening short,https://lichess.org/Dl1sHnnq/black#14
hd28u,rn1qk1nr/pbp1bppp/1p1pp3/6B1/4P3/2PP1N2/PP3PPP/RN1QKB1R w KQkq - 2 6,b1d2 e7g5 f3g5 d8g5,750,174,65,16,crushing master opening short,https://lichess.org/q2JeaJTi#11
2XA6I,r2qkr2/1bpp1ppp/p1nb1n2/1p1Bp1N1/4P3/2NP4/PPP2PPP/R1BQK2R w KQq - 4 9,d5f7 f8f7 g5f7 e8f7,797,92,80,191,advantage opening short,https://lichess.org/zs8JMTQo#17
4FGEF,rnbqkb1r/pp1pn1p1/4p2p/2p1Pp2/3P3B/2P5/PP3PPP/RN1QKBNR b KQkq - 1 6,g7g5 d1h5 e7g6 h5g6,692,100,95,757,crushing opening short,https://lichess.org/sdiJXT59/black#12
KLeTB,rnb1k1nr/pppp1ppp/3b1q2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4,h5f7 f6f7 c4f7 e8f7,637,93,74,312,advantage opening short,https://lichess.org/qxXaE789#7
dhVWQ,r3kbnr/pp1bpppp/3p4/q1p3P1/2PnPP1P/2NP4/PP2B3/R1BQK1NR b KQkq - 2 9,d7a4 d1a4 a5a4 c3a4,704,90,60,90,advantage opening short,https://lichess.org/ynUxRL8a/black#18
GcyZ6,r1b1kbnr/ppppqppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 2 4,c4f7 e7f7 h5f7 e8f7,730,88,88,316,crushing master opening short,https://lichess.org/nZbPPMDP#7
xUI3c,r1b1k2r/p1ppqppp/1pn2n2/2b1p3/2Q1P3/1B3N2/PPPP1PPP/RNB1K2R w KQkq - 0 7,c4f7 e7f7 b3f7 e8f7,618,105,71,114,advantage opening short,https://lichess.org/hfIj4Epe#13
DiTcr,rnbqk2r/pppnbppp/3pp3/6B1/2PP4/2N2N2/PP2PPPP/R2QKB1R w KQkq - 4 6,e2e4 e7g5 f3g5 d8g5,740,84,86,113,crushing master opening short,https://lichess.org/qE0doSpJ#11
JgC8Q,rn1qk2r/pbpp1ppp/1p2pn2/8/1bPPP3/2NB4/PPQ2PPP/R1B1K1NR b KQkq - 2 6,f6e4 d3e4 b7e4 c2e4,755,106,93,498,crushing master opening short,https://lichess.org/NDK2fyRW/black#12
cPelV,rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP1P1/2N5/PP2BP1P/R1BQK1NR b KQ - 0 6,f6g4 e2g4 c8g4 d1g4,761,102,96,657,advantage opening short,https://lichess.org/c3NZdWTS/black#12
g93Gt,r1bq1rk1/pppnbppp/2np4/4p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 1 8,f3g5 e7g5 c1g5 d8g5,772,89,81,238,advantage opening short,https://lichess.org/2vfOCocE#15
OpsEt,r1b1kb1r/ppppqppp/2n2n2/4p3/2B1P3/1QP5/PP1P1PPP/RNB1K1NR w KQkq - 5 5,c4f7 e7f7 b3f7 e8f7,629,110,80,330,crushing opening short,https://lichess.org/OBcYBACa#9
XVYfJ,rnbqk1nr/2p1bppp/pp1pp3/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 2 6,c1g5 e7g5 f3g5 d8g5,630,106,93,1164,crushing opening short,https://lichess.org/xHf0jC4s#11
C3Zl1,rnb1kbnr/pp3p2/2ppq2p/4p1B1/4P1pN/2NP2P1/PPP1BP1P/R2QK2R w KQkq - 0 11,e2g4 e6g4 d1g4 c8g4,767,104,95,502,advantage opening short,https://lichess.org/KvxpH392#21
DPYZS,rnb1kbnr/pp1pqppp/2p5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 2 4,c4f7 e7f7 h5f7 e8f7,767,96,83,589,advantage opening short,https://lichess.org/pqzqyS9S#7
HCQ1Z,rnb1kb1r/6pp/pp2pqn1/2ppNp1Q/3P4/2P1P1B1/PP1N1PPP/R3KB1R w KQkq - 2 10,g3h4 f6h4 h5h4 g6h4,730,96,85,689,advantage opening short,https://lichess.org/r222yjWA#19
7si1e,rn1qk1nr/pbp1bppp/1p1pp3/6B1/3PP3/3B1N2/PPP2PPP/RN1QK2R w KQkq - 2 6,e1g1 e7g5 f3g5 d8g5,697,99,73,398,advantage opening short,https://lichess.org/ylG49QmO#11
bVmtr,rn1qk2r/pbpnbppp/1p2p3/3pP3/3P4/3B1N2/PPP1QPPP/RNB2RK1 w kq - 3 8,c1g5 e7g5 f3g5 d8g5,725,107,95,620,advantage opening short,https://lichess.org/JgE62J4P#15
G2ywK,r1b1kb1r/pppq1pp1/3p1n1p/n3p3/P1B1P3/1QPP1N2/1P3PPP/RNB1K2R w KQkq - 1 8,c4f7 d7f7 b3f7 e8f7,685,97,88,333,advantage opening short,https://lichess.org/jQ4ELlV2#15
ReQqn,rnbq1rk1/p1p1ppbp/1p3np1/3p4/3P1P2/2PBPN2/PP2Q1PP/RNB1K2R b KQ - 1 7,c8a6 d3a6 b8a6 e2a6,797,92,95,196,advantage opening short,https://lichess.org/zOkdhRdw/black#14
42BA8,rnb1k1nr/pppp1p1p/5qp1/2b1p3/2B1P3/6P1/PPPPQP1P/RNB1K1NR b KQkq - 3 6,f6f2 e2f2 c5f2 e1f2,670,98,80,60,advantage opening short,https://lichess.org/le0MiZBg/black#12
1emrz,r1b1k1nr/pppp1pp1/5q1p/2b1p2Q/2BnP3/2NP1N2/PPP2PPP/R1B1K2R w KQkq - 4 7,c4f7 f6f7 h5f7 e8f7,731,116,93,348,advantage opening short,https://lichess.org/l4HfXliL#13
VUsMT,rn2k2r/pbpp1ppp/1p2pq2/8/1bPPn3/1P2PN2/PB1N1PPP/R2QKB1R w KQkq - 5 8,a2a3 b4d2 d1d2 e4d2,769,77,100,283,advantage opening short,https://lichess.org/SQ9EYNjr#15
2eiZ6,r1b1k2r/ppppnppp/2n2q2/2b1p2Q/2B1P3/2N4N/PPPP1PPP/R1B1K2R w KQkq - 8 6,c4f7 f6f7 h5f7 e8f7,765,94,90,276,crushing opening short,https://lichess.org/53sxhjXE#11
YZZV1,rnb1kbnr/1pppqppp/p7/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 2 4,h5f7 e7f7 c4f7 e8f7,649,91,90,651,advantage opening short,https://lichess.org/J8tKvBWb#7
iaPzX,rnb1k1nr/pppp1ppp/5q2/2b1p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4,h5f7 f6f7 c4f7 e8f7,696,96,89,633,advantage opening short,https://lichess.org/vulsiW4U#7
yK3nq,r1b1kb1r/ppppqppp/2n2n2/4p3/2B1P3/1QP5/PP1P1PPP/RNB1K1NR w KQkq - 3 5,c4f7 e7f7 b3f7 e8f7,714,78,85,136,advantage opening short,https://lichess.org/nUHPIpXX#9
Xrzx4,r1b1kb1r/ppppqpp1/2n2n1p/4p2Q/2B1P3/3P1N2/PPP2PPP/RNB1K2R w KQkq - 4 6,c4f7 e7f7 h5f7 e8f7,665,93,77,188,advantage opening short,https://lichess.org/IoilipFI#11
yqwlp,r1bq1rk1/pp2ppbp/2np1np1/2p5/4P1PP/P1NP4/1PP1BP2/R1BQK1NR b KQ - 0 8,c8g4 e2g4 f6g4 d1g4,658,92,86,234,advantage opening short,https://lichess.org/0v5CnJbr/black#16
2quo5,rnb1kbnr/ppp1qppp/3p4/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4,f3f7 e7f7 c4f7 e8f7,699,92,86,679,advantage opening short,https://lichess.org/pkMXYBBw#7
As246,r1b1k1nr/pppp1ppp/5q2/2b1p3/1n2P3/2BP3P/PPP1QPP1/RN2KBNR b KQkq - 6 6,f6f2 e2f2 c5f2 e1f2,729,101,29,29,advantage opening short,https://lichess.org/KD9hBnvU/black#12
R1J9V,rn1qkb1r/ppp1pppp/5n2/3p4/5Pb1/3PP3/PPP1B1PP/RNBQK1NR b KQkq - 2 4,e7e6 e2g4 f6g4 d1g4,762,113,94,1543,crushing opening short,https://lichess.org/s2tHabte/black#8
q5oeZ,r1b1kbnr/pppp1ppp/5q2/n3p3/2B1P3/1Q6/PPPP1PPP/RNB1K1NR w KQkq - 6 5,c4f7 f6f7 b3f7 e8f7,702,89,88,491,crushing master opening short,https://lichess.org/NUysXjEu#9
COL7I,r1bqkb1r/ppp2pp1/2np1n1p/4p3/2P3P1/1Q2P2P/PP1P1PB1/RNB1K1NR b KQkq - 0 6,a8b8 g2c6 b7c6 b3b8,776,95,94,749,advantage opening short,https://lichess.org/BqZmoezP/black#12
v7F96,rnbq1rk1/pp1nbppp/2ppp3/6B1/2PPP3/2NB1N2/PP3PPP/R2QK2R w KQ - 6 8,e1g1 e7g5 f3g5 d8g5,752,96,87,332,advantage opening short,https://lichess.org/B9dwWqwa#15
L9eTv,rnbq1rk1/ppp1ppbp/1n1p2p1/4P1N1/3P4/1B6/PPP2PPP/RNBQK2R w KQ - 6 8,b3f7 f8f7 g5f7 g8f7,740,97,72,150,advantage opening short,https://lichess.org/NyevR1uE#15
pZMjU,r1b1kbnr/ppppqppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4,c4f7 e7f7 h5f7 e8f7,754,106,93,930,advantage opening short,https://lichess.org/XLzXJEYb#7
TN0r7,rnbqk1nr/ppp1bppp/4p3/3p4/3P4/2P2N2/PP2PPPP/RNBQKB1R w KQkq - 2 4,c1g5 e7g5 f3g5 d8g5,705,111,91,1121,crushing master opening short,https://lichess.org/J8gZ2xoH#7
jKXNP,r1b1kb1r/ppppqppp/2n2n2/4p2Q/2B1P3/3P4/PPP2PPP/RNB1K1NR w KQkq - 1 5,h5f7 e7f7 c4f7 e8f7,691,90,87,410,advantage opening short,https://lichess.org/RrNAZjpx#9
xPvUS,r1b1k1nr/pppp1pp1/2n2q1p/2b1p3/2B1P3/1QP2N2/PP1P1PPP/RNB1K2R w KQkq - 3 6,c4f7 f6f7 b3f7 e8f7,780,96,88,193,advantage opening short,https://lichess.org/JyWSYqWW#11
k8X0p,rn1q1rk1/ppp1bppp/3p1n2/4p3/4P1b1/2PP4/PP2BPPP/RNBQNRK1 b - - 2 7,c7c5 e2g4 f6g4 d1g4,737,93,83,275,crushing opening short,https://lichess.org/1wbsT7Al/black#14
Fe8nq,1rbqkbnr/pp2pppp/2n5/2p5/2Pp2P1/1Q1P3P/PP2PPB1/RNB1K1NR b KQk - 0 6,e7e5 g2c6 b7c6 b3b8,740,80,100,259,advantage opening short,https://lichess.org/KtwYEwPu/black#12
sZgGc,r1bq1rk1/pppnbpnp/3p2pB/3Pp3/2P1P3/2NB1N2/PP3PPP/R2Q1RK1 w - - 2 10,f3g5 e7g5 h6g5 d8g5,734,111,93,1252,crushing master opening short,https://lichess.org/iIMLstdY#19
uHOrV,r1bqk2r/1pppbppp/p1n4n/4p1N1/2B1P3/3P4/PPP2PPP/RNBQK2R w KQkq - 1 6,c4f7 h6f7 g5f7 e8f7,787,101,94,1216,advantage opening short,https://lichess.org/41yywfg7#11
xY7wt,rnb1kb1r/2p1npp1/p2p1q1p/1p2p3/2BPP3/1QP2N2/PP3PPP/RNB2RK1 w kq - 0 8,c4f7 f6f7 b3f7 e8f7,680,84,85,134,advantage opening short,https://lichess.org/LjNsIut2#15
sDoZe,r1bqk1nr/pppnbppp/3pp3/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 2 5,c1g5 e7g5 f3g5 d8g5,737,95,97,1924,advantage opening short,https://lichess.org/thH8fAzf#9
TJnTN,r1bqk1nr/ppp2ppp/2np4/2b1p3/2P3P1/1Q2P3/PP1P1PBP/RNB1K1NR b KQkq - 0 5,a8b8 g2c6 b7c6 b3b8,710,82,83,573,advantage opening short,https://lichess.org/LPR7HEtL/black#10
Eud68,r1bqk1nr/ppp1bppp/2npp3/8/3PP3/2P2N2/PP3PPP/RNBQKB1R w KQkq - 1 5,c1g5 e7g5 f3g5 d8g5,730,92,98,769,crushing opening short,https://lichess.org/D5DIOTgU#9
jzBJx,rnb1kb1r/pp1ppppp/5n2/q2P2B1/2p5/2N2N2/PPP1PPPP/R2QKB1R b KQkq - 3 5,f6d5 d1d5 a5d5 c3d5,778,107,96,639,crushing opening short,https://lichess.org/iWFeF8o3/black#10
qO3o2,rnb1k1nr/ppp2pp1/3p1q1p/2b1p2Q/2B1P3/3P1N2/PPP2PPP/RNB1K2R w KQkq - 0 6,c4f7 f6f7 h5f7 e8f7,727,90,78,127,advantage opening short,https://lichess.org/qBYZplVD#11
eLxoz,r2q1rk1/pbp1bppn/1pnp3p/4pP2/4P2B/2NP1N2/PPP1B1PP/R2Q1RK1 w - - 2 11,h2h3 e7h4 f3h4 d8h4,788,101,95,855,crushing opening short,https://lichess.org/wiKUbacf#21
Xv7fY,r1b1kbnr/pppp1ppp/2n2q2/4p2Q/2B5/4P3/PPPP1PPP/RNB1K1NR w KQkq - 4 4,c4f7 f6f7 h5f7 e8f7,627,98,80,313,advantage opening short,https://lichess.org/c8d7x6ke#7
r7wcE,rnb1kbnr/ppp1qpp1/3p3p/4p2Q/2B1P3/5N2/PPPP1PPP/RNB1K2R w KQkq - 0 5,c4f7 e7f7 h5f7 e8f7,789,168,0,12,advantage opening short,https://lichess.org/mslILC2s#9
KjSbK,rnbqk1nr/pp2bppp/2ppp3/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 2 5,c1g5 e7g5 f3g5 d8g5,751,90,87,1089,advantage opening short,https://lichess.org/qU3z3Siw#9
dgiHP,r1bqk1nr/ppp2ppp/2np4/2b1p3/2P3P1/1Q2P3/PP1P1PBP/RNB1K1NR b KQkq - 2 5,a8b8 g2c6 b7c6 b3b8,672,95,90,1191,advantage opening short,https://lichess.org/8JUiPxct/black#10
2wDki,rnb1kb1r/pp1pqppp/5n2/2p1p2Q/2B1P3/2N5/PPPP1PPP/R1B1K1NR w KQkq - 4 5,c4f7 e7f7 h5f7 e8f7,628,92,76,196,advantage opening short,https://lichess.org/uFENbqKZ#9
1oEa3,r1bqk2r/pp2bppp/2np3n/2p1p1N1/2B1P3/3P4/PPP2PPP/RNBQ1RK1 w kq - 5 7,c4f7 h6f7 g5f7 e8f7,780,104,74,84,advantage opening short,https://lichess.org/8mpzDxna#13
Hohus,rn1qk2r/pp3pp1/2p1p1bp/3p4/1b2nPPP/1P2P3/PBPPN3/R2QKBNR w KQkq - 0 10,a2a3 b4d2 d1d2 e4d2,740,99,98,3633,crushing opening short,https://lichess.org/8u7x3KGy#19
ItggY,r1b1kbnr/pppp1ppp/5q2/3Bp2Q/1n2P3/8/PPPP1PPP/RNB1K1NR w KQkq - 6 5,d5f7 f6f7 h5f7 e8f7,706,94,83,73,advantage opening short,https://lichess.org/HwzCru9j#9
hVz8p,r1bq1bnr/pp3k2/2n1ppp1/2p4N/3pP2N/3P4/PPP1BPPP/R1BQ1RK1 b - - 0 10,g6h5 e2h5 h8h5 d1h5,771,84,54,232,crushing master opening short,https://lichess.org/eWhCxKEh/black#20
J3Ep0,rnb1kbnr/pp1qpp2/2p3p1/3p3B/3P4/2N1P3/PPP2PPP/R1BQK1NR w KQkq - 0 7,h5g4 d7g4 d1g4 c8g4,759,112,92,1181,advantage opening short,https://lichess.org/Rb5ONpWv#13
XfIPi,r2qkb1r/ppp2p1p/3p1np1/4p3/1n2P3/Pb3Q1P/1PPPNPP1/RNB1K2R w KQkq - 0 9,c2b3 b4c2,780,86,96,2931,crushing oneMove opening,https://lichess.org/Sn0Tv3ML#17
24b33,rn1qkb1r/p1pppppp/1p3n2/3P4/4b3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 2 5,e4d5 c3d5 f6d5 d1d5,783,88,88,129,advantage opening short,https://lichess.org/I8icD2n5/black#10
ieO0k,rnbqk1nr/pppp4/4pppb/8/2PP4/4BNp1/PP1QPP1P/RN2KB1R w KQkq - 0 8,h2g3 h6e3 h1h8 e3d2,783,89,68,62,advantage opening short,https://lichess.org/xrfrjZOl#15
ngD9A,rnb1k1nr/pp1p1ppp/1b6/3P4/2p1Pp1q/2P5/PP2QNPP/RNB1KB1R b KQkq - 1 8,b6f2 e2f2 h4f2 e1f2,657,94,78,69,advantage opening short,https://lichess.org/ipIGlodN/black#16
kyb0C,rnb1k1nr/ppp2ppp/4p3/2bPP3/7q/5Q2/PP1P1PPP/RNB1KBNR b KQkq - 2 5,c5f2 f3f2 h4f2 e1f2,633,89,78,107,crushing opening short,https://lichess.org/TxxktBlO/black#10
HYsmW,rnb1k1nr/pppp1ppp/8/2b1P3/4P2q/5Q2/PPP2PPP/RNB1KBNR b KQkq - 2 4,c5f2 f3f2 h4f2 e1f2,654,116,92,614,advantage opening short,https://lichess.org/FnXSX7FD/black#8
zzGar,r1b1k2r/ppppqppp/2n2n2/b3p3/2B1P3/1QP2N2/P2P1PPP/RNB2RK1 w kq - 5 8,c4f7 e7f7 b3f7 e8f7,648,109,79,366,advantage opening short,https://lichess.org/XoWemt7q#15
FiNP2,rnbqk1nr/ppp1bppp/3p4/6B1/3p4/2N2N2/PPP1PPPP/R2QKB1R w KQkq - 2 5,d1d4 e7g5 f3g5 d8g5,763,80,64,269,advantage opening short,https://lichess.org/zEYLdpU9#9
p3BIq,r1b1k1nr/ppp2ppp/3p1q2/2b1p2Q/2BnP3/2NP1N2/PP3PPP/1RB2RK1 w kq - 2 9,c4f7 f6f7 h5f7 e8f7,610,92,82,146,advantage opening short,https://lichess.org/d4laUK9b#17
Ot2pW,r2q1rk1/1b1p1pp1/p1n4p/1pp1p3/4P1nb/P2P1N2/BPPB1PP1/RN1Q1RK1 w - - 0 13,f3h4 d8h4 d1g4 h4g4,747,83,56,105,advantage opening short,https://lichess.org/dLtr4vH0#25
plOpL,rn2k1nr/pbpp1pp1/1p1b1q2/8/2B2P2/1QP1PNPp/PP1P3P/RNB1K2R w KQkq - 2 10,c4f7 f6f7 b3f7 e8f7,679,89,77,83,advantage opening short,https://lichess.org/H7eJ4ddO#19
8akmW,r2qk2r/pppb1ppp/2n1p3/3p4/2PPn3/2bBPN2/PPQ2PPP/R1B1K2R w KQkq - 0 9,c2c3 e4c3,774,99,79,520,crushing master oneMove opening,https://lichess.org/sDN0g1cp#17
cnC8I,rnb1kb1r/p2ppppp/5n2/q2P4/2p2B2/2N5/PPP1PPPP/R2QKBNR b KQkq - 2 6,f6d5 d1d5 a5d5 c3d5,714,103,95,1580,crushing opening short,https://lichess.org/b1jhGIOP/black#12
Y5bQO,r1b1k2r/pp3ppp/2n1pn2/q2p4/1b1P4/1PNB1N2/PBP2PPP/R2QK2R w KQkq - 3 9,a2a3 b4c3 b2c3 a5c3,779,85,85,200,crushing master opening short,https://lichess.org/BsX599J6#17
CfEnk,rnbq1rk1/pp2bppp/5n2/4p1B1/3p3N/1BNP4/PPP2PPP/R2Q1RK1 w - - 0 11,g5f6 e7f6 c3e4 f6h4,664,96,89,445,crushing opening short,https://lichess.org/1dd1Vnq8#21
MbLvI,r2qr1k1/ppp2pb1/2np1npp/3Pp3/7B/2PP1Q1P/PP1N1PP1/R3K1NR b KQ - 0 12,c6e7 h4f6 g7f6 f3f6,757,84,85,191,advantage opening short,https://lichess.org/Z1sLtQTo/black#24
FHSEo,rnb1k1nr/pppp1ppp/8/q3P3/1b6/P1N2N2/2P1PPPP/R1BQKB1R w KQkq - 0 7,c1b2 b4c3 b2c3 a5c3,637,85,100,327,advantage opening short,https://lichess.org/v1BoneTJ#13
LkWO4,rn1q1b1r/1pp1p2p/p1k1Bp1n/3p1Pp1/8/5QP1/PPPP1P1P/RNB1K2R w KQ - 0 11,e6d5 d8d5 f3d5 c6d5,691,87,83,380,crushing opening short,https://lichess.org/1yq06RKG#21
x6376,r1bq2k1/1ppn1r1p/n2p1b1B/p2Ppp2/2P5/P1NB1N1P/1P3PP1/R2Q1RK1 w - - 0 16,f3g5 f6g5 h6g5 d8g5,703,94,89,420,advantage opening short,https://lichess.org/MpDB5QJn#31
h1qS5,r1bqk2r/ppppbppp/2nn4/4N3/2B5/8/PPPP1PPP/RNBQR1K1 w kq - 1 7,c4f7 d6f7 e5f7 e8f7,765,89,85,82,advantage opening short,https://lichess.org/4dSN0RBL#13
9KwE3,r3k2r/1bp1bppp/ppn1p1n1/1B1qP3/Q2P4/2N2N2/PP3PPP/R1B2RK1 b kq - 1 12,d5d8 b5c6 b7c6 a4c6,754,90,74,144,crushing opening short,https://lichess.org/aH474ebs/black#24
axuyX,r3kb1r/pppbqppp/2np4/3Bp3/4P3/1P3Q2/P1PP1PPP/R1B1K1NR w KQkq - 3 8,d5f7 e7f7 f3f7 e8f7,684,100,74,247,advantage opening short,https://lichess.org/ORYmP2pX#15
XSqL3,rnb1k2r/pp1p1ppp/1q2pn2/1Nb3B1/4P3/8/PPP1QPPP/RN2KB1R b KQkq - 6 7,c5f2 e2f2 b6f2 e1f2,650,84,100,202,advantage opening short,https://lichess.org/XhG2al6x/black#14
DE0zA,r1bq1r1k/ppp2ppp/1bnp2n1/6N1/2BPP3/7P/PP2NPP1/R1BQ1RK1 b - - 2 11,h7h6 g5f7 f8f7 c4f7,741,101,88,347,opening,https://lichess.org/x5PKV836/black#22
tjcSg,r1b1k2r/pppp1pp1/2n2q1p/2b1p3/2B1P3/2NP4/PPPQ1PPP/R3K1NR b KQkq - 1 7,f6f2 d2f2 c5f2 e1f2,727,115,96,218,advantage opening short,https://lichess.org/7awBzYNj/black#14
NQ9fW,2kr1bnr/pppbpppp/2n3q1/8/7N/2N5/PPPPBPPP/R1BQR1K1 b - - 11 8,g6g4 e2g4,778,103,76,100,crushing oneMove opening,https://lichess.org/EtN0n5FZ/black#16
FPYmm,2kr1bnr/1pp1pppp/p1n5/q2P4/6b1/2N2NP1/PPP2PBP/R1BQK2R b KQ - 0 8,d8d5 d1d5 a5d5 c3d5,711,103,71,64,crushing opening short,https://lichess.org/KSZvjVvs/black#16
L2RGB,rnbqr1k1/1pp1bpp1/p2p3p/3PpN2/2P4N/7P/PPB2nP1/R1BQR1K1 w - - 0 19,g1f2 e7h4 f5h4 d8h4,783,99,97,271,advantage opening short,https://lichess.org/Or7XldjK#37
YCLX7,rnbq1rk1/ppp1bppp/3p1n2/8/2PP4/1P6/PB2BPPP/RN1QK1NR b KQ - 2 7,c8g4 e2g4 f6g4 d1g4,663,115,38,29,crushing opening short,https://lichess.org/iOTWfTXE/black#14
jUlqX,r3kb1r/pbp1pppp/1pnq1n2/4N3/Q2PP3/8/PP1B1PPP/RN2KB1R w KQkq - 1 10,d2b4 d6b4 a4b4 c6b4,715,90,87,233,crushing opening short,https://lichess.org/Orv0Qa8h#19
CeW12,r1b1kbnr/pppp1ppp/8/8/3nq3/4N2P/PPPP1PP1/RNBQKB1R b KQkq - 1 6,d4c2 d1c2 e4c2 e3c2,754,88,100,67,advantage opening short,https://lichess.org/Y0rP4dPX/black#12
p5iyx,rnb1k1nr/pp1p1ppp/1q2p3/2b5/4P3/2N2Q2/PPP2PPP/R1B1KBNR b KQkq - 3 5,c5f2 f3f2 b6f2 e1f2,715,102,78,413,advantage opening short,https://lichess.org/AxyfGGqy/black#10
vMggj,r2qkbnr/ppp1n1p1/3p4/3Pp2p/4Pp2/1PN2B2/PBP2PPP/R2Q1RK1 b kq - 0 10,g7g5 f3h5 h8h5 d1h5,639,90,100,144,advantage opening short,https://lichess.org/jTeYDgSF/black#20
NnAsg,rn1q1rk1/1pp1bppn/p2p3p/4p3/4P2B/1PNP1N2/1PP2PPP/R2Q1RK1 w - - 2 11,h2h3 e7h4 f3h4 d8h4,714,88,89,66,advantage opening short,https://lichess.org/wVTOluXs#21
3gJph,2kr1bnr/ppp1pppp/2n5/q2P3b/8/2N1BN1P/PPP2PP1/R2QKB1R b KQ - 0 8,d8d5 d1d5 a5d5 c3d5,738,85,100,91,advantage opening short,https://lichess.org/3HjtPvEE/black#16
vJKXE,rnb1kb1r/1pppqpp1/p6p/3Bp3/4P3/5Q2/PPPP1PPP/R1B1K1NR w KQkq - 1 7,f3f7 e7f7 d5f7 e8f7,609,99,96,631,advantage opening short,https://lichess.org/UsBrufdh#13
G7jzX,rn2kb1r/pbppqppp/1p3n2/3P4/8/P1N5/1PP1BPPP/R1BQK1NR b KQkq - 0 7,f6d5 c3d5 b7d5 d1d5,734,110,95,978,crushing opening short,https://lichess.org/IpENxV2d/black#14
v0WHS,r2qkbnr/pp3ppp/2n5/1B1pp3/Q5b1/2N1PN2/PP1P1PPP/R1B1K2R b KQkq - 5 7,g4f3 b5c6 b7c6 a4c6,782,100,92,1709,advantage opening short,https://lichess.org/0mXqHRiK/black#14
DM9sV,r2q1rk1/1pp2pp1/p2pbn1p/4p3/PPPbP3/B2P4/3NBPPP/1R1Q1RK1 b - - 1 13,f6g4 e2g4 e6g4 d1g4,786,93,83,93,advantage opening short,https://lichess.org/qTIZQVvU/black#26
76Gap,r1q2rk1/bp3ppn/p1p1b1np/3pP3/3P4/4BNNP/PPB2PP1/R2QR1K1 w - - 1 18,g3f5 e6f5 c2f5 c8f5,731,106,87,939,advantage opening short,https://lichess.org/legH4Zio#35
4vd3z,r2qk2r/pp1nbppp/3pp3/n1p5/4P3/2NPBN2/PPP2PPP/R2Q1RK1 w kq - 0 10,f3g5 e7g5 e3g5 d8g5,736,106,85,297,crushing opening short,https://lichess.org/36mh3cyH#19
obUtH,rnb1k1nr/pp1p1ppp/8/2b1p3/4P2q/8/PBPPQPPP/RN2KBNR b KQkq - 3 5,c5f2 e2f2 h4f2 e1f2,797,77,100,154,advantage opening short,https://lichess.org/1krzVYQe/black#10
ipuKJ,rnb1k2r/pp2nppp/2p1q3/3pp1B1/4P2N/2P5/PPP1BPPP/R2Q1RK1 w kq - 0 9,e2g4 e6g4 d1g4 c8g4,655,101,98,497,advantage opening short,https://lichess.org/gCzUbJBK#17
ipQuU,rnbq1rk1/ppppbpp1/5n1p/8/3Q3B/2N5/PPP1PPPP/2KR1BNR w - - 2 7,c3e4 f6e4 h4e7 d8e7,739,88,82,458,crushing opening short,https://lichess.org/6KyYlx9L#13
PtndV,rnb1k1nr/pppp1ppp/8/q3P3/1b3P2/P1N5/2P1P1PP/R1BQKBNR w KQkq - 0 7,c1b2 b4c3 b2c3 a5c3,736,100,81,167,crushing opening short,https://lichess.org/fJMcwAXz#13
pfE9h,r1bqk2r/ppp2ppp/2nb4/3np3/1PB5/1QP2P2/P2PN1PP/RNB1K2R b KQkq - 2 8,c8e6 c4d5 e6d5 b3d5,792,80,71,322,advantage opening short,https://lichess.org/0ZcgyB0x/black#16
NFg9Q,r1b1k1nr/ppp2pp1/2np1q1p/2b5/2B1P3/1Q3N2/PPPN1PPP/R1B1K2R w KQkq - 2 9,c4f7 f6f7 b3f7 e8f7,775,76,100,136,advantage opening short,https://lichess.org/gB6fV5UM#17
4ZiPx,rq2k2r/1p1bppbp/p1np1np1/8/2PN4/1P2PPP1/PB4BP/RN1Q1RK1 b kq - 2 13,f6g8 d4c6 g7b2 c6b8,793,83,93,289,advantage opening short,https://lichess.org/nKbCr23w/black#26
UYhKU,r1bqr1k1/ppp1ppbp/6p1/2n1P3/5Bn1/2P2N1P/PP1NQPP1/R3KB1R b KQ - 0 11,c5d3 e2d3 d8d3 f1d3,792,106,97,1057,crushing opening short,https://lichess.org/TEHAUr6r/black#22
w9W7I,rnbqk2r/ppppbppp/3n4/4N3/2B5/8/PPPPQPPP/RNB1K2R w KQkq - 3 6,c4f7 d6f7 e5f7 e8f7,796,89,80,112,advantage opening short,https://lichess.org/nhZ6Y3jl#11
jkAge,rnb1k2r/1pppnppp/pb3q2/7Q/2BP4/4BN2/PPP2PPP/RN2K2R w KQkq - 4 8,c4f7 f6f7 h5f7 e8f7,738,89,81,366,advantage opening short,https://lichess.org/cZY8Y1J1#15
OvgDr,2kr1bnr/ppp1pppp/2n5/q2P4/6b1/2N1BN2/PPP2PPP/R2QKB1R b KQ - 0 7,d8d5 d1d5 a5d5 c3d5,739,98,96,1496,crushing opening short,https://lichess.org/G9qlh90d/black#14
BlH47,rnb1k2r/1pq2ppp/p2bpn2/3p4/5B2/2N2NP1/PPP1PPBP/R2Q1RK1 w kq - 2 10,f4e5 d6e5 f3e5 c7e5,760,86,82,125,crushing opening short,https://lichess.org/BffFOfIc#19
g9UzB,rn2kbnr/pp2pp1b/2p3pp/3qN3/7P/5QN1/PPPP1PP1/R1B1KB1R w KQkq - 2 10,f3f7 d5f7 e5f7 e8f7,744,83,87,117,advantage opening short,https://lichess.org/QK3SuBIZ#19
oIiHy,rnb1k1nr/pp3ppp/1q2p3/2bpP3/8/5N2/PPP1QPPP/RNB1KB1R b KQkq - 3 6,c5f2 e2f2 b6f2 e1f2,644,100,60,76,advantage opening short,https://lichess.org/TSCesO6C/black#12
C69gs,rnb1k1nr/pp1p1pp1/1q2p2p/2b5/2P1P3/5N2/PP2QPPP/RNB1KB1R b KQkq - 2 6,c5f2 e2f2 b6f2 e1f2,697,101,86,157,crushing opening short,https://lichess.org/syC2NXLe/black#12
5DDgA,4rnk1/ppq1rpb1/2pp1n1p/5bp1/2PP4/1PN2NPP/P3RPB1/2BQR1K1 b - - 4 20,c7c8 e2e7 e8e7 e1e7,745,109,94,535,crushing opening short,https://lichess.org/zEbXMWb8/black#40
ES8Fg,rnbq1b1r/ppp1p1kp/5nP1/3pQ3/2B5/8/PPPP1PPP/RNB1K1NR w KQ - 3 7,c4d5 d8d5 e5d5 f6d5,779,100,96,1372,advantage opening short,https://lichess.org/3bypHbKQ#13
WKn9A,r1b1k1nr/pp3ppp/1qn1p3/2bpP3/5P2/2P2N2/PPQ3PP/RNB1KB1R b KQkq - 2 8,c5f2 c2f2 b6f2 e1f2,712,85,85,298,advantage opening short,https://lichess.org/d0oz7xDq/black#16
FbnXN,r3k1nr/pbpp1ppp/1p3q2/2b1n3/4P3/2N3Q1/PPP1BPPP/R1B1K1NR b KQkq - 11 9,c5f2 g3f2 f6f2 e1f2,784,84,62,147,advantage opening short,https://lichess.org/qF9xKbjX/black#18
rw9ng,rn2kbnr/p1p2ppp/1p1p1q2/4p3/2B1P3/1Q5P/PPPP1PP1/RNB1K2R w KQkq - 0 7,c4f7 f6f7 b3f7 e8f7,604,99,79,450,advantage opening short,https://lichess.org/8wwtAnRs#13
I1vKG,r1b1k1nr/1p1p1ppp/pq2p3/2bPn3/4P3/2N3N1/PP2QPPP/R1B1KB1R b KQkq - 4 9,c5f2 e2f2 b6f2 e1f2,667,97,57,211,advantage opening short,https://lichess.org/fmARu0MO/black#18
Kalje,r2qk2r/pbp1bppp/1pn1pn2/1B6/Q2PN3/2P2N2/PP3PPP/R1B1K2R b KQkq - 3 9,f6e4 b5c6 b7c6 a4c6,728,79,100,247,advantage opening short,https://lichess.org/9XBkGl5U/black#18
3ICi1,r2qr1k1/ppp2pbp/3pbnp1/6P1/1n2PP2/2N1Q2P/PPPBB3/2KR2NR b - - 0 12,b4a2 c3a2 f6e4 e3e4,776,93,87,391,advantage opening short,https://lichess.org/y3yTeRJ4/black#24
Ta2mV,rnbqk2r/p3bppp/1p1p4/2pPp3/2P5/3P1N2/PP3PPP/R1BQKB1R w KQkq - 1 8,f3g5 e7g5 c1g5 d8g5,697,98,77,75,advantage opening short,https://lichess.org/mqza6Y9y#15
tt14T,rnb1kbnr/2q2pp1/2pp3p/pp6/3NP3/1BN2Q2/PPP2PPP/R1B1K2R w KQkq - 2 9,f3f7 c7f7 b3f7 e8f7,723,98,75,73,advantage opening short,https://lichess.org/uFn55Qf1#17
eLNxe,r1bqk2r/2ppbppp/ppn5/4p1B1/4P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 2 8,e1g1 e7g5 f3g5 d8g5,759,112,73,39,advantage opening short,https://lichess.org/RLue64Ps#15
Z9FHy,r1b1k1nr/pp3qpp/2pp4/n1b1p3/1P2P3/2PP3P/P3QPP1/RNB1K1NR b KQkq - 0 9,c5f2 e2f2 f7f2 e1f2,713,133,0,32,advantage opening short,https://lichess.org/C7dtOMuS/black#18
6njM8,rnb1k1nr/3p1ppp/p3p3/q3P3/1bpP4/2N5/PBP1BPPP/R2QK1NR w KQkq - 4 10,a2a3 b4c3 b2c3 a5c3,716,95,84,345,advantage opening short,https://lichess.org/4pqzhGBF#19
lLOXJ,r1b1k1nr/ppp2ppp/3p1q2/2b1p1B1/2B1P3/2PP2Q1/PP3PPP/RN2K2R b KQkq - 1 8,c5f2 g3f2 f6f2 e1f2,702,107,81,61,advantage opening short,https://lichess.org/HP5TPQGc/black#16
j8mjy,r2qk1nr/p2bbppp/2p1p3/2ppP3/8/3P1N2/PPP2PPP/RNBQ1RK1 w kq - 3 8,c1g5 e7g5 f3g5 d8g5,761,93,76,101,advantage opening short,https://lichess.org/HwlpfYxk#15
N9tU6,r1b1kbnr/1p1pqpp1/p6p/2pQP3/1nB5/5N2/PPP2PPP/RNB2RK1 w kq - 3 9,d5f7 e7f7 c4f7 e8f7,659,109,69,200,advantage opening short,https://lichess.org/IA3Y6VgO#17
IGtZv,rnb2bnr/1pqppkpp/p7/2p5/3PP3/5N2/PPP2PPP/RNBQK2R b KQ - 0 5,h7h6 f3e5 c7e5 d4e5,743,81,81,145,crushing opening short,https://lichess.org/o7BYpALz/black#10
F8Lfp,rnb1kb1r/pp1ppppp/5n2/q2P4/8/2N5/PP2PPPP/R1BQKBNR b KQkq - 2 5,f6d5 d1d5 a5d5 c3d5,781,106,96,1105,advantage opening short,https://lichess.org/g28tdZjq/black#10
o7rDq,rn1q1rk1/1bp2pb1/1p1p2pp/1P6/1nBNp3/1Q2P3/PB1P1PPP/RN2K2R b KQ - 4 15,b4d5 c4d5 b7d5 b3d5,791,95,94,1075,advantage opening short,https://lichess.org/h1UYKAWi/black#30
GoczW,r2qr1k1/ppp2pb1/2np1npp/3Pp3/7B/2PP1Q1P/PP2NPP1/RN2K2R b KQ - 0 12,c6e7 h4f6 g7f6 f3f6,751,87,90,742,advantage opening short,https://lichess.org/AgjzSjxu/black#24
mdZUS,rnb2rk1/pp1p1ppp/1q2pn2/2b3B1/4P3/2N2N2/PPPQ1PPP/R3KB1R b KQ - 2 7,c5f2 d2f2 b6f2 e1f2,730,84,78,114,advantage opening short,https://lichess.org/s65PuCQu/black#14
ayq4z,rnb2rk1/ppp2ppp/3p4/2b1p3/2B1P1nP/3P1N2/PPP2PP1/RNB1KR2 b Q - 4 9,c5f2 f1f2 g4f2 e1f2,643,96,78,331,advantage opening short,https://lichess.org/E6QLHde3/black#18
Q90Pg,rnb1k1nr/pp3ppp/1q2p3/1NbpP3/8/8/PPP1QPPP/R1B1KBNR b KQkq - 3 7,c5f2 e2f2 b6f2 e1f2,713,103,94,268,crushing opening short,https://lichess.org/DXG3xVmM/black#14
5zM4Y,rn2kb1r/pbp1qpp1/1p3n1p/4p3/2B1P3/1QP2N2/PP3PPP/RNB2RK1 w kq - 0 9,c4f7 e7f7 b3f7 e8f7,681,85,87,272,advantage opening short,https://lichess.org/wkuqNC8Q#17
X0PLn,r1bqk2r/1pp2pp1/p1np3p/4p2n/B3P3/2NPPN1P/PPP3P1/R2QK2R w KQkq - 1 10,f3e5 d8h4 g2g3 h4g3,796,77,100,472,advantage opening short,https://lichess.org/Qzg2XjFD#19
kn0yC,r1bqkb1r/pppp1ppp/2nn4/4N3/2B5/8/PPPP1PPP/RNBQ1RK1 w kq - 1 6,c4f7 d6f7 e5f7 e8f7,745,92,99,943,advantage opening short,https://lichess.org/6ugxepkE#11
lnV2N,rnbqk1nr/pp2ppbp/3p2p1/8/3N4/1P4P1/PBP1PP1P/RN1QKB1R b KQkq - 0 6,b8c6 d4c6 g7b2 c6d8,732,93,72,151,advantage master opening short,https://lichess.org/AN0Z5rsJ/black#12
Bt1Kf,r2q1rk1/1ppnbpp1/p1np3p/4p3/2N1P2B/2PP1N1P/PP3PP1/R2Q1RK1 w - - 1 13,c4e3 e7h4 f3h4 d8h4,644,90,82,77,advantage opening short,https://lichess.org/QEp5y5Mb#25
2Ty0U,r2qk2r/p2n1ppp/1p1bp3/1Bpp1b2/Q2P4/2P1P3/PP1N1PPP/R1B1K2R w KQkq - 0 11,b5d7 d8d7 a4d7 e8d7,657,102,89,1054,advantage opening short,https://lichess.org/8vZM5Dc0#21
AhFFi,rnb1k2r/pp3ppp/2p1p3/q2p4/1bPP3B/P1P5/2Q1PPPP/2R1KBNR b Kkq - 0 9,b4c3 c2c3 a5c3 c1c3,739,79,74,202,advantage opening short,https://lichess.org/ML8ioIjt/black#18
93Htn,rn2k2r/pp1bbppp/4p3/q2p4/2PPnP2/P1NB1N2/1PQ3PP/R1B1K2R b KQkq - 6 10,d7a4 c2a4 a5a4 c3a4,679,105,97,665,advantage opening short,https://lichess.org/WurnBQEh/black#20
e05qq,r2q1rk1/ppp2pp1/3p1n1p/2b1p3/2BnP1RP/P1NP1N2/1PP2P2/R1BQK3 b Q - 0 11,d4f3 d1f3 f6g4 f3g4,697,89,81,222,advantage opening short,https://lichess.org/cMxXR10F/black#22
yOfdz,r1b1kbnr/p2p1p1p/1pp2qp1/3Q4/2BpP3/3P4/PPP2PPP/RNB1K2R w KQkq - 0 9,d5f7 f6f7 c4f7 e8f7,604,110,77,497,advantage opening short,https://lichess.org/P1sjt09I#17
enwTI,rnb1k2r/pp3ppp/1q3n2/2bp4/2p5/2P2Q1P/PPBPNPP1/RNB1K2R b KQkq - 4 9,c5f2 f3f2 b6f2 e1f2,681,95,81,417,advantage opening short,https://lichess.org/TP8TJQj0/black#18
OCgX3,r1b1k2r/ppppqpp1/2n2n1p/3Qb3/2B1P3/5N2/PPP2PPP/RNB2RK1 w kq - 4 8,d5f7 e7f7 c4f7 e8f7 f3e5 c6e5,658,99,82,292,advantage long opening,https://lichess.org/nMXkWlj0#15
7JZko,1r2kbnr/pppbqppp/3p4/n7/2B1P3/1QN1B3/PPP2PPP/R3K1NR w KQk - 8 9,c4f7 e7f7 b3f7 e8f7,612,100,74,162,advantage opening short,https://lichess.org/IuV9U0W7#17
bc3Ly,r2q1rk1/ppp2ppp/2np4/2b1p3/2P1PPn1/2N5/PPP1N1PP/R1B1QR1K b - - 2 10,g4f2 f1f2 c5f2 e1f2,719,83,80,167,advantage opening short,https://lichess.org/aoMjxlEg/black#20
zjt31,r1q1k2r/1ppbppb1/p1n3pp/4P2n/5B1P/2N2P2/PPPQN1P1/2KR1B1R w kq - 1 13,d2d7 c8d7 d1d7 e8d7,773,109,95,939,advantage opening short,https://lichess.org/0Hpr6Cuw#25
U8638,rnb1k1nr/ppq2ppp/2P5/2b1p3/2B5/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 4 6,c4f7 c7f7 f3f7 e8f7 c6b7 c8b7,709,82,85,295,advantage long opening,https://lichess.org/ArdmadDW#11
8emH9,r1bq1rk1/pp2bppp/1nnpp3/8/2PP4/3B1N2/PP1B1PPP/RN1Q1RK1 w - - 6 10,f3g5 e7g5 d2g5 d8g5,725,81,75,264,advantage opening short,https://lichess.org/YKb4m2Zn#19
QL928,r1b1k1nr/p1pp1ppp/1pn2q2/2b5/4P3/2PB2Q1/PP3PPP/RNB1K1NR b KQkq - 0 7,c5f2 g3f2 f6f2 e1f2,712,108,71,401,advantage opening short,https://lichess.org/tJLJ4zDk/black#14
40GKf,r3kbnr/pp2qppp/1npp4/4p3/2B1P3/2NP1Q1P/PPP2PP1/R1B2RK1 w kq - 3 9,c4f7 e7f7 f3f7 e8f7,606,103,77,83,advantage opening short,https://lichess.org/CNA4t8yh#17
wVpk0,rnb1k2r/pp1p1ppp/1qp2n2/2b5/2B1P3/2N2Q2/PPP1NPPP/R1B1K2R b KQkq - 9 8,c5f2 f3f2 b6f2 e1f2,671,94,88,172,advantage opening short,https://lichess.org/wv7E8Nwi/black#16
0tXIz,r2q1rk1/1ppbbppp/p3pn2/6N1/1n1P4/2NBP3/PP1B1PPP/R2Q1RK1 w - - 4 11,d3h7 f6h7 g5h7 g8h7,799,92,71,106,advantage opening short,https://lichess.org/q3LLXNtk#21
TDhf5,rn1q1rk1/pbp1ppbp/1p4p1/3nP3/3P4/2NB1NB1/PP3PPP/R2QK2R w KQ - 2 11,d3e4 d5c3 e4b7 c3d1,798,93,85,313,advantage opening short,https://lichess.org/qkvlE4Oz#21
hrKj3,r2qk1nr/1ppb2pp/p1nb1p2/3N4/2BPpB2/2P5/PP3PPP/RN1QK2R w KQkq - 6 11,d5c7 d8c7 f4d6 c7d6,770,81,100,96,advantage opening short,https://lichess.org/iiUz84md#21
hoCdZ,rnb1kbnr/pp2qppp/3pp3/1N6/4P3/4BN2/PPP2PPP/R2QKB1R w KQkq - 4 8,b5d6 e7d6 d1d6 f8d6,711,97,85,826,advantage opening short,https://lichess.org/nz80pUnd#15
5slGX,r1b1k1nr/p2pppbp/1qp3p1/2p5/4P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 3 7,a1b1 g7c3 b2c3 b6b1,769,102,85,252,crushing opening short,https://lichess.org/yyRqu63E#13
oy06Z,r2qk2r/ppp1bppp/2n1bn2/4p3/4P3/2PP4/PP2B1PP/R1BQKNNR b KQkq - 2 8,f6g4 e2g4 e6g4 d1g4,696,89,90,195,advantage opening short,https://lichess.org/2sPA02pz/black#16
0Enn2,rn1qk2r/1bp2ppp/1p2p3/p2pP3/2PPn3/P2B1N2/1P1N1PPP/R2QK2R w KQkq - 1 10,d3e4 d5e4 d2e4 b7e4,754,101,97,482,advantage opening short,https://lichess.org/5IIvymMR#19
MMpDW,r2qkb1r/1ppbpppp/p1n2n2/1B6/Q7/2P5/PP1P1PPP/RNB1K1NR w KQkq - 2 7,b5c6 d7c6 a4c6 b7c6,798,95,94,591,crushing opening short,https://lichess.org/kJ1FesmP#13
VdPDS,r1b1kb1r/ppppqp1p/2n4p/4p3/2B1P3/3P1QP1/PPP2P1P/RN2K1NR w KQkq - 0 7,c4f7 e7f7 f3f7 e8f7,685,91,82,106,advantage opening short,https://lichess.org/RdpiheYH#13
5204J,r2qkbnr/pp2pppp/2n5/1B1p4/Q5b1/4PN2/PP1P1PPP/RNB1K2R b KQkq - 3 6,g4f3 b5c6 b7c6 a4c6,757,83,88,85,advantage opening short,https://lichess.org/j68t0BRT/black#12
CqHgE,r1bq1rk1/pp1nppbp/2n3p1/2p1N3/2B2B2/2NP4/PPP2PPP/R2Q1RK1 w - - 1 10,e5f7 f8f7 c4f7 g8f7,775,89,88,464,advantage opening short,https://lichess.org/HVLdLS23#19
i8bJb,r1bqkb1r/pp2nppp/4p3/2p5/1nP1PP2/2N5/PP2Q1PP/R1B1KBNR b KQkq - 0 8,b4d3 e2d3 d8d3 f1d3,788,93,76,234,advantage opening short,https://lichess.org/BzAzCZ8K/black#16
zSSQt,rnbq1rk1/pp2b1pp/2pp2n1/5p2/8/2NP1NP1/PPP2PBP/R1BQR1K1 w - - 2 10,c1g5 e7g5 f3g5 d8g5,738,98,82,78,advantage opening short,https://lichess.org/mtT5ES0b#19
nRo7k,r1b1kb1r/1p1pqppp/p1n2n2/2pQ4/2B1P3/5N2/PPP2PPP/RNB2RK1 w kq - 3 8,d5f7 e7f7 c4f7 e8f7,795,119,76,31,advantage opening short,https://lichess.org/YIhAniA9#15
txCel,rn2kbnr/ppq2p1p/2bp2p1/4p3/2B1P3/1QN4P/PPP2PP1/R1B1K1NR w KQkq - 6 9,c4f7 c7f7 b3f7 e8f7,725,97,80,206,advantage opening short,https://lichess.org/c9uNBSZ1#17
QTYBS,rn2k1nr/pp3ppp/2pp1q2/2bBp2Q/4P3/5N2/PPPP1PPP/R1B1K2R w KQkq - 0 8,h5f7 f6f7 d5f7 e8f7,663,94,86,50,master opening,https://lichess.org/YRKg2pz1#15
XAVpT,1r1q1rk1/pbpnppbp/1pN3p1/7n/2B5/P1NP1Q1P/1PP2PP1/R1B2RK1 w - - 4 13,c4f7 f8f7 f3f7 g8f7 c6d8 b8d8,610,82,47,353,advantage long opening,https://lichess.org/g3oSoOW0#25
QSrjP,1rb1kb1r/p2p1ppp/5q2/2pBpN2/1pQnP3/8/PPPP1PPP/R1B1K2R w KQk - 4 12,d5f7 f6f7 c4f7 e8f7,777,97,89,422,crushing opening short,https://lichess.org/nMEiwV0v#23
1XTUV,r1b1kb1r/1pq2ppp/1np2n2/p3p3/P1BP4/1QN1PN2/1P3PPP/R1B2RK1 w kq - 2 11,c4f7 c7f7 b3f7 e8f7,797,94,90,72,advantage master opening short,https://lichess.org/Q3Ifu0vY#21
h3st4,r3kb1r/pbqn1ppp/1pp2n2/4p3/4PB2/2PB1N2/PP1N1PPP/R2QK2R w KQkq - 0 10,f3e5 d7e5 f4e5 c7e5,790,151,33,18,advantage opening short,https://lichess.org/1KjN3VK3#19
o9q9J,r3k1nr/pbppqpp1/1p1b4/7p/2BpP2P/5QP1/PPPP1P2/RNB2RK1 w kq - 2 11,c4f7 e7f7 f3f7 e8f7,741,113,76,269,advantage opening short,https://lichess.org/qcKDuGzl#21`,
  },
  {
    id: 'queen-mate', color: '#FF9A3C', title: 'Маты на ферзевом фланге', short: 'Маты на ферзевом фланге',
    // task_queenmate800.csv, rating up to 800
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
zWf3t,r3r1k1/2p1pp1p/p3b1pB/1p1qP3/3PN3/P2Q2P1/1PPn2BP/1K1R3R w - - 4 20,d1d2 d5a2 b1c1 a2a1,630,95,88,1136,mate mateIn2 middlegame queensideAttack short,https://lichess.org/04uVbtim#39
o6Yhc,2kr4/pp3p2/4p1p1/2pnB1P1/1b6/P1N4q/1PPQ1P2/2KR4 b - - 0 21,d5c3 d2d8,671,99,76,303,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/ObG5JLSj/black#42
vCLsr,2r2k2/2q3bR/5NP1/p7/Pn1p4/1P1P1Q2/1P3P2/1KrR4 w - - 1 39,d1c1 c7c1,633,100,68,166,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/4sHtpfnp#77
Wr63l,2k3nr/pppr2pp/3bp3/4B3/8/2N5/PPP3PP/3R1R1K b - - 3 17,d6e5 f1f8 d7d8 d1d8,671,84,76,234,mate mateIn2 middlegame queensideAttack short,https://lichess.org/gtWZZXwm/black#34
OGr0r,2r1k2r/pbq2ppp/1p2p3/3n4/5PP1/2N1Q2P/PPP5/2KR1B1R w k - 0 15,c3d5 c7c2,691,83,100,124,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/Y6TQ49KX#29
6CBTP,1k4nr/ppp2ppp/3R1q2/1Q6/N7/4P2B/PPP2P1P/2K4b b - - 0 16,c7d6 b5e8 f6d8 e8d8,745,77,100,268,mate mateIn2 middlegame queensideAttack short,https://lichess.org/czzhWE0I/black#32
pZ4hY,1rb1k2r/Qp1pnpbp/4p1p1/1Np1q3/2P2B2/3P2P1/PP2nP1P/2KR1BNR w k - 0 12,f1e2 e5b2,710,81,100,238,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/nPbxIMin#23
Q7myP,2kr1b1r/1ppn1pp1/pN2p2p/8/3Pq3/P1Q1PN1P/1P3PP1/2R2RK1 b - - 4 20,d7b6 c3c7,662,89,100,73,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/viHl3kwo/black#40
H7n9b,1k3r2/1ppq1rb1/p2p2p1/3Pp1p1/4P1P1/2P1Q2P/PP3B2/1K1R1R2 b - - 2 32,g7f6 e3a7 b8c8 a7a8,774,93,60,141,mate mateIn2 middlegame queensideAttack short,https://lichess.org/hbAikcwX/black#64
pyG9K,7k/pp1R1p1r/1qpB1P2/4P2p/7P/1Pb2Q2/P1P5/1K4rR w - - 1 33,h1g1 b6g1 f3d1 g1d1,647,87,80,168,mate mateIn2 middlegame queensideAttack short,https://lichess.org/ORVNjqST#65
gdLVS,r5k1/pp2ppB1/3pb1p1/q6n/4PP1P/2r5/PPPQ4/1K1R1B1R w - - 0 17,g7c3 a5a2 b1c1 a2a1,706,81,83,68,mate mateIn2 middlegame queensideAttack short,https://lichess.org/v0UnGaHJ#33
jbs5w,2kr1b1r/ppp2ppp/4Bn2/8/1n1P4/4PN2/qPQB1PPP/2R1K2R b K - 0 11,a2e6 c2c7,742,113,67,21,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/eC41JtSt/black#22
h5pG4,2kr1r2/pppbn1p1/4p2p/2bpq3/2R2NP1/2N1PQ2/1PP2PB1/1K5R b - - 3 18,d5c4 f3b7,604,85,100,143,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/gkywlTQj/black#36
fG0JC,1k5r/ppp2ppp/5n2/8/1QP5/P3qB1P/1P1r1RP1/5RK1 b - - 5 18,h8d8 b4b7,634,98,100,127,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/BzM9dLih/black#36
3aYzf,r1b1r1k1/pp3pp1/5q1p/2bp4/2nP4/PB4QP/1PPBNP2/2KR3R w - - 1 20,d4c5 f6b2,777,94,82,248,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/IuGKHcju#39
4L06K,r3k2r/2pb1pbp/p2p2p1/3nq3/1p2N2P/4BP2/PPPQB1P1/1K1R3R w kq - 0 16,d2d5 e5b2,704,84,100,194,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/H2Xv7bUK#31
EgT0W,2k5/1p1n1rnp/pq1p1Np1/4b1P1/4P1Q1/5R2/PPP4P/1K1R4 w - - 19 32,f6d7 b6b2,731,113,96,214,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/UJViClxB#63
Yc1Mt,k3r2r/1p6/p4qp1/3Q2p1/4p3/P2nP1BP/1P3PP1/1KR2R2 w - - 1 28,c1c7 f6b2,640,85,100,69,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/JrIrygzJ#55
sJCuR,2kr3r/pp3ppp/3b4/1QpP4/2B1n1q1/P3BpP1/2P2P1P/1R5K b - - 3 28,g4h3 b5b7,652,96,91,691,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/zvTcKQhQ/black#56
c4gn7,2kr1b1r/1pp2p1b/pN3p2/4q3/8/7P/PPPQPP2/2KR1B1R b - - 2 15,c7b6 d2d8,645,105,76,204,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/PUER8F0K/black#30
K3qqx,2kr3r/1pp2p2/p1p1q2p/2N3p1/2P1Pn2/1Q1P3P/PP3RP1/R6K b - - 4 21,e6e5 b3b7,674,101,95,272,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/Oi2XehYy/black#42
74SiL,1r3rk1/4Rp1p/p1p3p1/2qp1b2/Q4P2/8/PPPN2PP/2K1R3 w - - 2 20,d2b3 c5c2,626,89,100,167,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/cRBbdZtj#39
enFXO,1k3r2/pp1rqp2/3pp3/1N4n1/3QP3/7P/PPP1KP2/R7 b - - 3 22,d6d5 d4a7 b8c8 a7a8,768,89,96,1430,mate mateIn2 middlegame queensideAttack short,https://lichess.org/Ki0PZdys/black#44
alZOt,1k1r2nr/ppp2pb1/7p/2q3p1/3n2P1/2NP4/PPPBBQP1/2K1R2R w - - 8 16,c3e4 c5c2,765,81,98,366,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/WOlBHdw4#31
Q218y,1r1r2k1/8/p5pP/4q3/np6/3P4/PPPQN3/1K1R3R w - - 0 32,d1g1 e5b2,701,78,99,883,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/XgH1kaJw#63
md9gX,1k1r1b1r/pppq1pp1/2np4/3Q3p/2PN2b1/1P4P1/PB2PPBP/R4RK1 b - - 3 13,c6d4 d5b7,658,84,100,435,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/tOCwOCWk/black#26
dduJp,r1b2rk1/4ppb1/p5p1/1p4Bp/3q3P/3n1P2/PPBNQ1P1/2KR3R w - - 2 18,e2d3 d4b2,798,80,89,574,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/gRqR32Qa#35
LVnuB,k1R2r2/pn2p1bp/Nq2Q1p1/6p1/8/8/PP3PPP/4R1K1 b - - 22 33,f8c8 e6c8,744,94,64,101,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/jgzDGJDP/black#66
uXjEa,r1r3k1/ppq1bppp/1n1p1n2/Q2Pp1P1/8/1N2BP2/PPP4P/2KR1B1R w - - 1 16,g5f6 c7c2,762,82,100,567,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/N14l1zMc#31
T8b9o,rn2k1r1/p3ppP1/2pBb1p1/q6p/3P3P/4QP2/PpP3P1/1K1R1BNR w q - 1 15,d6c5 a5a2,780,79,100,121,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/3qdN8hzo#29
ADbfP,k1brr3/pp3pb1/1q1pn2p/2pn4/4P1P1/P1NQB2P/1PP3B1/1K1R3R w - - 0 22,c3d5 b6b2,663,79,100,105,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/likoQwLj#43
YMKM5,1r3rk1/1pqnbppp/4p3/p2p4/Pn1P4/1PN1Q3/1BP1BPPP/2KR3R w - - 6 16,c3b5 c7c2,797,79,100,540,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/ywpJqo68#31
AQYPR,1k1rq1nr/1pR2pp1/p2Pp2p/4P3/1P3P2/P4QP1/7P/4K2R b K - 2 24,d8d7 f3b7,757,93,96,1221,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/XxKbEb6Y/black#48
KHbOQ,1k1N3r/4Q3/1qp1N1pp/p2bP3/1p4n1/8/PPP3PP/1K1R4 w - - 5 27,d1d5 b6g1 d5d1 g1d1,760,80,80,124,mate mateIn2 middlegame queensideAttack short,https://lichess.org/go6KPbwH#53
SBmaN,2kr3r/B1pq1ppp/p1p5/3pP3/4nP2/3Q4/PPP3PP/R4R1K b - - 0 17,c6c5 d3a6,617,113,95,417,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/1VykmxTI/black#34
UJvGx,r5k1/1pp4p/p5p1/n7/3NbP2/1r6/1P2B1PP/2KRR3 w - - 0 25,d4b3 a5b3,779,106,100,49,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/uqr57Z0s#49
br19r,k3q3/1p6/r1bQ4/1pB1P2p/1P3P2/P3p3/2P3rP/3R1K2 b - - 1 32,e8g8 d6d8 g8d8 d1d8,716,84,100,70,mate mateIn2 middlegame queensideAttack short,https://lichess.org/T5Bf9gfp/black#64
zu4CU,r3r3/1ppk1N2/p2b3p/8/1n1R4/8/1PP2PPP/1K3B1R w - - 1 19,f7d6 e8e1 d4d1 e1d1,675,94,86,638,mate mateIn2 middlegame queensideAttack short,https://lichess.org/FoQ6o9fW#37
CPfkI,r2qk2r/3bn1b1/2npp1pp/2p5/1p1PP1P1/p3BN1P/PPPQB3/1NKR3R w kq - 0 18,d4c5 g7b2,793,79,96,258,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/c9aBvjT6#35
7LyFT,1k5r/pppqb3/4b3/3p4/2PP3p/1Q3B2/PP1N2PP/4R1K1 b - - 0 19,d5c4 b3b7,719,87,100,171,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/Irduw91n/black#38
NI7P5,r1b2rk1/2p2pb1/p2p1qp1/1p6/2n1PP2/1BN3Q1/PPP3P1/2KR2NR w - - 1 18,c3d5 f6b2,658,91,57,119,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/AmbmcB38#35
dk9YS,2kr2nr/pp3ppp/2B1p3/8/Q7/2P1P1B1/P2qbPPP/R5KR b - - 1 15,b7c6 a4c6,666,92,100,113,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/fwLIrGYg/black#30
A74vm,2kr1b1r/1p1np1p1/R1p5/3p3p/3P1BnP/1PP2N2/1P2BPP1/5RK1 b - - 0 15,b7a6 e2a6,682,100,57,61,bodenMate mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/F1DwRfBh/black#30
4M6Fm,4r3/pb4kp/1pp2pp1/3p3q/2nP1Q1P/1PN3RB/P1P2P2/2K1r1R1 w - - 1 30,g1e1 e8e1 c3d1 h5d1,663,81,85,111,mate mateIn2 middlegame queensideAttack short,https://lichess.org/FRuh931d#59
EalGu,r4rk1/pp2bp1b/3p2pP/q1p2PB1/1n2n3/2N2N2/PPPQB3/1K1R3R w - - 0 21,c3e4 a5a2 b1c1 a2a1,650,99,96,1986,mate mateIn2 middlegame queensideAttack short,https://lichess.org/wv0ori3I#41
Kxry4,2kr1b1r/1pp2p2/p2P4/5q1p/8/8/PPP1Q1PP/1K1RR3 b - - 0 21,d8d6 e2e8 d6d8 e8d8,612,103,96,510,mate mateIn2 middlegame queensideAttack short,https://lichess.org/jghhyctR/black#42
0gIo1,r1b1k2r/p4pb1/2p1pqpp/3n4/7P/2NBB3/PPPQ1PP1/2KR3R w kq - 0 13,c3d5 f6b2,747,79,100,260,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/L3Ix7GXk#25
l4Tah,1r1r2k1/5pp1/3p1q1p/Q1p5/P1n1P3/5P2/1PP3PP/1K1R1B1R w - - 1 21,f1c4 f6b2,715,104,96,190,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/1w9YEszr#41
5Cyfh,2krr3/1b1q4/N1p2p2/2Bp2pp/3P4/3Q4/P1P2PPP/1R4K1 b - - 1 25,b7a6 d3a6 d7b7 a6b7,647,87,58,54,mate mateIn2 middlegame queensideAttack short,https://lichess.org/jRrDdoDJ/black#50
dVa44,r3k2r/3bppb1/p2p2p1/2N1q1B1/8/7P/PPPQ1P2/2KR3R w kq - 1 21,c5d7 e5b2,741,128,60,28,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/OzvzKgRM#41
jqyYz,2kr3r/pbpq1p2/1pnbpp2/7p/3P1N1P/2P1BQP1/PP3PB1/R3K2R b KQ - 0 13,c6e7 f3b7,684,90,79,89,master mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/T3HrpMkZ/black#26
5Ugj7,r4rk1/pp1bppbp/1q1p2pB/7n/n3P1PP/2N2P2/PPPQN3/2KR1B1R w - - 1 13,g4h5 b6b2,610,83,100,410,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/opAf3G0H#25
KnKJq,r5k1/p1pn1pb1/1p3q1p/7R/2P1Q3/4PN2/PP3PP1/R3K3 w Q - 0 18,e1c1 f6b2,751,79,100,65,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/UUHc3UpB#35
3HQbZ,2k2r1r/pppqn1b1/3p3p/1P2p1p1/P3Pn2/2PPQ3/3N1BPP/RN3RK1 b - - 4 19,c8b8 e3a7 b8c8 a7a8,683,97,89,1450,mate mateIn2 middlegame queensideAttack short,https://lichess.org/mnAWWJEH/black#38
9apLl,2krr3/1pp1qp1p/p7/1b1p4/8/2Q2NP1/PP3P1P/2R3KR b - - 0 19,e7e4 c3c7,729,102,92,623,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/xsLSbIow/black#38
u0VN3,2r2rk1/pp3pbp/1q1p2p1/3BN1B1/4P3/6Q1/PP3PPP/1K5R w - - 0 19,e5d7 b6b2,774,83,99,2642,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/FlVeZvGs#37
gtSgT,r3k1nr/ppp3b1/3p1q1p/3N2p1/2B1Pp2/P2Q1P2/1PPBn3/2KR3R w kq - 4 15,d3e2 f6b2,606,96,94,518,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/3H1d4cD6#29
nXHdy,k2r4/1p1r2p1/pQ3pnp/3q4/8/5NP1/P1R2PKP/2R5 b - - 7 31,g6e5 c2c8 d8c8 c1c8,791,106,96,309,mate mateIn2 middlegame queensideAttack short,https://lichess.org/LDPKKrNZ/black#62
nIqh1,5knr/1b3p2/3Nq3/p3p3/1n2P3/2r2Q2/1PPRB2P/1K5R w - - 0 25,f3c3 e6a2 b1c1 a2a1,708,84,100,110,mate mateIn2 middlegame queensideAttack short,https://lichess.org/JrbGblwx#49
FGhE8,2kr3r/1pp2p2/p1nqb1pp/3P4/5P2/2B2N2/PPP2QPP/1K1RR3 w - - 1 19,d5c6 d6d1 e1d1 d8d1,622,100,62,268,mate mateIn2 middlegame queensideAttack short,https://lichess.org/NwWmJme0#37
eonJQ,6k1/1p1r1pp1/3pqn2/p6p/1n2P3/3B1P2/PPPQ2PP/1K1RR3 w - - 2 21,a2a3 e6a2 b1c1 a2a1,651,83,100,159,mate mateIn2 middlegame queensideAttack short,https://lichess.org/f3hO8eVf#41
H6IBx,1k1r1b1r/pppq4/3p1p2/3PnPpp/3Q4/4BB1P/PPP3P1/R4RK1 b - - 1 17,g5g4 d4a7 b8c8 a7a8,693,82,100,276,mate mateIn2 middlegame queensideAttack short,https://lichess.org/MYiWr55m/black#34
UZiLF,2kr4/p1p1q2p/Np2p1p1/8/1Q1n4/8/P2r1PPP/R1R3K1 b - - 3 23,e7b4 c1c7,749,93,85,285,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/PHM2hqnJ/black#46
a0qXb,2kr3r/1ppq4/p3p3/5pp1/PP5p/4BQ2/4PPBP/R5K1 b - - 1 24,h4h3 f3b7,729,81,90,130,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/KIibbOMz/black#48
FH66G,3r3k/p3B1p1/1p3r1p/4ppN1/Q6P/2p1nP2/P6R/2Kq4 w - - 2 38,a4d1 d8d1,778,83,82,344,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/2RMnoLvF#75
8YZIG,1kbr3r/ppp2p1p/3p2p1/1R6/1QP1B3/P3PPR1/1P3P1q/2K5 b - - 1 20,h2f2 b5b7 c8b7 b4b7,787,79,86,351,mate mateIn2 middlegame queensideAttack short,https://lichess.org/zfP4dUO1/black#40
vai9t,1rb1R3/p4pk1/4p1p1/3pq3/8/B1N5/PPP5/1K3B1R w - - 1 27,e8h8 e5e1 c3d1 e1d1,643,79,100,162,mate mateIn2 middlegame queensideAttack short,https://lichess.org/aLpv7yg4#53
F7Csn,2kRrb1r/1p2n1pp/1Bp1bp2/4p3/2P1P3/2N2P2/PPK1BP1P/3R4 b - - 3 17,e8d8 d1d8,675,96,96,197,mate mateIn1 middlegame oneMove operaMate queensideAttack,https://lichess.org/5o6vAOSa/black#34
5Nr7h,2krr3/1pp1bppp/p1B2nb1/8/8/P1q1BN2/1P1NQPPP/2KR3R w - - 0 19,b2c3 e7a3,793,76,100,319,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/f15f0LeQ#37
QmiMq,1k1r3r/npp2ppp/3bpn2/5q2/P2P4/1QP2B2/1P1B1PPP/R3R1K1 b - - 2 17,h7h5 b3b7,649,109,95,238,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/qRvZTvQ4/black#34
WgMWP,2k2r2/1p5R/4pBQ1/q1p5/2Pr4/pP1R2P1/Pb3P2/1K6 w - - 1 35,f6d4 a5e1 d3d1 e1d1,744,78,97,242,master mate mateIn2 middlegame queensideAttack short,https://lichess.org/tXWtH1Ju#69
Skrg2,Q7/ppkn2b1/2pp2p1/5b1p/6n1/1BPq4/PP1B3P/2KR2NR w - - 0 23,b3c2 d3c2,689,87,85,437,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/0fNZ48TY#45
WxWkx,1k3b1r/ppp5/2n1Q1p1/1P1p3p/P6q/2PnP3/2KN1PR1/3R4 b - - 3 22,c6e5 e6e8 h4d8 e8d8,651,123,96,700,mate mateIn2 middlegame queensideAttack short,https://lichess.org/pEHNu0Sy/black#44
gRUAe,1k1r3r/ppp2ppp/3bp3/8/2P1Q3/1P3B1P/P2q1PP1/4R1K1 b - - 2 18,f7f5 e4b7,694,95,86,159,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/dJdrvcn6/black#36
ASUwe,r5k1/ppp2ppp/8/5q2/6b1/3Br3/PPPN1NQP/2K5 w - - 0 22,d3f5 e3e1 f2d1 e1d1,712,95,100,3068,mate mateIn2 middlegame operaMate queensideAttack short,https://lichess.org/IIY1RgGz#43
dDkuP,2r2rk1/2q2pp1/p2p3p/n2Pp1nP/1p4P1/4QP2/PPP1B3/1NKR3R w - - 2 21,b2b3 c7c2,797,112,100,51,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/W0mQ0Qzi#41
1FCrz,2kr1b1r/pp3ppp/1np2p2/8/q2PbPP1/P3BN2/1PP1Q1BP/2KRR3 w - - 1 15,f3d2 a4c2,798,105,88,34,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/VDCgDtu4#29
NofnI,r4rk1/2p2pbp/p2p1qp1/3n4/4QB2/5N1P/PP1N2P1/2KR3R w - - 2 18,e4d5 f6b2,706,98,98,791,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/WEsdihDp#35
51u4O,r1b2rk1/ppp1ppb1/6pp/3n4/3q4/2NB1PBP/PPPQ1P2/2KR3R w - - 3 14,c3d5 d4b2,781,79,70,100,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/c3jt7yjz#27
pmEgH,r4rk1/pp2pp1p/1q3bp1/3p4/2P2P2/2NQ4/PP4PP/2KR3R w - - 0 16,c3d5 b6b2,735,91,92,149,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/lV370ZJF#31
uub8m,2k1Q2r/1b1r4/1B1P3n/pp5p/P1P3p1/q6P/6P1/1R2R1K1 b - - 1 30,h8e8 e1e8 d7d8 e8d8,657,94,85,52,mate mateIn2 middlegame operaMate queensideAttack short,https://lichess.org/bH6kN3j6/black#60
5ByCp,r3k2r/pp1n1pp1/2p1p1b1/q6p/2PP1Q1P/b5N1/1P1NBPP1/2KR3R w kq - 0 17,b2a3 a5a3,691,105,71,70,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/7d60YX5G#33
5shAs,r1b2r1k/pp1n2b1/3p1qp1/2p3Qp/5P2/3BP2R/PPPN2P1/2KR2N1 w - - 1 18,d3g6 f6b2,685,110,92,384,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/7arnzvK3#35
qcCcL,2kr3r/ppp2ppp/1n6/2Q5/5P2/8/Pq2B1PP/2RN1RK1 b - - 1 19,b2e2 c5c7,745,107,96,233,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/wASnJuMO/black#38
1J3pu,r2r2k1/p1p2pp1/1p5p/4q3/6QP/R4b2/PPP2PP1/2K2B1R w - - 1 20,g4f3 e5e1 f3d1 d8d1,722,107,94,877,mate mateIn2 middlegame queensideAttack short,https://lichess.org/e6txeOod#39
f8uhk,r5k1/4ppbp/3p2p1/8/1pbBP3/1P3P1P/2PRN1P1/rKR5 w - - 1 28,d4a1 a8a1,680,104,89,541,master mate mateIn1 middlegame oneMove operaMate queensideAttack,https://lichess.org/k9yKXdYq#55
TQig3,1r5k/p1p3bp/1r4p1/5p2/4p3/q1P1Q3/PP1R1PPP/2K3NR w - - 4 24,b2a3 b6b1 c1c2 b8b2,790,78,75,124,blindSwineMate mate mateIn2 middlegame queensideAttack short,https://lichess.org/cz1fJQFS#47
BnEAb,rn6/pp3Q1p/1q3bpk/8/2B2P2/5N2/PPP3PP/1K5R w - - 5 20,g2g4 b6b2,663,113,98,846,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/Kd8fwn8C#39
Mc02T,2kr1b1r/pppqn2p/2np2p1/1P6/3pBP2/P4Q1P/2PB2P1/RN3RK1 b - - 0 13,c6b8 e4b7,728,97,95,135,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/J0E3Gv5e/black#26
4tC18,2r1n3/1b1r1p1k/p3p1pP/4q3/3p4/1B1R1P2/PPP1N1Q1/1K5R w - - 2 26,e2g1 e5e1 d3d1 e1d1,706,90,44,75,mate mateIn2 middlegame queensideAttack short,https://lichess.org/8DrrjmvN#51
8Xz2d,5k2/ppp3b1/3p4/3Pp2p/4P1nq/2NB4/PPPQ2b1/RK6 w - - 2 22,d2g2 h4e1 c3d1 e1d1,776,110,97,456,mate mateIn2 middlegame queensideAttack short,https://lichess.org/4lyrCkeG#43
xvoFs,r3k2r/2Bnbp1p/1pp3p1/3p1p2/3Pn3/1N2PQ2/1PP2PPP/q1KR1B1R w kq - 2 18,b3a1 a8a1,645,107,97,320,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/TilNifNw#35
Em9hb,8/4k1p1/1b1rppPp/ppqr3P/5P2/3B1Q2/PPP1R3/1K2R3 w - - 0 39,d3e4 d5d1 e1d1 d6d1,677,97,75,264,mate mateIn2 middlegame queensideAttack short,https://lichess.org/4F0cnar0#77
mqV7W,1kb4r/ppQ3p1/1P2p1p1/2Rp4/3P4/5P2/3q3r/1R4K1 b - - 2 29,b8a8 c7c8 h8c8 c5c8,687,105,90,501,mate mateIn2 middlegame queensideAttack short,https://lichess.org/cy6U8K3H/black#58
7ojQ7,1k1R3r/1p4qp/p5pn/2Q5/4n3/2P4P/PP2NPP1/3R2K1 b - - 2 28,h8d8 d1d8,747,81,86,245,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/csSLk3Wy/black#56
XalZi,r4rk1/pp3ppp/2b1pb2/2p3P1/5P2/1P1Q4/qBPPn1BP/2KR2NR w - - 1 16,g1e2 f6b2,778,79,88,248,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/rfibMIkI#31
HRUPs,8/2p1kb1p/5p1Q/3Pp1N1/4B3/1qP1B3/rb2RPPP/1NKR4 w - - 0 27,e2b2 b3b2,766,104,93,632,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/QkxGawmU#53
mSuvf,2kr3r/1p1n1pp1/pq2pb1p/2pP3P/5B2/3Q1NP1/PPP2P2/1K1R3R w - - 1 20,d5e6 b6b2,708,109,93,837,master mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/v3cF2KnQ#39
Ww6nx,1k6/pr2bp1p/4pnp1/P2pq3/Q7/3PBP2/1P1N1P1P/1KrR3R w - - 2 22,b1c1 e5b2,785,82,94,146,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/6F4y04OO#43
x0kHu,3r3r/1k2b1p1/p1p2pb1/2p2q1p/N5nP/1P2P3/PBPNQPP1/2KR3R w - - 7 23,f2f3 f5c2,691,90,89,359,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/AYzxbkD4#45
6Mkh9,2kr4/1ppqp1br/p6p/3NBpp1/2QP4/7P/PPP2PP1/3RR1K1 b - - 0 18,d7d5 c4c7,662,86,100,472,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/98xLDBlr/black#36
VAtR9,kR1r1r2/p5b1/2p4p/q4Pp1/1Rbp4/3P3P/PQ3P1B/6K1 b - - 1 29,d8b8 b4b8 f8b8 b2b8,622,81,100,89,mate mateIn2 middlegame queensideAttack short,https://lichess.org/AC8vGQ9F/black#58
STQwf,1k1rr3/p1p2Rpp/B7/2p1q3/4b3/1Q6/PPP3PP/R5K1 b - - 4 18,e4b7 b3b7,772,79,88,129,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/DHkzTjWL/black#36
DPQs3,r3kb1r/ppp2p1p/2p3p1/4Pb2/2BP4/q1P2Q2/PP1B1PPP/2KR3R w kq - 5 13,b2a3 f8a3,784,84,56,101,bodenMate mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/gI0R6HD3#25
QPDZh,k2r3r/ppp1np2/2Bbpq1p/2Np2p1/3P2b1/1QP1PNP1/PP3PP1/R3K2R b KQ - 14 17,e7c6 b3b7,683,82,75,107,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/a9s4eIC3/black#34
BRucY,3r4/5k2/2p1nnpb/pp5p/7P/1N3R2/PPP2Q2/1K1q1R2 w - - 4 28,f1d1 d8d1 b3c1 d1c1,604,90,100,130,mate mateIn2 middlegame operaMate queensideAttack short,https://lichess.org/sgPPlk5P#55
7OTzt,r1b1k2r/pp3pb1/2nppq1p/2p3p1/4P3/2NP1NP1/PPPQBPP1/2KR3R w kq - 1 12,c3b5 f6b2,600,80,100,74,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/B79xjyAz#23
gqGAH,1r3r1k/2qN2p1/b6p/p2Q4/4p3/nP2B2P/2P2PP1/2KR3R w - - 4 33,d7f8 c7c2,766,88,65,99,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/KBVrdkK8#65
IHgca,1k1r1b1r/p1p1q1p1/1p3n1p/1N1b1B2/Q2B1P2/6P1/PP2P2P/2KR4 b - - 1 18,d5c6 a4a7,650,94,97,787,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/BS6o4Gtg/black#36
oqmAE,1k1r3r/1p2n1p1/p3Bb2/3p4/Nq6/4Q3/PPP4P/1K1R3R w - - 3 27,a4c5 b4b2,763,77,68,131,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/xY2AdpJX#53
u3sTe,2kr2r1/pbpq1p1p/1pn1p3/3P4/2P2Nn1/P3Q3/1BP2PPP/2KR1B1R w - - 1 17,d5c6 d7d1,795,77,100,204,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/taideKIV#33
CaZvX,2kQ1b1r/1p2q3/pBp1pn1p/2N1p1p1/PP2P3/2P4P/5PP1/3R2K1 b - - 4 21,e7d8 d1d8,757,81,100,77,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/ai1Hhp4h/black#42
ZERSx,2kr3r/pppn1ppp/5n2/8/8/1R1BBQ2/P1P1KPPP/q6R b - - 2 16,a1h1 f3b7,758,83,76,59,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/cOTFhw3D/black#32
XEEya,1k1r2nr/ppp2ppp/4p3/4P3/2P1Q3/q1bP1P2/3NKP1P/1R3B1R b - - 1 20,g8e7 e4b7,629,96,88,221,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/lkAFO855/black#40
pcTnr,1r2kb1r/pQp2ppp/2n2q2/2Pp4/8/4BP2/PP3P1P/2KR1B1R w k - 1 14,b7c7 f6b2,767,83,100,299,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/hShxZ9iM#27
rAuWD,rn4k1/6pR/p4bP1/4qN2/4b3/1P2BP1Q/Pp6/1K1R4 w - - 4 27,f3e4 e5e4 d1d3 e4d3,682,91,97,1524,mate mateIn2 middlegame queensideAttack short,https://lichess.org/QjBELHA4#53
Oqp3K,r2k3r/p2p1Qpp/1p6/2p1P3/2B1bP2/8/PPP3qP/R3K2R w KQ - 0 18,e1c1 g2c2,747,97,94,1085,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/d9k4j34t#35
DuGRG,2k2b1r/ppp2ppp/2n5/3r3q/5B2/8/PPQ1NPPP/R4RK1 b - - 1 13,c6b4 c2c7,669,81,97,382,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/lcaMuGhf/black#26
MapOu,2kr4/ppp2ppp/2b5/4p3/2P5/2N1bPN1/PP4PP/nK1rBB1R w - - 10 19,c3d1 d8d1,758,97,84,286,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/onZzdE4T#37
R9vKa,r7/Q4p1p/1rb1k3/3q1p2/3p4/4pPPB/PPR1P2P/1K5R w - - 7 30,a7b6 d5a2 b1c1 a2a1,732,107,96,1682,mate mateIn2 middlegame queensideAttack short,https://lichess.org/GobxBj66#59
s1HAF,1r5r/pk1Qn1p1/8/3pPn2/7P/3qB3/P4P2/R3K2R b KQ - 2 24,b7a8 d7a7,760,81,100,376,master mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/HSwvGS1e/black#48
EEXME,2k1r1r1/1pp2p2/p1p4p/Q6b/3bN3/5qBP/PPP2P1K/R4R2 b - - 5 20,e8e4 a5c7,789,78,100,227,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/2QawTubW/black#40
Y2RHN,3r3k/pp4pp/2p1qb2/3rp3/4Q1N1/P6P/1PP2PP1/1K1R3R w - - 3 22,g4f6 d5d1 h1d1 d8d1,783,79,100,134,mate mateIn2 middlegame queensideAttack short,https://lichess.org/eQLy8n7d#43
s5tMU,2kr1r2/pbpp4/1p4qn/n2PQ1Np/2P1PB2/P7/P5PP/R4RK1 b - - 2 16,h6g4 e5c7,619,100,97,331,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/PtDFFQrX/black#32
TsMPO,2kr2nr/1p1bp1bp/N1n1ppp1/1B6/5B2/5N2/PPP2PPP/3R1RK1 b - - 0 15,b7a6 b5a6,694,77,100,197,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/pm1MWDR1/black#30
XBym7,k2r1b1r/P1p2pp1/1pBp4/3Pp1Pp/1P1n4/7q/2Q2P2/R1B1KR2 b Q - 6 26,d4c6 c2c6,658,84,79,265,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/ViVynGzJ/black#52
i1ndG,2kRr3/ppp3nr/4N1pp/4P3/1b3PP1/4B3/PPP4P/3R2K1 b - - 2 23,e8d8 d1d8,685,107,95,1112,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/GeziCNNE/black#46
qQS0C,1k1rr3/2p4b/3b1Q2/3p3p/3P3N/P1q2PPP/1P1N4/2KR2R1 w - - 0 35,b2c3 d6a3,676,101,94,1725,bodenMate mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/tww7Lrs8#69
wsbn8,2kr3r/pppn1p2/2n1p3/6q1/3P4/2P3Qp/PP3PPB/RN3RK1 b - - 1 17,g5f5 g3c7,724,93,93,140,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/Dd6LMYai/black#34
3KQpZ,1k3brr/pp6/1n6/3pQ3/5P2/1P4q1/PBP3PP/3R1R1K b - - 1 29,b8a8 e5e8 b6c8 e8c8,677,83,100,336,mate mateIn2 middlegame queensideAttack short,https://lichess.org/hTorFYuz/black#58
Z3csd,1k6/1ppr1q2/p2p3n/3P3r/3B1p2/8/PPP1Q3/1KR1R3 b - - 3 33,f4f3 e2e8 f7e8 e1e8 d7d8 e8d8,703,97,93,442,long mate mateIn3 middlegame pillsburysMate queensideAttack,https://lichess.org/kaYZyymU/black#66
8fCz2,2r1k1r1/3nbp2/p2p2pP/3bp1P1/1pq1P3/3QB2B/PPP5/2KR2R1 w - - 0 22,d3d5 c4c2,644,156,82,19,master masterVsMaster mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/fSvMijsb#43
mkorQ,2q2rk1/pp2pp2/6p1/2rp1b1n/7Q/1Pb1P3/PB1NNP2/2KR3R w - - 0 18,e2c3 c5c3 b2c3 c8c3,651,85,100,185,mate mateIn2 middlegame queensideAttack short,https://lichess.org/SyIHlBbV#35
Nm2Qf,2kr1b1r/1pp1p1pp/p5q1/2N5/1P6/P3BQ1b/2P2PP1/R4RK1 b - - 1 18,h3g4 f3b7,791,79,100,101,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/zRXfbb9x/black#36
ndqiZ,1r3rk1/p1p1qppp/8/3p2N1/3PP3/b5P1/PPPQ3P/2KRR3 w - - 1 18,b2a3 e7a3,777,80,100,136,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/vFKskM6H#35
dzOAG,rnk1Qr2/pbp3pp/1p6/6q1/5N2/2B5/P4PPP/3RR1K1 b - - 3 20,f8e8 e1e8 g5d8 d1d8,666,96,90,300,mate mateIn2 middlegame queensideAttack short,https://lichess.org/Aq6ex9CZ/black#40
WtIcF,5rk1/3pppbp/r1p3p1/q3P3/3Bn3/2N5/PPPQ1PPP/1K1R3R w - - 1 15,c3e4 a5a2 b1c1 a2a1,698,90,98,408,mate mateIn2 middlegame queensideAttack short,https://lichess.org/VqFGTFvD#29
ekorN,1k1r3r/1pp1npbp/3p1q2/N3P1p1/3P1p2/2nB1Q2/6PP/R1B2R1K b - - 0 18,d6e5 f3b7,707,90,62,37,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/qv9wC0mH/black#36
3MIot,1r3r1k/5pp1/p2bpq1n/2p5/B1P1P3/P2p4/1P1BQP1P/2KR3R w - - 0 21,e2d3 f6b2,653,114,71,247,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/LvXZ05i1#41
WfSB8,2r4k/5Bbp/5Np1/ppq3P1/4Q2P/P7/1PP5/2KR4 w - - 3 32,e4d4 c5c2,782,91,70,56,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/cyo0mlpG#63
pERND,4k1nr/pp2bppp/8/3NP3/1qp5/5QB1/PPKr2PP/R4B1R w k - 2 18,c2c1 b4b2,732,79,86,144,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/hkh1aaUL#35
I5lzA,2k2b1r/1pp2pp1/p1p1b1qp/P7/3r1p2/2N4P/1PP1QPPN/3R1R1K b - - 1 23,e6c4 e2e8 d4d8 d1d8,600,87,100,181,mate mateIn2 middlegame queensideAttack short,https://lichess.org/pfWHajoa/black#46
pAAd2,2kr1b1r/pp1q2p1/2n5/1N2p2p/3PQ2P/P7/1PP5/2KR2NR w - - 1 20,d4e5 d7d1,686,83,84,88,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/iXgkNI52#39
Idwvz,1k1r3r/ppp3q1/2nb4/7p/3P1p1p/3R1Q2/PPP2PBN/5RK1 b - - 2 22,c6d4 f3b7,719,89,92,86,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/KepGYaqC/black#44
xPqGC,r3k2r/ppqnbppp/4p3/3n1b2/8/2N2N2/PPPBQPPP/2KRR3 w kq - 0 13,c3d5 c7c2,764,82,100,66,master mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/rNLaVlke#25
DvZqa,r1r3k1/5pp1/n3p2p/1Q1n1q2/p2P3P/P1N4N/1PP2PP1/2KR3R w - - 3 20,c3d5 f5c2,793,79,100,848,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/4HrRkYTM#39
neQJY,1Rkq2r1/1p6/1P2p3/2p1p1rp/4P1n1/2P2B2/1P1Q2P1/3R2K1 b - - 0 31,c8b8 d2d8 g8d8 d1d8,689,97,41,35,mate mateIn2 middlegame queensideAttack short,https://lichess.org/8fSAxWjx/black#62
jZuNA,r3r1k1/ppp2ppp/3p2b1/3Pb3/2qP2P1/P6P/1PPB1QB1/2K1R2R w - - 1 20,d4e5 c4c2,615,101,87,663,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/36A4u1IW#39
24s5Y,1kr4r/1p2b3/3p1p1p/6p1/2qBP3/PR6/1PP1Q1PP/2K4R w - - 6 26,e2e3 c4c2,642,80,81,101,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/GH9sLiXS#51
25Ecu,1k3r2/1ppq1rbp/p2p2p1/1N2p3/R7/B3Qb2/P1PP1PPP/1R4K1 b - - 0 23,a6b5 e3a7 b8c8 a7a8,738,101,97,1764,mate mateIn2 middlegame queensideAttack short,https://lichess.org/rjH6ruyk/black#46
ZkD67,rnb1r1k1/1p1pppBp/6P1/q1p5/3Pn3/2N5/PpPQ1PP1/1K1R1BNR w - - 0 13,c3e4 a5a2,614,86,100,256,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/TSHPGCng#25
6lsd1,r5r1/2qkb1pp/pp1pp3/7Q/1n2b1P1/2N2N1P/PPPB4/2KR3R w - - 0 18,c3e4 c7c2,784,80,100,859,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/XFkpKY6y#35
9YsL6,3r4/p5k1/1ppq1p1p/3BbRp1/6P1/6P1/PPP3Q1/1K1R4 w - - 0 38,d5f3 d6d1 f3d1 d8d1,786,89,47,57,mate mateIn2 middlegame queensideAttack short,https://lichess.org/XfuUd9Hj#75
JY4n0,rk1r4/p1pb2pp/B1p5/5p2/3Npb2/8/PPP2PPP/3R1RK1 b - - 3 18,d7c8 d4c6,738,80,100,160,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/kfyhJwDm/black#36
I8b1f,r1k5/1bp5/pp2pqr1/2n4Q/8/6P1/P3NP2/3R1RK1 b - - 0 28,g6h6 h5e8 f6d8 d1d8,683,86,79,116,mate mateIn2 middlegame queensideAttack short,https://lichess.org/wTvtVwLu/black#56
NUXC7,2k3nr/ppp3pp/8/5p2/1n2b2N/2PqR2B/PP1N4/RKBQ4 w - - 0 18,e3d3 e4d3 d1c2 d3c2,702,83,82,133,mate mateIn2 middlegame queensideAttack short,https://lichess.org/fGEsB1JQ#35
EMQGY,2b1k2r/5ppp/p1p2b2/3p4/3B4/q7/1rPQBPPP/1K1R3R w k - 0 17,d4b2 a3b2,660,85,45,93,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/buSQDcWq#33
9esmD,2rr4/4pk1p/p2pp1pP/6Pn/1pq1P3/5P2/PPPQN2R/2KR4 w - - 2 23,d2d4 c4c2,772,79,100,202,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/vmGx5EpP#45
mtHJ6,2r1k2r/2q1b1n1/3p1p2/4p3/1p2P2P/1P2BP2/2PQ4/1NKR3R w k - 2 26,d2b4 c7c2,611,94,96,235,epauletteMate mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/ITW5absp#51
UD531,r1b2rk1/3pppbp/2p3p1/p2n4/1q2P3/4BP2/PPPQ2PP/1K1R1B1R w - - 0 13,e4d5 b4b2,699,80,81,194,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/kGnv6gbl#25
fy66V,r3kb1r/2qn1ppp/4p1b1/pp1n4/6P1/PB3N1P/1PPBQP2/2KR3R w kq - 0 16,b3d5 c7c2,605,86,100,164,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/ilqz0aAe#31
N9dAZ,Q1kr1bn1/1bp1qp2/1pP1p3/2n3p1/2P5/2N1P1p1/1P2KPr1/R1B4R b - - 1 18,b7a8 a1a8,662,97,97,282,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/CQZyrW2B/black#36
SeEky,2k2b1r/ppp1n1p1/4Bnp1/q7/8/2N2P2/PPP3PP/R1BR2K1 b - - 2 16,c8b8 d1d8 e7c8 d8c8,602,86,100,96,mate mateIn2 middlegame operaMate queensideAttack short,https://lichess.org/6IVEFsdp/black#32
gAGBV,k1Qr2r1/pp5p/5p1n/3qp3/8/P1R1B2P/1P3PP1/2R3K1 b - - 4 24,d8c8 c3c8 g8c8 c1c8,626,85,100,81,mate mateIn2 middlegame queensideAttack short,https://lichess.org/HhUeteNk/black#48
2Gwsp,1k5r/ppp3q1/2b2p2/4b3/4P1pp/P1N1B2P/1P1R1PP1/3Q2K1 b - - 1 24,g4h3 d2d8 h8d8 d1d8,669,87,79,122,mate mateIn2 middlegame queensideAttack short,https://lichess.org/mklOXs0L/black#48
8Hpgf,1k1r3r/pp1b3p/4n1p1/3QPpP1/1R1P4/P1P5/4q2P/2B3RK b - - 0 25,b8a8 d5b7,623,83,82,72,master masterVsMaster mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/gPMMNmUq/black#50
CyhSf,2r1k2r/1pqn1pp1/p2p1b1p/4pP2/4P3/2N2Q2/PPP1N1PP/2KR3R w k - 2 15,c3d5 c7c2,606,85,63,116,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/iFxXL6Q0#29
8cleF,r4rk1/ppp2pp1/7p/4P2Q/3R2b1/2N3q1/PPP3P1/1K3B1R w - - 1 20,d4g4 g3e1 c3d1 e1d1,701,106,96,1208,mate mateIn2 middlegame queensideAttack short,https://lichess.org/nqs60FHy#39
Z6AaB,k1Rr4/r4pb1/Q3p1pp/1P6/P7/q4N2/4BPPP/6K1 b - - 4 27,d8c8 a6c8,780,87,93,80,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/x1BdInVc/black#54
sO3Jw,3r2k1/2pr1ppp/2p1p3/7b/PP1N4/8/1BP2P2/2KRR3 w - - 1 32,d4c6 d7d1 e1d1 d8d1,739,96,82,140,mate mateIn2 middlegame operaMate queensideAttack short,https://lichess.org/rIL7jvd2#63
2RU1V,1r3rk1/3R1pbp/pq4p1/2p5/2Q5/2P1PPP1/PP3P2/1BK4R w - - 3 21,h1d1 b6b2,709,84,85,79,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/ukagECUr#41
OrN1s,2kr3r/bppq2pp/p4p2/P3N3/4Q1b1/2PP2P1/4PPBP/R3R1K1 b - - 0 18,f6e5 e4b7,759,103,95,119,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/7qkg4DfW/black#36
AkmTu,5rk1/p3p2p/br2P1p1/4Qp2/1qp2P2/8/PPB3PP/1K1R3R w - - 6 24,d1d4 b4b2,755,83,100,116,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/0JftvP1J#47
qv2jy,r2qkb1r/1pp2ppp/p3p3/3p4/1n1PbBPP/4PN1R/PPPQ1P2/2KR1B2 w kq - 3 13,c2c3 b4a2,739,83,98,534,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/QIoOJo3n#25
ckCMj,rk1q1b1r/pp3Rpp/8/4R3/2B5/8/PPPP2PP/7K b - - 0 20,d8d2 e5e8 d2d8 e8d8,743,87,100,161,mate mateIn2 middlegame queensideAttack short,https://lichess.org/42p0SUsz/black#40
bUjLi,r4rk1/1p4pp/pq1ppb2/2p5/3PP3/4BP2/PPPQ1P1P/2KR3R w - - 2 16,d4c5 b6b2,674,92,89,199,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/IGuB6KyV#31
pGYbW,r4rk1/1p5p/4bp1P/p2q2p1/3p3P/3B1P2/PPPQ4/1K1R3R w - - 1 21,h4g5 d5a2 b1c1 a2a1,762,83,87,393,mate mateIn2 middlegame queensideAttack short,https://lichess.org/xGQignu1#41
pnHmd,2k2Q1r/1pr3pp/3R4/N2p2q1/3P4/2P4P/P2n2P1/5RK1 b - - 4 28,h8f8 f1f8 g5d8 d6d8,761,87,63,130,mate mateIn2 middlegame queensideAttack short,https://lichess.org/D7tWrPCu/black#56
IbYLk,2kr1r2/pp2pp2/2p3p1/3p1b2/q2P2n1/P3P1QN/1PP2PPP/2KR1B1R w - - 0 16,f1e2 a4c2,708,105,57,33,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/ZSKf5i1O#31
3Umnp,1k4nr/pppr3p/2qp1b2/7Q/4P3/2N5/PPP2PPP/R1B2RK1 b - - 6 16,f6c3 h5e8 d7d8 e8d8,668,100,95,653,mate mateIn2 middlegame queensideAttack short,https://lichess.org/Ubku6BxW/black#32
UI6pn,r1b2r1k/pp1p2p1/7p/3R4/Q1B1pq2/5N2/PPP1R1PP/1K6 w - - 2 20,f3e5 f4f1 e2e1 f1e1 d5d1 e1d1,608,104,85,295,long mate mateIn3 middlegame queensideAttack,https://lichess.org/DixpFKQL#39
ZhBa0,2kr3r/pp2bp1p/1q2bp2/2p5/8/1PPP1QP1/P5BP/RN2K2R b KQ - 0 15,b6d6 f3b7,769,89,81,81,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/3qWBeLYJ/black#30
z34oO,2kr3r/1pq1b1pp/p2p4/3npbPP/5P2/4B3/PPPQB3/2KR3R w - - 0 19,d2d5 c7c2,728,102,94,179,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/cE1BV2hI#37
DMOha,r6r/pp2k3/1q1p3p/4p3/Q2bPpP1/3P4/PP4BB/1K1R3R w - - 0 26,h2g1 b6b2,687,89,65,59,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/iFI547cR#51
TYO6S,1k1r4/ppp2ppp/2Bb4/5n2/2PPr3/1Q2Bq2/PP3P1P/2KR3R b - - 2 18,e4e3 b3b7,690,98,97,259,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/Grea2yAO/black#36
j7ZUO,1k1r3r/pp4Qp/2pb4/3p4/8/q1P1P3/P4PPP/1R3RK1 b - - 1 18,h7h5 g7b7,704,109,96,778,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/nfm8Fg0r/black#36
E6ZQx,4r1k1/pp3Npp/3b2b1/8/r2P4/2P4P/1PNQ1P2/q1KR3R w - - 1 22,c2a1 a4a1,626,82,100,117,mate mateIn1 middlegame oneMove pillsburysMate queensideAttack,https://lichess.org/AFWC2g60#43
XkYfm,r1b1r1k1/1p1p1ppp/2np4/p2Pq2P/n5P1/1N2B3/PPP1QPB1/1K1R2R1 w - - 1 20,d5c6 e5b2,659,86,74,180,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/vYTQWsKw#39
fYS8D,2kr1b1r/1ppQ1ppp/p5n1/6B1/8/8/PPP3PP/4RRK1 b - - 0 19,d8d7 e1e8 d7d8 e8d8,618,85,100,159,mate mateIn2 middlegame operaMate queensideAttack short,https://lichess.org/Uu2yTJjA/black#38
mB4yj,1k5r/1pp2p2/8/1N1b3q/PP1Nn3/2P1R1Pp/7P/4R1K1 b - - 2 27,e4g3 e3e8 h8e8 e1e8,759,77,73,208,mate mateIn2 middlegame queensideAttack short,https://lichess.org/1ZMhLW79/black#54
FZI5p,1k3r2/pp3bp1/3p4/3Bb1Pp/4P1qP/1Q6/PP3R2/5K2 b - - 7 30,e5g3 b3b7,711,115,95,815,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/p0Nbv9iH/black#60
2o1nQ,5rk1/p4rp1/6Qp/1p2ppR1/8/2P1qP2/PPB5/1K5R w - - 4 30,h1h6 e3e1 c2d1 e1d1,643,90,86,201,mate mateIn2 middlegame queensideAttack short,https://lichess.org/MFXOXacZ#59
mWrVG,r3kb1r/3n1pp1/p1pP3p/4p3/1p1Pb1PP/4B3/qP1QN3/1NKR1B1R w kq - 0 16,e2g3 a2b1,795,80,99,610,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/h2kxBirF#31
lqOcM,2k3nr/p1p3pp/1pb1p1q1/4Pp2/Nb6/3BBP2/P1P3PP/3R1RK1 b - - 1 15,c6a4 d3a6 c8b8 d1d8,755,100,95,1446,mate mateIn2 middlegame pillsburysMate queensideAttack short,https://lichess.org/q7W1dZmg/black#30
w6tn3,r5k1/p1p2r1p/1p4n1/3b1pP1/8/4qP2/PPP4Q/1K1R2NR w - - 0 24,d1d5 e3e1 d5d1 e1d1,695,89,83,33,mate mateIn2 middlegame queensideAttack short,https://lichess.org/Y8vUqQBY#47
Wxz7o,1k5r/1p1R1ppp/4p3/pN2q3/Pb4B1/4P2K/6PP/3R4 b - - 7 27,h7h5 d7d8 h8d8 d1d8,754,82,100,74,mate mateIn2 middlegame queensideAttack short,https://lichess.org/QIm8Hnnt/black#54
qLBaw,1r3rk1/4pp1p/1q1pb1p1/6Pn/p2NP2P/P4P2/1PPQ4/1K1R1B1R w - - 3 19,d4e6 b6b2,769,99,69,31,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/rDalKvO4#37
y34w5,1k3b1r/ppp3p1/2p2pb1/3r3p/2N2B2/2P5/PP3PPP/R3R1K1 b - - 1 17,g6d3 e1e8 d5d8 e8d8,693,96,100,174,mate mateIn2 middlegame queensideAttack short,https://lichess.org/spUUFKYU/black#34
rCPIO,R1krq1nr/1bp5/1p2p3/3pNp1p/1P1P3b/4P3/2PN1PP1/Q4RK1 b - - 3 19,b7a8 a1a8,674,93,68,103,mate mateIn1 middlegame oneMove queensideAttack,https://lichess.org/iAt1x0oF/black#38
oOpIf,5knr/7b/4p2b/1N1pP3/5Pp1/6Pp/rP1Q3P/2KR3R w - - 0 27,b5a3 a2a1 a3b1 a1b1,735,79,100,168,mate mateIn2 middlegame operaMate queensideAttack short,https://lichess.org/hxiVIGoi#53`,
  },
  {
    id: 'endgame-control', color: '#FFD60A', title: 'Контроль в эндшпиле', short: 'Контроль в эндшпиле',
    // task_defensive900.csv, rating up to 900
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
T8Lvx,8/8/8/1pk5/p3K3/PPP5/8/8 w - - 0 66,b3b4 c5c4 e4e5 c4c3,753,98,93,310,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/PdASnKMp#131
d5KV3,8/5p2/1K4p1/6p1/8/P4P1P/6k1/8 b - - 0 37,g2f3 a3a4 f3g3 a4a5,877,91,96,409,crushing defensiveMove endgame master pawnEndgame quietMove short,https://lichess.org/TMCNzJDh/black#74
fGPIZ,8/8/2p5/1p3R2/1P4P1/2k3K1/3r4/8 b - - 4 44,d2d3 f5f3 d3f3 g3f3 c3b4 g4g5,856,77,90,388,crushing defensiveMove endgame long rookEndgame,https://lichess.org/vyRdvk4O/black#88
KV8pa,8/1k6/rP6/3pp3/6P1/1R6/8/4K3 b - - 0 43,a6b6 b3b6 b7b6 g4g5,852,104,88,488,crushing defensiveMove endgame master masterVsMaster rookEndgame short,https://lichess.org/5u7SHMXl/black#86
QKDIy,8/1p6/p5p1/k5K1/7P/8/8/8 b - - 1 56,a5b6 g5g6 b6c5 h4h5,872,79,100,135,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/IEBhqNn3/black#112
iGI4f,8/8/3p4/kp1p2p1/3P2P1/K1P5/8/8 b - - 4 46,b5b4 c3b4 a5b5 a3b3,848,88,80,103,crushing defensiveMove endgame master pawnEndgame short zugzwang,https://lichess.org/BNqTOe7i/black#92
My1yP,8/8/5k2/p7/1p3K1p/1P3P2/P7/8 b - - 1 57,h4h3 f4g3 f6f5 g3h3 f5f4 h3g2,877,82,84,58,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/v8FvXRX7/black#114
e7Fcr,8/p7/Pp2p3/1P1p1p2/2pP1Ppk/2P1P3/5KP1/8 b - - 10 45,g4g3 f2f3 h4h5 f3g3,813,102,92,549,crushing defensiveMove endgame master pawnEndgame short zugzwang,https://lichess.org/pWgi1gPa/black#90
zQd39,8/8/6p1/8/5KPk/8/8/8 b - - 8 59,g6g5 f4f5 h4h3 f5g5,863,77,100,677,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/wQvFlzcG/black#118
0HZfF,8/8/4r3/1K3kpp/8/7P/P1R5/8 w - - 0 49,c2c5 e6e5 b5b4 e5c5,786,133,83,45,crushing defensiveMove endgame rookEndgame short,https://lichess.org/CiJN07xT#97
JBMo7,8/8/8/8/8/pK6/P7/2k5 b - - 9 56,c1b1 b3a3 b1a1 a3b3,880,96,87,650,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/mY7ThrkL/black#112
URAHa,4b3/8/3k2Bp/3p3P/p1pP3K/PpP5/1P6/8 b - - 2 61,d6e7 g6e8 e7e8 h4g4 e8e7 g4f5,726,84,87,165,bishopEndgame crushing defensiveMove endgame long,https://lichess.org/fTg9cbQQ/black#122
R1fRX,8/8/pp4p1/2p1k3/P1Pr2Pp/1P3R1P/4K3/8 w - - 5 47,f3e3 d4e4 e3e4 e5e4,809,105,94,628,crushing defensiveMove endgame rookEndgame short,https://lichess.org/8xweAqRO#93
mdJ1o,8/6p1/5p1p/1k3PPP/8/1K6/8/8 w - - 0 71,g5h6 g7h6 b3c3 b5c5,894,86,98,1553,crushing defensiveMove endgame master pawnEndgame short,https://lichess.org/aieCURvX#141
LgKsG,8/8/2p2r2/2R5/pK4k1/P7/1P6/8 b - - 1 42,f6f4 c5c4 f4c4 b4c4,739,83,100,247,crushing defensiveMove endgame rookEndgame short,https://lichess.org/YPPCSgZU/black#84
0hL8c,8/8/8/8/1Kpk4/8/2P5/8 w - - 4 45,c2c3 d4d3 b4c5 d3c3,856,97,95,256,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/8W9t534L#89
ScYzT,8/p1p5/6pk/2p2p2/3p2PP/P2P2K1/1PP5/8 w - - 1 37,g4g5 h6h5 g3f3 h5h4,704,85,100,68,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/sbNZVRMl#73
0r6aw,2r1k3/4P1p1/R2K3p/2r2p2/P4P2/8/8/8 b - - 0 46,c5c6 a6c6 c8c6 d6c6 e8e7 a4a5,781,87,76,61,crushing defensiveMove endgame long rookEndgame,https://lichess.org/IuWqjv6d/black#92
SCd10,8/8/1K5p/8/8/7k/P7/8 b - - 0 42,h3g4 a2a4 h6h5 a4a5,846,82,100,235,crushing defensiveMove endgame pawnEndgame quietMove short,https://lichess.org/tT710Lz0/black#84
IHPtw,2R5/8/5k2/r1pK2p1/6Pp/7P/8/8 w - - 1 66,c8c5 a5c5 d5c5 f6e5,744,109,83,451,crushing defensiveMove endgame rookEndgame short,https://lichess.org/J6Rd0Hiw#131
1CbXP,4r3/8/6k1/p3Kp1p/R6P/6P1/6P1/8 w - - 3 37,e5f4 e8e4 a4e4 f5e4 f4e4 a5a4,788,87,69,119,crushing defensiveMove endgame long rookEndgame,https://lichess.org/L8V2z1aV#73
WiOU3,8/8/8/5kpK/8/6P1/8/8 w - - 6 80,g3g4 f5f4 h5h6 f4g4,835,92,95,659,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/6m2phTCG#159
aPcKq,8/8/8/1pR1p3/6k1/1KP5/P7/4r3 w - - 3 45,c5b5 e1b1 b3c4 b1b5 c4b5 e5e4,768,78,100,123,crushing defensiveMove endgame long rookEndgame,https://lichess.org/CCoMTfxJ#89
W3xAI,8/8/1p1K2kp/p7/P7/3P4/2P5/8 w - - 5 52,d6c6 h6h5 c6b6 h5h4,846,85,66,63,crushing defensiveMove endgame master pawnEndgame quietMove short,https://lichess.org/YwxolK0B#103
GHqjd,8/8/8/7p/5K1k/5P2/8/8 w - - 0 51,f4f5 h4g3 f3f4 h5h4,747,94,89,93,crushing defensiveMove endgame master pawnEndgame short,https://lichess.org/JA2JTrtv#101
1eKe4,8/6k1/5pp1/6P1/2K2P2/8/8/8 b - - 1 54,f6g5 f4g5 g7f8 c4d5 f8e7 d5e5,819,82,84,211,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/3XeAOs3X/black#108
Lr5g6,8/8/8/pK2kp2/P5p1/6P1/5P2/8 b - - 3 53,e5d4 b5a5 d4c5 a5a6,873,88,87,512,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/wZysca2Z/black#106
TdicX,8/8/2K5/2p3p1/1k4Pp/1P5P/8/8 b - - 1 52,b4b3 c6c5 b3c3 c5d5 c3d3 d5e5,788,91,91,127,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/90eM43x1/black#104
h8YLX,8/8/4p1k1/p2pP2p/P1pP1P1K/2P5/8/8 b - - 1 44,g6f5 h4h5 f5f4 h5g6,704,93,63,100,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/DTPfuMXA/black#88
1kdlF,8/8/6k1/p2p1pp1/P2P1PP1/6K1/8/8 b - - 8 44,g5f4 g3f4 f5g4 f4g4 g6f6 g4f4,744,98,82,755,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/OeQgb5kV/black#88
1m5wY,8/8/8/3k2p1/1R4P1/4KP2/rp6/8 w - - 2 47,b4b5 d5c4 b5b2 a2b2,862,95,91,79,crushing defensiveMove endgame rookEndgame short,https://lichess.org/n61e3ZIY#93
QAAF4,8/5p2/3k2p1/p5P1/P2PK3/8/8/8 b - - 3 75,d6e6 d4d5 e6d6 e4d4,770,102,92,68,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/f9nfD9DM/black#150
jeiDB,3R4/K5k1/7p/6pP/6P1/8/5r2/8 w - - 6 58,d8d7 f2f7 d7f7 g7f7,858,78,99,605,crushing defensiveMove endgame rookEndgame short,https://lichess.org/fwjOvNTO#115
keH1e,8/3k4/4p3/p2pPppp/P2P3P/4PKP1/8/8 b - - 0 43,g5g4 f3f4 d7e8 f4g5,838,80,99,1496,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/WGnrrBrF/black#86
23MIb,8/5R2/6p1/8/4PkP1/5r2/8/2K5 b - - 0 45,f4g4 f7f3 g4f3 e4e5,800,102,100,25,crushing defensiveMove endgame rookEndgame short,https://lichess.org/JqsNThVu/black#90
Ljkju,8/8/4p3/4P1k1/1p2K1p1/1P4P1/8/8 w - - 2 40,e4d4 g5f5 d4c4 f5e5 c4c5 e5e4,892,83,96,196,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/OdbdVk2Y#79
iMUFH,8/3k4/pp4p1/3K3p/1P3PP1/1P6/8/8 w - - 0 47,g4h5 g6h5 d5e5 h5h4,789,82,100,162,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/4iHeVoQE#93
SrPDb,8/5k2/1p2pp2/p1p1P2K/P1P2P2/1P6/8/8 b - - 3 45,f6e5 f4e5 f7g7 h5g5,823,80,100,112,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/eG4ltv4J/black#90
ME6gK,8/2p5/2k4R/1rP5/8/6KP/8/8 b - - 0 55,c6c5 h6h5 c5b4 h5b5 b4b5 h3h4,893,79,100,343,crushing defensiveMove endgame long rookEndgame,https://lichess.org/qxT6sT2r/black#110
2N8es,8/8/1b2k3/p2p2p1/P5P1/2BK3P/8/8 w - - 9 51,c3d4 b6d4 d3d4 e6d6,863,103,93,461,bishopEndgame crushing defensiveMove endgame short,https://lichess.org/cT7s6q4u#101
PJQOk,8/8/8/7p/4K2k/6p1/P6P/8 w - - 0 46,h2g3 h4g3 a2a4 h5h4,768,111,98,458,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/23fNO4uu#91
vlnsa,8/1p6/8/pr6/1k2R2P/7K/8/8 b - - 1 48,b4c5 e4e5 c5c4 e5b5 c4b5 h4h5,762,95,94,1144,crushing defensiveMove endgame long rookEndgame,https://lichess.org/7gL3EQ4r/black#96
valzC,8/4k3/2p3p1/2P3P1/4K3/5pb1/5B2/8 w - - 2 75,e4f3 g3f2 f3f2 e7e6,745,95,81,301,bishopEndgame crushing defensiveMove endgame master short,https://lichess.org/w3iNT0nJ#149
JnB42,8/6k1/6p1/p1p3K1/P1P4P/8/8/8 w - - 3 42,h4h5 g6h5 g5h5 g7f6 h5g4 f6e5,823,82,55,73,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/1TbC7TvB#83
3LwG2,8/8/5p1p/p4P2/1k1p2P1/1P1K3P/8/8 w - - 2 44,d3d4 b4b3 d4d5 a5a4,876,97,67,72,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/gtnrDSA7#87
bEGbX,8/1P3pp1/6kp/4r3/8/R7/1K6/8 b - - 0 39,e5b5 a3b3 b5b7 b3b7,741,80,100,265,advantage defensiveMove endgame rookEndgame short,https://lichess.org/G7jviMDf/black#78
wXaU2,8/1r6/p4p2/R1K2Pk1/8/P7/8/8 b - - 1 61,b7b5 a5b5 a6b5 c5b5 g5f5 a3a4,808,93,96,259,crushing defensiveMove endgame long rookEndgame,https://lichess.org/SSBAbtEj/black#122
W4w45,8/8/p7/4K2p/1k4p1/4P1P1/5P1P/8 w - - 0 43,e5d4 a6a5 e3e4 a5a4,849,103,61,90,crushing defensiveMove endgame pawnEndgame quietMove short,https://lichess.org/j2rJOOEE#85
QYi4A,8/8/2K5/p7/P1k5/8/8/8 w - - 4 59,c6b6 c4b4 b6c6 b4a4 c6c5 a4b3 c5b5 a5a4,876,79,100,323,crushing defensiveMove endgame pawnEndgame veryLong,https://lichess.org/IFCWq4mt#117
ysP4E,8/7R/p7/r1pk4/P7/1K6/8/8 b - - 2 65,c5c4 b3b4 a5a4 b4a4,786,96,95,202,crushing defensiveMove endgame rookEndgame short,https://lichess.org/jbk9YkFp/black#130
cZUcz,8/p1p3p1/2p1k3/2PpP3/5K2/P5PP/8/8 b - - 5 37,g7g5 f4g5 e6e5 h3h4,739,98,87,506,crushing defensiveMove endgame master masterVsMaster pawnEndgame short,https://lichess.org/PlOa1MSt/black#74
clzCj,8/4r3/p7/Pp1R4/1Pp1K1k1/2P5/8/8 w - - 11 57,d5e5 e7e5 e4e5 g4f3,761,106,92,310,crushing defensiveMove endgame rookEndgame short,https://lichess.org/PUotrfIV#113
Pk2BN,8/8/8/5kpK/8/6P1/8/8 w - - 4 59,g3g4 f5f4 h5h6 f4g4,899,89,86,743,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/9vCHrf5q#117
iBPLU,8/8/4p1pp/5k2/K1PR1P2/P7/5r2/8 b - - 4 44,f2f4 d4f4 f5f4 c4c5,893,104,95,1830,crushing defensiveMove endgame rookEndgame short,https://lichess.org/ohFEIvgp/black#88
461P0,R7/P4p2/3p4/1p1k1p1p/r4P1P/2K1P3/8/8 b - - 2 46,a4a3 c3b4 a3a4 b4b5,775,81,100,389,crushing defensiveMove endgame master rookEndgame short,https://lichess.org/VKGbSk3K/black#92
YrAV0,8/8/p7/1p6/2p2KPk/3r3P/8/7R b - - 15 65,d3h3 h1h3 h4h3 g4g5,842,97,90,828,crushing defensiveMove endgame rookEndgame short,https://lichess.org/ua07QY23/black#130
wLgeD,5b2/8/4kBp1/6Pp/4K2P/8/8/8 b - - 0 55,f8e7 f6e7 e6e7 e4e5,733,87,76,83,bishopEndgame crushing defensiveMove endgame short zugzwang,https://lichess.org/RzXA1Qeg/black#110
Vflrz,8/8/6p1/8/5KPk/8/8/8 b - - 0 42,g6g5 f4f5 h4h3 f5g5,850,80,99,667,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/XEyerjyU/black#84
4E22d,8/8/5kpK/8/6P1/8/8/8 w - - 5 67,g4g5 f6f5 h6h7 f5g5,831,90,96,246,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/Myny53X9#133
eA7Wt,3K4/1R2Pk2/7p/8/6p1/4r3/8/8 b - - 2 50,e3d3 b7d7 d3d7 d8d7,724,84,100,135,crushing defensiveMove endgame master rookEndgame short,https://lichess.org/eudD0Qpd/black#100
4HyiP,8/8/8/8/8/p1K5/P7/2k5 b - - 9 60,c1b1 c3b3 b1a1 b3a3 a1b1 a3b3,878,87,89,196,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/V62dUAYd/black#120
PFiBb,8/8/5k2/4pp1p/7P/3rPKP1/2R5/8 b - - 1 45,e5e4 f3f4 d3d1 c2c6,830,77,88,212,advantage defensiveMove endgame rookEndgame short,https://lichess.org/PXNhMusR/black#90
srxZh,8/8/3K4/1k5p/6pP/2P3P1/8/8 w - - 2 52,c3c4 b5c4 d6e5 c4d3 e5f4 d3e2,794,96,93,164,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/ukrCgb4D#103
4W1vc,8/8/p4rpk/2RK4/8/2PP4/8/8 w - - 8 56,d5e5 f6f5 e5d4 f5c5 d4c5 g6g5 c3c4 g5g4,871,79,88,258,crushing defensiveMove endgame quietMove rookEndgame veryLong,https://lichess.org/AV0GaLbD#111
jb1Se,8/8/3p1k2/3P1P1p/1P1K4/7b/2B5/8 b - - 0 45,h3f5 c2f5 f6f5 b4b5,898,85,87,216,bishopEndgame crushing defensiveMove endgame short,https://lichess.org/81LHURaD/black#90
zVGtQ,8/3r2kp/5R2/p2p1KP1/2pP4/2P5/r7/7R b - - 1 41,a2f2 f5e6 f2e2 e6d7,820,105,94,743,crushing defensiveMove endgame rookEndgame short,https://lichess.org/rGntc513/black#82
bKGmm,8/8/8/7k/r5Pp/P3R2K/8/8 b - - 0 59,a4g4 e3e5 g4g5 e5g5 h5g5 a3a4 g5f4 a4a5,848,77,100,596,crushing defensiveMove endgame quietMove rookEndgame veryLong,https://lichess.org/F9p9F9ny/black#118
4ae8L,8/8/5p2/p2k2p1/1P4P1/P3K3/8/8 b - - 0 61,a5b4 a3b4 d5e5 b4b5,776,80,85,73,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/CjwQfvnl/black#122
Opz2Z,8/5K2/7k/7p/6pP/4R1P1/2r5/8 b - - 5 60,c2c6 e3e6 c6e6 f7e6 h6g6 e6e5,888,101,95,227,crushing defensiveMove endgame long rookEndgame,https://lichess.org/Kp2dJ1Gm/black#120
LYaLU,8/5k2/4p1pp/3pP1PP/3P1K2/8/8/8 b - - 0 59,h6g5 f4g5 g6h5 g5h5 f7g7 h5g5,783,100,65,37,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/paU0VqQg/black#118
cpr1f,8/8/8/8/6p1/3rk1P1/2R3K1/8 w - - 0 54,c2a2 d3d2 a2d2 e3d2 g2f2 d2d3,898,79,88,86,crushing defensiveMove endgame long rookEndgame,https://lichess.org/SCFEGhg3#107
pcGXR,8/5p2/5pk1/7p/4KP1P/8/8/8 b - - 6 56,f6f5 e4e5 g6g7 e5f5,713,95,89,1384,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/5qixuc2A/black#112
cFgIe,8/8/6R1/2kpr1p1/6K1/5P2/6PP/8 w - - 0 47,g6g5 e5g5 g4g5 d5d4,877,94,93,605,crushing defensiveMove endgame rookEndgame short,https://lichess.org/HgWtc36M#93
WRbLz,8/7p/1Kp1k1p1/5p2/8/8/P5PP/8 b - - 0 39,e6d7 a2a4 g6g5 a4a5,872,77,88,202,crushing defensiveMove endgame pawnEndgame quietMove short,https://lichess.org/I9th5hfY/black#78
gWB4z,1r6/r7/P1k1p3/4P3/RPp4R/7P/6P1/6K1 w - - 0 35,h4c4 c6b5 c4c2 b5a4,860,80,61,86,advantage defensiveMove endgame master rookEndgame short,https://lichess.org/Nmjbp3BY#69
bOdIf,8/p7/8/5Kpk/1P6/8/P7/8 w - - 0 52,a2a4 g5g4 f5f4 h5h4,897,82,87,633,crushing defensiveMove endgame master pawnEndgame quietMove short,https://lichess.org/p3WLtG5U#103
gKThq,8/8/8/1k3p1p/pp2pPpP/PP2P1P1/1K6/8 w - - 0 46,b3a4 b5a4 a3b4 a4b4 b2c2 b4c4,836,116,60,67,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/ZI5Bx96C#91
O3der,8/8/5kpK/8/6P1/8/8/8 w - - 3 57,g4g5 f6f5 h6g7 f5g5,879,96,95,855,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/chURrtSW#113
PNR7R,5K2/7p/5k1P/8/8/8/8/8 w - - 1 56,f8g8 f6g6 g8h8 g6h6 h8g8 h6g6,854,106,92,1219,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/zVMZkq15#111
vLZES,8/8/5p2/5k1K/7P/8/8/8 b - - 0 50,f5f4 h5g6 f6f5 h4h5,714,105,94,892,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/0TruqVDo/black#100
5WN4W,8/8/p7/1p1p1rP1/1P5R/3Pp2P/P5k1/4K3 b - - 0 42,f5g5 h4g4 g5g4 h3g4 g2f3 g4g5,821,104,90,318,crushing defensiveMove endgame long rookEndgame,https://lichess.org/WnIzwZEC/black#84
5XjNL,8/7p/7P/3k1p2/5K2/3P4/8/8 b - - 1 43,d5d4 f4f5 d4d3 f5f6,889,99,69,39,crushing defensiveMove endgame master pawnEndgame short,https://lichess.org/tpTx1Ohi/black#86
zmkmp,8/2K2k2/1p2r3/1P1R3P/p7/8/8/8 w - - 0 57,d5d7 e6e7 d7e7 f7e7,809,93,89,67,crushing defensiveMove endgame rookEndgame short,https://lichess.org/iyAQG8mJ#113
5cVKy,8/8/pK4p1/6k1/1P6/8/8/8 b - - 1 46,g5f4 b6a6 g6g5 b4b5,870,101,92,411,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/U0UK6brp/black#92
m8aIu,5r2/8/3p1P2/p2P2k1/P1R5/8/K7/8 b - - 0 52,g5f6 c4f4 f6e7 f4f8 e7f8 a2b3 f8e7 b3c4,776,76,100,437,crushing defensiveMove endgame rookEndgame veryLong,https://lichess.org/tXaoGoiv/black#104
5nol8,3k4/8/4p3/3pPppp/3P3P/4PKP1/8/8 b - - 0 48,g5g4 f3f4 d8e8 f4g5,883,106,86,223,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/1YC4J5WA/black#96
F1eA3,8/8/pp1k4/6p1/PPK3P1/8/8/8 b - - 5 46,d6c6 b4b5 a6b5 a4b5 c6d7 c4d5,787,79,99,1045,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/h0mtZk1K/black#92
yGOYs,8/6k1/4p3/4P1Kp/8/8/8/8 b - - 0 49,g7f7 g5h5 f7g7 h5g5,825,110,92,340,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/45udRw5n/black#98
fpML0,8/8/5k2/r2K2p1/2R3P1/8/8/8 w - - 28 65,c4c5 a5c5 d5c5 f6e5,898,83,90,62,crushing defensiveMove endgame rookEndgame short,https://lichess.org/yvRRCbrd#129
WNi1E,8/8/5p2/1K4p1/6P1/P4kP1/8/8 b - - 2 49,f3g3 a3a4 g3g4 a4a5,770,101,67,890,crushing defensiveMove endgame pawnEndgame quietMove short,https://lichess.org/GHoqp6DF/black#98
p0Cma,8/8/2B2k2/1pK3p1/1P6/P2b4/8/8 w - - 0 47,c6b5 d3b5 c5b5 g5g4,863,85,95,178,bishopEndgame crushing defensiveMove endgame short,https://lichess.org/vm3qgV5F#93
6F5dL,4r3/6p1/7p/8/P4k2/3Rp2P/4K3/8 b - - 0 43,f4g3 d3e3 e8e3 e2e3 g7g5 a4a5,785,78,85,153,crushing defensiveMove endgame long rookEndgame,https://lichess.org/tbqKWdpE/black#86
6J2Cp,8/5p2/8/4kPK1/8/8/8/8 b - - 4 61,f7f6 g5g6 e5e4 g6f6,820,82,85,461,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/cs4raIi4/black#122
FnoB3,8/8/k7/3p3r/3Pp3/4P3/1R5p/7K w - - 2 66,b2h2 h5h2 h1h2 a6b5,887,86,100,70,crushing defensiveMove endgame master rookEndgame short,https://lichess.org/hZrnVOuc#131
UWFHe,3r4/8/8/R3k2p/5p1P/5P2/4K3/8 b - - 1 40,d8d5 a5d5 e5d5 e2d3,775,83,78,185,crushing defensiveMove endgame rookEndgame short zugzwang,https://lichess.org/5JoRI0oJ/black#80
wlhWi,8/8/p7/1p2p3/1P6/P2kPK2/8/8 b - - 2 43,e5e4 f3f4 d3c3 f4e4,885,91,94,1148,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/RIy8GiPt/black#86
qbKFy,8/p7/3k4/2p5/4K3/1P6/P7/8 b - - 2 51,c5c4 b3c4 d6c5 e4d3,869,86,95,757,crushing defensiveMove endgame master pawnEndgame short,https://lichess.org/9tFFBCg8/black#102
s4tCJ,8/8/8/5kpK/8/6P1/8/8 w - - 4 47,g3g4 f5f4 h5h6 f4g4,855,77,88,508,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/n51VlnuY#93
KYJIe,8/8/ppK4p/5k2/1P5P/8/1P6/8 b - - 1 46,f5g4 c6b6 h6h5 b6a6 g4h4 b4b5,891,78,76,144,crushing defensiveMove endgame long master pawnEndgame,https://lichess.org/igIflxGj/black#92
6oDzN,8/8/8/2p3p1/P1Pk4/3r1p1P/3R1P2/3K4 b - - 1 46,d4c4 d2d3 c4d3 a4a5,877,87,86,100,crushing defensiveMove endgame rookEndgame short,https://lichess.org/c5bhvg4K/black#92
PlQk0,8/8/4b3/3p4/2pP1kP1/2P1p3/4B1K1/8 w - - 8 46,g2f1 e6g4 e2g4 f4g4 f1e2 g4f4,856,103,93,1290,bishopEndgame crushing defensiveMove endgame long,https://lichess.org/ZkBZRYNm#91
6wfuP,8/8/p1p3k1/P1Pp1pp1/3P1PP1/4K3/8/8 w - - 0 44,g4f5 g6f5 f4g5 f5g5 e3f3 g5f5,824,79,85,205,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/FRk0FiLn#87
Vb2cu,8/8/4k1p1/7p/4KP1P/8/8/8 w - - 9 62,f4f5 g6f5 e4f4 e6f6,815,83,73,122,crushing defensiveMove endgame master pawnEndgame short,https://lichess.org/MstwSCIG#123
wHyKI,3r4/3k4/p1P5/1p1K4/8/8/8/4R3 b - - 0 61,d7c7 d5c5 d8d2 e1e7,892,78,100,313,crushing defensiveMove endgame rookEndgame short,https://lichess.org/Mpwzw1OO/black#122
GpLrp,8/6p1/6kp/1K6/6P1/2P5/8/8 b - - 0 45,h6h5 g4h5 g6h5 c3c4,713,83,79,115,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/1ibbkfrO/black#90
c4QmK,8/8/1p6/8/kPK5/8/8/8 b - - 7 78,b6b5 c4c5 a4a3 c5b5,824,103,82,721,crushing defensiveMove endgame master pawnEndgame short zugzwang,https://lichess.org/qRQohslu/black#156
S6Wgt,8/8/4p1p1/1kp1P1Pp/p3P2P/P1K5/8/8 b - - 0 46,c5c4 c3d4 c4c3 d4c3 b5c5 c3d3,733,78,100,428,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/5SCJ7f42/black#92
7Belf,8/8/8/Kpk3p1/6p1/1P4P1/7P/8 w - - 2 39,b3b4 c5c4 a5b6 c4b4,863,79,83,260,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/CBgZo3HW#77
7Dfh1,8/8/5k1r/2R2pp1/2Pp4/3P1K2/8/8 b - - 0 44,f6g6 c5c6 g6h5 c6h6 h5h6 c4c5,876,78,100,166,crushing defensiveMove endgame long rookEndgame,https://lichess.org/PAxhgjce/black#88
Grqvv,8/8/pk4K1/5p1p/4p2P/4P1P1/5P2/8 w - - 0 47,g6h5 a6a5 h5g5 a5a4,860,109,94,2017,crushing defensiveMove endgame pawnEndgame quietMove short,https://lichess.org/Lqjgei2m#93
ct5NM,8/8/r7/2R5/3r3P/4k3/1PR1p1P1/6K1 w - - 2 47,c5c3 d4d3 c2e2 e3e2,882,92,100,72,advantage defensiveMove endgame rookEndgame short,https://lichess.org/8NZ6UpnO#93
zAqVr,8/8/2p5/p1R5/8/r1P3K1/1k4P1/8 w - - 0 52,c5c6 a3c3 c6c3 b2c3 g3f2 a5a4,891,78,100,318,crushing defensiveMove endgame long rookEndgame,https://lichess.org/gr7A7Ram#103
wze3S,8/8/1K3k1p/p1p5/P7/1P6/2P5/8 w - - 0 42,b6a5 h6h5 a5b6 h5h4,807,97,87,728,crushing defensiveMove endgame pawnEndgame quietMove short,https://lichess.org/HT5YmJaK#83
NPziu,8/p7/P7/5kp1/3K3p/6PP/8/8 w - - 0 51,g3g4 f5f4 d4d5 f4g3,819,96,84,410,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/dbmFClXo#101
7WpE5,8/6pp/7P/p4KP1/P6k/8/8/8 b - - 0 47,g7g6 f5f6 h4g4 f6g7 g4g5 g7h7,866,77,100,508,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/mKihzGux/black#94
7WvPl,8/1p6/p1p1k3/P2r2p1/1P1R2P1/4K2P/8/8 b - - 4 53,d5e5 d4e4 e6d5 e4e5,788,97,86,906,crushing defensiveMove endgame rookEndgame short,https://lichess.org/pp6AJNIa/black#106
7ZlMS,8/p7/1p6/2p4K/P1P3pP/1Pk5/8/8 b - - 0 56,c3b3 h5g4 b3a4 h4h5,869,80,100,288,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/FRtfcRTk/black#112
7ctDP,8/6p1/8/5KPk/8/8/8/8 b - - 4 63,g7g6 f5f6 h5h4 f6g6,880,88,60,63,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/uskKXs3r/black#126
7d9YY,8/pp1k4/2P5/1KP5/P7/8/8/8 b - - 0 60,b7c6 b5a6 d7c8 a6a7,881,91,82,250,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/4GzFIPtm/black#120
7e8Zo,8/2p5/6p1/p1p4p/P1Pr1P1P/1Pk2K2/4R3/8 w - - 8 37,e2e3 d4d3 e3d3 c3d3,869,90,76,98,crushing defensiveMove endgame rookEndgame short,https://lichess.org/JVJF16sn#73
orZIn,8/1R1P3k/7p/3r1pp1/6P1/1p2KP1P/8/8 b - - 1 37,f5f4 e3e4 d5d7 b7d7,869,85,78,93,crushing defensiveMove endgame rookEndgame short,https://lichess.org/1bZEyBm7/black#74
M8lz8,8/8/2p5/1pPp2pk/1P1P1P2/6K1/8/8 w - - 0 46,f4g5 h5g5 g3f3 g5f5,748,94,97,1228,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/fdgNWwzF#91
w65Xo,8/8/1p3r2/pP1k3p/P4R1P/5K2/8/8 b - - 0 44,d5e5 f4f6 e5f6 f3f4,891,86,58,72,crushing defensiveMove endgame rookEndgame short zugzwang,https://lichess.org/pyW8aG3X/black#88
rSbGT,8/8/6p1/2kp2Pp/p4p1P/P2K1P2/1P6/8 w - - 0 53,d3c3 d5d4 c3d3 c5d5,804,89,87,128,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/3DHWhRTX#105
7wkqs,8/5R2/1k5K/1pr4p/7P/6P1/8/8 w - - 2 51,f7f6 c5c6 f6c6 b6c6,858,96,80,76,crushing defensiveMove endgame rookEndgame short,https://lichess.org/xkwzvaZo#101
dK7gp,8/6pk/2R5/8/6r1/P7/8/1K6 b - - 0 38,g4g6 c6g6 h7g6 a3a4 g6f5 a4a5,751,102,88,419,crushing defensiveMove endgame long quietMove rookEndgame,https://lichess.org/ywhDIR0r/black#76
Onx9Q,8/1p6/p2p4/P2Pk1pp/1P2Pp1P/5P2/6K1/8 b - - 0 49,g5g4 f3g4 h5g4 h4h5,897,80,74,81,crushing defensiveMove endgame master pawnEndgame short,https://lichess.org/G8MmBgou/black#98
8C4EB,8/8/1pp3Kp/p7/P1P3P1/1k6/8/8 b - - 0 58,b3c4 g6h6 c6c5 g4g5,809,83,82,158,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/NI4rS9kc/black#116
adU6i,8/2r5/5k2/2pK2p1/2R3P1/8/8/8 w - - 4 51,c4c5 c7c5 d5c5 f6e5,808,98,91,527,crushing defensiveMove endgame rookEndgame short,https://lichess.org/7LBGddrB#101
qRZbd,8/8/8/pk4p1/5pP1/1P1K1P2/8/8 w - - 0 54,d3e4 b5b4 e4f5 b4b3 f5g5 a5a4,879,77,99,473,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/KJyd8hqu#107
xGSHJ,8/8/6kp/p1p3p1/P1P1K1P1/1P6/8/8 w - - 3 43,e4d5 h6h5 g4h5 g6h5 d5c5 g5g4,797,91,89,494,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/NzhoWoZ0#85
8R4KC,8/8/7p/5p1P/1pk2P2/P7/2K5/8 w - - 0 52,a3a4 b4b3 c2b2 c4b4 a4a5 b4a5 b2b3 a5b5 b3c3 b5c5 c3d3 c5d5,758,85,84,402,crushing defensiveMove endgame pawnEndgame veryLong zugzwang,https://lichess.org/yBnKIL0t#103
k5V3l,8/8/8/8/1p6/8/kPK5/8 b - - 3 53,b4b3 c2c3 a2a1 c3b3,861,85,89,332,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/jly5j8fS/black#106
8VREA,8/8/p3k3/7R/7P/2r5/5K2/8 b - - 1 50,c3c6 h5h6 e6d7 h6c6 d7c6 h4h5,868,76,100,193,crushing defensiveMove endgame long rookEndgame,https://lichess.org/E6TpFAJu/black#100
uCObM,8/8/p1p4p/4k3/1KP5/1P4R1/r6P/8 w - - 0 45,g3e3 e5d4 e3d3 d4d3,851,79,100,140,crushing defensiveMove endgame master rookEndgame short,https://lichess.org/gmO1QiKQ#89
8eEh4,8/8/5Rp1/4k1K1/7p/7P/4r1P1/8 w - - 5 57,f6g6 e2g2 g5h6 g2g6 h6g6 e5f4,786,91,85,381,crushing defensiveMove endgame long rookEndgame,https://lichess.org/N18N4vEQ#113
KFec3,4k3/2R2p2/6p1/2KP4/5P2/8/8/4r3 b - - 9 56,e1c1 c5d6 c1c7 d6c7,812,79,100,203,crushing defensiveMove endgame rookEndgame short,https://lichess.org/IRNduCQ2/black#112
8kSRx,8/6k1/7p/4R2K/5PP1/8/8/r7 w - - 3 55,e5e7 g7f6 e7e6 f6e6,780,84,100,61,crushing defensiveMove endgame master rookEndgame short,https://lichess.org/cf20IL5o#109
8ndA6,8/8/5kpK/8/6P1/8/8/8 w - - 5 55,g4g5 f6f5 h6h7 f5g5,833,91,84,369,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/jTwAJQHN#109
UASTj,8/pR3r2/P2p2k1/3P3p/7K/8/8/8 b - - 1 59,f7h7 b7h7 g6h7 h4h5 h7g7 h5g5 g7f7 g5f5,890,92,92,937,crushing defensiveMove endgame rookEndgame veryLong zugzwang,https://lichess.org/N3uh9GpO/black#118
deods,8/2b5/3K2p1/1k4P1/8/8/8/8 w - - 0 58,d6c7 b5c5 c7d7 c5d5,775,93,81,89,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/ZDO7rTXL#115
lSMYz,8/8/8/8/8/5K1p/7P/5k2 b - - 1 70,f1g1 f3g3 g1h1 g3h3 h1g1 h3g3,809,93,95,260,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/GO5WHIA1/black#140
FXwT8,8/8/8/5k2/6p1/4R1P1/r4K2/8 w - - 5 52,e3e2 a2e2 f2e2 f5e4,707,81,100,356,crushing defensiveMove endgame rookEndgame short zugzwang,https://lichess.org/JBuZeKS4#103
hf8OT,8/8/8/5k2/6p1/4R1P1/r4K2/8 w - - 10 56,e3e2 a2e2 f2e2 f5e4,896,91,91,744,crushing defensiveMove endgame rookEndgame short zugzwang,https://lichess.org/csOxcoq2#111
nBzdF,8/5k2/8/1p2p3/pP2P1Kp/P7/8/8 b - - 1 42,f7f6 g4h4 f6g6 h4g4,866,118,76,29,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/GhA5f8Xg/black#84
G6JTX,8/7p/p2kp1p1/P1p2pP1/P2PPP1P/4K3/8/8 w - - 0 39,e4e5 d6d5 d4c5 d5c5,789,100,76,95,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/hRG14ewR#77
Fi5dT,8/pp3k2/8/3pr3/6R1/5K2/PP5P/8 b - - 1 37,e5f5 g4f4 f5f4 f3f4,870,77,89,102,crushing defensiveMove endgame master rookEndgame short,https://lichess.org/aEELpi67/black#74
v8rPz,3R4/3P4/8/4kp2/3r4/5K2/8/8 b - - 0 64,d4d3 f3e2 d3d6 d8e8,785,86,87,162,crushing defensiveMove endgame rookEndgame short,https://lichess.org/LJF7flPp/black#128
kdsyr,5r1k/1R1RP3/7r/7p/4K3/8/8/8 b - - 0 69,h6e6 e4d5 e6e7 d7e7,730,84,68,59,crushing defensiveMove endgame master rookEndgame short,https://lichess.org/uoith3Xr/black#138
A13dQ,8/1p1k4/4r1p1/8/1PR5/P2p3P/5PPK/8 w - - 0 31,c4d4 e6d6 d4d3 d6d3,899,86,79,128,crushing defensiveMove endgame rookEndgame short,https://lichess.org/vZBXCwqJ#61
uKqbW,8/7R/2P1k2p/3pp3/7P/5K2/2r5/8 b - - 1 39,c2c6 h7h6 e6d7 h6c6 d7c6 h4h5,877,104,94,315,crushing defensiveMove endgame long master rookEndgame,https://lichess.org/cI4G7tnV/black#78
HvzTh,8/p7/8/1PK3p1/k5P1/8/8/8 w - - 0 43,b5b6 a7b6 c5b6 a4b4,872,80,100,203,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/0v8MhCJt#85
A3J1e,8/7p/5kp1/8/6PK/8/5P2/8 b - - 0 47,g6g5 h4h5 f6e5 h5g5,896,97,67,44,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/EVGe484D/black#94
vYWJS,8/6p1/5k2/p4P2/P1p3K1/2P5/8/8 b - - 0 41,g7g6 f5g6 f6g6 g4f4 g6f6 f4e4,784,96,91,513,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/o7p6szG6/black#82
WVScI,8/7R/4p2R/p5P1/r4Pk1/3KP3/5r1p/8 b - - 5 43,a4a3 d3e4 a3a4 e4e5,885,78,100,325,advantage defensiveMove endgame master rookEndgame short,https://lichess.org/8PRpyqrR/black#86
A6Brj,8/8/3b2p1/5pP1/2KPkP2/8/3B4/8 b - - 4 51,d6f4 d2f4 e4f4 d4d5,831,92,84,185,bishopEndgame crushing defensiveMove endgame short,https://lichess.org/uXNKYNSY/black#102
ituRr,8/pp6/P7/1PK5/k7/8/8/8 b - - 0 46,b7b6 c5c6 a4b4 c6b7 b4b5 b7a7,870,99,90,379,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/pEWtipri/black#92
XQLoL,8/8/3k4/3p1pp1/1p6/1P1PKP1P/8/8 b - - 1 34,f5f4 e3d4 d6e6 d4c5,801,94,67,145,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/KKbRMmiW/black#68
Zyt1P,8/p1k5/1pp2p1p/2P2PpP/PK4P1/1P6/8/8 b - - 0 40,a7a5 b4c4 b6c5 c4c5,891,99,96,423,crushing defensiveMove endgame master pawnEndgame short,https://lichess.org/tsnNZkM5/black#80
AC9Uc,8/6p1/8/5KPk/8/8/8/8 b - - 3 75,g7g6 f5f6 h5h4 f6g6,883,90,89,509,crushing defensiveMove endgame master pawnEndgame short zugzwang,https://lichess.org/9QuoC8YU/black#150
d56EA,8/8/1p6/4r3/5R2/2k1K1P1/8/8 w - - 3 56,f4e4 e5e4 e3e4 b6b5 g3g4 b5b4,856,101,94,163,crushing defensiveMove endgame long quietMove rookEndgame,https://lichess.org/BZMPM7Z0#111
XMQ6g,8/8/1p3k2/8/1p3K1p/1P3P2/8/8 b - - 1 51,h4h3 f4g3 f6f5 g3h3 f5f4 h3g2,871,78,100,106,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/fLq7ydLt/black#102
AQtkA,8/8/4p3/3pP3/2pPkp1p/1pP4P/1P2K1P1/8 b - - 2 55,f4f3 g2f3 e4f4 e2f2,854,82,100,194,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/tKTgIVzt/black#110
OD1AX,8/1R5p/3k4/6p1/8/PP3R1P/rr3PP1/5K2 w - - 1 36,f3f6 d6e5 f6f5 e5f5,859,82,88,341,advantage defensiveMove endgame rookEndgame short,https://lichess.org/aweZp613#71
MMFCU,8/8/1R6/1p3p2/1k1K1P1p/2r4P/8/8 w - - 2 44,b6b5 b4b5 d4c3 b5c5 c3d3 c5d5,847,79,99,613,crushing defensiveMove endgame long rookEndgame zugzwang,https://lichess.org/icJYcwWs#87
wC3GG,8/7k/pp2P3/3p2rr/1PpP2Rp/P1P3pP/6P1/6K1 w - - 0 40,g4g5 h5g5 e6e7 g5g8,869,95,95,214,crushing defensiveMove endgame rookEndgame short,https://lichess.org/aceTzqeD#79
loOYp,5K2/7p/6kP/8/8/8/8/8 w - - 1 69,f8g8 g6h6 g8h8 h6g6,767,143,47,17,crushing defensiveMove endgame master pawnEndgame short,https://lichess.org/QbCpCTjQ#137
AtfBZ,8/8/6K1/6Bp/6kP/8/2p5/8 w - - 0 81,g5c1 g4h4 g6f5 h4g3 f5e4 h5h4,891,77,86,210,bishopEndgame crushing defensiveMove endgame long,https://lichess.org/EaliHguw#161
AzoXn,8/8/p2p4/2p1k3/P1P5/4KP2/8/8 b - - 0 42,a6a5 f3f4 e5f5 e3f3,869,82,98,368,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/kmkFzPsm/black#84
dzY6m,8/kp6/8/1p6/8/1r3R1P/6PK/8 w - - 0 52,f3g3 b3g3 h2g3 b5b4,722,79,78,90,crushing defensiveMove endgame master rookEndgame short,https://lichess.org/Q03VagLP#103
xQsIy,8/8/4p1k1/4p2p/4PP1P/6K1/8/8 b - - 0 67,e5f4 g3f4 g6f6 e4e5 f6g6 f4e4,866,93,97,810,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/tuK1XhZk/black#134
uOXWT,8/8/8/6p1/7p/5KPk/5P2/8 b - - 0 52,g5g4 f3f4 h4g3 f2g3 h3h2 f4g4,868,81,86,502,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/SkNU94wW/black#104
BB7L3,8/8/5p2/p7/1p2kPK1/1P6/P7/8 b - - 4 43,f6f5 g4g5 e4e3 g5f5,872,79,100,543,crushing defensiveMove endgame master pawnEndgame short zugzwang,https://lichess.org/YytpvwmO/black#86
BF4Pu,8/p6p/5p2/2pk2p1/4p1P1/1PP1K1P1/P5P1/8 w - - 0 33,c3c4 d5e5 b3b4 c5b4,872,97,94,981,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/kE2guBFS#65
PTUUT,8/8/6k1/2R4p/r7/2K5/1PP5/8 w - - 0 41,c5c4 a4c4 c3c4 h5h4,841,99,96,270,crushing defensiveMove endgame rookEndgame short,https://lichess.org/3p8sT0KP#81
OvRLH,8/R7/4p3/p5r1/K4k2/P7/8/8 w - - 7 46,a7a5 g5a5 a4a5 e6e5 a3a4 e5e4,790,93,94,544,crushing defensiveMove endgame long quietMove rookEndgame,https://lichess.org/6nd7kJeD#91
zPdP9,8/6p1/5p1p/2p2PP1/3r1P1P/2k2K2/4R3/8 w - - 0 49,e2e3 d4d3 e3d3 c3d3,734,86,100,62,crushing defensiveMove endgame rookEndgame short,https://lichess.org/buCqDqCL#97
ICh30,8/5p2/7p/4KPkP/8/8/8/8 b - - 4 71,f7f6 e5e6 g5g4 e6f6,817,100,95,1037,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/C4qgdlJU/black#142
BhoV0,8/8/1p6/p3k3/P1P5/2K5/8/8 w - - 8 54,c4c5 b6c5 c3c4 e5d6,829,85,89,307,crushing defensiveMove endgame pawnEndgame short,https://lichess.org/JQpExUY0#107
qebXl,4r3/8/5pk1/1R6/1P4K1/8/8/8 b - - 0 42,e8e5 b5e5 f6e5 b4b5,727,84,100,199,crushing defensiveMove endgame rookEndgame short,https://lichess.org/0ZqCf1te/black#84
XvXrR,8/8/8/8/1p4k1/1P6/8/6K1 w - - 0 66,g1f2 g4f4 f2e2 f4e4 e2d2 e4d4,740,81,57,88,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/JH1iIWI7#131
YGxmc,8/5p2/p7/K4p1p/1Pk2P1P/6P1/8/8 w - - 6 48,a5a6 c4b4 a6b6 b4c4 b6c6 c4d4,880,78,81,215,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/NQGGMuQr#95
CC4Ba,8/pp6/P7/1PK5/k7/8/8/8 b - - 0 54,b7b6 c5c6 a4b4 c6b7 b4b5 b7a7,899,104,65,38,crushing defensiveMove endgame long pawnEndgame,https://lichess.org/nGL14v7K/black#108
S4UDq,8/8/7p/4k1p1/6P1/3KP3/8/8 b - - 16 47,e5d5 e3e4 d5e5 d3e3,850,79,89,165,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/OacEAq1D/black#94
CUXih,8/p1p5/8/5R2/1k4KP/2r5/8/8 b - - 4 45,c3c4 f5f4 c4f4 g4f4,736,81,90,141,crushing defensiveMove endgame rookEndgame short,https://lichess.org/qJA386DO/black#90
sXkiN,8/4k3/3p2p1/3P3p/7P/5KP1/3rp3/4R3 w - - 6 48,e1e2 d2e2 f3e2 e7f6,895,89,94,1482,crushing defensiveMove endgame rookEndgame short,https://lichess.org/28TA499o#95
TzqRC,8/8/8/4pk2/7p/5K1P/6P1/8 w - - 0 54,f3e3 e5e4 e3f2 f5f4,883,77,89,255,crushing defensiveMove endgame pawnEndgame quietMove short,https://lichess.org/7A0Llp2c#107
wXvpl,8/8/8/kP3p1p/5P1P/1pK5/8/8 w - - 0 49,c3b3 a5b5 b3c3 b5c5 c3d3 c5d5,745,107,67,80,crushing defensiveMove endgame long pawnEndgame zugzwang,https://lichess.org/LOJicnlo#97
CYd22,8/1R6/5k2/7K/1p3P2/8/8/1r6 w - - 2 53,b7b6 f6f5 b6b5 f5f4,785,92,89,224,crushing defensiveMove endgame rookEndgame short,https://lichess.org/vAXgsZxK#105
sRA4e,r7/3R1P2/8/7p/4K3/3p4/3k4/8 b - - 2 58,a8a4 d7d4 a4a8 d4d3,878,81,100,486,crushing defensiveMove endgame rookEndgame short,https://lichess.org/zDktFuOD/black#116
Xv4s7,8/3k1p2/6p1/3KP1P1/6P1/8/8/8 w - - 3 52,e5e6 f7e6 d5e5 d7e7,897,93,92,762,crushing defensiveMove endgame master pawnEndgame short zugzwang,https://lichess.org/5luWtC5O#103
CrP9L,6R1/8/7p/8/2KP1rk1/8/8/8 b - - 1 61,g4f5 g8f8 f5g4 f8f4 g4f4 d4d5,868,99,82,244,crushing defensiveMove endgame long rookEndgame,https://lichess.org/WwTjHqlj/black#122
NMVYk,8/8/4pp2/2k4p/5P1P/2PK4/8/8 b - - 0 38,f6f5 c3c4 c5d6 d3d4,866,81,67,91,crushing defensiveMove endgame pawnEndgame quietMove short,https://lichess.org/ntQduXik/black#76
jvwLV,8/8/8/8/5kpK/8/6P1/8 w - - 2 58,g2g3 f4f3 h4h5 f3g3,759,99,100,83,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/dXfwXbyH#115
m1x18,8/4B3/p1p5/P3P3/2bP1p2/1pP3k1/1P6/4K3 w - - 8 49,e7d6 f4f3 e5e6 g3g2,826,81,82,170,bishopEndgame crushing defensiveMove endgame short,https://lichess.org/b1Zd26TS#97
DSXx7,8/3RR1pk/pp5p/5r1P/P7/1P4P1/1r3PK1/8 b - - 4 39,f5f2 g2h3 f2h2 h3g4 b2b3 e7g7,857,82,81,129,crushing defensiveMove endgame long rookEndgame,https://lichess.org/10fk7JpL/black#78
c9Nxc,8/8/8/5kpK/8/6P1/8/8 w - - 11 59,g3g4 f5f4 h5h6 f4g4,747,94,88,592,crushing defensiveMove endgame pawnEndgame short zugzwang,https://lichess.org/RTjissIa#117
hap09,8/4K2k/7p/p5rP/1p3RP1/8/P7/8 w - - 2 52,f4f7 g5g7 e7d6 g7f7,801,81,77,57,crushing defensiveMove endgame rookEndgame short,https://lichess.org/FNtTzb3Q#103
DmnvF,6k1/5r2/4K3/4P2R/8/6p1/8/8 w - - 0 50,h5g5 f7g7 g5g3 g7g3,843,100,90,422,crushing defensiveMove endgame rookEndgame short,https://lichess.org/cIGRhF7J#99
i1Zgl,8/8/8/6kp/6pb/3B4/6PK/8 b - - 3 57,g4g3 h2h3 g5f4 h3h4,851,89,96,755,bishopEndgame crushing defensiveMove endgame master short,https://lichess.org/iqU2ckm9/black#114`,
  },
  {
    id: 'deflection', color: '#F2C200', title: 'Отвлечение', short: 'Отвлечение',
    // task_deflection900.csv, rating up to 900
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
0XNXW,r5r1/1p2qpk1/2pp3p/1p2n3/4PB2/6Q1/PP4PP/R1R3K1 b - - 2 24,g7f8 f4h6 f8e8 g3g8,807,88,83,199,crushing deflection middlegame short,https://lichess.org/yEMW1Hu0/black#48
0ldhh,r1k2bnr/pNp3pp/2np1q2/3Qp3/4P3/8/PPP2PPP/RNB1K2R b KQ - 0 11,c8b7 d5b5 b7c8 b5c6,864,87,89,1414,advantage deflection opening short,https://lichess.org/5wGjqtvH/black#22
0qMVh,rn1q1bnr/pp2pkpp/2p3b1/8/6PP/2N2N2/PPPP1P2/R1BQK2R b KQ - 0 8,h7h6 f3e5 f7e8 e5g6,883,76,100,344,advantage deflection opening short,https://lichess.org/5l68OQf7/black#16
1zSpS,3r2nr/p3Bk1p/2p1b1p1/4P3/4N3/8/PP3PPP/R4RK1 b - - 0 17,g8e7 e4g5 f7g8 g5e6,821,77,99,758,advantage deflection middlegame short,https://lichess.org/q3sMEVJS/black#34
2z5O1,r3r1k1/3N1ppp/pq6/1p1R4/8/1QP4P/PP3bP1/5RK1 w - - 0 22,f1f2 e8e1 g1h2 b6f2,866,80,70,162,crushing deflection middlegame short,https://lichess.org/S4lK1YKX#43
3EBmx,5k1r/3b1p2/3p3b/3NpP1q/4P1p1/1Q1B2P1/P5R1/1R4K1 w - - 5 31,g2h2 h6e3 g1f1 h5h2,853,78,78,111,advantage deflection middlegame short,https://lichess.org/xv6bY61V#61
3Ehcx,r1b1k1r1/p4p1p/4p3/q1pp4/2P5/P1n1P3/1P3PPP/R2QKB1R w KQq - 0 15,b2c3 a5c3 d1d2 c3a1,746,80,73,71,crushing deflection middlegame short,https://lichess.org/39PdIugR#29
3Pi6K,r2qkbnr/ppp1pppp/2n5/1B6/Q2p4/2P2P1P/PP1P1P2/RNB1K2R b KQkq - 3 8,d4c3 b5c6 b7c6 a4c6 d8d7 c6a8,895,94,91,272,crushing deflection long opening,https://lichess.org/vVSqa4xA/black#16
3Uyub,r1b1k2r/pp3ppp/2n5/8/2P1n3/4BN2/P1K2PPP/R4B1R w kq - 2 13,f1d3 c6b4 c2b3 b4d3,872,81,91,1345,crushing deflection master middlegame short,https://lichess.org/E2XRLqX6#25
4JL3n,3rr1k1/p6p/1p3Bp1/2p5/1n6/5N2/bP3PPP/2KRR3 b - - 3 24,b4d3 d1d3 d8d3 e1e8,776,90,93,535,advantage deflection master middlegame short,https://lichess.org/KlWHeP2T/black#48
55nQi,r2N2k1/1b3p2/1p4p1/8/p1np4/P5q1/1P2Q1P1/R3R1K1 b - - 0 27,d4d3 e2e8 g8h7 e8f7,896,81,90,169,advantage deflection master middlegame short,https://lichess.org/YdanuMrv/black#54
5Dn7d,N1bk1b1r/pp3ppp/2nP1q2/5n2/4p3/B1P2N1P/5PP1/R2QKB1R w KQ - 0 17,f3h2 f6c3 d1d2 c3a1,890,196,43,13,crushing deflection opening short,https://lichess.org/buocU6nm#33
5UvFW,6k1/pn3ppp/2R2n2/4p3/2b5/P3PPP1/4r1BP/3K3R b - - 3 26,c4b5 c6c8 f6e8 c8e8 b5e8 d1e2,850,99,96,1900,crushing deflection long middlegame,https://lichess.org/cK3RQCAF/black#52
6HnOu,2r3k1/4bp2/pp2pn2/8/1P2PPp1/P1r1N1P1/R3NnK1/3R4 w - - 0 31,g2f2 f6e4 f2g2 c3e3,835,103,93,884,crushing deflection master middlegame short,https://lichess.org/csIFftr7#61
6N9l1,r1b1k2r/pp3ppp/8/q2P4/8/2n5/PP2PPPP/R2QKB1R w KQkq - 0 13,b2c3 a5c3 d1d2 c3a1,860,91,96,539,crushing deflection middlegame short,https://lichess.org/LfFMojld#25
6w2lA,rn1q1b1r/1ppkpQpp/p4n2/1P1p1b2/P2P4/5N2/2P2PPP/RNB1KB1R b KQ - 2 9,f5e6 f3e5 d7c8 f7e6,892,80,87,762,crushing deflection opening short,https://lichess.org/89ZX3Ki0/black#18
7CSaS,r4q1r/p2kb3/2p1p1Q1/1N1pPpP1/1P3P2/3BP3/2PB4/2K3R1 b - - 0 26,c6b5 d3b5 d7c7 g6e6,836,83,81,258,crushing deflection middlegame short,https://lichess.org/5zb8d2te/black#52
7VTY9,1r6/p1R2Qpk/bp4r1/4p3/1P6/4qP2/PB3RPP/6K1 w - - 3 26,h2h4 e3e1 g1h2 e1f2 f7g6 h7g6,887,87,87,305,crushing deflection long middlegame,https://lichess.org/b9DsVqNy#51
860Ha,rn1q3r/p3pkbp/2p1b1p1/1p2P3/3P4/2P2N2/P1Q2PPP/R1B1K2R b KQ - 3 13,h8f8 f3g5 f7g8 g5e6,828,97,95,1143,advantage deflection middlegame short,https://lichess.org/JTtyuXBR/black#26
8bHlv,r4rk1/7p/p3b1p1/3NQ3/2p2P1q/4B3/PPPK4/R7 b - - 0 24,e6d5 e5d5 f8f7 d5a8,876,78,86,298,advantage deflection middlegame short,https://lichess.org/2JfJInz1/black#48
8ikqs,3r1r2/2pk2p1/p1n1b3/1p1nP2p/3pNP2/1B1P3P/PPPK2P1/R6R b - - 2 19,c6e7 e4c5 d7c8 c5e6,859,79,100,84,advantage deflection middlegame short,https://lichess.org/dn9p2Am9/black#38
8ky5g,2r1r1k1/pp4p1/3q1p1p/3p1Q1P/5n2/1P4P1/PBP2P2/R3R1K1 b - - 0 25,f4e2 e1e2 e8e2 f5c8,889,92,96,1613,crushing deflection middlegame short,https://lichess.org/xHvdsuxg/black#50
8zNst,3rk2r/p3n2p/b1pRPppb/8/3NN3/8/PPP2PPP/4K2R b Kk - 4 18,f6f5 e4f6 e8f8 d6d8,895,96,94,447,crushing deflection middlegame short,https://lichess.org/8z7Yg2Eh/black#36
9QMCr,r4r2/ppp3p1/2nb1pk1/8/3PR2n/2P1N2P/PP3PP1/R1B3K1 b - - 4 20,h4f5 e4g4 g6f7 e3f5,892,76,100,199,advantage deflection middlegame short,https://lichess.org/F0aZNHzu/black#40
9s5ld,2rn2k1/2b2p2/3qp1p1/3p4/3P4/4BNnP/2Q2PK1/1R4R1 w - - 2 32,f2g3 d6g3 g2f1 g3f3,857,81,75,141,advantage deflection middlegame short,https://lichess.org/XxYK0ks8#63
9wXP6,rnb1k2r/pp1p1p1p/4p3/q1pP4/2P5/2n5/PP2PPPP/R2QKBNR w KQkq - 0 9,b2c3 a5c3 d1d2 c3a1,895,95,91,518,crushing deflection middlegame short,https://lichess.org/C70BNg1S#17
AA2ew,5r2/4qpk1/2pr2p1/ppn1p1Pp/4P3/P1PP1RP1/BP6/3R1Q1K b - - 4 31,e7g5 f3f7 g7h6 f7f8,895,77,100,152,advantage deflection middlegame short,https://lichess.org/gcQDKCZ0/black#62
ASPvH,rnb1k2r/ppq2ppp/8/8/1b5B/2n5/PP2PPPP/RN1QKBNR w KQkq - 0 8,b1c3 b4c3 b2c3 c7c3 d1d2 c3a1,898,78,100,136,advantage deflection long opening,https://lichess.org/mIYThbCy#15
Acnwb,r2qkbnr/4pppp/p2p4/2pQP3/8/2N2P2/PPP2P1P/R1B1K2R b KQkq - 1 10,e7e6 d5c6 d8d7 c6a8,845,81,53,49,advantage deflection middlegame short,https://lichess.org/bTYuTqKo/black#20
AjIl5,r2qkbnr/4pppp/p7/1p1pP3/3n4/2Q5/PP3PPP/RNB1K1NR b KQkq - 1 10,d4e6 c3c6 d8d7 c6a8,880,92,96,796,crushing deflection opening short,https://lichess.org/sFJKeclE/black#20
AvZig,2r2r2/1b3p1k/pq5b/3PpP1P/1Pp3Q1/P7/2B3P1/R4R1K b - - 0 31,f7f6 g4g6 h7h8 g6h6,874,79,89,76,crushing deflection master middlegame short,https://lichess.org/g5YDihq5/black#62
B1X96,r2q3r/ppkn2Q1/3b3p/2pP4/8/P1N5/1P3PPP/R3R1K1 b - - 2 20,a8c8 c3b5 c7b8 b5d6,768,78,89,109,advantage deflection middlegame short,https://lichess.org/nLIFBwR2/black#40
B70y9,r4k1r/1p2bp2/p1q2p2/2p2P1p/3p1B2/3P4/PPP2NQP/R5K1 b - - 0 23,h8g8 f4h6 f8e8 g2g8,835,93,95,1772,crushing deflection master middlegame short,https://lichess.org/B64H6tB6/black#46
BQdGU,r3k1nr/pp1n3p/3ppqp1/2p5/2P2B2/2P2P1P/P3PP2/R2QKB1R w KQkq - 0 12,f4d6 f6c3 d1d2 c3a1,862,78,84,563,crushing deflection middlegame short,https://lichess.org/LkZUQVxP#23
CGPAZ,r2qkb1r/4nppp/p3p3/1pp1p3/4Q3/P2P3P/BPP2PP1/R1B2RK1 b kq - 0 13,e7g6 e4c6 d8d7 c6a8,870,94,92,587,crushing deflection middlegame short,https://lichess.org/OPNFMjKs/black#26
CP7rW,r2q4/2p2kpp/p1npb3/1p6/3P4/2Q2N1P/P4PP1/R1B3K1 b - - 0 18,c6e7 f3g5 f7g8 g5e6,758,79,81,129,crushing deflection middlegame short,https://lichess.org/kZ0VmROX/black#36
CZcSb,r2r2k1/3q1ppp/p6n/2Q5/8/P1Pp3P/1P3PP1/3RR1K1 b - - 1 22,d7d6 e1e8 d8e8 c5d6,865,100,96,1901,advantage deflection middlegame short,https://lichess.org/xKKlGp71/black#44
CnSAY,2kr4/p4p1p/4p3/5q2/2PPbb2/2NR1N2/PP2KR2/6Q1 w - - 8 22,c3e4 f5e4 e2f1 e4d3,753,103,93,1712,crushing deflection middlegame short,https://lichess.org/EcnxB7E4#43
CtUlP,5rk1/5Bp1/p1Rr3p/1p2q3/n3P3/P4Q1P/5PP1/1R4K1 b - - 0 24,f8f7 c6c8 g8h7 f3f7,844,81,60,66,advantage deflection middlegame short,https://lichess.org/WlhLLiDa/black#48
D5MPk,r2qkb1r/1p3ppp/p1R1p3/3pP3/Q7/4B3/PP2NPPP/5RK1 b kq - 0 17,b7c6 a4c6 d8d7 c6a8,830,96,96,150,advantage deflection middlegame short,https://lichess.org/rPVB9GK4/black#34
DPBNF,3q4/rb5k/pr5p/2p1PR2/1pBb4/3P2QP/P1P3PN/7K b - - 0 33,b6g6 f5f7 h7h8 g3g6,875,84,97,323,crushing deflection middlegame short,https://lichess.org/jgALkFyE/black#66
Dj8Kc,r1b2r2/ppb3p1/4k2p/3nB3/2N5/2P5/PP3PPP/R3R1K1 b - - 0 17,c7e5 e1e5 e6f6 e5d5,822,90,86,75,advantage deflection middlegame short,https://lichess.org/LoZLid1k/black#34
E2Avi,2kr1r2/ppp1b2p/8/1b2Pp2/3R1p2/1NP2N2/PP4PP/3R1K2 w - - 3 26,c3c4 b5c4 d4c4 d8d1,864,109,92,239,crushing deflection middlegame short,https://lichess.org/Y4Q6GvGo#51
EC6zy,rnbq2nr/ppp1pkbp/3p2p1/8/4P3/2P2N2/PP1P1PPP/RNBQK2R b KQ - 0 5,c8e6 f3g5 f7e8 g5e6,846,79,87,292,advantage deflection opening short,https://lichess.org/cuFF5iQW/black#10
EjVY9,r2qkb1r/p3pppp/2p5/3n4/Q1pP4/2N5/PP3PPP/R1B2RK1 b kq - 3 11,d5c3 a4c6 d8d7 c6a8,815,104,93,413,crushing deflection middlegame short,https://lichess.org/WuC5N0ve/black#22
Ep4n0,2kr1b1r/ppp2p1p/2n2np1/8/4P3/P1N2BPP/1PPB1P2/R2K3R w - - 0 15,d1e2 c6d4 e2f1 d4f3,894,85,97,2185,advantage deflection middlegame short,https://lichess.org/TBWUZNM3#29
Eqz2M,r2qkbnr/pp2pppp/2N5/3p3b/5B2/2Q5/PPP1PPPP/R3KB1R b KQkq - 0 8,b7c6 c3c6 d8d7 c6a8,867,78,86,451,advantage deflection opening short,https://lichess.org/OSnCohkk/black#16
F3WUU,R4bk1/3B2p1/3p2qp/2pPp1r1/2P2p2/7P/4R1P1/2B4K b - - 3 36,g5g3 d7e6 g8h7 a8f8,878,79,91,197,advantage deflection middlegame short,https://lichess.org/gJk3P5uQ/black#72
FBDk3,r2q3r/1p2pkbp/p1npbnp1/8/4P3/2N2Q1N/PPPP1PPP/R1B1K2R b KQ - 9 10,h8f8 h3g5 f7g8 g5e6,872,93,96,1931,advantage deflection middlegame short,https://lichess.org/7fjrgThO/black#20
Gak0v,r1bq1kNr/4bp2/3p4/ppp1p3/4P3/P1PP2QP/1P3PP1/R1B2RK1 b - - 0 21,h8g8 c1h6 f8e8 g3g8,866,79,98,341,advantage deflection middlegame short,https://lichess.org/oaglxge5/black#42
HBJ9S,r1bq4/ppp2p1k/3pp1B1/3Pn3/5Q1p/4P3/PPP2PP1/R1B1K3 b Q - 0 19,e5g6 f4f7 h7h8 f7g6,885,79,88,87,advantage deflection master middlegame short,https://lichess.org/LSo97ooX/black#38
HUA9a,r3r1k1/1p3p1p/2p5/p3P3/P1P1bBP1/1Bn3KP/8/R2R4 w - - 1 25,d1d7 c3e2 g3h2 e2f4,836,98,96,1044,crushing deflection middlegame short,https://lichess.org/xD66Xc5h#49
Il75F,r1bq1r2/p1p1bkpp/2Qp1n2/8/8/5N2/P2N1PPP/R1B2RK1 b - - 0 14,c8e6 f3g5 f7g8 g5e6,854,101,96,962,crushing deflection middlegame short,https://lichess.org/aCM6mRsZ/black#28
J89Uw,2r2r1k/p4p1p/2b5/6BK/6Q1/5N2/P4b1P/8 b - - 0 32,f7f6 g5f6 f8f6 g4c8,820,79,78,283,advantage deflection middlegame short,https://lichess.org/ITOJfRA6/black#64
J8qFH,r3k2r/ppB1p1bp/2p1b1p1/4Pp1n/8/2N2N1P/PPP2PP1/2KR3R b - - 0 13,e8f7 f3g5 f7e8 g5e6,833,84,85,168,crushing deflection middlegame short,https://lichess.org/4b4tNhK0/black#26
JJCGT,r2qkb1r/4pppp/p1p5/8/8/2Pn1Q2/PP3PPP/RNB2K1R b kq - 3 12,d3c1 f3c6 d8d7 c6a8,843,87,95,1764,crushing deflection middlegame short,https://lichess.org/ONkSWBRY/black#24
JT5kR,1r3k2/p4p2/1p5p/2pQ4/3b1P2/P5P1/1P5P/1RB1qBK1 w - - 1 26,g1g2 e1f2 g2h3 f2f1,870,76,83,206,crushing deflection middlegame short,https://lichess.org/3wSaPPOv#51
JYE1J,r2qkb1r/3bpp1p/2Np2p1/p2P4/1pQ5/4B3/PPP2PPP/2KR3R b kq - 1 15,d7c6 c4c6 d8d7 c6a8,875,80,91,1860,crushing deflection middlegame short,https://lichess.org/czJLSRoS/black#30
Jncfb,6r1/1ppq1pkb/p1pb1n1p/4p3/4P1P1/3PQ2P/PPP2P2/R1B2RK1 b - - 3 18,b7b6 e3h6 g7h8 h6f6,896,90,88,900,crushing deflection middlegame short,https://lichess.org/OuS1KRNu/black#36
KT3XG,r2q3r/pp2pkb1/3pbn1p/6B1/1P6/P4NQ1/2P2PPP/RN3RK1 b - - 0 14,h6g5 f3g5 f7g8 g5e6,834,87,95,792,advantage deflection middlegame short,https://lichess.org/wyLpHz9c/black#28
LPbuC,r2qkbnr/1p1bpppp/p1N5/1B6/Q3P3/8/PP1P1PPP/R1B1K2R b KQkq - 0 11,d7c6 b5c6 b7c6 a4c6 d8d7 c6a8,807,105,93,477,crushing deflection long opening,https://lichess.org/LhLWNz0N/black#22
MRh6f,rnb1k1n1/pppp3p/4pq2/8/8/2b5/P1PPPPPP/R2QKBNR w KQq - 0 7,d2c3 f6c3 d1d2 c3a1,834,99,92,1808,crushing deflection middlegame short,https://lichess.org/vog6fGIo#13
MeUGK,1r2r3/ppp3p1/2n1b1kp/2R1P3/8/P4N2/3N1PPP/1R4K1 b - - 1 18,e6f5 f3h4 g6h7 h4f5,894,84,89,306,crushing deflection middlegame short,https://lichess.org/hukaNPPL/black#36
Mydk0,r2q3r/ppp1bkpp/3pbn2/n3p3/3PP3/1PP1QN2/P4PPP/RNB1K2R b KQ - 2 9,h8f8 f3g5 f7g8 g5e6,894,79,89,269,advantage deflection middlegame short,https://lichess.org/gndNFMiH/black#18
N6aDt,rnbq1r2/p3pkbp/2ppP1p1/1p1n4/3P1P2/2N2N2/PPP3PP/R1BQ1RK1 b - - 0 10,c8e6 f3g5 f7g8 g5e6,877,78,100,145,advantage deflection middlegame short,https://lichess.org/9ZP2PDmT/black#20
NQido,r2qkbnr/pp2pppp/2N5/8/Q1Ppp3/8/PP3PPP/R1B1KB1R b KQkq - 0 10,b7c6 a4c6 d8d7 c6a8,877,94,94,1486,crushing deflection middlegame short,https://lichess.org/dmQ8J9wY/black#20
NTBGr,3r1rk1/p1p3p1/1p5B/7P/1q2P3/3P2Q1/3KN1P1/3R4 w - - 1 27,e2c3 b4b2 d2e3 b2c3,899,77,91,220,advantage deflection master middlegame short,https://lichess.org/bVvgyuGe#53
NjzGj,r2qkbnr/1p2pppp/p1N5/1BP5/Q5P1/3P3P/PP3P2/RNB1K2b b Qkq - 0 12,h1c6 b5c6 b7c6 a4c6 d8d7 c6a8,885,143,47,19,advantage deflection long middlegame,https://lichess.org/Pgl8kTZf/black#24
O8Hga,1r2n1k1/Q1p3p1/p6p/1qB2b2/1P6/7P/5PP1/4R1K1 b - - 0 28,b5b7 e1e8 b8e8 a7b7,884,79,98,264,crushing deflection middlegame short,https://lichess.org/KXg1kVCJ/black#56
OBh3Q,1r4k1/4prb1/p2p1nR1/8/4P3/qPN5/2PBQ2P/2K4R w - - 1 29,c1d1 a3a1 d2c1 a1c3,813,80,82,156,crushing deflection master middlegame short,https://lichess.org/N4FtYOoU#57
OCSax,r2qkb1r/p3nppp/2p1p3/3pP3/8/2Q1B2P/PP3PP1/RN3RK1 b kq - 2 12,e7f5 c3c6 d8d7 c6a8,885,79,90,154,crushing deflection middlegame short,https://lichess.org/3q1aB3wo/black#24
OFQdX,r1b1k2r/p4ppp/2pBp3/q7/3P4/2n5/PP3PPP/R2QKB1R w KQkq - 0 14,b2c3 a5c3 d1d2 c3a1,863,79,91,466,advantage deflection middlegame short,https://lichess.org/221lCosA#27
OJoDo,r2qkb1r/5ppp/pp6/4p3/P2NP3/8/2Q2PPP/R1B2RK1 b kq - 0 15,e5d4 c2c6 d8d7 c6a8,826,108,93,500,crushing deflection middlegame short,https://lichess.org/rWNNhLf4/black#30
ONRN5,rnbqr3/5pkp/p2p1p1b/2pP3P/1p2P3/3B1PN1/PPP1QP2/1K1R3R b - - 0 17,b8d7 g3f5 g7h8 f5h6,857,90,89,141,crushing deflection middlegame short,https://lichess.org/WFWXADlR/black#34
OSGdn,r2q4/1pp3pk/p2pP1n1/3P4/5r2/P7/1PP1QPPP/2R2RK1 b - - 2 20,d8e7 e2h5 h7g8 h5g6,808,80,91,336,advantage deflection middlegame short,https://lichess.org/a1P55d0A/black#40
OqyEJ,1r3rk1/pp1q1pNp/4pn2/3p4/8/4QP1P/P5P1/1R2R1K1 b - - 0 26,g8g7 e3g5 g7h8 g5f6,866,91,93,533,crushing deflection middlegame short,https://lichess.org/PhIZVEuB/black#52
PVDXV,r2qr1k1/1p1b1pp1/p2p4/3P4/3Q1Pp1/3B2R1/PPP3PK/5R2 w - - 0 22,f4f5 d8h4 h2g1 h4g3,896,78,99,524,crushing deflection middlegame short,https://lichess.org/xd8b74kI#43
PurA1,r2qkb1r/1p2pppp/p2pn3/3Q4/8/P3PN1P/1PP2PP1/R3K2R b KQkq - 1 18,b7b5 d5c6 d8d7 c6a8,893,89,84,966,crushing deflection middlegame short,https://lichess.org/03CIn0ey/black#36
QF6VL,r1b1k2r/1p3ppp/p1nP4/q2p4/7B/2n5/PP3PPP/R2QKBNR w KQkq - 0 13,b2c3 a5c3 d1d2 c3a1,869,94,95,1151,crushing deflection opening short,https://lichess.org/kJRQBtd9#25
QlXws,rnb1k2r/pp3ppp/4pn2/q1pP2B1/3P4/P1P5/4PPPP/R2QKBNR w KQkq - 1 8,g5f6 a5c3 d1d2 c3a1,897,91,94,542,crushing deflection middlegame short,https://lichess.org/t73XPxFW#15
QxNtJ,r1q2r2/p2bp1kN/np1p1pp1/2pP4/2P1P3/P1P2P2/3Q2PP/1RB2RK1 b - - 0 17,g7h7 d2h6 h7g8 h6g6,877,88,93,183,advantage deflection middlegame short,https://lichess.org/TR4dXlfD/black#34
RDyi8,r3kb1r/5ppp/p1pp1q2/4P3/5p2/2N2Q2/PPP3PP/R1B3K1 b kq - 0 15,f6d8 f3c6 d8d7 c6a8,886,80,90,105,crushing deflection middlegame short,https://lichess.org/VZqxjknm/black#30
RIWLC,r4b2/pp1nn3/2pq2k1/3p1P2/3P4/2NQB3/PPP2P2/2KR4 b - - 0 21,e7f5 d1g1 g6f7 d3f5,884,76,100,331,advantage deflection middlegame short,https://lichess.org/uIk9sezZ/black#42
RPmnx,r2qkbnr/5ppp/2p1p3/p2pP2b/QP1B4/2P2N1P/P4PP1/RN2K2R b KQkq - 1 12,a5b4 a4c6 d8d7 c6a8,850,77,89,336,crushing deflection middlegame short,https://lichess.org/AF7Ep3ep/black#24
RVZIb,r3br2/pp2n1p1/2n1p2k/4P3/3pNpQP/3q4/P2N1PP1/R3R1K1 b - - 3 21,e8h5 g4g5 h6h7 g5h5,894,82,93,143,advantage deflection middlegame short,https://lichess.org/j1dh1btI/black#42
RgUE9,3r1r2/3qn1pk/p4p2/1p2p1p1/3pP3/P2P3P/1P1N1PP1/2RQ1RK1 b - - 0 29,e7g6 d1h5 h7g8 h5g6,739,82,86,171,crushing deflection middlegame short,https://lichess.org/zmR9s9NW/black#58
TpQwj,r2q1r2/p3ppkp/1p4P1/2pPp3/2P3b1/2N5/PP1QP1PR/3K1B2 b - - 0 16,f7g6 d2h6 g7f7 h6h7,879,80,75,60,crushing deflection middlegame short,https://lichess.org/iDCRlEpV/black#32
Tz2h5,r3k2r/1p1b3p/p3qp2/2p1p3/4Q3/3P2NP/PPP4K/R1B2R2 w kq - 2 21,e4b7 e6h3 h2g1 h3g3,874,82,96,608,advantage deflection middlegame short,https://lichess.org/cj4iGctc#41
UNL1P,1r3rk1/5p1p/5Pp1/p1BpP3/6NP/3q4/1P6/1R4QK b - - 4 36,f8c8 g4h6 g8h8 h6f7,821,105,93,221,advantage deflection middlegame short,https://lichess.org/6E7LDtfh/black#72
UUf5y,r5k1/ppp3pp/2n5/3p2P1/1P1Pb1q1/PB2PR2/R7/2BQ1K2 b - - 0 22,e4f3 b3d5 f3d5 d1g4,805,77,84,207,advantage deflection middlegame short,https://lichess.org/FobKDHJJ/black#44
V7Q4Q,1k1r2nr/pp1q1pp1/3p4/8/3R4/1QP1BPp1/PP3PKP/4R3 w - - 0 19,f2g3 d7h3 g2f2 h3h2,731,102,90,931,advantage deflection middlegame short,https://lichess.org/u1PPQRAB#37
VD5fG,r2qkb1r/5ppp/4p3/pp2P3/3PQ3/2P1P3/R5PP/2B1K2R b Kkq - 0 16,a5a4 e4c6 d8d7 c6a8,885,78,80,81,advantage deflection middlegame short,https://lichess.org/gjnT19Bw/black#32
VUVFE,2kr3r/pppq1p2/5b2/4pR2/2PpP3/1P1P2P1/P5KP/RN1Q4 w - - 0 19,f5f6 d7h3 g2f2 h3h2,721,91,94,1267,crushing deflection middlegame short,https://lichess.org/zNo1dF9O#37
VgT4R,r4r2/4bpp1/2pp2k1/p3p1Nn/4P3/P6P/1P3P1K/1RB3R1 b - - 4 19,e7g5 g1g5 g6h7 g5h5,876,82,94,435,advantage deflection middlegame short,https://lichess.org/OegDT7vX/black#38
VxEnk,2bn4/4kp1p/3b4/2pPp1p1/B1P1PnP1/2B2PN1/1P3K1P/8 b - - 11 38,c8a6 g3f5 e7f8 f5d6,700,80,100,339,advantage deflection middlegame short,https://lichess.org/WBmVtDfv/black#76
WhcWm,rn2k2r/pp3ppp/2p1p3/q3NP2/1b1P4/2n5/PP1BPP1P/R2QKB1R w KQkq - 0 10,d2c3 b4c3 b2c3 a5c3 d1d2 c3a1,852,98,94,1342,advantage deflection long opening,https://lichess.org/yx6oqfdu#19
WxGtn,r2Rr3/p1p2kpp/2n1b3/8/4P1n1/7N/PQ3PPP/2K4R b - - 0 16,e8d8 h3g5 f7g8 g5e6,777,100,95,2264,advantage deflection middlegame short,https://lichess.org/LHhxGt1g/black#32
XBMRF,r1b4r/ppqn2kB/2p1n3/3p4/3P4/P1N1P1P1/1PQ2PP1/2R1K2R b K - 0 17,d7f6 c2g6 g7f8 g6f6,833,80,84,393,crushing deflection middlegame short,https://lichess.org/gC36UrF3/black#34
XYtqa,r1b5/pp3kpQ/1q2prBp/3p4/3n3P/P4NP1/1P4P1/R4K1R b - - 3 21,f7e7 h7g7 e7d6 g7f6,808,94,97,1724,crushing deflection master middlegame short,https://lichess.org/C4s3e9EE/black#42
Xkkj5,r4r2/1p1b1kpQ/p3p1Bp/3pP1q1/3P2p1/2P5/PP1N3P/2R3K1 b - - 5 22,f7e7 h7g7 e7d8 g7f8,874,107,91,319,crushing deflection middlegame short,https://lichess.org/BHigp8v8/black#44
YkfMi,r3k2r/ppp2p2/3p4/P3p3/1P1PQ3/5Pp1/1B3KPq/RN3R2 w kq - 0 21,f2e2 h2g2 e2d3 g2f1,836,81,50,48,crushing deflection middlegame short,https://lichess.org/1YLQ1Lvg#41
ZRB3m,r2qkb1r/5ppp/p3p3/1nppP3/1P6/8/P1Q2PPP/R1B1RNK1 b kq - 2 16,c5b4 c2c6 d8d7 c6a8,873,83,96,161,advantage deflection middlegame short,https://lichess.org/0FeTd9kF/black#32
ZTjj4,r2q3r/pQp1nkpp/2n1b3/4P3/4P3/2P2N2/P4PPP/R1B2RK1 b - - 0 13,h8f8 f3g5 f7g8 g5e6,825,114,82,47,crushing deflection middlegame short,https://lichess.org/1coujrui/black#26
aCDts,r4bk1/pp3r1p/4q1p1/P3p3/2PpR1P1/B2P3K/2P4P/R3Q3 w - - 3 27,e4e5 f7f3 h3g2 e6g4,898,141,38,12,advantage deflection middlegame short,https://lichess.org/bxJWV7t2#53
aGP3T,r2qkbnr/1p3ppp/b1N5/3p4/Q2P4/N3P3/PP1B1PPP/R3K2R b KQkq - 0 13,b7c6 a4c6 d8d7 c6a8,868,80,89,156,advantage deflection middlegame short,https://lichess.org/FT11DTVx/black#26
aILpM,r2qkb1r/pp2pppp/2n5/1Bpn4/Q5b1/5N2/PP3PPP/RNB1K2R b KQkq - 3 10,g4f3 b5c6 b7c6 a4c6 d8d7 c6a8,866,85,89,271,advantage deflection long opening,https://lichess.org/St85im92/black#20
aR8n0,3rk2r/pR2ppbp/6p1/8/2BnP3/3KB3/P4P1P/7R w k - 4 18,e3d4 d8d4 d3e3 d4c4,891,79,88,551,crushing deflection middlegame short,https://lichess.org/7cUTL0gf#35
alHoi,r3q1k1/1p2B2p/pb2b1p1/6Q1/4P3/8/PPPK1PPP/7R b - - 0 23,g8f7 g5f6 f7g8 f6e6,874,95,93,3041,advantage deflection middlegame short,https://lichess.org/0xncOF8U/black#46
b4wsS,rnb4r/pp1k1p1p/2pN4/q2Pb3/8/2N5/PP2PPPP/R2QKB1R w KQ - 0 13,d6f7 e5c3 b2c3 a5c3 d1d2 c3a1,884,118,100,50,advantage deflection long opening,https://lichess.org/vdVQJjyb#25
b5xa4,4kr2/p3bpQp/q5b1/8/3P4/1PN5/P2K1PPP/R6R w - - 2 24,g7e5 a6d3 d2e1 d3c3,877,86,89,235,crushing deflection middlegame short,https://lichess.org/9ZhKQXZK#47
bPi0L,5r2/k2nqr2/bR1p1p1p/p2P2p1/2PQP1P1/P1P2B2/5BP1/6K1 b - - 0 32,d7b6 d4b6 a7a8 b6a6,834,91,91,313,crushing deflection master middlegame short,https://lichess.org/i8W0wtg2/black#64
c8T6Q,4k1nr/p2r2p1/2QPpp1p/8/1q6/1P6/P2N1B2/3RK3 b k - 0 24,f6f5 c6c8 e8f7 c8d7,851,96,96,2005,crushing deflection middlegame short,https://lichess.org/69vtx4p9/black#48
c99IQ,r6r/p1k2R2/3b3p/1p2N3/6b1/3P4/PPP3PK/R7 b - - 2 24,g4d7 f7d7 c7c8 d7d6,715,108,92,556,crushing deflection middlegame short,https://lichess.org/rt9MxgAR/black#48
cI1Vj,r2q3r/ppp1bkpp/3pbn2/4p3/4P3/2PQ1N2/P2P1PPP/RNB2RK1 b - - 5 12,h8f8 f3g5 f7g8 g5e6,876,86,87,513,crushing deflection middlegame short,https://lichess.org/rXCIvCiU/black#24
cK1GZ,5rk1/pQpp1p1p/1p4p1/8/8/1Pb1B3/1qPK1P1P/3R2N1 w - - 2 17,d2e2 b2c2 e2f3 c2d1,781,77,69,98,crushing deflection middlegame short,https://lichess.org/t7NHdeNa#33
cWjD3,r2q2nr/pp2pkbp/2npb1p1/8/4P3/5N2/PPPPQPPP/RNB1K2R b KQ - 5 8,d8b6 f3g5 f7e8 g5e6,784,97,89,1029,advantage deflection middlegame short,https://lichess.org/MPAD6Xda/black#16
dMZur,r2qr3/ppp2pkp/5np1/8/3Pp1N1/7P/PPPQ1PP1/2KR3R b - - 0 18,d8d5 d2h6 g7h8 g4f6,867,100,83,24,crushing deflection middlegame short,https://lichess.org/vsVKeAoZ/black#36
dXcqM,4rr2/1p4pk/p2Q1n2/2pP4/2P5/q6P/P4PP1/R3R1K1 b - - 1 20,f6e4 e1e4 e8e4 d6f8,880,92,91,779,advantage deflection middlegame short,https://lichess.org/Lmx9C3ad/black#40
e3Hkf,r2qkb1r/p2b1ppp/2B3n1/4p3/Q3P3/2P5/PB3PPP/R3K1NR b KQkq - 0 12,d7c6 a4c6 d8d7 c6a8,896,94,96,517,crushing deflection middlegame short,https://lichess.org/o9c8SCJt/black#24
eO6zQ,rn4n1/5kpp/2p1b3/pp1pP3/1b1P4/1P2BN2/1P3PPP/2R2RK1 b - - 3 19,g8e7 f3g5 f7f8 g5e6,746,89,75,74,crushing deflection middlegame short,https://lichess.org/IIOgIOzw/black#38
eeXlp,1r1q1r2/3n2kp/4p1p1/pB2P3/3P4/P4P2/1P1Q4/R3K2R b KQ - 1 21,b8b5 d2h6 g7f7 h6h7,870,88,78,172,crushing deflection middlegame short,https://lichess.org/7PpwmwNO/black#42
f4RiH,r2qkbnr/p1p2ppp/8/3pp3/2P5/1P3Q1P/P2P1PP1/RNB1K2R b KQkq - 0 9,d5d4 f3c6 d8d7 c6a8,836,225,0,4,crushing deflection middlegame short,https://lichess.org/OwJjWjjc/black#18
ffyOI,2r5/4q1kp/2r2bp1/R3p3/P7/4Q1P1/4NP1P/2R3K1 w - - 0 33,a5a7 c6c1 e2c1 c8c1 e3c1 e7a7,891,78,97,2704,advantage deflection long middlegame,https://lichess.org/2hJc05vm#65
foMnL,1k3r2/ppp1qpQ1/r7/7P/4p3/1NP1P1P1/Pn6/1K1R1R2 w - - 0 27,b1b2 e7a3 b2c2 a3a2,777,85,62,37,advantage deflection middlegame short,https://lichess.org/JuCJ16k1#53
fqMWC,4k2r/p3nppp/b3p3/q2pP3/3N4/P1r5/1P3PPP/R2QK2R w KQk - 0 15,b2c3 a5c3 d1d2 c3a1,870,97,91,476,crushing deflection middlegame short,https://lichess.org/H3bbOZ0X#29
fqrht,2rr2k1/1p4p1/p3bp2/4p2p/3nP3/1P2BP2/P5PP/2RRKB2 b - - 1 25,d4c2 c1c2 c8c2 d1d8,837,77,90,131,advantage deflection middlegame short,https://lichess.org/WWGbK6Vl/black#50
fvu1p,r1b2r2/ppq1n1bk/2p1p1B1/7n/8/2N1B3/PPP1QPPP/1R3RK1 b - - 0 16,e7g6 e2h5 h7g8 h5g6,852,91,66,375,advantage deflection hangingPiece middlegame short,https://lichess.org/nxPP1EhS/black#32
gxb0d,r3r1k1/1Q3p2/p2p1q1p/1p4p1/8/5NnP/PP3PP1/R3R1K1 b - - 0 22,g3e2 e1e2 e8e2 b7a8,884,96,95,1635,advantage deflection middlegame short,https://lichess.org/KY7xGzRz/black#44
hBkui,r4rk1/1p3pp1/p2p1q1p/3Pp3/4P1B1/4P2P/PP2N2K/2RQ4 w - - 0 22,e2g3 f6f2 h2h1 f2g3,840,99,74,162,crushing deflection middlegame short,https://lichess.org/UCr0lU7M#43
iE5jw,r6r/5kp1/p2pp2p/7P/2p1bP2/P1P1B2q/2P2K2/R2Q2R1 w - - 0 25,d1d6 h3f3 f2e1 f3e3,881,79,89,138,crushing deflection master middlegame short,https://lichess.org/NhkdarSP#49
iEPA4,r4rk1/pb3p1p/1p2p1p1/1P1pP1q1/P2P1bP1/2PB3R/1B1NQ1K1/R7 w - - 2 26,d2f3 g5g4 g2f2 g4h3,883,100,95,646,crushing deflection middlegame short,https://lichess.org/GQ6W0O5s#51
iGZOL,2r4r/1p3kpp/1q1bpp2/p2p4/3P1PR1/2P5/PPQ3PP/R1B3K1 b - - 2 20,h7h5 c2g6 f7e7 g6g7,871,92,97,259,crushing deflection middlegame short,https://lichess.org/UbzAMg2K/black#40
iL4A3,4r3/2p2kpp/p1p5/5p2/1Bp1n3/2P2BP1/P2r1P1P/R3R1K1 w - - 1 20,g1g2 d2f2 g2g1 f2f3,824,105,92,536,crushing deflection middlegame short,https://lichess.org/YgkryV0w#39
iP2fc,r2q3r/pp1n1k2/2p1b1p1/4Pp1p/3p1P1P/3P1N2/PPPQ2P1/R3K2R b KQ - 0 19,d7b6 f3g5 f7e8 g5e6,767,88,71,112,advantage deflection middlegame short,https://lichess.org/WPb81iOe/black#38
iTCN9,3rr3/pk4pp/1b3p2/8/1P6/2P3P1/1B2nP1P/RN2RK2 w - - 5 23,e1e2 d8d1 f1g2 e8e2,890,85,91,864,crushing deflection middlegame short,https://lichess.org/baVxzNAD#45
io67e,4r1k1/ppb2pp1/2pq4/5B2/3P2P1/2P1nN2/PP1Q1PK1/7R w - - 0 23,f2e3 d6g3 g2f1 g3f3,772,77,86,244,advantage deflection master middlegame short,https://lichess.org/cpWo7s5u#45
j1mA9,r1b5/5pk1/2pr4/pp2q1pQ/4PR2/1PP5/1PB3P1/R6K b - - 0 28,d6h6 f4f7 g7g8 h5h6,871,76,91,223,crushing deflection middlegame short,https://lichess.org/UFIPtBUt/black#56
jGolD,rnb1rk2/pp3ppp/2pp4/6NB/8/3P4/PPP2KPP/R3R3 b - - 5 15,g7g6 g5h7 f8g7 e1e8,892,80,99,892,advantage deflection middlegame short,https://lichess.org/1nZ5SfRu/black#30
kAYDO,7r/1b1k1ppp/1pn5/6b1/2PpP3/3B2B1/PP1K2PP/R6R w - - 3 21,d2c2 c6b4 c2b3 b4d3,809,86,82,150,advantage deflection middlegame short,https://lichess.org/vuRdytzr#41
lUh33,1r1q1rk1/1p1b1ppp/p1np4/2pN4/4P3/3P2b1/PPPQN1BK/R4R2 w - - 0 17,e2g3 d8h4 h2g1 h4g3,868,88,98,1512,advantage deflection middlegame short,https://lichess.org/znsZSSTU#33
m0UBK,6rk/1p6/p2Q2p1/5p1r/3R4/P1P2b1P/2B1KPq1/4R3 w - - 2 35,e2d2 g2f2 d2c1 f2e1,817,113,97,559,crushing deflection middlegame short,https://lichess.org/cResK5GB#69
mob9E,r4r2/pp1b1kpQ/1n1p2Bp/2pPp3/2P4q/P1P5/5PPP/R3R1K1 b - - 1 20,f7e7 h7g7 e7d8 g7f8,846,89,88,76,advantage deflection middlegame short,https://lichess.org/deGXAen1/black#40
nla9N,6k1/R4p2/8/2Pp2p1/1rn3P1/3b1P2/4rBK1/5N1R w - - 5 34,f1g3 c4e3 g2h3 e2f2,875,80,41,67,crushing deflection master middlegame short,https://lichess.org/8dOdVVkr#67
oSdtY,r1bq1r2/pp2bkpp/2pp1n2/n3p3/1P2P3/2NP1N1P/P1PB1PP1/R2QK2R b KQ - 2 10,c8e6 f3g5 f7g8 g5e6,892,78,86,356,crushing deflection middlegame short,https://lichess.org/JVozRxO9/black#20
oUX4v,rnb2rk1/pp3pbp/2pp2p1/3Pp3/2P1Pn2/1N3P2/PP3BPP/R3KBNR w KQ - 0 12,g1e2 f4d3 e1d2 d3f2,861,80,91,787,crushing deflection middlegame short,https://lichess.org/3F0JtwGw#23
pU7cY,r4k1r/pp1nbp2/2p5/3n1P2/4p1Q1/4B2B/P1q2NK1/1R3R2 b - - 3 30,h8g8 e3h6 f8e8 g4g8,858,78,76,119,crushing deflection master middlegame short,https://lichess.org/gxoRs50Q/black#60
pYcfy,6k1/1bR3b1/pp1p4/3Pp1p1/PP2P1qp/5rP1/5P1P/3Q1RK1 b - - 2 30,b7c8 c7c8 g4c8 d1f3,837,78,99,431,advantage deflection middlegame short,https://lichess.org/DLEy4mHU/black#60
q1OL1,2kr3r/pp2n1pp/2nb1p2/2p5/2B1P2P/PKN1BP2/1P3P2/R6R w - - 1 16,a1d1 c6a5 b3a2 a5c4,789,81,68,65,advantage deflection middlegame short,https://lichess.org/RuETqH5q#31
qNewZ,5r2/p2b1kpQ/2n3Bp/8/p1pP4/2P3P1/3q2P1/R6K b - - 1 27,f7e7 h7g7 e7d8 g7f8,815,93,89,1010,crushing deflection middlegame short,https://lichess.org/k1PN3OgV/black#54
qNxJW,4r1k1/1p3ppp/2P4r/pb6/3BP2q/1P3PN1/P7/R2QR1K1 w - - 0 25,g1f2 h4h2 f2e3 h2g3,878,82,90,399,crushing deflection master middlegame short,https://lichess.org/0rszMu4c#49
qv9QP,5r1k/2Rp4/b2r4/3Bp1p1/P2np2p/5P1P/5BP1/1R4K1 w - - 0 37,f3e4 d4e2 g1h2 f8f2,873,87,91,1999,crushing deflection middlegame short,https://lichess.org/ufaznfie#73
r0hL1,r2q1rk1/2p5/2bpQ1pb/7p/1p3N1P/8/PPP2PP1/2KR3R b - - 0 23,g8h7 e6g6 h7h8 g6h6,808,77,80,180,crushing deflection middlegame short,https://lichess.org/xTdBVH9q/black#46
r8TVJ,1rb1kbnr/3pq1pp/pp6/3QPpB1/2B5/8/PPP2PPP/R4RK1 b k - 2 13,e7g5 d5f7 e8d8 f7f8,800,93,96,2711,advantage deflection middlegame short,https://lichess.org/qfi80ZW2/black#26
rPvY3,2qr2k1/pr1nbpp1/Qpp1p2p/4P3/N1P2B2/P6P/1P1R1PP1/3R2K1 b - - 0 21,d7b8 d2d8 e7d8 d1d8 c8d8 a6b7,802,79,85,91,advantage deflection long middlegame,https://lichess.org/vje518j0/black#42
sLFmF,r2qkbnr/p3pppp/2p5/2p1p3/5P2/5Q1P/PPPP2P1/RNB1K2R b KQkq - 0 8,e5f4 f3c6 d8d7 c6a8,823,88,89,1003,crushing deflection middlegame short,https://lichess.org/ES2Oqvcj/black#16
sLPln,r4r1k/ppp2ppn/3p3N/3P4/7P/1P2P1Q1/1qP3P1/R4RK1 w - - 1 22,h6f7 f8f7 f1f7 b2a1,830,79,91,413,advantage deflection middlegame short,https://lichess.org/iqBZ7ZB8#43
tfToo,1r6/3k3p/p1ppbB1b/1n2P3/4Nr1P/1P6/PKP4R/4R3 b - - 4 34,d6d5 e4c5 d7c8 c5e6,853,105,86,27,advantage deflection middlegame short,https://lichess.org/bJjdy88L/black#68
u093Z,r2qkb1r/pp3ppp/2R5/3pP3/Q7/4B3/PP3PPP/5RK1 b kq - 0 17,b7c6 a4c6 d8d7 c6a8,806,77,79,171,advantage deflection middlegame short,https://lichess.org/pGnN27M2/black#34
ujSyB,2rq1b1r/1p1n4/p3p1k1/2ppPn1p/3P1P2/2PQ1N2/PP3BP1/R4RK1 b - - 1 18,f8h6 f3h4 g6g7 h4f5,890,100,93,567,advantage deflection master middlegame short,https://lichess.org/kI8YZ6OY/black#36
vDzbJ,r2q3r/pp2nkbp/2npb1p1/2p5/1P2Pp2/P1PP1N2/1Q4PP/RNB2RK1 b - - 0 12,h8f8 f3g5 f7g8 g5e6,790,93,94,419,advantage deflection middlegame short,https://lichess.org/vckDsU1G/black#24
vILBG,rnb2rk1/pp1p1p2/4pn2/q1p3B1/2PP4/P1P5/4PPPP/R2QKB1R w KQ - 1 11,g5f6 a5c3 d1d2 c3a1,861,95,85,237,crushing deflection middlegame short,https://lichess.org/8sxn7ZZa#21
w73w9,r2qkb1r/pp2pppp/2N5/8/Q2P4/2P5/P4P1P/R1B1K2R b KQkq - 0 13,b7c6 a4c6 d8d7 c6a8,898,79,100,178,crushing deflection middlegame short,https://lichess.org/SiJoT9bT/black#26
wyAUm,r2qkb1r/ppp1pppp/2n5/1B1p4/Q2Pb1P1/2P1PN1P/PP1B1P2/R3K2R b KQkq - 4 10,e4f3 b5c6 b7c6 a4c6 d8d7 c6a8,853,77,86,113,advantage deflection long middlegame,https://lichess.org/73XCWnmE/black#20
x73zc,r2qkb1r/p1p1pp1p/2p3p1/3B4/Q1pP4/2n3P1/PP3P1P/R1B2RK1 b kq - 0 12,c3d5 a4c6 d8d7 c6a8,883,95,92,700,advantage deflection middlegame short,https://lichess.org/m7mVSUAY/black#24
xHhD0,rnb2k1r/pp3Ppp/5n2/q5B1/3p4/P1P5/4PPPP/R2QKBNR w KQ - 1 10,g5f6 a5c3 d1d2 c3a1,896,76,88,216,advantage deflection opening short,https://lichess.org/mywzSxcW#19
xzuXN,rnb1kbnr/ppp3pp/3p1q2/4p1B1/2B1P3/5Q2/PPP2PPP/RN2K1NR b KQkq - 3 6,f6g5 f3f7 e8d8 f7f8,878,93,95,616,advantage deflection opening short,https://lichess.org/kUtqjyJ7/black#12
yo8iL,r4bnr/ppN1kppp/2n1b3/q1p5/5B2/2P1P3/P4PPP/R2QKBNR w KQ - 2 11,c7a8 a5c3 d1d2 c3a1,840,84,96,1827,crushing deflection middlegame short,https://lichess.org/Vt6mQSPK#21
zHuWo,r2q3r/ppp1bkpp/2npbn2/8/4P3/5N2/PPP1QPPP/RNB2RK1 b - - 3 9,h8f8 f3g5 f7g8 g5e6,892,89,97,3060,advantage deflection middlegame short,https://lichess.org/clMlD5N1/black#18
zW4p5,r2q1rk1/1b3ppp/1p2p3/pP1pP1b1/P2P4/4PN1P/N1R3P1/2Q2RK1 w - - 5 22,c2c7 g5e3 c1e3 d8c7,891,88,96,3075,advantage deflection middlegame short,https://lichess.org/j6pOml17#43
za69m,3rr1k1/5p1p/2p3p1/8/pB3n2/PbP2B1P/1K3PP1/3RR3 b - - 3 24,f4d3 d1d3 d8d3 e1e8,806,106,91,754,crushing deflection middlegame short,https://lichess.org/oHaxG1BE/black#48`,
  },
  {
    id: 'long-combo', color: '#FFE45C', title: 'Длинные комбинации', short: 'Длинные комбинации',
    // task_long900.csv, rating up to 900
    csv: `PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl
tpD5M,r2qkbnr/pppb1ppp/2n5/1B1p4/3Np3/2N1P3/PPPP1PPP/R1BQK2R w KQkq - 2 6,c3d5 c6d4 b5d7 d8d7 d5c7 d7c7,849,80,88,160,advantage long opening,https://lichess.org/PeJo7nkF#11
fpBHg,r4rk1/pbqnbppp/1pn1p3/2ppP3/8/2PP1NP1/PP2QPBP/R1B1RNK1 b - - 4 12,c6e5 f3e5 c7e5 e2e5 d7e5 e1e5,869,80,89,321,crushing long middlegame,https://lichess.org/D1MDsaEv/black#24
JeWGP,r1bq1rk1/pp4b1/3p3p/2pnp1p1/2Pn4/P1NPPpP1/1P3P1P/R1BQ1RKB w - - 0 15,c3d5 d4e2 d1e2 f3e2,803,79,100,501,master middlegame,https://lichess.org/qtzFOv2R#29
XM6eD,r2qkbnr/ppp1nppp/3p4/3Pp3/2b5/1PN1P3/P3NPPP/R1BQKB1R b KQkq - 0 7,c4d5 c3d5 e7d5 d1d5,869,78,100,721,opening,https://lichess.org/udkV2i5W/black#14
0jnkH,r1bq1r2/pp3pbk/2pp3p/n1n1p1BP/2B1P1P1/2NP1N2/PPPQ1P2/2K3RR b - - 0 15,h6g5 f3g5 d8g5 d2g5 g7h6 g5h6,834,87,70,69,advantage long middlegame,https://lichess.org/Sz1XIAXB/black#30
2fb9f,2kr1b1r/pppq1ppp/2n3n1/4P3/Q1Pp2b1/5NP1/PP2PPBP/RNBR2K1 w - - 9 10,f3d4 c6d4 a4d7 d8d7 d1d4 d7d4,883,114,41,31,advantage long opening,https://lichess.org/u189otny#19
wgbQm,r1bqk2r/pp1nb1pp/5n2/1pPp1p2/3PpB2/2N3P1/P3PPBP/R2QK1NR w KQkq - 0 10,c3b5 d8a5 f4d2 a5b5,860,95,78,136,opening,https://lichess.org/MtB5wKVD#19
mXftc,r3k2r/ppqnbppp/2p1p3/5b2/1PB3n1/P1N2N2/2PPQPPP/R1B1R1K1 b kq - 7 12,d7e5 f3e5 g4e5 e2e5 c7e5 e1e5,843,80,89,454,advantage long middlegame,https://lichess.org/mveXmrXG/black#24
BE6kD,r3kb1r/pbpp1pp1/1p2p3/3Pnq2/1PPQN3/P3P1Pp/1B3PBP/R4RK1 w kq - 0 16,g2h1 e5f3 h1f3 f5f3,881,117,67,22,opening,https://lichess.org/GCLBVjm7#31
qM2C5,rnb1k2r/pp3ppp/3qp3/2ppP3/1b1P1P2/8/PPPB2PP/R1Q1KnNR w KQkq - 0 10,e5d6 b4d2 c1d2 f1d2,809,82,82,144,opening,https://lichess.org/6D5XY9vl#19
q4SKv,2rr2k1/ppq1bpp1/2p1pn1p/2P1nb2/1P2N3/PB1P1N2/3B1PPP/R1Q1R1K1 w - - 1 17,e4f6 e7f6 e1e5 f6e5 f3e5 c7e5,881,83,84,122,advantage long middlegame,https://lichess.org/qn5ZMc2u#33
aHFjC,r1b1k1nr/4ppbp/pn1p2p1/q1pP4/2P1P3/2N2N2/PBQ1BPPP/R3K2R b KQkq - 0 11,b6a4 c2a4 a5a4 c3a4 g7b2 a4b2,861,95,96,2419,crushing long middlegame,https://lichess.org/rCQakEH2/black#22
fZnE3,r1bq1rk1/ppp2pp1/3b1n1p/3p1n2/3P4/2PBBN1P/PPQ2PP1/RN3RK1 b - - 4 11,f8e8 d3f5 c8f5 c2f5,829,81,97,642,opening,https://lichess.org/EnWVjV23/black#22
TUbUs,r3k1nr/pppbqppp/3p4/3Pn3/Qb2P3/2NB1N2/PP3PPP/R1B1K2R w KQkq - 3 10,a4b4 e5d3 e1e2 d3b4,885,87,96,1213,opening,https://lichess.org/k8Rb4g2i#19
zKNue,r2q1rk1/1b1pbp1p/1pp1pnp1/nP6/4N3/2Q1P3/PB1PBPPP/RN3RK1 b - - 1 13,d7d5 e4f6 e7f6 c3f6 d8f6 b2f6,789,83,83,109,crushing kingsideAttack long opening,https://lichess.org/VD6tSUsX/black#26
Xjdvu,1rb2rk1/3nbppp/1qpp1n2/p3p1B1/3PP2P/2PB1NN1/P2Q1PP1/R3K2R w KQ - 1 14,a1b1 b6b1 d3b1 b8b1 d2d1 b1d1,716,108,76,369,crushing long master middlegame,https://lichess.org/FBKOHSad#27
1ageX,rnbq1rk1/pppp1pbp/5np1/8/3QN3/1P2P3/PBP2PPP/R3KBNR b KQ - 2 7,b8c6 e4f6 g7f6 d4f6 d8f6 b2f6,818,80,74,89,crushing kingsideAttack long master opening,https://lichess.org/f3sFs8dO/black#14
Tw0CS,rn1q1rk1/pp2bpp1/2p2n1p/3p1b1N/8/PBNP4/1PP2PPP/R1BQ1RK1 b - - 3 11,f5g4 h5f6 e7f6 d1g4,899,80,90,226,opening,https://lichess.org/DIhMa0fL/black#22
U8638,rnb1k1nr/ppq2ppp/2P5/2b1p3/2B5/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 4 6,c4f7 c7f7 f3f7 e8f7 c6b7 c8b7,709,82,85,295,advantage long opening,https://lichess.org/ArdmadDW#11
rdIyl,2rq1rk1/pb1nbpp1/1p2pn1p/3p4/3P3B/3B1NN1/PPP2PPP/R2QR1K1 w - - 2 13,g3h5 f6h5 h4e7 d8e7,753,102,82,50,opening,https://lichess.org/XNdoFV1q#25
DE0zA,r1bq1r1k/ppp2ppp/1bnp2n1/6N1/2BPP3/7P/PP2NPP1/R1BQ1RK1 b - - 2 11,h7h6 g5f7 f8f7 c4f7,741,101,88,347,opening,https://lichess.org/x5PKV836/black#22
HY3bd,rn3rk1/ppp2pp1/3pbq2/2b1p1Bn/2B1P3/P2P3P/1PP2PQ1/RN2K1NR b KQ - 4 11,f6f2 g2f2 c5f2 e1f2 e6c4 d3c4,757,84,86,219,advantage long middlegame,https://lichess.org/rlLgtYVj/black#22
IzKrV,r1b2rk1/1pp2ppp/1b1p4/pP1Pp1q1/P3Pn2/2PB1Q1P/5PP1/RNB2RK1 b - - 3 15,f4h3 f3h3 g5c1 f1c1 c8h3 g2h3,824,88,96,1502,advantage long master middlegame,https://lichess.org/f4K5VDou/black#30
4mygm,r2qk2r/1p1nbppp/p1n1p3/3pP2b/PP6/B1P2N1P/4BPP1/RN1Q1RK1 b kq - 1 12,c6e5 f3e5 h5e2 d1e2 d7e5 e2e5,851,77,90,225,advantage long middlegame,https://lichess.org/dWbbvjYK/black#24
q2ecI,2kr3r/ppp2p1p/2nb1n2/4p1pq/2P1N1b1/3P2P1/PP2BPNP/R1BQ1RK1 b - - 3 12,f6e4 e2g4 h5g4 d1g4,834,109,96,162,middlegame,https://lichess.org/UYq0fxpP/black#24
f1Lqs,3rk2r/1b2ppb1/p2q1npp/1ppPp3/4P1PP/2N1QP1N/PPP5/1K1R1B1R w k c6 0 15,d5c6 d6d1 c3d1 d8d1 e3c1 d1c1,891,111,82,32,crushing long middlegame queensideAttack,https://lichess.org/xBiqCr1o#29
fpMe1,r1bq1rk1/ppp2ppp/3p1n2/4p3/1P1bP3/P1NP4/2PBBPPP/1R1Q1RK1 b - - 1 11,c8g4 e2g4 d4c3 d2c3 f6g4 d1g4,700,97,89,851,crushing long opening,https://lichess.org/6zUI6ZCM/black#22
AGsXr,r2qk2r/pp2Bppp/2npb3/1Bpnp3/Q3P3/2PP1N2/PP3PPP/R3K2R b KQkq - 0 11,d8e7 b5c6 e6d7 c6d7 e7d7 a4d7,774,99,94,258,crushing long middlegame,https://lichess.org/WPMe1RpX/black#22
XYK3b,r3kbnr/pp1n1ppp/1q2p3/1B1pPb2/3P4/1Q3N2/PP1B1PPP/RN2K2R b KQkq - 1 9,a7a6 b5d7 e8d7 b3b6,889,85,98,372,middlegame,https://lichess.org/3SwnSPLv/black#18
6O850,r2qkb1r/ppp1n1pp/2n3b1/1B2Q3/3pp3/2N5/PPPP1PPP/R1B1K1NR w KQkq - 4 10,c3d5 d8d5 e5d5 e7d5 b5c6 b7c6,804,103,96,1888,crushing long opening,https://lichess.org/4GQt0dNZ#19
wmGfi,r1b1k2r/ppq1bp1p/2n1p3/2ppn3/8/2P2N2/PPBPQPPP/RNB1R1K1 b kq - 3 11,c8d7 f3e5 c7e5 e2e5 c6e5 e1e5,885,88,95,1056,crushing long master middlegame,https://lichess.org/HjqgJzhd/black#22
FzBbt,r1b1k2r/1pp1nppp/p2p2q1/4p3/2BbP3/2NPBQ1P/PPP2PP1/R4RK1 w kq - 0 11,c4f7 g6f7 f3f7 e8f7 e3d4 e5d4,801,90,91,213,advantage long middlegame,https://lichess.org/yDDAdj1u#21
FqIcu,r3k2r/pb1q1p2/1pnpp1pp/1B6/1n2P1PP/P1b1BN2/1PPQ1P2/2KR3R w kq - 0 15,d2c3 b4a2 c1b1 a2c3,707,80,100,544,middlegame,https://lichess.org/hrGJXTCh#29
SuUeA,r4rk1/pbpp1ppp/1p2p3/4P3/1bPn2q1/2N1BN2/PP2BPP1/R2Q1RK1 b - - 3 14,d4f3 e2f3 b7f3 d1f3 g4f3 g2f3 b4c3 b2c3,895,93,94,329,advantage middlegame veryLong,https://lichess.org/ZQ9JW7gU/black#28
L8gKE,2kr1bnr/pppqpppp/2B5/1N3b2/3P1N2/6P1/PPP2P1P/R1BQK2R b KQ - 0 10,d7c6 b5a7 c8b8 a7c6,820,89,97,580,opening,https://lichess.org/kag6qSCc/black#20
tOsNb,r1b2rk1/pppp1ppp/1bn3q1/4p1NQ/2B1P3/2P5/PP3PPP/R1B2RK1 w - - 3 12,c4f7 f8f7 h5g6 h7g6 g5f7 g8f7,888,87,87,694,crushing long middlegame,https://lichess.org/dV6KVLGd#23
qdl1m,r1b3kr/pp4pp/2n2n2/q1ppQ1N1/1b6/PPN1P3/1BP2PPP/R3KB1R w KQ - 1 13,e5d6 b4c3 b2c3 a5c3,798,84,98,427,middlegame,https://lichess.org/ph9tr0yJ#25
0lH4y,rnbq1rk1/ppp2ppp/3p4/8/1bPPPBB1/2N5/PP4PP/R2QK1NR b KQ - 0 9,c8g4 d1g4 b4c3 b2c3,868,92,95,791,opening,https://lichess.org/1idUZ12s/black#18
OBHk1,bn3rk1/p4pb1/2q1p1pp/2p1P3/2Pp1PPn/3P1N2/PP2N2P/R1BQ1RK1 w - - 1 17,e2g3 h4f3 d1f3 c6f3 f1f3 a8f3,883,90,92,348,crushing kingsideAttack long middlegame,https://lichess.org/xSRpBGtn#33
9DhK4,r1b1k2r/1pqpbppp/p1n1p1n1/4P3/2B5/2N2N2/PP2QPPP/R1B1R1K1 b kq - 2 11,c6e5 f3e5 g6e5 e2e5 c7e5 e1e5,889,82,90,335,advantage long master opening,https://lichess.org/xNUnNpMJ/black#22
nVw9w,1r2q3/1pp1rbbk/p2pnppp/8/3P1B1N/2PBP2P/PPQ2PP1/R3R1K1 w - - 7 20,d3g6 f7g6 h4g6 e8g6 c2g6 h7g6,831,80,100,258,advantage long middlegame,https://lichess.org/mtEg5cfC#39
Y2OFr,r2qkb1r/pp1b1ppp/4p3/1B1pPn2/Q2n4/2N2N2/PP3PPP/R1B1K2R w KQkq - 0 10,b5d7 d8d7 a4d7 e8d7 f3d4 f5d4,754,108,96,580,advantage long opening,https://lichess.org/rSbmDBeT#19
M9Epw,r3k2r/1ppbbpp1/p1N1qn1p/1B1pP3/Q2P4/8/PP3PPP/RNB2RK1 b kq - 2 14,d7c6 b5c6 e6c6 a4c6 b7c6 e5f6,866,80,88,352,crushing long middlegame,https://lichess.org/IunFfCv8/black#28
uGuR3,rnbqr1k1/ppppbppp/8/8/2PPQ3/4P3/PP3PPP/R1B1KBNR w KQ - 1 8,f1d3 e7b4 e1f1 e8e4,727,120,92,144,opening,https://lichess.org/VadxbWe1#15
Zdl3S,r3kbnr/pp3ppp/2n1pq2/1B1pB3/3P4/1PN2b2/P1P2PPP/R2QK2R w KQkq - 0 10,e5f6 f3d1 b5c6 b7c6 f6g7 f8g7,826,81,100,358,advantage long opening,https://lichess.org/qz3bllbJ#19
5Aip3,r3k2r/2p2pp1/p1np1q2/1pb1p3/4P1b1/2PP1NKp/PPB2P2/R1BQ1N1R b kq - 1 17,g4f3 d1f3 f6h4 g3h2 h4f2 f3f2,750,83,89,143,advantage long middlegame,https://lichess.org/VzcVzptR/black#34
4aS64,rnb1r3/4qk2/2p2pp1/1p1p1p1p/p2P1b1P/P1P1P3/1PQN2PN/1BK1R2R w - - 0 20,e3f4 e7e1 h1e1 e8e1 c2d1 e1d1,861,97,57,75,advantage long middlegame queensideAttack,https://lichess.org/lcPHMhSQ#39
GDN2F,rnb1k2r/pp2nppp/8/q1Pp4/1b6/2N5/PPPBQPPP/R3KBNR w KQkq - 1 8,c3d5 b4d2 e2d2 a5d2 e1d2 e7d5,874,85,92,1186,advantage long opening,https://lichess.org/rZ38hiwk#15
8UjTR,r1bq2k1/ppp1nrp1/2np3p/2bN3Q/2BpP3/8/PPP2PPP/R1B1K2R w KQ - 0 10,d5e7 d8e7 c4f7 e7f7 h5f7 g8f7,849,77,98,418,advantage long opening,https://lichess.org/FmevjCmb#19
rPBpf,r1b1k2r/ppp2ppp/2p5/2b5/2B1P1nq/7P/PPPPQPP1/RNB2RK1 b kq - 0 8,c5f2 f1f2 g4f2 e2f2 h4f2 g1f2,878,85,88,55,advantage long opening,https://lichess.org/wWIKsyCW/black#16
zQy07,r1b1kb1r/1p1nqppp/p7/4p1N1/2BpP3/8/PPP2PPP/R1BQK2R b KQkq - 0 11,h7h6 c4f7 e7f7 g5f7,868,89,98,687,opening,https://lichess.org/RCiPIDN3/black#22
EKJ2k,r4rk1/pppq1ppp/2np4/7n/2B1P2b/P1NPB2P/1PP2RP1/R4QK1 w - - 7 16,c4f7 f8f7 f2f7 d7f7 f1f7 g8f7,718,82,83,261,advantage long middlegame,https://lichess.org/qJRBG1Bv#31
iDtk8,r1bq1rk1/ppp2pp1/2np2P1/4p1n1/2B1P3/3PPN2/PPP3P1/R2QK2R w KQ - 1 13,f3g5 d8g5 c4f7 f8f7 g6f7 g8f7,737,106,94,595,advantage long middlegame,https://lichess.org/D9tASBQj#25
Yqn8J,2r2rk1/1p2bppp/pq2b3/n1NpPp2/1P1P4/PQ2BN2/2R2PPP/5RK1 w - - 18 21,b4a5 b6b3 c5b3 c8c2,844,78,100,726,middlegame,https://lichess.org/ZzwlCJbU#41
U3n4k,r1b1kbnr/pp3ppp/4p3/q2pP3/2PQ1P2/2N1B3/PP4PP/R3KB1R b KQkq - 2 10,f8c5 d4c5 a5c5 e3c5,792,81,85,168,middlegame,https://lichess.org/VKRojYpO/black#20
v0AkH,4rbk1/ppp1qppp/5nn1/2PP4/3P1p2/1PN1rB1P/PB1Q2P1/4RRK1 w - - 5 17,c3d1 e3e1 f1e1 e7e1 d2e1 e8e1,706,87,99,1429,crushing kingsideAttack long middlegame,https://lichess.org/5WTnvNpb#33
wWWDt,r1b1k1nr/p2ppp1p/2p3p1/2q5/3bPP2/2PB4/PPQ3PP/RNB1K2R b KQkq - 5 10,d4f2 c2f2 c5f2 e1f2,822,100,94,327,opening,https://lichess.org/jMivu66C/black#20
9fr7r,7r/1pp2kbq/p2p1nnr/3Pp1pR/4PpP1/2NB1P2/PPP2B1R/2K4Q w - - 8 26,h5h3 h6h3 h2h3 h7h3 h1h3 h8h3,800,92,84,558,crushing long middlegame,https://lichess.org/nOifa1Kw#51
CIMst,rnb2rk1/pppp1ppp/3b4/8/3P4/1BP2QPq/PP3P1P/RNB1R1K1 w - - 1 15,f3f7 f8f7 e1e8 d6f8 b3f7 g8f7,707,107,98,979,crushing long opening,https://lichess.org/QqeRBBSY#29
H3WDH,r4rk1/ppp1nqbp/4b1p1/4pp2/2B1P3/N1P1B3/PP2QPPP/R2R2K1 w - - 4 14,a3b5 e6c4 e2c4 f7c4,734,79,82,102,middlegame,https://lichess.org/jjWYVwWK#27
oNnrT,rnbqkbnr/pp4pp/2p5/4p2Q/4P3/4N3/PPP2PPP/R1B1KB1R b KQkq - 1 9,g7g6 h5e5 d8e7 e5h8,887,78,87,77,master opening,https://lichess.org/vMzTCEHK/black#18
qK4p8,1rbr1nk1/2b2p2/1p3qp1/pPpQp2p/P3P3/7P/B1P2PPN/R1BR2K1 w - - 3 24,d5f7 f6f7 a2f7 g8f7 d1d8 c7d8,813,87,90,321,advantage long middlegame,https://lichess.org/DDcCuymu#47
nutQD,rn2kbnr/p3pppp/B1p5/q1N5/P2P4/2p1P3/3B1PPP/R2QK1NR b KQkq - 0 10,c3d2 d1d2 a5d2 e1d2 b8a6 c5a6,797,84,99,1242,advantage long opening,https://lichess.org/BiQHxp9E/black#20
4kdVX,r4rk1/pp4pp/1qn1b3/2bp1p2/1P2n3/2PB1N2/P4PPP/RNB1QRK1 b - - 0 13,c5f2 f1f2 b6f2 e1f2 e4f2 g1f2,827,88,85,181,advantage long middlegame,https://lichess.org/E8kaP5O5/black#26
bBw8J,rnbq1rk1/pp2bppp/3p4/4p3/3NP3/2N1QP2/PPP3PP/2KR1B1R w - - 0 11,d4b3 e7g5 e3g5 d8g5,870,87,88,334,opening,https://lichess.org/pmUCYCtv#21
KI9by,r1bqkb1r/1p1npppp/p7/3pP3/P1BP4/8/1P3PPP/R1BQK1NR w KQkq - 0 9,c4d5 d8a5 c1d2 a5d5,835,80,86,516,opening,https://lichess.org/8Y1oU4SA#17
Cyyxv,r2k2nr/pp3ppb/4p2p/qB1pP3/2P2PP1/N1n2N1P/P7/R1BQ1RK1 w - - 1 17,d1d4 c3e2 g1h2 e2d4,792,77,88,214,middlegame,https://lichess.org/KTouaofn#33
7nhUW,2kr3r/p1p1qp2/1p1p1np1/2nPp2p/2P1P3/PP1B1P2/1B1Q1P1P/2KR2R1 w - - 1 16,b3b4 c5b3 c1b1 b3d2,867,77,100,509,middlegame,https://lichess.org/M78fkhBH#31
5MCo0,r5k1/pp4pp/2nbp2r/3p1p1n/P2P1P1q/2PBB2P/1P2NP1K/R2Q3R b - - 4 19,h4h3 h2h3 h5f4 h3g3 h6g6 g3f3,829,84,94,85,advantage long master middlegame,https://lichess.org/2Li044qO/black#38
xdrzo,2k1rb1r/1bppqpp1/1p3n1p/pP1P4/2P5/P1NQ4/1B2NPPP/R3R1K1 w - - 4 16,e2d4 e7e1 a1e1 e8e1 d3f1 e1f1,849,92,89,325,crushing kingsideAttack long middlegame,https://lichess.org/XikLCkQU#31
Alge3,2k1rbnr/ppp1q1pp/2bp4/5p2/2Q1P3/2N2N2/PPP2PPP/R1B1R1K1 w - - 0 12,e4f5 e7e1 f3e1 e8e1 c4f1 e1f1,883,92,85,433,advantage kingsideAttack long opening,https://lichess.org/4zaOwfWO#23
E33Ka,r3r1k1/pp1nqppp/2pB2b1/3p4/3P3N/P1n1Q1P1/1P2PPBP/2R1R1K1 b - - 0 16,c3e2 e1e2 e7d6 e3e8 a8e8 e2e8,818,81,89,401,advantage kingsideAttack long middlegame,https://lichess.org/8oNBNLOz/black#32
Vg2wA,3rk1nr/ppp2ppp/2p5/2b5/1PB1P1bq/1Q6/P1P2PPP/RNB2RK1 b k - 4 10,h4f2 f1f2 d8d1 c4f1 c5f2 g1f2,782,94,78,133,crushing long opening,https://lichess.org/lxlufTrZ/black#20
XwkoK,1k2rb1r/1pp1q3/2n2p1n/1Q1pPppp/3P1B2/P1P2N1P/5PP1/RN2R1K1 w - - 0 19,e5f6 e7e1 f3e1 e8e1 b5f1 e1f1,894,83,92,593,crushing kingsideAttack long middlegame,https://lichess.org/wVo8llQv#37
qLCwx,3rk1nr/ppp2ppp/2p2q2/2b3Q1/2B1P1b1/8/PPP2PPP/RNB2RK1 b k - 5 9,f6f2 f1f2 d8d1 c4f1 c5f2 g1f2,737,82,100,271,crushing long opening,https://lichess.org/EC0NkQ57/black#18
OLp0h,2kr3r/1pqn1pbp/p1p3p1/P2p1n2/1P6/2PP1N2/3BQPPP/RN2R1K1 b - - 2 14,d8e8 e2e8 h8e8 e1e8 c7d8 e8d8,780,89,57,43,crushing long middlegame queensideAttack,https://lichess.org/JXum5ywh/black#28
D1SHe,rnb2rk1/p2pqnpp/1bp5/1p2P2Q/3P4/1B2B3/PPP3PP/RN3RK1 w - - 0 14,b3f7 f8f7 f1f7 e7f7 h5f7 g8f7,889,80,84,106,crushing long opening,https://lichess.org/2ibAwj3e#27
XPoUf,1rq2rk1/ppp2p1p/3pnbp1/3Np3/2P5/P2PP1PP/1P3PB1/R2Q1RK1 b - - 1 15,f6g7 d5e7 g8h8 e7c8,848,77,71,70,middlegame,https://lichess.org/XkZmxq4s/black#30
E0t7E,3q2k1/2rn1pbp/2r2np1/pp2p3/3pP3/1P1P1NPB/PB1Q1P1P/1RR3K1 w - - 2 19,d2a5 c6c1 b2c1 c7c1 b1c1 d8a5,858,100,87,369,crushing long middlegame,https://lichess.org/VAHcrEzH#37
cGGHx,rn1q1rk1/p2nbppp/3p4/1ppP4/8/4PN2/PP2BPPP/R1BQK2R w KQ - 0 11,e2b5 d8a5 c1d2 a5b5,844,87,91,105,opening,https://lichess.org/iZV5Apjc#21
20tDW,2kr1bnr/pp1bq1pp/2n1p3/2p1N3/2P1N3/4B3/PPPQ1PPP/2KR3R w - - 3 12,e5c6 d7c6 d2d8 e7d8 d1d8 c8d8,756,78,100,452,advantage long middlegame,https://lichess.org/8Yw8xYyD#23
Cep8T,r4rk1/1b2bpp1/p3p2p/1ppqn3/8/P2PBNP1/1PP1QPBP/R4RK1 w - - 4 15,f1d1 e5f3 e2f3 d5f3 g2f3 b7f3,896,86,96,550,crushing kingsideAttack long middlegame,https://lichess.org/Gom0GvQm#29
26Zsn,r2qr1k1/1n2bpp1/pp1p1n1p/3P4/PP4bB/5N2/B3QPPP/RN2R1K1 w - - 4 17,h4f6 e7f6 e2e8 d8e8 e1e8 a8e8,836,85,98,1146,crushing long middlegame,https://lichess.org/K9AuXSZd#33
O5nUu,1r3r2/pp1nqp1k/2pp1npp/4p3/2P1P3/2N1PR1P/PPP2QPN/5RK1 b - - 7 16,e7e6 f3f6 e6f6 f2f6 d7f6 f1f6,876,90,89,843,advantage long middlegame,https://lichess.org/u1kdRDGg/black#32
03J8u,r2q1rk1/p3bpp1/b1p1p2p/2p1P3/4N3/1PnP1NQ1/P1P3PP/R1B2RK1 w - - 3 16,c1h6 c3e2 g1h1 e2g3,819,83,78,86,master middlegame,https://lichess.org/bnTfuYxw#31
EEZmq,2kr3r/pppqbppp/2n5/1B1pP3/3P1Nb1/2P2Q2/P1P3PP/R1B2RK1 w - - 11 13,f3d5 d7d5 f4d5 d8d5 b5c6 b7c6,822,93,90,758,advantage long middlegame,https://lichess.org/JuUjXed6#25
lAuf4,r1bq1rk1/pp3ppp/2np1b1B/3Np3/4P1Q1/P7/1PP2PPP/R3KB1R w KQ - 0 13,d5f6 d8f6 g4g7 f6g7 h6g7 g8g7,701,91,60,185,crushing long opening,https://lichess.org/Zgs516AE#25
mY069,r1bqk2r/pp3ppp/2B2n2/3p4/Q2Pp3/2b1P3/PP1N1PPP/R1B1K2R b KQkq - 0 10,c8d7 c6d7 d8d7 a4d7 e8d7 b2c3,862,86,97,2717,crushing long opening,https://lichess.org/mpT8930S/black#20
ujFvG,2kr1r2/ppp3pp/3pp2n/4p3/1P1bP2q/P1NP3P/1BPQ1PP1/R4RK1 b - - 3 15,d4f2 f1f2 h4f2 d2f2 f8f2 g1f2,815,85,90,271,advantage long middlegame,https://lichess.org/diwzcLSi/black#30
xJ0Q7,4r1k1/1pp1rppp/3q4/pP1p1p1n/P1nP1PP1/1Q2P2P/2P1RK2/2BNR3 b - - 0 27,h5f4 e3f4 e7e2 e1e2 e8e2 f2e2,877,102,95,1011,advantage long middlegame,https://lichess.org/JDIPKn1p/black#54
hph3e,r1bq1rk1/pp3ppp/2np1b1B/3Np3/2B1P1Q1/8/PPP2PPP/R4RK1 w - - 0 14,d5f6 d8f6 g4g7 f6g7 h6g7 g8g7,717,80,84,98,advantage long middlegame,https://lichess.org/VkwBh5VK#27
oWOhX,r1b2r2/pp1n2kp/2p1p1p1/2bpP3/7q/1P1B4/PBPNQPPP/R3KR2 b Q - 10 16,c5f2 f1f2 h4f2 e2f2 f8f2 e1f2,832,130,0,18,advantage long middlegame,https://lichess.org/tj65pZIu/black#32
GpM2w,2kr3r/ppqnQppp/2p5/3p3b/3P4/3B1NbP/PPP2PP1/R1B1R1K1 b - - 0 13,d8e8 e7e8 h8e8 e1e8 c7d8 e8d8,781,86,93,603,crushing long middlegame queensideAttack,https://lichess.org/EeJr2U7k/black#26
GtkIM,r1b1k1nr/pp3ppp/2N1p3/q2pP3/8/P1b5/1PP2PPP/R1BQKB1R w KQkq - 0 9,c1d2 c3d2 d1d2 a5d2 e1d2 b7c6,868,93,95,1207,advantage long opening,https://lichess.org/lNS5Yiws#17
hg9pr,r1b1k2r/pppp1ppp/5q2/3N4/1n1bP3/6Q1/PPP2PPP/R1B1KB1R b KQkq - 4 10,f6f2 g3f2 d4f2 e1f2 b4d5 e4d5,781,92,94,175,advantage long opening,https://lichess.org/NNrMGRNN/black#20
uqd67,r4rk1/2p2ppp/p2p2q1/1pbNp3/3nP3/1B1P1P2/PPPQ1P1P/R4R1K b - - 3 14,d4f3 d5e7 g8h8 e7g6,828,76,98,384,middlegame,https://lichess.org/7bkSLQyy/black#28
v8quK,r1b1k2r/pppp1pp1/7p/2b1P3/2B1n2q/2P2Q2/PP3PPP/RNB2RK1 b kq - 4 9,c5f2 f1f2 h4f2 f3f2 e4f2 g1f2,850,93,90,316,advantage long opening,https://lichess.org/E63lCWiH/black#18
8eMCu,r1b1k2r/ppp1npp1/3p1q1p/2b5/2B1P3/1Q2B3/PPP2PPP/RN3RK1 w kq - 2 11,c4f7 f6f7 b3f7 e8f7 e3c5 d6c5,850,86,87,192,advantage long opening,https://lichess.org/e51Zz0Sg#21
3RZR2,r3kbnr/pppbpppp/8/8/1nN5/1P3N2/P2PPPPP/R1B1KB1R w KQkq - 1 8,a2a3 b4c2 e1d1 c2a1,818,88,85,365,opening,https://lichess.org/R0LHnCWg#15
yTcLZ,r3k2r/pb2q1bp/n1p1Ppp1/1N1p1p2/3P4/3B1NP1/PPP1Q2P/R4RK1 b kq - 0 18,c6b5 d3b5 e8f8 b5a6 b7a6 e2a6,835,91,89,285,advantage long middlegame,https://lichess.org/OnQHWn1L/black#36
481Q2,r1b2rk1/1pp2pp1/2q4p/p1nNp3/2B1Pn2/2P2P1P/PPQN2P1/R4RK1 b - - 4 18,c5e6 d5e7 g8h7 e7c6,765,95,94,228,middlegame,https://lichess.org/8nbpQBAR/black#36
DNZwF,rn2r3/pp2qppk/2p1bb1p/4p2Q/4N3/3P2P1/PP2PPBP/R1B2RK1 w - - 1 16,e4g5 f6g5 c1g5 e7g5 h5g5 h6g5,875,97,90,1539,advantage long middlegame,https://lichess.org/7b3PDmCA#31
tjf3i,r1b2k1r/p2p1ppp/1qpNp3/4Pn2/1P1b4/2P2Q2/P2B1PPP/R3KB1R b KQ - 0 13,d4f2 f3f2 b6f2 e1f2 f5d6 e5d6,894,80,24,122,crushing long middlegame,https://lichess.org/QaVFgxpg/black#26
ySVrb,r1b1k2r/pp3ppp/2n2n2/2q1p3/1bB5/4P3/PPQN1PPP/R1B1K1NR w KQkq - 2 10,c4f7 e8f7 c2c5 b4c5,790,81,100,665,opening,https://lichess.org/AWYf4JT0#19
6Or4Q,r1bq1rk1/1pp2ppp/p1np1b1B/3N4/4P1Q1/2PB4/PP3PPP/R3K2R w KQ - 0 14,d5f6 d8f6 g4g7 f6g7 h6g7 g8g7,701,80,60,79,advantage long middlegame,https://lichess.org/iJt4fJ7C#27
oJILP,2r1kb1r/ppqnnppp/4p3/3pP3/1P1P4/P2QBN2/5PPP/RN3RK1 w k - 3 13,f1c1 c7c1 e3c1 c8c1 d3f1 c1f1,745,83,95,167,advantage kingsideAttack long opening,https://lichess.org/dnrwDpoS#25
T6V7C,rn3rk1/ppq2p1p/2pb1p2/3p4/N2P2b1/3B1N2/PPPQ1PPP/2KR3R w - - 0 12,d2h6 d6f4 h6f4 c7f4,796,80,87,361,middlegame,https://lichess.org/xw2adgOM#23
w2klo,rn2r1k1/pbp1qppp/1p3n2/8/1bBP4/1QN2N2/PP3PPP/R1B2RK1 w - - 4 13,f1e1 e7e1 f3e1 e8e1,790,77,70,126,middlegame,https://lichess.org/0fl93q0F#25
is3YG,rnbq1rk1/ppp1bppp/8/3pP3/3P4/2PB1Q2/P1P3PP/R1B1K1NR w KQ - 3 9,f3g3 e7h4 g1f3 h4g3,852,80,88,109,opening,https://lichess.org/bvbO41w6#17
eCZUP,2kr2nr/1bp1q1b1/p1n1p2p/Pp2P3/1P1PBp2/2Q2N2/3N1PPP/2R2RK1 b - - 2 23,e7d7 e4c6 b7c6 c3c6 d7c6 c1c6,885,77,94,353,advantage long middlegame,https://lichess.org/XD957u57/black#46
zKhd0,3r2k1/ppprnpbp/2n1q1p1/4p3/2N5/2P1PNBP/PP2QPP1/R2R2K1 w - - 12 16,f3g5 d7d1 a1d1 d8d1 e2d1 e6c4,896,82,95,567,advantage long middlegame,https://lichess.org/HIQ4SjmQ#31
NwB2s,r1bq1rk1/pp1p1ppp/8/2b1p3/3NP3/3B4/PPPNQnPP/R1B2RK1 w - - 0 11,e2f2 c5d4 f2d4 e5d4,798,82,73,197,opening,https://lichess.org/FovtGio6#21
Wzvso,r4rk1/5ppp/3p1qn1/p1pP4/PpPbR1b1/1P4N1/2BB1PPP/1R2Q1K1 b - - 11 26,a8e8 e4e8 d4f2 e1f2 f6f2 g1f2,836,96,80,395,crushing long middlegame,https://lichess.org/h1dcAJv2/black#52
godEK,r1b2rk1/1p3qbp/p2pp1p1/2p1n1P1/4P2P/2P1B3/PP1NQPB1/R3K2R w KQ - 0 17,d2f3 e5f3 e2f3 f7f3 g2f3 f8f3,818,89,94,707,crushing long middlegame,https://lichess.org/WniQ0BTF#33
Hhh42,r3k2r/np3ppp/1q2p3/pP1pP3/Pb1P1n2/3Q1N2/3B1PPP/RN2K2R w KQkq - 3 15,d3e3 f4g2 e1f1 g2e3,800,93,91,348,middlegame,https://lichess.org/TzCUakbh#29
kgbuG,2rqkn1r/1p2bp2/p3p1p1/3pP2p/3P1B1P/P2B3R/1PbNQPP1/4RK2 w k - 13 22,e1c1 c2d3 e2d3 c8c1,833,82,90,171,middlegame,https://lichess.org/KTqRbij4#43
GxTGe,r2qkb1r/pppb2pp/3p1n2/n7/2B2R1N/3P4/PPP3PP/RNBQ2K1 w kq - 1 10,f4f6 d8f6 d1h5 g7g6,878,83,91,61,opening,https://lichess.org/wYuxVpsO#19
p4EHS,2r2rk1/1bqp2pn/p2b1p1p/2p1pP2/N1P1P3/1P1PBN1P/5QP1/1R3RK1 w - - 6 22,a4c5 d6c5 e3c5 c7c5 f2c5 c8c5,822,79,76,115,advantage long middlegame,https://lichess.org/WZot1jUg#43
O4l5F,r1bq1rk1/pp3pbp/3p1np1/P3p1B1/4P3/2P2Q1N/P4PPP/RN2K2R b KQ - 1 12,d8a5 g5f6 g7f6 f3f6 c8h3 g2h3,842,78,81,237,advantage long middlegame,https://lichess.org/HwJDDnPh/black#24
Vj9Xz,4r1k1/bppn1ppp/p1np4/3N1N2/2PP1PPq/1P3R1P/PB2r3/2RQ1K2 b - - 9 22,e2e1 d1e1 e8e1 c1e1 h4e1 f1e1,801,110,89,585,crushing long master middlegame,https://lichess.org/9hJQbIRM/black#44
6frMU,r2q3r/1bp1bkpp/p1np1n2/1p4N1/3PP3/8/PP3PPP/RNBQK2R b KQ - 1 11,f7f8 g5e6 f8f7 e6d8,892,88,96,585,opening,https://lichess.org/mTguDH2S/black#22
I3CIr,4r1k1/pb1nrp1p/1p1q1npB/2pp4/3P3N/3B3P/PPPQ1PP1/R3R1K1 w - - 0 19,h6f4 e7e1 a1e1 e8e1 d2e1 d6f4,867,85,69,90,advantage kingsideAttack long middlegame,https://lichess.org/fJkxE4Wr#37
7mR5v,rn3rk1/ppp1pqbp/3p2p1/8/2PP2b1/5NP1/PP3PBP/R1BQR1K1 w - - 3 13,d1d3 g4f3 d3f3 f7f3 g2f3 f8f3,896,99,93,512,crushing long opening,https://lichess.org/iO8Swerh#25
1NSzb,rq3rk1/ppb2ppp/2n1p3/3pPn2/1P3B2/2P2B1P/P2NQPP1/R3R1K1 b - - 8 15,c6e5 f4e5 c7e5 e2e5 b8e5 e1e5,896,94,94,397,advantage long middlegame,https://lichess.org/U02pqZsn/black#30
Pt7Ur,r4rk1/pp2pn1p/1q1p2p1/2pP1p1P/1nP1P3/2N1Q3/PP2BPP1/1R2K2R w K - 3 19,e4f5 b4c2 e1d2 c2e3,790,82,100,515,middlegame,https://lichess.org/T6KkOFgs#37
XGBQZ,rn1q1rk1/pp3pbp/4b1p1/2pn4/8/1PN2N2/PB1QPPPP/3RKB1R b K - 1 11,d5b4 d2d8 b4c2 e1d2 f8d8 d2c2,866,98,84,142,crushing long master opening,https://lichess.org/I4Ar3N0z/black#22
d3off,r1bq1rk1/p4p1p/1p1bpnp1/3p4/5P2/1PQ1PN2/PB1P2PP/RN3RK1 b - - 1 17,c8a6 c3f6 d8f6 b2f6 a6f1 g1f1,865,105,92,658,crushing long middlegame,https://lichess.org/0M8VIH4G/black#34
aNEBG,r3k2r/pp2bpp1/2p1p1bp/q2pP3/5BP1/P1P1PB2/1P1Q1P1P/2KR3R b kq - 0 14,a5a3 b2a3 e7a3 d2b2 a3b2 c1b2,821,82,76,103,advantage long middlegame,https://lichess.org/faUPIywA/black#28
85Z0J,r4rk1/p1q2pb1/7p/1pp1pPp1/3p1n1P/P2P4/BPPB1PP1/R1Q2RK1 w - - 1 22,h4g5 f4e2 g1h1 e2c1,887,100,97,364,middlegame,https://lichess.org/sjC11xdI#43
adkHb,rnb1r1k1/pp2qppp/3p4/3p4/3Pn3/2N2N2/PPPQBPPP/R4RK1 w - - 2 11,c3d5 e4d2 d5e7 e8e7 f3d2 e7e2,813,99,97,763,crushing long middlegame,https://lichess.org/12YM2nm1#21
GwbmZ,r2q1rk1/pppnbppp/2n5/3PP3/6b1/2N2N2/PP2B1PP/R1BQ1RK1 b - - 0 12,c6e5 f3e5 g4e2 d1e2 d7e5 e2e5,875,76,99,1342,advantage long opening,https://lichess.org/Umf4lCSx/black#24
JWjsx,r5k1/pbpn2pp/1p1pp1r1/3PPp1q/2P5/2P2N1P/P3BPPK/R2Q1R2 b - - 0 16,d7e5 f3e5 g6g2 h2g2,853,138,82,15,middlegame,https://lichess.org/KbztBu50/black#32
hxYck,r1bq1rk1/4nppp/1bn1p3/1p1pP3/3P4/P2BBN2/1P3PPP/2RQ1RK1 w - - 0 14,c1c6 e7c6 d3h7 g8h7,851,108,96,254,middlegame,https://lichess.org/vz9lwcWc#27
dIzE6,r4bk1/r1qn3p/2p1p1p1/p1PpPp2/1P1P1P2/R1Nb2P1/Q2B2BP/R5K1 b - - 0 24,a5b4 a3a7 c7a7 a2a7 a8a7 a1a7,768,97,71,100,crushing long middlegame,https://lichess.org/07lftdQ4/black#48
p32hG,2k3r1/ppq1bppr/2b1N2p/3pP2P/2p2BQ1/2P2R2/PPP2PP1/4R1K1 b - - 0 21,f7e6 g4e6 c8b8 e6g8,700,79,87,403,master middlegame,https://lichess.org/f0t5sqVO/black#42
7nsQ3,rn2r1k1/pp1q1p2/1b1p1p1p/2p3nP/1PB1P3/P4Q1P/1B2NP1K/R4R2 w - - 0 20,f3f6 d7h3 h2g1 g5f3 f6f3 h3f3,872,95,96,1829,crushing long middlegame,https://lichess.org/OlIRekVK#39
01GYU,r5k1/p2nqppp/1p1b1n2/2p1r3/8/1BNPB2P/PPP2PP1/R2QR1K1 w - - 2 16,e3f4 e5e1 d1e1 e7e1 a1e1 d6f4,831,123,89,32,middlegame,https://lichess.org/3qIfu9yd#31
spxKL,r6r/pp1nqkpp/2pbpn2/5Q2/2BPN3/8/PPP2PPP/R1B1K2R w KQ - 3 12,c4e6 e7e6 f5e6 f7e6 e4d6 e6d6,720,79,80,327,advantage long middlegame,https://lichess.org/Ucr9dPUi#23
DluTa,r1bqk2r/1pp1ppbp/5np1/1N1P4/3P4/8/PPP2P1P/R1BQK1NR b KQkq - 0 9,d8d5 b5c7 e8f8 c7d5,831,79,60,85,master opening,https://lichess.org/L4Cue9wL/black#18
6aR4j,rqb1k2r/pp2bppp/4p3/8/3nBn2/P4N2/1PP2PPP/R1BQ1RK1 w kq - 0 13,d1d4 f4e2 g1h1 e2d4,815,81,86,83,master opening,https://lichess.org/aCVNvKEU#25
jLpe5,r1br2k1/1pb2ppp/p1Nqpn2/8/1PP5/P1NQ2P1/4BP1P/R1BR2K1 b - - 0 16,d6c6 d3d8 c7d8 d1d8 c6e8 d8e8,813,103,94,295,crushing kingsideAttack long opening,https://lichess.org/3wrabsNY/black#32
Vs6bh,r1bq1r1k/1pp3b1/p1n3pp/3B1pN1/P2PP2Q/4B3/1PP3PP/R4RK1 w - - 1 17,g5f7 f8f7 h4d8 c6d8 d5f7 d8f7,881,80,85,109,advantage long middlegame,https://lichess.org/UwOzY4sk#33
6g4qD,1rb1k1nr/p2p1p2/n1p4p/4p1p1/2P1P3/q2P1N2/B3QPPP/K1BR3R b k - 5 17,a3c3 c1b2 c3b2 e2b2 b8b2 a1b2,788,104,94,404,advantage long middlegame,https://lichess.org/20Rubx9H/black#34
cSQUf,rnb2rk1/1p4pp/pq2p3/2bpN3/P3p3/2N5/1PP1QPPP/R1B2RK1 b - - 3 12,c5f2 f1f2 b6f2 e2f2 f8f2 g1f2,827,75,100,483,advantage long middlegame,https://lichess.org/wg6lZDya/black#24
EVN8I,rnb4B/p1ppnk2/1p2pp1p/8/1b5N/3BP3/P1PP1PPP/RN2K2R w KQ - 2 11,d3g6 e7g6 h4g6 f7g6 h8f6 g6f6,753,88,78,161,advantage long middlegame,https://lichess.org/oBN4VIcp#21
H8Sce,r1b2rk1/ppp2p1p/2nbn1p1/2q5/4NP2/3QP2P/PPB3P1/R1B2R1K b - - 1 18,c5h5 e4f6 g8h8 f6h5,829,106,96,252,opening,https://lichess.org/wo68xPTq/black#36
daSzn,rn2k2r/pbpp1ppp/1p2p3/7q/3P2P1/2PQBN1P/P1P1K3/R4B1R b kq - 0 12,b7f3 e2f3 h5d5 d3e4 d5e4 f3e4,890,77,92,312,advantage long middlegame,https://lichess.org/gNqwPPkZ/black#24
hmeEf,r2qk1nr/ppp2p1p/3p4/4b1P1/2BnPB2/2NP1P2/PPP5/R2QK2R w KQkq - 1 11,d1d2 d4f3 e1d1 f3d2,869,77,98,362,middlegame,https://lichess.org/tzrUwNlh#21
rhzCM,r1b3k1/3q1rpp/p2bNp2/1ppn1P2/6QP/P2P3B/1P2PP2/R1B1K1R1 w Q - 2 21,e6g7 f7g7 g4g7 d7g7 g1g7 g8g7,884,77,85,222,advantage long middlegame,https://lichess.org/Xrte0ewx#41
L7mAB,r2qkb1r/3npppp/2n5/1B1pN2b/Q2P1B2/4P2P/PP3PP1/R3K2R w KQkq - 3 14,b5c6 a8a4 c6d7 d8d7 e5d7 e8d7,888,87,100,215,advantage long middlegame,https://lichess.org/nNPQNvQP#27
XLdXi,2qr1bk1/pp3p1p/1nn2Pb1/2p2rQ1/3p2N1/3P3P/PPP3B1/R1B2RK1 w - - 0 24,f1f5 c8f5 g5f5 g6f5 g4h6 f8h6,810,111,94,411,advantage long middlegame,https://lichess.org/z714F8XX#47
HMEz8,r3k2r/p4pb1/2pppqp1/2p4p/4P1b1/2BP1NN1/PPP2PK1/R2Q1R2 b kq - 1 15,f6f3 d1f3 g4f3 g2f3 g7c3 b2c3,871,91,95,372,advantage long middlegame,https://lichess.org/gT7qmZLN/black#30
PDtPG,r1bq1rk1/1p1pbppp/p7/2pNP3/Q4n2/8/PPP2PPP/2KR1B1R w - - 0 12,a4f4 e7g5 f4g5 d8g5,886,100,87,184,middlegame,https://lichess.org/fugEawvA#23
6GREe,r4rk1/ppp2ppp/3p4/3Np1q1/2BnP1n1/P2P2KN/1PP3PP/3R3R b - - 3 13,g5g6 d5e7 g8h8 e7g6,784,79,100,404,middlegame,https://lichess.org/KEAILHZS/black#26
ZLVbX,r2qk2r/pp1n2p1/3bpnQ1/2pp4/3P1P2/2P1P3/PP4PP/RNB1K2R b KQkq - 0 11,e8e7 g6g7 e7e8 g7h8,747,103,95,257,middlegame,https://lichess.org/i76AdypI/black#22
4uEKk,r1b1k2r/1p1p1ppp/3pp3/8/1nPP4/3qP1P1/PP2NPBP/R2QK1R1 w Qkq - 4 14,e2f4 b4c2 d1c2 d3c2,892,78,100,522,middlegame,https://lichess.org/98W0dYcG#27
1kMSJ,1r1q1rk1/p4pp1/1p1p1b1p/2pB4/1P1nP1b1/PN1Q4/1B3PPP/R3R1K1 b - - 4 19,d4e2 e1e2 g4e2 d3e2 f6b2 e2b2,853,77,100,127,advantage long middlegame,https://lichess.org/tTjTdhEI/black#38
gzkpx,r2q1rk1/pp3pp1/4N3/2p1n1Pp/1b2b3/1P2P2P/PB1PBP2/R1Q1K1R1 b Q - 0 16,b4d2 c1d2 d8d2 e1d2 f7e6 b2e5,846,107,92,772,crushing long middlegame,https://lichess.org/EZ496d0Q/black#32
TuhSc,2kr1b1r/1pp3pp/p1p5/4pp2/2N1Pqb1/3P1N2/PPP2PK1/R1BQ1R2 b - - 1 14,f4f3 d1f3 g4f3 g2f3,722,100,93,286,middlegame,https://lichess.org/4WSVGFsh/black#28
x3xXY,r1b1nrk1/ppq1bppp/8/1Np1p3/2B2Q2/4B3/PPP2PPP/2KR3R w - - 0 13,f4f7 f8f7 c4f7 g8f7 b5c7 e8c7,813,107,50,29,advantage long middlegame,https://lichess.org/aCFuNIhO#25
J1LVX,rn2k2r/2b3pp/2pBqp2/p3p3/P1P1Pn2/2N2N1P/2PQ1PP1/3RR1K1 b kq - 0 19,f4h3 g2h3 e6d6 d2d6 c7d6 d1d6,894,97,89,855,advantage long master middlegame,https://lichess.org/ElEQSRO6/black#38
xkim3,r2k1r2/ppp3p1/2np3p/4pq2/4N1n1/1B1P4/PPPQ1bPP/R1B2R1K w - - 0 18,e4f2 g4f2 f1f2 f5f2 d2f2 f8f2,884,77,100,108,advantage kingsideAttack long middlegame,https://lichess.org/PKsOCzfl#35
7YO2M,r1b3k1/ppppqrpp/2n5/4Pn2/2B2P2/1Q2b3/PP2N1PP/R1B2R1K w - - 2 15,c4f7 e7f7 b3f7 g8f7 c1e3 f5e3,886,83,64,45,advantage long middlegame,https://lichess.org/i62yj05K#29
KgLzs,3r2k1/2pr1pbp/3q1np1/p4b2/1p6/1P2P1P1/PBPN1P1P/R1QR1BK1 w - - 5 23,d2c4 d6d1 c1d1 d7d1 a1d1 d8d1,782,90,92,233,advantage long middlegame,https://lichess.org/auInQAAo#45
qp5ON,r1bq1rk1/p3npbp/5np1/3Pp3/8/2N1BP2/PP1QN1PP/3RKB1R b K - 0 13,e7d5 c3d5 d8d5 d2d5 f6d5 d1d5,866,90,97,2783,advantage long master opening,https://lichess.org/swlKu48e/black#26
IFDSR,r3r1k1/pp2qp1p/3b1np1/2p4N/3p1P1n/PQPP3P/BP3K2/1RB4R w - - 2 21,h5f6 e7f6 b3f7 f6f7 a2f7 g8f7,798,104,82,30,crushing long middlegame,https://lichess.org/9XNcAuPT#41
CVO4E,r3k1nr/pppb1ppp/2B5/4p3/3bP3/2P5/PP3PqP/RNBQKR2 b Qkq - 0 9,d4f2 f1f2 g2h1 f2f1 h1f1 e1f1,724,92,83,286,advantage long opening,https://lichess.org/5w4pLmR1/black#18
DwPwz,r1b2rk1/ppp2ppp/3b4/8/2B4q/3P1Q1P/PPP2PPn/RNB1R1K1 w - - 3 14,f3f7 f8f7 e1e8 d6f8 c4f7 g8f7,797,92,70,62,crushing long opening,https://lichess.org/ge1XYYyE#27
vfwdq,r1bqr1k1/5p1p/p1p1pnpP/1p1n4/3PN3/2PB1Q1N/PP5P/R4RK1 b - - 0 18,e8f8 e4f6 d5f6 f3f6 d8f6 f1f6,884,80,80,201,advantage kingsideAttack long middlegame,https://lichess.org/WndxQM7p/black#36
ynEVL,r3k2r/1R1bppbp/p1pp1np1/2p5/4PP1Q/2Nq1N2/P2B2PP/1R5K b kq - 1 15,h7h6 b7b8 a8b8 b1b8 d7c8 b8c8,844,81,97,342,advantage long middlegame,https://lichess.org/qj9Pbw9X/black#30
p9Guf,rn2k1nr/pp3pp1/2p5/2bpPp2/5B1q/3P3R/PPP1QP2/RN2KB2 b Qkq - 0 11,h4f2 e2f2 c5f2 e1f2 h8h3 f1h3,823,81,63,58,advantage long opening,https://lichess.org/HYiqWoc5/black#22
YzEFR,r2qr1k1/pp1n1pp1/2Nb3p/3p4/2pP4/2P3B1/PP1NQPPP/R3R1K1 b - - 0 15,b7c6 e2e8 d8e8 e1e8 a8e8 g3d6,896,76,100,693,advantage kingsideAttack long middlegame,https://lichess.org/VWtBbPhK/black#30
qZEPJ,rnbq1b1k/pp1pp2p/1n2P1p1/6N1/1p6/8/P1PP1PPP/RN1QK2R b KQ - 1 10,d7e6 g5f7 h8g8 f7d8,834,83,78,192,opening,https://lichess.org/qoklGvSc/black#20
e53kS,rn4k1/1bp2rp1/pp1bBq1p/7Q/P2PnP2/2N1P3/1P4PP/R1B2RK1 w - - 1 14,e6f7 f6f7 h5f7 g8f7 c3e4 b7e4,778,79,86,432,advantage long middlegame,https://lichess.org/DydKJ0BT#27
YuurI,r1b2rk1/pp3ppp/2n1pn2/1N5q/1P3P2/P1NBPR2/2Q3Pb/R1B4K b - - 2 17,h2f4 f3h3 h5h3 g2h3,897,78,98,409,middlegame,https://lichess.org/dFvwSavW/black#34
Pol40,3qrr1k/p1p2pp1/2pb3p/3n2NQ/3P2b1/2PB2P1/PP3P1P/R1B1R1K1 w - - 2 17,g5f7 f8f7 e1e8 d8e8 h5g4 e8e1,753,96,76,421,advantage long opening,https://lichess.org/5J6kLN0h#33
13tEA,2rk3r/2q2ppp/3bbn2/1QnpN3/5B2/3P4/PP2PPPP/R3KBNR w KQ - 5 13,e5c6 c7c6 b5c6 c8c6 f4d6 c6d6,753,100,57,208,advantage long middlegame,https://lichess.org/2W2MM8dz#25
OjvKr,2r3k1/1p1bbppp/p3p3/1q1pP3/1PrP4/5P2/PP1QN1PP/R1R1B2K w - - 1 22,a2a3 c4c1 a1c1 c8c1 d2c1 b5e2,782,80,87,403,crushing long middlegame,https://lichess.org/z4jVItnB#43
IE5CC,r2q1rk1/pbpn1ppp/1p1p1b2/1B1P4/8/2N2N2/PP2QPPP/3RR1K1 b - - 9 14,f8e8 e2e8 d8e8 e1e8 a8e8 b5d7,838,98,95,1406,advantage kingsideAttack long middlegame,https://lichess.org/I5ewl8ap/black#28
XXAQn,r3kb1r/p1p1qppp/2pp1n2/4P3/3p4/5Q1P/PPP2PP1/RNB2RK1 b kq - 0 10,d6e5 f3c6 e7d7 c6a8,846,83,90,91,middlegame,https://lichess.org/6K2GMWj8/black#20
G0cEP,r3kb1r/ppp2p1p/2np1qn1/7Q/2BPPp2/2P5/PP5P/RNB2RK1 w kq - 0 12,c1f4 g6f4 h5f7 f6f7 c4f7 e8f7,892,81,91,476,crushing long opening,https://lichess.org/aSV9dDKJ#23
ux3sp,2r1k2r/1p3ppp/p1n1p3/3pP3/2pP1P1b/2P1P1q1/PP2B1N1/R3QKR1 b k - 4 18,g3h3 e1h4 h3h4 g2h4,831,85,58,65,master middlegame,https://lichess.org/CTGEWDDb/black#36
lCKMj,r1b1k2r/ppp3pp/2n5/q7/1b1p4/3Q1N2/PPPBPPPP/R3KB1R w KQkq - 6 11,f3d4 b4d2 d3d2 a5d2 e1d2 c6d4,826,79,98,985,advantage long opening,https://lichess.org/hKQPEKy5#21
I7HT1,r4rk1/ppp2ppp/1b1p1q2/3N4/2nP2b1/5N2/PP3PPP/R1BQ1RK1 b - - 1 13,f6f5 d5e7 g8h8 e7f5,860,79,100,449,master middlegame,https://lichess.org/u8lqhu53/black#26
yPXYi,r3kbnr/pp3ppp/2B1p3/3pP3/Q2Pq3/4B3/PPb2PPP/R3K2R b KQkq - 0 11,b7c6 a4c6 e8d8 c6a8,868,91,96,204,middlegame,https://lichess.org/IZxlF9xb/black#22
WxvbP,r3kbnr/p1pq1ppp/2n1p3/3p4/3P4/1QN1PN2/P4PPP/1RB1K2R b Kkq - 1 10,a8b8 b3b8 c6b8 b1b8 d7d8 b8d8,739,90,85,299,advantage long opening,https://lichess.org/Ed3w1BDF/black#20
pHXOI,r3k2r/pp1bbppp/1q2p3/8/1npP4/1P2PNP1/1Q1N1PP1/R3KB1R w KQkq - 0 15,b3c4 b4d3 f1d3 b6b2,862,80,83,270,middlegame,https://lichess.org/D3xWQgoT#29
2FoPR,r1b2rk1/1p3ppp/pq1pp3/8/1n2PP2/1Pb2N1P/PBPQ2P1/2K1RR2 w - - 0 19,d2c3 b4a2 c1b1 a2c3,881,102,95,239,middlegame,https://lichess.org/fHUgHQtk#37
mSaDH,r1bq1rk1/pp3ppp/3b4/2nQ4/4p3/P3PN1P/1PP1BPP1/R1B2RK1 w - - 0 12,f3d4 d6h2 g1h2 d8d5,874,100,94,503,opening,https://lichess.org/vBNXyd5L#23
qyJvn,2rq1r2/Bp2p1bk/3p2pp/1B1P1p1n/4PP2/P1N4P/1PP1Q1P1/R4R1K w - - 1 23,a7e3 h5g3 h1h2 g3e2,743,82,89,169,middlegame,https://lichess.org/nKr84JD0#45
ZSyfB,r1b2rk1/pppp2pp/5q2/2b1n3/2P5/4PNP1/PP3PBP/R1BQK2R w KQ - 5 12,e1g1 e5f3 g2f3 f6f3 d1f3 f8f3,796,99,88,895,crushing kingsideAttack long opening,https://lichess.org/sfBMsyHp#23
JqDG4,r3kbnr/3q1ppp/p3p1b1/1N1p4/Q4B2/2P1P2P/PP1N1PP1/R3K2R w KQkq - 1 13,b5d6 f8d6 a4d7 e8d7 f4d6 d7d6,831,89,91,682,middlegame,https://lichess.org/rqVIitow#25
jqved,3r3r/p1kn4/b1p2p1n/1pb1p1p1/4P2p/1BN1BN2/PP1R1PPP/3R2K1 w - - 0 19,e3c5 d7c5 d2d8 h8d8 d1d8 c7d8,836,80,100,103,advantage long middlegame,https://lichess.org/txF54JyW#37
hL09N,r1b2rk1/pp2np1p/3p1qp1/2pPn3/2P1P3/3B1N2/PB1Q2PP/5RK1 b - - 9 16,e5f3 f1f3 f6b2 d2b2,894,81,94,500,master middlegame,https://lichess.org/IoRXtdY6/black#32
TGtbW,r3r1k1/ppp1bpp1/3p1n1p/8/4N1bP/3P4/PPPNBPP1/2K1R2R b - - 4 15,d6d5 e4f6 e7f6 e2g4 e8e1 h1e1,842,80,100,215,advantage long middlegame,https://lichess.org/f3xs80NA/black#30
YhmNS,r3k2r/1pp3p1/p1np3p/4pNBq/4P1b1/3P4/PPPQ2PP/R4RK1 b kq - 3 15,h6g5 f5g7 e8d7 g7h5,863,78,100,668,middlegame,https://lichess.org/ouML9mMw/black#30
4nOsJ,3rk2r/pb3pp1/2q1pn1p/4n3/3P4/2P2NPP/PP1NBP2/R2Q1RK1 w k - 4 17,d2b3 e5f3 e2f3 c6f3 d1f3 b7f3,893,90,97,1652,advantage kingsideAttack long middlegame,https://lichess.org/iq3IEusz#33
FJKjr,r4rk1/pp1n1ppp/2p2b2/3p3b/8/2PP1N1P/PP2BPP1/R1B1R1K1 b - - 0 15,d7e5 f3e5 h5e2 e1e2 f6e5 e2e5,855,85,97,1366,crushing long middlegame,https://lichess.org/fL3pxwVS/black#30
udtuI,r3rnk1/pb2qppp/1pn5/3p4/3PN3/P2Q1N2/1P3PPP/RB2R1K1 w - - 0 18,e4g5 e7e1 f3e1 e8e1 d3f1 e1f1,845,84,93,201,advantage kingsideAttack long opening,https://lichess.org/ybvjbu8x#35
7oigU,rn2kb1r/pQp2ppp/8/4Pb2/7q/8/PPPP2PP/R1B1KBNR w KQkq - 1 9,g2g3 h4e4 b7e4 f5e4 g1f3 e4f3,803,78,100,183,advantage long opening,https://lichess.org/DqN6XoPH#17`,
  },
];
