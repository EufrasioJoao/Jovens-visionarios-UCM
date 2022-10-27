import React from "react";

import { Hero } from "../features/homepage/components/hero/Index";
// import { HightQualityVideo } from "../features/homepage/components/hight_quality_video/Index";
import { QualifiedLessons } from "../features/homepage/components/qualified_lessons/Index";
import { DontWasteTime } from "../features/homepage/components/dont_waste_time/Index";
import { JoinAsMentor } from "../features/homepage/components/join_as_mentor/Index";
import { Subscribe } from "../features/homepage/components/subscribe/Index";
import { Header } from "../components/header/Index";
import { Footer } from "../components/footer/Index";

export function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <QualifiedLessons />
            <DontWasteTime />
            <JoinAsMentor />
            {/* <HightQualityVideo /> */}
            <Subscribe />
            <Footer />
        </div>
    );
}
