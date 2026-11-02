package dev.portfolio.server.project;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.ArrayList;
import java.util.List;

/** JPA entity: one row in the "projects" table. */
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 1000)
    private String description;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "project_tags")
    @Column(name = "tag")
    private List<String> tags = new ArrayList<>();

    private String repoUrl;

    private String liveUrl;

    protected Project() {
        // required by JPA
    }

    public Project(String title, String description, List<String> tags, String repoUrl, String liveUrl) {
        this.title = title;
        this.description = description;
        this.tags = new ArrayList<>(tags);
        this.repoUrl = repoUrl;
        this.liveUrl = liveUrl;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public List<String> getTags() {
        return tags;
    }

    public String getRepoUrl() {
        return repoUrl;
    }

    public String getLiveUrl() {
        return liveUrl;
    }
}
