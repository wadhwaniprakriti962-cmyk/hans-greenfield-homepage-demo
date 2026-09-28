// ALL editable content lives here. Replace placeholders with verified school information.
const u=(id,w=1200)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
// Central image config: swap any URL for a real school photograph (e.g. "/images/library.jpg").
export const images={
hero:u('photo-1580582932707-520aed937b7b',1400),about:u('photo-1509062522246-3755977927d7'),principal:u('photo-1560250097-0b93528c311a',800),
primary:u('photo-1503676260728-1c00da094a0b'),middle:u('photo-1427504494785-3a9ca7044f45'),secondary:u('photo-1546410531-bb4caa6b424d'),senior:u('photo-1523050854058-8df90110c9f1'),
library:u('photo-1481627834876-b7833e8f5570'),classroom:u('photo-1588072432836-e10032774350'),computerLab:u('photo-1517694712202-14dd9538aa97'),
scienceLab:u('photo-1532094349884-543bc11b234d'),mathLab:u('photo-1509228468518-180dd4864904'),sports:u('photo-1517649763962-0c623066013b'),
life1:u('photo-1571260899304-425eee4c7efc'),life2:u('photo-1511578314322-379afb476865'),life3:u('photo-1513364776144-60967b0f800f'),life4:u('photo-1511671782779-c97d3d27a1d4'),life5:u('photo-1464366400600-7168b8af9bc3'),life6:u('photo-1552664730-d307ca884978'),
admission:u('photo-1497633762265-9d179a990aa6',1600),
};
export const school={name:'Hans Green Field Public School',city:'Fatehpur',
address:'NH-2, Malwan, Distt. Fatehpur (UP)',affiliation:'Affiliated to CBSE Board (New Delhi), Affiliation No. 2132259',logo:'/logo-emblem.png',logoFull:'/logo-full.png',phone:'Phone Number — To be updated',email:'Email — To be updated',
shortDesc:'Committed to knowledge, character and confidence for every student.',year:2026};
export const nav=[['Home','home'],['About Us','about'],['Academics','academics'],['Admissions','admissions'],['Infrastructure','facilities'],['Gallery','gallery'],['Downloads','footer'],['Contact','contact']];
export const highlights=[['Academic Excellence','Strong foundations in every subject.','BookOpen'],['Holistic Development','Growth in mind, body and spirit.','Sprout'],['Modern Learning','Spaces built for curiosity.','Monitor'],['Values & Discipline','Character shaping every day.','ShieldCheck']];
export const aboutPoints=['Quality Learning','Holistic Growth','Student-Centred Environment'];
export const why=[['Academic Focus','Encouraging strong foundations and meaningful learning.','GraduationCap'],['Holistic Development','Supporting growth beyond the classroom.','Trophy'],['Values & Character','Developing discipline, responsibility and respect.','Heart'],['Learning Environment','Creating a positive and supportive atmosphere for students.','Building2']];
export const principal={name:'Principal',title:'Hans Green Field Public School',// TODO: add real name & photo (images.principal)
message:['Education is not limited to textbooks and examinations. It is a continuous process of developing knowledge, character, confidence, values and responsibility.','At Hans Green Field Public School, we aim to support every student in discovering their potential and preparing for a meaningful and successful future.']};
export const academics=[['Primary Education','Building strong foundations through engaging learning experiences.','primary'],['Middle School','Encouraging curiosity, confidence and deeper understanding.','middle'],['Secondary Education','Developing academic knowledge, discipline and independent thinking.','secondary'],['Senior Secondary','Preparing students for higher education and future opportunities.','senior']];
export const facilities=[['Library','A quiet space to read, research and imagine.','library'],['Smart Classrooms','Interactive teaching that keeps learning engaging.','classroom'],['Computer Lab','Hands-on digital skills for a modern world.','computerLab'],['Science Laboratory','Learning by experiment and observation.','scienceLab'],['Mathematics Laboratory','Concepts made tangible through practice.','mathLab'],['Sports & Activity Areas','Room to play, compete and stay active.','sports']];
export const studentLife=[['Sports','life1','row-span-2'],['Cultural Activities','life2',''],['Art','life3','row-span-2'],['Music','life4',''],['Celebrations','life5',''],['Competitions','life6','']];
export const achievements=[['Academic Excellence','Trophy'],['Sports Achievement','Medal'],['Student Competitions','Award'],['School Milestones','Flag']];
export const galleryFilters=['All','Campus','Activities','Sports','Events'];
export const gallery=[['hero','Campus','Campus'],['library','Campus','Library'],['life2','Activities','Cultural event'],['sports','Sports','Sports day'],['life5','Events','Celebration'],['classroom','Campus','Classroom'],['life3','Activities','Art class'],['life1','Sports','Team sport'],['life6','Events','Competition'],['scienceLab','Activities','Science lab']];
export const news=[['School Notice'],['Admission Update'],['Important Announcement']];
