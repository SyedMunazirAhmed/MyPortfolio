package dev.portfolio.server.config;

import dev.portfolio.server.project.Project;
import dev.portfolio.server.project.ProjectRepository;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/** Inserts a few sample projects on startup if the table is empty. Replace with your own. */
@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedProjects(ProjectRepository repository) {
        return args -> {
            if (repository.count() > 0) {
                return;
            }
            repository.saveAll(List.of(
                    new Project(
                            "Portfolio Website",
                            "This site: a React frontend talking to a Spring Boot REST API.",
                            List.of("React", "Spring Boot", "Full-stack"),
                            "https://github.com/your-username/portfolio",
                            null),
                    new Project(
                            "Task Tracker",
                            "A kanban-style task board with drag and drop and persistent storage.",
                            List.of("React", "JavaScript"),
                            "https://github.com/your-username/task-tracker",
                            null),
                    new Project(
                            "Library API",
                            "A REST API for managing books and members, with JWT authentication.",
                            List.of("Spring Boot", "Java", "SQL"),
                            "https://github.com/your-username/library-api",
                            null)));
        };
    }
}
