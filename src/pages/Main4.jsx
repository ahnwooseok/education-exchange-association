import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import {BoardSearch} from "../contexts/api.jsx";

function Main4() {
    const searchParams = new URLSearchParams(location.search);
    const sub = searchParams.get('sub');
    const postId = searchParams.get('postId');
    const width = useWindowWidth();
    const subContents = ["공지사항", "보도자료"];
    const routerPush = useNavigate();

    const exampleData = {
        "page": 0,
        "size": 0,
        "total_page": 5,
        "total_size": 0,
        "posts": [
            {
                "uid": "1",
                "title": "Introduction to JavaScript",
                "created_at": "2024-12-10T10:00:00.000Z",
                "modified_at": "2024-12-10T12:00:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/1"
            },
            {
                "uid": "2",
                "title": "Understanding React Basics",
                "created_at": "2024-12-09T09:30:00.000Z",
                "modified_at": "2024-12-10T11:00:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/2"
            },
            {
                "uid": "3",
                "title": "A Guide to Node.js",
                "created_at": "2024-12-08T08:45:00.000Z",
                "modified_at": "2024-12-10T10:30:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/3"
            },
            {
                "uid": "4",
                "title": "Building REST APIs with Express",
                "created_at": "2024-12-07T07:50:00.000Z",
                "modified_at": "2024-12-09T14:15:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/4"
            },
            {
                "uid": "5",
                "title": "Database Optimization Techniques",
                "created_at": "2024-12-06T06:30:00.000Z",
                "modified_at": "2024-12-08T13:45:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/5"
            },
            {
                "uid": "6",
                "title": "Exploring TypeScript",
                "created_at": "2024-12-05T05:25:00.000Z",
                "modified_at": "2024-12-07T12:35:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/6"
            },
            {
                "uid": "7",
                "title": "Web Performance Best Practices",
                "created_at": "2024-12-04T04:15:00.000Z",
                "modified_at": "2024-12-06T11:55:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/7"
            },
            {
                "uid": "8",
                "title": "CSS Grid Layout Guide",
                "created_at": "2024-12-03T03:05:00.000Z",
                "modified_at": "2024-12-05T10:40:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/8"
            },
            {
                "uid": "9",
                "title": "Understanding Web Accessibility",
                "created_at": "2024-12-02T02:30:00.000Z",
                "modified_at": "2024-12-04T09:25:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/9"
            },
            {
                "uid": "10",
                "title": "Debugging Techniques for Developers",
                "created_at": "2024-12-01T01:20:00.000Z",
                "modified_at": "2024-12-03T08:15:00.000Z",
                "thumbnail": "https://via.placeholder.com/150/10"
            }
        ]
    }
    console.log(postId)

    const exampleDetailData = {
        "uid": "fdsdf798787d8f7f97f8s7",
        "title": "[제15차 인문주간] UCC 영상 공모전 안내",
        "content": "제15차 인문주간\n" +
            "\n" +
            "\n" +
            "코로나 시대, 인문학의 길\n" +
            "- 함께, 새롭게, 깊게\n" +
            "UCC 영상 공모전\n" +
            "COVID–19로 언택트(untact) 시대를 맞이하고 있습니다. 한국외국어대학교 국제지역연구센터 HK+국가전략사업단 똘레랑스에서는 여러분을 위해 UCC 영상 공모를 준비했습니다. 외국인을 대상으로 하는 한국 문화 영상 공모전입니다. 한국을 처음 접했을 때의 느낌,인상적인 문화, 장소 등을 떠올려서 여러분이 생각하는 한국을 영상으로 담아 보내주시길 바랍니다.\n" +
            "□ 지원 자격\n" +
            "- 외국인 ※ 개인 또는 단체(10인 이내)로 작품 1점에 한함\n" +
            "\n" +
            "□ 기간 및 일정\n" +
            "- 접수기간 : 10.20.(화) 17:00 까지\n" +
            "- 결과발표 : 2020. 10. 23.(금)\n" +
            "- 출품작 상영 및 우수상 시상식 : 2020. 10. 27.(화) 17:00~17:30\n" +
            "※ 수상자에 한해, 시상식 참석 필수\n" +
            "\n" +
            "□ 공모주제\n" +
            "- 한국에서 지내면서 만나고, 경험하고, 느낀 한국 문화 이야기\n" +
            "*소재 예시*\n" +
            "▶ 나의 한국 문화 설명서 (영화, 가곡 소개, 문화계 인사 인터뷰 등)\n" +
            "▶ 이색적인 한국 (문화 차이 소개, 음식 체험기 등)\n" +
            "▶ 내 맘대로 연주하는 한국 (개인 및 10인 이하 단체)\n" +
            "▶ 내가 표현하는 한국 (K-댄스 개인 및 10인 이하 단체)\n" +
            "▶ 나의 인생 장소 (추천하는 한국의 여행지) *사진 자료가 포함된 PPT 첨부 필요\n" +
            "\n" +
            "□ 출품규격\n" +
            "- 분량: 3분 내외의 동영상 (개인 또는 단체)\n" +
            "- 형식: 동영상, 플래시 애니메이션 등 영상 파일 형식 (mp4, avi, wmv, mpeg, mov)\n" +
            "\n" +
            "□ 접수 방법\n" +
            "- 이메일(hufs.tolerance@gmail.com) 접수 (작품 접수 후 취소 또는 반환 불가)\n" +
            "(이메일 제목: 인문주간 UCC 공모전_이름)\n" +
            "- 본인의 유튜브에 업로드 후 참가신청서에 영상 URL 주소를 기재\n" +
            "- 수상작으로 선정될 시 원본 파일 제출\n" +
            "\n" +
            "□ 제출 서류\n" +
            "- 제출서류는 센터 홈페이지 [똘레랑스]-[공지사항] (www.cias.ac.kr)에서 다운로드\n" +
            "- 제출서류 1부( 참가신청서, 개인정보 제공/수집/이용 및 초상권자 동의서 , 수상 작품 활용 관련 동의서)\n" +
            "영상에 사진 자료 포함 시 사진 자료가 포함된 PPT 파일\n" +
            "\n" +
            "□ 심사방법\n" +
            "- UCC 및 글짓기 & 시화전 공모 평가 항목(배점)으로 평가, 우수 작품 선정\n" +
            "- 평가항목 : 참신성(30), 공감성(25), 완성도 및 전달력(25), 긍정성(20)\n" +
            "\n" +
            "□ 시상 내역\n" +
            "대상 1편-상장 및 문화상품권 20만원\n" +
            "최우수상 2편-상장 및 문화상품권 10만원\n" +
            "우수상 3편-상장 및 문화상품권 5만원\n" +
            "※공감상(5명) : 참가자 중 추첨을 통해 문화상품권(1만원) 증정\n" +
            "※수상작은 본 센터의 홈페이지와 유튜브 채널에 게시됨\n" +
            "\n" +
            "문의처: hufs.tolerance@gmail.com\n" +
            "주최: 한국연구재단\n" +
            "주관: 한국외국어대학교 국제지역연구센터 HK+국가전략사업단 똘레랑스\n" +
            "\n" +
            "\n" +
            "※ 유의사항\n" +
            "○ 출품작에 대한 저작권은 응모자에게 있음(저작권법 제8조, 제10조)\n" +
            "○ 주최기관은 필요한 경우 목적과 이용기간을 밝힌 후 출품작에 대한 저작재산권 중 일부를 양수하거나 이용, 변형에 대하여 허락을\n" +
            "받을 수 있으며, 이 경우에는 저작자와 별도로 협의하여 정함\n" +
            "○ 출품자는 출품작이 제 3자의 저작권을 침해하지 않도록 주의 의무를 다하여야 함\n" +
            "○ 출품작이 제 3자의 저작권, 초상권, 지적재산권을 침해할 경우에 모든 저작권 문제의 책임은 출품자에게 있고 제 3자와 분쟁 시 주\n" +
            "최기관은 일절 책임지지 않음\n" +
            "○ 타 공모전 출품작이거나 타인의 저작물을 도용할 경우 선정 대상에서 제외되며, 시상 후 확인될 시 시상이 취소(시상금 반환)될 수\n" +
            "있음\n" +
            "○ 참가율 저조 또는 적합한 해당작이 없을 경우 시상 인원 축소 및 시상이 취소될 수 있음\n" +
            "○ 심사 점수는 공개하지 않으며 적합한 수상작이 없는 경우 시상하지 않을 수도 있음\n" +
            "○ 팀별 참여의 경우 상금을 팀 대표에게 지급하며, 주최기관은 상금 배분 문제에 관여하지 않음\n" +
            "○ 출품작은 [코로나 시대, 인문학의 길]와 연계한 모든 사업에 활용될 수 있음 (7년간 활용)\n" +
            "○ 제출된 작품은 일체 반환되지 않음\n" +
            "○ 수상작은 본 센터의 홈페이지와 유튜브에 게시됨\n" +
            "○ 시화전 참가자는 반드시 본인이 직접 번역해야 함, 출판 번역본을 이용할 경우 저작권에 위배됨\n" +
            "○ 기타 해당 공모요강과 참가신청서의 모든 내용을 읽고 숙지해야 함 ",
        "created_at": "2024-12-10T20:40:53.153Z",
        "modified_at": "2024-12-10T20:40:53.153Z",
        "thumbnail": "string",
        "attachments": [
            {
                "filename": "1023018123129142041.hwp",
                "url": "string"
            },
            {
                "filename": "1023018123129142041.hwp",
                "url": "string"
            },
        ]
    }

    const [selectedPage, setSelectedPage] = useState(1);
    const [size, setSize] = useState(10);
    const [data, setData] = useState(null);
    const [officeList, setOfficeList] = useState(null);

    useEffect(() => {
        getData(selectedPage, size);
    }, [selectedPage, size])

    const getData = (page, size) => {
        // BoardSearch(sub === "0" ? "notice" : "news", {
        //     page: page,
        //     size: size,
        // })
        //     .then((response) => {
        //         let {status, data} = response;
        //         if(status == 200){
        //             setData(data)
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })


        // sub기준으로 데이터 받아오기
        setData(exampleData)
    }

    return (
        <div className="w-full flexColumn">
            <div className={"h60"} />
            <div className={"relative"}>
                <img src={`/images/main4sub${sub}.png`} className={"w-full round-20"} style={{maxHeight:"500px"}}/>
                <div className={"TitleS11 absolute White"} style={{ left: "40px", top: "80%" }}>
                    {subContents[sub]}
                </div>
            </div>
            <div className={"h40"} />
            {
                postId === null ?
                    <div className={"flexColumn flexAlign-row w-full"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                        <div
                            className={"flexRow flexAlign-around h60"}
                            style={{
                                backgroundColor: "#f8f8f8",
                                borderTop: "1px solid #000",
                                borderBottom: "1px solid #d9d9d9",
                                fontSize: width <= 678 ? "12px" : "16px",
                                height: width <= 678 ? "50px" : "60px",
                            }}
                        >
                            <div
                                className={"ft-16-600 co-black textAlign-center"}
                                style={{
                                    width: width <= 678 ? "15%" : "10%",
                                }}
                            >
                                번호
                            </div>
                            <div
                                className={"ft-16-600 co-black textAlign-center"}
                                style={{
                                    width: width <= 678 ? "60%" : "70%",
                                }}
                            >
                                제목
                            </div>
                            <div
                                className={"ft-16-600 co-black textAlign-center"}
                                style={{
                                    width: width <= 678 ? "25%" : "20%",
                                }}
                            >
                                작성일
                            </div>
                        </div>
                        <div className={"w-full"}>
                            {exampleData?.posts.map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        padding: width <= 678 ? "5px 0" : "10px 0",
                                        borderBottom: "1px solid #ddd",
                                        fontSize: width <= 678 ? "10px" : "12px",
                                        height: width <= 678 ? "60px" : "80px",
                                    }}
                                    className={"flexRow flexAlign-around cursor"}
                                    onClick={() => {
                                        // routerPush(`/main4?sub=${sub}&postId=${postId}`)
                                        routerPush(`/main4?sub=${sub}&postId=ㄹㅇ니러ㅣ안러ㅏㅣㅇ너리ㅏㅇ너`)
                                    }}
                                >
                                    <div
                                        className={"ft-12-400 co-black textAlign-center"}
                                        style={{
                                            width: width <= 678 ? "15%" : "10%",
                                        }}
                                    >
                                        {idx}
                                    </div>
                                    <div
                                        className={"ft-12-400 co-black textAlign-left"}
                                        style={{
                                            width: width <= 678 ? "60%" : "70%",
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                    <div
                                        className={"ft-12-400 co-black textAlign-center"}
                                        style={{
                                            width: width <= 678 ? "25%" : "20%",
                                        }}
                                    >
                                        {item.created_at.split("T")[0]}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                            {/* 왼쪽 화살표 */}
                            <button
                                onClick={() => setSelectedPage(selectedPage - 1)}
                                style={{
                                    padding: width <= 678 ? "5px 10px" : "10px 15px",
                                    margin: "0 3px",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                    backgroundColor: selectedPage === 1 ? "#f0f0f0" : "white",
                                    color: selectedPage === 1 ? "#aaa" : "#007BFF",
                                    cursor: selectedPage === 1 ? "not-allowed" : "pointer",
                                    fontSize: width <= 678 ? "12px" : "14px",
                                    fontWeight: "bold",
                                }}
                                disabled={selectedPage === 1}
                            >
                                &lt;
                            </button>

                            {/* 페이지 번호 */}
                            {[...Array(data?.total_page)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedPage(i + 1)}
                                    style={{
                                        padding: width <= 678 ? "5px 10px" : "10px 15px",
                                        margin: "0 3px",
                                        border: "1px solid #ddd",
                                        borderRadius: "5px",
                                        backgroundColor: selectedPage === i + 1 ? "#007BFF" : "white",
                                        color: selectedPage === i + 1 ? "white" : "#000",
                                        cursor: "pointer",
                                        fontSize: width <= 678 ? "12px" : "14px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            {/* 오른쪽 화살표 */}
                            <button
                                onClick={() => setSelectedPage(selectedPage + 1)}
                                style={{
                                    padding: width <= 678 ? "5px 10px" : "10px 15px",
                                    margin: "0 3px",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                    backgroundColor: selectedPage === data?.total_page ? "#f0f0f0" : "white",
                                    color: selectedPage === data?.total_page ? "#aaa" : "#007BFF",
                                    cursor: selectedPage === data?.total_page ? "not-allowed" : "pointer",
                                    fontSize: width <= 678 ? "12px" : "14px",
                                    fontWeight: "bold",
                                }}
                                disabled={selectedPage === data?.total_page}
                            >
                                &gt;
                            </button>
                        </div>

                    </div>
                    :
                    <div
                        className={"flexColumn flexAlign-row w-full"}
                        style={{
                            padding: "20px",
                            margin: "0 auto",
                            maxWidth: "1000px",
                        }}
                    >
                        <div
                            className={"flexColumn w-full"}
                            style={{
                                borderTop: "1px solid #000",
                                borderBottom: "1px solid #d9d9d9",
                                fontSize: width <= 678 ? "12px" : "14px",
                                padding: width <= 678 ? "10px" : "20px",
                            }}
                        >
                            <div className={"ft-16-600 co-black textAlign-left"}>
                                {exampleDetailData.title}
                            </div>
                            <div className={"h8"} />
                            <div
                                className={"flexColumn flexAlign-start"} // 반응형에서 FlexRow -> FlexColumn
                                style={{
                                    gap: width <= 678 ? "5px" : "8px", // 여백을 동적으로 설정
                                }}
                            >
                                <div style={{ color: "#a3a3a3", fontSize: "inherit" }}>
                                    글쓴이 : 협회관리자
                                </div>
                                <div style={{ color: "#a3a3a3", fontSize: "inherit" }}>
                                    등록일 : {exampleDetailData.created_at.split("T").join(" ")}
                                </div>
                            </div>
                        </div>

                        {exampleDetailData.attachments.map((item, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className={"flexColumn w-full"} // FlexRow -> FlexColumn
                                    style={{
                                        borderBottom: "1px solid #d9d9d9",
                                        fontSize: width <= 678 ? "12px" : "14px",
                                        padding: width <= 678 ? "10px" : "20px",
                                        color: "#a3a3a3",
                                    }}
                                >
                                    첨부파일 #{idx}&nbsp;&nbsp;
                                    <a
                                        href="http://www.cias.ac.kr/bbs/download.php?bo_table=notice&amp;wr_id=8&amp;no=0&amp;nonce=14b34db0a4752caa6a71|1733870319|4fed7415ced64bc7c08b951f2bd455444d97c3c8&amp;sst=wr_datetime&amp;sod=asc&amp;sop=and&amp;page=1&amp;me_code=4020"
                                        className="download"
                                        rel="noopener noreferrer"
                                    >
                                        104324272261da8dc3847ba.hwp
                                    </a>
                                </div>
                            );
                        })}

                        <div
                            className={"flexColumn w-full"} // FlexRow -> FlexColumn
                            style={{
                                borderBottom: "1px solid #d9d9d9",
                                fontSize: width <= 678 ? "12px" : "14px",
                                padding: width <= 678 ? "10px" : "20px",
                                color: "#333333",
                            }}
                        >
                            {exampleDetailData.content}
                        </div>

                        <div className={"h40"} />
                        <div className={"w-full flexAlign"}>
                            <div
                                className={
                                    "ft-14-400 co-black cursor flexAlign round-8 border-black"
                                }
                                style={{
                                    padding: width <= 678 ? "6px 8px" : "8px 10px",
                                    minWidth: width <= 678 ? "120px" : "160px",
                                    fontSize: width <= 678 ? "12px" : "14px",
                                }}
                                onClick={() => {
                                    routerPush(-1);
                                }}
                            >
                                목록
                            </div>
                        </div>
                        <div className={"h80"} />
                    </div>
            }
        </div>
    );
}

export default Main4;