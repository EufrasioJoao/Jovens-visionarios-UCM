import React from "react";
import style from "./styles.module.css";

import { QualifiedLessonsCard } from "../qualified_lessons_card/Index";

export function QualifiedLessons() {
    return (
        <div className={style.qualified_lessons}>
            <div className={style.qualified_lessons_content}>
                <h2>
                    Aulas e Cursos qualificadas para estudantes
                    <br />
                    Para todos cursos
                </h2>
            </div>

            <div className={style.qualified_lessons_courses_row}>
                <div className={style.qualified_lessons_courses_row_div}>
                    <QualifiedLessonsCard description='Aprenda HTML5 gratuitamente e comece a criar paginas web. O primeiro passo para uma carreira de um front-end developer.' title='HTML5'/>
                </div>
                <div className={style.qualified_lessons_courses_row_div}>
                    <QualifiedLessonsCard description='Aprenda CSS3 gratuitamente e comece a criar estilos para as suas paginas web. Aprenda a criar animações e muito mais.' title='CSS3'/>
                </div>
                <div className={style.qualified_lessons_courses_row_div}>
                    <QualifiedLessonsCard description='Aprenda JavaScript, a linguagem de programção que da vida ás sua paginas web. E abra as portas para se tornar um melhor programador.' title='JavaScript'/>
                </div>
            </div>

            <a href="/register" className={style.qualified_lessons_link}>
                Ver Cursos
            </a>
        </div>
    );
}
