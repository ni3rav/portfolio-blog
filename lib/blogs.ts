export const blogsPrev = [
  {
    id: "timeshift-null-pointer",
    title: "Timeshift and The NULL Pointer",
    excerpt:
      "Well I faced segmentation fault somewhere else other than LeetCode lol.",
    date: "October 17, 2024",
    image: "/blogs/timeshift.png",
    tags: ["linux", "debugging", "arch", "timeshift"],
  },
];

export const blogs = {
  // ...other blogs
  "timeshift-null-pointer": {
    id: "timeshift-null-pointer",
    title: "Timeshift and The NULL Pointer",
    date: "October 17, 2024",
    image: "/blogs/timeshift.png",
    content: `     
<p>Hello Everynyan!</p>
<p>In this blog, I will discuss an issue I encountered with Timeshift on my distro (i use arch btw). For those unfamiliar with the concept of a NULL pointer, it’s worth noting that it was the same issue that led to the recent BSOD epidemic with CrowdStrike, A recent example is the vulnerability found in TOR (which is based on Firefox), involving a use-after-free exploit in animation timelines. It turns out that the NULL pointer was identified as the culprit behind this issue.</p>
<p>Before diving in, let me provide a brief introduction to Arch Linux and other distributions, the differences between rolling release and LTS release cycles, Timeshift, and the Btrfs filesystem.</p>
<h2 id="chapter-1-exposition">CHAPTER 1: Exposition</h2>
<p>Let’s begin with Arch Linux. Arch is a minimal Linux distribution (distro) that you may have come across in memes like “I use Arch, by the way.” The key point is that Arch is so minimal that it doesn’t come with a Graphical User Interface (GUI) or Desktop Environment (DE) out of the box; all you get is a shell, and you need to configure everything yourself—essentially making it a DIY distro. In addition to its high configurability, Arch follows a rolling release cycle, which means you can access the latest software and packages as soon as they become available, keeping you on the cutting edge.</p>
<p>You may ask what is Rolling Release ?</p>
<p>Rolling Release: This type of update means your software is always up to date. You get the latest features and improvements as soon as they come out. Arch Linux is a good example of this along with openSUSE (Tumbleweed); it’s like always having the newest version of your favorite app without waiting for a big update.</p>
<p>Long-Term Support (LTS): LTS versions are all about stability. They don’t change much over time, which means they’re reliable and safe to use for a long time. You get updates for several years, but you won’t get the latest features until a new version is released. Fedora, Debian and Mint are some of the popular LTS option, perfect for people who want a dependable system.</p>
<p>While both LTS and Rolling Relase have their shares of Pros and Cons, let’s just not get into it and save it for the later :)</p>
<p>Using a rolling release distro like Arch can provide a bleeding-edge experience, but it has a significant downside: the update system may break due to issues with version dependencies or conflicts between packages. To protect yourself from these potential problems, Timeshift can be a valuable tool.</p>
<p>Timeshift is a handy tool for Linux that helps you back up and restore your system. It works by taking snapshots, which are like pictures of your system at a certain point in time. You can set it to automatically take these snapshots regularly or do it manually whenever you want. The cool part is that after the first snapshot, it only saves the changes you make, so it doesn’t take up too much space. If something goes wrong after an update or change, you can easily go back to a previous snapshot and restore your system to how it was before. Timeshift has a simple interface, making it easy for anyone to use, even if you’re not very tech-savvy.</p>
<p>Timeshift can use different methods for creating backups, and two common ones are <strong>rsync</strong> and <strong>Btrfs</strong>.</p>
<ol>
<li>
<p><strong>Rsync:</strong> This is a file-copying tool that works by synchronizing files and directories between locations. When Timeshift uses rsync, it creates backups by copying files from your system to a backup location. It’s flexible and can work with any filesystem, but it doesn’t have built-in snapshot capabilities, meaning it can’t capture the exact state of the system at a specific moment.</p>
</li>
<li>
<p><strong>Btrfs:</strong> This is a modern filesystem that has built-in snapshot features. When Timeshift uses Btrfs, it can create snapshots almost instantly without needing to copy files. This means it captures the entire state of the system at that moment, making it very efficient and quick. Btrfs snapshots are also space-efficient because they only store changes after the first snapshot.</p>
</li>
</ol>
<p>Quick Note:<br>
Btrfs (pronounced “butter FS”) is a modern filesystem for Linux that’s a bit smarter than older ones like ext4. One of its cool features is “copy-on-write,” which means that when you make changes to a file, Btrfs doesn’t just overwrite the old version. Instead, it keeps the original file intact and writes the new version somewhere else. This way, if something goes wrong, you can easily go back to the old version. Btrfs also lets you create snapshots, which are like time-stamped backups of your system, and it has built-in data protection features. Overall, it’s more flexible and efficient than ext4, making it a great choice for users who want to manage their data better!</p>
<p>In summary, rsync is great for copying files but lacks snapshot features, while Btrfs offers efficient snapshots that capture the entire system state quickly and easily.</p>
<p>Since I use Arch Linux (btw), it was absolutely crucial for me to roll with the Btrfs filesystem and Timeshift. I mean, this is the OS I tinker with daily, and let’s be honest—I’ve messed around with so many configurations that I needed a safety net! Timeshift is my trusty sidekick, ready to save my progress and back up my system whenever I get a little too adventurous. I’ve got it all set up to capture snapshots regularly, especially when I’m diving into updates or playing with Pacman and Yay. For those who don’t know, Pacman is the package manager for Arch, and Yay is like Pacman’s cool cousin who makes installing stuff from the Arch User Repository (AUR) a breeze. So, with Timeshift, I can experiment to my heart’s content, knowing I can always hit the rewind button if things go sideways!</p>
<p>ALRIGHT THE CHAPTER 1 ENDS HERE LETS GET INTO THE REAL ISSUE</p>
<h2 id="chapter-2-rising-issue">CHAPTER 2: Rising Issue</h2>
<p>So, it turns out I recently switched my Desktop Environment (DE) from GNOME to KDE Plasma because I was having a ton of scaling issues with GNOME. To make the switch, I ran the following commands:</p>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">sudo</span> pacman -S plasma-desktop gwenview plasma-nm plasma-pa spectacle
</code></pre>
<p>I might have missed a few packages while writing this blog, but this was the core of what I needed. After making the switch, I purged GNOME and decided it was time to create a Timeshift snapshot to save my progress!</p>
<p>But then came the plot twist: Timeshift’s graphical interface refused to cooperate and threw a gigantic error message right in my face. I won’t bother you with all the details, so here’s the shorter version:</p>
<pre class=" language-text"><code class="prism  language-text">Oct 16 22:42:27 arch systemd[2363]: app-timeshift\x2dgtk@0b1d345c4e2d49f6bf71a6ac183f2872.service: Main process exited, code=exited, status=127/n/a
Oct 16 22:42:27 arch timeshift-launcher[44142]: /usr/bin/timeshift-launcher: line 30: 44147 Segmentation fault      (core dumped) pkexec 
Oct 16 22:42:27 arch systemd[2363]: app-timeshift\x2dgtk@0b1d345c4e2d49f6bf71a6ac183f2872.service: Failed with result 'exit-code'.
Oct 16 22:42:27 arch timeshift-launcher[44211]: /usr/bin/timeshift-launcher: line 18: xhost: command not found
Oct 16 22:42:27 arch timeshift-launcher[44212]: /usr/bin/timeshift-launcher: line 19: xhost: command not found
</code></pre>
<p>This message indicated that I had somehow removed a package called <code>xhost</code>, so I reinstalled it by running:</p>
<pre class=" language-bash"><code class="prism  language-bash">yay -S xorg-xhost
</code></pre>
<p>Even after doing this, I still couldn’t access Timeshift with the GUI. So, I thought, “Let’s just use it from the command line!” I executed:</p>
<pre class=" language-bash"><code class="prism  language-bash">timeshift --check
</code></pre>
<p>(Oh, and just a quick note: I’ve set an alias that translates <code>timeshift</code> to <code>sudo timeshift</code> because I’m just too lazy to type <code>sudo</code> every single time!)</p>
<p>Things didn’t work out as planned, and when I checked the logs, I encountered this error:</p>
<pre class=" language-text"><code class="prism  language-text">** (process:61402): CRITICAL **: 22:47:10.436: gee_abstract_collection_get_size: assertion 'self != NULL' failed
</code></pre>
<p>This turned out to be the actual NULL pointer issue I mentioned earlier in the blog. It indicated that a library called <code>libgee</code> was causing the problem. I tried to fix it by running:</p>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">sudo</span> pacman -S libgee
</code></pre>
<p>Unfortunately, the issue still persisted. So, I decided to do a full system update, but that didn’t help either. I even reinstalled Timeshift multiple times and carefully checked all of its dependencies, updating them wherever necessary. But I guess it was just one of those unlucky days!</p>
<h2 id="chapter-3-climax">CHAPTER 3: Climax</h2>
<p>I started pasting my logs into Google ChatGPT Claude like a wild cat, desperately searching for a solution. I scoured several blogs and forums for help until I found my savior in this <a href="https://forums.linuxmint.com/viewtopic.php?t=279850">Linux Mint Forum</a>.</p>

<p>An answer from a user named gm10 caught my attention and pointed me to the real issue.</p>

<p>It suggested that I might have corrupted Timeshift’s config file, so I quickly checked the configuration by running:</p>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">cat</span> /etc/timeshift.json
</code></pre>
<p>Quick note: I have another alias here; the tool underlying <code>cat</code> is actually <code>bat</code>, but I just love cats, so I set the alias to use <code>bat</code>—lol!</p>
<p>Then came the revelation that opened my eyes:</p>
<pre class=" language-json"><code class="prism  language-json"><span class="token punctuation">{</span>
  <span class="token string">"backup_device_uuid"</span><span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string">"parent_device_uuid"</span><span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string">"do_first_run"</span><span class="token punctuation">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
  <span class="token string">"btrfs_mode"</span><span class="token punctuation">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
  <span class="token string">"include_btrfs_home_for_backup"</span><span class="token punctuation">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
  <span class="token string">"include_btrfs_home_for_restore"</span><span class="token punctuation">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
  <span class="token string">"stop_cron_emails"</span><span class="token punctuation">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
  <span class="token string">"schedule_monthly"</span><span class="token punctuation">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
  <span class="token string">"schedule_weekly"</span><span class="token punctuation">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
  <span class="token string">"schedule_daily"</span><span class="token punctuation">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
  <span class="token string">"schedule_hourly"</span><span class="token punctuation">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
  <span class="token string">"schedule_boot"</span><span class="token punctuation">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span>
  <span class="token string">"count_monthly"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">"count_weekly"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">"count_daily"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">"count_hourly"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">"count_boot"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">"date_format"</span><span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string">"exclude"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"exclude-apps"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
<p>If you look closely, the key named <code>backup_device_uuid</code> should contain the UUID of the partition that holds all of my Btrfs subvolumes, but it was NULL—i.e., the FREAKY DANGLING POINTER!</p>
<h2 id="chapter-4-falling-action">CHAPTER 4: Falling Action</h2>
<p>Once I figured out the real issue, I locked into action mode and quickly obtained my disk’s UUID by running:</p>
<pre class=" language-bash"><code class="prism  language-bash">lsblk -o NAME,UUID
</code></pre>
<p>In my case, it was <code>nvme0n1p8</code>. So, I fired up <code>nvim</code> (because I use LazyVim) to edit <code>timeshift.json</code> and made the following change:</p>
<pre class=" language-json"><code class="prism  language-json"><span class="token string">"backup_device_uuid"</span><span class="token punctuation">:</span> <span class="token string">"the real one was here"</span><span class="token punctuation">,</span>
</code></pre>
<p>After that, I hit <code>&lt;Esc&gt;</code> and <code>ZZ</code> to save the changes. Then came the moment of truth: I ran <code>timeshift --check</code>, and kaboom! It worked perfectly without a single issue. Phew! :)</p>
<p>Immediately after that, I scheduled a few monthly, weekly, and daily snapshots to ensure I had regular backups. I also created an on-demand snapshot just to be extra safe. Now I could tinker with my system without worrying about losing my progress!</p>
<h2 id="chapter-5-resolution">CHAPTER 5: Resolution</h2>
<p>Even after fixing the NULL pointer issue and getting Timeshift to work from the command line, I’m still not entirely sure how it happened. The GUI launcher remains broken, but luckily, no major damage was done. It was definitely a close call, and I feel like I dodged a bullet this time. Timeshift is working fine from the terminal, and that’s good enough for now—though this experience reminded me of just how risky rolling releases can be.</p>
<p>For now, I’ve got my snapshots scheduled, and I’m back to tweaking my system (hopefully without breaking anything again). Thanks for sticking around, and I’ll see you in the next post—unless, of course, I “cat” my way into another issue! (lol)</p>
<p>– Bye for now!</p>
<p>Be Khurafati 😼 ;)</p>   `,
    tags: ["linux", "debugging", "arch", "timeshift"],
    author: "Nirav",
  },
};
