// All content lives here. Anything starting with "[TO CONFIRM]" renders highlighted so you can find and replace it.
export const TC = (s: string) => `[TO CONFIRM] ${s}`
export const GITHUB = 'https://github.com/hamnacs'
export const EMAIL = '' // TODO: add your email, e.g. 'name@example.com'
export const LINKEDIN = '' // TODO: add your LinkedIn URL
export const CV_URL = '' // TODO: put cv.pdf in /public and set '/cv.pdf'

export type Project = {
  slug: string; title: string; year: string; tagline: string; repo: string; tech: string[]
  problem: string; contribution: string; method: string; models: string; results: string[]; limits: string; figures: string
}

export const projects: Project[] = [
  { slug: 'accentbench', title: 'AccentBench', year: '2026', tagline: 'Failure-mode evaluation of multilingual Whisper ASR',
    repo: 'https://github.com/hamnacs/accent-bench', tech: ['Whisper', 'WER', 'Bootstrap CI', 'Python'],
    problem: 'How do accents, code-switching and explicit language selection affect speech recognition, and when does language conditioning help rather than harm?',
    contribution: 'Designed an independent, multi-track evaluation of Whisper Base and Small, comparing recognition errors and language-conditioning settings; documented failure modes and uncertainty in paired comparisons.',
    method: 'Evaluated 600 accented-English clips, approximately 100 Hindi–English MUCS clips, 100 Korean–English HiKE clips, 80 Urdu clips and 100 Korean clips. Used word error rate or whitespace-token edit-distance scoring as appropriate to each dataset, plus 10,000-resample paired bootstrap intervals for selected comparisons.',
    models: 'Whisper Base and Small; automatic and forced-language decoding.',
    results: ['For 14 selected Singaporean-English clips, forced English reduced mean WER from approximately 1.091 to 0.242; this is a selected subset, not an all-accent result.', 'On HiKE, Whisper Small automatic decoding yielded approximately 0.421 WER versus 0.622 with forced Korean.', 'On Urdu, Whisper Small mean WER changed from approximately 0.847 (automatic) to 0.398 (forced Urdu); Korean language conditioning showed little change.'],
    limits: 'Selected and relatively small evaluation sets, speaker imbalance, heuristic language identification, orthographic and normalization differences, and decoding nondeterminism limit generalization.',
    figures: 'For detailed comparison tables and reproducible analyses, see the linked GitHub repository.' },
  { slug: 'signlearn-pk', title: 'SignLearn-PK', year: '2026', tagline: 'Robustness of landmark-based Pakistan Sign Language recognition',
    repo: 'https://github.com/hamnacs/signlearn-pk', tech: ['Python', 'OpenPose', 'MediaPipe', 'GRU', 'MLP'],
    problem: 'Can temporal normalization improve recognition when signs are executed at different speeds and with different trajectories or starting poses?',
    contribution: 'Developed and evaluated static and temporal landmark-based recognition pipelines, established a frozen cross-execution benchmark, and analyzed errors and OpenPose–MediaPipe representation shift.',
    method: 'Used a distributed 37-class OpenPose-derived dataset with 5,112 landmark samples, and separately recorded 30 MediaPipe sequences each for Meem, Noon and Seen. Evaluated dynamic GRU variants on 15 permanently held-out recordings (five per class).',
    models: '37-class OpenPose MLP; separate three-class MediaPipe MLP; baseline GRU, 40-frame temporal-normalized GRU, and augmentation/motion ablations.',
    results: ['On the frozen 15-recording benchmark, baseline GRU accuracy was 66.67%, increasing to 73.33% with temporal normalization.', 'Temporal augmentation remained at 73.33%; explicit motion features achieved 66.67% in the reported ablation.', 'A separate three-class MediaPipe static MLP evaluation achieved 80.00% sequence-level accuracy. It is not directly comparable to the dynamic GRU experiment.'],
    limits: 'The dynamic evaluation covers three signs, a single signer and only 15 held-out recordings. OpenPose and MediaPipe feature geometry is not interchangeable, and the original 37-class OpenPose model is not a validated 37-class MediaPipe recognizer.',
    figures: 'See the repository research report for frozen-benchmark results, error cases and representation analyses.' },
  { slug: 'deepfake-robust', title: 'Deepfake Robustness', year: '2026', tagline: 'Controlled corruption-augmentation study for image detection',
    repo: 'https://github.com/hamnacs/deepfake-robust', tech: ['PyTorch', 'ResNet18', 'Image augmentation'],
    problem: 'Can corruption-aware training make a deepfake detector more reliable on degraded images without sacrificing too much clean-image performance?',
    contribution: 'Evaluated degradation failure modes and conducted a controlled seven-configuration augmentation ablation using a shared data split, frozen-backbone setup, training schedule and evaluation protocol.',
    method: 'Controlled Experiment E3 used 10,000 balanced real/fake images split into 8,000 training, 1,000 validation and 1,000 test images. Evaluated clean images and six corruptions: Gaussian noise, blur, JPEG compression, resizing, brightness reduction and contrast reduction.',
    models: 'Pretrained ResNet18 with frozen backbone in E3; seven training augmentation configurations (E3a–E3g).',
    results: ['In E3, mean accuracy across six degraded conditions increased from 64.43% (E3a baseline) to 71.12% (mixed augmentation E3f), a 6.68 percentage-point gain.', 'E3f clean test accuracy was 71.30%, while the highest clean test accuracy among E3 configurations was 73.80% (E3e).', 'Earlier E0–E2 experiments used different protocols; their higher clean-image figures should not be compared directly with E3.'],
    limits: 'Results cover one dataset, one backbone, six tested corruptions and a single controlled seed; small differences between augmentation configurations are not established as stable across repeated runs.',
    figures: 'See the linked paper and repository for per-corruption E3 comparison tables.' },
  { slug: 'urdu-english-rag', title: 'Urdu–English Retrieval', year: '2026', tagline: 'Cross-lingual retrieval under Roman Urdu spelling variation',
    repo: 'https://github.com/hamnacs/urdu-eng-code-switched-rag', tech: ['BGE-M3', 'FAISS', 'Multilingual retrieval', 'Python'],
    problem: 'Roman Urdu has variable spelling. How does that variation affect cross-lingual retrieval of relevant hospital-operations documents?',
    contribution: 'Constructed a small multilingual retrieval evaluation and compared embedding-based retrieval across English, Urdu and Roman Urdu query conditions.',
    method: 'Used 12 hospital-operations documents and 22 labeled queries, comparing multilingual embedding approaches and evaluating retrieval with Recall@3 under different language and spelling conditions.',
    models: 'BGE-M3 and multilingual MiniLM embeddings with FAISS-based nearest-neighbor retrieval.',
    results: ['For BGE-M3 cross-lingual retrieval, Recall@3 declined from 0.875 for clean code-switched queries to 0.375 under messy Roman Urdu spelling variation.', 'The result concerns the tested cross-lingual condition; it does not mean all same-language retrieval failed.'],
    limits: 'A small, domain-specific corpus and query set. Roman Urdu spelling variation and cross-lingual retrieval should be tested on larger, independently annotated collections before generalizing.',
    figures: 'See repository tables for results by query condition and retrieval model.' },
  { slug: 'llm-reliability', title: 'LLM Reliability Benchmark', year: '2026', tagline: 'Overclaiming, hallucination and uncertainty across language forms',
    repo: 'https://github.com/hamnacs/llm-reliability-benchmark', tech: ['Python', 'Multilingual evaluation', 'Gemini API', 'Fact-checking'],
    problem: 'Do language form and uncertainty-aware prompting change whether a model answers correctly, admits uncertainty, or overclaims?',
    contribution: 'Created a 30-question multilingual evaluation and four-label rubric; carried out an initial manual three-model pilot and built a resumable scripted Gemini evaluation with follow-up fact-checking of flagged cases.',
    method: 'Thirty questions across five categories, translated into English, Urdu script and Roman Urdu, with standard and uncertainty-aware prompting. The manual pilot tested three models (540 planned responses); a separate scripted Gemini run collected 180 responses.',
    models: 'Manual pilot: Claude, GPT and Gemini (versions not pinned). Scripted run: Gemini 3.5 Flash Lite for generation and Gemini 3.1 Flash Lite for first-pass judging, followed by human review.',
    results: ['Manual pilot: 518 of 540 planned responses marked correct, 20 inappropriately confident, one hallucinated and one missing.', 'Scripted Gemini run: 166 correct, 10 appropriately uncertain, three inappropriately confident and one hallucinated.', 'Independent fact-checking changed some initial hallucination labels, demonstrating the importance of distinguishing fabrication from overclaiming.'],
    limits: 'Only 30 questions per condition; a single human reviewer; unpinned pilot model versions; and only one model in the scripted phase. These results are exploratory, not population-level reliability estimates.',
    figures: 'See the repository paper and scored-results files for phase-specific tables and reviewed failure cases.' },
]
export type Item = {
  title: string; summary: string; tech: string[]; details: string[]; repo?: string
  images?: { src: string; alt: string }[]; download?: { href: string; label: string }
}
// Add photos by putting files in /public/img and listing them in `images`. Nothing renders until you do.
export const applied: Item[] = [
  { title: 'AI Enabled Hospital Information Management System', summary: 'Final year project: hospital workflows with an AI voice agent.', tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'VAPI', 'n8n', 'Twilio'],
    details: ['Combines hospital management workflows, role based access control and an AI voice agent.', 'Built with React, TypeScript, Supabase and PostgreSQL, with VAPI, n8n and Twilio integrations.'] },
  { title: 'AI Chest X-ray Analyzer', summary: 'ResNet18 chest X-ray classifier.', tech: ['PyTorch', 'ResNet18', 'Transfer learning'],
    details: ['ResNet18 based medical image classification with a recorded test accuracy of 81.43%.', 'A learning project. It is not a clinically validated diagnostic system.'] },
  { title: 'AI Appointment Booking Agent', summary: 'Conversational appointment booking workflow.', tech: ['Langflow', 'n8n'],
    details: ['University AI lab project using Langflow and n8n to build a conversational workflow for booking appointments.', 'Covers the conversation flow and its integration with automation workflows. No accuracy figures are claimed.'] },
  { title: 'SaaS Editing Platform', summary: 'Software engineering course project, from requirements to implementation.', tech: ['SRS', 'UML', 'System design'],
    details: ['University Software Engineering project covering requirements engineering, an SRS document, UML modelling, system design and implementation of the application.', 'Presented as a course project, not a commercial product.'] },
]
export const coursework: Item[] = [
  { title: 'Parallel Image Processing Using OpenMP', summary: 'Sequential versus parallel image processing in C++.', tech: ['C++', 'OpenMP', 'OpenCV'],
    details: ['Parallel and Distributed Computing lab project. Implemented image processing operations with shared memory multithreading and compared sequential and parallel approaches.', 'Work involved partitioning the image, distributing the work across threads and processing the image data.', 'No speedup figures are reported here, since none have been measured and verified.'] },
  { title: 'Maze Solving Robotic Car Using BFS and DFS', summary: 'A physical robot that navigates a maze with graph search.', tech: ['BFS', 'DFS', 'Robotics'],
    details: ['Data Structures and Algorithms lab project. Built a physical maze navigation car and implemented Breadth First Search and Depth First Search for exploration and pathfinding.', 'Combines algorithm design with practical robotics.'] },
  { title: 'Multi Campus Enterprise Network Simulation', summary: 'Cisco Packet Tracer model of a main campus and a medical branch campus.', tech: ['Cisco Packet Tracer', 'VLAN', 'DHCP', 'RIP v2'],
    details: ['A simulation, not a real deployed network, of a university main campus and a medical branch campus.', 'Configured 11 departmental VLANs, Cisco 2911 routers, 3650 Layer 3 switches and 2960 Layer 2 switches, DHCP, RIP v2 routing, an inter campus WAN link, router subinterfaces with 802.1Q encapsulation, and a simulated external email and cloud server.', 'Tested with ping, routing tables, DHCP assignments and serial link checks. Fixed problems with serial interface modules, switch power modules, DHCP configuration and serial clock rates.'] },
  { title: 'Arduino Gesture Controlled Robotic Car', summary: 'Hand movements sent wirelessly to drive a car.', tech: ['Arduino Nano', 'ADXL335', 'NRF24L01', 'C++'],
    details: ['An ADXL335 accelerometer reads hand movement, and commands are sent over NRF24L01 wireless modules to a receiver that drives the motors through a motor driver.', 'Physical project built with an Arduino Nano and written in C++.'] },
  { title: 'DigiSpark USB Security Demonstration', summary: 'Educational demo of USB keyboard emulation risks.', tech: ['ATtiny85', 'DigiSpark', 'Windows'],
    details: ['Operating Systems lab project using an ATtiny85 based DigiSpark board for USB keyboard emulation and Windows task automation.', 'Explored browser automation and demonstrated security risks such as unauthorized command access and Wi-Fi credential exposure, as an educational awareness exercise about physical security. It is not penetration testing, and no payloads are published.'] },
]
export const additional = ['Business database design for a real shop', 'Voice controlled LED matrix', 'Timetable mobile application', 'Website for a beauty and esthetician business']
export const experience = [
  { role: 'AI Automation & Digital Marketing Intern', org: 'Innovista', when: 'Summer 2026', note: 'AI assisted workflow automation with n8n and Claude, plus AI prototypes and automation experiments.' },
  { role: 'Web Development Intern', org: 'Inostrik', when: 'Summer 2025', note: 'Full-stack web development and exposure to web security practices.' },
  { role: 'Web Development Intern', org: 'Triomatic Solutions', when: 'Summer 2024', note: 'Frontend and web development.' },
  { role: 'Cybersecurity Intern', org: 'Triomatic Solutions', when: 'Summer 2023', note: 'Learned networking, Linux tooling and packet analysis in a cybersecurity internship.' },
]
export const skills: Record<string, string[]> = {
  Programming: ['Python', 'C++', 'TypeScript', 'SQL'],
  'Machine Learning': ['PyTorch', 'TensorFlow/Keras', 'CNNs', 'Transfer learning', 'Model evaluation'],
  'Speech & NLP': ['Whisper', 'ASR evaluation', 'Multilingual NLP', 'BGE-M3', 'FAISS', 'RAG'],
  'Computer Vision': ['OpenCV', 'OpenPose', 'MediaPipe', 'ResNet18', 'Landmark based recognition'],
  Development: ['React', 'PostgreSQL', 'Supabase', 'Git'],
  Automation: ['n8n', 'VAPI', 'Twilio', 'Langflow'],
}
export const interests = ['Machine learning and computer vision', 'Multilingual speech recognition and NLP', 'Trustworthy and robust AI', 'Multilingual information retrieval', 'Model evaluation and distribution shift']
