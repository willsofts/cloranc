const emoji_lists = [
  {
    group: "smileys_people",
    title: ":grinning:",
    icon: "_1f600"
  },
  {
    group: "smileys_people",
    title: ":smiley:",
    icon: "_1f603"
  },
  {
    group: "smileys_people",
    title: ":smile:",
    icon: "_1f604"
  },
  {
    group: "smileys_people",
    title: ":grin:",
    icon: "_1f601"
  },
  {
    group: "smileys_people",
    title: ":laughing:",
    icon: "_1f606"
  },
  {
    group: "smileys_people",
    title: ":sweat_smile:",
    icon: "_1f605"
  },
  {
    group: "smileys_people",
    title: ":joy:",
    icon: "_1f602"
  },
  {
    group: "smileys_people",
    title: ":rofl:",
    icon: "_1f923"
  },
  {
    group: "smileys_people",
    title: ":relaxed:",
    icon: "_263a"
  },
  {
    group: "smileys_people",
    title: ":blush:",
    icon: "_1f60a"
  },
  {
    group: "smileys_people",
    title: ":innocent:",
    icon: "_1f607"
  },
  {
    group: "smileys_people",
    title: ":slight_smile:",
    icon: "_1f642"
  },
  {
    group: "smileys_people",
    title: ":upside_down:",
    icon: "_1f643"
  },
  {
    group: "smileys_people",
    title: ":wink:",
    icon: "_1f609"
  },
  {
    group: "smileys_people",
    title: ":relieved:",
    icon: "_1f60c"
  },
  {
    group: "smileys_people",
    title: ":heart_eyes:",
    icon: "_1f60d"
  },
  {
    group: "smileys_people",
    title: ":kissing_heart:",
    icon: "_1f618"
  },
  {
    group: "smileys_people",
    title: ":smiling_face_with_3_hearts:",
    icon: "_1f970"
  },
  {
    group: "smileys_people",
    title: ":kissing:",
    icon: "_1f617"
  },
  {
    group: "smileys_people",
    title: ":kissing_smiling_eyes:",
    icon: "_1f619"
  },
  {
    group: "smileys_people",
    title: ":kissing_closed_eyes:",
    icon: "_1f61a"
  },
  {
    group: "smileys_people",
    title: ":yum:",
    icon: "_1f60b"
  },
  {
    group: "smileys_people",
    title: ":stuck_out_tongue:",
    icon: "_1f61b"
  },
  {
    group: "smileys_people",
    title: ":stuck_out_tongue_closed_eyes:",
    icon: "_1f61d"
  },
  {
    group: "smileys_people",
    title: ":stuck_out_tongue_winking_eye:",
    icon: "_1f61c"
  },
  {
    group: "smileys_people",
    title: ":zany_face:",
    icon: "_1f92a"
  },
  {
    group: "smileys_people",
    title: ":face_with_raised_eyebrow:",
    icon: "_1f928"
  },
  {
    group: "smileys_people",
    title: ":face_with_monocle:",
    icon: "_1f9d0"
  },
  {
    group: "smileys_people",
    title: ":nerd:",
    icon: "_1f913"
  },
  {
    group: "smileys_people",
    title: ":sunglasses:",
    icon: "_1f60e"
  },
  {
    group: "smileys_people",
    title: ":star_struck:",
    icon: "_1f929"
  },
  {
    group: "smileys_people",
    title: ":partying_face:",
    icon: "_1f973"
  },
  {
    group: "smileys_people",
    title: ":smirk:",
    icon: "_1f60f"
  },
  {
    group: "smileys_people",
    title: ":unamused:",
    icon: "_1f612"
  },
  {
    group: "smileys_people",
    title: ":disappointed:",
    icon: "_1f61e"
  },
  {
    group: "smileys_people",
    title: ":pensive:",
    icon: "_1f614"
  },
  {
    group: "smileys_people",
    title: ":worried:",
    icon: "_1f61f"
  },
  {
    group: "smileys_people",
    title: ":confused:",
    icon: "_1f615"
  },
  {
    group: "smileys_people",
    title: ":slight_frown:",
    icon: "_1f641"
  },
  {
    group: "smileys_people",
    title: ":frowning2:",
    icon: "_2639"
  },
  {
    group: "smileys_people",
    title: ":persevere:",
    icon: "_1f623"
  },
  {
    group: "smileys_people",
    title: ":confounded:",
    icon: "_1f616"
  },
  {
    group: "smileys_people",
    title: ":tired_face:",
    icon: "_1f62b"
  },
  {
    group: "smileys_people",
    title: ":weary:",
    icon: "_1f629"
  },
  {
    group: "smileys_people",
    title: ":cry:",
    icon: "_1f622"
  },
  {
    group: "smileys_people",
    title: ":sob:",
    icon: "_1f62d"
  },
  {
    group: "smileys_people",
    title: ":triumph:",
    icon: "_1f624"
  },
  {
    group: "smileys_people",
    title: ":angry:",
    icon: "_1f620"
  },
  {
    group: "smileys_people",
    title: ":rage:",
    icon: "_1f621"
  },
  {
    group: "smileys_people",
    title: ":face_with_symbols_over_mouth:",
    icon: "_1f92c"
  },
  {
    group: "smileys_people",
    title: ":exploding_head:",
    icon: "_1f92f"
  },
  {
    group: "smileys_people",
    title: ":flushed:",
    icon: "_1f633"
  },
  {
    group: "smileys_people",
    title: ":scream:",
    icon: "_1f631"
  },
  {
    group: "smileys_people",
    title: ":fearful:",
    icon: "_1f628"
  },
  {
    group: "smileys_people",
    title: ":cold_sweat:",
    icon: "_1f630"
  },
  {
    group: "smileys_people",
    title: ":hot_face:",
    icon: "_1f975"
  },
  {
    group: "smileys_people",
    title: ":cold_face:",
    icon: "_1f976"
  },
  {
    group: "smileys_people",
    title: ":pleading_face:",
    icon: "_1f97a"
  },
  {
    group: "smileys_people",
    title: ":disappointed_relieved:",
    icon: "_1f625"
  },
  {
    group: "smileys_people",
    title: ":sweat:",
    icon: "_1f613"
  },
  {
    group: "smileys_people",
    title: ":hugging:",
    icon: "_1f917"
  },
  {
    group: "smileys_people",
    title: ":thinking:",
    icon: "_1f914"
  },
  {
    group: "smileys_people",
    title: ":face_with_hand_over_mouth:",
    icon: "_1f92d"
  },
  {
    group: "smileys_people",
    title: ":shushing_face:",
    icon: "_1f92b"
  },
  {
    group: "smileys_people",
    title: ":lying_face:",
    icon: "_1f925"
  },
  {
    group: "smileys_people",
    title: ":no_mouth:",
    icon: "_1f636"
  },
  {
    group: "smileys_people",
    title: ":neutral_face:",
    icon: "_1f610"
  },
  {
    group: "smileys_people",
    title: ":expressionless:",
    icon: "_1f611"
  },
  {
    group: "smileys_people",
    title: ":grimacing:",
    icon: "_1f62c"
  },
  {
    group: "smileys_people",
    title: ":rolling_eyes:",
    icon: "_1f644"
  },
  {
    group: "smileys_people",
    title: ":hushed:",
    icon: "_1f62f"
  },
  {
    group: "smileys_people",
    title: ":frowning:",
    icon: "_1f626"
  },
  {
    group: "smileys_people",
    title: ":anguished:",
    icon: "_1f627"
  },
  {
    group: "smileys_people",
    title: ":open_mouth:",
    icon: "_1f62e"
  },
  {
    group: "smileys_people",
    title: ":astonished:",
    icon: "_1f632"
  },
  {
    group: "smileys_people",
    title: ":sleeping:",
    icon: "_1f634"
  },
  {
    group: "smileys_people",
    title: ":drooling_face:",
    icon: "_1f924"
  },
  {
    group: "smileys_people",
    title: ":sleepy:",
    icon: "_1f62a"
  },
  {
    group: "smileys_people",
    title: ":dizzy_face:",
    icon: "_1f635"
  },
  {
    group: "smileys_people",
    title: ":zipper_mouth:",
    icon: "_1f910"
  },
  {
    group: "smileys_people",
    title: ":woozy_face:",
    icon: "_1f974"
  },
  {
    group: "smileys_people",
    title: ":nauseated_face:",
    icon: "_1f922"
  },
  {
    group: "smileys_people",
    title: ":face_vomiting:",
    icon: "_1f92e"
  },
  {
    group: "smileys_people",
    title: ":sneezing_face:",
    icon: "_1f927"
  },
  {
    group: "smileys_people",
    title: ":mask:",
    icon: "_1f637"
  },
  {
    group: "smileys_people",
    title: ":thermometer_face:",
    icon: "_1f912"
  },
  {
    group: "smileys_people",
    title: ":head_bandage:",
    icon: "_1f915"
  },
  {
    group: "smileys_people",
    title: ":money_mouth:",
    icon: "_1f911"
  },
  {
    group: "smileys_people",
    title: ":cowboy:",
    icon: "_1f920"
  },
  {
    group: "smileys_people",
    title: ":smiling_imp:",
    icon: "_1f608"
  },
  {
    group: "smileys_people",
    title: ":imp:",
    icon: "_1f47f"
  },
  {
    group: "smileys_people",
    title: ":japanese_ogre:",
    icon: "_1f479"
  },
  {
    group: "smileys_people",
    title: ":japanese_goblin:",
    icon: "_1f47a"
  },
  {
    group: "smileys_people",
    title: ":clown:",
    icon: "_1f921"
  },
  {
    group: "smileys_people",
    title: ":poop:",
    icon: "_1f4a9"
  },
  {
    group: "smileys_people",
    title: ":ghost:",
    icon: "_1f47b"
  },
  {
    group: "smileys_people",
    title: ":skull:",
    icon: "_1f480"
  },
  {
    group: "smileys_people",
    title: ":skull_crossbones:",
    icon: "_2620"
  },
  {
    group: "smileys_people",
    title: ":alien:",
    icon: "_1f47d"
  },
  {
    group: "smileys_people",
    title: ":space_invader:",
    icon: "_1f47e"
  },
  {
    group: "smileys_people",
    title: ":robot:",
    icon: "_1f916"
  },
  {
    group: "smileys_people",
    title: ":jack_o_lantern:",
    icon: "_1f383"
  },
  {
    group: "smileys_people",
    title: ":smiley_cat:",
    icon: "_1f63a"
  },
  {
    group: "smileys_people",
    title: ":smile_cat:",
    icon: "_1f638"
  },
  {
    group: "smileys_people",
    title: ":joy_cat:",
    icon: "_1f639"
  },
  {
    group: "smileys_people",
    title: ":heart_eyes_cat:",
    icon: "_1f63b"
  },
  {
    group: "smileys_people",
    title: ":smirk_cat:",
    icon: "_1f63c"
  },
  {
    group: "smileys_people",
    title: ":kissing_cat:",
    icon: "_1f63d"
  },
  {
    group: "smileys_people",
    title: ":scream_cat:",
    icon: "_1f640"
  },
  {
    group: "smileys_people",
    title: ":crying_cat_face:",
    icon: "_1f63f"
  },
  {
    group: "smileys_people",
    title: ":pouting_cat:",
    icon: "_1f63e"
  },
  {
    group: "smileys_people",
    title: ":palms_up_together_tone3:",
    icon: "_1f932-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":open_hands_tone3:",
    icon: "_1f450-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":raised_hands_tone3:",
    icon: "_1f64c-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":clap_tone3:",
    icon: "_1f44f-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":handshake:",
    icon: "_1f91d"
  },
  {
    group: "smileys_people",
    title: ":thumbsup_tone3:",
    icon: "_1f44d-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":thumbsdown_tone3:",
    icon: "_1f44e-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":punch_tone3:",
    icon: "_1f44a-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":fist_tone3:",
    icon: "_270a-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":left_facing_fist_tone3:",
    icon: "_1f91b-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":right_facing_fist_tone3:",
    icon: "_1f91c-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":fingers_crossed_tone3:",
    icon: "_1f91e-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":v_tone3:",
    icon: "_270c-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":love_you_gesture_tone3:",
    icon: "_1f91f-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":metal_tone3:",
    icon: "_1f918-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":ok_hand_tone3:",
    icon: "_1f44c-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":point_left_tone3:",
    icon: "_1f448-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":point_right_tone3:",
    icon: "_1f449-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":point_up_2_tone3:",
    icon: "_1f446-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":point_down_tone3:",
    icon: "_1f447-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":point_up_tone3:",
    icon: "_261d-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":raised_hand_tone3:",
    icon: "_270b-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":raised_back_of_hand_tone3:",
    icon: "_1f91a-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":hand_splayed_tone3:",
    icon: "_1f590-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":vulcan_tone3:",
    icon: "_1f596-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":wave_tone3:",
    icon: "_1f44b-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":call_me_tone3:",
    icon: "_1f919-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":muscle_tone3:",
    icon: "_1f4aa-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":leg_tone3:",
    icon: "_1f9b5-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":foot_tone3:",
    icon: "_1f9b6-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":middle_finger_tone3:",
    icon: "_1f595-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":writing_hand_tone3:",
    icon: "_270d-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":pray_tone3:",
    icon: "_1f64f-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":ring:",
    icon: "_1f48d"
  },
  {
    group: "smileys_people",
    title: ":lipstick:",
    icon: "_1f484"
  },
  {
    group: "smileys_people",
    title: ":kiss:",
    icon: "_1f48b"
  },
  {
    group: "smileys_people",
    title: ":lips:",
    icon: "_1f444"
  },
  {
    group: "smileys_people",
    title: ":tongue:",
    icon: "_1f445"
  },
  {
    group: "smileys_people",
    title: ":ear_tone3:",
    icon: "_1f442-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":nose_tone3:",
    icon: "_1f443-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":footprints:",
    icon: "_1f463"
  },
  {
    group: "smileys_people",
    title: ":eye:",
    icon: "_1f441"
  },
  {
    group: "smileys_people",
    title: ":eyes:",
    icon: "_1f440"
  },
  {
    group: "smileys_people",
    title: ":brain:",
    icon: "_1f9e0"
  },
  {
    group: "smileys_people",
    title: ":bone:",
    icon: "_1f9b4"
  },
  {
    group: "smileys_people",
    title: ":tooth:",
    icon: "_1f9b7"
  },
  {
    group: "smileys_people",
    title: ":speaking_head:",
    icon: "_1f5e3"
  },
  {
    group: "smileys_people",
    title: ":bust_in_silhouette:",
    icon: "_1f464"
  },
  {
    group: "smileys_people",
    title: ":busts_in_silhouette:",
    icon: "_1f465"
  },
  {
    group: "smileys_people",
    title: ":baby_tone3:",
    icon: "_1f476-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":girl_tone3:",
    icon: "_1f467-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":child_tone3:",
    icon: "_1f9d2-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":boy_tone3:",
    icon: "_1f466-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_tone3:",
    icon: "_1f469-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":adult_tone3:",
    icon: "_1f9d1-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":man_tone3:",
    icon: "_1f468-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":blond_haired_person_tone3:",
    icon: "_1f471-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":blond-haired_woman_tone3:",
    icon: "_1f471-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":blond-haired_man_tone3:",
    icon: "_1f471-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":woman_red_haired_tone3:",
    icon: "_1f469-1f3fd-1f9b0"
  },
  {
    group: "smileys_people",
    title: ":man_red_haired_tone3:",
    icon: "_1f468-1f3fd-1f9b0"
  },
  {
    group: "smileys_people",
    title: ":woman_curly_haired_tone3:",
    icon: "_1f469-1f3fd-1f9b1"
  },
  {
    group: "smileys_people",
    title: ":man_curly_haired_tone3:",
    icon: "_1f468-1f3fd-1f9b1"
  },
  {
    group: "smileys_people",
    title: ":woman_white_haired_tone3:",
    icon: "_1f469-1f3fd-1f9b3"
  },
  {
    group: "smileys_people",
    title: ":man_white_haired_tone3:",
    icon: "_1f468-1f3fd-1f9b3"
  },
  {
    group: "smileys_people",
    title: ":woman_bald_tone3:",
    icon: "_1f469-1f3fd-1f9b2"
  },
  {
    group: "smileys_people",
    title: ":man_bald_tone3:",
    icon: "_1f468-1f3fd-1f9b2"
  },
  {
    group: "smileys_people",
    title: ":bearded_person_tone3:",
    icon: "_1f9d4-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":older_woman_tone3:",
    icon: "_1f475-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":older_adult_tone3:",
    icon: "_1f9d3-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":older_man_tone3:",
    icon: "_1f474-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":man_with_chinese_cap_tone3:",
    icon: "_1f472-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":person_wearing_turban_tone3:",
    icon: "_1f473-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_wearing_turban_tone3:",
    icon: "_1f473-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_wearing_turban_tone3:",
    icon: "_1f473-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":woman_with_headscarf_tone3:",
    icon: "_1f9d5-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":police_officer_tone3:",
    icon: "_1f46e-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_police_officer_tone3:",
    icon: "_1f46e-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_police_officer_tone3:",
    icon: "_1f46e-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":construction_worker_tone3:",
    icon: "_1f477-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_construction_worker_tone3:",
    icon: "_1f477-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_construction_worker_tone3:",
    icon: "_1f477-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":guard_tone3:",
    icon: "_1f482-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_guard_tone3:",
    icon: "_1f482-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_guard_tone3:",
    icon: "_1f482-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":detective_tone3:",
    icon: "_1f575-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_detective_tone3:",
    icon: "_1f575-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_detective_tone3:",
    icon: "_1f575-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":woman_health_worker_tone3:",
    icon: "_1f469-1f3fd-2695"
  },
  {
    group: "smileys_people",
    title: ":man_health_worker_tone3:",
    icon: "_1f468-1f3fd-2695"
  },
  {
    group: "smileys_people",
    title: ":woman_farmer_tone3:",
    icon: "_1f469-1f3fd-1f33e"
  },
  {
    group: "smileys_people",
    title: ":man_farmer_tone3:",
    icon: "_1f468-1f3fd-1f33e"
  },
  {
    group: "smileys_people",
    title: ":woman_cook_tone3:",
    icon: "_1f469-1f3fd-1f373"
  },
  {
    group: "smileys_people",
    title: ":man_cook_tone3:",
    icon: "_1f468-1f3fd-1f373"
  },
  {
    group: "smileys_people",
    title: ":woman_student_tone3:",
    icon: "_1f469-1f3fd-1f393"
  },
  {
    group: "smileys_people",
    title: ":man_student_tone3:",
    icon: "_1f468-1f3fd-1f393"
  },
  {
    group: "smileys_people",
    title: ":woman_singer_tone3:",
    icon: "_1f469-1f3fd-1f3a4"
  },
  {
    group: "smileys_people",
    title: ":man_singer_tone3:",
    icon: "_1f468-1f3fd-1f3a4"
  },
  {
    group: "smileys_people",
    title: ":woman_teacher_tone3:",
    icon: "_1f469-1f3fd-1f3eb"
  },
  {
    group: "smileys_people",
    title: ":man_teacher_tone3:",
    icon: "_1f468-1f3fd-1f3eb"
  },
  {
    group: "smileys_people",
    title: ":woman_factory_worker_tone3:",
    icon: "_1f469-1f3fd-1f3ed"
  },
  {
    group: "smileys_people",
    title: ":man_factory_worker_tone3:",
    icon: "_1f468-1f3fd-1f3ed"
  },
  {
    group: "smileys_people",
    title: ":woman_technologist_tone3:",
    icon: "_1f469-1f3fd-1f4bb"
  },
  {
    group: "smileys_people",
    title: ":man_technologist_tone3:",
    icon: "_1f468-1f3fd-1f4bb"
  },
  {
    group: "smileys_people",
    title: ":woman_office_worker_tone3:",
    icon: "_1f469-1f3fd-1f4bc"
  },
  {
    group: "smileys_people",
    title: ":man_office_worker_tone3:",
    icon: "_1f468-1f3fd-1f4bc"
  },
  {
    group: "smileys_people",
    title: ":woman_mechanic_tone3:",
    icon: "_1f469-1f3fd-1f527"
  },
  {
    group: "smileys_people",
    title: ":man_mechanic_tone3:",
    icon: "_1f468-1f3fd-1f527"
  },
  {
    group: "smileys_people",
    title: ":woman_scientist_tone3:",
    icon: "_1f469-1f3fd-1f52c"
  },
  {
    group: "smileys_people",
    title: ":man_scientist_tone3:",
    icon: "_1f468-1f3fd-1f52c"
  },
  {
    group: "smileys_people",
    title: ":woman_artist_tone3:",
    icon: "_1f469-1f3fd-1f3a8"
  },
  {
    group: "smileys_people",
    title: ":man_artist_tone3:",
    icon: "_1f468-1f3fd-1f3a8"
  },
  {
    group: "smileys_people",
    title: ":woman_firefighter_tone3:",
    icon: "_1f469-1f3fd-1f692"
  },
  {
    group: "smileys_people",
    title: ":man_firefighter_tone3:",
    icon: "_1f468-1f3fd-1f692"
  },
  {
    group: "smileys_people",
    title: ":woman_pilot_tone3:",
    icon: "_1f469-1f3fd-2708"
  },
  {
    group: "smileys_people",
    title: ":man_pilot_tone3:",
    icon: "_1f468-1f3fd-2708"
  },
  {
    group: "smileys_people",
    title: ":woman_astronaut_tone3:",
    icon: "_1f469-1f3fd-1f680"
  },
  {
    group: "smileys_people",
    title: ":man_astronaut_tone3:",
    icon: "_1f468-1f3fd-1f680"
  },
  {
    group: "smileys_people",
    title: ":woman_judge_tone3:",
    icon: "_1f469-1f3fd-2696"
  },
  {
    group: "smileys_people",
    title: ":man_judge_tone3:",
    icon: "_1f468-1f3fd-2696"
  },
  {
    group: "smileys_people",
    title: ":bride_with_veil_tone3:",
    icon: "_1f470-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":man_in_tuxedo_tone3:",
    icon: "_1f935-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":princess_tone3:",
    icon: "_1f478-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":prince_tone3:",
    icon: "_1f934-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":mrs_claus_tone3:",
    icon: "_1f936-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":santa_tone3:",
    icon: "_1f385-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":superhero_tone3:",
    icon: "_1f9b8-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_superhero_tone3:",
    icon: "_1f9b8-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_superhero_tone3:",
    icon: "_1f9b8-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":supervillain_tone3:",
    icon: "_1f9b9-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_supervillain_tone3:",
    icon: "_1f9b9-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_supervillain_tone3:",
    icon: "_1f9b9-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":mage_tone3:",
    icon: "_1f9d9-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_mage_tone3:",
    icon: "_1f9d9-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_mage_tone3:",
    icon: "_1f9d9-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":elf_tone3:",
    icon: "_1f9dd-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_elf_tone3:",
    icon: "_1f9dd-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_elf_tone3:",
    icon: "_1f9dd-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":vampire_tone3:",
    icon: "_1f9db-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_vampire_tone3:",
    icon: "_1f9db-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_vampire_tone3:",
    icon: "_1f9db-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":zombie:",
    icon: "_1f9df"
  },
  {
    group: "smileys_people",
    title: ":woman_zombie:",
    icon: "_1f9df-2640"
  },
  {
    group: "smileys_people",
    title: ":man_zombie:",
    icon: "_1f9df-2642"
  },
  {
    group: "smileys_people",
    title: ":genie:",
    icon: "_1f9de"
  },
  {
    group: "smileys_people",
    title: ":woman_genie:",
    icon: "_1f9de-2640"
  },
  {
    group: "smileys_people",
    title: ":man_genie:",
    icon: "_1f9de-2642"
  },
  {
    group: "smileys_people",
    title: ":merperson_tone3:",
    icon: "_1f9dc-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":mermaid_tone3:",
    icon: "_1f9dc-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":merman_tone3:",
    icon: "_1f9dc-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":fairy_tone3:",
    icon: "_1f9da-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_fairy_tone3:",
    icon: "_1f9da-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_fairy_tone3:",
    icon: "_1f9da-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":angel_tone3:",
    icon: "_1f47c-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":pregnant_woman_tone3:",
    icon: "_1f930-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":breast_feeding_tone3:",
    icon: "_1f931-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":person_bowing_tone3:",
    icon: "_1f647-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_bowing_tone3:",
    icon: "_1f647-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_bowing_tone3:",
    icon: "_1f647-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_tipping_hand_tone3:",
    icon: "_1f481-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_tipping_hand_tone3:",
    icon: "_1f481-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_tipping_hand_tone3:",
    icon: "_1f481-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_gesturing_no_tone3:",
    icon: "_1f645-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_gesturing_no_tone3:",
    icon: "_1f645-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_gesturing_no_tone3:",
    icon: "_1f645-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_gesturing_ok_tone3:",
    icon: "_1f646-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_gesturing_ok_tone3:",
    icon: "_1f646-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_gesturing_ok_tone3:",
    icon: "_1f646-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_raising_hand_tone3:",
    icon: "_1f64b-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_raising_hand_tone3:",
    icon: "_1f64b-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_raising_hand_tone3:",
    icon: "_1f64b-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_facepalming_tone3:",
    icon: "_1f926-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_facepalming_tone3:",
    icon: "_1f926-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_facepalming_tone3:",
    icon: "_1f926-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_shrugging_tone3:",
    icon: "_1f937-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_shrugging_tone3:",
    icon: "_1f937-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_shrugging_tone3:",
    icon: "_1f937-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_pouting_tone3:",
    icon: "_1f64e-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_pouting_tone3:",
    icon: "_1f64e-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_pouting_tone3:",
    icon: "_1f64e-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_frowning_tone3:",
    icon: "_1f64d-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_frowning_tone3:",
    icon: "_1f64d-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_frowning_tone3:",
    icon: "_1f64d-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_getting_haircut_tone3:",
    icon: "_1f487-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_getting_haircut_tone3:",
    icon: "_1f487-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_getting_haircut_tone3:",
    icon: "_1f487-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_getting_massage_tone3:",
    icon: "_1f486-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_getting_face_massage_tone3:",
    icon: "_1f486-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_getting_face_massage_tone3:",
    icon: "_1f486-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_in_steamy_room_tone3:",
    icon: "_1f9d6-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_in_steamy_room_tone3:",
    icon: "_1f9d6-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_in_steamy_room_tone3:",
    icon: "_1f9d6-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":nail_care_tone3:",
    icon: "_1f485-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":selfie_tone3:",
    icon: "_1f933-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":dancer_tone3:",
    icon: "_1f483-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":man_dancing_tone3:",
    icon: "_1f57a-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":people_with_bunny_ears_partying:",
    icon: "_1f46f"
  },
  {
    group: "smileys_people",
    title: ":women_with_bunny_ears_partying:",
    icon: "_1f46f-2640"
  },
  {
    group: "smileys_people",
    title: ":men_with_bunny_ears_partying:",
    icon: "_1f46f-2642"
  },
  {
    group: "smileys_people",
    title: ":levitate_tone3:",
    icon: "_1f574-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":person_walking_tone3:",
    icon: "_1f6b6-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_walking_tone3:",
    icon: "_1f6b6-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_walking_tone3:",
    icon: "_1f6b6-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":person_running_tone3:",
    icon: "_1f3c3-1f3fd"
  },
  {
    group: "smileys_people",
    title: ":woman_running_tone3:",
    icon: "_1f3c3-1f3fd-2640"
  },
  {
    group: "smileys_people",
    title: ":man_running_tone3:",
    icon: "_1f3c3-1f3fd-2642"
  },
  {
    group: "smileys_people",
    title: ":couple:",
    icon: "_1f46b"
  },
  {
    group: "smileys_people",
    title: ":two_women_holding_hands:",
    icon: "_1f46d"
  },
  {
    group: "smileys_people",
    title: ":two_men_holding_hands:",
    icon: "_1f46c"
  },
  {
    group: "smileys_people",
    title: ":couple_with_heart:",
    icon: "_1f491"
  },
  {
    group: "smileys_people",
    title: ":couple_with_heart_woman_man:",
    icon: "_1f469-2764-1f468"
  },
  {
    group: "smileys_people",
    title: ":couple_ww:",
    icon: "_1f469-2764-1f469"
  },
  {
    group: "smileys_people",
    title: ":couple_mm:",
    icon: "_1f468-2764-1f468"
  },
  {
    group: "smileys_people",
    title: ":couplekiss:",
    icon: "_1f48f"
  },
  {
    group: "smileys_people",
    title: ":kiss_woman_man:",
    icon: "_1f469-2764-1f48b-1f468"
  },
  {
    group: "smileys_people",
    title: ":kiss_ww:",
    icon: "_1f469-2764-1f48b-1f469"
  },
  {
    group: "smileys_people",
    title: ":kiss_mm:",
    icon: "_1f468-2764-1f48b-1f468"
  },
  {
    group: "smileys_people",
    title: ":family:",
    icon: "_1f46a"
  },
  {
    group: "smileys_people",
    title: ":family_man_woman_boy:",
    icon: "_1f468-1f469-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_mwg:",
    icon: "_1f468-1f469-1f467"
  },
  {
    group: "smileys_people",
    title: ":family_mwgb:",
    icon: "_1f468-1f469-1f467-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_mwbb:",
    icon: "_1f468-1f469-1f466-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_mwgg:",
    icon: "_1f468-1f469-1f467-1f467"
  },
  {
    group: "smileys_people",
    title: ":family_wwb:",
    icon: "_1f469-1f469-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_wwg:",
    icon: "_1f469-1f469-1f467"
  },
  {
    group: "smileys_people",
    title: ":family_wwgb:",
    icon: "_1f469-1f469-1f467-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_wwbb:",
    icon: "_1f469-1f469-1f466-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_wwgg:",
    icon: "_1f469-1f469-1f467-1f467"
  },
  {
    group: "smileys_people",
    title: ":family_mmb:",
    icon: "_1f468-1f468-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_mmg:",
    icon: "_1f468-1f468-1f467"
  },
  {
    group: "smileys_people",
    title: ":family_mmgb:",
    icon: "_1f468-1f468-1f467-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_mmbb:",
    icon: "_1f468-1f468-1f466-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_mmgg:",
    icon: "_1f468-1f468-1f467-1f467"
  },
  {
    group: "smileys_people",
    title: ":family_woman_boy:",
    icon: "_1f469-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_woman_girl:",
    icon: "_1f469-1f467"
  },
  {
    group: "smileys_people",
    title: ":family_woman_girl_boy:",
    icon: "_1f469-1f467-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_woman_boy_boy:",
    icon: "_1f469-1f466-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_woman_girl_girl:",
    icon: "_1f469-1f467-1f467"
  },
  {
    group: "smileys_people",
    title: ":family_man_boy:",
    icon: "_1f468-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_man_girl:",
    icon: "_1f468-1f467"
  },
  {
    group: "smileys_people",
    title: ":family_man_girl_boy:",
    icon: "_1f468-1f467-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_man_boy_boy:",
    icon: "_1f468-1f466-1f466"
  },
  {
    group: "smileys_people",
    title: ":family_man_girl_girl:",
    icon: "_1f468-1f467-1f467"
  },
  {
    group: "smileys_people",
    title: ":coat:",
    icon: "_1f9e5"
  },
  {
    group: "smileys_people",
    title: ":womans_clothes:",
    icon: "_1f45a"
  },
  {
    group: "smileys_people",
    title: ":shirt:",
    icon: "_1f455"
  },
  {
    group: "smileys_people",
    title: ":jeans:",
    icon: "_1f456"
  },
  {
    group: "smileys_people",
    title: ":necktie:",
    icon: "_1f454"
  },
  {
    group: "smileys_people",
    title: ":dress:",
    icon: "_1f457"
  },
  {
    group: "smileys_people",
    title: ":bikini:",
    icon: "_1f459"
  },
  {
    group: "smileys_people",
    title: ":kimono:",
    icon: "_1f458"
  },
  {
    group: "smileys_people",
    title: ":lab_coat:",
    icon: "_1f97c"
  },
  {
    group: "smileys_people",
    title: ":high_heel:",
    icon: "_1f460"
  },
  {
    group: "smileys_people",
    title: ":sandal:",
    icon: "_1f461"
  },
  {
    group: "smileys_people",
    title: ":boot:",
    icon: "_1f462"
  },
  {
    group: "smileys_people",
    title: ":mans_shoe:",
    icon: "_1f45e"
  },
  {
    group: "smileys_people",
    title: ":athletic_shoe:",
    icon: "_1f45f"
  },
  {
    group: "smileys_people",
    title: ":hiking_boot:",
    icon: "_1f97e"
  },
  {
    group: "smileys_people",
    title: ":womans_flat_shoe:",
    icon: "_1f97f"
  },
  {
    group: "smileys_people",
    title: ":socks:",
    icon: "_1f9e6"
  },
  {
    group: "smileys_people",
    title: ":gloves:",
    icon: "_1f9e4"
  },
  {
    group: "smileys_people",
    title: ":scarf:",
    icon: "_1f9e3"
  },
  {
    group: "smileys_people",
    title: ":tophat:",
    icon: "_1f3a9"
  },
  {
    group: "smileys_people",
    title: ":billed_cap:",
    icon: "_1f9e2"
  },
  {
    group: "smileys_people",
    title: ":womans_hat:",
    icon: "_1f452"
  },
  {
    group: "smileys_people",
    title: ":mortar_board:",
    icon: "_1f393"
  },
  {
    group: "smileys_people",
    title: ":helmet_with_cross:",
    icon: "_26d1"
  },
  {
    group: "smileys_people",
    title: ":crown:",
    icon: "_1f451"
  },
  {
    group: "smileys_people",
    title: ":pouch:",
    icon: "_1f45d"
  },
  {
    group: "smileys_people",
    title: ":purse:",
    icon: "_1f45b"
  },
  {
    group: "smileys_people",
    title: ":handbag:",
    icon: "_1f45c"
  },
  {
    group: "smileys_people",
    title: ":briefcase:",
    icon: "_1f4bc"
  },
  {
    group: "smileys_people",
    title: ":school_satchel:",
    icon: "_1f392"
  },
  {
    group: "smileys_people",
    title: ":eyeglasses:",
    icon: "_1f453"
  },
  {
    group: "smileys_people",
    title: ":dark_sunglasses:",
    icon: "_1f576"
  },
  {
    group: "smileys_people",
    title: ":goggles:",
    icon: "_1f97d"
  },
  {
    group: "smileys_people",
    title: ":closed_umbrella:",
    icon: "_1f302"
  },
  {
    group: "smileys_people",
    title: ":red_haired:",
    icon: "_1f9b0"
  },
  {
    group: "smileys_people",
    title: ":curly_haired:",
    icon: "_1f9b1"
  },
  {
    group: "smileys_people",
    title: ":white_haired:",
    icon: "_1f9b3"
  },
  {
    group: "smileys_people",
    title: ":bald:",
    icon: "_1f9b2"
  },
  {
    group: "animals_nature",
    title: ":dog:",
    icon: "_1f436"
  },
  {
    group: "animals_nature",
    title: ":cat:",
    icon: "_1f431"
  },
  {
    group: "animals_nature",
    title: ":mouse:",
    icon: "_1f42d"
  },
  {
    group: "animals_nature",
    title: ":hamster:",
    icon: "_1f439"
  },
  {
    group: "animals_nature",
    title: ":rabbit:",
    icon: "_1f430"
  },
  {
    group: "animals_nature",
    title: ":fox:",
    icon: "_1f98a"
  },
  {
    group: "animals_nature",
    title: ":raccoon:",
    icon: "_1f99d"
  },
  {
    group: "animals_nature",
    title: ":bear:",
    icon: "_1f43b"
  },
  {
    group: "animals_nature",
    title: ":panda_face:",
    icon: "_1f43c"
  },
  {
    group: "animals_nature",
    title: ":kangaroo:",
    icon: "_1f998"
  },
  {
    group: "animals_nature",
    title: ":badger:",
    icon: "_1f9a1"
  },
  {
    group: "animals_nature",
    title: ":koala:",
    icon: "_1f428"
  },
  {
    group: "animals_nature",
    title: ":tiger:",
    icon: "_1f42f"
  },
  {
    group: "animals_nature",
    title: ":lion_face:",
    icon: "_1f981"
  },
  {
    group: "animals_nature",
    title: ":cow:",
    icon: "_1f42e"
  },
  {
    group: "animals_nature",
    title: ":pig:",
    icon: "_1f437"
  },
  {
    group: "animals_nature",
    title: ":pig_nose:",
    icon: "_1f43d"
  },
  {
    group: "animals_nature",
    title: ":frog:",
    icon: "_1f438"
  },
  {
    group: "animals_nature",
    title: ":monkey_face:",
    icon: "_1f435"
  },
  {
    group: "animals_nature",
    title: ":see_no_evil:",
    icon: "_1f648"
  },
  {
    group: "animals_nature",
    title: ":hear_no_evil:",
    icon: "_1f649"
  },
  {
    group: "animals_nature",
    title: ":speak_no_evil:",
    icon: "_1f64a"
  },
  {
    group: "animals_nature",
    title: ":monkey:",
    icon: "_1f412"
  },
  {
    group: "animals_nature",
    title: ":chicken:",
    icon: "_1f414"
  },
  {
    group: "animals_nature",
    title: ":penguin:",
    icon: "_1f427"
  },
  {
    group: "animals_nature",
    title: ":bird:",
    icon: "_1f426"
  },
  {
    group: "animals_nature",
    title: ":baby_chick:",
    icon: "_1f424"
  },
  {
    group: "animals_nature",
    title: ":hatching_chick:",
    icon: "_1f423"
  },
  {
    group: "animals_nature",
    title: ":hatched_chick:",
    icon: "_1f425"
  },
  {
    group: "animals_nature",
    title: ":duck:",
    icon: "_1f986"
  },
  {
    group: "animals_nature",
    title: ":swan:",
    icon: "_1f9a2"
  },
  {
    group: "animals_nature",
    title: ":eagle:",
    icon: "_1f985"
  },
  {
    group: "animals_nature",
    title: ":owl:",
    icon: "_1f989"
  },
  {
    group: "animals_nature",
    title: ":parrot:",
    icon: "_1f99c"
  },
  {
    group: "animals_nature",
    title: ":peacock:",
    icon: "_1f99a"
  },
  {
    group: "animals_nature",
    title: ":bat:",
    icon: "_1f987"
  },
  {
    group: "animals_nature",
    title: ":wolf:",
    icon: "_1f43a"
  },
  {
    group: "animals_nature",
    title: ":boar:",
    icon: "_1f417"
  },
  {
    group: "animals_nature",
    title: ":horse:",
    icon: "_1f434"
  },
  {
    group: "animals_nature",
    title: ":unicorn:",
    icon: "_1f984"
  },
  {
    group: "animals_nature",
    title: ":bee:",
    icon: "_1f41d"
  },
  {
    group: "animals_nature",
    title: ":bug:",
    icon: "_1f41b"
  },
  {
    group: "animals_nature",
    title: ":butterfly:",
    icon: "_1f98b"
  },
  {
    group: "animals_nature",
    title: ":snail:",
    icon: "_1f40c"
  },
  {
    group: "animals_nature",
    title: ":shell:",
    icon: "_1f41a"
  },
  {
    group: "animals_nature",
    title: ":beetle:",
    icon: "_1f41e"
  },
  {
    group: "animals_nature",
    title: ":ant:",
    icon: "_1f41c"
  },
  {
    group: "animals_nature",
    title: ":cricket:",
    icon: "_1f997"
  },
  {
    group: "animals_nature",
    title: ":spider:",
    icon: "_1f577"
  },
  {
    group: "animals_nature",
    title: ":spider_web:",
    icon: "_1f578"
  },
  {
    group: "animals_nature",
    title: ":scorpion:",
    icon: "_1f982"
  },
  {
    group: "animals_nature",
    title: ":mosquito:",
    icon: "_1f99f"
  },
  {
    group: "animals_nature",
    title: ":microbe:",
    icon: "_1f9a0"
  },
  {
    group: "animals_nature",
    title: ":turtle:",
    icon: "_1f422"
  },
  {
    group: "animals_nature",
    title: ":snake:",
    icon: "_1f40d"
  },
  {
    group: "animals_nature",
    title: ":lizard:",
    icon: "_1f98e"
  },
  {
    group: "animals_nature",
    title: ":t_rex:",
    icon: "_1f996"
  },
  {
    group: "animals_nature",
    title: ":sauropod:",
    icon: "_1f995"
  },
  {
    group: "animals_nature",
    title: ":octopus:",
    icon: "_1f419"
  },
  {
    group: "animals_nature",
    title: ":squid:",
    icon: "_1f991"
  },
  {
    group: "animals_nature",
    title: ":shrimp:",
    icon: "_1f990"
  },
  {
    group: "animals_nature",
    title: ":crab:",
    icon: "_1f980"
  },
  {
    group: "animals_nature",
    title: ":lobster:",
    icon: "_1f99e"
  },
  {
    group: "animals_nature",
    title: ":blowfish:",
    icon: "_1f421"
  },
  {
    group: "animals_nature",
    title: ":tropical_fish:",
    icon: "_1f420"
  },
  {
    group: "animals_nature",
    title: ":fish:",
    icon: "_1f41f"
  },
  {
    group: "animals_nature",
    title: ":dolphin:",
    icon: "_1f42c"
  },
  {
    group: "animals_nature",
    title: ":whale:",
    icon: "_1f433"
  },
  {
    group: "animals_nature",
    title: ":whale2:",
    icon: "_1f40b"
  },
  {
    group: "animals_nature",
    title: ":shark:",
    icon: "_1f988"
  },
  {
    group: "animals_nature",
    title: ":crocodile:",
    icon: "_1f40a"
  },
  {
    group: "animals_nature",
    title: ":tiger2:",
    icon: "_1f405"
  },
  {
    group: "animals_nature",
    title: ":leopard:",
    icon: "_1f406"
  },
  {
    group: "animals_nature",
    title: ":zebra:",
    icon: "_1f993"
  },
  {
    group: "animals_nature",
    title: ":gorilla:",
    icon: "_1f98d"
  },
  {
    group: "animals_nature",
    title: ":elephant:",
    icon: "_1f418"
  },
  {
    group: "animals_nature",
    title: ":rhino:",
    icon: "_1f98f"
  },
  {
    group: "animals_nature",
    title: ":hippopotamus:",
    icon: "_1f99b"
  },
  {
    group: "animals_nature",
    title: ":dromedary_camel:",
    icon: "_1f42a"
  },
  {
    group: "animals_nature",
    title: ":camel:",
    icon: "_1f42b"
  },
  {
    group: "animals_nature",
    title: ":giraffe:",
    icon: "_1f992"
  },
  {
    group: "animals_nature",
    title: ":llama:",
    icon: "_1f999"
  },
  {
    group: "animals_nature",
    title: ":water_buffalo:",
    icon: "_1f403"
  },
  {
    group: "animals_nature",
    title: ":ox:",
    icon: "_1f402"
  },
  {
    group: "animals_nature",
    title: ":cow2:",
    icon: "_1f404"
  },
  {
    group: "animals_nature",
    title: ":racehorse:",
    icon: "_1f40e"
  },
  {
    group: "animals_nature",
    title: ":pig2:",
    icon: "_1f416"
  },
  {
    group: "animals_nature",
    title: ":ram:",
    icon: "_1f40f"
  },
  {
    group: "animals_nature",
    title: ":sheep:",
    icon: "_1f411"
  },
  {
    group: "animals_nature",
    title: ":goat:",
    icon: "_1f410"
  },
  {
    group: "animals_nature",
    title: ":deer:",
    icon: "_1f98c"
  },
  {
    group: "animals_nature",
    title: ":dog2:",
    icon: "_1f415"
  },
  {
    group: "animals_nature",
    title: ":poodle:",
    icon: "_1f429"
  },
  {
    group: "animals_nature",
    title: ":cat2:",
    icon: "_1f408"
  },
  {
    group: "animals_nature",
    title: ":rooster:",
    icon: "_1f413"
  },
  {
    group: "animals_nature",
    title: ":turkey:",
    icon: "_1f983"
  },
  {
    group: "animals_nature",
    title: ":dove:",
    icon: "_1f54a"
  },
  {
    group: "animals_nature",
    title: ":rabbit2:",
    icon: "_1f407"
  },
  {
    group: "animals_nature",
    title: ":mouse2:",
    icon: "_1f401"
  },
  {
    group: "animals_nature",
    title: ":rat:",
    icon: "_1f400"
  },
  {
    group: "animals_nature",
    title: ":chipmunk:",
    icon: "_1f43f"
  },
  {
    group: "animals_nature",
    title: ":hedgehog:",
    icon: "_1f994"
  },
  {
    group: "animals_nature",
    title: ":feet:",
    icon: "_1f43e"
  },
  {
    group: "animals_nature",
    title: ":dragon:",
    icon: "_1f409"
  },
  {
    group: "animals_nature",
    title: ":dragon_face:",
    icon: "_1f432"
  },
  {
    group: "animals_nature",
    title: ":cactus:",
    icon: "_1f335"
  },
  {
    group: "animals_nature",
    title: ":christmas_tree:",
    icon: "_1f384"
  },
  {
    group: "animals_nature",
    title: ":evergreen_tree:",
    icon: "_1f332"
  },
  {
    group: "animals_nature",
    title: ":deciduous_tree:",
    icon: "_1f333"
  },
  {
    group: "animals_nature",
    title: ":palm_tree:",
    icon: "_1f334"
  },
  {
    group: "animals_nature",
    title: ":seedling:",
    icon: "_1f331"
  },
  {
    group: "animals_nature",
    title: ":herb:",
    icon: "_1f33f"
  },
  {
    group: "animals_nature",
    title: ":shamrock:",
    icon: "_2618"
  },
  {
    group: "animals_nature",
    title: ":four_leaf_clover:",
    icon: "_1f340"
  },
  {
    group: "animals_nature",
    title: ":bamboo:",
    icon: "_1f38d"
  },
  {
    group: "animals_nature",
    title: ":tanabata_tree:",
    icon: "_1f38b"
  },
  {
    group: "animals_nature",
    title: ":leaves:",
    icon: "_1f343"
  },
  {
    group: "animals_nature",
    title: ":fallen_leaf:",
    icon: "_1f342"
  },
  {
    group: "animals_nature",
    title: ":maple_leaf:",
    icon: "_1f341"
  },
  {
    group: "animals_nature",
    title: ":mushroom:",
    icon: "_1f344"
  },
  {
    group: "animals_nature",
    title: ":ear_of_rice:",
    icon: "_1f33e"
  },
  {
    group: "animals_nature",
    title: ":bouquet:",
    icon: "_1f490"
  },
  {
    group: "animals_nature",
    title: ":tulip:",
    icon: "_1f337"
  },
  {
    group: "animals_nature",
    title: ":rose:",
    icon: "_1f339"
  },
  {
    group: "animals_nature",
    title: ":wilted_rose:",
    icon: "_1f940"
  },
  {
    group: "animals_nature",
    title: ":hibiscus:",
    icon: "_1f33a"
  },
  {
    group: "animals_nature",
    title: ":cherry_blossom:",
    icon: "_1f338"
  },
  {
    group: "animals_nature",
    title: ":blossom:",
    icon: "_1f33c"
  },
  {
    group: "animals_nature",
    title: ":sunflower:",
    icon: "_1f33b"
  },
  {
    group: "animals_nature",
    title: ":sun_with_face:",
    icon: "_1f31e"
  },
  {
    group: "animals_nature",
    title: ":full_moon_with_face:",
    icon: "_1f31d"
  },
  {
    group: "animals_nature",
    title: ":first_quarter_moon_with_face:",
    icon: "_1f31b"
  },
  {
    group: "animals_nature",
    title: ":last_quarter_moon_with_face:",
    icon: "_1f31c"
  },
  {
    group: "animals_nature",
    title: ":new_moon_with_face:",
    icon: "_1f31a"
  },
  {
    group: "animals_nature",
    title: ":full_moon:",
    icon: "_1f315"
  },
  {
    group: "animals_nature",
    title: ":waning_gibbous_moon:",
    icon: "_1f316"
  },
  {
    group: "animals_nature",
    title: ":last_quarter_moon:",
    icon: "_1f317"
  },
  {
    group: "animals_nature",
    title: ":waning_crescent_moon:",
    icon: "_1f318"
  },
  {
    group: "animals_nature",
    title: ":new_moon:",
    icon: "_1f311"
  },
  {
    group: "animals_nature",
    title: ":waxing_crescent_moon:",
    icon: "_1f312"
  },
  {
    group: "animals_nature",
    title: ":first_quarter_moon:",
    icon: "_1f313"
  },
  {
    group: "animals_nature",
    title: ":waxing_gibbous_moon:",
    icon: "_1f314"
  },
  {
    group: "animals_nature",
    title: ":crescent_moon:",
    icon: "_1f319"
  },
  {
    group: "animals_nature",
    title: ":earth_americas:",
    icon: "_1f30e"
  },
  {
    group: "animals_nature",
    title: ":earth_africa:",
    icon: "_1f30d"
  },
  {
    group: "animals_nature",
    title: ":earth_asia:",
    icon: "_1f30f"
  },
  {
    group: "animals_nature",
    title: ":dizzy:",
    icon: "_1f4ab"
  },
  {
    group: "animals_nature",
    title: ":star:",
    icon: "_2b50"
  },
  {
    group: "animals_nature",
    title: ":star2:",
    icon: "_1f31f"
  },
  {
    group: "animals_nature",
    title: ":sparkles:",
    icon: "_2728"
  },
  {
    group: "animals_nature",
    title: ":zap:",
    icon: "_26a1"
  },
  {
    group: "animals_nature",
    title: ":comet:",
    icon: "_2604"
  },
  {
    group: "animals_nature",
    title: ":boom:",
    icon: "_1f4a5"
  },
  {
    group: "animals_nature",
    title: ":fire:",
    icon: "_1f525"
  },
  {
    group: "animals_nature",
    title: ":cloud_tornado:",
    icon: "_1f32a"
  },
  {
    group: "animals_nature",
    title: ":rainbow:",
    icon: "_1f308"
  },
  {
    group: "animals_nature",
    title: ":sunny:",
    icon: "_2600"
  },
  {
    group: "animals_nature",
    title: ":white_sun_small_cloud:",
    icon: "_1f324"
  },
  {
    group: "animals_nature",
    title: ":partly_sunny:",
    icon: "_26c5"
  },
  {
    group: "animals_nature",
    title: ":white_sun_cloud:",
    icon: "_1f325"
  },
  {
    group: "animals_nature",
    title: ":cloud:",
    icon: "_2601"
  },
  {
    group: "animals_nature",
    title: ":white_sun_rain_cloud:",
    icon: "_1f326"
  },
  {
    group: "animals_nature",
    title: ":cloud_rain:",
    icon: "_1f327"
  },
  {
    group: "animals_nature",
    title: ":thunder_cloud_rain:",
    icon: "_26c8"
  },
  {
    group: "animals_nature",
    title: ":cloud_lightning:",
    icon: "_1f329"
  },
  {
    group: "animals_nature",
    title: ":cloud_snow:",
    icon: "_1f328"
  },
  {
    group: "animals_nature",
    title: ":snowflake:",
    icon: "_2744"
  },
  {
    group: "animals_nature",
    title: ":snowman2:",
    icon: "_2603"
  },
  {
    group: "animals_nature",
    title: ":snowman:",
    icon: "_26c4"
  },
  {
    group: "animals_nature",
    title: ":wind_blowing_face:",
    icon: "_1f32c"
  },
  {
    group: "animals_nature",
    title: ":dash:",
    icon: "_1f4a8"
  },
  {
    group: "animals_nature",
    title: ":droplet:",
    icon: "_1f4a7"
  },
  {
    group: "animals_nature",
    title: ":sweat_drops:",
    icon: "_1f4a6"
  },
  {
    group: "animals_nature",
    title: ":umbrella:",
    icon: "_2614"
  },
  {
    group: "animals_nature",
    title: ":umbrella2:",
    icon: "_2602"
  },
  {
    group: "animals_nature",
    title: ":ocean:",
    icon: "_1f30a"
  },
  {
    group: "animals_nature",
    title: ":fog:",
    icon: "_1f32b"
  },
  {
    group: "animals_nature",
    title: ":dog:",
    icon: "_1f436"
  },
  {
    group: "animals_nature",
    title: ":cat:",
    icon: "_1f431"
  },
  {
    group: "animals_nature",
    title: ":mouse:",
    icon: "_1f42d"
  },
  {
    group: "animals_nature",
    title: ":hamster:",
    icon: "_1f439"
  },
  {
    group: "animals_nature",
    title: ":rabbit:",
    icon: "_1f430"
  },
  {
    group: "animals_nature",
    title: ":fox:",
    icon: "_1f98a"
  },
  {
    group: "animals_nature",
    title: ":raccoon:",
    icon: "_1f99d"
  },
  {
    group: "animals_nature",
    title: ":bear:",
    icon: "_1f43b"
  },
  {
    group: "animals_nature",
    title: ":panda_face:",
    icon: "_1f43c"
  },
  {
    group: "animals_nature",
    title: ":kangaroo:",
    icon: "_1f998"
  },
  {
    group: "animals_nature",
    title: ":badger:",
    icon: "_1f9a1"
  },
  {
    group: "animals_nature",
    title: ":koala:",
    icon: "_1f428"
  },
  {
    group: "animals_nature",
    title: ":tiger:",
    icon: "_1f42f"
  },
  {
    group: "animals_nature",
    title: ":lion_face:",
    icon: "_1f981"
  },
  {
    group: "animals_nature",
    title: ":cow:",
    icon: "_1f42e"
  },
  {
    group: "animals_nature",
    title: ":pig:",
    icon: "_1f437"
  },
  {
    group: "animals_nature",
    title: ":pig_nose:",
    icon: "_1f43d"
  },
  {
    group: "animals_nature",
    title: ":frog:",
    icon: "_1f438"
  },
  {
    group: "animals_nature",
    title: ":monkey_face:",
    icon: "_1f435"
  },
  {
    group: "animals_nature",
    title: ":see_no_evil:",
    icon: "_1f648"
  },
  {
    group: "animals_nature",
    title: ":hear_no_evil:",
    icon: "_1f649"
  },
  {
    group: "animals_nature",
    title: ":speak_no_evil:",
    icon: "_1f64a"
  },
  {
    group: "animals_nature",
    title: ":monkey:",
    icon: "_1f412"
  },
  {
    group: "animals_nature",
    title: ":chicken:",
    icon: "_1f414"
  },
  {
    group: "animals_nature",
    title: ":penguin:",
    icon: "_1f427"
  },
  {
    group: "animals_nature",
    title: ":bird:",
    icon: "_1f426"
  },
  {
    group: "animals_nature",
    title: ":baby_chick:",
    icon: "_1f424"
  },
  {
    group: "animals_nature",
    title: ":hatching_chick:",
    icon: "_1f423"
  },
  {
    group: "animals_nature",
    title: ":hatched_chick:",
    icon: "_1f425"
  },
  {
    group: "animals_nature",
    title: ":duck:",
    icon: "_1f986"
  },
  {
    group: "animals_nature",
    title: ":swan:",
    icon: "_1f9a2"
  },
  {
    group: "animals_nature",
    title: ":eagle:",
    icon: "_1f985"
  },
  {
    group: "animals_nature",
    title: ":owl:",
    icon: "_1f989"
  },
  {
    group: "animals_nature",
    title: ":parrot:",
    icon: "_1f99c"
  },
  {
    group: "animals_nature",
    title: ":peacock:",
    icon: "_1f99a"
  },
  {
    group: "animals_nature",
    title: ":bat:",
    icon: "_1f987"
  },
  {
    group: "animals_nature",
    title: ":wolf:",
    icon: "_1f43a"
  },
  {
    group: "animals_nature",
    title: ":boar:",
    icon: "_1f417"
  },
  {
    group: "animals_nature",
    title: ":horse:",
    icon: "_1f434"
  },
  {
    group: "animals_nature",
    title: ":unicorn:",
    icon: "_1f984"
  },
  {
    group: "animals_nature",
    title: ":bee:",
    icon: "_1f41d"
  },
  {
    group: "animals_nature",
    title: ":bug:",
    icon: "_1f41b"
  },
  {
    group: "animals_nature",
    title: ":butterfly:",
    icon: "_1f98b"
  },
  {
    group: "animals_nature",
    title: ":snail:",
    icon: "_1f40c"
  },
  {
    group: "animals_nature",
    title: ":shell:",
    icon: "_1f41a"
  },
  {
    group: "animals_nature",
    title: ":beetle:",
    icon: "_1f41e"
  },
  {
    group: "animals_nature",
    title: ":ant:",
    icon: "_1f41c"
  },
  {
    group: "animals_nature",
    title: ":cricket:",
    icon: "_1f997"
  },
  {
    group: "animals_nature",
    title: ":spider:",
    icon: "_1f577"
  },
  {
    group: "animals_nature",
    title: ":spider_web:",
    icon: "_1f578"
  },
  {
    group: "animals_nature",
    title: ":scorpion:",
    icon: "_1f982"
  },
  {
    group: "animals_nature",
    title: ":mosquito:",
    icon: "_1f99f"
  },
  {
    group: "animals_nature",
    title: ":microbe:",
    icon: "_1f9a0"
  },
  {
    group: "animals_nature",
    title: ":turtle:",
    icon: "_1f422"
  },
  {
    group: "animals_nature",
    title: ":snake:",
    icon: "_1f40d"
  },
  {
    group: "animals_nature",
    title: ":lizard:",
    icon: "_1f98e"
  },
  {
    group: "animals_nature",
    title: ":t_rex:",
    icon: "_1f996"
  },
  {
    group: "animals_nature",
    title: ":sauropod:",
    icon: "_1f995"
  },
  {
    group: "animals_nature",
    title: ":octopus:",
    icon: "_1f419"
  },
  {
    group: "animals_nature",
    title: ":squid:",
    icon: "_1f991"
  },
  {
    group: "animals_nature",
    title: ":shrimp:",
    icon: "_1f990"
  },
  {
    group: "animals_nature",
    title: ":crab:",
    icon: "_1f980"
  },
  {
    group: "animals_nature",
    title: ":lobster:",
    icon: "_1f99e"
  },
  {
    group: "animals_nature",
    title: ":blowfish:",
    icon: "_1f421"
  },
  {
    group: "animals_nature",
    title: ":tropical_fish:",
    icon: "_1f420"
  },
  {
    group: "animals_nature",
    title: ":fish:",
    icon: "_1f41f"
  },
  {
    group: "animals_nature",
    title: ":dolphin:",
    icon: "_1f42c"
  },
  {
    group: "animals_nature",
    title: ":whale:",
    icon: "_1f433"
  },
  {
    group: "animals_nature",
    title: ":whale2:",
    icon: "_1f40b"
  },
  {
    group: "animals_nature",
    title: ":shark:",
    icon: "_1f988"
  },
  {
    group: "animals_nature",
    title: ":crocodile:",
    icon: "_1f40a"
  },
  {
    group: "animals_nature",
    title: ":tiger2:",
    icon: "_1f405"
  },
  {
    group: "animals_nature",
    title: ":leopard:",
    icon: "_1f406"
  },
  {
    group: "animals_nature",
    title: ":zebra:",
    icon: "_1f993"
  },
  {
    group: "animals_nature",
    title: ":gorilla:",
    icon: "_1f98d"
  },
  {
    group: "animals_nature",
    title: ":elephant:",
    icon: "_1f418"
  },
  {
    group: "animals_nature",
    title: ":rhino:",
    icon: "_1f98f"
  },
  {
    group: "animals_nature",
    title: ":hippopotamus:",
    icon: "_1f99b"
  },
  {
    group: "animals_nature",
    title: ":dromedary_camel:",
    icon: "_1f42a"
  },
  {
    group: "animals_nature",
    title: ":camel:",
    icon: "_1f42b"
  },
  {
    group: "animals_nature",
    title: ":giraffe:",
    icon: "_1f992"
  },
  {
    group: "animals_nature",
    title: ":llama:",
    icon: "_1f999"
  },
  {
    group: "animals_nature",
    title: ":water_buffalo:",
    icon: "_1f403"
  },
  {
    group: "animals_nature",
    title: ":ox:",
    icon: "_1f402"
  },
  {
    group: "animals_nature",
    title: ":cow2:",
    icon: "_1f404"
  },
  {
    group: "animals_nature",
    title: ":racehorse:",
    icon: "_1f40e"
  },
  {
    group: "animals_nature",
    title: ":pig2:",
    icon: "_1f416"
  },
  {
    group: "animals_nature",
    title: ":ram:",
    icon: "_1f40f"
  },
  {
    group: "animals_nature",
    title: ":sheep:",
    icon: "_1f411"
  },
  {
    group: "animals_nature",
    title: ":goat:",
    icon: "_1f410"
  },
  {
    group: "animals_nature",
    title: ":deer:",
    icon: "_1f98c"
  },
  {
    group: "animals_nature",
    title: ":dog2:",
    icon: "_1f415"
  },
  {
    group: "animals_nature",
    title: ":poodle:",
    icon: "_1f429"
  },
  {
    group: "animals_nature",
    title: ":cat2:",
    icon: "_1f408"
  },
  {
    group: "animals_nature",
    title: ":rooster:",
    icon: "_1f413"
  },
  {
    group: "animals_nature",
    title: ":turkey:",
    icon: "_1f983"
  },
  {
    group: "animals_nature",
    title: ":dove:",
    icon: "_1f54a"
  },
  {
    group: "animals_nature",
    title: ":rabbit2:",
    icon: "_1f407"
  },
  {
    group: "animals_nature",
    title: ":mouse2:",
    icon: "_1f401"
  },
  {
    group: "animals_nature",
    title: ":rat:",
    icon: "_1f400"
  },
  {
    group: "animals_nature",
    title: ":chipmunk:",
    icon: "_1f43f"
  },
  {
    group: "animals_nature",
    title: ":hedgehog:",
    icon: "_1f994"
  },
  {
    group: "animals_nature",
    title: ":feet:",
    icon: "_1f43e"
  },
  {
    group: "animals_nature",
    title: ":dragon:",
    icon: "_1f409"
  },
  {
    group: "animals_nature",
    title: ":dragon_face:",
    icon: "_1f432"
  },
  {
    group: "animals_nature",
    title: ":cactus:",
    icon: "_1f335"
  },
  {
    group: "animals_nature",
    title: ":christmas_tree:",
    icon: "_1f384"
  },
  {
    group: "animals_nature",
    title: ":evergreen_tree:",
    icon: "_1f332"
  },
  {
    group: "animals_nature",
    title: ":deciduous_tree:",
    icon: "_1f333"
  },
  {
    group: "animals_nature",
    title: ":palm_tree:",
    icon: "_1f334"
  },
  {
    group: "animals_nature",
    title: ":seedling:",
    icon: "_1f331"
  },
  {
    group: "animals_nature",
    title: ":herb:",
    icon: "_1f33f"
  },
  {
    group: "animals_nature",
    title: ":shamrock:",
    icon: "_2618"
  },
  {
    group: "animals_nature",
    title: ":four_leaf_clover:",
    icon: "_1f340"
  },
  {
    group: "animals_nature",
    title: ":bamboo:",
    icon: "_1f38d"
  },
  {
    group: "animals_nature",
    title: ":tanabata_tree:",
    icon: "_1f38b"
  },
  {
    group: "animals_nature",
    title: ":leaves:",
    icon: "_1f343"
  },
  {
    group: "animals_nature",
    title: ":fallen_leaf:",
    icon: "_1f342"
  },
  {
    group: "animals_nature",
    title: ":maple_leaf:",
    icon: "_1f341"
  },
  {
    group: "animals_nature",
    title: ":mushroom:",
    icon: "_1f344"
  },
  {
    group: "animals_nature",
    title: ":ear_of_rice:",
    icon: "_1f33e"
  },
  {
    group: "animals_nature",
    title: ":bouquet:",
    icon: "_1f490"
  },
  {
    group: "animals_nature",
    title: ":tulip:",
    icon: "_1f337"
  },
  {
    group: "animals_nature",
    title: ":rose:",
    icon: "_1f339"
  },
  {
    group: "animals_nature",
    title: ":wilted_rose:",
    icon: "_1f940"
  },
  {
    group: "animals_nature",
    title: ":hibiscus:",
    icon: "_1f33a"
  },
  {
    group: "animals_nature",
    title: ":cherry_blossom:",
    icon: "_1f338"
  },
  {
    group: "animals_nature",
    title: ":blossom:",
    icon: "_1f33c"
  },
  {
    group: "animals_nature",
    title: ":sunflower:",
    icon: "_1f33b"
  },
  {
    group: "animals_nature",
    title: ":sun_with_face:",
    icon: "_1f31e"
  },
  {
    group: "animals_nature",
    title: ":full_moon_with_face:",
    icon: "_1f31d"
  },
  {
    group: "animals_nature",
    title: ":first_quarter_moon_with_face:",
    icon: "_1f31b"
  },
  {
    group: "animals_nature",
    title: ":last_quarter_moon_with_face:",
    icon: "_1f31c"
  },
  {
    group: "animals_nature",
    title: ":new_moon_with_face:",
    icon: "_1f31a"
  },
  {
    group: "animals_nature",
    title: ":full_moon:",
    icon: "_1f315"
  },
  {
    group: "animals_nature",
    title: ":waning_gibbous_moon:",
    icon: "_1f316"
  },
  {
    group: "animals_nature",
    title: ":last_quarter_moon:",
    icon: "_1f317"
  },
  {
    group: "animals_nature",
    title: ":waning_crescent_moon:",
    icon: "_1f318"
  },
  {
    group: "animals_nature",
    title: ":new_moon:",
    icon: "_1f311"
  },
  {
    group: "animals_nature",
    title: ":waxing_crescent_moon:",
    icon: "_1f312"
  },
  {
    group: "animals_nature",
    title: ":first_quarter_moon:",
    icon: "_1f313"
  },
  {
    group: "animals_nature",
    title: ":waxing_gibbous_moon:",
    icon: "_1f314"
  },
  {
    group: "animals_nature",
    title: ":crescent_moon:",
    icon: "_1f319"
  },
  {
    group: "animals_nature",
    title: ":earth_americas:",
    icon: "_1f30e"
  },
  {
    group: "animals_nature",
    title: ":earth_africa:",
    icon: "_1f30d"
  },
  {
    group: "animals_nature",
    title: ":earth_asia:",
    icon: "_1f30f"
  },
  {
    group: "animals_nature",
    title: ":dizzy:",
    icon: "_1f4ab"
  },
  {
    group: "animals_nature",
    title: ":star:",
    icon: "_2b50"
  },
  {
    group: "animals_nature",
    title: ":star2:",
    icon: "_1f31f"
  },
  {
    group: "animals_nature",
    title: ":sparkles:",
    icon: "_2728"
  },
  {
    group: "animals_nature",
    title: ":zap:",
    icon: "_26a1"
  },
  {
    group: "animals_nature",
    title: ":comet:",
    icon: "_2604"
  },
  {
    group: "animals_nature",
    title: ":boom:",
    icon: "_1f4a5"
  },
  {
    group: "animals_nature",
    title: ":fire:",
    icon: "_1f525"
  },
  {
    group: "animals_nature",
    title: ":cloud_tornado:",
    icon: "_1f32a"
  },
  {
    group: "animals_nature",
    title: ":rainbow:",
    icon: "_1f308"
  },
  {
    group: "animals_nature",
    title: ":sunny:",
    icon: "_2600"
  },
  {
    group: "animals_nature",
    title: ":white_sun_small_cloud:",
    icon: "_1f324"
  },
  {
    group: "animals_nature",
    title: ":partly_sunny:",
    icon: "_26c5"
  },
  {
    group: "animals_nature",
    title: ":white_sun_cloud:",
    icon: "_1f325"
  },
  {
    group: "animals_nature",
    title: ":cloud:",
    icon: "_2601"
  },
  {
    group: "animals_nature",
    title: ":white_sun_rain_cloud:",
    icon: "_1f326"
  },
  {
    group: "animals_nature",
    title: ":cloud_rain:",
    icon: "_1f327"
  },
  {
    group: "animals_nature",
    title: ":thunder_cloud_rain:",
    icon: "_26c8"
  },
  {
    group: "animals_nature",
    title: ":cloud_lightning:",
    icon: "_1f329"
  },
  {
    group: "animals_nature",
    title: ":cloud_snow:",
    icon: "_1f328"
  },
  {
    group: "animals_nature",
    title: ":snowflake:",
    icon: "_2744"
  },
  {
    group: "animals_nature",
    title: ":snowman2:",
    icon: "_2603"
  },
  {
    group: "animals_nature",
    title: ":snowman:",
    icon: "_26c4"
  },
  {
    group: "animals_nature",
    title: ":wind_blowing_face:",
    icon: "_1f32c"
  },
  {
    group: "animals_nature",
    title: ":dash:",
    icon: "_1f4a8"
  },
  {
    group: "animals_nature",
    title: ":droplet:",
    icon: "_1f4a7"
  },
  {
    group: "animals_nature",
    title: ":sweat_drops:",
    icon: "_1f4a6"
  },
  {
    group: "animals_nature",
    title: ":umbrella:",
    icon: "_2614"
  },
  {
    group: "animals_nature",
    title: ":umbrella2:",
    icon: "_2602"
  },
  {
    group: "animals_nature",
    title: ":ocean:",
    icon: "_1f30a"
  },
  {
    group: "animals_nature",
    title: ":fog:",
    icon: "_1f32b"
  },
  {
    group: "food_drink",
    title: ":green_apple:",
    icon: "_1f34f"
  },
  {
    group: "food_drink",
    title: ":apple:",
    icon: "_1f34e"
  },
  {
    group: "food_drink",
    title: ":pear:",
    icon: "_1f350"
  },
  {
    group: "food_drink",
    title: ":tangerine:",
    icon: "_1f34a"
  },
  {
    group: "food_drink",
    title: ":lemon:",
    icon: "_1f34b"
  },
  {
    group: "food_drink",
    title: ":banana:",
    icon: "_1f34c"
  },
  {
    group: "food_drink",
    title: ":watermelon:",
    icon: "_1f349"
  },
  {
    group: "food_drink",
    title: ":grapes:",
    icon: "_1f347"
  },
  {
    group: "food_drink",
    title: ":strawberry:",
    icon: "_1f353"
  },
  {
    group: "food_drink",
    title: ":melon:",
    icon: "_1f348"
  },
  {
    group: "food_drink",
    title: ":cherries:",
    icon: "_1f352"
  },
  {
    group: "food_drink",
    title: ":peach:",
    icon: "_1f351"
  },
  {
    group: "food_drink",
    title: ":mango:",
    icon: "_1f96d"
  },
  {
    group: "food_drink",
    title: ":pineapple:",
    icon: "_1f34d"
  },
  {
    group: "food_drink",
    title: ":coconut:",
    icon: "_1f965"
  },
  {
    group: "food_drink",
    title: ":kiwi:",
    icon: "_1f95d"
  },
  {
    group: "food_drink",
    title: ":tomato:",
    icon: "_1f345"
  },
  {
    group: "food_drink",
    title: ":eggplant:",
    icon: "_1f346"
  },
  {
    group: "food_drink",
    title: ":avocado:",
    icon: "_1f951"
  },
  {
    group: "food_drink",
    title: ":broccoli:",
    icon: "_1f966"
  },
  {
    group: "food_drink",
    title: ":leafy_green:",
    icon: "_1f96c"
  },
  {
    group: "food_drink",
    title: ":cucumber:",
    icon: "_1f952"
  },
  {
    group: "food_drink",
    title: ":hot_pepper:",
    icon: "_1f336"
  },
  {
    group: "food_drink",
    title: ":corn:",
    icon: "_1f33d"
  },
  {
    group: "food_drink",
    title: ":carrot:",
    icon: "_1f955"
  },
  {
    group: "food_drink",
    title: ":potato:",
    icon: "_1f954"
  },
  {
    group: "food_drink",
    title: ":sweet_potato:",
    icon: "_1f360"
  },
  {
    group: "food_drink",
    title: ":croissant:",
    icon: "_1f950"
  },
  {
    group: "food_drink",
    title: ":bread:",
    icon: "_1f35e"
  },
  {
    group: "food_drink",
    title: ":french_bread:",
    icon: "_1f956"
  },
  {
    group: "food_drink",
    title: ":pretzel:",
    icon: "_1f968"
  },
  {
    group: "food_drink",
    title: ":bagel:",
    icon: "_1f96f"
  },
  {
    group: "food_drink",
    title: ":cheese:",
    icon: "_1f9c0"
  },
  {
    group: "food_drink",
    title: ":egg:",
    icon: "_1f95a"
  },
  {
    group: "food_drink",
    title: ":cooking:",
    icon: "_1f373"
  },
  {
    group: "food_drink",
    title: ":pancakes:",
    icon: "_1f95e"
  },
  {
    group: "food_drink",
    title: ":bacon:",
    icon: "_1f953"
  },
  {
    group: "food_drink",
    title: ":cut_of_meat:",
    icon: "_1f969"
  },
  {
    group: "food_drink",
    title: ":poultry_leg:",
    icon: "_1f357"
  },
  {
    group: "food_drink",
    title: ":meat_on_bone:",
    icon: "_1f356"
  },
  {
    group: "food_drink",
    title: ":hotdog:",
    icon: "_1f32d"
  },
  {
    group: "food_drink",
    title: ":hamburger:",
    icon: "_1f354"
  },
  {
    group: "food_drink",
    title: ":fries:",
    icon: "_1f35f"
  },
  {
    group: "food_drink",
    title: ":pizza:",
    icon: "_1f355"
  },
  {
    group: "food_drink",
    title: ":sandwich:",
    icon: "_1f96a"
  },
  {
    group: "food_drink",
    title: ":stuffed_flatbread:",
    icon: "_1f959"
  },
  {
    group: "food_drink",
    title: ":taco:",
    icon: "_1f32e"
  },
  {
    group: "food_drink",
    title: ":burrito:",
    icon: "_1f32f"
  },
  {
    group: "food_drink",
    title: ":salad:",
    icon: "_1f957"
  },
  {
    group: "food_drink",
    title: ":shallow_pan_of_food:",
    icon: "_1f958"
  },
  {
    group: "food_drink",
    title: ":canned_food:",
    icon: "_1f96b"
  },
  {
    group: "food_drink",
    title: ":spaghetti:",
    icon: "_1f35d"
  },
  {
    group: "food_drink",
    title: ":ramen:",
    icon: "_1f35c"
  },
  {
    group: "food_drink",
    title: ":stew:",
    icon: "_1f372"
  },
  {
    group: "food_drink",
    title: ":curry:",
    icon: "_1f35b"
  },
  {
    group: "food_drink",
    title: ":sushi:",
    icon: "_1f363"
  },
  {
    group: "food_drink",
    title: ":bento:",
    icon: "_1f371"
  },
  {
    group: "food_drink",
    title: ":fried_shrimp:",
    icon: "_1f364"
  },
  {
    group: "food_drink",
    title: ":rice_ball:",
    icon: "_1f359"
  },
  {
    group: "food_drink",
    title: ":rice:",
    icon: "_1f35a"
  },
  {
    group: "food_drink",
    title: ":rice_cracker:",
    icon: "_1f358"
  },
  {
    group: "food_drink",
    title: ":fish_cake:",
    icon: "_1f365"
  },
  {
    group: "food_drink",
    title: ":fortune_cookie:",
    icon: "_1f960"
  },
  {
    group: "food_drink",
    title: ":oden:",
    icon: "_1f362"
  },
  {
    group: "food_drink",
    title: ":dango:",
    icon: "_1f361"
  },
  {
    group: "food_drink",
    title: ":shaved_ice:",
    icon: "_1f367"
  },
  {
    group: "food_drink",
    title: ":ice_cream:",
    icon: "_1f368"
  },
  {
    group: "food_drink",
    title: ":icecream:",
    icon: "_1f366"
  },
  {
    group: "food_drink",
    title: ":pie:",
    icon: "_1f967"
  },
  {
    group: "food_drink",
    title: ":cake:",
    icon: "_1f370"
  },
  {
    group: "food_drink",
    title: ":birthday:",
    icon: "_1f382"
  },
  {
    group: "food_drink",
    title: ":moon_cake:",
    icon: "_1f96e"
  },
  {
    group: "food_drink",
    title: ":cupcake:",
    icon: "_1f9c1"
  },
  {
    group: "food_drink",
    title: ":custard:",
    icon: "_1f36e"
  },
  {
    group: "food_drink",
    title: ":lollipop:",
    icon: "_1f36d"
  },
  {
    group: "food_drink",
    title: ":candy:",
    icon: "_1f36c"
  },
  {
    group: "food_drink",
    title: ":chocolate_bar:",
    icon: "_1f36b"
  },
  {
    group: "food_drink",
    title: ":popcorn:",
    icon: "_1f37f"
  },
  {
    group: "food_drink",
    title: ":salt:",
    icon: "_1f9c2"
  },
  {
    group: "food_drink",
    title: ":doughnut:",
    icon: "_1f369"
  },
  {
    group: "food_drink",
    title: ":dumpling:",
    icon: "_1f95f"
  },
  {
    group: "food_drink",
    title: ":cookie:",
    icon: "_1f36a"
  },
  {
    group: "food_drink",
    title: ":chestnut:",
    icon: "_1f330"
  },
  {
    group: "food_drink",
    title: ":peanuts:",
    icon: "_1f95c"
  },
  {
    group: "food_drink",
    title: ":honey_pot:",
    icon: "_1f36f"
  },
  {
    group: "food_drink",
    title: ":milk:",
    icon: "_1f95b"
  },
  {
    group: "food_drink",
    title: ":baby_bottle:",
    icon: "_1f37c"
  },
  {
    group: "food_drink",
    title: ":coffee:",
    icon: "_2615"
  },
  {
    group: "food_drink",
    title: ":tea:",
    icon: "_1f375"
  },
  {
    group: "food_drink",
    title: ":cup_with_straw:",
    icon: "_1f964"
  },
  {
    group: "food_drink",
    title: ":sake:",
    icon: "_1f376"
  },
  {
    group: "food_drink",
    title: ":beer:",
    icon: "_1f37a"
  },
  {
    group: "food_drink",
    title: ":beers:",
    icon: "_1f37b"
  },
  {
    group: "food_drink",
    title: ":champagne_glass:",
    icon: "_1f942"
  },
  {
    group: "food_drink",
    title: ":wine_glass:",
    icon: "_1f377"
  },
  {
    group: "food_drink",
    title: ":tumbler_glass:",
    icon: "_1f943"
  },
  {
    group: "food_drink",
    title: ":cocktail:",
    icon: "_1f378"
  },
  {
    group: "food_drink",
    title: ":tropical_drink:",
    icon: "_1f379"
  },
  {
    group: "food_drink",
    title: ":champagne:",
    icon: "_1f37e"
  },
  {
    group: "food_drink",
    title: ":spoon:",
    icon: "_1f944"
  },
  {
    group: "food_drink",
    title: ":fork_and_knife:",
    icon: "_1f374"
  },
  {
    group: "food_drink",
    title: ":fork_knife_plate:",
    icon: "_1f37d"
  },
  {
    group: "food_drink",
    title: ":bowl_with_spoon:",
    icon: "_1f963"
  },
  {
    group: "food_drink",
    title: ":takeout_box:",
    icon: "_1f961"
  },
  {
    group: "food_drink",
    title: ":chopsticks:",
    icon: "_1f962"
  },
  {
    group: "activity",
    title: ":soccer:",
    icon: "_26bd"
  },
  {
    group: "activity",
    title: ":basketball:",
    icon: "_1f3c0"
  },
  {
    group: "activity",
    title: ":football:",
    icon: "_1f3c8"
  },
  {
    group: "activity",
    title: ":baseball:",
    icon: "_26be"
  },
  {
    group: "activity",
    title: ":softball:",
    icon: "_1f94e"
  },
  {
    group: "activity",
    title: ":tennis:",
    icon: "_1f3be"
  },
  {
    group: "activity",
    title: ":volleyball:",
    icon: "_1f3d0"
  },
  {
    group: "activity",
    title: ":rugby_football:",
    icon: "_1f3c9"
  },
  {
    group: "activity",
    title: ":8ball:",
    icon: "_1f3b1"
  },
  {
    group: "activity",
    title: ":ping_pong:",
    icon: "_1f3d3"
  },
  {
    group: "activity",
    title: ":badminton:",
    icon: "_1f3f8"
  },
  {
    group: "activity",
    title: ":goal:",
    icon: "_1f945"
  },
  {
    group: "activity",
    title: ":hockey:",
    icon: "_1f3d2"
  },
  {
    group: "activity",
    title: ":field_hockey:",
    icon: "_1f3d1"
  },
  {
    group: "activity",
    title: ":cricket_game:",
    icon: "_1f3cf"
  },
  {
    group: "activity",
    title: ":lacrosse:",
    icon: "_1f94d"
  },
  {
    group: "activity",
    title: ":golf:",
    icon: "_26f3"
  },
  {
    group: "activity",
    title: ":flying_disc:",
    icon: "_1f94f"
  },
  {
    group: "activity",
    title: ":bow_and_arrow:",
    icon: "_1f3f9"
  },
  {
    group: "activity",
    title: ":fishing_pole_and_fish:",
    icon: "_1f3a3"
  },
  {
    group: "activity",
    title: ":boxing_glove:",
    icon: "_1f94a"
  },
  {
    group: "activity",
    title: ":martial_arts_uniform:",
    icon: "_1f94b"
  },
  {
    group: "activity",
    title: ":running_shirt_with_sash:",
    icon: "_1f3bd"
  },
  {
    group: "activity",
    title: ":skateboard:",
    icon: "_1f6f9"
  },
  {
    group: "activity",
    title: ":ice_skate:",
    icon: "_26f8"
  },
  {
    group: "activity",
    title: ":curling_stone:",
    icon: "_1f94c"
  },
  {
    group: "activity",
    title: ":sled:",
    icon: "_1f6f7"
  },
  {
    group: "activity",
    title: ":ski:",
    icon: "_1f3bf"
  },
  {
    group: "activity",
    title: ":skier:",
    icon: "_26f7"
  },
  {
    group: "activity",
    title: ":snowboarder_tone3:",
    icon: "_1f3c2-1f3fd"
  },
  {
    group: "activity",
    title: ":person_lifting_weights_tone3:",
    icon: "_1f3cb-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_lifting_weights_tone3:",
    icon: "_1f3cb-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_lifting_weights_tone3:",
    icon: "_1f3cb-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":people_wrestling:",
    icon: "_1f93c"
  },
  {
    group: "activity",
    title: ":women_wrestling:",
    icon: "_1f93c-2640"
  },
  {
    group: "activity",
    title: ":men_wrestling:",
    icon: "_1f93c-2642"
  },
  {
    group: "activity",
    title: ":person_doing_cartwheel_tone3:",
    icon: "_1f938-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_cartwheeling_tone3:",
    icon: "_1f938-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_cartwheeling_tone3:",
    icon: "_1f938-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_bouncing_ball_tone3:",
    icon: "_26f9-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_bouncing_ball_tone3:",
    icon: "_26f9-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_bouncing_ball_tone3:",
    icon: "_26f9-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_fencing:",
    icon: "_1f93a"
  },
  {
    group: "activity",
    title: ":person_playing_handball_tone3:",
    icon: "_1f93e-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_playing_handball_tone3:",
    icon: "_1f93e-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_playing_handball_tone3:",
    icon: "_1f93e-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_golfing_tone3:",
    icon: "_1f3cc-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_golfing_tone3:",
    icon: "_1f3cc-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_golfing_tone3:",
    icon: "_1f3cc-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":horse_racing_tone3:",
    icon: "_1f3c7-1f3fd"
  },
  {
    group: "activity",
    title: ":person_in_lotus_position_tone3:",
    icon: "_1f9d8-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_in_lotus_position_tone3:",
    icon: "_1f9d8-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_in_lotus_position_tone3:",
    icon: "_1f9d8-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_surfing_tone3:",
    icon: "_1f3c4-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_surfing_tone3:",
    icon: "_1f3c4-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_surfing_tone3:",
    icon: "_1f3c4-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_swimming_tone3:",
    icon: "_1f3ca-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_swimming_tone3:",
    icon: "_1f3ca-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_swimming_tone3:",
    icon: "_1f3ca-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_playing_water_polo_tone3:",
    icon: "_1f93d-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_playing_water_polo_tone3:",
    icon: "_1f93d-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_playing_water_polo_tone3:",
    icon: "_1f93d-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_rowing_boat_tone3:",
    icon: "_1f6a3-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_rowing_boat_tone3:",
    icon: "_1f6a3-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_rowing_boat_tone3:",
    icon: "_1f6a3-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_climbing_tone3:",
    icon: "_1f9d7-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_climbing_tone3:",
    icon: "_1f9d7-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_climbing_tone3:",
    icon: "_1f9d7-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_mountain_biking_tone3:",
    icon: "_1f6b5-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_mountain_biking_tone3:",
    icon: "_1f6b5-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_mountain_biking_tone3:",
    icon: "_1f6b5-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":person_biking_tone3:",
    icon: "_1f6b4-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_biking_tone3:",
    icon: "_1f6b4-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_biking_tone3:",
    icon: "_1f6b4-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":trophy:",
    icon: "_1f3c6"
  },
  {
    group: "activity",
    title: ":first_place:",
    icon: "_1f947"
  },
  {
    group: "activity",
    title: ":second_place:",
    icon: "_1f948"
  },
  {
    group: "activity",
    title: ":third_place:",
    icon: "_1f949"
  },
  {
    group: "activity",
    title: ":medal:",
    icon: "_1f3c5"
  },
  {
    group: "activity",
    title: ":military_medal:",
    icon: "_1f396"
  },
  {
    group: "activity",
    title: ":rosette:",
    icon: "_1f3f5"
  },
  {
    group: "activity",
    title: ":reminder_ribbon:",
    icon: "_1f397"
  },
  {
    group: "activity",
    title: ":ticket:",
    icon: "_1f3ab"
  },
  {
    group: "activity",
    title: ":tickets:",
    icon: "_1f39f"
  },
  {
    group: "activity",
    title: ":circus_tent:",
    icon: "_1f3aa"
  },
  {
    group: "activity",
    title: ":person_juggling_tone3:",
    icon: "_1f939-1f3fd"
  },
  {
    group: "activity",
    title: ":woman_juggling_tone3:",
    icon: "_1f939-1f3fd-2640"
  },
  {
    group: "activity",
    title: ":man_juggling_tone3:",
    icon: "_1f939-1f3fd-2642"
  },
  {
    group: "activity",
    title: ":performing_arts:",
    icon: "_1f3ad"
  },
  {
    group: "activity",
    title: ":art:",
    icon: "_1f3a8"
  },
  {
    group: "activity",
    title: ":clapper:",
    icon: "_1f3ac"
  },
  {
    group: "activity",
    title: ":microphone:",
    icon: "_1f3a4"
  },
  {
    group: "activity",
    title: ":headphones:",
    icon: "_1f3a7"
  },
  {
    group: "activity",
    title: ":musical_score:",
    icon: "_1f3bc"
  },
  {
    group: "activity",
    title: ":musical_keyboard:",
    icon: "_1f3b9"
  },
  {
    group: "activity",
    title: ":drum:",
    icon: "_1f941"
  },
  {
    group: "activity",
    title: ":saxophone:",
    icon: "_1f3b7"
  },
  {
    group: "activity",
    title: ":trumpet:",
    icon: "_1f3ba"
  },
  {
    group: "activity",
    title: ":guitar:",
    icon: "_1f3b8"
  },
  {
    group: "activity",
    title: ":violin:",
    icon: "_1f3bb"
  },
  {
    group: "activity",
    title: ":game_die:",
    icon: "_1f3b2"
  },
  {
    group: "activity",
    title: ":dart:",
    icon: "_1f3af"
  },
  {
    group: "activity",
    title: ":bowling:",
    icon: "_1f3b3"
  },
  {
    group: "activity",
    title: ":video_game:",
    icon: "_1f3ae"
  },
  {
    group: "activity",
    title: ":slot_machine:",
    icon: "_1f3b0"
  },
  {
    group: "travel_places",
    title: ":red_car:",
    icon: "_1f697"
  },
  {
    group: "travel_places",
    title: ":taxi:",
    icon: "_1f695"
  },
  {
    group: "travel_places",
    title: ":blue_car:",
    icon: "_1f699"
  },
  {
    group: "travel_places",
    title: ":bus:",
    icon: "_1f68c"
  },
  {
    group: "travel_places",
    title: ":trolleybus:",
    icon: "_1f68e"
  },
  {
    group: "travel_places",
    title: ":race_car:",
    icon: "_1f3ce"
  },
  {
    group: "travel_places",
    title: ":police_car:",
    icon: "_1f693"
  },
  {
    group: "travel_places",
    title: ":ambulance:",
    icon: "_1f691"
  },
  {
    group: "travel_places",
    title: ":fire_engine:",
    icon: "_1f692"
  },
  {
    group: "travel_places",
    title: ":minibus:",
    icon: "_1f690"
  },
  {
    group: "travel_places",
    title: ":truck:",
    icon: "_1f69a"
  },
  {
    group: "travel_places",
    title: ":articulated_lorry:",
    icon: "_1f69b"
  },
  {
    group: "travel_places",
    title: ":tractor:",
    icon: "_1f69c"
  },
  {
    group: "travel_places",
    title: ":scooter:",
    icon: "_1f6f4"
  },
  {
    group: "travel_places",
    title: ":bike:",
    icon: "_1f6b2"
  },
  {
    group: "travel_places",
    title: ":motor_scooter:",
    icon: "_1f6f5"
  },
  {
    group: "travel_places",
    title: ":motorcycle:",
    icon: "_1f3cd"
  },
  {
    group: "travel_places",
    title: ":rotating_light:",
    icon: "_1f6a8"
  },
  {
    group: "travel_places",
    title: ":oncoming_police_car:",
    icon: "_1f694"
  },
  {
    group: "travel_places",
    title: ":oncoming_bus:",
    icon: "_1f68d"
  },
  {
    group: "travel_places",
    title: ":oncoming_automobile:",
    icon: "_1f698"
  },
  {
    group: "travel_places",
    title: ":oncoming_taxi:",
    icon: "_1f696"
  },
  {
    group: "travel_places",
    title: ":aerial_tramway:",
    icon: "_1f6a1"
  },
  {
    group: "travel_places",
    title: ":mountain_cableway:",
    icon: "_1f6a0"
  },
  {
    group: "travel_places",
    title: ":suspension_railway:",
    icon: "_1f69f"
  },
  {
    group: "travel_places",
    title: ":railway_car:",
    icon: "_1f683"
  },
  {
    group: "travel_places",
    title: ":train:",
    icon: "_1f68b"
  },
  {
    group: "travel_places",
    title: ":mountain_railway:",
    icon: "_1f69e"
  },
  {
    group: "travel_places",
    title: ":monorail:",
    icon: "_1f69d"
  },
  {
    group: "travel_places",
    title: ":bullettrain_side:",
    icon: "_1f684"
  },
  {
    group: "travel_places",
    title: ":bullettrain_front:",
    icon: "_1f685"
  },
  {
    group: "travel_places",
    title: ":light_rail:",
    icon: "_1f688"
  },
  {
    group: "travel_places",
    title: ":steam_locomotive:",
    icon: "_1f682"
  },
  {
    group: "travel_places",
    title: ":train2:",
    icon: "_1f686"
  },
  {
    group: "travel_places",
    title: ":metro:",
    icon: "_1f687"
  },
  {
    group: "travel_places",
    title: ":tram:",
    icon: "_1f68a"
  },
  {
    group: "travel_places",
    title: ":station:",
    icon: "_1f689"
  },
  {
    group: "travel_places",
    title: ":airplane:",
    icon: "_2708"
  },
  {
    group: "travel_places",
    title: ":airplane_departure:",
    icon: "_1f6eb"
  },
  {
    group: "travel_places",
    title: ":airplane_arriving:",
    icon: "_1f6ec"
  },
  {
    group: "travel_places",
    title: ":airplane_small:",
    icon: "_1f6e9"
  },
  {
    group: "travel_places",
    title: ":seat:",
    icon: "_1f4ba"
  },
  {
    group: "travel_places",
    title: ":luggage:",
    icon: "_1f9f3"
  },
  {
    group: "travel_places",
    title: ":satellite_orbital:",
    icon: "_1f6f0"
  },
  {
    group: "travel_places",
    title: ":rocket:",
    icon: "_1f680"
  },
  {
    group: "travel_places",
    title: ":flying_saucer:",
    icon: "_1f6f8"
  },
  {
    group: "travel_places",
    title: ":helicopter:",
    icon: "_1f681"
  },
  {
    group: "travel_places",
    title: ":canoe:",
    icon: "_1f6f6"
  },
  {
    group: "travel_places",
    title: ":sailboat:",
    icon: "_26f5"
  },
  {
    group: "travel_places",
    title: ":speedboat:",
    icon: "_1f6a4"
  },
  {
    group: "travel_places",
    title: ":motorboat:",
    icon: "_1f6e5"
  },
  {
    group: "travel_places",
    title: ":cruise_ship:",
    icon: "_1f6f3"
  },
  {
    group: "travel_places",
    title: ":ferry:",
    icon: "_26f4"
  },
  {
    group: "travel_places",
    title: ":ship:",
    icon: "_1f6a2"
  },
  {
    group: "travel_places",
    title: ":anchor:",
    icon: "_2693"
  },
  {
    group: "travel_places",
    title: ":fuelpump:",
    icon: "_26fd"
  },
  {
    group: "travel_places",
    title: ":construction:",
    icon: "_1f6a7"
  },
  {
    group: "travel_places",
    title: ":vertical_traffic_light:",
    icon: "_1f6a6"
  },
  {
    group: "travel_places",
    title: ":traffic_light:",
    icon: "_1f6a5"
  },
  {
    group: "travel_places",
    title: ":busstop:",
    icon: "_1f68f"
  },
  {
    group: "travel_places",
    title: ":map:",
    icon: "_1f5fa"
  },
  {
    group: "travel_places",
    title: ":moyai:",
    icon: "_1f5ff"
  },
  {
    group: "travel_places",
    title: ":statue_of_liberty:",
    icon: "_1f5fd"
  },
  {
    group: "travel_places",
    title: ":tokyo_tower:",
    icon: "_1f5fc"
  },
  {
    group: "travel_places",
    title: ":european_castle:",
    icon: "_1f3f0"
  },
  {
    group: "travel_places",
    title: ":japanese_castle:",
    icon: "_1f3ef"
  },
  {
    group: "travel_places",
    title: ":stadium:",
    icon: "_1f3df"
  },
  {
    group: "travel_places",
    title: ":ferris_wheel:",
    icon: "_1f3a1"
  },
  {
    group: "travel_places",
    title: ":roller_coaster:",
    icon: "_1f3a2"
  },
  {
    group: "travel_places",
    title: ":carousel_horse:",
    icon: "_1f3a0"
  },
  {
    group: "travel_places",
    title: ":fountain:",
    icon: "_26f2"
  },
  {
    group: "travel_places",
    title: ":beach_umbrella:",
    icon: "_26f1"
  },
  {
    group: "travel_places",
    title: ":beach:",
    icon: "_1f3d6"
  },
  {
    group: "travel_places",
    title: ":island:",
    icon: "_1f3dd"
  },
  {
    group: "travel_places",
    title: ":desert:",
    icon: "_1f3dc"
  },
  {
    group: "travel_places",
    title: ":volcano:",
    icon: "_1f30b"
  },
  {
    group: "travel_places",
    title: ":mountain:",
    icon: "_26f0"
  },
  {
    group: "travel_places",
    title: ":mountain_snow:",
    icon: "_1f3d4"
  },
  {
    group: "travel_places",
    title: ":mount_fuji:",
    icon: "_1f5fb"
  },
  {
    group: "travel_places",
    title: ":camping:",
    icon: "_1f3d5"
  },
  {
    group: "travel_places",
    title: ":tent:",
    icon: "_26fa"
  },
  {
    group: "travel_places",
    title: ":house:",
    icon: "_1f3e0"
  },
  {
    group: "travel_places",
    title: ":house_with_garden:",
    icon: "_1f3e1"
  },
  {
    group: "travel_places",
    title: ":homes:",
    icon: "_1f3d8"
  },
  {
    group: "travel_places",
    title: ":house_abandoned:",
    icon: "_1f3da"
  },
  {
    group: "travel_places",
    title: ":construction_site:",
    icon: "_1f3d7"
  },
  {
    group: "travel_places",
    title: ":factory:",
    icon: "_1f3ed"
  },
  {
    group: "travel_places",
    title: ":office:",
    icon: "_1f3e2"
  },
  {
    group: "travel_places",
    title: ":department_store:",
    icon: "_1f3ec"
  },
  {
    group: "travel_places",
    title: ":post_office:",
    icon: "_1f3e3"
  },
  {
    group: "travel_places",
    title: ":european_post_office:",
    icon: "_1f3e4"
  },
  {
    group: "travel_places",
    title: ":hospital:",
    icon: "_1f3e5"
  },
  {
    group: "travel_places",
    title: ":bank:",
    icon: "_1f3e6"
  },
  {
    group: "travel_places",
    title: ":hotel:",
    icon: "_1f3e8"
  },
  {
    group: "travel_places",
    title: ":convenience_store:",
    icon: "_1f3ea"
  },
  {
    group: "travel_places",
    title: ":school:",
    icon: "_1f3eb"
  },
  {
    group: "travel_places",
    title: ":love_hotel:",
    icon: "_1f3e9"
  },
  {
    group: "travel_places",
    title: ":wedding:",
    icon: "_1f492"
  },
  {
    group: "travel_places",
    title: ":classical_building:",
    icon: "_1f3db"
  },
  {
    group: "travel_places",
    title: ":church:",
    icon: "_26ea"
  },
  {
    group: "travel_places",
    title: ":mosque:",
    icon: "_1f54c"
  },
  {
    group: "travel_places",
    title: ":synagogue:",
    icon: "_1f54d"
  },
  {
    group: "travel_places",
    title: ":kaaba:",
    icon: "_1f54b"
  },
  {
    group: "travel_places",
    title: ":shinto_shrine:",
    icon: "_26e9"
  },
  {
    group: "travel_places",
    title: ":railway_track:",
    icon: "_1f6e4"
  },
  {
    group: "travel_places",
    title: ":motorway:",
    icon: "_1f6e3"
  },
  {
    group: "travel_places",
    title: ":japan:",
    icon: "_1f5fe"
  },
  {
    group: "travel_places",
    title: ":rice_scene:",
    icon: "_1f391"
  },
  {
    group: "travel_places",
    title: ":park:",
    icon: "_1f3de"
  },
  {
    group: "travel_places",
    title: ":sunrise:",
    icon: "_1f305"
  },
  {
    group: "travel_places",
    title: ":sunrise_over_mountains:",
    icon: "_1f304"
  },
  {
    group: "travel_places",
    title: ":stars:",
    icon: "_1f320"
  },
  {
    group: "travel_places",
    title: ":sparkler:",
    icon: "_1f387"
  },
  {
    group: "travel_places",
    title: ":fireworks:",
    icon: "_1f386"
  },
  {
    group: "travel_places",
    title: ":firecracker:",
    icon: "_1f9e8"
  },
  {
    group: "travel_places",
    title: ":city_sunset:",
    icon: "_1f307"
  },
  {
    group: "travel_places",
    title: ":city_dusk:",
    icon: "_1f306"
  },
  {
    group: "travel_places",
    title: ":cityscape:",
    icon: "_1f3d9"
  },
  {
    group: "travel_places",
    title: ":night_with_stars:",
    icon: "_1f303"
  },
  {
    group: "travel_places",
    title: ":milky_way:",
    icon: "_1f30c"
  },
  {
    group: "travel_places",
    title: ":bridge_at_night:",
    icon: "_1f309"
  },
  {
    group: "travel_places",
    title: ":foggy:",
    icon: "_1f301"
  },
  {
    group: "objects",
    title: ":watch:",
    icon: "_231a"
  },
  {
    group: "objects",
    title: ":iphone:",
    icon: "_1f4f1"
  },
  {
    group: "objects",
    title: ":calling:",
    icon: "_1f4f2"
  },
  {
    group: "objects",
    title: ":computer:",
    icon: "_1f4bb"
  },
  {
    group: "objects",
    title: ":keyboard:",
    icon: "_2328"
  },
  {
    group: "objects",
    title: ":desktop:",
    icon: "_1f5a5"
  },
  {
    group: "objects",
    title: ":printer:",
    icon: "_1f5a8"
  },
  {
    group: "objects",
    title: ":mouse_three_button:",
    icon: "_1f5b1"
  },
  {
    group: "objects",
    title: ":trackball:",
    icon: "_1f5b2"
  },
  {
    group: "objects",
    title: ":joystick:",
    icon: "_1f579"
  },
  {
    group: "objects",
    title: ":chess_pawn:",
    icon: "_265f"
  },
  {
    group: "objects",
    title: ":jigsaw:",
    icon: "_1f9e9"
  },
  {
    group: "objects",
    title: ":compression:",
    icon: "_1f5dc"
  },
  {
    group: "objects",
    title: ":minidisc:",
    icon: "_1f4bd"
  },
  {
    group: "objects",
    title: ":floppy_disk:",
    icon: "_1f4be"
  },
  {
    group: "objects",
    title: ":cd:",
    icon: "_1f4bf"
  },
  {
    group: "objects",
    title: ":dvd:",
    icon: "_1f4c0"
  },
  {
    group: "objects",
    title: ":vhs:",
    icon: "_1f4fc"
  },
  {
    group: "objects",
    title: ":camera:",
    icon: "_1f4f7"
  },
  {
    group: "objects",
    title: ":camera_with_flash:",
    icon: "_1f4f8"
  },
  {
    group: "objects",
    title: ":video_camera:",
    icon: "_1f4f9"
  },
  {
    group: "objects",
    title: ":movie_camera:",
    icon: "_1f3a5"
  },
  {
    group: "objects",
    title: ":projector:",
    icon: "_1f4fd"
  },
  {
    group: "objects",
    title: ":film_frames:",
    icon: "_1f39e"
  },
  {
    group: "objects",
    title: ":telephone_receiver:",
    icon: "_1f4de"
  },
  {
    group: "objects",
    title: ":telephone:",
    icon: "_260e"
  },
  {
    group: "objects",
    title: ":pager:",
    icon: "_1f4df"
  },
  {
    group: "objects",
    title: ":fax:",
    icon: "_1f4e0"
  },
  {
    group: "objects",
    title: ":tv:",
    icon: "_1f4fa"
  },
  {
    group: "objects",
    title: ":radio:",
    icon: "_1f4fb"
  },
  {
    group: "objects",
    title: ":microphone2:",
    icon: "_1f399"
  },
  {
    group: "objects",
    title: ":level_slider:",
    icon: "_1f39a"
  },
  {
    group: "objects",
    title: ":control_knobs:",
    icon: "_1f39b"
  },
  {
    group: "objects",
    title: ":stopwatch:",
    icon: "_23f1"
  },
  {
    group: "objects",
    title: ":timer:",
    icon: "_23f2"
  },
  {
    group: "objects",
    title: ":alarm_clock:",
    icon: "_23f0"
  },
  {
    group: "objects",
    title: ":clock:",
    icon: "_1f570"
  },
  {
    group: "objects",
    title: ":hourglass:",
    icon: "_231b"
  },
  {
    group: "objects",
    title: ":hourglass_flowing_sand:",
    icon: "_23f3"
  },
  {
    group: "objects",
    title: ":satellite:",
    icon: "_1f4e1"
  },
  {
    group: "objects",
    title: ":compass:",
    icon: "_1f9ed"
  },
  {
    group: "objects",
    title: ":battery:",
    icon: "_1f50b"
  },
  {
    group: "objects",
    title: ":electric_plug:",
    icon: "_1f50c"
  },
  {
    group: "objects",
    title: ":magnet:",
    icon: "_1f9f2"
  },
  {
    group: "objects",
    title: ":bulb:",
    icon: "_1f4a1"
  },
  {
    group: "objects",
    title: ":flashlight:",
    icon: "_1f526"
  },
  {
    group: "objects",
    title: ":candle:",
    icon: "_1f56f"
  },
  {
    group: "objects",
    title: ":fire_extinguisher:",
    icon: "_1f9ef"
  },
  {
    group: "objects",
    title: ":wastebasket:",
    icon: "_1f5d1"
  },
  {
    group: "objects",
    title: ":oil:",
    icon: "_1f6e2"
  },
  {
    group: "objects",
    title: ":money_with_wings:",
    icon: "_1f4b8"
  },
  {
    group: "objects",
    title: ":dollar:",
    icon: "_1f4b5"
  },
  {
    group: "objects",
    title: ":yen:",
    icon: "_1f4b4"
  },
  {
    group: "objects",
    title: ":euro:",
    icon: "_1f4b6"
  },
  {
    group: "objects",
    title: ":pound:",
    icon: "_1f4b7"
  },
  {
    group: "objects",
    title: ":moneybag:",
    icon: "_1f4b0"
  },
  {
    group: "objects",
    title: ":credit_card:",
    icon: "_1f4b3"
  },
  {
    group: "objects",
    title: ":gem:",
    icon: "_1f48e"
  },
  {
    group: "objects",
    title: ":nazar_amulet:",
    icon: "_1f9ff"
  },
  {
    group: "objects",
    title: ":bricks:",
    icon: "_1f9f1"
  },
  {
    group: "objects",
    title: ":scales:",
    icon: "_2696"
  },
  {
    group: "objects",
    title: ":toolbox:",
    icon: "_1f9f0"
  },
  {
    group: "objects",
    title: ":wrench:",
    icon: "_1f527"
  },
  {
    group: "objects",
    title: ":hammer:",
    icon: "_1f528"
  },
  {
    group: "objects",
    title: ":hammer_pick:",
    icon: "_2692"
  },
  {
    group: "objects",
    title: ":tools:",
    icon: "_1f6e0"
  },
  {
    group: "objects",
    title: ":pick:",
    icon: "_26cf"
  },
  {
    group: "objects",
    title: ":nut_and_bolt:",
    icon: "_1f529"
  },
  {
    group: "objects",
    title: ":gear:",
    icon: "_2699"
  },
  {
    group: "objects",
    title: ":chains:",
    icon: "_26d3"
  },
  {
    group: "objects",
    title: ":gun:",
    icon: "_1f52b"
  },
  {
    group: "objects",
    title: ":bomb:",
    icon: "_1f4a3"
  },
  {
    group: "objects",
    title: ":knife:",
    icon: "_1f52a"
  },
  {
    group: "objects",
    title: ":dagger:",
    icon: "_1f5e1"
  },
  {
    group: "objects",
    title: ":crossed_swords:",
    icon: "_2694"
  },
  {
    group: "objects",
    title: ":shield:",
    icon: "_1f6e1"
  },
  {
    group: "objects",
    title: ":smoking:",
    icon: "_1f6ac"
  },
  {
    group: "objects",
    title: ":coffin:",
    icon: "_26b0"
  },
  {
    group: "objects",
    title: ":urn:",
    icon: "_26b1"
  },
  {
    group: "objects",
    title: ":amphora:",
    icon: "_1f3fa"
  },
  {
    group: "objects",
    title: ":crystal_ball:",
    icon: "_1f52e"
  },
  {
    group: "objects",
    title: ":prayer_beads:",
    icon: "_1f4ff"
  },
  {
    group: "objects",
    title: ":barber:",
    icon: "_1f488"
  },
  {
    group: "objects",
    title: ":alembic:",
    icon: "_2697"
  },
  {
    group: "objects",
    title: ":test_tube:",
    icon: "_1f9ea"
  },
  {
    group: "objects",
    title: ":petri_dish:",
    icon: "_1f9eb"
  },
  {
    group: "objects",
    title: ":dna:",
    icon: "_1f9ec"
  },
  {
    group: "objects",
    title: ":abacus:",
    icon: "_1f9ee"
  },
  {
    group: "objects",
    title: ":telescope:",
    icon: "_1f52d"
  },
  {
    group: "objects",
    title: ":microscope:",
    icon: "_1f52c"
  },
  {
    group: "objects",
    title: ":hole:",
    icon: "_1f573"
  },
  {
    group: "objects",
    title: ":pill:",
    icon: "_1f48a"
  },
  {
    group: "objects",
    title: ":syringe:",
    icon: "_1f489"
  },
  {
    group: "objects",
    title: ":thermometer:",
    icon: "_1f321"
  },
  {
    group: "objects",
    title: ":toilet:",
    icon: "_1f6bd"
  },
  {
    group: "objects",
    title: ":potable_water:",
    icon: "_1f6b0"
  },
  {
    group: "objects",
    title: ":shower:",
    icon: "_1f6bf"
  },
  {
    group: "objects",
    title: ":bathtub:",
    icon: "_1f6c1"
  },
  {
    group: "objects",
    title: ":bath_tone3:",
    icon: "_1f6c0-1f3fd"
  },
  {
    group: "objects",
    title: ":broom:",
    icon: "_1f9f9"
  },
  {
    group: "objects",
    title: ":basket:",
    icon: "_1f9fa"
  },
  {
    group: "objects",
    title: ":roll_of_paper:",
    icon: "_1f9fb"
  },
  {
    group: "objects",
    title: ":soap:",
    icon: "_1f9fc"
  },
  {
    group: "objects",
    title: ":sponge:",
    icon: "_1f9fd"
  },
  {
    group: "objects",
    title: ":squeeze_bottle:",
    icon: "_1f9f4"
  },
  {
    group: "objects",
    title: ":thread:",
    icon: "_1f9f5"
  },
  {
    group: "objects",
    title: ":yarn:",
    icon: "_1f9f6"
  },
  {
    group: "objects",
    title: ":bellhop:",
    icon: "_1f6ce"
  },
  {
    group: "objects",
    title: ":key:",
    icon: "_1f511"
  },
  {
    group: "objects",
    title: ":key2:",
    icon: "_1f5dd"
  },
  {
    group: "objects",
    title: ":door:",
    icon: "_1f6aa"
  },
  {
    group: "objects",
    title: ":couch:",
    icon: "_1f6cb"
  },
  {
    group: "objects",
    title: ":bed:",
    icon: "_1f6cf"
  },
  {
    group: "objects",
    title: ":sleeping_accommodation:",
    icon: "_1f6cc"
  },
  {
    group: "objects",
    title: ":teddy_bear:",
    icon: "_1f9f8"
  },
  {
    group: "objects",
    title: ":frame_photo:",
    icon: "_1f5bc"
  },
  {
    group: "objects",
    title: ":shopping_bags:",
    icon: "_1f6cd"
  },
  {
    group: "objects",
    title: ":shopping_cart:",
    icon: "_1f6d2"
  },
  {
    group: "objects",
    title: ":gift:",
    icon: "_1f381"
  },
  {
    group: "objects",
    title: ":balloon:",
    icon: "_1f388"
  },
  {
    group: "objects",
    title: ":flags:",
    icon: "_1f38f"
  },
  {
    group: "objects",
    title: ":ribbon:",
    icon: "_1f380"
  },
  {
    group: "objects",
    title: ":confetti_ball:",
    icon: "_1f38a"
  },
  {
    group: "objects",
    title: ":tada:",
    icon: "_1f389"
  },
  {
    group: "objects",
    title: ":dolls:",
    icon: "_1f38e"
  },
  {
    group: "objects",
    title: ":izakaya_lantern:",
    icon: "_1f3ee"
  },
  {
    group: "objects",
    title: ":wind_chime:",
    icon: "_1f390"
  },
  {
    group: "objects",
    title: ":red_envelope:",
    icon: "_1f9e7"
  },
  {
    group: "objects",
    title: ":envelope:",
    icon: "_2709"
  },
  {
    group: "objects",
    title: ":envelope_with_arrow:",
    icon: "_1f4e9"
  },
  {
    group: "objects",
    title: ":incoming_envelope:",
    icon: "_1f4e8"
  },
  {
    group: "objects",
    title: ":e-mail:",
    icon: "_1f4e7"
  },
  {
    group: "objects",
    title: ":love_letter:",
    icon: "_1f48c"
  },
  {
    group: "objects",
    title: ":inbox_tray:",
    icon: "_1f4e5"
  },
  {
    group: "objects",
    title: ":outbox_tray:",
    icon: "_1f4e4"
  },
  {
    group: "objects",
    title: ":package:",
    icon: "_1f4e6"
  },
  {
    group: "objects",
    title: ":label:",
    icon: "_1f3f7"
  },
  {
    group: "objects",
    title: ":mailbox_closed:",
    icon: "_1f4ea"
  },
  {
    group: "objects",
    title: ":mailbox:",
    icon: "_1f4eb"
  },
  {
    group: "objects",
    title: ":mailbox_with_mail:",
    icon: "_1f4ec"
  },
  {
    group: "objects",
    title: ":mailbox_with_no_mail:",
    icon: "_1f4ed"
  },
  {
    group: "objects",
    title: ":postbox:",
    icon: "_1f4ee"
  },
  {
    group: "objects",
    title: ":postal_horn:",
    icon: "_1f4ef"
  },
  {
    group: "objects",
    title: ":scroll:",
    icon: "_1f4dc"
  },
  {
    group: "objects",
    title: ":page_with_curl:",
    icon: "_1f4c3"
  },
  {
    group: "objects",
    title: ":page_facing_up:",
    icon: "_1f4c4"
  },
  {
    group: "objects",
    title: ":receipt:",
    icon: "_1f9fe"
  },
  {
    group: "objects",
    title: ":bookmark_tabs:",
    icon: "_1f4d1"
  },
  {
    group: "objects",
    title: ":bar_chart:",
    icon: "_1f4ca"
  },
  {
    group: "objects",
    title: ":chart_with_upwards_trend:",
    icon: "_1f4c8"
  },
  {
    group: "objects",
    title: ":chart_with_downwards_trend:",
    icon: "_1f4c9"
  },
  {
    group: "objects",
    title: ":notepad_spiral:",
    icon: "_1f5d2"
  },
  {
    group: "objects",
    title: ":calendar_spiral:",
    icon: "_1f5d3"
  },
  {
    group: "objects",
    title: ":calendar:",
    icon: "_1f4c6"
  },
  {
    group: "objects",
    title: ":date:",
    icon: "_1f4c5"
  },
  {
    group: "objects",
    title: ":card_index:",
    icon: "_1f4c7"
  },
  {
    group: "objects",
    title: ":card_box:",
    icon: "_1f5c3"
  },
  {
    group: "objects",
    title: ":ballot_box:",
    icon: "_1f5f3"
  },
  {
    group: "objects",
    title: ":file_cabinet:",
    icon: "_1f5c4"
  },
  {
    group: "objects",
    title: ":clipboard:",
    icon: "_1f4cb"
  },
  {
    group: "objects",
    title: ":file_folder:",
    icon: "_1f4c1"
  },
  {
    group: "objects",
    title: ":open_file_folder:",
    icon: "_1f4c2"
  },
  {
    group: "objects",
    title: ":dividers:",
    icon: "_1f5c2"
  },
  {
    group: "objects",
    title: ":newspaper2:",
    icon: "_1f5de"
  },
  {
    group: "objects",
    title: ":newspaper:",
    icon: "_1f4f0"
  },
  {
    group: "objects",
    title: ":notebook:",
    icon: "_1f4d3"
  },
  {
    group: "objects",
    title: ":notebook_with_decorative_cover:",
    icon: "_1f4d4"
  },
  {
    group: "objects",
    title: ":ledger:",
    icon: "_1f4d2"
  },
  {
    group: "objects",
    title: ":closed_book:",
    icon: "_1f4d5"
  },
  {
    group: "objects",
    title: ":green_book:",
    icon: "_1f4d7"
  },
  {
    group: "objects",
    title: ":blue_book:",
    icon: "_1f4d8"
  },
  {
    group: "objects",
    title: ":orange_book:",
    icon: "_1f4d9"
  },
  {
    group: "objects",
    title: ":books:",
    icon: "_1f4da"
  },
  {
    group: "objects",
    title: ":book:",
    icon: "_1f4d6"
  },
  {
    group: "objects",
    title: ":bookmark:",
    icon: "_1f516"
  },
  {
    group: "objects",
    title: ":link:",
    icon: "_1f517"
  },
  {
    group: "objects",
    title: ":paperclip:",
    icon: "_1f4ce"
  },
  {
    group: "objects",
    title: ":paperclips:",
    icon: "_1f587"
  },
  {
    group: "objects",
    title: ":triangular_ruler:",
    icon: "_1f4d0"
  },
  {
    group: "objects",
    title: ":straight_ruler:",
    icon: "_1f4cf"
  },
  {
    group: "objects",
    title: ":safety_pin:",
    icon: "_1f9f7"
  },
  {
    group: "objects",
    title: ":pushpin:",
    icon: "_1f4cc"
  },
  {
    group: "objects",
    title: ":round_pushpin:",
    icon: "_1f4cd"
  },
  {
    group: "objects",
    title: ":scissors:",
    icon: "_2702"
  },
  {
    group: "objects",
    title: ":pen_ballpoint:",
    icon: "_1f58a"
  },
  {
    group: "objects",
    title: ":pen_fountain:",
    icon: "_1f58b"
  },
  {
    group: "objects",
    title: ":black_nib:",
    icon: "_2712"
  },
  {
    group: "objects",
    title: ":paintbrush:",
    icon: "_1f58c"
  },
  {
    group: "objects",
    title: ":crayon:",
    icon: "_1f58d"
  },
  {
    group: "objects",
    title: ":pencil:",
    icon: "_1f4dd"
  },
  {
    group: "objects",
    title: ":pencil2:",
    icon: "_270f"
  },
  {
    group: "objects",
    title: ":mag:",
    icon: "_1f50d"
  },
  {
    group: "objects",
    title: ":mag_right:",
    icon: "_1f50e"
  },
  {
    group: "objects",
    title: ":lock_with_ink_pen:",
    icon: "_1f50f"
  },
  {
    group: "objects",
    title: ":closed_lock_with_key:",
    icon: "_1f510"
  },
  {
    group: "objects",
    title: ":lock:",
    icon: "_1f512"
  },
  {
    group: "objects",
    title: ":unlock:",
    icon: "_1f513"
  },
  {
    group: "symbols",
    title: ":heart:",
    icon: "_2764"
  },
  {
    group: "symbols",
    title: ":orange_heart:",
    icon: "_1f9e1"
  },
  {
    group: "symbols",
    title: ":yellow_heart:",
    icon: "_1f49b"
  },
  {
    group: "symbols",
    title: ":green_heart:",
    icon: "_1f49a"
  },
  {
    group: "symbols",
    title: ":blue_heart:",
    icon: "_1f499"
  },
  {
    group: "symbols",
    title: ":purple_heart:",
    icon: "_1f49c"
  },
  {
    group: "symbols",
    title: ":black_heart:",
    icon: "_1f5a4"
  },
  {
    group: "symbols",
    title: ":broken_heart:",
    icon: "_1f494"
  },
  {
    group: "symbols",
    title: ":heart_exclamation:",
    icon: "_2763"
  },
  {
    group: "symbols",
    title: ":two_hearts:",
    icon: "_1f495"
  },
  {
    group: "symbols",
    title: ":revolving_hearts:",
    icon: "_1f49e"
  },
  {
    group: "symbols",
    title: ":heartbeat:",
    icon: "_1f493"
  },
  {
    group: "symbols",
    title: ":heartpulse:",
    icon: "_1f497"
  },
  {
    group: "symbols",
    title: ":sparkling_heart:",
    icon: "_1f496"
  },
  {
    group: "symbols",
    title: ":cupid:",
    icon: "_1f498"
  },
  {
    group: "symbols",
    title: ":gift_heart:",
    icon: "_1f49d"
  },
  {
    group: "symbols",
    title: ":heart_decoration:",
    icon: "_1f49f"
  },
  {
    group: "symbols",
    title: ":peace:",
    icon: "_262e"
  },
  {
    group: "symbols",
    title: ":cross:",
    icon: "_271d"
  },
  {
    group: "symbols",
    title: ":star_and_crescent:",
    icon: "_262a"
  },
  {
    group: "symbols",
    title: ":om_symbol:",
    icon: "_1f549"
  },
  {
    group: "symbols",
    title: ":wheel_of_dharma:",
    icon: "_2638"
  },
  {
    group: "symbols",
    title: ":star_of_david:",
    icon: "_2721"
  },
  {
    group: "symbols",
    title: ":six_pointed_star:",
    icon: "_1f52f"
  },
  {
    group: "symbols",
    title: ":menorah:",
    icon: "_1f54e"
  },
  {
    group: "symbols",
    title: ":yin_yang:",
    icon: "_262f"
  },
  {
    group: "symbols",
    title: ":orthodox_cross:",
    icon: "_2626"
  },
  {
    group: "symbols",
    title: ":place_of_worship:",
    icon: "_1f6d0"
  },
  {
    group: "symbols",
    title: ":ophiuchus:",
    icon: "_26ce"
  },
  {
    group: "symbols",
    title: ":aries:",
    icon: "_2648"
  },
  {
    group: "symbols",
    title: ":taurus:",
    icon: "_2649"
  },
  {
    group: "symbols",
    title: ":gemini:",
    icon: "_264a"
  },
  {
    group: "symbols",
    title: ":cancer:",
    icon: "_264b"
  },
  {
    group: "symbols",
    title: ":leo:",
    icon: "_264c"
  },
  {
    group: "symbols",
    title: ":virgo:",
    icon: "_264d"
  },
  {
    group: "symbols",
    title: ":libra:",
    icon: "_264e"
  },
  {
    group: "symbols",
    title: ":scorpius:",
    icon: "_264f"
  },
  {
    group: "symbols",
    title: ":sagittarius:",
    icon: "_2650"
  },
  {
    group: "symbols",
    title: ":capricorn:",
    icon: "_2651"
  },
  {
    group: "symbols",
    title: ":aquarius:",
    icon: "_2652"
  },
  {
    group: "symbols",
    title: ":pisces:",
    icon: "_2653"
  },
  {
    group: "symbols",
    title: ":id:",
    icon: "_1f194"
  },
  {
    group: "symbols",
    title: ":atom:",
    icon: "_269b"
  },
  {
    group: "symbols",
    title: ":infinity:",
    icon: "_267e"
  },
  {
    group: "symbols",
    title: ":accept:",
    icon: "_1f251"
  },
  {
    group: "symbols",
    title: ":radioactive:",
    icon: "_2622"
  },
  {
    group: "symbols",
    title: ":biohazard:",
    icon: "_2623"
  },
  {
    group: "symbols",
    title: ":mobile_phone_off:",
    icon: "_1f4f4"
  },
  {
    group: "symbols",
    title: ":vibration_mode:",
    icon: "_1f4f3"
  },
  {
    group: "symbols",
    title: ":u6709:",
    icon: "_1f236"
  },
  {
    group: "symbols",
    title: ":u7121:",
    icon: "_1f21a"
  },
  {
    group: "symbols",
    title: ":u7533:",
    icon: "_1f238"
  },
  {
    group: "symbols",
    title: ":u55b6:",
    icon: "_1f23a"
  },
  {
    group: "symbols",
    title: ":u6708:",
    icon: "_1f237"
  },
  {
    group: "symbols",
    title: ":eight_pointed_black_star:",
    icon: "_2734"
  },
  {
    group: "symbols",
    title: ":vs:",
    icon: "_1f19a"
  },
  {
    group: "symbols",
    title: ":white_flower:",
    icon: "_1f4ae"
  },
  {
    group: "symbols",
    title: ":ideograph_advantage:",
    icon: "_1f250"
  },
  {
    group: "symbols",
    title: ":secret:",
    icon: "_3299"
  },
  {
    group: "symbols",
    title: ":congratulations:",
    icon: "_3297"
  },
  {
    group: "symbols",
    title: ":u5408:",
    icon: "_1f234"
  },
  {
    group: "symbols",
    title: ":u6e80:",
    icon: "_1f235"
  },
  {
    group: "symbols",
    title: ":u5272:",
    icon: "_1f239"
  },
  {
    group: "symbols",
    title: ":u7981:",
    icon: "_1f232"
  },
  {
    group: "symbols",
    title: ":a:",
    icon: "_1f170"
  },
  {
    group: "symbols",
    title: ":b:",
    icon: "_1f171"
  },
  {
    group: "symbols",
    title: ":ab:",
    icon: "_1f18e"
  },
  {
    group: "symbols",
    title: ":cl:",
    icon: "_1f191"
  },
  {
    group: "symbols",
    title: ":o2:",
    icon: "_1f17e"
  },
  {
    group: "symbols",
    title: ":sos:",
    icon: "_1f198"
  },
  {
    group: "symbols",
    title: ":x:",
    icon: "_274c"
  },
  {
    group: "symbols",
    title: ":o:",
    icon: "_2b55"
  },
  {
    group: "symbols",
    title: ":octagonal_sign:",
    icon: "_1f6d1"
  },
  {
    group: "symbols",
    title: ":no_entry:",
    icon: "_26d4"
  },
  {
    group: "symbols",
    title: ":name_badge:",
    icon: "_1f4db"
  },
  {
    group: "symbols",
    title: ":no_entry_sign:",
    icon: "_1f6ab"
  },
  {
    group: "symbols",
    title: ":100:",
    icon: "_1f4af"
  },
  {
    group: "symbols",
    title: ":anger:",
    icon: "_1f4a2"
  },
  {
    group: "symbols",
    title: ":hotsprings:",
    icon: "_2668"
  },
  {
    group: "symbols",
    title: ":no_pedestrians:",
    icon: "_1f6b7"
  },
  {
    group: "symbols",
    title: ":do_not_litter:",
    icon: "_1f6af"
  },
  {
    group: "symbols",
    title: ":no_bicycles:",
    icon: "_1f6b3"
  },
  {
    group: "symbols",
    title: ":non-potable_water:",
    icon: "_1f6b1"
  },
  {
    group: "symbols",
    title: ":underage:",
    icon: "_1f51e"
  },
  {
    group: "symbols",
    title: ":no_mobile_phones:",
    icon: "_1f4f5"
  },
  {
    group: "symbols",
    title: ":no_smoking:",
    icon: "_1f6ad"
  },
  {
    group: "symbols",
    title: ":exclamation:",
    icon: "_2757"
  },
  {
    group: "symbols",
    title: ":grey_exclamation:",
    icon: "_2755"
  },
  {
    group: "symbols",
    title: ":question:",
    icon: "_2753"
  },
  {
    group: "symbols",
    title: ":grey_question:",
    icon: "_2754"
  },
  {
    group: "symbols",
    title: ":bangbang:",
    icon: "_203c"
  },
  {
    group: "symbols",
    title: ":interrobang:",
    icon: "_2049"
  },
  {
    group: "symbols",
    title: ":low_brightness:",
    icon: "_1f505"
  },
  {
    group: "symbols",
    title: ":high_brightness:",
    icon: "_1f506"
  },
  {
    group: "symbols",
    title: ":part_alternation_mark:",
    icon: "_303d"
  },
  {
    group: "symbols",
    title: ":warning:",
    icon: "_26a0"
  },
  {
    group: "symbols",
    title: ":children_crossing:",
    icon: "_1f6b8"
  },
  {
    group: "symbols",
    title: ":trident:",
    icon: "_1f531"
  },
  {
    group: "symbols",
    title: ":fleur-de-lis:",
    icon: "_269c"
  },
  {
    group: "symbols",
    title: ":beginner:",
    icon: "_1f530"
  },
  {
    group: "symbols",
    title: ":recycle:",
    icon: "_267b"
  },
  {
    group: "symbols",
    title: ":white_check_mark:",
    icon: "_2705"
  },
  {
    group: "symbols",
    title: ":u6307:",
    icon: "_1f22f"
  },
  {
    group: "symbols",
    title: ":chart:",
    icon: "_1f4b9"
  },
  {
    group: "symbols",
    title: ":sparkle:",
    icon: "_2747"
  },
  {
    group: "symbols",
    title: ":eight_spoked_asterisk:",
    icon: "_2733"
  },
  {
    group: "symbols",
    title: ":negative_squared_cross_mark:",
    icon: "_274e"
  },
  {
    group: "symbols",
    title: ":globe_with_meridians:",
    icon: "_1f310"
  },
  {
    group: "symbols",
    title: ":diamond_shape_with_a_dot_inside:",
    icon: "_1f4a0"
  },
  {
    group: "symbols",
    title: ":m:",
    icon: "_24c2"
  },
  {
    group: "symbols",
    title: ":cyclone:",
    icon: "_1f300"
  },
  {
    group: "symbols",
    title: ":zzz:",
    icon: "_1f4a4"
  },
  {
    group: "symbols",
    title: ":atm:",
    icon: "_1f3e7"
  },
  {
    group: "symbols",
    title: ":wc:",
    icon: "_1f6be"
  },
  {
    group: "symbols",
    title: ":wheelchair:",
    icon: "_267f"
  },
  {
    group: "symbols",
    title: ":parking:",
    icon: "_1f17f"
  },
  {
    group: "symbols",
    title: ":u7a7a:",
    icon: "_1f233"
  },
  {
    group: "symbols",
    title: ":sa:",
    icon: "_1f202"
  },
  {
    group: "symbols",
    title: ":passport_control:",
    icon: "_1f6c2"
  },
  {
    group: "symbols",
    title: ":customs:",
    icon: "_1f6c3"
  },
  {
    group: "symbols",
    title: ":baggage_claim:",
    icon: "_1f6c4"
  },
  {
    group: "symbols",
    title: ":left_luggage:",
    icon: "_1f6c5"
  },
  {
    group: "symbols",
    title: ":mens:",
    icon: "_1f6b9"
  },
  {
    group: "symbols",
    title: ":womens:",
    icon: "_1f6ba"
  },
  {
    group: "symbols",
    title: ":baby_symbol:",
    icon: "_1f6bc"
  },
  {
    group: "symbols",
    title: ":restroom:",
    icon: "_1f6bb"
  },
  {
    group: "symbols",
    title: ":put_litter_in_its_place:",
    icon: "_1f6ae"
  },
  {
    group: "symbols",
    title: ":cinema:",
    icon: "_1f3a6"
  },
  {
    group: "symbols",
    title: ":signal_strength:",
    icon: "_1f4f6"
  },
  {
    group: "symbols",
    title: ":koko:",
    icon: "_1f201"
  },
  {
    group: "symbols",
    title: ":symbols:",
    icon: "_1f523"
  },
  {
    group: "symbols",
    title: ":information_source:",
    icon: "_2139"
  },
  {
    group: "symbols",
    title: ":abc:",
    icon: "_1f524"
  },
  {
    group: "symbols",
    title: ":abcd:",
    icon: "_1f521"
  },
  {
    group: "symbols",
    title: ":capital_abcd:",
    icon: "_1f520"
  },
  {
    group: "symbols",
    title: ":ng:",
    icon: "_1f196"
  },
  {
    group: "symbols",
    title: ":ok:",
    icon: "_1f197"
  },
  {
    group: "symbols",
    title: ":up:",
    icon: "_1f199"
  },
  {
    group: "symbols",
    title: ":cool:",
    icon: "_1f192"
  },
  {
    group: "symbols",
    title: ":new:",
    icon: "_1f195"
  },
  {
    group: "symbols",
    title: ":free:",
    icon: "_1f193"
  },
  {
    group: "symbols",
    title: ":zero:",
    icon: "_0030-20e3"
  },
  {
    group: "symbols",
    title: ":one:",
    icon: "_0031-20e3"
  },
  {
    group: "symbols",
    title: ":two:",
    icon: "_0032-20e3"
  },
  {
    group: "symbols",
    title: ":three:",
    icon: "_0033-20e3"
  },
  {
    group: "symbols",
    title: ":four:",
    icon: "_0034-20e3"
  },
  {
    group: "symbols",
    title: ":five:",
    icon: "_0035-20e3"
  },
  {
    group: "symbols",
    title: ":six:",
    icon: "_0036-20e3"
  },
  {
    group: "symbols",
    title: ":seven:",
    icon: "_0037-20e3"
  },
  {
    group: "symbols",
    title: ":eight:",
    icon: "_0038-20e3"
  },
  {
    group: "symbols",
    title: ":nine:",
    icon: "_0039-20e3"
  },
  {
    group: "symbols",
    title: ":keycap_ten:",
    icon: "_1f51f"
  },
  {
    group: "symbols",
    title: ":1234:",
    icon: "_1f522"
  },
  {
    group: "symbols",
    title: ":hash:",
    icon: "_0023-20e3"
  },
  {
    group: "symbols",
    title: ":asterisk:",
    icon: "_002a-20e3"
  },
  {
    group: "symbols",
    title: ":eject:",
    icon: "_23cf"
  },
  {
    group: "symbols",
    title: ":arrow_forward:",
    icon: "_25b6"
  },
  {
    group: "symbols",
    title: ":pause_button:",
    icon: "_23f8"
  },
  {
    group: "symbols",
    title: ":play_pause:",
    icon: "_23ef"
  },
  {
    group: "symbols",
    title: ":stop_button:",
    icon: "_23f9"
  },
  {
    group: "symbols",
    title: ":record_button:",
    icon: "_23fa"
  },
  {
    group: "symbols",
    title: ":track_next:",
    icon: "_23ed"
  },
  {
    group: "symbols",
    title: ":track_previous:",
    icon: "_23ee"
  },
  {
    group: "symbols",
    title: ":fast_forward:",
    icon: "_23e9"
  },
  {
    group: "symbols",
    title: ":rewind:",
    icon: "_23ea"
  },
  {
    group: "symbols",
    title: ":arrow_double_up:",
    icon: "_23eb"
  },
  {
    group: "symbols",
    title: ":arrow_double_down:",
    icon: "_23ec"
  },
  {
    group: "symbols",
    title: ":arrow_backward:",
    icon: "_25c0"
  },
  {
    group: "symbols",
    title: ":arrow_up_small:",
    icon: "_1f53c"
  },
  {
    group: "symbols",
    title: ":arrow_down_small:",
    icon: "_1f53d"
  },
  {
    group: "symbols",
    title: ":arrow_right:",
    icon: "_27a1"
  },
  {
    group: "symbols",
    title: ":arrow_left:",
    icon: "_2b05"
  },
  {
    group: "symbols",
    title: ":arrow_up:",
    icon: "_2b06"
  },
  {
    group: "symbols",
    title: ":arrow_down:",
    icon: "_2b07"
  },
  {
    group: "symbols",
    title: ":arrow_upper_right:",
    icon: "_2197"
  },
  {
    group: "symbols",
    title: ":arrow_lower_right:",
    icon: "_2198"
  },
  {
    group: "symbols",
    title: ":arrow_lower_left:",
    icon: "_2199"
  },
  {
    group: "symbols",
    title: ":arrow_upper_left:",
    icon: "_2196"
  },
  {
    group: "symbols",
    title: ":arrow_up_down:",
    icon: "_2195"
  },
  {
    group: "symbols",
    title: ":left_right_arrow:",
    icon: "_2194"
  },
  {
    group: "symbols",
    title: ":arrow_right_hook:",
    icon: "_21aa"
  },
  {
    group: "symbols",
    title: ":leftwards_arrow_with_hook:",
    icon: "_21a9"
  },
  {
    group: "symbols",
    title: ":arrow_heading_up:",
    icon: "_2934"
  },
  {
    group: "symbols",
    title: ":arrow_heading_down:",
    icon: "_2935"
  },
  {
    group: "symbols",
    title: ":twisted_rightwards_arrows:",
    icon: "_1f500"
  },
  {
    group: "symbols",
    title: ":repeat:",
    icon: "_1f501"
  },
  {
    group: "symbols",
    title: ":repeat_one:",
    icon: "_1f502"
  },
  {
    group: "symbols",
    title: ":arrows_counterclockwise:",
    icon: "_1f504"
  },
  {
    group: "symbols",
    title: ":arrows_clockwise:",
    icon: "_1f503"
  },
  {
    group: "symbols",
    title: ":musical_note:",
    icon: "_1f3b5"
  },
  {
    group: "symbols",
    title: ":notes:",
    icon: "_1f3b6"
  },
  {
    group: "symbols",
    title: ":heavy_plus_sign:",
    icon: "_2795"
  },
  {
    group: "symbols",
    title: ":heavy_minus_sign:",
    icon: "_2796"
  },
  {
    group: "symbols",
    title: ":heavy_division_sign:",
    icon: "_2797"
  },
  {
    group: "symbols",
    title: ":heavy_multiplication_x:",
    icon: "_2716"
  },
  {
    group: "symbols",
    title: ":heavy_dollar_sign:",
    icon: "_1f4b2"
  },
  {
    group: "symbols",
    title: ":currency_exchange:",
    icon: "_1f4b1"
  },
  {
    group: "symbols",
    title: ":tm:",
    icon: "_2122"
  },
  {
    group: "symbols",
    title: ":copyright:",
    icon: "_00a9"
  },
  {
    group: "symbols",
    title: ":registered:",
    icon: "_00ae"
  },
  {
    group: "symbols",
    title: ":wavy_dash:",
    icon: "_3030"
  },
  {
    group: "symbols",
    title: ":curly_loop:",
    icon: "_27b0"
  },
  {
    group: "symbols",
    title: ":loop:",
    icon: "_27bf"
  },
  {
    group: "symbols",
    title: ":end:",
    icon: "_1f51a"
  },
  {
    group: "symbols",
    title: ":back:",
    icon: "_1f519"
  },
  {
    group: "symbols",
    title: ":on:",
    icon: "_1f51b"
  },
  {
    group: "symbols",
    title: ":top:",
    icon: "_1f51d"
  },
  {
    group: "symbols",
    title: ":soon:",
    icon: "_1f51c"
  },
  {
    group: "symbols",
    title: ":heavy_check_mark:",
    icon: "_2714"
  },
  {
    group: "symbols",
    title: ":ballot_box_with_check:",
    icon: "_2611"
  },
  {
    group: "symbols",
    title: ":radio_button:",
    icon: "_1f518"
  },
  {
    group: "symbols",
    title: ":white_circle:",
    icon: "_26aa"
  },
  {
    group: "symbols",
    title: ":black_circle:",
    icon: "_26ab"
  },
  {
    group: "symbols",
    title: ":red_circle:",
    icon: "_1f534"
  },
  {
    group: "symbols",
    title: ":blue_circle:",
    icon: "_1f535"
  },
  {
    group: "symbols",
    title: ":small_red_triangle:",
    icon: "_1f53a"
  },
  {
    group: "symbols",
    title: ":small_red_triangle_down:",
    icon: "_1f53b"
  },
  {
    group: "symbols",
    title: ":small_orange_diamond:",
    icon: "_1f538"
  },
  {
    group: "symbols",
    title: ":small_blue_diamond:",
    icon: "_1f539"
  },
  {
    group: "symbols",
    title: ":large_orange_diamond:",
    icon: "_1f536"
  },
  {
    group: "symbols",
    title: ":large_blue_diamond:",
    icon: "_1f537"
  },
  {
    group: "symbols",
    title: ":white_square_button:",
    icon: "_1f533"
  },
  {
    group: "symbols",
    title: ":black_square_button:",
    icon: "_1f532"
  },
  {
    group: "symbols",
    title: ":black_small_square:",
    icon: "_25aa"
  },
  {
    group: "symbols",
    title: ":white_small_square:",
    icon: "_25ab"
  },
  {
    group: "symbols",
    title: ":black_medium_small_square:",
    icon: "_25fe"
  },
  {
    group: "symbols",
    title: ":white_medium_small_square:",
    icon: "_25fd"
  },
  {
    group: "symbols",
    title: ":black_medium_square:",
    icon: "_25fc"
  },
  {
    group: "symbols",
    title: ":white_medium_square:",
    icon: "_25fb"
  },
  {
    group: "symbols",
    title: ":black_large_square:",
    icon: "_2b1b"
  },
  {
    group: "symbols",
    title: ":white_large_square:",
    icon: "_2b1c"
  },
  {
    group: "symbols",
    title: ":speaker:",
    icon: "_1f508"
  },
  {
    group: "symbols",
    title: ":mute:",
    icon: "_1f507"
  },
  {
    group: "symbols",
    title: ":sound:",
    icon: "_1f509"
  },
  {
    group: "symbols",
    title: ":loud_sound:",
    icon: "_1f50a"
  },
  {
    group: "symbols",
    title: ":bell:",
    icon: "_1f514"
  },
  {
    group: "symbols",
    title: ":no_bell:",
    icon: "_1f515"
  },
  {
    group: "symbols",
    title: ":mega:",
    icon: "_1f4e3"
  },
  {
    group: "symbols",
    title: ":loudspeaker:",
    icon: "_1f4e2"
  },
  {
    group: "symbols",
    title: ":speech_left:",
    icon: "_1f5e8"
  },
  {
    group: "symbols",
    title: ":eye_in_speech_bubble:",
    icon: "_1f441-1f5e8"
  },
  {
    group: "symbols",
    title: ":speech_balloon:",
    icon: "_1f4ac"
  },
  {
    group: "symbols",
    title: ":thought_balloon:",
    icon: "_1f4ad"
  },
  {
    group: "symbols",
    title: ":anger_right:",
    icon: "_1f5ef"
  },
  {
    group: "symbols",
    title: ":spades:",
    icon: "_2660"
  },
  {
    group: "symbols",
    title: ":clubs:",
    icon: "_2663"
  },
  {
    group: "symbols",
    title: ":hearts:",
    icon: "_2665"
  },
  {
    group: "symbols",
    title: ":diamonds:",
    icon: "_2666"
  },
  {
    group: "symbols",
    title: ":black_joker:",
    icon: "_1f0cf"
  },
  {
    group: "symbols",
    title: ":flower_playing_cards:",
    icon: "_1f3b4"
  },
  {
    group: "symbols",
    title: ":mahjong:",
    icon: "_1f004"
  },
  {
    group: "symbols",
    title: ":clock1:",
    icon: "_1f550"
  },
  {
    group: "symbols",
    title: ":clock2:",
    icon: "_1f551"
  },
  {
    group: "symbols",
    title: ":clock3:",
    icon: "_1f552"
  },
  {
    group: "symbols",
    title: ":clock4:",
    icon: "_1f553"
  },
  {
    group: "symbols",
    title: ":clock5:",
    icon: "_1f554"
  },
  {
    group: "symbols",
    title: ":clock6:",
    icon: "_1f555"
  },
  {
    group: "symbols",
    title: ":clock7:",
    icon: "_1f556"
  },
  {
    group: "symbols",
    title: ":clock8:",
    icon: "_1f557"
  },
  {
    group: "symbols",
    title: ":clock9:",
    icon: "_1f558"
  },
  {
    group: "symbols",
    title: ":clock10:",
    icon: "_1f559"
  },
  {
    group: "symbols",
    title: ":clock11:",
    icon: "_1f55a"
  },
  {
    group: "symbols",
    title: ":clock12:",
    icon: "_1f55b"
  },
  {
    group: "symbols",
    title: ":clock130:",
    icon: "_1f55c"
  },
  {
    group: "symbols",
    title: ":clock230:",
    icon: "_1f55d"
  },
  {
    group: "symbols",
    title: ":clock330:",
    icon: "_1f55e"
  },
  {
    group: "symbols",
    title: ":clock430:",
    icon: "_1f55f"
  },
  {
    group: "symbols",
    title: ":clock530:",
    icon: "_1f560"
  },
  {
    group: "symbols",
    title: ":clock630:",
    icon: "_1f561"
  },
  {
    group: "symbols",
    title: ":clock730:",
    icon: "_1f562"
  },
  {
    group: "symbols",
    title: ":clock830:",
    icon: "_1f563"
  },
  {
    group: "symbols",
    title: ":clock930:",
    icon: "_1f564"
  },
  {
    group: "symbols",
    title: ":clock1030:",
    icon: "_1f565"
  },
  {
    group: "symbols",
    title: ":clock1130:",
    icon: "_1f566"
  },
  {
    group: "symbols",
    title: ":clock1230:",
    icon: "_1f567"
  },
  {
    group: "symbols",
    title: ":digit_zero:",
    icon: "_0030"
  },
  {
    group: "symbols",
    title: ":digit_one:",
    icon: "_0031"
  },
  {
    group: "symbols",
    title: ":digit_two:",
    icon: "_0032"
  },
  {
    group: "symbols",
    title: ":digit_three:",
    icon: "_0033"
  },
  {
    group: "symbols",
    title: ":digit_four:",
    icon: "_0034"
  },
  {
    group: "symbols",
    title: ":digit_five:",
    icon: "_0035"
  },
  {
    group: "symbols",
    title: ":digit_six:",
    icon: "_0036"
  },
  {
    group: "symbols",
    title: ":digit_seven:",
    icon: "_0037"
  },
  {
    group: "symbols",
    title: ":digit_eight:",
    icon: "_0038"
  },
  {
    group: "symbols",
    title: ":digit_nine:",
    icon: "_0039"
  },
  {
    group: "symbols",
    title: ":pound_symbol:",
    icon: "_0023"
  },
  {
    group: "symbols",
    title: ":asterisk_symbol:",
    icon: "_002a"
  },
  {
    group: "symbols",
    title: ":female_sign:",
    icon: "_2640"
  },
  {
    group: "symbols",
    title: ":male_sign:",
    icon: "_2642"
  },
  {
    group: "symbols",
    title: ":medical_symbol:",
    icon: "_2695"
  },
  {
    group: "flags",
    title: ":flag_white:",
    icon: "_1f3f3"
  },
  {
    group: "flags",
    title: ":flag_black:",
    icon: "_1f3f4"
  },
  {
    group: "flags",
    title: ":checkered_flag:",
    icon: "_1f3c1"
  },
  {
    group: "flags",
    title: ":triangular_flag_on_post:",
    icon: "_1f6a9"
  },
  {
    group: "flags",
    title: ":rainbow_flag:",
    icon: "_1f3f3-1f308"
  },
  {
    group: "flags",
    title: ":pirate_flag:",
    icon: "_1f3f4-2620"
  },
  {
    group: "flags",
    title: ":flag_af:",
    icon: "_1f1e6-1f1eb"
  },
  {
    group: "flags",
    title: ":flag_ax:",
    icon: "_1f1e6-1f1fd"
  },
  {
    group: "flags",
    title: "",
    icon: "_1f1e6-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_dz:",
    icon: "_1f1e9-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_as:",
    icon: "_1f1e6-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_ad:",
    icon: "_1f1e6-1f1e9"
  },
  {
    group: "flags",
    title: ":flag_ao:",
    icon: "_1f1e6-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_ai:",
    icon: "_1f1e6-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_aq:",
    icon: "_1f1e6-1f1f6"
  },
  {
    group: "flags",
    title: ":flag_ag:",
    icon: "_1f1e6-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_ar:",
    icon: "_1f1e6-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_am:",
    icon: "_1f1e6-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_aw:",
    icon: "_1f1e6-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_au:",
    icon: "_1f1e6-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_at:",
    icon: "_1f1e6-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_az:",
    icon: "_1f1e6-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_bs:",
    icon: "_1f1e7-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_bh:",
    icon: "_1f1e7-1f1ed"
  },
  {
    group: "flags",
    title: ":flag_bd:",
    icon: "_1f1e7-1f1e9"
  },
  {
    group: "flags",
    title: ":flag_bb:",
    icon: "_1f1e7-1f1e7"
  },
  {
    group: "flags",
    title: ":flag_by:",
    icon: "_1f1e7-1f1fe"
  },
  {
    group: "flags",
    title: ":flag_be:",
    icon: "_1f1e7-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_bz:",
    icon: "_1f1e7-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_bj:",
    icon: "_1f1e7-1f1ef"
  },
  {
    group: "flags",
    title: ":flag_bm:",
    icon: "_1f1e7-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_bt:",
    icon: "_1f1e7-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_bo:",
    icon: "_1f1e7-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_ba:",
    icon: "_1f1e7-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_bw:",
    icon: "_1f1e7-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_br:",
    icon: "_1f1e7-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_io:",
    icon: "_1f1ee-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_vg:",
    icon: "_1f1fb-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_bn:",
    icon: "_1f1e7-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_bg:",
    icon: "_1f1e7-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_bf:",
    icon: "_1f1e7-1f1eb"
  },
  {
    group: "flags",
    title: ":flag_bi:",
    icon: "_1f1e7-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_kh:",
    icon: "_1f1f0-1f1ed"
  },
  {
    group: "flags",
    title: ":flag_cm:",
    icon: "_1f1e8-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_ca:",
    icon: "_1f1e8-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_ic:",
    icon: "_1f1ee-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_cv:",
    icon: "_1f1e8-1f1fb"
  },
  {
    group: "flags",
    title: ":flag_bq:",
    icon: "_1f1e7-1f1f6"
  },
  {
    group: "flags",
    title: ":flag_ky:",
    icon: "_1f1f0-1f1fe"
  },
  {
    group: "flags",
    title: ":flag_cf:",
    icon: "_1f1e8-1f1eb"
  },
  {
    group: "flags",
    title: ":flag_td:",
    icon: "_1f1f9-1f1e9"
  },
  {
    group: "flags",
    title: ":flag_cl:",
    icon: "_1f1e8-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_cn:",
    icon: "_1f1e8-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_cx:",
    icon: "_1f1e8-1f1fd"
  },
  {
    group: "flags",
    title: ":flag_cc:",
    icon: "_1f1e8-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_co:",
    icon: "_1f1e8-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_km:",
    icon: "_1f1f0-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_cg:",
    icon: "_1f1e8-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_cd:",
    icon: "_1f1e8-1f1e9"
  },
  {
    group: "flags",
    title: ":flag_ck:",
    icon: "_1f1e8-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_cr:",
    icon: "_1f1e8-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_ci:",
    icon: "_1f1e8-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_hr:",
    icon: "_1f1ed-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_cu:",
    icon: "_1f1e8-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_cw:",
    icon: "_1f1e8-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_cy:",
    icon: "_1f1e8-1f1fe"
  },
  {
    group: "flags",
    title: ":flag_cz:",
    icon: "_1f1e8-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_dk:",
    icon: "_1f1e9-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_dj:",
    icon: "_1f1e9-1f1ef"
  },
  {
    group: "flags",
    title: ":flag_dm:",
    icon: "_1f1e9-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_do:",
    icon: "_1f1e9-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_ec:",
    icon: "_1f1ea-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_eg:",
    icon: "_1f1ea-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_sv:",
    icon: "_1f1f8-1f1fb"
  },
  {
    group: "flags",
    title: ":flag_gq:",
    icon: "_1f1ec-1f1f6"
  },
  {
    group: "flags",
    title: ":flag_er:",
    icon: "_1f1ea-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_ee:",
    icon: "_1f1ea-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_et:",
    icon: "_1f1ea-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_eu:",
    icon: "_1f1ea-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_fk:",
    icon: "_1f1eb-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_fo:",
    icon: "_1f1eb-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_fj:",
    icon: "_1f1eb-1f1ef"
  },
  {
    group: "flags",
    title: ":flag_fi:",
    icon: "_1f1eb-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_fr:",
    icon: "_1f1eb-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_gf:",
    icon: "_1f1ec-1f1eb"
  },
  {
    group: "flags",
    title: ":flag_pf:",
    icon: "_1f1f5-1f1eb"
  },
  {
    group: "flags",
    title: ":flag_tf:",
    icon: "_1f1f9-1f1eb"
  },
  {
    group: "flags",
    title: ":flag_ga:",
    icon: "_1f1ec-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_gm:",
    icon: "_1f1ec-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_ge:",
    icon: "_1f1ec-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_de:",
    icon: "_1f1e9-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_gh:",
    icon: "_1f1ec-1f1ed"
  },
  {
    group: "flags",
    title: ":flag_gi:",
    icon: "_1f1ec-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_gr:",
    icon: "_1f1ec-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_gl:",
    icon: "_1f1ec-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_gd:",
    icon: "_1f1ec-1f1e9"
  },
  {
    group: "flags",
    title: ":flag_gp:",
    icon: "_1f1ec-1f1f5"
  },
  {
    group: "flags",
    title: ":flag_gu:",
    icon: "_1f1ec-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_gt:",
    icon: "_1f1ec-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_gg:",
    icon: "_1f1ec-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_gn:",
    icon: "_1f1ec-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_gw:",
    icon: "_1f1ec-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_gy:",
    icon: "_1f1ec-1f1fe"
  },
  {
    group: "flags",
    title: ":flag_ht:",
    icon: "_1f1ed-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_hn:",
    icon: "_1f1ed-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_hk:",
    icon: "_1f1ed-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_hu:",
    icon: "_1f1ed-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_is:",
    icon: "_1f1ee-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_in:",
    icon: "_1f1ee-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_id:",
    icon: "_1f1ee-1f1e9"
  },
  {
    group: "flags",
    title: ":flag_ir:",
    icon: "_1f1ee-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_iq:",
    icon: "_1f1ee-1f1f6"
  },
  {
    group: "flags",
    title: ":flag_ie:",
    icon: "_1f1ee-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_im:",
    icon: "_1f1ee-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_il:",
    icon: "_1f1ee-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_it:",
    icon: "_1f1ee-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_jm:",
    icon: "_1f1ef-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_jp:",
    icon: "_1f1ef-1f1f5"
  },
  {
    group: "flags",
    title: ":crossed_flags:",
    icon: "_1f38c"
  },
  {
    group: "flags",
    title: ":flag_je:",
    icon: "_1f1ef-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_jo:",
    icon: "_1f1ef-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_kz:",
    icon: "_1f1f0-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_ke:",
    icon: "_1f1f0-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_ki:",
    icon: "_1f1f0-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_xk:",
    icon: "_1f1fd-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_kw:",
    icon: "_1f1f0-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_kg:",
    icon: "_1f1f0-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_la:",
    icon: "_1f1f1-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_lv:",
    icon: "_1f1f1-1f1fb"
  },
  {
    group: "flags",
    title: ":flag_lb:",
    icon: "_1f1f1-1f1e7"
  },
  {
    group: "flags",
    title: ":flag_ls:",
    icon: "_1f1f1-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_lr:",
    icon: "_1f1f1-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_ly:",
    icon: "_1f1f1-1f1fe"
  },
  {
    group: "flags",
    title: ":flag_li:",
    icon: "_1f1f1-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_lt:",
    icon: "_1f1f1-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_lu:",
    icon: "_1f1f1-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_mo:",
    icon: "_1f1f2-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_mk:",
    icon: "_1f1f2-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_mg:",
    icon: "_1f1f2-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_mw:",
    icon: "_1f1f2-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_my:",
    icon: "_1f1f2-1f1fe"
  },
  {
    group: "flags",
    title: ":flag_mv:",
    icon: "_1f1f2-1f1fb"
  },
  {
    group: "flags",
    title: ":flag_ml:",
    icon: "_1f1f2-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_mt:",
    icon: "_1f1f2-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_mh:",
    icon: "_1f1f2-1f1ed"
  },
  {
    group: "flags",
    title: ":flag_mq:",
    icon: "_1f1f2-1f1f6"
  },
  {
    group: "flags",
    title: ":flag_mr:",
    icon: "_1f1f2-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_mu:",
    icon: "_1f1f2-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_yt:",
    icon: "_1f1fe-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_mx:",
    icon: "_1f1f2-1f1fd"
  },
  {
    group: "flags",
    title: ":flag_fm:",
    icon: "_1f1eb-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_md:",
    icon: "_1f1f2-1f1e9"
  },
  {
    group: "flags",
    title: ":flag_mc:",
    icon: "_1f1f2-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_mn:",
    icon: "_1f1f2-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_me:",
    icon: "_1f1f2-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_ms:",
    icon: "_1f1f2-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_ma:",
    icon: "_1f1f2-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_mz:",
    icon: "_1f1f2-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_mm:",
    icon: "_1f1f2-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_na:",
    icon: "_1f1f3-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_nr:",
    icon: "_1f1f3-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_np:",
    icon: "_1f1f3-1f1f5"
  },
  {
    group: "flags",
    title: ":flag_nl:",
    icon: "_1f1f3-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_nc:",
    icon: "_1f1f3-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_nz:",
    icon: "_1f1f3-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_ni:",
    icon: "_1f1f3-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_ne:",
    icon: "_1f1f3-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_ng:",
    icon: "_1f1f3-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_nu:",
    icon: "_1f1f3-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_nf:",
    icon: "_1f1f3-1f1eb"
  },
  {
    group: "flags",
    title: ":flag_kp:",
    icon: "_1f1f0-1f1f5"
  },
  {
    group: "flags",
    title: ":flag_mp:",
    icon: "_1f1f2-1f1f5"
  },
  {
    group: "flags",
    title: ":flag_no:",
    icon: "_1f1f3-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_om:",
    icon: "_1f1f4-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_pk:",
    icon: "_1f1f5-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_pw:",
    icon: "_1f1f5-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_ps:",
    icon: "_1f1f5-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_pa:",
    icon: "_1f1f5-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_pg:",
    icon: "_1f1f5-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_py:",
    icon: "_1f1f5-1f1fe"
  },
  {
    group: "flags",
    title: ":flag_pe:",
    icon: "_1f1f5-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_ph:",
    icon: "_1f1f5-1f1ed"
  },
  {
    group: "flags",
    title: ":flag_pn:",
    icon: "_1f1f5-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_pl:",
    icon: "_1f1f5-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_pt:",
    icon: "_1f1f5-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_pr:",
    icon: "_1f1f5-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_qa:",
    icon: "_1f1f6-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_re:",
    icon: "_1f1f7-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_ro:",
    icon: "_1f1f7-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_ru:",
    icon: "_1f1f7-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_rw:",
    icon: "_1f1f7-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_ws:",
    icon: "_1f1fc-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_sm:",
    icon: "_1f1f8-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_st:",
    icon: "_1f1f8-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_sa:",
    icon: "_1f1f8-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_sn:",
    icon: "_1f1f8-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_rs:",
    icon: "_1f1f7-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_sc:",
    icon: "_1f1f8-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_sl:",
    icon: "_1f1f8-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_sg:",
    icon: "_1f1f8-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_sx:",
    icon: "_1f1f8-1f1fd"
  },
  {
    group: "flags",
    title: ":flag_sk:",
    icon: "_1f1f8-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_si:",
    icon: "_1f1f8-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_gs:",
    icon: "_1f1ec-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_sb:",
    icon: "_1f1f8-1f1e7"
  },
  {
    group: "flags",
    title: ":flag_so:",
    icon: "_1f1f8-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_za:",
    icon: "_1f1ff-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_kr:",
    icon: "_1f1f0-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_ss:",
    icon: "_1f1f8-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_es:",
    icon: "_1f1ea-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_lk:",
    icon: "_1f1f1-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_bl:",
    icon: "_1f1e7-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_sh:",
    icon: "_1f1f8-1f1ed"
  },
  {
    group: "flags",
    title: ":flag_kn:",
    icon: "_1f1f0-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_lc:",
    icon: "_1f1f1-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_pm:",
    icon: "_1f1f5-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_vc:",
    icon: "_1f1fb-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_sd:",
    icon: "_1f1f8-1f1e9"
  },
  {
    group: "flags",
    title: ":flag_sr:",
    icon: "_1f1f8-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_sz:",
    icon: "_1f1f8-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_se:",
    icon: "_1f1f8-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_ch:",
    icon: "_1f1e8-1f1ed"
  },
  {
    group: "flags",
    title: ":flag_sy:",
    icon: "_1f1f8-1f1fe"
  },
  {
    group: "flags",
    title: ":flag_tw:",
    icon: "_1f1f9-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_tj:",
    icon: "_1f1f9-1f1ef"
  },
  {
    group: "flags",
    title: ":flag_tz:",
    icon: "_1f1f9-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_th:",
    icon: "_1f1f9-1f1ed"
  },
  {
    group: "flags",
    title: ":flag_tl:",
    icon: "_1f1f9-1f1f1"
  },
  {
    group: "flags",
    title: ":flag_tg:",
    icon: "_1f1f9-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_tk:",
    icon: "_1f1f9-1f1f0"
  },
  {
    group: "flags",
    title: ":flag_to:",
    icon: "_1f1f9-1f1f4"
  },
  {
    group: "flags",
    title: ":flag_tt:",
    icon: "_1f1f9-1f1f9"
  },
  {
    group: "flags",
    title: ":flag_tn:",
    icon: "_1f1f9-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_tr:",
    icon: "_1f1f9-1f1f7"
  },
  {
    group: "flags",
    title: ":flag_tm:",
    icon: "_1f1f9-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_tc:",
    icon: "_1f1f9-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_vi:",
    icon: "_1f1fb-1f1ee"
  },
  {
    group: "flags",
    title: ":flag_tv:",
    icon: "_1f1f9-1f1fb"
  },
  {
    group: "flags",
    title: ":flag_ug:",
    icon: "_1f1fa-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_ua:",
    icon: "_1f1fa-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_ae:",
    icon: "_1f1e6-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_gb:",
    icon: "_1f1ec-1f1e7"
  },
  {
    group: "flags",
    title: ":england:",
    icon: "_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f"
  },
  {
    group: "flags",
    title: ":scotland:",
    icon: "_1f3f4-e0067-e0062-e0073-e0063-e0074-e007f"
  },
  {
    group: "flags",
    title: ":wales:",
    icon: "_1f3f4-e0067-e0062-e0077-e006c-e0073-e007f"
  },
  {
    group: "flags",
    title: ":flag_us:",
    icon: "_1f1fa-1f1f8"
  },
  {
    group: "flags",
    title: ":flag_uy:",
    icon: "_1f1fa-1f1fe"
  },
  {
    group: "flags",
    title: ":flag_uz:",
    icon: "_1f1fa-1f1ff"
  },
  {
    group: "flags",
    title: ":flag_vu:",
    icon: "_1f1fb-1f1fa"
  },
  {
    group: "flags",
    title: ":flag_va:",
    icon: "_1f1fb-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_ve:",
    icon: "_1f1fb-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_vn:",
    icon: "_1f1fb-1f1f3"
  },
  {
    group: "flags",
    title: ":flag_wf:",
    icon: "_1f1fc-1f1eb"
  },
  {
    group: "flags",
    title: ":flag_eh:",
    icon: "_1f1ea-1f1ed"
  },
  {
    group: "flags",
    title: ":flag_ye:",
    icon: "_1f1fe-1f1ea"
  },
  {
    group: "flags",
    title: ":flag_zm:",
    icon: "_1f1ff-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_zw:",
    icon: "_1f1ff-1f1fc"
  },
  {
    group: "flags",
    title: ":flag_ac:",
    icon: "_1f1e6-1f1e8"
  },
  {
    group: "flags",
    title: ":flag_bv:",
    icon: "_1f1e7-1f1fb"
  },
  {
    group: "flags",
    title: ":flag_cp:",
    icon: "_1f1e8-1f1f5"
  },
  {
    group: "flags",
    title: ":flag_ea:",
    icon: "_1f1ea-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_dg:",
    icon: "_1f1e9-1f1ec"
  },
  {
    group: "flags",
    title: ":flag_hm:",
    icon: "_1f1ed-1f1f2"
  },
  {
    group: "flags",
    title: ":flag_mf:",
    icon: "_1f1f2-1f1eb"
  },
  {
    group: "flags",
    title: ":flag_sj:",
    icon: "_1f1f8-1f1ef"
  },
  {
    group: "flags",
    title: ":flag_ta:",
    icon: "_1f1f9-1f1e6"
  },
  {
    group: "flags",
    title: ":flag_um:",
    icon: "_1f1fa-1f1f2"
  },
  {
    group: "flags",
    title: ":united_nations:",
    icon: "_1f1fa-1f1f3"
  }
];