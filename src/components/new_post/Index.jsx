import React from "react";
import style from "./styles.module.css";
import { Paperclip, PaperPlaneTilt } from "phosphor-react";

export function NewPost() {
    return (
        <div className={style.feed_newpost_container}>
            <span>NOVO POST</span>
            <div className={style.feed_newpost_content}>
                <input type="text" placeholder="O que tens em mente?" />
                <div>
                    <button>
                        <label htmlFor="file input">
                            <Paperclip color="#c4c4c4" size={30} />
                        </label>
                        <input type="file" name="file input" id="file input" />
                    </button>
                    <button>
                        <PaperPlaneTilt color="#fff" size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
}
