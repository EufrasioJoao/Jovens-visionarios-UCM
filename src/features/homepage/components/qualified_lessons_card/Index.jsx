import React from "react";
import style from "./styles.module.css";

import { Globe } from "phosphor-react";

export function QualifiedLessonsCard({description, title}) {
    return (
        <div className={style.qualified_lessons_courses_card}>
            <div>
                <Globe color="white" size={30} />
            </div>
            <span>{title}</span>
            <p>
                {description}
            </p>
            <a href="/register">Mais detalhes</a>
        </div>
    );
}
