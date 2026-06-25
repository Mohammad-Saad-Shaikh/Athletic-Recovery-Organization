export type SportKey =
  | "soccer"
  | "basketball"
  | "football"
  | "tennis"
  | "formula-1"
  | "prevention"
  | "other-medicine";

export interface Sport {
  key: SportKey;
  name: string;
  shortName: string;
  path: string;
  tagline: string;
  description: string;
  accent: "green" | "orange" | "navy";
  injuryCategories: { title: string; description: string }[];
}

export const sports: Sport[] = [
  {
    key: "soccer",
    name: "Soccer",
    shortName: "Soccer",
    path: "/soccer",
    tagline: "Field injuries, recovery & prevention",
    description:
      "Soccer athletes face high rates of lower-limb injuries. Explore evidence-based education on prevention, treatment, and return-to-play protocols.",
    accent: "green",
    injuryCategories: [
      { title: "ACL & Knee Ligament Injuries", description: "Mechanism, surgical and non-surgical pathways, and rehabilitation timelines." },
      { title: "Hamstring Strains", description: "Grading systems, eccentric strengthening, and recurrence prevention." },
      { title: "Ankle Sprains", description: "Lateral and high ankle sprains, taping, and balance retraining." },
      { title: "Concussions", description: "Heading-related risk, baseline testing, and return-to-play criteria." },
    ],
  },
  {
    key: "basketball",
    name: "Basketball",
    shortName: "Basketball",
    path: "/basketball",
    tagline: "Court injuries & joint health",
    description:
      "From ankle sprains to Achilles ruptures, basketball demands explosive movement that stresses the lower kinetic chain.",
    accent: "orange",
    injuryCategories: [
      { title: "Ankle Sprains", description: "The most common basketball injury — recovery, bracing, and prevention." },
      { title: "Patellar Tendinopathy", description: "Jumper's knee, load management, and isometric loading protocols." },
      { title: "Achilles Rupture", description: "Surgical vs conservative treatment and return-to-court timelines." },
      { title: "Finger & Hand Injuries", description: "Mallet finger, jersey finger, and ligament sprains." },
    ],
  },
  {
    key: "football",
    name: "Football",
    shortName: "Football",
    path: "/football",
    tagline: "Contact-sport medicine",
    description:
      "American football carries some of the highest impact loads in sport. Education on head, neck, and shoulder injuries is critical.",
    accent: "navy",
    injuryCategories: [
      { title: "Concussion & CTE", description: "Diagnosis, sideline assessment, and long-term considerations." },
      { title: "Shoulder Dislocations & AC Joint", description: "Mechanism, imaging, and return criteria for contact athletes." },
      { title: "Knee Injuries (ACL/MCL/Meniscus)", description: "Contact and non-contact mechanisms, rehab, and prevention." },
      { title: "Spinal & Neck Injuries", description: "Stinger syndrome, cervical strain, and emergency protocols." },
    ],
  },
  {
    key: "tennis",
    name: "Tennis",
    shortName: "Tennis",
    path: "/tennis",
    tagline: "Overuse & racquet-sport injuries",
    description:
      "Tennis is a repetitive overhead sport. Most injuries are overuse-related and respond well to load management and technique adjustments.",
    accent: "green",
    injuryCategories: [
      { title: "Lateral Epicondylitis (Tennis Elbow)", description: "Causes, eccentric strengthening, and equipment considerations." },
      { title: "Rotator Cuff Tendinopathy", description: "Scapular mechanics, serving load, and rehabilitation." },
      { title: "Stress Fractures", description: "Tibial and metatarsal stress reactions in junior and adult players." },
      { title: "Wrist Injuries", description: "ECU tendinopathy, TFCC tears, and grip-related issues." },
    ],
  },
  {
    key: "formula-1",
    name: "Formula 1",
    shortName: "F1",
    path: "/formula-1",
    tagline: "Motorsport medicine",
    description:
      "F1 drivers withstand sustained 5G forces and require exceptional neck strength, cardiovascular fitness, and rapid trauma response.",
    accent: "orange",
    injuryCategories: [
      { title: "Cervical Spine Loading", description: "Neck conditioning, HANS device, and chronic strain in drivers." },
      { title: "Crash Trauma", description: "Medical response, FIA protocols, and the role of the halo device." },
      { title: "Heat Stress & Dehydration", description: "Cockpit temperatures, hydration strategy, and cooling vests." },
      { title: "Lower-Limb Injuries", description: "Foot, ankle and tibia injuries from pedal impact in collisions." },
    ],
  },
  {
    key: "prevention",
    name: "Prevention",
    shortName: "Prevention",
    path: "/prevention",
    tagline: "Reduce risk before it happens",
    description:
      "Evidence-based programs that reduce injury risk across all sports — warm-ups, strength, mobility, and load monitoring.",
    accent: "green",
    injuryCategories: [
      { title: "Neuromuscular Warm-Ups", description: "FIFA 11+, Nordic hamstring, and dynamic priming routines." },
      { title: "Strength & Conditioning", description: "Progressive overload, periodization, and youth athlete considerations." },
      { title: "Load Management", description: "Acute:chronic workload ratios and training monotony." },
      { title: "Recovery & Sleep", description: "Sleep hygiene, nutrition, and active recovery modalities." },
    ],
  },
  {
    key: "other-medicine",
    name: "Other Medicine",
    shortName: "Other Medicine",
    path: "/other-medicine",
    tagline: "Broader sports medicine topics",
    description:
      "Topics that cross sports — nutrition, mental health, female athlete health, youth development, and emerging research.",
    accent: "navy",
    injuryCategories: [
      { title: "Sports Nutrition", description: "Fueling for performance, recovery, and injury healing." },
      { title: "Mental Health in Sport", description: "Anxiety, burnout, and post-injury psychology." },
      { title: "Female Athlete Health", description: "RED-S, menstrual cycle, and bone health." },
      { title: "Youth Athletes", description: "Growth-plate considerations and early specialization." },
    ],
  },
];

export const getSport = (key: SportKey) => sports.find((s) => s.key === key)!;
