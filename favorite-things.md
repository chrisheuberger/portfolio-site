---
title: Chris Heuberger / Favorite Things
layout: default
permalink: /favorite-things
jump-to-top: true
---

<div class="main-content main-content_favorite-things">

  <div class="page-title-group">
    <h1 class="page-title">Favorite Things</h1>
    <p class="page-title-note">Note: this list is woefully incomplete and just for fun. I keep it as a record for myself and anyone interested.</p>
  </div>

  <div class="favorite-things-block">

  <div class="filter-container">
    <h6 class="filter-header">Filter Categories</h6>
    <ul class="filter-ul">
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="art & illustration" data-value="Art & Illustration" /><span>Art & Illustration</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="coding" data-value="Coding" /><span>Coding</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="culture" data-value="Culture" /><span>Culture</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="design" data-value="Design" /><span>Design</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="history" data-value="History" /><span>History</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="math" data-value="Math" /><span>Math</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="movies & tv" data-value="Movies & TV" /><span>Movies & TV</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="music" data-value="Music" /><span>Music</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="philosophy" data-value="Philosophy" /><span>Philosophy</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="psychology" data-value="Psychology" /><span>Psychology</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="science" data-value="Science" /><span>Science</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="social impact" data-value="Social Impact" /><span>Social Impact</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="tomfoolery" data-value="Tomfoolery" /><span>Tomfoolery</span>
        </label>
      </li>
      <li class="checkbox-btn">
        <label>
          <input class="filter" type="checkbox" name="writing & lists" data-value="Writing & Lists" /><span>Writing & Lists</span>
        </label>
      </li>
    </ul>
  </div>

  {% assign a_start = "<a class='text-link' href='" %}
  {% assign a_middle = "' target='_blank' rel='noopener'>" %}
  {% assign a_end = "</a>" %}

  <div class="results-container">
    <div id="search-results">
      <div class="list">

        {% for favorite in site.data.data.favorite_things %}
          <div class="favorite-item-block">
            <span class="text">{{ favorite.text | replace: "[[", a_start | replace: "[+]", a_middle | replace: "]]", a_end }}</span>
            <span class="category">{{ favorite.category }}</span>
          </div>
        {% endfor %}

      </div>
    </div>
  </div>

  </div>

</div>